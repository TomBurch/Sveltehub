import{S as E,i as F,s as G,c as j,m as q,t as p,a as _,d as B,e as d,f as C,H as x,C as m,J,h as b,D as u,K as L,j as y,E as K,F as z,G as A}from"./main.707d28a3.js";import{I as M,L as N}from"./Layout.282d764f.js";function O(a){let s,n,t,e,o,r=a[0].display_name+"",i,l,f,H,$=a[0].user.username+"",k,I,h,v=a[0].summary+"",w;return{c(){s=d("img"),t=C(),e=d("div"),o=d("h5"),i=x(r),l=C(),f=d("p"),H=x("By "),k=x($),I=C(),h=d("p"),w=x(v),m(s,"class","h-[50%] rounded-lg"),J(s.src,n="/images/arcomm-placeholder.jpg")||m(s,"src",n),m(s,"alt",""),m(o,"class","truncate text-md font-semibold text-white tracking-tight"),m(f,"class","truncate text-xs font-normal text-gray-400"),m(h,"class","pb-3 truncate text-xs font-normal text-gray-400"),m(e,"class","pt-5")},m(c,g){b(c,s,g),b(c,t,g),b(c,e,g),u(e,o),u(o,i),u(e,l),u(e,f),u(f,H),u(f,k),u(e,I),u(e,h),u(h,w)},p(c,g){g&1&&r!==(r=c[0].display_name+"")&&L(i,r),g&1&&$!==($=c[0].user.username+"")&&L(k,$),g&1&&v!==(v=c[0].summary+"")&&L(w,v)},d(c){c&&y(s),c&&y(t),c&&y(e)}}}function P(a){let s,n;return s=new M({props:{href:"/missions/"+a[0].id,class:"h-52 p-3 rounded-lg border border-gray-700 shadow-md bg-gray-800",$$slots:{default:[O]},$$scope:{ctx:a}}}),{c(){j(s.$$.fragment)},m(t,e){q(s,t,e),n=!0},p(t,[e]){const o={};e&1&&(o.href="/missions/"+t[0].id),e&3&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){_(s.$$.fragment,t),n=!1},d(t){B(s,t)}}}function Q(a,s,n){let{mission:t}=s;return a.$$set=e=>{"mission"in e&&n(0,t=e.mission)},[t]}class R extends E{constructor(s){super(),F(this,s,Q,P,G,{mission:0})}}function S(a,s,n){const t=a.slice();return t[1]=s[n],t}function D(a){let s,n;return s=new R({props:{mission:a[1]}}),{c(){j(s.$$.fragment)},m(t,e){q(s,t,e),n=!0},p(t,e){const o={};e&1&&(o.mission=t[1]),s.$set(o)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){_(s.$$.fragment,t),n=!1},d(t){B(s,t)}}}function T(a){let s,n,t=a[0],e=[];for(let r=0;r<t.length;r+=1)e[r]=D(S(a,t,r));const o=r=>_(e[r],1,1,()=>{e[r]=null});return{c(){s=d("div");for(let r=0;r<e.length;r+=1)e[r].c();m(s,"class","grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6")},m(r,i){b(r,s,i);for(let l=0;l<e.length;l+=1)e[l].m(s,null);n=!0},p(r,i){if(i&1){t=r[0];let l;for(l=0;l<t.length;l+=1){const f=S(r,t,l);e[l]?(e[l].p(f,i),p(e[l],1)):(e[l]=D(f),e[l].c(),p(e[l],1),e[l].m(s,null))}for(K(),l=t.length;l<e.length;l+=1)o(l);z()}},i(r){if(!n){for(let i=0;i<t.length;i+=1)p(e[i]);n=!0}},o(r){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)_(e[i]);n=!1},d(r){r&&y(s),A(e,r)}}}function U(a){let s,n;return s=new N({props:{$$slots:{default:[T]},$$scope:{ctx:a}}}),{c(){j(s.$$.fragment)},m(t,e){q(s,t,e),n=!0},p(t,[e]){const o={};e&17&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){_(s.$$.fragment,t),n=!1},d(t){B(s,t)}}}function V(a,s,n){let{missions:t}=s;return a.$$set=e=>{"missions"in e&&n(0,t=e.missions)},[t]}class Y extends E{constructor(s){super(),F(this,s,V,U,G,{missions:0})}}export{Y as default};
