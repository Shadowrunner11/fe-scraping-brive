import{g as C,v as o,r as g,B as F,a6 as M,a3 as L,a5 as R}from"./index-8329670c.js";import{l as I,m as s,p as P,o as O,n as _,F as f,h as m,g as d,j as h,q as V}from"./yup-cdd34220.js";import{A as v,M as k,P as y,L as H,u as D}from"./LoadingButton-33aec5b6.js";const A=C([o.jsx("path",{d:"M14 12h4v1.5h-4zm0 3h4v1.5h-4z"},"0"),o.jsx("path",{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z"},"1"),o.jsx("circle",{cx:"9",cy:"13.5",r:"1.5"},"2"),o.jsx("path",{d:"M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z"},"3")],"BadgeOutlined"),W="_loginForm_1xgqe_1",z={loginForm:W};function G(r){for(var e=r.length,t=5381,n=52711,i;e--;)i=r.charCodeAt(e),t=t*33^i,n=n*33^i;return(t>>>0)*4096+(n>>>0)}var u="|",q=/\[object ([HTML|SVG](.*)Element)\]/,Y={"[object Arguments]":0,"[object Array]":1,"[object ArrayBuffer]":2,"[object AsyncFunction]":3,"[object AsyncGeneratorFunction]":4,"[object BigInt]":5,"[object BigInt64Array]":6,"[object BigUint64Array]":7,"[object Boolean]":8,"[object DataView]":9,"[object Date]":10,"[object DocumentFragment]":11,"[object Error]":12,"[object Event]":13,"[object Float32Array]":14,"[object Float64Array]":15,"[object Function]":16,"[object Generator]":17,"[object GeneratorFunction]":18,"[object Int8Array]":19,"[object Int16Array]":20,"[object Map]":21,"[object Number]":22,"[object Object]":23,"[object Promise]":24,"[object RegExp]":25,"[object Set]":26,"[object SharedArrayBuffer]":27,"[object String]":28,"[object Uint8Array]":29,"[object Uint8ClampedArray]":30,"[object Uint16Array]":31,"[object Uint32Array]":32,"[object WeakMap]":33,"[object WeakRef]":34,"[object WeakSet]":35,CUSTOM:36,ELEMENT:37},$={"[object Arguments]":1,"[object Array]":2},N={"[object Generator]":1,"[object Promise]":2,"[object WeakMap]":3,"[object WeakRef]":4,"[object WeakSet]":5},K={"[object AsyncFunction]":1,"[object AsyncGeneratorFunction]":2,"[object Boolean]":3,"[object Function]":4,"[object GeneratorFunction]":5,"[object Number]":6,"[object String]":7},Q={"[object BigInt64Array]":1,"[object BigUint64Array]":2,"[object Float32Array]":3,"[object Float64Array]":4,"[object Int8Array]":5,"[object Int16Array]":6,"[object Uint8Array]":7,"[object Uint8ClampedArray]":8,"[object Uint16Array]":9,"[object Uint32Array]":10},X={"[object Arguments]":1,"[object Array]":2,"[object ArrayBuffer]":3,"[object BigInt64Array]":4,"[object BigUint64Array]":5,"[object DataView]":6,"[object Float32Array]":7,"[object Float64Array]":8,"[object Int8Array]":9,"[object Int16Array]":10,"[object Map]":11,"[object Object]":12,"[object Set]":13,"[object SharedArrayBuffer]":14,"[object Uint8Array]":15,"[object Uint8ClampedArray]":16,"[object Uint16Array]":17,"[object Uint32Array]":18,CUSTOM:19},b={bigint:"i",boolean:"b",empty:"e",function:"g",number:"n",object:"o",string:"s",symbol:"s"};function J(r,e){return r[0]>e[0]}function U(r,e){return r>e}function S(r,e){for(var t,n,i=0;i<r.length;++i){for(n=r[i],t=i-1;~t&&e(r[t],n);--t)r[t+1]=r[t];r[t+1]=n}return r}function c(r,e){return b.object+u+Y[r]+u+e}var E=new WeakMap,Z=0;function l(r,e){var t=E.get(r);if(t)return t;var n=c(e,"NOT_ENUMERABLE"+u+Z++);return E.set(r,n),n}var T=Object.prototype.toString;function rr(r,e,t){if(X[e])return p(e,r,t);if(e==="[object Date]")return c(e,r.getTime());if(e==="[object RegExp]")return c(e,r.toString());if(e==="[object Event]")return c(e,[r.bubbles,r.cancelBubble,r.cancelable,r.composed,r.currentTarget,r.defaultPrevented,r.eventPhase,r.isTrusted,r.returnValue,r.target,r.type].join());if(e==="[object Error]")return c(e,r.message+u+r.stack);if(e==="[object DocumentFragment]")return c(e,ir(r));var n=e.match(q);return n?c("ELEMENT",n[1]+u+r.outerHTML):N[e]?l(r,e):K[e]?c(e,r.toString()):p("CUSTOM",r,t)}function p(r,e,t){var n=t.cache.get(e);return n?c(r,"RECURSIVE~"+n):(t.cache.set(e,++t.id),r==="[object Object]"?e[Symbol.iterator]?l(e,r):c(r,B(e,t)):$[r]?c(r,tr(e,t)):r==="[object Map]"?c(r,cr(e,t)):r==="[object Set]"?c(r,ar(e,t)):Q[r]?c(r,e.join()):r==="[object ArrayBuffer]"?c(r,x(e)):r==="[object DataView]"?c(r,x(e.buffer)):N[r]?l(e,r):c("CUSTOM",B(e,t)))}function tr(r,e){for(var t=r.length,n=new Array(t);--t>=0;)n[t]=j(r[t],e);return n.join()}function er(r){return Buffer.from(r).toString("utf8")}function nr(r){return String.fromCharCode.apply(null,new Uint16Array(r))}function or(){return"UNSUPPORTED"}function ir(r){for(var e=r.children,t=e.length,n=new Array(t);--t>=0;)n[t]=e[t].outerHTML;return n.join()}var x=typeof Buffer<"u"&&typeof Buffer.from=="function"?er:typeof Uint16Array=="function"?nr:or;function cr(r,e){var t=new Array(r.size),n=0;for(r.forEach(function(i,a){t[n++]=[j(a,e),j(i,e)]}),S(t,J);--n>=0;)t[n]="["+t[n][0]+","+t[n][1]+"]";return"["+t.join()+"]"}function B(r,e){for(var t=S(Object.getOwnPropertyNames(r),U),n=t.length,i=new Array(n),a=n;--a>=0;)i[a]=t[a]+":"+j(r[t[a]],e);return"{"+i.join()+"}"}function ar(r,e){var t=new Array(r.size),n=0;return r.forEach(function(i){t[n++]=j(i,e)}),"["+S(t,U).join()+"]"}function j(r,e){var t=typeof r;return r==null||t==="undefined"?b.empty+r:t==="object"?rr(r,T.call(r),e||{cache:new WeakMap,id:1}):t==="function"||t==="symbol"?b[t]+r.toString():t==="boolean"?b.boolean+ +r:b[t]+r}function sr(r){return G(j(r,void 0))}const jr=I().shape({password:s().required(),confirmPassword:s().oneOf([P("password")],"Passwords must match"),email:s().required().email(),firstName:s().required(),lastName:s().required(),username:s().required()}),br=O(jr),ur=()=>{const r=R(),{login:e}=D();return g.useCallback(async t=>{await r.fetchQuery(["register",sr(t)],()=>V.register(t)),e(t.email,t.password)},[r,e])};function hr(){const{register:r,handleSubmit:e}=_({resolver:br}),t=ur(),[n,i]=g.useState(!1),a=g.useCallback(async w=>{i(!0),await t(w),i(!1)},[t]);return o.jsx(v,{title:"Sign up",description:o.jsxs(F,{children:["Already have an account? ",o.jsx(M,{to:"/login",children:"Sign in"})," "]}),children:o.jsxs(L,{component:"form",onSubmit:e(a),className:z.loginForm,children:[o.jsxs(f,{children:[o.jsx(m,{htmlFor:"email",children:"Email"}),o.jsx(d,{id:"email",inputProps:r("email"),placeholder:"Enter your email address",startAdornment:o.jsx(h,{position:"start",children:o.jsx(k,{})})})]}),o.jsx(y,{inputProps:r("password")}),o.jsx(y,{hasShow:!1,inputProps:r("confirmPassword"),id:"confirmPassword",label:"Confirm password",placeHolder:"Retype your password"}),o.jsxs(f,{children:[o.jsx(m,{htmlFor:"lastName",children:"Last Name"}),o.jsx(d,{id:"lastName",inputProps:r("lastName"),placeholder:"Last Name",startAdornment:o.jsx(h,{position:"start",children:o.jsx(A,{})})})]}),o.jsxs(f,{children:[o.jsx(m,{htmlFor:"firstName",children:"First Name"}),o.jsx(d,{id:"firstNameName",inputProps:r("firstName"),placeholder:"First Name",startAdornment:o.jsx(h,{position:"start",children:o.jsx(A,{})})})]}),o.jsxs(f,{children:[o.jsx(m,{htmlFor:"userName",children:"User Name"}),o.jsx(d,{id:"useName",inputProps:r("username"),placeholder:"User Name",startAdornment:o.jsx(h,{position:"start",children:o.jsx(A,{})})})]}),o.jsx(H,{loading:n,type:"submit","aria-label":"login",variant:"contained",children:"Register"})]})})}export{hr as default};
