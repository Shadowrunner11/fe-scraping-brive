import{r as j,v as s,B as a,a6 as c,a3 as f}from"./index-8329670c.js";import{l as b,m,o as F,n as L,F as w,h as y,g as I,j as v}from"./yup-cdd34220.js";import{u as C,A as S,M as k,P as E,L as A}from"./LoadingButton-33aec5b6.js";import{a as P,F as _,C as B}from"./Stack-6bdd99ee.js";const q="_loginForm_mu7ho_1",M={loginForm:q},R="/fe-scraping-brive/assets/Looking-for-candidate-47fc2205.svg",$=b({name:m().required().email(),password:m().required()}),N=F($);function O(e){var n;return((n=e==null?void 0:e.response)==null?void 0:n.data)??(e==null?void 0:e.message)}function G({showForgotPassword:e,showRememberMe:n}){var r,l;const{login:t,error:d,isFetching:u}=C(),{register:i,handleSubmit:p,formState:{errors:o}}=L({resolver:N}),g=j.useCallback(({name:h,password:x})=>{typeof t=="function"&&t(h,x)},[t]);return s.jsx(S,{image:s.jsx("img",{alt:"data bases",src:R}),description:s.jsxs(a,{children:["If you dont have an account ",s.jsx("br",{})," You can register"," ",s.jsx(c,{to:"/register",children:"here"})]}),title:"Sign in",children:s.jsxs(f,{component:"form",onSubmit:p(g),className:M.loginForm,children:[s.jsxs(w,{children:[s.jsx(y,{htmlFor:"email",children:"Email"}),s.jsx(I,{id:"email",inputProps:i("name"),placeholder:"Enter your email address",startAdornment:s.jsx(v,{position:"start",children:s.jsx(k,{})})})]}),s.jsx(a,{color:"error",children:(r=o==null?void 0:o.name)==null?void 0:r.message}),s.jsx(E,{inputProps:i("password")}),s.jsx(a,{color:"error",children:(l=o==null?void 0:o.password)==null?void 0:l.message}),s.jsxs(P,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[n&&s.jsx(_,{control:s.jsx(B,{}),label:"Remember me"}),e&&s.jsx(c,{to:"/forgot-password?",children:"Forgot password?"})]}),s.jsx(a,{color:"error",children:O(d)}),s.jsx(A,{loading:u,type:"submit","aria-label":"login",variant:"contained",children:"Log in"})]})})}export{G as default};