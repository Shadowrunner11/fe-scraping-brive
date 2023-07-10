import{r as C,v as i,B as m,a6 as S,a2 as U,a5 as L,a7 as M}from"./index-1933e7d0.js";import{k as w,F as R,h as N,g as _,j as k,B as P}from"./index.esm-fa6ddda5.js";import{A as O,M as v,P as D,u as V}from"./index-453e0349.js";import{c as W,b as y,o as G,a as H,F as Y,C as q,d as z}from"./yup-c9eb8c40.js";function K(r){for(var e=r.length,t=5381,n=52711,o;e--;)o=r.charCodeAt(e),t=t*33^o,n=n*33^o;return(t>>>0)*4096+(n>>>0)}var f="|",Q=/\[object ([HTML|SVG](.*)Element)\]/,X={"[object Arguments]":0,"[object Array]":1,"[object ArrayBuffer]":2,"[object AsyncFunction]":3,"[object AsyncGeneratorFunction]":4,"[object BigInt]":5,"[object BigInt64Array]":6,"[object BigUint64Array]":7,"[object Boolean]":8,"[object DataView]":9,"[object Date]":10,"[object DocumentFragment]":11,"[object Error]":12,"[object Event]":13,"[object Float32Array]":14,"[object Float64Array]":15,"[object Function]":16,"[object Generator]":17,"[object GeneratorFunction]":18,"[object Int8Array]":19,"[object Int16Array]":20,"[object Map]":21,"[object Number]":22,"[object Object]":23,"[object Promise]":24,"[object RegExp]":25,"[object Set]":26,"[object SharedArrayBuffer]":27,"[object String]":28,"[object Uint8Array]":29,"[object Uint8ClampedArray]":30,"[object Uint16Array]":31,"[object Uint32Array]":32,"[object WeakMap]":33,"[object WeakRef]":34,"[object WeakSet]":35,CUSTOM:36,ELEMENT:37},$={"[object Arguments]":1,"[object Array]":2},p={"[object Generator]":1,"[object Promise]":2,"[object WeakMap]":3,"[object WeakRef]":4,"[object WeakSet]":5},J={"[object AsyncFunction]":1,"[object AsyncGeneratorFunction]":2,"[object Boolean]":3,"[object Function]":4,"[object GeneratorFunction]":5,"[object Number]":6,"[object String]":7},Z={"[object BigInt64Array]":1,"[object BigUint64Array]":2,"[object Float32Array]":3,"[object Float64Array]":4,"[object Int8Array]":5,"[object Int16Array]":6,"[object Uint8Array]":7,"[object Uint8ClampedArray]":8,"[object Uint16Array]":9,"[object Uint32Array]":10},T={"[object Arguments]":1,"[object Array]":2,"[object ArrayBuffer]":3,"[object BigInt64Array]":4,"[object BigUint64Array]":5,"[object DataView]":6,"[object Float32Array]":7,"[object Float64Array]":8,"[object Int8Array]":9,"[object Int16Array]":10,"[object Map]":11,"[object Object]":12,"[object Set]":13,"[object SharedArrayBuffer]":14,"[object Uint8Array]":15,"[object Uint8ClampedArray]":16,"[object Uint16Array]":17,"[object Uint32Array]":18,CUSTOM:19},j={bigint:"i",boolean:"b",empty:"e",function:"g",number:"n",object:"o",string:"s",symbol:"s"};function rr(r,e){return r[0]>e[0]}function I(r,e){return r>e}function h(r,e){for(var t,n,o=0;o<r.length;++o){for(n=r[o],t=o-1;~t&&e(r[t],n);--t)r[t+1]=r[t];r[t+1]=n}return r}function c(r,e){return j.object+f+X[r]+f+e}var E=new WeakMap,tr=0;function d(r,e){var t=E.get(r);if(t)return t;var n=c(e,"NOT_ENUMERABLE"+f+tr++);return E.set(r,n),n}var er=Object.prototype.toString;function nr(r,e,t){if(T[e])return l(e,r,t);if(e==="[object Date]")return c(e,r.getTime());if(e==="[object RegExp]")return c(e,r.toString());if(e==="[object Event]")return c(e,[r.bubbles,r.cancelBubble,r.cancelable,r.composed,r.currentTarget,r.defaultPrevented,r.eventPhase,r.isTrusted,r.returnValue,r.target,r.type].join());if(e==="[object Error]")return c(e,r.message+f+r.stack);if(e==="[object DocumentFragment]")return c(e,br(r));var n=e.match(Q);return n?c("ELEMENT",n[1]+f+r.outerHTML):p[e]?d(r,e):J[e]?c(e,r.toString()):l("CUSTOM",r,t)}function l(r,e,t){var n=t.cache.get(e);return n?c(r,"RECURSIVE~"+n):(t.cache.set(e,++t.id),r==="[object Object]"?e[Symbol.iterator]?d(e,r):c(r,B(e,t)):$[r]?c(r,or(e,t)):r==="[object Map]"?c(r,jr(e,t)):r==="[object Set]"?c(r,fr(e,t)):Z[r]?c(r,e.join()):r==="[object ArrayBuffer]"?c(r,x(e)):r==="[object DataView]"?c(r,x(e.buffer)):p[r]?d(e,r):c("CUSTOM",B(e,t)))}function or(r,e){for(var t=r.length,n=new Array(t);--t>=0;)n[t]=b(r[t],e);return n.join()}function ir(r){return Buffer.from(r).toString("utf8")}function cr(r){return String.fromCharCode.apply(null,new Uint16Array(r))}function ar(){return"UNSUPPORTED"}function br(r){for(var e=r.children,t=e.length,n=new Array(t);--t>=0;)n[t]=e[t].outerHTML;return n.join()}var x=typeof Buffer<"u"&&typeof Buffer.from=="function"?ir:typeof Uint16Array=="function"?cr:ar;function jr(r,e){var t=new Array(r.size),n=0;for(r.forEach(function(o,a){t[n++]=[b(a,e),b(o,e)]}),h(t,rr);--n>=0;)t[n]="["+t[n][0]+","+t[n][1]+"]";return"["+t.join()+"]"}function B(r,e){for(var t=h(Object.getOwnPropertyNames(r),I),n=t.length,o=new Array(n),a=n;--a>=0;)o[a]=t[a]+":"+b(r[t[a]],e);return"{"+o.join()+"}"}function fr(r,e){var t=new Array(r.size),n=0;return r.forEach(function(o){t[n++]=b(o,e)}),"["+h(t,I).join()+"]"}function b(r,e){var t=typeof r;return r==null||t==="undefined"?j.empty+r:t==="object"?nr(r,er.call(r),e||{cache:new WeakMap,id:1}):t==="function"||t==="symbol"?j[t]+r.toString():t==="boolean"?j.boolean+ +r:j[t]+r}function ur(r){return K(b(r,void 0))}const sr="_loginForm_mu7ho_1",Ar={loginForm:sr},gr="/fe-scraping-brive/assets/Looking-for-candidate-47fc2205.svg",mr=W({name:y().required().email(),password:y().required()}),dr=G(mr),hr=()=>{const r=L(),e=V(),t=M();return C.useCallback(async(n,o)=>{const{token:a,expiresIn:A,firstName:u,lastName:s,userId:g}=await r.fetchQuery(["login",n,ur({password:o})],()=>z.login(n,o));e({expiresIn:A,token:a,tokenType:"Bearer",authState:{firstName:u,lastName:s,userId:g}})&&t("/")},[r,e,t])};function xr({showForgotPassword:r,showRememberMe:e}){var u,s;const t=hr(),{register:n,handleSubmit:o,formState:{errors:a}}=w({resolver:dr}),A=C.useCallback(async({name:g,password:F})=>{await t(g,F)},[t]);return i.jsx(O,{image:i.jsx("img",{alt:"data bases",src:gr}),description:i.jsxs(m,{children:["If you dont have an account ",i.jsx("br",{})," You can register"," ",i.jsx(S,{to:"/register",children:"here"})]}),title:"Sign in",children:i.jsxs(U,{component:"form",onSubmit:o(A),className:Ar.loginForm,children:[i.jsxs(R,{children:[i.jsx(N,{htmlFor:"email",children:"Email"}),i.jsx(_,{id:"email",inputProps:n("name"),placeholder:"Enter your email address",startAdornment:i.jsx(k,{position:"start",children:i.jsx(v,{})})})]}),i.jsx(m,{color:"error",children:(u=a==null?void 0:a.name)==null?void 0:u.message}),i.jsx(D,{inputProps:n("password")}),i.jsx(m,{color:"error",children:(s=a==null?void 0:a.password)==null?void 0:s.message}),i.jsxs(H,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e&&i.jsx(Y,{control:i.jsx(q,{}),label:"Remember me"}),r&&i.jsx(S,{to:"/forgot-password?",children:"Forgot password?"})]}),i.jsx(P,{type:"submit","aria-label":"login",variant:"contained",children:"Log in"})]})})}export{xr as default};
