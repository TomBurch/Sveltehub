import{S as _,i as v,s as b,e as m,d as f,r as y,f as r,C as h,g as S,h as l,u as w,H as x,o as C,z as q,A as z}from"./main.3926cbd7.js";import A from"./Layout.16577156.js";import"./InertiaLink.8ec5d494.js";function H(n){let t,s,i,e,a,g,c,u=n[1].props.auth.user.username+"",d;return{c(){t=m("div"),s=m("h5"),s.textContent="Settings",i=f(),e=m("img"),g=f(),c=m("p"),d=y(u),r(s,"class","pb-2 text-center text-3xl font-bold text-white"),r(e,"class","mx-auto rounded-lg"),h(e.src,a=n[0])||r(e,"src",a),r(e,"alt",""),r(c,"class","text-center text-lg font-normal text-white"),r(t,"class","h-screen-no-nav border border-gray-200 border-gray-700 bg-gray-800 p-3 shadow-md")},m(o,p){S(o,t,p),l(t,s),l(t,i),l(t,e),l(t,g),l(t,c),l(c,d)},p(o,[p]){p&1&&!h(e.src,a=o[0])&&r(e,"src",a),p&2&&u!==(u=o[1].props.auth.user.username+"")&&w(d,u)},i:x,o:x,d(o){o&&C(t)}}}const D=A;function L(n,t,s){let i;q(n,z,a=>s(1,i=a));let{avatar:e}=t;return n.$$set=a=>{"avatar"in a&&s(0,e=a.avatar)},[e,i]}class E extends _{constructor(t){super(),v(this,t,L,H,b,{avatar:0})}}export{E as default,D as layout};
