import{S as C,i as D,s as E,x as P,B as b,e as T,C as y,f as v,l as L,y as A,z as F,A as H,D as O,t as U,k as q,n as z,E as k,F as B,G,H as N,I as _}from"./main.bb1dd966.js";function Q(n){let a,s,o,f;const c=n[11].default,l=P(c,n,n[10],null);let u=[n[2],{href:n[0]}],i={};for(let e=0;e<u.length;e+=1)i=b(i,u[e]);return{c(){a=T("a"),l&&l.c(),y(a,i)},m(e,r){v(e,a,r),l&&l.m(a,null),s=!0,o||(f=L(a,"click",n[1]),o=!0)},p(e,[r]){l&&l.p&&(!s||r&1024)&&A(l,c,e,e[10],s?H(c,e[10],r,null):F(e[10]),null),y(a,i=O(u,[r&4&&e[2],(!s||r&1)&&{href:e[0]}]))},i(e){s||(U(l,e),s=!0)},o(e){q(l,e),s=!1},d(e){e&&z(a),l&&l.d(e),o=!1,f()}}}function W(n,a,s){const o=["data","href","method","replace","preserveScroll","preserveState","only","headers"];let f=k(a,o),{$$slots:c={},$$scope:l}=a;const u=B();let{data:i={},href:e,method:r="get",replace:d=!1,preserveScroll:m=!1,preserveState:h=null,only:S=[],headers:g={}}=a;G(()=>{s(4,r=r.toLowerCase());const[t,p]=_.mergeDataIntoQueryString(r,e,i);s(0,e=t),s(3,i=p),r!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "inertia" directive. For example:

<button use:inertia={{ method: 'post', href: '${e}' }}>...</button>`)});function I(t){u("click",t),_.shouldIntercept(t)&&(t.preventDefault(),_.Inertia.visit(e,{data:i,method:r,preserveScroll:m,preserveState:h!==null?h:r!=="get",replace:d,only:S,headers:g}))}return n.$$set=t=>{a=b(b({},a),N(t)),s(2,f=k(a,o)),"data"in t&&s(3,i=t.data),"href"in t&&s(0,e=t.href),"method"in t&&s(4,r=t.method),"replace"in t&&s(5,d=t.replace),"preserveScroll"in t&&s(6,m=t.preserveScroll),"preserveState"in t&&s(7,h=t.preserveState),"only"in t&&s(8,S=t.only),"headers"in t&&s(9,g=t.headers),"$$scope"in t&&s(10,l=t.$$scope)},[e,I,f,i,r,d,m,h,S,g,l,c]}class J extends C{constructor(a){super(),D(this,a,W,Q,E,{data:3,href:0,method:4,replace:5,preserveScroll:6,preserveState:7,only:8,headers:9})}}export{J as I};