import{I,K as Y,L as Z,S as D,i as F,s as V,c as M,m as q,t as k,k as j,p as L,e as x,b as w,v as O,d as b,f as C,g as _,J as T,n as E,a as P,l as z,w as A,M as N,q as ee,N as te,j as J,o as K,h as U}from"./main.4be10cfe.js";import se from"./Layout.146725e3.js";import{I as re}from"./InertiaLink.fab62536.js";function ne(...o){const t=typeof o[0]=="string"?o[0]:null,n=(typeof o[0]=="string"?o[1]:o[0])||{},e=t?I.Inertia.restore(t):null;let s=n,l=null,f=null,p=r=>r;const v=Y({...e?e.data:n,isDirty:!1,errors:e?e.errors:{},hasErrors:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,processing:!1,setStore(r,i){v.update(c=>Object.assign({},c,typeof r=="string"?{[r]:i}:r))},data(){return Object.keys(n).reduce((r,i)=>(r[i]=this[i],r),{})},transform(r){return p=r,this},defaults(r,i){return typeof r>"u"?(s=Object.assign(s,this.data()),this):(s=Object.assign(s,i?{[r]:i}:r),this)},reset(...r){return r.length===0?this.setStore(s):this.setStore(Object.keys(s).filter(i=>r.includes(i)).reduce((i,c)=>(i[c]=s[c],i),{})),this},setError(r,i){return this.setStore("errors",{...this.errors,...i?{[r]:i}:r}),this},clearErrors(...r){return this.setStore("errors",Object.keys(this.errors).reduce((i,c)=>({...i,...r.length>0&&!r.includes(c)?{[c]:this.errors[c]}:{}}),{})),this},submit(r,i,c={}){const $=p(this.data()),d={...c,onCancelToken:g=>{if(l=g,c.onCancelToken)return c.onCancelToken(g)},onBefore:g=>{if(this.setStore("wasSuccessful",!1),this.setStore("recentlySuccessful",!1),clearTimeout(f),c.onBefore)return c.onBefore(g)},onStart:g=>{if(this.setStore("processing",!0),c.onStart)return c.onStart(g)},onProgress:g=>{if(this.setStore("progress",g),c.onProgress)return c.onProgress(g)},onSuccess:async g=>{if(this.setStore("processing",!1),this.setStore("progress",null),this.clearErrors(),this.setStore("wasSuccessful",!0),this.setStore("recentlySuccessful",!0),f=setTimeout(()=>this.setStore("recentlySuccessful",!1),2e3),c.onSuccess)return c.onSuccess(g)},onError:g=>{if(this.setStore("processing",!1),this.setStore("progress",null),this.clearErrors().setError(g),c.onError)return c.onError(g)},onCancel:()=>{if(this.setStore("processing",!1),this.setStore("progress",null),c.onCancel)return c.onCancel()},onFinish:()=>{if(this.setStore("processing",!1),this.setStore("progress",null),l=null,c.onFinish)return c.onFinish()}};r==="delete"?I.Inertia.delete(i,{...d,data:$}):I.Inertia[r](i,$,d)},get(r,i){this.submit("get",r,i)},post(r,i){this.submit("post",r,i)},put(r,i){this.submit("put",r,i)},patch(r,i){this.submit("patch",r,i)},delete(r,i){this.submit("delete",r,i)},cancel(){l&&l.cancel()}});return v.subscribe(r=>{r.isDirty===Z(r.data(),s)&&r.setStore("isDirty",!r.isDirty);const i=Object.keys(r.errors).length>0;r.hasErrors!==i&&r.setStore("hasErrors",!r.hasErrors),t&&I.Inertia.remember({data:r.data(),errors:r.errors},t)}),v}var Q=(o,t)=>function(){return t||(0,o[Object.keys(o)[0]])((t={exports:{}}).exports,t),t.exports},le=Q({"node_modules/clsx/dist/clsx.js"(o,t){function n(e){var s,l,f="";if(typeof e=="string"||typeof e=="number")f+=e;else if(typeof e=="object")if(Array.isArray(e))for(s=0;s<e.length;s++)e[s]&&(l=n(e[s]))&&(f&&(f+=" "),f+=l);else for(s in e)e[s]&&(f&&(f+=" "),f+=s);return f}t.exports=function(){for(var e=0,s,l,f="";e<arguments.length;)(s=arguments[e++])&&(l=n(s))&&(f&&(f+=" "),f+=l);return f}}}),oe=Q({"src/index.js"(o,t){var n=le(),e=p=>typeof p=="boolean",s=p=>e(p)?String(p):p,l=(p,v)=>Object.entries(p).every(([r,i])=>v[r]===i),f=(p={})=>(v={})=>{const{base:r,defaultVariants:i={},variants:c={},compoundVariants:$=[]}=p,d=Object.entries(v).reduce((h,[m,S])=>(S===void 0||(h[m]=S),h),{}),g={...i,...d};return n([r,Object.keys(c).map(h=>c[h][s(v[h])||i[h]]),$.reduce((h,{classes:m,...S})=>(l(S,g)&&h.push(m),h),[])])};t.exports=f}});const ie=oe();function ae(o){let t,n,e,s,l=o[0].display_name+"",f,p,v,r,i,c=o[0].user.username+"",$,d,g,h=o[0].summary+"",m;return{c(){t=x("div"),n=w(),e=x("div"),s=x("h5"),f=O(l),v=w(),r=x("p"),i=O("By "),$=O(c),d=w(),g=x("p"),m=O(h),b(t,"class","h-32 rounded-lg bg-center bg-[url('/images/arcomm-placeholder.jpg')]"),b(s,"class",p="truncate text-md font-semibold "+o[1]({mode:o[0].mode,type:"header"})+" tracking-tight"),b(r,"class","truncate text-xs font-normal text-gray-100"),b(g,"class","truncate text-xs font-normal text-gray-100"),b(e,"class","space-y-0.5")},m(S,a){C(S,t,a),C(S,n,a),C(S,e,a),_(e,s),_(s,f),_(e,v),_(e,r),_(r,i),_(r,$),_(e,d),_(e,g),_(g,m)},p(S,a){a&1&&l!==(l=S[0].display_name+"")&&T(f,l),a&1&&p!==(p="truncate text-md font-semibold "+S[1]({mode:S[0].mode,type:"header"})+" tracking-tight")&&b(s,"class",p),a&1&&c!==(c=S[0].user.username+"")&&T($,c),a&1&&h!==(h=S[0].summary+"")&&T(m,h)},d(S){S&&E(t),S&&E(n),S&&E(e)}}}function ce(o){let t,n;return t=new re({props:{href:"/hub/missions/"+o[0].id,class:"space-y-1 h-60 p-3 rounded-lg shadow-md border-b-8 "+o[1]({mode:o[0].mode,type:"border"})+" bg-gray-800 hover:bg-gray-700",$$slots:{default:[ae]},$$scope:{ctx:o}}}),{c(){M(t.$$.fragment)},m(e,s){q(t,e,s),n=!0},p(e,[s]){const l={};s&1&&(l.href="/hub/missions/"+e[0].id),s&1&&(l.class="space-y-1 h-60 p-3 rounded-lg shadow-md border-b-8 "+e[1]({mode:e[0].mode,type:"border"})+" bg-gray-800 hover:bg-gray-700"),s&5&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ue(o,t,n){let{mission:e}=t;const s=ie({base:"",compoundVariants:[{mode:"coop",type:"border",classes:"border-b-sky-500"},{mode:"tvt",type:"border",classes:"border-b-rose-500"},{mode:"ade",type:"border",classes:"border-b-emerald-500"},{mode:"coop",type:"header",classes:"text-sky-500"},{mode:"tvt",type:"header",classes:"text-rose-500"},{mode:"ade",type:"header",classes:"text-emerald-500"}]});return o.$$set=l=>{"mission"in l&&n(0,e=l.mission)},[e,s]}class X extends D{constructor(t){super(),F(this,t,ue,ce,V,{mission:0})}}function fe(o){let t,n=o[0].progress.percentage+"",e,s,l;return{c(){t=x("progress"),e=O(n),s=O("%"),b(t,"class","mb-3"),t.value=l=o[0].progress.percentage,b(t,"max","100")},m(f,p){C(f,t,p),_(t,e),_(t,s)},p(f,p){p&1&&n!==(n=f[0].progress.percentage+"")&&T(e,n),p&1&&l!==(l=f[0].progress.percentage)&&(t.value=l)},d(f){f&&E(t)}}}function de(o){let t;return{c(){t=x("p"),t.innerHTML='<span class="font-semibold">Click to upload</span> or drag and drop',b(t,"class","mb-2 text-sm text-gray-500 dark:text-gray-400")},m(n,e){C(n,t,e)},p:A,d(n){n&&E(t)}}}function ge(o){let t,n,e,s,l,f,p,v,r,i,c;function $(h,m){return h[0].progress?fe:de}let d=$(o),g=d(o);return{c(){t=x("div"),n=x("label"),e=x("div"),s=P("svg"),l=P("path"),f=w(),g.c(),p=w(),v=x("form"),r=x("input"),b(l,"stroke-linecap","round"),b(l,"stroke-linejoin","round"),b(l,"stroke-width","2"),b(l,"d","M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"),b(s,"aria-hidden","true"),b(s,"class","mb-3 w-10 h-10 text-gray-400"),b(s,"fill","none"),b(s,"stroke","currentColor"),b(s,"viewBox","0 0 24 24"),b(s,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","flex flex-col justify-center items-center pt-5 pb-6"),b(r,"id","dropzone-file"),b(r,"type","file"),b(r,"class","hidden"),b(n,"for","dropzone-file"),b(n,"class","flex flex-col justify-center items-center w-full h-60 rounded-lg border-2 border-dashed cursor-pointer bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"),b(t,"class","flex justify-center items-center w-full")},m(h,m){C(h,t,m),_(t,n),_(n,e),_(e,s),_(s,l),_(e,f),g.m(e,null),_(n,p),_(n,v),_(v,r),i||(c=[z(r,"input",o[3]),z(r,"change",o[2])],i=!0)},p(h,[m]){d===(d=$(h))&&g?g.p(h,m):(g.d(1),g=d(h),g&&(g.c(),g.m(e,null)))},i:A,o:A,d(h){h&&E(t),g.d(),i=!1,N(c)}}}function me(o,t,n){let e,s=ne({mission:null});ee(o,s,p=>n(0,e=p));function l(){e.post("/hub/missions")}return[e,s,l,p=>te(s,e.mission=p.target.files[0],e)]}class he extends D{constructor(t){super(),F(this,t,me,ge,V,{})}}function H(o,t,n){const e=o.slice();return e[2]=t[n],e}function R(o,t,n){const e=o.slice();return e[2]=t[n],e}function W(o){let t,n;return t=new X({props:{mission:o[2]}}),{c(){M(t.$$.fragment)},m(e,s){q(t,e,s),n=!0},p(e,s){const l={};s&2&&(l.mission=e[2]),t.$set(l)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function G(o){let t,n;return t=new X({props:{mission:o[2]}}),{c(){M(t.$$.fragment)},m(e,s){q(t,e,s),n=!0},p(e,s){const l={};s&1&&(l.mission=e[2]),t.$set(l)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function pe(o){let t,n,e,s,l,f,p,v,r,i,c;l=new he({});let $=o[1],d=[];for(let a=0;a<$.length;a+=1)d[a]=W(R(o,$,a));const g=a=>j(d[a],1,1,()=>{d[a]=null});let h=o[0],m=[];for(let a=0;a<h.length;a+=1)m[a]=G(H(o,h,a));const S=a=>j(m[a],1,1,()=>{m[a]=null});return{c(){t=x("div"),n=x("h3"),n.textContent="My missions",e=w(),s=x("div"),M(l.$$.fragment),f=w();for(let a=0;a<d.length;a+=1)d[a].c();p=w(),v=x("h3"),v.textContent="All missions",r=w(),i=x("div");for(let a=0;a<m.length;a+=1)m[a].c();b(n,"class","uppercase text-center font-bold leading-tight text-2xl mb-2 text-blue-600"),b(s,"class","col-span-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"),b(v,"class","uppercase text-center font-bold leading-tight text-2xl my-2 text-blue-600"),b(i,"class","col-span-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"),b(t,"class","grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6")},m(a,y){C(a,t,y),_(t,n),_(t,e),_(t,s),q(l,s,null),_(s,f);for(let u=0;u<d.length;u+=1)d[u].m(s,null);_(t,p),_(t,v),_(t,r),_(t,i);for(let u=0;u<m.length;u+=1)m[u].m(i,null);c=!0},p(a,[y]){if(y&2){$=a[1];let u;for(u=0;u<$.length;u+=1){const B=R(a,$,u);d[u]?(d[u].p(B,y),k(d[u],1)):(d[u]=W(B),d[u].c(),k(d[u],1),d[u].m(s,null))}for(U(),u=$.length;u<d.length;u+=1)g(u);J()}if(y&1){h=a[0];let u;for(u=0;u<h.length;u+=1){const B=H(a,h,u);m[u]?(m[u].p(B,y),k(m[u],1)):(m[u]=G(B),m[u].c(),k(m[u],1),m[u].m(i,null))}for(U(),u=h.length;u<m.length;u+=1)S(u);J()}},i(a){if(!c){k(l.$$.fragment,a);for(let y=0;y<$.length;y+=1)k(d[y]);for(let y=0;y<h.length;y+=1)k(m[y]);c=!0}},o(a){j(l.$$.fragment,a),d=d.filter(Boolean);for(let y=0;y<d.length;y+=1)j(d[y]);m=m.filter(Boolean);for(let y=0;y<m.length;y+=1)j(m[y]);c=!1},d(a){a&&E(t),L(l),K(d,a),K(m,a)}}}const Se=se;function be(o,t,n){let{missions:e}=t,{my_missions:s}=t;return o.$$set=l=>{"missions"in l&&n(0,e=l.missions),"my_missions"in l&&n(1,s=l.my_missions)},[e,s]}class $e extends D{constructor(t){super(),F(this,t,be,pe,V,{missions:0,my_missions:1})}}export{$e as default,Se as layout};