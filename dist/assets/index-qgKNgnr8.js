function o_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function a_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ip={exports:{}},ma={},Tp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ms=Symbol.for("react.element"),l_=Symbol.for("react.portal"),u_=Symbol.for("react.fragment"),c_=Symbol.for("react.strict_mode"),d_=Symbol.for("react.profiler"),f_=Symbol.for("react.provider"),h_=Symbol.for("react.context"),p_=Symbol.for("react.forward_ref"),m_=Symbol.for("react.suspense"),g_=Symbol.for("react.memo"),y_=Symbol.for("react.lazy"),Wd=Symbol.iterator;function v_(t){return t===null||typeof t!="object"?null:(t=Wd&&t[Wd]||t["@@iterator"],typeof t=="function"?t:null)}var kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pp=Object.assign,Rp={};function Kr(t,e,n){this.props=t,this.context=e,this.refs=Rp,this.updater=n||kp}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Kr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cp(){}Cp.prototype=Kr.prototype;function uc(t,e,n){this.props=t,this.context=e,this.refs=Rp,this.updater=n||kp}var cc=uc.prototype=new Cp;cc.constructor=uc;Pp(cc,Kr.prototype);cc.isPureReactComponent=!0;var Hd=Array.isArray,Ap=Object.prototype.hasOwnProperty,dc={current:null},Np={key:!0,ref:!0,__self:!0,__source:!0};function xp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ap.call(e,r)&&!Np.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ms,type:t,key:s,ref:o,props:i,_owner:dc.current}}function __(t,e){return{$$typeof:ms,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ms}function w_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kd=/\/+/g;function sl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w_(""+t.key):e.toString(36)}function oo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ms:case l_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sl(o,0):r,Hd(i)?(n="",t!=null&&(n=t.replace(Kd,"$&/")+"/"),oo(i,e,n,"",function(u){return u})):i!=null&&(fc(i)&&(i=__(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+sl(s,a);o+=oo(s,e,n,l,i)}else if(l=v_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+sl(s,a++),o+=oo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ls(t,e,n){if(t==null)return t;var r=[],i=0;return oo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function E_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},ao={transition:null},S_={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:ao,ReactCurrentOwner:dc};U.Children={map:Ls,forEach:function(t,e,n){Ls(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ls(t,function(){e++}),e},toArray:function(t){return Ls(t,function(e){return e})||[]},only:function(t){if(!fc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Kr;U.Fragment=u_;U.Profiler=d_;U.PureComponent=uc;U.StrictMode=c_;U.Suspense=m_;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S_;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ap.call(e,l)&&!Np.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ms,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:h_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:f_,_context:t},t.Consumer=t};U.createElement=xp;U.createFactory=function(t){var e=xp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:p_,render:t}};U.isValidElement=fc;U.lazy=function(t){return{$$typeof:y_,_payload:{_status:-1,_result:t},_init:E_}};U.memo=function(t,e){return{$$typeof:g_,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=ao.transition;ao.transition={};try{t()}finally{ao.transition=e}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(t,e){return Ae.current.useCallback(t,e)};U.useContext=function(t){return Ae.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ae.current.useEffect(t,e)};U.useId=function(){return Ae.current.useId()};U.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ae.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};U.useRef=function(t){return Ae.current.useRef(t)};U.useState=function(t){return Ae.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ae.current.useTransition()};U.version="18.2.0";Tp.exports=U;var T=Tp.exports;const Op=a_(T),Kl=o_({__proto__:null,default:Op},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=T,T_=Symbol.for("react.element"),k_=Symbol.for("react.fragment"),P_=Object.prototype.hasOwnProperty,R_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C_={key:!0,ref:!0,__self:!0,__source:!0};function Dp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)P_.call(e,r)&&!C_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:T_,type:t,key:s,ref:o,props:i,_owner:R_.current}}ma.Fragment=k_;ma.jsx=Dp;ma.jsxs=Dp;Ip.exports=ma;var m=Ip.exports,Gl={},Lp={exports:{}},qe={},bp={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var L=R.length;R.push(D);e:for(;0<L;){var ee=L-1>>>1,ue=R[ee];if(0<i(ue,D))R[ee]=D,R[L]=ue,L=ee;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],L=R.pop();if(L!==D){R[0]=L;e:for(var ee=0,ue=R.length,Os=ue>>>1;ee<Os;){var Cn=2*(ee+1)-1,il=R[Cn],An=Cn+1,Ds=R[An];if(0>i(il,L))An<ue&&0>i(Ds,il)?(R[ee]=Ds,R[An]=L,ee=An):(R[ee]=il,R[Cn]=L,ee=Cn);else if(An<ue&&0>i(Ds,L))R[ee]=Ds,R[An]=L,ee=An;else break e}}return D}function i(R,D){var L=R.sortIndex-D.sortIndex;return L!==0?L:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,v=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function E(R){if(w=!1,g(R),!y)if(n(l)!==null)y=!0,nl(I);else{var D=n(u);D!==null&&rl(E,D.startTime-R)}}function I(R,D){y=!1,w&&(w=!1,p(A),A=-1),v=!0;var L=h;try{for(g(D),d=n(l);d!==null&&(!(d.expirationTime>D)||R&&!rt());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var ue=ee(d.expirationTime<=D);D=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(l)&&r(l),g(D)}else r(l);d=n(l)}if(d!==null)var Os=!0;else{var Cn=n(u);Cn!==null&&rl(E,Cn.startTime-D),Os=!1}return Os}finally{d=null,h=L,v=!1}}var k=!1,C=null,A=-1,z=5,b=-1;function rt(){return!(t.unstable_now()-b<z)}function ei(){if(C!==null){var R=t.unstable_now();b=R;var D=!0;try{D=C(!0,R)}finally{D?ti():(k=!1,C=null)}}else k=!1}var ti;if(typeof f=="function")ti=function(){f(ei)};else if(typeof MessageChannel<"u"){var Bd=new MessageChannel,s_=Bd.port2;Bd.port1.onmessage=ei,ti=function(){s_.postMessage(null)}}else ti=function(){_(ei,0)};function nl(R){C=R,k||(k=!0,ti())}function rl(R,D){A=_(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,nl(I))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return R()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=h;h=R;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(R,D,L){var ee=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ee+L:ee):L=ee,R){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=L+ue,R={id:c++,callback:D,priorityLevel:R,startTime:L,expirationTime:ue,sortIndex:-1},L>ee?(R.sortIndex=L,e(u,R),n(l)===null&&R===n(u)&&(w?(p(A),A=-1):w=!0,rl(E,L-ee))):(R.sortIndex=ue,e(l,R),y||v||(y=!0,nl(I))),R},t.unstable_shouldYield=rt,t.unstable_wrapCallback=function(R){var D=h;return function(){var L=h;h=D;try{return R.apply(this,arguments)}finally{h=L}}}})(Up);bp.exports=Up;var A_=bp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=T,He=A_;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,bi={};function rr(t,e){Or(t,e),Or(t+"Capture",e)}function Or(t,e){for(bi[t]=e,t=0;t<e.length;t++)Fp.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gd={},qd={};function x_(t){return ql.call(qd,t)?!0:ql.call(Gd,t)?!1:N_.test(t)?qd[t]=!0:(Gd[t]=!0,!1)}function O_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D_(t,e,n,r){if(e===null||typeof e>"u"||O_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ne(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new Ne(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new Ne(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new Ne(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new Ne(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new Ne(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new Ne(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new Ne(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new Ne(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new Ne(t,5,!1,t.toLowerCase(),null,!1,!1)});var hc=/[\-:]([a-z])/g;function pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hc,pc);_e[e]=new Ne(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hc,pc);_e[e]=new Ne(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hc,pc);_e[e]=new Ne(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new Ne(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new Ne(t,1,!1,t.toLowerCase(),null,!0,!0)});function mc(t,e,n,r){var i=_e.hasOwnProperty(e)?_e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D_(e,n,i,r)&&(n=null),r||i===null?x_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),$p=Symbol.for("react.offscreen"),Qd=Symbol.iterator;function ni(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,ol;function di(t){if(ol===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ol=e&&e[1]||""}return`
`+ol+t}var al=!1;function ll(t,e){if(!t||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{al=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?di(t):""}function L_(t){switch(t.tag){case 5:return di(t.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return t=ll(t.type,!1),t;case 11:return t=ll(t.type.render,!1),t;case 1:return t=ll(t.type,!0),t;default:return""}}function Jl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case dr:return"Portal";case Ql:return"Profiler";case gc:return"StrictMode";case Yl:return"Suspense";case Xl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jp:return(t.displayName||"Context")+".Consumer";case Vp:return(t._context.displayName||"Context")+".Provider";case yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vc:return e=t.displayName||null,e!==null?e:Jl(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return Jl(t(e))}catch{}}return null}function b_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(e);case 8:return e===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function U_(t){var e=zp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Us(t){t._valueTracker||(t._valueTracker=U_(t))}function Bp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zl(t,e){var n=e.checked;return q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wp(t,e){e=e.checked,e!=null&&mc(t,"checked",e,!1)}function eu(t,e){Wp(t,e);var n=mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&tu(t,e.type,mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tu(t,e,n){(e!=="number"||Io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fi=Array.isArray;function Tr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(fi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mn(n)}}function Hp(t,e){var n=mn(e.value),r=mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ms,Gp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ms.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ui(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M_=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(t){M_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vi[e]=vi[t]})});function qp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vi.hasOwnProperty(t)&&vi[t]?(""+e).trim():e+"px"}function Qp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var F_=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(t,e){if(e){if(F_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function _c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var au=null,kr=null,Pr=null;function ef(t){if(t=vs(t)){if(typeof au!="function")throw Error(S(280));var e=t.stateNode;e&&(e=wa(e),au(t.stateNode,t.type,e))}}function Yp(t){kr?Pr?Pr.push(t):Pr=[t]:kr=t}function Xp(){if(kr){var t=kr,e=Pr;if(Pr=kr=null,ef(t),e)for(t=0;t<e.length;t++)ef(e[t])}}function Jp(t,e){return t(e)}function Zp(){}var ul=!1;function em(t,e,n){if(ul)return t(e,n);ul=!0;try{return Jp(t,e,n)}finally{ul=!1,(kr!==null||Pr!==null)&&(Zp(),Xp())}}function Mi(t,e){var n=t.stateNode;if(n===null)return null;var r=wa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var lu=!1;if(bt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){lu=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{lu=!1}function V_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _i=!1,To=null,ko=!1,uu=null,j_={onError:function(t){_i=!0,To=t}};function $_(t,e,n,r,i,s,o,a,l){_i=!1,To=null,V_.apply(j_,arguments)}function z_(t,e,n,r,i,s,o,a,l){if($_.apply(this,arguments),_i){if(_i){var u=To;_i=!1,To=null}else throw Error(S(198));ko||(ko=!0,uu=u)}}function ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tf(t){if(ir(t)!==t)throw Error(S(188))}function B_(t){var e=t.alternate;if(!e){if(e=ir(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tf(i),t;if(s===r)return tf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function nm(t){return t=B_(t),t!==null?rm(t):null}function rm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rm(t);if(e!==null)return e;t=t.sibling}return null}var im=He.unstable_scheduleCallback,nf=He.unstable_cancelCallback,W_=He.unstable_shouldYield,H_=He.unstable_requestPaint,te=He.unstable_now,K_=He.unstable_getCurrentPriorityLevel,wc=He.unstable_ImmediatePriority,sm=He.unstable_UserBlockingPriority,Po=He.unstable_NormalPriority,G_=He.unstable_LowPriority,om=He.unstable_IdlePriority,ga=null,wt=null;function q_(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(ga,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:X_,Q_=Math.log,Y_=Math.LN2;function X_(t){return t>>>=0,t===0?32:31-(Q_(t)/Y_|0)|0}var Fs=64,Vs=4194304;function hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ro(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hi(a):(s&=o,s!==0&&(r=hi(s)))}else o=n&~i,o!==0?r=hi(o):s!==0&&(r=hi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function J_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=J_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function am(){var t=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),t}function cl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function e0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ec(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function lm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var um,Sc,cm,dm,fm,du=!1,js=[],rn=null,sn=null,on=null,Fi=new Map,Vi=new Map,qt=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rf(t,e){switch(t){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(e.pointerId)}}function ii(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vs(e),e!==null&&Sc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n0(t,e,n,r,i){switch(e){case"focusin":return rn=ii(rn,t,e,n,r,i),!0;case"dragenter":return sn=ii(sn,t,e,n,r,i),!0;case"mouseover":return on=ii(on,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fi.set(s,ii(Fi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vi.set(s,ii(Vi.get(s)||null,t,e,n,r,i)),!0}return!1}function hm(t){var e=bn(t.target);if(e!==null){var n=ir(e);if(n!==null){if(e=n.tag,e===13){if(e=tm(n),e!==null){t.blockedOn=e,fm(t.priority,function(){cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ou=r,n.target.dispatchEvent(r),ou=null}else return e=vs(n),e!==null&&Sc(e),t.blockedOn=n,!1;e.shift()}return!0}function sf(t,e,n){lo(t)&&n.delete(e)}function r0(){du=!1,rn!==null&&lo(rn)&&(rn=null),sn!==null&&lo(sn)&&(sn=null),on!==null&&lo(on)&&(on=null),Fi.forEach(sf),Vi.forEach(sf)}function si(t,e){t.blockedOn===e&&(t.blockedOn=null,du||(du=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,r0)))}function ji(t){function e(i){return si(i,t)}if(0<js.length){si(js[0],t);for(var n=1;n<js.length;n++){var r=js[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rn!==null&&si(rn,t),sn!==null&&si(sn,t),on!==null&&si(on,t),Fi.forEach(e),Vi.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&qt.shift()}var Rr=zt.ReactCurrentBatchConfig,Co=!0;function i0(t,e,n,r){var i=j,s=Rr.transition;Rr.transition=null;try{j=1,Ic(t,e,n,r)}finally{j=i,Rr.transition=s}}function s0(t,e,n,r){var i=j,s=Rr.transition;Rr.transition=null;try{j=4,Ic(t,e,n,r)}finally{j=i,Rr.transition=s}}function Ic(t,e,n,r){if(Co){var i=fu(t,e,n,r);if(i===null)wl(t,e,r,Ao,n),rf(t,r);else if(n0(i,t,e,n,r))r.stopPropagation();else if(rf(t,r),e&4&&-1<t0.indexOf(t)){for(;i!==null;){var s=vs(i);if(s!==null&&um(s),s=fu(t,e,n,r),s===null&&wl(t,e,r,Ao,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wl(t,e,r,null,n)}}var Ao=null;function fu(t,e,n,r){if(Ao=null,t=_c(r),t=bn(t),t!==null)if(e=ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ao=t,null}function pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K_()){case wc:return 1;case sm:return 4;case Po:case G_:return 16;case om:return 536870912;default:return 16}default:return 16}}var en=null,Tc=null,uo=null;function mm(){if(uo)return uo;var t,e=Tc,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uo=i.slice(t,1<r?1-r:void 0)}function co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $s(){return!0}function of(){return!1}function Qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$s:of,this.isPropagationStopped=of,this}return q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),e}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Qe(Gr),ys=q({},Gr,{view:0,detail:0}),o0=Qe(ys),dl,fl,oi,ya=q({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(dl=t.screenX-oi.screenX,fl=t.screenY-oi.screenY):fl=dl=0,oi=t),dl)},movementY:function(t){return"movementY"in t?t.movementY:fl}}),af=Qe(ya),a0=q({},ya,{dataTransfer:0}),l0=Qe(a0),u0=q({},ys,{relatedTarget:0}),hl=Qe(u0),c0=q({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=Qe(c0),f0=q({},Gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h0=Qe(f0),p0=q({},Gr,{data:0}),lf=Qe(p0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y0[t])?!!e[t]:!1}function Pc(){return v0}var _0=q({},ys,{key:function(t){if(t.key){var e=m0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=Qe(_0),E0=q({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=Qe(E0),S0=q({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),I0=Qe(S0),T0=q({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=Qe(T0),P0=q({},ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=Qe(P0),C0=[9,13,27,32],Rc=bt&&"CompositionEvent"in window,wi=null;bt&&"documentMode"in document&&(wi=document.documentMode);var A0=bt&&"TextEvent"in window&&!wi,gm=bt&&(!Rc||wi&&8<wi&&11>=wi),cf=" ",df=!1;function ym(t,e){switch(t){case"keyup":return C0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function N0(t,e){switch(t){case"compositionend":return vm(e);case"keypress":return e.which!==32?null:(df=!0,cf);case"textInput":return t=e.data,t===cf&&df?null:t;default:return null}}function x0(t,e){if(hr)return t==="compositionend"||!Rc&&ym(t,e)?(t=mm(),uo=Tc=en=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gm&&e.locale!=="ko"?null:e.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!O0[t.type]:e==="textarea"}function _m(t,e,n,r){Yp(r),e=No(e,"onChange"),0<e.length&&(n=new kc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ei=null,$i=null;function D0(t){Nm(t,0)}function va(t){var e=gr(t);if(Bp(e))return t}function L0(t,e){if(t==="change")return e}var wm=!1;if(bt){var pl;if(bt){var ml="oninput"in document;if(!ml){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),ml=typeof hf.oninput=="function"}pl=ml}else pl=!1;wm=pl&&(!document.documentMode||9<document.documentMode)}function pf(){Ei&&(Ei.detachEvent("onpropertychange",Em),$i=Ei=null)}function Em(t){if(t.propertyName==="value"&&va($i)){var e=[];_m(e,$i,t,_c(t)),em(D0,e)}}function b0(t,e,n){t==="focusin"?(pf(),Ei=e,$i=n,Ei.attachEvent("onpropertychange",Em)):t==="focusout"&&pf()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return va($i)}function M0(t,e){if(t==="click")return va(e)}function F0(t,e){if(t==="input"||t==="change")return va(e)}function V0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:V0;function zi(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ql.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gf(t,e){var n=mf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mf(n)}}function Sm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Im(){for(var t=window,e=Io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Io(t.document)}return e}function Cc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function j0(t){var e=Im(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sm(n.ownerDocument.documentElement,n)){if(r!==null&&Cc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gf(n,s);var o=gf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $0=bt&&"documentMode"in document&&11>=document.documentMode,pr=null,hu=null,Si=null,pu=!1;function yf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||pr==null||pr!==Io(r)||(r=pr,"selectionStart"in r&&Cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&zi(Si,r)||(Si=r,r=No(hu,"onSelect"),0<r.length&&(e=new kc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pr)))}function zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},gl={},Tm={};bt&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function _a(t){if(gl[t])return gl[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tm)return gl[t]=e[n];return t}var km=_a("animationend"),Pm=_a("animationiteration"),Rm=_a("animationstart"),Cm=_a("transitionend"),Am=new Map,vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(t,e){Am.set(t,e),rr(e,[t])}for(var yl=0;yl<vf.length;yl++){var vl=vf[yl],z0=vl.toLowerCase(),B0=vl[0].toUpperCase()+vl.slice(1);Sn(z0,"on"+B0)}Sn(km,"onAnimationEnd");Sn(Pm,"onAnimationIteration");Sn(Rm,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Cm,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function _f(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,z_(r,e,void 0,t),t.currentTarget=null}function Nm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_f(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_f(i,a,u),s=l}}}if(ko)throw t=uu,ko=!1,uu=null,t}function B(t,e){var n=e[_u];n===void 0&&(n=e[_u]=new Set);var r=t+"__bubble";n.has(r)||(xm(e,t,2,!1),n.add(r))}function _l(t,e,n){var r=0;e&&(r|=4),xm(n,t,r,e)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Bi(t){if(!t[Bs]){t[Bs]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(W0.has(n)||_l(n,!1,t),_l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bs]||(e[Bs]=!0,_l("selectionchange",!1,e))}}function xm(t,e,n,r){switch(pm(e)){case 1:var i=i0;break;case 4:i=s0;break;default:i=Ic}n=i.bind(null,e,n,t),i=void 0,!lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=bn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}em(function(){var u=s,c=_c(n),d=[];e:{var h=Am.get(t);if(h!==void 0){var v=kc,y=t;switch(t){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":v=w0;break;case"focusin":y="focus",v=hl;break;case"focusout":y="blur",v=hl;break;case"beforeblur":case"afterblur":v=hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=l0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=I0;break;case km:case Pm:case Rm:v=d0;break;case Cm:v=k0;break;case"scroll":v=o0;break;case"wheel":v=R0;break;case"copy":case"cut":case"paste":v=h0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=uf}var w=(e&4)!==0,_=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Mi(f,p),E!=null&&w.push(Wi(f,E,g)))),_)break;f=f.return}0<w.length&&(h=new v(h,y,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==ou&&(y=n.relatedTarget||n.fromElement)&&(bn(y)||y[Ut]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?bn(y):null,y!==null&&(_=ir(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=af,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=uf,E="onPointerLeave",p="onPointerEnter",f="pointer"),_=v==null?h:gr(v),g=y==null?h:gr(y),h=new w(E,f+"leave",v,n,c),h.target=_,h.relatedTarget=g,E=null,bn(c)===u&&(w=new w(p,f+"enter",y,n,c),w.target=g,w.relatedTarget=_,E=w),_=E,v&&y)t:{for(w=v,p=y,f=0,g=w;g;g=lr(g))f++;for(g=0,E=p;E;E=lr(E))g++;for(;0<f-g;)w=lr(w),f--;for(;0<g-f;)p=lr(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=lr(w),p=lr(p)}w=null}else w=null;v!==null&&wf(d,h,v,w,!1),y!==null&&_!==null&&wf(d,_,y,w,!0)}}e:{if(h=u?gr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var I=L0;else if(ff(h))if(wm)I=F0;else{I=U0;var k=b0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=M0);if(I&&(I=I(t,u))){_m(d,I,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&tu(h,"number",h.value)}switch(k=u?gr(u):window,t){case"focusin":(ff(k)||k.contentEditable==="true")&&(pr=k,hu=u,Si=null);break;case"focusout":Si=hu=pr=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,yf(d,n,c);break;case"selectionchange":if($0)break;case"keydown":case"keyup":yf(d,n,c)}var C;if(Rc)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else hr?ym(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(gm&&n.locale!=="ko"&&(hr||A!=="onCompositionStart"?A==="onCompositionEnd"&&hr&&(C=mm()):(en=c,Tc="value"in en?en.value:en.textContent,hr=!0)),k=No(u,A),0<k.length&&(A=new lf(A,t,null,n,c),d.push({event:A,listeners:k}),C?A.data=C:(C=vm(n),C!==null&&(A.data=C)))),(C=A0?N0(t,n):x0(t,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(c=new lf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Nm(d,e)})}function Wi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mi(t,n),s!=null&&r.unshift(Wi(t,s,i)),s=Mi(t,e),s!=null&&r.push(Wi(t,s,i))),t=t.return}return r}function lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Mi(n,s),l!=null&&o.unshift(Wi(n,l,a))):i||(l=Mi(n,s),l!=null&&o.push(Wi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Ef(t){return(typeof t=="string"?t:""+t).replace(H0,`
`).replace(K0,"")}function Ws(t,e,n){if(e=Ef(e),Ef(t)!==e&&n)throw Error(S(425))}function xo(){}var mu=null,gu=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(Q0)}:vu;function Q0(t){setTimeout(function(){throw t})}function El(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ji(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ji(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function If(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qr=Math.random().toString(36).slice(2),vt="__reactFiber$"+qr,Hi="__reactProps$"+qr,Ut="__reactContainer$"+qr,_u="__reactEvents$"+qr,Y0="__reactListeners$"+qr,X0="__reactHandles$"+qr;function bn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ut]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=If(t);t!==null;){if(n=t[vt])return n;t=If(t)}return e}t=n,n=t.parentNode}return null}function vs(t){return t=t[vt]||t[Ut],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function wa(t){return t[Hi]||null}var wu=[],yr=-1;function In(t){return{current:t}}function W(t){0>yr||(t.current=wu[yr],wu[yr]=null,yr--)}function $(t,e){yr++,wu[yr]=t.current,t.current=e}var gn={},Te=In(gn),be=In(!1),Bn=gn;function Dr(t,e){var n=t.type.contextTypes;if(!n)return gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function Oo(){W(be),W(Te)}function Tf(t,e,n){if(Te.current!==gn)throw Error(S(168));$(Te,e),$(be,n)}function Om(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,b_(t)||"Unknown",i));return q({},n,r)}function Do(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gn,Bn=Te.current,$(Te,t),$(be,be.current),!0}function kf(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Om(t,e,Bn),r.__reactInternalMemoizedMergedChildContext=t,W(be),W(Te),$(Te,t)):W(be),$(be,n)}var Rt=null,Ea=!1,Sl=!1;function Dm(t){Rt===null?Rt=[t]:Rt.push(t)}function J0(t){Ea=!0,Dm(t)}function Tn(){if(!Sl&&Rt!==null){Sl=!0;var t=0,e=j;try{var n=Rt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rt=null,Ea=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(t+1)),im(wc,Tn),i}finally{j=e,Sl=!1}}return null}var vr=[],_r=0,Lo=null,bo=0,Ye=[],Xe=0,Wn=null,At=1,Nt="";function Nn(t,e){vr[_r++]=bo,vr[_r++]=Lo,Lo=t,bo=e}function Lm(t,e,n){Ye[Xe++]=At,Ye[Xe++]=Nt,Ye[Xe++]=Wn,Wn=t;var r=At;t=Nt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,At=1<<32-ut(e)+i|n<<i|r,Nt=s+t}else At=1<<s|n<<i|r,Nt=t}function Ac(t){t.return!==null&&(Nn(t,1),Lm(t,1,0))}function Nc(t){for(;t===Lo;)Lo=vr[--_r],vr[_r]=null,bo=vr[--_r],vr[_r]=null;for(;t===Wn;)Wn=Ye[--Xe],Ye[Xe]=null,Nt=Ye[--Xe],Ye[Xe]=null,At=Ye[--Xe],Ye[Xe]=null}var Be=null,je=null,H=!1,at=null;function bm(t,e){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,je=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wn!==null?{id:At,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,je=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Su(t){if(H){var e=je;if(e){var n=e;if(!Pf(t,e)){if(Eu(t))throw Error(S(418));e=an(n.nextSibling);var r=Be;e&&Pf(t,e)?bm(r,n):(t.flags=t.flags&-4097|2,H=!1,Be=t)}}else{if(Eu(t))throw Error(S(418));t.flags=t.flags&-4097|2,H=!1,Be=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Hs(t){if(t!==Be)return!1;if(!H)return Rf(t),H=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=je)){if(Eu(t))throw Um(),Error(S(418));for(;e;)bm(t,e),e=an(e.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){je=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}je=null}}else je=Be?an(t.stateNode.nextSibling):null;return!0}function Um(){for(var t=je;t;)t=an(t.nextSibling)}function Lr(){je=Be=null,H=!1}function xc(t){at===null?at=[t]:at.push(t)}var Z0=zt.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Uo=In(null),Mo=null,wr=null,Oc=null;function Dc(){Oc=wr=Mo=null}function Lc(t){var e=Uo.current;W(Uo),t._currentValue=e}function Iu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cr(t,e){Mo=t,Oc=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Le=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(Oc!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(Mo===null)throw Error(S(308));wr=t,Mo.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var Un=null;function bc(t){Un===null?Un=[t]:Un.push(t)}function Mm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,bc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function fo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}function Cf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fo(t,e,n,r){var i=t.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,v=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=q({},d,h);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kn|=o,t.lanes=o,t.memoizedState=d}}function Af(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Vm=new Mp.Component().refs;function Tu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sa={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ce(),i=cn(t),s=Dt(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ct(e,t,i,r),fo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ce(),i=cn(t),s=Dt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ct(e,t,i,r),fo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ce(),r=cn(t),i=Dt(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(ct(e,t,r,n),fo(e,t,r))}};function Nf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zi(n,r)||!zi(i,s):!0}function jm(t,e,n){var r=!1,i=gn,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=Ue(e)?Bn:Te.current,r=e.contextTypes,s=(r=r!=null)?Dr(t,i):gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sa.enqueueReplaceState(e,e.state,null)}function ku(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Vm,Uc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=Ue(e)?Bn:Te.current,i.context=Dr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sa.enqueueReplaceState(i,i.state,null),Fo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Vm&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Ks(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Of(t){var e=t._init;return e(t._payload)}function $m(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=dn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=Al(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var I=g.type;return I===fr?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&Of(I)===f.type)?(E=i(f,g.props),E.ref=ai(p,f,g),E.return=p,E):(E=vo(g.type,g.key,g.props,null,p.mode,E),E.ref=ai(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Nl(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,I){return f===null||f.tag!==7?(f=Vn(g,p.mode,E,I),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Al(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bs:return g=vo(f.type,f.key,f.props,null,p.mode,g),g.ref=ai(p,null,f),g.return=p,g;case dr:return f=Nl(f,p.mode,g),f.return=p,f;case Ht:var E=f._init;return d(p,E(f._payload),g)}if(fi(f)||ni(f))return f=Vn(f,p.mode,g,null),f.return=p,f;Ks(p,f)}return null}function h(p,f,g,E){var I=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:return g.key===I?l(p,f,g,E):null;case dr:return g.key===I?u(p,f,g,E):null;case Ht:return I=g._init,h(p,f,I(g._payload),E)}if(fi(g)||ni(g))return I!==null?null:c(p,f,g,E,null);Ks(p,g)}return null}function v(p,f,g,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case bs:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,I);case dr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,I);case Ht:var k=E._init;return v(p,f,g,k(E._payload),I)}if(fi(E)||ni(E))return p=p.get(g)||null,c(f,p,E,I,null);Ks(f,E)}return null}function y(p,f,g,E){for(var I=null,k=null,C=f,A=f=0,z=null;C!==null&&A<g.length;A++){C.index>A?(z=C,C=null):z=C.sibling;var b=h(p,C,g[A],E);if(b===null){C===null&&(C=z);break}t&&C&&b.alternate===null&&e(p,C),f=s(b,f,A),k===null?I=b:k.sibling=b,k=b,C=z}if(A===g.length)return n(p,C),H&&Nn(p,A),I;if(C===null){for(;A<g.length;A++)C=d(p,g[A],E),C!==null&&(f=s(C,f,A),k===null?I=C:k.sibling=C,k=C);return H&&Nn(p,A),I}for(C=r(p,C);A<g.length;A++)z=v(C,p,A,g[A],E),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?A:z.key),f=s(z,f,A),k===null?I=z:k.sibling=z,k=z);return t&&C.forEach(function(rt){return e(p,rt)}),H&&Nn(p,A),I}function w(p,f,g,E){var I=ni(g);if(typeof I!="function")throw Error(S(150));if(g=I.call(g),g==null)throw Error(S(151));for(var k=I=null,C=f,A=f=0,z=null,b=g.next();C!==null&&!b.done;A++,b=g.next()){C.index>A?(z=C,C=null):z=C.sibling;var rt=h(p,C,b.value,E);if(rt===null){C===null&&(C=z);break}t&&C&&rt.alternate===null&&e(p,C),f=s(rt,f,A),k===null?I=rt:k.sibling=rt,k=rt,C=z}if(b.done)return n(p,C),H&&Nn(p,A),I;if(C===null){for(;!b.done;A++,b=g.next())b=d(p,b.value,E),b!==null&&(f=s(b,f,A),k===null?I=b:k.sibling=b,k=b);return H&&Nn(p,A),I}for(C=r(p,C);!b.done;A++,b=g.next())b=v(C,p,A,b.value,E),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?A:b.key),f=s(b,f,A),k===null?I=b:k.sibling=b,k=b);return t&&C.forEach(function(ei){return e(p,ei)}),H&&Nn(p,A),I}function _(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:e:{for(var I=g.key,k=f;k!==null;){if(k.key===I){if(I=g.type,I===fr){if(k.tag===7){n(p,k.sibling),f=i(k,g.props.children),f.return=p,p=f;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&Of(I)===k.type){n(p,k.sibling),f=i(k,g.props),f.ref=ai(p,k,g),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}g.type===fr?(f=Vn(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=vo(g.type,g.key,g.props,null,p.mode,E),E.ref=ai(p,f,g),E.return=p,p=E)}return o(p);case dr:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Nl(g,p.mode,E),f.return=p,p=f}return o(p);case Ht:return k=g._init,_(p,f,k(g._payload),E)}if(fi(g))return y(p,f,g,E);if(ni(g))return w(p,f,g,E);Ks(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Al(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return _}var br=$m(!0),zm=$m(!1),_s={},Et=In(_s),Ki=In(_s),Gi=In(_s);function Mn(t){if(t===_s)throw Error(S(174));return t}function Mc(t,e){switch($(Gi,e),$(Ki,t),$(Et,_s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ru(e,t)}W(Et),$(Et,e)}function Ur(){W(Et),W(Ki),W(Gi)}function Bm(t){Mn(Gi.current);var e=Mn(Et.current),n=ru(e,t.type);e!==n&&($(Ki,t),$(Et,n))}function Fc(t){Ki.current===t&&(W(Et),W(Ki))}var K=In(0);function Vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Il=[];function Vc(){for(var t=0;t<Il.length;t++)Il[t]._workInProgressVersionPrimary=null;Il.length=0}var ho=zt.ReactCurrentDispatcher,Tl=zt.ReactCurrentBatchConfig,Hn=0,G=null,se=null,de=null,jo=!1,Ii=!1,qi=0,ew=0;function we(){throw Error(S(321))}function jc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function $c(t,e,n,r,i,s){if(Hn=s,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ho.current=t===null||t.memoizedState===null?iw:sw,t=n(r,i),Ii){s=0;do{if(Ii=!1,qi=0,25<=s)throw Error(S(301));s+=1,de=se=null,e.updateQueue=null,ho.current=ow,t=n(r,i)}while(Ii)}if(ho.current=$o,e=se!==null&&se.next!==null,Hn=0,de=se=G=null,jo=!1,e)throw Error(S(300));return t}function zc(){var t=qi!==0;return qi=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?G.memoizedState=de=t:de=de.next=t,de}function nt(){if(se===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=de===null?G.memoizedState:de.next;if(e!==null)de=e,se=t;else{if(t===null)throw Error(S(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?G.memoizedState=de=t:de=de.next=t}return de}function Qi(t,e){return typeof e=="function"?e(t):e}function kl(t){var e=nt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Hn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,G.lanes|=c,Kn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ft(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,G.lanes|=s,Kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pl(t){var e=nt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wm(){}function Hm(t,e){var n=G,r=nt(),i=e(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,Bc(qm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Yi(9,Gm.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(S(349));Hn&30||Km(n,e,i)}return i}function Km(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gm(t,e,n,r){e.value=n,e.getSnapshot=r,Qm(e)&&Ym(t)}function qm(t,e,n){return n(function(){Qm(e)&&Ym(t)})}function Qm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function Ym(t){var e=Mt(t,1);e!==null&&ct(e,t,1,-1)}function Df(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},e.queue=t,t=t.dispatch=rw.bind(null,G,t),[e.memoizedState,t]}function Yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xm(){return nt().memoizedState}function po(t,e,n,r){var i=yt();G.flags|=t,i.memoizedState=Yi(1|e,n,void 0,r===void 0?null:r)}function Ia(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&jc(r,o.deps)){i.memoizedState=Yi(e,n,s,r);return}}G.flags|=t,i.memoizedState=Yi(1|e,n,s,r)}function Lf(t,e){return po(8390656,8,t,e)}function Bc(t,e){return Ia(2048,8,t,e)}function Jm(t,e){return Ia(4,2,t,e)}function Zm(t,e){return Ia(4,4,t,e)}function eg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tg(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4,4,eg.bind(null,e,t),n)}function Wc(){}function ng(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rg(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ig(t,e,n){return Hn&21?(ft(n,e)||(n=am(),G.lanes|=n,Kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n)}function tw(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=Tl.transition;Tl.transition={};try{t(!1),e()}finally{j=n,Tl.transition=r}}function sg(){return nt().memoizedState}function nw(t,e,n){var r=cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},og(t))ag(e,n);else if(n=Mm(t,e,n,r),n!==null){var i=Ce();ct(n,t,r,i),lg(n,e,r)}}function rw(t,e,n){var r=cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(og(t))ag(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,o)){var l=e.interleaved;l===null?(i.next=i,bc(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Mm(t,e,i,r),n!==null&&(i=Ce(),ct(n,t,r,i),lg(n,e,r))}}function og(t){var e=t.alternate;return t===G||e!==null&&e===G}function ag(t,e){Ii=jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}var $o={readContext:tt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},iw={readContext:tt,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:Lf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,po(4194308,4,eg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return po(4194308,4,t,e)},useInsertionEffect:function(t,e){return po(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nw.bind(null,G,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:Df,useDebugValue:Wc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=Df(!1),e=t[0];return t=tw.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=G,i=yt();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),fe===null)throw Error(S(349));Hn&30||Km(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lf(qm.bind(null,r,s,t),[t]),r.flags|=2048,Yi(9,Gm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yt(),e=fe.identifierPrefix;if(H){var n=Nt,r=At;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ew++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sw={readContext:tt,useCallback:ng,useContext:tt,useEffect:Bc,useImperativeHandle:tg,useInsertionEffect:Jm,useLayoutEffect:Zm,useMemo:rg,useReducer:kl,useRef:Xm,useState:function(){return kl(Qi)},useDebugValue:Wc,useDeferredValue:function(t){var e=nt();return ig(e,se.memoizedState,t)},useTransition:function(){var t=kl(Qi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:Hm,useId:sg,unstable_isNewReconciler:!1},ow={readContext:tt,useCallback:ng,useContext:tt,useEffect:Bc,useImperativeHandle:tg,useInsertionEffect:Jm,useLayoutEffect:Zm,useMemo:rg,useReducer:Pl,useRef:Xm,useState:function(){return Pl(Qi)},useDebugValue:Wc,useDeferredValue:function(t){var e=nt();return se===null?e.memoizedState=t:ig(e,se.memoizedState,t)},useTransition:function(){var t=Pl(Qi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:Hm,useId:sg,unstable_isNewReconciler:!1};function Mr(t,e){try{var n="",r=e;do n+=L_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aw=typeof WeakMap=="function"?WeakMap:Map;function ug(t,e,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bo||(Bo=!0,Uu=r),Pu(t,e)},n}function cg(t,e,n){n=Dt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pu(t,e),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ew.bind(null,t,e,n),e.then(t,t))}function Uf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dt(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t)}var lw=zt.ReactCurrentOwner,Le=!1;function Re(t,e,n,r){e.child=t===null?zm(e,null,n,r):br(e,t.child,n,r)}function Ff(t,e,n,r,i){n=n.render;var s=e.ref;return Cr(e,i),r=$c(t,e,n,r,s,i),n=zc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(H&&n&&Ac(e),e.flags|=1,Re(t,e,r,i),e.child)}function Vf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dg(t,e,s,r,i)):(t=vo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zi,n(o,r)&&t.ref===e.ref)return Ft(t,e,i)}return e.flags|=1,t=dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function dg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Le=!0);else return e.lanes=t.lanes,Ft(t,e,i)}return Ru(t,e,n,r,i)}function fg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Sr,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(Sr,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(Sr,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(Sr,Ve),Ve|=r;return Re(t,e,i,n),e.child}function hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,r,i){var s=Ue(n)?Bn:Te.current;return s=Dr(e,s),Cr(e,i),n=$c(t,e,n,r,s,i),r=zc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(H&&r&&Ac(e),e.flags|=1,Re(t,e,n,i),e.child)}function jf(t,e,n,r,i){if(Ue(n)){var s=!0;Do(e)}else s=!1;if(Cr(e,i),e.stateNode===null)mo(t,e),jm(e,n,r),ku(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Ue(n)?Bn:Te.current,u=Dr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&xf(e,o,r,u),Kt=!1;var h=e.memoizedState;o.state=h,Fo(e,r,o,i),l=e.memoizedState,a!==r||h!==l||be.current||Kt?(typeof c=="function"&&(Tu(e,n,c,r),l=e.memoizedState),(a=Kt||Nf(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:st(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=Ue(n)?Bn:Te.current,l=Dr(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&xf(e,o,r,l),Kt=!1,h=e.memoizedState,o.state=h,Fo(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||be.current||Kt?(typeof v=="function"&&(Tu(e,n,v,r),y=e.memoizedState),(u=Kt||Nf(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Cu(t,e,n,r,s,i)}function Cu(t,e,n,r,i,s){hg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kf(e,n,!1),Ft(t,e,s);r=e.stateNode,lw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=br(e,t.child,null,s),e.child=br(e,null,a,s)):Re(t,e,a,s),e.memoizedState=r.state,i&&kf(e,n,!0),e.child}function pg(t){var e=t.stateNode;e.pendingContext?Tf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tf(t,e.context,!1),Mc(t,e.containerInfo)}function $f(t,e,n,r,i){return Lr(),xc(i),e.flags|=256,Re(t,e,n,r),e.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function mg(t,e,n){var r=e.pendingProps,i=K.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(K,i&1),t===null)return Su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pa(o,r,0,null),t=Vn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nu(n),e.memoizedState=Au,t):Hc(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uw(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dn(a,s):(s=Vn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Au,r}return s=t.child,t=s.sibling,r=dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hc(t,e){return e=Pa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gs(t,e,n,r){return r!==null&&xc(r),br(e,t.child,null,n),t=Hc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rl(Error(S(422))),Gs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pa({mode:"visible",children:r.children},i,0,null),s=Vn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&br(e,t.child,null,o),e.child.memoizedState=Nu(o),e.memoizedState=Au,s);if(!(e.mode&1))return Gs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Rl(s,r,void 0),Gs(t,e,o,r)}if(a=(o&t.childLanes)!==0,Le||a){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ct(r,t,i,-1))}return Xc(),r=Rl(Error(S(421))),Gs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,je=an(i.nextSibling),Be=e,H=!0,at=null,t!==null&&(Ye[Xe++]=At,Ye[Xe++]=Nt,Ye[Xe++]=Wn,At=t.id,Nt=t.overflow,Wn=e),e=Hc(e,r.children),e.flags|=4096,e)}function zf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Iu(t.return,e,n)}function Cl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zf(t,n,e);else if(t.tag===19)zf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cl(e,!0,n,null,s);break;case"together":Cl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cw(t,e,n){switch(e.tag){case 3:pg(e),Lr();break;case 5:Bm(e);break;case 1:Ue(e.type)&&Do(e);break;case 4:Mc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(Uo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?mg(t,e,n):($(K,K.current&1),t=Ft(t,e,n),t!==null?t.sibling:null);$(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,fg(t,e,n)}return Ft(t,e,n)}var yg,xu,vg,_g;yg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};vg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mn(Et.current);var s=null;switch(n){case"input":i=Zl(t,i),r=Zl(t,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=nu(t,i),r=nu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xo)}iu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_g=function(t,e,n,r){n!==r&&(e.flags|=4)};function li(t,e){if(!H)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dw(t,e,n){var r=e.pendingProps;switch(Nc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Ue(e.type)&&Oo(),Ee(e),null;case 3:return r=e.stateNode,Ur(),W(be),W(Te),Vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,at!==null&&(Vu(at),at=null))),xu(t,e),Ee(e),null;case 5:Fc(e);var i=Mn(Gi.current);if(n=e.type,t!==null&&e.stateNode!=null)vg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ee(e),null}if(t=Mn(Et.current),Hs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[Hi]=s,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)B(pi[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Yd(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Jd(r,s),B("invalid",r)}iu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,a,t),i=["children",""+a]):bi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Us(r),Xd(r,s,!0);break;case"textarea":Us(r),Zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[Hi]=r,yg(t,e,!1,!1),e.stateNode=t;e:{switch(o=su(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)B(pi[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":Yd(t,r),i=Zl(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),B("invalid",t);break;case"textarea":Jd(t,r),i=nu(t,r),B("invalid",t);break;default:i=r}iu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ui(t,l):typeof l=="number"&&Ui(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",t):l!=null&&mc(t,s,l,o))}switch(n){case"input":Us(t),Xd(t,r,!1);break;case"textarea":Us(t),Zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Tr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Tr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)_g(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Mn(Gi.current),Mn(Et.current),Hs(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:Ws(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return Ee(e),null;case 13:if(W(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(H&&je!==null&&e.mode&1&&!(e.flags&128))Um(),Lr(),e.flags|=98560,s=!1;else if(s=Hs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[vt]=e}else Lr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else at!==null&&(Vu(at),at=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?le===0&&(le=3):Xc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Ur(),xu(t,e),t===null&&Bi(e.stateNode.containerInfo),Ee(e),null;case 10:return Lc(e.type._context),Ee(e),null;case 17:return Ue(e.type)&&Oo(),Ee(e),null;case 19:if(W(K),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)li(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vo(t),o!==null){for(e.flags|=128,li(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(K,K.current&1|2),e.child}t=t.sibling}s.tail!==null&&te()>Fr&&(e.flags|=128,r=!0,li(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!H)return Ee(e),null}else 2*te()-s.renderingStartTime>Fr&&n!==1073741824&&(e.flags|=128,r=!0,li(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=te(),e.sibling=null,n=K.current,$(K,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Yc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function fw(t,e){switch(Nc(e),e.tag){case 1:return Ue(e.type)&&Oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),W(be),W(Te),Vc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fc(e),null;case 13:if(W(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Lr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(K),null;case 4:return Ur(),null;case 10:return Lc(e.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var qs=!1,Ie=!1,hw=typeof WeakSet=="function"?WeakSet:Set,P=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(t,e,r)}else n.current=null}function Ou(t,e,n){try{n()}catch(r){Q(t,e,r)}}var Bf=!1;function pw(t,e){if(mu=Co,t=Im(),Cc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:t,selectionRange:n},Co=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:st(e.type,w),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){Q(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=Bf,Bf=!1,y}function Ti(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ou(e,n,s)}i=i.next}while(i!==r)}}function Ta(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Du(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wg(t){var e=t.alternate;e!==null&&(t.alternate=null,wg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[Hi],delete e[_u],delete e[Y0],delete e[X0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Eg(t){return t.tag===5||t.tag===3||t.tag===4}function Wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xo));else if(r!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}function bu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bu(t,e,n),t=t.sibling;t!==null;)bu(t,e,n),t=t.sibling}var me=null,ot=!1;function Bt(t,e,n){for(n=n.child;n!==null;)Sg(t,e,n),n=n.sibling}function Sg(t,e,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(ga,n)}catch{}switch(n.tag){case 5:Ie||Er(n,e);case 6:var r=me,i=ot;me=null,Bt(t,e,n),me=r,ot=i,me!==null&&(ot?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(ot?(t=me,n=n.stateNode,t.nodeType===8?El(t.parentNode,n):t.nodeType===1&&El(t,n),ji(t)):El(me,n.stateNode));break;case 4:r=me,i=ot,me=n.stateNode.containerInfo,ot=!0,Bt(t,e,n),me=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ou(n,e,o),i=i.next}while(i!==r)}Bt(t,e,n);break;case 1:if(!Ie&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,e,a)}Bt(t,e,n);break;case 21:Bt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Bt(t,e,n),Ie=r):Bt(t,e,n);break;default:Bt(t,e,n)}}function Hf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hw),e.forEach(function(r){var i=Iw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,ot=!1;break e;case 3:me=a.stateNode.containerInfo,ot=!0;break e;case 4:me=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(me===null)throw Error(S(160));Sg(s,o,i),me=null,ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ig(e,t),e=e.sibling}function Ig(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),gt(t),r&4){try{Ti(3,t,t.return),Ta(3,t)}catch(w){Q(t,t.return,w)}try{Ti(5,t,t.return)}catch(w){Q(t,t.return,w)}}break;case 1:it(e,t),gt(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(it(e,t),gt(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{Ui(i,"")}catch(w){Q(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wp(i,s),su(a,o);var u=su(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Qp(i,d):c==="dangerouslySetInnerHTML"?Gp(i,d):c==="children"?Ui(i,d):mc(i,c,d,u)}switch(a){case"input":eu(i,s);break;case"textarea":Hp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Tr(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Tr(i,!!s.multiple,s.defaultValue,!0):Tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hi]=s}catch(w){Q(t,t.return,w)}}break;case 6:if(it(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Q(t,t.return,w)}}break;case 3:if(it(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(e.containerInfo)}catch(w){Q(t,t.return,w)}break;case 4:it(e,t),gt(t);break;case 13:it(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qc=te())),r&4&&Hf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||c,it(e,t),Ie=u):it(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(d=P=c;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ti(4,h,h.return);break;case 1:Er(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){Gf(d);continue}}v!==null?(v.return=h,P=v):Gf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qp("display",o))}catch(w){Q(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Q(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(e,t),gt(t),r&4&&Hf(t);break;case 21:break;default:it(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Eg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ui(i,""),r.flags&=-33);var s=Wf(t);bu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wf(t);Lu(t,a,o);break;default:throw Error(S(161))}}catch(l){Q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mw(t,e,n){P=t,Tg(t)}function Tg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=qs;var u=Ie;if(qs=o,(Ie=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?qf(i):l!==null?(l.return=o,P=l):qf(i);for(;s!==null;)P=s,Tg(s),s=s.sibling;P=i,qs=a,Ie=u}Kf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Kf(t)}}function Kf(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Ta(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Af(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Af(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ji(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ie||e.flags&512&&Du(e)}catch(h){Q(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Gf(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function qf(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ta(4,e)}catch(l){Q(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Q(e,i,l)}}var s=e.return;try{Du(e)}catch(l){Q(e,s,l)}break;case 5:var o=e.return;try{Du(e)}catch(l){Q(e,o,l)}}}catch(l){Q(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var gw=Math.ceil,zo=zt.ReactCurrentDispatcher,Kc=zt.ReactCurrentOwner,et=zt.ReactCurrentBatchConfig,F=0,fe=null,re=null,ve=0,Ve=0,Sr=In(0),le=0,Xi=null,Kn=0,ka=0,Gc=0,ki=null,Oe=null,qc=0,Fr=1/0,Pt=null,Bo=!1,Uu=null,un=null,Qs=!1,tn=null,Wo=0,Pi=0,Mu=null,go=-1,yo=0;function Ce(){return F&6?te():go!==-1?go:go=te()}function cn(t){return t.mode&1?F&2&&ve!==0?ve&-ve:Z0.transition!==null?(yo===0&&(yo=am()),yo):(t=j,t!==0||(t=window.event,t=t===void 0?16:pm(t.type)),t):1}function ct(t,e,n,r){if(50<Pi)throw Pi=0,Mu=null,Error(S(185));gs(t,n,r),(!(F&2)||t!==fe)&&(t===fe&&(!(F&2)&&(ka|=n),le===4&&Qt(t,ve)),Me(t,r),n===1&&F===0&&!(e.mode&1)&&(Fr=te()+500,Ea&&Tn()))}function Me(t,e){var n=t.callbackNode;Z_(t,e);var r=Ro(t,t===fe?ve:0);if(r===0)n!==null&&nf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nf(n),e===1)t.tag===0?J0(Qf.bind(null,t)):Dm(Qf.bind(null,t)),q0(function(){!(F&6)&&Tn()}),n=null;else{switch(lm(r)){case 1:n=wc;break;case 4:n=sm;break;case 16:n=Po;break;case 536870912:n=om;break;default:n=Po}n=Og(n,kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kg(t,e){if(go=-1,yo=0,F&6)throw Error(S(327));var n=t.callbackNode;if(Ar()&&t.callbackNode!==n)return null;var r=Ro(t,t===fe?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ho(t,r);else{e=r;var i=F;F|=2;var s=Rg();(fe!==t||ve!==e)&&(Pt=null,Fr=te()+500,Fn(t,e));do try{_w();break}catch(a){Pg(t,a)}while(!0);Dc(),zo.current=s,F=i,re!==null?e=0:(fe=null,ve=0,e=le)}if(e!==0){if(e===2&&(i=cu(t),i!==0&&(r=i,e=Fu(t,i))),e===1)throw n=Xi,Fn(t,0),Qt(t,r),Me(t,te()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!yw(i)&&(e=Ho(t,r),e===2&&(s=cu(t),s!==0&&(r=s,e=Fu(t,s))),e===1))throw n=Xi,Fn(t,0),Qt(t,r),Me(t,te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:xn(t,Oe,Pt);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=qc+500-te(),10<e)){if(Ro(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ce(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vu(xn.bind(null,t,Oe,Pt),e);break}xn(t,Oe,Pt);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gw(r/1960))-r,10<r){t.timeoutHandle=vu(xn.bind(null,t,Oe,Pt),r);break}xn(t,Oe,Pt);break;case 5:xn(t,Oe,Pt);break;default:throw Error(S(329))}}}return Me(t,te()),t.callbackNode===n?kg.bind(null,t):null}function Fu(t,e){var n=ki;return t.current.memoizedState.isDehydrated&&(Fn(t,e).flags|=256),t=Ho(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&Vu(e)),t}function Vu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~Gc,e&=~ka,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function Qf(t){if(F&6)throw Error(S(327));Ar();var e=Ro(t,0);if(!(e&1))return Me(t,te()),null;var n=Ho(t,e);if(t.tag!==0&&n===2){var r=cu(t);r!==0&&(e=r,n=Fu(t,r))}if(n===1)throw n=Xi,Fn(t,0),Qt(t,e),Me(t,te()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,Oe,Pt),Me(t,te()),null}function Qc(t,e){var n=F;F|=1;try{return t(e)}finally{F=n,F===0&&(Fr=te()+500,Ea&&Tn())}}function Gn(t){tn!==null&&tn.tag===0&&!(F&6)&&Ar();var e=F;F|=1;var n=et.transition,r=j;try{if(et.transition=null,j=1,t)return t()}finally{j=r,et.transition=n,F=e,!(F&6)&&Tn()}}function Yc(){Ve=Sr.current,W(Sr)}function Fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G0(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Ur(),W(be),W(Te),Vc();break;case 5:Fc(r);break;case 4:Ur();break;case 13:W(K);break;case 19:W(K);break;case 10:Lc(r.type._context);break;case 22:case 23:Yc()}n=n.return}if(fe=t,re=t=dn(t.current,null),ve=Ve=e,le=0,Xi=null,Gc=ka=Kn=0,Oe=ki=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return t}function Pg(t,e){do{var n=re;try{if(Dc(),ho.current=$o,jo){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(Hn=0,de=se=G=null,Ii=!1,qi=0,Kc.current=null,n===null||n.return===null){le=1,Xi=e,re=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ve,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Uf(o);if(v!==null){v.flags&=-257,Mf(v,o,a,s,e),v.mode&1&&bf(s,u,e),e=v,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){bf(s,u,e),Xc();break e}l=Error(S(426))}}else if(H&&a.mode&1){var _=Uf(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Mf(_,o,a,s,e),xc(Mr(l,a));break e}}s=l=Mr(l,a),le!==4&&(le=2),ki===null?ki=[s]:ki.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ug(s,l,e);Cf(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(un===null||!un.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=cg(s,a,e);Cf(s,E);break e}}s=s.return}while(s!==null)}Ag(n)}catch(I){e=I,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Rg(){var t=zo.current;return zo.current=$o,t===null?$o:t}function Xc(){(le===0||le===3||le===2)&&(le=4),fe===null||!(Kn&268435455)&&!(ka&268435455)||Qt(fe,ve)}function Ho(t,e){var n=F;F|=2;var r=Rg();(fe!==t||ve!==e)&&(Pt=null,Fn(t,e));do try{vw();break}catch(i){Pg(t,i)}while(!0);if(Dc(),F=n,zo.current=r,re!==null)throw Error(S(261));return fe=null,ve=0,le}function vw(){for(;re!==null;)Cg(re)}function _w(){for(;re!==null&&!W_();)Cg(re)}function Cg(t){var e=xg(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?Ag(t):re=e,Kc.current=null}function Ag(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fw(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,re=null;return}}else if(n=dw(n,e,Ve),n!==null){re=n;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);le===0&&(le=5)}function xn(t,e,n){var r=j,i=et.transition;try{et.transition=null,j=1,ww(t,e,n,r)}finally{et.transition=i,j=r}return null}function ww(t,e,n,r){do Ar();while(tn!==null);if(F&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e0(t,s),t===fe&&(re=fe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qs||(Qs=!0,Og(Po,function(){return Ar(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=j;j=1;var a=F;F|=4,Kc.current=null,pw(t,n),Ig(n,t),j0(gu),Co=!!mu,gu=mu=null,t.current=n,mw(n),H_(),F=a,j=o,et.transition=s}else t.current=n;if(Qs&&(Qs=!1,tn=t,Wo=i),s=t.pendingLanes,s===0&&(un=null),q_(n.stateNode),Me(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bo)throw Bo=!1,t=Uu,Uu=null,t;return Wo&1&&t.tag!==0&&Ar(),s=t.pendingLanes,s&1?t===Mu?Pi++:(Pi=0,Mu=t):Pi=0,Tn(),null}function Ar(){if(tn!==null){var t=lm(Wo),e=et.transition,n=j;try{if(et.transition=null,j=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,Wo=0,F&6)throw Error(S(331));var i=F;for(F|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Ti(8,c,s)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var h=c.sibling,v=c.return;if(wg(c),c===u){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ti(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ta(9,a)}}catch(I){Q(a,a.return,I)}if(a===o){P=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,P=E;break e}P=a.return}}if(F=i,Tn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(ga,t)}catch{}r=!0}return r}finally{j=n,et.transition=e}}return!1}function Yf(t,e,n){e=Mr(n,e),e=ug(t,e,1),t=ln(t,e,1),e=Ce(),t!==null&&(gs(t,1,e),Me(t,e))}function Q(t,e,n){if(t.tag===3)Yf(t,t,n);else for(;e!==null;){if(e.tag===3){Yf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){t=Mr(n,t),t=cg(e,t,1),e=ln(e,t,1),t=Ce(),e!==null&&(gs(e,1,t),Me(e,t));break}}e=e.return}}function Ew(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ce(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(ve&n)===n&&(le===4||le===3&&(ve&130023424)===ve&&500>te()-qc?Fn(t,0):Gc|=n),Me(t,e)}function Ng(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var n=Ce();t=Mt(t,e),t!==null&&(gs(t,e,n),Me(t,n))}function Sw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ng(t,n)}function Iw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Ng(t,n)}var xg;xg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)Le=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Le=!1,cw(t,e,n);Le=!!(t.flags&131072)}else Le=!1,H&&e.flags&1048576&&Lm(e,bo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mo(t,e),t=e.pendingProps;var i=Dr(e,Te.current);Cr(e,n),i=$c(null,e,r,t,i,n);var s=zc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,Do(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uc(e),i.updater=Sa,e.stateNode=i,i._reactInternals=e,ku(e,r,t,n),e=Cu(null,e,r,!0,s,n)):(e.tag=0,H&&s&&Ac(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kw(r),t=st(r,t),i){case 0:e=Ru(null,e,r,t,n);break e;case 1:e=jf(null,e,r,t,n);break e;case 11:e=Ff(null,e,r,t,n);break e;case 14:e=Vf(null,e,r,st(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ru(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),jf(t,e,r,i,n);case 3:e:{if(pg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fm(t,e),Fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mr(Error(S(423)),e),e=$f(t,e,r,n,i);break e}else if(r!==i){i=Mr(Error(S(424)),e),e=$f(t,e,r,n,i);break e}else for(je=an(e.stateNode.containerInfo.firstChild),Be=e,H=!0,at=null,n=zm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===i){e=Ft(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return Bm(e),t===null&&Su(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yu(r,i)?o=null:s!==null&&yu(r,s)&&(e.flags|=32),hg(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Su(e),null;case 13:return mg(t,e,n);case 4:return Mc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ff(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(Uo,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!be.current){e=Ft(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Iu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Iu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cr(e,n),i=tt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Vf(t,e,r,i,n);case 15:return dg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),mo(t,e),e.tag=1,Ue(r)?(t=!0,Do(e)):t=!1,Cr(e,n),jm(e,r,i),ku(e,r,i,n),Cu(null,e,r,!0,t,n);case 19:return gg(t,e,n);case 22:return fg(t,e,n)}throw Error(S(156,e.tag))};function Og(t,e){return im(t,e)}function Tw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,e,n,r){return new Tw(t,e,n,r)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kw(t){if(typeof t=="function")return Jc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yc)return 11;if(t===vc)return 14}return 2}function dn(t,e){var n=t.alternate;return n===null?(n=Ze(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fr:return Vn(n.children,i,s,e);case gc:o=8,i|=8;break;case Ql:return t=Ze(12,n,e,i|2),t.elementType=Ql,t.lanes=s,t;case Yl:return t=Ze(13,n,e,i),t.elementType=Yl,t.lanes=s,t;case Xl:return t=Ze(19,n,e,i),t.elementType=Xl,t.lanes=s,t;case $p:return Pa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vp:o=10;break e;case jp:o=9;break e;case yc:o=11;break e;case vc:o=14;break e;case Ht:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Ze(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vn(t,e,n,r){return t=Ze(7,t,r,e),t.lanes=n,t}function Pa(t,e,n,r){return t=Ze(22,t,r,e),t.elementType=$p,t.lanes=n,t.stateNode={isHidden:!1},t}function Al(t,e,n){return t=Ze(6,t,null,e),t.lanes=n,t}function Nl(t,e,n){return e=Ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Pw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zc(t,e,n,r,i,s,o,a,l){return t=new Pw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ze(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(s),t}function Rw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dg(t){if(!t)return gn;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Ue(n))return Om(t,n,e)}return e}function Lg(t,e,n,r,i,s,o,a,l){return t=Zc(n,r,!0,t,i,s,o,a,l),t.context=Dg(null),n=t.current,r=Ce(),i=cn(n),s=Dt(r,i),s.callback=e??null,ln(n,s,i),t.current.lanes=i,gs(t,i,r),Me(t,r),t}function Ra(t,e,n,r){var i=e.current,s=Ce(),o=cn(i);return n=Dg(n),e.context===null?e.context=n:e.pendingContext=n,e=Dt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(ct(t,i,o,s),fo(t,i,o)),o}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ed(t,e){Xf(t,e),(t=t.alternate)&&Xf(t,e)}function Cw(){return null}var bg=typeof reportError=="function"?reportError:function(t){console.error(t)};function td(t){this._internalRoot=t}Ca.prototype.render=td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Ra(t,e,null,null)};Ca.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gn(function(){Ra(null,t,null,null)}),e[Ut]=null}};function Ca(t){this._internalRoot=t}Ca.prototype.unstable_scheduleHydration=function(t){if(t){var e=dm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&hm(t)}};function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Aa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jf(){}function Aw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ko(o);s.call(u)}}var o=Lg(e,r,t,0,null,!1,!1,"",Jf);return t._reactRootContainer=o,t[Ut]=o.current,Bi(t.nodeType===8?t.parentNode:t),Gn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ko(l);a.call(u)}}var l=Zc(t,0,!1,null,null,!1,!1,"",Jf);return t._reactRootContainer=l,t[Ut]=l.current,Bi(t.nodeType===8?t.parentNode:t),Gn(function(){Ra(e,l,n,r)}),l}function Na(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ko(o);a.call(l)}}Ra(e,o,t,i)}else o=Aw(n,e,t,i,r);return Ko(o)}um=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hi(e.pendingLanes);n!==0&&(Ec(e,n|1),Me(e,te()),!(F&6)&&(Fr=te()+500,Tn()))}break;case 13:Gn(function(){var r=Mt(t,1);if(r!==null){var i=Ce();ct(r,t,1,i)}}),ed(t,1)}};Sc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Ce();ct(e,t,134217728,n)}ed(t,134217728)}};cm=function(t){if(t.tag===13){var e=cn(t),n=Mt(t,e);if(n!==null){var r=Ce();ct(n,t,e,r)}ed(t,e)}};dm=function(){return j};fm=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};au=function(t,e,n){switch(e){case"input":if(eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wa(r);if(!i)throw Error(S(90));Bp(r),eu(r,i)}}}break;case"textarea":Hp(t,n);break;case"select":e=n.value,e!=null&&Tr(t,!!n.multiple,e,!1)}};Jp=Qc;Zp=Gn;var Nw={usingClientEntryPoint:!1,Events:[vs,gr,wa,Yp,Xp,Qc]},ui={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xw={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nm(t),t===null?null:t.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||Cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{ga=Ys.inject(xw),wt=Ys}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nw;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(e))throw Error(S(200));return Rw(t,e,null,n)};qe.createRoot=function(t,e){if(!nd(t))throw Error(S(299));var n=!1,r="",i=bg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zc(t,1,!1,null,null,n,!1,r,i),t[Ut]=e.current,Bi(t.nodeType===8?t.parentNode:t),new td(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=nm(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Gn(t)};qe.hydrate=function(t,e,n){if(!Aa(e))throw Error(S(200));return Na(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!nd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lg(e,null,t,1,n??null,i,!1,s,o),t[Ut]=e.current,Bi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ca(e)};qe.render=function(t,e,n){if(!Aa(e))throw Error(S(200));return Na(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!Aa(t))throw Error(S(40));return t._reactRootContainer?(Gn(function(){Na(null,null,t,!1,function(){t._reactRootContainer=null,t[Ut]=null})}),!0):!1};qe.unstable_batchedUpdates=Qc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Aa(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Na(t,e,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),Lp.exports=qe;var Ow=Lp.exports,Zf=Ow;Gl.createRoot=Zf.createRoot,Gl.hydrateRoot=Zf.hydrateRoot;/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ji.apply(this,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const eh="popstate";function Dw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ju("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Go(i)}return bw(e,n,null,t)}function ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lw(){return Math.random().toString(36).substr(2,8)}function th(t,e){return{usr:t.state,key:t.key,idx:e}}function ju(t,e,n,r){return n===void 0&&(n=null),Ji({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qr(e):e,{state:n,key:e&&e.key||r||Lw()})}function Go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ji({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=nn.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:w.location,delta:p})}function h(_,p){a=nn.Push;let f=ju(w.location,_,p);n&&n(f,_),u=c()+1;let g=th(f,u),E=w.createHref(f);try{o.pushState(g,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function v(_,p){a=nn.Replace;let f=ju(w.location,_,p);n&&n(f,_),u=c();let g=th(f,u),E=w.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:Go(_);return ie(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(eh,d),l=_,()=>{i.removeEventListener(eh,d),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(_){return o.go(_)}};return w}var nh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nh||(nh={}));function Uw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qr(e):e,i=id(r.pathname||"/",n);if(i==null)return null;let s=Mg(t);Mw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Kw(s[a],Qw(i));return o}function Mg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=fn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mg(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ww(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Fg(s.path))i(s,o,l)}),e}function Fg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fg(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Mw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Hw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fw=/^:\w+$/,Vw=3,jw=2,$w=1,zw=10,Bw=-2,rh=t=>t==="*";function Ww(t,e){let n=t.split("/"),r=n.length;return n.some(rh)&&(r+=Bw),e&&(r+=jw),n.filter(i=>!rh(i)).reduce((i,s)=>i+(Fw.test(s)?Vw:s===""?$w:zw),r)}function Hw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Kw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Gw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:eE(fn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return s}function Gw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:v}=c;if(h==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[d];return v&&!y?u[h]=void 0:u[h]=Yw(y||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function qw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Qw(t){try{return decodeURI(t)}catch(e){return rd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yw(t,e){try{return decodeURIComponent(t)}catch(n){return rd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function id(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qr(t):t;return{pathname:n?n.startsWith("/")?n:Jw(n,e):e,search:tE(r),hash:nE(i)}}function Jw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vg(t,e){let n=Zw(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qr(t):(i=Ji({},t),ie(!i.pathname||!i.pathname.includes("?"),xl("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),xl("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),xl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let d=e.length===0?[]:e[e.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d.pop();i.pathname=h.join("/")}a="/"+d.join("/")}else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Xw(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),eE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $g=["post","put","patch","delete"];new Set($g);const iE=["get",...$g];new Set(iE);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zi.apply(this,arguments)}const sd=T.createContext(null),sE=T.createContext(null),sr=T.createContext(null),xa=T.createContext(null),kn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),zg=T.createContext(null);function oE(t,e){let{relative:n}=e===void 0?{}:e;ws()||ie(!1);let{basename:r,navigator:i}=T.useContext(sr),{hash:s,pathname:o,search:a}=Wg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:fn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ws(){return T.useContext(xa)!=null}function Oa(){return ws()||ie(!1),T.useContext(xa).location}function Bg(t){T.useContext(sr).static||T.useLayoutEffect(t)}function aE(){let{isDataRoute:t}=T.useContext(kn);return t?EE():lE()}function lE(){ws()||ie(!1);let t=T.useContext(sd),{basename:e,future:n,navigator:r}=T.useContext(sr),{matches:i}=T.useContext(kn),{pathname:s}=Oa(),o=JSON.stringify(Vg(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return Bg(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=jg(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:fn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function uE(){let{matches:t}=T.useContext(kn),e=t[t.length-1];return e?e.params:{}}function Wg(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(sr),{matches:i}=T.useContext(kn),{pathname:s}=Oa(),o=JSON.stringify(Vg(i,r.v7_relativeSplatPath));return T.useMemo(()=>jg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function cE(t,e){return dE(t,e)}function dE(t,e,n,r){ws()||ie(!1);let{navigator:i}=T.useContext(sr),{matches:s}=T.useContext(kn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Oa(),c;if(e){var d;let _=typeof e=="string"?Qr(e):e;l==="/"||(d=_.pathname)!=null&&d.startsWith(l)||ie(!1),c=_}else c=u;let h=c.pathname||"/",v=l==="/"?h:h.slice(l.length)||"/",y=Uw(t,{pathname:v}),w=gE(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:fn([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:fn([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&w?T.createElement(xa.Provider,{value:{location:Zi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:nn.Pop}},w):w}function fE(){let t=wE(),e=rE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const hE=T.createElement(fE,null);class pE extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(kn.Provider,{value:this.props.routeContext},T.createElement(zg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mE(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(kn.Provider,{value:e},r)}function gE(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||ie(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.loader&&d.route.id&&n.loaderData[d.route.id]===void 0&&(!n.errors||n.errors[d.route.id]===void 0)){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}return o.reduceRight((c,d,h)=>{let v,y=!1,w=null,_=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||hE,l&&(u<0&&h===0?(SE("route-fallback",!1),y=!0,_=null):u===h&&(y=!0,_=d.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let g;return v?g=w:y?g=_:d.route.Component?g=T.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,T.createElement(mE,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?T.createElement(pE,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Hg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Hg||{}),qo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qo||{});function yE(t){let e=T.useContext(sd);return e||ie(!1),e}function vE(t){let e=T.useContext(sE);return e||ie(!1),e}function _E(t){let e=T.useContext(kn);return e||ie(!1),e}function Kg(t){let e=_E(),n=e.matches[e.matches.length-1];return n.route.id||ie(!1),n.route.id}function wE(){var t;let e=T.useContext(zg),n=vE(qo.UseRouteError),r=Kg(qo.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function EE(){let{router:t}=yE(Hg.UseNavigateStable),e=Kg(qo.UseNavigateStable),n=T.useRef(!1);return Bg(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zi({fromRouteId:e},s)))},[t,e])}const ih={};function SE(t,e,n){!e&&!ih[t]&&(ih[t]=!0)}function On(t){ie(!1)}function IE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1,future:a}=t;ws()&&ie(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:Zi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Qr(r));let{pathname:c="/",search:d="",hash:h="",state:v=null,key:y="default"}=r,w=T.useMemo(()=>{let _=id(c,l);return _==null?null:{location:{pathname:_,search:d,hash:h,state:v,key:y},navigationType:i}},[l,c,d,h,v,y,i]);return w==null?null:T.createElement(sr.Provider,{value:u},T.createElement(xa.Provider,{children:n,value:w}))}function TE(t){let{children:e,location:n}=t;return cE($u(e),n)}new Promise(()=>{});function $u(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,$u(r.props.children,s));return}r.type!==On&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$u(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}function kE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RE(t,e){return t.button===0&&(!e||e==="_self")&&!PE(t)}const CE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],AE="startTransition",sh=Kl[AE];function NE(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=Dw({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&sh?sh(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(IE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const xE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ri=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=kE(e,CE),{basename:v}=T.useContext(sr),y,w=!1;if(typeof u=="string"&&OE.test(u)&&(y=u,xE))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=id(E.pathname,v);E.origin===g.origin&&I!=null?u=I+E.search+E.hash:w=!0}catch{}let _=oE(u,{relative:i}),p=DE(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||p(g)}return T.createElement("a",zu({},h,{href:y||_,onClick:w||s?r:f,ref:n,target:l}))});var oh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(oh||(oh={}));var ah;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ah||(ah={}));function DE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=aE(),u=Oa(),c=Wg(t,{relative:o});return T.useCallback(d=>{if(RE(d,n)){d.preventDefault();let h=r!==void 0?r:Go(u)===Go(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var lh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(h=64)),r.push(n[c],n[d],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new bE;const h=s<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UE=function(t){const e=Gg(t);return qg.encodeByteArray(e,!0)},Qo=function(t){return UE(t).replace(/\./g,"")},Qg=function(t){try{return qg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>ME().__FIREBASE_DEFAULTS__,VE=()=>{if(typeof process>"u"||typeof lh>"u")return;const t=lh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qg(t[1]);return e&&JSON.parse(e)},od=()=>{try{return FE()||VE()||jE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yg=t=>{var e,n;return(n=(e=od())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xg=t=>{const e=Yg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jg=()=>{var t;return(t=od())===null||t===void 0?void 0:t.config},Zg=t=>{var e;return(e=od())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function BE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KE(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qE,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kt(i,a,r)}}function QE(t,e){return t.replace(YE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YE=/\{\$([^}]+)}/g;function XE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uh(s)&&uh(o)){if(!Yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JE(t,e){const n=new ZE(t,e);return n.subscribe.bind(n)}class ZE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ol),i.error===void 0&&(i.error=Ol),i.complete===void 0&&(i.complete=Ol);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ol(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tS=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $E;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rS(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function nS(t){return t===Dn?void 0:t}function rS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const sS={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},oS=V.INFO,aS={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},lS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ad{constructor(e){this.name=e,this._logLevel=oS,this._logHandler=lS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const uS=(t,e)=>e.some(n=>t instanceof n);let ch,dh;function cS(){return ch||(ch=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dS(){return dh||(dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,Bu=new WeakMap,ny=new WeakMap,Dl=new WeakMap,ld=new WeakMap;function fS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ty.set(n,t)}).catch(()=>{}),ld.set(e,t),e}function hS(t){if(Bu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bu.set(t,e)}let Wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pS(t){Wu=t(Wu)}function mS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ll(this),e,...n);return ny.set(r,e.sort?e.sort():[e]),hn(r)}:dS().includes(t)?function(...e){return t.apply(Ll(this),e),hn(ty.get(this))}:function(...e){return hn(t.apply(Ll(this),e))}}function gS(t){return typeof t=="function"?mS(t):(t instanceof IDBTransaction&&hS(t),uS(t,cS())?new Proxy(t,Wu):t)}function hn(t){if(t instanceof IDBRequest)return fS(t);if(Dl.has(t))return Dl.get(t);const e=gS(t);return e!==t&&(Dl.set(t,e),ld.set(e,t)),e}const Ll=t=>ld.get(t);function yS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hn(o.result),l.oldVersion,l.newVersion,hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vS=["get","getKey","getAll","getAllKeys","count"],_S=["put","add","delete","clear"],bl=new Map;function fh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return bl.set(e,s),s}pS(t=>({...t,get:(e,n,r)=>fh(e,n)||t.get(e,n,r),has:(e,n)=>!!fh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ES(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ES(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hu="@firebase/app",hh="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new ad("@firebase/app"),SS="@firebase/app-compat",IS="@firebase/analytics-compat",TS="@firebase/analytics",kS="@firebase/app-check-compat",PS="@firebase/app-check",RS="@firebase/auth",CS="@firebase/auth-compat",AS="@firebase/database",NS="@firebase/database-compat",xS="@firebase/functions",OS="@firebase/functions-compat",DS="@firebase/installations",LS="@firebase/installations-compat",bS="@firebase/messaging",US="@firebase/messaging-compat",MS="@firebase/performance",FS="@firebase/performance-compat",VS="@firebase/remote-config",jS="@firebase/remote-config-compat",$S="@firebase/storage",zS="@firebase/storage-compat",BS="@firebase/firestore",WS="@firebase/firestore-compat",HS="firebase",KS="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="[DEFAULT]",GS={[Hu]:"fire-core",[SS]:"fire-core-compat",[TS]:"fire-analytics",[IS]:"fire-analytics-compat",[PS]:"fire-app-check",[kS]:"fire-app-check-compat",[RS]:"fire-auth",[CS]:"fire-auth-compat",[AS]:"fire-rtdb",[NS]:"fire-rtdb-compat",[xS]:"fire-fn",[OS]:"fire-fn-compat",[DS]:"fire-iid",[LS]:"fire-iid-compat",[bS]:"fire-fcm",[US]:"fire-fcm-compat",[MS]:"fire-perf",[FS]:"fire-perf-compat",[VS]:"fire-rc",[jS]:"fire-rc-compat",[$S]:"fire-gcs",[zS]:"fire-gcs-compat",[BS]:"fire-fst",[WS]:"fire-fst-compat","fire-js":"fire-js",[HS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,Gu=new Map;function qS(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(Gu.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Gu.set(e,t);for(const n of Xo.values())qS(n,t);return!0}function Da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new Es("app","Firebase",QS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=KS;function ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ku,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=Jg()),!n)throw pn.create("no-options");const s=Xo.get(i);if(s){if(Yo(n,s.options)&&Yo(r,s.config))return s;throw pn.create("duplicate-app",{appName:i})}const o=new iS(i);for(const l of Gu.values())o.addComponent(l);const a=new YS(n,r,o);return Xo.set(i,a),a}function ud(t=Ku){const e=Xo.get(t);if(!e&&t===Ku&&Jg())return ry();if(!e)throw pn.create("no-app",{appName:t});return e}function St(t,e,n){var r;let i=(r=GS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(a.join(" "));return}Qn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="firebase-heartbeat-database",JS=1,es="firebase-heartbeat-store";let Ul=null;function iy(){return Ul||(Ul=yS(XS,JS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),Ul}async function ZS(t){try{return await(await iy()).transaction(es).objectStore(es).get(sy(t))}catch(e){if(e instanceof kt)qn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function ph(t,e){try{const r=(await iy()).transaction(es,"readwrite");await r.objectStore(es).put(e,sy(t)),await r.done}catch(n){if(n instanceof kt)qn.warn(n.message);else{const r=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function sy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=1024,tI=30*24*60*60*1e3;class nI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mh(),{heartbeatsToSend:r,unsentEntries:i}=rI(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mh(){return new Date().toISOString().substring(0,10)}function rI(t,e=eI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KE()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gh(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){Qn(new yn("platform-logger",e=>new wS(e),"PRIVATE")),Qn(new yn("heartbeat",e=>new nI(e),"PRIVATE")),St(Hu,hh,t),St(Hu,hh,"esm2017"),St("fire-js","")}sI("");var oI="firebase",aI="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(oI,aI,"app");function cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lI=oy,ay=new Es("auth","Firebase",oy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new ad("@firebase/auth");function uI(t,...e){Jo.logLevel<=V.WARN&&Jo.warn(`Auth (${or}): ${t}`,...e)}function _o(t,...e){Jo.logLevel<=V.ERROR&&Jo.error(`Auth (${or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw dd(t,...e)}function It(t,...e){return dd(t,...e)}function cI(t,e,n){const r=Object.assign(Object.assign({},lI()),{[e]:n});return new Es("auth","Firebase",r).create(e,{appName:t.name})}function dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ay.create(t,...e)}function x(t,e,...n){if(!t)throw dd(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function Vt(t,e){t||xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dI(){return yh()==="http:"||yh()==="https:"}function yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dI()||BE()||"connection"in navigator)?navigator.onLine:!0}function hI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=zE()||WE()}get(){return fI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Is(3e4,6e4);function ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pn(t,e,n,r,i={}){return uy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ss(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ly.fetch()(cy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function uy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pI),e);try{const i=new yI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xs(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cI(t,c,u);ht(t,c)}}catch(i){if(i instanceof kt)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function La(t,e,n,r,i={}){const s=await Pn(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fd(t.config,i):`${t.config.apiScheme}://${i}`}function gI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),mI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}function vh(t){return t!==void 0&&t.enterprise!==void 0}class vI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _I(t,e){return Pn(t,"GET","/v2/recaptchaConfig",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e){return Pn(t,"POST","/v1/accounts:delete",e)}async function EI(t,e){return Pn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SI(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=hd(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ci(Ml(i.auth_time)),issuedAtTime:Ci(Ml(i.iat)),expirationTime:Ci(Ml(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ml(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qg(n);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function II(t){const e=hd(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&TI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ts(t,EI(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?CI(s.providerUserInfo):[],a=RI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function PI(t){const e=X(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CI(t){return t.map(e=>{var{providerId:n}=e,r=cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(t,e){const n=await uy(t,{},async()=>{const r=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ly.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NI(t,e){return Pn(t,"POST","/v2/accounts:revokeToken",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):II(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ns;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ts(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SI(this,e)}reload(){return PI(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ts(this,wI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:I,providerData:k,stsTokenManager:C}=n;x(g&&C,e,"internal-error");const A=ns.fromJSON(this.name,C);x(typeof g=="string",e,"internal-error"),Wt(d,e.name),Wt(h,e.name),x(typeof E=="boolean",e,"internal-error"),x(typeof I=="boolean",e,"internal-error"),Wt(v,e.name),Wt(y,e.name),Wt(w,e.name),Wt(_,e.name),Wt(p,e.name),Wt(f,e.name);const z=new jn({uid:g,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:v,tenantId:w,stsTokenManager:A,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(z.providerData=k.map(b=>Object.assign({},b))),_&&(z._redirectEventId=_),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new ns;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;function Ot(t){Vt(t instanceof Function,"Expected a class definition");let e=_h.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_h.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fy.type="NONE";const wh=fy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Nr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wo(this.userKey,i.apiKey,s),this.fullPersistenceKey=wo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Nr(Ot(wh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ot(wh);const o=wo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=jn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Nr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Nr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(my(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yy(e))return"Blackberry";if(vy(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||py(e))&&!e.includes("edge/"))return"Chrome";if(gy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hy(t=ke()){return/firefox\//i.test(t)}function pd(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function py(t=ke()){return/crios\//i.test(t)}function my(t=ke()){return/iemobile/i.test(t)}function gy(t=ke()){return/android/i.test(t)}function yy(t=ke()){return/blackberry/i.test(t)}function vy(t=ke()){return/webos/i.test(t)}function ba(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xI(t=ke()){var e;return ba(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OI(){return HE()&&document.documentMode===10}function _y(t=ke()){return ba(t)||gy(t)||vy(t)||yy(t)||/windows phone/i.test(t)||my(t)}function DI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e=[]){let n;switch(t){case"Browser":n=Eh(ke());break;case"Worker":n=`${Eh(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e={}){return Pn(t,"GET","/v2/passwordPolicy",ar(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=6;class MI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sh(this),this.idTokenSubscription=new Sh(this),this.beforeStateQueue=new LI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?X(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bI(this),n=new MI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return X(t)}class Sh{constructor(e){this.auth=e,this.observer=null,this.addObserver=JE(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ey(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VI().appendChild(r)})}function jI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $I="https://www.google.com/recaptcha/enterprise.js?render=",zI="recaptcha-enterprise",BI="NO_RECAPTCHA";class WI{constructor(e){this.type=zI,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_I(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;vh(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(BI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&vh(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ey($I+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ih(t,e,n,r=!1){const i=new WI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Th(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ih(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ih(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e){const n=Da(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yo(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function KI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GI(t,e,n){const r=Yr(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Sy(e),{host:o,port:a}=qI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QI()}function Sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qI(t){const e=Sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kh(o)}}}function kh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}async function YI(t,e){return Pn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){return La(t,"POST","/v1/accounts:signInWithPassword",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e){return La(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}async function ZI(t,e){return La(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends md{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,n,"signInWithPassword",XI);case"emailLink":return JI(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,r,"signUpPassword",YI);case"emailLink":return ZI(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t,e){return La(t,"POST","/v1/accounts:signInWithIdp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="http://localhost";class Yn extends md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:eT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ss(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nT(t){const e=mi(gi(t)).link,n=e?mi(gi(e)).deep_link_id:null,r=mi(gi(t)).deep_link_id;return(r?mi(gi(r)).link:null)||r||n||e||t}class gd{constructor(e){var n,r,i,s,o,a;const l=mi(gi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=tT((i=l.mode)!==null&&i!==void 0?i:null);x(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nT(e);try{return new gd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(e,n){return rs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gd.parseLink(n);return x(r,"argument-error"),rs._fromEmailAndCode(e,r.code,r.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Iy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ts{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ts{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ts{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=Ph(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ph(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ph(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ea(e,n,r,i)}}function Ty(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,s,e,r):s})}async function rT(t,e,n=!1){const r=await ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ts(t,Ty(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=hd(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(t,e,n=!1){const r="signIn",i=await Ty(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sT(t,e){return ky(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function aT(t,e,n){return sT(X(t),Xr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oT(t),r})}function lT(t,e,n,r){return X(t).onIdTokenChanged(e,n,r)}function uT(t,e,n){return X(t).beforeAuthStateChanged(e,n)}function cT(t,e,n,r){return X(t).onAuthStateChanged(e,n,r)}function dT(t){return X(t).signOut()}const ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){const t=ke();return pd(t)||ba(t)}const hT=1e3,pT=10;class Ry extends Py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fT()&&DI(),this.fallbackToPolling=_y(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ry.type="LOCAL";const mT=Ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends Py{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cy.type="SESSION";const Ay=Cy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await gT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=yd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function vT(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function _T(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ET(){return Ny()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="firebaseLocalStorageDb",ST=1,na="firebaseLocalStorage",Oy="fbase_key";class ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ma(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function IT(){const t=indexedDB.deleteDatabase(xy);return new ks(t).toPromise()}function Qu(){const t=indexedDB.open(xy,ST);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(na,{keyPath:Oy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(na)?e(r):(r.close(),await IT(),e(await Qu()))})})}async function Rh(t,e,n){const r=Ma(t,!0).put({[Oy]:e,value:n});return new ks(r).toPromise()}async function TT(t,e){const n=Ma(t,!1).get(e),r=await new ks(n).toPromise();return r===void 0?null:r.value}function Ch(t,e){const n=Ma(t,!0).delete(e);return new ks(n).toPromise()}const kT=800,PT=3;class Dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(ET()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _T(),!this.activeServiceWorker)return;this.sender=new yT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qu();return await Rh(e,ta,"1"),await Ch(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ch(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ma(i,!1).getAll();return new ks(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dy.type="LOCAL";const RT=Dy;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e){return e?Ot(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AT(t){return ky(t.auth,new vd(t),t.bypassAuthState)}function NT(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),iT(n,new vd(t),t.bypassAuthState)}async function xT(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),rT(n,new vd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AT;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return NT;default:ht(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new Is(2e3,1e4);class Ir extends Ly{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OT.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="pendingRedirect",Eo=new Map;class LT extends Ly{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const r=await bT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bT(t,e){const n=FT(e),r=MT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UT(t,e){Eo.set(t._key(),e)}function MT(t){return Ot(t._redirectPersistence)}function FT(t){return wo(DT,t.config.apiKey,t.name)}async function VT(t,e,n=!1){const r=Yr(t),i=CT(r,e),o=await new LT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=10*60*1e3;class $T{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!by(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ah(e))}saveEventToCache(e){this.cachedEventUids.add(Ah(e)),this.lastProcessedEventTime=Date.now()}}function Ah(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function by({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return by(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(t,e={}){return Pn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HT=/^https?/;async function KT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BT(t);for(const n of e)try{if(GT(n))return}catch{}ht(t,"unauthorized-domain")}function GT(t){const e=qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HT.test(n))return!1;if(WT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new Is(3e4,6e4);function Nh(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QT(t){return new Promise((e,n)=>{var r,i,s;function o(){Nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nh(),n(It(t,"network-request-failed"))},timeout:qT.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)o();else{const a=jI("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},Ey(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw So=null,e})}let So=null;function YT(t){return So=So||QT(t),So}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new Is(5e3,15e3),JT="__/auth/iframe",ZT="emulator/auth/iframe",e1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n1(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fd(e,ZT):`https://${t.config.authDomain}/${JT}`,r={apiKey:e.apiKey,appName:t.name,v:or},i=t1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ss(r).slice(1)}`}async function r1(t){const e=await YT(t),n=Tt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:n1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Tt().setTimeout(()=>{s(o)},XT.get());function l(){Tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s1=500,o1=600,a1="_blank",l1="http://localhost";class xh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u1(t,e,n,r=s1,i=o1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},i1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ke().toLowerCase();n&&(a=py(u)?a1:n),hy(u)&&(e=e||l1,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,y])=>`${h}${v}=${y},`,"");if(xI(u)&&a!=="_self")return c1(e||"",a),new xh(null);const d=window.open(e||"",a,c);x(d,t,"popup-blocked");try{d.focus()}catch{}return new xh(d)}function c1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="__/auth/handler",f1="emulator/auth/handler",h1=encodeURIComponent("fac");async function Oh(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:or,eventId:i};if(e instanceof Iy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ts){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${h1}=${encodeURIComponent(l)}`:"";return`${p1(t)}?${Ss(a).slice(1)}${u}`}function p1({config:t}){return t.emulator?fd(t,f1):`https://${t.authDomain}/${d1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="webStorageSupport";class m1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ay,this._completeRedirectFn=VT,this._overrideRedirectResult=UT}async _openPopup(e,n,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Oh(e,n,r,qu(),i);return u1(e,o,yd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Oh(e,n,r,qu(),i);return vT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await r1(e),r=new $T(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fl,{type:Fl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fl];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _y()||pd()||ba()}}const g1=m1;var Dh="@firebase/auth",Lh="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _1(t){Qn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wy(t)},u=new FI(r,i,s,l);return KI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new yn("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new y1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(Dh,Lh,v1(t)),St(Dh,Lh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=5*60,E1=Zg("authIdTokenMaxAge")||w1;let bh=null;const S1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E1)return;const i=n==null?void 0:n.token;bh!==i&&(bh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function I1(t=ud()){const e=Da(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HI(t,{popupRedirectResolver:g1,persistence:[RT,mT,Ay]}),r=Zg("authTokenSyncURL");if(r){const s=S1(r);uT(n,s,()=>s(n.currentUser)),lT(n,o=>s(o))}const i=Yg("auth");return i&&GI(n,`http://${i}`),n}_1("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="firebasestorage.googleapis.com",My="storageBucket",T1=2*60*1e3,k1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends kt{constructor(e,n,r=0){super(Vl(e),`Firebase Storage: ${n} (${Vl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var J;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(J||(J={}));function Vl(t){return"storage/"+t}function _d(){const t="An unknown error occurred, please check the error payload for server response.";return new Z(J.UNKNOWN,t)}function P1(t){return new Z(J.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function R1(t){return new Z(J.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function C1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z(J.UNAUTHENTICATED,t)}function A1(){return new Z(J.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function N1(t){return new Z(J.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function x1(){return new Z(J.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function O1(){return new Z(J.CANCELED,"User canceled the upload/download.")}function D1(t){return new Z(J.INVALID_URL,"Invalid URL '"+t+"'.")}function L1(t){return new Z(J.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function b1(){return new Z(J.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+My+"' property when initializing the app?")}function U1(){return new Z(J.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function M1(){return new Z(J.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function F1(t){return new Z(J.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yu(t){return new Z(J.INVALID_ARGUMENT,t)}function Fy(){return new Z(J.APP_DELETED,"The Firebase app was deleted.")}function V1(t){return new Z(J.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ai(t,e){return new Z(J.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ci(t){throw new Z(J.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$e.makeFromUrl(e,n)}catch{return new $e(e,"")}if(r.path==="")return r;throw L1(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),y={bucket:1,path:3},w=n===Uy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:v,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const I=g[E],k=I.regex.exec(e);if(k){const C=k[I.indices.bucket];let A=k[I.indices.path];A||(A=""),r=new $e(C,A),I.postModify(r);break}}if(r==null)throw D1(e);return r}}class j1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function d(_){i=setTimeout(()=>{i=null,t(v,l())},_)}function h(){s&&clearTimeout(s)}function v(_,...p){if(u){h();return}if(_){h(),c.call(null,_,...p);return}if(l()||o){h(),c.call(null,_,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,d(g)}let y=!1;function w(_){y||(y=!0,h(),!u&&(i!==null?(_||(a=2),clearTimeout(i),d(0)):_||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function z1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t){return t!==void 0}function W1(t){return typeof t=="object"&&!Array.isArray(t)}function wd(t){return typeof t=="string"||t instanceof String}function Uh(t){return Ed()&&t instanceof Blob}function Ed(){return typeof Blob<"u"}function Mh(t,e,n,r){if(r<e)throw Yu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Vy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($n||($n={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Js(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===$n.NO_ERROR,l=s.getStatus();if(!a||H1(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===$n.ABORT;r(!1,new Js(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Js(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());B1(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=_d();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Fy():O1();o(l)}else{const l=x1();o(l)}};this.canceled_?n(!1,new Js(!1,null,!0)):this.backoffId_=$1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&z1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Js{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function G1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Q1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function X1(t,e,n,r,i,s,o=!0){const a=Vy(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Q1(u,e),G1(u,n),q1(u,s),Y1(u,r),new K1(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Z1(...t){const e=J1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ed())return new Blob(t);throw new Z(J.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ek(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){if(typeof atob>"u")throw F1("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jl{constructor(e,n){this.data=e,this.contentType=n||null}}function nk(t,e){switch(t){case _t.RAW:return new jl(jy(e));case _t.BASE64:case _t.BASE64URL:return new jl($y(t,e));case _t.DATA_URL:return new jl(ik(e),sk(e))}throw _d()}function jy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function rk(t){let e;try{e=decodeURIComponent(t)}catch{throw Ai(_t.DATA_URL,"Malformed data URL.")}return jy(e)}function $y(t,e){switch(t){case _t.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ai(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case _t.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ai(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tk(e)}catch(i){throw i.message.includes("polyfill")?i:Ai(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class zy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ai(_t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ok(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ik(t){const e=new zy(t);return e.base64?$y(_t.BASE64,e.rest):rk(e.rest)}function sk(t){return new zy(t).contentType}function ok(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){let r=0,i="";Uh(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Uh(this.data_)){const r=this.data_,i=ek(r,e,n);return i===null?null:new Zt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zt(r,!0)}}static getBlob(...e){if(Ed()){const n=e.map(r=>r instanceof Zt?r.data_:r);return new Zt(Z1.apply(null,n))}else{const n=e.map(o=>wd(o)?nk(_t.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){let e;try{e=JSON.parse(t)}catch{return null}return W1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Wy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t,e){return e}class Pe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||uk}}let Zs=null;function ck(t){return!wd(t)||t.length<2?t:Wy(t)}function Hy(){if(Zs)return Zs;const t=[];t.push(new Pe("bucket")),t.push(new Pe("generation")),t.push(new Pe("metageneration")),t.push(new Pe("name","fullPath",!0));function e(s,o){return ck(o)}const n=new Pe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pe("size");return i.xform=r,t.push(i),t.push(new Pe("timeCreated")),t.push(new Pe("updated")),t.push(new Pe("md5Hash",null,!0)),t.push(new Pe("cacheControl",null,!0)),t.push(new Pe("contentDisposition",null,!0)),t.push(new Pe("contentEncoding",null,!0)),t.push(new Pe("contentLanguage",null,!0)),t.push(new Pe("contentType",null,!0)),t.push(new Pe("metadata","customMetadata",!0)),Zs=t,Zs}function dk(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new $e(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function fk(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return dk(r,t),r}function Ky(t,e,n){const r=By(e);return r===null?null:fk(t,r,n)}function hk(t,e,n,r){const i=By(e);if(i===null||!wd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),v=Sd(h,n,r),y=Vy({alt:"media",token:u});return v+y})[0]}function pk(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Gy{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t){if(!t)throw _d()}function mk(t,e){function n(r,i){const s=Ky(t,i,e);return qy(s!==null),s}return n}function gk(t,e){function n(r,i){const s=Ky(t,i,e);return qy(s!==null),hk(s,i,t.host,t._protocol)}return n}function Qy(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=A1():i=C1():n.getStatus()===402?i=R1(t.bucket):n.getStatus()===403?i=N1(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function yk(t){const e=Qy(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=P1(t.path)),s.serverResponse=i.serverResponse,s}return n}function vk(t,e,n){const r=e.fullServerUrl(),i=Sd(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Gy(i,s,gk(t,n),o);return a.errorHandler=yk(e),a}function _k(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function wk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_k(null,e)),r}function Ek(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=wk(e,r,i),c=pk(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",v=Zt.getBlob(d,r,h);if(v===null)throw U1();const y={name:u.fullPath},w=Sd(s,t.host,t._protocol),_="POST",p=t.maxUploadRetryTime,f=new Gy(w,_,mk(t,n),p);return f.urlParams=y,f.headers=o,f.body=v.uploadData(),f.errorHandler=Qy(e),f}class Sk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$n.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$n.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$n.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ci("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ci("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ci("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ci("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ci("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ik extends Sk{initXhr(){this.xhr_.responseType="text"}}function Yy(){return new Ik}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this._service=e,n instanceof $e?this._location=n:this._location=$e.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xn(e,n)}get root(){const e=new $e(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wy(this._location.path)}get storage(){return this._service}get parent(){const e=ak(this._location.path);if(e===null)return null;const n=new $e(this._location.bucket,e);return new Xn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw V1(e)}}function Tk(t,e,n){t._throwIfRoot("uploadBytes");const r=Ek(t.storage,t._location,Hy(),new Zt(e,!0),n);return t.storage.makeRequestWithTokens(r,Yy).then(i=>({metadata:i,ref:t}))}function kk(t){t._throwIfRoot("getDownloadURL");const e=vk(t.storage,t._location,Hy());return t.storage.makeRequestWithTokens(e,Yy).then(n=>{if(n===null)throw M1();return n})}function Pk(t,e){const n=lk(t._location.path,e),r=new $e(t._location.bucket,n);return new Xn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){return/^[A-Za-z]+:\/\//.test(t)}function Ck(t,e){return new Xn(t,e)}function Xy(t,e){if(t instanceof Id){const n=t;if(n._bucket==null)throw b1();const r=new Xn(n,n._bucket);return e!=null?Xy(r,e):r}else return e!==void 0?Pk(t,e):t}function Ak(t,e){if(e&&Rk(e)){if(t instanceof Id)return Ck(t,e);throw Yu("To use ref(service, url), the first argument must be a Storage instance.")}else return Xy(t,e)}function Fh(t,e){const n=e==null?void 0:e[My];return n==null?null:$e.makeFromBucketSpec(n,t)}function Nk(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ey(i,t.app.options.projectId))}class Id{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Uy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=T1,this._maxUploadRetryTime=k1,this._requests=new Set,i!=null?this._bucket=$e.makeFromBucketSpec(i,this._host):this._bucket=Fh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$e.makeFromBucketSpec(this._url,e):this._bucket=Fh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xn(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new j1(Fy());{const o=X1(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Vh="@firebase/storage",jh="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="storage";function xk(t,e,n){return t=X(t),Tk(t,e,n)}function ra(t){return t=X(t),kk(t)}function Ni(t,e){return t=X(t),Ak(t,e)}function Ok(t=ud(),e){t=X(t);const r=Da(t,Jy).getImmediate({identifier:e}),i=Xg("storage");return i&&Dk(r,...i),r}function Dk(t,e,n,r={}){Nk(t,e,n,r)}function Lk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Id(n,r,i,e,or)}function bk(){Qn(new yn(Jy,Lk,"PUBLIC").setMultipleInstances(!0)),St(Vh,jh,""),St(Vh,jh,"esm2017")}bk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new ad("@firebase/firestore");function ia(t,...e){if(jr.logLevel<=V.DEBUG){const n=e.map(kd);jr.debug(`Firestore (${Jr}): ${t}`,...n)}}function Td(t,...e){if(jr.logLevel<=V.ERROR){const n=e.map(kd);jr.error(`Firestore (${Jr}): ${t}`,...n)}}function Zy(t,...e){if(jr.logLevel<=V.WARN){const n=e.map(kd);jr.warn(`Firestore (${Jr}): ${t}`,...n)}}function kd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw Td(e),new Error(e)}function vn(t,e){t||Y()}function Fa(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="ok",Uk="cancelled",xi="unknown",O="invalid-argument",Mk="deadline-exceeded",Fk="not-found",Vk="permission-denied",Xu="unauthenticated",jk="resource-exhausted",$r="failed-precondition",$k="aborted",zk="out-of-range",ev="unimplemented",Bk="internal",Wk="unavailable";class N extends kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class Kk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gk{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(vn(typeof e.accessToken=="string"),new tv(e.accessToken,new xe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class qk{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Qk{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new qk(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xk{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(vn(typeof e.token=="string"),new Yk(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof is&&e.projectId===this.projectId&&e.database===this.database}}class ss{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ss.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ss?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends ss{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(O,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const Zk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends ss{construct(e,n,r){return new De(e,n,r)}static isValidIdentifier(e){return Zk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(O,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(O,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(O,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(O,"Unterminated ` in path: "+e);return new De(n)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(ae.fromString(e))}static fromName(e){return new ye(ae.fromString(e).popFirst(5))}static empty(){return new ye(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t,e,n){if(!n)throw new N(O,`Function ${t}() cannot be called with an empty ${e}.`)}function zh(t){if(!ye.isDocumentKey(t))throw new N(O,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bh(t){if(ye.isDocumentKey(t))throw new N(O,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ps(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(O,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Va(t);throw new N(O,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=null;function eP(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){return t==null}function sa(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wh,M;function Hh(t){if(t===void 0)return Td("RPC_ERROR","HTTP error has no status"),xi;switch(t){case 200:return $h;case 400:return $r;case 401:return Xu;case 403:return Vk;case 404:return Fk;case 409:return $k;case 416:return zk;case 429:return jk;case 499:return Uk;case 500:return xi;case 501:return ev;case 503:return Wk;case 504:return Mk;default:return t>=200&&t<300?$h:t>=400&&t<500?$r:t>=500&&t<600?Bk:xi}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(M=Wh||(Wh={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class rP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=eP(),l=this.I(n,r);ia("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(ia("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Zy("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=nP[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new N(Hh(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new N(Hh(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function iv(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oP("Invalid base64 string: "+s):s}}(e);return new jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const aP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(vn(!!t),typeof t=="string"){let e=0;const n=aP.exec(t);if(vn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(t.seconds),nanos:oe(t.nanos)}}function oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(O,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(O,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(O,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(O,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ov(t){const e=t.mapValue.fields.__previous_value__;return sv(e)?ov(e):e}function as(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={fields:{__type__:{stringValue:"__max__"}}};function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sv(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Y()}function oa(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return as(t).isEqual(as(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jn(i.timestampValue),a=Jn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return os(i.bytesValue).isEqual(os(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=oe(i.doubleValue),a=oe(s.doubleValue);return o===a?sa(o)===sa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return iv(t.arrayValue.values||[],e.arrayValue.values||[],oa);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Kh(o)!==Kh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!oa(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function ls(t,e){return(t.values||[]).find(n=>oa(n,e))!==void 0}function aa(t,e){if(t===e)return 0;const n=Zn(t),r=Zn(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=oe(s.integerValue||s.doubleValue),l=oe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Gh(t.timestampValue,e.timestampValue);case 4:return Gh(as(t),as(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=os(s),l=os(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(oe(s.latitude),oe(o.latitude));return a!==0?a:ce(oe(s.longitude),oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=aa(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===to&&o===to)return 0;if(s===to)return 1;if(o===to)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=ce(l[d],c[d]);if(h!==0)return h;const v=aa(a[l[d]],u[c[d]]);if(v!==0)return v}return ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Gh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Jn(t),r=Jn(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function qh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function av(t){return!!t&&"arrayValue"in t}function Qh(t){return!!t&&"nullValue"in t}function Yh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function Oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Xh{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{}class mt extends lv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lP(e,n,r):n==="array-contains"?new dP(e,r):n==="in"?new fP(e,r):n==="not-in"?new hP(e,r):n==="array-contains-any"?new pP(e,r):new mt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uP(e,r):new cP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(aa(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.matchesComparison(aa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cs extends lv{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Cs(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class lP extends mt{constructor(e,n,r){super(e,n,r),this.key=ye.fromName(r.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class uP extends mt{constructor(e,n){super(e,"in",n),this.keys=uv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cP extends mt{constructor(e,n){super(e,"not-in",n),this.keys=uv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ye.fromName(r.referenceValue))}class dP extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return av(n)&&ls(n.arrayValue,this.value)}}class fP extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ls(this.value.arrayValue,n)}}class hP extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ls(this.value.arrayValue,n)}}class pP extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!av(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ls(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new We(0,0))}static max(){return new Se(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.comparator=e,this.root=n||ge.EMPTY}insert(e,n){return new la(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new la(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??ge.EMPTY,this.right=s??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.comparator=e,this.data=new la(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jh(this.data.getIterator())}getIteratorFrom(e){return new Jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new us(this.comparator);return n.data=e,n}}class Jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new er([])}unionWith(e){let n=new us(De.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new er(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return iv(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(n)}setAll(e){let n=De.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Oi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return oa(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$l(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Je(Oi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Gt(e,0,Se.min(),Se.min(),Se.min(),Je.empty(),0)}static newFoundDocument(e,n,r,i){return new Gt(e,1,n,Se.min(),r,i,0)}static newNoDocument(e,n){return new Gt(e,2,n,Se.min(),Se.min(),Je.empty(),0)}static newUnknownDocument(e,n){return new Gt(e,3,n,Se.min(),Se.min(),Je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Zh(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mP(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function gP(t){return t.collectionGroup!==null}function yP(t){const e=Fa(t);if(e.S===null){e.S=[];const n=new Set;for(const s of e.explicitOrderBy)e.S.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new us(De.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.S.push(new Ju(s,r))}),n.has(De.keyField().canonicalString())||e.S.push(new Ju(De.keyField(),r))}return e.S}function vP(t){const e=Fa(t);return e.N||(e.N=_P(e,yP(t))),e.N}function _P(t,e){if(t.limitType==="F")return Zh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ju(i.field,s)});const n=t.endAt?new Xh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xh(t.startAt.position,t.startAt.inclusive):null;return Zh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zu(t,e){const n=t.filters.concat([e]);return new cv(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!sa(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sa(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this._=void 0}}class EP extends ja{}class SP extends ja{constructor(e){super(),this.elements=e}}class IP extends ja{constructor(e){super(),this.elements=e}}class TP extends ja{constructor(e,n){super(),this.serializer=e,this.q=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class $a{}class dv extends $a{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pd extends $a{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class kP extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PP extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP={asc:"ASCENDING",desc:"DESCENDING"},CP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AP={and:"AND",or:"OR"};class NP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OP(t,e){return ec(t,e.toTimestamp())}function ep(t){return vn(!!t),Se.fromTimestamp(function(n){const r=Jn(n);return new We(r.seconds,r.nanos)}(t))}function Rd(t,e){return function(r){return new ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function tc(t,e){return Rd(t.databaseId,e.path)}function DP(t,e){const n=function(i){const s=ae.fromString(i);return vn(hv(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new N(O,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(O,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(function(i){return vn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function tp(t,e){return Rd(t.databaseId,e)}function LP(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function np(t,e,n){return{name:tc(t,e),fields:n.value.mapValue.fields}}function bP(t,e){let n;if(e instanceof dv)n={update:np(t,e.key,e.value)};else if(e instanceof kP)n={delete:tc(t,e.key)};else if(e instanceof Pd)n={update:np(t,e.key,e.data),updateMask:jP(e.fieldMask)};else{if(!(e instanceof PP))return Y();n={verify:tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof EP)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof SP)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof IP)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof TP)return{fieldPath:o.field.canonicalString(),increment:a.q};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function UP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=tp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return fv(Cs.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:cr(d.field),direction:MP(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||tP(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function MP(t){return RP[t]}function FP(t){return CP[t]}function VP(t){return AP[t]}function cr(t){return{fieldPath:t.canonicalString()}}function fv(t){return t instanceof mt?function(n){if(n.op==="=="){if(Yh(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NAN"}};if(Qh(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yh(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NOT_NAN"}};if(Qh(n.value))return{unaryFilter:{field:cr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(n.field),op:FP(n.op),value:n.value}}}(t):t instanceof Cs?function(n){const r=n.getFilters().map(i=>fv(i));return r.length===1?r[0]:{compositeFilter:{op:VP(n.op),filters:r}}}(t):Y()}function jP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){return new NP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.J=!1}Y(){if(this.J)throw new N($r,"The client has already been terminated.")}R(e,n,r){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Xu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(xi,i.toString())})}g(e,n,r,i){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Xu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(xi,s.toString())})}terminate(){this.J=!0}}async function Ad(t,e){const n=Fa(t),r=LP(n.serializer)+"/documents",i={writes:e.map(s=>bP(n.serializer,s))};await n.R("Commit",r,i)}async function zP(t,e){const n=Fa(t),r=UP(n.serializer,vP(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,a,l){const u=DP(o,a.name),c=ep(a.updateTime),d=a.createTime?ep(a.createTime):Se.min(),h=new Je({mapValue:{fields:a.fields}}),v=Gt.newFoundDocument(u,c,d,h);return l&&v.setHasCommittedMutations(),l?v.setHasCommittedMutations():v}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map;function za(t){if(t._terminated)throw new N($r,"The client has already been terminated.");if(!Di.has(t)){ia("ComponentProvider","Initializing Datastore");const e=function(s){return new rP(s,fetch.bind(null))}(function(s,o,a,l){return new Jk(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,rv(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Cd(t._databaseId),r=function(s,o,a,l){return new $P(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Di.set(t,r)}return Di.get(t)}class rp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(O,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(O,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new N(O,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(O,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(O,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(O,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N($r,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N($r,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hk;switch(r.type){case"firstParty":return new Qk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(O,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Di.get(n);r&&(ia("ComponentProvider","Removing Datastore"),Di.delete(n),r.terminate())}(this),Promise.resolve()}}function BP(t,e){const n=typeof t=="object"?t:ud(),r=typeof t=="string"?t:e||"(default)",i=Da(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Xg("firestore");s&&WP(i,...s)}return i}function WP(t,e,n,r={}){var i;const s=(t=Ps(t,Ba))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zy("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=xe.MOCK_USER;else{a=ey(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(O,"mockUserToken must contain 'sub' or 'user_id' field!");l=new xe(u)}t._authCredentials=new Kk(new tv(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zr(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class Lt extends Zr{constructor(e,n,r){super(e,n,function(s){return new cv(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new ye(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function _n(t,e,...n){if(t=X(t),nv("collection","path",e),t instanceof Ba){const r=ae.fromString(e,...n);return Bh(r),new Lt(t,null,r)}{if(!(t instanceof Fe||t instanceof Lt))throw new N(O,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Bh(r),new Lt(t.firestore,null,r)}}function Wa(t,e,...n){if(t=X(t),arguments.length===1&&(e=sP.newId()),nv("doc","path",e),t instanceof Ba){const r=ae.fromString(e,...n);return zh(r),new Fe(t,null,new ye(r))}{if(!(t instanceof Fe||t instanceof Lt))throw new N(O,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return zh(r),new Fe(t.firestore,t instanceof Lt?t.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zr(jt.fromBase64String(e))}catch(n){throw new N(O,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zr(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(O,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(O,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(O,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=/^__.*__$/;class KP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pd(e,this.data,this.fieldMask,n,this.fieldTransforms):new dv(e,this.data,n,this.fieldTransforms)}}class pv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pd(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Od{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.X(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,nt:!1});return i.it(e),i}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,nt:!1});return i.X(),i}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return ua(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(mv(this.tt)&&HP.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class GP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cd(e)}lt(e,n,r,i=!1){return new Od({tt:e,methodName:n,ct:r,path:De.emptyPath(),nt:!1,_t:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ka(t){const e=t._freezeSettings(),n=Cd(t._databaseId);return new GP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gv(t,e,n,r,i,s={}){const o=t.lt(s.merge||s.mergeFields?2:0,e,n,i);Dd("Data must be an object, but it was:",o,r);const a=yv(r,o);let l,u;if(s.merge)l=new er(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=nc(e,d,n);if(!o.contains(h))throw new N(O,`Field '${h}' is specified in your field mask but missing from your input data.`);_v(c,h)||c.push(h)}l=new er(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new KP(new Je(a),l,u)}class Ga extends Nd{_toFieldTransform(e){if(e.tt!==2)throw e.tt===1?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ga}}function qP(t,e,n,r){const i=t.lt(1,e,n);Dd("Data must be an object, but it was:",i,r);const s=[],o=Je.empty();Rs(r,(l,u)=>{const c=Ld(e,l,n);u=X(u);const d=i.st(c);if(u instanceof Ga)s.push(c);else{const h=As(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new er(s);return new pv(o,a,i.fieldTransforms)}function QP(t,e,n,r,i,s){const o=t.lt(1,e,n),a=[nc(e,r,n)],l=[i];if(s.length%2!=0)throw new N(O,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(nc(e,s[h])),l.push(s[h+1]);const u=[],c=Je.empty();for(let h=a.length-1;h>=0;--h)if(!_v(u,a[h])){const v=a[h];let y=l[h];y=X(y);const w=o.st(v);if(y instanceof Ga)u.push(v);else{const _=As(y,w);_!=null&&(u.push(v),c.set(v,_))}}const d=new er(u);return new pv(c,d,o.fieldTransforms)}function YP(t,e,n,r=!1){return As(n,t.lt(r?4:3,e))}function As(t,e){if(vv(t=X(t)))return Dd("Unsupported field value:",e,t),yv(t,e);if(t instanceof Nd)return function(r,i){if(!mv(i.tt))throw i.ut(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ut(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.nt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=As(a,i.ot(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=We.fromDate(r);return{timestampValue:ec(i.serializer,s)}}if(r instanceof We){const s=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ec(i.serializer,s)}}if(r instanceof xd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zr)return{bytesValue:xP(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ut(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rd(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.ut(`Unsupported field value: ${Va(r)}`)}(t,e)}function yv(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,i)=>{const s=As(i,e.rt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof xd||t instanceof zr||t instanceof Fe||t instanceof Nd)}function Dd(t,e,n){if(!vv(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Va(n);throw r==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function nc(t,e,n){if((e=X(e))instanceof Ha)return e._internalPath;if(typeof e=="string")return Ld(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const XP=new RegExp("[~\\*/\\[\\]]");function Ld(t,e,n){if(e.search(XP)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ha(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(O,a+t+l)}function _v(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ev("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wv extends JP{data(){return super.data()}}class ZP{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Ev(t,e){return typeof e=="string"?Ld(t,e):e instanceof Ha?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{}class eR extends bd{}function Br(t,e,...n){let r=[];e instanceof bd&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ud).length,a=s.filter(l=>l instanceof qa).length;if(o>1||o>0&&a>0)throw new N(O,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qa extends eR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qa(e,n,r)}_apply(e){const n=this._parse(e);return Sv(e._query,n),new Zr(e.firestore,e.converter,Zu(e._query,n))}_parse(e){const n=Ka(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(O,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){sp(d,c);const v=[];for(const y of d)v.push(ip(l,s,y));h={arrayValue:{values:v}}}else h=ip(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||sp(d,c),h=YP(a,o,d,c==="in"||c==="not-in");return mt.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wr(t,e,n){const r=e,i=Ev("where",t);return qa._create(i,r,n)}class Ud extends bd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ud(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cs.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Sv(o,l),o=Zu(o,l)}(e._query,n),new Zr(e.firestore,e.converter,Zu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ip(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new N(O,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gP(e)&&n.indexOf("/")!==-1)throw new N(O,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!ye.isDocumentKey(r))throw new N(O,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qh(t,new ye(r))}if(n instanceof Fe)return qh(t,n._key);throw new N(O,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Va(n)}.`)}function sp(t,e){if(!Array.isArray(t)||t.length===0)throw new N(O,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sv(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(O,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(O,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class tR extends class{convertValue(n,r="none"){switch(Zn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return oe(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(os(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw Y()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return Rs(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new xd(oe(n.latitude),oe(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=ov(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(as(n));default:return null}}convertTimestamp(n){const r=Jn(n);return new We(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=ae.fromString(n);vn(hv(i));const s=new is(i.get(1),i.get(3)),o=new ye(i.popFirst(5));return s.isEqual(r)||Td(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function tr(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new N(ev,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Ps(t,Zr))._query);const e=za(t.firestore),n=new tR(t.firestore);return zP(e,t._query).then(r=>{const i=r.map(s=>new wv(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new ZP(t,i)})}function nR(t,e,n){const r=Iv((t=Ps(t,Fe)).converter,e,n),i=gv(Ka(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return Ad(za(t.firestore),[i.toMutation(t._key,zn.none())])}function Tv(t,e,n,...r){const i=Ka((t=Ps(t,Fe)).firestore);let s;return s=typeof(e=X(e))=="string"||e instanceof Ha?QP(i,"updateDoc",t._key,e,n,r):qP(i,"updateDoc",t._key,e),Ad(za(t.firestore),[s.toMutation(t._key,zn.exists(!0))])}function rR(t,e){const n=Wa(t=Ps(t,Lt)),r=Iv(t.converter,e),i=gv(Ka(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Ad(za(t.firestore),[i.toMutation(n._key,zn.exists(!1))]).then(()=>n)}(function(){(function(n){Jr=n})(`${or}_lite`),Qn(new yn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Ba(new Gk(e.getProvider("auth-internal")),new Xk(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(O,'"projectId" not provided in firebase.initializeApp.');return new is(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),St("firestore-lite","4.4.0",""),St("firestore-lite","4.4.0","esm2017")})();let ro;const iR=new Uint8Array(16);function sR(){if(!ro&&(ro=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ro))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ro(iR)}const he=[];for(let t=0;t<256;++t)he.push((t+256).toString(16).slice(1));function oR(t,e=0){return he[t[e+0]]+he[t[e+1]]+he[t[e+2]]+he[t[e+3]]+"-"+he[t[e+4]]+he[t[e+5]]+"-"+he[t[e+6]]+he[t[e+7]]+"-"+he[t[e+8]]+he[t[e+9]]+"-"+he[t[e+10]]+he[t[e+11]]+he[t[e+12]]+he[t[e+13]]+he[t[e+14]]+he[t[e+15]]}const aR=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),op={randomUUID:aR};function kv(t,e,n){if(op.randomUUID&&!e&&!t)return op.randomUUID();t=t||{};const r=t.random||(t.rng||sR)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return oR(r)}var ur={VITE_REACT_APP_EMAIL_JS_KEY:"lh8JE1pNJXDTiD_y4",BASE_URL:"/pingpongtest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const lR={apiKey:ur.VITE_FB_API_KEY,authDomain:ur.VITE_FB_AUTHDOMAIN,projectId:ur.VITE_FB_PROJECTID,storageBucket:ur.VITE_FB_STORAGE_BUCKET,messagingSenderId:ur.VITE_FB_MESSAGING_SENDERID,appId:ur.VITE_FB_APPID},Pv=ry(lR),pt=BP();async function uR(t,e,n,r){const i=Wa(pt,t,e);try{await Tv(i,{Loser:r,Winner:n,active:!1})}catch(s){console.error(`Error updating field: ${s}`)}}async function cs(t,e,n){const r=Wa(pt,"users",t);try{await Tv(r,{[e]:n})}catch(i){console.error(`Error updating field: ${i}`)}}async function cR(t,e,n,r){const s=new Date().toLocaleDateString(),o=Wa(pt,`${t}/${e}`),a={admin:n,player:r,active:!0,Winner:null,Loser:null,date:s};try{await nR(o,a)}catch(l){console.log(`I got an error ${l}`)}}async function dR(t,e,n){const r=_n(pt,"users");await rR(r,{id:kv(),Win:0,Losses:0,firstname:t,lastname:e,email:n,points:1e3,image:null})}async function Qa(t){const e=_n(pt,t),n=await tr(e);let r=[];return n.forEach(i=>{if(i.exists()){const s=i.data();r.push(s)}else console.log("No such document!")}),r}async function Rv(t,e){const n=Br(_n(pt,"users"),Wr("firstname","==",t)),r=await tr(n);if(r.empty)return null;{const i=r.docs[0];return e&&(cs(i.id,"points",i.data().points+e),cs(i.id,"Win",i.data().Win+1)),i.data()}}async function Cv(t,e){const n=Br(_n(pt,"users"),Wr("firstname","==",t)),r=await tr(n);if(!r.empty){const i=r.docs[0];e&&(cs(i.id,"points",i.data().points-e),cs(i.id,"Losses",i.data().Losses+1))}}async function Av(t){const e=Br(_n(pt,"games"),Wr("admin","==",t)),n=Br(_n(pt,"games"),Wr("player","==",t)),r=await tr(e),i=await tr(n),s=r.docs.map(l=>({id:l.id,...l.data()})),o=i.docs.map(l=>({id:l.id,...l.data()}));return[...s,...o]}async function Nv(t){const e=Br(_n(pt,"users"),Wr("email","==",t)),n=await tr(e);if(!n.empty)return n.docs[0].data()}async function fR(t){const e=Br(_n(pt,"users"),Wr("email","==",t)),n=await tr(e);if(!n.empty){const r=n.docs[0];return{docId:r.id,...r.data()}}}const Md=I1(Pv);new Ct;const Li=Ok(Pv),xv=()=>m.jsx(m.Fragment,{children:m.jsxs("div",{className:"start-screen-ball-holder",children:[m.jsx("div",{className:"ball"}),m.jsx("div",{className:"shadow"})]})}),hR=()=>{const t=async()=>{try{await dT(Md)}catch(e){console.error(e)}};return m.jsx(m.Fragment,{children:m.jsxs("div",{className:"dashboard-screen-container",children:[m.jsx("nav",{className:"nav-wrapper",children:m.jsxs("ul",{className:"nav-options-holder",children:[m.jsx(Ri,{className:"link",to:"/profile",children:m.jsx("li",{className:"nav-regular-game-button",children:"PROFILE "})}),m.jsx(Ri,{className:"link",to:"/tournament",children:m.jsx("li",{className:"nav-tournament-button",children:"TOURNAMENT "})}),m.jsx(Ri,{className:"link",to:"/scoreboard",children:m.jsx("li",{className:"nav-scoreboard-button",children:"SCOREBOARD "})}),m.jsx("li",{className:"nav-scoreboard-button sign-out-button",onClick:t,children:"SIGN OUT"})]})}),m.jsxs("div",{className:"dashboard-screen-hero",children:[m.jsx(xv,{}),m.jsx("div",{className:"dashboard-screen-heading-holder",children:m.jsx("h2",{children:"PINGPONGFINITY"})})]})]})})};function pR(){const t=/@dizparc\.se$/,[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(!1),a=async()=>{if(t.test(e))try{o(!1),await aT(Md,e,r)}catch(l){console.error(l)}else o(!0)};return m.jsxs("div",{className:"login-box",children:[m.jsxs("form",{className:"login-form",children:[s?m.jsx("label",{children:"Invalid email"}):null,m.jsx("input",{type:"email",placeholder:"Email-address",onChange:l=>n(l.target.value)}),m.jsx("input",{type:"password",placeholder:"Password",onChange:l=>i(l.target.value)})]}),m.jsx("button",{className:"login-button",onClick:a,children:"SIGN IN"})]})}function mR(){return m.jsx("div",{className:"start-screen-container",children:m.jsxs("div",{className:"start-screen-hero",children:[m.jsx(xv,{}),m.jsx("div",{className:"start-screen-heading-holder",children:m.jsx("h2",{children:"PINGPONGFINITY"})}),m.jsx("div",{className:"start-screen-login-holder",children:m.jsx(pR,{})})]})})}const Ya=({path:t})=>m.jsx("div",{className:"backbtn-holder",children:m.jsx(Ri,{to:t,children:m.jsx("button",{children:m.jsx("i",{className:"fa fa-chevron-left back-button"})})})});var Ov={exports:{}},Dv={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=T;function gR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yR=typeof Object.is=="function"?Object.is:gR,vR=Ns.useSyncExternalStore,_R=Ns.useRef,wR=Ns.useEffect,ER=Ns.useMemo,SR=Ns.useDebugValue;Dv.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=_R(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=ER(function(){function l(v){if(!u){if(u=!0,c=v,v=r(v),i!==void 0&&o.hasValue){var y=o.value;if(i(y,v))return d=y}return d=v}if(y=d,yR(c,v))return y;var w=r(v);return i!==void 0&&i(y,w)?y:(c=v,d=w)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=vR(t,s[0],s[1]);return wR(function(){o.hasValue=!0,o.value=a},[a]),SR(a),a};Ov.exports=Dv;var IR=Ov.exports,ze="default"in Kl?Op:Kl,ap=Symbol.for("react-redux-context"),lp=typeof globalThis<"u"?globalThis:{};function TR(){if(!ze.createContext)return{};const t=lp[ap]??(lp[ap]=new Map);let e=t.get(ze.createContext);return e||(e=ze.createContext(null),t.set(ze.createContext,e)),e}var wn=TR(),kR=()=>{throw new Error("uSES not initialized!")};function Fd(t=wn){return function(){return ze.useContext(t)}}var Lv=Fd(),bv=kR,PR=t=>{bv=t},RR=(t,e)=>t===e;function CR(t=wn){const e=t===wn?Lv:Fd(t);return function(r,i={}){const{equalityFn:s=RR,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();ze.useRef(!0);const h=ze.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,o.stabilityCheck]),v=bv(l.addNestedSub,a.getState,u||a.getState,h,s);return ze.useDebugValue(v),v}}var ne=CR();function AR(t){t()}function NR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){AR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0,i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var up={notify(){},get:()=>[]};function xR(t,e){let n,r=up,i=0,s=!1;function o(w){c();const _=r.subscribe(w);let p=!1;return()=>{p||(p=!0,_(),d())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=NR())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=up)}function h(){s||(s=!0,c())}function v(){s&&(s=!1,d())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:v,getListeners:()=>r};return y}var OR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DR=OR?ze.useLayoutEffect:ze.useEffect;function LR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=ze.useMemo(()=>{const u=xR(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=ze.useMemo(()=>t.getState(),[t]);DR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||wn;return ze.createElement(l.Provider,{value:o},n)}var bR=LR;function Uv(t=wn){const e=t===wn?Lv:Fd(t);return function(){const{store:r}=e();return r}}var UR=Uv();function MR(t=wn){const e=t===wn?UR:Uv(t);return function(){return e().dispatch}}var Rn=MR();PR(IR.useSyncExternalStoreWithSelector);function pe(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var FR=typeof Symbol=="function"&&Symbol.observable||"@@observable",cp=FR,zl=()=>Math.random().toString(36).substring(7).split("").join("."),VR={INIT:`@@redux/INIT${zl()}`,REPLACE:`@@redux/REPLACE${zl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${zl()}`},ca=VR;function Vd(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Mv(t,e,n){if(typeof t!="function")throw new Error(pe(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(pe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(pe(1));return n(Mv)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((_,p)=>{o.set(p,_)}))}function c(){if(l)throw new Error(pe(3));return i}function d(_){if(typeof _!="function")throw new Error(pe(4));if(l)throw new Error(pe(5));let p=!0;u();const f=a++;return o.set(f,_),function(){if(p){if(l)throw new Error(pe(6));p=!1,u(),o.delete(f),s=null}}}function h(_){if(!Vd(_))throw new Error(pe(7));if(typeof _.type>"u")throw new Error(pe(8));if(typeof _.type!="string")throw new Error(pe(17));if(l)throw new Error(pe(9));try{l=!0,i=r(i,_)}finally{l=!1}return(s=o).forEach(f=>{f()}),_}function v(_){if(typeof _!="function")throw new Error(pe(10));r=_,h({type:ca.REPLACE})}function y(){const _=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(pe(11));function f(){const E=p;E.next&&E.next(c())}return f(),{unsubscribe:_(f)}},[cp](){return this}}}return h({type:ca.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:v,[cp]:y}}function jR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:ca.INIT})>"u")throw new Error(pe(12));if(typeof n(void 0,{type:ca.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(pe(13))})}function $R(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{jR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],v=o[d],y=h(v,a);if(typeof y>"u")throw a&&a.type,new Error(pe(14));u[d]=y,l=l||y!==v}return l=l||r.length!==Object.keys(o).length,l?u:o}}function da(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function zR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(pe(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=da(...a)(i.dispatch),{...i,dispatch:s}}}function BR(t){return Vd(t)&&"type"in t&&typeof t.type=="string"}var Fv=Symbol.for("immer-nothing"),dp=Symbol.for("immer-draftable"),Ke=Symbol.for("immer-state");function lt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Hr=Object.getPrototypeOf;function En(t){return!!t&&!!t[Ke]}function $t(t){var e;return t?Vv(t)||Array.isArray(t)||!!t[dp]||!!((e=t.constructor)!=null&&e[dp])||Ja(t)||Za(t):!1}var WR=Object.prototype.constructor.toString();function Vv(t){if(!t||typeof t!="object")return!1;const e=Hr(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===WR}function ds(t,e){Xa(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Xa(t){const e=t[Ke];return e?e.type_:Array.isArray(t)?1:Ja(t)?2:Za(t)?3:0}function rc(t,e){return Xa(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function jv(t,e,n){const r=Xa(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function HR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Ja(t){return t instanceof Map}function Za(t){return t instanceof Set}function Ln(t){return t.copy_||t.base_}function ic(t,e){if(Ja(t))return new Map(t);if(Za(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&Vv(t))return Hr(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[Ke];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Hr(t),n)}function jd(t,e=!1){return el(t)||En(t)||!$t(t)||(Xa(t)>1&&(t.set=t.add=t.clear=t.delete=KR),Object.freeze(t),e&&ds(t,(n,r)=>jd(r,!0))),t}function KR(){lt(2)}function el(t){return Object.isFrozen(t)}var GR={};function nr(t){const e=GR[t];return e||lt(0,t),e}var fs;function $v(){return fs}function qR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function fp(t,e){e&&(nr("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function sc(t){oc(t),t.drafts_.forEach(QR),t.drafts_=null}function oc(t){t===fs&&(fs=t.parent_)}function hp(t){return fs=qR(fs,t)}function QR(t){const e=t[Ke];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function pp(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Ke].modified_&&(sc(e),lt(4)),$t(t)&&(t=fa(e,t),e.parent_||ha(e,t)),e.patches_&&nr("Patches").generateReplacementPatches_(n[Ke].base_,t,e.patches_,e.inversePatches_)):t=fa(e,n,[]),sc(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Fv?t:void 0}function fa(t,e,n){if(el(e))return e;const r=e[Ke];if(!r)return ds(e,(i,s)=>mp(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return ha(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),ds(s,(a,l)=>mp(t,r,i,a,l,n,o)),ha(t,i,!1),n&&t.patches_&&nr("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function mp(t,e,n,r,i,s,o){if(En(i)){const a=s&&e&&e.type_!==3&&!rc(e.assigned_,r)?s.concat(r):void 0,l=fa(t,i,a);if(jv(n,r,l),En(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if($t(i)&&!el(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;fa(t,i),(!e||!e.scope_.parent_)&&ha(t,i)}}function ha(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&jd(e,n)}function YR(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:$v(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=$d;n&&(i=[r],s=hs);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var $d={get(t,e){if(e===Ke)return t;const n=Ln(t);if(!rc(n,e))return XR(t,n,e);const r=n[e];return t.finalized_||!$t(r)?r:r===Bl(t.base_,e)?(Wl(t),t.copy_[e]=lc(r,t)):r},has(t,e){return e in Ln(t)},ownKeys(t){return Reflect.ownKeys(Ln(t))},set(t,e,n){const r=zv(Ln(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Bl(Ln(t),e),s=i==null?void 0:i[Ke];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(HR(n,i)&&(n!==void 0||rc(t.base_,e)))return!0;Wl(t),ac(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Bl(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Wl(t),ac(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ln(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){lt(11)},getPrototypeOf(t){return Hr(t.base_)},setPrototypeOf(){lt(12)}},hs={};ds($d,(t,e)=>{hs[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});hs.deleteProperty=function(t,e){return hs.set.call(this,t,e,void 0)};hs.set=function(t,e,n){return $d.set.call(this,t[0],e,n,t[0])};function Bl(t,e){const n=t[Ke];return(n?Ln(n):t)[e]}function XR(t,e,n){var i;const r=zv(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function zv(t,e){if(!(e in t))return;let n=Hr(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Hr(n)}}function ac(t){t.modified_||(t.modified_=!0,t.parent_&&ac(t.parent_))}function Wl(t){t.copy_||(t.copy_=ic(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var JR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&lt(6),r!==void 0&&typeof r!="function"&&lt(7);let i;if($t(e)){const s=hp(this),o=lc(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?sc(s):oc(s)}return fp(s,r),pp(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===Fv&&(i=void 0),this.autoFreeze_&&jd(i,!0),r){const s=[],o=[];nr("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else lt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){$t(t)||lt(8),En(t)&&(t=Bv(t));const e=hp(this),n=lc(t,void 0);return n[Ke].isManual_=!0,oc(e),n}finishDraft(t,e){const n=t&&t[Ke];(!n||!n.isManual_)&&lt(9);const{scope_:r}=n;return fp(r,e),pp(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=nr("Patches").applyPatches_;return En(t)?r(t,e):this.produce(t,i=>r(i,e))}};function lc(t,e){const n=Ja(t)?nr("MapSet").proxyMap_(t,e):Za(t)?nr("MapSet").proxySet_(t,e):YR(t,e);return(e?e.scope_:$v()).drafts_.push(n),n}function Bv(t){return En(t)||lt(10,t),Wv(t)}function Wv(t){if(!$t(t)||el(t))return t;const e=t[Ke];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=ic(t,e.scope_.immer_.useStrictShallowCopy_)}else n=ic(t,!0);return ds(n,(r,i)=>{jv(n,r,Wv(i))}),e&&(e.finalized_=!1),n}var Ge=new JR,Hv=Ge.produce;Ge.produceWithPatches.bind(Ge);Ge.setAutoFreeze.bind(Ge);Ge.setUseStrictShallowCopy.bind(Ge);Ge.applyPatches.bind(Ge);Ge.createDraft.bind(Ge);Ge.finishDraft.bind(Ge);function ZR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function eC(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var gp=t=>Array.isArray(t)?t:[t];function tC(t){const e=Array.isArray(t[0])?t[0]:t;return eC(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function nC(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var rC=class{constructor(t){this.value=t}deref(){return this.value}},iC=typeof WeakRef<"u"?WeakRef:rC,sC=0,yp=1;function io(){return{s:sC,v:void 0,o:null,p:null}}function Kv(t,e={}){let n=io();const{resultEqualityCheck:r}=e;let i,s=0;function o(){let a=n;const{length:l}=arguments;for(let d=0,h=l;d<h;d++){const v=arguments[d];if(typeof v=="function"||typeof v=="object"&&v!==null){let y=a.o;y===null&&(a.o=y=new WeakMap);const w=y.get(v);w===void 0?(a=io(),y.set(v,a)):a=w}else{let y=a.p;y===null&&(a.p=y=new Map);const w=y.get(v);w===void 0?(a=io(),y.set(v,a)):a=w}}const u=a;let c;if(a.s===yp?c=a.v:(c=t.apply(null,arguments),s++),u.s=yp,r){const d=(i==null?void 0:i.deref())??i;d!=null&&r(d,c)&&(c=d,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new iC(c):c}return u.v=c,c}return o.clearCache=()=>{n=io(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function oC(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t;return(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),ZR(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:h=[],argsMemoize:v=Kv,argsMemoizeOptions:y=[],devModeChecks:w={}}=c,_=gp(h),p=gp(y),f=tC(i),g=d(function(){return s++,u.apply(null,arguments)},..._),E=v(function(){o++;const k=nC(f,arguments);return a=g.apply(null,k),a},...p);return Object.assign(E,{resultFunc:u,memoizedResultFunc:g,dependencies:f,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:v})}}function Gv(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var aC=Gv(),lC=Gv,uC=(...t)=>{const e=oC(...t);return(...n)=>{const r=e(...n),i=(s,...o)=>r(En(s)?Bv(s):s,...o);return Object.assign(i,r),i}};uC(Kv);var cC=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?da:da.apply(null,arguments)};function ps(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(dt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>BR(r)&&r.type===t,n}var qv=class yi extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,yi.prototype)}static get[Symbol.species](){return yi}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new yi(...e[0].concat(this)):new yi(...e.concat(this))}};function vp(t){return $t(t)?Hv(t,()=>{}):t}function _p(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(dt(10));const r=n.insert(e,t);return t.set(e,r),r}function dC(t){return typeof t=="boolean"}var fC=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new qv;return n&&(dC(n)?o.push(aC):o.push(lC(n.extraArgument))),o},hC="RTK_autoBatch",Qv=t=>e=>{setTimeout(e,t)},pC=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Qv(10),mC=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?pC:t.type==="callback"?t.queueNotification:Qv(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return a.add(c),()=>{h(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[hC]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},gC=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new qv(t);return r&&i.push(mC(typeof r=="object"?r:void 0)),i},yC=!0;function vC(t){const e=fC(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Vd(n))a=$R(n);else throw new Error(dt(1));let l;typeof r=="function"?l=r(e):l=e();let u=da;i&&(u=cC({trace:!yC,...typeof i=="object"&&i}));const c=zR(...l),d=gC(c);let h=typeof o=="function"?o(d):d();const v=u(...h);return Mv(a,s,v)}function Yv(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(dt(28));if(a in e)throw new Error(dt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function _C(t){return typeof t=="function"}function wC(t,e){let[n,r,i]=Yv(e),s;if(_C(t))s=()=>vp(t());else{const a=vp(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(En(c)){const v=d(c,l);return v===void 0?c:v}else{if($t(c))return Hv(c,h=>d(h,l));{const h=d(c,l);if(h===void 0){if(c===null)return c;throw new Error(dt(9))}return h}}return c},a)}return o.getInitialState=s,o}var EC=Symbol.for("rtk-slice-createasyncthunk");function SC(t,e){return`${t}/${e}`}function IC({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[EC];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(dt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(kC()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(_,p){const f=typeof _=="string"?_:_.type;if(!f)throw new Error(dt(12));if(f in u.sliceCaseReducersByType)throw new Error(dt(13));return u.sliceCaseReducersByType[f]=p,c},addMatcher(_,p){return u.sliceMatchers.push({matcher:_,reducer:p}),c},exposeAction(_,p){return u.actionCreators[_]=p,c},exposeCaseReducer(_,p){return u.sliceCaseReducersByName[_]=p,c}};l.forEach(_=>{const p=a[_],f={reducerName:_,type:SC(s,_),createNotation:typeof i.reducers=="function"};RC(p)?AC(f,p,c,e):PC(f,p,c)});function d(){const[_={},p=[],f=void 0]=typeof i.extraReducers=="function"?Yv(i.extraReducers):[i.extraReducers],g={..._,...u.sliceCaseReducersByType};return wC(i.initialState,E=>{for(let I in g)E.addCase(I,g[I]);for(let I of u.sliceMatchers)E.addMatcher(I.matcher,I.reducer);for(let I of p)E.addMatcher(I.matcher,I.reducer);f&&E.addDefaultCase(f)})}const h=_=>_,v=new WeakMap;let y;const w={name:s,reducerPath:o,reducer(_,p){return y||(y=d()),y(_,p)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return y||(y=d()),y.getInitialState()},getSelectors(_=h){const p=_p(v,this,{insert:()=>new WeakMap});return _p(p,_,{insert:()=>{const f={};for(const[g,E]of Object.entries(i.selectors??{}))f[g]=TC(this,E,_,this!==w);return f}})},selectSlice(_){let p=_[this.reducerPath];return typeof p>"u"&&this!==w&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(_,{reducerPath:p,...f}={}){const g=p??this.reducerPath;return _.inject({reducerPath:g,reducer:this.reducer},f),{...this,reducerPath:g}}};return w}}function TC(t,e,n,r){function i(s,...o){let a=n.call(t,s);return typeof a>"u"&&r&&(a=t.getInitialState()),e(a,...o)}return i.unwrapped=e,i}var xs=IC();function kC(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function PC({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!CC(r))throw new Error(dt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?ps(t,o):ps(t))}function RC(t){return t._reducerDefinitionType==="asyncThunk"}function CC(t){return t._reducerDefinitionType==="reducerWithPrepare"}function AC({type:t,reducerName:e},n,r,i){if(!i)throw new Error(dt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||so,pending:a||so,rejected:l||so,settled:u||so})}function so(){}var zd="listenerMiddleware";ps(`${zd}/add`);ps(`${zd}/removeAll`);ps(`${zd}/remove`);function dt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Xv=xs({name:"allGames",initialState:{value:[],finished:[]},reducers:{setAllGames:(t,e)=>{t.value=e.payload},setNewGame:(t,e)=>{t.value=[e.payload,...t.value]},updateGame:(t,e)=>{const{id:n,updatedFields:r}=e.payload;t.value=t.value.map(i=>i.id===n?{...i,...r}:i)},setAllFinsihedGames:(t,e)=>{t.finished=[e.payload,...t.finished]}}}),{setAllGames:NC,updateGame:xC,setNewGame:OC,setAllFinsihedGames:lA}=Xv.actions,DC=Xv.reducer,Jv=xs({name:"currentUser",initialState:{value:null,current:!1},reducers:{setCurrentUser:(t,e)=>{t.value=e.payload},setCurrent:(t,e)=>{t.current=e.payload}}}),{setCurrentUser:pa,setCurrent:LC}=Jv.actions,bC=Jv.reducer,UC=({reduxAllGames:t})=>{const e=Rn(),n=ne(i=>i.currentUser.value),r=(i,s,o)=>{uR("games",i,s,o),Cv(o,10),Rv(s,10),e(xC({id:i,updatedFields:{active:!1,Loser:o,Winner:s}})),s===n.firstname?e(pa({...n,Win:n.Win+1,points:n.points+10})):e(pa({...n,Losses:n.Losses+1,points:n.points-10}))};return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"active-games-heading-holder",children:m.jsx("p",{children:"Active games"})}),m.jsx("div",{className:"active-games-stats",children:m.jsx("ul",{children:t.map((i,s)=>i.active?m.jsxs("li",{className:"game-wrapper",children:[m.jsx("div",{className:"players-wrapper",children:m.jsxs("p",{children:[i.admin," vs ",i.player]})}),m.jsxs("div",{className:"select-winner-wrapper",children:[m.jsx("h5",{children:"Select Winner"}),m.jsxs("div",{children:[m.jsx("button",{className:"winBtn",onClick:()=>r(i.id,i.admin,i.player,i.admin,i.player),children:i.admin}),m.jsx("button",{className:"loseBtn",onClick:()=>r(i.id,i.player,i.admin,i.admin,i.player),children:i.player})]})]})]},s):null)})})]})},Zv=({allGames:t})=>m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"finished-games-heading-holder",children:m.jsx("p",{children:"Finished games"})}),m.jsx("div",{className:"finished-games-stats",children:t.map((e,n)=>e.active==!1?m.jsx("div",{className:"finished-games",children:m.jsxs("div",{className:"game-players-wrapper",children:[m.jsx("div",{className:"date-time",children:m.jsx("p",{children:e.date.toString()})}),m.jsx("p",{className:"game-holder winner",children:e.Winner}),m.jsx("p",{className:"versus-para",children:"vs"}),m.jsx("p",{className:"game-holder loser",children:e.Loser},n)]})},n):null)})]}),e_=xs({name:"allUsers",initialState:{value:null},reducers:{setAllUsers:(t,e)=>{t.value=e.payload},updateUser:(t,e)=>{const{id:n,points:r}=e.payload;t.value=t.value.map(i=>i.id===n?{...i,points:r}:i)}}}),{setAllUsers:tl,updateUser:wp}=e_.actions,MC=e_.reducer,FC=({authUser:t})=>{const[e,n]=T.useState(!1),r=ne(_=>_.allUsers.value),i=ne(_=>_.allGames.value),s=ne(_=>_.currentUser.value),o=ne(_=>_.currentUser.current),a=Rn(),[l,u]=T.useState(null),[c,d]=T.useState(null);T.useEffect(()=>{(async()=>{try{const p=await Nv(t.email);if(a(pa(p)),r===null){const f=await Qa("users");f.sort((g,E)=>E.points-g.points),a(tl(f))}}catch(p){console.error("Error fetching user profile:",p)}})()},[t.email]),T.useEffect(()=>{s&&!o&&(a(LC(!0)),(async()=>{try{if(i){const p=await Av(s.firstname);a(NC(p))}}catch(p){console.error("Error fetching games:",p)}})()),s&&s.image!==null&&ra(Ni(Li,`${s.image}`)).then(_=>{u(_)})},[s]);function h(){n(!e)}function v(_){const f=new Date().toLocaleDateString();let g=kv();cR("games",g,s.firstname,_.firstname),a(OC({id:g,Loser:null,Winner:null,active:!0,admin:s.firstname,player:_.firstname,date:f})),n(!1)}async function y(){try{return await fR(s.email)}catch(_){console.error("Error:",_)}}async function w(_){if(_===null)return;const p=await y(),f=`images/${p.docId}`,g=Ni(Li,f);d(f),xk(g,_).then(()=>{cs(p.docId,"image",f).then(()=>{ra(Ni(Li,`${f}`)).then(E=>{u(E)})})})}return m.jsx(m.Fragment,{children:m.jsx("div",{className:"wrapper",children:m.jsxs("div",{className:"regular-match-hero",children:[m.jsx(Ya,{path:"/"}),m.jsx("div",{className:"regular-match-playerinfo-holder",children:m.jsxs("div",{className:"player-info",children:[s?m.jsxs(m.Fragment,{children:[m.jsxs("h3",{className:"player-name",children:[s.firstname," ",s.lastname]}),m.jsx("div",{className:"image-holder",children:s.image?l?m.jsxs(m.Fragment,{children:[m.jsx("img",{src:l}),m.jsx("input",{className:"upload-image",type:"file",id:"img-upload",onChange:_=>w(_.target.files[0]),style:{display:"none"}}),m.jsx("label",{htmlFor:"img-upload",className:"image-upload-label",children:m.jsx("i",{className:"fa-solid fa-plus"})})]}):m.jsxs("div",{className:"lds-ring",children:[m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{}),m.jsx("div",{})]}):m.jsxs(m.Fragment,{children:[m.jsx("img",{src:"src\\assets\\images\\delow.jpg"}),m.jsx("input",{className:"upload-image",type:"file",id:"img-upload",onChange:_=>w(_.target.files[0]),style:{display:"none"}}),m.jsx("label",{htmlFor:"img-upload",className:"image-upload-label",children:m.jsx("i",{className:"fa-solid fa-plus"})})]})}),m.jsx("h4",{className:"score-title",children:"Score"}),m.jsx("p",{className:"score-points",children:s.points}),s.Win>0&&s.Losses>0?m.jsxs(m.Fragment,{children:[m.jsx("h3",{className:"win-percentage-title",children:"Win percentage "}),m.jsxs("p",{className:"win-percentage-figures",children:[" ",(s.Win/(s.Win+s.Losses)*100).toFixed(1),"%"]})]}):null,m.jsxs("h5",{className:"results-heading",children:["Wins: ",m.jsx("span",{className:"wins",children:s.Win})," / Losses: ",m.jsx("span",{className:"losses",children:s.Losses})]})]}):null,m.jsx("button",{className:"challenge-opponent-button",onClick:h,children:"CHALLENGE"})]})}),m.jsx("div",{className:"opponent-holder",children:e?r.map((_,p)=>_.email!==t.email?m.jsx("button",{className:"challenge-btn",onClick:()=>v(_),children:_.firstname},p):null):null}),m.jsxs("div",{className:"regular-match-gamestats-holder",children:[m.jsx("div",{className:"active-games-wrapper",children:i!==null?m.jsx(UC,{reduxAllGames:i}):null}),m.jsx("div",{className:"finished-games-wrapper",children:i!==null?m.jsx(Zv,{allGames:i}):null})]})]})})})},t_=xs({name:"tournament",initialState:{value:"",start:!1,pickedPlayers:[],playersLeft:[],playersRight:[],final:[],winner:null,losers:[]},reducers:{setTournamentPlayers:(t,e)=>{t.value=e.payload},setPickedPlayers:(t,e)=>{t.pickedPlayers=[...t.pickedPlayers,e.payload]},setAdminPlayer:(t,e)=>{t.pickedPlayers=e.payload},removePickedPlayers:(t,e)=>{t.pickedPlayers=e.payload},setPlayersLeft:(t,e)=>{t.playersLeft=e.payload},removePlayersLeft:(t,e)=>{t.playersLeft=e.payload},setPlayersRight:(t,e)=>{t.playersRight=e.payload},removePlayersRight:(t,e)=>{t.playersRight=e.payload},setStart:(t,e)=>{t.start=e.payload},setFinal:(t,e)=>{t.final=[...t.final,e.payload]},removeFinal:(t,e)=>{t.final=e.payload},setWinner:(t,e)=>{t.winner=e.payload},setLoser:(t,e)=>{t.losers=[...t.losers,e.payload]},removeLoser:(t,e)=>{t.losers=e.payload}}}),{setTournamentPlayers:VC,setStart:Ep,setPickedPlayers:Hl,setPlayersLeft:jC,setPlayersRight:$C,setFinal:n_,setWinner:r_,removePickedPlayers:zC,removePlayersLeft:BC,removePlayersRight:WC,removeFinal:HC,setLoser:KC,removeLoser:GC,setAdminPlayer:uA}=t_.actions,qC=t_.reducer;function Sp({players:t,pickedPlayers:e}){const n=ne(o=>o.tournament.losers),r=ne(o=>o.tournament.final);T.useEffect(()=>{n&&n.map(o=>{const a=document.getElementById(`${o.firstname}Btn`),l=document.getElementById(`${o.firstname}Text`);a&&l&&(a.style.display="none",l.setAttribute("class","loser"))}),r&&r.map(o=>{const a=document.getElementById(`${o.firstname}Btn`),l=document.getElementById(`${o.firstname}Text`);a&&l&&(a.style.display="none",l.setAttribute("class","winner"))})},[]);const i=Rn();function s(o,a){const l=e.find(y=>y.firstname===o),u=e.find(y=>y.firstname===a);i(n_(l)),i(KC(u));const c=document.getElementById(`${u.firstname}Btn`),d=document.getElementById(`${u.firstname}Text`),h=document.getElementById(`${l.firstname}Btn`),v=document.getElementById(`${l.firstname}Text`);h&&v&&c&&d&&(h.style.display="none",v.setAttribute("class","winner"),c.style.display="none",d.setAttribute("class","loser"))}return t.map((o,a)=>a===1?m.jsxs("div",{children:[m.jsx("p",{className:"versus",children:"vs"}),m.jsxs("div",{className:`player-field-left-${a+1}`,children:[m.jsx("p",{id:`${o.firstname}Text`,children:o.firstname}),m.jsx("button",{className:"tournament-win-btn",id:`${o.firstname}Btn`,onClick:()=>s(o.firstname,a===0?t[1].firstname:t[0].firstname),children:"Winner"})]})]},a):m.jsxs("div",{className:`player-field-left-${a+1}`,children:[m.jsx("p",{id:`${o.firstname}Text`,children:o.firstname}),m.jsx("button",{className:"tournament-win-btn",id:`${o.firstname}Btn`,onClick:()=>s(o.firstname,a===0?t[1].firstname:t[0].firstname),children:"Winner"})]},a))}function QC({players:t,final:e,pickedPlayers:n}){const r=Rn(),i=ne(o=>o.allUsers.value);async function s(o,a){const l=e.find(y=>y.firstname===o.firstname),u=e.find(y=>y.firstname===a.firstname),c=document.getElementById(`final${u.firstname}`),d=document.getElementById(`final${u.firstname}Text`),h=document.getElementById(`final${l.firstname}`),v=document.getElementById(`final${l.firstname}Text`);h&&v&&c&&d&&(h.style.display="none",v.setAttribute("class","winner finalist-1"),c.style.display="none",d.setAttribute("class","loser finalist-1")),r(r_(o));try{Rv(o.firstname,50),i.map(y=>{y.id===o.id&&r(wp({id:o.id,points:y.points+50}))}),n.map(y=>{if(y.firstname!==o.firstname){const w=i.find(_=>_.firstname===y.firstname);Cv(y.firstname,10),r(wp({id:y.id,points:w.points-10}))}})}catch(y){console.error("Error querying for winner:",y)}}return t.map((o,a)=>m.jsxs("div",{className:"finalist-box",children:[m.jsx("p",{id:`final${o.firstname}Text`,className:"finalist-1",children:o.firstname}),m.jsx("button",{className:"tournament-win-btn",id:`final${o.firstname}`,onClick:()=>s(o,a===0?e[1]:e[0]),children:"Winner"})]},a))}const YC=()=>{const t=ne(y=>y.tournament.start),e=ne(y=>y.tournament.value),n=ne(y=>y.tournament.pickedPlayers),r=ne(y=>y.tournament.playersLeft),i=ne(y=>y.tournament.playersRight),s=ne(y=>y.tournament.final),o=ne(y=>y.currentUser.value),a=ne(y=>y.tournament.winner),[l,u]=T.useState(null),c=Rn();async function d(){try{const y=await Qa("users");return y.sort((w,_)=>_.points-w.points),y}catch(y){return console.error("Error fetching users:",y),null}}T.useEffect(()=>{const y=async()=>{try{const w=await d();c(VC(w)),c(tl(w))}catch(w){console.error("Error fetching and sorting users:",w)}};if(e.length===0&&y(),n.length===4){const w=n,_=n;c(jC(w.slice(0,2))),c($C(_.slice(2,4))),c(Ep(!0))}a&&a.image&&ra(Ni(Li,`${a.image}`)).then(w=>{u(w)})},[n,a]),T.useEffect(()=>{o&&c(Hl(o))},[o]);function h(y){c(Hl(y));const w=document.getElementById(`${y.firstname}`);w&&(w.style.display="none")}function v(){c(Ep(!1)),c(zC([])),c(Hl(o)),c(BC([])),c(WC([])),c(HC([])),c(r_(null)),c(GC([]))}return m.jsx(m.Fragment,{children:m.jsx("div",{className:"wrapper",children:m.jsxs("div",{className:"tournament-match-hero",children:[m.jsx(Ya,{path:"/"}),m.jsxs("div",{className:"tournament-info",children:[a!==null?m.jsx(m.Fragment,{}):m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"tournament-heading",children:"PLAY TOURNAMENT"}),m.jsx("div",{className:"marker-holder",children:m.jsx("p",{children:"ADD 3 PLAYERS"})})]}),m.jsxs("div",{className:"tournament-players-buttons",children:[!t&&e.length>2&&o?e.map((y,w)=>y.firstname!==o.firstname?m.jsx("div",{className:"name-holder",children:m.jsx("button",{id:y.firstname,className:"name challenge-btn",onClick:()=>h(y),children:y.firstname})},w):null):a===null?m.jsxs("div",{children:[m.jsxs("div",{className:"all-fields-holder",children:[m.jsx("div",{className:"player-fields-left-holder",children:m.jsx(Sp,{players:i,pickedPlayers:n,setFinal:n_,final:s})}),m.jsx("div",{className:"player-fields-left-holder",children:m.jsx(Sp,{players:r,pickedPlayers:n,final:s})})]}),m.jsx("div",{className:"final-game",children:m.jsx("div",{className:"player-field-final",children:s.length===2?m.jsx(QC,{players:s,final:s,pickedPlayers:n}):null})})]}):null,a!==null?m.jsx("div",{className:"winner-box-holder",children:m.jsxs("div",{className:"winner-box",children:[m.jsx("button",{className:"challenge-btn play-again",onClick:()=>v(),children:"PLAY AGAIN"}),m.jsx("h2",{children:"The winner of the tournament is..."}),a.image?m.jsx("img",{className:"winner-img",src:l}):m.jsx("img",{src:"src\\assets\\images\\delow.jpg"}),m.jsxs("h3",{children:[a.firstname,", you get 50 points!"]})]})}):null]})]})]})})})},XC=()=>{const t=ne(i=>i.allUsers.value),e=Rn();T.useEffect(()=>{(async()=>{try{if(t===null){const s=await n();e(tl(s))}}catch(s){console.error("Error fetching and sorting users:",s)}})()},[]);async function n(){try{const i=await Qa("users");return i.sort((s,o)=>o.points-s.points),i}catch(i){return console.error("Error fetching users:",i),[]}}const r=["src/assets/images/waldner.jpg","src/assets/images/persson.jpg","src/assets/images/Timoboll.jpg","src/assets/images/malong.jpg","src/assets/images/truls.jpg","src/assets/images/delow.jpg"];return m.jsx(m.Fragment,{children:m.jsx("div",{className:"wrapper",children:m.jsxs("div",{className:"scoreboard-hero",children:[m.jsx(Ya,{path:"/"}),m.jsxs("div",{className:"scoreboard-info-holder",children:[m.jsx("div",{className:"scoreboard-heading-holder",children:m.jsx("h2",{children:"SCOREBOARD"})}),m.jsxs("div",{className:"scoreboard",children:[m.jsxs("div",{className:"scoreboard-stats-heading-holder",children:[m.jsx("div",{className:"ranking-holder",children:m.jsx("h2",{children:"Rank"})}),m.jsx("div",{className:"player-holder",children:m.jsx("h2",{children:"Player"})}),m.jsx("div",{className:"points-holder",children:m.jsx("h2",{children:"Points"})})]}),t?t.map((i,s)=>m.jsx(Ri,{className:"profile-link",to:`/user/${s}`,children:m.jsxs("div",{className:"scoreboard-stats",children:[s<5?m.jsx("div",{className:"position-holder",children:m.jsx("img",{src:r[s]})}):m.jsx("div",{className:"position-holder",children:m.jsx("img",{src:r[5]})}),m.jsx("div",{className:"player-holder",children:m.jsx("p",{className:"name",children:i.firstname})}),m.jsx("div",{className:"player-points-holder",children:m.jsx("p",{children:i.points})})]})},s)):null]})]})]})})})},i_=xs({name:"singleUser",initialState:{value:null},reducers:{setSingleUserGames:(t,e)=>{t.value=e.payload}}}),{setSingleUserGames:JC}=i_.actions,ZC=i_.reducer;function eA(){const t=ne(a=>a.allUsers.value),e=ne(a=>a.singleUser.value),n=Rn(),{id:r}=uE(),[i,s]=T.useState(null);T.useEffect(()=>{(async()=>{try{if(t===null){const u=await o();n(tl(u.users))}const l=await Av(t[r].firstname);n(JC(l))}catch(l){console.error("Error fetching and sorting users:",l)}})(),t[r].image&&ra(Ni(Li,`${t[r].image}`)).then(l=>{s(l)})},[]);async function o(){try{const a=await Qa("users");return a.sort((l,u)=>u.points-l.points),a}catch(a){return console.error("Error fetching users:",a),[]}}return m.jsx("div",{className:"wrapper",children:m.jsxs("div",{className:"regular-match-hero profile-hero",children:[m.jsx(Ya,{path:"/scoreboard"}),m.jsx("div",{className:"regular-match-playerinfo-holder",children:m.jsx("div",{className:"player-info",children:t?m.jsxs("div",{children:[m.jsxs("h2",{className:"player-name",children:[t[r].firstname," ",t[r].lastname]}),i!==null?m.jsx("img",{className:"profile-image",src:i}):m.jsx("p",{children:"No profile image"}),m.jsx("h4",{className:"score-title",children:"Score"}),m.jsx("p",{className:"score-points",children:t[r].points}),t[r].Win>0&&t[r].Losses>0?m.jsxs(m.Fragment,{children:[m.jsx("h3",{className:"win-percentage-title",children:"Win percentage "}),m.jsxs("p",{className:"win-percentage-figures",children:[" ",(t[r].Win/(t[r].Win+t[r].Losses)*100).toFixed(1),"%"]})]}):null,m.jsxs("h5",{className:"results-heading",children:["Wins: ",m.jsx("span",{className:"wins",children:t[r].Win})," / Losses:"," ",m.jsx("span",{className:"losses",children:t[r].Losses})]})]}):null})}),m.jsx("div",{className:"regular-match-gamestats-holder",children:m.jsx("div",{className:"finished-games-wrapper",children:e!==null?m.jsx(Zv,{allGames:e}):null})})]})})}function tA(){const[t,e]=T.useState(null),n=ne(i=>i.currentUser.value),r=Rn();return T.useEffect(()=>{const i=cT(Md,s=>{s?(e(s),n||(async()=>{try{const a=await Nv(s.email);r(pa(a));try{const l=s.email,u=l.indexOf("."),c=l.indexOf("@"),d=l.substring(u+1,c),h=l.substring(0,u),v=h.charAt(0).toUpperCase()+h.slice(1),y=d.charAt(0).toUpperCase()+d.slice(1);a||await dR(v,y,l)}catch(l){console.error("Error fetching user profile:",l)}}catch(a){console.error("Error fetching user profile:",a)}})()):e(null)});return()=>i()},[]),m.jsx(NE,{children:m.jsx(TE,{children:t===null?m.jsx(m.Fragment,{children:m.jsx(On,{path:"*",element:m.jsx(mR,{})})}):m.jsxs(m.Fragment,{children:[m.jsx(On,{path:"/",element:m.jsx(hR,{})}),m.jsx(On,{path:"/profile",element:m.jsx(FC,{authUser:t})}),m.jsx(On,{path:"/tournament",element:m.jsx(YC,{})}),m.jsx(On,{path:"/ScoreBoard",element:m.jsx(XC,{})}),m.jsx(On,{path:"user/:id",element:m.jsx(eA,{})})]})})})}const nA=vC({reducer:{allUsers:MC,currentUser:bC,allGames:DC,tournament:qC,singleUser:ZC}});Gl.createRoot(document.getElementById("root")).render(m.jsx(bR,{store:nA,children:m.jsx(tA,{})}));
