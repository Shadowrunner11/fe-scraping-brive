import{r as o,a7 as p,v as s,B as g,a6 as h,a2 as x}from"./index-1933e7d0.js";import{k as f,F as j,h as y,g as b,j as F,B as I}from"./index.esm-fa6ddda5.js";import{u as S,A as w,M as P,P as t}from"./index-453e0349.js";import{u as k}from"./useQuery-6dc5a3cc.js";const v="_loginForm_1xgqe_1",A={loginForm:v};function C(){const[e,i]=o.useState(),{register:n,handleSubmit:l}=f(),m=p(),u=S(),{data:a,isFetched:r}=k(["login"],()=>({token:(e==null?void 0:e.name)??"asdasd",expiresIn:12341324,tokenType:"Bearer"}),{enabled:!!e}),d=o.useCallback(c=>{i(c)},[]);return o.useEffect(()=>{!e&&!r||a&&(u(a),m("/"))},[r,a,e]),s.jsx(w,{title:"Sign up",description:s.jsxs(g,{children:["Already have an account? ",s.jsx(h,{to:"/login",children:"Sign in"})," "]}),children:s.jsxs(x,{component:"form",onSubmit:l(d),className:A.loginForm,children:[s.jsxs(j,{children:[s.jsx(y,{htmlFor:"email",children:"Email"}),s.jsx(b,{id:"email",inputProps:n("name"),placeholder:"Enter your email address",startAdornment:s.jsx(F,{position:"start",children:s.jsx(P,{})})})]}),s.jsx(t,{inputProps:n("password")}),s.jsx(t,{hasShow:!1,inputProps:n("confirmPassword"),id:"confirmPassword",label:"Confirm password",placeHolder:"Retype your password"}),s.jsx(I,{type:"submit","aria-label":"login",variant:"contained",children:"Register"})]})})}export{C as default};
