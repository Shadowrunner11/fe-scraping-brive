import{r as f,J as w,K as d,M as m,j as e}from"./index-2c18e372.js";import{l as a,M as j,N as v,L as y,Q as x,I,O as u,r as T}from"./index.esm-16cbd879.js";/**
 *@author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 *@fileoverview Sign In functionality <hook>
 *@copyright Arkadip Bhattacharya 2020
 *@license Apache-2.0
 *
 * Copyright 2020 Arkadip Bhattacharya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){var r=f.useContext(w);if(r===null)throw new d("Auth Provider is missing. Please add the AuthProvider before Router");return function(t){var o=t.token,s=t.tokenType,n=t.authState,c=t.expiresIn,i=t.refreshToken,p=t.refreshTokenExpireIn,h=new Date(new Date().getTime()+c*60*1e3);if(r.authState.isUsingRefreshToken)if(i&&p){var k=new Date(new Date().getTime()+p*60*1e3);return r.dispatch(m({auth:{token:o,type:s,expiresAt:h},userState:n||null,refresh:{token:i,expiresAt:k}})),!0}else throw new d('Make sure you given "refreshToken" and  "refreshTokenExpireIn" parameter');else{if(i&&p)throw new Error(`The app doesn't implement 'refreshToken' feature.
So you have to implement refresh token feature from 'AuthProvider' before using it.`);return r.dispatch(m({auth:{token:o,type:s,expiresAt:h},userState:n||null,refresh:null})),!0}}}const z=a(e.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined"),R=a(e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline"),A=a(e.jsx("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"}),"RemoveRedEyeOutlined"),M=a(e.jsx("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");function O(r){return!r}const P=({inputProps:r,id:t="password",label:o="Password",placeHolder:s="Enter your password"})=>{const[n,c]=f.useReducer(O,!1);return e.jsxs(j,{children:[e.jsx(v,{htmlFor:t,children:o}),e.jsx(y,{id:t,type:n?"text":"password",inputProps:r,placeholder:s,startAdornment:e.jsx(x,{position:"start",children:e.jsx(z,{})}),endAdornment:e.jsx(x,{component:I,position:"end",onClick:c,children:n?e.jsx(M,{}):e.jsx(A,{})})})]})},S="_authWrapper_1p2t2_1",V="_wrapper_1p2t2_12",E="_image_1p2t2_17",l={authWrapper:S,wrapper:V,image:E},g=({children:r,description:t,title:o,image:s})=>e.jsxs(u,{className:l.wrapper,children:[s&&e.jsx(u,{className:l.image,children:s}),e.jsxs(u,{className:l.authWrapper,children:[e.jsx(T,{component:"h1",variant:"h3",children:o}),t,r]})]});export{g as A,R as M,P,L as u};
