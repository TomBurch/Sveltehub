import{S as j,i as B,s as R,e as m,d as g,f,g as S,h as a,t as b,y as W,n as k,o as D,q as G,c as O,m as P,p as z,x as E,a0 as F}from"./main.c66c1973.js";import N from"./LayoutPublic.f6603886.js";import{C as U}from"./Card.90de6a4d.js";import"./Navbar.643f818f.js";import"./InertiaLink.563bfe02.js";function H(r,e,l){const n=r.slice();return n[2]=e[l],n}function L(r){let e,l;return e=new U({props:{shouldRedirect:!0,mission:r[2]}}),e.$on("cardClicked",r[1]),{c(){O(e.$$.fragment)},m(n,c){P(e,n,c),l=!0},p(n,c){const d={};c&1&&(d.mission=n[2]),e.$set(d)},i(n){l||(b(e.$$.fragment,n),l=!0)},o(n){k(e.$$.fragment,n),l=!1},d(n){z(e,n)}}}function V(r){let e,l,n,c,d,y,C,u,x,A,p,T,_,$,w,v,h=r[0],t=[];for(let s=0;s<h.length;s+=1)t[s]=L(H(r,h,s));const M=s=>k(t[s],1,1,()=>{t[s]=null});return{c(){e=m("div"),l=m("div"),l.innerHTML=`<div class="absolute bottom-0 flex w-screen justify-center bg-black py-12 text-center text-white"><div class="max-w-[60%]"><h4 class="mb-2 text-3xl font-thin">Arma-Centric Family of Gamers</h4> 
                <p class="text-xl font-extralight leading-9">We pride ourselves on the absence of ranks and strict military structure. Our players range from
                    former mil-sim players to beginners of Arma. Our goal is to take advantage of what Arma does best
                    and provide a great experience to all involved.<br/>Everyone is considered an equal member. No one
                    holds the power to command anyone else outside of gameplay.<br/></p></div></div>`,n=g(),c=m("div"),c.innerHTML=`<div class="grid max-h-[60%] max-w-[60%] grid-cols-2 grid-rows-2 gap-6 text-center text-white"><div><h4 class="mb-2 text-3xl font-thin">Team</h4> 
                <p class="text-xl font-extralight leading-9">There is no formal ranking. You will never have to call someone &#39;sir&#39; or adhere to unnecessary
                    requirements. Respect is earned, not given.</p></div> 
            <div><h4 class="mb-2 text-3xl font-thin">Gameplay</h4> 
                <p class="text-xl font-extralight leading-9">We enforce first person and non-magnified/thermal optics on our servers for added immersion and to
                    make the gameplay more challenging and fair.</p></div> 
            <div><h4 class="mb-2 text-3xl font-thin">Missions</h4> 
                <p class="text-xl font-extralight leading-9">Play a wide range of scenarios, both cooperative and adversarial. We don&#39;t limit ourselves to a
                    particular faction or style, each week is different in some way.</p></div> 
            <div><h4 class="mb-2 text-3xl font-thin">Discussion</h4> 
                <p class="text-xl font-extralight leading-9">Active discussions on our Discord &amp; TS. Voice your opinions and ideas, keep up-to-date with events
                    and collaborate with other members.</p></div></div>`,d=g(),y=m("div"),C=g(),u=m("div"),x=m("div"),x.innerHTML=`<h1 class="mb-3 text-7xl font-thin">ARC<b class="font-bold">HUB</b></h1> 
            <p class="text-3xl font-extralight leading-9">Built in-house, our community mission suite.</p>`,A=g(),p=m("div");for(let s=0;s<t.length;s+=1)t[s].c();T=g(),_=m("div"),$=g(),w=m("div"),f(l,"class","h-screen-no-nav-margin bg-blue-700"),f(c,"class","flex h-screen items-center justify-center bg-red-700"),f(y,"class","flex h-screen bg-white"),f(x,"class","mb-10"),f(p,"class","col-span-full grid max-w-[55%] grid-cols-3 gap-5"),f(u,"class","flex h-screen flex-col items-center justify-center bg-red-700 text-center text-white"),f(_,"class","flex h-screen bg-black"),f(w,"class","flex h-screen bg-blue-700"),f(e,"class","size-full")},m(s,o){S(s,e,o),a(e,l),a(e,n),a(e,c),a(e,d),a(e,y),a(e,C),a(e,u),a(u,x),a(u,A),a(u,p);for(let i=0;i<t.length;i+=1)t[i].m(p,null);a(e,T),a(e,_),a(e,$),a(e,w),v=!0},p(s,[o]){if(o&1){h=s[0];let i;for(i=0;i<h.length;i+=1){const q=H(s,h,i);t[i]?(t[i].p(q,o),b(t[i],1)):(t[i]=L(q),t[i].c(),b(t[i],1),t[i].m(p,null))}for(E(),i=h.length;i<t.length;i+=1)M(i);W()}},i(s){if(!v){for(let o=0;o<h.length;o+=1)b(t[o]);v=!0}},o(s){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)k(t[o]);v=!1},d(s){s&&D(e),G(t,s)}}}const Z=N;function Y(r,e,l){let{missions:n}=e;function c(d){F.call(this,r,d)}return r.$$set=d=>{"missions"in d&&l(0,n=d.missions)},[n,c]}class ee extends j{constructor(e){super(),B(this,e,Y,V,R,{missions:0})}}export{ee as default,Z as layout};
