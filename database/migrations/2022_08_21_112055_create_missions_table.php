<?php

use App\Models\User;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('missions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(User::class)->cascadeOnDelete();
            $table->string('display_name');
            $table->string('mode');
            $table->integer('verified_by')->nullable()->foreignIdFor(User::class)->cascadeOnDelete();
            $table->string('cloud_pbo')->nullable();
            $table->longText('summary');
            $table->longText('briefings');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('missions');
    }
};
