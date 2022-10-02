import{S as de,i as me,s as he,e as g,a as se,b as A,d as s,f as L,g as h,l as ge,h as P,k as $,j as Q,t as _,n as j,o as ae,q as $e,r as be,c as E,m as F,p as G,w as N,v as R,x as ve,y as ke,z as xe,A as ye}from"./main.8a204864.js";import{I as U}from"./InertiaLink.0149040a.js";function ie(n,e,l){const t=n.slice();return t[4]=e[l],t}function ce(n,e,l){const t=n.slice();return t[4]=e[l],t}function we(n){let e;return{c(){e=g("a"),e.textContent="Login",s(e,"href","/auth/redirect"),s(e,"class","text-md rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white")},m(l,t){L(l,e,t)},i:N,o:N,d(l){l&&j(e)}}}function Me(n){let e,l;return e=new U({props:{href:"/hub",class:"text-md rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white",$$slots:{default:[Le]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(t,o){F(e,t,o),l=!0},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Le(n){let e;return{c(){e=R("Hub")},m(l,t){L(l,e,t)},d(l){l&&j(e)}}}function je(n){let e=n[4].name+"",l;return{c(){l=R(e)},m(t,o){L(t,l,o)},p:N,d(t){t&&j(l)}}}function ue(n){let e,l;return e=new U({props:{href:n[4].href,class:(n[1].url==n[4].href?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" text-md rounded-md px-3 py-2 font-medium",$$slots:{default:[je]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(t,o){F(e,t,o),l=!0},p(t,o){const i={};o&2&&(i.class=(t[1].url==t[4].href?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" text-md rounded-md px-3 py-2 font-medium"),o&512&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Ce(n){let e;return{c(){e=g("a"),e.textContent="Login",s(e,"href","/auth/redirect"),s(e,"class","text-md block rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white")},m(l,t){L(l,e,t)},i:N,o:N,d(l){l&&j(e)}}}function Be(n){let e,l;return e=new U({props:{href:"/hub",class:"text-md block rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white",$$slots:{default:[He]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(t,o){F(e,t,o),l=!0},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function He(n){let e;return{c(){e=R("Hub")},m(l,t){L(l,e,t)},d(l){l&&j(e)}}}function qe(n){let e=n[4].name+"",l;return{c(){l=R(e)},m(t,o){L(t,l,o)},p:N,d(t){t&&j(l)}}}function fe(n){let e,l;return e=new U({props:{href:n[4].href,class:(n[1].url==n[4].href?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" text-md block rounded-md px-3 py-2 font-medium",$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},m(t,o){F(e,t,o),l=!0},p(t,o){const i={};o&2&&(i.class=(t[1].url==t[4].href?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" text-md block rounded-md px-3 py-2 font-medium"),o&512&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Ie(n){let e,l,t,o,i,p,d,m,C,S,J,Z,K,M,b,x,V,ee,T,w,v,y,W,O,z,X,te;const le=[Me,we],B=[];function ne(r,c){return r[1].props.auth.user?0:1}b=ne(n),x=B[b]=le[b](n);let H=n[2],u=[];for(let r=0;r<H.length;r+=1)u[r]=ue(ce(n,H,r));const _e=r=>$(u[r],1,1,()=>{u[r]=null}),re=[Be,Ce],q=[];function oe(r,c){return r[1].props.auth.user?0:1}v=oe(n),y=q[v]=re[v](n);let I=n[2],f=[];for(let r=0;r<I.length;r+=1)f[r]=fe(ie(n,I,r));const pe=r=>$(f[r],1,1,()=>{f[r]=null});return{c(){e=g("nav"),l=g("div"),t=g("div"),o=g("div"),i=g("button"),p=se("svg"),d=se("path"),C=A(),S=g("div"),J=g("div"),J.innerHTML='<img class="hidden h-8 w-auto sm:block" src="/images/logo.png" alt="Logo"/>',Z=A(),K=g("div"),M=g("div"),x.c(),V=A();for(let r=0;r<u.length;r+=1)u[r].c();ee=A(),T=g("div"),w=g("div"),y.c(),W=A();for(let r=0;r<f.length;r+=1)f[r].c();s(d,"stroke-linecap","round"),s(d,"stroke-linejoin","round"),s(d,"d",m=n[0]?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"),s(p,"class","block h-6 w-6"),s(p,"xmlns","http://www.w3.org/2000/svg"),s(p,"fill","none"),s(p,"viewBox","0 0 24 24"),s(p,"stroke-width","2"),s(p,"stroke","currentColor"),s(p,"aria-hidden","true"),s(i,"type","button"),s(i,"class","inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"),s(i,"aria-controls","mobile-menu"),s(i,"aria-expanded","false"),s(o,"class","absolute inset-y-0 left-0 flex items-center sm:hidden"),s(J,"class","flex flex-shrink-0 items-center"),s(M,"class","flex space-x-4"),s(K,"class","hidden sm:ml-6 sm:block"),s(S,"class","flex flex-1 items-center sm:items-stretch sm:justify-start"),s(t,"class","relative flex h-14 items-center justify-between"),s(l,"class","px-2 sm:px-6 lg:px-8"),s(w,"class",O=(n[0]?"":"hidden")+" space-y-1 px-2 pt-2 pb-3"),s(T,"class","sm:hidden"),s(T,"id","mobile-menu"),s(e,"class","bg-gray-800")},m(r,c){L(r,e,c),h(e,l),h(l,t),h(t,o),h(o,i),h(i,p),h(p,d),h(t,C),h(t,S),h(S,J),h(S,Z),h(S,K),h(K,M),B[b].m(M,null),h(M,V);for(let k=0;k<u.length;k+=1)u[k].m(M,null);h(e,ee),h(e,T),h(T,w),q[v].m(w,null),h(w,W);for(let k=0;k<f.length;k+=1)f[k].m(w,null);z=!0,X||(te=ge(i,"click",n[3]),X=!0)},p(r,[c]){(!z||c&1&&m!==(m=r[0]?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"))&&s(d,"d",m);let k=b;if(b=ne(r),b!==k&&(P(),$(B[k],1,1,()=>{B[k]=null}),Q(),x=B[b],x||(x=B[b]=le[b](r),x.c()),_(x,1),x.m(M,V)),c&6){H=r[2];let a;for(a=0;a<H.length;a+=1){const D=ce(r,H,a);u[a]?(u[a].p(D,c),_(u[a],1)):(u[a]=ue(D),u[a].c(),_(u[a],1),u[a].m(M,null))}for(P(),a=H.length;a<u.length;a+=1)_e(a);Q()}let Y=v;if(v=oe(r),v!==Y&&(P(),$(q[Y],1,1,()=>{q[Y]=null}),Q(),y=q[v],y||(y=q[v]=re[v](r),y.c()),_(y,1),y.m(w,W)),c&6){I=r[2];let a;for(a=0;a<I.length;a+=1){const D=ie(r,I,a);f[a]?(f[a].p(D,c),_(f[a],1)):(f[a]=fe(D),f[a].c(),_(f[a],1),f[a].m(w,null))}for(P(),a=I.length;a<f.length;a+=1)pe(a);Q()}(!z||c&1&&O!==(O=(r[0]?"":"hidden")+" space-y-1 px-2 pt-2 pb-3"))&&s(w,"class",O)},i(r){if(!z){_(x);for(let c=0;c<H.length;c+=1)_(u[c]);_(y);for(let c=0;c<I.length;c+=1)_(f[c]);z=!0}},o(r){$(x),u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)$(u[c]);$(y),f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)$(f[c]);z=!1},d(r){r&&j(e),B[b].d(),ae(u,r),q[v].d(),ae(f,r),X=!1,te()}}}function Se(n,e,l){let t;$e(n,be,d=>l(1,t=d));const o=[];let i=!1;return[i,t,o,()=>l(0,i=!i)]}class ze extends de{constructor(e){super(),me(this,e,Se,Ie,he,{})}}function Ae(n){let e,l,t,o,i;l=new ze({});const p=n[1].default,d=ve(p,n,n[0],null);return{c(){e=g("main"),E(l.$$.fragment),t=A(),o=g("article"),d&&d.c(),s(o,"class","m-10")},m(m,C){L(m,e,C),F(l,e,null),h(e,t),h(e,o),d&&d.m(o,null),i=!0},p(m,[C]){d&&d.p&&(!i||C&1)&&ke(d,p,m,m[0],i?ye(p,m[0],C,null):xe(m[0]),null)},i(m){i||(_(l.$$.fragment,m),_(d,m),i=!0)},o(m){$(l.$$.fragment,m),$(d,m),i=!1},d(m){m&&j(e),G(l),d&&d.d(m)}}}function Ne(n,e,l){let{$$slots:t={},$$scope:o}=e;return n.$$set=i=>{"$$scope"in i&&l(0,o=i.$$scope)},[o,t]}class Ee extends de{constructor(e){super(),me(this,e,Ne,Ae,he,{})}}export{Ee as default};