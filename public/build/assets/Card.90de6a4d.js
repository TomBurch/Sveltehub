import{ac as fe,S as U,i as W,s as Q,B as X,g as S,t as b,x as G,n as k,y as J,o as H,e as P,f as _,a6 as x,c as M,m as N,K as ce,a5 as ue,p as F,r as O,h as p,u as I,H as $,I as de,P as _e,ad as me,D as pe,d as A,E as he,F as ge,G as be,V as ye,ae as ve,l as ke,M as we,C as ee,w as te}from"./main.c66c1973.js";var ie=(r,e)=>function(){return e||(0,r[Object.keys(r)[0]])((e={exports:{}}).exports,e),e.exports},Ce=ie({"node_modules/clsx/dist/clsx.js"(r,e){function l(t){var n,s,f="";if(typeof t=="string"||typeof t=="number")f+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(s=l(t[n]))&&(f&&(f+=" "),f+=s);else for(n in t)t[n]&&(f&&(f+=" "),f+=n);return f}e.exports=function(){for(var t=0,n,s,f="";t<arguments.length;)(n=arguments[t++])&&(s=l(n))&&(f&&(f+=" "),f+=s);return f}}}),Pe=ie({"src/index.js"(r,e){var l=Ce(),t=i=>typeof i=="boolean",n=i=>t(i)?String(i):i,s=(i,c)=>Object.entries(i).every(([a,o])=>c[a]===o),f=(i={})=>(c={})=>{const{base:a,defaultVariants:o={},variants:u={},compoundVariants:h=[]}=i,L=Object.entries(c).reduce((g,[j,y])=>(y===void 0||(g[j]=y),g),{}),D={...o,...L};return l([a,Object.keys(u).map(g=>u[g][n(c[g])||o[g]]),h.reduce((g,{classes:j,...y})=>(s(y,D)&&g.push(j),g),[])])};e.exports=f}});const Se=Pe();function He(r,{delay:e=0,duration:l=400,easing:t=fe}={}){const n=+getComputedStyle(r).opacity;return{delay:e,duration:l,easing:t,css:s=>`opacity: ${s*n}`}}function le(r){let e,l,t,n,s;const f=[Le,ze],i=[];function c(a,o){return o&1&&(l=null),typeof a[0]=="string"?0:(l==null&&(l=!!["function","object"].includes(typeof a[0])),l?1:-1)}return~(t=c(r,-1))&&(n=i[t]=f[t](r)),{c(){e=P("div"),n&&n.c(),_(e,"class",De)},m(a,o){S(a,e,o),~t&&i[t].m(e,null),s=!0},p(a,o){let u=t;t=c(a,o),t===u?~t&&i[t].p(a,o):(n&&(G(),k(i[u],1,1,()=>{i[u]=null}),J()),~t?(n=i[t],n?n.p(a,o):(n=i[t]=f[t](a),n.c()),b(n,1),n.m(e,null)):n=null)},i(a){s||(b(n),s=!0)},o(a){k(n),s=!1},d(a){a&&H(e),~t&&i[t].d()}}}function ze(r){let e,l,t;const n=[r[1]];var s=r[0];function f(i){let c={};for(let a=0;a<n.length;a+=1)c=de(c,n[a]);return{props:c}}return s&&(e=x(s,f())),{c(){e&&M(e.$$.fragment),l=X()},m(i,c){e&&N(e,i,c),S(i,l,c),t=!0},p(i,c){const a=c&2?ce(n,[ue(i[1])]):{};if(s!==(s=i[0])){if(e){G();const o=e;k(o.$$.fragment,1,0,()=>{F(o,1)}),J()}s?(e=x(s,f()),M(e.$$.fragment),b(e.$$.fragment,1),N(e,l.parentNode,l)):e=null}else s&&e.$set(a)},i(i){t||(e&&b(e.$$.fragment,i),t=!0)},o(i){e&&k(e.$$.fragment,i),t=!1},d(i){i&&H(l),e&&F(e,i)}}}function Le(r){let e,l;return{c(){e=P("div"),l=O(r[0])},m(t,n){S(t,e,n),p(e,l)},p(t,n){n&1&&I(l,t[0])},i:$,o:$,d(t){t&&H(e)}}}function je(r){let e,l,t=r[0]&&le(r);return{c(){t&&t.c(),e=X()},m(n,s){t&&t.m(n,s),S(n,e,s),l=!0},p(n,[s]){n[0]?t?(t.p(n,s),s&1&&b(t,1)):(t=le(n),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(G(),k(t,1,1,()=>{t=null}),J())},i(n){l||(b(t),l=!0)},o(n){k(t),l=!1},d(n){t&&t.d(n),n&&H(e)}}}const De="svelte-lazy-placeholder";function Oe(r,e,l){let{placeholder:t=null}=e,{placeholderProps:n=null}=e;return r.$$set=s=>{"placeholder"in s&&l(0,t=s.placeholder),"placeholderProps"in s&&l(1,n=s.placeholderProps)},[t,n]}class ae extends U{constructor(e){super(),W(this,e,Oe,je,Q,{placeholder:0,placeholderProps:1})}}function Be(r){let e,l;return e=new ae({props:{placeholder:r[1],placeholderProps:r[2]}}),{c(){M(e.$$.fragment)},m(t,n){N(e,t,n),l=!0},p(t,n){const s={};n&2&&(s.placeholder=t[1]),n&4&&(s.placeholderProps=t[2]),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Ee(r){let e,l,t,n,s;const f=r[15].default,i=pe(f,r,r[14],null),c=i||Re();let a=!r[3]&&r[1]&&ne(r);return{c(){e=P("div"),c&&c.c(),t=A(),a&&a.c(),n=X(),_(e,"class",Te),_(e,"style",r[5])},m(o,u){S(o,e,u),c&&c.m(e,null),S(o,t,u),a&&a.m(o,u),S(o,n,u),s=!0},p(o,u){r=o,i&&i.p&&(!s||u&16384)&&he(i,f,r,r[14],s?be(f,r[14],u,null):ge(r[14]),null),(!s||u&32)&&_(e,"style",r[5]),!r[3]&&r[1]?a?(a.p(r,u),u&10&&b(a,1)):(a=ne(r),a.c(),b(a,1),a.m(n.parentNode,n)):a&&(G(),k(a,1,1,()=>{a=null}),J())},i(o){s||(b(c,o),l||ye(()=>{l=ve(e,He,r[0]||{}),l.start()}),b(a),s=!0)},o(o){k(c,o),k(a),s=!1},d(o){o&&H(e),c&&c.d(o),o&&H(t),a&&a.d(o),o&&H(n)}}}function Re(r){let e;return{c(){e=O("Lazy load content")},m(l,t){S(l,e,t)},d(l){l&&H(e)}}}function ne(r){let e,l;return e=new ae({props:{placeholder:r[1],placeholderProps:r[2]}}),{c(){M(e.$$.fragment)},m(t,n){N(e,t,n),l=!0},p(t,n){const s={};n&2&&(s.placeholder=t[1]),n&4&&(s.placeholderProps=t[2]),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function qe(r){let e,l,t,n,s,f;const i=[Ee,Be],c=[];function a(o,u){return o[4]?0:o[1]?1:-1}return~(l=a(r))&&(t=c[l]=i[l](r)),{c(){e=P("div"),t&&t.c(),_(e,"class",r[6]),_e(e,"height",r[7])},m(o,u){S(o,e,u),~l&&c[l].m(e,null),n=!0,s||(f=me(r[8].call(null,e)),s=!0)},p(o,[u]){let h=l;l=a(o),l===h?~l&&c[l].p(o,u):(t&&(G(),k(c[h],1,1,()=>{c[h]=null}),J()),~l?(t=c[l],t?t.p(o,u):(t=c[l]=i[l](o),t.c()),b(t,1),t.m(e,null)):t=null)},i(o){n||(b(t),n=!0)},o(o){k(t),n=!1},d(o){o&&H(e),~l&&c[l].d(),s=!1,f()}}}const Te="svelte-lazy-content";function Ve(r){document.addEventListener("scroll",r,!0),window.addEventListener("resize",r)}function re(r){document.removeEventListener("scroll",r,!0),window.removeEventListener("resize",r)}function Ie(r){return r&&r.target&&r.target.getBoundingClientRect?r.target.getBoundingClientRect().bottom:window.innerHeight}function Ae(r,e,l){let t,n,s,f=null,i=0;l||(l={});const c=function(){i=l.leading===!1?0:new Date,f=null,s=r.apply(t,n),f||(t=n=null)};return function(a){const o=new Date;!i&&l.leading===!1&&(i=o);const u=e-(o-i);return t=this,n=arguments,u<=0||u>e?(f&&(clearTimeout(f),f=null),i=o,s=r.apply(t,n),f||(t=n=null)):!f&&l.trailing!==!1&&(f=setTimeout(c,u)),s}}function Me(r,e,l){let t,{$$slots:n={},$$scope:s}=e,{height:f=0}=e,{offset:i=150}=e,{fadeOption:c={delay:0,duration:400}}=e,{resetHeightDelay:a=0}=e,{onload:o=null}=e,{placeholder:u=null}=e,{placeholderProps:h=null}=e,{class:L=""}=e;const D="svelte-lazy"+(L?" "+L:""),g=T();let j=!1,y=!0;function q(d){K(d);const v=Ae(R=>{const w=d.getBoundingClientRect().top,V=Ie(R)+i;w<=V&&(l(4,j=!0),B(d),o&&o(d),re(v))},200);return Ve(v),setTimeout(()=>{v()}),{destroy:()=>{re(v)}}}function T(){return typeof f=="number"?f+"px":f}function K(d){f&&(d.style.height=T())}function B(d){setTimeout(()=>{E(d)||(d.style.height="auto")},a)}function E(d){const v=d.querySelector("img");return v?v.complete?v.naturalHeight===0:(l(3,y=!1),d.addEventListener("load",()=>{l(3,y=!0),d.style.height="auto"},{capture:!0,once:!0}),d.addEventListener("error",()=>{l(3,y=!0)},{capture:!0,once:!0}),!0):!1}return r.$$set=d=>{"height"in d&&l(9,f=d.height),"offset"in d&&l(10,i=d.offset),"fadeOption"in d&&l(0,c=d.fadeOption),"resetHeightDelay"in d&&l(11,a=d.resetHeightDelay),"onload"in d&&l(12,o=d.onload),"placeholder"in d&&l(1,u=d.placeholder),"placeholderProps"in d&&l(2,h=d.placeholderProps),"class"in d&&l(13,L=d.class),"$$scope"in d&&l(14,s=d.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&l(5,t=y?"":"display: none")},[c,u,h,y,j,t,D,g,q,f,i,a,o,L,s,n]}class Ne extends U{constructor(e){super(),W(this,e,Me,qe,Q,{height:9,offset:10,fadeOption:0,resetHeightDelay:11,onload:12,placeholder:1,placeholderProps:2,class:13})}}function Fe(r){let e,l;return{c(){e=P("img"),_(e,"class","absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"),ee(e.src,l=r[0].thumbnail?r[0].thumbnail:oe)||_(e,"src",l),_(e,"loading","lazy"),_(e,"width","384"),_(e,"height","384"),_(e,"alt","thumbnail")},m(t,n){S(t,e,n)},p(t,n){n&1&&!ee(e.src,l=t[0].thumbnail?t[0].thumbnail:oe)&&_(e,"src",l)},d(t){t&&H(e)}}}function se(r){let e,l;return{c(){e=te("svg"),l=te("path"),_(l,"fill-rule","evenodd"),_(l,"d","M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"),_(l,"clip-rule","evenodd"),_(e,"class","h-4 w-5"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 20 20"),_(e,"fill","orange")},m(t,n){S(t,e,n),p(e,l)},d(t){t&&H(e)}}}function Ge(r){let e,l,t,n,s,f,i=r[0].display_name+"",c,a,o,u,h,L,D=r[0].user.username+"",g,j,y=(r[0].map?r[0].map.display_name:"")+"",q,T,K,B,E=r[0].summary+"",d,v,R,w,V,Y;t=new Ne({props:{height:384,$$slots:{default:[Fe]},$$scope:{ctx:r}}});let C=!r[0].verified_by&&se();return{c(){e=P("a"),l=P("div"),M(t.$$.fragment),n=A(),s=P("div"),f=P("h5"),c=O(i),o=A(),u=P("div"),h=P("p"),L=O("By "),g=O(D),j=O(" on "),q=O(y),T=A(),C&&C.c(),K=A(),B=P("p"),d=O(E),_(l,"class","relative h-32 w-full overflow-hidden rounded-lg"),_(f,"class",a="text-md truncate font-semibold tracking-tight "+r[1]({mode:r[0].mode,type:"header"})),_(h,"class","flex-1 truncate text-xs font-normal text-gray-100"),_(u,"class","flex"),_(B,"class","text-xs font-normal text-gray-100 line-clamp-2"),_(s,"class","space-y-0.5"),_(e,"href",v="/hub/missions/"+r[0].id),_(e,"class",R="h-60 min-w-0 flex-grow cursor-pointer space-y-1 rounded-lg border-b-8 bg-gray-800 p-3 shadow-md hover:bg-gray-700 "+r[1]({mode:r[0].mode,type:"border"}))},m(m,z){S(m,e,z),p(e,l),N(t,l,null),p(e,n),p(e,s),p(s,f),p(f,c),p(s,o),p(s,u),p(u,h),p(h,L),p(h,g),p(h,j),p(h,q),p(u,T),C&&C.m(u,null),p(s,K),p(s,B),p(B,d),w=!0,V||(Y=ke(e,"click",r[2]),V=!0)},p(m,[z]){const Z={};z&33&&(Z.$$scope={dirty:z,ctx:m}),t.$set(Z),(!w||z&1)&&i!==(i=m[0].display_name+"")&&I(c,i),(!w||z&1&&a!==(a="text-md truncate font-semibold tracking-tight "+m[1]({mode:m[0].mode,type:"header"})))&&_(f,"class",a),(!w||z&1)&&D!==(D=m[0].user.username+"")&&I(g,D),(!w||z&1)&&y!==(y=(m[0].map?m[0].map.display_name:"")+"")&&I(q,y),m[0].verified_by?C&&(C.d(1),C=null):C||(C=se(),C.c(),C.m(u,null)),(!w||z&1)&&E!==(E=m[0].summary+"")&&I(d,E),(!w||z&1&&v!==(v="/hub/missions/"+m[0].id))&&_(e,"href",v),(!w||z&1&&R!==(R="h-60 min-w-0 flex-grow cursor-pointer space-y-1 rounded-lg border-b-8 bg-gray-800 p-3 shadow-md hover:bg-gray-700 "+m[1]({mode:m[0].mode,type:"border"})))&&_(e,"class",R)},i(m){w||(b(t.$$.fragment,m),w=!0)},o(m){k(t.$$.fragment,m),w=!1},d(m){m&&H(e),F(t),C&&C.d(),V=!1,Y()}}}let oe="/images/arcomm-placeholder.jpg";function Je(r,e,l){let{mission:t}=e,{shouldRedirect:n=!0}=e;const s=we(),f=Se({base:"",compoundVariants:[{mode:"coop",type:"border",classes:"border-b-sky-500"},{mode:"tvt",type:"border",classes:"border-b-rose-500"},{mode:"ade",type:"border",classes:"border-b-emerald-500"},{mode:"coop",type:"header",classes:"text-sky-500"},{mode:"tvt",type:"header",classes:"text-rose-500"},{mode:"ade",type:"header",classes:"text-emerald-500"}]});function i(c){n||(c.preventDefault(),s("cardClicked",{mission_id:t.id}))}return r.$$set=c=>{"mission"in c&&l(0,t=c.mission),"shouldRedirect"in c&&l(3,n=c.shouldRedirect)},[t,f,i,n]}class Ue extends U{constructor(e){super(),W(this,e,Je,Ge,Q,{mission:0,shouldRedirect:3})}}export{Ue as C};