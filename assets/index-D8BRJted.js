function cp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function fp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qc={exports:{}},Oi={},bc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),dp=Symbol.for("react.portal"),pp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),wp=Symbol.for("react.suspense"),Sp=Symbol.for("react.memo"),xp=Symbol.for("react.lazy"),vu=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tf=Object.assign,nf={};function tr(e,t,n){this.props=e,this.context=t,this.refs=nf,this.updater=n||ef}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rf(){}rf.prototype=tr.prototype;function la(e,t,n){this.props=e,this.context=t,this.refs=nf,this.updater=n||ef}var sa=la.prototype=new rf;sa.constructor=la;tf(sa,tr.prototype);sa.isPureReactComponent=!0;var wu=Array.isArray,of=Object.prototype.hasOwnProperty,aa={current:null},lf={key:!0,ref:!0,__self:!0,__source:!0};function sf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)of.call(t,r)&&!lf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:eo,type:e,key:i,ref:l,props:o,_owner:aa.current}}function Ep(e,t){return{$$typeof:eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===eo}function Cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Su=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cp(""+e.key):t.toString(36)}function Io(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case eo:case dp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+kl(l,0):r,wu(o)?(n="",e!=null&&(n=e.replace(Su,"$&/")+"/"),Io(o,t,n,"",function(c){return c})):o!=null&&(ua(o)&&(o=Ep(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Su,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",wu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+kl(i,s);l+=Io(i,t,n,a,o)}else if(a=kp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+kl(i,s++),l+=Io(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function co(e,t,n){if(e==null)return e;var r=[],o=0;return Io(e,r,"","",function(i){return t.call(n,i,o++)}),r}function _p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Lo={transition:null},$p={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:aa};function af(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=tr;L.Fragment=pp;L.Profiler=hp;L.PureComponent=la;L.StrictMode=mp;L.Suspense=wp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;L.act=af;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tf({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=aa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)of.call(t,a)&&!lf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:eo,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yp,_context:e},e.Consumer=e};L.createElement=sf;L.createFactory=function(e){var t=sf.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:vp,render:e}};L.isValidElement=ua;L.lazy=function(e){return{$$typeof:xp,_payload:{_status:-1,_result:e},_init:_p}};L.memo=function(e,t){return{$$typeof:Sp,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=t}};L.unstable_act=af;L.useCallback=function(e,t){return Ee.current.useCallback(e,t)};L.useContext=function(e){return Ee.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};L.useEffect=function(e,t){return Ee.current.useEffect(e,t)};L.useId=function(){return Ee.current.useId()};L.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Ee.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};L.useRef=function(e){return Ee.current.useRef(e)};L.useState=function(e){return Ee.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Ee.current.useTransition()};L.version="18.3.1";bc.exports=L;var R=bc.exports;const Ne=fp(R),xu=cp({__proto__:null,default:Ne},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=R,Np=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),zp=Object.prototype.hasOwnProperty,Tp=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rp={key:!0,ref:!0,__self:!0,__source:!0};function uf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)zp.call(t,r)&&!Rp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Np,type:e,key:i,ref:l,props:o,_owner:Tp.current}}Oi.Fragment=Op;Oi.jsx=uf;Oi.jsxs=uf;qc.exports=Oi;var F=qc.exports,es={},cf={exports:{}},Be={},ff={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var z=_.length;_.push(O);e:for(;0<z;){var W=z-1>>>1,H=_[W];if(0<o(H,O))_[W]=O,_[z]=H,z=W;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],z=_.pop();if(z!==O){_[0]=z;e:for(var W=0,H=_.length,en=H>>>1;W<en;){var qe=2*(W+1)-1,Nt=_[qe],Le=qe+1,yt=_[Le];if(0>o(Nt,z))Le<H&&0>o(yt,Nt)?(_[W]=yt,_[Le]=z,W=Le):(_[W]=Nt,_[qe]=z,W=qe);else if(Le<H&&0>o(yt,z))_[W]=yt,_[Le]=z,W=Le;else break e}}return O}function o(_,O){var z=_.sortIndex-O.sortIndex;return z!==0?z:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],h=1,p=null,m=3,v=!1,w=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=_)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function g(_){if(y=!1,d(_),!w)if(n(a)!==null)w=!0,lr(x);else{var O=n(c);O!==null&&bt(g,O.startTime-_)}}function x(_,O){w=!1,y&&(y=!1,f(N),N=-1),v=!0;var z=m;try{for(d(O),p=n(a);p!==null&&(!(p.expirationTime>O)||_&&!Ie());){var W=p.callback;if(typeof W=="function"){p.callback=null,m=p.priorityLevel;var H=W(p.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?p.callback=H:p===n(a)&&r(a),d(O)}else r(a);p=n(a)}if(p!==null)var en=!0;else{var qe=n(c);qe!==null&&bt(g,qe.startTime-O),en=!1}return en}finally{p=null,m=z,v=!1}}var k=!1,S=null,N=-1,Y=5,I=-1;function Ie(){return!(e.unstable_now()-I<Y)}function Jt(){if(S!==null){var _=e.unstable_now();I=_;var O=!0;try{O=S(!0,_)}finally{O?qt():(k=!1,S=null)}}else k=!1}var qt;if(typeof u=="function")qt=function(){u(Jt)};else if(typeof MessageChannel<"u"){var ao=new MessageChannel,Sl=ao.port2;ao.port1.onmessage=Jt,qt=function(){Sl.postMessage(null)}}else qt=function(){P(Jt,0)};function lr(_){S=_,k||(k=!0,qt())}function bt(_,O){N=P(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,lr(x))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var z=m;m=O;try{return _()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var z=m;m=_;try{return O()}finally{m=z}},e.unstable_scheduleCallback=function(_,O,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,_){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=z+H,_={id:h++,callback:O,priorityLevel:_,startTime:z,expirationTime:H,sortIndex:-1},z>W?(_.sortIndex=z,t(c,_),n(a)===null&&_===n(c)&&(y?(f(N),N=-1):y=!0,bt(g,z-W))):(_.sortIndex=H,t(a,_),w||v||(w=!0,lr(x))),_},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(_){var O=m;return function(){var z=m;m=O;try{return _.apply(this,arguments)}finally{m=z}}}})(df);ff.exports=df;var Ip=ff.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=R,Ue=Ip;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf=new Set,Rr={};function vn(e,t){Vn(e,t),Vn(e+"Capture",t)}function Vn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)pf.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},Eu={};function Mp(e){return ts.call(Eu,e)?!0:ts.call(ku,e)?!1:jp.test(e)?Eu[e]=!0:(ku[e]=!0,!1)}function Dp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ap(e,t,n,r){if(t===null||typeof t>"u"||Dp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ca,fa);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ca,fa);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ca,fa);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ap(t,n,o,r)&&(n=null),r||o===null?Mp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),kn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),yf=Symbol.for("react.offscreen"),Cu=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,El;function gr(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Cl=!1;function _l(e,t){if(!e||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Fp(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case kn:return"Portal";case ns:return"Profiler";case pa:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hf:return(e.displayName||"Context")+".Consumer";case mf:return(e._context.displayName||"Context")+".Provider";case ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function Up(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bp(e){var t=gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=Bp(e))}function vf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wf(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function ss(e,t){wf(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(vr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function Sf(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mo,kf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vp=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){Vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Ef(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Cf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ef(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wp=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fs(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ms=null,Mn=null,Dn=null;function Ou(e){if(e=ro(e)){if(typeof ms!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Li(t),ms(e.stateNode,e.type,t))}}function _f(e){Mn?Dn?Dn.push(e):Dn=[e]:Mn=e}function $f(){if(Mn){var e=Mn,t=Dn;if(Dn=Mn=null,Ou(e),t)for(e=0;e<t.length;e++)Ou(t[e])}}function Pf(e,t){return e(t)}function Nf(){}var $l=!1;function Of(e,t,n){if($l)return e(t,n);$l=!0;try{return Pf(e,t,n)}finally{$l=!1,(Mn!==null||Dn!==null)&&(Nf(),$f())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Li(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var hs=!1;if(Et)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){hs=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{hs=!1}function Hp(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Er=!1,ei=null,ti=!1,ys=null,Yp={onError:function(e){Er=!0,ei=e}};function Qp(e,t,n,r,o,i,l,s,a){Er=!1,ei=null,Hp.apply(Yp,arguments)}function Xp(e,t,n,r,o,i,l,s,a){if(Qp.apply(this,arguments),Er){if(Er){var c=ei;Er=!1,ei=null}else throw Error(E(198));ti||(ti=!0,ys=c)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zu(e){if(wn(e)!==e)throw Error(E(188))}function Kp(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return zu(o),e;if(i===r)return zu(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Tf(e){return e=Kp(e),e!==null?Rf(e):null}function Rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rf(e);if(t!==null)return t;e=e.sibling}return null}var If=Ue.unstable_scheduleCallback,Tu=Ue.unstable_cancelCallback,Gp=Ue.unstable_shouldYield,Zp=Ue.unstable_requestPaint,te=Ue.unstable_now,Jp=Ue.unstable_getCurrentPriorityLevel,ga=Ue.unstable_ImmediatePriority,Lf=Ue.unstable_UserBlockingPriority,ni=Ue.unstable_NormalPriority,qp=Ue.unstable_LowPriority,jf=Ue.unstable_IdlePriority,zi=null,pt=null;function bp(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var ho=64,yo=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=wr(s):(i&=l,i!==0&&(r=wr(i)))}else l=n&~o,l!==0?r=wr(l):i!==0&&(r=wr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),o=1<<n,r|=e[n],t&=~o;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function om(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-rt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=rm(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mf(){var e=ho;return ho<<=1,!(ho&4194240)&&(ho=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function to(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Df(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,wa,Ff,Uf,Bf,vs=!1,go=[],At=null,Ft=null,Ut=null,jr=new Map,Mr=new Map,Lt=[],lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function cr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ro(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sm(e,t,n,r,o){switch(t){case"focusin":return At=cr(At,e,t,n,r,o),!0;case"dragenter":return Ft=cr(Ft,e,t,n,r,o),!0;case"mouseover":return Ut=cr(Ut,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return jr.set(i,cr(jr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Mr.set(i,cr(Mr.get(i)||null,e,t,n,r,o)),!0}return!1}function Vf(e){var t=on(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=zf(n),t!==null){e.blockedOn=t,Bf(e.priority,function(){Ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=ro(n),t!==null&&wa(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){jo(e)&&n.delete(t)}function am(){vs=!1,At!==null&&jo(At)&&(At=null),Ft!==null&&jo(Ft)&&(Ft=null),Ut!==null&&jo(Ut)&&(Ut=null),jr.forEach(Iu),Mr.forEach(Iu)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,am)))}function Dr(e){function t(o){return fr(o,e)}if(0<go.length){fr(go[0],e);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&fr(At,e),Ft!==null&&fr(Ft,e),Ut!==null&&fr(Ut,e),jr.forEach(t),Mr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&Lt.shift()}var An=Pt.ReactCurrentBatchConfig,oi=!0;function um(e,t,n,r){var o=U,i=An.transition;An.transition=null;try{U=1,Sa(e,t,n,r)}finally{U=o,An.transition=i}}function cm(e,t,n,r){var o=U,i=An.transition;An.transition=null;try{U=4,Sa(e,t,n,r)}finally{U=o,An.transition=i}}function Sa(e,t,n,r){if(oi){var o=ws(e,t,n,r);if(o===null)Dl(e,t,r,ii,n),Ru(e,r);else if(sm(o,e,t,n,r))r.stopPropagation();else if(Ru(e,r),t&4&&-1<lm.indexOf(e)){for(;o!==null;){var i=ro(o);if(i!==null&&Af(i),i=ws(e,t,n,r),i===null&&Dl(e,t,r,ii,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var ii=null;function ws(e,t,n,r){if(ii=null,e=ya(r),e=on(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Wf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jp()){case ga:return 1;case Lf:return 4;case ni:case qp:return 16;case jf:return 536870912;default:return 16}default:return 16}}var Mt=null,xa=null,Mo=null;function Hf(){if(Mo)return Mo;var e,t=xa,n=t.length,r,o="value"in Mt?Mt.value:Mt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Mo=o.slice(e,1<r?1-r:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function Lu(){return!1}function Ve(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vo:Lu,this.isPropagationStopped=Lu,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Ve(nr),no=b({},nr,{view:0,detail:0}),fm=Ve(no),Nl,Ol,dr,Ti=b({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(Nl=e.screenX-dr.screenX,Ol=e.screenY-dr.screenY):Ol=Nl=0,dr=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),ju=Ve(Ti),dm=b({},Ti,{dataTransfer:0}),pm=Ve(dm),mm=b({},no,{relatedTarget:0}),zl=Ve(mm),hm=b({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),ym=Ve(hm),gm=b({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vm=Ve(gm),wm=b({},nr,{data:0}),Mu=Ve(wm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function Ea(){return Em}var Cm=b({},no,{key:function(e){if(e.key){var t=Sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ea,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=Ve(Cm),$m=b({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=Ve($m),Pm=b({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ea}),Nm=Ve(Pm),Om=b({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=Ve(Om),Tm=b({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=Ve(Tm),Im=[9,13,27,32],Ca=Et&&"CompositionEvent"in window,Cr=null;Et&&"documentMode"in document&&(Cr=document.documentMode);var Lm=Et&&"TextEvent"in window&&!Cr,Yf=Et&&(!Ca||Cr&&8<Cr&&11>=Cr),Au=" ",Fu=!1;function Qf(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function jm(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(Fu=!0,Au);case"textInput":return e=t.data,e===Au&&Fu?null:e;default:return null}}function Mm(e,t){if(Cn)return e==="compositionend"||!Ca&&Qf(e,t)?(e=Hf(),Mo=xa=Mt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yf&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function Kf(e,t,n,r){_f(r),t=li(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Ar=null;function Am(e){id(e,0)}function Ri(e){var t=Pn(e);if(vf(t))return e}function Fm(e,t){if(e==="change")return t}var Gf=!1;if(Et){var Tl;if(Et){var Rl="oninput"in document;if(!Rl){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Rl=typeof Bu.oninput=="function"}Tl=Rl}else Tl=!1;Gf=Tl&&(!document.documentMode||9<document.documentMode)}function Vu(){_r&&(_r.detachEvent("onpropertychange",Zf),Ar=_r=null)}function Zf(e){if(e.propertyName==="value"&&Ri(Ar)){var t=[];Kf(t,Ar,e,ya(e)),Of(Am,t)}}function Um(e,t,n){e==="focusin"?(Vu(),_r=t,Ar=n,_r.attachEvent("onpropertychange",Zf)):e==="focusout"&&Vu()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Ar)}function Vm(e,t){if(e==="click")return Ri(t)}function Wm(e,t){if(e==="input"||e==="change")return Ri(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Hm;function Fr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ts.call(t,o)||!lt(e[o],t[o]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function Jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ym(e){var t=qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jf(n.ownerDocument.documentElement,n)){if(r!==null&&_a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Hu(n,i);var l=Hu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qm=Et&&"documentMode"in document&&11>=document.documentMode,_n=null,Ss=null,$r=null,xs=!1;function Yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xs||_n==null||_n!==bo(r)||(r=_n,"selectionStart"in r&&_a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Fr($r,r)||($r=r,r=li(Ss,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_n)))}function wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Il={},bf={};Et&&(bf=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Ii(e){if(Il[e])return Il[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bf)return Il[e]=t[n];return e}var ed=Ii("animationend"),td=Ii("animationiteration"),nd=Ii("animationstart"),rd=Ii("transitionend"),od=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){od.set(e,t),vn(t,[e])}for(var Ll=0;Ll<Qu.length;Ll++){var jl=Qu[Ll],Xm=jl.toLowerCase(),Km=jl[0].toUpperCase()+jl.slice(1);Kt(Xm,"on"+Km)}Kt(ed,"onAnimationEnd");Kt(td,"onAnimationIteration");Kt(nd,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(rd,"onTransitionEnd");Vn("onMouseEnter",["mouseout","mouseover"]);Vn("onMouseLeave",["mouseout","mouseover"]);Vn("onPointerEnter",["pointerout","pointerover"]);Vn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function Xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xp(r,t,void 0,e),e.currentTarget=null}function id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Xu(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Xu(o,s,c),i=a}}}if(ti)throw e=ys,ti=!1,ys=null,e}function X(e,t){var n=t[$s];n===void 0&&(n=t[$s]=new Set);var r=e+"__bubble";n.has(r)||(ld(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),ld(n,e,r,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[So]){e[So]=!0,pf.forEach(function(n){n!=="selectionchange"&&(Gm.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,Ml("selectionchange",!1,t))}}function ld(e,t,n,r){switch(Wf(t)){case 1:var o=um;break;case 4:o=cm;break;default:o=Sa}n=o.bind(null,t,n,e),o=void 0,!hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=on(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Of(function(){var c=i,h=ya(n),p=[];e:{var m=od.get(e);if(m!==void 0){var v=ka,w=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":v=_m;break;case"focusin":w="focus",v=zl;break;case"focusout":w="blur",v=zl;break;case"beforeblur":case"afterblur":v=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Nm;break;case ed:case td:case nd:v=ym;break;case rd:v=zm;break;case"scroll":v=fm;break;case"wheel":v=Rm;break;case"copy":case"cut":case"paste":v=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Du}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Lr(u,f),g!=null&&y.push(Br(u,g,d)))),P)break;u=u.return}0<y.length&&(m=new v(m,w,null,n,h),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ps&&(w=n.relatedTarget||n.fromElement)&&(on(w)||w[Ct]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?on(w):null,w!==null&&(P=wn(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(y=ju,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Du,g="onPointerLeave",f="onPointerEnter",u="pointer"),P=v==null?m:Pn(v),d=w==null?m:Pn(w),m=new y(g,u+"leave",v,n,h),m.target=P,m.relatedTarget=d,g=null,on(h)===c&&(y=new y(f,u+"enter",w,n,h),y.target=d,y.relatedTarget=P,g=y),P=g,v&&w)t:{for(y=v,f=w,u=0,d=y;d;d=Sn(d))u++;for(d=0,g=f;g;g=Sn(g))d++;for(;0<u-d;)y=Sn(y),u--;for(;0<d-u;)f=Sn(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Sn(y),f=Sn(f)}y=null}else y=null;v!==null&&Ku(p,m,v,y,!1),w!==null&&P!==null&&Ku(p,P,w,y,!0)}}e:{if(m=c?Pn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var x=Fm;else if(Uu(m))if(Gf)x=Wm;else{x=Bm;var k=Um}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=Vm);if(x&&(x=x(e,c))){Kf(p,x,n,h);break e}k&&k(e,m,c),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&as(m,"number",m.value)}switch(k=c?Pn(c):window,e){case"focusin":(Uu(k)||k.contentEditable==="true")&&(_n=k,Ss=c,$r=null);break;case"focusout":$r=Ss=_n=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,Yu(p,n,h);break;case"selectionchange":if(Qm)break;case"keydown":case"keyup":Yu(p,n,h)}var S;if(Ca)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Cn?Qf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Yf&&n.locale!=="ko"&&(Cn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Cn&&(S=Hf()):(Mt=h,xa="value"in Mt?Mt.value:Mt.textContent,Cn=!0)),k=li(c,N),0<k.length&&(N=new Mu(N,e,null,n,h),p.push({event:N,listeners:k}),S?N.data=S:(S=Xf(n),S!==null&&(N.data=S)))),(S=Lm?jm(e,n):Mm(e,n))&&(c=li(c,"onBeforeInput"),0<c.length&&(h=new Mu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=S))}id(p,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function li(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Lr(e,n),i!=null&&r.unshift(Br(e,i,o)),i=Lr(e,t),i!=null&&r.push(Br(e,i,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Lr(n,i),a!=null&&l.unshift(Br(n,a,s))):o||(a=Lr(n,i),a!=null&&l.push(Br(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zm=/\r\n?/g,Jm=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Zm,`
`).replace(Jm,"")}function xo(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(E(425))}function si(){}var ks=null,Es=null;function Cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _s=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,bm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(e1)}:_s;function e1(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Dr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),dt="__reactFiber$"+rr,Vr="__reactProps$"+rr,Ct="__reactContainer$"+rr,$s="__reactEvents$"+rr,t1="__reactListeners$"+rr,n1="__reactHandles$"+rr;function on(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[dt])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function ro(e){return e=e[dt]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Li(e){return e[Vr]||null}var Ps=[],Nn=-1;function Gt(e){return{current:e}}function G(e){0>Nn||(e.current=Ps[Nn],Ps[Nn]=null,Nn--)}function Q(e,t){Nn++,Ps[Nn]=e.current,e.current=t}var Xt={},Se=Gt(Xt),Oe=Gt(!1),pn=Xt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function ai(){G(Oe),G(Se)}function qu(e,t,n){if(Se.current!==Xt)throw Error(E(168));Q(Se,t),Q(Oe,n)}function sd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Up(e)||"Unknown",o));return b({},n,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,pn=Se.current,Q(Se,e),Q(Oe,Oe.current),!0}function bu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=sd(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,G(Oe),G(Se),Q(Se,e)):G(Oe),Q(Oe,n)}var wt=null,ji=!1,Fl=!1;function ad(e){wt===null?wt=[e]:wt.push(e)}function r1(e){ji=!0,ad(e)}function Zt(){if(!Fl&&wt!==null){Fl=!0;var e=0,t=U;try{var n=wt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,ji=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),If(ga,Zt),o}finally{U=t,Fl=!1}}return null}var On=[],zn=0,ci=null,fi=0,He=[],Ye=0,mn=null,St=1,xt="";function nn(e,t){On[zn++]=fi,On[zn++]=ci,ci=e,fi=t}function ud(e,t,n){He[Ye++]=St,He[Ye++]=xt,He[Ye++]=mn,mn=e;var r=St;e=xt;var o=32-rt(r)-1;r&=~(1<<o),n+=1;var i=32-rt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,St=1<<32-rt(t)+o|n<<o|r,xt=i+e}else St=1<<i|n<<o|r,xt=e}function $a(e){e.return!==null&&(nn(e,1),ud(e,1,0))}function Pa(e){for(;e===ci;)ci=On[--zn],On[zn]=null,fi=On[--zn],On[zn]=null;for(;e===mn;)mn=He[--Ye],He[Ye]=null,xt=He[--Ye],He[Ye]=null,St=He[--Ye],He[Ye]=null}var Ae=null,De=null,Z=!1,nt=null;function cd(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,De=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:St,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,De=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Os(e){if(Z){var t=De;if(t){var n=t;if(!ec(e,t)){if(Ns(e))throw Error(E(418));t=Bt(n.nextSibling);var r=Ae;t&&ec(e,t)?cd(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ae=e)}}else{if(Ns(e))throw Error(E(418));e.flags=e.flags&-4097|2,Z=!1,Ae=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function ko(e){if(e!==Ae)return!1;if(!Z)return tc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cs(e.type,e.memoizedProps)),t&&(t=De)){if(Ns(e))throw fd(),Error(E(418));for(;t;)cd(e,t),t=Bt(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Ae?Bt(e.stateNode.nextSibling):null;return!0}function fd(){for(var e=De;e;)e=Bt(e.nextSibling)}function Hn(){De=Ae=null,Z=!1}function Na(e){nt===null?nt=[e]:nt.push(e)}var o1=Pt.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function dd(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Yt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,g){return u===null||u.tag!==6?(u=Ql(d,f.mode,g),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,g){var x=d.type;return x===En?h(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Rt&&nc(x)===u.type)?(g=o(u,d.props),g.ref=pr(f,u,d),g.return=f,g):(g=Ho(d.type,d.key,d.props,null,f.mode,g),g.ref=pr(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Xl(d,f.mode,g),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,g,x){return u===null||u.tag!==7?(u=cn(d,f.mode,g,x),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ql(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case fo:return d=Ho(u.type,u.key,u.props,null,f.mode,d),d.ref=pr(f,null,u),d.return=f,d;case kn:return u=Xl(u,f.mode,d),u.return=f,u;case Rt:var g=u._init;return p(f,g(u._payload),d)}if(vr(u)||ar(u))return u=cn(u,f.mode,d,null),u.return=f,u;Eo(f,u)}return null}function m(f,u,d,g){var x=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:s(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case fo:return d.key===x?a(f,u,d,g):null;case kn:return d.key===x?c(f,u,d,g):null;case Rt:return x=d._init,m(f,u,x(d._payload),g)}if(vr(d)||ar(d))return x!==null?null:h(f,u,d,g,null);Eo(f,d)}return null}function v(f,u,d,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,s(u,f,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fo:return f=f.get(g.key===null?d:g.key)||null,a(u,f,g,x);case kn:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,x);case Rt:var k=g._init;return v(f,u,d,k(g._payload),x)}if(vr(g)||ar(g))return f=f.get(d)||null,h(u,f,g,x,null);Eo(u,g)}return null}function w(f,u,d,g){for(var x=null,k=null,S=u,N=u=0,Y=null;S!==null&&N<d.length;N++){S.index>N?(Y=S,S=null):Y=S.sibling;var I=m(f,S,d[N],g);if(I===null){S===null&&(S=Y);break}e&&S&&I.alternate===null&&t(f,S),u=i(I,u,N),k===null?x=I:k.sibling=I,k=I,S=Y}if(N===d.length)return n(f,S),Z&&nn(f,N),x;if(S===null){for(;N<d.length;N++)S=p(f,d[N],g),S!==null&&(u=i(S,u,N),k===null?x=S:k.sibling=S,k=S);return Z&&nn(f,N),x}for(S=r(f,S);N<d.length;N++)Y=v(S,f,N,d[N],g),Y!==null&&(e&&Y.alternate!==null&&S.delete(Y.key===null?N:Y.key),u=i(Y,u,N),k===null?x=Y:k.sibling=Y,k=Y);return e&&S.forEach(function(Ie){return t(f,Ie)}),Z&&nn(f,N),x}function y(f,u,d,g){var x=ar(d);if(typeof x!="function")throw Error(E(150));if(d=x.call(d),d==null)throw Error(E(151));for(var k=x=null,S=u,N=u=0,Y=null,I=d.next();S!==null&&!I.done;N++,I=d.next()){S.index>N?(Y=S,S=null):Y=S.sibling;var Ie=m(f,S,I.value,g);if(Ie===null){S===null&&(S=Y);break}e&&S&&Ie.alternate===null&&t(f,S),u=i(Ie,u,N),k===null?x=Ie:k.sibling=Ie,k=Ie,S=Y}if(I.done)return n(f,S),Z&&nn(f,N),x;if(S===null){for(;!I.done;N++,I=d.next())I=p(f,I.value,g),I!==null&&(u=i(I,u,N),k===null?x=I:k.sibling=I,k=I);return Z&&nn(f,N),x}for(S=r(f,S);!I.done;N++,I=d.next())I=v(S,f,N,I.value,g),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?N:I.key),u=i(I,u,N),k===null?x=I:k.sibling=I,k=I);return e&&S.forEach(function(Jt){return t(f,Jt)}),Z&&nn(f,N),x}function P(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===En&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case fo:e:{for(var x=d.key,k=u;k!==null;){if(k.key===x){if(x=d.type,x===En){if(k.tag===7){n(f,k.sibling),u=o(k,d.props.children),u.return=f,f=u;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Rt&&nc(x)===k.type){n(f,k.sibling),u=o(k,d.props),u.ref=pr(f,k,d),u.return=f,f=u;break e}n(f,k);break}else t(f,k);k=k.sibling}d.type===En?(u=cn(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=Ho(d.type,d.key,d.props,null,f.mode,g),g.ref=pr(f,u,d),g.return=f,f=g)}return l(f);case kn:e:{for(k=d.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Xl(d,f.mode,g),u.return=f,f=u}return l(f);case Rt:return k=d._init,P(f,u,k(d._payload),g)}if(vr(d))return w(f,u,d,g);if(ar(d))return y(f,u,d,g);Eo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Ql(d,f.mode,g),u.return=f,f=u),l(f)):n(f,u)}return P}var Yn=dd(!0),pd=dd(!1),di=Gt(null),pi=null,Tn=null,Oa=null;function za(){Oa=Tn=pi=null}function Ta(e){var t=di.current;G(di),e._currentValue=t}function zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){pi=e,Oa=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Oa!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(pi===null)throw Error(E(308));Tn=e,pi.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var ln=null;function Ra(e){ln===null?ln=[e]:ln.push(e)}function md(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ra(t)):(n.next=o.next,o.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_t(e,n)}return o=r.interleaved,o===null?(t.next=t,Ra(r)):(t.next=o.next,o.next=t),r.interleaved=t,_t(e,n)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}function rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,r){var o=e.updateQueue;It=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(i!==null){var p=o.baseState;l=0,h=c=a=null,s=i;do{var m=s.lane,v=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,y=s;switch(m=t,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=b({},p,m);break e;case 2:It=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=v,a=p):h=h.next=v,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(a=p),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yn|=l,e.lanes=l,e.memoizedState=p}}function oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var oo={},mt=Gt(oo),Wr=Gt(oo),Hr=Gt(oo);function sn(e){if(e===oo)throw Error(E(174));return e}function La(e,t){switch(Q(Hr,t),Q(Wr,e),Q(mt,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}G(mt),Q(mt,t)}function Qn(){G(mt),G(Wr),G(Hr)}function yd(e){sn(Hr.current);var t=sn(mt.current),n=cs(t,e.type);t!==n&&(Q(Wr,e),Q(mt,n))}function ja(e){Wr.current===e&&(G(mt),G(Wr))}var J=Gt(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Ma(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Fo=Pt.ReactCurrentDispatcher,Bl=Pt.ReactCurrentBatchConfig,hn=0,q=null,ie=null,ae=null,yi=!1,Pr=!1,Yr=0,i1=0;function ye(){throw Error(E(321))}function Da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,o,i){if(hn=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?u1:c1,e=n(r,o),Pr){i=0;do{if(Pr=!1,Yr=0,25<=i)throw Error(E(301));i+=1,ae=ie=null,t.updateQueue=null,Fo.current=f1,e=n(r,o)}while(Pr)}if(Fo.current=gi,t=ie!==null&&ie.next!==null,hn=0,ae=ie=q=null,yi=!1,t)throw Error(E(300));return e}function Fa(){var e=Yr!==0;return Yr=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=e:ae=ae.next=e,ae}function Ge(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?q.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(E(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?q.memoizedState=ae=e:ae=ae.next=e}return ae}function Qr(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var h=c.lane;if((hn&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=p,l=r):a=a.next=p,q.lanes|=h,yn|=h}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,lt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);lt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gd(){}function vd(e,t){var n=q,r=Ge(),o=t(),i=!lt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Ua(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Sd.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(E(349));hn&30||wd(n,t,o)}return o}function wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sd(e,t,n,r){t.value=n,t.getSnapshot=r,kd(t)&&Ed(e)}function xd(e,t,n){return n(function(){kd(t)&&Ed(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function Ed(e){var t=_t(e,1);t!==null&&ot(t,e,1,-1)}function ic(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=a1.bind(null,q,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cd(){return Ge().memoizedState}function Uo(e,t,n,r){var o=at();q.flags|=e,o.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function Mi(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Da(r,l.deps)){o.memoizedState=Xr(t,n,i,r);return}}q.flags|=e,o.memoizedState=Xr(1|t,n,i,r)}function lc(e,t){return Uo(8390656,8,e,t)}function Ua(e,t){return Mi(2048,8,e,t)}function _d(e,t){return Mi(4,2,e,t)}function $d(e,t){return Mi(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4,4,Pd.bind(null,t,e),n)}function Ba(){}function Od(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zd(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return hn&21?(lt(n,t)||(n=Mf(),q.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function l1(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{U=n,Bl.transition=r}}function Rd(){return Ge().memoizedState}function s1(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Id(e))Ld(t,n);else if(n=md(e,t,n,r),n!==null){var o=ke();ot(n,e,r,o),jd(n,t,r)}}function a1(e,t,n){var r=Ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Ld(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,lt(s,l)){var a=t.interleaved;a===null?(o.next=o,Ra(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=md(e,t,o,r),n!==null&&(o=ke(),ot(n,e,r,o),jd(n,t,r))}}function Id(e){var t=e.alternate;return e===q||t!==null&&t===q}function Ld(e,t){Pr=yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}var gi={readContext:Ke,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},u1={readContext:Ke,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4194308,4,Pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s1.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Ba,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=l1.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=at();if(Z){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ce===null)throw Error(E(349));hn&30||wd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,lc(xd.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,Sd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=at(),t=ce.identifierPrefix;if(Z){var n=xt,r=St;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},c1={readContext:Ke,useCallback:Od,useContext:Ke,useEffect:Ua,useImperativeHandle:Nd,useInsertionEffect:_d,useLayoutEffect:$d,useMemo:zd,useReducer:Vl,useRef:Cd,useState:function(){return Vl(Qr)},useDebugValue:Ba,useDeferredValue:function(e){var t=Ge();return Td(t,ie.memoizedState,e)},useTransition:function(){var e=Vl(Qr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:vd,useId:Rd,unstable_isNewReconciler:!1},f1={readContext:Ke,useCallback:Od,useContext:Ke,useEffect:Ua,useImperativeHandle:Nd,useInsertionEffect:_d,useLayoutEffect:$d,useMemo:zd,useReducer:Wl,useRef:Cd,useState:function(){return Wl(Qr)},useDebugValue:Ba,useDeferredValue:function(e){var t=Ge();return ie===null?t.memoizedState=e:Td(t,ie.memoizedState,e)},useTransition:function(){var e=Wl(Qr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:gd,useSyncExternalStore:vd,useId:Rd,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Di={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Ht(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(ot(t,e,o,r),Ao(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Ht(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(ot(t,e,o,r),Ao(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Ht(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,r),t!==null&&(ot(t,e,r,n),Ao(t,e,r))}};function sc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(o,i):!0}function Md(e,t,n){var r=!1,o=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ke(i):(o=ze(t)?pn:Se.current,r=t.contextTypes,i=(r=r!=null)?Wn(e,o):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ia(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ke(i):(i=ze(t)?pn:Se.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ts(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Di.enqueueReplaceState(o,o.state,null),mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=Fp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function Dd(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wi||(wi=!0,Ws=r),Is(e,t)},n}function Ad(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Is(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Is(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$1.bind(null,e,t,n),t.then(e,e))}function cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var p1=Pt.ReactCurrentOwner,$e=!1;function xe(e,t,n,r){t.child=e===null?pd(t,null,n,r):Yn(t,e.child,n,r)}function dc(e,t,n,r,o){n=n.render;var i=t.ref;return Fn(t,o),r=Aa(e,t,n,r,i,o),n=Fa(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Z&&n&&$a(t),t.flags|=1,xe(e,t,r,o),t.child)}function pc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ga(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Fd(e,t,i,r,o)):(e=Ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(l,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Yt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,$t(e,t,o)}return Ls(e,t,n,r,o)}function Ud(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(In,Me),Me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(In,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Q(In,Me),Me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Q(In,Me),Me|=r;return xe(e,t,o,n),t.child}function Bd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ls(e,t,n,r,o){var i=ze(n)?pn:Se.current;return i=Wn(t,i),Fn(t,o),n=Aa(e,t,n,r,i,o),r=Fa(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(Z&&r&&$a(t),t.flags|=1,xe(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(ze(n)){var i=!0;ui(t)}else i=!1;if(Fn(t,o),t.stateNode===null)Bo(e,t),Md(t,n,r),Rs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ke(c):(c=ze(n)?pn:Se.current,c=Wn(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&ac(t,l,r,c),It=!1;var m=t.memoizedState;l.state=m,mi(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Oe.current||It?(typeof h=="function"&&(Ts(t,n,h,r),a=t.memoizedState),(s=It||sc(t,n,s,r,m,a,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:et(t.type,s),l.props=c,p=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=ze(n)?pn:Se.current,a=Wn(t,a));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||m!==a)&&ac(t,l,r,a),It=!1,m=t.memoizedState,l.state=m,mi(t,r,l,o);var w=t.memoizedState;s!==p||m!==w||Oe.current||It?(typeof v=="function"&&(Ts(t,n,v,r),w=t.memoizedState),(c=It||sc(t,n,c,r,m,w,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return js(e,t,n,r,i,o)}function js(e,t,n,r,o,i){Bd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&bu(t,n,!1),$t(e,t,i);r=t.stateNode,p1.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yn(t,e.child,null,i),t.child=Yn(t,null,s,i)):xe(e,t,s,i),t.memoizedState=r.state,o&&bu(t,n,!0),t.child}function Vd(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),La(e,t.containerInfo)}function hc(e,t,n,r,o){return Hn(),Na(o),t.flags|=256,xe(e,t,n,r),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wd(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(J,o&1),e===null)return Os(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ui(l,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ds(n),t.memoizedState=Ms,e):Va(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return m1(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Yt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Yt(s,i):(i=cn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ds(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ms,r}return i=e.child,e=i.sibling,r=Yt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Va(e,t){return t=Ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&Na(r),Yn(t,e.child,null,n),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(E(422))),Co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ui({mode:"visible",children:r.children},o,0,null),i=cn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yn(t,e.child,null,l),t.child.memoizedState=Ds(l),t.memoizedState=Ms,i);if(!(t.mode&1))return Co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=Hl(i,r,void 0),Co(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,_t(e,o),ot(r,e,o,-1))}return Ka(),r=Hl(Error(E(421))),Co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=P1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,De=Bt(o.nextSibling),Ae=t,Z=!0,nt=null,e!==null&&(He[Ye++]=St,He[Ye++]=xt,He[Ye++]=mn,St=e.id,xt=e.overflow,mn=t),t=Va(t,r.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zs(e.return,t,n)}function Yl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&hi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h1(e,t,n){switch(t.tag){case 3:Vd(t),Hn();break;case 5:yd(t);break;case 1:ze(t.type)&&ui(t);break;case 4:La(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(di,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Wd(e,t,n):(Q(J,J.current&1),e=$t(e,t,n),e!==null?e.sibling:null);Q(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Ud(e,t,n)}return $t(e,t,n)}var Yd,As,Qd,Xd;Yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};Qd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,sn(mt.current);var i=null;switch(n){case"input":o=ls(e,o),r=ls(e,r),i=[];break;case"select":o=b({},o,{value:void 0}),r=b({},r,{value:void 0}),i=[];break;case"textarea":o=us(e,o),r=us(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}fs(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&X("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Xd=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y1(e,t,n){var r=t.pendingProps;switch(Pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ze(t.type)&&ai(),ge(t),null;case 3:return r=t.stateNode,Qn(),G(Oe),G(Se),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Qs(nt),nt=null))),As(e,t),ge(t),null;case 5:ja(t);var o=sn(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Qd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ge(t),null}if(e=sn(mt.current),ko(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[dt]=t,r[Vr]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<Sr.length;o++)X(Sr[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":_u(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":Pu(r,i),X("invalid",r)}fs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,s,e),o=["children",""+s]):Rr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":po(r),$u(r,i,!0);break;case"textarea":po(r),Nu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dt]=t,e[Vr]=r,Yd(e,t,!1,!1),t.stateNode=e;e:{switch(l=ds(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<Sr.length;o++)X(Sr[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":_u(e,r),o=ls(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=b({},r,{value:void 0}),X("invalid",e);break;case"textarea":Pu(e,r),o=us(e,r),X("invalid",e);break;default:o=r}fs(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Cf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&kf(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ir(e,a):typeof a=="number"&&Ir(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&X("scroll",e):a!=null&&da(e,i,a,l))}switch(n){case"input":po(e),$u(e,r,!1);break;case"textarea":po(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=sn(Hr.current),sn(mt.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(i=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return ge(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&De!==null&&t.mode&1&&!(t.flags&128))fd(),Hn(),t.flags|=98560,i=!1;else if(i=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[dt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else nt!==null&&(Qs(nt),nt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?le===0&&(le=3):Ka())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Qn(),As(e,t),e===null&&Ur(t.stateNode.containerInfo),ge(t),null;case 10:return Ta(t.type._context),ge(t),null;case 17:return ze(t.type)&&ai(),ge(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)mr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=hi(e),l!==null){for(t.flags|=128,mr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Kn&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=hi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return ge(t),null}else 2*te()-i.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,mr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=J.current,Q(J,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function g1(e,t){switch(Pa(t),t.tag){case 1:return ze(t.type)&&ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),G(Oe),G(Se),Ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ja(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return Qn(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var _o=!1,we=!1,v1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Fs(e,t,n){try{n()}catch(r){ee(e,t,r)}}var gc=!1;function w1(e,t){if(ks=oi,e=qf(),_a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var v;p!==n||o!==0&&p.nodeType!==3||(s=l+o),p!==i||r!==0&&p.nodeType!==3||(a=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++c===o&&(s=l),m===i&&++h===r&&(a=l),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Es={focusedElem:e,selectionRange:n},oi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,P=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:et(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(g){ee(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return w=gc,gc=!1,w}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fs(t,n,i)}o=o.next}while(o!==r)}}function Ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kd(e){var t=e.alternate;t!==null&&(e.alternate=null,Kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Vr],delete t[$s],delete t[t1],delete t[n1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gd(e){return e.tag===5||e.tag===3||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}var de=null,tt=!1;function zt(e,t,n){for(n=n.child;n!==null;)Zd(e,t,n),n=n.sibling}function Zd(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:we||Rn(n,t);case 6:var r=de,o=tt;de=null,zt(e,t,n),de=r,tt=o,de!==null&&(tt?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(tt?(e=de,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),Dr(e)):Al(de,n.stateNode));break;case 4:r=de,o=tt,de=n.stateNode.containerInfo,tt=!0,zt(e,t,n),de=r,tt=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Fs(n,t,l),o=o.next}while(o!==r)}zt(e,t,n);break;case 1:if(!we&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,zt(e,t,n),we=r):zt(e,t,n);break;default:zt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v1),t.forEach(function(r){var o=N1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,tt=!1;break e;case 3:de=s.stateNode.containerInfo,tt=!0;break e;case 4:de=s.stateNode.containerInfo,tt=!0;break e}s=s.return}if(de===null)throw Error(E(160));Zd(i,l,o),de=null,tt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jd(t,e),t=t.sibling}function Jd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),st(e),r&4){try{Nr(3,e,e.return),Ai(3,e)}catch(y){ee(e,e.return,y)}try{Nr(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:be(t,e),st(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(be(t,e),st(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var o=e.stateNode;try{Ir(o,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&wf(o,i),ds(s,l);var c=ds(s,i);for(l=0;l<a.length;l+=2){var h=a[l],p=a[l+1];h==="style"?Cf(o,p):h==="dangerouslySetInnerHTML"?kf(o,p):h==="children"?Ir(o,p):da(o,h,p,c)}switch(s){case"input":ss(o,i);break;case"textarea":Sf(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?jn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?jn(o,!!i.multiple,i.defaultValue,!0):jn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Vr]=i}catch(y){ee(e,e.return,y)}}break;case 6:if(be(t,e),st(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ee(e,e.return,y)}}break;case 3:if(be(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:be(t,e),st(e);break;case 13:be(t,e),st(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ya=te())),r&4&&wc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(we=(c=we)||h,be(t,e),we=c):be(t,e),st(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for($=e,h=e.child;h!==null;){for(p=$=h;$!==null;){switch(m=$,v=m.child,m.tag){case 0:case 11:case 14:case 15:Nr(4,m,m.return);break;case 1:Rn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:Rn(m,m.return);break;case 22:if(m.memoizedState!==null){xc(p);continue}}v!==null?(v.return=m,$=v):xc(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ef("display",l))}catch(y){ee(e,e.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){ee(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:be(t,e),st(e),r&4&&wc(e);break;case 21:break;default:be(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ir(o,""),r.flags&=-33);var i=vc(e);Vs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=vc(e);Bs(e,s,l);break;default:throw Error(E(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S1(e,t,n){$=e,qd(e)}function qd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||_o;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||we;s=_o;var c=we;if(_o=l,(we=a)&&!c)for($=o;$!==null;)l=$,a=l.child,l.tag===22&&l.memoizedState!==null?kc(o):a!==null?(a.return=l,$=a):kc(o);for(;i!==null;)$=i,qd(i),i=i.sibling;$=o,_o=s,we=c}Sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):Sc(e)}}function Sc(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&oc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}we||t.flags&512&&Us(t)}catch(m){ee(t,t.return,m)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function xc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function kc(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ai(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ee(t,o,a)}}var i=t.return;try{Us(t)}catch(a){ee(t,i,a)}break;case 5:var l=t.return;try{Us(t)}catch(a){ee(t,l,a)}}}catch(a){ee(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var x1=Math.ceil,vi=Pt.ReactCurrentDispatcher,Wa=Pt.ReactCurrentOwner,Xe=Pt.ReactCurrentBatchConfig,j=0,ce=null,oe=null,me=0,Me=0,In=Gt(0),le=0,Kr=null,yn=0,Fi=0,Ha=0,Or=null,_e=null,Ya=0,Kn=1/0,gt=null,wi=!1,Ws=null,Wt=null,$o=!1,Dt=null,Si=0,zr=0,Hs=null,Vo=-1,Wo=0;function ke(){return j&6?te():Vo!==-1?Vo:Vo=te()}function Ht(e){return e.mode&1?j&2&&me!==0?me&-me:o1.transition!==null?(Wo===0&&(Wo=Mf()),Wo):(e=U,e!==0||(e=window.event,e=e===void 0?16:Wf(e.type)),e):1}function ot(e,t,n,r){if(50<zr)throw zr=0,Hs=null,Error(E(185));to(e,n,r),(!(j&2)||e!==ce)&&(e===ce&&(!(j&2)&&(Fi|=n),le===4&&jt(e,me)),Te(e,r),n===1&&j===0&&!(t.mode&1)&&(Kn=te()+500,ji&&Zt()))}function Te(e,t){var n=e.callbackNode;om(e,t);var r=ri(e,e===ce?me:0);if(r===0)n!==null&&Tu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tu(n),t===1)e.tag===0?r1(Ec.bind(null,e)):ad(Ec.bind(null,e)),bm(function(){!(j&6)&&Zt()}),n=null;else{switch(Df(r)){case 1:n=ga;break;case 4:n=Lf;break;case 16:n=ni;break;case 536870912:n=jf;break;default:n=ni}n=l0(n,bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bd(e,t){if(Vo=-1,Wo=0,j&6)throw Error(E(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=ri(e,e===ce?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var o=j;j|=2;var i=t0();(ce!==e||me!==t)&&(gt=null,Kn=te()+500,un(e,t));do try{C1();break}catch(s){e0(e,s)}while(!0);za(),vi.current=i,j=o,oe!==null?t=0:(ce=null,me=0,t=le)}if(t!==0){if(t===2&&(o=gs(e),o!==0&&(r=o,t=Ys(e,o))),t===1)throw n=Kr,un(e,0),jt(e,r),Te(e,te()),n;if(t===6)jt(e,r);else{if(o=e.current.alternate,!(r&30)&&!k1(o)&&(t=xi(e,r),t===2&&(i=gs(e),i!==0&&(r=i,t=Ys(e,i))),t===1))throw n=Kr,un(e,0),jt(e,r),Te(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:rn(e,_e,gt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Ya+500-te(),10<t)){if(ri(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_s(rn.bind(null,e,_e,gt),t);break}rn(e,_e,gt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-rt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x1(r/1960))-r,10<r){e.timeoutHandle=_s(rn.bind(null,e,_e,gt),r);break}rn(e,_e,gt);break;case 5:rn(e,_e,gt);break;default:throw Error(E(329))}}}return Te(e,te()),e.callbackNode===n?bd.bind(null,e):null}function Ys(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=xi(e,t),e!==2&&(t=_e,_e=n,t!==null&&Qs(t)),e}function Qs(e){_e===null?_e=e:_e.push.apply(_e,e)}function k1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Ha,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Ec(e){if(j&6)throw Error(E(327));Un();var t=ri(e,0);if(!(t&1))return Te(e,te()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=gs(e);r!==0&&(t=r,n=Ys(e,r))}if(n===1)throw n=Kr,un(e,0),jt(e,t),Te(e,te()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,_e,gt),Te(e,te()),null}function Qa(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Kn=te()+500,ji&&Zt())}}function gn(e){Dt!==null&&Dt.tag===0&&!(j&6)&&Un();var t=j;j|=1;var n=Xe.transition,r=U;try{if(Xe.transition=null,U=1,e)return e()}finally{U=r,Xe.transition=n,j=t,!(j&6)&&Zt()}}function Xa(){Me=In.current,G(In)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qm(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Pa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:Qn(),G(Oe),G(Se),Ma();break;case 5:ja(r);break;case 4:Qn();break;case 13:G(J);break;case 19:G(J);break;case 10:Ta(r.type._context);break;case 22:case 23:Xa()}n=n.return}if(ce=e,oe=e=Yt(e.current,null),me=Me=t,le=0,Kr=null,Ha=Fi=yn=0,_e=Or=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}ln=null}return e}function e0(e,t){do{var n=oe;try{if(za(),Fo.current=gi,yi){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}yi=!1}if(hn=0,ae=ie=q=null,Pr=!1,Yr=0,Wa.current=null,n===null||n.return===null){le=1,Kr=t,oe=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=cc(l);if(v!==null){v.flags&=-257,fc(v,l,s,i,t),v.mode&1&&uc(i,c,t),t=v,a=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(a),t.updateQueue=y}else w.add(a);break e}else{if(!(t&1)){uc(i,c,t),Ka();break e}a=Error(E(426))}}else if(Z&&s.mode&1){var P=cc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),fc(P,l,s,i,t),Na(Xn(a,s));break e}}i=a=Xn(a,s),le!==4&&(le=2),Or===null?Or=[i]:Or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Dd(i,a,t);rc(i,f);break e;case 1:s=a;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wt===null||!Wt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ad(i,s,t);rc(i,g);break e}}i=i.return}while(i!==null)}r0(n)}catch(x){t=x,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function t0(){var e=vi.current;return vi.current=gi,e===null?gi:e}function Ka(){(le===0||le===3||le===2)&&(le=4),ce===null||!(yn&268435455)&&!(Fi&268435455)||jt(ce,me)}function xi(e,t){var n=j;j|=2;var r=t0();(ce!==e||me!==t)&&(gt=null,un(e,t));do try{E1();break}catch(o){e0(e,o)}while(!0);if(za(),j=n,vi.current=r,oe!==null)throw Error(E(261));return ce=null,me=0,le}function E1(){for(;oe!==null;)n0(oe)}function C1(){for(;oe!==null&&!Gp();)n0(oe)}function n0(e){var t=i0(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?r0(e):oe=t,Wa.current=null}function r0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=g1(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=y1(n,t,Me),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function rn(e,t,n){var r=U,o=Xe.transition;try{Xe.transition=null,U=1,_1(e,t,n,r)}finally{Xe.transition=o,U=r}return null}function _1(e,t,n,r){do Un();while(Dt!==null);if(j&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(im(e,i),e===ce&&(oe=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,l0(ni,function(){return Un(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var l=U;U=1;var s=j;j|=4,Wa.current=null,w1(e,n),Jd(n,e),Ym(Es),oi=!!ks,Es=ks=null,e.current=n,S1(n),Zp(),j=s,U=l,Xe.transition=i}else e.current=n;if($o&&($o=!1,Dt=e,Si=o),i=e.pendingLanes,i===0&&(Wt=null),bp(n.stateNode),Te(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(wi)throw wi=!1,e=Ws,Ws=null,e;return Si&1&&e.tag!==0&&Un(),i=e.pendingLanes,i&1?e===Hs?zr++:(zr=0,Hs=e):zr=0,Zt(),null}function Un(){if(Dt!==null){var e=Df(Si),t=Xe.transition,n=U;try{if(Xe.transition=null,U=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Si=0,j&6)throw Error(E(331));var o=j;for(j|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for($=c;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Nr(8,h,i)}var p=h.child;if(p!==null)p.return=h,$=p;else for(;$!==null;){h=$;var m=h.sibling,v=h.return;if(Kd(h),h===c){$=null;break}if(m!==null){m.return=v,$=m;break}$=v}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,$=f;break e}$=i.return}}var u=e.current;for($=u;$!==null;){l=$;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,$=d;else e:for(l=u;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ai(9,s)}}catch(x){ee(s,s.return,x)}if(s===l){$=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,$=g;break e}$=s.return}}if(j=o,Zt(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{U=n,Xe.transition=t}}return!1}function Cc(e,t,n){t=Xn(n,t),t=Dd(e,t,1),e=Vt(e,t,1),t=ke(),e!==null&&(to(e,1,t),Te(e,t))}function ee(e,t,n){if(e.tag===3)Cc(e,e,n);else for(;t!==null;){if(t.tag===3){Cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Xn(n,e),e=Ad(t,e,1),t=Vt(t,e,1),e=ke(),t!==null&&(to(t,1,e),Te(t,e));break}}t=t.return}}function $1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>te()-Ya?un(e,0):Ha|=n),Te(e,t)}function o0(e,t){t===0&&(e.mode&1?(t=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):t=1);var n=ke();e=_t(e,t),e!==null&&(to(e,t,n),Te(e,n))}function P1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),o0(e,n)}function N1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),o0(e,n)}var i0;i0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,h1(e,t,n);$e=!!(e.flags&131072)}else $e=!1,Z&&t.flags&1048576&&ud(t,fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var o=Wn(t,Se.current);Fn(t,n),o=Aa(null,t,r,e,o,n);var i=Fa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,ui(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ia(t),o.updater=Di,t.stateNode=o,o._reactInternals=t,Rs(t,r,e,n),t=js(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&$a(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=z1(r),e=et(r,e),o){case 0:t=Ls(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=dc(null,t,r,e,n);break e;case 14:t=pc(null,t,r,et(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Ls(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),mc(e,t,r,o,n);case 3:e:{if(Vd(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,hd(e,t),mi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Xn(Error(E(423)),t),t=hc(e,t,r,n,o);break e}else if(r!==o){o=Xn(Error(E(424)),t),t=hc(e,t,r,n,o);break e}else for(De=Bt(t.stateNode.containerInfo.firstChild),Ae=t,Z=!0,nt=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===o){t=$t(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return yd(t),e===null&&Os(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Cs(r,o)?l=null:i!==null&&Cs(r,i)&&(t.flags|=32),Bd(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&Os(t),null;case 13:return Wd(e,t,n);case 4:return La(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),dc(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Q(di,r._currentValue),r._currentValue=l,i!==null)if(lt(i.value,l)){if(i.children===o.children&&!Oe.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=kt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),zs(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),zs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fn(t,n),o=Ke(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=et(r,t.pendingProps),o=et(r.type,o),pc(e,t,r,o,n);case 15:return Fd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Bo(e,t),t.tag=1,ze(r)?(e=!0,ui(t)):e=!1,Fn(t,n),Md(t,r,o),Rs(t,r,o,n),js(null,t,r,!0,e,n);case 19:return Hd(e,t,n);case 22:return Ud(e,t,n)}throw Error(E(156,t.tag))};function l0(e,t){return If(e,t)}function O1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new O1(e,t,n,r)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z1(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===ha)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ga(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case En:return cn(n.children,o,i,t);case pa:l=8,o|=8;break;case ns:return e=Qe(12,n,t,o|2),e.elementType=ns,e.lanes=i,e;case rs:return e=Qe(13,n,t,o),e.elementType=rs,e.lanes=i,e;case os:return e=Qe(19,n,t,o),e.elementType=os,e.lanes=i,e;case yf:return Ui(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mf:l=10;break e;case hf:l=9;break e;case ma:l=11;break e;case ha:l=14;break e;case Rt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Ui(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=yf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Za(e,t,n,r,o,i,l,s,a){return e=new T1(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(i),e}function R1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function s0(e){if(!e)return Xt;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ze(n))return sd(e,n,t)}return t}function a0(e,t,n,r,o,i,l,s,a){return e=Za(n,r,!0,e,o,i,l,s,a),e.context=s0(null),n=e.current,r=ke(),o=Ht(n),i=kt(r,o),i.callback=t??null,Vt(n,i,o),e.current.lanes=o,to(e,o,r),Te(e,r),e}function Bi(e,t,n,r){var o=t.current,i=ke(),l=Ht(o);return n=s0(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(o,t,l),e!==null&&(ot(e,o,l,i),Ao(e,o,l)),l}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ja(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function I1(){return null}var u0=typeof reportError=="function"?reportError:function(e){console.error(e)};function qa(e){this._internalRoot=e}Vi.prototype.render=qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Bi(e,t,null,null)};Vi.prototype.unmount=qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){Bi(null,e,null,null)}),t[Ct]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Vf(e)}};function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function L1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ki(l);i.call(c)}}var l=a0(t,r,e,0,null,!1,!1,"",$c);return e._reactRootContainer=l,e[Ct]=l.current,Ur(e.nodeType===8?e.parentNode:e),gn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=ki(a);s.call(c)}}var a=Za(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=a,e[Ct]=a.current,Ur(e.nodeType===8?e.parentNode:e),gn(function(){Bi(t,a,n,r)}),a}function Hi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ki(l);s.call(a)}}Bi(t,l,e,o)}else l=L1(n,t,e,o,r);return ki(l)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(va(t,n|1),Te(t,te()),!(j&6)&&(Kn=te()+500,Zt()))}break;case 13:gn(function(){var r=_t(e,1);if(r!==null){var o=ke();ot(r,e,1,o)}}),Ja(e,1)}};wa=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=ke();ot(t,e,134217728,n)}Ja(e,134217728)}};Ff=function(e){if(e.tag===13){var t=Ht(e),n=_t(e,t);if(n!==null){var r=ke();ot(n,e,t,r)}Ja(e,t)}};Uf=function(){return U};Bf=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ms=function(e,t,n){switch(t){case"input":if(ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Li(r);if(!o)throw Error(E(90));vf(r),ss(r,o)}}}break;case"textarea":Sf(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};Pf=Qa;Nf=gn;var j1={usingClientEntryPoint:!1,Events:[ro,Pn,Li,_f,$f,Qa]},hr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M1={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{zi=Po.inject(M1),pt=Po}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ba(t))throw Error(E(200));return R1(e,t,null,n)};Be.createRoot=function(e,t){if(!ba(e))throw Error(E(299));var n=!1,r="",o=u0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Za(e,1,!1,null,null,n,!1,r,o),e[Ct]=t.current,Ur(e.nodeType===8?e.parentNode:e),new qa(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return gn(e)};Be.hydrate=function(e,t,n){if(!Wi(t))throw Error(E(200));return Hi(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!ba(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=u0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=a0(t,null,e,1,n??null,o,!1,i,l),e[Ct]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Vi(t)};Be.render=function(e,t,n){if(!Wi(t))throw Error(E(200));return Hi(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!Wi(e))throw Error(E(40));return e._reactRootContainer?(gn(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Be.unstable_batchedUpdates=Qa;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wi(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Hi(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function c0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0)}catch(e){console.error(e)}}c0(),cf.exports=Be;var D1=cf.exports,Pc=D1;es.createRoot=Pc.createRoot,es.hydrateRoot=Pc.hydrateRoot;function A1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function F1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var U1=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(F1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=A1(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ve="-ms-",Ei="-moz-",M="-webkit-",f0="comm",eu="rule",tu="decl",B1="@import",d0="@keyframes",V1="@layer",W1=Math.abs,Yi=String.fromCharCode,H1=Object.assign;function Y1(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function p0(e){return e.trim()}function Q1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Xs(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function Gr(e,t,n){return e.slice(t,n)}function ut(e){return e.length}function nu(e){return e.length}function No(e,t){return t.push(e),e}function X1(e,t){return e.map(t).join("")}var Qi=1,Gn=1,m0=0,Re=0,ne=0,or="";function Xi(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Qi,column:Gn,length:l,return:""}}function yr(e,t){return H1(Xi("",null,null,"",null,null,0),e,{length:-e.length},t)}function K1(){return ne}function G1(){return ne=Re>0?pe(or,--Re):0,Gn--,ne===10&&(Gn=1,Qi--),ne}function Fe(){return ne=Re<m0?pe(or,Re++):0,Gn++,ne===10&&(Gn=1,Qi++),ne}function ht(){return pe(or,Re)}function Yo(){return Re}function io(e,t){return Gr(or,e,t)}function Zr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function h0(e){return Qi=Gn=1,m0=ut(or=e),Re=0,[]}function y0(e){return or="",e}function Qo(e){return p0(io(Re-1,Ks(e===91?e+2:e===40?e+1:e)))}function Z1(e){for(;(ne=ht())&&ne<33;)Fe();return Zr(e)>2||Zr(ne)>3?"":" "}function J1(e,t){for(;--t&&Fe()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return io(e,Yo()+(t<6&&ht()==32&&Fe()==32))}function Ks(e){for(;Fe();)switch(ne){case e:return Re;case 34:case 39:e!==34&&e!==39&&Ks(ne);break;case 40:e===41&&Ks(e);break;case 92:Fe();break}return Re}function q1(e,t){for(;Fe()&&e+ne!==57;)if(e+ne===84&&ht()===47)break;return"/*"+io(t,Re-1)+"*"+Yi(e===47?e:Fe())}function b1(e){for(;!Zr(ht());)Fe();return io(e,Re)}function eh(e){return y0(Xo("",null,null,null,[""],e=h0(e),0,[0],e))}function Xo(e,t,n,r,o,i,l,s,a){for(var c=0,h=0,p=l,m=0,v=0,w=0,y=1,P=1,f=1,u=0,d="",g=o,x=i,k=r,S=d;P;)switch(w=u,u=Fe()){case 40:if(w!=108&&pe(S,p-1)==58){Xs(S+=D(Qo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Qo(u);break;case 9:case 10:case 13:case 32:S+=Z1(w);break;case 92:S+=J1(Yo()-1,7);continue;case 47:switch(ht()){case 42:case 47:No(th(q1(Fe(),Yo()),t,n),a);break;default:S+="/"}break;case 123*y:s[c++]=ut(S)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+h:f==-1&&(S=D(S,/\f/g,"")),v>0&&ut(S)-p&&No(v>32?Oc(S+";",r,n,p-1):Oc(D(S," ","")+";",r,n,p-2),a);break;case 59:S+=";";default:if(No(k=Nc(S,t,n,c,h,o,s,d,g=[],x=[],p),i),u===123)if(h===0)Xo(S,t,k,k,g,i,p,s,x);else switch(m===99&&pe(S,3)===110?100:m){case 100:case 108:case 109:case 115:Xo(e,k,k,r&&No(Nc(e,k,k,0,0,o,s,d,o,g=[],p),x),o,x,p,s,r?g:x);break;default:Xo(S,k,k,k,[""],x,0,s,x)}}c=h=v=0,y=f=1,d=S="",p=l;break;case 58:p=1+ut(S),v=w;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&G1()==125)continue}switch(S+=Yi(u),u*y){case 38:f=h>0?1:(S+="\f",-1);break;case 44:s[c++]=(ut(S)-1)*f,f=1;break;case 64:ht()===45&&(S+=Qo(Fe())),m=ht(),h=p=ut(d=S+=b1(Yo())),u++;break;case 45:w===45&&ut(S)==2&&(y=0)}}return i}function Nc(e,t,n,r,o,i,l,s,a,c,h){for(var p=o-1,m=o===0?i:[""],v=nu(m),w=0,y=0,P=0;w<r;++w)for(var f=0,u=Gr(e,p+1,p=W1(y=l[w])),d=e;f<v;++f)(d=p0(y>0?m[f]+" "+u:D(u,/&\f/g,m[f])))&&(a[P++]=d);return Xi(e,t,n,o===0?eu:s,a,c,h)}function th(e,t,n){return Xi(e,t,n,f0,Yi(K1()),Gr(e,2,-2),0)}function Oc(e,t,n,r){return Xi(e,t,n,tu,Gr(e,0,r),Gr(e,r+1,-1),r)}function Bn(e,t){for(var n="",r=nu(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function nh(e,t,n,r){switch(e.type){case V1:if(e.children.length)break;case B1:case tu:return e.return=e.return||e.value;case f0:return"";case d0:return e.return=e.value+"{"+Bn(e.children,r)+"}";case eu:e.value=e.props.join(",")}return ut(n=Bn(e.children,r))?e.return=e.value+"{"+n+"}":""}function rh(e){var t=nu(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function oh(e){return function(t){t.root||(t=t.return)&&e(t)}}function ih(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var lh=function(t,n,r){for(var o=0,i=0;o=i,i=ht(),o===38&&i===12&&(n[r]=1),!Zr(i);)Fe();return io(t,Re)},sh=function(t,n){var r=-1,o=44;do switch(Zr(o)){case 0:o===38&&ht()===12&&(n[r]=1),t[r]+=lh(Re-1,n,r);break;case 2:t[r]+=Qo(o);break;case 4:if(o===44){t[++r]=ht()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Yi(o)}while(o=Fe());return t},ah=function(t,n){return y0(sh(h0(t),n))},zc=new WeakMap,uh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!zc.get(r))&&!o){zc.set(t,!0);for(var i=[],l=ah(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var h=0;h<s.length;h++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[h]):s[h]+" "+l[a]}}},ch=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function g0(e,t){switch(Y1(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Ei+e+ve+e+e;case 6828:case 4268:return M+e+ve+e+e;case 6165:return M+e+ve+"flex-"+e+e;case 5187:return M+e+D(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return M+e+ve+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return M+e+ve+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+ve+D(e,"shrink","negative")+e;case 5292:return M+e+ve+D(e,"basis","preferred-size")+e;case 6060:return M+"box-"+D(e,"-grow","")+M+e+ve+D(e,"grow","positive")+e;case 4554:return M+D(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ut(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Ei+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xs(e,"stretch")?g0(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pe(e,t+1)!==115)break;case 6444:switch(pe(e,ut(e)-3-(~Xs(e,"!important")&&10))){case 107:return D(e,":",":"+M)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(pe(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+ve+"$2box$3")+e}break;case 5936:switch(pe(e,t+11)){case 114:return M+e+ve+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+ve+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+ve+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+ve+e+e}return e}var fh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case tu:t.return=g0(t.value,t.length);break;case d0:return Bn([yr(t,{value:D(t.value,"@","@"+M)})],o);case eu:if(t.length)return X1(t.props,function(i){switch(Q1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Bn([yr(t,{props:[D(i,/:(read-\w+)/,":"+Ei+"$1")]})],o);case"::placeholder":return Bn([yr(t,{props:[D(i,/:(plac\w+)/,":"+M+"input-$1")]}),yr(t,{props:[D(i,/:(plac\w+)/,":"+Ei+"$1")]}),yr(t,{props:[D(i,/:(plac\w+)/,ve+"input-$1")]})],o)}return""})}},dh=[fh],ph=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var P=y.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||dh,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var P=y.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)i[P[f]]=!0;s.push(y)});var a,c=[uh,ch];{var h,p=[nh,oh(function(y){h.insert(y)})],m=rh(c.concat(o,p)),v=function(P){return Bn(eh(P),m)};a=function(P,f,u,d){h=u,v(P?P+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new U1({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return w.sheet.hydrate(s),w},v0={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,ru=fe?Symbol.for("react.element"):60103,ou=fe?Symbol.for("react.portal"):60106,Ki=fe?Symbol.for("react.fragment"):60107,Gi=fe?Symbol.for("react.strict_mode"):60108,Zi=fe?Symbol.for("react.profiler"):60114,Ji=fe?Symbol.for("react.provider"):60109,qi=fe?Symbol.for("react.context"):60110,iu=fe?Symbol.for("react.async_mode"):60111,bi=fe?Symbol.for("react.concurrent_mode"):60111,el=fe?Symbol.for("react.forward_ref"):60112,tl=fe?Symbol.for("react.suspense"):60113,mh=fe?Symbol.for("react.suspense_list"):60120,nl=fe?Symbol.for("react.memo"):60115,rl=fe?Symbol.for("react.lazy"):60116,hh=fe?Symbol.for("react.block"):60121,yh=fe?Symbol.for("react.fundamental"):60117,gh=fe?Symbol.for("react.responder"):60118,vh=fe?Symbol.for("react.scope"):60119;function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ru:switch(e=e.type,e){case iu:case bi:case Ki:case Zi:case Gi:case tl:return e;default:switch(e=e&&e.$$typeof,e){case qi:case el:case rl:case nl:case Ji:return e;default:return t}}case ou:return t}}}function w0(e){return We(e)===bi}B.AsyncMode=iu;B.ConcurrentMode=bi;B.ContextConsumer=qi;B.ContextProvider=Ji;B.Element=ru;B.ForwardRef=el;B.Fragment=Ki;B.Lazy=rl;B.Memo=nl;B.Portal=ou;B.Profiler=Zi;B.StrictMode=Gi;B.Suspense=tl;B.isAsyncMode=function(e){return w0(e)||We(e)===iu};B.isConcurrentMode=w0;B.isContextConsumer=function(e){return We(e)===qi};B.isContextProvider=function(e){return We(e)===Ji};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ru};B.isForwardRef=function(e){return We(e)===el};B.isFragment=function(e){return We(e)===Ki};B.isLazy=function(e){return We(e)===rl};B.isMemo=function(e){return We(e)===nl};B.isPortal=function(e){return We(e)===ou};B.isProfiler=function(e){return We(e)===Zi};B.isStrictMode=function(e){return We(e)===Gi};B.isSuspense=function(e){return We(e)===tl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ki||e===bi||e===Zi||e===Gi||e===tl||e===mh||typeof e=="object"&&e!==null&&(e.$$typeof===rl||e.$$typeof===nl||e.$$typeof===Ji||e.$$typeof===qi||e.$$typeof===el||e.$$typeof===yh||e.$$typeof===gh||e.$$typeof===vh||e.$$typeof===hh)};B.typeOf=We;v0.exports=B;var wh=v0.exports,S0=wh,Sh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x0={};x0[S0.ForwardRef]=Sh;x0[S0.Memo]=xh;var kh=!0;function k0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var lu=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||kh===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},E0=function(t,n,r){lu(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Eh(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var C0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ch=/[A-Z]|^ms/g,_h=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_0=function(t){return t.charCodeAt(1)===45},Tc=function(t){return t!=null&&typeof t!="boolean"},Kl=ih(function(e){return _0(e)?e:e.replace(Ch,"-$&").toLowerCase()}),Rc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_h,function(r,o,i){return ct={name:o,styles:i,next:ct},o})}return C0[t]!==1&&!_0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Jr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ct={name:n.name,styles:n.styles,next:ct},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ct={name:r.name,styles:r.styles,next:ct},r=r.next;var o=n.styles+";";return o}return $h(e,t,n)}case"function":{if(e!==void 0){var i=ct,l=n(e);return ct=i,Jr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function $h(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Jr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Tc(l)&&(r+=Kl(i)+":"+Rc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Tc(l[s])&&(r+=Kl(i)+":"+Rc(i,l[s])+";");else{var a=Jr(e,t,l);switch(i){case"animation":case"animationName":{r+=Kl(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Ic=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ct,su=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";ct=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Jr(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Jr(r,n,t[s]),o&&(i+=l[s]);Ic.lastIndex=0;for(var a="",c;(c=Ic.exec(i))!==null;)a+="-"+c[1];var h=Eh(i)+a;return{name:h,styles:i,next:ct}},Ph=function(t){return t()},Nh=xu.useInsertionEffect?xu.useInsertionEffect:!1,$0=Nh||Ph,au={}.hasOwnProperty,P0=R.createContext(typeof HTMLElement<"u"?ph({key:"css"}):null);P0.Provider;var N0=function(t){return R.forwardRef(function(n,r){var o=R.useContext(P0);return t(n,o,r)})},O0=R.createContext({}),Gs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Oh=function(t,n){var r={};for(var o in n)au.call(n,o)&&(r[o]=n[o]);return r[Gs]=t,r},zh=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return lu(n,r,o),$0(function(){return E0(n,r,o)}),null},Th=N0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Gs],i=[r],l="";typeof e.className=="string"?l=k0(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=su(i,void 0,R.useContext(O0));l+=t.key+"-"+s.name;var a={};for(var c in e)au.call(e,c)&&c!=="css"&&c!==Gs&&(a[c]=e[c]);return a.ref=n,a.className=l,R.createElement(R.Fragment,null,R.createElement(zh,{cache:t,serialized:s,isStringTag:typeof o=="string"}),R.createElement(o,a))}),Rh=Th,Ih=F.Fragment;function se(e,t,n){return au.call(t,"css")?F.jsx(Rh,Oh(e,t),n):F.jsx(e,t,n)}function z0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return su(t)}var C=function(){var t=z0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Lh=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function jh(e,t,n){var r=[],o=k0(e,r,n);return r.length<2?n:o+t(r)}var Mh=function(t){var n=t.cache,r=t.serializedArr;return $0(function(){for(var o=0;o<r.length;o++)E0(n,r[o],!1)}),null},Gl=N0(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];var m=su(h,t.registered);return r.push(m),lu(t,m,!1),t.key+"-"+m.name},i=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];return jh(t.registered,o,Lh(h))},l={css:o,cx:i,theme:R.useContext(O0)},s=e.children(l);return n=!0,R.createElement(R.Fragment,null,R.createElement(Mh,{cache:t,serializedArr:r}),s)}),Dh=Object.defineProperty,Ah=(e,t,n)=>t in e?Dh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oo=(e,t,n)=>(Ah(e,typeof t!="symbol"?t+"":t,n),n),Zs=new Map,zo=new WeakMap,Lc=0,Fh=void 0;function Uh(e){return e?(zo.has(e)||(Lc+=1,zo.set(e,Lc.toString())),zo.get(e)):"0"}function Bh(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Uh(e.root):e[t]}`).toString()}function Vh(e){const t=Bh(e);let n=Zs.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const c=s.isIntersecting&&o.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(h=>{h(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Zs.set(t,n)}return n}function T0(e,t,n={},r=Fh){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=Vh(n),s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Zs.delete(o))}}function Wh(e){return typeof e.children!="function"}var jc=class extends R.Component{constructor(e){super(e),Oo(this,"node",null),Oo(this,"_unobserveCb",null),Oo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Oo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Wh(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=T0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:v,entry:w}=this.state;return e({inView:v,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:c,initialInView:h,fallbackInView:p,...m}=this.props;return R.createElement(t||"div",{ref:this.handleNode,...m},e)}};function R0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:c}={}){var h;const[p,m]=R.useState(null),v=R.useRef(),[w,y]=R.useState({inView:!!s,entry:void 0});v.current=c,R.useEffect(()=>{if(l||!p)return;let d;return d=T0(p,(g,x)=>{y({inView:g,entry:x}),v.current&&v.current(g,x),x.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,p,o,r,i,l,n,a,t]);const P=(h=w.entry)==null?void 0:h.target,f=R.useRef();!p&&P&&!i&&!l&&f.current!==P&&(f.current=P,y({inView:!!s,entry:void 0}));const u=[m,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var I0={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),cu=Symbol.for("react.portal"),ol=Symbol.for("react.fragment"),il=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),sl=Symbol.for("react.provider"),al=Symbol.for("react.context"),Hh=Symbol.for("react.server_context"),ul=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),dl=Symbol.for("react.memo"),pl=Symbol.for("react.lazy"),Yh=Symbol.for("react.offscreen"),L0;L0=Symbol.for("react.module.reference");function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uu:switch(e=e.type,e){case ol:case ll:case il:case cl:case fl:return e;default:switch(e=e&&e.$$typeof,e){case Hh:case al:case ul:case pl:case dl:case sl:return e;default:return t}}case cu:return t}}}V.ContextConsumer=al;V.ContextProvider=sl;V.Element=uu;V.ForwardRef=ul;V.Fragment=ol;V.Lazy=pl;V.Memo=dl;V.Portal=cu;V.Profiler=ll;V.StrictMode=il;V.Suspense=cl;V.SuspenseList=fl;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Je(e)===al};V.isContextProvider=function(e){return Je(e)===sl};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uu};V.isForwardRef=function(e){return Je(e)===ul};V.isFragment=function(e){return Je(e)===ol};V.isLazy=function(e){return Je(e)===pl};V.isMemo=function(e){return Je(e)===dl};V.isPortal=function(e){return Je(e)===cu};V.isProfiler=function(e){return Je(e)===ll};V.isStrictMode=function(e){return Je(e)===il};V.isSuspense=function(e){return Je(e)===cl};V.isSuspenseList=function(e){return Je(e)===fl};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ol||e===ll||e===il||e===cl||e===fl||e===Yh||typeof e=="object"&&e!==null&&(e.$$typeof===pl||e.$$typeof===dl||e.$$typeof===sl||e.$$typeof===al||e.$$typeof===ul||e.$$typeof===L0||e.getModuleId!==void 0)};V.typeOf=Je;I0.exports=V;var Qh=I0.exports;C`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;C`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;C`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;C`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Xh=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Kh=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gh=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zh=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jh=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fu=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qh=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bh=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ey=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ty=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ny=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ry=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oy=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function iy({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=fu,iterationCount:o=1}){return z0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function ly(e){return e==null}function sy(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function j0(e,t){return n=>n?e():t()}function qr(e){return j0(e,()=>null)}function Js(e){return qr(()=>({opacity:0}))(e)}const M0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=fu,triggerOnce:s=!1,className:a,style:c,childClassName:h,childStyle:p,children:m,onVisibilityChange:v}=e,w=R.useMemo(()=>iy({keyframes:l,duration:o}),[o,l]);return ly(m)?null:sy(m)?se(uy,{...e,animationStyles:w,children:String(m)}):Qh.isFragment(m)?se(D0,{...e,animationStyles:w}):se(Ih,{children:R.Children.map(m,(y,P)=>{if(!R.isValidElement(y))return null;const f=r+(t?P*o*n:0);switch(y.type){case"ol":case"ul":return se(Gl,{children:({cx:u})=>se(y.type,{...y.props,className:u(a,y.props.className),style:Object.assign({},c,y.props.style),children:se(M0,{...e,children:y.props.children})})});case"li":return se(jc,{threshold:i,triggerOnce:s,onChange:v,children:({inView:u,ref:d})=>se(Gl,{children:({cx:g})=>se(y.type,{...y.props,ref:d,className:g(h,y.props.className),css:qr(()=>w)(u),style:Object.assign({},p,y.props.style,Js(!u),{animationDelay:f+"ms"})})})});default:return se(jc,{threshold:i,triggerOnce:s,onChange:v,children:({inView:u,ref:d})=>se("div",{ref:d,className:a,css:qr(()=>w)(u),style:Object.assign({},c,Js(!u),{animationDelay:f+"ms"}),children:se(Gl,{children:({cx:g})=>se(y.type,{...y.props,className:g(h,y.props.className),style:Object.assign({},p,y.props.style)})})})})}})})},ay={display:"inline-block",whiteSpace:"pre"},uy=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:h,onVisibilityChange:p}=e,{ref:m,inView:v}=R0({triggerOnce:s,threshold:l,onChange:p});return j0(()=>se("div",{ref:m,className:a,style:Object.assign({},c,ay),children:h.split("").map((w,y)=>se("span",{css:qr(()=>t)(v),style:{animationDelay:o+y*i*r+"ms"},children:w},y))}),()=>se(D0,{...e,children:h}))(n)},D0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=R0({triggerOnce:r,threshold:n,onChange:s});return se("div",{ref:a,className:o,css:qr(()=>t)(c),style:Object.assign({},i,Js(!c)),children:l})};C`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;C`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const cy=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,fy=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,dy=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,py=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,my=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,hy=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,yy=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,gy=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,vy=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,wy=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Sy=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,xy=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ky=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ey(e,t,n){switch(n){case"bottom-left":return t?fy:Kh;case"bottom-right":return t?dy:Gh;case"down":return e?t?my:Jh:t?py:Zh;case"left":return e?t?yy:qh:t?hy:fu;case"right":return e?t?vy:ey:t?gy:bh;case"top-left":return t?wy:ty;case"top-right":return t?Sy:ny;case"up":return e?t?ky:oy:t?xy:ry;default:return t?cy:Xh}}const qs=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=R.useMemo(()=>Ey(t,r,n),[t,n,r]);return se(M0,{keyframes:i,...o})};C`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;C`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;C`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pe.apply(this,arguments)};function Ci(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var K="-ms-",Tr="-moz-",A="-webkit-",A0="comm",ml="rule",du="decl",Cy="@import",F0="@keyframes",_y="@layer",U0=Math.abs,pu=String.fromCharCode,bs=Object.assign;function $y(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function B0(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function Ko(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function Zn(e,t,n){return e.slice(t,n)}function ft(e){return e.length}function V0(e){return e.length}function xr(e,t){return t.push(e),e}function Py(e,t){return e.map(t).join("")}function Mc(e,t){return e.filter(function(n){return!vt(n,t)})}var hl=1,Jn=1,W0=0,Ze=0,re=0,ir="";function yl(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:hl,column:Jn,length:l,return:"",siblings:s}}function Tt(e,t){return bs(yl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xn(e){for(;e.root;)e=Tt(e.root,{children:[e]});xr(e,e.siblings)}function Ny(){return re}function Oy(){return re=Ze>0?ue(ir,--Ze):0,Jn--,re===10&&(Jn=1,hl--),re}function it(){return re=Ze<W0?ue(ir,Ze++):0,Jn++,re===10&&(Jn=1,hl++),re}function fn(){return ue(ir,Ze)}function Go(){return Ze}function gl(e,t){return Zn(ir,e,t)}function ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zy(e){return hl=Jn=1,W0=ft(ir=e),Ze=0,[]}function Ty(e){return ir="",e}function Zl(e){return B0(gl(Ze-1,ta(e===91?e+2:e===40?e+1:e)))}function Ry(e){for(;(re=fn())&&re<33;)it();return ea(e)>2||ea(re)>3?"":" "}function Iy(e,t){for(;--t&&it()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return gl(e,Go()+(t<6&&fn()==32&&it()==32))}function ta(e){for(;it();)switch(re){case e:return Ze;case 34:case 39:e!==34&&e!==39&&ta(re);break;case 40:e===41&&ta(e);break;case 92:it();break}return Ze}function Ly(e,t){for(;it()&&e+re!==57;)if(e+re===84&&fn()===47)break;return"/*"+gl(t,Ze-1)+"*"+pu(e===47?e:it())}function jy(e){for(;!ea(fn());)it();return gl(e,Ze)}function My(e){return Ty(Zo("",null,null,null,[""],e=zy(e),0,[0],e))}function Zo(e,t,n,r,o,i,l,s,a){for(var c=0,h=0,p=l,m=0,v=0,w=0,y=1,P=1,f=1,u=0,d="",g=o,x=i,k=r,S=d;P;)switch(w=u,u=it()){case 40:if(w!=108&&ue(S,p-1)==58){Ko(S+=T(Zl(u),"&","&\f"),"&\f",U0(c?s[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Zl(u);break;case 9:case 10:case 13:case 32:S+=Ry(w);break;case 92:S+=Iy(Go()-1,7);continue;case 47:switch(fn()){case 42:case 47:xr(Dy(Ly(it(),Go()),t,n,a),a);break;default:S+="/"}break;case 123*y:s[c++]=ft(S)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+h:f==-1&&(S=T(S,/\f/g,"")),v>0&&ft(S)-p&&xr(v>32?Ac(S+";",r,n,p-1,a):Ac(T(S," ","")+";",r,n,p-2,a),a);break;case 59:S+=";";default:if(xr(k=Dc(S,t,n,c,h,o,s,d,g=[],x=[],p,i),i),u===123)if(h===0)Zo(S,t,k,k,g,i,p,s,x);else switch(m===99&&ue(S,3)===110?100:m){case 100:case 108:case 109:case 115:Zo(e,k,k,r&&xr(Dc(e,k,k,0,0,o,s,d,o,g=[],p,x),x),o,x,p,s,r?g:x);break;default:Zo(S,k,k,k,[""],x,0,s,x)}}c=h=v=0,y=f=1,d=S="",p=l;break;case 58:p=1+ft(S),v=w;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&Oy()==125)continue}switch(S+=pu(u),u*y){case 38:f=h>0?1:(S+="\f",-1);break;case 44:s[c++]=(ft(S)-1)*f,f=1;break;case 64:fn()===45&&(S+=Zl(it())),m=fn(),h=p=ft(d=S+=jy(Go())),u++;break;case 45:w===45&&ft(S)==2&&(y=0)}}return i}function Dc(e,t,n,r,o,i,l,s,a,c,h,p){for(var m=o-1,v=o===0?i:[""],w=V0(v),y=0,P=0,f=0;y<r;++y)for(var u=0,d=Zn(e,m+1,m=U0(P=l[y])),g=e;u<w;++u)(g=B0(P>0?v[u]+" "+d:T(d,/&\f/g,v[u])))&&(a[f++]=g);return yl(e,t,n,o===0?ml:s,a,c,h,p)}function Dy(e,t,n,r){return yl(e,t,n,A0,pu(Ny()),Zn(e,2,-2),0,r)}function Ac(e,t,n,r,o){return yl(e,t,n,du,Zn(e,0,r),Zn(e,r+1,-1),r,o)}function H0(e,t,n){switch($y(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return Tr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Tr+e+K+e+e;case 5936:switch(ue(e,t+11)){case 114:return A+e+K+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+K+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+K+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+K+e+e;case 6165:return A+e+K+"flex-"+e+e;case 5187:return A+e+T(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return A+e+K+"flex-item-"+T(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":K+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return A+e+K+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+K+T(e,"shrink","negative")+e;case 5292:return A+e+K+T(e,"basis","preferred-size")+e;case 6060:return A+"box-"+T(e,"-grow","")+A+e+K+T(e,"grow","positive")+e;case 4554:return A+T(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!vt(e,/flex-|baseline/))return K+"grid-column-align"+Zn(e,t)+e;break;case 2592:case 3360:return K+T(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vt(r.props,/grid-\w+-end/)})?~Ko(e+(n=n[t].value),"span",0)?e:K+T(e,"-start","")+e+K+"grid-row-span:"+(~Ko(n,"span",0)?vt(n,/\d+/):+vt(n,/\d+/)-+vt(e,/\d+/))+";":K+T(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:K+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Tr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ko(e,"stretch",0)?H0(T(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,c){return K+o+":"+i+c+(l?K+o+"-span:"+(s?a:+a-+i)+c:"")+e});case 4949:if(ue(e,t+6)===121)return T(e,":",":"+A)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(ue(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+K+"$2box$3")+e;case 100:return T(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function _i(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ay(e,t,n,r){switch(e.type){case _y:if(e.children.length)break;case Cy:case du:return e.return=e.return||e.value;case A0:return"";case F0:return e.return=e.value+"{"+_i(e.children,r)+"}";case ml:if(!ft(e.value=e.props.join(",")))return""}return ft(n=_i(e.children,r))?e.return=e.value+"{"+n+"}":""}function Fy(e){var t=V0(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Uy(e){return function(t){t.root||(t=t.return)&&e(t)}}function By(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case du:e.return=H0(e.value,e.length,n);return;case F0:return _i([Tt(e,{value:T(e.value,"@","@"+A)})],r);case ml:if(e.length)return Py(n=e.props,function(o){switch(vt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(Tt(e,{props:[T(o,/:(read-\w+)/,":"+Tr+"$1")]})),xn(Tt(e,{props:[o]})),bs(e,{props:Mc(n,r)});break;case"::placeholder":xn(Tt(e,{props:[T(o,/:(plac\w+)/,":"+A+"input-$1")]})),xn(Tt(e,{props:[T(o,/:(plac\w+)/,":"+Tr+"$1")]})),xn(Tt(e,{props:[T(o,/:(plac\w+)/,K+"input-$1")]})),xn(Tt(e,{props:[o]})),bs(e,{props:Mc(n,r)});break}return""})}}var je={},qn=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",Y0="active",Q0="data-styled-version",vl="6.1.9",mu=`/*!sc*/
`,hu=typeof window<"u"&&"HTMLElement"in window,Vy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),wl=Object.freeze([]),bn=Object.freeze({});function Wy(e,t,n){return n===void 0&&(n=bn),e.theme!==n.theme&&e.theme||t||n.theme}var X0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yy=/(^-|-$)/g;function Fc(e){return e.replace(Hy,"-").replace(Yy,"")}var Qy=/(a)(d)/gi,To=52,Uc=function(e){return String.fromCharCode(e+(e>25?39:97))};function na(e){var t,n="";for(t=Math.abs(e);t>To;t=t/To|0)n=Uc(t%To)+n;return(Uc(t%To)+n).replace(Qy,"$1-$2")}var Jl,K0=5381,Ln=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},G0=function(e){return Ln(K0,e)};function Xy(e){return na(G0(e)>>>0)}function Ky(e){return e.displayName||e.name||"Component"}function ql(e){return typeof e=="string"&&!0}var Z0=typeof Symbol=="function"&&Symbol.for,J0=Z0?Symbol.for("react.memo"):60115,Gy=Z0?Symbol.for("react.forward_ref"):60112,Zy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},q0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qy=((Jl={})[Gy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jl[J0]=q0,Jl);function Bc(e){return("type"in(t=e)&&t.type.$$typeof)===J0?q0:"$$typeof"in e?qy[e.$$typeof]:Zy;var t}var by=Object.defineProperty,eg=Object.getOwnPropertyNames,Vc=Object.getOwnPropertySymbols,tg=Object.getOwnPropertyDescriptor,ng=Object.getPrototypeOf,Wc=Object.prototype;function b0(e,t,n){if(typeof t!="string"){if(Wc){var r=ng(t);r&&r!==Wc&&b0(e,r,n)}var o=eg(t);Vc&&(o=o.concat(Vc(t)));for(var i=Bc(e),l=Bc(t),s=0;s<o.length;++s){var a=o[s];if(!(a in Jy||n&&n[a]||l&&a in l||i&&a in i)){var c=tg(t,a);try{by(e,a,c)}catch{}}}}return e}function er(e){return typeof e=="function"}function yu(e){return typeof e=="object"&&"styledComponentId"in e}function an(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function br(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ra(e,t,n){if(n===void 0&&(n=!1),!n&&!br(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ra(e[r],t[r]);else if(br(t))for(var r in t)e[r]=ra(e[r],t[r]);return e}function gu(e,t){Object.defineProperty(e,"toString",{value:t})}function lo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw lo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(mu);return n},e}(),Jo=new Map,$i=new Map,qo=1,Ro=function(e){if(Jo.has(e))return Jo.get(e);for(;$i.has(qo);)qo++;var t=qo++;return Jo.set(e,t),$i.set(t,e),t},og=function(e,t){qo=t+1,Jo.set(e,t),$i.set(t,e)},ig="style[".concat(qn,"][").concat(Q0,'="').concat(vl,'"]'),lg=new RegExp("^".concat(qn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sg=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},ag=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(mu),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(lg);if(a){var c=0|parseInt(a[1],10),h=a[2];c!==0&&(og(h,c),sg(e,h,a[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function ug(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ep=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(qn,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(qn,Y0),r.setAttribute(Q0,vl);var l=ug();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},cg=function(){function e(t){this.element=ep(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw lo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fg=function(){function e(t){this.element=ep(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),dg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yc=hu,pg={isServer:!hu,useCSSOMInjection:!Vy},tp=function(){function e(t,n,r){t===void 0&&(t=bn),n===void 0&&(n={});var o=this;this.options=Pe(Pe({},pg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&hu&&Yc&&(Yc=!1,function(i){for(var l=document.querySelectorAll(ig),s=0,a=l.length;s<a;s++){var c=l[s];c&&c.getAttribute(qn)!==Y0&&(ag(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),gu(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",c=function(p){var m=function(f){return $i.get(f)}(p);if(m===void 0)return"continue";var v=i.names.get(m),w=l.getGroup(p);if(v===void 0||w.length===0)return"continue";var y="".concat(qn,".g").concat(p,'[id="').concat(m,'"]'),P="";v!==void 0&&v.forEach(function(f){f.length>0&&(P+="".concat(f,","))}),a+="".concat(w).concat(y,'{content:"').concat(P,'"}').concat(mu)},h=0;h<s;h++)c(h);return a}(o)})}return e.registerId=function(t){return Ro(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new dg(o):r?new cg(o):new fg(o)}(this.options),new rg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ro(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ro(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ro(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mg=/&/g,hg=/^\s*\/\/.*$/gm;function np(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=np(n.children,t)),n})}function yg(e){var t,n,r,o=bn,i=o.options,l=i===void 0?bn:i,s=o.plugins,a=s===void 0?wl:s,c=function(m,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},h=a.slice();h.push(function(m){m.type===ml&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(mg,n).replace(r,c))}),l.prefix&&h.push(By),h.push(Ay);var p=function(m,v,w,y){v===void 0&&(v=""),w===void 0&&(w=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var P=m.replace(hg,""),f=My(w||v?"".concat(w," ").concat(v," { ").concat(P," }"):P);l.namespace&&(f=np(f,l.namespace));var u=[];return _i(f,Fy(h.concat(Uy(function(d){return u.push(d)})))),u};return p.hash=a.length?a.reduce(function(m,v){return v.name||lo(15),Ln(m,v.name)},K0).toString():"",p}var gg=new tp,oa=yg(),rp=Ne.createContext({shouldForwardProp:void 0,styleSheet:gg,stylis:oa});rp.Consumer;Ne.createContext(void 0);function Qc(){return R.useContext(rp)}var vg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=oa);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,gu(this,function(){throw lo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=oa),this.name+t.hash},e}(),wg=function(e){return e>="A"&&e<="Z"};function Xc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;wg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var op=function(e){return e==null||e===!1||e===""},ip=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!op(i)&&(Array.isArray(i)&&i.isCss||er(i)?r.push("".concat(Xc(o),":"),i,";"):br(i)?r.push.apply(r,Ci(Ci(["".concat(o," {")],ip(i),!1),["}"],!1)):r.push("".concat(Xc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in C0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function dn(e,t,n,r){if(op(e))return[];if(yu(e))return[".".concat(e.styledComponentId)];if(er(e)){if(!er(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return dn(o,t,n,r)}var i;return e instanceof vg?n?(e.inject(n,r),[e.getName(r)]):[e]:br(e)?ip(e):Array.isArray(e)?Array.prototype.concat.apply(wl,e.map(function(l){return dn(l,t,n,r)})):[e.toString()]}function Sg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(er(n)&&!yu(n))return!1}return!0}var xg=G0(vl),kg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sg(t),this.componentId=n,this.baseHash=Ln(xg,n),this.baseStyle=r,tp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=an(o,this.staticRulesId);else{var i=Hc(dn(this.rules,t,n,r)),l=na(Ln(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=an(o,l),this.staticRulesId=l}else{for(var a=Ln(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var p=this.rules[h];if(typeof p=="string")c+=p;else if(p){var m=Hc(dn(p,t,n,r));a=Ln(a,m+h),c+=m}}if(c){var v=na(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),o=an(o,v)}}return o},e}(),lp=Ne.createContext(void 0);lp.Consumer;var bl={};function Eg(e,t,n){var r=yu(e),o=e,i=!ql(e),l=t.attrs,s=l===void 0?wl:l,a=t.componentId,c=a===void 0?function(g,x){var k=typeof g!="string"?"sc":Fc(g);bl[k]=(bl[k]||0)+1;var S="".concat(k,"-").concat(Xy(vl+k+bl[k]));return x?"".concat(x,"-").concat(S):S}(t.displayName,t.parentComponentId):a,h=t.displayName,p=h===void 0?function(g){return ql(g)?"styled.".concat(g):"Styled(".concat(Ky(g),")")}(e):h,m=t.displayName&&t.componentId?"".concat(Fc(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;w=function(g,x){return y(g,x)&&P(g,x)}}else w=y}var f=new kg(n,m,r?o.componentStyle:void 0);function u(g,x){return function(k,S,N){var Y=k.attrs,I=k.componentStyle,Ie=k.defaultProps,Jt=k.foldedComponentIds,qt=k.styledComponentId,ao=k.target,Sl=Ne.useContext(lp),lr=Qc(),bt=k.shouldForwardProp||lr.shouldForwardProp,_=Wy(S,Sl,Ie)||bn,O=function(Nt,Le,yt){for(var sr,tn=Pe(Pe({},Le),{className:void 0,theme:yt}),xl=0;xl<Nt.length;xl+=1){var uo=er(sr=Nt[xl])?sr(tn):sr;for(var Ot in uo)tn[Ot]=Ot==="className"?an(tn[Ot],uo[Ot]):Ot==="style"?Pe(Pe({},tn[Ot]),uo[Ot]):uo[Ot]}return Le.className&&(tn.className=an(tn.className,Le.className)),tn}(Y,S,_),z=O.as||ao,W={};for(var H in O)O[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&O.theme===_||(H==="forwardedAs"?W.as=O.forwardedAs:bt&&!bt(H,z)||(W[H]=O[H]));var en=function(Nt,Le){var yt=Qc(),sr=Nt.generateAndInjectStyles(Le,yt.styleSheet,yt.stylis);return sr}(I,O),qe=an(Jt,qt);return en&&(qe+=" "+en),O.className&&(qe+=" "+O.className),W[ql(z)&&!X0.has(z)?"class":"className"]=qe,W.ref=N,R.createElement(z,W)}(d,g,x)}u.displayName=p;var d=Ne.forwardRef(u);return d.attrs=v,d.componentStyle=f,d.displayName=p,d.shouldForwardProp=w,d.foldedComponentIds=r?an(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=m,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(x){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var N=0,Y=k;N<Y.length;N++)ra(x,Y[N],!0);return x}({},o.defaultProps,g):g}}),gu(d,function(){return".".concat(d.styledComponentId)}),i&&b0(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Kc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Gc=function(e){return Object.assign(e,{isCss:!0})};function Cg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(er(e)||br(e))return Gc(dn(Kc(wl,Ci([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?dn(r):Gc(dn(Kc(r,t)))}function ia(e,t,n){if(n===void 0&&(n=bn),!t)throw lo(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Cg.apply(void 0,Ci([o],i,!1)))};return r.attrs=function(o){return ia(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ia(e,t,Pe(Pe({},n),o))},r}var sp=function(e){return ia(Eg,e)},so=sp;X0.forEach(function(e){so[e]=sp(e)});const _g=so.section`
    width: 80vw;
    height: 70vh;
    background-color: #424769;
    box-shadow: 0 0 10px #00000029;
    border-radius: .5rem;
    margin: auto;
    margin-top: 5%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    overflow-y: scroll;

    &::-webkit-scrollbar{
      width: 0;
    }
`,$g=({children:e})=>F.jsx(_g,{children:F.jsx(qs,{cascade:!0,damping:.1,direction:"up",triggerOnce:"true",children:e})}),Pg=so.section`
    width: 170px;
    height: 250px;
    box-shadow: 0 0 10px #00000029;
    background-color: #eeeeee73;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    img{
        width: 90%;
        height: 75%;
        margin-top: 3%;
        border-radius: .3rem;
    }
`,Ng=so.div`
    background-color: #ffffff7f;
    width: 100%;
    min-height: 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`,Og=({img:e,nome:t,onclick:n})=>F.jsxs(Pg,{onClick:n,children:[F.jsx("img",{src:e,alt:t}),F.jsx(Ng,{children:F.jsx("h4",{children:t})})]});var ap={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Zc=Ne.createContext&&Ne.createContext(ap),zg=["attr","size","title"];function Tg(e,t){if(e==null)return{};var n=Rg(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Rg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Pi(){return Pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pi.apply(this,arguments)}function Jc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ni(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jc(Object(n),!0).forEach(function(r){Ig(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ig(e,t,n){return t=Lg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lg(e){var t=jg(e,"string");return typeof t=="symbol"?t:t+""}function jg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function up(e){return e&&e.map((t,n)=>Ne.createElement(t.tag,Ni({key:n},t.attr),up(t.child)))}function Mg(e){return t=>Ne.createElement(Dg,Pi({attr:Ni({},e.attr)},t),up(e.child))}function Dg(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=Tg(e,zg),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Ne.createElement("svg",Pi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Ni(Ni({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Ne.createElement("title",null,i),e.children)};return Zc!==void 0?Ne.createElement(Zc.Consumer,null,n=>t(n)):t(ap)}function Ag(e){return Mg({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(e)}const Fg=so.section`
        width: 80vw;
        box-shadow: 0 0 10px #00000029;
        height: 70vh; 
        background-color: #424769;
        position: absolute;
        z-index: 999;
        top: 1vh;
        left: 9vw;
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        gap: 1rem;
        color: #EEEEEE;
        overflow: scroll;

        .box{
            width: 80vw;
            height: 70vh; 
            position: absolute;
            z-index: 999;
            top: 1vh;
            left: 9vw;
            overflow: scroll;
        }
        .row{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            gap: 1rem;
        }
        .overview{
            width: 50%;
            display: flex;
            flex-direction: column;

            gap: 1rem;
        }

        &::-webkit-scrollbar{
            width: 0;
        }

        img{
            width: 100%;
            box-shadow: 0 0 10px #00000063;
            margin-top: 3%;
            border-radius: .3rem;
    }
    `,Ug=({votos:e,title:t,backdrop:n,overview:r,fechar:o})=>F.jsxs(Fg,{children:[F.jsx("h2",{children:t}),F.jsxs("div",{className:"row",children:[F.jsx(qs,{style:{width:"50%"},direction:"left",children:F.jsx("img",{src:n,alt:t})}),F.jsx("div",{className:"overview",children:F.jsxs(qs,{style:{width:"auto"},direction:"right",children:[F.jsx("p",{children:F.jsx("b",{children:"Sinopse:"})}),F.jsx("p",{children:r}),F.jsxs("p",{children:[F.jsx("b",{children:"Votos:"})," ",F.jsx("span",{children:e})]})]})})]}),F.jsx("span",{onClick:o,children:F.jsx(Ag,{style:{cursor:"pointer"},size:"2rem"})})]}),Bg=R.createContext();function Vg(){const t="https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=83272738fc8d7f79a797e84081421fd0",n="https://image.tmdb.org/t/p/w500",[r,o]=R.useState([]),[i,l]=R.useState(!1),[s,a]=R.useState(),[c,h]=R.useState(),[p,m]=R.useState(),[v,w]=R.useState();R.useEffect(()=>{y()},[]);const y=async()=>{const u=await(await fetch(t)).json();o(u.results),console.log(r)};function P(f,u,d,g){l(!i),a(f),h(u),m(n+d),w(g)}return F.jsxs(Bg.Provider,{value:{showin:i,setShowin:l},children:[F.jsx($g,{children:r.map(f=>F.jsx(Og,{img:n+f.poster_path,nome:f.title,onclick:()=>{P(f.vote_count,f.title,f.backdrop_path,f.overview)}},f.id))}),i?F.jsx(Ug,{fechar:()=>l(!i),votos:s,title:c,backdrop:p,overview:v}):""]})}es.createRoot(document.getElementById("root")).render(F.jsx(Ne.StrictMode,{children:F.jsx(Vg,{})}));
