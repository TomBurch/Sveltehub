import{I as B,K as Z,L as N,S as F,i as P,s as V,c as M,m as q,t as x,k as j,p as L,e as k,b as w,v as O,d as h,f as E,g as y,J as D,n as C,a as z,l as I,w as A,M as ee,q as te,N as J,j as K,o as U,h as H}from"./main.476f9336.js";import se from"./Layout.b80169da.js";import{I as re}from"./InertiaLink.b100139a.js";function ne(...o){const t=typeof o[0]=="string"?o[0]:null,n=(typeof o[0]=="string"?o[1]:o[0])||{},e=t?B.Inertia.restore(t):null;let s=n,l=null,f=null,b=r=>r;const _=Z({...e?e.data:n,isDirty:!1,errors:e?e.errors:{},hasErrors:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,processing:!1,setStore(r,i){_.update(c=>Object.assign({},c,typeof r=="string"?{[r]:i}:r))},data(){return Object.keys(n).reduce((r,i)=>(r[i]=this[i],r),{})},transform(r){return b=r,this},defaults(r,i){return typeof r>"u"?(s=Object.assign(s,this.data()),this):(s=Object.assign(s,i?{[r]:i}:r),this)},reset(...r){return r.length===0?this.setStore(s):this.setStore(Object.keys(s).filter(i=>r.includes(i)).reduce((i,c)=>(i[c]=s[c],i),{})),this},setError(r,i){return this.setStore("errors",{...this.errors,...i?{[r]:i}:r}),this},clearErrors(...r){return this.setStore("errors",Object.keys(this.errors).reduce((i,c)=>({...i,...r.length>0&&!r.includes(c)?{[c]:this.errors[c]}:{}}),{})),this},submit(r,i,c={}){const $=b(this.data()),d={...c,onCancelToken:g=>{if(l=g,c.onCancelToken)return c.onCancelToken(g)},onBefore:g=>{if(this.setStore("wasSuccessful",!1),this.setStore("recentlySuccessful",!1),clearTimeout(f),c.onBefore)return c.onBefore(g)},onStart:g=>{if(this.setStore("processing",!0),c.onStart)return c.onStart(g)},onProgress:g=>{if(this.setStore("progress",g),c.onProgress)return c.onProgress(g)},onSuccess:async g=>{if(this.setStore("processing",!1),this.setStore("progress",null),this.clearErrors(),this.setStore("wasSuccessful",!0),this.setStore("recentlySuccessful",!0),f=setTimeout(()=>this.setStore("recentlySuccessful",!1),2e3),c.onSuccess)return c.onSuccess(g)},onError:g=>{if(this.setStore("processing",!1),this.setStore("progress",null),this.clearErrors().setError(g),c.onError)return c.onError(g)},onCancel:()=>{if(this.setStore("processing",!1),this.setStore("progress",null),c.onCancel)return c.onCancel()},onFinish:()=>{if(this.setStore("processing",!1),this.setStore("progress",null),l=null,c.onFinish)return c.onFinish()}};r==="delete"?B.Inertia.delete(i,{...d,data:$}):B.Inertia[r](i,$,d)},get(r,i){this.submit("get",r,i)},post(r,i){this.submit("post",r,i)},put(r,i){this.submit("put",r,i)},patch(r,i){this.submit("patch",r,i)},delete(r,i){this.submit("delete",r,i)},cancel(){l&&l.cancel()}});return _.subscribe(r=>{r.isDirty===N(r.data(),s)&&r.setStore("isDirty",!r.isDirty);const i=Object.keys(r.errors).length>0;r.hasErrors!==i&&r.setStore("hasErrors",!r.hasErrors),t&&B.Inertia.remember({data:r.data(),errors:r.errors},t)}),_}var X=(o,t)=>function(){return t||(0,o[Object.keys(o)[0]])((t={exports:{}}).exports,t),t.exports},le=X({"node_modules/clsx/dist/clsx.js"(o,t){function n(e){var s,l,f="";if(typeof e=="string"||typeof e=="number")f+=e;else if(typeof e=="object")if(Array.isArray(e))for(s=0;s<e.length;s++)e[s]&&(l=n(e[s]))&&(f&&(f+=" "),f+=l);else for(s in e)e[s]&&(f&&(f+=" "),f+=s);return f}t.exports=function(){for(var e=0,s,l,f="";e<arguments.length;)(s=arguments[e++])&&(l=n(s))&&(f&&(f+=" "),f+=l);return f}}}),oe=X({"src/index.js"(o,t){var n=le(),e=b=>typeof b=="boolean",s=b=>e(b)?String(b):b,l=(b,_)=>Object.entries(b).every(([r,i])=>_[r]===i),f=(b={})=>(_={})=>{const{base:r,defaultVariants:i={},variants:c={},compoundVariants:$=[]}=b,d=Object.entries(_).reduce((p,[m,S])=>(S===void 0||(p[m]=S),p),{}),g={...i,...d};return n([r,Object.keys(c).map(p=>c[p][s(_[p])||i[p]]),$.reduce((p,{classes:m,...S})=>(l(S,g)&&p.push(m),p),[])])};t.exports=f}});const ie=oe();function ae(o){let t,n,e,s,l=o[0].display_name+"",f,b,_,r,i,c=o[0].user.username+"",$,d,g,p=o[0].summary+"",m;return{c(){t=k("div"),n=w(),e=k("div"),s=k("h5"),f=O(l),_=w(),r=k("p"),i=O("By "),$=O(c),d=w(),g=k("p"),m=O(p),h(t,"class","h-32 rounded-lg bg-center bg-[url('/images/arcomm-placeholder.jpg')]"),h(s,"class",b="truncate text-md font-semibold tracking-tight "+o[1]({mode:o[0].mode,type:"header"})),h(r,"class","truncate text-xs font-normal text-gray-100"),h(g,"class","truncate text-xs font-normal text-gray-100"),h(e,"class","space-y-0.5")},m(S,a){E(S,t,a),E(S,n,a),E(S,e,a),y(e,s),y(s,f),y(e,_),y(e,r),y(r,i),y(r,$),y(e,d),y(e,g),y(g,m)},p(S,a){a&1&&l!==(l=S[0].display_name+"")&&D(f,l),a&1&&b!==(b="truncate text-md font-semibold tracking-tight "+S[1]({mode:S[0].mode,type:"header"}))&&h(s,"class",b),a&1&&c!==(c=S[0].user.username+"")&&D($,c),a&1&&p!==(p=S[0].summary+"")&&D(m,p)},d(S){S&&C(t),S&&C(n),S&&C(e)}}}function ce(o){let t,n;return t=new re({props:{href:"/hub/missions/"+o[0].id,class:"space-y-1 h-60 p-3 rounded-lg shadow-md border-b-8 bg-gray-800 hover:bg-gray-700 "+o[1]({mode:o[0].mode,type:"border"}),$$slots:{default:[ae]},$$scope:{ctx:o}}}),{c(){M(t.$$.fragment)},m(e,s){q(t,e,s),n=!0},p(e,[s]){const l={};s&1&&(l.href="/hub/missions/"+e[0].id),s&1&&(l.class="space-y-1 h-60 p-3 rounded-lg shadow-md border-b-8 bg-gray-800 hover:bg-gray-700 "+e[1]({mode:e[0].mode,type:"border"})),s&5&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ue(o,t,n){let{mission:e}=t;const s=ie({base:"",compoundVariants:[{mode:"coop",type:"border",classes:"border-b-sky-500"},{mode:"tvt",type:"border",classes:"border-b-rose-500"},{mode:"ade",type:"border",classes:"border-b-emerald-500"},{mode:"coop",type:"header",classes:"text-sky-500"},{mode:"tvt",type:"header",classes:"text-rose-500"},{mode:"ade",type:"header",classes:"text-emerald-500"}]});return o.$$set=l=>{"mission"in l&&n(0,e=l.mission)},[e,s]}class Y extends F{constructor(t){super(),P(this,t,ue,ce,V,{mission:0})}}function fe(o){let t,n=o[0].progress.percentage+"",e,s,l;return{c(){t=k("progress"),e=O(n),s=O("%"),h(t,"class","mb-3"),t.value=l=o[0].progress.percentage,h(t,"max","100")},m(f,b){E(f,t,b),y(t,e),y(t,s)},p(f,b){b&1&&n!==(n=f[0].progress.percentage+"")&&D(e,n),b&1&&l!==(l=f[0].progress.percentage)&&(t.value=l)},d(f){f&&C(t)}}}function de(o){let t;return{c(){t=k("p"),t.innerHTML='<span class="font-semibold">Click to upload</span> or drag and drop',h(t,"class","mb-2 text-sm text-gray-500 dark:text-gray-400")},m(n,e){E(n,t,e)},p:A,d(n){n&&C(t)}}}function ge(o){let t,n,e,s,l,f,b,_,r,i,c;function $(p,m){return p[0].progress?fe:de}let d=$(o),g=d(o);return{c(){t=k("div"),n=k("label"),e=k("div"),s=z("svg"),l=z("path"),f=w(),g.c(),b=w(),_=k("form"),r=k("input"),h(l,"stroke-linecap","round"),h(l,"stroke-linejoin","round"),h(l,"stroke-width","2"),h(l,"d","M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"),h(s,"aria-hidden","true"),h(s,"class","mb-3 w-10 h-10 text-gray-400"),h(s,"fill","none"),h(s,"stroke","currentColor"),h(s,"viewBox","0 0 24 24"),h(s,"xmlns","http://www.w3.org/2000/svg"),h(e,"class","flex flex-col justify-center items-center pt-5 pb-6"),h(r,"id","dropzone-file"),h(r,"type","file"),h(r,"class","hidden"),h(n,"for","dropzone-file"),h(n,"class","flex flex-col justify-center items-center w-full h-60 rounded-lg border-2 border-dashed cursor-pointer bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"),h(t,"class","flex justify-center items-center w-full")},m(p,m){E(p,t,m),y(t,n),y(n,e),y(e,s),y(s,l),y(e,f),g.m(e,null),y(n,b),y(n,_),y(_,r),i||(c=[I(r,"input",o[4]),I(r,"change",o[2]),I(t,"drop",o[3]),I(t,"dragover",me)],i=!0)},p(p,[m]){d===(d=$(p))&&g?g.p(p,m):(g.d(1),g=d(p),g&&(g.c(),g.m(e,null)))},i:A,o:A,d(p){p&&C(t),g.d(),i=!1,ee(c)}}}function me(o){o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="copy")}function pe(o,t,n){let e,s=ne({mission:null});te(o,s,_=>n(0,e=_));function l(){e.post("/hub/missions")}function f(_){_.preventDefault(),_.stopPropagation(),J(s,e.mission=_.dataTransfer.files[0],e),l()}return[e,s,l,f,_=>J(s,e.mission=_.target.files[0],e)]}class he extends F{constructor(t){super(),P(this,t,pe,ge,V,{})}}function R(o,t,n){const e=o.slice();return e[2]=t[n],e}function W(o,t,n){const e=o.slice();return e[2]=t[n],e}function G(o){let t,n;return t=new Y({props:{mission:o[2]}}),{c(){M(t.$$.fragment)},m(e,s){q(t,e,s),n=!0},p(e,s){const l={};s&2&&(l.mission=e[2]),t.$set(l)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Q(o){let t,n;return t=new Y({props:{mission:o[2]}}),{c(){M(t.$$.fragment)},m(e,s){q(t,e,s),n=!0},p(e,s){const l={};s&1&&(l.mission=e[2]),t.$set(l)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function be(o){let t,n,e,s,l,f,b,_,r,i,c;l=new he({});let $=o[1],d=[];for(let a=0;a<$.length;a+=1)d[a]=G(W(o,$,a));const g=a=>j(d[a],1,1,()=>{d[a]=null});let p=o[0],m=[];for(let a=0;a<p.length;a+=1)m[a]=Q(R(o,p,a));const S=a=>j(m[a],1,1,()=>{m[a]=null});return{c(){t=k("div"),n=k("h3"),n.textContent="My missions",e=w(),s=k("div"),M(l.$$.fragment),f=w();for(let a=0;a<d.length;a+=1)d[a].c();b=w(),_=k("h3"),_.textContent="All missions",r=w(),i=k("div");for(let a=0;a<m.length;a+=1)m[a].c();h(n,"class","uppercase text-center font-bold leading-tight text-xl mb-2 text-blue-600"),h(s,"class","col-span-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"),h(_,"class","uppercase text-center font-bold leading-tight text-xl my-2 text-blue-600"),h(i,"class","col-span-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"),h(t,"class","grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6")},m(a,v){E(a,t,v),y(t,n),y(t,e),y(t,s),q(l,s,null),y(s,f);for(let u=0;u<d.length;u+=1)d[u].m(s,null);y(t,b),y(t,_),y(t,r),y(t,i);for(let u=0;u<m.length;u+=1)m[u].m(i,null);c=!0},p(a,[v]){if(v&2){$=a[1];let u;for(u=0;u<$.length;u+=1){const T=W(a,$,u);d[u]?(d[u].p(T,v),x(d[u],1)):(d[u]=G(T),d[u].c(),x(d[u],1),d[u].m(s,null))}for(H(),u=$.length;u<d.length;u+=1)g(u);K()}if(v&1){p=a[0];let u;for(u=0;u<p.length;u+=1){const T=R(a,p,u);m[u]?(m[u].p(T,v),x(m[u],1)):(m[u]=Q(T),m[u].c(),x(m[u],1),m[u].m(i,null))}for(H(),u=p.length;u<m.length;u+=1)S(u);K()}},i(a){if(!c){x(l.$$.fragment,a);for(let v=0;v<$.length;v+=1)x(d[v]);for(let v=0;v<p.length;v+=1)x(m[v]);c=!0}},o(a){j(l.$$.fragment,a),d=d.filter(Boolean);for(let v=0;v<d.length;v+=1)j(d[v]);m=m.filter(Boolean);for(let v=0;v<m.length;v+=1)j(m[v]);c=!1},d(a){a&&C(t),L(l),U(d,a),U(m,a)}}}const $e=se;function _e(o,t,n){let{missions:e}=t,{my_missions:s}=t;return o.$$set=l=>{"missions"in l&&n(0,e=l.missions),"my_missions"in l&&n(1,s=l.my_missions)},[e,s]}class ke extends F{constructor(t){super(),P(this,t,_e,be,V,{missions:0,my_missions:1})}}export{ke as default,$e as layout};
