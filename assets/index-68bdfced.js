import{r as x,q as yt,_ as g,s as Fe,t as de,v as wt,i as Et,w as St,a as te,j as C,x as Be,c as W,g as Rt}from"./index-2c18e372.js";import{W as gt,X as Ct,Y as xt,c as V,f as ne,g as re,e as Re,p as $,B as Ot,D as Ve,l as ge,w as Pt,q as Ce,E as At,r as Le}from"./index.esm-16cbd879.js";function Tt({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=x.useRef(e!==void 0),[s,i]=x.useState(t),l=o?e:s,u=x.useCallback(c=>{o||i(c)},[]);return[l,u]}const kt=gt(),Nt=kt,Ft=["component","direction","spacing","divider","children","className","useFlexGap"],Bt=yt(),Lt=Nt("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function _t(e){return Ct({props:e,name:"MuiStack",defaultTheme:Bt})}function Ut(e,t){const n=x.Children.toArray(e).filter(Boolean);return n.reduce((r,o,s)=>(r.push(o),s<n.length-1&&r.push(x.cloneElement(t,{key:`separator-${s}`})),r),[])}const Dt=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],jt=({ownerState:e,theme:t})=>{let n=g({display:"flex",flexDirection:"column"},Fe({theme:t},de({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=wt(t),o=Object.keys(t.breakpoints.values).reduce((u,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(u[c]=!0),u),{}),s=de({values:e.direction,base:o}),i=de({values:e.spacing,base:o});typeof s=="object"&&Object.keys(s).forEach((u,c,d)=>{if(!s[u]){const y=c>0?s[d[c-1]]:"column";s[u]=y}}),n=Et(n,Fe({theme:t},i,(u,c)=>e.useFlexGap?{gap:Be(r,u)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${Dt(c?s[c]:e.direction)}`]:Be(r,u)}}))}return n=St(t.breakpoints,n),n};function It(e={}){const{createStyledComponent:t=Lt,useThemeProps:n=_t,componentName:r="MuiStack"}=e,o=()=>ne({root:["root"]},u=>re(r,u),{}),s=t(jt);return x.forwardRef(function(u,c){const d=n(u),p=xt(d),{component:y="div",direction:m="column",spacing:f=0,divider:h,children:w,className:E,useFlexGap:R=!1}=p,P=te(p,Ft),_={direction:m,spacing:f,useFlexGap:R},U=o();return C.jsx(s,g({as:y,ownerState:_,ref:c,className:V(U.root,E)},P,{children:h?Ut(w,h):w}))})}function vt(e){return re("PrivateSwitchBase",e)}Re("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const $t=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Mt=e=>{const{classes:t,checked:n,disabled:r,edge:o}=e,s={root:["root",n&&"checked",r&&"disabled",o&&`edge${W(o)}`],input:["input"]};return ne(s,vt,t)},zt=$(Ot)(({ownerState:e})=>g({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),qt=$("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ht=x.forwardRef(function(t,n){const{autoFocus:r,checked:o,checkedIcon:s,className:i,defaultChecked:l,disabled:u,disableFocusRipple:c=!1,edge:d=!1,icon:p,id:y,inputProps:m,inputRef:f,name:h,onBlur:w,onChange:E,onFocus:R,readOnly:P,required:_=!1,tabIndex:U,type:F,value:I}=t,D=te(t,$t),[j,ft]=Tt({controlled:o,default:!!l,name:"SwitchBase",state:"checked"}),B=Ve(),pt=k=>{R&&R(k),B&&B.onFocus&&B.onFocus(k)},ht=k=>{w&&w(k),B&&B.onBlur&&B.onBlur(k)},mt=k=>{if(k.nativeEvent.defaultPrevented)return;const Ne=k.target.checked;ft(Ne),E&&E(k,Ne)};let z=u;B&&typeof z>"u"&&(z=B.disabled);const bt=F==="checkbox"||F==="radio",ue=g({},t,{checked:j,disabled:z,disableFocusRipple:c,edge:d}),ke=Mt(ue);return C.jsxs(zt,g({component:"span",className:V(ke.root,i),centerRipple:!0,focusRipple:!c,disabled:z,tabIndex:null,role:void 0,onFocus:pt,onBlur:ht,ownerState:ue,ref:n},D,{children:[C.jsx(qt,g({autoFocus:r,checked:o,defaultChecked:l,className:ke.input,disabled:z,id:bt?y:void 0,name:h,onChange:mt,readOnly:P,ref:f,required:_,ownerState:ue,tabIndex:U,type:F},F==="checkbox"&&I===void 0?{}:{value:I},m)),j?s:p]}))}),Vt=Ht,Jt=ge(C.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Wt=ge(C.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Kt=ge(C.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Gt(e){return re("MuiCheckbox",e)}const Xt=Re("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),fe=Xt,Qt=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Yt=e=>{const{classes:t,indeterminate:n,color:r}=e,o={root:["root",n&&"indeterminate",`color${W(r)}`]},s=ne(o,Gt,t);return g({},t,s)},Zt=$(Vt,{shouldForwardProp:e=>Pt(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,n.color!=="default"&&t[`color${W(n.color)}`]]}})(({theme:e,ownerState:t})=>g({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Rt(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${fe.checked}, &.${fe.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${fe.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),en=C.jsx(Wt,{}),tn=C.jsx(Jt,{}),nn=C.jsx(Kt,{}),rn=x.forwardRef(function(t,n){var r,o;const s=Ce({props:t,name:"MuiCheckbox"}),{checkedIcon:i=en,color:l="primary",icon:u=tn,indeterminate:c=!1,indeterminateIcon:d=nn,inputProps:p,size:y="medium",className:m}=s,f=te(s,Qt),h=c?d:u,w=c?d:i,E=g({},s,{color:l,indeterminate:c,size:y}),R=Yt(E);return C.jsx(Zt,g({type:"checkbox",inputProps:g({"data-indeterminate":c},p),icon:x.cloneElement(h,{fontSize:(r=h.props.fontSize)!=null?r:y}),checkedIcon:x.cloneElement(w,{fontSize:(o=w.props.fontSize)!=null?o:y}),ownerState:E,ref:n,className:V(R.root,m)},f,{classes:R}))}),Ur=rn;function on(e){return re("MuiFormControlLabel",e)}const sn=Re("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),H=sn,an=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],cn=e=>{const{classes:t,disabled:n,labelPlacement:r,error:o,required:s}=e,i={root:["root",n&&"disabled",`labelPlacement${W(r)}`,o&&"error",s&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",o&&"error"]};return ne(i,on,t)},ln=$("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${H.label}`]:t.label},t.root,t[`labelPlacement${W(n.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>g({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${H.disabled}`]:{cursor:"default"}},t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${H.label}`]:{[`&.${H.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),un=$("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${H.error}`]:{color:(e.vars||e).palette.error.main}})),dn=x.forwardRef(function(t,n){var r,o;const s=Ce({props:t,name:"MuiFormControlLabel"}),{className:i,componentsProps:l={},control:u,disabled:c,disableTypography:d,label:p,labelPlacement:y="end",required:m,slotProps:f={}}=s,h=te(s,an),w=Ve(),E=(r=c??u.props.disabled)!=null?r:w==null?void 0:w.disabled,R=m??u.props.required,P={disabled:E,required:R};["checked","name","onChange","value","inputRef"].forEach(j=>{typeof u.props[j]>"u"&&typeof s[j]<"u"&&(P[j]=s[j])});const _=At({props:s,muiFormControl:w,states:["error"]}),U=g({},s,{disabled:E,labelPlacement:y,required:R,error:_.error}),F=cn(U),I=(o=f.typography)!=null?o:l.typography;let D=p;return D!=null&&D.type!==Le&&!d&&(D=C.jsx(Le,g({component:"span"},I,{className:V(F.label,I==null?void 0:I.className),children:D}))),C.jsxs(ln,g({className:V(F.root,i),ownerState:U,ref:n},h,{children:[x.cloneElement(u,P),D,R&&C.jsxs(un,{ownerState:U,"aria-hidden":!0,className:F.asterisk,children:[" ","*"]})]}))}),Dr=dn,fn=It({createStyledComponent:$("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>Ce({props:e,name:"MuiStack"})}),jr=fn;function Je(e,t){return function(){return e.apply(t,arguments)}}const{toString:pn}=Object.prototype,{getPrototypeOf:xe}=Object,oe=(e=>t=>{const n=pn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>oe(t)===e),se=e=>t=>typeof t===e,{isArray:M}=Array,J=se("undefined");function hn(e){return e!==null&&!J(e)&&e.constructor!==null&&!J(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const We=T("ArrayBuffer");function mn(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&We(e.buffer),t}const bn=se("string"),O=se("function"),Ke=se("number"),ie=e=>e!==null&&typeof e=="object",yn=e=>e===!0||e===!1,X=e=>{if(oe(e)!=="object")return!1;const t=xe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},wn=T("Date"),En=T("File"),Sn=T("Blob"),Rn=T("FileList"),gn=e=>ie(e)&&O(e.pipe),Cn=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=oe(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},xn=T("URLSearchParams"),On=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function K(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),M(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Ge(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Xe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Qe=e=>!J(e)&&e!==Xe;function ye(){const{caseless:e}=Qe(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ge(t,o)||o;X(t[s])&&X(r)?t[s]=ye(t[s],r):X(r)?t[s]=ye({},r):M(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&K(arguments[r],n);return t}const Pn=(e,t,n,{allOwnKeys:r}={})=>(K(t,(o,s)=>{n&&O(o)?e[s]=Je(o,n):e[s]=o},{allOwnKeys:r}),e),An=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},kn=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&xe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Nn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Fn=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!Ke(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Bn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&xe(Uint8Array)),Ln=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},_n=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Un=T("HTMLFormElement"),Dn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),_e=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),jn=T("RegExp"),Ye=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};K(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},In=e=>{Ye(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},vn=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return M(e)?r(e):r(String(e).split(t)),n},$n=()=>{},Mn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),pe="abcdefghijklmnopqrstuvwxyz",Ue="0123456789",Ze={DIGIT:Ue,ALPHA:pe,ALPHA_DIGIT:pe+pe.toUpperCase()+Ue},zn=(e=16,t=Ze.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qn(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Hn=e=>{const t=new Array(10),n=(r,o)=>{if(ie(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=M(r)?[]:{};return K(r,(i,l)=>{const u=n(i,o+1);!J(u)&&(s[l]=u)}),t[o]=void 0,s}}return r};return n(e,0)},Vn=T("AsyncFunction"),Jn=e=>e&&(ie(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:M,isArrayBuffer:We,isBuffer:hn,isFormData:Cn,isArrayBufferView:mn,isString:bn,isNumber:Ke,isBoolean:yn,isObject:ie,isPlainObject:X,isUndefined:J,isDate:wn,isFile:En,isBlob:Sn,isRegExp:jn,isFunction:O,isStream:gn,isURLSearchParams:xn,isTypedArray:Bn,isFileList:Rn,forEach:K,merge:ye,extend:Pn,trim:On,stripBOM:An,inherits:Tn,toFlatObject:kn,kindOf:oe,kindOfTest:T,endsWith:Nn,toArray:Fn,forEachEntry:Ln,matchAll:_n,isHTMLForm:Un,hasOwnProperty:_e,hasOwnProp:_e,reduceDescriptors:Ye,freezeMethods:In,toObjectSet:vn,toCamelCase:Dn,noop:$n,toFiniteNumber:Mn,findKey:Ge,global:Xe,isContextDefined:Qe,ALPHABET:Ze,generateString:zn,isSpecCompliantForm:qn,toJSONObject:Hn,isAsyncFn:Vn,isThenable:Jn};function b(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const et=b.prototype,tt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{tt[e]={value:e}});Object.defineProperties(b,tt);Object.defineProperty(et,"isAxiosError",{value:!0});b.from=(e,t,n,r,o,s)=>{const i=Object.create(et);return a.toFlatObject(e,i,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),b.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Wn=null;function we(e){return a.isPlainObject(e)||a.isArray(e)}function nt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function De(e,t,n){return e?e.concat(t).map(function(o,s){return o=nt(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Kn(e){return a.isArray(e)&&!e.some(we)}const Gn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ae(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!a.isUndefined(w[h])});const r=n.metaTokens,o=n.visitor||d,s=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!u&&a.isBlob(f))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?u&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function d(f,h,w){let E=f;if(f&&!w&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Kn(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(E=a.toArray(f)))return h=nt(h),E.forEach(function(P,_){!(a.isUndefined(P)||P===null)&&t.append(i===!0?De([h],_,s):i===null?h:h+"[]",c(P))}),!1}return we(f)?!0:(t.append(De(w,h,s),c(f)),!1)}const p=[],y=Object.assign(Gn,{defaultVisitor:d,convertValue:c,isVisitable:we});function m(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(E,R){(!(a.isUndefined(E)||E===null)&&o.call(t,E,a.isString(R)?R.trim():R,h,y))===!0&&m(E,h?h.concat(R):[R])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return m(e),t}function je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Oe(e,t){this._pairs=[],e&&ae(e,this,t)}const rt=Oe.prototype;rt.append=function(t,n){this._pairs.push([t,n])};rt.toString=function(t){const n=t?function(r){return t.call(this,r,je)}:je;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Xn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ot(e,t,n){if(!t)return e;const r=n&&n.encode||Xn,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new Oe(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Qn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ie=Qn,st={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Yn=typeof URLSearchParams<"u"?URLSearchParams:Oe,Zn=typeof FormData<"u"?FormData:null,er=typeof Blob<"u"?Blob:null,tr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),nr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:Yn,FormData:Zn,Blob:er},isStandardBrowserEnv:tr,isStandardBrowserWebWorkerEnv:nr,protocols:["http","https","file","blob","url","data"]};function rr(e,t){return ae(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function or(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sr(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function it(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),u=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,u?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=sr(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(or(r),o,n,0)}),n}return null}const ir={"Content-Type":void 0};function ar(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ce={transitional:st,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(it(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rr(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ae(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),ar(t)):t}],transformResponse:[function(t){const n=this.transitional||ce.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?b.from(l,b.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){ce.headers[t]={}});a.forEach(["post","put","patch"],function(t){ce.headers[t]=a.merge(ir)});const Pe=ce,cr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lr=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&cr[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ve=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function Q(e){return e===!1||e==null?e:a.isArray(e)?e.map(Q):String(e)}function ur(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const dr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function he(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function fr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function pr(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class le{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,u,c){const d=q(u);if(!d)throw new Error("header name must be a non-empty string");const p=a.findKey(o,d);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||u]=Q(l))}const i=(l,u)=>a.forEach(l,(c,d)=>s(c,d,u));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!dr(t)?i(lr(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return ur(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||he(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=q(i),i){const l=a.findKey(r,i);l&&(!n||he(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||he(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=Q(o),delete n[s];return}const l=t?fr(s):String(s).trim();l!==s&&delete n[s],n[l]=Q(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ve]=this[ve]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=q(i);r[l]||(pr(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(le.prototype);a.freezeMethods(le);const N=le;function me(e,t){const n=this||Pe,r=t||n,o=N.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function at(e){return!!(e&&e.__CANCEL__)}function G(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(G,b,{__CANCEL__:!0});function hr(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const mr=A.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const u=[];u.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&u.push("expires="+new Date(o).toGMTString()),a.isString(s)&&u.push("path="+s),a.isString(i)&&u.push("domain="+i),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function br(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ct(e,t){return e&&!br(t)?yr(e,t):t}const wr=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Er(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Sr(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[s];i||(i=c),n[o]=u,r[o]=c;let p=s,y=0;for(;p!==o;)y+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const m=d&&c-d;return m?Math.round(y*1e3/m):void 0}}function $e(e,t){let n=0;const r=Sr(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,u=r(l),c=s<=i;n=s;const d={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:u||void 0,estimated:u&&i&&c?(i-s)/u:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const Rr=typeof XMLHttpRequest<"u",gr=Rr&&function(e){return new Promise(function(n,r){let o=e.data;const s=N.from(e.headers).normalize(),i=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+f))}const d=ct(e.baseURL,e.url);c.open(e.method.toUpperCase(),ot(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const m=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};hr(function(E){n(E),u()},function(E){r(E),u()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new b("Request aborted",b.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||st;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new b(f,h.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const m=(e.withCredentials||wr(d))&&e.xsrfCookieName&&mr.read(e.xsrfCookieName);m&&s.set(e.xsrfHeaderName,m)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",$e(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",$e(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{c&&(r(!m||m.type?new G(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=Er(d);if(y&&A.protocols.indexOf(y)===-1){r(new b("Unsupported protocol "+y+":",b.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Y={http:Wn,xhr:gr};a.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Cr={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?Y[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new b(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(Y,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Y};function be(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new G(null,e)}function Me(e){return be(e),e.headers=N.from(e.headers),e.data=me.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Cr.getAdapter(e.adapter||Pe.adapter)(e).then(function(r){return be(e),r.data=me.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return at(r)||(be(e),r&&r.response&&(r.response.data=me.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const ze=e=>e instanceof N?e.toJSON():e;function v(e,t){t=t||{};const n={};function r(c,d,p){return a.isPlainObject(c)&&a.isPlainObject(d)?a.merge.call({caseless:p},c,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function o(c,d,p){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,d,p)}function s(c,d){if(!a.isUndefined(d))return r(void 0,d)}function i(c,d){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,p){if(p in t)return r(c,d);if(p in e)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,d)=>o(ze(c),ze(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=u[d]||o,y=p(e[d],t[d],d);a.isUndefined(y)&&p!==l||(n[d]=y)}),n}const lt="1.4.0",Ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const qe={};Ae.transitional=function(t,n,r){function o(s,i){return"[Axios v"+lt+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new b(o(i," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!qe[i]&&(qe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function xr(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],u=l===void 0||i(l,s,e);if(u!==!0)throw new b("option "+s+" must be "+u,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+s,b.ERR_BAD_OPTION)}}const Ee={assertOptions:xr,validators:Ae},L=Ee.validators;class ee{constructor(t){this.defaults=t,this.interceptors={request:new Ie,response:new Ie}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=v(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&Ee.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:Ee.assertOptions(o,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=N.concat(i,s);const l=[];let u=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(u=u&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let d,p=0,y;if(!u){const f=[Me.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),y=f.length,d=Promise.resolve(n);p<y;)d=d.then(f[p++],f[p++]);return d}y=l.length;let m=n;for(p=0;p<y;){const f=l[p++],h=l[p++];try{m=f(m)}catch(w){h.call(this,w);break}}try{d=Me.call(this,m)}catch(f){return Promise.reject(f)}for(p=0,y=c.length;p<y;)d=d.then(c[p++],c[p++]);return d}getUri(t){t=v(this.defaults,t);const n=ct(t.baseURL,t.url);return ot(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){ee.prototype[t]=function(n,r){return this.request(v(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(v(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}ee.prototype[t]=n(),ee.prototype[t+"Form"]=n(!0)});const Z=ee;class Te{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new G(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Te(function(o){t=o}),cancel:t}}}const Or=Te;function Pr(e){return function(n){return e.apply(null,n)}}function Ar(e){return a.isObject(e)&&e.isAxiosError===!0}const Se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Se).forEach(([e,t])=>{Se[t]=e});const Tr=Se;function ut(e){const t=new Z(e),n=Je(Z.prototype.request,t);return a.extend(n,Z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ut(v(e,o))},n}const S=ut(Pe);S.Axios=Z;S.CanceledError=G;S.CancelToken=Or;S.isCancel=at;S.VERSION=lt;S.toFormData=ae;S.AxiosError=b;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Pr;S.isAxiosError=Ar;S.mergeConfig=v;S.AxiosHeaders=N;S.formToJSON=e=>it(a.isHTMLForm(e)?new FormData(e):e);S.HttpStatusCode=Tr;S.default=S;const kr=S;class Nr{constructor(t){this.client=t}async login(t,n){const{data:r}=await this.client.post("/login",{username:t,password:n});return this.client.defaults.headers.common={...this.client.defaults.headers.common,Authorization:`Bearer ${r.token}`},r}async logout(t,n){const{data:r}=await this.client.post("/logout",{username:t,token:n});return delete this.client.defaults.headers.common.Authorization,r}async checkAuth(t){const{data:n}=await this.client.get("/auth",{params:{token:t}});return n}}const Fr="https://abc.com";class Br{constructor(t){this.client=t}async searchScrap({text:t}){const{data:n}=await this.client.post("/search",{text:t});return n}async searchHistoryPaginated(t){const{data:n}=await this.client.get("/history",{params:t});return n}}const He=localStorage.getItem("_auth"),dt=kr.create({baseURL:Fr,headers:{common:{Authorization:He?`Bearer ${He}`:null}}}),Ir=new Nr(dt),vr=new Br(dt);export{Ur as C,Dr as F,Vt as S,jr as a,Ir as b,vr as s,Tt as u};
