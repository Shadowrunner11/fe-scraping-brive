import{S as z,y as U,z as V,A as D,B as P,C as q,D as H,E as N,F as k,G as W,H as m,r as p,n as G,I as J}from"./index-2c18e372.js";class X extends z{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),A(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return C(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return C(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const s=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),U(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&L(this.currentQuery,i,this.options,s)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(s=>{Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,t);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(V)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),D||this.currentResult.isStale||!P(this.options.staleTime))return;const t=q(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(D||this.options.enabled===!1||!P(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||H.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const s=this.currentQuery,i=this.options,n=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,f=e!==s,l=f?e.state:this.currentQueryInitialState,y=f?this.currentResult:this.previousQueryResult,{state:c}=e;let{dataUpdatedAt:S,error:x,errorUpdatedAt:F,fetchStatus:v,status:d}=c,T=!1,w=!1,h;if(t._optimisticResults){const o=this.hasListeners(),E=!o&&A(e,t),K=o&&L(e,s,t,i);(E||K)&&(v=N(e.options.networkMode)?"fetching":"paused",S||(d="loading")),t._optimisticResults==="isRestoring"&&(v="idle")}if(t.keepPreviousData&&!c.dataUpdatedAt&&y!=null&&y.isSuccess&&d!=="error")h=y.data,S=y.dataUpdatedAt,d=y.status,T=!0;else if(t.select&&typeof c.data<"u")if(n&&c.data===(u==null?void 0:u.data)&&t.select===this.selectFn)h=this.selectResult;else try{this.selectFn=t.select,h=t.select(c.data),h=k(n==null?void 0:n.data,h,t),this.selectResult=h,this.selectError=null}catch(o){this.selectError=o}else h=c.data;if(typeof t.placeholderData<"u"&&typeof h>"u"&&d==="loading"){let o;if(n!=null&&n.isPlaceholderData&&t.placeholderData===(a==null?void 0:a.placeholderData))o=n.data;else if(o=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof o<"u")try{o=t.select(o),this.selectError=null}catch(E){this.selectError=E}typeof o<"u"&&(d="success",h=k(n==null?void 0:n.data,o,t),w=!0)}this.selectError&&(x=this.selectError,h=this.selectResult,F=Date.now(),d="error");const b=v==="fetching",Q=d==="loading",g=d==="error";return{status:d,fetchStatus:v,isLoading:Q,isSuccess:d==="success",isError:g,isInitialLoading:Q&&b,data:h,dataUpdatedAt:S,error:x,errorUpdatedAt:F,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>l.dataUpdateCount||c.errorUpdateCount>l.errorUpdateCount,isFetching:b,isRefetching:b&&!Q,isLoadingError:g&&c.dataUpdatedAt===0,isPaused:v==="paused",isPlaceholderData:w,isPreviousData:T,isRefetchError:g&&c.dataUpdatedAt!==0,isStale:O(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,U(s,t))return;this.currentResult=s;const i={cache:!0},n=()=>{if(!t)return!0;const{notifyOnChangeProps:u}=this.options;if(u==="all"||!u&&!this.trackedProps.size)return!0;const a=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&a.add("error"),Object.keys(this.currentResult).some(f=>{const l=f;return this.currentResult[l]!==t[l]&&a.has(l)})};(e==null?void 0:e.listeners)!==!1&&n()&&(i.listeners=!0),this.notify({...i,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!W(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){m.batch(()=>{if(e.onSuccess){var t,s,i,n;(t=(s=this.options).onSuccess)==null||t.call(s,this.currentResult.data),(i=(n=this.options).onSettled)==null||i.call(n,this.currentResult.data,null)}else if(e.onError){var u,a,f,l;(u=(a=this.options).onError)==null||u.call(a,this.currentResult.error),(f=(l=this.options).onSettled)==null||f.call(l,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:y})=>{y(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Y(r,e){return e.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&e.retryOnMount===!1)}function A(r,e){return Y(r,e)||r.state.dataUpdatedAt>0&&C(r,e,e.refetchOnMount)}function C(r,e,t){if(e.enabled!==!1){const s=typeof t=="function"?t(r):t;return s==="always"||s!==!1&&O(r,e)}return!1}function L(r,e,t,s){return t.enabled!==!1&&(r!==e||s.enabled===!1)&&(!t.suspense||r.state.status!=="error")&&O(r,t)}function O(r,e){return r.isStaleByTime(e.staleTime)}var M={exports:{}},B={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=p;function Z(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var _=typeof Object.is=="function"?Object.is:Z,$=R.useState,ee=R.useEffect,te=R.useLayoutEffect,re=R.useDebugValue;function se(r,e){var t=e(),s=$({inst:{value:t,getSnapshot:e}}),i=s[0].inst,n=s[1];return te(function(){i.value=t,i.getSnapshot=e,I(i)&&n({inst:i})},[r,t,e]),ee(function(){return I(i)&&n({inst:i}),r(function(){I(i)&&n({inst:i})})},[r]),re(t),t}function I(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!_(r,t)}catch{return!0}}function ne(r,e){return e()}var ie=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ne:se;B.useSyncExternalStore=R.useSyncExternalStore!==void 0?R.useSyncExternalStore:ie;M.exports=B;var ue=M.exports;const ce=ue.useSyncExternalStore,j=p.createContext(!1),ae=()=>p.useContext(j);j.Provider;function oe(){let r=!1;return{clearReset:()=>{r=!1},reset:()=>{r=!0},isReset:()=>r}}const le=p.createContext(oe()),he=()=>p.useContext(le);function de(r,e){return typeof r=="function"?r(...e):!!r}const fe=(r,e)=>{(r.suspense||r.useErrorBoundary)&&(e.isReset()||(r.retryOnMount=!1))},pe=r=>{p.useEffect(()=>{r.clearReset()},[r])},ye=({result:r,errorResetBoundary:e,useErrorBoundary:t,query:s})=>r.isError&&!e.isReset()&&!r.isFetching&&de(t,[r.error,s]),Re=r=>{r.suspense&&typeof r.staleTime!="number"&&(r.staleTime=1e3)},ve=(r,e)=>r.isLoading&&r.isFetching&&!e,me=(r,e,t)=>(r==null?void 0:r.suspense)&&ve(e,t),Se=(r,e,t)=>e.fetchOptimistic(r).then(({data:s})=>{r.onSuccess==null||r.onSuccess(s),r.onSettled==null||r.onSettled(s,null)}).catch(s=>{t.clearReset(),r.onError==null||r.onError(s),r.onSettled==null||r.onSettled(void 0,s)});function be(r,e){const t=G({context:r.context}),s=ae(),i=he(),n=t.defaultQueryOptions(r);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=m.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=m.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=m.batchCalls(n.onSettled)),Re(n),fe(n,i),pe(i);const[u]=p.useState(()=>new e(t,n)),a=u.getOptimisticResult(n);if(ce(p.useCallback(f=>{const l=s?()=>{}:u.subscribe(m.batchCalls(f));return u.updateResult(),l},[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),p.useEffect(()=>{u.setOptions(n,{listeners:!1})},[n,u]),me(n,a,s))throw Se(n,u,i);if(ye({result:a,errorResetBoundary:i,useErrorBoundary:n.useErrorBoundary,query:u.getCurrentQuery()}))throw a.error;return n.notifyOnChangeProps?a:u.trackResult(a)}function Ee(r,e,t){const s=J(r,e,t);return be(s,X)}export{Ee as u};
