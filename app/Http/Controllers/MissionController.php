<?php

namespace App\Http\Controllers;

use App\Discord;
use App\Helpers\PBOMission\PBOMission;
use App\Models\Mission;
use App\Models\MissionRevision;

use \stdClass;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MissionController extends Controller
{
    public function index(Mission $mission)
    {
        $mission = Mission::with([
            'user:id,username',
        ])
        ->when(Gate::allows('test-mission', $mission), function ($query) {
            return $query->with([
                'comments:id,mission_id,user_id,text' => [
                    'user:id,username,avatar'
                ],
                'notes:id,mission_id,user_id,text' => [
                    'user:id,username,avatar'
                ]
            ]);
        })
        ->select('id', 'user_id', 'display_name', 'mode', 'summary', 'briefings')
        ->firstWhere('id', $mission->id)->toArray();
        
        return inertia('Hub/Missions/Mission', [
            'mission' => $mission,
        ]);
    }

    public function store(Request $request)
    {
        $mission = $this->uploadMission($request);

        $content = "**{$mission->user->username}** submitted a mission named **{$mission->display_name}**";
        Discord::missionUpdate($content, $mission, false, $mission->url());
    }

    public function update(Request $request, Mission $mission)
    {
        $mission = $this->uploadMission($request, $mission);

        $content = "**{$mission->user->username}** has updated **{$mission->display_name}**";
        Discord::missionUpdate($content, $mission, false, $mission->url());
    }

    public function uploadMission(Request $request, Mission $mission = null)
    {
        $isNewMission = is_null($mission);

        $missionFile = $request->file('mission');
        $fileName = $missionFile->getClientOriginalName();
        $user = auth()->user();

        // Temporarily store locally
        $path = $missionFile->storeAs(
            "missions/{$user->id}",
            $fileName
        );

        $contents = $this->getMissionContents($path);
        $details = $this->getDetailsFromFilePath($fileName);
        $briefings = $this->parseBriefings($contents['mission']['briefings']);
        
        if ($isNewMission) {
            
            $mission = Mission::create([
                'user_id' => $user->id,
                'display_name' => $contents['mission']['name'],
                'mode' => $details->mode,
                'summary' => $contents['mission']['description'],
                'briefings' => json_encode($briefings),
            ]);
        } else {
            $mission->display_name = $contents['mission']['name'];
            $mission->mode = $details->mode;
            $mission->summary = $contents['mission']['description'];
            $mission->briefings = json_encode($briefings);
            $mission->save();

            MissionRevision::create([
                'mission_id' => $mission->id,
                'user_id' => $user->id
            ]);
        }

        $revisions = $mission->revisions()->count();
        $exportedName = "{$details->filenameNoMap}_{$revisions}.{$details->map}.pbo";
        $pboPath = "missions/{$mission->user_id}/{$mission->id}/{$exportedName}";

        if (!$isNewMission) {
            Storage::cloud()->delete($mission->cloud_pbo);
        }

        Storage::cloud()->put(
            $pboPath,
            file_get_contents(storage_path("app/{$path}"))
        );

        $mission->cloud_pbo = $pboPath;
        $mission->save();

        return $mission;
    }

    public function download(Mission $mission)
    {
        $url = Storage::cloud()->temporaryUrl($mission->cloud_pbo, now()->addMinutes(10));
        return Inertia::location($url);
    }

    private function getMissionContents(string $path) 
    {
        $mission = new PBOMission(storage_path("app/{$path}"));
        $contents = $mission->export();

        if ($mission->error) {
            return new Exception($mission->errorReason);
        }

        return $contents;
    }

    private function getDetailsFromFilePath($path) 
    {
        $filename = pathinfo($path, PATHINFO_FILENAME);
        $map = pathinfo($filename, PATHINFO_EXTENSION);
        $filenameNoMap = pathinfo($filename, PATHINFO_FILENAME);
        $mode = strtolower(explode('_', $filenameNoMap)[1]);

        $details = new stdClass();
        $details->mode = $mode;
        $details->map = $map;
        $details->filenameNoMap = $filenameNoMap;

        return $details;
    }

    private function parseBriefings($briefings)
    {
        foreach ($briefings as $key => $briefing) {
            preg_match_all("~\"diary\", [\S\s]+?(?=\]\s*\]\s*;)~", $briefing[3], $diaryMatches);

            $dict = array();
            $diaries = $diaryMatches[0];
    
            foreach ($diaries as $diary) {
                preg_match_all("~\"([^\"]+)\"~", $diary, $quotes);
                $dict[$quotes[1][1]] = $quotes[1][2];
            }

            $briefings[$key][3] = (array)$dict;
        }

        return $briefings;
    }
}
