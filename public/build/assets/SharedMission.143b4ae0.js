import{S as ie,i as ae,s as se,b as W,a as X,e as m,c as G,d as M,g as L,m as J,h as c,k as Y,t as K,n as Q,o as B,p as U,q as R,f,r as P,u as C,H as _e,a4 as qe,aa as Ee,C as ge,a6 as de,y as He,B as Te,x as Ce,P as he}from"./main.b2309256.js";import ze from"./LayoutPublic.52196b0e.js";import{S as Pe}from"./Subnav.5b6fc19a.js";import{P as Ae}from"./photoswipe.c37be292.js";import"./InertiaLink.1c5cedba.js";function me(i,t,e){const n=i.slice();return n[5]=t[e],n}function pe(i,t,e){const n=i.slice();return n[8]=t[e][0],n[9]=t[e][1],n}function ve(i){let t,e,n=i[8]+"",a,s,l,_=i[9]+"";return{c(){t=m("div"),e=m("h5"),a=P(n),s=M(),l=m("p"),f(e,"class","text-bold pt-8 text-center text-3xl tracking-wide text-gray-200"),f(l,"class","text-gray-200")},m(r,u){L(r,t,u),c(t,e),c(e,a),c(t,s),c(t,l),l.innerHTML=_},p(r,u){u&1&&n!==(n=r[8]+"")&&C(a,n),u&1&&_!==(_=r[9]+"")&&(l.innerHTML=_)},d(r){r&&B(t)}}}function be(i){let t,e,n,a=Object.entries(i[5].content.sections),s=[];for(let l=0;l<a.length;l+=1)s[l]=ve(pe(i,a,l));return{c(){t=m("div");for(let l=0;l<s.length;l+=1)s[l].c();e=M(),f(t,"class",n=i[1]==i[5]?"":"hidden")},m(l,_){L(l,t,_);for(let r=0;r<s.length;r+=1)s[r].m(t,null);c(t,e)},p(l,_){if(_&1){a=Object.entries(l[5].content.sections);let r;for(r=0;r<a.length;r+=1){const u=pe(l,a,r);s[r]?s[r].p(u,_):(s[r]=ve(u),s[r].c(),s[r].m(t,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=a.length}_&3&&n!==(n=l[1]==l[5]?"":"hidden")&&f(t,"class",n)},d(l){l&&B(t),R(s,l)}}}function De(i){let t,e,n,a,s,l;function _(g){i[3](g)}function r(g){i[4](g)}let u={};i[0]!==void 0&&(u.navigation=i[0]),i[1]!==void 0&&(u.selected=i[1]),e=new Pe({props:u}),W.push(()=>X(e,"navigation",_)),W.push(()=>X(e,"selected",r));let v=i[0],h=[];for(let g=0;g<v.length;g+=1)h[g]=be(me(i,v,g));return{c(){t=m("div"),G(e.$$.fragment),s=M();for(let g=0;g<h.length;g+=1)h[g].c()},m(g,S){L(g,t,S),J(e,t,null),c(t,s);for(let j=0;j<h.length;j+=1)h[j].m(t,null);l=!0},p(g,[S]){const j={};if(!n&&S&1&&(n=!0,j.navigation=g[0],Y(()=>n=!1)),!a&&S&2&&(a=!0,j.selected=g[1],Y(()=>a=!1)),e.$set(j),S&3){v=g[0];let b;for(b=0;b<v.length;b+=1){const H=me(g,v,b);h[b]?h[b].p(H,S):(h[b]=be(H),h[b].c(),h[b].m(t,null))}for(;b<h.length;b+=1)h[b].d(1);h.length=v.length}},i(g){l||(K(e.$$.fragment,g),l=!0)},o(g){Q(e.$$.fragment,g),l=!1},d(g){g&&B(t),U(e),R(h,g)}}}function Ie(i,t,e){let{mission:n}=t,a=[];n.briefing_models.forEach(function(r){let u={name:r.name,content:r,show:!0};a.push(u)});let s=a[0];function l(r){a=r,e(0,a)}function _(r){s=r,e(1,s)}return i.$$set=r=>{"mission"in r&&e(2,n=r.mission)},[a,s,n,l,_]}class Ne extends ie{constructor(t){super(),ae(this,t,Ie,De,se,{mission:2})}}function we(i,t,e){const n=i.slice();return n[1]=t[e][0],n[2]=t[e][1],n}function $e(i){let t,e,n,a,s,l,_,r;return{c(){t=m("div"),e=m("a"),n=m("img"),r=M(),f(n,"class","h-full w-full object-contain"),ge(n.src,a=i[2].url)||f(n,"src",a),f(n,"alt",""),f(e,"class","h-full w-full"),f(e,"id","image"),f(e,"href",s=i[2].url),f(e,"data-pswp-width",l=i[2].width),f(e,"data-pswp-height",_=i[2].height),f(e,"target","_blank"),f(t,"class","relative h-60 space-y-1 bg-gray-800 p-3 shadow-md hover:bg-gray-700")},m(u,v){L(u,t,v),c(t,e),c(e,n),c(t,r)},p(u,v){v&1&&!ge(n.src,a=u[2].url)&&f(n,"src",a),v&1&&s!==(s=u[2].url)&&f(e,"href",s),v&1&&l!==(l=u[2].width)&&f(e,"data-pswp-width",l),v&1&&_!==(_=u[2].height)&&f(e,"data-pswp-height",_)},d(u){u&&B(t)}}}function Re(i){let t,e=Object.entries(i[0].media),n=[];for(let a=0;a<e.length;a+=1)n[a]=$e(we(i,e,a));return{c(){t=m("div");for(let a=0;a<n.length;a+=1)n[a].c();f(t,"id","gallery"),f(t,"class","grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5")},m(a,s){L(a,t,s);for(let l=0;l<n.length;l+=1)n[l].m(t,null)},p(a,[s]){if(s&1){e=Object.entries(a[0].media);let l;for(l=0;l<e.length;l+=1){const _=we(a,e,l);n[l]?n[l].p(_,s):(n[l]=$e(_),n[l].c(),n[l].m(t,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=e.length}},i:_e,o:_e,d(a){a&&B(t),R(n,a)}}}function Ve(i,t,e){let{mission:n}=t;return qe(()=>{new Ae({gallery:"#gallery",children:"#image",pswpModule:()=>Ee(()=>import("./photoswipe.esm.720e8656.js"),[])}).init()}),i.$$set=a=>{"mission"in a&&e(0,n=a.mission)},[n]}class Fe extends ie{constructor(t){super(),ae(this,t,Ve,Re,se,{mission:0})}}function ke(i,t,e){const n=i.slice();return n[6]=t[e],n}function ye(i,t,e){const n=i.slice();return n[9]=t[e][0],n[10]=t[e][1],n}function Me(i){let t;return{c(){t=m("div"),f(t,"class","fixed top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat"),he(t,"background-image","url('"+i[10].url+"')")},m(e,n){L(e,t,n)},p(e,n){n&1&&he(t,"background-image","url('"+e[10].url+"')")},d(e){e&&B(t)}}}function Se(i){let t,e=i[9]==i[3]&&Me(i);return{c(){e&&e.c(),t=Te()},m(n,a){e&&e.m(n,a),L(n,t,a)},p(n,a){n[9]==n[3]?e?e.p(n,a):(e=Me(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(n){e&&e.d(n),n&&B(t)}}}function je(i){let t,e=i[6].tag.name+"",n,a;return{c(){t=m("span"),n=P(e),a=M(),f(t,"class","mr-2 rounded bg-blue-200 px-2.5 py-0.5 text-xs font-semibold text-blue-800")},m(s,l){L(s,t,l),c(t,n),c(t,a)},p(s,l){l&1&&e!==(e=s[6].tag.name+"")&&C(n,e)},d(s){s&&B(t)}}}function Oe(i){let t,e,n=i[0].maintainer.username+"",a;return{c(){t=m("p"),e=P("Maintained by "),a=P(n),f(t,"class","truncate text-sm font-bold")},m(s,l){L(s,t,l),c(t,e),c(t,a)},p(s,l){l&1&&n!==(n=s[0].maintainer.username+"")&&C(a,n)},d(s){s&&B(t)}}}function Ge(i){let t,e,n,a,s,l,_,r=i[0].display_name+"",u,v,h,g,S=i[0].user.username+"",j,b,H=i[0].map.display_name+"",Z,oe,x,V,F=i[0].summary+"",ee,re,z,q,te,ne,ce,I,p,E,A=Object.entries(i[0].media),w=[];for(let o=0;o<A.length;o+=1)w[o]=Se(ye(i,A,o));let D=i[0].tags,$=[];for(let o=0;o<D.length;o+=1)$[o]=je(ke(i,D,o));let k=i[0].maintainer&&Oe(i);function Le(o){i[4](o)}function Be(o){i[5](o)}let le={};i[1]!==void 0&&(le.navigation=i[1]),i[2]!==void 0&&(le.selected=i[2]),q=new Pe({props:le}),W.push(()=>X(q,"navigation",Le)),W.push(()=>X(q,"selected",Be));var T=i[2].content;function ue(o){return{props:{mission:o[0]}}}return T&&(p=de(T,ue(i))),{c(){t=m("div"),e=m("div");for(let o=0;o<w.length;o+=1)w[o].c();n=M(),a=m("div");for(let o=0;o<$.length;o+=1)$[o].c();s=M(),l=m("div"),_=m("h5"),u=P(r),v=M(),h=m("p"),g=P("By "),j=P(S),b=P(" on "),Z=P(H),oe=M(),k&&k.c(),x=M(),V=m("p"),ee=P(F),re=M(),z=m("div"),G(q.$$.fragment),ce=M(),I=m("div"),p&&G(p.$$.fragment),f(a,"class","pb-1"),f(_,"class","truncate text-3xl tracking-tight text-white"),f(h,"class","truncate text-sm font-bold"),f(V,"class","text-break pt-2 text-sm"),f(l,"class","pb-2 text-center text-gray-300"),f(I,"class","my-5 lg:mx-20"),f(z,"class","pt-3"),f(e,"class","mx-auto min-h-screen-no-nav border border-gray-700 bg-gray-800 p-3 shadow-md lg:w-4/5"),f(t,"class","m-10")},m(o,y){L(o,t,y),c(t,e);for(let O=0;O<w.length;O+=1)w[O].m(e,null);c(e,n),c(e,a);for(let O=0;O<$.length;O+=1)$[O].m(a,null);c(e,s),c(e,l),c(l,_),c(_,u),c(l,v),c(l,h),c(h,g),c(h,j),c(h,b),c(h,Z),c(l,oe),k&&k.m(l,null),c(l,x),c(l,V),c(V,ee),c(e,re),c(e,z),J(q,z,null),c(z,ce),c(z,I),p&&J(p,I,null),E=!0},p(o,[y]){if(y&9){A=Object.entries(o[0].media);let d;for(d=0;d<A.length;d+=1){const N=ye(o,A,d);w[d]?w[d].p(N,y):(w[d]=Se(N),w[d].c(),w[d].m(e,n))}for(;d<w.length;d+=1)w[d].d(1);w.length=A.length}if(y&1){D=o[0].tags;let d;for(d=0;d<D.length;d+=1){const N=ke(o,D,d);$[d]?$[d].p(N,y):($[d]=je(N),$[d].c(),$[d].m(a,null))}for(;d<$.length;d+=1)$[d].d(1);$.length=D.length}(!E||y&1)&&r!==(r=o[0].display_name+"")&&C(u,r),(!E||y&1)&&S!==(S=o[0].user.username+"")&&C(j,S),(!E||y&1)&&H!==(H=o[0].map.display_name+"")&&C(Z,H),o[0].maintainer?k?k.p(o,y):(k=Oe(o),k.c(),k.m(l,x)):k&&(k.d(1),k=null),(!E||y&1)&&F!==(F=o[0].summary+"")&&C(ee,F);const O={};!te&&y&2&&(te=!0,O.navigation=o[1],Y(()=>te=!1)),!ne&&y&4&&(ne=!0,O.selected=o[2],Y(()=>ne=!1)),q.$set(O);const fe={};if(y&1&&(fe.mission=o[0]),T!==(T=o[2].content)){if(p){Ce();const d=p;Q(d.$$.fragment,1,0,()=>{U(d,1)}),He()}T?(p=de(T,ue(o)),G(p.$$.fragment),K(p.$$.fragment,1),J(p,I,null)):p=null}else T&&p.$set(fe)},i(o){E||(K(q.$$.fragment,o),p&&K(p.$$.fragment,o),E=!0)},o(o){Q(q.$$.fragment,o),p&&Q(p.$$.fragment,o),E=!1},d(o){o&&B(t),R(w,o),R($,o),k&&k.d(),U(q),p&&U(p)}}}const Ye=ze;function Je(i,t,e){let n,{mission:a}=t,s=[{name:"Briefing",content:Ne,show:!0},{name:"Media",content:Fe,show:!0}],l=s[0];function _(u){s=u,e(1,s)}function r(u){l=u,e(2,l)}return i.$$set=u=>{"mission"in u&&e(0,a=u.mission)},i.$$.update=()=>{i.$$.dirty&1&&e(3,n=a.thumbnail?a.thumbnail.split("/")[2]:null)},[a,s,l,n,_,r]}class Ze extends ie{constructor(t){super(),ae(this,t,Je,Ge,se,{mission:0})}}export{Ze as default,Ye as layout};
