(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function m1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g1={exports:{}},ac={},y1={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),tI=Symbol.for("react.portal"),nI=Symbol.for("react.fragment"),rI=Symbol.for("react.strict_mode"),iI=Symbol.for("react.profiler"),sI=Symbol.for("react.provider"),oI=Symbol.for("react.context"),aI=Symbol.for("react.forward_ref"),lI=Symbol.for("react.suspense"),uI=Symbol.for("react.memo"),cI=Symbol.for("react.lazy"),qg=Symbol.iterator;function hI(t){return t===null||typeof t!="object"?null:(t=qg&&t[qg]||t["@@iterator"],typeof t=="function"?t:null)}var v1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w1=Object.assign,A1={};function As(t,e,n){this.props=t,this.context=e,this.refs=A1,this.updater=n||v1}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E1(){}E1.prototype=As.prototype;function mp(t,e,n){this.props=t,this.context=e,this.refs=A1,this.updater=n||v1}var gp=mp.prototype=new E1;gp.constructor=mp;w1(gp,As.prototype);gp.isPureReactComponent=!0;var Qg=Array.isArray,_1=Object.prototype.hasOwnProperty,yp={current:null},k1={key:!0,ref:!0,__self:!0,__source:!0};function S1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_1.call(e,r)&&!k1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ha,type:t,key:s,ref:o,props:i,_owner:yp.current}}function fI(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function dI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yg=/\/+/g;function yh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dI(""+t.key):e.toString(36)}function Ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case tI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yh(o,0):r,Qg(i)?(n="",t!=null&&(n=t.replace(Yg,"$&/")+"/"),Ll(i,e,n,"",function(u){return u})):i!=null&&(vp(i)&&(i=fI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+yh(s,a);o+=Ll(s,e,n,l,i)}else if(l=hI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+yh(s,a++),o+=Ll(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return Ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Ml={transition:null},mI={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:yp};Q.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=As;Q.Fragment=nI;Q.Profiler=iI;Q.PureComponent=mp;Q.StrictMode=rI;Q.Suspense=lI;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mI;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=w1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_1.call(e,l)&&!k1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ha,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:oI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sI,_context:t},t.Consumer=t};Q.createElement=S1;Q.createFactory=function(t){var e=S1.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:aI,render:t}};Q.isValidElement=vp;Q.lazy=function(t){return{$$typeof:cI,_payload:{_status:-1,_result:t},_init:pI}};Q.memo=function(t,e){return{$$typeof:uI,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ut.current.useCallback(t,e)};Q.useContext=function(t){return ut.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ut.current.useEffect(t,e)};Q.useId=function(){return ut.current.useId()};Q.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ut.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};Q.useRef=function(t){return ut.current.useRef(t)};Q.useState=function(t){return ut.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ut.current.useTransition()};Q.version="18.2.0";y1.exports=Q;var I=y1.exports;const wp=m1(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI=I,yI=Symbol.for("react.element"),vI=Symbol.for("react.fragment"),wI=Object.prototype.hasOwnProperty,AI=gI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EI={key:!0,ref:!0,__self:!0,__source:!0};function I1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wI.call(e,r)&&!EI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yI,type:t,key:s,ref:o,props:i,_owner:AI.current}}ac.Fragment=vI;ac.jsx=I1;ac.jsxs=I1;g1.exports=ac;var _=g1.exports,_f={},T1={exports:{}},Tt={},C1={exports:{}},x1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,H){var G=D.length;D.push(H);e:for(;0<G;){var Ee=G-1>>>1,Pe=D[Ee];if(0<i(Pe,H))D[Ee]=H,D[G]=Pe,G=Ee;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],G=D.pop();if(G!==H){D[0]=G;e:for(var Ee=0,Pe=D.length,qa=Pe>>>1;Ee<qa;){var br=2*(Ee+1)-1,gh=D[br],Nr=br+1,Qa=D[Nr];if(0>i(gh,G))Nr<Pe&&0>i(Qa,gh)?(D[Ee]=Qa,D[Nr]=G,Ee=Nr):(D[Ee]=gh,D[br]=G,Ee=br);else if(Nr<Pe&&0>i(Qa,G))D[Ee]=Qa,D[Nr]=G,Ee=Nr;else break e}}return H}function i(D,H){var G=D.sortIndex-H.sortIndex;return G!==0?G:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,y=!1,v=!1,A=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=D)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function w(D){if(v=!1,g(D),!y)if(n(l)!==null)y=!0,ph(k);else{var H=n(u);H!==null&&mh(w,H.startTime-D)}}function k(D,H){y=!1,v&&(v=!1,m(b),b=-1),p=!0;var G=f;try{for(g(H),h=n(l);h!==null&&(!(h.expirationTime>H)||D&&!$t());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,f=h.priorityLevel;var Pe=Ee(h.expirationTime<=H);H=t.unstable_now(),typeof Pe=="function"?h.callback=Pe:h===n(l)&&r(l),g(H)}else r(l);h=n(l)}if(h!==null)var qa=!0;else{var br=n(u);br!==null&&mh(w,br.startTime-H),qa=!1}return qa}finally{h=null,f=G,p=!1}}var C=!1,x=null,b=-1,V=5,W=-1;function $t(){return!(t.unstable_now()-W<V)}function Ms(){if(x!==null){var D=t.unstable_now();W=D;var H=!0;try{H=x(!0,D)}finally{H?Us():(C=!1,x=null)}}else C=!1}var Us;if(typeof d=="function")Us=function(){d(Ms)};else if(typeof MessageChannel<"u"){var Kg=new MessageChannel,eI=Kg.port2;Kg.port1.onmessage=Ms,Us=function(){eI.postMessage(null)}}else Us=function(){A(Ms,0)};function ph(D){x=D,C||(C=!0,Us())}function mh(D,H){b=A(function(){D(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,ph(k))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var G=f;f=H;try{return D()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=f;f=D;try{return H()}finally{f=G}},t.unstable_scheduleCallback=function(D,H,G){var Ee=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Ee+G:Ee):G=Ee,D){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=G+Pe,D={id:c++,callback:H,priorityLevel:D,startTime:G,expirationTime:Pe,sortIndex:-1},G>Ee?(D.sortIndex=G,e(u,D),n(l)===null&&D===n(u)&&(v?(m(b),b=-1):v=!0,mh(w,G-Ee))):(D.sortIndex=Pe,e(l,D),y||p||(y=!0,ph(k))),D},t.unstable_shouldYield=$t,t.unstable_wrapCallback=function(D){var H=f;return function(){var G=f;f=H;try{return D.apply(this,arguments)}finally{f=G}}}})(x1);C1.exports=x1;var _I=C1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1=I,St=_I;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b1=new Set,Co={};function ci(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(Co[t]=e,t=0;t<e.length;t++)b1.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,kI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},Jg={};function SI(t){return kf.call(Jg,t)?!0:kf.call(Xg,t)?!1:kI.test(t)?Jg[t]=!0:(Xg[t]=!0,!1)}function II(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TI(t,e,n,r){if(e===null||typeof e>"u"||II(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ap=/[\-:]([a-z])/g;function Ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ap,Ep);He[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ap,Ep);He[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ap,Ep);He[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function _p(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TI(e,n,i,r)&&(n=null),r||i===null?SI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),P1=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),O1=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=Zg&&t[Zg]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,vh;function Qs(t){if(vh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vh=e&&e[1]||""}return`
`+vh+t}var wh=!1;function Ah(t,e){if(!t||wh)return"";wh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function CI(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Ah(t.type,!1),t;case 11:return t=Ah(t.type.render,!1),t;case 1:return t=Ah(t.type,!0),t;default:return""}}function Cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ii:return"Portal";case Sf:return"Profiler";case kp:return"StrictMode";case If:return"Suspense";case Tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P1:return(t.displayName||"Context")+".Consumer";case N1:return(t._context.displayName||"Context")+".Provider";case Sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Cf(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return Cf(t(e))}catch{}}return null}function xI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cf(e);case 8:return e===kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RI(t){var e=D1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=RI(t))}function L1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=D1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xf(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ey(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M1(t,e){e=e.checked,e!=null&&_p(t,"checked",e,!1)}function Rf(t,e){M1(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&bf(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ty(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bf(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ny(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ys(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function U1(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ry(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,F1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bI=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){bI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function j1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function B1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NI=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Of(t,e){if(e){if(NI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lf=null;function Tp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mf=null,Hi=null,Wi=null;function iy(t){if(t=pa(t)){if(typeof Mf!="function")throw Error(S(280));var e=t.stateNode;e&&(e=fc(e),Mf(t.stateNode,t.type,e))}}function z1(t){Hi?Wi?Wi.push(t):Wi=[t]:Hi=t}function V1(){if(Hi){var t=Hi,e=Wi;if(Wi=Hi=null,iy(t),e)for(t=0;t<e.length;t++)iy(e[t])}}function H1(t,e){return t(e)}function W1(){}var Eh=!1;function G1(t,e,n){if(Eh)return t(e,n);Eh=!0;try{return H1(t,e,n)}finally{Eh=!1,(Hi!==null||Wi!==null)&&(W1(),V1())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=fc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Uf=!1;if(Sn)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Uf=!1}function PI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var uo=!1,iu=null,su=!1,$f=null,OI={onError:function(t){uo=!0,iu=t}};function DI(t,e,n,r,i,s,o,a,l){uo=!1,iu=null,PI.apply(OI,arguments)}function LI(t,e,n,r,i,s,o,a,l){if(DI.apply(this,arguments),uo){if(uo){var u=iu;uo=!1,iu=null}else throw Error(S(198));su||(su=!0,$f=u)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sy(t){if(hi(t)!==t)throw Error(S(188))}function MI(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sy(i),t;if(s===r)return sy(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function q1(t){return t=MI(t),t!==null?Q1(t):null}function Q1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q1(t);if(e!==null)return e;t=t.sibling}return null}var Y1=St.unstable_scheduleCallback,oy=St.unstable_cancelCallback,UI=St.unstable_shouldYield,$I=St.unstable_requestPaint,_e=St.unstable_now,FI=St.unstable_getCurrentPriorityLevel,Cp=St.unstable_ImmediatePriority,X1=St.unstable_UserBlockingPriority,ou=St.unstable_NormalPriority,jI=St.unstable_LowPriority,J1=St.unstable_IdlePriority,lc=null,rn=null;function BI(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:HI,zI=Math.log,VI=Math.LN2;function HI(t){return t>>>=0,t===0?32:31-(zI(t)/VI|0)|0}var el=64,tl=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xs(a):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function WI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=WI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z1(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function _h(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function KI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function ew(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tw,Rp,nw,rw,iw,jf=!1,nl=[],tr=null,nr=null,rr=null,bo=new Map,No=new Map,Vn=[],qI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ay(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QI(t,e,n,r,i){switch(e){case"focusin":return tr=js(tr,t,e,n,r,i),!0;case"dragenter":return nr=js(nr,t,e,n,r,i),!0;case"mouseover":return rr=js(rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,js(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,No.set(s,js(No.get(s)||null,t,e,n,r,i)),!0}return!1}function sw(t){var e=Lr(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=K1(n),e!==null){t.blockedOn=e,iw(t.priority,function(){nw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lf=r,n.target.dispatchEvent(r),Lf=null}else return e=pa(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function ly(t,e,n){Ul(t)&&n.delete(e)}function YI(){jf=!1,tr!==null&&Ul(tr)&&(tr=null),nr!==null&&Ul(nr)&&(nr=null),rr!==null&&Ul(rr)&&(rr=null),bo.forEach(ly),No.forEach(ly)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,jf||(jf=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,YI)))}function Po(t){function e(i){return Bs(i,t)}if(0<nl.length){Bs(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Bs(tr,t),nr!==null&&Bs(nr,t),rr!==null&&Bs(rr,t),bo.forEach(e),No.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)sw(n),n.blockedOn===null&&Vn.shift()}var Gi=Mn.ReactCurrentBatchConfig,lu=!0;function XI(t,e,n,r){var i=ee,s=Gi.transition;Gi.transition=null;try{ee=1,bp(t,e,n,r)}finally{ee=i,Gi.transition=s}}function JI(t,e,n,r){var i=ee,s=Gi.transition;Gi.transition=null;try{ee=4,bp(t,e,n,r)}finally{ee=i,Gi.transition=s}}function bp(t,e,n,r){if(lu){var i=Bf(t,e,n,r);if(i===null)Ph(t,e,r,uu,n),ay(t,r);else if(QI(i,t,e,n,r))r.stopPropagation();else if(ay(t,r),e&4&&-1<qI.indexOf(t)){for(;i!==null;){var s=pa(i);if(s!==null&&tw(s),s=Bf(t,e,n,r),s===null&&Ph(t,e,r,uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ph(t,e,r,null,n)}}var uu=null;function Bf(t,e,n,r){if(uu=null,t=Tp(r),t=Lr(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uu=t,null}function ow(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FI()){case Cp:return 1;case X1:return 4;case ou:case jI:return 16;case J1:return 536870912;default:return 16}default:return 16}}var Yn=null,Np=null,$l=null;function aw(){if($l)return $l;var t,e=Np,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $l=i.slice(t,1<r?1-r:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function uy(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:uy,this.isPropagationStopped=uy,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=Ct(Es),da=me({},Es,{view:0,detail:0}),ZI=Ct(da),kh,Sh,zs,uc=me({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(kh=t.screenX-zs.screenX,Sh=t.screenY-zs.screenY):Sh=kh=0,zs=t),kh)},movementY:function(t){return"movementY"in t?t.movementY:Sh}}),cy=Ct(uc),eT=me({},uc,{dataTransfer:0}),tT=Ct(eT),nT=me({},da,{relatedTarget:0}),Ih=Ct(nT),rT=me({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),iT=Ct(rT),sT=me({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oT=Ct(sT),aT=me({},Es,{data:0}),hy=Ct(aT),lT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cT[t])?!!e[t]:!1}function Op(){return hT}var fT=me({},da,{key:function(t){if(t.key){var e=lT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Op,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dT=Ct(fT),pT=me({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fy=Ct(pT),mT=me({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Op}),gT=Ct(mT),yT=me({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),vT=Ct(yT),wT=me({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AT=Ct(wT),ET=[9,13,27,32],Dp=Sn&&"CompositionEvent"in window,co=null;Sn&&"documentMode"in document&&(co=document.documentMode);var _T=Sn&&"TextEvent"in window&&!co,lw=Sn&&(!Dp||co&&8<co&&11>=co),dy=String.fromCharCode(32),py=!1;function uw(t,e){switch(t){case"keyup":return ET.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ci=!1;function kT(t,e){switch(t){case"compositionend":return cw(e);case"keypress":return e.which!==32?null:(py=!0,dy);case"textInput":return t=e.data,t===dy&&py?null:t;default:return null}}function ST(t,e){if(Ci)return t==="compositionend"||!Dp&&uw(t,e)?(t=aw(),$l=Np=Yn=null,Ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lw&&e.locale!=="ko"?null:e.data;default:return null}}var IT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function my(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IT[t.type]:e==="textarea"}function hw(t,e,n,r){z1(r),e=cu(e,"onChange"),0<e.length&&(n=new Pp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ho=null,Oo=null;function TT(t){_w(t,0)}function cc(t){var e=bi(t);if(L1(e))return t}function CT(t,e){if(t==="change")return e}var fw=!1;if(Sn){var Th;if(Sn){var Ch="oninput"in document;if(!Ch){var gy=document.createElement("div");gy.setAttribute("oninput","return;"),Ch=typeof gy.oninput=="function"}Th=Ch}else Th=!1;fw=Th&&(!document.documentMode||9<document.documentMode)}function yy(){ho&&(ho.detachEvent("onpropertychange",dw),Oo=ho=null)}function dw(t){if(t.propertyName==="value"&&cc(Oo)){var e=[];hw(e,Oo,t,Tp(t)),G1(TT,e)}}function xT(t,e,n){t==="focusin"?(yy(),ho=e,Oo=n,ho.attachEvent("onpropertychange",dw)):t==="focusout"&&yy()}function RT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Oo)}function bT(t,e){if(t==="click")return cc(e)}function NT(t,e){if(t==="input"||t==="change")return cc(e)}function PT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:PT;function Do(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kf.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wy(t,e){var n=vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vy(n)}}function pw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mw(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OT(t){var e=mw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pw(n.ownerDocument.documentElement,n)){if(r!==null&&Lp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wy(n,s);var o=wy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DT=Sn&&"documentMode"in document&&11>=document.documentMode,xi=null,zf=null,fo=null,Vf=!1;function Ay(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||xi==null||xi!==ru(r)||(r=xi,"selectionStart"in r&&Lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fo&&Do(fo,r)||(fo=r,r=cu(zf,"onSelect"),0<r.length&&(e=new Pp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xi)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},xh={},gw={};Sn&&(gw=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function hc(t){if(xh[t])return xh[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gw)return xh[t]=e[n];return t}var yw=hc("animationend"),vw=hc("animationiteration"),ww=hc("animationstart"),Aw=hc("transitionend"),Ew=new Map,Ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Ew.set(t,e),ci(e,[t])}for(var Rh=0;Rh<Ey.length;Rh++){var bh=Ey[Rh],LT=bh.toLowerCase(),MT=bh[0].toUpperCase()+bh.slice(1);_r(LT,"on"+MT)}_r(yw,"onAnimationEnd");_r(vw,"onAnimationIteration");_r(ww,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Aw,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function _y(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LI(r,e,void 0,t),t.currentTarget=null}function _w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_y(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_y(i,a,u),s=l}}}if(su)throw t=$f,su=!1,$f=null,t}function re(t,e){var n=e[qf];n===void 0&&(n=e[qf]=new Set);var r=t+"__bubble";n.has(r)||(kw(e,t,2,!1),n.add(r))}function Nh(t,e,n){var r=0;e&&(r|=4),kw(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[sl]){t[sl]=!0,b1.forEach(function(n){n!=="selectionchange"&&(UT.has(n)||Nh(n,!1,t),Nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Nh("selectionchange",!1,e))}}function kw(t,e,n,r){switch(ow(e)){case 1:var i=XI;break;case 4:i=JI;break;default:i=bp}n=i.bind(null,e,n,t),i=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ph(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}G1(function(){var u=s,c=Tp(n),h=[];e:{var f=Ew.get(t);if(f!==void 0){var p=Pp,y=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=dT;break;case"focusin":y="focus",p=Ih;break;case"focusout":y="blur",p=Ih;break;case"beforeblur":case"afterblur":p=Ih;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gT;break;case yw:case vw:case ww:p=iT;break;case Aw:p=vT;break;case"scroll":p=ZI;break;case"wheel":p=AT;break;case"copy":case"cut":case"paste":p=oT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fy}var v=(e&4)!==0,A=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ro(d,m),w!=null&&v.push(Mo(d,w,g)))),A)break;d=d.return}0<v.length&&(f=new p(f,y,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Lf&&(y=n.relatedTarget||n.fromElement)&&(Lr(y)||y[In]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Lr(y):null,y!==null&&(A=hi(y),y!==A||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=cy,w="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=fy,w="onPointerLeave",m="onPointerEnter",d="pointer"),A=p==null?f:bi(p),g=y==null?f:bi(y),f=new v(w,d+"leave",p,n,c),f.target=A,f.relatedTarget=g,w=null,Lr(c)===u&&(v=new v(m,d+"enter",y,n,c),v.target=g,v.relatedTarget=A,w=v),A=w,p&&y)t:{for(v=p,m=y,d=0,g=v;g;g=wi(g))d++;for(g=0,w=m;w;w=wi(w))g++;for(;0<d-g;)v=wi(v),d--;for(;0<g-d;)m=wi(m),g--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=wi(v),m=wi(m)}v=null}else v=null;p!==null&&ky(h,f,p,v,!1),y!==null&&A!==null&&ky(h,A,y,v,!0)}}e:{if(f=u?bi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var k=CT;else if(my(f))if(fw)k=NT;else{k=RT;var C=xT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=bT);if(k&&(k=k(t,u))){hw(h,k,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&bf(f,"number",f.value)}switch(C=u?bi(u):window,t){case"focusin":(my(C)||C.contentEditable==="true")&&(xi=C,zf=u,fo=null);break;case"focusout":fo=zf=xi=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Ay(h,n,c);break;case"selectionchange":if(DT)break;case"keydown":case"keyup":Ay(h,n,c)}var x;if(Dp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ci?uw(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(lw&&n.locale!=="ko"&&(Ci||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ci&&(x=aw()):(Yn=c,Np="value"in Yn?Yn.value:Yn.textContent,Ci=!0)),C=cu(u,b),0<C.length&&(b=new hy(b,t,null,n,c),h.push({event:b,listeners:C}),x?b.data=x:(x=cw(n),x!==null&&(b.data=x)))),(x=_T?kT(t,n):ST(t,n))&&(u=cu(u,"onBeforeInput"),0<u.length&&(c=new hy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}_w(h,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Mo(t,s,i)),s=Ro(t,e),s!=null&&r.push(Mo(t,s,i))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ky(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ro(n,s),l!=null&&o.unshift(Mo(n,l,a))):i||(l=Ro(n,s),l!=null&&o.push(Mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $T=/\r\n?/g,FT=/\u0000|\uFFFD/g;function Sy(t){return(typeof t=="string"?t:""+t).replace($T,`
`).replace(FT,"")}function ol(t,e,n){if(e=Sy(e),Sy(t)!==e&&n)throw Error(S(425))}function hu(){}var Hf=null,Wf=null;function Gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,jT=typeof clearTimeout=="function"?clearTimeout:void 0,Iy=typeof Promise=="function"?Promise:void 0,BT=typeof queueMicrotask=="function"?queueMicrotask:typeof Iy<"u"?function(t){return Iy.resolve(null).then(t).catch(zT)}:Kf;function zT(t){setTimeout(function(){throw t})}function Oh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ty(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Jt="__reactFiber$"+_s,Uo="__reactProps$"+_s,In="__reactContainer$"+_s,qf="__reactEvents$"+_s,VT="__reactListeners$"+_s,HT="__reactHandles$"+_s;function Lr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ty(t);t!==null;){if(n=t[Jt])return n;t=Ty(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[Jt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function fc(t){return t[Uo]||null}var Qf=[],Ni=-1;function kr(t){return{current:t}}function oe(t){0>Ni||(t.current=Qf[Ni],Qf[Ni]=null,Ni--)}function ne(t,e){Ni++,Qf[Ni]=t.current,t.current=e}var pr={},nt=kr(pr),mt=kr(!1),qr=pr;function rs(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function fu(){oe(mt),oe(nt)}function Cy(t,e,n){if(nt.current!==pr)throw Error(S(168));ne(nt,e),ne(mt,n)}function Sw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,xI(t)||"Unknown",i));return me({},n,r)}function du(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,qr=nt.current,ne(nt,t),ne(mt,mt.current),!0}function xy(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Sw(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,oe(mt),oe(nt),ne(nt,t)):oe(mt),ne(mt,n)}var pn=null,dc=!1,Dh=!1;function Iw(t){pn===null?pn=[t]:pn.push(t)}function WT(t){dc=!0,Iw(t)}function Sr(){if(!Dh&&pn!==null){Dh=!0;var t=0,e=ee;try{var n=pn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,dc=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),Y1(Cp,Sr),i}finally{ee=e,Dh=!1}}return null}var Pi=[],Oi=0,pu=null,mu=0,Rt=[],bt=0,Qr=null,mn=1,gn="";function Pr(t,e){Pi[Oi++]=mu,Pi[Oi++]=pu,pu=t,mu=e}function Tw(t,e,n){Rt[bt++]=mn,Rt[bt++]=gn,Rt[bt++]=Qr,Qr=t;var r=mn;t=gn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Ht(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function Mp(t){t.return!==null&&(Pr(t,1),Tw(t,1,0))}function Up(t){for(;t===pu;)pu=Pi[--Oi],Pi[Oi]=null,mu=Pi[--Oi],Pi[Oi]=null;for(;t===Qr;)Qr=Rt[--bt],Rt[bt]=null,gn=Rt[--bt],Rt[bt]=null,mn=Rt[--bt],Rt[bt]=null}var kt=null,At=null,ce=!1,zt=null;function Cw(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,At=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,At=null,!0):!1;default:return!1}}function Yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xf(t){if(ce){var e=At;if(e){var n=e;if(!Ry(t,e)){if(Yf(t))throw Error(S(418));e=ir(n.nextSibling);var r=kt;e&&Ry(t,e)?Cw(r,n):(t.flags=t.flags&-4097|2,ce=!1,kt=t)}}else{if(Yf(t))throw Error(S(418));t.flags=t.flags&-4097|2,ce=!1,kt=t}}}function by(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function al(t){if(t!==kt)return!1;if(!ce)return by(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gf(t.type,t.memoizedProps)),e&&(e=At)){if(Yf(t))throw xw(),Error(S(418));for(;e;)Cw(t,e),e=ir(e.nextSibling)}if(by(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=kt?ir(t.stateNode.nextSibling):null;return!0}function xw(){for(var t=At;t;)t=ir(t.nextSibling)}function is(){At=kt=null,ce=!1}function $p(t){zt===null?zt=[t]:zt.push(t)}var GT=Mn.ReactCurrentBatchConfig;function jt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var gu=kr(null),yu=null,Di=null,Fp=null;function jp(){Fp=Di=yu=null}function Bp(t){var e=gu.current;oe(gu),t._currentValue=e}function Jf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ki(t,e){yu=t,Fp=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(Fp!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(yu===null)throw Error(S(308));Di=t,yu.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var Mr=null;function zp(t){Mr===null?Mr=[t]:Mr.push(t)}function Rw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,zp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xp(t,n)}}function Ny(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,h,f):y,f==null)break e;h=me({},h,f);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=h}}function Py(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Nw=new R1.Component().refs;function Zf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ar(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Wt(e,t,i,r),jl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ar(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Wt(e,t,i,r),jl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=ar(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=sr(t,i,r),e!==null&&(Wt(e,t,r,n),jl(e,t,r))}};function Oy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function Pw(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=gt(e)?qr:nt.current,r=e.contextTypes,s=(r=r!=null)?rs(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Nw,Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=gt(e)?qr:nt.current,i.context=rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pc.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Nw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ly(t){var e=t._init;return e(t._payload)}function Ow(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=lr(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,w){return d===null||d.tag!==6?(d=Bh(g,m.mode,w),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,w){var k=g.type;return k===Ti?c(m,d,g.props.children,w,g.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bn&&Ly(k)===d.type)?(w=i(d,g.props),w.ref=Vs(m,d,g),w.return=m,w):(w=Gl(g.type,g.key,g.props,null,m.mode,w),w.ref=Vs(m,d,g),w.return=m,w)}function u(m,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=zh(g,m.mode,w),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,w,k){return d===null||d.tag!==7?(d=Hr(g,m.mode,w,k),d.return=m,d):(d=i(d,g),d.return=m,d)}function h(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Bh(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xa:return g=Gl(d.type,d.key,d.props,null,m.mode,g),g.ref=Vs(m,null,d),g.return=m,g;case Ii:return d=zh(d,m.mode,g),d.return=m,d;case Bn:var w=d._init;return h(m,w(d._payload),g)}if(Ys(d)||$s(d))return d=Hr(d,m.mode,g,null),d.return=m,d;ll(m,d)}return null}function f(m,d,g,w){var k=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xa:return g.key===k?l(m,d,g,w):null;case Ii:return g.key===k?u(m,d,g,w):null;case Bn:return k=g._init,f(m,d,k(g._payload),w)}if(Ys(g)||$s(g))return k!==null?null:c(m,d,g,w,null);ll(m,g)}return null}function p(m,d,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(d,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xa:return m=m.get(w.key===null?g:w.key)||null,l(d,m,w,k);case Ii:return m=m.get(w.key===null?g:w.key)||null,u(d,m,w,k);case Bn:var C=w._init;return p(m,d,g,C(w._payload),k)}if(Ys(w)||$s(w))return m=m.get(g)||null,c(d,m,w,k,null);ll(d,w)}return null}function y(m,d,g,w){for(var k=null,C=null,x=d,b=d=0,V=null;x!==null&&b<g.length;b++){x.index>b?(V=x,x=null):V=x.sibling;var W=f(m,x,g[b],w);if(W===null){x===null&&(x=V);break}t&&x&&W.alternate===null&&e(m,x),d=s(W,d,b),C===null?k=W:C.sibling=W,C=W,x=V}if(b===g.length)return n(m,x),ce&&Pr(m,b),k;if(x===null){for(;b<g.length;b++)x=h(m,g[b],w),x!==null&&(d=s(x,d,b),C===null?k=x:C.sibling=x,C=x);return ce&&Pr(m,b),k}for(x=r(m,x);b<g.length;b++)V=p(x,m,b,g[b],w),V!==null&&(t&&V.alternate!==null&&x.delete(V.key===null?b:V.key),d=s(V,d,b),C===null?k=V:C.sibling=V,C=V);return t&&x.forEach(function($t){return e(m,$t)}),ce&&Pr(m,b),k}function v(m,d,g,w){var k=$s(g);if(typeof k!="function")throw Error(S(150));if(g=k.call(g),g==null)throw Error(S(151));for(var C=k=null,x=d,b=d=0,V=null,W=g.next();x!==null&&!W.done;b++,W=g.next()){x.index>b?(V=x,x=null):V=x.sibling;var $t=f(m,x,W.value,w);if($t===null){x===null&&(x=V);break}t&&x&&$t.alternate===null&&e(m,x),d=s($t,d,b),C===null?k=$t:C.sibling=$t,C=$t,x=V}if(W.done)return n(m,x),ce&&Pr(m,b),k;if(x===null){for(;!W.done;b++,W=g.next())W=h(m,W.value,w),W!==null&&(d=s(W,d,b),C===null?k=W:C.sibling=W,C=W);return ce&&Pr(m,b),k}for(x=r(m,x);!W.done;b++,W=g.next())W=p(x,m,b,W.value,w),W!==null&&(t&&W.alternate!==null&&x.delete(W.key===null?b:W.key),d=s(W,d,b),C===null?k=W:C.sibling=W,C=W);return t&&x.forEach(function(Ms){return e(m,Ms)}),ce&&Pr(m,b),k}function A(m,d,g,w){if(typeof g=="object"&&g!==null&&g.type===Ti&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xa:e:{for(var k=g.key,C=d;C!==null;){if(C.key===k){if(k=g.type,k===Ti){if(C.tag===7){n(m,C.sibling),d=i(C,g.props.children),d.return=m,m=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bn&&Ly(k)===C.type){n(m,C.sibling),d=i(C,g.props),d.ref=Vs(m,C,g),d.return=m,m=d;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===Ti?(d=Hr(g.props.children,m.mode,w,g.key),d.return=m,m=d):(w=Gl(g.type,g.key,g.props,null,m.mode,w),w.ref=Vs(m,d,g),w.return=m,m=w)}return o(m);case Ii:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=zh(g,m.mode,w),d.return=m,m=d}return o(m);case Bn:return C=g._init,A(m,d,C(g._payload),w)}if(Ys(g))return y(m,d,g,w);if($s(g))return v(m,d,g,w);ll(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=Bh(g,m.mode,w),d.return=m,m=d),o(m)):n(m,d)}return A}var ss=Ow(!0),Dw=Ow(!1),ma={},sn=kr(ma),$o=kr(ma),Fo=kr(ma);function Ur(t){if(t===ma)throw Error(S(174));return t}function Hp(t,e){switch(ne(Fo,e),ne($o,t),ne(sn,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pf(e,t)}oe(sn),ne(sn,e)}function os(){oe(sn),oe($o),oe(Fo)}function Lw(t){Ur(Fo.current);var e=Ur(sn.current),n=Pf(e,t.type);e!==n&&(ne($o,t),ne(sn,n))}function Wp(t){$o.current===t&&(oe(sn),oe($o))}var de=kr(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lh=[];function Gp(){for(var t=0;t<Lh.length;t++)Lh[t]._workInProgressVersionPrimary=null;Lh.length=0}var Bl=Mn.ReactCurrentDispatcher,Mh=Mn.ReactCurrentBatchConfig,Yr=0,pe=null,Re=null,De=null,Au=!1,po=!1,jo=0,KT=0;function We(){throw Error(S(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function qp(t,e,n,r,i,s){if(Yr=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?XT:JT,t=n(r,i),po){s=0;do{if(po=!1,jo=0,25<=s)throw Error(S(301));s+=1,De=Re=null,e.updateQueue=null,Bl.current=ZT,t=n(r,i)}while(po)}if(Bl.current=Eu,e=Re!==null&&Re.next!==null,Yr=0,De=Re=pe=null,Au=!1,e)throw Error(S(300));return t}function Qp(){var t=jo!==0;return jo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?pe.memoizedState=De=t:De=De.next=t,De}function Ut(){if(Re===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=De===null?pe.memoizedState:De.next;if(e!==null)De=e,Re=t;else{if(t===null)throw Error(S(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},De===null?pe.memoizedState=De=t:De=De.next=t}return De}function Bo(t,e){return typeof e=="function"?e(t):e}function Uh(t){var e=Ut(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,pe.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $h(t){var e=Ut(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Mw(){}function Uw(t,e){var n=pe,r=Ut(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Yp(jw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,zo(9,Fw.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(S(349));Yr&30||$w(n,e,i)}return i}function $w(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fw(t,e,n,r){e.value=n,e.getSnapshot=r,Bw(e)&&zw(t)}function jw(t,e,n){return n(function(){Bw(e)&&zw(t)})}function Bw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function zw(t){var e=Tn(t,1);e!==null&&Wt(e,t,1,-1)}function My(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=YT.bind(null,pe,t),[e.memoizedState,t]}function zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vw(){return Ut().memoizedState}function zl(t,e,n,r){var i=Xt();pe.flags|=t,i.memoizedState=zo(1|e,n,void 0,r===void 0?null:r)}function mc(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&Kp(r,o.deps)){i.memoizedState=zo(e,n,s,r);return}}pe.flags|=t,i.memoizedState=zo(1|e,n,s,r)}function Uy(t,e){return zl(8390656,8,t,e)}function Yp(t,e){return mc(2048,8,t,e)}function Hw(t,e){return mc(4,2,t,e)}function Ww(t,e){return mc(4,4,t,e)}function Gw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kw(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,Gw.bind(null,e,t),n)}function Xp(){}function qw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Qw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yw(t,e,n){return Yr&21?(Gt(n,e)||(n=Z1(),pe.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function qT(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Mh.transition;Mh.transition={};try{t(!1),e()}finally{ee=n,Mh.transition=r}}function Xw(){return Ut().memoizedState}function QT(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jw(t))Zw(e,n);else if(n=Rw(t,e,n,r),n!==null){var i=lt();Wt(n,t,r,i),eA(n,e,r)}}function YT(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jw(t))Zw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,zp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Rw(t,e,i,r),n!==null&&(i=lt(),Wt(n,t,r,i),eA(n,e,r))}}function Jw(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function Zw(t,e){po=Au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eA(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xp(t,n)}}var Eu={readContext:Mt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},XT={readContext:Mt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:Uy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,Gw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QT.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:My,useDebugValue:Xp,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=My(!1),e=t[0];return t=qT.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Xt();if(ce){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Le===null)throw Error(S(349));Yr&30||$w(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uy(jw.bind(null,r,s,t),[t]),r.flags|=2048,zo(9,Fw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=Le.identifierPrefix;if(ce){var n=gn,r=mn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JT={readContext:Mt,useCallback:qw,useContext:Mt,useEffect:Yp,useImperativeHandle:Kw,useInsertionEffect:Hw,useLayoutEffect:Ww,useMemo:Qw,useReducer:Uh,useRef:Vw,useState:function(){return Uh(Bo)},useDebugValue:Xp,useDeferredValue:function(t){var e=Ut();return Yw(e,Re.memoizedState,t)},useTransition:function(){var t=Uh(Bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Mw,useSyncExternalStore:Uw,useId:Xw,unstable_isNewReconciler:!1},ZT={readContext:Mt,useCallback:qw,useContext:Mt,useEffect:Yp,useImperativeHandle:Kw,useInsertionEffect:Hw,useLayoutEffect:Ww,useMemo:Qw,useReducer:$h,useRef:Vw,useState:function(){return $h(Bo)},useDebugValue:Xp,useDeferredValue:function(t){var e=Ut();return Re===null?e.memoizedState=t:Yw(e,Re.memoizedState,t)},useTransition:function(){var t=$h(Bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Mw,useSyncExternalStore:Uw,useId:Xw,unstable_isNewReconciler:!1};function as(t,e){try{var n="",r=e;do n+=CI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eC=typeof WeakMap=="function"?WeakMap:Map;function tA(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ku||(ku=!0,hd=r),td(t,e)},n}function nA(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pC.bind(null,t,e,n),e.then(t,t))}function Fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var tC=Mn.ReactCurrentOwner,pt=!1;function ot(t,e,n,r){e.child=t===null?Dw(e,null,n,r):ss(e,t.child,n,r)}function By(t,e,n,r,i){n=n.render;var s=e.ref;return Ki(e,i),r=qp(t,e,n,r,s,i),n=Qp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ce&&n&&Mp(e),e.flags|=1,ot(t,e,r,i),e.child)}function zy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rA(t,e,s,r,i)):(t=Gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function rA(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Do(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return nd(t,e,n,r,i)}function iA(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Mi,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Mi,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Mi,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Mi,vt),vt|=r;return ot(t,e,i,n),e.child}function sA(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,r,i){var s=gt(n)?qr:nt.current;return s=rs(e,s),Ki(e,i),n=qp(t,e,n,r,s,i),r=Qp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ce&&r&&Mp(e),e.flags|=1,ot(t,e,n,i),e.child)}function Vy(t,e,n,r,i){if(gt(n)){var s=!0;du(e)}else s=!1;if(Ki(e,i),e.stateNode===null)Vl(t,e),Pw(e,n,r),ed(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=gt(n)?qr:nt.current,u=rs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dy(e,o,r,u),zn=!1;var f=e.memoizedState;o.state=f,vu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||mt.current||zn?(typeof c=="function"&&(Zf(e,n,c,r),l=e.memoizedState),(a=zn||Oy(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=gt(n)?qr:nt.current,l=rs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Dy(e,o,r,l),zn=!1,f=e.memoizedState,o.state=f,vu(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||mt.current||zn?(typeof p=="function"&&(Zf(e,n,p,r),y=e.memoizedState),(u=zn||Oy(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return rd(t,e,n,r,s,i)}function rd(t,e,n,r,i,s){sA(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xy(e,n,!1),Cn(t,e,s);r=e.stateNode,tC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&xy(e,n,!0),e.child}function oA(t){var e=t.stateNode;e.pendingContext?Cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cy(t,e.context,!1),Hp(t,e.containerInfo)}function Hy(t,e,n,r,i){return is(),$p(i),e.flags|=256,ot(t,e,n,r),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function aA(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(de,i&1),t===null)return Xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sd(n),e.memoizedState=id,t):Jp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,r}return s=t.child,t=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jp(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&$p(r),ss(e,t.child,null,n),t=Jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fh(Error(S(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vc({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=id,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Fh(s,r,void 0),ul(t,e,o,r)}if(a=(o&t.childLanes)!==0,pt||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),Wt(r,t,i,-1))}return im(),r=Fh(Error(S(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=ir(i.nextSibling),kt=e,ce=!0,zt=null,t!==null&&(Rt[bt++]=mn,Rt[bt++]=gn,Rt[bt++]=Qr,mn=t.id,gn=t.overflow,Qr=e),e=Jp(e,r.children),e.flags|=4096,e)}function Wy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jf(t.return,e,n)}function jh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function lA(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wy(t,n,e);else if(t.tag===19)Wy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jh(e,!0,n,null,s);break;case"together":jh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rC(t,e,n){switch(e.tag){case 3:oA(e),is();break;case 5:Lw(e);break;case 1:gt(e.type)&&du(e);break;case 4:Hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?aA(t,e,n):(ne(de,de.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);ne(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return lA(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,iA(t,e,n)}return Cn(t,e,n)}var uA,od,cA,hA;uA=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};cA=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(sn.current);var s=null;switch(n){case"input":i=xf(t,i),r=xf(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Nf(t,i),r=Nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}Of(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hA=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iC(t,e,n){var r=e.pendingProps;switch(Up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return gt(e.type)&&fu(),Ge(e),null;case 3:return r=e.stateNode,os(),oe(mt),oe(nt),Gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(pd(zt),zt=null))),od(t,e),Ge(e),null;case 5:Wp(e);var i=Ur(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)cA(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ge(e),null}if(t=Ur(sn.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)re(Js[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":ey(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":ny(r,s),re("invalid",r)}Of(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",""+a]):Co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Ja(r),ty(r,s,!0);break;case"textarea":Ja(r),ry(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[Uo]=r,uA(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)re(Js[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":ey(t,r),i=xf(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),re("invalid",t);break;case"textarea":ny(t,r),i=Nf(t,r),re("invalid",t);break;default:i=r}Of(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&F1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&_p(t,s,l,o))}switch(n){case"input":Ja(t),ty(t,r,!1);break;case"textarea":Ja(t),ry(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)hA(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Ur(Fo.current),Ur(sn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Ge(e),null;case 13:if(oe(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&At!==null&&e.mode&1&&!(e.flags&128))xw(),is(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Jt]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else zt!==null&&(pd(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?be===0&&(be=3):im())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return os(),od(t,e),t===null&&Lo(e.stateNode.containerInfo),Ge(e),null;case 10:return Bp(e.type._context),Ge(e),null;case 17:return gt(e.type)&&fu(),Ge(e),null;case 19:if(oe(de),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Hs(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wu(t),o!==null){for(e.flags|=128,Hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&_e()>ls&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Ge(e),null}else 2*_e()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_e(),e.sibling=null,n=de.current,ne(de,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return rm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function sC(t,e){switch(Up(e),e.tag){case 1:return gt(e.type)&&fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),oe(mt),oe(nt),Gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wp(e),null;case 13:if(oe(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(de),null;case 4:return os(),null;case 10:return Bp(e.type._context),null;case 22:case 23:return rm(),null;case 24:return null;default:return null}}var cl=!1,Qe=!1,oC=typeof WeakSet=="function"?WeakSet:Set,O=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function ad(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Gy=!1;function aC(t,e){if(Hf=lu,t=mw(),Lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wf={focusedElem:t,selectionRange:n},lu=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,A=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:jt(e.type,v),A);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ve(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Gy,Gy=!1,y}function mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ad(e,n,s)}i=i.next}while(i!==r)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fA(t){var e=t.alternate;e!==null&&(t.alternate=null,fA(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[Uo],delete e[qf],delete e[VT],delete e[HT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dA(t){return t.tag===5||t.tag===3||t.tag===4}function Ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dA(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Fe=null,Bt=!1;function $n(t,e,n){for(n=n.child;n!==null;)pA(t,e,n),n=n.sibling}function pA(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Qe||Li(n,e);case 6:var r=Fe,i=Bt;Fe=null,$n(t,e,n),Fe=r,Bt=i,Fe!==null&&(Bt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Bt?(t=Fe,n=n.stateNode,t.nodeType===8?Oh(t.parentNode,n):t.nodeType===1&&Oh(t,n),Po(t)):Oh(Fe,n.stateNode));break;case 4:r=Fe,i=Bt,Fe=n.stateNode.containerInfo,Bt=!0,$n(t,e,n),Fe=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!Qe&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,$n(t,e,n),Qe=r):$n(t,e,n);break;default:$n(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oC),e.forEach(function(r){var i=gC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,Bt=!1;break e;case 3:Fe=a.stateNode.containerInfo,Bt=!0;break e;case 4:Fe=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(Fe===null)throw Error(S(160));pA(s,o,i),Fe=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mA(e,t),e=e.sibling}function mA(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Yt(t),r&4){try{mo(3,t,t.return),gc(3,t)}catch(v){ve(t,t.return,v)}try{mo(5,t,t.return)}catch(v){ve(t,t.return,v)}}break;case 1:Ft(e,t),Yt(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(Ft(e,t),Yt(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var i=t.stateNode;try{xo(i,"")}catch(v){ve(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&M1(i,s),Df(a,o);var u=Df(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?B1(i,h):c==="dangerouslySetInnerHTML"?F1(i,h):c==="children"?xo(i,h):_p(i,c,h,u)}switch(a){case"input":Rf(i,s);break;case"textarea":U1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vi(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(v){ve(t,t.return,v)}}break;case 6:if(Ft(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ve(t,t.return,v)}}break;case 3:if(Ft(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(v){ve(t,t.return,v)}break;case 4:Ft(e,t),Yt(t);break;case 13:Ft(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tm=_e())),r&4&&qy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Qe=(u=Qe)||c,Ft(e,t),Qe=u):Ft(e,t),Yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(f=O,p=f.child,f.tag){case 0:case 11:case 14:case 15:mo(4,f,f.return);break;case 1:Li(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ve(r,n,v)}}break;case 5:Li(f,f.return);break;case 22:if(f.memoizedState!==null){Yy(h);continue}}p!==null?(p.return=f,O=p):Yy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j1("display",o))}catch(v){ve(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ve(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ft(e,t),Yt(t),r&4&&qy(t);break;case 21:break;default:Ft(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dA(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var s=Ky(t);cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ky(t);ud(t,a,o);break;default:throw Error(S(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lC(t,e,n){O=t,gA(t)}function gA(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Qe;a=cl;var u=Qe;if(cl=o,(Qe=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Xy(i):l!==null?(l.return=o,O=l):Xy(i);for(;s!==null;)O=s,gA(s),s=s.sibling;O=i,cl=a,Qe=u}Qy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Qy(t)}}function Qy(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qe||gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Py(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Py(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Po(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Qe||e.flags&512&&ld(e)}catch(f){ve(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Yy(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Xy(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{ld(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{ld(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var uC=Math.ceil,_u=Mn.ReactCurrentDispatcher,Zp=Mn.ReactCurrentOwner,Dt=Mn.ReactCurrentBatchConfig,X=0,Le=null,Ce=null,ze=0,vt=0,Mi=kr(0),be=0,Vo=null,Xr=0,yc=0,em=0,go=null,ft=null,tm=0,ls=1/0,dn=null,ku=!1,hd=null,or=null,hl=!1,Xn=null,Su=0,yo=0,fd=null,Hl=-1,Wl=0;function lt(){return X&6?_e():Hl!==-1?Hl:Hl=_e()}function ar(t){return t.mode&1?X&2&&ze!==0?ze&-ze:GT.transition!==null?(Wl===0&&(Wl=Z1()),Wl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:ow(t.type)),t):1}function Wt(t,e,n,r){if(50<yo)throw yo=0,fd=null,Error(S(185));fa(t,n,r),(!(X&2)||t!==Le)&&(t===Le&&(!(X&2)&&(yc|=n),be===4&&Hn(t,ze)),yt(t,r),n===1&&X===0&&!(e.mode&1)&&(ls=_e()+500,dc&&Sr()))}function yt(t,e){var n=t.callbackNode;GI(t,e);var r=au(t,t===Le?ze:0);if(r===0)n!==null&&oy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&oy(n),e===1)t.tag===0?WT(Jy.bind(null,t)):Iw(Jy.bind(null,t)),BT(function(){!(X&6)&&Sr()}),n=null;else{switch(ew(r)){case 1:n=Cp;break;case 4:n=X1;break;case 16:n=ou;break;case 536870912:n=J1;break;default:n=ou}n=SA(n,yA.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yA(t,e){if(Hl=-1,Wl=0,X&6)throw Error(S(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=au(t,t===Le?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Iu(t,r);else{e=r;var i=X;X|=2;var s=wA();(Le!==t||ze!==e)&&(dn=null,ls=_e()+500,Vr(t,e));do try{fC();break}catch(a){vA(t,a)}while(1);jp(),_u.current=s,X=i,Ce!==null?e=0:(Le=null,ze=0,e=be)}if(e!==0){if(e===2&&(i=Ff(t),i!==0&&(r=i,e=dd(t,i))),e===1)throw n=Vo,Vr(t,0),Hn(t,r),yt(t,_e()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!cC(i)&&(e=Iu(t,r),e===2&&(s=Ff(t),s!==0&&(r=s,e=dd(t,s))),e===1))throw n=Vo,Vr(t,0),Hn(t,r),yt(t,_e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Or(t,ft,dn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=tm+500-_e(),10<e)){if(au(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Kf(Or.bind(null,t,ft,dn),e);break}Or(t,ft,dn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uC(r/1960))-r,10<r){t.timeoutHandle=Kf(Or.bind(null,t,ft,dn),r);break}Or(t,ft,dn);break;case 5:Or(t,ft,dn);break;default:throw Error(S(329))}}}return yt(t,_e()),t.callbackNode===n?yA.bind(null,t):null}function dd(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Iu(t,e),t!==2&&(e=ft,ft=n,e!==null&&pd(e)),t}function pd(t){ft===null?ft=t:ft.push.apply(ft,t)}function cC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~em,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Jy(t){if(X&6)throw Error(S(327));qi();var e=au(t,0);if(!(e&1))return yt(t,_e()),null;var n=Iu(t,e);if(t.tag!==0&&n===2){var r=Ff(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=Vo,Vr(t,0),Hn(t,e),yt(t,_e()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,ft,dn),yt(t,_e()),null}function nm(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(ls=_e()+500,dc&&Sr())}}function Jr(t){Xn!==null&&Xn.tag===0&&!(X&6)&&qi();var e=X;X|=1;var n=Dt.transition,r=ee;try{if(Dt.transition=null,ee=1,t)return t()}finally{ee=r,Dt.transition=n,X=e,!(X&6)&&Sr()}}function rm(){vt=Mi.current,oe(Mi)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jT(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fu();break;case 3:os(),oe(mt),oe(nt),Gp();break;case 5:Wp(r);break;case 4:os();break;case 13:oe(de);break;case 19:oe(de);break;case 10:Bp(r.type._context);break;case 22:case 23:rm()}n=n.return}if(Le=t,Ce=t=lr(t.current,null),ze=vt=e,be=0,Vo=null,em=yc=Xr=0,ft=go=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mr=null}return t}function vA(t,e){do{var n=Ce;try{if(jp(),Bl.current=Eu,Au){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Au=!1}if(Yr=0,De=Re=pe=null,po=!1,jo=0,Zp.current=null,n===null||n.return===null){be=1,Vo=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Fy(o);if(p!==null){p.flags&=-257,jy(p,o,a,s,e),p.mode&1&&$y(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){$y(s,u,e),im();break e}l=Error(S(426))}}else if(ce&&a.mode&1){var A=Fy(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),jy(A,o,a,s,e),$p(as(l,a));break e}}s=l=as(l,a),be!==4&&(be=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=tA(s,l,e);Ny(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(or===null||!or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=nA(s,a,e);Ny(s,w);break e}}s=s.return}while(s!==null)}EA(n)}catch(k){e=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function wA(){var t=_u.current;return _u.current=Eu,t===null?Eu:t}function im(){(be===0||be===3||be===2)&&(be=4),Le===null||!(Xr&268435455)&&!(yc&268435455)||Hn(Le,ze)}function Iu(t,e){var n=X;X|=2;var r=wA();(Le!==t||ze!==e)&&(dn=null,Vr(t,e));do try{hC();break}catch(i){vA(t,i)}while(1);if(jp(),X=n,_u.current=r,Ce!==null)throw Error(S(261));return Le=null,ze=0,be}function hC(){for(;Ce!==null;)AA(Ce)}function fC(){for(;Ce!==null&&!UI();)AA(Ce)}function AA(t){var e=kA(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?EA(t):Ce=e,Zp.current=null}function EA(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sC(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Ce=null;return}}else if(n=iC(n,e,vt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);be===0&&(be=5)}function Or(t,e,n){var r=ee,i=Dt.transition;try{Dt.transition=null,ee=1,dC(t,e,n,r)}finally{Dt.transition=i,ee=r}return null}function dC(t,e,n,r){do qi();while(Xn!==null);if(X&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KI(t,s),t===Le&&(Ce=Le=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,SA(ou,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=ee;ee=1;var a=X;X|=4,Zp.current=null,aC(t,n),mA(n,t),OT(Wf),lu=!!Hf,Wf=Hf=null,t.current=n,lC(n),$I(),X=a,ee=o,Dt.transition=s}else t.current=n;if(hl&&(hl=!1,Xn=t,Su=i),s=t.pendingLanes,s===0&&(or=null),BI(n.stateNode),yt(t,_e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ku)throw ku=!1,t=hd,hd=null,t;return Su&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===fd?yo++:(yo=0,fd=t):yo=0,Sr(),null}function qi(){if(Xn!==null){var t=ew(Su),e=Dt.transition,n=ee;try{if(Dt.transition=null,ee=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,Su=0,X&6)throw Error(S(331));var i=X;for(X|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:mo(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var f=c.sibling,p=c.return;if(fA(c),c===u){O=null;break}if(f!==null){f.return=p,O=f;break}O=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var A=v.sibling;v.sibling=null,v=A}while(v!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var d=t.current;for(O=d;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=d;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(k){ve(a,a.return,k)}if(a===o){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(X=i,Sr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(lc,t)}catch{}r=!0}return r}finally{ee=n,Dt.transition=e}}return!1}function Zy(t,e,n){e=as(n,e),e=tA(t,e,1),t=sr(t,e,1),e=lt(),t!==null&&(fa(t,1,e),yt(t,e))}function ve(t,e,n){if(t.tag===3)Zy(t,t,n);else for(;e!==null;){if(e.tag===3){Zy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=as(n,t),t=nA(e,t,1),e=sr(e,t,1),t=lt(),e!==null&&(fa(e,1,t),yt(e,t));break}}e=e.return}}function pC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(ze&n)===n&&(be===4||be===3&&(ze&130023424)===ze&&500>_e()-tm?Vr(t,0):em|=n),yt(t,e)}function _A(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=lt();t=Tn(t,e),t!==null&&(fa(t,e,n),yt(t,n))}function mC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_A(t,n)}function gC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),_A(t,n)}var kA;kA=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,rC(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ce&&e.flags&1048576&&Tw(e,mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vl(t,e),t=e.pendingProps;var i=rs(e,nt.current);Ki(e,n),i=qp(null,e,r,t,i,n);var s=Qp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,du(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vp(e),i.updater=pc,e.stateNode=i,i._reactInternals=e,ed(e,r,t,n),e=rd(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&Mp(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vC(r),t=jt(r,t),i){case 0:e=nd(null,e,r,t,n);break e;case 1:e=Vy(null,e,r,t,n);break e;case 11:e=By(null,e,r,t,n);break e;case 14:e=zy(null,e,r,jt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),nd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Vy(t,e,r,i,n);case 3:e:{if(oA(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,bw(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=as(Error(S(423)),e),e=Hy(t,e,r,n,i);break e}else if(r!==i){i=as(Error(S(424)),e),e=Hy(t,e,r,n,i);break e}else for(At=ir(e.stateNode.containerInfo.firstChild),kt=e,ce=!0,zt=null,n=Dw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===i){e=Cn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return Lw(e),t===null&&Xf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gf(r,i)?o=null:s!==null&&Gf(r,s)&&(e.flags|=32),sA(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Xf(e),null;case 13:return aA(t,e,n);case 4:return Hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ss(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),By(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(gu,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!mt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=En(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ki(e,n),i=Mt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),zy(t,e,r,i,n);case 15:return rA(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Vl(t,e),e.tag=1,gt(r)?(t=!0,du(e)):t=!1,Ki(e,n),Pw(e,r,i),ed(e,r,i,n),rd(null,e,r,!0,t,n);case 19:return lA(t,e,n);case 22:return iA(t,e,n)}throw Error(S(156,e.tag))};function SA(t,e){return Y1(t,e)}function yC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new yC(t,e,n,r)}function sm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vC(t){if(typeof t=="function")return sm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sp)return 11;if(t===Ip)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return Hr(n.children,i,s,e);case kp:o=8,i|=8;break;case Sf:return t=Pt(12,n,e,i|2),t.elementType=Sf,t.lanes=s,t;case If:return t=Pt(13,n,e,i),t.elementType=If,t.lanes=s,t;case Tf:return t=Pt(19,n,e,i),t.elementType=Tf,t.lanes=s,t;case O1:return vc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N1:o=10;break e;case P1:o=9;break e;case Sp:o=11;break e;case Ip:o=14;break e;case Bn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function vc(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=O1,t.lanes=n,t.stateNode={isHidden:!1},t}function Bh(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function zh(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_h(0),this.expirationTimes=_h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_h(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function om(t,e,n,r,i,s,o,a,l){return t=new wC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function AC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function IA(t){if(!t)return pr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(gt(n))return Sw(t,n,e)}return e}function TA(t,e,n,r,i,s,o,a,l){return t=om(n,r,!0,t,i,s,o,a,l),t.context=IA(null),n=t.current,r=lt(),i=ar(n),s=En(r,i),s.callback=e??null,sr(n,s,i),t.current.lanes=i,fa(t,i,r),yt(t,r),t}function wc(t,e,n,r){var i=e.current,s=lt(),o=ar(i);return n=IA(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(i,e,o),t!==null&&(Wt(t,i,o,s),jl(t,i,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ev(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function am(t,e){ev(t,e),(t=t.alternate)&&ev(t,e)}function EC(){return null}var CA=typeof reportError=="function"?reportError:function(t){console.error(t)};function lm(t){this._internalRoot=t}Ac.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));wc(t,e,null,null)};Ac.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){wc(null,t,null,null)}),e[In]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=rw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&sw(t)}};function um(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tv(){}function _C(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Tu(o);s.call(u)}}var o=TA(e,r,t,0,null,!1,!1,"",tv);return t._reactRootContainer=o,t[In]=o.current,Lo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Tu(l);a.call(u)}}var l=om(t,0,!1,null,null,!1,!1,"",tv);return t._reactRootContainer=l,t[In]=l.current,Lo(t.nodeType===8?t.parentNode:t),Jr(function(){wc(e,l,n,r)}),l}function _c(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Tu(o);a.call(l)}}wc(e,o,t,i)}else o=_C(n,e,t,i,r);return Tu(o)}tw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(xp(e,n|1),yt(e,_e()),!(X&6)&&(ls=_e()+500,Sr()))}break;case 13:Jr(function(){var r=Tn(t,1);if(r!==null){var i=lt();Wt(r,t,1,i)}}),am(t,1)}};Rp=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=lt();Wt(e,t,134217728,n)}am(t,134217728)}};nw=function(t){if(t.tag===13){var e=ar(t),n=Tn(t,e);if(n!==null){var r=lt();Wt(n,t,e,r)}am(t,e)}};rw=function(){return ee};iw=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Mf=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fc(r);if(!i)throw Error(S(90));L1(r),Rf(r,i)}}}break;case"textarea":U1(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};H1=nm;W1=Jr;var kC={usingClientEntryPoint:!1,Events:[pa,bi,fc,z1,V1,nm]},Ws={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},SC={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q1(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||EC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{lc=fl.inject(SC),rn=fl}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kC;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!um(e))throw Error(S(200));return AC(t,e,null,n)};Tt.createRoot=function(t,e){if(!um(t))throw Error(S(299));var n=!1,r="",i=CA;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=om(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,Lo(t.nodeType===8?t.parentNode:t),new lm(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=q1(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Jr(t)};Tt.hydrate=function(t,e,n){if(!Ec(e))throw Error(S(200));return _c(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!um(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=CA;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TA(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,Lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ac(e)};Tt.render=function(t,e,n){if(!Ec(e))throw Error(S(200));return _c(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(S(40));return t._reactRootContainer?(Jr(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};Tt.unstable_batchedUpdates=nm;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ec(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return _c(t,e,n,!1,r)};Tt.version="18.2.0-next-9e3b772b8-20220608";function xA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xA)}catch(t){console.error(t)}}xA(),T1.exports=Tt;var IC=T1.exports,nv=IC;_f.createRoot=nv.createRoot,_f.hydrateRoot=nv.hydrateRoot;/**
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
 *//**
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
 */const RA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new CC;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xC=function(t){const e=RA(t);return bA.encodeByteArray(e,!0)},Cu=function(t){return xC(t).replace(/\./g,"")},NA=function(t){try{return bA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bC=()=>RC().__FIREBASE_DEFAULTS__,NC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&NA(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return bC()||NC()||PC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},PA=t=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},OA=t=>{const e=PA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DA=()=>{var t;return(t=kc())===null||t===void 0?void 0:t.config},LA=t=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class OC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function MA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cu(JSON.stringify(n)),Cu(JSON.stringify(o)),a].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function LC(){var t;const e=(t=kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $C(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FC(){try{return typeof indexedDB=="object"}catch{return!1}}function jC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BC="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BC,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fn(i,a,r)}}function zC(t,e){return t.replace(VC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VC=/\{\$([^}]+)}/g;function HC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rv(s)&&rv(o)){if(!xu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rv(t){return t!==null&&typeof t=="object"}/**
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
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WC(t,e){const n=new GC(t,e);return n.subscribe.bind(n)}class GC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vh),i.error===void 0&&(i.error=Vh),i.complete===void 0&&(i.complete=Vh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vh(){}/**
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
 */function fe(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class qC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YC(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QC(t){return t===Dr?void 0:t}function YC(t){return t.instantiationMode==="EAGER"}/**
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
 */class XC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const JC={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ZC=J.INFO,e2={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},t2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=e2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cm{constructor(e){this.name=e,this._logLevel=ZC,this._logHandler=t2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const n2=(t,e)=>e.some(n=>t instanceof n);let iv,sv;function r2(){return iv||(iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i2(){return sv||(sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UA=new WeakMap,md=new WeakMap,$A=new WeakMap,Hh=new WeakMap,hm=new WeakMap;function s2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&UA.set(n,t)}).catch(()=>{}),hm.set(e,t),e}function o2(t){if(md.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});md.set(t,e)}let gd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$A.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a2(t){gd=t(gd)}function l2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wh(this),e,...n);return $A.set(r,e.sort?e.sort():[e]),ur(r)}:i2().includes(t)?function(...e){return t.apply(Wh(this),e),ur(UA.get(this))}:function(...e){return ur(t.apply(Wh(this),e))}}function u2(t){return typeof t=="function"?l2(t):(t instanceof IDBTransaction&&o2(t),n2(t,r2())?new Proxy(t,gd):t)}function ur(t){if(t instanceof IDBRequest)return s2(t);if(Hh.has(t))return Hh.get(t);const e=u2(t);return e!==t&&(Hh.set(t,e),hm.set(e,t)),e}const Wh=t=>hm.get(t);function c2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const h2=["get","getKey","getAll","getAllKeys","count"],f2=["put","add","delete","clear"],Gh=new Map;function ov(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=f2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||h2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gh.set(e,s),s}a2(t=>({...t,get:(e,n,r)=>ov(e,n)||t.get(e,n,r),has:(e,n)=>!!ov(e,n)||t.has(e,n)}));/**
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
 */class d2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",av="0.9.10";/**
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
 */const Zr=new cm("@firebase/app"),m2="@firebase/app-compat",g2="@firebase/analytics-compat",y2="@firebase/analytics",v2="@firebase/app-check-compat",w2="@firebase/app-check",A2="@firebase/auth",E2="@firebase/auth-compat",_2="@firebase/database",k2="@firebase/database-compat",S2="@firebase/functions",I2="@firebase/functions-compat",T2="@firebase/installations",C2="@firebase/installations-compat",x2="@firebase/messaging",R2="@firebase/messaging-compat",b2="@firebase/performance",N2="@firebase/performance-compat",P2="@firebase/remote-config",O2="@firebase/remote-config-compat",D2="@firebase/storage",L2="@firebase/storage-compat",M2="@firebase/firestore",U2="@firebase/firestore-compat",$2="firebase",F2="9.22.0";/**
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
 */const vd="[DEFAULT]",j2={[yd]:"fire-core",[m2]:"fire-core-compat",[y2]:"fire-analytics",[g2]:"fire-analytics-compat",[w2]:"fire-app-check",[v2]:"fire-app-check-compat",[A2]:"fire-auth",[E2]:"fire-auth-compat",[_2]:"fire-rtdb",[k2]:"fire-rtdb-compat",[S2]:"fire-fn",[I2]:"fire-fn-compat",[T2]:"fire-iid",[C2]:"fire-iid-compat",[x2]:"fire-fcm",[R2]:"fire-fcm-compat",[b2]:"fire-perf",[N2]:"fire-perf-compat",[P2]:"fire-rc",[O2]:"fire-rc-compat",[D2]:"fire-gcs",[L2]:"fire-gcs-compat",[M2]:"fire-fst",[U2]:"fire-fst-compat","fire-js":"fire-js",[$2]:"fire-js-all"};/**
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
 */const Ru=new Map,wd=new Map;function B2(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(wd.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const n of Ru.values())B2(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const z2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cr=new ga("app","Firebase",z2);/**
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
 */class V2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=F2;function FA(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=DA()),!n)throw cr.create("no-options");const s=Ru.get(i);if(s){if(xu(n,s.options)&&xu(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new XC(i);for(const l of wd.values())o.addComponent(l);const a=new V2(n,r,o);return Ru.set(i,a),a}function fm(t=vd){const e=Ru.get(t);if(!e&&t===vd&&DA())return FA();if(!e)throw cr.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=j2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(a.join(" "));return}ei(new mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const H2="firebase-heartbeat-database",W2=1,Ho="firebase-heartbeat-store";let Kh=null;function jA(){return Kh||(Kh=c2(H2,W2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ho)}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),Kh}async function G2(t){try{return await(await jA()).transaction(Ho).objectStore(Ho).get(BA(t))}catch(e){if(e instanceof fn)Zr.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zr.warn(n.message)}}}async function lv(t,e){try{const r=(await jA()).transaction(Ho,"readwrite");await r.objectStore(Ho).put(e,BA(t)),await r.done}catch(n){if(n instanceof fn)Zr.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zr.warn(r.message)}}}function BA(t){return`${t.name}!${t.options.appId}`}/**
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
 */const K2=1024,q2=30*24*60*60*1e3;class Q2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=uv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=q2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uv(),{heartbeatsToSend:n,unsentEntries:r}=Y2(this._heartbeatsCache.heartbeats),i=Cu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uv(){return new Date().toISOString().substring(0,10)}function Y2(t,e=K2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class X2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FC()?jC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await G2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cv(t){return Cu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function J2(t){ei(new mr("platform-logger",e=>new d2(e),"PRIVATE")),ei(new mr("heartbeat",e=>new Q2(e),"PRIVATE")),on(yd,av,t),on(yd,av,"esm2017"),on("fire-js","")}J2("");function dm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z2=zA,VA=new ga("auth","Firebase",zA());/**
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
 */const bu=new cm("@firebase/auth");function ex(t,...e){bu.logLevel<=J.WARN&&bu.warn(`Auth (${fi}): ${t}`,...e)}function Kl(t,...e){bu.logLevel<=J.ERROR&&bu.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw pm(t,...e)}function an(t,...e){return pm(t,...e)}function tx(t,e,n){const r=Object.assign(Object.assign({},Z2()),{[e]:n});return new ga("auth","Firebase",r).create(e,{appName:t.name})}function pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VA.create(t,...e)}function $(t,e,...n){if(!t)throw pm(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kl(e),new Error(e)}function xn(t,e){t||yn(e)}/**
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
 */function Ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nx(){return hv()==="http:"||hv()==="https:"}function hv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nx()||MC()||"connection"in navigator)?navigator.onLine:!0}function ix(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class va{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=DC()||UC()}get(){return rx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mm(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class HA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ox=new va(3e4,6e4);function ks(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function di(t,e,n,r,i={}){return WA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ya(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),HA.fetch()(GA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function WA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sx),e);try{const i=new ax(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw dl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tx(t,c,u);Kt(t,c)}}catch(i){if(i instanceof fn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function wa(t,e,n,r,i={}){const s=await di(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mm(t.config,i):`${t.config.apiScheme}://${i}`}class ax{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),ox.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function lx(t,e){return di(t,"POST","/v1/accounts:delete",e)}async function ux(t,e){return di(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cx(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=gm(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vo(qh(i.auth_time)),issuedAtTime:vo(qh(i.iat)),expirationTime:vo(qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qh(t){return Number(t)*1e3}function gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=NA(n);return i?JSON.parse(i):(Kl("Failed to decode base64 JWT payload"),null)}catch(i){return Kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hx(t){const e=gm(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&fx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class KA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vo(this.lastLoginAt),this.creationTime=vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await us(t,ux(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gx(s.providerUserInfo):[],a=mx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new KA(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function px(t){const e=fe(t);await Nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gx(t){return t.map(e=>{var{providerId:n}=e,r=dm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yx(t,e){const n=await WA(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wo;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wo,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Fn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new KA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await us(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cx(this,e)}reload(){return px(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await us(this,lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:C,stsTokenManager:x}=n;$(g&&x,e,"internal-error");const b=Wo.fromJSON(this.name,x);$(typeof g=="string",e,"internal-error"),Fn(h,e.name),Fn(f,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),Fn(p,e.name),Fn(y,e.name),Fn(v,e.name),Fn(A,e.name),Fn(m,e.name),Fn(d,e.name);const V=new Wr({uid:g,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:b,createdAt:m,lastLoginAt:d});return C&&Array.isArray(C)&&(V.providerData=C.map(W=>Object.assign({},W))),A&&(V._redirectEventId=A),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wo;i.updateFromServerResponse(n);const s=new Wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nu(s),s}}/**
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
 */const fv=new Map;function vn(t){xn(t instanceof Function,"Expected a class definition");let e=fv.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fv.set(t,e),e)}/**
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
 */class qA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qA.type="NONE";const dv=qA;/**
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
 */function ql(t,e,n){return`firebase:${t}:${e}:${n}`}class Qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qi(vn(dv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||vn(dv);const o=ql(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Wr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qi(s,e,r))}}/**
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
 */function pv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZA(e))return"Blackberry";if(eE(e))return"Webos";if(ym(e))return"Safari";if((e.includes("chrome/")||YA(e))&&!e.includes("edge/"))return"Chrome";if(JA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function QA(t=rt()){return/firefox\//i.test(t)}function ym(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YA(t=rt()){return/crios\//i.test(t)}function XA(t=rt()){return/iemobile/i.test(t)}function JA(t=rt()){return/android/i.test(t)}function ZA(t=rt()){return/blackberry/i.test(t)}function eE(t=rt()){return/webos/i.test(t)}function Ic(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vx(t=rt()){var e;return Ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wx(){return $C()&&document.documentMode===10}function tE(t=rt()){return Ic(t)||JA(t)||eE(t)||ZA(t)||/windows phone/i.test(t)||XA(t)}function Ax(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function nE(t,e=[]){let n;switch(t){case"Browser":n=pv(rt());break;case"Worker":n=`${pv(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}async function rE(t,e){return di(t,"GET","/v2/recaptchaConfig",ks(t,e))}function mv(t){return t!==void 0&&t.enterprise!==void 0}class iE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Ex(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ex().appendChild(r)})}function _x(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kx="https://www.google.com/recaptcha/enterprise.js?render=",Sx="recaptcha-enterprise",Ix="NO_RECAPTCHA";class oE{constructor(e){this.type=Sx,this.auth=Ss(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new iE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;mv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ix)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&mv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sE(kx+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Pu(t,e,n,r=!1){const i=new oE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Tx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Cx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gv(this),this.idTokenSubscription=new gv(this),this.beforeStateQueue=new Tx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ix()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}async initializeRecaptchaConfig(){const e=await rE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new iE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new oE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ex(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ss(t){return fe(t)}class gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=WC(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function xx(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xu(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function Rx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bx(t,e,n){const r=Ss(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=aE(e),{host:o,port:a}=Nx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Px()}function aE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nx(t){const e=aE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yv(o)}}}function yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Px(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function Ox(t,e){return di(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Qh(t,e){return wa(t,"POST","/v1/accounts:signInWithPassword",ks(t,e))}/**
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
 */async function Dx(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",ks(t,e))}async function Lx(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",ks(t,e))}/**
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
 */class Go extends vm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Pu(e,r,"signInWithPassword");return Qh(e,i)}else return Qh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Pu(e,r,"signInWithPassword");return Qh(e,s)}else return Promise.reject(i)});case"emailLink":return Dx(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ox(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lx(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yi(t,e){return wa(t,"POST","/v1/accounts:signInWithIdp",ks(t,e))}/**
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
 */const Mx="http://localhost";class ti extends vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:Mx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
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
 */function Ux(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $x(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class wm{constructor(e){var n,r,i,s,o,a;const l=Zs(eo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Ux((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$x(e);try{return new wm(n)}catch{return null}}}/**
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wm.parseLink(n);return $(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Aa extends lE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends Aa{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Aa{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class qn extends Aa{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function Yh(t,e){return wa(t,"POST","/v1/accounts:signUp",ks(t,e))}/**
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
 */class ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wr._fromIdTokenResponse(e,r,i),o=vv(r);return new ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vv(r);return new ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ou extends fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ou.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ou(e,n,r,i)}}function uE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ou._fromErrorAndOperation(t,s,e,r):s})}async function Fx(t,e,n=!1){const r=await us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ni._forOperation(t,"link",r)}/**
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
 */async function jx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await us(t,uE(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=gm(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function cE(t,e,n=!1){const r="signIn",i=await uE(t,r,e),s=await ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bx(t,e){return cE(Ss(t),e)}async function zx(t,e,n){var r;const i=Ss(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Pu(i,s,"signUpPassword");o=Yh(i,u)}else o=Yh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Pu(i,s,"signUpPassword");return Yh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await ni._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Vx(t,e,n){return Bx(fe(t),Is.credential(e,n))}/**
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
 */async function Hx(t,e){return di(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Wx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=fe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await us(r,Hx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Gx(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function Kx(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function qx(t,e,n,r){return fe(t).onAuthStateChanged(e,n,r)}function hE(t){return fe(t).signOut()}const Du="__sak";/**
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
 */class fE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Du,"1"),this.storage.removeItem(Du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Qx(){const t=rt();return ym(t)||Ic(t)}const Yx=1e3,Xx=10;class dE extends fE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Qx()&&Ax(),this.fallbackToPolling=tE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dE.type="LOCAL";const Jx=dE;/**
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
 */class pE extends fE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pE.type="SESSION";const mE=pE;/**
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
 */function Zx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Zx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
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
 */function Am(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Am("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function tR(t){ln().location.href=t}/**
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
 */function gE(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function nR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return gE()?self:null}/**
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
 */const yE="firebaseLocalStorageDb",sR=1,Lu="firebaseLocalStorage",vE="fbase_key";class Ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([Lu],e?"readwrite":"readonly").objectStore(Lu)}function oR(){const t=indexedDB.deleteDatabase(yE);return new Ea(t).toPromise()}function Ed(){const t=indexedDB.open(yE,sR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lu,{keyPath:vE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lu)?e(r):(r.close(),await oR(),e(await Ed()))})})}async function wv(t,e,n){const r=Cc(t,!0).put({[vE]:e,value:n});return new Ea(r).toPromise()}async function aR(t,e){const n=Cc(t,!1).get(e),r=await new Ea(n).toPromise();return r===void 0?null:r.value}function Av(t,e){const n=Cc(t,!0).delete(e);return new Ea(n).toPromise()}const lR=800,uR=3;class wE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nR(),!this.activeServiceWorker)return;this.sender=new eR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ed();return await wv(e,Du,"1"),await Av(e,Du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Av(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cc(i,!1).getAll();return new Ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wE.type="LOCAL";const cR=wE;new va(3e4,6e4);/**
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
 */function hR(t,e){return e?vn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Em extends vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fR(t){return cE(t.auth,new Em(t),t.bypassAuthState)}function dR(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),jx(n,new Em(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Fx(n,new Em(t),t.bypassAuthState)}/**
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
 */class AE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return dR;default:Kt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mR=new va(2e3,1e4);class Ui extends AE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}Ui.currentPopupAction=null;/**
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
 */const gR="pendingRedirect",Ql=new Map;class yR extends AE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ql.get(this.auth._key());if(!e){try{const r=await vR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ql.set(this.auth._key(),e)}return this.bypassAuthState||Ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vR(t,e){const n=ER(e),r=AR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wR(t,e){Ql.set(t._key(),e)}function AR(t){return vn(t._redirectPersistence)}function ER(t){return ql(gR,t.config.apiKey,t.name)}async function _R(t,e,n=!1){const r=Ss(t),i=hR(r,e),o=await new yR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kR=10*60*1e3;class SR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!EE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(e))}saveEventToCache(e){this.cachedEventUids.add(Ev(e)),this.lastProcessedEventTime=Date.now()}}function Ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EE(t);default:return!1}}/**
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
 */async function TR(t,e={}){return di(t,"GET","/v1/projects",e)}/**
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
 */const CR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xR=/^https?/;async function RR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TR(t);for(const n of e)try{if(bR(n))return}catch{}Kt(t,"unauthorized-domain")}function bR(t){const e=Ad(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xR.test(n))return!1;if(CR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NR=new va(3e4,6e4);function _v(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PR(t){return new Promise((e,n)=>{var r,i,s;function o(){_v(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_v(),n(an(t,"network-request-failed"))},timeout:NR.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=_x("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},sE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yl=null,e})}let Yl=null;function OR(t){return Yl=Yl||PR(t),Yl}/**
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
 */const DR=new va(5e3,15e3),LR="__/auth/iframe",MR="emulator/auth/iframe",UR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FR(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mm(e,MR):`https://${t.config.authDomain}/${LR}`,r={apiKey:e.apiKey,appName:t.name,v:fi},i=$R.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ya(r).slice(1)}`}async function jR(t){const e=await OR(t),n=ln().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:FR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},DR.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const BR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zR=500,VR=600,HR="_blank",WR="http://localhost";class kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GR(t,e,n,r=zR,i=VR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(a=YA(u)?HR:n),QA(u)&&(e=e||WR,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(vx(u)&&a!=="_self")return KR(e||"",a),new kv(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new kv(h)}function KR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qR="__/auth/handler",QR="emulator/auth/handler",YR=encodeURIComponent("fac");async function Sv(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:i};if(e instanceof lE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Aa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${YR}=${encodeURIComponent(l)}`:"";return`${XR(t)}?${ya(a).slice(1)}${u}`}function XR({config:t}){return t.emulator?mm(t,QR):`https://${t.authDomain}/${qR}`}/**
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
 */const Xh="webStorageSupport";class JR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mE,this._completeRedirectFn=_R,this._overrideRedirectResult=wR}async _openPopup(e,n,r,i){var s;xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sv(e,n,r,Ad(),i);return GR(e,o,Am())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sv(e,n,r,Ad(),i);return tR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jR(e),r=new SR(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xh,{type:Xh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xh];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tE()||ym()||Ic()}}const ZR=JR;var Iv="@firebase/auth",Tv="0.23.2";/**
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
 */class eb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nb(t){ei(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nE(t)},u=new Cx(r,i,s,l);return Rx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new mr("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new eb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Iv,Tv,tb(t)),on(Iv,Tv,"esm2017")}/**
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
 */const rb=5*60,ib=LA("authIdTokenMaxAge")||rb;let Cv=null;const sb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ib)return;const i=n==null?void 0:n.token;Cv!==i&&(Cv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ob(t=fm()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xx(t,{popupRedirectResolver:ZR,persistence:[cR,Jx,mE]}),r=LA("authTokenSyncURL");if(r){const s=sb(r);Kx(n,s,()=>s(n.currentUser)),Gx(n,o=>s(o))}const i=PA("auth");return i&&bx(n,`http://${i}`),n}nb("Browser");var ab="firebase",lb="9.22.0";/**
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
 */on(ab,lb,"app");/**
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
 */const _E="firebasestorage.googleapis.com",kE="storageBucket",ub=2*60*1e3,cb=10*60*1e3,hb=1e3;/**
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
 */class ye extends fn{constructor(e,n,r=0){super(Jh(e),`Firebase Storage: ${n} (${Jh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Jh(t){return"storage/"+t}function _m(){const t="An unknown error occurred, please check the error payload for server response.";return new ye(ue.UNKNOWN,t)}function fb(t){return new ye(ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function db(t){return new ye(ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ue.UNAUTHENTICATED,t)}function mb(){return new ye(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gb(t){return new ye(ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function SE(){return new ye(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IE(){return new ye(ue.CANCELED,"User canceled the upload/download.")}function yb(t){return new ye(ue.INVALID_URL,"Invalid URL '"+t+"'.")}function vb(t){return new ye(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wb(){return new ye(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kE+"' property when initializing the app?")}function TE(){return new ye(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ab(){return new ye(ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Eb(){return new ye(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _b(t){return new ye(ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _d(t){return new ye(ue.INVALID_ARGUMENT,t)}function CE(){return new ye(ue.APP_DELETED,"The Firebase app was deleted.")}function kb(t){return new ye(ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wo(t,e){return new ye(ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Gs(t){throw new ye(ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw vb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),y={bucket:1,path:3},v=n===_E?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${A}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const k=g[w],C=k.regex.exec(e);if(C){const x=C[k.indices.bucket];let b=C[k.indices.path];b||(b=""),r=new Et(x,b),k.postModify(r);break}}if(r==null)throw yb(e);return r}}class Sb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ib(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...A){u||(u=!0,e.apply(null,A))}function h(A){i=setTimeout(()=>{i=null,t(p,l())},A)}function f(){s&&clearTimeout(s)}function p(A,...m){if(u){f();return}if(A){f(),c.call(null,A,...m);return}if(l()||o){f(),c.call(null,A,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(A){y||(y=!0,f(),!u&&(i!==null?(A||(a=2),clearTimeout(i),h(0)):A||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Tb(t){t(!1)}/**
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
 */function Cb(t){return t!==void 0}function xb(t){return typeof t=="function"}function Rb(t){return typeof t=="object"&&!Array.isArray(t)}function xc(t){return typeof t=="string"||t instanceof String}function xv(t){return km()&&t instanceof Blob}function km(){return typeof Blob<"u"&&!LC()}function Rv(t,e,n,r){if(r<e)throw _d(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _d(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function _a(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
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
 */function RE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class bb{constructor(e,n,r,i,s,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new pl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Gr.NO_ERROR,l=s.getStatus();if(!a||RE(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Gr.ABORT;r(!1,new pl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new pl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Cb(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=_m();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?CE():IE();o(l)}else{const l=SE();o(l)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=Ib(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Tb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Nb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Pb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ob(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Db(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Lb(t,e,n,r,i,s,o=!0){const a=xE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Ob(u,e),Nb(u,n),Pb(u,s),Db(u,r),new bb(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Mb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ub(...t){const e=Mb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(km())return new Blob(t);throw new ye(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $b(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Fb(t){if(typeof atob>"u")throw _b("base-64");return atob(t)}/**
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
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zh{constructor(e,n){this.data=e,this.contentType=n||null}}function jb(t,e){switch(t){case en.RAW:return new Zh(bE(e));case en.BASE64:case en.BASE64URL:return new Zh(NE(t,e));case en.DATA_URL:return new Zh(zb(e),Vb(e))}throw _m()}function bE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Bb(t){let e;try{e=decodeURIComponent(t)}catch{throw wo(en.DATA_URL,"Malformed data URL.")}return bE(e)}function NE(t,e){switch(t){case en.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Fb(e)}catch(i){throw i.message.includes("polyfill")?i:wo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class PE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wo(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Hb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function zb(t){const e=new PE(t);return e.base64?NE(en.BASE64,e.rest):Bb(e.rest)}function Vb(t){return new PE(t).contentType}function Hb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Qn{constructor(e,n){let r=0,i="";xv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(xv(this.data_)){const r=this.data_,i=$b(r,e,n);return i===null?null:new Qn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qn(r,!0)}}static getBlob(...e){if(km()){const n=e.map(r=>r instanceof Qn?r.data_:r);return new Qn(Ub.apply(null,n))}else{const n=e.map(o=>xc(o)?jb(en.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function OE(t){let e;try{e=JSON.parse(t)}catch{return null}return Rb(e)?e:null}/**
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
 */function Wb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Gb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function DE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Kb(t,e){return e}class st{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Kb}}let ml=null;function qb(t){return!xc(t)||t.length<2?t:DE(t)}function LE(){if(ml)return ml;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(s,o){return qb(o)}const n=new st("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new st("size");return i.xform=r,t.push(i),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),ml=t,ml}function Qb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Yb(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Qb(r,t),r}function ME(t,e,n){const r=OE(e);return r===null?null:Yb(t,r,n)}function Xb(t,e,n,r){const i=OE(e);if(i===null||!xc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),p=_a(f,n,r),y=xE({alt:"media",token:u});return p+y})[0]}function UE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Ts{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _n(t){if(!t)throw _m()}function Sm(t,e){function n(r,i){const s=ME(t,i,e);return _n(s!==null),s}return n}function Jb(t,e){function n(r,i){const s=ME(t,i,e);return _n(s!==null),Xb(s,i,t.host,t._protocol)}return n}function ka(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=mb():i=pb():n.getStatus()===402?i=db(t.bucket):n.getStatus()===403?i=gb(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $E(t){const e=ka(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=fb(t.path)),s.serverResponse=i.serverResponse,s}return n}function Zb(t,e,n){const r=e.fullServerUrl(),i=_a(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ts(i,s,Sm(t,n),o);return a.errorHandler=$E(e),a}function eN(t,e,n){const r=e.fullServerUrl(),i=_a(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ts(i,s,Jb(t,n),o);return a.errorHandler=$E(e),a}function tN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function FE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tN(null,e)),r}function nN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let w=0;w<2;w++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=FE(e,r,i),c=UE(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Qn.getBlob(h,r,f);if(p===null)throw TE();const y={name:u.fullPath},v=_a(s,t.host,t._protocol),A="POST",m=t.maxUploadRetryTime,d=new Ts(v,A,Sm(t,n),m);return d.urlParams=y,d.headers=o,d.body=p.uploadData(),d.errorHandler=ka(e),d}class Mu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Im(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{_n(!1)}return _n(!!n&&(e||["active"]).indexOf(n)!==-1),n}function rN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=FE(e,r,i),a={name:o.fullPath},l=_a(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=UE(o,n),f=t.maxUploadRetryTime;function p(v){Im(v);let A;try{A=v.getResponseHeader("X-Goog-Upload-URL")}catch{_n(!1)}return _n(xc(A)),A}const y=new Ts(l,u,p,f);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=ka(e),y}function iN(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Im(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{_n(!1)}h||_n(!1);const f=Number(h);return _n(!isNaN(f)),new Mu(f,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Ts(n,o,s,a);return l.headers=i,l.errorHandler=ka(e),l}const bv=256*1024;function sN(t,e,n,r,i,s,o,a){const l=new Mu(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Ab();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,f=h+c;let p="";c===0?p="finalize":u===c?p="upload, finalize":p="upload";const y={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,f);if(v===null)throw TE();function A(w,k){const C=Im(w,["active","final"]),x=l.current+c,b=r.size();let V;return C==="final"?V=Sm(e,s)(w,k):V=null,new Mu(x,b,C==="final",V)}const m="POST",d=e.maxUploadRetryTime,g=new Ts(n,m,A,d);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=ka(t),g}const ht={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ef(t){switch(t){case"running":case"pausing":case"canceling":return ht.RUNNING;case"paused":return ht.PAUSED;case"success":return ht.SUCCESS;case"canceled":return ht.CANCELED;case"error":return ht.ERROR;default:return ht.ERROR}}/**
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
 */class oN{constructor(e,n,r){if(xb(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Ai(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class aN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lN extends aN{initXhr(){this.xhr_.responseType="text"}}function _i(){return new lN}/**
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
 */class uN{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=LE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(RE(i.status,[]))if(s)i=SE();else{this.sleepTime=Math.max(this.sleepTime*2,hb),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ue.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=rN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,_i,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=iN(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,_i,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=bv*this._chunkMultiplier,n=new Mu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=sN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,_i,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){bv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Zb(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,_i,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=nN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,_i,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=IE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ef(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new oN(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ef(this._state)){case ht.SUCCESS:Ai(this._resolve.bind(null,this.snapshot))();break;case ht.CANCELED:case ht.ERROR:const n=this._reject;Ai(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ef(this._state)){case ht.RUNNING:case ht.PAUSED:e.next&&Ai(e.next.bind(e,this.snapshot))();break;case ht.SUCCESS:e.complete&&Ai(e.complete.bind(e))();break;case ht.CANCELED:case ht.ERROR:e.error&&Ai(e.error.bind(e,this._error))();break;default:e.error&&Ai(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ri{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ri(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DE(this._location.path)}get storage(){return this._service}get parent(){const e=Wb(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kb(e)}}function cN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new uN(t,new Qn(e),n)}function hN(t){t._throwIfRoot("getDownloadURL");const e=eN(t.storage,t._location,LE());return t.storage.makeRequestWithTokens(e,_i).then(n=>{if(n===null)throw Eb();return n})}function fN(t,e){const n=Gb(t._location.path,e),r=new Et(t._location.bucket,n);return new ri(t.storage,r)}/**
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
 */function dN(t){return/^[A-Za-z]+:\/\//.test(t)}function pN(t,e){return new ri(t,e)}function jE(t,e){if(t instanceof Tm){const n=t;if(n._bucket==null)throw wb();const r=new ri(n,n._bucket);return e!=null?jE(r,e):r}else return e!==void 0?fN(t,e):t}function mN(t,e){if(e&&dN(e)){if(t instanceof Tm)return pN(t,e);throw _d("To use ref(service, url), the first argument must be a Storage instance.")}else return jE(t,e)}function Nv(t,e){const n=e==null?void 0:e[kE];return n==null?null:Et.makeFromBucketSpec(n,t)}function gN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:MA(i,t.app.options.projectId))}class Tm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=_E,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ub,this._maxUploadRetryTime=cb,this._requests=new Set,i!=null?this._bucket=Et.makeFromBucketSpec(i,this._host):this._bucket=Nv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=Nv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Sb(CE());{const o=Lb(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Pv="@firebase/storage",Ov="0.11.2";/**
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
 */const BE="storage";function zE(t,e,n){return t=fe(t),cN(t,e,n)}function VE(t){return t=fe(t),hN(t)}function HE(t,e){return t=fe(t),mN(t,e)}function yN(t=fm(),e){t=fe(t);const r=Sc(t,BE).getImmediate({identifier:e}),i=OA("storage");return i&&vN(r,...i),r}function vN(t,e,n,r={}){gN(t,e,n,r)}function wN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Tm(n,r,i,e,fi)}function AN(){ei(new mr(BE,wN,"PUBLIC").setMultipleInstances(!0)),on(Pv,Ov,""),on(Pv,Ov,"esm2017")}AN();var EN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Cm=Cm||{},j=EN||self;function Uu(){}function Rc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Sa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _N(t){return Object.prototype.hasOwnProperty.call(t,tf)&&t[tf]||(t[tf]=++kN)}var tf="closure_uid_"+(1e9*Math.random()>>>0),kN=0;function SN(t,e,n){return t.call.apply(t.bind,arguments)}function IN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=SN:Je=IN,Je.apply(null,arguments)}function gl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ir(){this.s=this.s,this.o=this.o}var TN=0;Ir.prototype.s=!1;Ir.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),TN!=0)&&_N(this)};Ir.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const WE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Rc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var CN=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Uu,e),j.removeEventListener("test",Uu,e)}catch{}return t}();function $u(t){return/^[\s\xa0]*$/.test(t)}var Lv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function nf(t,e){return t<e?-1:t>e?1:0}function bc(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Zt(t){return bc().indexOf(t)!=-1}function Rm(t){return Rm[" "](t),t}Rm[" "]=Uu;function GE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var xN=Zt("Opera"),cs=Zt("Trident")||Zt("MSIE"),KE=Zt("Edge"),kd=KE||cs,qE=Zt("Gecko")&&!(bc().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge"))&&!(Zt("Trident")||Zt("MSIE"))&&!Zt("Edge"),RN=bc().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge");function QE(){var t=j.document;return t?t.documentMode:void 0}var Fu;e:{var rf="",sf=function(){var t=bc();if(qE)return/rv:([^\);]+)(\)|;)/.exec(t);if(KE)return/Edge\/([\d\.]+)/.exec(t);if(cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(RN)return/WebKit\/(\S+)/.exec(t);if(xN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sf&&(rf=sf?sf[1]:""),cs){var of=QE();if(of!=null&&of>parseFloat(rf)){Fu=String(of);break e}}Fu=rf}var bN={};function NN(){return GE(bN,9,function(){let t=0;const e=Lv(String(Fu)).split("."),n=Lv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=nf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||nf(i[2].length==0,s[2].length==0)||nf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Sd;if(j.document&&cs){var Mv=QE();Sd=Mv||parseInt(Fu,10)||void 0}else Sd=void 0;var PN=Sd;function Ko(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qE){e:{try{Rm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ON[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ko.$.h.call(this)}}Ue(Ko,Ze);var ON={2:"touch",3:"pen",4:"mouse"};Ko.prototype.h=function(){Ko.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ia="closure_listenable_"+(1e6*Math.random()|0),DN=0;function LN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++DN,this.fa=this.ia=!1}function Nc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function YE(t){const e={};for(const n in t)e[n]=t[n];return e}const Uv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function XE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Uv.length;s++)n=Uv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pc(t){this.src=t,this.g={},this.h=0}Pc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Td(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Id(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=WE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Nc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Td(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Nm="closure_lm_"+(1e6*Math.random()|0),af={};function JE(t,e,n,r,i){if(r&&r.once)return e_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)JE(t,e[s],n,r,i);return null}return n=Dm(n),t&&t[Ia]?t.O(e,n,Sa(r)?!!r.capture:!!r,i):ZE(t,e,n,!1,r,i)}function ZE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Sa(i)?!!i.capture:!!i,a=Om(t);if(a||(t[Nm]=a=new Pc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=MN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)CN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(n_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MN(){function t(n){return e.call(t.src,t.listener,n)}const e=UN;return t}function e_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)e_(t,e[s],n,r,i);return null}return n=Dm(n),t&&t[Ia]?t.P(e,n,Sa(r)?!!r.capture:!!r,i):ZE(t,e,n,!0,r,i)}function t_(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)t_(t,e[s],n,r,i);else r=Sa(r)?!!r.capture:!!r,n=Dm(n),t&&t[Ia]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Td(s,n,r,i),-1<n&&(Nc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Om(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Td(e,n,r,i)),(n=-1<t?e[t]:null)&&Pm(n))}function Pm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ia])Id(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(n_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Om(e))?(Id(n,t),n.h==0&&(n.src=null,e[Nm]=null)):Nc(t)}}}function n_(t){return t in af?af[t]:af[t]="on"+t}function UN(t,e){if(t.fa)t=!0;else{e=new Ko(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Pm(t),t=n.call(r,e)}return t}function Om(t){return t=t[Nm],t instanceof Pc?t:null}var lf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dm(t){return typeof t=="function"?t:(t[lf]||(t[lf]=function(e){return t.handleEvent(e)}),t[lf])}function Me(){Ir.call(this),this.i=new Pc(this),this.S=this,this.J=null}Ue(Me,Ir);Me.prototype[Ia]=!0;Me.prototype.removeEventListener=function(t,e,n,r){t_(this,t,e,n,r)};function Ve(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;e=new Ze(r,t),XE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yl(o,r,!0,e)&&i}if(o=e.g=t,i=yl(o,r,!0,e)&&i,i=yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yl(o,r,!1,e)&&i}Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Nc(n[r]);delete t.g[e],t.h--}}this.J=null};Me.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Me.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Id(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lm=j.JSON.stringify;function $N(){var t=s_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FN{constructor(){this.h=this.g=null}add(e,n){const r=r_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var r_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jN,t=>t.reset());class jN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BN(t){j.setTimeout(()=>{throw t},0)}function i_(t,e){Cd||zN(),xd||(Cd(),xd=!0),s_.add(t,e)}var Cd;function zN(){var t=j.Promise.resolve(void 0);Cd=function(){t.then(VN)}}var xd=!1,s_=new FN;function VN(){for(var t;t=$N();){try{t.h.call(t.g)}catch(n){BN(n)}var e=r_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xd=!1}function Oc(t,e){Me.call(this),this.h=t||1,this.g=e||j,this.j=Je(this.qb,this),this.l=Date.now()}Ue(Oc,Me);R=Oc.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ve(this,"tick"),this.ga&&(Mm(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){Oc.$.N.call(this),Mm(this),delete this.g};function Um(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function o_(t){t.g=Um(()=>{t.g=null,t.i&&(t.i=!1,o_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HN extends Ir{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:o_(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(t){Ir.call(this),this.h=t,this.g={}}Ue(qo,Ir);var $v=[];function a_(t,e,n,r){Array.isArray(n)||(n&&($v[0]=n.toString()),n=$v);for(var i=0;i<n.length;i++){var s=JE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function l_(t){bm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pm(e)},t),t.g={}}qo.prototype.N=function(){qo.$.N.call(this),l_(this)};qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dc(){this.g=!0}Dc.prototype.Ea=function(){this.g=!1};function WN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function GN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function $i(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qN(t,n)+(r?" "+r:"")})}function KN(t,e){t.info(function(){return"TIMEOUT: "+e})}Dc.prototype.info=function(){};function qN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lm(n)}catch{return e}}var pi={},Fv=null;function Lc(){return Fv=Fv||new Me}pi.Ta="serverreachability";function u_(t){Ze.call(this,pi.Ta,t)}Ue(u_,Ze);function Qo(t){const e=Lc();Ve(e,new u_(e))}pi.STAT_EVENT="statevent";function c_(t,e){Ze.call(this,pi.STAT_EVENT,t),this.stat=e}Ue(c_,Ze);function at(t){const e=Lc();Ve(e,new c_(e,t))}pi.Ua="timingevent";function h_(t,e){Ze.call(this,pi.Ua,t),this.size=e}Ue(h_,Ze);function Ta(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Mc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},f_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $m(){}$m.prototype.h=null;function jv(t){return t.h||(t.h=t.i())}function d_(){}var Ca={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fm(){Ze.call(this,"d")}Ue(Fm,Ze);function jm(){Ze.call(this,"c")}Ue(jm,Ze);var Rd;function Uc(){}Ue(Uc,$m);Uc.prototype.g=function(){return new XMLHttpRequest};Uc.prototype.i=function(){return{}};Rd=new Uc;function xa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new qo(this),this.P=QN,t=kd?125:void 0,this.V=new Oc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new p_}function p_(){this.i=null,this.g="",this.h=!1}var QN=45e3,bd={},ju={};R=xa.prototype;R.setTimeout=function(t){this.P=t};function Nd(t,e,n){t.L=1,t.v=Fc(Rn(e)),t.s=n,t.S=!0,m_(t,null)}function m_(t,e){t.G=Date.now(),Ra(t),t.A=Rn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),k_(n.i,"t",r),t.C=0,n=t.l.I,t.h=new p_,t.g=H_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new HN(Je(t.Pa,t,t.g),t.O)),a_(t.U,t.g,"readystatechange",t.nb),e=t.I?YE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qo(),WN(t.j,t.u,t.A,t.m,t.W,t.s)}R.nb=function(t){t=t.target;const e=this.M;e&&wn(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const c=wn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||kd||this.g&&(this.h.h||this.g.ja()||Hv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Qo(3):Qo(2)),$c(this);var n=this.g.da();this.aa=n;t:if(g_(this)){var r=Hv(this.g);t="";var i=r.length,s=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),Ao(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,GN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$u(a)){var u=a;break t}}u=null}if(n=u)$i(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pd(this,n);else{this.i=!1,this.o=3,at(12),$r(this),Ao(this);break e}}this.S?(y_(this,c,o),kd&&this.i&&c==3&&(a_(this.U,this.V,"tick",this.mb),this.V.start())):($i(this.j,this.m,o,null),Pd(this,o)),c==4&&$r(this),this.i&&!this.J&&(c==4?j_(this.l,this):(this.i=!1,Ra(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),$r(this),Ao(this)}}}catch{}finally{}};function g_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function y_(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=YN(t,n),i==ju){e==4&&(t.o=4,at(14),r=!1),$i(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bd){t.o=4,at(15),$i(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $i(t.j,t.m,i,null),Pd(t,i);g_(t)&&i!=ju&&i!=bd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Km(e),e.L=!0,at(11))):($i(t.j,t.m,n,"[Invalid Chunked Response]"),$r(t),Ao(t))}R.mb=function(){if(this.g){var t=wn(this.g),e=this.g.ja();this.C<e.length&&($c(this),y_(this,t,e),this.i&&t!=4&&Ra(this))}};function YN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ju:(n=Number(e.substring(n,r)),isNaN(n)?bd:(r+=1,r+n>e.length?ju:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.J=!0,$r(this)};function Ra(t){t.Y=Date.now()+t.P,v_(t,t.P)}function v_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ta(Je(t.lb,t),e)}function $c(t){t.B&&(j.clearTimeout(t.B),t.B=null)}R.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(KN(this.j,this.A),this.L!=2&&(Qo(),at(17)),$r(this),this.o=2,Ao(this)):v_(this,this.Y-t)};function Ao(t){t.l.H==0||t.J||j_(t.l,t)}function $r(t){$c(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Mm(t.V),l_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Pd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Od(n.h,t))){if(!t.K&&Od(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vu(n),zc(n);else break e;Gm(n),at(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Ta(Je(n.ib,n),6e3));if(1>=T_(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Fr(n,11)}else if((t.K||n.g==t)&&Vu(n),!$u(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bm(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,he(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=V_(r,r.I?r.oa:null,r.Y),o.K){C_(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&($c(a),Ra(a)),r.g=o}else $_(r);0<n.i.length&&Vc(n)}else u[0]!="stop"&&u[0]!="close"||Fr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fr(n,7):Wm(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Qo(4)}catch{}}function XN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Rc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function JN(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Rc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function w_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Rc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JN(t),r=XN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var A_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Kr){this.h=e!==void 0?e:t.h,Bu(this,t.j),this.s=t.s,this.g=t.g,zu(this,t.m),this.l=t.l,e=t.i;var n=new Yo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Bv(this,n),this.o=t.o}else t&&(n=String(t).match(A_))?(this.h=!!e,Bu(this,n[1]||"",!0),this.s=to(n[2]||""),this.g=to(n[3]||"",!0),zu(this,n[4]),this.l=to(n[5]||"",!0),Bv(this,n[6]||"",!0),this.o=to(n[7]||"")):(this.h=!!e,this.i=new Yo(null,this.h))}Kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(no(e,zv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(no(e,zv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(no(n,n.charAt(0)=="/"?nP:tP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",no(n,iP)),t.join("")};function Rn(t){return new Kr(t)}function Bu(t,e,n){t.j=n?to(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bv(t,e,n){e instanceof Yo?(t.i=e,sP(t.i,t.h)):(n||(e=no(e,rP)),t.i=new Yo(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Fc(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function to(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function no(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zv=/[#\/\?@]/g,tP=/[#\?:]/g,nP=/[#\?]/g,rP=/[#\?@]/g,iP=/#/g;function Yo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&ZN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Yo.prototype;R.add=function(t,e){Tr(this),this.i=null,t=Cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function E_(t,e){Tr(t),e=Cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function __(t,e){return Tr(t),e=Cs(t,e),t.g.has(e)}R.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.sa=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){Tr(this);let e=[];if(typeof t=="string")__(this,t)&&(e=e.concat(this.g.get(Cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Tr(this),this.i=null,t=Cs(this,t),__(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function k_(t,e,n){E_(t,e),0<n.length&&(t.i=null,t.g.set(Cs(t,e),xm(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sP(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(E_(this,r),k_(this,i,n))},t)),t.j=e}var oP=class{constructor(t,e){this.h=t,this.g=e}};function S_(t){this.l=t||aP,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aP=10;function I_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function T_(t){return t.h?1:t.g?t.g.size:0}function Od(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bm(t,e){t.g?t.g.add(e):t.h=e}function C_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}S_.prototype.cancel=function(){if(this.i=x_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function x_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return xm(t.i)}function zm(){}zm.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};zm.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function lP(){this.g=new zm}function uP(t,e,n){const r=n||"";try{w_(t,function(i,s){let o=i;Sa(i)&&(o=Lm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function cP(t,e){const n=new Dc;if(j.Image){const r=new Image;r.onload=gl(vl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gl(vl,n,r,"TestLoadImage: error",!1,e),r.onabort=gl(vl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gl(vl,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ba(t){this.l=t.fc||null,this.j=t.ob||!1}Ue(ba,$m);ba.prototype.g=function(){return new jc(this.l,this.j)};ba.prototype.i=function(t){return function(){return t}}({});function jc(t,e){Me.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Vm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(jc,Me);var Vm=0;R=jc.prototype;R.open=function(t,e){if(this.readyState!=Vm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xo(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Na(this)),this.readyState=Vm};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xo(this)),this.g&&(this.readyState=3,Xo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;R_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function R_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Na(this):Xo(this),this.readyState==3&&R_(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,Na(this))};R.Ya=function(t){this.g&&(this.response=t,Na(this))};R.ka=function(){this.g&&Na(this)};function Na(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xo(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hP=j.JSON.parse;function Ae(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=b_,this.L=this.M=!1}Ue(Ae,Me);var b_="",fP=/^https?$/i,dP=["POST","PUT"];R=Ae.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rd.g(),this.C=this.u?jv(this.u):jv(Rd),this.g.onreadystatechange=Je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Vv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=WE(dP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{O_(this),0<this.B&&((this.L=pP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.ua,this)):this.A=Um(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Vv(this,s)}};function pP(t){return cs&&NN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof Cm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Vv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,N_(t),Bc(t)}function N_(t){t.F||(t.F=!0,Ve(t,"complete"),Ve(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),Bc(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bc(this,!0)),Ae.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?P_(this):this.kb())};R.kb=function(){P_(this)};function P_(t){if(t.h&&typeof Cm<"u"&&(!t.C[1]||wn(t)!=4||t.da()!=2)){if(t.v&&wn(t)==4)Um(t.La,0,t);else if(Ve(t,"readystatechange"),wn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(A_)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!fP.test(i?i.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var o=2<wn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",N_(t)}}finally{Bc(t)}}}}function Bc(t,e){if(t.g){O_(t);const n=t.g,r=t.C[0]?Uu:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function O_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function wn(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hP(e)}};function Hv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case b_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function D_(t){let e="";return bm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=D_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function L_(t){this.Ga=0,this.i=[],this.j=new Dc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ks("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ks("baseRetryDelayMs",5e3,t),this.hb=Ks("retryDelaySeedMs",1e4,t),this.eb=Ks("forwardChannelMaxRetries",2,t),this.xa=Ks("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new S_(t&&t.concurrentRequestLimit),this.Ja=new lP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}R=L_.prototype;R.qa=8;R.H=1;function Wm(t){if(M_(t),t.H==3){var e=t.W++,n=Rn(t.G);he(n,"SID",t.J),he(n,"RID",e),he(n,"TYPE","terminate"),Pa(t,n),e=new xa(t,t.j,e,void 0),e.L=2,e.v=Fc(Rn(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=H_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ra(e)}z_(t)}function zc(t){t.g&&(Km(t),t.g.cancel(),t.g=null)}function M_(t){zc(t),t.u&&(j.clearTimeout(t.u),t.u=null),Vu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Vc(t){I_(t.h)||t.m||(t.m=!0,i_(t.Na,t),t.C=0)}function mP(t,e){return T_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ta(Je(t.Na,t,e),B_(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new xa(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=YE(s),XE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=U_(this,i,e),n=Rn(this.G),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),Pa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(D_(s)))+"&"+e:this.o&&Hm(n,this.o,s)),Bm(this.h,i),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),i.ba=!0,Nd(i,n,null)):Nd(i,n,e),this.H=2}}else this.H==3&&(t?Wv(this,t):this.i.length==0||I_(this.h)||Wv(this))};function Wv(t,e){var n;e?n=e.m:n=t.W++;const r=Rn(t.G);he(r,"SID",t.J),he(r,"RID",n),he(r,"AID",t.V),Pa(t,r),t.o&&t.s&&Hm(r,t.o,t.s),n=new xa(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=U_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bm(t.h,n),Nd(n,r,e)}function Pa(t,e){t.ma&&bm(t.ma,function(n,r){he(e,r,n)}),t.l&&w_({},function(n,r){he(e,r,n)})}function U_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Je(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{uP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function $_(t){t.g||t.u||(t.ba=1,i_(t.Ma,t),t.A=0)}function Gm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ta(Je(t.Ma,t),B_(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,F_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Ta(Je(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,at(10),zc(this),F_(this))};function Km(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function F_(t){t.g=new xa(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Rn(t.wa);he(e,"RID","rpc"),he(e,"SID",t.J),he(e,"CI",t.M?"0":"1"),he(e,"AID",t.V),he(e,"TYPE","xmlhttp"),Pa(t,e),t.o&&t.s&&Hm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Fc(Rn(e)),n.s=null,n.S=!0,m_(n,t)}R.ib=function(){this.v!=null&&(this.v=null,zc(this),Gm(this),at(19))};function Vu(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function j_(t,e){var n=null;if(t.g==e){Vu(t),Km(t),t.g=null;var r=2}else if(Od(t.h,e))n=e.F,C_(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Lc(),Ve(r,new h_(r,n)),Vc(t)}else $_(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&mP(t,e)||r==2&&Gm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fr(t,5);break;case 4:Fr(t,10);break;case 3:Fr(t,6);break;default:Fr(t,2)}}}function B_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Fr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Je(t.pb,t);n||(n=new Kr("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Bu(n,"https"),Fc(n)),cP(n.toString(),r)}else at(2);t.H=0,t.l&&t.l.za(e),z_(t),M_(t)}R.pb=function(t){t?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function z_(t){if(t.H=0,t.pa=[],t.l){const e=x_(t.h);(e.length!=0||t.i.length!=0)&&(Dv(t.pa,e),Dv(t.pa,t.i),t.h.i.length=0,xm(t.i),t.i.length=0),t.l.ya()}}function V_(t,e,n){var r=n instanceof Kr?Rn(n):new Kr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),zu(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Kr(null,void 0);r&&Bu(s,r),e&&(s.g=e),i&&zu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&he(r,n,e),he(r,"VER",t.qa),Pa(t,r),r}function H_(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ae(new ba({ob:!0})):new Ae(t.va),e.Oa(t.I),e}function W_(){}R=W_.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.Va=function(){};function Hu(){if(cs&&!(10<=Number(PN)))throw Error("Environmental error: no available transport.")}Hu.prototype.g=function(t,e){return new It(t,e)};function It(t,e){Me.call(this),this.g=new L_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!$u(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$u(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xs(this)}Ue(It,Me);It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=V_(t,null,t.Y),Vc(t)};It.prototype.close=function(){Wm(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lm(t),t=n);e.i.push(new oP(e.fb++,t)),e.H==3&&Vc(e)};It.prototype.N=function(){this.g.l=null,delete this.j,Wm(this.g),delete this.g,It.$.N.call(this)};function G_(t){Fm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(G_,Fm);function K_(){jm.call(this),this.status=1}Ue(K_,jm);function xs(t){this.g=t}Ue(xs,W_);xs.prototype.Ba=function(){Ve(this.g,"a")};xs.prototype.Aa=function(t){Ve(this.g,new G_(t))};xs.prototype.za=function(t){Ve(this.g,new K_)};xs.prototype.ya=function(){Ve(this.g,"b")};function gP(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(qt,gP);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function uf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)uf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){uf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){uf(this,r),i=0;break}}this.h=i,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var yP={};function qm(t){return-128<=t&&128>t?GE(yP,t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function tn(t){if(isNaN(t)||!isFinite(t))return Xi;if(0>t)return Be(tn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Dd;return new te(e,0)}function q_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(q_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=tn(Math.pow(e,8)),r=Xi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=tn(Math.pow(e,s)),r=r.R(s).add(tn(o))):(r=r.R(n),r=r.add(tn(o)))}return r}var Dd=4294967296,Xi=qm(0),Ld=qm(1),Gv=qm(16777216);R=te.prototype;R.ea=function(){if(Nt(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Dd+r)*e,e*=Dd}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(An(this))return"0";if(Nt(this))return"-"+Be(this).toString(t);for(var e=tn(Math.pow(t,6)),n=this,r="";;){var i=Gu(n,e).g;n=Wu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,An(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function An(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}R.X=function(t){return t=Wu(this,t),Nt(t)?-1:An(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(Ld)}R.abs=function(){return Nt(this)?Be(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function Wu(t,e){return t.add(Be(e))}R.R=function(t){if(An(this)||An(t))return Xi;if(Nt(this))return Nt(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if(Nt(t))return Be(this.R(Be(t)));if(0>this.X(Gv)&&0>t.X(Gv))return tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,wl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,wl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,wl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,wl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function wl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qs(t,e){this.g=t,this.h=e}function Gu(t,e){if(An(e))throw Error("division by zero");if(An(t))return new qs(Xi,Xi);if(Nt(t))return e=Gu(Be(t),e),new qs(Be(e.g),Be(e.h));if(Nt(e))return e=Gu(t,Be(e)),new qs(Be(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ld,r=e;0>=r.X(t);)n=Kv(n),r=Kv(r);var i=Ei(n,1),s=Ei(r,1);for(r=Ei(r,2),n=Ei(n,2);!An(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ei(r,1),n=Ei(n,1)}return e=Wu(t,i.R(e)),new qs(i,e)}for(i=Xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=tn(n),o=s.R(e);Nt(o)||0<o.X(t);)n-=r,s=tn(n),o=s.R(e);An(s)&&(s=Ld),i=i.add(s),t=Wu(t,o)}return new qs(i,t)}R.gb=function(t){return Gu(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function Kv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function Ei(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}Hu.prototype.createWebChannel=Hu.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Mc.NO_ERROR=0;Mc.TIMEOUT=8;Mc.HTTP_ERROR=6;f_.COMPLETE="complete";d_.EventType=Ca;Ca.OPEN="a";Ca.CLOSE="b";Ca.ERROR="c";Ca.MESSAGE="d";Me.prototype.listen=Me.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=tn;te.fromString=q_;var vP=function(){return new Hu},wP=function(){return Lc()},cf=Mc,AP=f_,EP=pi,qv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_P=ba,Al=d_,kP=Ae,SP=qt,Ji=te;const Qv="@firebase/firestore";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let Rs="9.22.0";/**
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
 */const ii=new cm("@firebase/firestore");function Yv(){return ii.logLevel}function M(t,...e){if(ii.logLevel<=J.DEBUG){const n=e.map(Qm);ii.debug(`Firestore (${Rs}): ${t}`,...n)}}function bn(t,...e){if(ii.logLevel<=J.ERROR){const n=e.map(Qm);ii.error(`Firestore (${Rs}): ${t}`,...n)}}function hs(t,...e){if(ii.logLevel<=J.WARN){const n=e.map(Qm);ii.warn(`Firestore (${Rs}): ${t}`,...n)}}function Qm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function le(t,e){t||F()}function z(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Q_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class TP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CP{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new Q_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new qe(e)}}class xP{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class RP{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new xP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.T=n.token,new bP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function PP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Y_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new ke(0,0))}static max(){return new B(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Jo{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Jo{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const OP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Jo{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return OP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}function DP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new gr(i,U.empty(),e)}function LP(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(B.min(),U.empty(),-1)}static max(){return new gr(B.max(),U.empty(),-1)}}function MP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const UP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $P{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oa(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==UP)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Da(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ym{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ym.ct=-1;function Hc(t){return t==null}function Ku(t){return t===0&&1/t==-1/0}function FP(t){return typeof t=="number"&&Number.isInteger(t)&&!Ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Xv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ge{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jv(this.data.getIterator())}getIteratorFrom(e){return new Jv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Jv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _t{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new _t([])}unionWith(e){let n=new et(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class J_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new J_("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const jP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(le(!!t),typeof t=="string"){let e=0;const n=jP.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jm(t){const e=t.mapValue.fields.__previous_value__;return Xm(e)?Jm(e):e}function Zo(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class BP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xm(t)?4:zP(t)?9007199254740991:10:F()}function hn(t,e){if(t===e)return!0;const n=oi(t);if(n!==oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=yr(r.timestampValue),o=yr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return si(r.bytesValue).isEqual(si(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Te(r.geoPointValue.latitude)===Te(i.geoPointValue.latitude)&&Te(r.geoPointValue.longitude)===Te(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Te(r.integerValue)===Te(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Te(r.doubleValue),o=Te(i.doubleValue);return s===o?Ku(s)===Ku(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Xv(s)!==Xv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!hn(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function ta(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=oi(t),r=oi(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Te(i.integerValue||i.doubleValue),a=Te(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zv(t.timestampValue,e.timestampValue);case 4:return Zv(Zo(t),Zo(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=si(i),a=si(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Z(o[l],a[l]);if(u!==0)return u}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Te(i.latitude),Te(s.latitude));return o!==0?o:Z(Te(i.longitude),Te(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ds(o[l],a[l]);if(u)return u}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===_l.mapValue&&s===_l.mapValue)return 0;if(i===_l.mapValue)return 1;if(s===_l.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Z(a[c],u[c]);if(h!==0)return h;const f=ds(o[a[c]],l[u[c]]);if(f!==0)return f}return Z(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function Zv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=yr(t),r=yr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function ps(t){return Md(t)}function Md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=yr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?si(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Md(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Md(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function e0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ud(t){return!!t&&"integerValue"in t}function Zm(t){return!!t&&"arrayValue"in t}function t0(t){return!!t&&"nullValue"in t}function n0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xl(t){return!!t&&"mapValue"in t}function Eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Eo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Xl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(Eo(this.value))}}function Z_(t){const e=[];return mi(t.fields,(n,r)=>{const i=new Xe([n]);if(Xl(r)){const s=Z_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
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
 */class Ye{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,B.min(),B.min(),B.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ye(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Ye(e,2,n,B.min(),B.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,B.min(),B.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qu{constructor(e,n){this.position=e,this.inclusive=n}}function r0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function i0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _o{constructor(e,n="asc"){this.field=e,this.dir=n}}function VP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ek{}class xe extends ek{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WP(e,n,r):n==="array-contains"?new qP(e,r):n==="in"?new QP(e,r):n==="not-in"?new YP(e,r):n==="array-contains-any"?new XP(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GP(e,r):new KP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&oi(this.value)===oi(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qt extends ek{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Qt(e,n)}matches(e){return tk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function tk(t){return t.op==="and"}function nk(t){return HP(t)&&tk(t)}function HP(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function $d(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(nk(t))return t.filters.map(e=>$d(e)).join(",");{const e=t.filters.map(n=>$d(n)).join(",");return`${t.op}(${e})`}}function rk(t,e){return t instanceof xe?function(n,r){return r instanceof xe&&n.op===r.op&&n.field.isEqual(r.field)&&hn(n.value,r.value)}(t,e):t instanceof Qt?function(n,r){return r instanceof Qt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&rk(s,r.filters[o]),!0):!1}(t,e):void F()}function ik(t){return t instanceof xe?function(e){return`${e.field.canonicalString()} ${e.op} ${ps(e.value)}`}(t):t instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(ik).join(" ,")+"}"}(t):"Filter"}class WP extends xe{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class GP extends xe{constructor(e,n){super(e,"in",n),this.keys=sk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KP extends xe{constructor(e,n){super(e,"not-in",n),this.keys=sk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class qP extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zm(n)&&ta(n.arrayValue,this.value)}}class QP extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class YP extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ta(this.value.arrayValue,n)}}class XP extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
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
 */class JP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function s0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JP(t,e,n,r,i,s,o)}function eg(t){const e=z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$d(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.dt=n}return e.dt}function tg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i0(t.startAt,e.startAt)&&i0(t.endAt,e.endAt)}function Fd(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class La{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function ZP(t,e,n,r,i,s,o,a){return new La(t,e,n,r,i,s,o,a)}function Wc(t){return new La(t)}function o0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ok(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ng(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ak(t){return t.collectionGroup!==null}function Zi(t){const e=z(t);if(e.wt===null){e.wt=[];const n=ng(e),r=ok(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new _o(n)),e.wt.push(new _o(Xe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new _o(Xe.keyField(),s))}}}return e.wt}function Nn(t){const e=z(t);if(!e._t)if(e.limitType==="F")e._t=s0(e.path,e.collectionGroup,Zi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Zi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new _o(s.field,o))}const r=e.endAt?new qu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new qu(e.startAt.position,e.startAt.inclusive):null;e._t=s0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function jd(t,e){e.getFirstInequalityField(),ng(t);const n=t.filters.concat([e]);return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bd(t,e,n){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gc(t,e){return tg(Nn(t),Nn(e))&&t.limitType===e.limitType}function lk(t){return`${eg(Nn(t))}|lt:${t.limitType}`}function zd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>ik(r)).join(", ")}]`),Hc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),`Target(${n})`}(Nn(t))}; limitType=${t.limitType})`}function Kc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Zi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=r0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Zi(n),r)||n.endAt&&!function(i,s,o){const a=r0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Zi(n),r))}(t,e)}function eO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uk(t){return(e,n)=>{let r=!1;for(const i of Zi(t)){const s=tO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function tO(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ds(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return X_(this.inner)}size(){return this.innerSize}}/**
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
 */const nO=new ge(U.comparator);function Pn(){return nO}const ck=new ge(U.comparator);function ro(...t){let e=ck;for(const n of t)e=e.insert(n.key,n);return e}function hk(t){let e=ck;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return ko()}function fk(){return ko()}function ko(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const rO=new ge(U.comparator),iO=new et(U.comparator);function q(...t){let e=iO;for(const n of t)e=e.add(n);return e}const sO=new et(Z);function oO(){return sO}/**
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
 */function dk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ku(e)?"-0":e}}function pk(t){return{integerValue:""+t}}function aO(t,e){return FP(e)?pk(e):dk(t,e)}/**
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
 */class qc{constructor(){this._=void 0}}function lO(t,e,n){return t instanceof na?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Xm(i)&&(i=Jm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ms?gk(t,e):t instanceof ra?yk(t,e):function(r,i){const s=mk(r,i),o=a0(s)+a0(r.gt);return Ud(s)&&Ud(r.gt)?pk(o):dk(r.serializer,o)}(t,e)}function uO(t,e,n){return t instanceof ms?gk(t,e):t instanceof ra?yk(t,e):n}function mk(t,e){return t instanceof Qu?Ud(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class na extends qc{}class ms extends qc{constructor(e){super(),this.elements=e}}function gk(t,e){const n=vk(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends qc{constructor(e){super(),this.elements=e}}function yk(t,e){let n=vk(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class Qu extends qc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function a0(t){return Te(t.integerValue||t.doubleValue)}function vk(t){return Zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class wk{constructor(e,n){this.field=e,this.transform=n}}function cO(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ms&&r instanceof ms||n instanceof ra&&r instanceof ra?fs(n.elements,r.elements,hn):n instanceof Qu&&r instanceof Qu?hn(n.gt,r.gt):n instanceof na&&r instanceof na}(t.transform,e.transform)}class hO{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qc{}function Ak(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _k(t.key,un.none()):new Ma(t.key,t.data,un.none());{const n=t.data,r=dt.empty();let i=new et(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new _t(i.toArray()),un.none())}}function fO(t,e,n){t instanceof Ma?function(r,i,s){const o=r.value.clone(),a=u0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(r,i,s){if(!Jl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=u0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Ek(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof Ma?function(i,s,o,a){if(!Jl(i.precondition,s))return o;const l=i.value.clone(),u=c0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,s,o,a){if(!Jl(i.precondition,s))return o;const l=c0(i.fieldTransforms,a,s),u=s.data;return u.setAll(Ek(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Jl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function dO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mk(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function l0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&fs(n,r,(i,s)=>cO(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ma extends Qc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Qc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ek(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u0(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uO(o,a,n[i]))}return r}function c0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,lO(s,o,e))}return r}class _k extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pO extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Ak(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>l0(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>l0(n,r))}}class rg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=rO;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rg(e,n,r,i)}}/**
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
 */class gO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class yO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ie,Y;function vO(t){switch(t){default:return F();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function kk(t){if(t===void 0)return bn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ie.OK:return E.OK;case Ie.CANCELLED:return E.CANCELLED;case Ie.UNKNOWN:return E.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return E.INTERNAL;case Ie.UNAVAILABLE:return E.UNAVAILABLE;case Ie.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ie.NOT_FOUND:return E.NOT_FOUND;case Ie.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ie.ABORTED:return E.ABORTED;case Ie.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ie.DATA_LOSS:return E.DATA_LOSS;default:return F()}}(Y=Ie||(Ie={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ig{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return kl}static getOrCreateInstance(){return kl===null&&(kl=new ig),kl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let kl=null;/**
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
 */function wO(){return new TextEncoder}/**
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
 */const AO=new Ji([4294967295,4294967295],0);function h0(t){const e=wO().encode(t),n=new SP;return n.update(e),new Uint8Array(n.digest())}function f0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ji([n,r],0),new Ji([i,s],0)]}class sg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ji.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ji.fromNumber(r)));return i.compare(AO)===1&&(i=new Ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=h0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=h0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yc(B.min(),i,new ge(Z),Pn(),q())}}class Ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ua(r,n,q(),q(),q())}}/**
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
 */class Zl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class Sk{constructor(e,n){this.targetId=e,this.Vt=n}}class Ik{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class d0{constructor(){this.St=0,this.Dt=m0(),this.Ct=it.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=q(),n=q(),r=q();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new Ua(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=m0()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class EO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Pn(),this.zt=p0(),this.Wt=new ge(Z)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Fd(o))if(i===0){const a=new U(o.path);this.Yt(r,a,Ye.newNoDocument(a,B.min()))}else le(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=ig.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,p,y,v,A,m;const d={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(d.bloomFilter={applied:u===0,hashCount:(f=g==null?void 0:g.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(y=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(A=g==null?void 0:g.bits)===null||A===void 0?void 0:A.padding)!==null&&m!==void 0?m:0}),d}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=si(s).toUint8Array()}catch(c){if(c instanceof J_)return hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new sg(l,o,a)}catch(c){return hs(c instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Fd(a.target)){const l=new U(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ye.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=q();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Yc(e,n,this.Wt,this.jt,r);return this.jt=Pn(),this.zt=p0(),this.Wt=new ge(Z),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new d0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new et(Z),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new d0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function p0(){return new ge(U.comparator)}function m0(){return new ge(U.comparator)}const _O=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SO=(()=>({and:"AND",or:"OR"}))();class IO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vd(t,e){return t.useProto3Json||Hc(e)?e:{value:e}}function Yu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TO(t,e){return Yu(t,e.toTimestamp())}function cn(t){return le(!!t),B.fromTimestamp(function(e){const n=yr(e);return new ke(n.seconds,n.nanos)}(t))}function og(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ck(t){const e=se.fromString(t);return le(Nk(e)),e}function Hd(t,e){return og(t.databaseId,e.path)}function hf(t,e){const n=Ck(e);if(n.get(1)!==t.databaseId.projectId)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(xk(n))}function Wd(t,e){return og(t.databaseId,e)}function CO(t){const e=Ck(t);return e.length===4?se.emptyPath():xk(e)}function Gd(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xk(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g0(t,e,n){return{name:Hd(t,e),fields:n.value.mapValue.fields}}function xO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(le(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(le(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:kk(l.code);return new P(u,l.message||"")}(o);n=new Ik(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hf(t,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):B.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=Ye.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Zl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hf(t,r.document),s=r.readTime?cn(r.readTime):B.min(),o=Ye.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Zl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hf(t,r.document),s=r.removedTargetIds||[];n=new Zl([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yO(i,s),a=r.targetId;n=new Sk(a,o)}}return n}function RO(t,e){let n;if(e instanceof Ma)n={update:g0(t,e.key,e.value)};else if(e instanceof _k)n={delete:Hd(t,e.key)};else if(e instanceof Cr)n={update:g0(t,e.key,e.data),updateMask:$O(e.fieldMask)};else{if(!(e instanceof pO))return F();n={verify:Hd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof na)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ms)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ra)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qu)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:TO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function bO(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?cn(r.updateTime):cn(i);return s.isEqual(B.min())&&(s=cn(i)),new hO(s,r.transformResults||[])}(n,e))):[]}function NO(t,e){return{documents:[Wd(t,e.path)]}}function PO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Wd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return bk(Qt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ki(c.field),direction:LO(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Vd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function OO(t){let e=CO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Rk(c);return h instanceof Qt&&nk(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new _o(Si(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Hc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new qu(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new qu(f,h)}(n.endAt)),ZP(e,i,o,s,a,"F",l,u)}function DO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rk(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Si(e.unaryFilter.field);return xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Si(e.unaryFilter.field);return xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Si(e.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Si(e.unaryFilter.field);return xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return xe.create(Si(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Qt.create(e.compositeFilter.filters.map(n=>Rk(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function LO(t){return _O[t]}function MO(t){return kO[t]}function UO(t){return SO[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Si(t){return Xe.fromServerFormat(t.fieldPath)}function bk(t){return t instanceof xe?function(e){if(e.op==="=="){if(n0(e.value))return{unaryFilter:{field:ki(e.field),op:"IS_NAN"}};if(t0(e.value))return{unaryFilter:{field:ki(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(n0(e.value))return{unaryFilter:{field:ki(e.field),op:"IS_NOT_NAN"}};if(t0(e.value))return{unaryFilter:{field:ki(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(e.field),op:MO(e.op),value:e.value}}}(t):t instanceof Qt?function(e){const n=e.getFilters().map(r=>bk(r));return n.length===1?n[0]:{compositeFilter:{op:UO(e.op),filters:n}}}(t):F()}function $O(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Jn{constructor(e,n,r,i,s=B.min(),o=B.min(),a=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FO{constructor(e){this.fe=e}}function jO(t){const e=OO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bd(e,e.limit,"L"):e}/**
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
 */class BO{constructor(){this.rn=new zO}addToCollectionParentIndex(e,n){return this.rn.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(gr.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class zO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new et(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(se.comparator)).toArray()}}/**
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
 */class gs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new gs(0)}static Mn(){return new gs(-1)}}/**
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
 */class VO{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class HO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,_t.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ro();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Pn();const o=ko(),a=ko();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Cr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),So(c.mutation,u,c.mutation.getFieldMask(),ke.now())):o.set(u.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new HO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new ge((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||_t.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=fk();c.forEach(f=>{if(!s.has(f)){const p=Ak(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ak(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(jr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:hk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ro();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new La(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ye.newInvalidDocument(u)))});let o=ro();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&So(u.mutation,l,_t.empty(),ke.now()),Kc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class GO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return T.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:cn(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:jO(r.bundledQuery),readTime:cn(r.readTime)}}(n)),T.resolve()}}/**
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
 */class KO{constructor(){this.overlays=new ge(U.comparator),this.ls=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ge((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=jr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=jr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gO(n,r));let s=this.ls.get(n);s===void 0&&(s=q(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class ag{constructor(){this.fs=new et(Oe.ds),this.ws=new et(Oe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Oe(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new U(new se([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new U(new se([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=q();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return U.comparator(e.key,n.key)||Z(e.As,n.As)}static _s(e,n){return Z(e.As,n.As)||U.comparator(e.key,n.key)}}/**
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
 */class qO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new et(Oe.ds)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Oe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(Z);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),T.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new U(s),0);let a=new et(Z);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),T.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return T.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Oe(n,0),i=this.Rs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QO{constructor(e){this.Ds=e,this.docs=new ge(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||MP(LP(c),r)<=0||(i.has(c.key)||Kc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}Cs(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YO(this)}getSize(e){return T.resolve(this.size)}}class YO extends VO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class XO{constructor(e){this.persistence=e,this.xs=new bs(n=>eg(n),tg),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ag,this.targetCount=0,this.Ms=gs.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),T.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Fn(n),T.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.ks.containsKey(n))}}/**
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
 */class JO{constructor(e,n){this.$s={},this.overlays={},this.Os=new Ym(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new XO(this),this.indexManager=new BO,this.remoteDocumentCache=function(r){return new QO(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new FO(n),this.qs=new GO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new qO(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new ZO(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return T.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class ZO extends $P{constructor(e){super(),this.currentSequenceNumber=e}}class lg{constructor(e){this.persistence=e,this.Qs=new ag,this.js=null}static zs(e){return new lg(e)}get Ws(){if(this.js)return this.js;throw F()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),T.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ws,r=>{const i=U.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return T.or([()=>T.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class ug{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ug(e,n.fromCache,r,i)}}/**
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
 */class eD{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(o0(n))return T.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bd(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Bd(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return o0(n)||i.isEqual(B.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Yv()<=J.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zd(n)),this.Wi(e,o,n,DP(i,-1)))})}ji(e,n){let r=new et(uk(e));return n.forEach((i,s)=>{Kc(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Yv()<=J.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",zd(n)),this.Ui.getDocumentsMatchingQuery(e,n,gr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tD{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ge(Z),this.Yi=new bs(s=>eg(s),tg),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function nD(t,e,n,r){return new tD(t,e,n,r)}async function Pk(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function rD(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=T.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(y=>{const v=l.docVersions.get(p);le(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ok(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function iD(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(it.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,A){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,p,c)&&a.push(n.Bs.updateTargetData(s,p))});let l=Pn(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(sD(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(B.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function sD(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function oD(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aD(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Kd(t,e,n){const r=z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Da(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function y0(t,e,n){const r=z(t);let i=B.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),h=c.Yi.get(u);return h!==void 0?T.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:q())).next(a=>(lD(r,eO(e),a),{documents:a,ir:s})))}function lD(t,e,n){let r=t.Xi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class v0{constructor(){this.activeTargetIds=oO()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uD{constructor(){this.Hr=new v0,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new v0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cD{Yr(e){}shutdown(){}}/**
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
 */class w0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sl=null;function ff(){return Sl===null?Sl=268435456+Math.round(2147483648*Math.random()):Sl++,"0x"+Sl.toString(16)}/**
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
 */const hD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ke="WebChannelConnection";class dD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=ff(),a=this.To(e,n);M("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(M("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw hs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=hD[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=ff();return new Promise((o,a)=>{const l=new kP;l.setWithCredentials(!0),l.listenOnce(AP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cf.NO_ERROR:const c=l.getResponseJson();M(Ke,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case cf.TIMEOUT:M(Ke,`RPC '${e}' ${s} timed out`),a(new P(E.DEADLINE_EXCEEDED,"Request time out"));break;case cf.HTTP_ERROR:const h=l.getStatus();if(M(Ke,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(A)>=0?A:E.UNKNOWN}(p.status);a(new P(y,p.message))}else a(new P(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(E.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{M(Ke,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);M(Ke,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=ff(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vP(),a=wP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new _P({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");M(Ke,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,p=!1;const y=new fD({ro:A=>{p?M(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(f||(M(Ke,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),M(Ke,`RPC '${e}' stream ${i} sending:`,A),h.send(A))},oo:()=>h.close()}),v=(A,m,d)=>{A.listen(m,g=>{try{d(g)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,Al.EventType.OPEN,()=>{p||M(Ke,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Al.EventType.CLOSE,()=>{p||(p=!0,M(Ke,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Al.EventType.ERROR,A=>{p||(p=!0,hs(Ke,`RPC '${e}' stream ${i} transport errored:`,A),y.wo(new P(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,Al.EventType.MESSAGE,A=>{var m;if(!p){const d=A.data[0];le(!!d);const g=d,w=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(w){M(Ke,`RPC '${e}' stream ${i} received error:`,w);const k=w.status;let C=function(b){const V=Ie[b];if(V!==void 0)return kk(V)}(k),x=w.message;C===void 0&&(C=E.INTERNAL,x="Unknown error status: "+k+" with message "+w.message),p=!0,y.wo(new P(C,x)),h.close()}else M(Ke,`RPC '${e}' stream ${i} received:`,d),y._o(d)}}),v(a,EP.STAT_EVENT,A=>{A.stat===qv.PROXY?M(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===qv.NOPROXY&&M(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function df(){return typeof document<"u"?document:null}/**
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
 */function Xc(t){return new IO(t,!0)}/**
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
 */class Dk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Lk{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Dk(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new P(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pD extends Lk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=xO(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?cn(s.readTime):B.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Gd(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Fd(a)?{documents:NO(i,a)}:{query:PO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Tk(i,s.resumeToken);const l=Vd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(B.min())>0){o.readTime=Yu(i,s.snapshotVersion.toTimestamp());const l=Vd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=DO(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Gd(this.serializer),n.removeTarget=e,this.Wo(n)}}class mD extends Lk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=bO(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.cu(r,n)}return le(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Gd(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RO(this.serializer,r))};this.Wo(n)}}/**
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
 */class gD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(E.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(E.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class yD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(bn(n),this.mu=!1):M("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class vD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{gi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.vu.add(4),await $a(l),l.bu.set("Unknown"),l.vu.delete(4),await Jc(l)}(this))})}),this.bu=new yD(r,i)}}async function Jc(t){if(gi(t))for(const e of t.Ru)await e(!0)}async function $a(t){for(const e of t.Ru)await e(!1)}function Mk(t,e){const n=z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),fg(n)?hg(n):Ns(n).Ko()&&cg(n,e))}function Uk(t,e){const n=z(t),r=Ns(n);n.Au.delete(e),r.Ko()&&$k(n,e),n.Au.size===0&&(r.Ko()?r.jo():gi(n)&&n.bu.set("Unknown"))}function cg(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).su(e)}function $k(t,e){t.Vu.qt(e),Ns(t).iu(e)}function hg(t){t.Vu=new EO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.bu.gu()}function fg(t){return gi(t)&&!Ns(t).Uo()&&t.Au.size>0}function gi(t){return z(t).vu.size===0}function Fk(t){t.Vu=void 0}async function wD(t){t.Au.forEach((e,n)=>{cg(t,e)})}async function AD(t,e){Fk(t),fg(t)?(t.bu.Iu(e),hg(t)):t.bu.set("Unknown")}async function ED(t,e,n){if(t.bu.set("Online"),e instanceof Ik&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xu(t,r)}else if(e instanceof Zl?t.Vu.Ht(e):e instanceof Sk?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(B.min()))try{const r=await Ok(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(it.EMPTY_BYTE_STRING,u.snapshotVersion)),$k(i,a);const c=new Jn(u.target,a,l,u.sequenceNumber);cg(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Xu(t,r)}}async function Xu(t,e,n){if(!Da(e))throw e;t.vu.add(1),await $a(t),t.bu.set("Offline"),n||(n=()=>Ok(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Jc(t)})}function jk(t,e){return e().catch(n=>Xu(t,n,e))}async function Zc(t){const e=z(t),n=vr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;_D(e);)try{const i=await oD(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,kD(e,i)}catch(i){await Xu(e,i)}Bk(e)&&zk(e)}function _D(t){return gi(t)&&t.Eu.length<10}function kD(t,e){t.Eu.push(e);const n=vr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Bk(t){return gi(t)&&!vr(t).Uo()&&t.Eu.length>0}function zk(t){vr(t).start()}async function SD(t){vr(t).hu()}async function ID(t){const e=vr(t);for(const n of t.Eu)e.uu(n.mutations)}async function TD(t,e,n){const r=t.Eu.shift(),i=rg.from(r,e,n);await jk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zc(t)}async function CD(t,e){e&&vr(t).ou&&await async function(n,r){if(i=r.code,vO(i)&&i!==E.ABORTED){const s=n.Eu.shift();vr(n).Qo(),await jk(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Zc(n)}var i}(t,e),Bk(t)&&zk(t)}async function A0(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.vu.add(3),await $a(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Jc(n)}async function xD(t,e){const n=z(t);e?(n.vu.delete(2),await Jc(n)):e||(n.vu.add(2),await $a(n),n.bu.set("Unknown"))}function Ns(t){return t.Su||(t.Su=function(e,n,r){const i=z(e);return i.fu(),new pD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:wD.bind(null,t),ao:AD.bind(null,t),nu:ED.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),fg(t)?hg(t):t.bu.set("Unknown")):(await t.Su.stop(),Fk(t))})),t.Su}function vr(t){return t.Du||(t.Du=function(e,n,r){const i=z(e);return i.fu(),new mD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:SD.bind(null,t),ao:CD.bind(null,t),au:ID.bind(null,t),cu:TD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Zc(t)):(await t.Du.stop(),t.Eu.length>0&&(M("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class dg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new dg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pg(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Da(t))return new P(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=ro(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class E0{constructor(){this.Cu=new ge(U.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):F():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ys(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class RD{constructor(){this.Nu=void 0,this.listeners=[]}}class bD{constructor(){this.queries=new bs(e=>lk(e),Gc),this.onlineState="Unknown",this.ku=new Set}}async function mg(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new RD),i)try{s.Nu=await n.onListen(r)}catch(o){const a=pg(o,`Initialization of query '${zd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&yg(n)}async function gg(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ND(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&yg(n)}function PD(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function yg(t){t.ku.forEach(e=>{e.next()})}class vg{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Vk{constructor(e){this.key=e}}class Hk{constructor(e){this.key=e}}class OD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=q(),this.mutatedKeys=q(),this.tc=uk(e),this.ec=new es(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new E0,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),p=Kc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),A=!0):this.rc(f,p)||(r.track({type:2,doc:p}),A=!0,(l&&this.tc(p,l)>0||u&&this.tc(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),A=!0):f&&!p&&(r.track({type:1,doc:f}),A=!0,(l||u)&&(a=!0)),A&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,f){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return p(h)-p(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new ys(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new E0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=q(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Hk(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Vk(r))}),n}hc(e){this.Yu=e.ir,this.Zu=q();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ys.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class DD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LD{constructor(e){this.key=e,this.fc=!1}}class MD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new bs(a=>lk(a),Gc),this._c=new Map,this.mc=new Set,this.gc=new ge(U.comparator),this.yc=new Map,this.Ic=new ag,this.Tc={},this.Ec=new Map,this.Ac=gs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function UD(t,e){const n=KD(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await aD(n.localStore,Nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await $D(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Mk(n.remoteStore,o)}return i}async function $D(t,e,n,r,i){t.Rc=(h,f,p)=>async function(y,v,A,m){let d=v.view.sc(A);d.zi&&(d=await y0(y.localStore,v.query,!1).then(({documents:k})=>v.view.sc(k,d)));const g=m&&m.targetChanges.get(v.targetId),w=v.view.applyChanges(d,y.isPrimaryClient,g);return k0(y,v.targetId,w.cc),w.snapshot}(t,h,f,p);const s=await y0(t.localStore,e,!0),o=new OD(e,s.ir),a=o.sc(s.documents),l=Ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);k0(t,n,u.cc);const c=new DD(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function FD(t,e){const n=z(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Gc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Uk(n.remoteStore,r.targetId),qd(n,r.targetId)}).catch(Oa)):(qd(n,r.targetId),await Kd(n.localStore,r.targetId,!0))}async function jD(t,e,n){const r=qD(t);try{const i=await function(s,o){const a=z(s),l=ke.now(),u=o.reduce((f,p)=>f.add(p.key),q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Pn(),y=q();return a.Zi.getEntries(f,u).next(v=>{p=v,p.forEach((A,m)=>{m.isValidDocument()||(y=y.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{c=v;const A=[];for(const m of o){const d=dO(m,c.get(m.key).overlayedDocument);d!=null&&A.push(new Cr(m.key,d,Z_(d.value.mapValue),un.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,A,o)}).next(v=>{h=v;const A=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,A)})}).then(()=>({batchId:h.batchId,changes:hk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ge(Z)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Fa(r,i.changes),await Zc(r.remoteStore)}catch(i){const s=pg(i,"Failed to persist write");n.reject(s)}}async function Wk(t,e){const n=z(t);try{const r=await iD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?le(o.fc):i.removedDocuments.size>0&&(le(o.fc),o.fc=!1))}),await Fa(n,r,e)}catch(r){await Oa(r)}}function _0(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&yg(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BD(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ge(U.comparator);o=o.insert(s,Ye.newNoDocument(s,B.min()));const a=q().add(s),l=new Yc(B.min(),new Map,new ge(Z),o,a);await Wk(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),wg(r)}else await Kd(r.localStore,e,!1).then(()=>qd(r,e,n)).catch(Oa)}async function zD(t,e){const n=z(t),r=e.batch.batchId;try{const i=await rD(n.localStore,e);Kk(n,r,null),Gk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fa(n,i)}catch(i){await Oa(i)}}async function VD(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(le(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Kk(r,e,n),Gk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fa(r,i)}catch(i){await Oa(i)}}function Gk(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Kk(t,e,n){const r=z(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||qk(t,r)})}function qk(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Uk(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),wg(t))}function k0(t,e,n){for(const r of n)r instanceof Vk?(t.Ic.addReference(r.key,e),HD(t,r)):r instanceof Hk?(M("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||qk(t,r.key)):F()}function HD(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(M("SyncEngine","New document in limbo: "+n),t.mc.add(r),wg(t))}function wg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new U(se.fromString(e)),r=t.Ac.next();t.yc.set(r,new LD(n)),t.gc=t.gc.insert(n,r),Mk(t.remoteStore,new Jn(Nn(Wc(n.path)),r,"TargetPurposeLimboResolution",Ym.ct))}}async function Fa(t,e,n){const r=z(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ug.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>T.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Da(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),p=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function WD(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Pk(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new P(E.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fa(n,r.er)}}function GD(t,e){const n=z(t),r=n.yc.get(e);if(r&&r.fc)return q().add(r.key);{let i=q();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function KD(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BD.bind(null,e),e.dc.nu=ND.bind(null,e.eventManager),e.dc.Pc=PD.bind(null,e.eventManager),e}function qD(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,e),e}class S0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nD(this.persistence,new eD,e.initialUser,this.serializer)}createPersistence(e){return new JO(lg.zs,this.serializer)}createSharedClientState(e){return new uD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WD.bind(null,this.syncEngine),await xD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bD}createDatastore(e){const n=Xc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new dD(i));var i;return function(s,o,a,l){return new gD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>_0(this.syncEngine,a,0),o=w0.D()?new w0:new cD,new vD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new MD(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);M("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await $a(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Ag{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=Y_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pf(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function I0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JD(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>A0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>A0(e.remoteStore,s)),t._onlineComponents=e}function XD(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function JD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await pf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XD(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await pf(t,new S0)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await pf(t,new S0);return t._offlineComponents}async function Qk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await I0(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await I0(t,new QD))),t._onlineComponents}function ZD(t){return Qk(t).then(e=>e.syncEngine)}async function Ju(t){const e=await Qk(t),n=e.eventManager;return n.onListen=UD.bind(null,e.syncEngine),n.onUnlisten=FD.bind(null,e.syncEngine),n}function eL(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Ag({next:h=>{s.enqueueAndForget(()=>gg(i,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new P(E.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new vg(Wc(o.path),u,{includeMetadataChanges:!0,Ku:!0});return mg(i,c)}(await Ju(t),t.asyncQueue,e,n,r)),r.promise}function tL(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Ag({next:h=>{s.enqueueAndForget(()=>gg(i,c)),h.fromCache&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new vg(o,u,{includeMetadataChanges:!0,Ku:!0});return mg(i,c)}(await Ju(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Yk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const T0=new Map;/**
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
 */function Xk(t,e,n){if(!n)throw new P(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nL(t,e,n,r){if(e===!0&&r===!0)throw new P(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function C0(t){if(!U.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function x0(t){if(U.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function eh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(t);throw new P(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class R0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class th{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IP;switch(n.type){case"firstParty":return new RP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=T0.get(e);n&&(M("ComponentProvider","Removing Datastore"),T0.delete(e),n.terminate())}(this),Promise.resolve()}}function rL(t,e,n,r={}){var i;const s=(t=Lt(t,th))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&hs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=qe.MOCK_USER;else{o=MA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new qe(l)}t._authCredentials=new TP(new Q_(o,a))}}/**
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
 */class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class yi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yi(this.firestore,e,this._query)}}class hr extends yi{constructor(e,n,r){super(e,n,Wc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new U(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function iL(t,e,...n){if(t=fe(t),Xk("collection","path",e),t instanceof th){const r=se.fromString(e,...n);return x0(r),new hr(t,null,r)}{if(!(t instanceof tt||t instanceof hr))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return x0(r),new hr(t.firestore,null,r)}}function Ot(t,e,...n){if(t=fe(t),arguments.length===1&&(e=Y_.A()),Xk("doc","path",e),t instanceof th){const r=se.fromString(e,...n);return C0(r),new tt(t,null,new U(r))}{if(!(t instanceof tt||t instanceof hr))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return C0(r),new tt(t.firestore,t instanceof hr?t.converter:null,new U(r))}}/**
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
 */class sL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Dk(this,"async_queue_retry"),this.Xc=()=>{const n=df();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=df();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=df();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new kn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Da(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=dg.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&F()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function b0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ai extends th{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jk(this),this._firestoreClient.terminate()}}function oL(t,e){const n=typeof t=="object"?t:fm(),r=typeof t=="string"?t:e||"(default)",i=Sc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=OA("firestore");s&&rL(i,...s)}return i}function nh(t){return t._firestoreClient||Jk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jk(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new BP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Yk(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(it.fromBase64String(e))}catch(n){throw new P(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ja{constructor(e){this._methodName=e}}/**
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
 */class Eg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */const aL=/^__.*__$/;class lL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ma(e,this.data,n,this.fieldTransforms)}}class Zk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class ih{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Zu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(eS(this.ca)&&aL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class uL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xc(e)}ya(e,n,r,i=!1){return new ih({ca:e,methodName:n,ga:r,path:Xe.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _g(t){const e=t._freezeSettings(),n=Xc(t._databaseId);return new uL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cL(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Sg("Data must be an object, but it was:",o,r);const a=tS(r,o);let l,u;if(s.merge)l=new _t(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=Qd(e,h,n);if(!o.contains(f))throw new P(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);rS(c,f)||c.push(f)}l=new _t(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new lL(new dt(a),l,u)}class sh extends ja{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sh}}function hL(t,e,n){return new ih({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class kg extends ja{_toFieldTransform(e){return new wk(e.path,new na)}isEqual(e){return e instanceof kg}}class fL extends ja{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=hL(this,e,!0),r=this.pa.map(s=>Ps(s,n)),i=new ms(r);return new wk(e.path,i)}isEqual(e){return this===e}}function dL(t,e,n,r){const i=t.ya(1,e,n);Sg("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();mi(r,(l,u)=>{const c=Ig(e,l,n);u=fe(u);const h=i.da(c);if(u instanceof sh)s.push(c);else{const f=Ps(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new _t(s);return new Zk(o,a,i.fieldTransforms)}function pL(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Qd(e,r,n)],l=[i];if(s.length%2!=0)throw new P(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Qd(e,s[f])),l.push(s[f+1]);const u=[],c=dt.empty();for(let f=a.length-1;f>=0;--f)if(!rS(u,a[f])){const p=a[f];let y=l[f];y=fe(y);const v=o.da(p);if(y instanceof sh)u.push(p);else{const A=Ps(y,v);A!=null&&(u.push(p),c.set(p,A))}}const h=new _t(u);return new Zk(c,h,o.fieldTransforms)}function mL(t,e,n,r=!1){return Ps(n,t.ya(r?4:3,e))}function Ps(t,e){if(nS(t=fe(t)))return Sg("Unsupported field value:",e,t),tS(t,e);if(t instanceof ja)return function(n,r){if(!eS(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ps(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return aO(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ke.fromDate(n);return{timestampValue:Yu(r.serializer,i)}}if(n instanceof ke){const i=new ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yu(r.serializer,i)}}if(n instanceof Eg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vs)return{bytesValue:Tk(r.serializer,n._byteString)};if(n instanceof tt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:og(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${eh(n)}`)}(t,e)}function tS(t,e){const n={};return X_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,(r,i)=>{const s=Ps(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Eg||t instanceof vs||t instanceof tt||t instanceof ja)}function Sg(t,e,n){if(!nS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=eh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Qd(t,e,n){if((e=fe(e))instanceof rh)return e._internalPath;if(typeof e=="string")return Ig(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const gL=new RegExp("[~\\*/\\[\\]]");function Ig(t,e,n){if(e.search(gL)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rh(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(E.INVALID_ARGUMENT,a+t+l)}function rS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yL extends iS{data(){return super.data()}}function Tg(t,e){return typeof e=="string"?Ig(t,e):e instanceof rh?e._internalPath:e._delegate._internalPath}/**
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
 */function sS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cg{}class vL extends Cg{}function wL(t,e,...n){let r=[];e instanceof Cg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof xg).length,o=i.filter(a=>a instanceof oh).length;if(s>1||s>0&&o>0)throw new P(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class oh extends vL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new oh(e,n,r)}_apply(e){const n=this._parse(e);return oS(e._query,n),new yi(e.firestore,e.converter,jd(e._query,n))}_parse(e){const n=_g(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){P0(c,u);const f=[];for(const p of c)f.push(N0(a,i,p));h={arrayValue:{values:f}}}else h=N0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||P0(c,u),h=mL(o,s,c,u==="in"||u==="not-in");return xe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function AL(t,e,n){const r=e,i=Tg("where",t);return oh._create(i,r,n)}class xg extends Cg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)oS(s,a),s=jd(s,a)}(e._query,n),new yi(e.firestore,e.converter,jd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function N0(t,e,n){if(typeof(n=fe(n))=="string"){if(n==="")throw new P(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ak(e)&&n.indexOf("/")!==-1)throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!U.isDocumentKey(r))throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e0(t,new U(r))}if(n instanceof tt)return e0(t,n._key);throw new P(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eh(n)}.`)}function P0(t,e){if(!Array.isArray(t)||t.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oS(t,e){if(e.isInequality()){const r=ng(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new P(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ok(t);s!==null&&EL(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function EL(t,e,n){if(!n.isEqual(e))throw new P(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _L{convertValue(e,n="none"){switch(oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Eg(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=yr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);le(Nk(r));const i=new ea(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function kL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aS extends iS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class eu extends aS{data(e={}){return super.data(e)}}class lS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new so(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new eu(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new eu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new so(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new eu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new so(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:SL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function IL(t){t=Lt(t,tt);const e=Lt(t.firestore,ai);return eL(nh(e),t._key).then(n=>hS(e,t,n))}class Rg extends _L{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function TL(t){t=Lt(t,yi);const e=Lt(t.firestore,ai),n=nh(e),r=new Rg(e);return sS(t._query),tL(n,t._query).then(i=>new lS(e,r,t,i))}function Yd(t,e,n){t=Lt(t,tt);const r=Lt(t.firestore,ai),i=kL(t.converter,e,n);return cS(r,[cL(_g(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,un.none())])}function Fi(t,e,n,...r){t=Lt(t,tt);const i=Lt(t.firestore,ai),s=_g(i);let o;return o=typeof(e=fe(e))=="string"||e instanceof rh?pL(s,"updateDoc",t._key,e,n,r):dL(s,"updateDoc",t._key,e),cS(i,[o.toMutation(t._key,un.exists(!0))])}function uS(t,...e){var n,r,i;t=fe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||b0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(b0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof tt)u=Lt(t.firestore,ai),c=Wc(t._key.path),l={next:h=>{e[o]&&e[o](hS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Lt(t,yi);u=Lt(h.firestore,ai),c=h._query;const f=new Rg(u);l={next:p=>{e[o]&&e[o](new lS(u,f,h,p))},error:e[o+1],complete:e[o+2]},sS(t._query)}return function(h,f,p,y){const v=new Ag(y),A=new vg(f,v,p);return h.asyncQueue.enqueueAndForget(async()=>mg(await Ju(h),A)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>gg(await Ju(h),A))}}(nh(u),c,a,l)}function cS(t,e){return function(n,r){const i=new kn;return n.asyncQueue.enqueueAndForget(async()=>jD(await ZD(n),r,i)),i.promise}(nh(t),e)}function hS(t,e,n){const r=n.docs.get(e._key),i=new Rg(t);return new aS(t,i,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}function ec(){return new kg("serverTimestamp")}function O0(...t){return new fL("arrayUnion",t)}(function(t,e=!0){(function(n){Rs=n})(fi),ei(new mr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ai(new CP(n.getProvider("auth-internal")),new NP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),on(Qv,"3.12.0",t),on(Qv,"3.12.0","esm2017")})();const CL={apiKey:"AIzaSyAc7Sh2diBeNiyRIFpqswUTYxmiQj5sHLM",authDomain:"chat-d9bca.firebaseapp.com",projectId:"chat-d9bca",storageBucket:"chat-d9bca.appspot.com",messagingSenderId:"1028912655398",appId:"1:1028912655398:web:fda4d320492b7443dfcae7"};FA(CL);const Ba=ob(),fS=yN(),wt=oL(),xr=I.createContext(),xL=({children:t})=>{const[e,n]=I.useState({});return I.useEffect(()=>{const r=qx(Ba,i=>{n(i),console.log(i)});return()=>{r()}},[]),_.jsx(xr.Provider,{value:{currentUser:e},children:t})},RL=()=>{const{currentUser:t}=I.useContext(xr);return _.jsxs("div",{className:"navbar",children:[_.jsx("span",{className:"logo",children:"NS-Chat"}),_.jsxs("div",{className:"user",children:[_.jsx("img",{src:t.photoURL,alt:""}),_.jsx("span",{children:t.displayName}),_.jsx("button",{onClick:()=>hE(Ba),children:"Logout"})]})]})};function D0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D0(Object(n),!0).forEach(function(r){Ne(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tc(t){"@babel/helpers - typeof";return tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tc(t)}function bL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function NL(t,e,n){return e&&L0(t.prototype,e),n&&L0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ne(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bg(t,e){return OL(t)||LL(t,e)||dS(t,e)||UL()}function za(t){return PL(t)||DL(t)||dS(t)||ML()}function PL(t){if(Array.isArray(t))return Xd(t)}function OL(t){if(Array.isArray(t))return t}function DL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function LL(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function dS(t,e){if(t){if(typeof t=="string")return Xd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xd(t,e)}}function Xd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ML(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M0=function(){},Ng={},pS={},mS=null,gS={mark:M0,measure:M0};try{typeof window<"u"&&(Ng=window),typeof document<"u"&&(pS=document),typeof MutationObserver<"u"&&(mS=MutationObserver),typeof performance<"u"&&(gS=performance)}catch{}var $L=Ng.navigator||{},U0=$L.userAgent,$0=U0===void 0?"":U0,wr=Ng,ae=pS,F0=mS,Il=gS;wr.document;var Un=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",yS=~$0.indexOf("MSIE")||~$0.indexOf("Trident/"),Tl,Cl,xl,Rl,bl,On="___FONT_AWESOME___",Jd=16,vS="fa",wS="svg-inline--fa",li="data-fa-i2svg",Zd="data-fa-pseudo-element",FL="data-fa-pseudo-element-pending",Pg="data-prefix",Og="data-icon",j0="fontawesome-i2svg",jL="async",BL=["HTML","HEAD","STYLE","SCRIPT"],AS=function(){try{return!0}catch{return!1}}(),ie="classic",we="sharp",Dg=[ie,we];function Va(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ie]}})}var ia=Va((Tl={},Ne(Tl,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ne(Tl,we,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Tl)),sa=Va((Cl={},Ne(Cl,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ne(Cl,we,{solid:"fass",regular:"fasr",light:"fasl"}),Cl)),oa=Va((xl={},Ne(xl,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ne(xl,we,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),xl)),zL=Va((Rl={},Ne(Rl,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ne(Rl,we,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Rl)),VL=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ES="fa-layers-text",HL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,WL=Va((bl={},Ne(bl,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ne(bl,we,{900:"fass",400:"fasr",300:"fasl"}),bl)),_S=[1,2,3,4,5,6,7,8,9,10],GL=_S.concat([11,12,13,14,15,16,17,18,19,20]),KL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Br={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aa=new Set;Object.keys(sa[ie]).map(aa.add.bind(aa));Object.keys(sa[we]).map(aa.add.bind(aa));var qL=[].concat(Dg,za(aa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Br.GROUP,Br.SWAP_OPACITY,Br.PRIMARY,Br.SECONDARY]).concat(_S.map(function(t){return"".concat(t,"x")})).concat(GL.map(function(t){return"w-".concat(t)})),Io=wr.FontAwesomeConfig||{};function QL(t){var e=ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function YL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ae&&typeof ae.querySelector=="function"){var XL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];XL.forEach(function(t){var e=bg(t,2),n=e[0],r=e[1],i=YL(QL(n));i!=null&&(Io[r]=i)})}var kS={styleDefault:"solid",familyDefault:"classic",cssPrefix:vS,replacementClass:wS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Io.familyPrefix&&(Io.cssPrefix=Io.familyPrefix);var ws=N(N({},kS),Io);ws.autoReplaceSvg||(ws.observeMutations=!1);var L={};Object.keys(kS).forEach(function(t){Object.defineProperty(L,t,{enumerable:!0,set:function(n){ws[t]=n,To.forEach(function(r){return r(L)})},get:function(){return ws[t]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){ws.cssPrefix=e,To.forEach(function(n){return n(L)})},get:function(){return ws.cssPrefix}});wr.FontAwesomeConfig=L;var To=[];function JL(t){return To.push(t),function(){To.splice(To.indexOf(t),1)}}var jn=Jd,nn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ZL(t){if(!(!t||!Un)){var e=ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ae.head.insertBefore(e,r),t}}var eM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function la(){for(var t=12,e="";t-- >0;)e+=eM[Math.random()*62|0];return e}function Os(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lg(t){return t.classList?Os(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function SS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(SS(t[n]),'" ')},"").trim()}function ah(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Mg(t){return t.size!==nn.size||t.x!==nn.x||t.y!==nn.y||t.rotate!==nn.rotate||t.flipX||t.flipY}function nM(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function rM(t){var e=t.transform,n=t.width,r=n===void 0?Jd:n,i=t.height,s=i===void 0?Jd:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&yS?l+="translate(".concat(e.x/jn-r/2,"em, ").concat(e.y/jn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/jn,"em), calc(-50% + ").concat(e.y/jn,"em)) "):l+="translate(".concat(e.x/jn,"em, ").concat(e.y/jn,"em) "),l+="scale(".concat(e.size/jn*(e.flipX?-1:1),", ").concat(e.size/jn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var iM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function IS(){var t=vS,e=wS,n=L.cssPrefix,r=L.replacementClass,i=iM;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var B0=!1;function mf(){L.autoAddCss&&!B0&&(ZL(IS()),B0=!0)}var sM={mixout:function(){return{dom:{css:IS,insertCss:mf}}},hooks:function(){return{beforeDOMElementCreation:function(){mf()},beforeI2svg:function(){mf()}}}},Dn=wr||{};Dn[On]||(Dn[On]={});Dn[On].styles||(Dn[On].styles={});Dn[On].hooks||(Dn[On].hooks={});Dn[On].shims||(Dn[On].shims=[]);var Vt=Dn[On],TS=[],oM=function t(){ae.removeEventListener("DOMContentLoaded",t),nc=1,TS.map(function(e){return e()})},nc=!1;Un&&(nc=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),nc||ae.addEventListener("DOMContentLoaded",oM));function aM(t){Un&&(nc?setTimeout(t,0):TS.push(t))}function Ha(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?SS(t):"<".concat(e," ").concat(tM(r),">").concat(s.map(Ha).join(""),"</").concat(e,">")}function z0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lM=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},gf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?lM(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function uM(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ep(t){var e=uM(t);return e.length===1?e[0].toString(16):null}function cM(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function V0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function tp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=V0(e);typeof Vt.hooks.addPack=="function"&&!i?Vt.hooks.addPack(t,V0(e)):Vt.styles[t]=N(N({},Vt.styles[t]||{}),s),t==="fas"&&tp("fa",e)}var Nl,Pl,Ol,ji=Vt.styles,hM=Vt.shims,fM=(Nl={},Ne(Nl,ie,Object.values(oa[ie])),Ne(Nl,we,Object.values(oa[we])),Nl),Ug=null,CS={},xS={},RS={},bS={},NS={},dM=(Pl={},Ne(Pl,ie,Object.keys(ia[ie])),Ne(Pl,we,Object.keys(ia[we])),Pl);function pM(t){return~qL.indexOf(t)}function mM(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!pM(i)?i:null}var PS=function(){var e=function(s){return gf(ji,function(o,a,l){return o[l]=gf(a,s,{}),o},{})};CS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),xS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),NS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ji||L.autoFetchSvg,r=gf(hM,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});RS=r.names,bS=r.unicodes,Ug=lh(L.styleDefault,{family:L.familyDefault})};JL(function(t){Ug=lh(t.styleDefault,{family:L.familyDefault})});PS();function $g(t,e){return(CS[t]||{})[e]}function gM(t,e){return(xS[t]||{})[e]}function zr(t,e){return(NS[t]||{})[e]}function OS(t){return RS[t]||{prefix:null,iconName:null}}function yM(t){var e=bS[t],n=$g("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ar(){return Ug}var Fg=function(){return{prefix:null,iconName:null,rest:[]}};function lh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ie:n,i=ia[r][t],s=sa[r][t]||sa[r][i],o=t in Vt.styles?t:null;return s||o||null}var H0=(Ol={},Ne(Ol,ie,Object.keys(oa[ie])),Ne(Ol,we,Object.keys(oa[we])),Ol);function uh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ne(e,ie,"".concat(L.cssPrefix,"-").concat(ie)),Ne(e,we,"".concat(L.cssPrefix,"-").concat(we)),e),o=null,a=ie;(t.includes(s[ie])||t.some(function(u){return H0[ie].includes(u)}))&&(a=ie),(t.includes(s[we])||t.some(function(u){return H0[we].includes(u)}))&&(a=we);var l=t.reduce(function(u,c){var h=mM(L.cssPrefix,c);if(ji[c]?(c=fM[a].includes(c)?zL[a][c]:c,o=c,u.prefix=c):dM[a].indexOf(c)>-1?(o=c,u.prefix=lh(c,{family:a})):h?u.iconName=h:c!==L.replacementClass&&c!==s[ie]&&c!==s[we]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?OS(u.iconName):{},p=zr(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ji.far&&ji.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},Fg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===we&&(ji.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=zr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ar()||"fas"),l}var vM=function(){function t(){bL(this,t),this.definitions={}}return NL(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=N(N({},n.definitions[a]||{}),o[a]),tp(a,o[a]);var l=oa[ie][a];l&&tp(l,o[a]),PS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),W0=[],Bi={},ts={},wM=Object.keys(ts);function AM(t,e){var n=e.mixoutsTo;return W0=t,Bi={},Object.keys(ts).forEach(function(r){wM.indexOf(r)===-1&&delete ts[r]}),W0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),tc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Bi[o]||(Bi[o]=[]),Bi[o].push(s[o])})}r.provides&&r.provides(ts)}),n}function np(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Bi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ui(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Bi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ln(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ts[t]?ts[t].apply(null,e):void 0}function rp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ar();if(e)return e=zr(n,e)||e,z0(DS.definitions,n,e)||z0(Vt.styles,n,e)}var DS=new vM,EM=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,ui("noAuto")},_M={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Un?(ui("beforeI2svg",e),Ln("pseudoElements2svg",e),Ln("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,aM(function(){SM({autoReplaceSvgRoot:n}),ui("watch",e)})}},kM={icon:function(e){if(e===null)return null;if(tc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:zr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=lh(e[0]);return{prefix:r,iconName:zr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(VL))){var i=uh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ar(),iconName:zr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Ar();return{prefix:s,iconName:zr(s,e)||e}}}},xt={noAuto:EM,config:L,dom:_M,parse:kM,library:DS,findIconDefinition:rp,toHtml:Ha},SM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(Vt.styles).length>0||L.autoFetchSvg)&&Un&&L.autoReplaceSvg&&xt.dom.i2svg({node:r})};function ch(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ha(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Un){var r=ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function IM(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Mg(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ah(N(N({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function TM(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function jg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,p=f===void 0?!1:f,y=r.found?r:n,v=y.width,A=y.height,m=i==="fak",d=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(V){return h.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(h.classes).join(" "),g={children:[],attributes:N(N({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(A)})},w=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/A*16*.0625,"em")}:{};p&&(g.attributes[li]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||la())},children:[l]}),delete g.attributes.title);var k=N(N({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:N(N({},w),h.styles)}),C=r.found&&n.found?Ln("generateAbstractMask",k)||{children:[],attributes:{}}:Ln("generateAbstractIcon",k)||{children:[],attributes:{}},x=C.children,b=C.attributes;return k.children=x,k.attributes=b,a?TM(k):IM(k)}function G0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=N(N(N({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[li]="");var c=N({},o.styles);Mg(i)&&(c.transform=rM({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=ah(c);h.length>0&&(u.style=h);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function CM(t){var e=t.content,n=t.title,r=t.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ah(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yf=Vt.styles;function ip(t){var e=t[0],n=t[1],r=t.slice(4),i=bg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Br.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Br.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Br.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var xM={found:!1,width:512,height:512};function RM(t,e){!AS&&!L.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function sp(t,e){var n=e;return e==="fa"&&L.styleDefault!==null&&(e=Ar()),new Promise(function(r,i){if(Ln("missingIconAbstract"),n==="fa"){var s=OS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&yf[e]&&yf[e][t]){var o=yf[e][t];return r(ip(o))}RM(t,e),r(N(N({},xM),{},{icon:L.showMissingIcons&&t?Ln("missingIconAbstract")||{}:{}}))})}var K0=function(){},op=L.measurePerformance&&Il&&Il.mark&&Il.measure?Il:{mark:K0,measure:K0},oo='FA "6.4.0"',bM=function(e){return op.mark("".concat(oo," ").concat(e," begins")),function(){return LS(e)}},LS=function(e){op.mark("".concat(oo," ").concat(e," ends")),op.measure("".concat(oo," ").concat(e),"".concat(oo," ").concat(e," begins"),"".concat(oo," ").concat(e," ends"))},Bg={begin:bM,end:LS},tu=function(){};function q0(t){var e=t.getAttribute?t.getAttribute(li):null;return typeof e=="string"}function NM(t){var e=t.getAttribute?t.getAttribute(Pg):null,n=t.getAttribute?t.getAttribute(Og):null;return e&&n}function PM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(L.replacementClass)}function OM(){if(L.autoReplaceSvg===!0)return nu.replace;var t=nu[L.autoReplaceSvg];return t||nu.replace}function DM(t){return ae.createElementNS("http://www.w3.org/2000/svg",t)}function LM(t){return ae.createElement(t)}function MS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?DM:LM:n;if(typeof t=="string")return ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(MS(o,{ceFn:r}))}),i}function MM(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var nu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(MS(i),n)}),n.getAttribute(li)===null&&L.keepOriginalSource){var r=ae.createComment(MM(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Lg(n).indexOf(L.replacementClass))return nu.replace(e);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ha(a)}).join(`
`);n.setAttribute(li,""),n.innerHTML=o}};function Q0(t){t()}function US(t,e){var n=typeof e=="function"?e:tu;if(t.length===0)n();else{var r=Q0;L.mutateApproach===jL&&(r=wr.requestAnimationFrame||Q0),r(function(){var i=OM(),s=Bg.begin("mutate");t.map(i),s(),n()})}}var zg=!1;function $S(){zg=!0}function ap(){zg=!1}var rc=null;function Y0(t){if(F0&&L.observeMutations){var e=t.treeCallback,n=e===void 0?tu:e,r=t.nodeCallback,i=r===void 0?tu:r,s=t.pseudoElementsCallback,o=s===void 0?tu:s,a=t.observeMutationsRoot,l=a===void 0?ae:a;rc=new F0(function(u){if(!zg){var c=Ar();Os(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!q0(h.addedNodes[0])&&(L.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&L.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&q0(h.target)&&~KL.indexOf(h.attributeName))if(h.attributeName==="class"&&NM(h.target)){var f=uh(Lg(h.target)),p=f.prefix,y=f.iconName;h.target.setAttribute(Pg,p||c),y&&h.target.setAttribute(Og,y)}else PM(h.target)&&i(h.target)})}}),Un&&rc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function UM(){rc&&rc.disconnect()}function $M(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function FM(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=uh(Lg(t));return i.prefix||(i.prefix=Ar()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=gM(i.prefix,t.innerText)||$g(i.prefix,ep(t.innerText))),!i.iconName&&L.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function jM(t){var e=Os(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return L.autoA11y&&(n?e["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||la()):(e["aria-hidden"]="true",e.focusable="false")),e}function BM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function X0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=FM(t),r=n.iconName,i=n.prefix,s=n.rest,o=jM(t),a=np("parseNodeAttributes",{},t),l=e.styleParser?$M(t):[];return N({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:nn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var zM=Vt.styles;function FS(t){var e=L.autoReplaceSvg==="nest"?X0(t,{styleParser:!1}):X0(t);return~e.extra.classes.indexOf(ES)?Ln("generateLayersText",t,e):Ln("generateSvgReplacementMutation",t,e)}var Er=new Set;Dg.map(function(t){Er.add("fa-".concat(t))});Object.keys(ia[ie]).map(Er.add.bind(Er));Object.keys(ia[we]).map(Er.add.bind(Er));Er=za(Er);function J0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Un)return Promise.resolve();var n=ae.documentElement.classList,r=function(h){return n.add("".concat(j0,"-").concat(h))},i=function(h){return n.remove("".concat(j0,"-").concat(h))},s=L.autoFetchSvg?Er:Dg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(zM));s.includes("fa")||s.push("fa");var o=[".".concat(ES,":not([").concat(li,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(li,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Os(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Bg.begin("onTree"),u=a.reduce(function(c,h){try{var f=FS(h);f&&c.push(f)}catch(p){AS||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(f){US(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),h(f)})})}function VM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;FS(t).then(function(n){n&&US([n],e)})}function HM(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:rp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:rp(i||{})),t(r,N(N({},n),{},{mask:i}))}}var WM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?nn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,f=h===void 0?null:h,p=n.titleId,y=p===void 0?null:p,v=n.classes,A=v===void 0?[]:v,m=n.attributes,d=m===void 0?{}:m,g=n.styles,w=g===void 0?{}:g;if(e){var k=e.prefix,C=e.iconName,x=e.icon;return ch(N({type:"icon"},e),function(){return ui("beforeDOMElementCreation",{iconDefinition:e,params:n}),L.autoA11y&&(f?d["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||la()):(d["aria-hidden"]="true",d.focusable="false")),jg({icons:{main:ip(x),mask:l?ip(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:N(N({},nn),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:d,styles:w,classes:A}})})}},GM={mixout:function(){return{icon:HM(WM)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=J0,n.nodeCallback=VM,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ae:r,s=n.callback,o=s===void 0?function(){}:s;return J0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,y){Promise.all([sp(i,a),c.iconName?sp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var A=bg(v,2),m=A[0],d=A[1];p([n,jg({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ah(a);l.length>0&&(i.style=l);var u;return Mg(o)&&(u=Ln("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},KM={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return ch({type:"layer"},function(){ui("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(za(s)).join(" ")},children:o}]})}}}},qM={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return ch({type:"counter",content:n},function(){return ui("beforeDOMElementCreation",{content:n,params:r}),CM({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(za(a))}})})}}}},QM={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?nn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return ch({type:"text",content:n},function(){return ui("beforeDOMElementCreation",{content:n,params:r}),G0({content:n,transform:N(N({},nn),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(L.cssPrefix,"-layers-text")].concat(za(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(yS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,G0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},YM=new RegExp('"',"ug"),Z0=[1105920,1112319];function XM(t){var e=t.replace(YM,""),n=cM(e,0),r=n>=Z0[0]&&n<=Z0[1],i=e.length===2?e[0]===e[1]:!1;return{value:ep(i?e[0]:e),isSecondary:r||i}}function e1(t,e){var n="".concat(FL).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Os(t.children),o=s.filter(function(x){return x.getAttribute(Zd)===e})[0],a=wr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(HL),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?we:ie,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?sa[f][l[2].toLowerCase()]:WL[f][u],y=XM(h),v=y.value,A=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=$g(p,v),g=d;if(m){var w=yM(v);w.iconName&&w.prefix&&(d=w.iconName,p=w.prefix)}if(d&&!A&&(!o||o.getAttribute(Pg)!==p||o.getAttribute(Og)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var k=BM(),C=k.extra;C.attributes[Zd]=e,sp(d,p).then(function(x){var b=jg(N(N({},k),{},{icons:{main:x,mask:Fg()},prefix:p,iconName:g,extra:C,watchable:!0})),V=ae.createElement("svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=b.map(function(W){return Ha(W)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function JM(t){return Promise.all([e1(t,"::before"),e1(t,"::after")])}function ZM(t){return t.parentNode!==document.head&&!~BL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function t1(t){if(Un)return new Promise(function(e,n){var r=Os(t.querySelectorAll("*")).filter(ZM).map(JM),i=Bg.begin("searchPseudoElements");$S(),Promise.all(r).then(function(){i(),ap(),e()}).catch(function(){i(),ap(),n()})})}var e4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=t1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ae:r;L.searchPseudoElements&&t1(i)}}},n1=!1,t4={mixout:function(){return{dom:{unwatch:function(){$S(),n1=!0}}}},hooks:function(){return{bootstrap:function(){Y0(np("mutationObserverCallbacks",{}))},noAuto:function(){UM()},watch:function(n){var r=n.observeMutationsRoot;n1?ap():Y0(np("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},r1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},n4={mixout:function(){return{parse:{transform:function(n){return r1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=r1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:N({},p.outer),children:[{tag:"g",attributes:N({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),p.path)}]}]}}}},vf={x:0,y:0,width:"100%",height:"100%"};function i1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function r4(t){return t.tag==="g"?t.children:[t]}var i4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?uh(i.split(" ").map(function(o){return o.trim()})):Fg();return s.prefix||(s.prefix=Ar()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,f=o.icon,p=nM({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:N(N({},vf),{},{fill:"white"})},v=c.children?{children:c.children.map(i1)}:{},A={tag:"g",attributes:N({},p.inner),children:[i1(N({tag:c.tag,attributes:N(N({},c.attributes),p.path)},v))]},m={tag:"g",attributes:N({},p.outer),children:[A]},d="mask-".concat(a||la()),g="clip-".concat(a||la()),w={tag:"mask",attributes:N(N({},vf),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:r4(f)},w]};return r.push(k,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},vf)}),{children:r,attributes:i}}}},s4={provides:function(e){var n=!1;wr.matchMedia&&(n=wr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:N(N({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},o4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},a4=[sM,GM,KM,qM,QM,e4,t4,n4,i4,s4,o4];AM(a4,{mixoutsTo:xt});xt.noAuto;xt.config;xt.library;xt.dom;var lp=xt.parse;xt.findIconDefinition;xt.toHtml;var l4=xt.icon;xt.layer;xt.text;xt.counter;var jS={exports:{}},u4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",c4=u4,h4=c4;function BS(){}function zS(){}zS.resetWarningCache=BS;var f4=function(){function t(r,i,s,o,a,l){if(l!==h4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:zS,resetWarningCache:BS};return n.PropTypes=n,n};jS.exports=f4();var d4=jS.exports;const K=m1(d4);function s1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?s1(Object(n),!0).forEach(function(r){zi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ic(t){"@babel/helpers - typeof";return ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ic(t)}function zi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function m4(t,e){if(t==null)return{};var n=p4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function up(t){return g4(t)||y4(t)||v4(t)||w4()}function g4(t){if(Array.isArray(t))return cp(t)}function y4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function v4(t,e){if(t){if(typeof t=="string")return cp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cp(t,e)}}function cp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,f=t.fixedWidth,p=t.inverse,y=t.border,v=t.listItem,A=t.flip,m=t.size,d=t.rotation,g=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":p,"fa-border":y,"fa-li":v,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},zi(e,"fa-".concat(m),typeof m<"u"&&m!==null),zi(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),zi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),zi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function E4(t){return t=t-0,t===t}function VS(t){return E4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var _4=["style"];function k4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function S4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=VS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[k4(i)]=s:e[i]=s,e},{})}function HS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return HS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=S4(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[VS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=m4(n,_4);return i.attrs.style=Zn(Zn({},i.attrs.style),o),t.apply(void 0,[e.tag,Zn(Zn({},i.attrs),a)].concat(up(r)))}var WS=!1;try{WS=!0}catch{}function I4(){if(!WS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function o1(t){if(t&&ic(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(lp.icon)return lp.icon(t);if(t===null)return null;if(t&&ic(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function wf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?zi({},t,e):{}}var Wa=wp.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=o1(n),c=wf("classes",[].concat(up(A4(t)),up(s.split(" ")))),h=wf("transform",typeof t.transform=="string"?lp.transform(t.transform):t.transform),f=wf("mask",o1(r)),p=l4(u,Zn(Zn(Zn(Zn({},c),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return I4("Could not find icon",u),null;var y=p.abstract,v={ref:e};return Object.keys(t).forEach(function(A){Wa.defaultProps.hasOwnProperty(A)||(v[A]=t[A])}),T4(y[0],v)});Wa.displayName="FontAwesomeIcon";Wa.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};Wa.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var T4=HS.bind(null,wp.createElement),C4={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};const x4=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(null),[i,s]=I.useState(!1),{currentUser:o}=I.useContext(xr),a=async()=>{const c=wL(iL(wt,"users"),AL("displayName","==",t));try{(await TL(c)).forEach(f=>{r(f.data())})}catch{s(!0)}},l=c=>{c.code==="Enter"&&a()},u=async()=>{const c=o.uid>n.uid?o.uid+n.uid:n.uid+o.uid;try{(await IL(Ot(wt,"chats",c))).exists()||(await Yd(Ot(wt,"chats",c),{messages:[]}),await Fi(Ot(wt,"userChats",o.uid),{[c+".userInfo"]:{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL},[c+".date"]:ec()}),await Fi(Ot(wt,"userChats",n.uid),{[c+".userInfo"]:{uid:o.uid,displayName:o.displayName,photoURL:o.photoURL},[c+".date"]:ec()}))}catch{}r(null),e("")};return _.jsxs("div",{className:"search",children:[_.jsxs("div",{className:"searchForm",children:[_.jsx("input",{type:"text",placeholder:"Find A Friend",onKeyDown:l,onChange:c=>e(c.target.value),value:t}),_.jsx("button",{className:"searchbtn",onClick:a,children:_.jsx(Wa,{icon:C4})})]}),i&&_.jsx("span",{children:"User not found!"}),n&&_.jsxs("div",{className:"userChat",onClick:u,children:[_.jsx("img",{src:n.photoURL,alt:""}),_.jsx("div",{className:"userChatInfo",children:_.jsx("span",{children:n.displayName})})]})]})},Ga=I.createContext(),R4=({children:t})=>{const{currentUser:e}=I.useContext(xr),n={chatId:"null",user:{}},r=(o,a)=>{switch(a.type){case"CHANGE_USER":return{user:a.payload,chatId:e.uid>a.payload.uid?e.uid+a.payload.uid:a.payload.uid+e.uid};default:return o}},[i,s]=I.useReducer(r,n);return _.jsx(Ga.Provider,{value:{data:i,dispatch:s},children:t})},b4=()=>{var o;const[t,e]=I.useState([]),{currentUser:n}=I.useContext(xr),{dispatch:r}=I.useContext(Ga),i=a=>{r({type:"CHANGE_USER",payload:a})};I.useEffect(()=>{const a=()=>uS(Ot(wt,"userChats",n.uid),u=>{e(u.data())});if(n.uid)return a()},[n.uid]);const s=()=>{const a=document.querySelector(".sidebar"),l=document.querySelector(".chat");a&&(a.style.display="none"),l&&(l.style.display="block")};return _.jsx("div",{className:"chats",children:(o=Object.entries(t))==null?void 0:o.sort((a,l)=>l[1].date-a[1].date).map(a=>{var l;return _.jsxs("div",{className:"userChat",onClick:()=>{i(a[1].userInfo),s()},children:[_.jsx("img",{src:a[1].userInfo.photoURL,alt:""}),_.jsxs("div",{className:"userChatInfo",children:[_.jsx("span",{children:a[1].userInfo.displayName}),_.jsx("p",{children:(l=a[1].lastMessage)==null?void 0:l.text})]})]},a[0])})})},N4=()=>_.jsxs("div",{className:"sidebar ",children:[_.jsx(RL,{}),_.jsx(x4,{}),_.jsx(b4,{})]}),P4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAADeNJREFUeJzt2jnMtWtVBuAFQpCIJCKFooVgTBwwFg4kFE4kFqKGwsIROmSMnSPoKnEgWlg425g4NybiVJiIx0ZFbRS1ULRANEFMwAiBo6/bswOEM/zDs9f6nnddV3L3+13Jk/vOly8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjII2/p/hEAQJ088j+P5aeOPK311wAAN5fx0fK/5qePPL3xNwEAN5TxieV/zS8feUbbLwMAbiLjicv/ml898sym3wcALJbx1OV/zW8feVbLrwQAlsm49/K/5m1Hnt3wWwGABTLuv/yv+aMjzyn/xQDAQ8l48PK/5u1Hnlv8uwGAB5Tx8OV/zZ8deV7prwcA7lvGuvK/5h1Hnl/4DQDAfchYX/7X/M2RF5R9CQBwTzJuV/7XvPPIZxd9DwDwFDJuX/7X/OORF5V8FQDwhDLqyv+adx35vIJvAwAeR0Z9+V/z7iMvvvkXAgAfJ6Ov/K95z5EvufF3AgCPyegv/2vee+QlN/1aAOBOlf817zvy0ht+MwCMltFf9k+U9x952c2+HACGyugv+afKB4583Y2+HwDGyegv93vNB4+84iZXAIBBMvpL/X7zoSPffINbAMAIGf1l/qD58JFXLb8IAJxcRn+JP2wePfL6xXcBgNPK6C/vlSPgu5deBwBOKKO/tG+RNy28EQCcSkZ/Ud8yb1l2KQA4iYz+gjYCAKBQRn8xV+atS64GABvL6C/kyvzfPwW+ccXhAGBXGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/Iyh8ACmX0F7LyB4BCGf2FrPwBoFBGfyErfwAolNFfyMofAApl9Bey8geAQhn9haz8AaBQRn8hK38AKJTRX8jKHwAKZfQXsvIHgEIZ/YWs/AGgUEZ/ISt/ACiU0V/I1XnkyKtFRAKGyugvYxGRzsA4Gf0PT0SkOzBKRv+jExG5C4ExMvofnIjIXQmMkNH/2ERE7lLg9DL6H5qIyF0LnFpG/yMTEbmLgdPK6H9gIiJ3NXBKGf2PS0TkLgdOJ6P/YYmI3PXAqWT0PyoRkR0Cp5HR/6BERHYJnEJG/2MSEdkpsL2M/ockIrJbYGsZ/Y9IRGTHwLYy+h+QiMiugS1l9D8eEZGdA9vJ6H84IiK7B7aS0f9oRETOENhGRv+DERE5S2ALGf2PRUTkTIEtfG/0PxYRkTMFtmEEiIisC2zFCBARWRPYjhEgIvLwgS0ZASIiDxfYlhEgIvLgga0ZASIiDxbYnhEgInL/gVMwAkRE7i9wGkaAiMi9B07FCBARubfA6RgBIiJPHTglI0BE5MkDp2UEiIg8ceDUjAARkccPnJ4RICLyiYERjAARkY8PjGEEiIh8NDCKESAi8v+BcYwAEREYyggQkemBsTL6H2B1HjnyahGRgOGm/SXg0SNvWHI5ANjcxBHwuiWXA4DNGQEAMNTEEfDaJZcDgM1NHAGvWXI5ANjcxBHgP4IBIOaNgI8ceeWSywHA5qaNgA8f+c4llwOAzU0cAd+x5HIAsLmJI+Dbl1wOADY3cQR825LLAcDmJo6Ab11yOQDY3MQR8C1LLgcAm5s2Aj505BVLLgcAmzMCAGCoaSPgg0e+acnlAGBzRgAADDVxBHzjkssBwOYmjoBvWHI5ANjctBHw30devuRyALC5iSPg65dcDgA2N20E/NeRly25HABsbtoI+MCRr11yOQDY3MQR8DVLLgcAmzMCAGCoiSPgq1ccDgB2N20EvP/IVy25HABsbuII+MollwOAzU0bAf955CVLLgcAm5s2At4XRgAAXEwcAV+x5HIAsLmJI+DLl1wOADY3bQT8x5EvW3I5ANicEQAAQ00bAe898qVLLgcAm5s2Av79yBcvuRwAbG7aCPi3MAIA4GLiCHjxkssBwOamjYD3HPmiJZcDgM1NHAFfuORyALC5aSPgX8MIAICLiSPgC5ZcDgA2N20EvPvI5y+5HABsbtoI+Jcjn7vkcgCwuWkj4J/DCACAi4kj4EVLLgcAm5s2At515IVLLgcAmzMCAGCoaSPgn458zoK7AcD2jAAAGGraCPiHI5+15HIAsLlpI+DvwwgAgIuJI+AFSy4HAJubNgL+LowAALiYNgLeeeQzl1wOADY3cQR8xpLLAcDmpo2Avw0jAAAupo2Avz7y/CWXA4DNGQEAMNS0EfBXRz59yeUAYHPTRsBfhhEAABcTR8DzllwOADY3bQS8I4wAALiYNgL+4sinLbkcAGxu2gj48zACAOBi2gj40yPPXXI5ANjctBHwyJFPXXI5ANicEQAAQ00bAX8SRgAAXEwbAW8/8pwllwOAzU0bAX8cRgAAXEwcAZ+y5HIAsLlpI+APjzx7yeUAYHPTRsAfhBEAABfTRsDvH/nkJZcDgM1NGwG/F0YAAFxMGwG/G0YAAFxMGwFvO/KsJZcDgM0ZAQAw1LQR8DthBADAxbQR8FtHnrnkcgCwuWkj4DfDCACAi2kj4DeOPGPJ5QBgc9NGwK+HEQAAF9NGwK+FEQAAF0YAAAw1bQT8ypFPWnI5ANjctBHwS0eevuRyALC5aSPgF8MIAICLaSPgF8IIAICLaSPg58MIAICLaSPg58IIAICLaSPgZ488bcnlAGBz00bAz4QRAAAX00bAT4YRAAAX00bAT6w5GwDszwgAgKGmjYC3rjkbAOxv2gj48TVnA4D9TRsBP7bmbACwv2kj4EfXnA0A9jdtBPzImrMBwP6mjYAfWnM2ANjftBHw5jVnA4D9TRsBb1pzNgDY37QR8INrzgYA+5s2An5gzdkAYH/TRsD3rzkbAOxv2gj4vjVnA4D9TRsB37PmbACwv0kj4NEjb1xzNgDY37QR8IY1ZwOA/U0bAa9fczYA2N+0EfC6NWcDgP1NGwGvXXM2ANjftBHwmjVnA4D9TRsB37XmbACwv0kj4CNHXrXmbACwv2kj4JVrzgYA+8voL+eqvHnNyQDgHCb8JeCHl10LAE7kzCNA+QPAkzjjCFD+AHAPzjQClD8A3IczjADlDwAPYOcRoPwB4CHsOAKUPwAssNMIUP4AsNAOI0D5A8AN3OURoPwB4Ibu4ghQ/gBQ4C6NAOUPAIXuwghQ/gDQoHMEKH8AaNQxApQ/ANwBlSNA+QPAHVIxApQ/ANxBtxwByh8A7rBbjADlDwAbWDkClD8AbGTFCFD+ALChhxkByh8ANvYgI0D5A8AJ3M8IUP4AcCL3MgKUPwCc0JONAOUPACf2eCNA+QPAAB87ApQ/AAySjwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+F8RmrUfQW5S1gAAAABJRU5ErkJggg==",O4=({message:t})=>{const{currentUser:e}=I.useContext(xr),n=I.useRef();I.useEffect(()=>{var s;(s=n.current)==null||s.scrollIntoView({behavior:"smooth"})},[t]);const r=()=>{const s=new Date,o=s.getHours(),a=s.getMinutes(),l=o>=12?"PM":"AM",u=o%12===0?12:o%12,c=a<10?`0${a}`:a;return`${u}:${c} ${l}`},i=t.senderId===e.uid;return _.jsxs("div",{ref:n,className:`message ${i?"owner":""}`,style:{justifyContent:i?"flex-end":"flex-start"},children:[_.jsx("div",{className:"messageInfo"}),_.jsxs("div",{className:"messageContent",children:[t.text&&_.jsx("p",{children:t.text}),t.img&&_.jsx("img",{src:t.img,alt:""}),_.jsx("span",{children:r()})," "]})]})},D4=()=>{const[t,e]=I.useState([]),{data:n}=I.useContext(Ga);return I.useEffect(()=>{const r=uS(Ot(wt,"chats",n.chatId),i=>{i.exists()&&e(i.data().messages)});return()=>{r()}},[n.chatId]),console.log(t),_.jsx("div",{className:"messages",children:t.map(r=>_.jsx(O4,{message:r},r.id))})},L4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RAzQjvjAGAAAEuUlEQVRYw+2WbUyTVxTH/7cvdFiBOBCKqJCROlJETQQaUVpeu4mxH5ZCidkyUWOiuBmRaBRJIL4lhPnyZR/QxBpRtmqyhtWiRVeftsaAG0t0+AIuoqmausdMrUUstWcfNgh0ILBWlyX7f7p57rnn/s59zj33AP/rLxExZt9ZX2+PUan+FQAbpaVxHJH9w9bWd7mvYHiwSSwGACoSCP65u6mL2TMPH6bpS5dCHRmJAoWCrX72jJLv3MF3Ph9mb9+u9joc3O8FBdDv2wefSBTyjmWvX6OtszPQWl+fz3heBK9Kha8WLRqaJ0NMDLB4MW77/WSWyZAP4IlcjhqlMmxhp2dnC57qdDbKymJGo1CYmBgdjVqFIlDvdOKV1SqILC9/udHn01z3eofWOH+LiqJboZ8Aq4uKCijq6khXUYHPzpwZnuAqMzI4joirNJvDFuk46tZFRHArvV7upscznHDezT09rMHpZKoRVEEyGoXCjtTo6FAB0s/4fJjL83g8ffqkF3HGrVvtshcvOI6Ia+E4e+acOaFAcJX37nEc0agrd9GQlNSti4gINrZRURESGhtpkVgMpcuFWSoV7Tt6NNSTAEbUgYvZCQmitL4+vqip6W9G94uKAAD8li3u1pQUttXtRld+vo1CT8phB6Ks+Hi8EolwPS4u2IjVuly0FmCppaUyV2wsaePjoXC58pnfHzaAN2ng52PHJO+vX08b8/KAvDxI/H6WvG1bqJtPGkBz3eu98rFSOXhArydPQgJLb2tTJV679s4AAGDJg5cvoTcY3mRjNAqFCTXNzSx1yRKqKi5Wa3p7J/I7pYeHk+bm2mN27RrrphAxJnMcOYKj5eW0IzmZfWS1XjQkJYUNwLFLqWRRbW3Uuns3v/P06WAIR3FjI+kqKqB0uaA3mehSSorortV6wRAbGzKAjdLSApVmM30rlWIez8Oj1Y6E4A7U1FBtVRXm8Ty+1mik35eVQWCxoEChEPdbLDYav+JNCGCj2bMFm86fR09cHMkPHmQtCxbgi9u3hyA46+bNWLxnD37xeLCypERddfNmZtbgoDSytJQ1OJ1Iz84WfGoyWXokkikDtFtjYgRLzWaUzZ2LBadOqROrq1VVjx7531Or8cONG/BotZAcOoT9Ph9UOp36x6tXh9ZmZvb3S26tWIGfurqwvrBQ+sJoHKtwjQtwJSkyMuKBxYL9Cxcy07lz0jurVzMWCABAYafbzfY2NAAAJH6/4LFer86wWoN9KH99/tz/TUkJWG8vPFqt8MumJiLGJgUw+IlGgw9ycrC3o2Pggk6XmTU4OMpgVnU1OCK2bN263C6TaTw/hZ1udyBXo4HS5SJdRcUlpKdPCmDa5+3taFy7VlC7fPnIxmRIFL9mTaBWo1H5jx+fKI/yWV8fW5aTQ/2rVuWhu3tMo+GGxHH27EQOwyGu9f79Uc+xsO7Jkz9Dk8uJ3m5n7HDMmIEbMhnm8fxwVi6b+fAh12K3Y5ZKZX964sSlu83NlBL038MgQfO0aYHs6moExGIaaGkZlZGcVS5nB9rbaUdy8ts8AQDA3o4O4cniYhb8vSM1Onpgx4YNODR/Pps5dvEIReTxetmqy5dfbzEYwtFP/Pf1B63n8BCweUoHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTMxVDE3OjAzOjUyKzAwOjAwAqs7ggAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0zMVQxNzowMzo1MiswMDowMHP2gz4AAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMDgtMzFUMTc6MDM6NTIrMDA6MDAk46LhAAAAAElFTkSuQmCC",M4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RBhBiyiCSAAACDklEQVRYw+2XPUgbcRjGn0vtUj8mzRDBUSeXkkgbHCS4xWiV1FWQkqWEwkF7yQUUOoTGFheziDpEJzPce5JIN48YMgnRkg4NnbocItr6kaXX4e2QEEqwekkuXXrP+D7Pvff7P8v/DrDVhPa809OU1DTyVCrkqVQoqWmqOxBoZ6dgNkiH8TguotFbzUg8PluOxVoBcJg9OS6iUQwZhvAxEuEXLpfj/eAgHkkShgwD72SZRqam2mni7tMnNY2IWQ1JUqOnhiSJiJlGDg461gBSHg8AGJOpVKNVn4lud+cA5O5uAJifPz1ttOozZ29v5wAaROFCgc7y+Vb9P9XVCgB8Xi8KbfjtNmClbAAbwAawAWyA1u6Ckq5j1OVSvo+PAwBytdk/a+DDzg4ACLl8XshVbz3hy/Z25wDObm4AIL3b0wMAvzaWlrCQSKCk6yjpOhYSCWNmeRkA9ry174LaM5aINo+PiZiJJybuyyorPh8RMz0pFq1rYDKbBQC8EcV7F55UM0Iok7GsAWXF6aT162siZtUny3/NlWKxalOXl5nH/f1mdpv+L1APg0HeTKcxKwh4ms065lZXf746OgKArm9jY44TUeTnfj+ImV8Hg3OjimIpQB3i7dYWXvb13Rp4dnXFnxcXzb68aQAASO8ODDxcD4eFT34/fx0eBgDkymXhx/7+g+TaWqB4ft7szv9bvwGBKNSBpuqWcAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0zMVQxNzowNjoxNiswMDowMJSH2i8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMzFUMTc6MDY6MTYrMDA6MDDl2mKTAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA4LTMxVDE3OjA2OjE2KzAwOjAwss9DTAAAAABJRU5ErkJggg==";let Dl;const U4=new Uint8Array(16);function $4(){if(!Dl&&(Dl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Dl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Dl(U4)}const $e=[];for(let t=0;t<256;++t)$e.push((t+256).toString(16).slice(1));function F4(t,e=0){return($e[t[e+0]]+$e[t[e+1]]+$e[t[e+2]]+$e[t[e+3]]+"-"+$e[t[e+4]]+$e[t[e+5]]+"-"+$e[t[e+6]]+$e[t[e+7]]+"-"+$e[t[e+8]]+$e[t[e+9]]+"-"+$e[t[e+10]]+$e[t[e+11]]+$e[t[e+12]]+$e[t[e+13]]+$e[t[e+14]]+$e[t[e+15]]).toLowerCase()}const j4=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),a1={randomUUID:j4};function Af(t,e,n){if(a1.randomUUID&&!e&&!t)return a1.randomUUID();t=t||{};const r=t.random||(t.rng||$4)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return F4(r)}const B4=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(null),{currentUser:i}=I.useContext(xr),{data:s}=I.useContext(Ga),o=async()=>{if(n){const a=HE(fS,Af()),l=zE(a,n);l.on(u=>{},()=>{VE(l.snapshot.ref).then(async u=>{await Fi(Ot(wt,"chats",s.chatId),{messages:O0({id:Af(),text:t,senderId:i.uid,date:ke.now(),img:u})})})})}else await Fi(Ot(wt,"chats",s.chatId),{messages:O0({id:Af(),text:t,senderId:i.uid,date:ke.now()})});await Fi(Ot(wt,"userChats",i.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:ec()}),await Fi(Ot(wt,"userChats",s.user.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:ec()}),e(""),r(null)};return _.jsxs("div",{className:"input",children:[_.jsx("textarea",{className:"textIN",style:{resize:"none"},type:"text",placeholder:"Type something...",onChange:a=>e(a.target.value),value:t}),_.jsxs("div",{className:"send",children:[_.jsx("img",{src:M4,alt:""}),_.jsx("input",{type:"file",style:{display:"none"},id:"file",onChange:a=>r(a.target.files[0])}),_.jsx("label",{htmlFor:"file",children:_.jsx("img",{src:L4,alt:""})}),_.jsx("button",{onClick:o,children:"Send"})]})]})},z4=()=>{var n;const{data:t}=I.useContext(Ga),e=()=>{const r=document.querySelector(".sidebar"),i=document.querySelector(".chat");r&&(r.style.display="block"),i&&(i.style.display="none")};return _.jsx("div",{className:"chat",children:_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"chatInfo",children:[_.jsx("img",{src:P4,alt:"",onClick:e}),_.jsx("span",{children:(n=t.user)==null?void 0:n.displayName}),_.jsx("div",{className:"navbar",children:_.jsx("button",{className:"out",onClick:()=>hE(Ba),children:"Logout"})})]}),_.jsx(D4,{}),_.jsx(B4,{})]})})},V4=()=>_.jsx("div",{className:"home",children:_.jsxs("div",{className:"container",children:[_.jsx(N4,{}),_.jsx(z4,{})]})});/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ua.apply(this,arguments)}var er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(er||(er={}));const l1="popstate";function H4(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=vi(i.location.hash.substr(1));return hp("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:sc(s))}function r(i,s){hh(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return G4(e,n,r,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function W4(){return Math.random().toString(36).substr(2,8)}function u1(t,e){return{usr:t.state,key:t.key,idx:e}}function hp(t,e,n,r){return n===void 0&&(n=null),ua({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vi(e):e,{state:n,key:e&&e.key||r||W4()})}function sc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function G4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=er.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ua({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=er.Pop;let A=c(),m=A==null?null:A-u;u=A,l&&l({action:a,location:v.location,delta:m})}function f(A,m){a=er.Push;let d=hp(v.location,A,m);n&&n(d,A),u=c()+1;let g=u1(d,u),w=v.createHref(d);try{o.pushState(g,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function p(A,m){a=er.Replace;let d=hp(v.location,A,m);n&&n(d,A),u=c();let g=u1(d,u),w=v.createHref(d);o.replaceState(g,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(A){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof A=="string"?A:sc(A);return Se(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return a},get location(){return t(i,o)},listen(A){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(l1,h),l=A,()=>{i.removeEventListener(l1,h),l=null}},createHref(A){return e(i,A)},createURL:y,encodeLocation(A){let m=y(A);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(A){return o.go(A)}};return v}var c1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(c1||(c1={}));function K4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vi(e):e,i=Vg(r.pathname||"/",n);if(i==null)return null;let s=GS(t);q4(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=rU(s[a],oU(i));return o}function GS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=fr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),GS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:tU(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of KS(s.path))i(s,o,l)}),e}function KS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=KS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function q4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nU(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Q4=/^:\w+$/,Y4=3,X4=2,J4=1,Z4=10,eU=-2,h1=t=>t==="*";function tU(t,e){let n=t.split("/"),r=n.length;return n.some(h1)&&(r+=eU),e&&(r+=X4),n.filter(i=>!h1(i)).reduce((i,s)=>i+(Q4.test(s)?Y4:s===""?J4:Z4),r)}function nU(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rU(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=iU({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:fr([i,c.pathname]),pathnameBase:cU(fr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=fr([i,c.pathnameBase]))}return s}function iU(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sU(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=aU(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function sU(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function oU(t){try{return decodeURI(t)}catch(e){return hh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function aU(t,e){try{return decodeURIComponent(t)}catch(n){return hh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Vg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function lU(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vi(t):t;return{pathname:n?n.startsWith("/")?n:uU(n,e):e,search:hU(r),hash:fU(i)}}function uU(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ef(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Wg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vi(t):(i=ua({},t),Se(!i.pathname||!i.pathname.includes("?"),Ef("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Ef("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Ef("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=lU(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const fr=t=>t.join("/").replace(/\/\/+/g,"/"),cU=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hU=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fU=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function dU(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qS=["post","put","patch","delete"];new Set(qS);const pU=["get",...qS];new Set(pU);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oc.apply(this,arguments)}const Gg=I.createContext(null),mU=I.createContext(null),Ds=I.createContext(null),fh=I.createContext(null),Rr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),QS=I.createContext(null);function gU(t,e){let{relative:n}=e===void 0?{}:e;Ls()||Se(!1);let{basename:r,navigator:i}=I.useContext(Ds),{hash:s,pathname:o,search:a}=XS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:fr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ls(){return I.useContext(fh)!=null}function Ka(){return Ls()||Se(!1),I.useContext(fh).location}function YS(t){I.useContext(Ds).static||I.useLayoutEffect(t)}function dh(){let{isDataRoute:t}=I.useContext(Rr);return t?RU():yU()}function yU(){Ls()||Se(!1);let t=I.useContext(Gg),{basename:e,navigator:n}=I.useContext(Ds),{matches:r}=I.useContext(Rr),{pathname:i}=Ka(),s=JSON.stringify(Hg(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return YS(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Wg(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:fr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function XS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(Rr),{pathname:i}=Ka(),s=JSON.stringify(Hg(r).map(o=>o.pathnameBase));return I.useMemo(()=>Wg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function vU(t,e){return wU(t,e)}function wU(t,e,n){Ls()||Se(!1);let{navigator:r}=I.useContext(Ds),{matches:i}=I.useContext(Rr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ka(),u;if(e){var c;let v=typeof e=="string"?vi(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Se(!1),u=v}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",p=K4(t,{pathname:f}),y=SU(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:fr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:fr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?I.createElement(fh.Provider,{value:{location:oc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:er.Pop}},y):y}function AU(){let t=xU(),e=dU(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const EU=I.createElement(AU,null);class _U extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Rr.Provider,{value:this.props.routeContext},I.createElement(QS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kU(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Gg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Rr.Provider,{value:e},r)}function SU(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Se(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||EU);let f=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.Component?y=I.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,I.createElement(kU,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(_U,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var fp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(fp||(fp={}));var ca;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ca||(ca={}));function IU(t){let e=I.useContext(Gg);return e||Se(!1),e}function TU(t){let e=I.useContext(mU);return e||Se(!1),e}function CU(t){let e=I.useContext(Rr);return e||Se(!1),e}function JS(t){let e=CU(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function xU(){var t;let e=I.useContext(QS),n=TU(ca.UseRouteError),r=JS(ca.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function RU(){let{router:t}=IU(fp.UseNavigateStable),e=JS(ca.UseNavigateStable),n=I.useRef(!1);return YS(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oc({fromRouteId:e},s)))},[t,e])}function bU(t){let{to:e,replace:n,state:r,relative:i}=t;Ls()||Se(!1);let{matches:s}=I.useContext(Rr),{pathname:o}=Ka(),a=dh(),l=Wg(e,Hg(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function ao(t){Se(!1)}function NU(t){let{basename:e="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:o=!1}=t;Ls()&&Se(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=vi(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:p="default"}=r,y=I.useMemo(()=>{let v=Vg(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:f,key:p},navigationType:i}},[a,u,c,h,f,p,i]);return y==null?null:I.createElement(Ds.Provider,{value:l},I.createElement(fh.Provider,{children:n,value:y}))}function PU(t){let{children:e,location:n}=t;return vU(dp(e),n)}var f1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(f1||(f1={}));new Promise(()=>{});function dp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,dp(r.props.children,s));return}r.type!==ao&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pp(){return pp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pp.apply(this,arguments)}function OU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DU(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function LU(t,e){return t.button===0&&(!e||e==="_self")&&!DU(t)}const MU=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function UU(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=H4({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location});return I.useLayoutEffect(()=>s.listen(a),[s]),I.createElement(NU,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const $U=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FU=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ZS=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=OU(e,MU),{basename:f}=I.useContext(Ds),p,y=!1;if(typeof u=="string"&&FU.test(u)&&(p=u,$U))try{let d=new URL(window.location.href),g=u.startsWith("//")?new URL(d.protocol+u):new URL(u),w=Vg(g.pathname,f);g.origin===d.origin&&w!=null?u=w+g.search+g.hash:y=!0}catch{}let v=gU(u,{relative:i}),A=jU(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(d){r&&r(d),d.defaultPrevented||A(d)}return I.createElement("a",pp({},h,{href:p||v,onClick:y||s?r:m,ref:n,target:l}))});var d1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(d1||(d1={}));var p1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(p1||(p1={}));function jU(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=dh(),l=Ka(),u=XS(t,{relative:o});return I.useCallback(c=>{if(LU(c,n)){c.preventDefault();let h=r!==void 0?r:sc(l)===sc(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const BU=()=>{const[t,e]=I.useState(!1),n=dh(),r=async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value;try{await Vx(Ba,s,o),n("/")}catch{e(!0)}};return _.jsx(_.Fragment,{children:_.jsx("div",{className:"formContainer",children:_.jsxs("div",{className:"formWrapper",children:[_.jsx("span",{className:"logo",children:"Chat App"}),_.jsx("span",{className:"title",children:"Made By Nilesh"}),_.jsxs("form",{onSubmit:r,children:[_.jsx("input",{type:"email",placeholder:"email"}),_.jsx("input",{type:"password",placeholder:"password"}),_.jsx("button",{type:"submit",children:"Login"}),t&&_.jsx("span",{children:"Something went wrong"})]}),_.jsxs("p",{children:["You don't have an account? ",_.jsx(ZS,{to:"/register",children:"Register"})]})]})})})},zU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFsSURBVEiJtdS/SlxREAbwX9SFgMJqkzILKUR2E7Q0RUi6QAoJIhj0BewsbbdMniFNmghiZZUmEAhr4gNI+n0B/4AgLAYt7qzurvfu9ej6wTBzz5nzzZm5c4ZHxpMeu4aPeHoPnnPsoV3kUMMJLh8gx8HTh7HQy6iiEVmlSgPTwZMboBr638D+B2ziWVHqA+eqgxsTQw6t4XvYG6jLSpGEsSF7iz32HGZSycsCbOMs7F0cjTrAAV5gAauxNoWvWEoN1FRe30n8Cr8L2T/qxWXw9KEog7chXUzhB97F9zi+YaXkUtdousngPTohK0H+W/7j6oR/UgavUQnZxh+8KbhYJfzhv6x0fRj2DroEr0p8uljH39QAKdjJWxzWpqk4dLuzcjNo4UsCcSt0A7NFAU5D1/EzZKSoyeb5Xeb+BT7FucMyn24GbczL+r5sNHdkrQuf8TLsLezLStbrMzIkjYr7IPehjRKreP6YAXJxBVeYYBm8+2PGAAAAAElFTkSuQmCC",VU=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(!1),i=dh(),s=async o=>{r(!0),o.preventDefault();const a=o.target[0].value,l=o.target[1].value,u=o.target[2].value,c=o.target[3].files[0];try{const h=await zx(Ba,l,u),f=new Date().getTime(),p=HE(fS,`${a+f}`);await zE(p,c).then(()=>{VE(p).then(async y=>{try{await Wx(h.user,{displayName:a,photoURL:y}),await Yd(Ot(wt,"users",h.user.uid),{uid:h.user.uid,displayName:a,email:l,photoURL:y}),await Yd(Ot(wt,"userChats",h.user.uid),{}),i("/")}catch(v){console.log(v),e(!0),r(!1)}})})}catch{e(!0),r(!1)}};return _.jsx("div",{className:"formContainer",children:_.jsxs("div",{className:"formWrapper",children:[_.jsx("span",{className:"logo",children:"Chat App"}),_.jsx("span",{className:"title",children:"Register"}),_.jsxs("form",{onSubmit:s,children:[_.jsx("input",{required:!0,type:"text",placeholder:"display name"}),_.jsx("input",{required:!0,type:"email",placeholder:"email"}),_.jsx("input",{required:!0,type:"password",placeholder:"password"}),_.jsx("input",{required:!0,style:{display:"none"},type:"file",id:"file"}),_.jsxs("label",{htmlFor:"file",children:[_.jsx("img",{src:zU,alt:""}),_.jsx("span",{children:"Add an avatar"})]}),_.jsx("button",{disabled:n,children:"Sign up"}),n&&"Uploading and compressing the image please wait...",t&&_.jsx("span",{children:"Something went wrong"})]}),_.jsxs("p",{children:["You do have an account? ",_.jsx(ZS,{to:"/register",children:"Login"})]})]})})};function HU(){const{currentUser:t}=I.useContext(xr),e=({children:n})=>t?n:_.jsx(bU,{to:"/login"});return _.jsx(UU,{children:_.jsx(PU,{children:_.jsxs(ao,{path:"/",children:[_.jsx(ao,{index:!0,element:_.jsx(e,{children:_.jsx(V4,{})})}),_.jsx(ao,{path:"login",element:_.jsx(BU,{})}),_.jsx(ao,{path:"register",element:_.jsx(VU,{})})]})})})}const WU=_f.createRoot(document.getElementById("root"));WU.render(_.jsx(xL,{children:_.jsx(R4,{children:_.jsx(wp.StrictMode,{children:_.jsx(HU,{})})})}));
