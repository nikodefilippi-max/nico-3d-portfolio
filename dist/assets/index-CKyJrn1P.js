(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function W0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var jh={exports:{}},Jo={};var Bv;function aM(){if(Bv)return Jo;Bv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return Jo.Fragment=n,Jo.jsx=a,Jo.jsxs=a,Jo}var Fv;function rM(){return Fv||(Fv=1,jh.exports=aM()),jh.exports}var Jt=rM(),Zh={exports:{}},le={};var Hv;function sM(){if(Hv)return le;Hv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=M&&z[M]||z["@@iterator"],typeof z=="function"?z:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function I(z,ct,Q){this.props=z,this.context=ct,this.refs=S,this.updater=Q||C}I.prototype.isReactComponent={},I.prototype.setState=function(z,ct){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ct,"setState")},I.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function P(){}P.prototype=I.prototype;function D(z,ct,Q){this.props=z,this.context=ct,this.refs=S,this.updater=Q||C}var F=D.prototype=new P;F.constructor=D,y(F,I.prototype),F.isPureReactComponent=!0;var G=Array.isArray;function O(){}var k={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(z,ct,Q){var nt=Q.ref;return{$$typeof:o,type:z,key:ct,ref:nt!==void 0?nt:null,props:Q}}function V(z,ct){return R(z.type,ct,z.props)}function et(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function lt(z){var ct={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Q){return ct[Q]})}var vt=/\/+/g;function ut(z,ct){return typeof z=="object"&&z!==null&&z.key!=null?lt(""+z.key):ct.toString(36)}function q(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(ct){z.status==="pending"&&(z.status="fulfilled",z.value=ct)},function(ct){z.status==="pending"&&(z.status="rejected",z.reason=ct)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function at(z,ct,Q,nt,Et){var ft=typeof z;(ft==="undefined"||ft==="boolean")&&(z=null);var pt=!1;if(z===null)pt=!0;else switch(ft){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(z.$$typeof){case o:case n:pt=!0;break;case v:return pt=z._init,at(pt(z._payload),ct,Q,nt,Et)}}if(pt)return Et=Et(z),pt=nt===""?"."+ut(z,0):nt,G(Et)?(Q="",pt!=null&&(Q=pt.replace(vt,"$&/")+"/"),at(Et,ct,Q,"",function(L){return L})):Et!=null&&(et(Et)&&(Et=V(Et,Q+(Et.key==null||z&&z.key===Et.key?"":(""+Et.key).replace(vt,"$&/")+"/")+pt)),ct.push(Et)),1;pt=0;var _t=nt===""?".":nt+":";if(G(z))for(var Lt=0;Lt<z.length;Lt++)nt=z[Lt],ft=_t+ut(nt,Lt),pt+=at(nt,ct,Q,ft,Et);else if(Lt=b(z),typeof Lt=="function")for(z=Lt.call(z),Lt=0;!(nt=z.next()).done;)nt=nt.value,ft=_t+ut(nt,Lt++),pt+=at(nt,ct,Q,ft,Et);else if(ft==="object"){if(typeof z.then=="function")return at(q(z),ct,Q,nt,Et);throw ct=String(z),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return pt}function j(z,ct,Q){if(z==null)return z;var nt=[],Et=0;return at(z,nt,"","",function(ft){return ct.call(Q,ft,Et++)}),nt}function xt(z){if(z._status===-1){var ct=z._result,Q=ct();Q.then(function(nt){(z._status===0||z._status===-1)&&(z._status=1,z._result=nt,Q.status===void 0&&(Q.status="fulfilled",Q.value=nt))},function(nt){(z._status===0||z._status===-1)&&(z._status=2,z._result=nt,Q.status===void 0&&(Q.status="rejected",Q.reason=nt))}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var Mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function Ht(z){var ct=k.T,Q={};Q.types=ct!==null?ct.types:null,k.T=Q;try{var nt=z(),Et=k.S;Et!==null&&Et(Q,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(O,Mt)}catch(ft){Mt(ft)}finally{ct!==null&&Q.types!==null&&(ct.types=Q.types),k.T=ct}}function re(z){var ct=k.T;if(ct!==null){var Q=ct.types;Q===null?ct.types=[z]:Q.indexOf(z)===-1&&Q.push(z)}else Ht(re.bind(null,z))}var me={map:j,forEach:function(z,ct,Q){j(z,function(){ct.apply(this,arguments)},Q)},count:function(z){var ct=0;return j(z,function(){ct++}),ct},toArray:function(z){return j(z,function(ct){return ct})||[]},only:function(z){if(!et(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return le.Activity=p,le.Children=me,le.Component=I,le.Fragment=a,le.Profiler=u,le.PureComponent=D,le.StrictMode=s,le.Suspense=_,le.ViewTransition=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return k.H.useMemoCache(z)}},le.addTransitionType=re,le.cache=function(z){return function(){return z.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(z,ct,Q){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var nt=y({},z.props),Et=z.key;if(ct!=null)for(ft in ct.key!==void 0&&(Et=""+ct.key),ct)!w.call(ct,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&ct.ref===void 0||(nt[ft]=ct[ft]);var ft=arguments.length-2;if(ft===1)nt.children=Q;else if(1<ft){for(var pt=Array(ft),_t=0;_t<ft;_t++)pt[_t]=arguments[_t+2];nt.children=pt}return R(z.type,Et,nt)},le.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},le.createElement=function(z,ct,Q){var nt,Et={},ft=null;if(ct!=null)for(nt in ct.key!==void 0&&(ft=""+ct.key),ct)w.call(ct,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(Et[nt]=ct[nt]);var pt=arguments.length-2;if(pt===1)Et.children=Q;else if(1<pt){for(var _t=Array(pt),Lt=0;Lt<pt;Lt++)_t[Lt]=arguments[Lt+2];Et.children=_t}if(z&&z.defaultProps)for(nt in pt=z.defaultProps,pt)Et[nt]===void 0&&(Et[nt]=pt[nt]);return R(z,ft,Et)},le.createRef=function(){return{current:null}},le.forwardRef=function(z){return{$$typeof:d,render:z}},le.isValidElement=et,le.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:xt}},le.memo=function(z,ct){return{$$typeof:g,type:z,compare:ct===void 0?null:ct}},le.startTransition=Ht,le.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},le.use=function(z){return k.H.use(z)},le.useActionState=function(z,ct,Q){return k.H.useActionState(z,ct,Q)},le.useCallback=function(z,ct){return k.H.useCallback(z,ct)},le.useContext=function(z){return k.H.useContext(z)},le.useDebugValue=function(){},le.useDeferredValue=function(z,ct){return k.H.useDeferredValue(z,ct)},le.useEffect=function(z,ct){return k.H.useEffect(z,ct)},le.useEffectEvent=function(z){return k.H.useEffectEvent(z)},le.useId=function(){return k.H.useId()},le.useImperativeHandle=function(z,ct,Q){return k.H.useImperativeHandle(z,ct,Q)},le.useInsertionEffect=function(z,ct){return k.H.useInsertionEffect(z,ct)},le.useLayoutEffect=function(z,ct){return k.H.useLayoutEffect(z,ct)},le.useMemo=function(z,ct){return k.H.useMemo(z,ct)},le.useOptimistic=function(z,ct){return k.H.useOptimistic(z,ct)},le.useReducer=function(z,ct,Q){return k.H.useReducer(z,ct,Q)},le.useRef=function(z){return k.H.useRef(z)},le.useState=function(z){return k.H.useState(z)},le.useSyncExternalStore=function(z,ct,Q){return k.H.useSyncExternalStore(z,ct,Q)},le.useTransition=function(){return k.H.useTransition()},le.version="19.3.0",le}var Gv;function Sp(){return Gv||(Gv=1,Zh.exports=sM()),Zh.exports}var ri=Sp();const oM=W0(ri);var Kh={exports:{}},$o={},Qh={exports:{}},Jh={};var Vv;function lM(){return Vv||(Vv=1,(function(o){function n(q,at){var j=q.length;q.push(at);t:for(;0<j;){var xt=j-1>>>1,Mt=q[xt];if(0<u(Mt,at))q[xt]=at,q[j]=Mt,j=xt;else break t}}function a(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var at=q[0],j=q.pop();if(j!==at){q[0]=j;t:for(var xt=0,Mt=q.length,Ht=Mt>>>1;xt<Ht;){var re=2*(xt+1)-1,me=q[re],z=re+1,ct=q[z];if(0>u(me,j))z<Mt&&0>u(ct,me)?(q[xt]=ct,q[z]=j,xt=z):(q[xt]=me,q[re]=j,xt=re);else if(z<Mt&&0>u(ct,j))q[xt]=ct,q[z]=j,xt=z;else break t}}return at}function u(q,at){var j=q.sortIndex-at.sortIndex;return j!==0?j:q.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],g=[],v=1,p=null,x=3,M=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(q){for(var at=a(g);at!==null;){if(at.callback===null)s(g);else if(at.startTime<=q)s(g),at.sortIndex=at.expirationTime,n(_,at);else break;at=a(g)}}function F(q){if(C=!1,D(q),!b)if(a(_)!==null)b=!0,G||(G=!0,et());else{var at=a(g);at!==null&&ut(F,at.startTime-q)}}var G=!1,O=-1,k=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<k)}function V(){if(y=!1,G){var q=o.unstable_now();w=q;var at=!0;try{t:{b=!1,C&&(C=!1,I(O),O=-1),M=!0;var j=x;try{e:{for(D(q),p=a(_);p!==null&&!(p.expirationTime>q&&R());){var xt=p.callback;if(typeof xt=="function"){p.callback=null,x=p.priorityLevel;var Mt=xt(p.expirationTime<=q);if(q=o.unstable_now(),typeof Mt=="function"){p.callback=Mt,D(q),at=!0;break e}p===a(_)&&s(_),D(q)}else s(_);p=a(_)}if(p!==null)at=!0;else{var Ht=a(g);Ht!==null&&ut(F,Ht.startTime-q),at=!1}}break t}finally{p=null,x=j,M=!1}at=void 0}}finally{at?et():G=!1}}}var et;if(typeof P=="function")et=function(){P(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,vt=lt.port2;lt.port1.onmessage=V,et=function(){vt.postMessage(null)}}else et=function(){S(V,0)};function ut(q,at){O=S(function(){q(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(q){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var j=x;x=at;try{return q()}finally{x=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,at){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var j=x;x=q;try{return at()}finally{x=j}},o.unstable_scheduleCallback=function(q,at,j){var xt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xt+j:xt):j=xt,q){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=j+Mt,q={id:v++,callback:at,priorityLevel:q,startTime:j,expirationTime:Mt,sortIndex:-1},j>xt?(q.sortIndex=j,n(g,q),a(_)===null&&q===a(g)&&(C?(I(O),O=-1):C=!0,ut(F,j-xt))):(q.sortIndex=Mt,n(_,q),b||M||(b=!0,G||(G=!0,et()))),q},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(q){var at=x;return function(){var j=x;x=at;try{return q.apply(this,arguments)}finally{x=j}}}})(Jh)),Jh}var Xv;function uM(){return Xv||(Xv=1,Qh.exports=lM()),Qh.exports}var $h={exports:{}},Rn={};var kv;function cM(){if(kv)return Rn;kv=1;var o=Sp();function n(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,p,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:p,implementation:x}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.browser=function(v){return{$$typeof:f,_reason:v}},Rn.createPortal=function(v,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return d(v,p,null,x)},Rn.flushSync=function(v){var p=_.T,x=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=p,s.p=x,s.d.f()}},Rn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},Rn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Rn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:C}):x==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=g(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(v)},Rn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin);s.d.L(v,x,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(v,p){if(typeof v=="string")if(p){var x=g(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(v)},Rn.requestFormReset=function(v){s.d.r(v)},Rn.unstable_batchedUpdates=function(v,p){return v(p)},Rn.useFormState=function(v,p,x){return _.H.useFormState(v,p,x)},Rn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Rn.version="19.3.0",Rn}var qv;function fM(){if(qv)return $h.exports;qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),$h.exports=cM(),$h.exports}var Yv;function hM(){if(Yv)return $o;Yv=1;var o=uM(),n=Sp(),a=fM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function g(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return _(l),t;if(c===r)return _(l),e;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var m=!1,E=l.child;E;){if(E===i){m=!0,i=l,r=c;break}if(E===r){m=!0,r=l,i=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===i){m=!0,i=c,r=l;break}if(E===r){m=!0,r=c,i=l;break}E=E.sibling}if(!m)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}function p(t,e,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&p(t.child,e,i,r,l,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function b(t){var e=[null,null],i=x(t);return i===null||C(e,t,i.child,{foundSelf:!1}),e}function C(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&C(t,e,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,I=null;function P(t,e,i){return t===i?!0:t===e?(S=t,!0):!1}function D(t,e,i){return t===i?(I=t,!1):t===e?(I!==null&&(S=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=e;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var O=Object.assign,k=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),lt=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),me=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),Q=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case lt:return"Profiler";case et:return"StrictMode";case at:return"Suspense";case j:return"SuspenseList";case Ht:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case ut:return t.displayName||"Context";case vt:return(t._context.displayName||"Context")+".Consumer";case q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return e=t.displayName||null,e!==null?e:ft(t.type)||"Memo";case Mt:e=t._payload,t=t._init;try{return ft(t(e))}catch{}}return null}var pt=Array.isArray,_t=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},Ae=[],$t=-1;function Gt(t){return{current:t}}function wt(t){0>$t||(t.current=Ae[$t],Ae[$t]=null,$t--)}function Xt(t,e){$t++,Ae[$t]=t.current,t.current=e}var Ft=Gt(null),oe=Gt(null),ke=Gt(null),Ye=Gt(null);function U(t,e){switch(Xt(ke,e),Xt(oe,t),Xt(Ft,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?W_(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=W_(e),t=j_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}wt(Ft),Xt(Ft,t)}function T(){wt(Ft),wt(oe),wt(ke)}function tt(t){var e=t.memoizedState;e!==null&&(Ds._currentValue=e.memoizedState,Xt(Ye,t)),e=Ft.current;var i=j_(e,t.type);e!==i&&(Xt(oe,t),Xt(Ft,i))}function mt(t){oe.current===t&&(wt(Ft),wt(oe)),Ye.current===t&&(wt(Ye),Ds._currentValue=L)}var yt,ht;function qt(t){if(yt===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);yt=e&&e[1]||"",ht=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+ht}var Ct=!1;function Zt(t,e){if(!t||Ct)return"";Ct=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Nt){var X=Nt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Nt){X=Nt}gt=!1;try{var $=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&($!==void 0?Object.defineProperty(t.prototype,"props",$):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){X=Nt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Nt){if(Nt&&X&&typeof Nt.stack=="string")return[Nt.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var N=m.split(`
`),W=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===W.length)for(r=N.length-1,l=W.length-1;1<=r&&0<=l&&N[r]!==W[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==W[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==W[l]){var it=`
`+N[r].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=r&&0<=l);break}}}finally{Ct=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?qt(i):""}function Qt(t,e){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return t.child!==e&&e!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Zt(t.type,!1);case 11:return Zt(t.type.render,!1);case 1:return Zt(t.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function At(t){try{var e="",i=null;do e+=Qt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Kt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,ce=o.unstable_requestPaint,H=o.unstable_now,Rt=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,St=o.unstable_LowPriority,jt=o.unstable_IdlePriority,ue=o.log,He=o.unstable_setDisableYieldValue,ye=null,Je=null;function dn(t){if(typeof ue=="function"&&He(t),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(ye,t)}catch{}}var Cn=Math.clz32?Math.clz32:Sl,ji=Math.log,oo=Math.LN2;function Sl(t){return t>>>=0,t===0?32:31-(ji(t)/oo|0)|0}var lr=256,Zi=262144,ur=4194304;function oi(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function cr(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=oi(r):(m&=E,m!==0?l=oi(m):i||(i=E&~t,i!==0&&(l=oi(i))))):(E=r&~c,E!==0?l=oi(E):m!==0?l=oi(m):i||(i=r&~t,i!==0&&(l=oi(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function ya(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function xl(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Cn(i),l=1<<r;e|=t[r],i&=~l}return e}function yc(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yl(){var t=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),t}function lo(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function fr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mc(t,e,i,r,l,c){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,W=t.hiddenUpdates;for(i=m&~i;0<i;){var it=31-Cn(i),gt=1<<it;E[it]=0,N[it]=-1;var X=W[it];if(X!==null)for(W[it]=null,it=0;it<X.length;it++){var $=X[it];$!==null&&($.lane&=-536870913)}i&=~gt}r!==0&&A(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~e))}function A(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Cn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function Z(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Cn(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function rt(t,e){var i=e&-e;return i=(i&42)!==0?1:st(i),(i&(t.suspendedLanes|e))!==0?0:i}function st(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function K(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Lt.p;return t!==0?t:(t=window.event,t===void 0?32:Uv(t.type))}function zt(t,e){var i=Lt.p;try{return Lt.p=t,e()}finally{Lt.p=i}}var Bt=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Bt,Yt="__reactProps$"+Bt,ie="__reactContainer$"+Bt,ee="__reactEvents$"+Bt,ve="__reactListeners$"+Bt,Oe="__reactHandles$"+Bt,Ke="__reactResources$"+Bt,Ue="__reactMarker$"+Bt,Re="__reactLoad$"+Bt;function ne(t){delete t[Dt],delete t[Yt],delete t[ve],delete t[Oe]}function Ne(t){var e;if(e=t[Dt])return e;for(var i=t.parentNode;i;){if(e=i[ie]||i[Dt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=fv(t);t!==null;){if(i=t[Dt])return i;t=fv(t)}return e}t=i,i=t.parentNode}return null}function ge(t){if(t=t[Dt]||t[ie]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function pn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function jn(t){var e=t[Ke];return e||(e=t[Ke]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ce(t){t[Ue]=!0}function Ma(t){t[Re]=void 0}var We=new Set,Ln={};function sn(t,e){tn(t,e),tn(t+"Capture",e)}function tn(t,e){for(Ln[t]=e,t=0;t<e.length;t++)We.add(e[t])}var wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wr={},Ni={};function ES(t){return Ot.call(Ni,t)?!0:Ot.call(Wr,t)?!1:wn.test(t)?Ni[t]=!0:(Wr[t]=!0,!1)}var we=!1;function Lp(){var t=we;return we=!1,t}function Ml(t,e,i){if(ES(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function El(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function Ki(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Zn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Op(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TS(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ec(t){if(!t._valueTracker){var e=Op(t)?"checked":"value";t._valueTracker=TS(t,e,""+t[e])}}function Pp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=Op(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var bS=/[\n"\\]/g;function li(t){return t.replace(bS,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Tc(t,e,i,r,l,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Zn(e)):t.value!==""+Zn(e)&&(t.value=""+Zn(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?m==="number"&&t.value==e?bc(t,Zn(t.value)):bc(t,Zn(e)):i!=null?bc(t,Zn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Zn(E):t.removeAttribute("name")}function zp(t,e,i,r,l,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Ec(t);return}i=i!=null?""+Zn(i):"",e=e!=null?""+Zn(e):i,E||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Ec(t)}function bc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function jr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Zn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Ip(t,e,i){if(e!=null&&(e=""+Zn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Zn(i):""}function Bp(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(pt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Zn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Ec(t)}function Zr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var AS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||AS.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Hp(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",we=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(Fp(t,l,r),we=!0)}else for(var c in e)e.hasOwnProperty(c)&&Fp(t,c,e[c])}function Ac(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),CS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(t){return CS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var Rc=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kr=null,Qr=null;function Gp(t){var e=ge(t);if(e&&(t=e.stateNode)){var i=t[Yt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Tc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+li(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[Yt]||null;if(!l)throw Error(s(90));Tc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Pp(r)}break t;case"textarea":Ip(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&jr(t,!!i.multiple,e,!1)}}}var wc=!1;function Vp(t,e,i){if(wc)return t(e,i);wc=!0;try{var r=t(e);return r}finally{if(wc=!1,(Kr!==null||Qr!==null)&&(Tu(),Kr&&(e=Kr,t=Qr,Qr=Kr=null,Gp(e),t)))for(e=0;e<t.length;e++)Gp(t[e])}}function uo(t,e){var i=t.stateNode;if(i===null)return null;var r=i[Yt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=!1;if(Qi)try{var co={};Object.defineProperty(co,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Dc=!1}var Ea=null,Uc=null,bl=null;function Xp(){if(bl)return bl;var t,e=Uc,i=e.length,r,l="value"in Ea?Ea.value:Ea.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var m=i-t;for(r=1;r<=m&&e[i-r]===l[c-r];r++);return bl=l.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function kp(){return!1}function On(t){function e(i,r,l,c,m){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Rl:kp,this.isPropagationStopped=kp,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=On(Ta),fo=O({},Ta,{view:0,detail:0}),wS=On(fo),Nc,Lc,ho,wl=O({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Nc=t.screenX-ho.screenX,Lc=t.screenY-ho.screenY):Lc=Nc=0,ho=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),qp=On(wl),DS=O({},wl,{dataTransfer:0}),US=On(DS),NS=O({},fo,{relatedTarget:0}),Oc=On(NS),LS=O({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),OS=On(LS),PS=O({},Ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zS=On(PS),IS=O({},Ta,{data:0}),Yp=On(IS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HS[t])?!!e[t]:!1}function Pc(){return GS}var VS=O({},fo,{key:function(t){if(t.key){var e=BS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XS=On(VS),kS=O({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=On(kS),qS=O({},Ta,{submitter:0}),YS=On(qS),WS=O({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),jS=On(WS),ZS=O({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=On(ZS),QS=O({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JS=On(QS),$S=O({},Ta,{newState:0,oldState:0,source:0}),tx=On($S),ex=[9,13,27,32],zc=Qi&&"CompositionEvent"in window,po=null;Qi&&"documentMode"in document&&(po=document.documentMode);var nx=Qi&&"TextEvent"in window&&!po,jp=Qi&&(!zc||po&&8<po&&11>=po),Zp=" ",Kp=!1;function Qp(t,e){switch(t){case"keyup":return ex.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function ix(t,e){switch(t){case"compositionend":return Jp(e);case"keypress":return e.which!==32?null:(Kp=!0,Zp);case"textInput":return t=e.data,t===Zp&&Kp?null:t;default:return null}}function ax(t,e){if(Jr)return t==="compositionend"||!zc&&Qp(t,e)?(t=Xp(),bl=Uc=Ea=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jp&&e.locale!=="ko"?null:e.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rx[t.type]:e==="textarea"}function tm(t,e,i,r){Kr?Qr?Qr.push(r):Qr=[r]:Kr=r,e=Du(e,"onChange"),0<e.length&&(i=new Cl("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var mo=null,go=null;function sx(t){G_(t,0)}function Dl(t){var e=pn(t);if(Pp(e))return t}function em(t,e){if(t==="change")return e}var nm=!1;if(Qi){var Ic;if(Qi){var Bc="oninput"in document;if(!Bc){var im=document.createElement("div");im.setAttribute("oninput","return;"),Bc=typeof im.oninput=="function"}Ic=Bc}else Ic=!1;nm=Ic&&(!document.documentMode||9<document.documentMode)}function am(){mo&&(mo.detachEvent("onpropertychange",rm),go=mo=null)}function rm(t){if(t.propertyName==="value"&&Dl(go)){var e=[];tm(e,go,t,Cc(t)),Vp(sx,e)}}function ox(t,e,i){t==="focusin"?(am(),mo=e,go=i,mo.attachEvent("onpropertychange",rm)):t==="focusout"&&am()}function lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(go)}function ux(t,e){if(t==="click")return Dl(e)}function cx(t,e){if(t==="input"||t==="change")return Dl(e)}function fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:fx;function _o(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Ot.call(e,l)||!Kn(t[l],e[l]))return!1}return!0}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,e){var i=sm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=sm(i)}}function lm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Fc(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Fc(t.document)}return e}function Hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var hx=Qi&&"documentMode"in document&&11>=document.documentMode,$r=null,Gc=null,vo=null,Vc=!1;function cm(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Vc||$r==null||$r!==Fc(r)||(r=$r,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vo&&_o(vo,r)||(vo=r,r=Du(Gc,"onSelect"),0<r.length&&(e=new Cl("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=$r)))}function hr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var ts={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Xc={},fm={};Qi&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function dr(t){if(Xc[t])return Xc[t];if(!ts[t])return t;var e=ts[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in fm)return Xc[t]=e[i];return t}var hm=dr("animationend"),dm=dr("animationiteration"),pm=dr("animationstart"),dx=dr("transitionrun"),px=dr("transitionstart"),mx=dr("transitioncancel"),mm=dr("transitionend"),gm=new Map,kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kc.push("scrollEnd");function Si(t,e){gm.set(t,e),sn(e,[t])}var gx=0;function Ji(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ei.identifierPrefix;var i=gx++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function _m(t){if(t==null||typeof t=="string")return t;var e=null,i=xs;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function $i(t,e){return t=_m(t),e=_m(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],es=0,qc=0;function Nl(){for(var t=es,e=qc=es=0;e<t;){var i=ui[e];ui[e++]=null;var r=ui[e];ui[e++]=null;var l=ui[e];ui[e++]=null;var c=ui[e];if(ui[e++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}c!==0&&vm(i,l,c)}}function Ll(t,e,i,r){ui[es++]=t,ui[es++]=e,ui[es++]=i,ui[es++]=r,qc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Yc(t,e,i,r){return Ll(t,e,i,r),Ol(t)}function pr(t,e){return Ll(t,null,null,e),Ol(t)}function vm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-Cn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function Ol(t){if(50<Ho)throw Ho=0,Eu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ns={};function _x(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,i,r){return new _x(t,e,i,r)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,e){var i=t.alternate;return i===null?(i=Gn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Sm(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Pl(t,e,i,r,l,c){var m=0;if(r=t,typeof r=="function")Wc(r)&&(m=1);else if(typeof r=="string")m=qy(t,i,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ht:return t=Gn(31,i,e,l),t.elementType=Ht,t.lanes=c,t;case V:return mr(i.children,l,c,e);case et:m=8,l|=24;break;case lt:return t=Gn(12,i,e,l|2),t.elementType=lt,t.lanes=c,t;case at:return t=Gn(13,i,e,l),t.elementType=at,t.lanes=c,t;case j:return t=Gn(19,i,e,l),t.elementType=j,t.lanes=c,t;case re:case z:return t=l|32,t=Gn(30,i,e,t),t.elementType=z,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ut:m=10;break t;case vt:m=9;break t;case q:m=11;break t;case xt:m=14;break t;case Mt:m=16,r=null;break t}m=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=Gn(m,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function mr(t,e,i,r){return t=Gn(7,t,r,e),t.lanes=i,t}function jc(t,e,i){return t=Gn(6,t,null,e),t.lanes=i,t}function xm(t){var e=Gn(18,null,null,0);return e.stateNode=t,e}function Zc(t,e,i){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ym=new WeakMap;function ci(t,e){if(typeof t=="object"&&t!==null){var i=ym.get(t);return i!==void 0?i:(e={value:t,source:e,stack:At(e)},ym.set(t,e),e)}return{value:t,source:e,stack:At(e)}}var is=[],as=0,zl=null,So=0,fi=[],hi=0,ba=null,Oi=1,Pi="";function ea(t,e){is[as++]=So,is[as++]=zl,zl=t,So=e}function Mm(t,e,i){fi[hi++]=Oi,fi[hi++]=Pi,fi[hi++]=ba,ba=t;var r=Oi;t=Pi;var l=32-Cn(r)-1;r&=~(1<<l),i+=1;var c=32-Cn(e)+l;if(30<c){var m=l-l%5;c=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Oi=1<<32-Cn(e)+l|i<<l|r,Pi=c+t}else Oi=1<<c|i<<l|r,Pi=t}function Il(t){t.return!==null&&(ea(t,1),Mm(t,1,0))}function Kc(t){for(;t===zl;)zl=is[--as],is[as]=null,So=is[--as],is[as]=null;for(;t===ba;)ba=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null,Oi=fi[--hi],fi[hi]=null}function Em(t,e){fi[hi++]=Oi,fi[hi++]=Pi,fi[hi++]=ba,Oi=e.id,Pi=e.overflow,ba=t}var vn=null,je=null,_e=!1,Aa=null,di=!1,Qc=Error(s(519));function Ra(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(ci(e,t)),Qc}function Tm(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[Dt]=t,e[Yt]=r,i){case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":case"embed":xe("load",e);break;case"video":case"audio":for(i=0;i<Vo.length;i++)xe(Vo[i],e);break;case"source":xe("error",e);break;case"img":case"image":case"link":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"input":xe("invalid",e),zp(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":xe("invalid",e);break;case"textarea":xe("invalid",e),Bp(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||q_(e.textContent,i)?(r.popover!=null&&(xe("beforetoggle",e),xe("toggle",e)),r.onScroll!=null&&xe("scroll",e),r.onScrollEnd!=null&&xe("scrollend",e),r.onClick!=null&&(e.onclick=Li),e=!0):e=!1,e||Ra(t,!0)}function Bl(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:vn=vn.return}}function rs(t){if(t!==vn)return!1;if(!_e)return Bl(t),_e=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Ch(t.type,t.memoizedProps)),i=!i),i&&je&&Ra(t),Bl(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=cv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=cv(t)}else e===27?(e=je,Xa(t.type)?(t=Ih,Ih=null,je=t):je=e):je=vn?mi(t.stateNode.nextSibling):null;return!0}function gr(){je=vn=null,_e=!1}function Jc(){var t=Aa;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Aa=null),t}function xo(t){Aa===null?Aa=[t]:Aa.push(t)}var $c=Gt(null),_r=null,na=null;function Ca(t,e,i){Xt($c,e._currentValue),e._currentValue=i}function ia(t){t._currentValue=$c.current,wt($c)}function Fl(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function tf(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<e.length;N++)if(E.context===e[N]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Fl(c.return,i,t),r||(m=null);break t}c=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),Fl(m,i,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),Fl(l.return,i,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function vr(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var E=l.type;Kn(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===Ye.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ds):t=[Ds])}l=l.return}return t!==null&&tf(e,t,i,r),e.flags|=262144,t!==null}function Hl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){_r=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return bm(_r,t)}function Gl(t,e){return _r===null&&Sr(t),bm(t,e)}function bm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},na===null){if(t===null)throw Error(s(308));na=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else na=na.next=e;return i}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},Sx=o.unstable_scheduleCallback,xx=o.unstable_NormalPriority,on={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new vx,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&Sx(xx,function(){t.controller.abort()})}function Am(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var Mo=null;function yx(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Eo=null,nf=0,xr=0,ss=null;function Mx(t,e){if(Eo===null){var i=Eo=[];nf=0,xr=Sh(),ss={status:"pending",value:void 0,then:function(r){i.push(r)}}}return nf++,e.then(Rm,Rm),e}function Rm(){if(--nf===0&&(Mo=null,Eo!==null)){ss!==null&&(ss.status="fulfilled");var t=Eo;Eo=null,xr=0,ss=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ex(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Cm=_t.S;_t.S=function(t,e){if(x_=H(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Mx(t,e),Mo!==null)for(var i=Ts;i!==null;)Am(i,Mo),i=i.next;if(i=t.types,i!==null){for(var r=Ts;r!==null;)Am(r,i),r=r.next;if(xr!==0){r=Mo,r===null&&(r=Mo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Cm!==null&&Cm(t,e)};var yr=Gt(null);function af(){var t=yr.current;return t!==null?t:qe.pooledCache}function Vl(t,e){e===null?Xt(yr,yr.current):Xt(yr,e.pool)}function wm(){var t=af();return t===null?null:{parent:on._currentValue,pool:t}}var os=Error(s(460)),rf=Error(s(474)),Xl=Error(s(542)),kl={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Um(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Li,Li),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Lm(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Li,Li);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Lm(t),t}throw Er=e,os}}function Mr(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Er=i,os):i}}var Er=null;function Nm(){if(Er===null)throw Error(s(459));var t=Er;return Er=null,t}function Lm(t){if(t===os||t===Xl)throw Error(s(483))}var ls=null,To=0;function ql(t){var e=To;return To+=1,ls===null&&(ls=[]),Um(ls,t,e)}function wa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Yl(t,e){throw e.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Om(t){function e(Y,B){if(t){var J=Y.deletions;J===null?(Y.deletions=[B],Y.flags|=16):J.push(B)}}function i(Y,B){if(!t)return null;for(;B!==null;)e(Y,B),B=B.sibling;return null}function r(Y){for(var B=new Map;Y!==null;)Y.key===null?B.set(Y.index,Y):B.set(Y.key,Y),Y=Y.sibling;return B}function l(Y,B){return Y=ta(Y,B),Y.index=0,Y.sibling=null,Y}function c(Y,B,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<B?(Y.flags|=2,B):J):(Y.flags|=134217730,B)):(Y.flags|=1048576,B)}function m(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,B,J,dt){return B===null||B.tag!==6?(B=jc(J,Y.mode,dt),B.return=Y,B):(B=l(B,J),B.return=Y,B)}function N(Y,B,J,dt){var Vt=J.type;return Vt===V?(Y=it(Y,B,J.props.children,dt,J.key),wa(Y,J),Y):B!==null&&(B.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===Mt&&Mr(Vt)===B.type)?(B=l(B,J.props),wa(B,J),B.return=Y,B):(B=Pl(J.type,J.key,J.props,null,Y.mode,dt),wa(B,J),B.return=Y,B)}function W(Y,B,J,dt){return B===null||B.tag!==4||B.stateNode.containerInfo!==J.containerInfo||B.stateNode.implementation!==J.implementation?(B=Zc(J,Y.mode,dt),B.return=Y,B):(B=l(B,J.children||[]),B.return=Y,B)}function it(Y,B,J,dt,Vt){return B===null||B.tag!==7?(B=mr(J,Y.mode,dt,Vt),B.return=Y,B):(B=l(B,J),B.return=Y,B)}function gt(Y,B,J){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=jc(""+B,Y.mode,J),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return J=Pl(B.type,B.key,B.props,null,Y.mode,J),wa(J,B),J.return=Y,J;case R:return B=Zc(B,Y.mode,J),B.return=Y,B;case Mt:return B=Mr(B),gt(Y,B,J)}if(pt(B)||nt(B))return B=mr(B,Y.mode,J,null),B.return=Y,B;if(typeof B.then=="function")return gt(Y,ql(B),J);if(B.$$typeof===ut)return gt(Y,Gl(Y,B),J);Yl(Y,B)}return null}function X(Y,B,J,dt){var Vt=B!==null?B.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Vt!==null?null:E(Y,B,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return J.key===Vt?N(Y,B,J,dt):null;case R:return J.key===Vt?W(Y,B,J,dt):null;case Mt:return J=Mr(J),X(Y,B,J,dt)}if(pt(J)||nt(J))return Vt!==null?null:it(Y,B,J,dt,null);if(typeof J.then=="function")return X(Y,B,ql(J),dt);if(J.$$typeof===ut)return X(Y,B,Gl(Y,J),dt);Yl(Y,J)}return null}function $(Y,B,J,dt,Vt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(J)||null,E(B,Y,""+dt,Vt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case w:return Y=Y.get(dt.key===null?J:dt.key)||null,N(B,Y,dt,Vt);case R:return Y=Y.get(dt.key===null?J:dt.key)||null,W(B,Y,dt,Vt);case Mt:return dt=Mr(dt),$(Y,B,J,dt,Vt)}if(pt(dt)||nt(dt))return Y=Y.get(J)||null,it(B,Y,dt,Vt,null);if(typeof dt.then=="function")return $(Y,B,J,ql(dt),Vt);if(dt.$$typeof===ut)return $(Y,B,J,Gl(B,dt),Vt);Yl(B,dt)}return null}function Nt(Y,B,J,dt){for(var Vt=null,Ee=null,te=B,se=B=0,cn=null;te!==null&&se<J.length;se++){te.index>se?(cn=te,te=null):cn=te.sibling;var be=X(Y,te,J[se],dt);if(be===null){te===null&&(te=cn);break}t&&te&&be.alternate===null&&e(Y,te),B=c(be,B,se),Ee===null?Vt=be:Ee.sibling=be,Ee=be,te=cn}if(se===J.length)return i(Y,te),_e&&ea(Y,se),Vt;if(te===null){for(;se<J.length;se++)te=gt(Y,J[se],dt),te!==null&&(B=c(te,B,se),Ee===null?Vt=te:Ee.sibling=te,Ee=te);return _e&&ea(Y,se),Vt}for(te=r(te);se<J.length;se++)cn=$(te,Y,se,J[se],dt),cn!==null&&(t&&(be=cn.alternate,be!==null&&te.delete(be.key===null?se:be.key)),B=c(cn,B,se),Ee===null?Vt=cn:Ee.sibling=cn,Ee=cn);return t&&te.forEach(function(ja){return e(Y,ja)}),_e&&ea(Y,se),Vt}function Wt(Y,B,J,dt){if(J==null)throw Error(s(151));for(var Vt=null,Ee=null,te=B,se=B=0,cn=null,be=J.next();te!==null&&!be.done;se++,be=J.next()){te.index>se?(cn=te,te=null):cn=te.sibling;var ja=X(Y,te,be.value,dt);if(ja===null){te===null&&(te=cn);break}t&&te&&ja.alternate===null&&e(Y,te),B=c(ja,B,se),Ee===null?Vt=ja:Ee.sibling=ja,Ee=ja,te=cn}if(be.done)return i(Y,te),_e&&ea(Y,se),Vt;if(te===null){for(;!be.done;se++,be=J.next())be=gt(Y,be.value,dt),be!==null&&(B=c(be,B,se),Ee===null?Vt=be:Ee.sibling=be,Ee=be);return _e&&ea(Y,se),Vt}for(te=r(te);!be.done;se++,be=J.next())be=$(te,Y,se,be.value,dt),be!==null&&(t&&(cn=be.alternate,cn!==null&&te.delete(cn.key===null?se:cn.key)),B=c(be,B,se),Ee===null?Vt=be:Ee.sibling=be,Ee=be);return t&&te.forEach(function(iM){return e(Y,iM)}),_e&&ea(Y,se),Vt}function he(Y,B,J,dt){if(typeof J=="object"&&J!==null&&J.type===V&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case w:t:{for(var Vt=J.key;B!==null;){if(B.key===Vt){if(Vt=J.type,Vt===V){if(B.tag===7){i(Y,B.sibling),dt=l(B,J.props.children),wa(dt,J),dt.return=Y,Y=dt;break t}}else if(B.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===Mt&&Mr(Vt)===B.type){i(Y,B.sibling),dt=l(B,J.props),wa(dt,J),dt.return=Y,Y=dt;break t}i(Y,B);break}else e(Y,B);B=B.sibling}J.type===V?(dt=mr(J.props.children,Y.mode,dt,J.key),wa(dt,J),dt.return=Y,Y=dt):(dt=Pl(J.type,J.key,J.props,null,Y.mode,dt),wa(dt,J),dt.return=Y,Y=dt)}return m(Y);case R:t:{for(Vt=J.key;B!==null;){if(B.key===Vt)if(B.tag===4&&B.stateNode.containerInfo===J.containerInfo&&B.stateNode.implementation===J.implementation){i(Y,B.sibling),dt=l(B,J.children||[]),dt.return=Y,Y=dt;break t}else{i(Y,B);break}else e(Y,B);B=B.sibling}dt=Zc(J,Y.mode,dt),dt.return=Y,Y=dt}return m(Y);case Mt:return J=Mr(J),he(Y,B,J,dt)}if(pt(J))return Nt(Y,B,J,dt);if(nt(J)){if(Vt=nt(J),typeof Vt!="function")throw Error(s(150));return J=Vt.call(J),Wt(Y,B,J,dt)}if(typeof J.then=="function")return he(Y,B,ql(J),dt);if(J.$$typeof===ut)return he(Y,B,Gl(Y,J),dt);Yl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,B!==null&&B.tag===6?(i(Y,B.sibling),dt=l(B,J),dt.return=Y,Y=dt):(i(Y,B),dt=jc(J,Y.mode,dt),dt.return=Y,Y=dt),m(Y)):i(Y,B)}return function(Y,B,J,dt){try{To=0;var Vt=he(Y,B,J,dt);return ls=null,Vt}catch(te){if(te===os||te===Xl)throw te;var Ee=Gn(29,te,null,Y.mode);return Ee.lanes=dt,Ee.return=Y,Ee}}}var Tr=Om(!0),Pm=Om(!1),Da=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Ol(t),vm(t,null,i),e}return Ll(t,r,e,i),Ol(t)}function bo(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Z(t,i)}}function lf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var uf=!1;function Ao(){if(uf){var t=ss;if(t!==null)throw t}}function Ro(t,e,i,r){uf=!1;var l=t.updateQueue;Da=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,W=N.next;N.next=null,m===null?c=W:m.next=W,m=N;var it=t.alternate;it!==null&&(it=it.updateQueue,E=it.lastBaseUpdate,E!==m&&(E===null?it.firstBaseUpdate=W:E.next=W,it.lastBaseUpdate=N))}if(c!==null){var gt=l.baseState;m=0,it=W=N=null,E=c;do{var X=E.lane&-536870913,$=X!==E.lane;if($?(Me&X)===X:(r&X)===X){X!==0&&X===xr&&(uf=!0),it!==null&&(it=it.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Nt=t,Wt=E;X=e;var he=i;switch(Wt.tag){case 1:if(Nt=Wt.payload,typeof Nt=="function"){gt=Nt.call(he,gt,X);break t}gt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Wt.payload,X=typeof Nt=="function"?Nt.call(he,gt,X):Nt,X==null)break t;gt=O({},gt,X);break t;case 2:Da=!0}}X=E.callback,X!==null&&(t.flags|=64,$&&(t.flags|=8192),$=l.callbacks,$===null?l.callbacks=[X]:$.push(X))}else $={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},it===null?(W=it=$,N=gt):it=it.next=$,m|=X;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;$=E,E=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);it===null&&(N=gt),l.baseState=N,l.firstBaseUpdate=W,l.lastBaseUpdate=it,c===null&&(l.shared.lanes=0),Fa|=m,t.lanes=m,t.memoizedState=gt}}function zm(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Im(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)zm(i[t],e)}var La=Gt(null),Wl=Gt(0);function Bm(t,e){t=la,Xt(Wl,t),Xt(La,e),la=t|e.baseLanes}function cf(){Xt(Wl,la),Xt(La,La.current)}function ff(){la=Wl.current,wt(La),wt(Wl)}var En=Gt(null),Dn=null;function Oa(t){var e=t.alternate;Xt(Tn,Tn.current&1),Xt(En,t),Dn===null&&(e===null||La.current!==null||e.memoizedState!==null)&&(Dn=t)}function hf(t){Xt(Tn,Tn.current),Xt(En,t),Dn===null&&(Dn=t)}function Fm(t){t.tag===22?(Xt(Tn,Tn.current),Xt(En,t),Dn===null&&(Dn=t)):Pa()}function Pa(){Xt(Tn,Tn.current),Xt(En,En.current)}function Qn(t){wt(En),Dn===t&&(Dn=null),wt(Tn)}var Tn=Gt(0);function Co(t,e){Xt(En,En.current),Xt(Tn,e)}function df(t){wt(Tn),wt(En),Dn===t&&(Dn=null)}function jl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Ph(i)||zh(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var aa=0,fe=null,Ge=null,ln=null,Zl=!1,us=!1,br=!1,Kl=0,wo=0,cs=null,Tx=0;function en(){throw Error(s(321))}function pf(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Kn(t[i],e[i]))return!1;return!0}function mf(t,e,i,r,l,c){return aa=c,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_t.H=t===null||t.memoizedState===null?Mg:Eg,br=!1,c=i(r,l),br=!1,us&&(c=Gm(e,i,r,l)),Hm(t),c}function Hm(t){_t.H=iu;var e=Ge!==null&&Ge.next!==null;if(aa=0,ln=Ge=fe=null,Zl=!1,wo=0,cs=null,e)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&Hl(t)&&(un=!0))}function Gm(t,e,i,r){fe=t;var l=0;do{if(us&&(cs=null),wo=0,us=!1,25<=l)throw Error(s(301));if(l+=1,ln=Ge=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_t.H=Nx,c=e(i,r)}while(us);return c}function bx(){var t=_t.H,e=t.useState()[0];return e=typeof e.then=="function"?Do(e):e,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(fe.flags|=1024),e}function gf(){var t=Kl!==0;return Kl=0,t}function _f(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function vf(t){if(Zl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Zl=!1}aa=0,ln=Ge=fe=null,us=!1,wo=Kl=0,cs=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?fe.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(Ge===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=ln===null?fe.memoizedState:ln.next;if(e!==null)ln=e,Ge=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},ln===null?fe.memoizedState=ln=t:ln=ln.next=t}return ln}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var e=wo;return wo+=1,cs===null&&(cs=[]),t=Um(cs,t,e),e=fe,(ln===null?e.memoizedState:ln.next)===null&&(e=e.alternate,_t.H=e===null||e.memoizedState===null?Mg:Eg),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===ct)return;if(t.$$typeof===ut)return Mn(t)}throw Error(s(438,String(t)))}function Sf(t){var e=null,i=fe.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Ql(),fe.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=me;return e.index++,i}function ra(t,e){return typeof e=="function"?e(t):e}function $l(t){var e=an();return xf(e,Ge,t)}function xf(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var E=m=null,N=null,W=e,it=!1;do{var gt=W.lane&-536870913;if(gt!==W.lane?(Me&gt)===gt:(aa&gt)===gt){var X=W.revertLane;if(X===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),gt===xr&&(it=!0);else if((aa&X)===X){W=W.next,X===xr&&(it=!0);continue}else gt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=gt,m=c):N=N.next=gt,fe.lanes|=X,Fa|=X;gt=W.action,br&&i(c,gt),c=W.hasEagerState?W.eagerState:i(c,gt)}else X={lane:gt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=X,m=c):N=N.next=X,fe.lanes|=gt,Fa|=gt;W=W.next}while(W!==null&&W!==e);if(N===null?m=c:N.next=E,!Kn(c,t.memoizedState)&&(un=!0,it&&(i=ss,i!==null)))throw i;t.memoizedState=c,t.baseState=m,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function yf(t){var e=an(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do c=t(c,m.action),m=m.next;while(m!==l);Kn(c,e.memoizedState)||(un=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Vm(t,e,i){var r=fe,l=an(),c=_e;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=e();var m=!Kn((Ge||l).memoizedState,i);if(m&&(l.memoizedState=i,un=!0),l=l.queue,Tf(qm.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||m||ln!==null&&(ln.memoizedState.tag&1)!==0,fs(t?9:8,{destroy:void 0},km.bind(null,r,l,i,e),null),t){if(r.flags|=2048,qe===null)throw Error(s(349));c||(aa&127)!==0||Xm(r,e,i)}return i}function Xm(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=fe.updateQueue,e===null?(e=Ql(),fe.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function km(t,e,i,r){e.value=i,e.getSnapshot=r,Ym(e)&&Wm(t)}function qm(t,e,i){return i(function(){Ym(e)&&Wm(t)})}function Ym(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Kn(t,i)}catch{return!0}}function Wm(t){var e=pr(t,2);e!==null&&qn(e,t,2)}function Mf(t){var e=Pn();if(typeof t=="function"){var i=t;if(t=i(),br){dn(!0);try{i()}finally{dn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e}function jm(t,e,i,r){return t.baseState=i,xf(t,Ge,typeof r=="function"?r:ra)}function Ax(t,e,i,r,l){if(nu(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};_t.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,Zm(e,c)):(c.next=i.next,e.pending=i.next=c)}}function Zm(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=_t.T,m={};m.types=c!==null?c.types:null,_t.T=m;try{var E=i(l,r),N=_t.S;N!==null&&N(m,E),Km(t,e,E)}catch(W){Ef(t,e,W)}finally{c!==null&&m.types!==null&&(c.types=m.types),_t.T=c}}else try{c=i(l,r),Km(t,e,c)}catch(W){Ef(t,e,W)}}function Km(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Qm(t,e,r)},function(r){return Ef(t,e,r)}):Qm(t,e,i)}function Qm(t,e,i){e.status="fulfilled",e.value=i,Jm(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Zm(t,i)))}function Ef(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,Jm(e),e=e.next;while(e!==r)}t.action=null}function Jm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function $m(t,e){return e}function tg(t,e){if(_e){var i=qe.formState;if(i!==null){t:{var r=fe;if(_e){if(je){e:{for(var l=je,c=di;l.nodeType!==8;){if(!c){l=null;break e}if(l=mi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){je=mi(l.nextSibling),r=l.data==="F!";break t}}Ra(r)}r=!1}r&&(e=i[0])}}return i=Pn(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$m,lastRenderedState:e},i.queue=r,i=Sg.bind(null,fe,r),r.dispatch=i,r=Mf(!1),c=wf.bind(null,fe,!1,r.queue),r=Pn(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=Ax.bind(null,fe,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function eg(t){var e=an();return ng(e,Ge,t)}function ng(t,e,i){if(e=xf(t,e,$m)[0],t=$l(ra)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Do(e)}catch(m){throw m===os?Xl:m}else r=e;e=an();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(fe.flags|=2048,fs(9,{destroy:void 0},Rx.bind(null,l,i),null)),[r,c,t]}function Rx(t,e){t.action=e}function ig(t){var e=an(),i=Ge;if(i!==null)return ng(e,i,t);an(),e=e.memoizedState,i=an();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function fs(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=fe.updateQueue,e===null&&(e=Ql(),fe.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function ag(){return an().memoizedState}function tu(t,e,i,r){var l=Pn();fe.flags|=t,l.memoizedState=fs(1|e,{destroy:void 0},i,r===void 0?null:r)}function eu(t,e,i,r){var l=an();r=r===void 0?null:r;var c=l.memoizedState.inst;Ge!==null&&r!==null&&pf(r,Ge.memoizedState.deps)?l.memoizedState=fs(e,c,i,r):(fe.flags|=t,l.memoizedState=fs(1|e,c,i,r))}function rg(t,e){tu(8390656,8,t,e)}function Tf(t,e){eu(2048,8,t,e)}function Cx(t){fe.flags|=4;var e=fe.updateQueue;if(e===null)e=Ql(),fe.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function sg(t){var e=an().memoizedState;return Cx({ref:e,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function og(t,e){return eu(4,2,t,e)}function lg(t,e){return eu(4,4,t,e)}function ug(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cg(t,e,i){i=i!=null?i.concat([t]):null,eu(4,4,ug.bind(null,e,t),i)}function bf(){}function fg(t,e){var i=an();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&pf(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function hg(t,e){var i=an();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&pf(e,r[1]))return r[0];if(r=t(),br){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,e],r}function Af(t,e,i){return i===void 0||(aa&1073741824)!==0&&(Me&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=M_(),fe.lanes|=t,Fa|=t,i)}function dg(t,e,i,r){return Kn(i,e)?i:La.current!==null?(t=Af(t,i,r),Kn(t,e)||(un=!0),t):(aa&106)===0||(aa&1073741824)!==0&&(Me&261930)===0?(un=!0,t.memoizedState=i):(t=M_(),fe.lanes|=t,Fa|=t,e)}function pg(t,e,i,r,l){var c=Lt.p;Lt.p=c!==0&&8>c?c:8;var m=_t.T,E={};E.types=m!==null?m.types:null,_t.T=E,wf(t,!1,e,i);try{var N=l(),W=_t.S;if(W!==null&&W(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var it=Ex(N,r);Uo(t,e,it,ei(t))}else Uo(t,e,r,ei(t))}catch(gt){Uo(t,e,{then:function(){},status:"rejected",reason:gt},ei())}finally{Lt.p=c,m!==null&&E.types!==null&&(m.types=E.types),_t.T=m}}function wx(){}function Rf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=mg(t).queue;pg(t,l,e,L,i===null?wx:function(){return gg(t),i(r)})}function mg(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:L},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function gg(t){var e=mg(t);e.next===null&&(e=t.alternate.memoizedState),Uo(t,e.next.queue,{},ei())}function Cf(){return Mn(Ds)}function _g(){return an().memoizedState}function vg(){return an().memoizedState}function Dx(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ei();t=Ua(i);var r=Na(e,t,i);r!==null&&(qn(r,e,i),bo(r,e,i)),e={cache:ef()},t.payload=e;return}e=e.return}}function Ux(t,e,i){var r=ei();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},nu(t)?xg(e,i):(i=Yc(t,e,i,r),i!==null&&(qn(i,t,r),yg(i,e,r)))}function Sg(t,e,i){var r=ei();Uo(t,e,i,r)}function Uo(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(nu(t))xg(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var m=e.lastRenderedState,E=c(m,i);if(l.hasEagerState=!0,l.eagerState=E,Kn(E,m))return Ll(t,e,l,0),qe===null&&Nl(),!1}catch{}if(i=Yc(t,e,l,r),i!==null)return qn(i,t,r),yg(i,e,r),!0}return!1}function wf(t,e,i,r){if(r={lane:2,revertLane:Sh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},nu(t)){if(e)throw Error(s(479))}else e=Yc(t,i,r,2),e!==null&&qn(e,t,2)}function nu(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function xg(t,e){us=Zl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function yg(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,Z(t,i)}}var iu={readContext:Mn,use:Jl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},Mg={readContext:Mn,use:Jl,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:rg,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,tu(4194308,4,ug.bind(null,e,t),i)},useLayoutEffect:function(t,e){return tu(4194308,4,t,e)},useInsertionEffect:function(t,e){tu(4,2,t,e)},useMemo:function(t,e){var i=Pn();e=e===void 0?null:e;var r=t();if(br){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=Pn();if(i!==void 0){var l=i(e);if(br){dn(!0);try{i(e)}finally{dn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Ux.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:function(t){t=Mf(t);var e=t.queue,i=Sg.bind(null,fe,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:bf,useDeferredValue:function(t,e){var i=Pn();return Af(i,t,e)},useTransition:function(){var t=Mf(!1);return t=pg.bind(null,fe,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=fe,l=Pn();if(_e){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),qe===null)throw Error(s(349));(Me&127)!==0||Xm(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,rg(qm.bind(null,r,c,t),[t]),r.flags|=2048,fs(9,{destroy:void 0},km.bind(null,r,c,i,e),null),i},useId:function(){var t=Pn(),e=qe.identifierPrefix;if(_e){var i=Pi,r=Oi;i=(r&~(1<<32-Cn(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Kl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=Tx++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Cf,useFormState:tg,useActionState:tg,useOptimistic:function(t){var e=Pn();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=wf.bind(null,fe,!0,i),i.dispatch=e,[t,e]},useMemoCache:Sf,useCacheRefresh:function(){return Pn().memoizedState=Dx.bind(null,fe)},useEffectEvent:function(t){var e=Pn(),i={impl:t};return e.memoizedState=i,function(){if((Le&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Eg={readContext:Mn,use:Jl,useCallback:fg,useContext:Mn,useEffect:Tf,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:$l,useRef:ag,useState:function(){return $l(ra)},useDebugValue:bf,useDeferredValue:function(t,e){var i=an();return dg(i,Ge.memoizedState,t,e)},useTransition:function(){var t=$l(ra)[0],e=an().memoizedState;return[typeof t=="boolean"?t:Do(t),e]},useSyncExternalStore:Vm,useId:_g,useHostTransitionStatus:Cf,useFormState:eg,useActionState:eg,useOptimistic:function(t,e){var i=an();return jm(i,Ge,t,e)},useMemoCache:Sf,useCacheRefresh:vg,useEffectEvent:sg},Nx={readContext:Mn,use:Jl,useCallback:fg,useContext:Mn,useEffect:Tf,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:yf,useRef:ag,useState:function(){return yf(ra)},useDebugValue:bf,useDeferredValue:function(t,e){var i=an();return Ge===null?Af(i,t,e):dg(i,Ge.memoizedState,t,e)},useTransition:function(){var t=yf(ra)[0],e=an().memoizedState;return[typeof t=="boolean"?t:Do(t),e]},useSyncExternalStore:Vm,useId:_g,useHostTransitionStatus:Cf,useFormState:ig,useActionState:ig,useOptimistic:function(t,e){var i=an();return Ge!==null?jm(i,Ge,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:vg,useEffectEvent:sg};function Df(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:O({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Uf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ei(),l=Ua(r);l.payload=e,i!=null&&(l.callback=i),e=Na(t,l,r),e!==null&&(qn(e,t,r),bo(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ei(),l=Ua(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Na(t,l,r),e!==null&&(qn(e,t,r),bo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ei(),r=Ua(i);r.tag=2,e!=null&&(r.callback=e),e=Na(t,r,i),e!==null&&(qn(e,t,i),bo(e,t,i))}};function Tg(t,e,i,r,l,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):e.prototype&&e.prototype.isPureReactComponent?!_o(i,r)||!_o(l,c):!0}function bg(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Uf.enqueueReplaceState(e,e.state,null)}function Ar(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Ag(t){Ul(t)}function Rg(t){console.error(t)}function Cg(t){Ul(t)}function au(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function wg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Nf(t,e,i){return i=Ua(i),i.tag=3,i.payload={element:null},i.callback=function(){au(t,e)},i}function Dg(t){return t=Ua(t),t.tag=3,t}function Ug(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){wg(e,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){wg(e,i,r),typeof l!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Lx(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&vr(e,i,l,!0),i=En.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Dn===null?bu():i.alternate===null&&nn===0&&(nn=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===kl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),gh(t,r,l)),!1;case 22:return i.flags|=65536,r===kl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),gh(t,r,l)),!1}throw Error(s(435,i.tag))}return gh(t,r,l),bu(),!1}if(_e)return e=En.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==Qc&&(t=Error(s(422),{cause:r}),xo(ci(t,i)))):(r!==Qc&&(e=Error(s(423),{cause:r}),xo(ci(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=ci(r,i),l=Nf(t.stateNode,r,l),lf(t,l),nn!==4&&(nn=2)),!1;var c=Error(s(520),{cause:r});if(c=ci(c,i),Fo===null?Fo=[c]:Fo.push(c),nn!==4&&(nn=2),e===null)return!0;r=ci(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Nf(i.stateNode,r,t),lf(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ha===null||!Ha.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Dg(l),Ug(l,t,i,r),lf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Lf=Error(s(461)),un=!1;function mn(t,e,i,r){e.child=t===null?Pm(e,null,i,r):Tr(e,t.child,i,r)}function Ng(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var m={};for(var E in r)E!=="ref"&&(m[E]=r[E])}else m=r;return Sr(e),r=mf(t,e,i,m,c,l),E=gf(),t!==null&&!un?(_f(t,e,l),sa(t,e,l)):(_e&&E&&Il(e),e.flags|=1,mn(t,e,r,l),e.child)}function Lg(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!Wc(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,Og(t,e,c,r,l)):(t=Pl(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Gf(t,l)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:_o,i(m,r)&&t.ref===e.ref)return sa(t,e,l)}return e.flags|=1,t=ta(c,r),t.ref=e.ref,t.return=e,e.child=t}function Og(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(_o(c,r)&&t.ref===e.ref)if(un=!1,e.pendingProps=r=c,Gf(t,l))(t.flags&131072)!==0&&(un=!0);else return e.lanes=t.lanes,sa(t,e,l)}return Of(t,e,i,r,l)}function Pg(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return zg(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(e,c!==null?c.cachePool:null),c!==null?Bm(e,c):cf(),Fm(e);else return r=e.lanes=536870912,zg(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Vl(e,c.cachePool),Bm(e,c),Pa(),e.memoizedState=null):(t!==null&&Vl(e,null),cf(),Pa());return mn(t,e,l,i),e.child}function No(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function zg(t,e,i,r,l){var c=af();return c=c===null?null:{parent:on._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&Vl(e,null),cf(),Fm(e),t!==null&&vr(t,e,r,!0),e.childLanes=l,null}function ru(t,e){return e=su({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ig(t,e,i){return Tr(e,t.child,null,i),t=ru(e,e.pendingProps),t.flags|=2,Qn(e),e.memoizedState=null,t}function Ox(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=ru(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},No(null,t);if(hf(e),(t=je)?(t=uv(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=xm(t),i.return=e,e.child=i,vn=e,je=null)):t=null,t===null)throw Ra(e);return e.lanes=536870912,null}return ru(e,r)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(hf(e),l)if(e.flags&256)e.flags&=-257,e=Ig(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(un||vr(t,e,i,!1),l=(i&t.childLanes)!==0,un||l){if(La.current===null){if(r=qe,r!==null&&(m=rt(r,i),m!==0&&m!==c.retryLane))throw c.retryLane=m,pr(t,m),qn(r,t,m),Lf;bu()}e=Ig(t,e,i)}else t=c.treeContext,je=mi(m.nextSibling),vn=e,_e=!0,Aa=null,di=!1,t!==null&&Em(e,t),e=ru(e,r),e.flags|=134221824;return e}return t=ta(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function hs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Of(t,e,i,r,l){return Sr(e),i=mf(t,e,i,r,void 0,l),r=gf(),t!==null&&!un?(_f(t,e,l),sa(t,e,l)):(_e&&r&&Il(e),e.flags|=1,mn(t,e,i,l),e.child)}function Bg(t,e,i,r,l,c){return Sr(e),e.updateQueue=null,i=Gm(e,r,i,l),Hm(t),r=gf(),t!==null&&!un?(_f(t,e,c),sa(t,e,c)):(_e&&r&&Il(e),e.flags|=1,mn(t,e,i,c),e.child)}function Fg(t,e,i,r,l){if(Sr(e),e.stateNode===null){var c=ns,m=i.contextType;typeof m=="object"&&m!==null&&(c=Mn(m)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Uf,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},sf(e),m=i.contextType,c.context=typeof m=="object"&&m!==null?Mn(m):ns,c.state=e.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Df(e,i,m,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Uf.enqueueReplaceState(c,c.state,null),Ro(e,r,c,l),Ao(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var E=e.memoizedProps,N=Ar(i,E);c.props=N;var W=c.context,it=i.contextType;m=ns,typeof it=="object"&&it!==null&&(m=Mn(it));var gt=i.getDerivedStateFromProps;it=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,it||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==m)&&bg(e,c,r,m),Da=!1;var X=e.memoizedState;c.state=X,Ro(e,r,c,l),Ao(),W=e.memoizedState,E||X!==W||Da?(typeof gt=="function"&&(Df(e,i,gt,r),W=e.memoizedState),(N=Da||Tg(e,i,N,r,X,W,m))?(it||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=W),c.props=r,c.state=W,c.context=m,r=N):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,of(t,e),m=e.memoizedProps,it=Ar(i,m),c.props=it,gt=e.pendingProps,X=c.context,W=i.contextType,N=ns,typeof W=="object"&&W!==null&&(N=Mn(W)),E=i.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==gt||X!==N)&&bg(e,c,r,N),Da=!1,X=e.memoizedState,c.state=X,Ro(e,r,c,l),Ao();var $=e.memoizedState;m!==gt||X!==$||Da||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof E=="function"&&(Df(e,i,E,r),$=e.memoizedState),(it=Da||Tg(e,i,it,r,X,$,N)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,$,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,$,N)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=$),c.props=r,c.state=$,c.context=N,r=it):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,hs(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=Tr(e,t.child,null,l),e.child=Tr(e,null,i,l)):mn(t,e,i,l),e.memoizedState=c.state,t=e.child):t=sa(t,e,l),t}function Hg(t,e,i,r){return gr(),e.flags|=256,mn(t,e,i,r),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(t){return{baseLanes:t,cachePool:wm()}}function If(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ti),t}function Gg(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(Tn.current&2)!==0),m&&(l=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(_e){if(l?Oa(e):Pa(),(t=je)?(t=uv(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=xm(t),i.return=e,e.child=i,vn=e,je=null)):t=null,t===null)throw Ra(e);return zh(t)?e.lanes=32:e.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Pa(),l=e.mode,c=su({mode:"hidden",children:c},l),r=mr(r,l,i,null),c.return=e,r.return=e,c.sibling=r,e.child=c,r=e.child,r.memoizedState=zf(i),r.childLanes=If(t,m,i),e.memoizedState=Pf,No(null,r)):(Oa(e),Bf(e,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return Px(t,e,c,m,r,N,E,i)}return l?(Pa(),l=r.fallback,c=e.mode,E=t.child,N=E.sibling,r=ta(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=ta(N,l):(l=mr(l,c,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,No(null,r),r=e.child,l=t.child.memoizedState,l===null?l=zf(i):(c=l.cachePool,c!==null?(E=on._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=wm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=If(t,m,i),e.memoizedState=Pf,No(t.child,r)):(Oa(e),i=t.child,t=i.sibling,i=ta(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=i,e.memoizedState=null,i)}function Bf(t,e){return e=su({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function su(t,e){return t=Gn(22,t,null,e),t.lanes=0,t}function ou(t,e,i){return Tr(e,t.child,null,i),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Px(t,e,i,r,l,c,m,E){if(i)return e.flags&256?(Oa(e),e.flags&=-257,ou(t,e,E)):e.memoizedState!==null?(Pa(),e.child=t.child,e.flags|=128,null):(Pa(),c=l.fallback,m=e.mode,l=su({mode:"visible",children:l.children},m),c=mr(c,m,E,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Tr(e,t.child,null,E),l=e.child,l.memoizedState=zf(E),l.childLanes=If(t,r,E),e.memoizedState=Pf,No(null,l));if(Oa(e),zh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,xo({value:l,source:null,stack:null})),ou(t,e,E)}if(un||vr(t,e,E,!1),r=(E&t.childLanes)!==0,un||r){if(La.current!==null)return ou(t,e,E);if(r=qe,r!==null&&(l=rt(r,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,pr(t,l),qn(r,t,l),Lf;return Ph(c)||bu(),ou(t,e,E)}return Ph(c)?(e.flags|=192,e.child=t.child,null):(t=m.treeContext,je=mi(c.nextSibling),vn=e,_e=!0,Aa=null,di=!1,t!==null&&Em(e,t),e=Bf(e,l.children),e.flags|=134221824,e)}function Vg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fl(t.return,e,i)}function Xg(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&jl(i)===null&&(e=t),t=t.sibling}return e}function lu(t,e,i,r,l,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(m.isBackwards=e,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=l,m.treeForkCount=c)}function Ff(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function Hf(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var m=Tn.current;if(e.flags&128)return Co(e,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,e.flags|=128):m&=1,Co(e,m),l==="backwards"&&t!==null?(Ff(t),mn(t,e,r,i),Ff(t)):mn(t,e,r,i),r=_e?So:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vg(t,i,e);else if(t.tag===19)Vg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Xg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Ff(e)),lu(e,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&jl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}lu(e,!0,i,null,c,r);break;case"together":lu(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Xg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),lu(e,!1,l,i,c,r)}return e.child}function kg(t,e,i){var r=e.pendingProps;return Ca(e,e.type,r.value),mn(t,e,r.children,i),e.child}function sa(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Fa|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(vr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=ta(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ta(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Gf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function zx(t,e,i){switch(e.tag){case 3:U(e,e.stateNode.containerInfo),Ca(e,on,t.memoizedState.cache),gr();break;case 27:case 5:tt(e);break;case 4:U(e,e.stateNode.containerInfo);break;case 10:Ca(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,hf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Oa(e),e.flags|=128,null;r=vr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?Gg(t,e,i):(Oa(e),t=sa(t,e,i),t!==null?t.sibling:null)}Oa(e);break;case 19:if(e.flags&128)return Hf(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(vr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Hf(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Co(e,Tn.current),r)break;return null;case 22:return e.lanes=0,Pg(t,e,i,e.pendingProps);case 24:Ca(e,on,t.memoizedState.cache)}return sa(t,e,i)}function qg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)un=!0;else{if(!Gf(t,i)&&(e.flags&128)===0)return un=!1,zx(t,e,i);un=(t.flags&131072)!==0}else un=!1,_e&&(e.flags&1048576)!==0&&Mm(e,So,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Mr(e.elementType),e.type=t,typeof t=="function")Wc(t)?(r=Ar(t,r),e.tag=1,e=Fg(null,e,t,r,i)):(e.tag=0,e=Of(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===q){e.tag=11,e=Ng(null,e,t,r,i);break t}else if(l===xt){e.tag=14,e=Lg(null,e,t,r,i);break t}else if(l===ut){e.tag=10,e.type=t,e=kg(null,e,i);break t}}throw e=ft(t)||t,Error(s(306,e,""))}}return e;case 0:return Of(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=Ar(r,e.pendingProps),Fg(t,e,r,l,i);case 3:t:{if(U(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,of(t,e),Ro(e,r,null,i);var m=e.memoizedState;if(r=m.cache,Ca(e,on,r),r!==c.cache&&tf(e,[on],i,!0),Ao(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Hg(t,e,r,i);break t}else if(r!==l){l=ci(Error(s(424)),e),xo(l),e=Hg(t,e,r,i);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=mi(t.firstChild),vn=e,_e=!0,Aa=null,di=!0,i=Pm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(gr(),r===l){e=sa(t,e,i);break t}mn(t,e,r,i)}e=e.child}return e;case 26:return hs(t,e),t===null?(i=gv(e.type,null,e.pendingProps,null))?e.memoizedState=i:_e||(e.stateNode=Z_(e.type,e.pendingProps,ke.current,e)):e.memoizedState=gv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return tt(e),t===null&&_e&&(r=e.stateNode=hv(e.type,e.pendingProps,ke.current),vn=e,di=!0,l=je,Xa(e.type)?(Ih=l,je=mi(r.firstChild)):je=l),mn(t,e,e.pendingProps.children,i),hs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&_e&&((l=r=je)&&(r=Dy(r,e.type,e.pendingProps,di),r!==null?(e.stateNode=r,vn=e,je=mi(r.firstChild),di=!1,l=!0):l=!1),l||Ra(e)),tt(e),l=e.type,c=e.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,Ch(l,c)?r=null:m!==null&&Ch(l,m)&&(e.flags|=32),e.memoizedState!==null&&(l=mf(t,e,bx,null,null,i),Ds._currentValue=l),hs(t,e),mn(t,e,r,i),e.child;case 6:return t===null&&_e&&((t=i=je)&&(i=Uy(i,e.pendingProps,di),i!==null?(e.stateNode=i,vn=e,je=null,t=!0):t=!1),t||Ra(e)),null;case 13:return Gg(t,e,i);case 4:return U(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Tr(e,null,r,i):mn(t,e,r,i),e.child;case 11:return Ng(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,hs(t,e),mn(t,e,r,i),e.child;case 8:return mn(t,e,e.pendingProps.children,i),e.child;case 12:return mn(t,e,e.pendingProps.children,i),e.child;case 10:return kg(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,Sr(e),l=Mn(l),r=r(l),e.flags|=1,mn(t,e,r,i),e.child;case 14:return Lg(t,e,e.type,e.pendingProps,i);case 15:return Og(t,e,e.type,e.pendingProps,i);case 19:return Hf(t,e,i);case 31:return Ox(t,e,i);case 22:return Pg(t,e,i,e.pendingProps);case 24:return Sr(e),r=Mn(on),t===null?(l=af(),l===null&&(l=qe,c=ef(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},sf(e),Ca(e,on,l)):((t.lanes&i)!==0&&(of(t,e),Ro(e,null,null,i),Ao()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Ca(e,on,r)):(r=c.cache,Ca(e,on,r),r!==l.cache&&tf(e,[on],i,!0))),mn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:_e&&Il(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:hs(t,e),mn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function oa(t){t.flags|=4}function Vf(t,e,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?xv(e,r):xv(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(A_())t.flags|=8192;else throw Er=kl,rf}else t.flags&=-16777217}function Yg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!yv(e))if(A_())t.flags|=8192;else throw Er=kl,rf}function uu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yl():536870912,t.lanes|=e,_s|=e)}function Lo(t,e){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function Ix(t,e,i){var r=e.pendingProps;switch(Kc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return Ze(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),ia(on),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rs(e)?oa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Jc())),Ze(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(oa(e),c!==null?(Ze(e),Yg(e,c)):(Ze(e),Vf(e,l,null,r,i))):c?c!==t.memoizedState?(oa(e),Ze(e),Yg(e,c)):(Ze(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&oa(e),Ze(e),Vf(e,l,t,r,i)),null;case 27:if(mt(e),i=ke.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ze(e),e.subtreeFlags&=-33554433,null}t=Ft.current,rs(e)?Tm(e):(t=hv(l,r,i),e.stateNode=t,oa(e))}return Ze(e),e.subtreeFlags&=-33554433,null;case 5:if(mt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ze(e),e.subtreeFlags&=-33554433,null}if(c=Ft.current,rs(e))Tm(e);else{var m=ko(ke.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}c[Dt]=e,c[Yt]=r;t:for(m=e.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break t;for(;m.sibling===null;){if(m.return===null||m.return===e)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}e.stateNode=c;t:switch(An(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&oa(e)}}return Ze(e),e.subtreeFlags&=-33554433,Vf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=ke.current,rs(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=vn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Dt]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||q_(t.nodeValue,i)),t||Ra(e,!0)}else t=ko(t).createTextNode(r),t[Dt]=e,e.stateNode=t}return Ze(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=rs(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ze(e),t=!1}else i=Jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Qn(e),e):(Qn(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Ze(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=rs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Dt]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ze(e),l=!1}else l=Jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Qn(e),e):(Qn(e),null)}return Qn(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),uu(e,e.updateQueue),Ze(e),null);case 4:return T(),t===null&&Eh(e.stateNode.containerInfo),e.flags|=67108864,Ze(e),null;case 10:return ia(e.type),Ze(e),null;case 19:if(df(e),r=e.memoizedState,r===null)return Ze(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)Lo(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=jl(t),c!==null){for(e.flags|=128,Lo(r,!1),t=c.updateQueue,e.updateQueue=t,uu(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Sm(i,t),i=i.sibling;return Co(e,Tn.current&1|2),_e&&ea(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&H()>yu&&(e.flags|=128,l=!0,Lo(r,!1),e.lanes=4194304)}else{if(!l)if(t=jl(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,uu(e,t),Lo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return Ze(e),null}else 2*H()-r.renderingStartTime>yu&&i!==536870912&&(e.flags|=128,l=!0,Lo(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=H(),t.sibling=null,c=Tn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||_e?Co(e,c):(i=c,Xt(En,e),Xt(Tn,i),Dn===null&&(Dn=e)),_e&&ea(e,r.treeForkCount),t}return Ze(e),null;case 22:case 23:return Qn(e),ff(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),i=e.updateQueue,i!==null&&uu(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&wt(yr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ia(on),Ze(e),null;case 25:return null;case 30:return e.flags|=33554432,Ze(e),null}throw Error(s(156,e.tag))}function Bx(t,e){switch(Kc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ia(on),T(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mt(e),null;case 31:if(e.memoizedState!==null){if(Qn(e),e.alternate===null)throw Error(s(340));gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Qn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return df(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return T(),null;case 10:return ia(e.type),null;case 22:case 23:return Qn(e),ff(),t!==null&&wt(yr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ia(on),null;case 25:return null;default:return null}}function Wg(t,e){switch(Kc(e),e.tag){case 3:ia(on),T();break;case 26:case 27:case 5:mt(e);break;case 4:T();break;case 31:e.memoizedState!==null&&Qn(e);break;case 13:Qn(e);break;case 19:df(e);break;case 10:ia(e.type);break;case 22:case 23:Qn(e),ff(),t!==null&&wt(yr);break;case 24:ia(on)}}function Oo(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,m=i.inst;r=c(),m.destroy=r}i=i.next}while(i!==l)}}catch(E){Ie(e,e.return,E)}}function za(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var m=r.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=e;var N=i,W=E;try{W()}catch(it){Ie(l,N,it)}}}r=r.next}while(r!==c)}}catch(it){Ie(e,e.return,it)}}function jg(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Im(e,i)}catch(r){Ie(t,t.return,r)}}}function Zg(t,e,i){i.props=Ar(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Ie(t,e,r)}}function zi(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=Ji(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=nv(c)),r=l.ref;break;case 7:if(t.stateNode===null){var m=new ni(t);p(t.child,!1,Cy,m,void 0,void 0),t.stateNode=m}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Ie(t,e,E)}}function bn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Ie(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Ie(t,e,l)}else i.current=null}function cu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)lv(t.stateNode,e[i])}function Kg(t){for(var e=t.return;e!==null&&(kf(e)&&lv(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Po(t){for(var e=t.return;e!==null&&(kf(e)&&wy(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Xf(t){return t.tag===5||t.tag===3||t.tag===27}function kf(t){return t&&t.tag===7&&t.stateNode!==null}function qf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Ie(t,t.return,l)}}function Yf(t,e,i){try{var r=t.stateNode;cy(r,t.type,i,e),r[Yt]=e}catch(l){Ie(t,t.return,l)}}function Qg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function Wf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Li)),cu(t,r),we=!0;else if(l!==4&&(l===27&&(cu(t,r),r=null,Xa(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(jf(t,e,i,r),t=t.sibling;t!==null;)jf(t,e,i,r),t=t.sibling}function fu(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),cu(t,r),we=!0;else if(l!==4&&(l===27&&(cu(t,r),r=null,Xa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(fu(t,e,i,r),t=t.sibling;t!==null;)fu(t,e,i,r),t=t.sibling}function Jg(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);An(e,r,i),e[Dt]=t,e[Yt]=i}catch(c){Ie(t,t.return,c)}}var hu=!1,Jn=null;function $g(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(hu=!0)}var Ii=null;function t_(){var t=Ii;return Ii=null,t}var Vn=0;function ds(t,e,i,r,l){return Vn=0,e_(t.child,e,i,r,l)}function e_(t,e,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(r!==null){var E=Uh(m);r.push(E),E.view&&(c=!0)}else c||Uh(m).view&&(c=!0);hu=!0,tv(m,Vn===0?e:e+"_"+Vn,i),Vn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||e_(t.child,e,i,r,l)&&(c=!0));t=t.sibling}return c}function Bi(t,e){for(;t!==null;)t.tag===5?ev(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Bi(t.child,e)),t=t.sibling}function du(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(du(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=$i(e.default,e.share),e!=="none"&&(ds(t,i,e,null,!1)||Bi(t.child,!1))}t=t.sibling}}function Zf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=Ji(r,i),c=$i(r.default,i.paired?r.share:r.enter);c!=="none"?ds(t,l,c,null,!1)?(du(t),i.paired||e||ys(t,r.onEnter)):Bi(t.child,!1):du(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Zf(t,e),t=t.sibling;else du(t)}function Kf(t){if(Jn!==null&&Jn.size!==0){var e=Jn;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var c=$i(i.default,i.share);if(c!=="none"&&(ds(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,ys(t,i.onShare)):Bi(t.child,!1)),e.delete(r),e.size===0)break}}}Kf(t)}t=t.sibling}}}function Qf(t){if(t.tag===30){var e=t.memoizedProps,i=Ji(e,t.stateNode),r=Jn!==null?Jn.get(i):void 0,l=$i(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ds(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,Jn.delete(i),ys(t,e.onShare)):ys(t,e.onExit):Bi(t.child,!1)),Jn!==null&&Kf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Qf(t),t=t.sibling;else Jn!==null&&Kf(t)}function n_(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=Ji(e,t.stateNode);e=$i(e.default,e.update),t.flags&=-5,e!=="none"&&ds(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&n_(t);t=t.sibling}}function Jf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Bi(t.child,!1))}Jf(t)}t=t.sibling}}function pu(t){if(t.tag===30)t.stateNode.paired=null,Bi(t.child,!1),Jf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)pu(t),t=t.sibling;else Jf(t)}function i_(t){for(t=t.child;t!==null;)t.tag===30?Bi(t.child,!1):(t.subtreeFlags&33554432)!==0&&i_(t),t=t.sibling}function $f(t,e,i,r,l,c,m){for(var E=!1;e!==null;){if(e.tag===5){var N=e.stateNode;if(c!==null&&Vn<c.length){var W=c[Vn],it=Uh(N);(W.view||it.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(it.clip)gt=!0;else{gt=W.rect;var X=it.rect;gt=gt.y!==X.y||gt.x!==X.x||gt.height!==X.height||gt.width!==X.width}gt&&(t.flags|=4),it.abs?it=!W.abs:(W=W.rect,it=it.rect,it=W.height!==it.height||W.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&tv(N,Vn===0?i:i+"_"+Vn,l),E&&(t.flags&4)!==0||(Ii===null&&(Ii=[]),Ii.push(N,Vn===0?r:r+"_"+Vn,e.memoizedProps)),Vn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&m?t.flags|=e.flags&32:$f(t,e.child,i,r,l,c,m)&&(E=!0));e=e.sibling}return E}function a_(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=Ji(i,r),c=$i(i.default,i.update),m;m=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Vn=0,l=$f(r,E,l,l,c,m,!1),(t.flags&4)!==0&&l&&ys(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&a_(t);t=t.sibling}}var Sn=!1,Pe=!1,Fi=!1,th=!1,r_=typeof WeakSet=="function"?WeakSet:Set,xn=null,Hi=!1,zo=!1,mu=!1,eh=!1;function Fx(t,e,i){if(t=t.containerInfo,Ah=Us,t=um(t),Hc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,N=-1,W=-1,it=0,gt=0,X=t,$=null;e:for(;;){for(var Nt;X!==r||c!==0&&X.nodeType!==3||(N=E+c),X!==m||l!==0&&X.nodeType!==3||(W=E+l),X.nodeType===3&&(E+=X.nodeValue.length),(Nt=X.firstChild)!==null;)$=X,X=Nt;for(;;){if(X===t)break e;if($===r&&++it===c&&(N=E),$===m&&++gt===l&&(W=E),(Nt=X.nextSibling)!==null)break;X=$,$=X.parentNode}X=Nt}r=N===-1||W===-1?null:{start:N,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rh={focusedElem:t,selectionRange:r},Us=!1,i=(i&335544064)===i,xn=e,e=i?9270:1024;xn!==null;){if(t=xn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&Qf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&$g(t),gu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&Qf(r),gu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&$g(t),gu(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,xn=r):(i&&n_(t),gu(i))}}Jn=null}function gu(t){for(;xn!==null;){var e=xn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=e.stateNode;try{var m=Ar(e.type,l);i=c.getSnapshotBeforeUpdate(m,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Ie(e,e.return,E)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Oh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Oh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=Ji(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=$i(l.default,l.update),l!=="none"&&ds(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,xn=r;break}xn=e.return}}function s_(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(t,i),r&4&&Oo(5,i);break;case 1:if(Gi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(m){Ie(i,i.return,m)}else{var l=Ar(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Ie(i,i.return,m)}}r&64&&jg(i),r&512&&zi(i,i.return);break;case 3:if(Gi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Im(t,e)}catch(m){Ie(i,i.return,m)}}break;case 27:e===null&&r&4&&Jg(i);case 26:case 5:Gi(t,i),e===null&&r&4&&qf(i),r&512&&zi(i,i.return);break;case 12:Gi(t,i);break;case 31:Gi(t,i),r&4&&c_(t,i);break;case 13:Gi(t,i),r&4&&f_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Qx.bind(null,i),Ny(t,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var c=e!==null&&e.memoizedState!==null||Pe;e=Sn,l=Pe,Sn=r,(Pe=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Mi(t,i,r)):Gi(t,i),Sn=e,Pe=l}break;case 30:Gi(t,i),r&512&&zi(i,i.return);break;case 7:r&512&&zi(i,i.return);default:Gi(t,i)}}function nh(t,e){for(t=t.child;t!==null;)o_(t,e),t=t.sibling}function o_(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){Ie(t,t.return,N)}ih(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,we=!0}catch(N){Ie(t,t.return,N)}break;case 18:try{var E=t.stateNode;e?$_(E,!0):$_(t.stateNode,!1)}catch(N){Ie(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&nh(t,e);break;default:nh(t,e)}}function ih(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:o_(i,r);break t;case 22:i.memoizedState===null&&ih(i,r);break t;default:ih(i,r)}}t=t.sibling}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ne(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Xn=!1;function xi(t,e,i){for(i=i.child;i!==null;)u_(t,e,i),i=i.sibling}function u_(t,e,i){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(ye,i)}catch{}switch(i.tag){case 26:Pe||bn(i,e),xi(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Pe&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Pe||bn(i,e),Po(i);var r=Qe,l=Xn;Xa(i.type)&&(Qe=i.stateNode,Xn=!1),xi(t,e,i),dv(i.stateNode,i.type,i.memoizedProps),Qe=r,Xn=l;break;case 5:Pe||bn(i,e),Po(i);case 6:if(i.tag===6&&Po(i),r=Qe,l=Xn,Qe=null,xi(t,e,i),Qe=r,Xn=l,Qe!==null)if(Xn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(i.stateNode),we=!0}catch(c){Ie(i,e,c)}else try{Qe.removeChild(i.stateNode),we=!0}catch(c){Ie(i,e,c)}break;case 18:Qe!==null&&(Xn?(t=Qe,J_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ns(t)):J_(Qe,i.stateNode));break;case 4:r=Qe,l=Xn,Qe=i.stateNode.containerInfo,Xn=!0,xi(t,e,i),Qe=r,Xn=l;break;case 0:case 11:case 14:case 15:za(2,i,e),Pe||za(4,i,e),xi(t,e,i);break;case 1:Pe||(bn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Zg(i,e,r)),xi(t,e,i);break;case 21:xi(t,e,i);break;case 22:Pe=(r=Pe)||i.memoizedState!==null,xi(t,e,i),Pe=r;break;case 30:bn(i,e),xi(t,e,i);break;case 7:Pe||bn(i,e),xi(t,e,i);break;default:xi(t,e,i)}}function c_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ns(t)}catch(i){Ie(e,e.return,i)}}}function f_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ns(t)}catch(i){Ie(e,e.return,i)}}function Hx(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new r_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new r_),e;default:throw Error(s(435,t.tag))}}function _u(t,e){var i=Hx(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=Jx.bind(null,t,r);r.then(l,l)}})}function zn(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],m=t,E=e,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(Xa(N.type)){Qe=N.stateNode,Xn=!1;break t}break;case 5:Qe=N.stateNode,Xn=!1;break t;case 3:case 4:Qe=N.stateNode.containerInfo,Xn=!0;break t}N=N.return}if(Qe===null)throw Error(s(160));u_(m,E,c),Qe=null,Xn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)h_(e,t,i),e=e.sibling}var yi=null;function h_(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var m=r[c];m.ref.impl=m.nextImpl}zn(e,t,i),In(t),l&4&&(za(3,t,t.return),Oo(3,t),za(5,t,t.return));break;case 1:zn(e,t,i),In(t),l&512&&(Pe||r===null||bn(r,r.return)),l&64&&Sn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(c=yi,zn(e,t,i),In(t),l&512&&(Pe||r===null||bn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(Sn)t.stateNode=Z_(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ue]||r[Dt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),An(r,e,i),r[Dt]=t,Ce(r),e=r;break t;case"link":if(c=Sv("link","href",l).get(e+(i.href||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(m,1);break e}}r=l.createElement(e),An(r,e,i),l.head.appendChild(r);break;case"meta":if(c=Sv("meta","content",l).get(e+(i.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(m,1);break e}}r=l.createElement(e),An(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[Dt]=t,Ce(r),e=r}t.stateNode=e}else Sn||Gh(c,t.type,t.stateNode);else t.stateNode=vv(c,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Pe||e.parentNode.removeChild(e)):l.count--,i===null?Sn||Gh(c,t.type,t.stateNode):vv(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 27:zn(e,t,i),In(t),l&512&&(Pe||r===null||bn(r,r.return)),r!==null&&l&4&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Fi,Fi=!1,zn(e,t,i),Fi=c,In(t),l&512&&(Pe||r===null||bn(r,r.return)),t.flags&32){e=t.stateNode;try{Zr(e,""),we=!0}catch(it){Ie(t,t.return,it)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Yf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(th=!0);break;case 6:if(zn(e,t,i),In(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,we=!0}catch(it){Ie(t,t.return,it)}}break;case 3:if(we=!1,Nu=null,c=yi,yi=qo(e.containerInfo),zn(e,t,i),yi=c,In(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ns(e.containerInfo)}catch(it){Ie(t,t.return,it)}th&&(th=!1,d_(t)),we=!1;break;case 4:l=Fi,Fi=Sn,r=Lp(),c=yi,yi=qo(t.stateNode.containerInfo),zn(e,t,i),In(t),yi=c,we&&zo&&(mu=!0),we=r,Fi=l;break;case 12:zn(e,t,i),In(t);break;case 31:zn(e,t,i),In(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,_u(t,e)));break;case 13:zn(e,t,i),In(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xu=H()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,_u(t,e)));break;case 22:c=t.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var E=Sn,N=Pe,W=Fi;Sn=E||c,Fi=W||c,Pe=N||m,zn(e,t,i),Pe=N,Fi=W,Sn=E,In(t),l&8192&&(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||r===null||m||Sn||Pe||(e=m||Pe,i=Sn,r=Pe,Sn=c||Sn,Pe=e,Ia(t,2),Sn=i,Pe=r),!c&&Fi||nh(t,c)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,_u(t,i))));break;case 19:zn(e,t,i),In(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,_u(t,e)));break;case 30:l&512&&(Pe||r===null||bn(r,r.return)),l=Lp(),c=zo,m=(i&335544064)===i,E=t.memoizedProps,zo=m&&$i(E.default,E.update)!=="none",zn(e,t,i),In(t),m&&r!==null&&we&&(t.flags|=4),zo=c,we=l;break;case 21:break;case 7:l&512&&(Pe||r===null||bn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:zn(e,t,i),In(t)}}function In(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(Qg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(kf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Xf(l))break;l=l.return}var m=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,N=Wf(t);fu(t,N,E,m);break;case 5:var W=i.stateNode;i.flags&32&&(Zr(W,""),i.flags&=-33);var it=Wf(t);fu(t,it,W,m);break;case 3:case 4:var gt=i.stateNode.containerInfo,X=Wf(t);jf(t,X,gt,m);break;default:throw Error(s(161))}}catch($){Ie(t,t.return,$)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function d_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;d_(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Us=!0,e.reset(),Us=!1),t=t.sibling}}function ps(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)p_(e,t),e=e.sibling;else a_(e)}function p_(t,e){var i=t.alternate;if(i===null)Zf(t,!1);else switch(t.tag){case 3:if(eh=Hi=!1,t_(),ps(e,t),!Hi&&!mu){if(t=Ii,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];ev(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),eh=!0}Ii=null;break;case 5:ps(e,t);break;case 4:r=Hi,Hi=!1,ps(e,t),Hi&&(mu=!0),Hi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Zf(t,!1):ps(e,t));break;case 30:r=Hi,l=t_(),Hi=!1,ps(e,t),Hi&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;e=Ji(c,m),m=Ji(i.memoizedProps,m);var E=$i(c.default,c.update);E==="none"?e=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Vn=0,e=$f(t,i,e,m,E,c,!0),Vn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(ys(t,t.memoizedProps.onUpdate),Ii=l):l!==null&&(l.push.apply(l,Ii),Ii=l),Hi=(t.flags&32)!==0?!0:r;break;default:ps(e,t)}}function Gi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)s_(t,e.alternate,e),e=e.sibling}function Ia(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:za(4,i,i.return),Ia(i,r);break;case 1:bn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Zg(i,i.return,l),Ia(i,r);break;case 27:(r&2)!==0&&dv(i.stateNode,i.type,i.memoizedProps);case 5:bn(i,i.return),i.tag!==5&&i.tag!==27||Po(i),Ia(i,r);break;case 6:Po(i);break;case 26:bn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Pe||l.parentNode.removeChild(l),Ia(i,r);break;case 22:i.memoizedState===null&&Ia(i,r);break;case 30:bn(i,i.return),Ia(i,r);break;case 7:bn(i,i.return);default:Ia(i,r)}t=t.sibling}}function Mi(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,m=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Mi(l,c,i),Oo(4,c);break;case 1:if(Mi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){Ie(r,r.return,it)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var W=l.shared.hiddenCallbacks;if(W!==null)for(l.shared.hiddenCallbacks=null,l=0;l<W.length;l++)zm(W[l],N)}catch(it){Ie(r,r.return,it)}}E&&m&64&&jg(c),zi(c,c.return);break;case 27:(i&2)!==0&&Jg(c);case 5:c.tag!==5&&c.tag!==27||Kg(c),Mi(l,c,i),E&&r===null&&m&4&&qf(c),zi(c,c.return);break;case 6:Kg(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||Sn||Gh(qo(N.ownerDocument),c.type,N),Mi(l,c,i),E&&r===null&&m&4&&qf(c),zi(c,c.return);break;case 12:Mi(l,c,i);break;case 31:Mi(l,c,i),E&&m&4&&c_(l,c);break;case 13:Mi(l,c,i),E&&m&4&&f_(l,c);break;case 22:c.memoizedState===null&&Mi(l,c,i),zi(c,c.return);break;case 30:Mi(l,c,i),zi(c,c.return);break;case 7:zi(c,c.return);default:Mi(l,c,i)}e=e.sibling}}function ah(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&yo(i))}function rh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&yo(t))}function pi(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)m_(t,e,i,r),e=e.sibling;else l&&i_(e)}function m_(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&pu(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:pi(t,e,i,r),c&2048&&Oo(9,e);break;case 1:pi(t,e,i,r);break;case 3:pi(t,e,i,r),l&&eh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&yo(c)));break;case 12:if(c&2048){pi(t,e,i,r),c=e.stateNode;try{var m=e.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Ie(e,e.return,W)}}else pi(t,e,i,r);break;case 31:pi(t,e,i,r);break;case 13:pi(t,e,i,r);break;case 23:break;case 22:m=e.stateNode,E=e.alternate,e.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&pu(E),m._visibility&2?pi(t,e,i,r):Io(t,e)):(l&&E!==null&&E.memoizedState!==null&&pu(e),m._visibility&2?pi(t,e,i,r):(m._visibility|=2,ms(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),c&2048&&ah(E,e);break;case 24:pi(t,e,i,r),c&2048&&rh(e.alternate,e);break;case 30:l&&(c=e.alternate,c!==null&&(Bi(c.child,!0),Bi(e.child,!0))),pi(t,e,i,r);break;default:pi(t,e,i,r)}}function ms(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,m=e,E=i,N=r,W=m.flags;switch(m.tag){case 0:case 11:case 15:ms(c,m,E,N,l),Oo(8,m);break;case 23:break;case 22:var it=m.stateNode;m.memoizedState!==null?it._visibility&2?ms(c,m,E,N,l):Io(c,m):(it._visibility|=2,ms(c,m,E,N,l)),l&&W&2048&&ah(m.alternate,m);break;case 24:ms(c,m,E,N,l),l&&W&2048&&rh(m.alternate,m);break;default:ms(c,m,E,N,l)}e=e.sibling}}function Io(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Io(i,r),l&2048&&ah(r.alternate,r);break;case 24:Io(i,r),l&2048&&rh(r.alternate,r);break;default:Io(i,r)}e=e.sibling}}var Rr=8192;function Cr(t,e,i){if(t.subtreeFlags&Rr)for(t=t.child;t!==null;)g_(t,e,i),t=t.sibling}function g_(t,e,i){switch(t.tag){case 26:Cr(t,e,i),t.flags&Rr&&(t.memoizedState!==null?Yy(i,yi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Ev(i,t)));break;case 5:Cr(t,e,i),t.flags&Rr&&(t=t.stateNode,(e&335544128)===e&&Ev(i,t));break;case 3:case 4:var r=yi;yi=qo(t.stateNode.containerInfo),Cr(t,e,i),yi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Rr,Rr=16777216,Cr(t,e,i),Rr=r):Cr(t,e,i));break;case 30:if((t.flags&Rr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,Jn===null&&(Jn=new Map),Jn.set(r,l)}Cr(t,e,i);break;default:Cr(t,e,i)}}function __(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Bo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];xn=r,S_(r,t)}__(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v_(t),t=t.sibling}function v_(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&za(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,vu(t)):Bo(t);break;default:Bo(t)}}function vu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];xn=r,S_(r,t)}__(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:za(8,e,e.return),vu(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,vu(e));break;default:vu(e)}t=t.sibling}}function S_(t,e){for(;xn!==null;){var i=xn;switch(i.tag){case 0:case 11:case 15:za(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:yo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,xn=r;else t:for(i=t;xn!==null;){r=xn;var l=r.sibling,c=r.return;if(l_(r),r===i){xn=null;break t}if(l!==null){l.return=c,xn=l;break t}xn=c}}}var Gx={getCacheForType:function(t){var e=Mn(on),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return Mn(on).controller.signal}},Vx=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,Se=null,Me=0,ze=0,$n=null,Ba=!1,gs=!1,sh=!1,la=0,nn=0,Fa=0,wr=0,Su=0,ti=0,_s=0,Fo=null,kn=null,oh=!1,xu=0,x_=0,yu=1/0,Mu=null,Ha=null,$e=0,Ei=null,Dr=null,Vi=0,lh=0,uh=null,y_=null,vs=null,Ss=null,xs=null,Ho=0,Eu=null;function ei(){return(Le&2)!==0&&Me!==0?Me&-Me:_t.T!==null?Sh():bt()}function M_(){if(ti===0)if((Me&536870912)===0||_e){var t=Zi;Zi<<=1,(Zi&3932160)===0&&(Zi=262144),ti=t}else ti=536870912;return t=En.current,t!==null&&(t.flags|=32),ti}function ys(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=nv(Ji(t.memoizedProps,i))),Ss===null&&(Ss=[]),Ss.push(e.bind(null,r))}}function qn(t,e,i){(t===qe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Ms(t,0),Ga(t,Me,ti,!1)),fr(t,i),((Le&2)===0||t!==qe)&&(t===qe&&((Le&2)===0&&(wr|=i),nn===4&&Ga(t,Me,ti,!1)),Xi(t))}function E_(t,e,i){if((Le&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||ya(t,e),l=r?qx(t,e):fh(t,e,!0),c=r;do{if(l===0){gs&&!r&&Ga(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!Xx(i)){l=fh(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var E=t;l=Fo;var N=E.current.memoizedState.isDehydrated;if(N&&(Ms(E,m).flags|=256),m=fh(E,m,!1),m!==2&&m!==6){if(sh&&!N){E.errorRecoveryDisabledLanes|=c,wr|=c,l=4;break t}c=kn,kn=l,c!==null&&(kn===null?kn=c:kn.push.apply(kn,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){Ms(t,0),Ga(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ga(r,e,ti,!Ba);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=xu+300-H(),10<l)){if(Ga(r,e,ti,!Ba),cr(r,0,!0)!==0)break t;Vi=e,r.timeoutHandle=Dh(T_.bind(null,r,i,kn,Mu,oh,e,ti,wr,_s,Ba,c,"Throttled",-0,0),l);break t}T_(r,i,kn,Mu,oh,e,ti,wr,_s,Ba,c,null,-0,0)}}break}while(!0);Xi(t)}function T_(t,e,i,r,l,c,m,E,N,W,it,gt,X,$){t.timeoutHandle=-1;var Nt=e.subtreeFlags,Wt=(c&335544064)===c;if(gt=null,(Wt||Nt&8192||(Nt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},Jn=null,g_(e,c,gt),Wt&&(Nt=gt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=jo.bind(Nt),Wt.finished.then(Nt,Nt))),Nt=(c&62914560)===c?xu-H():(c&4194048)===c?x_-H():0,Nt=Wy(gt,Nt),Nt!==null)){Vi=c,t.cancelPendingCommit=Nt(N_.bind(null,t,e,c,i,r,l,m,E,N,W,it,gt,null,X,$)),Ga(t,c,m,!W);return}N_(t,e,c,i,r,l,m,E,N,W,it,gt)}function Xx(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Kn(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ga(t,e,i,r){e=xl(t,e),e&=~Su,e&=~wr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-Cn(l),m=1<<c;r[c]=-1,l&=~m}i!==0&&A(t,i,e)}function Tu(){return(Le&6)===0?(Go(0),!1):!0}function ch(){if(Se!==null){if(ze===0)var t=Se.return;else t=Se,na=_r=null,vf(t),ls=null,To=0,t=Se;for(;t!==null;)Wg(t.alternate,t),t=t.return;Se=null}}function Ms(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,dy(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Vi=0,ch(),qe=t,Se=i=ta(t.current,null),Me=e,ze=0,$n=null,Ba=!1,gs=ya(t,e),sh=!1,_s=ti=Su=wr=Fa=nn=0,kn=Fo=null,oh=!1,la=xl(t,e),Nl(),i}function b_(t,e){fe=null,_t.H=iu,e===os||e===Xl?(e=Nm(),ze=3):e===rf?(e=Nm(),ze=4):ze=e===Lf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,$n=e,Se===null&&(nn=1,au(t,ci(e,t.current)))}function A_(){var t=En.current;return t===null?!0:(Me&4194048)===Me?Dn===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Dn:!1}function R_(){var t=_t.H;return _t.H=iu,t===null?iu:t}function C_(){var t=_t.A;return _t.A=Gx,t}function bu(){nn=4,Ba||(Me&4194048)!==Me&&En.current!==null||(gs=!0),(Fa&134217727)===0&&(wr&134217727)===0||qe===null||Ga(qe,Me,ti,!1)}function fh(t,e,i){var r=Le;Le|=2;var l=R_(),c=C_();(qe!==t||Me!==e)&&(Mu=null,Ms(t,e)),e=!1;var m=nn;t:do try{if(ze!==0&&Se!==null){var E=Se,N=$n;switch(ze){case 8:ch(),m=6;break t;case 3:case 2:case 9:case 6:En.current===null&&(e=!0);var W=ze;if(ze=0,$n=null,Es(t,E,N,W),i&&gs){m=0;break t}break;default:W=ze,ze=0,$n=null,Es(t,E,N,W)}}kx(),m=nn;break}catch(it){b_(t,it)}while(!0);return e&&t.shellSuspendCounter++,na=_r=null,Le=r,_t.H=l,_t.A=c,Se===null&&(qe=null,Me=0,Nl()),m}function kx(){for(;Se!==null;)w_(Se)}function qx(t,e){var i=Le;Le|=2;var r=R_(),l=C_();qe!==t||Me!==e?(Mu=null,yu=H()+500,Ms(t,e)):gs=ya(t,e);t:do try{if(ze!==0&&Se!==null){e=Se;var c=$n;e:switch(ze){case 1:ze=0,$n=null,Es(t,e,c,1);break;case 2:case 9:if(Dm(c)){ze=0,$n=null,D_(e);break}e=function(){ze!==2&&ze!==9||qe!==t||(ze=7),Xi(t)},c.then(e,e);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Dm(c)?(ze=0,$n=null,D_(e)):(ze=0,$n=null,Es(t,e,c,7));break;case 5:var m=null;switch(Se.tag){case 26:m=Se.memoizedState;case 5:case 27:var E=Se;if(m?yv(m):E.stateNode.complete){ze=0,$n=null;var N=E.sibling;if(N!==null)Se=N;else{var W=E.return;W!==null?(Se=W,Au(W)):Se=null}break e}}ze=0,$n=null,Es(t,e,c,5);break;case 6:ze=0,$n=null,Es(t,e,c,6);break;case 8:ch(),nn=6;break t;default:throw Error(s(462))}}Yx();break}catch(it){b_(t,it)}while(!0);return na=_r=null,_t.H=r,_t.A=l,Le=i,Se!==null?0:(qe=null,Me=0,Nl(),nn)}function Yx(){for(;Se!==null&&!Pt();)w_(Se)}function w_(t){var e=qg(t.alternate,t,la);t.memoizedProps=t.pendingProps,e===null?Au(t):Se=e}function D_(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Bg(i,e,e.pendingProps,e.type,void 0,Me);break;case 11:e=Bg(i,e,e.pendingProps,e.type.render,e.ref,Me);break;case 5:vf(e);var r=e;r===vn&&(_e?(Bl(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):(Bl(r),_e=!0));default:Wg(i,e),e=Se=Sm(e,la),e=qg(i,e,la)}t.memoizedProps=t.pendingProps,e===null?Au(t):Se=e}function Es(t,e,i,r){na=_r=null,vf(e),ls=null,To=0;var l=e.return;try{if(Lx(t,l,e,i,Me)){nn=1,au(t,ci(i,t.current)),Se=null;return}}catch(c){if(l!==null)throw Se=l,c;nn=1,au(t,ci(i,t.current)),Se=null;return}e.flags&32768?(_e||r===1?t=!0:gs||(Me&536870912)!==0?t=!1:(Ba=t=!0,(r===2||r===9||r===3||r===6)&&(r=En.current,r!==null&&r.tag===13&&(r.flags|=16384))),U_(e,t)):Au(e)}function Au(t){var e=t;do{if((e.flags&32768)!==0){U_(e,Ba);return}t=e.return;var i=Ix(e.alternate,e,la);if(i!==null){Se=i;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);nn===0&&(nn=5)}function U_(t,e){do{var i=Bx(t.alternate,t);if(i!==null){i.flags&=32767,Se=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){Se=t;return}Se=t=i}while(t!==null);nn=6,Se=null}function N_(t,e,i,r,l,c,m,E,N,W,it,gt){t.cancelPendingCommit=null;do Ru();while($e!==0);if((Le&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===qe&&(Se=qe=null,Me=0),Dr=e,Ei=t,Vi=i,uh=l,y_=r,Wx(t,e,i,m,E,N,gt)}}function Wx(t,e,i,r,l,c,m){var E=e.lanes|e.childLanes;if(lh=E,E|=qc,Mc(t,i,E,r,l,c),Ss=null,(i&335544064)===i?(xs=yx(t),r=10262):(xs=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,$x(Tt,function(){return mh(),null})):(t.callbackNode=null,t.callbackPriority=0),hu=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,l=Lt.p,Lt.p=2,c=Le,Le|=4;try{Fx(t,e,i)}finally{Le=c,Lt.p=l,_t.T=r}}$e=1,hu?vs=Sy(m,t.containerInfo,xs,hh,dh,Zx,ph,mh,jx):(hh(),dh(),ph())}function jx(t){if($e!==0){var e=Ei.onRecoverableError;e(t,{componentStack:null})}}function Zx(){$e===3&&($e=0,p_(Dr,Ei),$e=4)}function hh(){if($e===1){$e=0;var t=Ei,e=Dr,i=Vi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var l=Lt.p;Lt.p=2;var c=Le;Le|=4;try{zo=mu=!1,h_(e,t,i),i=Rh;var m=um(t.containerInfo),E=i.focusedElem,N=i.selectionRange;if(m!==E&&E&&E.ownerDocument&&lm(E.ownerDocument.documentElement,E)){if(N!==null&&Hc(E)){var W=N.start,it=N.end;if(it===void 0&&(it=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(it,E.value.length);else{var gt=E.ownerDocument||document,X=gt&&gt.defaultView||window;if(X.getSelection){var $=X.getSelection(),Nt=E.textContent.length,Wt=Math.min(N.start,Nt),he=N.end===void 0?Wt:Math.min(N.end,Nt);!$.extend&&Wt>he&&(m=he,he=Wt,Wt=m);var Y=om(E,Wt),B=om(E,he);if(Y&&B&&($.rangeCount!==1||$.anchorNode!==Y.node||$.anchorOffset!==Y.offset||$.focusNode!==B.node||$.focusOffset!==B.offset)){var J=gt.createRange();J.setStart(Y.node,Y.offset),$.removeAllRanges(),Wt>he?($.addRange(J),$.extend(B.node,B.offset)):(J.setEnd(B.node,B.offset),$.addRange(J))}}}}for(gt=[],$=E;$=$.parentNode;)$.nodeType===1&&gt.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var dt=gt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Us=!!Ah,Rh=Ah=null}finally{Le=c,Lt.p=l,_t.T=r}}t.current=e,$e=2}}function dh(){if($e===2){$e=0;var t=Ei,e=Dr,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=_t.T,_t.T=null;var r=Lt.p;Lt.p=2;var l=Le;Le|=4;try{s_(t,e.alternate,e)}finally{Le=l,Lt.p=r,_t.T=i}}$e=3}}function ph(){if($e===4||$e===3){$e=0;var t=vs;vs=null,ce();var e=Ei,i=Dr,r=Vi,l=y_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?$e=5:($e=0,Dr=Ei=null,L_(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(Ha=null),K(r),i=i.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=_t.T,c=Lt.p,Lt.p=2,_t.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var N=l[E];m(N.value,{componentStack:N.stack})}}finally{_t.T=i,Lt.p=c}}if(l=Ss,m=xs,xs=null,l!==null&&(Ss=null,m===null&&(m=[]),t!==null))for(N=0;N<l.length;N++)i=(0,l[N])(m),i!==void 0&&t.finished.finally(i);(Vi&3)!==0&&Ru(),Xi(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===Eu?Ho++:(Ho=0,Eu=e):(Ho=0,Eu=null),Go(0)}}function L_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,yo(e)))}function Ru(){return vs!==null&&(vs.skipTransition(),vs=null),hh(),dh(),ph(),mh()}function mh(){if($e!==5)return!1;var t=Ei,e=lh;lh=0;var i=K(Vi),r=_t.T,l=Lt.p;try{Lt.p=32>i?32:i,_t.T=null,i=uh,uh=null;var c=Ei,m=Vi;if($e=0,Dr=Ei=null,Vi=0,(Le&6)!==0)throw Error(s(331));var E=Le;if(Le|=4,v_(c.current),m_(c,c.current,m,i),Le=E,Go(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(ye,c)}catch{}return!0}finally{Lt.p=l,_t.T=r,L_(t,e)}}function O_(t,e,i){e=ci(i,e),e=Nf(t.stateNode,e,2),t=Na(t,e,2),t!==null&&(fr(t,2),Xi(t))}function Ie(t,e,i){if(t.tag===3)O_(t,t,i);else for(;e!==null;){if(e.tag===3){O_(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ha===null||!Ha.has(r))){t=ci(i,t),i=Dg(2),r=Na(e,i,2),r!==null&&(Ug(i,r,e,t),fr(r,2),Xi(r));break}}e=e.return}}function gh(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new Vx;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(sh=!0,l.add(i),t=Kx.bind(null,t,e,i),e.then(t,t))}function Kx(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,qe===t&&(Me&i)===i&&((nn===4||nn===3&&(Me&62914560)===Me&&300>H()-xu)&&(Le&2)===0?Ms(t,0):Su|=i,_s===Me&&(_s=0)),Xi(t)}function P_(t,e){e===0&&(e=yl()),t=pr(t,e),t!==null&&(fr(t,e),Xi(t))}function Qx(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),P_(t,i)}function Jx(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),P_(t,i)}function $x(t,e){return ae(t,e)}var Ts=null,bs=null,_h=!1,Cu=!1,vh=!1,Va=0;function Xi(t){t!==bs&&t.next===null&&(bs===null?Ts=bs=t:bs=bs.next=t),Cu=!0,_h||(_h=!0,ey())}function Go(t,e){if(!vh&&Cu){vh=!0;do for(var i=!1,r=Ts;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var m=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Cn(42|t)+1)-1,c&=l&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,F_(r,c))}else c=Me,c=cr(r,r===qe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||ya(r,c)||(i=!0,F_(r,c));r=r.next}while(i);vh=!1}}function ty(){z_()}function z_(){Cu=_h=!1;var t=0;Va!==0&&hy()&&(t=Va);for(var e=H(),i=null,r=Ts;r!==null;){var l=r.next,c=I_(r,e);c===0?(r.next=null,i===null?Ts=l:i.next=l,l===null&&(bs=i)):(i=r,(t!==0||(c&3)!==0)&&(Cu=!0)),r=l}$e!==0&&$e!==5||Go(t),Va!==0&&(Va=0)}function I_(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Cn(c),E=1<<m,N=l[m];N===-1?((E&i)===0||(E&r)!==0)&&(l[m]=yc(E,e)):N<=e&&(t.expiredLanes|=E),c&=~E}if(e=qe,i=Me,i=cr(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Kt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||ya(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&Kt(r),K(i)){case 2:case 8:i=kt;break;case 32:i=Tt;break;case 268435456:i=jt;break;default:i=Tt}return r=B_.bind(null,t),i=ae(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&Kt(r),t.callbackPriority=2,t.callbackNode=null,2}function B_(t,e){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Ru()&&t.callbackNode!==i)return null;var r=Me;return r=cr(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(E_(t,r,e),I_(t,H()),t.callbackNode!=null&&t.callbackNode===i?B_.bind(null,t):null)}function F_(t,e){if(Ru())return null;E_(t,e,!0)}function ey(){py(function(){(Le&6)!==0?ae(Ut,ty):z_()})}function Sh(){if(Va===0){var t=xr;t===0&&(t=lr,lr<<=1,(lr&261888)===0&&(lr=256)),Va=t}return Va}function H_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Tl(t)}function ny(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=H_((l[Yt]||null).action),m=r.submitter;m&&(e=(e=m[Yt]||null)?H_(e.formAction):m.getAttribute("formAction"),e!==null&&(c=e,m=null));var E=new Cl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var N=new FormData(l,m);Rf(i,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,m),Rf(i,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var xh=0;xh<kc.length;xh++){var yh=kc[xh],iy=yh.toLowerCase(),ay=yh[0].toUpperCase()+yh.slice(1);Si(iy,"on"+ay)}Si(hm,"onAnimationEnd"),Si(dm,"onAnimationIteration"),Si(pm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(dx,"onTransitionRun"),Si(px,"onTransitionStart"),Si(mx,"onTransitionCancel"),Si(mm,"onTransitionEnd"),tn("onMouseEnter",["mouseout","mouseover"]),tn("onMouseLeave",["mouseout","mouseover"]),tn("onPointerEnter",["pointerout","pointerover"]),tn("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function G_(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var m=r.length-1;0<=m;m--){var E=r[m],N=E.instance,W=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(it){Ul(it)}l.currentTarget=null,c=N}else for(m=0;m<r.length;m++){if(E=r[m],N=E.instance,W=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(it){Ul(it)}l.currentTarget=null,c=N}}}}function xe(t,e){var i=e[ee];i===void 0&&(i=e[ee]=new Set);var r=t+"__bubble";i.has(r)||(V_(e,t,2,!1),i.add(r))}function Mh(t,e,i){var r=0;e&&(r|=4),V_(i,t,r,e)}var wu="_reactListening"+Math.random().toString(36).slice(2);function Eh(t){if(!t[wu]){t[wu]=!0,We.forEach(function(i){i!=="selectionchange"&&(ry.has(i)||Mh(i,!1,t),Mh(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wu]||(e[wu]=!0,Mh("selectionchange",!1,e))}}function V_(t,e,i,r){switch(Uv(e)){case 2:var l=Qy;break;case 8:l=Jy;break;default:l=Xh}i=l.bind(null,e,i,t),l=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Th(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=r.return;m!==null;){var N=m.tag;if((N===3||N===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=Ne(E),m===null)return;if(N=m.tag,N===5||N===6||N===26||N===27){r=c=m;continue t}E=E.parentNode}}r=r.return}Vp(function(){var W=c,it=Cc(i),gt=[];t:{var X=gm.get(t);if(X!==void 0){var $=Cl,Nt=t;switch(t){case"keypress":if(Al(i)===0)break t;case"keydown":case"keyup":$=XS;break;case"focusin":Nt="focus",$=Oc;break;case"focusout":Nt="blur",$=Oc;break;case"beforeblur":case"afterblur":$=Oc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=jS;break;case hm:case dm:case pm:$=OS;break;case mm:$=KS;break;case"scroll":case"scrollend":$=wS;break;case"wheel":$=JS;break;case"copy":case"cut":case"paste":$=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Wp;break;case"submit":$=YS;break;case"toggle":case"beforetoggle":$=tx}var Wt=(e&4)!==0,he=!Wt&&(t==="scroll"||t==="scrollend"),Y=Wt?X!==null?X+"Capture":null:X;Wt=[];for(var B=W,J;B!==null;){var dt=B;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||Y===null||(dt=uo(B,Y),dt!=null&&Wt.push(Xo(B,dt,J))),he)break;B=B.return}0<Wt.length&&(X=new $(X,Nt,null,i,it),gt.push({event:X,listeners:Wt}))}}if((e&7)===0){t:{if($=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",$&&i!==Rc&&(Nt=i.relatedTarget||i.fromElement)&&(Ne(Nt)||Nt[ie]))break t;(X||$)&&(Nt=it.window===it?it:($=it.ownerDocument)?$.defaultView||$.parentWindow:window,X?($=i.relatedTarget||i.toElement,X=W,$=$?Ne($):null,$!==null&&(he=f($),Wt=$.tag,$!==he||Wt!==5&&Wt!==27&&Wt!==6)&&($=null)):(X=null,$=W),X!==$&&(Wt=qp,dt="onMouseLeave",Y="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=Wp,dt="onPointerLeave",Y="onPointerEnter",B="pointer"),he=X==null?Nt:pn(X),J=$==null?Nt:pn($),Nt=new Wt(dt,B+"leave",X,i,it),Nt.target=he,Nt.relatedTarget=J,dt=null,Ne(it)===W&&(Wt=new Wt(Y,B+"enter",$,i,it),Wt.target=J,Wt.relatedTarget=he,dt=Wt),he=dt,Wt=X&&$?G(X,$,sy):null,X!==null&&X_(gt,Nt,X,Wt,!1),$!==null&&he!==null&&X_(gt,he,$,Wt,!0)))}t:{if(X=W?pn(W):window,$=X.nodeName&&X.nodeName.toLowerCase(),$==="select"||$==="input"&&X.type==="file")var Vt=em;else if($p(X))if(nm)Vt=cx;else{Vt=lx;var Ee=ox}else $=X.nodeName,!$||$.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Ac(W.elementType)&&(Vt=em):Vt=ux;if(Vt&&(Vt=Vt(t,W))){tm(gt,Vt,i,it);break t}Ee&&Ee(t,X,W)}switch(Ee=W?pn(W):window,t){case"focusin":($p(Ee)||Ee.contentEditable==="true")&&($r=Ee,Gc=W,vo=null);break;case"focusout":vo=Gc=$r=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,cm(gt,i,it);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":cm(gt,i,it)}var te;if(zc)t:{switch(t){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else Jr?Qp(t,i)&&(se="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(se="onCompositionStart");se&&(jp&&i.locale!=="ko"&&(Jr||se!=="onCompositionStart"?se==="onCompositionEnd"&&Jr&&(te=Xp()):(Ea=it,Uc="value"in Ea?Ea.value:Ea.textContent,Jr=!0)),Ee=Du(W,se),0<Ee.length&&(se=new Yp(se,t,null,i,it),gt.push({event:se,listeners:Ee}),te?se.data=te:(te=Jp(i),te!==null&&(se.data=te)))),(te=nx?ix(t,i):ax(t,i))&&(se=Du(W,"onBeforeInput"),0<se.length&&(Ee=new Yp("onBeforeInput","beforeinput",null,i,it),gt.push({event:Ee,listeners:se}),Ee.data=te)),ny(gt,t,W,i,it)}G_(gt,e)})}function Xo(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Du(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=uo(t,i),l!=null&&r.unshift(Xo(t,l,c)),l=uo(t,e),l!=null&&r.push(Xo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function sy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function X_(t,e,i,r,l){for(var c=e._reactName,m=[];i!==null&&i!==r;){var E=i,N=E.alternate,W=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||W===null||(N=W,l?(W=uo(i,c),W!=null&&m.unshift(Xo(i,W,N))):l||(W=uo(i,c),W!=null&&m.push(Xo(i,W,N)))),i=i.return}m.length!==0&&t.push({event:e,listeners:m})}var oy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function k_(t){return(typeof t=="string"?t:""+t).replace(oy,`
`).replace(ly,"")}function q_(t,e){return e=k_(e),k_(t)===e}function Be(t,e,i,r,l,c){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Zr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Zr(t,""+r);else return;break;case"className":El(t,"class",r);break;case"tabIndex":El(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":El(t,i,r);break;case"style":Hp(t,r,c);return;case"data":if(e!=="object"){El(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Tl(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Be(t,e,"name",l.name,l,null),Be(t,e,"formEncType",l.formEncType,l,null),Be(t,e,"formMethod",l.formMethod,l,null),Be(t,e,"formTarget",l.formTarget,l,null)):(Be(t,e,"encType",l.encType,l,null),Be(t,e,"method",l.method,l,null),Be(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Tl(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Li);return;case"onScroll":r!=null&&xe("scroll",t);return;case"onScrollEnd":r!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Tl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Ml(t,"popover",r);break;case"xlinkActuate":Ki(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ki(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ki(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ki(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ki(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ki(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ml(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=RS.get(i)||i,Ml(t,i,r);else return}we=!0}function bh(t,e,i,r,l,c){switch(i){case"style":Hp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Zr(t,r);else if(typeof r=="number"||typeof r=="bigint")Zr(t,""+r);else return;break;case"onScroll":r!=null&&xe("scroll",t);return;case"onScrollEnd":r!=null&&xe("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Li);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ln.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),e=t[Yt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(c,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}we=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Ml(t,i,r)}return}we=!0}function An(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Be(t,e,c,m,i,null)}}l&&Be(t,e,"srcSet",i.srcSet,i,null),r&&Be(t,e,"src",i.src,i,null);return;case"input":xe("invalid",t);var E=c=m=l=null,N=null,W=null;for(r in i)if(i.hasOwnProperty(r)){var it=i[r];if(it!=null)switch(r){case"name":l=it;break;case"type":m=it;break;case"checked":N=it;break;case"defaultChecked":W=it;break;case"value":c=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,e));break;default:Be(t,e,r,it,i,null)}}zp(t,c,E,N,W,m,l,!1);return;case"select":xe("invalid",t),r=m=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":r=E;default:Be(t,e,l,E,i,null)}e=c,i=m,t.multiple=!!r,e!=null?jr(t,!!r,e,!1):i!=null&&jr(t,!!r,i,!0);return;case"textarea":xe("invalid",t),c=l=r=null;for(m in i)if(i.hasOwnProperty(m)&&(E=i[m],E!=null))switch(m){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Be(t,e,m,E,i,null)}Bp(t,r,l,c);return;case"option":for(N in i)i.hasOwnProperty(N)&&(r=i[N],r!=null)&&(N==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,e,N,r,i,null));return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(r=0;r<Vo.length;r++)xe(Vo[r],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in i)if(i.hasOwnProperty(W)&&(r=i[W],r!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Be(t,e,W,r,i,null)}return;default:if(Ac(e)){for(it in i)i.hasOwnProperty(it)&&(r=i[it],r!==void 0&&bh(t,e,it,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Be(t,e,E,r,i,null))}var uy={};function cy(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,E=null,N=null,W=null,it=null;for($ in i){var gt=i[$];if(i.hasOwnProperty($)&&gt!=null)switch($){case"checked":break;case"value":break;case"defaultValue":N=gt;default:r.hasOwnProperty($)||Be(t,e,$,null,r,gt)}}for(var X in r){var $=r[X];if(gt=i[X],r.hasOwnProperty(X)&&($!=null||gt!=null))switch(X){case"type":$!==gt&&(we=!0),c=$;break;case"name":$!==gt&&(we=!0),l=$;break;case"checked":$!==gt&&(we=!0),W=$;break;case"defaultChecked":$!==gt&&(we=!0),it=$;break;case"value":$!==gt&&(we=!0),m=$;break;case"defaultValue":$!==gt&&(we=!0),E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,e));break;default:$!==gt&&Be(t,e,X,$,r,gt)}}Tc(t,m,E,N,W,it,c,l);return;case"select":$=m=E=X=null;for(c in i)if(N=i[c],i.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":$=N;default:r.hasOwnProperty(c)||Be(t,e,c,null,r,N)}for(l in r)if(c=r[l],N=i[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(we=!0),X=c;break;case"defaultValue":c!==N&&(we=!0),E=c;break;case"multiple":c!==N&&(we=!0),m=c;default:c!==N&&Be(t,e,l,c,r,N)}e=E,i=m,r=$,X!=null?jr(t,!!i,X,!1):!!r!=!!i&&(e!=null?jr(t,!!i,e,!0):jr(t,!!i,i?[]:"",!1));return;case"textarea":$=X=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Be(t,e,E,null,r,l)}for(m in r)if(l=r[m],c=i[m],r.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":l!==c&&(we=!0),X=l;break;case"defaultValue":l!==c&&(we=!0),$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Be(t,e,m,l,r,c)}Ip(t,X,$);return;case"option":for(var Nt in i)X=i[Nt],i.hasOwnProperty(Nt)&&X!=null&&!r.hasOwnProperty(Nt)&&(Nt==="selected"?t.selected=!1:Be(t,e,Nt,null,r,X));for(N in r)X=r[N],$=i[N],r.hasOwnProperty(N)&&X!==$&&(X!=null||$!=null)&&(N==="selected"?(X!==$&&(we=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol"):Be(t,e,N,X,r,$));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in i)X=i[Wt],i.hasOwnProperty(Wt)&&X!=null&&!r.hasOwnProperty(Wt)&&Be(t,e,Wt,null,r,X);for(W in r)if(X=r[W],$=i[W],r.hasOwnProperty(W)&&X!==$&&(X!=null||$!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,e));break;default:Be(t,e,W,X,r,$)}return;default:if(Ac(e)){for(var he in i)X=i[he],i.hasOwnProperty(he)&&X!==void 0&&!r.hasOwnProperty(he)&&bh(t,e,he,void 0,r,X);for(it in r)X=r[it],$=i[it],!r.hasOwnProperty(it)||X===$||X===void 0&&$===void 0||bh(t,e,it,X,r,$);return}}for(var Y in i)X=i[Y],i.hasOwnProperty(Y)&&X!=null&&!r.hasOwnProperty(Y)&&Be(t,e,Y,null,r,X);for(gt in r)X=r[gt],$=i[gt],!r.hasOwnProperty(gt)||X===$||X==null&&$==null||Be(t,e,gt,X,r,$)}function Y_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,m=l.initiatorType,E=l.duration;if(c&&E&&Y_(m)){for(m=0,E=l.responseEnd,r+=1;r<i.length;r++){var N=i[r],W=N.startTime;if(W>E)break;var it=N.transferSize,gt=N.initiatorType;it&&Y_(gt)&&(N=N.responseEnd,m+=it*(N<E?1:(E-W)/(N-W)))}if(--r,e+=8*(c+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ah=null,Rh=null;function ko(t){return t.nodeType===9?t:t.ownerDocument}function W_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Z_(t,e,i,r){return i=ko(i).createElement(t),i[Dt]=r,i[Yt]=e,An(i,t,e),Ce(i),i}function Ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=null;function hy(){var t=window.event;return t&&t.type==="popstate"?t===wh?!1:(wh=t,!0):(wh=null,!1)}var Dh=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,Q_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Dh,py=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(t){return K_.resolve(null).then(t).catch(my)}:Dh;function my(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function J_(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ns(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Bh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Bh(i);for(var c=i.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[Ue]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=m}}else i==="body"&&Bh(t.ownerDocument.body);i=l}while(i);Ns(e)}function $_(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function tv(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var c=e[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function ev(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function gy(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Uh(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return gy(e,i,t)}function _y(t){return t.documentElement.clientHeight}function vy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Sy(t,e,i,r,l,c,m,E,N){var W=e.nodeType===9?e:e.ownerDocument;try{var it=W.startViewTransition({update:function(){var X=W.defaultView,$=X.navigation&&X.navigation.transition,Nt=W.fonts.status;r();var Wt=[];if(Nt==="loaded"&&(_y(W),W.fonts.status==="loading"&&Wt.push(W.fonts.ready)),Nt=Wt.length,t!==null)for(var he=t.suspenseyImages,Y=0,B=0;B<he.length;B++){var J=he[B];if(!J.complete){var dt=J.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<X.innerHeight&&dt.left<X.innerWidth){if(Y+=Mv(J),Y>Lu){Wt.length=Nt;break}J=new Promise(vy.bind(J)),Wt.push(J)}}}if(0<Wt.length)return X=Promise.race([Promise.all(Wt),new Promise(function(Vt){return setTimeout(Vt,500)})]).then(l,l),($?Promise.allSettled([$.finished,X]):X).then(c,c);if(l(),$)return $.finished.then(c,c);c()},types:i});W.__reactViewTransition=it;var gt=[];return it.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),$=0;$<X.length;$++){var Nt=X[$],Wt=Nt.effect,he=Wt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){gt.push(Nt),Nt=Wt.getKeyframes();for(var Y=he=void 0,B=!0,J=0;J<Nt.length;J++){var dt=Nt[J],Vt=dt.width;if(he===void 0)he=Vt;else if(he!==Vt){B=!1;break}if(Vt=dt.height,Y===void 0)Y=Vt;else if(Y!==Vt){B=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}B&&he!==void 0&&Y!==void 0&&(Wt.setKeyframes(Nt),B=getComputedStyle(Wt.target,Wt.pseudoElement),B.width!==he||B.height!==Y)&&(B=Nt[0],B.width=he,B.height=Y,B=Nt[Nt.length-1],B.width=he,B.height=Y,Wt.setKeyframes(Nt))}}m()},function(X){W.__reactViewTransition===it&&(W.__reactViewTransition=null);try{typeof X=="object"&&X!==null&&X.name==="InvalidStateError"&&(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null),X!==null&&N(X)}finally{r(),l(),m()}}),it.finished.finally(function(){for(var X=0;X<gt.length;X++)gt[X].cancel();W.__reactViewTransition===it&&(W.__reactViewTransition=null),E()}),it}catch{return r(),l(),m(),null}}function Ur(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Ur.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:O({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Ur.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===e&&r.push(i[l])}return r},Ur.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function nv(t){return{name:t,group:new Ur("group",t),imagePair:new Ur("image-pair",t),old:new Ur("old",t),new:new Ur("new",t)}}function ni(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ni.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(av(c,t,e,i)===-1){var m=this,E=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(N){m.removeEventListener(t,e,i),typeof e=="function"?e.call(this,N):e.handleEvent(N)}),r!==null&&(l=m.removeEventListener.bind(m,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=As(i),c.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,xy,t,E,r)}this._eventListeners=c}};function xy(t,e,i,r){return y(t).addEventListener(e,i,r),!1}ni.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=av(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var c=l.cleanup;l=As(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,yy,t,i,l),r.splice(e,1),c!==null&&c()}};function yy(t,e,i,r){return y(t).removeEventListener(e,i,r),!1}function As(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function iv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function av(t,e,i,r){if(t.length===0)return-1;r=iv(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===e&&c.listener===i&&iv(c.optionsOrUseCapture)===r)return l}return-1}ni.prototype.dispatchEvent=function(t){var e=x(this._fragmentFiber);if(e===null)return!0;e=y(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,As(c.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,As(c.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ni.prototype.focus=function(t){p(this._fragmentFiber.child,!0,rv,t,void 0,void 0)};function rv(t,e){return t.tag===6?!1:(t=y(t),Ly(t,e))}ni.prototype.focusLast=function(t){var e=[];p(this._fragmentFiber.child,!0,Nh,e,void 0,void 0);for(var i=e.length-1;0<=i&&!rv(e[i],t);i--);};function Nh(t,e){return e.push(t),!1}ni.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=ko(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,My,t,void 0,void 0))};function My(t,e){return t.tag===6?!1:(t=y(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ni.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Ey,t,void 0,void 0)};function Ey(t,e){return t.tag===6||(t=y(t),e.observe(t)),!1}ni.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),p(this._fragmentFiber.child,!1,Ty,t,void 0,void 0);for(var i=e=0;i<Ti.length;i++){var r=Ti[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ti[e++]=r}Ti.length=e}};function Ty(t,e){return t.tag===6||(t=y(t),e.unobserve(t)),!1}var Ti=[],Lh=!1;function by(t,e,i){Ti.push({fragmentInstance:t,observer:e,instance:i}),Lh||(Lh=!0,Oy(function(){Lh=!1;var r=Ti;Ti=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ni.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Ay,t,void 0,void 0),t};function Ay(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=y(t),e.push.apply(e,t.getClientRects());return!1}ni.prototype.getRootNode=function(t){var e=x(this._fragmentFiber);return e===null?this:y(e).getRootNode(t)},ni.prototype.compareDocumentPosition=function(t){var e=x(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];p(this._fragmentFiber.child,!1,Nh,i,void 0,void 0);var r=y(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?e.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=e.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ry(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ry(t,e,i,r,l){var c=Ne(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=e,e=x(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===i)&&(e=G(i,c,F),e===null?e=!1:(p(e,!0,P,c,i),c=S,S=null,e=c!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===r)&&(e=G(r,c,F),e===null?e=!1:(p(e,!0,D,c,r),c=S,I=S=null,e=c!==null)),e):!1}function sv(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ni.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];p(this._fragmentFiber.child,!1,Nh,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),sv(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=y(l),sv(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function Cy(t,e){return t=y(t),ov(t,e),!1}function ov(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function lv(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,As(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){for(var m=0,E=0;E<Ti.length;E++){var N=Ti[E];(N.fragmentInstance!==e||N.observer!==c||N.instance!==t)&&(Ti[m++]=N)}Ti.length=m,c.observe(t)}),ov(t,e))}function wy(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,As(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?by(e,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Oh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Oh(i),ne(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Dy(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ue])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function Uy(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=mi(t.nextSibling),t===null))return null;return t}function uv(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=mi(t.nextSibling),t===null))return null;return t}function Ph(t){return t.data==="$?"||t.data==="$~"}function zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ny(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ih=null;function cv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return mi(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Ly(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function Oy(t){Q_(function(){Q_(function(e){return t(e)})})}function hv(t,e,i){switch(e=ko(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function dv(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Be(t,e,r,null,uy,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Li&&(t.onclick=null),ne(t)}function Bh(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ne(t)}var gi=new Map,pv=new Set;function qo(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ua=Lt.d;Lt.d={f:Py,r:zy,D:Iy,C:By,L:Fy,m:Hy,X:Vy,S:Gy,M:Xy};function Py(){var t=ua.f(),e=Tu();return t||e}function zy(t){var e=ge(t);e!==null&&e.tag===5&&e.type==="form"?gg(e):ua.r(t)}var Rs=typeof document>"u"?null:document;function mv(t,e,i){var r=Rs;if(r&&typeof e=="string"&&e){var l=li(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),pv.has(l)||(pv.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),An(e,"link",t),Ce(e),r.head.appendChild(e)))}}function Iy(t){ua.D(t),mv("dns-prefetch",t,null)}function By(t,e){ua.C(t,e),mv("preconnect",t,e)}function Fy(t,e,i){ua.L(t,e,i);var r=Rs;if(r&&t&&e){var l='link[rel="preload"][as="'+li(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+li(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+li(i.imageSizes)+'"]')):l+='[href="'+li(t)+'"]';var c=l;switch(e){case"style":c=Cs(t);break;case"script":c=ws(t)}if(!(gi.has(c)||(t=O({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),gi.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Yo(c))||e==="script"&&r.querySelector(Wo(c))))){var m=r.createElement("link");An(m,"link",t),e==="style"&&(m[Re]=!0,m.onload=m.onerror=function(){Ma(m)}),Ce(m),r.head.appendChild(m)}}}function Hy(t,e){ua.m(t,e);var i=Rs;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+li(r)+'"][href="'+li(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ws(t)}if(!gi.has(c)&&(t=O({rel:"modulepreload",href:t},e),gi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Wo(c)))return}r=i.createElement("link"),An(r,"link",t),Ce(r),i.head.appendChild(r)}}}function Gy(t,e,i){ua.S(t,e,i);var r=Rs;if(r&&t){var l=jn(r).hoistableStyles,c=Cs(t);e=e||"default";var m=l.get(c);if(!m){var E={loading:0,preload:null};if(m=r.querySelector(Yo(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},i),(i=gi.get(c))&&Fh(t,i);var N=m=r.createElement("link");Ce(N),An(N,"link",t),N._p=new Promise(function(W,it){N.onload=W,N.onerror=it}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Uu(m,e,r)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(c,m)}}}function Vy(t,e){ua.X(t,e);var i=Rs;if(i&&t){var r=jn(i).hoistableScripts,l=ws(t),c=r.get(l);c||(c=i.querySelector(Wo(l)),c||(t=O({src:t,async:!0},e),(e=gi.get(l))&&Hh(t,e),c=i.createElement("script"),Ce(c),An(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Xy(t,e){ua.M(t,e);var i=Rs;if(i&&t){var r=jn(i).hoistableScripts,l=ws(t),c=r.get(l);c||(c=i.querySelector(Wo(l)),c||(t=O({src:t,async:!0,type:"module"},e),(e=gi.get(l))&&Hh(t,e),c=i.createElement("script"),Ce(c),An(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function gv(t,e,i,r){var l=(l=ke.current)?qo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Cs(i.href),e=jn(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Cs(i.href);var c=jn(l).hoistableStyles,m=c.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=l.querySelector(Yo(t)))?c._p||(m.instance=c,m.state.loading=5):(c=gi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},gi.set(t,c)),ky(l,t,c,m.state))),e&&r===null)throw Error(s(528,""));return m}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=ws(i),e=jn(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Cs(t){return'href="'+li(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function _v(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function ky(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Re]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[Re]=!0,e.onload=e.onerror=Ma.bind(null,e),An(e,"link",i),Ce(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function ws(t){return'[src="'+li(t)+'"]'}function Wo(t){return"script[async]"+t}function vv(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+li(i.href)+'"]');if(r)return e.instance=r,Ce(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ce(r),An(r,"style",l),Uu(r,i.precedence,t),e.instance=r;case"stylesheet":l=Cs(i.href);var c=t.querySelector(Yo(l));if(c)return e.state.loading|=4,e.instance=c,Ce(c),c;r=_v(i),(l=gi.get(l))&&Fh(r,l),c=(t.ownerDocument||t).createElement("link"),Ce(c);var m=c;return m._p=new Promise(function(E,N){m.onload=E,m.onerror=N}),An(c,"link",r),e.state.loading|=4,Uu(c,i.precedence,t),e.instance=c;case"script":return c=ws(i.src),(l=t.querySelector(Wo(c)))?(e.instance=l,Ce(l),l):(r=i,(l=gi.get(c))&&(r=O({},i),Hh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ce(l),An(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Uu(r,i.precedence,t));return e.instance}function Uu(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,m=0;m<r.length;m++){var E=r[m];if(E.dataset.precedence===e)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Fh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Hh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Nu=null;function Sv(t,e,i){if(Nu===null){var r=new Map,l=Nu=new Map;l.set(i,r)}else l=Nu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Ue]||c[Dt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(e)||"";m=t+m;var E=r.get(m);E?E.push(c):r.set(m,[c])}}return r}function Gh(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function qy(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function xv(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function yv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Mv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ev(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Mv(e),t.suspenseyImages.push(e)),t=jy.bind(t),e.decode().then(t,t))}function Yy(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Cs(r.href),c=e.querySelector(Yo(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=jo.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,Ce(c);return}c=e.ownerDocument||e,r=_v(r),(l=gi.get(l))&&Fh(r,l),c=c.createElement("link"),Ce(c);var m=c;m._p=new Promise(function(E,N){m.onload=E,m.onerror=N}),An(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=jo.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Lu=0;function Wy(t,e){return t.stylesheets&&t.count===0&&Pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Pu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Lu===0&&(Lu=62500*fy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Lu?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Tv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Pu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function jo(){this.count--,Tv(this)}function jy(){this.imgCount--,Tv(this)}var Ou=null;function Pu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ou=new Map,e.forEach(Zy,t),Ou=null,jo.call(t))}function Zy(t,e){if(!(e.state.loading&4)){var i=Ou.get(t);if(i)var r=i.get(null);else{i=new Map,Ou.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}l=e.instance,m=l.getAttribute("data-precedence"),c=i.get(m)||r,c===r&&i.set(null,l),i.set(m,l),this.count++,r=jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ds={$$typeof:ut,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function Ky(t,e,i,r,l,c,m,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function bv(t,e,i,r,l,c,m,E,N,W,it,gt){return t=new Ky(t,e,i,m,N,W,it,gt,E),e=1,c===!0&&(e|=24),c=Gn(3,null,null,e),t.current=c,c.stateNode=t,e=ef(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},sf(c),t}function Av(t){return t?(t=ns,t):ns}function Rv(t,e,i,r,l,c){l=Av(l),r.context===null?r.context=l:r.pendingContext=l,r=Ua(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Na(t,r,e),i!==null&&(qn(i,t,e),bo(i,t,e))}function Cv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Vh(t,e){Cv(t,e),(t=t.alternate)&&Cv(t,e)}function wv(t){if(t.tag===13||t.tag===31){var e=pr(t,67108864);e!==null&&qn(e,t,67108864),Vh(t,67108864)}}function Dv(t){if(t.tag===13||t.tag===31){var e=ei();e=st(e);var i=pr(t,e);i!==null&&qn(i,t,e),Vh(t,e)}}var Us=!0;function Qy(t,e,i,r){var l=_t.T;_t.T=null;var c=Lt.p;try{Lt.p=2,Xh(t,e,i,r)}finally{Lt.p=c,_t.T=l}}function Jy(t,e,i,r){var l=_t.T;_t.T=null;var c=Lt.p;try{Lt.p=8,Xh(t,e,i,r)}finally{Lt.p=c,_t.T=l}}function Xh(t,e,i,r){if(Us){var l=kh(r);if(l===null)Th(t,e,r,zu,i),Nv(t,r);else if(tM(l,t,e,i,r))r.stopPropagation();else if(Nv(t,r),e&4&&-1<$y.indexOf(t)){for(;l!==null;){var c=ge(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=oi(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var N=1<<31-Cn(m);E.entanglements[1]|=N,m&=~N}Xi(c),(Le&6)===0&&(yu=H()+500,Go(0))}}break;case 31:case 13:E=pr(c,2),E!==null&&qn(E,c,2),Tu(),Vh(c,2)}if(c=kh(r),c===null&&Th(t,e,r,zu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Th(t,e,r,null,i)}}function kh(t){return t=Cc(t),qh(t)}var zu=null;function qh(t){if(zu=null,t=Ne(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return zu=t,null}function Uv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case Ut:return 2;case kt:return 8;case Tt:case St:return 32;case jt:return 268435456;default:return 32}default:return 32}}var Yh=!1,ka=null,qa=null,Ya=null,Zo=new Map,Ko=new Map,Wa=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(t,e){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function Qo(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=ge(e),e!==null&&wv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function tM(t,e,i,r,l){switch(e){case"focusin":return ka=Qo(ka,t,e,i,r,l),!0;case"dragenter":return qa=Qo(qa,t,e,i,r,l),!0;case"mouseover":return Ya=Qo(Ya,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return Zo.set(c,Qo(Zo.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Ko.set(c,Qo(Ko.get(c)||null,t,e,i,r,l)),!0}return!1}function Lv(t){var e=Ne(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,zt(t.priority,function(){Dv(i)});return}}else if(e===31){if(e=d(i),e!==null){t.blockedOn=e,zt(t.priority,function(){Dv(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=kh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Rc=r,i.target.dispatchEvent(r),Rc=null}else return e=ge(i),e!==null&&wv(e),t.blockedOn=i,!1;e.shift()}return!0}function Ov(t,e,i){Iu(t)&&i.delete(e)}function eM(){Yh=!1,ka!==null&&Iu(ka)&&(ka=null),qa!==null&&Iu(qa)&&(qa=null),Ya!==null&&Iu(Ya)&&(Ya=null),Zo.forEach(Ov),Ko.forEach(Ov)}function Bu(t,e){t.blockedOn===e&&(t.blockedOn=null,Yh||(Yh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,eM)))}var Fu=null;function Pv(t){Fu!==t&&(Fu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fu===t&&(Fu=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(qh(r||i)===null)continue;break}var c=ge(i);c!==null&&(t.splice(e,3),e-=3,Rf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ns(t){function e(N){return Bu(N,t)}ka!==null&&Bu(ka,t),qa!==null&&Bu(qa,t),Ya!==null&&Bu(Ya,t),Zo.forEach(e),Ko.forEach(e);for(var i=0;i<Wa.length;i++){var r=Wa[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Wa.length&&(i=Wa[0],i.blockedOn===null);)Lv(i),i.blockedOn===null&&Wa.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],m=l[Yt]||null;if(typeof c=="function")m||Pv(i);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[Yt]||null)E=m.formAction;else if(qh(l)!==null)continue}else E=m.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),Pv(i)}}}function zv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Wh(t){this._internalRoot=t}Hu.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ei();Rv(i,r,t,e,null,null)},Hu.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rv(t.current,2,null,t,null,null),Tu(),e[ie]=null}};function Hu(t){this._internalRoot=t}Hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bt();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Wa.length&&e!==0&&e<Wa[i].priority;i++);Wa.splice(i,0,t),i===0&&Lv(t)}};var Iv=n.version;if(Iv!=="19.3.0")throw Error(s(527,Iv,"19.3.0"));Lt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var nM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{ye=Gu.inject(nM),Je=Gu}catch{}}return $o.createRoot=function(t,e){if(!u(t))throw Error(s(299));var i=!1,r="",l=Ag,c=Rg,m=Cg;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError)),e=bv(t,1,!1,null,null,i,r,null,l,c,m,zv),t[ie]=e.current,Eh(t),new Wh(e)},$o.hydrateRoot=function(t,e,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Ag,m=Rg,E=Cg,N=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(N=i.formState)),e=bv(t,1,!0,e,i??null,r,l,N,c,m,E,zv),e.context=Av(null),i=e.current,r=ei(),r=st(r),l=Ua(r),l.callback=null,Na(i,l,r),i=r,e.current.lanes=i,fr(e,i),Xi(e),t[ie]=e.current,Eh(t),new Hu(e)},$o.version="19.3.0",$o}var Wv;function dM(){if(Wv)return Kh.exports;Wv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Kh.exports=hM(),Kh.exports}var pM=dM();const mM=W0(pM);const xp="180",gM=0,jv=1,_M=2,j0=1,vM=2,ma=3,sr=0,Wn=1,ga=2,ar=0,Ks=1,Zv=2,Kv=3,Qv=4,SM=5,Hr=100,xM=101,yM=102,MM=103,EM=104,TM=200,bM=201,AM=202,RM=203,Dd=204,Ud=205,CM=206,wM=207,DM=208,UM=209,NM=210,LM=211,OM=212,PM=213,zM=214,Nd=0,Ld=1,Od=2,Js=3,Pd=4,zd=5,Id=6,Bd=7,Z0=0,IM=1,BM=2,rr=0,FM=1,HM=2,GM=3,VM=4,XM=5,kM=6,qM=7,K0=300,$s=301,to=302,Fd=303,Hd=304,_c=306,Gd=1e3,Vr=1001,Vd=1002,Ui=1003,YM=1004,Vu=1005,wi=1006,td=1007,nr=1008,Sa=1009,Q0=1010,J0=1011,ul=1012,yp=1013,kr=1014,_a=1015,gl=1016,Mp=1017,Ep=1018,cl=1020,$0=35902,tS=35899,eS=1021,nS=1022,Di=1023,fl=1026,hl=1027,iS=1028,Tp=1029,aS=1030,bp=1031,Ap=1033,cc=33776,fc=33777,hc=33778,dc=33779,Xd=35840,kd=35841,qd=35842,Yd=35843,Wd=36196,jd=37492,Zd=37496,Kd=37808,Qd=37809,Jd=37810,$d=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,rp=37817,sp=37818,op=37819,lp=37820,up=37821,cp=36492,fp=36494,hp=36495,dp=36283,pp=36284,mp=36285,gp=36286,WM=3200,jM=3201,ZM=0,KM=1,er="",Yn="srgb",eo="srgb-linear",mc="linear",Ve="srgb",Ls=7680,Jv=519,QM=512,JM=513,$M=514,rS=515,tE=516,eE=517,nE=518,iE=519,$v=35044,t0="300 es",qi=2e3,gc=2001;class io{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const u=s[n];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,n);n.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let e0=1234567;const sl=Math.PI/180,dl=180/Math.PI;function ao(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[n&255]+Un[n>>8&255]+"-"+Un[n>>16&15|64]+Un[n>>24&255]+"-"+Un[a&63|128]+Un[a>>8&255]+"-"+Un[a>>16&255]+Un[a>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function Te(o,n,a){return Math.max(n,Math.min(a,o))}function Rp(o,n){return(o%n+n)%n}function aE(o,n,a,s,u){return s+(o-n)*(u-s)/(a-n)}function rE(o,n,a){return o!==n?(a-o)/(n-o):0}function ol(o,n,a){return(1-a)*o+a*n}function sE(o,n,a,s){return ol(o,n,1-Math.exp(-a*s))}function oE(o,n=1){return n-Math.abs(Rp(o,n*2)-n)}function lE(o,n,a){return o<=n?0:o>=a?1:(o=(o-n)/(a-n),o*o*(3-2*o))}function uE(o,n,a){return o<=n?0:o>=a?1:(o=(o-n)/(a-n),o*o*o*(o*(o*6-15)+10))}function cE(o,n){return o+Math.floor(Math.random()*(n-o+1))}function fE(o,n){return o+Math.random()*(n-o)}function hE(o){return o*(.5-Math.random())}function dE(o){o!==void 0&&(e0=o);let n=e0+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}function pE(o){return o*sl}function mE(o){return o*dl}function gE(o){return(o&o-1)===0&&o!==0}function _E(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function vE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function SE(o,n,a,s,u){const f=Math.cos,h=Math.sin,d=f(a/2),_=h(a/2),g=f((n+s)/2),v=h((n+s)/2),p=f((n-s)/2),x=h((n-s)/2),M=f((s-n)/2),b=h((s-n)/2);switch(u){case"XYX":o.set(d*v,_*p,_*x,d*g);break;case"YZY":o.set(_*x,d*v,_*p,d*g);break;case"ZXZ":o.set(_*p,_*x,d*v,d*g);break;case"XZX":o.set(d*v,_*b,_*M,d*g);break;case"YXY":o.set(_*M,d*v,_*b,d*g);break;case"ZYZ":o.set(_*b,_*M,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function js(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Xu={DEG2RAD:sl,RAD2DEG:dl,generateUUID:ao,clamp:Te,euclideanModulo:Rp,mapLinear:aE,inverseLerp:rE,lerp:ol,damp:sE,pingpong:oE,smoothstep:lE,smootherstep:uE,randInt:cE,randFloat:fE,randFloatSpread:hE,seededRandom:dE,degToRad:pE,radToDeg:mE,isPowerOfTwo:gE,ceilPowerOfTwo:_E,floorPowerOfTwo:vE,setQuaternionFromProperEuler:SE,normalize:Bn,denormalize:js};class Fe{constructor(n=0,a=0){Fe.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Te(this.x,n.x,a.x),this.y=Te(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=Te(this.x,n,a),this.y=Te(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Te(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-n.x,h=this.y-n.y;return this.x=f*s-h*u+n.x,this.y=f*u+h*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _l{constructor(n=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=u}static slerpFlat(n,a,s,u,f,h,d){let _=s[u+0],g=s[u+1],v=s[u+2],p=s[u+3];const x=f[h+0],M=f[h+1],b=f[h+2],C=f[h+3];if(d===0){n[a+0]=_,n[a+1]=g,n[a+2]=v,n[a+3]=p;return}if(d===1){n[a+0]=x,n[a+1]=M,n[a+2]=b,n[a+3]=C;return}if(p!==C||_!==x||g!==M||v!==b){let y=1-d;const S=_*x+g*M+v*b+p*C,I=S>=0?1:-1,P=1-S*S;if(P>Number.EPSILON){const F=Math.sqrt(P),G=Math.atan2(F,S*I);y=Math.sin(y*G)/F,d=Math.sin(d*G)/F}const D=d*I;if(_=_*y+x*D,g=g*y+M*D,v=v*y+b*D,p=p*y+C*D,y===1-d){const F=1/Math.sqrt(_*_+g*g+v*v+p*p);_*=F,g*=F,v*=F,p*=F}}n[a]=_,n[a+1]=g,n[a+2]=v,n[a+3]=p}static multiplyQuaternionsFlat(n,a,s,u,f,h){const d=s[u],_=s[u+1],g=s[u+2],v=s[u+3],p=f[h],x=f[h+1],M=f[h+2],b=f[h+3];return n[a]=d*b+v*p+_*M-g*x,n[a+1]=_*b+v*x+g*p-d*M,n[a+2]=g*b+v*M+d*x-_*p,n[a+3]=v*b-d*p-_*x-g*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,u){return this._x=n,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,u=n._y,f=n._z,h=n._order,d=Math.cos,_=Math.sin,g=d(s/2),v=d(u/2),p=d(f/2),x=_(s/2),M=_(u/2),b=_(f/2);switch(h){case"XYZ":this._x=x*v*p+g*M*b,this._y=g*M*p-x*v*b,this._z=g*v*b+x*M*p,this._w=g*v*p-x*M*b;break;case"YXZ":this._x=x*v*p+g*M*b,this._y=g*M*p-x*v*b,this._z=g*v*b-x*M*p,this._w=g*v*p+x*M*b;break;case"ZXY":this._x=x*v*p-g*M*b,this._y=g*M*p+x*v*b,this._z=g*v*b+x*M*p,this._w=g*v*p-x*M*b;break;case"ZYX":this._x=x*v*p-g*M*b,this._y=g*M*p+x*v*b,this._z=g*v*b-x*M*p,this._w=g*v*p+x*M*b;break;case"YZX":this._x=x*v*p+g*M*b,this._y=g*M*p+x*v*b,this._z=g*v*b-x*M*p,this._w=g*v*p-x*M*b;break;case"XZY":this._x=x*v*p-g*M*b,this._y=g*M*p-x*v*b,this._z=g*v*b+x*M*p,this._w=g*v*p+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,u=Math.sin(s);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],_=a[9],g=a[2],v=a[6],p=a[10],x=s+d+p;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-_)*M,this._y=(f-g)*M,this._z=(h-u)*M}else if(s>d&&s>p){const M=2*Math.sqrt(1+s-d-p);this._w=(v-_)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+g)/M}else if(d>p){const M=2*Math.sqrt(1+d-s-p);this._w=(f-g)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(_+v)/M}else{const M=2*Math.sqrt(1+p-s-d);this._w=(h-u)/M,this._x=(f+g)/M,this._y=(_+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<1e-8?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Te(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,u=n._y,f=n._z,h=n._w,d=a._x,_=a._y,g=a._z,v=a._w;return this._x=s*v+h*d+u*g-f*_,this._y=u*v+h*_+f*d-s*g,this._z=f*v+h*g+s*_-u*d,this._w=h*v-s*d-u*_-f*g,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*n._w+s*n._x+u*n._y+f*n._z;if(d<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,d=-d):this.copy(n),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const g=Math.sqrt(_),v=Math.atan2(g,d),p=Math.sin((1-a)*v)/g,x=Math.sin(a*v)/g;return this._w=h*p+this._w*x,this._x=s*p+this._x*x,this._y=u*p+this._y*x,this._z=f*p+this._z*x,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(n=0,a=0,s=0){ot.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(n0.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(n0.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=n.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(n){const a=this.x,s=this.y,u=this.z,f=n.x,h=n.y,d=n.z,_=n.w,g=2*(h*u-d*s),v=2*(d*a-f*u),p=2*(f*s-h*a);return this.x=a+_*g+h*p-d*v,this.y=s+_*v+d*g-f*p,this.z=u+_*p+f*v-h*g,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Te(this.x,n.x,a.x),this.y=Te(this.y,n.y,a.y),this.z=Te(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=Te(this.x,n,a),this.y=Te(this.y,n,a),this.z=Te(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,u=n.y,f=n.z,h=a.x,d=a.y,_=a.z;return this.x=u*_-f*d,this.y=f*h-s*_,this.z=s*d-u*h,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return ed.copy(this).projectOnVector(n),this.sub(ed)}reflect(n){return this.sub(ed.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Te(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,u=this.z-n.z;return a*a+s*s+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const u=Math.sin(a)*n;return this.x=u*Math.sin(s),this.y=Math.cos(a)*n,this.z=u*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new ot,n0=new _l;class de{constructor(n,a,s,u,f,h,d,_,g){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,_,g)}set(n,a,s,u,f,h,d,_,g){const v=this.elements;return v[0]=n,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=_,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],_=s[6],g=s[1],v=s[4],p=s[7],x=s[2],M=s[5],b=s[8],C=u[0],y=u[3],S=u[6],I=u[1],P=u[4],D=u[7],F=u[2],G=u[5],O=u[8];return f[0]=h*C+d*I+_*F,f[3]=h*y+d*P+_*G,f[6]=h*S+d*D+_*O,f[1]=g*C+v*I+p*F,f[4]=g*y+v*P+p*G,f[7]=g*S+v*D+p*O,f[2]=x*C+M*I+b*F,f[5]=x*y+M*P+b*G,f[8]=x*S+M*D+b*O,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8];return a*h*v-a*d*g-s*f*v+s*d*_+u*f*g-u*h*_}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8],p=v*h-d*g,x=d*_-v*f,M=g*f-h*_,b=a*p+s*x+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return n[0]=p*C,n[1]=(u*g-v*s)*C,n[2]=(d*s-u*h)*C,n[3]=x*C,n[4]=(v*a-u*_)*C,n[5]=(u*f-d*a)*C,n[6]=M*C,n[7]=(s*_-g*a)*C,n[8]=(h*a-s*f)*C,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,u,f,h,d){const _=Math.cos(f),g=Math.sin(f);return this.set(s*_,s*g,-s*(_*h+g*d)+h+n,-u*g,u*_,-u*(-g*h+_*d)+d+a,0,0,1),this}scale(n,a){return this.premultiply(nd.makeScale(n,a)),this}rotate(n){return this.premultiply(nd.makeRotation(-n)),this}translate(n,a){return this.premultiply(nd.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new de;function sS(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function pl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xE(){const o=pl("canvas");return o.style.display="block",o}const i0={};function ml(o){o in i0||(i0[o]=!0,console.warn(o))}function yE(o,n,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const a0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ME(){const o={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ve&&(u.r=va(u.r),u.g=va(u.g),u.b=va(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(u.r=Qs(u.r),u.g=Qs(u.g),u.b=Qs(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===er?mc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return ml("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return ml("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[eo]:{primaries:n,whitePoint:s,transfer:mc,toXYZ:a0,fromXYZ:r0,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:n,whitePoint:s,transfer:Ve,toXYZ:a0,fromXYZ:r0,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const De=ME();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Qs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Os;class EE{static getDataURL(n,a="image/png"){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let s;if(n instanceof HTMLCanvasElement)s=n;else{Os===void 0&&(Os=pl("canvas")),Os.width=n.width,Os.height=n.height;const u=Os.getContext("2d");n instanceof ImageData?u.putImageData(n,0,0):u.drawImage(n,0,0,n.width,n.height),s=Os}return s.toDataURL(a)}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=pl("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const u=s.getImageData(0,0,n.width,n.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=va(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(va(a[s]/255)*255):a[s]=va(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let TE=0;class Cp{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=ao(),this.data=n,this.dataReady=!0,this.version=0}getSize(n){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?n.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?n.set(a.displayHeight,a.displayWidth,0):a!==null?n.set(a.width,a.height,a.depth||0):n.set(0,0,0),n}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(id(u[h].image)):f.push(id(u[h]))}else f=id(u);s.url=f}return a||(n.images[this.uuid]=s),s}}function id(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?EE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bE=0;const ad=new ot;class Hn extends io{constructor(n=Hn.DEFAULT_IMAGE,a=Hn.DEFAULT_MAPPING,s=Vr,u=Vr,f=wi,h=nr,d=Di,_=Sa,g=Hn.DEFAULT_ANISOTROPY,v=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=ao(),this.name="",this.source=new Cp(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=_,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(n&&n.depth&&n.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.isArrayTexture=n.isArrayTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}setValues(n){for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==K0)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Gd:n.x=n.x-Math.floor(n.x);break;case Vr:n.x=n.x<0?0:1;break;case Vd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Gd:n.y=n.y-Math.floor(n.y);break;case Vr:n.y=n.y<0?0:1;break;case Vd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=K0;Hn.DEFAULT_ANISOTROPY=1;class rn{constructor(n=0,a=0,s=0,u=1){rn.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,u){return this.x=n,this.y=a,this.z=s,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=this.w,h=n.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,u,f;const _=n.elements,g=_[0],v=_[4],p=_[8],x=_[1],M=_[5],b=_[9],C=_[2],y=_[6],S=_[10];if(Math.abs(v-x)<.01&&Math.abs(p-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(p+C)<.1&&Math.abs(b+y)<.1&&Math.abs(g+M+S-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const P=(g+1)/2,D=(M+1)/2,F=(S+1)/2,G=(v+x)/4,O=(p+C)/4,k=(b+y)/4;return P>D&&P>F?P<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(P),u=G/s,f=O/s):D>F?D<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),s=G/u,f=k/u):F<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(F),s=O/f,u=k/f),this.set(s,u,f,a),this}let I=Math.sqrt((y-b)*(y-b)+(p-C)*(p-C)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(p-C)/I,this.z=(x-v)/I,this.w=Math.acos((g+M+S-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Te(this.x,n.x,a.x),this.y=Te(this.y,n.y,a.y),this.z=Te(this.z,n.z,a.z),this.w=Te(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=Te(this.x,n,a),this.y=Te(this.y,n,a),this.z=Te(this.z,n,a),this.w=Te(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AE extends io{constructor(n=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=s.depth,this.scissor=new rn(0,0,n,a),this.scissorTest=!1,this.viewport=new rn(0,0,n,a);const u={width:n,height:a,depth:s.depth},f=new Hn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(n={}){const a={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};n.mapping!==void 0&&(a.mapping=n.mapping),n.wrapS!==void 0&&(a.wrapS=n.wrapS),n.wrapT!==void 0&&(a.wrapT=n.wrapT),n.wrapR!==void 0&&(a.wrapR=n.wrapR),n.magFilter!==void 0&&(a.magFilter=n.magFilter),n.minFilter!==void 0&&(a.minFilter=n.minFilter),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.anisotropy!==void 0&&(a.anisotropy=n.anisotropy),n.colorSpace!==void 0&&(a.colorSpace=n.colorSpace),n.flipY!==void 0&&(a.flipY=n.flipY),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),n.internalFormat!==void 0&&(a.internalFormat=n.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},n.textures[a].image);this.textures[a].source=new Cp(u)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends AE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class oS extends Hn{constructor(n=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class RE extends Hn{constructor(n=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(n=new ot(1/0,1/0,1/0),a=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(bi.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(bi.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=bi.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)n.isMesh===!0?n.getVertexPosition(h,bi):bi.fromBufferAttribute(f,h),bi.applyMatrix4(n.matrixWorld),this.expandByPoint(bi);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),ku.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ku.copy(s.boundingBox)),ku.applyMatrix4(n.matrixWorld),this.union(ku)}const u=n.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,bi),bi.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(tl),qu.subVectors(this.max,tl),Ps.subVectors(n.a,tl),zs.subVectors(n.b,tl),Is.subVectors(n.c,tl),Za.subVectors(zs,Ps),Ka.subVectors(Is,zs),Nr.subVectors(Ps,Is);let a=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Nr.z,Nr.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Nr.z,0,-Nr.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Nr.y,Nr.x,0];return!rd(a,Ps,zs,Is,qu)||(a=[1,0,0,0,1,0,0,0,1],!rd(a,Ps,zs,Is,qu))?!1:(Yu.crossVectors(Za,Ka),a=[Yu.x,Yu.y,Yu.z],rd(a,Ps,zs,Is,qu))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,bi).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(bi).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(ca),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(n){return this.min.fromArray(n.min),this.max.fromArray(n.max),this}}const ca=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],bi=new ot,ku=new vl,Ps=new ot,zs=new ot,Is=new ot,Za=new ot,Ka=new ot,Nr=new ot,tl=new ot,qu=new ot,Yu=new ot,Lr=new ot;function rd(o,n,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Lr.fromArray(o,f);const d=u.x*Math.abs(Lr.x)+u.y*Math.abs(Lr.y)+u.z*Math.abs(Lr.z),_=n.dot(Lr),g=a.dot(Lr),v=s.dot(Lr);if(Math.max(-Math.max(_,g,v),Math.min(_,g,v))>d)return!1}return!0}const CE=new vl,el=new ot,sd=new ot;class wp{constructor(n=new ot,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):CE.setFromPoints(n).getCenter(s);let u=0;for(let f=0,h=n.length;f<h;f++)u=Math.max(u,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;el.subVectors(n,this.center);const a=el.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(el,u/s),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(sd.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(el.copy(n.center).add(sd)),this.expandByPoint(el.copy(n.center).sub(sd))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(n){return this.radius=n.radius,this.center.fromArray(n.center),this}}const fa=new ot,od=new ot,Wu=new ot,Qa=new ot,ld=new ot,ju=new ot,ud=new ot;class lS{constructor(n=new ot,a=new ot(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,fa)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=fa.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(fa.copy(this.origin).addScaledVector(this.direction,a),fa.distanceToSquared(n))}distanceSqToSegment(n,a,s,u){od.copy(n).add(a).multiplyScalar(.5),Wu.copy(a).sub(n).normalize(),Qa.copy(this.origin).sub(od);const f=n.distanceTo(a)*.5,h=-this.direction.dot(Wu),d=Qa.dot(this.direction),_=-Qa.dot(Wu),g=Qa.lengthSq(),v=Math.abs(1-h*h);let p,x,M,b;if(v>0)if(p=h*_-d,x=h*d-_,b=f*v,p>=0)if(x>=-b)if(x<=b){const C=1/v;p*=C,x*=C,M=p*(p+h*x+2*d)+x*(h*p+x+2*_)+g}else x=f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+g;else x=-f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+g;else x<=-b?(p=Math.max(0,-(-h*f+d)),x=p>0?-f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+g):x<=b?(p=0,x=Math.min(Math.max(-f,-_),f),M=x*(x+2*_)+g):(p=Math.max(0,-(h*f+d)),x=p>0?f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+g);else x=h>0?-f:f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(od).addScaledVector(Wu,x),M}intersectSphere(n,a){fa.subVectors(n.center,this.origin);const s=fa.dot(this.direction),u=fa.dot(fa)-s*s,f=n.radius*n.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,_=s+h;return _<0?null:d<0?this.at(_,a):this.at(d,a)}intersectsSphere(n){return n.radius<0?!1:this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,u,f,h,d,_;const g=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,x=this.origin;return g>=0?(s=(n.min.x-x.x)*g,u=(n.max.x-x.x)*g):(s=(n.max.x-x.x)*g,u=(n.min.x-x.x)*g),v>=0?(f=(n.min.y-x.y)*v,h=(n.max.y-x.y)*v):(f=(n.max.y-x.y)*v,h=(n.min.y-x.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),p>=0?(d=(n.min.z-x.z)*p,_=(n.max.z-x.z)*p):(d=(n.max.z-x.z)*p,_=(n.min.z-x.z)*p),s>_||d>u)||((d>s||s!==s)&&(s=d),(_<u||u!==u)&&(u=_),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(n){return this.intersectBox(n,fa)!==null}intersectTriangle(n,a,s,u,f){ld.subVectors(a,n),ju.subVectors(s,n),ud.crossVectors(ld,ju);let h=this.direction.dot(ud),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qa.subVectors(this.origin,n);const _=d*this.direction.dot(ju.crossVectors(Qa,ju));if(_<0)return null;const g=d*this.direction.dot(ld.cross(Qa));if(g<0||_+g>h)return null;const v=-d*Qa.dot(ud);return v<0?null:this.at(v/h,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(n,a,s,u,f,h,d,_,g,v,p,x,M,b,C,y){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,_,g,v,p,x,M,b,C,y)}set(n,a,s,u,f,h,d,_,g,v,p,x,M,b,C,y){const S=this.elements;return S[0]=n,S[4]=a,S[8]=s,S[12]=u,S[1]=f,S[5]=h,S[9]=d,S[13]=_,S[2]=g,S[6]=v,S[10]=p,S[14]=x,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,u=1/Bs.setFromMatrixColumn(n,0).length(),f=1/Bs.setFromMatrixColumn(n,1).length(),h=1/Bs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,u=n.y,f=n.z,h=Math.cos(s),d=Math.sin(s),_=Math.cos(u),g=Math.sin(u),v=Math.cos(f),p=Math.sin(f);if(n.order==="XYZ"){const x=h*v,M=h*p,b=d*v,C=d*p;a[0]=_*v,a[4]=-_*p,a[8]=g,a[1]=M+b*g,a[5]=x-C*g,a[9]=-d*_,a[2]=C-x*g,a[6]=b+M*g,a[10]=h*_}else if(n.order==="YXZ"){const x=_*v,M=_*p,b=g*v,C=g*p;a[0]=x+C*d,a[4]=b*d-M,a[8]=h*g,a[1]=h*p,a[5]=h*v,a[9]=-d,a[2]=M*d-b,a[6]=C+x*d,a[10]=h*_}else if(n.order==="ZXY"){const x=_*v,M=_*p,b=g*v,C=g*p;a[0]=x-C*d,a[4]=-h*p,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*v,a[9]=C-x*d,a[2]=-h*g,a[6]=d,a[10]=h*_}else if(n.order==="ZYX"){const x=h*v,M=h*p,b=d*v,C=d*p;a[0]=_*v,a[4]=b*g-M,a[8]=x*g+C,a[1]=_*p,a[5]=C*g+x,a[9]=M*g-b,a[2]=-g,a[6]=d*_,a[10]=h*_}else if(n.order==="YZX"){const x=h*_,M=h*g,b=d*_,C=d*g;a[0]=_*v,a[4]=C-x*p,a[8]=b*p+M,a[1]=p,a[5]=h*v,a[9]=-d*v,a[2]=-g*v,a[6]=M*p+b,a[10]=x-C*p}else if(n.order==="XZY"){const x=h*_,M=h*g,b=d*_,C=d*g;a[0]=_*v,a[4]=-p,a[8]=g*v,a[1]=x*p+C,a[5]=h*v,a[9]=M*p-b,a[2]=b*p-M,a[6]=d*v,a[10]=C*p+x}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(wE,n,DE)}lookAt(n,a,s){const u=this.elements;return ii.subVectors(n,a),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ja.crossVectors(s,ii),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ja.crossVectors(s,ii)),Ja.normalize(),Zu.crossVectors(ii,Ja),u[0]=Ja.x,u[4]=Zu.x,u[8]=ii.x,u[1]=Ja.y,u[5]=Zu.y,u[9]=ii.y,u[2]=Ja.z,u[6]=Zu.z,u[10]=ii.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],_=s[8],g=s[12],v=s[1],p=s[5],x=s[9],M=s[13],b=s[2],C=s[6],y=s[10],S=s[14],I=s[3],P=s[7],D=s[11],F=s[15],G=u[0],O=u[4],k=u[8],w=u[12],R=u[1],V=u[5],et=u[9],lt=u[13],vt=u[2],ut=u[6],q=u[10],at=u[14],j=u[3],xt=u[7],Mt=u[11],Ht=u[15];return f[0]=h*G+d*R+_*vt+g*j,f[4]=h*O+d*V+_*ut+g*xt,f[8]=h*k+d*et+_*q+g*Mt,f[12]=h*w+d*lt+_*at+g*Ht,f[1]=v*G+p*R+x*vt+M*j,f[5]=v*O+p*V+x*ut+M*xt,f[9]=v*k+p*et+x*q+M*Mt,f[13]=v*w+p*lt+x*at+M*Ht,f[2]=b*G+C*R+y*vt+S*j,f[6]=b*O+C*V+y*ut+S*xt,f[10]=b*k+C*et+y*q+S*Mt,f[14]=b*w+C*lt+y*at+S*Ht,f[3]=I*G+P*R+D*vt+F*j,f[7]=I*O+P*V+D*ut+F*xt,f[11]=I*k+P*et+D*q+F*Mt,f[15]=I*w+P*lt+D*at+F*Ht,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],u=n[8],f=n[12],h=n[1],d=n[5],_=n[9],g=n[13],v=n[2],p=n[6],x=n[10],M=n[14],b=n[3],C=n[7],y=n[11],S=n[15];return b*(+f*_*p-u*g*p-f*d*x+s*g*x+u*d*M-s*_*M)+C*(+a*_*M-a*g*x+f*h*x-u*h*M+u*g*v-f*_*v)+y*(+a*g*p-a*d*M-f*h*p+s*h*M+f*d*v-s*g*v)+S*(-u*d*v-a*_*p+a*d*x+u*h*p-s*h*x+s*_*v)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=a,u[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],_=n[6],g=n[7],v=n[8],p=n[9],x=n[10],M=n[11],b=n[12],C=n[13],y=n[14],S=n[15],I=p*y*g-C*x*g+C*_*M-d*y*M-p*_*S+d*x*S,P=b*x*g-v*y*g-b*_*M+h*y*M+v*_*S-h*x*S,D=v*C*g-b*p*g+b*d*M-h*C*M-v*d*S+h*p*S,F=b*p*_-v*C*_-b*d*x+h*C*x+v*d*y-h*p*y,G=a*I+s*P+u*D+f*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return n[0]=I*O,n[1]=(C*x*f-p*y*f-C*u*M+s*y*M+p*u*S-s*x*S)*O,n[2]=(d*y*f-C*_*f+C*u*g-s*y*g-d*u*S+s*_*S)*O,n[3]=(p*_*f-d*x*f-p*u*g+s*x*g+d*u*M-s*_*M)*O,n[4]=P*O,n[5]=(v*y*f-b*x*f+b*u*M-a*y*M-v*u*S+a*x*S)*O,n[6]=(b*_*f-h*y*f-b*u*g+a*y*g+h*u*S-a*_*S)*O,n[7]=(h*x*f-v*_*f+v*u*g-a*x*g-h*u*M+a*_*M)*O,n[8]=D*O,n[9]=(b*p*f-v*C*f-b*s*M+a*C*M+v*s*S-a*p*S)*O,n[10]=(h*C*f-b*d*f+b*s*g-a*C*g-h*s*S+a*d*S)*O,n[11]=(v*d*f-h*p*f-v*s*g+a*p*g+h*s*M-a*d*M)*O,n[12]=F*O,n[13]=(v*C*u-b*p*u+b*s*x-a*C*x-v*s*y+a*p*y)*O,n[14]=(b*d*u-h*C*u-b*s*_+a*C*_+h*s*y-a*d*y)*O,n[15]=(h*p*u-v*d*u+v*s*_-a*p*_-h*s*x+a*d*x)*O,this}scale(n){const a=this.elements,s=n.x,u=n.y,f=n.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=n.x,d=n.y,_=n.z,g=f*h,v=f*d;return this.set(g*h+s,g*d-u*_,g*_+u*d,0,g*d+u*_,v*d+s,v*_-u*h,0,g*_-u*d,v*_+u*h,f*_*_+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,u,f,h){return this.set(1,s,f,0,n,1,h,0,a,u,1,0,0,0,0,1),this}compose(n,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,_=a._w,g=f+f,v=h+h,p=d+d,x=f*g,M=f*v,b=f*p,C=h*v,y=h*p,S=d*p,I=_*g,P=_*v,D=_*p,F=s.x,G=s.y,O=s.z;return u[0]=(1-(C+S))*F,u[1]=(M+D)*F,u[2]=(b-P)*F,u[3]=0,u[4]=(M-D)*G,u[5]=(1-(x+S))*G,u[6]=(y+I)*G,u[7]=0,u[8]=(b+P)*O,u[9]=(y-I)*O,u[10]=(1-(x+C))*O,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,a,s){const u=this.elements;let f=Bs.set(u[0],u[1],u[2]).length();const h=Bs.set(u[4],u[5],u[6]).length(),d=Bs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],Ai.copy(this);const g=1/f,v=1/h,p=1/d;return Ai.elements[0]*=g,Ai.elements[1]*=g,Ai.elements[2]*=g,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,a.setFromRotationMatrix(Ai),s.x=f,s.y=h,s.z=d,this}makePerspective(n,a,s,u,f,h,d=qi,_=!1){const g=this.elements,v=2*f/(a-n),p=2*f/(s-u),x=(a+n)/(a-n),M=(s+u)/(s-u);let b,C;if(_)b=f/(h-f),C=h*f/(h-f);else if(d===qi)b=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===gc)b=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(n,a,s,u,f,h,d=qi,_=!1){const g=this.elements,v=2/(a-n),p=2/(s-u),x=-(a+n)/(a-n),M=-(s+u)/(s-u);let b,C;if(_)b=1/(h-f),C=h/(h-f);else if(d===qi)b=-2/(h-f),C=-(h+f)/(h-f);else if(d===gc)b=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Bs=new ot,Ai=new hn,wE=new ot(0,0,0),DE=new ot(1,1,1),Ja=new ot,Zu=new ot,ii=new ot,s0=new hn,o0=new _l;class xa{constructor(n=0,a=0,s=0,u=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,u=this._order){return this._x=n,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const u=n.elements,f=u[0],h=u[4],d=u[8],_=u[1],g=u[5],v=u[9],p=u[2],x=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Te(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return s0.makeRotationFromQuaternion(n),this.setFromRotationMatrix(s0,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return o0.setFromEuler(this),this.setFromQuaternion(o0,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class Dp{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let UE=0;const l0=new ot,Fs=new _l,ha=new hn,Ku=new ot,nl=new ot,NE=new ot,LE=new _l,u0=new ot(1,0,0),c0=new ot(0,1,0),f0=new ot(0,0,1),h0={type:"added"},OE={type:"removed"},Hs={type:"childadded",child:null},cd={type:"childremoved",child:null};class si extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const n=new ot,a=new xa,s=new _l,u=new ot(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new hn},normalMatrix:{value:new de}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Fs.setFromAxisAngle(n,a),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(n,a){return Fs.setFromAxisAngle(n,a),this.quaternion.premultiply(Fs),this}rotateX(n){return this.rotateOnAxis(u0,n)}rotateY(n){return this.rotateOnAxis(c0,n)}rotateZ(n){return this.rotateOnAxis(f0,n)}translateOnAxis(n,a){return l0.copy(n).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(u0,n)}translateY(n){return this.translateOnAxis(c0,n)}translateZ(n){return this.translateOnAxis(f0,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Ku.copy(n):Ku.set(n,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(nl,Ku,this.up):ha.lookAt(Ku,nl,this.up),this.quaternion.setFromRotationMatrix(ha),u&&(ha.extractRotation(u.matrixWorld),Fs.setFromRotationMatrix(ha),this.quaternion.premultiply(Fs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(h0),Hs.child=n,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(OE),cd.child=n,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),ha.multiply(n.parent.matrixWorld)),n.applyMatrix4(ha),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(h0),Hs.child=n,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(n,a);if(h!==void 0)return h}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,n,NE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,LE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(n),u.indirectTexture=this._indirectTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(n)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let g=0,v=_.length;g<v;g++){const p=_[g];f(n.shapes,p)}else f(n.shapes,_)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,g=this.material.length;_<g;_++)d.push(f(n.materials,this.material[_]));u.material=d}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];u.animations.push(f(n.animations,_))}}if(a){const d=h(n.geometries),_=h(n.materials),g=h(n.textures),v=h(n.images),p=h(n.shapes),x=h(n.skeletons),M=h(n.animations),b=h(n.nodes);d.length>0&&(s.geometries=d),_.length>0&&(s.materials=_),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const _=[];for(const g in d){const v=d[g];delete v.metadata,_.push(v)}return _}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const u=n.children[s];this.add(u.clone())}return this}}si.DEFAULT_UP=new ot(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new ot,da=new ot,fd=new ot,pa=new ot,Gs=new ot,Vs=new ot,d0=new ot,hd=new ot,dd=new ot,pd=new ot,md=new rn,gd=new rn,_d=new rn;class Ci{constructor(n=new ot,a=new ot,s=new ot){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,u){u.subVectors(s,a),Ri.subVectors(n,a),u.cross(Ri);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,a,s,u,f){Ri.subVectors(u,a),da.subVectors(s,a),fd.subVectors(n,a);const h=Ri.dot(Ri),d=Ri.dot(da),_=Ri.dot(fd),g=da.dot(da),v=da.dot(fd),p=h*g-d*d;if(p===0)return f.set(0,0,0),null;const x=1/p,M=(g*_-d*v)*x,b=(h*v-d*_)*x;return f.set(1-M-b,b,M)}static containsPoint(n,a,s,u){return this.getBarycoord(n,a,s,u,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(n,a,s,u,f,h,d,_){return this.getBarycoord(n,a,s,u,pa)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,pa.x),_.addScaledVector(h,pa.y),_.addScaledVector(d,pa.z),_)}static getInterpolatedAttribute(n,a,s,u,f,h){return md.setScalar(0),gd.setScalar(0),_d.setScalar(0),md.fromBufferAttribute(n,a),gd.fromBufferAttribute(n,s),_d.fromBufferAttribute(n,u),h.setScalar(0),h.addScaledVector(md,f.x),h.addScaledVector(gd,f.y),h.addScaledVector(_d,f.z),h}static isFrontFacing(n,a,s,u){return Ri.subVectors(s,a),da.subVectors(n,a),Ri.cross(da).dot(u)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,u){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,a,s,u){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ci.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ci.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,u,f){return Ci.getInterpolation(n,this.a,this.b,this.c,a,s,u,f)}containsPoint(n){return Ci.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ci.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,u=this.b,f=this.c;let h,d;Gs.subVectors(u,s),Vs.subVectors(f,s),hd.subVectors(n,s);const _=Gs.dot(hd),g=Vs.dot(hd);if(_<=0&&g<=0)return a.copy(s);dd.subVectors(n,u);const v=Gs.dot(dd),p=Vs.dot(dd);if(v>=0&&p<=v)return a.copy(u);const x=_*p-v*g;if(x<=0&&_>=0&&v<=0)return h=_/(_-v),a.copy(s).addScaledVector(Gs,h);pd.subVectors(n,f);const M=Gs.dot(pd),b=Vs.dot(pd);if(b>=0&&M<=b)return a.copy(f);const C=M*g-_*b;if(C<=0&&g>=0&&b<=0)return d=g/(g-b),a.copy(s).addScaledVector(Vs,d);const y=v*b-M*p;if(y<=0&&p-v>=0&&M-b>=0)return d0.subVectors(f,u),d=(p-v)/(p-v+(M-b)),a.copy(u).addScaledVector(d0,d);const S=1/(y+C+x);return h=C*S,d=x*S,a.copy(s).addScaledVector(Gs,h).addScaledVector(Vs,d)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const uS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Qu={h:0,s:0,l:0};function vd(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class Xe{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=Yn){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(n,a,s,u=De.workingColorSpace){return this.r=n,this.g=a,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(n,a,s,u=De.workingColorSpace){if(n=Rp(n,1),a=Te(a,0,1),s=Te(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=vd(h,f,n+1/3),this.g=vd(h,f,n),this.b=vd(h,f,n-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(n,a=Yn){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=Yn){const s=uS[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=va(n.r),this.g=va(n.g),this.b=va(n.b),this}copyLinearToSRGB(n){return this.r=Qs(n.r),this.g=Qs(n.g),this.b=Qs(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=Yn){return De.workingToColorSpace(Nn.copy(this),n),Math.round(Te(Nn.r*255,0,255))*65536+Math.round(Te(Nn.g*255,0,255))*256+Math.round(Te(Nn.b*255,0,255))}getHexString(n=Yn){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=De.workingColorSpace){De.workingToColorSpace(Nn.copy(this),a);const s=Nn.r,u=Nn.g,f=Nn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let _,g;const v=(d+h)/2;if(d===h)_=0,g=0;else{const p=h-d;switch(g=v<=.5?p/(h+d):p/(2-h-d),h){case s:_=(u-f)/p+(u<f?6:0);break;case u:_=(f-s)/p+2;break;case f:_=(s-u)/p+4;break}_/=6}return n.h=_,n.s=g,n.l=v,n}getRGB(n,a=De.workingColorSpace){return De.workingToColorSpace(Nn.copy(this),a),n.r=Nn.r,n.g=Nn.g,n.b=Nn.b,n}getStyle(n=Yn){De.workingToColorSpace(Nn.copy(this),n);const a=Nn.r,s=Nn.g,u=Nn.b;return n!==Yn?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(n,a,s){return this.getHSL($a),this.setHSL($a.h+n,$a.s+a,$a.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL($a),n.getHSL(Qu);const s=ol($a.h,Qu.h,a),u=ol($a.s,Qu.s,a),f=ol($a.l,Qu.l,a);return this.setHSL(s,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,u=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Xe;Xe.NAMES=uS;let PE=0;class vc extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Ks,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Ud,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(n).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(n).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==sr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dd&&(s.blendSrc=this.blendSrc),this.blendDst!==Ud&&(s.blendDst=this.blendDst),this.blendEquation!==Hr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(a){const f=u(n.textures),h=u(n.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}class ll extends vc{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const fn=new ot,Ju=new Fe;let zE=0;class Wi{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zE++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=$v,this.updateRanges=[],this.gpuType=_a,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=a.array[s+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Ju.fromBufferAttribute(this,a),Ju.applyMatrix3(n),this.setXY(a,Ju.x,Ju.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyMatrix3(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyMatrix4(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.applyNormalMatrix(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)fn.fromBufferAttribute(this,a),fn.transformDirection(n),this.setXYZ(a,fn.x,fn.y,fn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=js(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Bn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=js(a,this.array)),a}setX(n,a){return this.normalized&&(a=Bn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=js(a,this.array)),a}setY(n,a){return this.normalized&&(a=Bn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=js(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Bn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=js(a,this.array)),a}setW(n,a){return this.normalized&&(a=Bn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Bn(a,this.array),s=Bn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,u){return n*=this.itemSize,this.normalized&&(a=Bn(a,this.array),s=Bn(s,this.array),u=Bn(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this}setXYZW(n,a,s,u,f){return n*=this.itemSize,this.normalized&&(a=Bn(a,this.array),s=Bn(s,this.array),u=Bn(u,this.array),f=Bn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==$v&&(n.usage=this.usage),n}}class cS extends Wi{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class fS extends Wi{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Xr extends Wi{constructor(n,a,s){super(new Float32Array(n),a,s)}}let IE=0;const _i=new hn,Sd=new si,Xs=new ot,ai=new vl,il=new vl,yn=new ot;class Yr extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(sS(n)?fS:cS)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return _i.makeRotationFromQuaternion(n),this.applyMatrix4(_i),this}rotateX(n){return _i.makeRotationX(n),this.applyMatrix4(_i),this}rotateY(n){return _i.makeRotationY(n),this.applyMatrix4(_i),this}rotateZ(n){return _i.makeRotationZ(n),this.applyMatrix4(_i),this}translate(n,a,s){return _i.makeTranslation(n,a,s),this.applyMatrix4(_i),this}scale(n,a,s){return _i.makeScale(n,a,s),this.applyMatrix4(_i),this}lookAt(n){return Sd.lookAt(n),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=n.length;u<f;u++){const h=n[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xr(s,3))}else{const s=Math.min(n.length,a.count);for(let u=0;u<s;u++){const f=n[u];a.setXYZ(u,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];ai.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wp);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(n){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(n),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];il.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ai.min,il.min),ai.expandByPoint(yn),yn.addVectors(ai.max,il.max),ai.expandByPoint(yn)):(ai.expandByPoint(il.min),ai.expandByPoint(il.max))}ai.getCenter(s);let u=0;for(let f=0,h=n.count;f<h;f++)yn.fromBufferAttribute(n,f),u=Math.max(u,s.distanceToSquared(yn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],_=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)yn.fromBufferAttribute(d,g),_&&(Xs.fromBufferAttribute(n,g),yn.add(Xs)),u=Math.max(u,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let k=0;k<s.count;k++)d[k]=new ot,_[k]=new ot;const g=new ot,v=new ot,p=new ot,x=new Fe,M=new Fe,b=new Fe,C=new ot,y=new ot;function S(k,w,R){g.fromBufferAttribute(s,k),v.fromBufferAttribute(s,w),p.fromBufferAttribute(s,R),x.fromBufferAttribute(f,k),M.fromBufferAttribute(f,w),b.fromBufferAttribute(f,R),v.sub(g),p.sub(g),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(V),y.copy(p).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(V),d[k].add(C),d[w].add(C),d[R].add(C),_[k].add(y),_[w].add(y),_[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:n.count}]);for(let k=0,w=I.length;k<w;++k){const R=I[k],V=R.start,et=R.count;for(let lt=V,vt=V+et;lt<vt;lt+=3)S(n.getX(lt+0),n.getX(lt+1),n.getX(lt+2))}const P=new ot,D=new ot,F=new ot,G=new ot;function O(k){F.fromBufferAttribute(u,k),G.copy(F);const w=d[k];P.copy(w),P.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(G,w);const V=D.dot(_[k])<0?-1:1;h.setXYZW(k,P.x,P.y,P.z,V)}for(let k=0,w=I.length;k<w;++k){const R=I[k],V=R.start,et=R.count;for(let lt=V,vt=V+et;lt<vt;lt+=3)O(n.getX(lt+0)),O(n.getX(lt+1)),O(n.getX(lt+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const u=new ot,f=new ot,h=new ot,d=new ot,_=new ot,g=new ot,v=new ot,p=new ot;if(n)for(let x=0,M=n.count;x<M;x+=3){const b=n.getX(x+0),C=n.getX(x+1),y=n.getX(x+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,C),h.fromBufferAttribute(a,y),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),g.fromBufferAttribute(s,y),d.add(v),_.add(v),g.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,_.x,_.y,_.z),s.setXYZ(y,g.x,g.y,g.z)}else for(let x=0,M=a.count;x<M;x+=3)u.fromBufferAttribute(a,x+0),f.fromBufferAttribute(a,x+1),h.fromBufferAttribute(a,x+2),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)yn.fromBufferAttribute(n,a),yn.normalize(),n.setXYZ(a,yn.x,yn.y,yn.z)}toNonIndexed(){function n(d,_){const g=d.array,v=d.itemSize,p=d.normalized,x=new g.constructor(_.length*v);let M=0,b=0;for(let C=0,y=_.length;C<y;C++){d.isInterleavedBufferAttribute?M=_[C]*d.data.stride+d.offset:M=_[C]*v;for(let S=0;S<v;S++)x[b++]=g[M++]}return new Wi(x,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Yr,s=this.index.array,u=this.attributes;for(const d in u){const _=u[d],g=n(_,s);a.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const _=[],g=f[d];for(let v=0,p=g.length;v<p;v++){const x=g[v],M=n(x,s);_.push(M)}a.morphAttributes[d]=_}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const g=h[d];a.addGroup(g.start,g.count,g.materialIndex)}return a}toJSON(){const n={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(n[g]=_[g]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const _ in s){const g=s[_];n.data.attributes[_]=g.toJSON(n.data)}const u={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],v=[];for(let p=0,x=g.length;p<x;p++){const M=g[p];v.push(M.toJSON(n.data))}v.length>0&&(u[_]=v,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(n.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(n.data.boundingSphere=d.toJSON()),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone());const u=n.attributes;for(const g in u){const v=u[g];this.setAttribute(g,v.clone(a))}const f=n.morphAttributes;for(const g in f){const v=[],p=f[g];for(let x=0,M=p.length;x<M;x++)v.push(p[x].clone(a));this.morphAttributes[g]=v}this.morphTargetsRelative=n.morphTargetsRelative;const h=n.groups;for(let g=0,v=h.length;g<v;g++){const p=h[g];this.addGroup(p.start,p.count,p.materialIndex)}const d=n.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=n.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const p0=new hn,Or=new lS,$u=new wp,m0=new ot,tc=new ot,ec=new ot,nc=new ot,xd=new ot,ic=new ot,g0=new ot,ac=new ot;class Yi extends si{constructor(n=new Yr,a=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(n,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,n);const d=this.morphTargetInfluences;if(f&&d){ic.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const v=d[_],p=f[_];v!==0&&(xd.fromBufferAttribute(p,n),h?ic.addScaledVector(xd,v):ic.addScaledVector(xd.sub(a),v))}a.add(ic)}return a}raycast(n,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$u.copy(s.boundingSphere),$u.applyMatrix4(f),Or.copy(n.ray).recast(n.near),!($u.containsPoint(Or.origin)===!1&&(Or.intersectSphere($u,m0)===null||Or.origin.distanceToSquared(m0)>(n.far-n.near)**2))&&(p0.copy(f).invert(),Or.copy(n.ray).applyMatrix4(p0),!(s.boundingBox!==null&&Or.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,Or)))}_computeIntersections(n,a,s){let u;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,g=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,x=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],S=h[y.materialIndex],I=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,F=P;D<F;D+=3){const G=d.getX(D),O=d.getX(D+1),k=d.getX(D+2);u=rc(this,S,n,s,g,v,p,G,O,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const I=d.getX(y),P=d.getX(y+1),D=d.getX(y+2);u=rc(this,h,n,s,g,v,p,I,P,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(_!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],S=h[y.materialIndex],I=Math.max(y.start,M.start),P=Math.min(_.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,F=P;D<F;D+=3){const G=D,O=D+1,k=D+2;u=rc(this,S,n,s,g,v,p,G,O,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),C=Math.min(_.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const I=y,P=y+1,D=y+2;u=rc(this,h,n,s,g,v,p,I,P,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function BE(o,n,a,s,u,f,h,d){let _;if(n.side===Wn?_=s.intersectTriangle(h,f,u,!0,d):_=s.intersectTriangle(u,f,h,n.side===sr,d),_===null)return null;ac.copy(d),ac.applyMatrix4(o.matrixWorld);const g=a.ray.origin.distanceTo(ac);return g<a.near||g>a.far?null:{distance:g,point:ac.clone(),object:o}}function rc(o,n,a,s,u,f,h,d,_,g){o.getVertexPosition(d,tc),o.getVertexPosition(_,ec),o.getVertexPosition(g,nc);const v=BE(o,n,a,s,tc,ec,nc,g0);if(v){const p=new ot;Ci.getBarycoord(g0,tc,ec,nc,p),u&&(v.uv=Ci.getInterpolatedAttribute(u,d,_,g,p,new Fe)),f&&(v.uv1=Ci.getInterpolatedAttribute(f,d,_,g,p,new Fe)),h&&(v.normal=Ci.getInterpolatedAttribute(h,d,_,g,p,new ot),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:_,c:g,normal:new ot,materialIndex:0};Ci.getNormal(tc,ec,nc,x.normal),v.face=x,v.barycoord=p}return v}class ro extends Yr{constructor(n=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const _=[],g=[],v=[],p=[];let x=0,M=0;b("z","y","x",-1,-1,s,a,n,h,f,0),b("z","y","x",1,-1,s,a,-n,h,f,1),b("x","z","y",1,1,n,s,a,u,h,2),b("x","z","y",1,-1,n,s,-a,u,h,3),b("x","y","z",1,-1,n,a,s,u,f,4),b("x","y","z",-1,-1,n,a,-s,u,f,5),this.setIndex(_),this.setAttribute("position",new Xr(g,3)),this.setAttribute("normal",new Xr(v,3)),this.setAttribute("uv",new Xr(p,2));function b(C,y,S,I,P,D,F,G,O,k,w){const R=D/O,V=F/k,et=D/2,lt=F/2,vt=G/2,ut=O+1,q=k+1;let at=0,j=0;const xt=new ot;for(let Mt=0;Mt<q;Mt++){const Ht=Mt*V-lt;for(let re=0;re<ut;re++){const me=re*R-et;xt[C]=me*I,xt[y]=Ht*P,xt[S]=vt,g.push(xt.x,xt.y,xt.z),xt[C]=0,xt[y]=0,xt[S]=G>0?1:-1,v.push(xt.x,xt.y,xt.z),p.push(re/O),p.push(1-Mt/k),at+=1}}for(let Mt=0;Mt<k;Mt++)for(let Ht=0;Ht<O;Ht++){const re=x+Ht+ut*Mt,me=x+Ht+ut*(Mt+1),z=x+(Ht+1)+ut*(Mt+1),ct=x+(Ht+1)+ut*Mt;_.push(re,me,ct),_.push(me,z,ct),j+=6}d.addGroup(M,j,w),M+=j,x+=at}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new ro(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function no(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=u.clone():Array.isArray(u)?n[a][s]=u.slice():n[a][s]=u}}return n}function Fn(o){const n={};for(let a=0;a<o.length;a++){const s=no(o[a]);for(const u in s)n[u]=s[u]}return n}function FE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function hS(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:De.workingColorSpace}const HE={clone:no,merge:Fn};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends vc{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=VE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=no(n.uniforms),this.uniformsGroups=FE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(n).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class dS extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new ot,_0=new Fe,v0=new Fe;class vi extends dS{constructor(n=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=dl*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(tr.x,tr.y).multiplyScalar(-n/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(tr.x,tr.y).multiplyScalar(-n/tr.z)}getViewSize(n,a){return this.getViewBounds(n,_0,v0),a.subVectors(v0,_0)}setViewOffset(n,a,s,u,f,h){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(sl*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,g=h.fullHeight;f+=h.offsetX*u/_,a-=h.offsetY*s/g,u*=h.width/_,s*=h.height/g}const d=this.filmOffset;d!==0&&(f+=n*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,n,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const ks=-90,qs=1;class XE extends si{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new vi(ks,qs,n,a);u.layers=this.layers,this.add(u);const f=new vi(ks,qs,n,a);f.layers=this.layers,this.add(f);const h=new vi(ks,qs,n,a);h.layers=this.layers,this.add(h);const d=new vi(ks,qs,n,a);d.layers=this.layers,this.add(d);const _=new vi(ks,qs,n,a);_.layers=this.layers,this.add(_);const g=new vi(ks,qs,n,a);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,_]=a;for(const g of a)this.remove(g);if(n===qi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(n===gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const g of a)this.add(g),g.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,g,v]=this.children,p=n.getRenderTarget(),x=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),b=n.xr.enabled;n.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,u),n.render(a,f),n.setRenderTarget(s,1,u),n.render(a,h),n.setRenderTarget(s,2,u),n.render(a,d),n.setRenderTarget(s,3,u),n.render(a,_),n.setRenderTarget(s,4,u),n.render(a,g),s.texture.generateMipmaps=C,n.setRenderTarget(s,5,u),n.render(a,v),n.setRenderTarget(p,x,M),n.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class pS extends Hn{constructor(n=[],a=$s,s,u,f,h,d,_,g,v){super(n,a,s,u,f,h,d,_,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class kE extends qr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},u=[s,s,s,s,s,s];this.texture=new pS(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new ro(5,5,5),f=new or({name:"CubemapFromEquirect",uniforms:no(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ar});f.uniforms.tEquirect.value=a;const h=new Yi(u,f),d=a.minFilter;return a.minFilter===nr&&(a.minFilter=wi),new XE(1,10,this).update(n,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(n,a=!0,s=!0,u=!0){const f=n.getRenderTarget();for(let h=0;h<6;h++)n.setRenderTarget(this,h),n.clear(a,s,u);n.setRenderTarget(f)}}class al extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qE={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let u=null,f=null,h=null;const d=this._targetRay,_=this._grip,g=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(g&&n.hand){h=!0;for(const C of n.hand.values()){const y=a.getJointPose(C,s),S=this._getHandJoint(g,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],x=v.position.distanceTo(p.position),M=.02,b=.005;g.inputState.pinching&&x>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!g.inputState.pinching&&x<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else _!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(u=a.getPose(n.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return d!==null&&(d.visible=u!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new al;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class YE extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Md=new ot,WE=new ot,jE=new de;class Br{constructor(n=new ot(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,u){return this.normal.set(n,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const u=Md.subVectors(s,a).cross(WE.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Md),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||jE.getNormalMatrix(n),u=this.coplanarPoint(Md).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new wp,ZE=new Fe(.5,.5),sc=new ot;class mS{constructor(n=new Br,a=new Br,s=new Br,u=new Br,f=new Br,h=new Br){this.planes=[n,a,s,u,f,h]}set(n,a,s,u,f,h){const d=this.planes;return d[0].copy(n),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=qi,s=!1){const u=this.planes,f=n.elements,h=f[0],d=f[1],_=f[2],g=f[3],v=f[4],p=f[5],x=f[6],M=f[7],b=f[8],C=f[9],y=f[10],S=f[11],I=f[12],P=f[13],D=f[14],F=f[15];if(u[0].setComponents(g-h,M-v,S-b,F-I).normalize(),u[1].setComponents(g+h,M+v,S+b,F+I).normalize(),u[2].setComponents(g+d,M+p,S+C,F+P).normalize(),u[3].setComponents(g-d,M-p,S-C,F-P).normalize(),s)u[4].setComponents(_,x,y,D).normalize(),u[5].setComponents(g-_,M-x,S-y,F-D).normalize();else if(u[4].setComponents(g-_,M-x,S-y,F-D).normalize(),a===qi)u[5].setComponents(g+_,M+x,S+y,F+D).normalize();else if(a===gc)u[5].setComponents(_,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(n){Pr.center.set(0,0,0);const a=ZE.distanceTo(n.center);return Pr.radius=.7071067811865476+a,Pr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(n){const a=this.planes,s=n.center,u=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(sc.x=u.normal.x>0?n.max.x:n.min.x,sc.y=u.normal.y>0?n.max.y:n.min.y,sc.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint(sc)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gS extends Hn{constructor(n,a,s=kr,u,f,h,d=Ui,_=Ui,g,v=fl,p=1){if(v!==fl&&v!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:n,height:a,depth:p};super(x,u,f,h,d,_,v,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Cp(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class _S extends Hn{constructor(n=null){super(),this.sourceTexture=n,this.isExternalTexture=!0}copy(n){return super.copy(n),this.sourceTexture=n.sourceTexture,this}}class Sc extends Yr{constructor(n=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:u};const f=n/2,h=a/2,d=Math.floor(s),_=Math.floor(u),g=d+1,v=_+1,p=n/d,x=a/_,M=[],b=[],C=[],y=[];for(let S=0;S<v;S++){const I=S*x-h;for(let P=0;P<g;P++){const D=P*p-f;b.push(D,-I,0),C.push(0,0,1),y.push(P/d),y.push(1-S/_)}}for(let S=0;S<_;S++)for(let I=0;I<d;I++){const P=I+g*S,D=I+g*(S+1),F=I+1+g*(S+1),G=I+1+g*S;M.push(P,D,G),M.push(D,F,G)}this.setIndex(M),this.setAttribute("position",new Xr(b,3)),this.setAttribute("normal",new Xr(C,3)),this.setAttribute("uv",new Xr(y,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Sc(n.width,n.height,n.widthSegments,n.heightSegments)}}class KE extends vc{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class QE extends vc{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}const Ed={enabled:!1,files:{},add:function(o,n){this.enabled!==!1&&(this.files[o]=n)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class JE{constructor(n,a,s){const u=this;let f=!1,h=0,d=0,_;const g=[];this.onStart=void 0,this.onLoad=n,this.onProgress=a,this.onError=s,this.abortController=new AbortController,this.itemStart=function(v){d++,f===!1&&u.onStart!==void 0&&u.onStart(v,h,d),f=!0},this.itemEnd=function(v){h++,u.onProgress!==void 0&&u.onProgress(v,h,d),h===d&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(v){u.onError!==void 0&&u.onError(v)},this.resolveURL=function(v){return _?_(v):v},this.setURLModifier=function(v){return _=v,this},this.addHandler=function(v,p){return g.push(v,p),this},this.removeHandler=function(v){const p=g.indexOf(v);return p!==-1&&g.splice(p,2),this},this.getHandler=function(v){for(let p=0,x=g.length;p<x;p+=2){const M=g[p],b=g[p+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const $E=new JE;class Up{constructor(n){this.manager=n!==void 0?n:$E,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(n,a){const s=this;return new Promise(function(u,f){s.load(n,u,a,f)})}parse(){}setCrossOrigin(n){return this.crossOrigin=n,this}setWithCredentials(n){return this.withCredentials=n,this}setPath(n){return this.path=n,this}setResourcePath(n){return this.resourcePath=n,this}setRequestHeader(n){return this.requestHeader=n,this}abort(){return this}}Up.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ys=new WeakMap;class tT extends Up{constructor(n){super(n)}load(n,a,s,u){this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const f=this,h=Ed.get(`image:${n}`);if(h!==void 0){if(h.complete===!0)f.manager.itemStart(n),setTimeout(function(){a&&a(h),f.manager.itemEnd(n)},0);else{let p=Ys.get(h);p===void 0&&(p=[],Ys.set(h,p)),p.push({onLoad:a,onError:u})}return h}const d=pl("img");function _(){v(),a&&a(this);const p=Ys.get(this)||[];for(let x=0;x<p.length;x++){const M=p[x];M.onLoad&&M.onLoad(this)}Ys.delete(this),f.manager.itemEnd(n)}function g(p){v(),u&&u(p),Ed.remove(`image:${n}`);const x=Ys.get(this)||[];for(let M=0;M<x.length;M++){const b=x[M];b.onError&&b.onError(p)}Ys.delete(this),f.manager.itemError(n),f.manager.itemEnd(n)}function v(){d.removeEventListener("load",_,!1),d.removeEventListener("error",g,!1)}return d.addEventListener("load",_,!1),d.addEventListener("error",g,!1),n.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ed.add(`image:${n}`,d),f.manager.itemStart(n),d.src=n,d}}class eT extends Up{constructor(n){super(n)}load(n,a,s,u){const f=new Hn,h=new tT(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(n,function(d){f.image=d,f.needsUpdate=!0,a!==void 0&&a(f)},s,u),f}}class nT extends dS{constructor(n=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-n,h=s+n,d=u+a,_=u-a;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=v*this.view.offsetY,_=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class iT extends vi{constructor(n=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=n}}class aT{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=performance.now();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}}const S0=new hn;class rT{constructor(n,a,s=0,u=1/0){this.ray=new lS(n,a),this.near=s,this.far=u,this.camera=null,this.layers=new Dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(n,a){this.ray.set(n,a)}setFromCamera(n,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(a.near+a.far)/(a.near-a.far)).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):console.error("THREE.Raycaster: Unsupported camera type: "+a.type)}setFromXRController(n){return S0.identity().extractRotation(n.matrixWorld),this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S0),this}intersectObject(n,a=!0,s=[]){return _p(n,this,s,a),s.sort(x0),s}intersectObjects(n,a=!0,s=[]){for(let u=0,f=n.length;u<f;u++)_p(n[u],this,s,a);return s.sort(x0),s}}function x0(o,n){return o.distance-n.distance}function _p(o,n,a,s){let u=!0;if(o.layers.test(n.layers)&&o.raycast(n,a)===!1&&(u=!1),u===!0&&s===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)_p(f[h],n,a,!0)}}function y0(o,n,a,s){const u=sT(s);switch(a){case eS:return o*n;case iS:return o*n/u.components*u.byteLength;case Tp:return o*n/u.components*u.byteLength;case aS:return o*n*2/u.components*u.byteLength;case bp:return o*n*2/u.components*u.byteLength;case nS:return o*n*3/u.components*u.byteLength;case Di:return o*n*4/u.components*u.byteLength;case Ap:return o*n*4/u.components*u.byteLength;case cc:case fc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case hc:case dc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case kd:case Yd:return Math.max(o,16)*Math.max(n,8)/4;case Xd:case qd:return Math.max(o,8)*Math.max(n,8)/2;case Wd:case jd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case Zd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Kd:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case Jd:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case tp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case ep:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case np:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case ip:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case ap:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case rp:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case sp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case op:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case lp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case up:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case cp:case fp:case hp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case dp:case pp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case mp:case gp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function sT(o){switch(o){case Sa:case Q0:return{byteLength:1,components:1};case ul:case J0:case gl:return{byteLength:2,components:1};case Mp:case Ep:return{byteLength:2,components:4};case kr:case yp:case _a:return{byteLength:4,components:1};case $0:case tS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);function vS(){let o=null,n=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(u),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function oT(o){const n=new WeakMap;function a(d,_){const g=d.array,v=d.usage,p=g.byteLength,x=o.createBuffer();o.bindBuffer(_,x),o.bufferData(_,g,v),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,_,g){const v=_.array,p=_.updateRanges;if(o.bindBuffer(g,d),p.length===0)o.bufferSubData(g,0,v);else{p.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<p.length;M++){const b=p[x],C=p[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,p[x]=C)}p.length=x+1;for(let M=0,b=p.length;M<b;M++){const C=p[M];o.bufferSubData(g,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=n.get(d);_&&(o.deleteBuffer(_.buffer),n.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=n.get(d);(!v||v.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=n.get(d);if(g===void 0)n.set(d,a(d,_));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,_),g.version=d.version}}return{get:u,remove:f,update:h}}var lT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BT="gl_FragColor = linearToOutputTexel( gl_FragColor );",FT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$T=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ob=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_b=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:lT,alphahash_pars_fragment:uT,alphamap_fragment:cT,alphamap_pars_fragment:fT,alphatest_fragment:hT,alphatest_pars_fragment:dT,aomap_fragment:pT,aomap_pars_fragment:mT,batching_pars_vertex:gT,batching_vertex:_T,begin_vertex:vT,beginnormal_vertex:ST,bsdfs:xT,iridescence_fragment:yT,bumpmap_pars_fragment:MT,clipping_planes_fragment:ET,clipping_planes_pars_fragment:TT,clipping_planes_pars_vertex:bT,clipping_planes_vertex:AT,color_fragment:RT,color_pars_fragment:CT,color_pars_vertex:wT,color_vertex:DT,common:UT,cube_uv_reflection_fragment:NT,defaultnormal_vertex:LT,displacementmap_pars_vertex:OT,displacementmap_vertex:PT,emissivemap_fragment:zT,emissivemap_pars_fragment:IT,colorspace_fragment:BT,colorspace_pars_fragment:FT,envmap_fragment:HT,envmap_common_pars_fragment:GT,envmap_pars_fragment:VT,envmap_pars_vertex:XT,envmap_physical_pars_fragment:tb,envmap_vertex:kT,fog_vertex:qT,fog_pars_vertex:YT,fog_fragment:WT,fog_pars_fragment:jT,gradientmap_pars_fragment:ZT,lightmap_pars_fragment:KT,lights_lambert_fragment:QT,lights_lambert_pars_fragment:JT,lights_pars_begin:$T,lights_toon_fragment:eb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:ab,lights_physical_fragment:rb,lights_physical_pars_fragment:sb,lights_fragment_begin:ob,lights_fragment_maps:lb,lights_fragment_end:ub,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:hb,logdepthbuf_vertex:db,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:_b,metalnessmap_fragment:vb,metalnessmap_pars_fragment:Sb,morphinstance_vertex:xb,morphcolor_vertex:yb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Eb,morphtarget_vertex:Tb,normal_fragment_begin:bb,normal_fragment_maps:Ab,normal_pars_fragment:Rb,normal_pars_vertex:Cb,normal_vertex:wb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:Ob,opaque_fragment:Pb,packing:zb,premultiplied_alpha_fragment:Ib,project_vertex:Bb,dithering_fragment:Fb,dithering_pars_fragment:Hb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:Xb,shadowmap_pars_vertex:kb,shadowmap_vertex:qb,shadowmask_pars_fragment:Yb,skinbase_vertex:Wb,skinning_pars_vertex:jb,skinning_vertex:Zb,skinnormal_vertex:Kb,specularmap_fragment:Qb,specularmap_pars_fragment:Jb,tonemapping_fragment:$b,tonemapping_pars_fragment:tA,transmission_fragment:eA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:aA,uv_vertex:rA,worldpos_vertex:sA,background_vert:oA,background_frag:lA,backgroundCube_vert:uA,backgroundCube_frag:cA,cube_vert:fA,cube_frag:hA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:gA,equirect_vert:_A,equirect_frag:vA,linedashed_vert:SA,linedashed_frag:xA,meshbasic_vert:yA,meshbasic_frag:MA,meshlambert_vert:EA,meshlambert_frag:TA,meshmatcap_vert:bA,meshmatcap_frag:AA,meshnormal_vert:RA,meshnormal_frag:CA,meshphong_vert:wA,meshphong_frag:DA,meshphysical_vert:UA,meshphysical_frag:NA,meshtoon_vert:LA,meshtoon_frag:OA,points_vert:PA,points_frag:zA,shadow_vert:IA,shadow_frag:BA,sprite_vert:FA,sprite_frag:HA},It={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ki={basic:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Xe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Fn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Fn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Xe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Fn([It.points,It.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Fn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Fn([It.common,It.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Fn([It.sprite,It.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Fn([It.common,It.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Fn([It.lights,It.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ki.physical={uniforms:Fn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const oc={r:0,b:0,g:0},zr=new xa,GA=new hn;function VA(o,n,a,s,u,f,h){const d=new Xe(0);let _=f===!0?0:1,g,v,p=null,x=0,M=null;function b(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?a:n).get(D)),D}function C(P){let D=!1;const F=b(P);F===null?S(d,_):F&&F.isColor&&(S(F,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,D){const F=b(D);F&&(F.isCubeTexture||F.mapping===_c)?(v===void 0&&(v=new Yi(new ro(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:no(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),zr.copy(D.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(GA.makeRotationFromEuler(zr)),v.material.toneMapped=De.getTransfer(F.colorSpace)!==Ve,(p!==F||x!==F.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,p=F,x=F.version,M=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new Yi(new Sc(2,2),new or({name:"BackgroundMaterial",uniforms:no(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=De.getTransfer(F.colorSpace)!==Ve,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(p!==F||x!==F.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=F,x=F.version,M=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function S(P,D){P.getRGB(oc,hS(o)),s.buffers.color.setClear(oc.r,oc.g,oc.b,D,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),_=D,S(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(P){_=P,S(d,_)},render:C,addToRenderList:y,dispose:I}}function XA(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=x(null);let f=u,h=!1;function d(R,V,et,lt,vt){let ut=!1;const q=p(lt,et,V);f!==q&&(f=q,g(f.object)),ut=M(R,lt,et,vt),ut&&b(R,lt,et,vt),vt!==null&&n.update(vt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(R,V,et,lt),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(vt).buffer))}function _(){return o.createVertexArray()}function g(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function p(R,V,et){const lt=et.wireframe===!0;let vt=s[R.id];vt===void 0&&(vt={},s[R.id]=vt);let ut=vt[V.id];ut===void 0&&(ut={},vt[V.id]=ut);let q=ut[lt];return q===void 0&&(q=x(_()),ut[lt]=q),q}function x(R){const V=[],et=[],lt=[];for(let vt=0;vt<a;vt++)V[vt]=0,et[vt]=0,lt[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:et,attributeDivisors:lt,object:R,attributes:{},index:null}}function M(R,V,et,lt){const vt=f.attributes,ut=V.attributes;let q=0;const at=et.getAttributes();for(const j in at)if(at[j].location>=0){const Mt=vt[j];let Ht=ut[j];if(Ht===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Ht=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Ht=R.instanceColor)),Mt===void 0||Mt.attribute!==Ht||Ht&&Mt.data!==Ht.data)return!0;q++}return f.attributesNum!==q||f.index!==lt}function b(R,V,et,lt){const vt={},ut=V.attributes;let q=0;const at=et.getAttributes();for(const j in at)if(at[j].location>=0){let Mt=ut[j];Mt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor));const Ht={};Ht.attribute=Mt,Mt&&Mt.data&&(Ht.data=Mt.data),vt[j]=Ht,q++}f.attributes=vt,f.attributesNum=q,f.index=lt}function C(){const R=f.newAttributes;for(let V=0,et=R.length;V<et;V++)R[V]=0}function y(R){S(R,0)}function S(R,V){const et=f.newAttributes,lt=f.enabledAttributes,vt=f.attributeDivisors;et[R]=1,lt[R]===0&&(o.enableVertexAttribArray(R),lt[R]=1),vt[R]!==V&&(o.vertexAttribDivisor(R,V),vt[R]=V)}function I(){const R=f.newAttributes,V=f.enabledAttributes;for(let et=0,lt=V.length;et<lt;et++)V[et]!==R[et]&&(o.disableVertexAttribArray(et),V[et]=0)}function P(R,V,et,lt,vt,ut,q){q===!0?o.vertexAttribIPointer(R,V,et,vt,ut):o.vertexAttribPointer(R,V,et,lt,vt,ut)}function D(R,V,et,lt){C();const vt=lt.attributes,ut=et.getAttributes(),q=V.defaultAttributeValues;for(const at in ut){const j=ut[at];if(j.location>=0){let xt=vt[at];if(xt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),xt!==void 0){const Mt=xt.normalized,Ht=xt.itemSize,re=n.get(xt);if(re===void 0)continue;const me=re.buffer,z=re.type,ct=re.bytesPerElement,Q=z===o.INT||z===o.UNSIGNED_INT||xt.gpuType===yp;if(xt.isInterleavedBufferAttribute){const nt=xt.data,Et=nt.stride,ft=xt.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<j.locationSize;pt++)S(j.location+pt,nt.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<j.locationSize;pt++)y(j.location+pt);o.bindBuffer(o.ARRAY_BUFFER,me);for(let pt=0;pt<j.locationSize;pt++)P(j.location+pt,Ht/j.locationSize,z,Mt,Et*ct,(ft+Ht/j.locationSize*pt)*ct,Q)}else{if(xt.isInstancedBufferAttribute){for(let nt=0;nt<j.locationSize;nt++)S(j.location+nt,xt.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let nt=0;nt<j.locationSize;nt++)y(j.location+nt);o.bindBuffer(o.ARRAY_BUFFER,me);for(let nt=0;nt<j.locationSize;nt++)P(j.location+nt,Ht/j.locationSize,z,Mt,Ht*ct,Ht/j.locationSize*nt*ct,Q)}}else if(q!==void 0){const Mt=q[at];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(j.location,Mt);break;case 3:o.vertexAttrib3fv(j.location,Mt);break;case 4:o.vertexAttrib4fv(j.location,Mt);break;default:o.vertexAttrib1fv(j.location,Mt)}}}}I()}function F(){k();for(const R in s){const V=s[R];for(const et in V){const lt=V[et];for(const vt in lt)v(lt[vt].object),delete lt[vt];delete V[et]}delete s[R]}}function G(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const et in V){const lt=V[et];for(const vt in lt)v(lt[vt].object),delete lt[vt];delete V[et]}delete s[R.id]}function O(R){for(const V in s){const et=s[V];if(et[R.id]===void 0)continue;const lt=et[R.id];for(const vt in lt)v(lt[vt].object),delete lt[vt];delete et[R.id]}}function k(){w(),h=!0,f!==u&&(f=u,g(f.object))}function w(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:k,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function kA(o,n,a){let s;function u(g){s=g}function f(g,v){o.drawArrays(s,g,v),a.update(v,s,1)}function h(g,v,p){p!==0&&(o.drawArraysInstanced(s,g,v,p),a.update(v,s,p))}function d(g,v,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,p);let M=0;for(let b=0;b<p;b++)M+=v[b];a.update(M,s,1)}function _(g,v,p,x){if(p===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)h(g[b],v[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,v,0,x,0,p);let b=0;for(let C=0;C<p;C++)b+=v[C]*x[C];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function qA(o,n,a,s){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(O){return!(O!==Di&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const k=O===gl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==Sa&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==_a&&!k)}function _(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=a.precision!==void 0?a.precision:"highp";const v=_(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const p=a.logarithmicDepthBuffer===!0,x=a.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:F,maxSamples:G}}function YA(o){const n=this;let a=null,s=0,u=!1,f=!1;const h=new Br,d=new de,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,x){const M=p.length!==0||x||s!==0||u;return u=x,s=p.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,x){a=v(p,x,0)},this.setState=function(p,x,M){const b=p.clippingPlanes,C=p.clipIntersection,y=p.clipShadows,S=o.get(p);if(!u||b===null||b.length===0||f&&!y)f?v(null):g();else{const I=f?0:s,P=I*4;let D=S.clippingState||null;_.value=D,D=v(b,x,P,M);for(let F=0;F!==P;++F)D[F]=a[F];S.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function g(){_.value!==a&&(_.value=a,_.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function v(p,x,M,b){const C=p!==null?p.length:0;let y=null;if(C!==0){if(y=_.value,b!==!0||y===null){const S=M+C*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,D=M;P!==C;++P,D+=4)h.copy(p[P]).applyMatrix4(I,d),h.normal.toArray(y,D),y[D+3]=h.constant}_.value=y,_.needsUpdate=!0}return n.numPlanes=C,n.numIntersection=0,y}}function WA(o){let n=new WeakMap;function a(h,d){return d===Fd?h.mapping=$s:d===Hd&&(h.mapping=to),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fd||d===Hd)if(n.has(h)){const _=n.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new kE(_.height);return g.fromEquirectangularTexture(o,h),n.set(h,g),h.addEventListener("dispose",u),a(g.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Zs=4,M0=[.125,.215,.35,.446,.526,.582],Gr=20,Td=new nT,E0=new Xe;let bd=null,Ad=0,Rd=0,Cd=!1;const Fr=(1+Math.sqrt(5))/2,Ws=1/Fr,T0=[new ot(-Fr,Ws,0),new ot(Fr,Ws,0),new ot(-Ws,0,Fr),new ot(Ws,0,Fr),new ot(0,Fr,-Ws),new ot(0,Fr,Ws),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],jA=new ot;class b0{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,u=100,f={}){const{size:h=256,position:d=jA}=f;bd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(n,s,u,_,d),a>0&&this._blur(_,0,0,a),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(bd,Ad,Rd),this._renderer.xr.enabled=Cd,n.scissorTest=!1,lc(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===$s||n.mapping===to?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),bd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:gl,format:Di,colorSpace:eo,depthBuffer:!1},u=A0(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZA(f)),this._blurMaterial=KA(f,n,a)}return u}_compileMaterial(n){const a=new Yi(this._lodPlanes[0],n);this._renderer.compile(a,Td)}_sceneToCubeUV(n,a,s,u,f){const _=new vi(90,1,a,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,x=p.autoClear,M=p.toneMapping;p.getClearColor(E0),p.toneMapping=rr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(u),p.clearDepth(),p.setRenderTarget(null));const C=new ll({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),y=new Yi(new ro,C);let S=!1;const I=n.background;I?I.isColor&&(C.color.copy(I),n.background=null,S=!0):(C.color.copy(E0),S=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(_.up.set(0,g[P],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[P],f.y,f.z)):D===1?(_.up.set(0,0,g[P]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[P],f.z)):(_.up.set(0,g[P],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[P]));const F=this._cubeSize;lc(u,D*F,P>2?F:0,F,F),p.setRenderTarget(u),S&&p.render(y,_),p.render(n,_)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=x,n.background=I}_textureToCubeUV(n,a){const s=this._renderer,u=n.mapping===$s||n.mapping===to;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new Yi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=n;const _=this._cubeSize;lc(a,0,0,3*_,2*_),s.setRenderTarget(a),s.render(h,Td)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=T0[(u-f-1)%T0.length];this._blur(n,f-1,f,h,d)}a.autoClear=s}_blur(n,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(n,h,a,s,u,"latitudinal",f),this._halfBlur(h,n,s,s,u,"longitudinal",f)}_halfBlur(n,a,s,u,f,h,d){const _=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new Yi(this._lodPlanes[u],g),x=g.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Gr-1),C=f/b,y=isFinite(f)?1+Math.floor(v*C):Gr;y>Gr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const S=[];let I=0;for(let O=0;O<Gr;++O){const k=O/C,w=Math.exp(-k*k/2);S.push(w),O===0?I+=w:O<y&&(I+=2*w)}for(let O=0;O<S.length;O++)S[O]=S[O]/I;x.envMap.value=n.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=b,x.mipInt.value=P-s;const D=this._sizeLods[u],F=3*D*(u>P-Zs?u-P+Zs:0),G=4*(this._cubeSize-D);lc(a,F,G,3*D,2*D),_.setRenderTarget(a),_.render(p,Td)}}function ZA(o){const n=[],a=[],s=[];let u=o;const f=o-Zs+1+M0.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let _=1/d;h>o-Zs?_=M0[h-o+Zs-1]:h===0&&(_=0),s.push(_);const g=1/(d-2),v=-g,p=1+g,x=[v,v,p,v,p,p,v,v,p,p,v,p],M=6,b=6,C=3,y=2,S=1,I=new Float32Array(C*b*M),P=new Float32Array(y*b*M),D=new Float32Array(S*b*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,k=G>2?0:-1,w=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];I.set(w,C*b*G),P.set(x,y*b*G);const R=[G,G,G,G,G,G];D.set(R,S*b*G)}const F=new Yr;F.setAttribute("position",new Wi(I,C)),F.setAttribute("uv",new Wi(P,y)),F.setAttribute("faceIndex",new Wi(D,S)),n.push(F),u>Zs&&u--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function A0(o,n,a){const s=new qr(o,n,a);return s.texture.mapping=_c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lc(o,n,a,s,u){o.viewport.set(n,a,s,u),o.scissor.set(n,a,s,u)}function KA(o,n,a){const s=new Float32Array(Gr),u=new ot(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function R0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function C0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QA(o){let n=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const _=d.mapping,g=_===Fd||_===Hd,v=_===$s||_===to;if(g||v){let p=n.get(d);const x=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return a===null&&(a=new b0(o)),p=g?a.fromEquirectangular(d,p):a.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new b0(o)),p=g?a.fromEquirectangular(d):a.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function u(d){let _=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&_++;return _===g}function f(d){const _=d.target;_.removeEventListener("dispose",f);const g=n.get(_);g!==void 0&&(n.delete(_),g.dispose())}function h(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function JA(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return n[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&ml("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function $A(o,n,a,s){const u={},f=new WeakMap;function h(p){const x=p.target;x.index!==null&&n.remove(x.index);for(const b in x.attributes)n.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete u[x.id];const M=f.get(x);M&&(n.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,a.memory.geometries--}function d(p,x){return u[x.id]===!0||(x.addEventListener("dispose",h),u[x.id]=!0,a.memory.geometries++),x}function _(p){const x=p.attributes;for(const M in x)n.update(x[M],o.ARRAY_BUFFER)}function g(p){const x=[],M=p.index,b=p.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let P=0,D=I.length;P<D;P+=3){const F=I[P+0],G=I[P+1],O=I[P+2];x.push(F,G,G,O,O,F)}}else if(b!==void 0){const I=b.array;C=b.version;for(let P=0,D=I.length/3-1;P<D;P+=3){const F=P+0,G=P+1,O=P+2;x.push(F,G,G,O,O,F)}}else return;const y=new(sS(x)?fS:cS)(x,1);y.version=C;const S=f.get(p);S&&n.remove(S),f.set(p,y)}function v(p){const x=f.get(p);if(x){const M=p.index;M!==null&&x.version<M.version&&g(p)}else g(p);return f.get(p)}return{get:d,update:_,getWireframeAttribute:v}}function t1(o,n,a){let s;function u(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function _(x,M){o.drawElements(s,M,f,x*h),a.update(M,s,1)}function g(x,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,x*h,b),a.update(M,s,b))}function v(x,M,b){if(b===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,x,0,b);let y=0;for(let S=0;S<b;S++)y+=M[S];a.update(y,s,1)}function p(x,M,b,C){if(b===0)return;const y=n.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)g(x[S]/h,M[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,x,0,C,0,b);let S=0;for(let I=0;I<b;I++)S+=M[I]*C[I];a.update(S,s,1)}}this.setMode=u,this.setIndex=d,this.render=_,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function e1(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:u,update:s}}function n1(o,n,a){const s=new WeakMap,u=new rn;function f(h,d,_){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==p){let R=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let F=d.attributes.position.count*D,G=1;F>n.maxTextureSize&&(G=Math.ceil(F/n.maxTextureSize),F=n.maxTextureSize);const O=new Float32Array(F*G*4*p),k=new oS(O,F,G,p);k.type=_a,k.needsUpdate=!0;const w=D*4;for(let V=0;V<p;V++){const et=S[V],lt=I[V],vt=P[V],ut=F*G*4*V;for(let q=0;q<et.count;q++){const at=q*w;b===!0&&(u.fromBufferAttribute(et,q),O[ut+at+0]=u.x,O[ut+at+1]=u.y,O[ut+at+2]=u.z,O[ut+at+3]=0),C===!0&&(u.fromBufferAttribute(lt,q),O[ut+at+4]=u.x,O[ut+at+5]=u.y,O[ut+at+6]=u.z,O[ut+at+7]=0),y===!0&&(u.fromBufferAttribute(vt,q),O[ut+at+8]=u.x,O[ut+at+9]=u.y,O[ut+at+10]=u.z,O[ut+at+11]=vt.itemSize===4?u.w:1)}}x={count:p,texture:k,size:new Fe(F,G)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let y=0;y<g.length;y++)b+=g[y];const C=d.morphTargetsRelative?1:1-b;_.getUniforms().setValue(o,"morphTargetBaseInfluence",C),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",x.texture,a),_.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function i1(o,n,a,s){let u=new WeakMap;function f(_){const g=s.render.frame,v=_.geometry,p=n.get(_,v);if(u.get(p)!==g&&(n.update(p),u.set(p,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),u.get(_)!==g&&(a.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&a.update(_.instanceColor,o.ARRAY_BUFFER),u.set(_,g))),_.isSkinnedMesh){const x=_.skeleton;u.get(x)!==g&&(x.update(),u.set(x,g))}return p}function h(){u=new WeakMap}function d(_){const g=_.target;g.removeEventListener("dispose",d),a.remove(g.instanceMatrix),g.instanceColor!==null&&a.remove(g.instanceColor)}return{update:f,dispose:h}}const SS=new Hn,w0=new gS(1,1),xS=new oS,yS=new RE,MS=new pS,D0=[],U0=[],N0=new Float32Array(16),L0=new Float32Array(9),O0=new Float32Array(4);function so(o,n,a){const s=o[0];if(s<=0||s>0)return o;const u=n*a;let f=D0[u];if(f===void 0&&(f=new Float32Array(u),D0[u]=f),n!==0){s.toArray(f,0);for(let h=1,d=0;h!==n;++h)d+=a,o[h].toArray(f,d)}return f}function gn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function _n(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function xc(o,n){let a=U0[n];a===void 0&&(a=new Int32Array(n),U0[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function a1(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function r1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2fv(this.addr,n),_n(a,n)}}function s1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(gn(a,n))return;o.uniform3fv(this.addr,n),_n(a,n)}}function o1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4fv(this.addr,n),_n(a,n)}}function l1(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;O0.set(s),o.uniformMatrix2fv(this.addr,!1,O0),_n(a,s)}}function u1(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;L0.set(s),o.uniformMatrix3fv(this.addr,!1,L0),_n(a,s)}}function c1(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;N0.set(s),o.uniformMatrix4fv(this.addr,!1,N0),_n(a,s)}}function f1(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function h1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2iv(this.addr,n),_n(a,n)}}function d1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3iv(this.addr,n),_n(a,n)}}function p1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4iv(this.addr,n),_n(a,n)}}function m1(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function g1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2uiv(this.addr,n),_n(a,n)}}function _1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3uiv(this.addr,n),_n(a,n)}}function v1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4uiv(this.addr,n),_n(a,n)}}function S1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(w0.compareFunction=rS,f=w0):f=SS,a.setTexture2D(n||f,u)}function x1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(n||yS,u)}function y1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(n||MS,u)}function M1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(n||xS,u)}function E1(o){switch(o){case 5126:return a1;case 35664:return r1;case 35665:return s1;case 35666:return o1;case 35674:return l1;case 35675:return u1;case 35676:return c1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}function T1(o,n){o.uniform1fv(this.addr,n)}function b1(o,n){const a=so(n,this.size,2);o.uniform2fv(this.addr,a)}function A1(o,n){const a=so(n,this.size,3);o.uniform3fv(this.addr,a)}function R1(o,n){const a=so(n,this.size,4);o.uniform4fv(this.addr,a)}function C1(o,n){const a=so(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function w1(o,n){const a=so(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function D1(o,n){const a=so(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function U1(o,n){o.uniform1iv(this.addr,n)}function N1(o,n){o.uniform2iv(this.addr,n)}function L1(o,n){o.uniform3iv(this.addr,n)}function O1(o,n){o.uniform4iv(this.addr,n)}function P1(o,n){o.uniform1uiv(this.addr,n)}function z1(o,n){o.uniform2uiv(this.addr,n)}function I1(o,n){o.uniform3uiv(this.addr,n)}function B1(o,n){o.uniform4uiv(this.addr,n)}function F1(o,n,a){const s=this.cache,u=n.length,f=xc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture2D(n[h]||SS,f[h])}function H1(o,n,a){const s=this.cache,u=n.length,f=xc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture3D(n[h]||yS,f[h])}function G1(o,n,a){const s=this.cache,u=n.length,f=xc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTextureCube(n[h]||MS,f[h])}function V1(o,n,a){const s=this.cache,u=n.length,f=xc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(n[h]||xS,f[h])}function X1(o){switch(o){case 5126:return T1;case 35664:return b1;case 35665:return A1;case 35666:return R1;case 35674:return C1;case 35675:return w1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return N1;case 35668:case 35672:return L1;case 35669:case 35673:return O1;case 5125:return P1;case 36294:return z1;case 36295:return I1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return V1}}class k1{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=E1(a.type)}}class q1{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=X1(a.type)}}class Y1{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(n,a[d.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function P0(o,n){o.seq.push(n),o.map[n.id]=n}function W1(o,n,a){const s=o.name,u=s.length;for(wd.lastIndex=0;;){const f=wd.exec(s),h=wd.lastIndex;let d=f[1];const _=f[2]==="]",g=f[3];if(_&&(d=d|0),g===void 0||g==="["&&h+2===u){P0(a,g===void 0?new k1(d,o,n):new q1(d,o,n));break}else{let p=a.map[d];p===void 0&&(p=new Y1(d),P0(a,p)),a=p}}}class pc{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=n.getActiveUniform(a,u),h=n.getUniformLocation(a,f.name);W1(f,h,this)}}setValue(n,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(n,s,u)}setOptional(n,a,s){const u=a[s];u!==void 0&&this.setValue(n,s,u)}static upload(n,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],_=s[d.id];_.needsUpdate!==!1&&d.setValue(n,_.value,u)}}static seqWithValue(n,a){const s=[];for(let u=0,f=n.length;u!==f;++u){const h=n[u];h.id in a&&s.push(h)}return s}}function z0(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const j1=37297;let Z1=0;function K1(o,n){const a=o.split(`
`),s=[],u=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===n?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const I0=new de;function Q1(o){De._getMatrix(I0,De.workingColorSpace,o);const n=`mat3( ${I0.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case mc:return[n,"LinearTransferOETF"];case Ve:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function B0(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),f=(o.getShaderInfoLog(n)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return a.toUpperCase()+`

`+f+`

`+K1(o.getShaderSource(n),d)}else return f}function J1(o,n){const a=Q1(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function $1(o,n){let a;switch(n){case FM:a="Linear";break;case HM:a="Reinhard";break;case GM:a="Cineon";break;case VM:a="ACESFilmic";break;case kM:a="AgX";break;case qM:a="Neutral";break;case XM:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const uc=new ot;function tR(){De.getLuminanceCoefficients(uc);const o=uc.x.toFixed(4),n=uc.y.toFixed(4),a=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function nR(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function iR(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(n,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(n,h),locationSize:d}}return a}function rl(o){return o!==""}function F0(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function H0(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(o){return o.replace(aR,sR)}const rR=new Map;function sR(o,n){let a=pe[n];if(a===void 0){const s=rR.get(n);if(s!==void 0)a=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return vp(a)}const oR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(o){return o.replace(oR,lR)}function lR(o,n,a,s){let u="";for(let f=parseInt(n);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function V0(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function uR(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===j0?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===vM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ma&&(n="SHADOWMAP_TYPE_VSM"),n}function cR(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case $s:case to:n="ENVMAP_TYPE_CUBE";break;case _c:n="ENVMAP_TYPE_CUBE_UV";break}return n}function fR(o){let n="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===to&&(n="ENVMAP_MODE_REFRACTION"),n}function hR(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Z0:n="ENVMAP_BLENDING_MULTIPLY";break;case IM:n="ENVMAP_BLENDING_MIX";break;case BM:n="ENVMAP_BLENDING_ADD";break}return n}function dR(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function pR(o,n,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const _=uR(a),g=cR(a),v=fR(a),p=hR(a),x=dR(a),M=eR(a),b=nR(f),C=u.createProgram();let y,S,I=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(rl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(rl).join(`
`),S.length>0&&(S+=`
`)):(y=[V0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),S=[V0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+g:"",a.envMap?"#define "+v:"",a.envMap?"#define "+p:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==rr?"#define TONE_MAPPING":"",a.toneMapping!==rr?pe.tonemapping_pars_fragment:"",a.toneMapping!==rr?$1("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,J1("linearToOutputTexel",a.outputColorSpace),tR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(rl).join(`
`)),h=vp(h),h=F0(h,a),h=H0(h,a),d=vp(d),d=F0(d,a),d=H0(d,a),h=G0(h),d=G0(d),a.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",a.glslVersion===t0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===t0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=I+y+h,D=I+S+d,F=z0(u,u.VERTEX_SHADER,P),G=z0(u,u.FRAGMENT_SHADER,D);u.attachShader(C,F),u.attachShader(C,G),a.index0AttributeName!==void 0?u.bindAttribLocation(C,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(C,0,"position"),u.linkProgram(C);function O(V){if(o.debug.checkShaderErrors){const et=u.getProgramInfoLog(C)||"",lt=u.getShaderInfoLog(F)||"",vt=u.getShaderInfoLog(G)||"",ut=et.trim(),q=lt.trim(),at=vt.trim();let j=!0,xt=!0;if(u.getProgramParameter(C,u.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,C,F,G);else{const Mt=B0(u,F,"vertex"),Ht=B0(u,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(C,u.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+Mt+`
`+Ht)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(q===""||at==="")&&(xt=!1);xt&&(V.diagnostics={runnable:j,programLog:ut,vertexShader:{log:q,prefix:y},fragmentShader:{log:at,prefix:S}})}u.deleteShader(F),u.deleteShader(G),k=new pc(u,C),w=iR(u,C)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let R=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(C,j1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(C),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=Z1++,this.cacheKey=n,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=G,this}let mR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(n);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new _R(n),a.set(n,s)),s}}class _R{constructor(n){this.id=mR++,this.code=n,this.usedTimes=0}}function vR(o,n,a,s,u,f,h){const d=new Dp,_=new gR,g=new Set,v=[],p=u.logarithmicDepthBuffer,x=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return g.add(w),w===0?"uv":`uv${w}`}function y(w,R,V,et,lt){const vt=et.fog,ut=lt.geometry,q=w.isMeshStandardMaterial?et.environment:null,at=(w.isMeshStandardMaterial?a:n).get(w.envMap||q),j=at&&at.mapping===_c?at.image.height:null,xt=b[w.type];w.precision!==null&&(M=u.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Mt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ht=Mt!==void 0?Mt.length:0;let re=0;ut.morphAttributes.position!==void 0&&(re=1),ut.morphAttributes.normal!==void 0&&(re=2),ut.morphAttributes.color!==void 0&&(re=3);let me,z,ct,Q;if(xt){const ye=ki[xt];me=ye.vertexShader,z=ye.fragmentShader}else me=w.vertexShader,z=w.fragmentShader,_.update(w),ct=_.getVertexShaderID(w),Q=_.getFragmentShaderID(w);const nt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),ft=lt.isInstancedMesh===!0,pt=lt.isBatchedMesh===!0,_t=!!w.map,Lt=!!w.matcap,L=!!at,Ae=!!w.aoMap,$t=!!w.lightMap,Gt=!!w.bumpMap,wt=!!w.normalMap,Xt=!!w.displacementMap,Ft=!!w.emissiveMap,oe=!!w.metalnessMap,ke=!!w.roughnessMap,Ye=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,tt=w.iridescence>0,mt=w.sheen>0,yt=w.transmission>0,ht=Ye&&!!w.anisotropyMap,qt=U&&!!w.clearcoatMap,Ct=U&&!!w.clearcoatNormalMap,Zt=U&&!!w.clearcoatRoughnessMap,Qt=tt&&!!w.iridescenceMap,At=tt&&!!w.iridescenceThicknessMap,Ot=mt&&!!w.sheenColorMap,ae=mt&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Pt=!!w.specularColorMap,ce=!!w.specularIntensityMap,H=yt&&!!w.transmissionMap,Rt=yt&&!!w.thicknessMap,Ut=!!w.gradientMap,kt=!!w.alphaMap,Tt=w.alphaTest>0,St=!!w.alphaHash,jt=!!w.extensions;let ue=rr;w.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const He={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:me,fragmentShader:z,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:pt,batchingColor:pt&&lt._colorsTexture!==null,instancing:ft,instancingColor:ft&&lt.instanceColor!==null,instancingMorph:ft&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:eo,alphaToCoverage:!!w.alphaToCoverage,map:_t,matcap:Lt,envMap:L,envMapMode:L&&at.mapping,envMapCubeUVHeight:j,aoMap:Ae,lightMap:$t,bumpMap:Gt,normalMap:wt,displacementMap:x&&Xt,emissiveMap:Ft,normalMapObjectSpace:wt&&w.normalMapType===KM,normalMapTangentSpace:wt&&w.normalMapType===ZM,metalnessMap:oe,roughnessMap:ke,anisotropy:Ye,anisotropyMap:ht,clearcoat:U,clearcoatMap:qt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:T,iridescence:tt,iridescenceMap:Qt,iridescenceThicknessMap:At,sheen:mt,sheenColorMap:Ot,sheenRoughnessMap:ae,specularMap:Kt,specularColorMap:Pt,specularIntensityMap:ce,transmission:yt,transmissionMap:H,thicknessMap:Rt,gradientMap:Ut,opaque:w.transparent===!1&&w.blending===Ks&&w.alphaToCoverage===!1,alphaMap:kt,alphaTest:Tt,alphaHash:St,combine:w.combine,mapUv:_t&&C(w.map.channel),aoMapUv:Ae&&C(w.aoMap.channel),lightMapUv:$t&&C(w.lightMap.channel),bumpMapUv:Gt&&C(w.bumpMap.channel),normalMapUv:wt&&C(w.normalMap.channel),displacementMapUv:Xt&&C(w.displacementMap.channel),emissiveMapUv:Ft&&C(w.emissiveMap.channel),metalnessMapUv:oe&&C(w.metalnessMap.channel),roughnessMapUv:ke&&C(w.roughnessMap.channel),anisotropyMapUv:ht&&C(w.anisotropyMap.channel),clearcoatMapUv:qt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:ae&&C(w.sheenRoughnessMap.channel),specularMapUv:Kt&&C(w.specularMap.channel),specularColorMapUv:Pt&&C(w.specularColorMap.channel),specularIntensityMapUv:ce&&C(w.specularIntensityMap.channel),transmissionMapUv:H&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:kt&&C(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(wt||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ut.attributes.uv&&(_t||kt),fog:!!vt,useFog:w.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Et,skinning:lt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:_t&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ga,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:jt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&w.extensions.multiDraw===!0||pt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return He.vertexUv1s=g.has(1),He.vertexUv2s=g.has(2),He.vertexUv3s=g.has(3),g.clear(),He}function S(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(R,w),P(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function I(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function P(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=b[w.type];let V;if(R){const et=ki[R];V=HE.clone(et.uniforms)}else V=w.uniforms;return V}function F(w,R){let V;for(let et=0,lt=v.length;et<lt;et++){const vt=v[et];if(vt.cacheKey===R){V=vt,++V.usedTimes;break}}return V===void 0&&(V=new pR(o,R,w,f),v.push(V)),V}function G(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function O(w){_.remove(w)}function k(){_.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:D,acquireProgram:F,releaseProgram:G,releaseShaderCache:O,programs:v,dispose:k}}function SR(){let o=new WeakMap;function n(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:u,dispose:f}}function xR(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function X0(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function k0(){const o=[];let n=0;const a=[],s=[],u=[];function f(){n=0,a.length=0,s.length=0,u.length=0}function h(p,x,M,b,C,y){let S=o[n];return S===void 0?(S={id:p.id,object:p,geometry:x,material:M,groupOrder:b,renderOrder:p.renderOrder,z:C,group:y},o[n]=S):(S.id=p.id,S.object=p,S.geometry=x,S.material=M,S.groupOrder=b,S.renderOrder=p.renderOrder,S.z=C,S.group=y),n++,S}function d(p,x,M,b,C,y){const S=h(p,x,M,b,C,y);M.transmission>0?s.push(S):M.transparent===!0?u.push(S):a.push(S)}function _(p,x,M,b,C,y){const S=h(p,x,M,b,C,y);M.transmission>0?s.unshift(S):M.transparent===!0?u.unshift(S):a.unshift(S)}function g(p,x){a.length>1&&a.sort(p||xR),s.length>1&&s.sort(x||X0),u.length>1&&u.sort(x||X0)}function v(){for(let p=n,x=o.length;p<x;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:_,finish:v,sort:g}}function yR(){let o=new WeakMap;function n(s,u){const f=o.get(s);let h;return f===void 0?(h=new k0,o.set(s,[h])):u>=f.length?(h=new k0,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:n,dispose:a}}function MR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new ot,color:new Xe};break;case"SpotLight":a={position:new ot,direction:new ot,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ot,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ot,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":a={color:new Xe,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[n.id]=a,a}}}function ER(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let TR=0;function bR(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function AR(o){const n=new MR,a=ER(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new ot);const u=new ot,f=new hn,h=new hn;function d(g){let v=0,p=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,I=0,P=0,D=0,F=0,G=0,O=0;g.sort(bR);for(let w=0,R=g.length;w<R;w++){const V=g[w],et=V.color,lt=V.intensity,vt=V.distance,ut=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=et.r*lt,p+=et.g*lt,x+=et.b*lt;else if(V.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(V.sh.coefficients[q],lt);O++}else if(V.isDirectionalLight){const q=n.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const at=V.shadow,j=a.get(V);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=V.shadow.matrix,I++}s.directional[M]=q,M++}else if(V.isSpotLight){const q=n.get(V);q.position.setFromMatrixPosition(V.matrixWorld),q.color.copy(et).multiplyScalar(lt),q.distance=vt,q.coneCos=Math.cos(V.angle),q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),q.decay=V.decay,s.spot[C]=q;const at=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,at.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[C]=at.matrix,V.castShadow){const j=a.get(V);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,s.spotShadow[C]=j,s.spotShadowMap[C]=ut,D++}C++}else if(V.isRectAreaLight){const q=n.get(V);q.color.copy(et).multiplyScalar(lt),q.halfWidth.set(V.width*.5,0,0),q.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=q,y++}else if(V.isPointLight){const q=n.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),q.distance=V.distance,q.decay=V.decay,V.castShadow){const at=V.shadow,j=a.get(V);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,j.shadowCameraNear=at.camera.near,j.shadowCameraFar=at.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=V.shadow.matrix,P++}s.point[b]=q,b++}else if(V.isHemisphereLight){const q=n.get(V);q.skyColor.copy(V.color).multiplyScalar(lt),q.groundColor.copy(V.groundColor).multiplyScalar(lt),s.hemi[S]=q,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=p,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==C||k.rectAreaLength!==y||k.hemiLength!==S||k.numDirectionalShadows!==I||k.numPointShadows!==P||k.numSpotShadows!==D||k.numSpotMaps!==F||k.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=D+F-G,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=O,k.directionalLength=M,k.pointLength=b,k.spotLength=C,k.rectAreaLength=y,k.hemiLength=S,k.numDirectionalShadows=I,k.numPointShadows=P,k.numSpotShadows=D,k.numSpotMaps=F,k.numLightProbes=O,s.version=TR++)}function _(g,v){let p=0,x=0,M=0,b=0,C=0;const y=v.matrixWorldInverse;for(let S=0,I=g.length;S<I;S++){const P=g[S];if(P.isDirectionalLight){const D=s.directional[p];D.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),p++}else if(P.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),h.identity(),f.copy(P.matrixWorld),f.premultiply(y),h.extractRotation(f),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:d,setupView:_,state:s}}function q0(o){const n=new AR(o),a=[],s=[];function u(v){g.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){n.setup(a)}function _(v){n.setupView(a,v)}const g={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:g,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function RR(o){let n=new WeakMap;function a(u,f=0){const h=n.get(u);let d;return h===void 0?(d=new q0(o),n.set(u,[d])):f>=h.length?(d=new q0(o),h.push(d)):d=h[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}const CR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DR(o,n,a){let s=new mS;const u=new Fe,f=new Fe,h=new rn,d=new KE({depthPacking:jM}),_=new QE,g={},v=a.maxTextureSize,p={[sr]:Wn,[Wn]:sr,[ga]:ga},x=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:CR,fragmentShader:wR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Yr;b.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Yi(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let S=this.type;this.render=function(G,O,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),et=o.state;et.setBlending(ar),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const lt=S!==ma&&this.type===ma,vt=S===ma&&this.type!==ma;for(let ut=0,q=G.length;ut<q;ut++){const at=G[ut],j=at.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;u.copy(j.mapSize);const xt=j.getFrameExtents();if(u.multiply(xt),f.copy(j.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/xt.x),u.x=f.x*xt.x,j.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/xt.y),u.y=f.y*xt.y,j.mapSize.y=f.y)),j.map===null||lt===!0||vt===!0){const Ht=this.type!==ma?{minFilter:Ui,magFilter:Ui}:{};j.map!==null&&j.map.dispose(),j.map=new qr(u.x,u.y,Ht),j.map.texture.name=at.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Mt=j.getViewportCount();for(let Ht=0;Ht<Mt;Ht++){const re=j.getViewport(Ht);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),et.viewport(h),j.updateMatrices(at,Ht),s=j.getFrustum(),D(O,k,j.camera,at,this.type)}j.isPointLightShadow!==!0&&this.type===ma&&I(j,k),j.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,V)};function I(G,O){const k=n.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new qr(u.x,u.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(O,null,k,x,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(O,null,k,M,C,null)}function P(G,O,k,w){let R=null;const V=k.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)R=V;else if(R=k.isPointLight===!0?_:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const et=R.uuid,lt=O.uuid;let vt=g[et];vt===void 0&&(vt={},g[et]=vt);let ut=vt[lt];ut===void 0&&(ut=R.clone(),vt[lt]=ut,O.addEventListener("dispose",F)),R=ut}if(R.visible=O.visible,R.wireframe=O.wireframe,w===ma?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:p[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const et=o.properties.get(R);et.light=k}return R}function D(G,O,k,w,R){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===ma)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,G.matrixWorld);const lt=n.update(G),vt=G.material;if(Array.isArray(vt)){const ut=lt.groups;for(let q=0,at=ut.length;q<at;q++){const j=ut[q],xt=vt[j.materialIndex];if(xt&&xt.visible){const Mt=P(G,xt,w,R);G.onBeforeShadow(o,G,O,k,lt,Mt,j),o.renderBufferDirect(k,null,lt,Mt,G,j),G.onAfterShadow(o,G,O,k,lt,Mt,j)}}}else if(vt.visible){const ut=P(G,vt,w,R);G.onBeforeShadow(o,G,O,k,lt,ut,null),o.renderBufferDirect(k,null,lt,ut,G,null),G.onAfterShadow(o,G,O,k,lt,ut,null)}}const et=G.children;for(let lt=0,vt=et.length;lt<vt;lt++)D(et[lt],O,k,w,R)}function F(G){G.target.removeEventListener("dispose",F);for(const k in g){const w=g[k],R=G.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const UR={[Nd]:Ld,[Od]:Id,[Pd]:Bd,[Js]:zd,[Ld]:Nd,[Id]:Od,[Bd]:Pd,[zd]:Js};function NR(o,n){function a(){let H=!1;const Rt=new rn;let Ut=null;const kt=new rn(0,0,0,0);return{setMask:function(Tt){Ut!==Tt&&!H&&(o.colorMask(Tt,Tt,Tt,Tt),Ut=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,St,jt,ue,He){He===!0&&(Tt*=ue,St*=ue,jt*=ue),Rt.set(Tt,St,jt,ue),kt.equals(Rt)===!1&&(o.clearColor(Tt,St,jt,ue),kt.copy(Rt))},reset:function(){H=!1,Ut=null,kt.set(-1,0,0,0)}}}function s(){let H=!1,Rt=!1,Ut=null,kt=null,Tt=null;return{setReversed:function(St){if(Rt!==St){const jt=n.get("EXT_clip_control");St?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Rt=St;const ue=Tt;Tt=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(St){St?nt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(St){Ut!==St&&!H&&(o.depthMask(St),Ut=St)},setFunc:function(St){if(Rt&&(St=UR[St]),kt!==St){switch(St){case Nd:o.depthFunc(o.NEVER);break;case Ld:o.depthFunc(o.ALWAYS);break;case Od:o.depthFunc(o.LESS);break;case Js:o.depthFunc(o.LEQUAL);break;case Pd:o.depthFunc(o.EQUAL);break;case zd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=St}},setLocked:function(St){H=St},setClear:function(St){Tt!==St&&(Rt&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){H=!1,Ut=null,kt=null,Tt=null,Rt=!1}}}function u(){let H=!1,Rt=null,Ut=null,kt=null,Tt=null,St=null,jt=null,ue=null,He=null;return{setTest:function(ye){H||(ye?nt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(ye){Rt!==ye&&!H&&(o.stencilMask(ye),Rt=ye)},setFunc:function(ye,Je,dn){(Ut!==ye||kt!==Je||Tt!==dn)&&(o.stencilFunc(ye,Je,dn),Ut=ye,kt=Je,Tt=dn)},setOp:function(ye,Je,dn){(St!==ye||jt!==Je||ue!==dn)&&(o.stencilOp(ye,Je,dn),St=ye,jt=Je,ue=dn)},setLocked:function(ye){H=ye},setClear:function(ye){He!==ye&&(o.clearStencil(ye),He=ye)},reset:function(){H=!1,Rt=null,Ut=null,kt=null,Tt=null,St=null,jt=null,ue=null,He=null}}}const f=new a,h=new s,d=new u,_=new WeakMap,g=new WeakMap;let v={},p={},x=new WeakMap,M=[],b=null,C=!1,y=null,S=null,I=null,P=null,D=null,F=null,G=null,O=new Xe(0,0,0),k=0,w=!1,R=null,V=null,et=null,lt=null,vt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=at>=1):j.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=at>=2);let xt=null,Mt={};const Ht=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),me=new rn().fromArray(Ht),z=new rn().fromArray(re);function ct(H,Rt,Ut,kt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(H,St),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<Ut;jt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Rt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const Q={};Q[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),nt(o.DEPTH_TEST),h.setFunc(Js),Gt(!1),wt(jv),nt(o.CULL_FACE),Ae(ar);function nt(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function Et(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function ft(H,Rt){return p[H]!==Rt?(o.bindFramebuffer(H,Rt),p[H]=Rt,H===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Rt),H===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function pt(H,Rt){let Ut=M,kt=!1;if(H){Ut=x.get(Rt),Ut===void 0&&(Ut=[],x.set(Rt,Ut));const Tt=H.textures;if(Ut.length!==Tt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let St=0,jt=Tt.length;St<jt;St++)Ut[St]=o.COLOR_ATTACHMENT0+St;Ut.length=Tt.length,kt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Ut)}function _t(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const Lt={[Hr]:o.FUNC_ADD,[xM]:o.FUNC_SUBTRACT,[yM]:o.FUNC_REVERSE_SUBTRACT};Lt[MM]=o.MIN,Lt[EM]=o.MAX;const L={[TM]:o.ZERO,[bM]:o.ONE,[AM]:o.SRC_COLOR,[Dd]:o.SRC_ALPHA,[NM]:o.SRC_ALPHA_SATURATE,[DM]:o.DST_COLOR,[CM]:o.DST_ALPHA,[RM]:o.ONE_MINUS_SRC_COLOR,[Ud]:o.ONE_MINUS_SRC_ALPHA,[UM]:o.ONE_MINUS_DST_COLOR,[wM]:o.ONE_MINUS_DST_ALPHA,[LM]:o.CONSTANT_COLOR,[OM]:o.ONE_MINUS_CONSTANT_COLOR,[PM]:o.CONSTANT_ALPHA,[zM]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(H,Rt,Ut,kt,Tt,St,jt,ue,He,ye){if(H===ar){C===!0&&(Et(o.BLEND),C=!1);return}if(C===!1&&(nt(o.BLEND),C=!0),H!==SM){if(H!==y||ye!==w){if((S!==Hr||D!==Hr)&&(o.blendEquation(o.FUNC_ADD),S=Hr,D=Hr),ye)switch(H){case Ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zv:o.blendFunc(o.ONE,o.ONE);break;case Kv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Qv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Kv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,P=null,F=null,G=null,O.set(0,0,0),k=0,y=H,w=ye}return}Tt=Tt||Rt,St=St||Ut,jt=jt||kt,(Rt!==S||Tt!==D)&&(o.blendEquationSeparate(Lt[Rt],Lt[Tt]),S=Rt,D=Tt),(Ut!==I||kt!==P||St!==F||jt!==G)&&(o.blendFuncSeparate(L[Ut],L[kt],L[St],L[jt]),I=Ut,P=kt,F=St,G=jt),(ue.equals(O)===!1||He!==k)&&(o.blendColor(ue.r,ue.g,ue.b,He),O.copy(ue),k=He),y=H,w=!1}function $t(H,Rt){H.side===ga?Et(o.CULL_FACE):nt(o.CULL_FACE);let Ut=H.side===Wn;Rt&&(Ut=!Ut),Gt(Ut),H.blending===Ks&&H.transparent===!1?Ae(ar):Ae(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),f.setMask(H.colorWrite);const kt=H.stencilWrite;d.setTest(kt),kt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ft(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(H){R!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),R=H)}function wt(H){H!==gM?(nt(o.CULL_FACE),H!==V&&(H===jv?o.cullFace(o.BACK):H===_M?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),V=H}function Xt(H){H!==et&&(q&&o.lineWidth(H),et=H)}function Ft(H,Rt,Ut){H?(nt(o.POLYGON_OFFSET_FILL),(lt!==Rt||vt!==Ut)&&(o.polygonOffset(Rt,Ut),lt=Rt,vt=Ut)):Et(o.POLYGON_OFFSET_FILL)}function oe(H){H?nt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function ke(H){H===void 0&&(H=o.TEXTURE0+ut-1),xt!==H&&(o.activeTexture(H),xt=H)}function Ye(H,Rt,Ut){Ut===void 0&&(xt===null?Ut=o.TEXTURE0+ut-1:Ut=xt);let kt=Mt[Ut];kt===void 0&&(kt={type:void 0,texture:void 0},Mt[Ut]=kt),(kt.type!==H||kt.texture!==Rt)&&(xt!==Ut&&(o.activeTexture(Ut),xt=Ut),o.bindTexture(H,Rt||Q[H]),kt.type=H,kt.texture=Rt)}function U(){const H=Mt[xt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{o.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{o.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{o.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Zt(){try{o.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qt(){try{o.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(){try{o.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(H){me.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),me.copy(H))}function ae(H){z.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),z.copy(H))}function Kt(H,Rt){let Ut=g.get(Rt);Ut===void 0&&(Ut=new WeakMap,g.set(Rt,Ut));let kt=Ut.get(H);kt===void 0&&(kt=o.getUniformBlockIndex(Rt,H.name),Ut.set(H,kt))}function Pt(H,Rt){const kt=g.get(Rt).get(H);_.get(Rt)!==kt&&(o.uniformBlockBinding(Rt,kt,H.__bindingPointIndex),_.set(Rt,kt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},xt=null,Mt={},p={},x=new WeakMap,M=[],b=null,C=!1,y=null,S=null,I=null,P=null,D=null,F=null,G=null,O=new Xe(0,0,0),k=0,w=!1,R=null,V=null,et=null,lt=null,vt=null,me.set(0,0,o.canvas.width,o.canvas.height),z.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:nt,disable:Et,bindFramebuffer:ft,drawBuffers:pt,useProgram:_t,setBlending:Ae,setMaterial:$t,setFlipSided:Gt,setCullFace:wt,setLineWidth:Xt,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:ke,bindTexture:Ye,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Qt,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:qt,scissor:Ot,viewport:ae,reset:ce}}function LR(o,n,a,s,u,f,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Fe,v=new WeakMap;let p;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):pl("canvas")}function C(U,T,tt){let mt=1;const yt=Ye(U);if((yt.width>tt||yt.height>tt)&&(mt=tt/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(mt*yt.width),qt=Math.floor(mt*yt.height);p===void 0&&(p=b(ht,qt));const Ct=T?b(ht,qt):p;return Ct.width=ht,Ct.height=qt,Ct.getContext("2d").drawImage(U,0,0,ht,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+qt+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,T,tt,mt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=T;if(T===o.RED&&(tt===o.FLOAT&&(ht=o.R32F),tt===o.HALF_FLOAT&&(ht=o.R16F),tt===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.R8UI),tt===o.UNSIGNED_SHORT&&(ht=o.R16UI),tt===o.UNSIGNED_INT&&(ht=o.R32UI),tt===o.BYTE&&(ht=o.R8I),tt===o.SHORT&&(ht=o.R16I),tt===o.INT&&(ht=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ht=o.RG32F),tt===o.HALF_FLOAT&&(ht=o.RG16F),tt===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),tt===o.UNSIGNED_INT&&(ht=o.RG32UI),tt===o.BYTE&&(ht=o.RG8I),tt===o.SHORT&&(ht=o.RG16I),tt===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),tt===o.UNSIGNED_INT&&(ht=o.RGB32UI),tt===o.BYTE&&(ht=o.RGB8I),tt===o.SHORT&&(ht=o.RGB16I),tt===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),tt===o.BYTE&&(ht=o.RGBA8I),tt===o.SHORT&&(ht=o.RGBA16I),tt===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),T===o.RGBA){const qt=yt?mc:De.getTransfer(mt);tt===o.FLOAT&&(ht=o.RGBA32F),tt===o.HALF_FLOAT&&(ht=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ht=qt===Ve?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&n.get("EXT_color_buffer_float"),ht}function D(U,T){let tt;return U?T===null||T===kr||T===cl?tt=o.DEPTH24_STENCIL8:T===_a?tt=o.DEPTH32F_STENCIL8:T===ul&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===kr||T===cl?tt=o.DEPTH_COMPONENT24:T===_a?tt=o.DEPTH_COMPONENT32F:T===ul&&(tt=o.DEPTH_COMPONENT16),tt}function F(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ui&&U.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),k(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),R(T)}function k(U){const T=s.get(U);if(T.__webglInit===void 0)return;const tt=U.source,mt=x.get(tt);if(mt){const yt=mt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(U),Object.keys(mt).length===0&&x.delete(tt)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const tt=U.source,mt=x.get(tt);delete mt[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let yt=0;yt<T.__webglFramebuffer[mt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[mt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=U.textures;for(let mt=0,yt=tt.length;mt<yt;mt++){const ht=s.get(tt[mt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(tt[mt])}s.remove(U)}let V=0;function et(){V=0}function lt(){const U=V;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),V+=1,U}function vt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ut(U,T){const tt=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,U,T);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function q(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Q(tt,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function at(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Q(tt,U,T);return}a.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function j(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){nt(tt,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const xt={[Gd]:o.REPEAT,[Vr]:o.CLAMP_TO_EDGE,[Vd]:o.MIRRORED_REPEAT},Mt={[Ui]:o.NEAREST,[YM]:o.NEAREST_MIPMAP_NEAREST,[Vu]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[nr]:o.LINEAR_MIPMAP_LINEAR},Ht={[QM]:o.NEVER,[iE]:o.ALWAYS,[JM]:o.LESS,[rS]:o.LEQUAL,[$M]:o.EQUAL,[nE]:o.GEQUAL,[tE]:o.GREATER,[eE]:o.NOTEQUAL};function re(U,T){if(T.type===_a&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===td||T.magFilter===Vu||T.magFilter===nr||T.minFilter===wi||T.minFilter===td||T.minFilter===Vu||T.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Mt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ht[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ui||T.minFilter!==Vu&&T.minFilter!==nr||T.type===_a&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=n.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function me(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const mt=T.source;let yt=x.get(mt);yt===void 0&&(yt={},x.set(mt,yt));const ht=vt(T);if(ht!==U.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),yt[ht].usedTimes++;const qt=yt[U.__cacheKey];qt!==void 0&&(yt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&w(T)),U.__cacheKey=ht,U.__webglTexture=yt[ht].texture}return tt}function z(U,T,tt){return Math.floor(Math.floor(U/tt)/T)}function ct(U,T,tt,mt){const ht=U.updateRanges;if(ht.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,tt,mt,T.data);else{ht.sort((At,Ot)=>At.start-Ot.start);let qt=0;for(let At=1;At<ht.length;At++){const Ot=ht[qt],ae=ht[At],Kt=Ot.start+Ot.count,Pt=z(ae.start,T.width,4),ce=z(Ot.start,T.width,4);ae.start<=Kt+1&&Pt===ce&&z(ae.start+ae.count-1,T.width,4)===Pt?Ot.count=Math.max(Ot.count,ae.start+ae.count-Ot.start):(++qt,ht[qt]=ae)}ht.length=qt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let At=0,Ot=ht.length;At<Ot;At++){const ae=ht[At],Kt=Math.floor(ae.start/4),Pt=Math.ceil(ae.count/4),ce=Kt%T.width,H=Math.floor(Kt/T.width),Rt=Pt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),a.texSubImage2D(o.TEXTURE_2D,0,ce,H,Rt,Ut,tt,mt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function Q(U,T,tt){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const yt=me(U,T),ht=T.source;a.bindTexture(mt,U.__webglTexture,o.TEXTURE0+tt);const qt=s.get(ht);if(ht.version!==qt.__version||yt===!0){a.activeTexture(o.TEXTURE0+tt);const Ct=De.getPrimaries(De.workingColorSpace),Zt=T.colorSpace===er?null:De.getPrimaries(T.colorSpace),Qt=T.colorSpace===er||Ct===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let At=C(T.image,!1,u.maxTextureSize);At=ke(T,At);const Ot=f.convert(T.format,T.colorSpace),ae=f.convert(T.type);let Kt=P(T.internalFormat,Ot,ae,T.colorSpace,T.isVideoTexture);re(mt,T);let Pt;const ce=T.mipmaps,H=T.isVideoTexture!==!0,Rt=qt.__version===void 0||yt===!0,Ut=ht.dataReady,kt=F(T,At);if(T.isDepthTexture)Kt=D(T.format===hl,T.type),Rt&&(H?a.texStorage2D(o.TEXTURE_2D,1,Kt,At.width,At.height):a.texImage2D(o.TEXTURE_2D,0,Kt,At.width,At.height,0,Ot,ae,null));else if(T.isDataTexture)if(ce.length>0){H&&Rt&&a.texStorage2D(o.TEXTURE_2D,kt,Kt,ce[0].width,ce[0].height);for(let Tt=0,St=ce.length;Tt<St;Tt++)Pt=ce[Tt],H?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ot,ae,Pt.data):a.texImage2D(o.TEXTURE_2D,Tt,Kt,Pt.width,Pt.height,0,Ot,ae,Pt.data);T.generateMipmaps=!1}else H?(Rt&&a.texStorage2D(o.TEXTURE_2D,kt,Kt,At.width,At.height),Ut&&ct(T,At,Ot,ae)):a.texImage2D(o.TEXTURE_2D,0,Kt,At.width,At.height,0,Ot,ae,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&Rt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Kt,ce[0].width,ce[0].height,At.depth);for(let Tt=0,St=ce.length;Tt<St;Tt++)if(Pt=ce[Tt],T.format!==Di)if(Ot!==null)if(H){if(Ut)if(T.layerUpdates.size>0){const jt=y0(Pt.width,Pt.height,T.format,T.type);for(const ue of T.layerUpdates){const He=Pt.data.subarray(ue*jt/Pt.data.BYTES_PER_ELEMENT,(ue+1)*jt/Pt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ue,Pt.width,Pt.height,1,Ot,He)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,Ot,Pt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Kt,Pt.width,Pt.height,At.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ut&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,Ot,ae,Pt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Kt,Pt.width,Pt.height,At.depth,0,Ot,ae,Pt.data)}else{H&&Rt&&a.texStorage2D(o.TEXTURE_2D,kt,Kt,ce[0].width,ce[0].height);for(let Tt=0,St=ce.length;Tt<St;Tt++)Pt=ce[Tt],T.format!==Di?Ot!==null?H?Ut&&a.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ot,Pt.data):a.compressedTexImage2D(o.TEXTURE_2D,Tt,Kt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,Ot,ae,Pt.data):a.texImage2D(o.TEXTURE_2D,Tt,Kt,Pt.width,Pt.height,0,Ot,ae,Pt.data)}else if(T.isDataArrayTexture)if(H){if(Rt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Kt,At.width,At.height,At.depth),Ut)if(T.layerUpdates.size>0){const Tt=y0(At.width,At.height,T.format,T.type);for(const St of T.layerUpdates){const jt=At.data.subarray(St*Tt/At.data.BYTES_PER_ELEMENT,(St+1)*Tt/At.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,Ot,ae,jt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ot,ae,At.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,At.width,At.height,At.depth,0,Ot,ae,At.data);else if(T.isData3DTexture)H?(Rt&&a.texStorage3D(o.TEXTURE_3D,kt,Kt,At.width,At.height,At.depth),Ut&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ot,ae,At.data)):a.texImage3D(o.TEXTURE_3D,0,Kt,At.width,At.height,At.depth,0,Ot,ae,At.data);else if(T.isFramebufferTexture){if(Rt)if(H)a.texStorage2D(o.TEXTURE_2D,kt,Kt,At.width,At.height);else{let Tt=At.width,St=At.height;for(let jt=0;jt<kt;jt++)a.texImage2D(o.TEXTURE_2D,jt,Kt,Tt,St,0,Ot,ae,null),Tt>>=1,St>>=1}}else if(ce.length>0){if(H&&Rt){const Tt=Ye(ce[0]);a.texStorage2D(o.TEXTURE_2D,kt,Kt,Tt.width,Tt.height)}for(let Tt=0,St=ce.length;Tt<St;Tt++)Pt=ce[Tt],H?Ut&&a.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ot,ae,Pt):a.texImage2D(o.TEXTURE_2D,Tt,Kt,Ot,ae,Pt);T.generateMipmaps=!1}else if(H){if(Rt){const Tt=Ye(At);a.texStorage2D(o.TEXTURE_2D,kt,Kt,Tt.width,Tt.height)}Ut&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ae,At)}else a.texImage2D(o.TEXTURE_2D,0,Kt,Ot,ae,At);y(T)&&S(mt),qt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function nt(U,T,tt){if(T.image.length!==6)return;const mt=me(U,T),yt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const ht=s.get(yt);if(yt.version!==ht.__version||mt===!0){a.activeTexture(o.TEXTURE0+tt);const qt=De.getPrimaries(De.workingColorSpace),Ct=T.colorSpace===er?null:De.getPrimaries(T.colorSpace),Zt=T.colorSpace===er||qt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let St=0;St<6;St++)!Qt&&!At?Ot[St]=C(T.image[St],!0,u.maxCubemapSize):Ot[St]=At?T.image[St].image:T.image[St],Ot[St]=ke(T,Ot[St]);const ae=Ot[0],Kt=f.convert(T.format,T.colorSpace),Pt=f.convert(T.type),ce=P(T.internalFormat,Kt,Pt,T.colorSpace),H=T.isVideoTexture!==!0,Rt=ht.__version===void 0||mt===!0,Ut=yt.dataReady;let kt=F(T,ae);re(o.TEXTURE_CUBE_MAP,T);let Tt;if(Qt){H&&Rt&&a.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ce,ae.width,ae.height);for(let St=0;St<6;St++){Tt=Ot[St].mipmaps;for(let jt=0;jt<Tt.length;jt++){const ue=Tt[jt];T.format!==Di?Kt!==null?H?Ut&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,0,0,ue.width,ue.height,Kt,ue.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,0,0,ue.width,ue.height,Kt,Pt,ue.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,ce,ue.width,ue.height,0,Kt,Pt,ue.data)}}}else{if(Tt=T.mipmaps,H&&Rt){Tt.length>0&&kt++;const St=Ye(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ce,St.width,St.height)}for(let St=0;St<6;St++)if(At){H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ot[St].width,Ot[St].height,Kt,Pt,Ot[St].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Ot[St].width,Ot[St].height,0,Kt,Pt,Ot[St].data);for(let jt=0;jt<Tt.length;jt++){const He=Tt[jt].image[St].image;H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,0,0,He.width,He.height,Kt,Pt,He.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,ce,He.width,He.height,0,Kt,Pt,He.data)}}else{H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,Pt,Ot[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Kt,Pt,Ot[St]);for(let jt=0;jt<Tt.length;jt++){const ue=Tt[jt];H?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,0,0,Kt,Pt,ue.image[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,ce,Kt,Pt,ue.image[St])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),ht.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Et(U,T,tt,mt,yt,ht){const qt=f.convert(tt.format,tt.colorSpace),Ct=f.convert(tt.type),Zt=P(tt.internalFormat,qt,Ct,tt.colorSpace),Qt=s.get(T),At=s.get(tt);if(At.__renderTarget=T,!Qt.__hasExternalTextures){const Ot=Math.max(1,T.width>>ht),ae=Math.max(1,T.height>>ht);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?a.texImage3D(yt,ht,Zt,Ot,ae,T.depth,0,qt,Ct,null):a.texImage2D(yt,ht,Zt,Ot,ae,0,qt,Ct,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,yt,At.__webglTexture,0,Xt(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,yt,At.__webglTexture,ht),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ft(U,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const mt=T.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,ht=D(T.stencilBuffer,yt),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=Xt(T);Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ht,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,U)}else{const mt=T.textures;for(let yt=0;yt<mt.length;yt++){const ht=mt[yt],qt=f.convert(ht.format,ht.colorSpace),Ct=f.convert(ht.type),Zt=P(ht.internalFormat,qt,Ct,ht.colorSpace),Qt=Xt(T);tt&&Ft(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Zt,T.width,T.height):Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,Zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function pt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const yt=mt.__webglTexture,ht=Xt(T);if(T.depthTexture.format===fl)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===hl)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function _t(U){const T=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const mt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=mt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=U.texture.mipmaps;mt&&mt.length>0?pt(T.__webglFramebuffer[0],U):pt(T.__webglFramebuffer,U)}else if(tt){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),ft(T.__webglDepthbuffer[mt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}else{const mt=U.texture.mipmaps;if(mt&&mt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ft(T.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(U,T,tt){const mt=s.get(U);T!==void 0&&Et(mt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&_t(U)}function L(U){const T=U.texture,tt=s.get(U),mt=s.get(T);U.addEventListener("dispose",O);const yt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,qt=yt.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,h.memory.textures++),ht){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<T.mipmaps.length;Zt++)tt.__webglFramebuffer[Ct][Zt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ct=0,Zt=yt.length;Ct<Zt;Ct++){const Qt=s.get(yt[Ct]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ft(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const Zt=yt[Ct];tt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const Qt=f.convert(Zt.format,Zt.colorSpace),At=f.convert(Zt.type),Ot=P(Zt.internalFormat,Qt,At,Zt.colorSpace,U.isXRRenderTarget===!0),ae=Xt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),ft(tt.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){a.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),re(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)Et(tt.__webglFramebuffer[Ct][Zt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else Et(tt.__webglFramebuffer[Ct],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&S(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(qt){for(let Ct=0,Zt=yt.length;Ct<Zt;Ct++){const Qt=yt[Ct],At=s.get(Qt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,At.__webglTexture),re(Ot,Qt),Et(tt.__webglFramebuffer,U,Qt,o.COLOR_ATTACHMENT0+Ct,Ot,0),y(Qt)&&S(Ot)}a.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ct,mt.__webglTexture),re(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)Et(tt.__webglFramebuffer[Zt],U,T,o.COLOR_ATTACHMENT0,Ct,Zt);else Et(tt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ct,0);y(T)&&S(Ct),a.unbindTexture()}U.depthBuffer&&_t(U)}function Ae(U){const T=U.textures;for(let tt=0,mt=T.length;tt<mt;tt++){const yt=T[tt];if(y(yt)){const ht=I(U),qt=s.get(yt).__webglTexture;a.bindTexture(ht,qt),S(ht),a.unbindTexture()}}}const $t=[],Gt=[];function wt(U){if(U.samples>0){if(Ft(U)===!1){const T=U.textures,tt=U.width,mt=U.height;let yt=o.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(U),Ct=T.length>1;if(Ct)for(let Qt=0;Qt<T.length;Qt++)a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Qt]);const At=s.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,tt,mt,0,0,tt,mt,yt,o.NEAREST),_===!0&&($t.length=0,Gt.length=0,$t.push(o.COLOR_ATTACHMENT0+Qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&($t.push(ht),Gt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Gt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$t))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Qt=0;Qt<T.length;Qt++){a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Qt]);const At=s.get(T[Qt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,At,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&_){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Xt(U){return Math.min(u.maxSamples,U.samples)}function Ft(U){const T=s.get(U);return U.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function ke(U,T){const tt=U.colorSpace,mt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==eo&&tt!==er&&(De.getTransfer(tt)===Ve?(mt!==Di||yt!==Sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Ye(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=lt,this.resetTextureUnits=et,this.setTexture2D=ut,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ft}function OR(o,n){function a(s,u=er){let f;const h=De.getTransfer(u);if(s===Sa)return o.UNSIGNED_BYTE;if(s===Mp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return o.UNSIGNED_SHORT_5_5_5_1;if(s===$0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===tS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Q0)return o.BYTE;if(s===J0)return o.SHORT;if(s===ul)return o.UNSIGNED_SHORT;if(s===yp)return o.INT;if(s===kr)return o.UNSIGNED_INT;if(s===_a)return o.FLOAT;if(s===gl)return o.HALF_FLOAT;if(s===eS)return o.ALPHA;if(s===nS)return o.RGB;if(s===Di)return o.RGBA;if(s===fl)return o.DEPTH_COMPONENT;if(s===hl)return o.DEPTH_STENCIL;if(s===iS)return o.RED;if(s===Tp)return o.RED_INTEGER;if(s===aS)return o.RG;if(s===bp)return o.RG_INTEGER;if(s===Ap)return o.RGBA_INTEGER;if(s===cc||s===fc||s===hc||s===dc)if(h===Ve)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===cc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===cc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xd||s===kd||s===qd||s===Yd)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Xd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wd||s===jd||s===Zd)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Wd||s===jd)return h===Ve?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Zd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Kd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ep)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===up)return h===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cp||s===fp||s===hp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===cp)return h===Ve?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dp||s===pp||s===mp||s===gp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===dp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const PR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a){if(this.texture===null){const s=new _S(n.texture);(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new or({vertexShader:PR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Yi(new Sc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BR extends io{constructor(n,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",_=1,g=null,v=null,p=null,x=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new IR,S={},I=a.getContextAttributes();let P=null,D=null;const F=[],G=[],O=new Fe;let k=null;const w=new vi;w.viewport=new rn;const R=new vi;R.viewport=new rn;const V=[w,R],et=new iT;let lt=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let nt=F[Q];return nt===void 0&&(nt=new yd,F[Q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Q){let nt=F[Q];return nt===void 0&&(nt=new yd,F[Q]=nt),nt.getGripSpace()},this.getHand=function(Q){let nt=F[Q];return nt===void 0&&(nt=new yd,F[Q]=nt),nt.getHandSpace()};function ut(Q){const nt=G.indexOf(Q.inputSource);if(nt===-1)return;const Et=F[nt];Et!==void 0&&(Et.update(Q.inputSource,Q.frame,g||h),Et.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){u.removeEventListener("select",ut),u.removeEventListener("selectstart",ut),u.removeEventListener("selectend",ut),u.removeEventListener("squeeze",ut),u.removeEventListener("squeezestart",ut),u.removeEventListener("squeezeend",ut),u.removeEventListener("end",q),u.removeEventListener("inputsourceschange",at);for(let Q=0;Q<F.length;Q++){const nt=G[Q];nt!==null&&(G[Q]=null,F[Q].disconnect(nt))}lt=null,vt=null,y.reset();for(const Q in S)delete S[Q];n.setRenderTarget(P),M=null,x=null,p=null,u=null,D=null,ct.stop(),s.isPresenting=!1,n.setPixelRatio(k),n.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(u,a)),p},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(Q){if(u=Q,u!==null){if(P=n.getRenderTarget(),u.addEventListener("select",ut),u.addEventListener("selectstart",ut),u.addEventListener("selectend",ut),u.addEventListener("squeeze",ut),u.addEventListener("squeezestart",ut),u.addEventListener("squeezeend",ut),u.addEventListener("end",q),u.addEventListener("inputsourceschange",at),I.xrCompatible!==!0&&await a.makeXRCompatible(),k=n.getPixelRatio(),n.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,ft=null,pt=null;I.depth&&(pt=I.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Et=I.stencil?hl:fl,ft=I.stencil?cl:kr);const _t={colorFormat:a.RGBA8,depthFormat:pt,scaleFactor:f};p=this.getBinding(),x=p.createProjectionLayer(_t),u.updateRenderState({layers:[x]}),n.setPixelRatio(1),n.setSize(x.textureWidth,x.textureHeight,!1),D=new qr(x.textureWidth,x.textureHeight,{format:Di,type:Sa,depthTexture:new gS(x.textureWidth,x.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:I.stencil,colorSpace:n.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Et={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,Et),u.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new qr(M.framebufferWidth,M.framebufferHeight,{format:Di,type:Sa,colorSpace:n.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(_),g=null,h=await u.requestReferenceSpace(d),ct.setContext(u),ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(Q){for(let nt=0;nt<Q.removed.length;nt++){const Et=Q.removed[nt],ft=G.indexOf(Et);ft>=0&&(G[ft]=null,F[ft].disconnect(Et))}for(let nt=0;nt<Q.added.length;nt++){const Et=Q.added[nt];let ft=G.indexOf(Et);if(ft===-1){for(let _t=0;_t<F.length;_t++)if(_t>=G.length){G.push(Et),ft=_t;break}else if(G[_t]===null){G[_t]=Et,ft=_t;break}if(ft===-1)break}const pt=F[ft];pt&&pt.connect(Et)}}const j=new ot,xt=new ot;function Mt(Q,nt,Et){j.setFromMatrixPosition(nt.matrixWorld),xt.setFromMatrixPosition(Et.matrixWorld);const ft=j.distanceTo(xt),pt=nt.projectionMatrix.elements,_t=Et.projectionMatrix.elements,Lt=pt[14]/(pt[10]-1),L=pt[14]/(pt[10]+1),Ae=(pt[9]+1)/pt[5],$t=(pt[9]-1)/pt[5],Gt=(pt[8]-1)/pt[0],wt=(_t[8]+1)/_t[0],Xt=Lt*Gt,Ft=Lt*wt,oe=ft/(-Gt+wt),ke=oe*-Gt;if(nt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ke),Q.translateZ(oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),pt[10]===-1)Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Ye=Lt+oe,U=L+oe,T=Xt-ke,tt=Ft+(ft-ke),mt=Ae*L/U*Ye,yt=$t*L/U*Ye;Q.projectionMatrix.makePerspective(T,tt,mt,yt,Ye,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ht(Q,nt){nt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(nt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(u===null)return;let nt=Q.near,Et=Q.far;y.texture!==null&&(y.depthNear>0&&(nt=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),et.near=R.near=w.near=nt,et.far=R.far=w.far=Et,(lt!==et.near||vt!==et.far)&&(u.updateRenderState({depthNear:et.near,depthFar:et.far}),lt=et.near,vt=et.far),et.layers.mask=Q.layers.mask|6,w.layers.mask=et.layers.mask&3,R.layers.mask=et.layers.mask&5;const ft=Q.parent,pt=et.cameras;Ht(et,ft);for(let _t=0;_t<pt.length;_t++)Ht(pt[_t],ft);pt.length===2?Mt(et,w,R):et.projectionMatrix.copy(w.projectionMatrix),re(Q,et,ft)};function re(Q,nt,Et){Et===null?Q.matrix.copy(nt.matrixWorld):(Q.matrix.copy(Et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(nt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=dl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(x===null&&M===null))return _},this.setFoveation=function(Q){_=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(et)},this.getCameraTexture=function(Q){return S[Q]};let me=null;function z(Q,nt){if(v=nt.getViewerPose(g||h),b=nt,v!==null){const Et=v.views;M!==null&&(n.setRenderTargetFramebuffer(D,M.framebuffer),n.setRenderTarget(D));let ft=!1;Et.length!==et.cameras.length&&(et.cameras.length=0,ft=!0);for(let L=0;L<Et.length;L++){const Ae=Et[L];let $t=null;if(M!==null)$t=M.getViewport(Ae);else{const wt=p.getViewSubImage(x,Ae);$t=wt.viewport,L===0&&(n.setRenderTargetTextures(D,wt.colorTexture,wt.depthStencilTexture),n.setRenderTarget(D))}let Gt=V[L];Gt===void 0&&(Gt=new vi,Gt.layers.enable(L),Gt.viewport=new rn,V[L]=Gt),Gt.matrix.fromArray(Ae.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ae.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set($t.x,$t.y,$t.width,$t.height),L===0&&(et.matrix.copy(Gt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),ft===!0&&et.cameras.push(Gt)}const pt=u.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&C){p=s.getBinding();const L=p.getDepthInformation(Et[0]);L&&L.isValid&&L.texture&&y.init(L,u.renderState)}if(pt&&pt.includes("camera-access")&&C){n.state.unbindTexture(),p=s.getBinding();for(let L=0;L<Et.length;L++){const Ae=Et[L].camera;if(Ae){let $t=S[Ae];$t||($t=new _S,S[Ae]=$t);const Gt=p.getCameraImage(Ae);$t.sourceTexture=Gt}}}}for(let Et=0;Et<F.length;Et++){const ft=G[Et],pt=F[Et];ft!==null&&pt!==void 0&&pt.update(ft,nt,g||h)}me&&me(Q,nt),nt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:nt}),b=null}const ct=new vS;ct.setAnimationLoop(z),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}const Ir=new xa,FR=new hn;function HR(o,n){function a(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,hS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function u(y,S,I,P,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(y,S):S.isMeshToonMaterial?(f(y,S),p(y,S)):S.isMeshPhongMaterial?(f(y,S),v(y,S)):S.isMeshStandardMaterial?(f(y,S),x(y,S),S.isMeshPhysicalMaterial&&M(y,S,D)):S.isMeshMatcapMaterial?(f(y,S),b(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),C(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?_(y,S,I,P):S.isSpriteMaterial?g(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,a(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,a(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Wn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,a(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Wn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,a(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,a(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,a(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const I=n.get(S),P=I.envMap,D=I.envMapRotation;P&&(y.envMap.value=P,Ir.copy(D),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),y.envMapRotation.value.setFromMatrix4(FR.makeRotationFromEuler(Ir)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,a(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,a(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,a(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function _(y,S,I,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*I,y.scale.value=P*.5,S.map&&(y.map.value=S.map,a(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,a(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function p(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,a(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,a(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,I){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,a(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,a(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,a(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,a(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,a(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,a(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,a(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,a(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,a(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,a(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,a(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,a(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const I=n.get(S).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function GR(o,n,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(I,P){const D=P.program;s.uniformBlockBinding(I,D)}function g(I,P){let D=u[I.id];D===void 0&&(b(I),D=v(I),u[I.id]=D,I.addEventListener("dispose",y));const F=P.program;s.updateUBOMapping(I,F);const G=n.render.frame;f[I.id]!==G&&(x(I),f[I.id]=G)}function v(I){const P=p();I.__bindingPointIndex=P;const D=o.createBuffer(),F=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,F,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,D),D}function p(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const P=u[I.id],D=I.uniforms,F=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,O=D.length;G<O;G++){const k=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,R=k.length;w<R;w++){const V=k[w];if(M(V,G,w,F)===!0){const et=V.__offset,lt=Array.isArray(V.value)?V.value:[V.value];let vt=0;for(let ut=0;ut<lt.length;ut++){const q=lt[ut],at=C(q);typeof q=="number"||typeof q=="boolean"?(V.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,et+vt,V.__data)):q.isMatrix3?(V.__data[0]=q.elements[0],V.__data[1]=q.elements[1],V.__data[2]=q.elements[2],V.__data[3]=0,V.__data[4]=q.elements[3],V.__data[5]=q.elements[4],V.__data[6]=q.elements[5],V.__data[7]=0,V.__data[8]=q.elements[6],V.__data[9]=q.elements[7],V.__data[10]=q.elements[8],V.__data[11]=0):(q.toArray(V.__data,vt),vt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,P,D,F){const G=I.value,O=P+"_"+D;if(F[O]===void 0)return typeof G=="number"||typeof G=="boolean"?F[O]=G:F[O]=G.clone(),!0;{const k=F[O];if(typeof G=="number"||typeof G=="boolean"){if(k!==G)return F[O]=G,!0}else if(k.equals(G)===!1)return k.copy(G),!0}return!1}function b(I){const P=I.uniforms;let D=0;const F=16;for(let O=0,k=P.length;O<k;O++){const w=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,V=w.length;R<V;R++){const et=w[R],lt=Array.isArray(et.value)?et.value:[et.value];for(let vt=0,ut=lt.length;vt<ut;vt++){const q=lt[vt],at=C(q),j=D%F,xt=j%at.boundary,Mt=j+xt;D+=xt,Mt!==0&&F-Mt<at.storage&&(D+=F-Mt),et.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=at.storage}}}const G=D%F;return G>0&&(D+=F-G),I.__size=D,I.__cache={},this}function C(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function y(I){const P=I.target;P.removeEventListener("dispose",y);const D=h.indexOf(P.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(u[P.id]),delete u[P.id],delete f[P.id]}function S(){for(const I in u)o.deleteBuffer(u[I]);h=[],u={},f={}}return{bind:_,update:g,dispose:S}}class VR{constructor(n={}){const{canvas:a=xE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:x=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,S=null;const I=[],P=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=Yn;let G=0,O=0,k=null,w=-1,R=null;const V=new rn,et=new rn;let lt=null;const vt=new Xe(0);let ut=0,q=a.width,at=a.height,j=1,xt=null,Mt=null;const Ht=new rn(0,0,q,at),re=new rn(0,0,q,at);let me=!1;const z=new mS;let ct=!1,Q=!1;const nt=new hn,Et=new ot,ft=new rn,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Lt(){return k===null?j:1}let L=s;function Ae(A,Z){return a.getContext(A,Z)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${xp}`),a.addEventListener("webglcontextlost",Ut,!1),a.addEventListener("webglcontextrestored",kt,!1),a.addEventListener("webglcontextcreationerror",Tt,!1),L===null){const Z="webgl2";if(L=Ae(Z,A),L===null)throw Ae(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $t,Gt,wt,Xt,Ft,oe,ke,Ye,U,T,tt,mt,yt,ht,qt,Ct,Zt,Qt,At,Ot,ae,Kt,Pt,ce;function H(){$t=new JA(L),$t.init(),Kt=new OR(L,$t),Gt=new qA(L,$t,n,Kt),wt=new NR(L,$t),Gt.reversedDepthBuffer&&x&&wt.buffers.depth.setReversed(!0),Xt=new e1(L),Ft=new SR,oe=new LR(L,$t,wt,Ft,Gt,Kt,Xt),ke=new WA(D),Ye=new QA(D),U=new oT(L),Pt=new XA(L,U),T=new $A(L,U,Xt,Pt),tt=new i1(L,T,U,Xt),At=new n1(L,Gt,oe),Ct=new YA(Ft),mt=new vR(D,ke,Ye,$t,Gt,Pt,Ct),yt=new HR(D,Ft),ht=new yR,qt=new RR($t),Qt=new VA(D,ke,Ye,wt,tt,M,_),Zt=new DR(D,tt,Gt),ce=new GR(L,Xt,Gt,wt),Ot=new kA(L,$t,Xt),ae=new t1(L,$t,Xt),Xt.programs=mt.programs,D.capabilities=Gt,D.extensions=$t,D.properties=Ft,D.renderLists=ht,D.shadowMap=Zt,D.state=wt,D.info=Xt}H();const Rt=new BR(D,L);this.xr=Rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=$t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(q,at,!1))},this.getSize=function(A){return A.set(q,at)},this.setSize=function(A,Z,rt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,at=Z,a.width=Math.floor(A*j),a.height=Math.floor(Z*j),rt===!0&&(a.style.width=A+"px",a.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(q*j,at*j).floor()},this.setDrawingBufferSize=function(A,Z,rt){q=A,at=Z,j=rt,a.width=Math.floor(A*rt),a.height=Math.floor(Z*rt),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Ht)},this.setViewport=function(A,Z,rt,st){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,Z,rt,st),wt.viewport(V.copy(Ht).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,Z,rt,st){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Z,rt,st),wt.scissor(et.copy(re).multiplyScalar(j).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){wt.setScissorTest(me=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,rt=!0){let st=0;if(A){let K=!1;if(k!==null){const bt=k.texture.format;K=bt===Ap||bt===bp||bt===Tp}if(K){const bt=k.texture.type,zt=bt===Sa||bt===kr||bt===ul||bt===cl||bt===Mp||bt===Ep,Bt=Qt.getClearColor(),Dt=Qt.getClearAlpha(),Yt=Bt.r,ie=Bt.g,ee=Bt.b;zt?(b[0]=Yt,b[1]=ie,b[2]=ee,b[3]=Dt,L.clearBufferuiv(L.COLOR,0,b)):(C[0]=Yt,C[1]=ie,C[2]=ee,C[3]=Dt,L.clearBufferiv(L.COLOR,0,C))}else st|=L.COLOR_BUFFER_BIT}Z&&(st|=L.DEPTH_BUFFER_BIT),rt&&(st|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Ut,!1),a.removeEventListener("webglcontextrestored",kt,!1),a.removeEventListener("webglcontextcreationerror",Tt,!1),Qt.dispose(),ht.dispose(),qt.dispose(),Ft.dispose(),ke.dispose(),Ye.dispose(),tt.dispose(),Pt.dispose(),ce.dispose(),mt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",dn),Rt.removeEventListener("sessionend",Cn),ji.stop()};function Ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=Xt.autoReset,Z=Zt.enabled,rt=Zt.autoUpdate,st=Zt.needsUpdate,K=Zt.type;H(),Xt.autoReset=A,Zt.enabled=Z,Zt.autoUpdate=rt,Zt.needsUpdate=st,Zt.type=K}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const Z=A.target;Z.removeEventListener("dispose",St),jt(Z)}function jt(A){ue(A),Ft.remove(A)}function ue(A){const Z=Ft.get(A).programs;Z!==void 0&&(Z.forEach(function(rt){mt.releaseProgram(rt)}),A.isShaderMaterial&&mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,rt,st,K,bt){Z===null&&(Z=pt);const zt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=xl(A,Z,rt,st,K);wt.setMaterial(st,zt);let Dt=rt.index,Yt=1;if(st.wireframe===!0){if(Dt=T.getWireframeAttribute(rt),Dt===void 0)return;Yt=2}const ie=rt.drawRange,ee=rt.attributes.position;let ve=ie.start*Yt,Oe=(ie.start+ie.count)*Yt;bt!==null&&(ve=Math.max(ve,bt.start*Yt),Oe=Math.min(Oe,(bt.start+bt.count)*Yt)),Dt!==null?(ve=Math.max(ve,0),Oe=Math.min(Oe,Dt.count)):ee!=null&&(ve=Math.max(ve,0),Oe=Math.min(Oe,ee.count));const Ke=Oe-ve;if(Ke<0||Ke===1/0)return;Pt.setup(K,st,Bt,rt,Dt);let Ue,Re=Ot;if(Dt!==null&&(Ue=U.get(Dt),Re=ae,Re.setIndex(Ue)),K.isMesh)st.wireframe===!0?(wt.setLineWidth(st.wireframeLinewidth*Lt()),Re.setMode(L.LINES)):Re.setMode(L.TRIANGLES);else if(K.isLine){let ne=st.linewidth;ne===void 0&&(ne=1),wt.setLineWidth(ne*Lt()),K.isLineSegments?Re.setMode(L.LINES):K.isLineLoop?Re.setMode(L.LINE_LOOP):Re.setMode(L.LINE_STRIP)}else K.isPoints?Re.setMode(L.POINTS):K.isSprite&&Re.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ml("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ne=K._multiDrawStarts,Ne=K._multiDrawCounts,ge=K._multiDrawCount,pn=Dt?U.get(Dt).bytesPerElement:1,jn=Ft.get(st).currentProgram.getUniforms();for(let Ce=0;Ce<ge;Ce++)jn.setValue(L,"_gl_DrawID",Ce),Re.render(ne[Ce]/pn,Ne[Ce])}else if(K.isInstancedMesh)Re.renderInstances(ve,Ke,K.count);else if(rt.isInstancedBufferGeometry){const ne=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ne=Math.min(rt.instanceCount,ne);Re.renderInstances(ve,Ke,Ne)}else Re.render(ve,Ke)};function He(A,Z,rt){A.transparent===!0&&A.side===ga&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,oi(A,Z,rt),A.side=sr,A.needsUpdate=!0,oi(A,Z,rt),A.side=ga):oi(A,Z,rt)}this.compile=function(A,Z,rt=null){rt===null&&(rt=A),S=qt.get(rt),S.init(Z),P.push(S),rt.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),A!==rt&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights();const st=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const bt=K.material;if(bt)if(Array.isArray(bt))for(let zt=0;zt<bt.length;zt++){const Bt=bt[zt];He(Bt,rt,K),st.add(Bt)}else He(bt,rt,K),st.add(bt)}),S=P.pop(),st},this.compileAsync=function(A,Z,rt=null){const st=this.compile(A,Z,rt);return new Promise(K=>{function bt(){if(st.forEach(function(zt){Ft.get(zt).currentProgram.isReady()&&st.delete(zt)}),st.size===0){K(A);return}setTimeout(bt,10)}$t.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ye=null;function Je(A){ye&&ye(A)}function dn(){ji.stop()}function Cn(){ji.start()}const ji=new vS;ji.setAnimationLoop(Je),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(A){ye=A,Rt.setAnimationLoop(A),A===null?ji.stop():ji.start()},Rt.addEventListener("sessionstart",dn),Rt.addEventListener("sessionend",Cn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Z),Z=Rt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,Z,k),S=qt.get(A,P.length),S.init(Z),P.push(S),nt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z.setFromProjectionMatrix(nt,qi,Z.reversedDepth),Q=this.localClippingEnabled,ct=Ct.init(this.clippingPlanes,Q),y=ht.get(A,I.length),y.init(),I.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&oo(bt,Z,-1/0,D.sortObjects)}oo(A,Z,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,Mt),_t=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,_t&&Qt.addToRenderList(y,A),this.info.render.frame++,ct===!0&&Ct.beginShadows();const rt=S.state.shadowsArray;Zt.render(rt,A,Z),ct===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,K=y.transmissive;if(S.setupLights(),Z.isArrayCamera){const bt=Z.cameras;if(K.length>0)for(let zt=0,Bt=bt.length;zt<Bt;zt++){const Dt=bt[zt];lr(st,K,A,Dt)}_t&&Qt.render(A);for(let zt=0,Bt=bt.length;zt<Bt;zt++){const Dt=bt[zt];Sl(y,A,Dt,Dt.viewport)}}else K.length>0&&lr(st,K,A,Z),_t&&Qt.render(A),Sl(y,A,Z);k!==null&&O===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,Z),Pt.resetDefaultState(),w=-1,R=null,P.pop(),P.length>0?(S=P[P.length-1],ct===!0&&Ct.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function oo(A,Z,rt,st){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){st&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nt);const zt=tt.update(A),Bt=A.material;Bt.visible&&y.push(A,zt,Bt,rt,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){const zt=tt.update(A),Bt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ft.copy(zt.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(nt)),Array.isArray(Bt)){const Dt=zt.groups;for(let Yt=0,ie=Dt.length;Yt<ie;Yt++){const ee=Dt[Yt],ve=Bt[ee.materialIndex];ve&&ve.visible&&y.push(A,zt,ve,rt,ft.z,ee)}}else Bt.visible&&y.push(A,zt,Bt,rt,ft.z,null)}}const bt=A.children;for(let zt=0,Bt=bt.length;zt<Bt;zt++)oo(bt[zt],Z,rt,st)}function Sl(A,Z,rt,st){const K=A.opaque,bt=A.transmissive,zt=A.transparent;S.setupLightsView(rt),ct===!0&&Ct.setGlobalState(D.clippingPlanes,rt),st&&wt.viewport(V.copy(st)),K.length>0&&Zi(K,Z,rt),bt.length>0&&Zi(bt,Z,rt),zt.length>0&&Zi(zt,Z,rt),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function lr(A,Z,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[st.id]===void 0&&(S.state.transmissionRenderTarget[st.id]=new qr(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?gl:Sa,minFilter:nr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=S.state.transmissionRenderTarget[st.id],zt=st.viewport||V;bt.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Bt=D.getRenderTarget(),Dt=D.getActiveCubeFace(),Yt=D.getActiveMipmapLevel();D.setRenderTarget(bt),D.getClearColor(vt),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),_t&&Qt.render(rt);const ie=D.toneMapping;D.toneMapping=rr;const ee=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),ct===!0&&Ct.setGlobalState(D.clippingPlanes,st),Zi(A,rt,st),oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Oe=0,Ke=Z.length;Oe<Ke;Oe++){const Ue=Z[Oe],Re=Ue.object,ne=Ue.geometry,Ne=Ue.material,ge=Ue.group;if(Ne.side===ga&&Re.layers.test(st.layers)){const pn=Ne.side;Ne.side=Wn,Ne.needsUpdate=!0,ur(Re,rt,st,ne,Ne,ge),Ne.side=pn,Ne.needsUpdate=!0,ve=!0}}ve===!0&&(oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt))}D.setRenderTarget(Bt,Dt,Yt),D.setClearColor(vt,ut),ee!==void 0&&(st.viewport=ee),D.toneMapping=ie}function Zi(A,Z,rt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,bt=A.length;K<bt;K++){const zt=A[K],Bt=zt.object,Dt=zt.geometry,Yt=zt.group;let ie=zt.material;ie.allowOverride===!0&&st!==null&&(ie=st),Bt.layers.test(rt.layers)&&ur(Bt,Z,rt,Dt,ie,Yt)}}function ur(A,Z,rt,st,K,bt){A.onBeforeRender(D,Z,rt,st,K,bt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(D,Z,rt,st,A,bt),K.transparent===!0&&K.side===ga&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,D.renderBufferDirect(rt,Z,st,K,A,bt),K.side=sr,K.needsUpdate=!0,D.renderBufferDirect(rt,Z,st,K,A,bt),K.side=ga):D.renderBufferDirect(rt,Z,st,K,A,bt),A.onAfterRender(D,Z,rt,st,K,bt)}function oi(A,Z,rt){Z.isScene!==!0&&(Z=pt);const st=Ft.get(A),K=S.state.lights,bt=S.state.shadowsArray,zt=K.state.version,Bt=mt.getParameters(A,K.state,bt,Z,rt),Dt=mt.getProgramCacheKey(Bt);let Yt=st.programs;st.environment=A.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(A.isMeshStandardMaterial?Ye:ke).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",St),Yt=new Map,st.programs=Yt);let ie=Yt.get(Dt);if(ie!==void 0){if(st.currentProgram===ie&&st.lightsStateVersion===zt)return ya(A,Bt),ie}else Bt.uniforms=mt.getUniforms(A),A.onBeforeCompile(Bt,D),ie=mt.acquireProgram(Bt,Dt),Yt.set(Dt,ie),st.uniforms=Bt.uniforms;const ee=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ee.clippingPlanes=Ct.uniform),ya(A,Bt),st.needsLights=yl(A),st.lightsStateVersion=zt,st.needsLights&&(ee.ambientLightColor.value=K.state.ambient,ee.lightProbe.value=K.state.probe,ee.directionalLights.value=K.state.directional,ee.directionalLightShadows.value=K.state.directionalShadow,ee.spotLights.value=K.state.spot,ee.spotLightShadows.value=K.state.spotShadow,ee.rectAreaLights.value=K.state.rectArea,ee.ltc_1.value=K.state.rectAreaLTC1,ee.ltc_2.value=K.state.rectAreaLTC2,ee.pointLights.value=K.state.point,ee.pointLightShadows.value=K.state.pointShadow,ee.hemisphereLights.value=K.state.hemi,ee.directionalShadowMap.value=K.state.directionalShadowMap,ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ee.spotShadowMap.value=K.state.spotShadowMap,ee.spotLightMatrix.value=K.state.spotLightMatrix,ee.spotLightMap.value=K.state.spotLightMap,ee.pointShadowMap.value=K.state.pointShadowMap,ee.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=ie,st.uniformsList=null,ie}function cr(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=pc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function ya(A,Z){const rt=Ft.get(A);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function xl(A,Z,rt,st,K){Z.isScene!==!0&&(Z=pt),oe.resetTextureUnits();const bt=Z.fog,zt=st.isMeshStandardMaterial?Z.environment:null,Bt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:eo,Dt=(st.isMeshStandardMaterial?Ye:ke).get(st.envMap||zt),Yt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),ee=!!rt.morphAttributes.position,ve=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let Ke=rr;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ke=D.toneMapping);const Ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Re=Ue!==void 0?Ue.length:0,ne=Ft.get(st),Ne=S.state.lights;if(ct===!0&&(Q===!0||A!==R)){const tn=A===R&&st.id===w;Ct.setState(st,A,tn)}let ge=!1;st.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ne.state.version||ne.outputColorSpace!==Bt||K.isBatchedMesh&&ne.batching===!1||!K.isBatchedMesh&&ne.batching===!0||K.isBatchedMesh&&ne.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ne.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ne.instancing===!1||!K.isInstancedMesh&&ne.instancing===!0||K.isSkinnedMesh&&ne.skinning===!1||!K.isSkinnedMesh&&ne.skinning===!0||K.isInstancedMesh&&ne.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ne.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ne.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ne.instancingMorph===!1&&K.morphTexture!==null||ne.envMap!==Dt||st.fog===!0&&ne.fog!==bt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Ct.numPlanes||ne.numIntersection!==Ct.numIntersection)||ne.vertexAlphas!==Yt||ne.vertexTangents!==ie||ne.morphTargets!==ee||ne.morphNormals!==ve||ne.morphColors!==Oe||ne.toneMapping!==Ke||ne.morphTargetsCount!==Re)&&(ge=!0):(ge=!0,ne.__version=st.version);let pn=ne.currentProgram;ge===!0&&(pn=oi(st,Z,K));let jn=!1,Ce=!1,Ma=!1;const We=pn.getUniforms(),Ln=ne.uniforms;if(wt.useProgram(pn.program)&&(jn=!0,Ce=!0,Ma=!0),st.id!==w&&(w=st.id,Ce=!0),jn||R!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),We.setValue(L,"projectionMatrix",A.projectionMatrix),We.setValue(L,"viewMatrix",A.matrixWorldInverse);const wn=We.map.cameraPosition;wn!==void 0&&wn.setValue(L,Et.setFromMatrixPosition(A.matrixWorld)),Gt.logarithmicDepthBuffer&&We.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&We.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ce=!0,Ma=!0)}if(K.isSkinnedMesh){We.setOptional(L,K,"bindMatrix"),We.setOptional(L,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),We.setValue(L,"boneTexture",tn.boneTexture,oe))}K.isBatchedMesh&&(We.setOptional(L,K,"batchingTexture"),We.setValue(L,"batchingTexture",K._matricesTexture,oe),We.setOptional(L,K,"batchingIdTexture"),We.setValue(L,"batchingIdTexture",K._indirectTexture,oe),We.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&We.setValue(L,"batchingColorTexture",K._colorsTexture,oe));const sn=rt.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&At.update(K,rt,pn),(Ce||ne.receiveShadow!==K.receiveShadow)&&(ne.receiveShadow=K.receiveShadow,We.setValue(L,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ln.envMap.value=Dt,Ln.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Ln.envMapIntensity.value=Z.environmentIntensity),Ce&&(We.setValue(L,"toneMappingExposure",D.toneMappingExposure),ne.needsLights&&yc(Ln,Ma),bt&&st.fog===!0&&yt.refreshFogUniforms(Ln,bt),yt.refreshMaterialUniforms(Ln,st,j,at,S.state.transmissionRenderTarget[A.id]),pc.upload(L,cr(ne),Ln,oe)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(pc.upload(L,cr(ne),Ln,oe),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&We.setValue(L,"center",K.center),We.setValue(L,"modelViewMatrix",K.modelViewMatrix),We.setValue(L,"normalMatrix",K.normalMatrix),We.setValue(L,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const tn=st.uniformsGroups;for(let wn=0,Wr=tn.length;wn<Wr;wn++){const Ni=tn[wn];ce.update(Ni,pn),ce.bind(Ni,pn)}}return pn}function yc(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function yl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,Z,rt){const st=Ft.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Ft.get(A.texture).__webglTexture=Z,Ft.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const rt=Ft.get(A);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const lo=L.createFramebuffer();this.setRenderTarget=function(A,Z=0,rt=0){k=A,G=Z,O=rt;let st=!0,K=null,bt=!1,zt=!1;if(A){const Dt=Ft.get(A);if(Dt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(L.FRAMEBUFFER,null),st=!1;else if(Dt.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Dt.__hasExternalTextures)oe.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ee=A.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&Ft.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(zt=!0);const ie=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?K=ie[Z][rt]:K=ie[Z],bt=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?K=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(ie)?K=ie[rt]:K=ie,V.copy(A.viewport),et.copy(A.scissor),lt=A.scissorTest}else V.copy(Ht).multiplyScalar(j).floor(),et.copy(re).multiplyScalar(j).floor(),lt=me;if(rt!==0&&(K=lo),wt.bindFramebuffer(L.FRAMEBUFFER,K)&&st&&wt.drawBuffers(A,K),wt.viewport(V),wt.scissor(et),wt.setScissorTest(lt),bt){const Dt=Ft.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Dt.__webglTexture,rt)}else if(zt){const Dt=Z;for(let Yt=0;Yt<A.textures.length;Yt++){const ie=Ft.get(A.textures[Yt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Yt,ie.__webglTexture,rt,Dt)}}else if(A!==null&&rt!==0){const Dt=Ft.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dt.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(A,Z,rt,st,K,bt,zt,Bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&zt!==void 0&&(Dt=Dt[zt]),Dt){wt.bindFramebuffer(L.FRAMEBUFFER,Dt);try{const Yt=A.textures[Bt],ie=Yt.format,ee=Yt.type;if(!Gt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-st&&rt>=0&&rt<=A.height-K&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(Z,rt,st,K,Kt.convert(ie),Kt.convert(ee),bt))}finally{const Yt=k!==null?Ft.get(k).__webglFramebuffer:null;wt.bindFramebuffer(L.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,rt,st,K,bt,zt,Bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&zt!==void 0&&(Dt=Dt[zt]),Dt)if(Z>=0&&Z<=A.width-st&&rt>=0&&rt<=A.height-K){wt.bindFramebuffer(L.FRAMEBUFFER,Dt);const Yt=A.textures[Bt],ie=Yt.format,ee=Yt.type;if(!Gt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,bt.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Bt),L.readPixels(Z,rt,st,K,Kt.convert(ie),Kt.convert(ee),0);const Oe=k!==null?Ft.get(k).__webglFramebuffer:null;wt.bindFramebuffer(L.FRAMEBUFFER,Oe);const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yE(L,Ke,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,bt),L.deleteBuffer(ve),L.deleteSync(Ke),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,rt=0){const st=Math.pow(2,-rt),K=Math.floor(A.image.width*st),bt=Math.floor(A.image.height*st),zt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;oe.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,rt,0,0,zt,Bt,K,bt),wt.unbindTexture()};const fr=L.createFramebuffer(),Mc=L.createFramebuffer();this.copyTextureToTexture=function(A,Z,rt=null,st=null,K=0,bt=null){bt===null&&(K!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=K,K=0):bt=0);let zt,Bt,Dt,Yt,ie,ee,ve,Oe,Ke;const Ue=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(rt!==null)zt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,Dt=rt.isBox3?rt.max.z-rt.min.z:1,Yt=rt.min.x,ie=rt.min.y,ee=rt.isBox3?rt.min.z:0;else{const sn=Math.pow(2,-K);zt=Math.floor(Ue.width*sn),Bt=Math.floor(Ue.height*sn),A.isDataArrayTexture?Dt=Ue.depth:A.isData3DTexture?Dt=Math.floor(Ue.depth*sn):Dt=1,Yt=0,ie=0,ee=0}st!==null?(ve=st.x,Oe=st.y,Ke=st.z):(ve=0,Oe=0,Ke=0);const Re=Kt.convert(Z.format),ne=Kt.convert(Z.type);let Ne;Z.isData3DTexture?(oe.setTexture3D(Z,0),Ne=L.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Ne=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Ne=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);const ge=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),jn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ce=L.getParameter(L.UNPACK_SKIP_ROWS),Ma=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ee);const We=A.isDataArrayTexture||A.isData3DTexture,Ln=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const sn=Ft.get(A),tn=Ft.get(Z),wn=Ft.get(sn.__renderTarget),Wr=Ft.get(tn.__renderTarget);wt.bindFramebuffer(L.READ_FRAMEBUFFER,wn.__webglFramebuffer),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let Ni=0;Ni<Dt;Ni++)We&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,K,ee+Ni),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(Z).__webglTexture,bt,Ke+Ni)),L.blitFramebuffer(Yt,ie,zt,Bt,ve,Oe,zt,Bt,L.DEPTH_BUFFER_BIT,L.NEAREST);wt.bindFramebuffer(L.READ_FRAMEBUFFER,null),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Ft.has(A)){const sn=Ft.get(A),tn=Ft.get(Z);wt.bindFramebuffer(L.READ_FRAMEBUFFER,fr),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mc);for(let wn=0;wn<Dt;wn++)We?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,K,ee+wn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,K),Ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,bt,Ke+wn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,bt),K!==0?L.blitFramebuffer(Yt,ie,zt,Bt,ve,Oe,zt,Bt,L.COLOR_BUFFER_BIT,L.NEAREST):Ln?L.copyTexSubImage3D(Ne,bt,ve,Oe,Ke+wn,Yt,ie,zt,Bt):L.copyTexSubImage2D(Ne,bt,ve,Oe,Yt,ie,zt,Bt);wt.bindFramebuffer(L.READ_FRAMEBUFFER,null),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ln?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ne,bt,ve,Oe,Ke,zt,Bt,Dt,Re,ne,Ue.data):Z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,bt,ve,Oe,Ke,zt,Bt,Dt,Re,Ue.data):L.texSubImage3D(Ne,bt,ve,Oe,Ke,zt,Bt,Dt,Re,ne,Ue):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,bt,ve,Oe,zt,Bt,Re,ne,Ue.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,bt,ve,Oe,Ue.width,Ue.height,Re,Ue.data):L.texSubImage2D(L.TEXTURE_2D,bt,ve,Oe,zt,Bt,Re,ne,Ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ma),bt===0&&Z.generateMipmaps&&L.generateMipmap(Ne),wt.unbindTexture()},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){G=0,O=0,k=null,wt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(n),a.unpackColorSpace=De._getUnpackColorSpace()}}const XR=o=>{const n=String(o||"");return/^(https?:)?\/\/|^data:/.test(n)?n:`/${n.replace(/^\/+/,"")}`};function kR(o,{photos:n=[],onSelect:a,reducedMotion:s=!1}={}){const u=new VR({antialias:!0,alpha:!0,powerPreference:"high-performance"});u.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<700?1.25:1.6)),u.setClearColor(0,0),u.outputColorSpace=Yn;const f=u.domElement;f.className="gallery-canvas",f.setAttribute("aria-label","Galería fotográfica 3D. Arrastrá para explorar y tocá una foto para ampliarla."),f.setAttribute("role","img"),o.replaceChildren(f);const h=new YE,d=new vi(38,1,.1,100);d.position.set(0,.05,9.4);const _=new al;h.add(_);const g=new ro(1,1,.035),v=new eT,p=new rT,x=new Fe,M=Math.min(4,u.capabilities.getMaxAnisotropy()),b=()=>window.innerWidth<700,C=()=>b()?2.05:2.72,y=()=>b()?2.78:3.42,S=()=>b()?.42:.58,I=[];let P=0,D=0,F=0,G=!1,O=null,k=0,w=0,R=0,V=0;performance.now();let et=0,lt=0,vt=!1,ut=!0;const q=new aT;n.forEach((ft,pt)=>{const _t=new ll({color:1513239,toneMapped:!1}),Lt=new ll({color:16777215,toneMapped:!1}),L=new ll({color:16777215,toneMapped:!1}),Ae=[_t,_t,_t,_t,Lt,L],$t=new Yi(g,Ae);$t.userData.index=pt,$t.userData.photo=ft,_.add($t);const Gt={mesh:$t,materials:Ae,edgeMaterial:_t,frontMaterial:Lt,backMaterial:L,aspect:(ft.width||800)/(ft.height||1e3),loaded:!1,texture:null};I.push(Gt);const wt=XR(ft.thumb||ft.src);v.load(wt,Xt=>{if(vt){Xt.dispose();return}Xt.colorSpace=Yn,Xt.anisotropy=M,Xt.minFilter=nr,Xt.magFilter=wi,Gt.aspect=(Xt.image?.naturalWidth||Xt.image?.width||1)/(Xt.image?.naturalHeight||Xt.image?.height||1),Gt.texture=Xt,Gt.frontMaterial.map=Xt,Gt.backMaterial.map=Xt,Gt.frontMaterial.needsUpdate=!0,Gt.backMaterial.needsUpdate=!0,Gt.loaded=!0},void 0,Xt=>console.error(`[Gallery] No se pudo cargar: ${wt}`,Xt))});const at=()=>{const ft=Math.max(o.clientWidth,1),pt=Math.max(o.clientHeight,1);d.aspect=ft/pt,d.fov=b()?43:38,d.position.z=b()?8.4:9.4,d.updateProjectionMatrix(),u.setPixelRatio(Math.min(window.devicePixelRatio||1,b()?1.25:1.6)),u.setSize(ft,pt,!1),xt()},j=ft=>{const pt=I.length;if(pt<2)return ft-P;let _t=ft-P;return _t=((_t+pt/2)%pt+pt)%pt-pt/2,_t};function xt(){const ft=b()?3.5:5.5;I.forEach((pt,_t)=>{const Lt=j(_t),L=Math.abs(Lt),Ae=Math.max(0,1-L/ft),$t=Math.min(y(),C()/Math.max(pt.aspect,.05)),Gt=$t*Math.max(pt.aspect,.05);pt.mesh.position.set(Lt*S(),0,-Math.min(L,6)*.14),pt.mesh.rotation.y=Xu.clamp(-Lt*1.22,-1.49,1.49);const wt=L<.01?1.1:Math.max(.7,1-L*.045);pt.mesh.scale.set(Gt*wt,$t*wt,1),pt.mesh.renderOrder=Math.round(100-L*10),pt.mesh.visible=Ae>0})}const Mt=ft=>{const pt=f.getBoundingClientRect();return x.set((ft.clientX-pt.left)/pt.width*2-1,-((ft.clientY-pt.top)/pt.height)*2+1),p.setFromCamera(x,d),p.intersectObjects(I.map(_t=>_t.mesh),!1)[0]?.object||null},Ht=ft=>{if(O===null){O=ft.pointerId,G=!0,V=0,k=w=ft.clientX,R=performance.now(),F=0,f.style.cursor="grabbing";try{f.setPointerCapture(ft.pointerId)}catch{}}},re=ft=>{if(!G||ft.pointerId!==O){!G&&ft.pointerType==="mouse"&&(f.style.cursor=Mt(ft)?"pointer":"grab");return}const pt=performance.now(),_t=Math.max(.008,(pt-R)/1e3),Lt=ft.clientX-w;V=Math.max(V,Math.abs(ft.clientX-k));const L=-Lt/(S()*175);D+=L,F=Xu.lerp(F,L/_t,.22),w=ft.clientX,R=pt,xt()},me=ft=>{if(ft.pointerId!==O)return;const pt=ft.type==="pointerup"&&V<8&&performance.now()-R<450;G=!1,O=null,f.style.cursor="grab";try{f.releasePointerCapture(ft.pointerId)}catch{}if(ft.type==="pointercancel"&&(F=0),F=Xu.clamp(F,-2.5,2.5),pt){const _t=Mt(ft);if(_t){const Lt=_t.userData.index,L=j(Lt);Math.abs(L)>.25?(D+=L,F=0):a?.(Lt),xt()}}},z=ft=>{ft.preventDefault();const pt=Math.abs(ft.deltaX)>Math.abs(ft.deltaY)?ft.deltaX:ft.deltaY;D+=Xu.clamp(pt,-60,60)*.005,F=0,performance.now(),xt()};f.addEventListener("pointerdown",Ht),f.addEventListener("pointermove",re),f.addEventListener("pointerup",me),f.addEventListener("pointercancel",me),f.addEventListener("wheel",z,{passive:!1});const ct=()=>{if(et=0,vt||!ut)return;const ft=Math.min(q.getDelta(),.04);G||(D+=F*ft,F*=Math.exp(-ft*3.6),Math.abs(F)<.003&&(F=0));const pt=s?1:1-Math.exp(-ft*13.5);P+=(D-P)*pt,Math.abs(D-P)<5e-4&&(P=D),xt(),u.render(h,d),et=requestAnimationFrame(ct)},Q=()=>{!et&&ut&&!vt&&(et=requestAnimationFrame(ct))},nt=new ResizeObserver(()=>{lt&&cancelAnimationFrame(lt),lt=requestAnimationFrame(()=>{lt=0,at(),Q()})});nt.observe(o);const Et=new IntersectionObserver(([ft])=>{ut=ft.isIntersecting,ut?Q():et&&(cancelAnimationFrame(et),et=0)});return Et.observe(o),at(),Q(),{destroy(){vt=!0,et&&cancelAnimationFrame(et),lt&&cancelAnimationFrame(lt),nt.disconnect(),Et.disconnect(),f.removeEventListener("pointerdown",Ht),f.removeEventListener("pointermove",re),f.removeEventListener("pointerup",me),f.removeEventListener("pointercancel",me),f.removeEventListener("wheel",z),I.forEach(({mesh:ft,materials:pt,texture:_t})=>{_.remove(ft),_t?.dispose(),pt.forEach(Lt=>Lt.dispose())}),g.dispose(),u.dispose(),u.forceContextLoss(),f.remove()}}}function qR({photos:o=[],onSelect:n}){const a=ri.useRef(null),s=ri.useRef(n);return ri.useEffect(()=>{s.current=n},[n]),ri.useEffect(()=>{const u=a.current;if(!u||!o.length)return;const f=kR(u,{photos:o,onSelect:h=>s.current?.(h),reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches});return()=>f.destroy()},[o]),Jt.jsxs("main",{className:"gallery-shell","aria-label":"Galería fotográfica 3D",children:[Jt.jsx("div",{className:"gallery",ref:a}),Jt.jsxs("div",{className:"gallery-hint","aria-hidden":"true",children:[Jt.jsx("span",{children:"ARRASTRÁ PARA EXPLORAR"}),Jt.jsx("span",{children:"·"}),Jt.jsx("span",{children:"CLICK PARA VER"})]})]})}function YR({photo:o,index:n,total:a,onClose:s,onPrevious:u,onNext:f}){return ri.useEffect(()=>{const h=d=>{d.key==="Escape"&&s(),d.key==="ArrowLeft"&&u(),d.key==="ArrowRight"&&f()};return document.addEventListener("keydown",h),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",h),document.body.classList.remove("modal-open")}},[s,u,f]),Jt.jsxs("div",{className:"photo-modal",role:"dialog","aria-modal":"true","aria-label":o.title,children:[Jt.jsx("button",{className:"close-button modal-close",onClick:s,"aria-label":"Cerrar",children:"×"}),Jt.jsx("button",{className:"nav-button nav-left",onClick:u,"aria-label":"Fotografía anterior",children:"←"}),Jt.jsxs("figure",{className:"modal-figure",children:[Jt.jsx("img",{src:o.src,alt:o.alt||o.title}),Jt.jsxs("figcaption",{children:[Jt.jsxs("div",{children:[Jt.jsx("p",{className:"eyebrow",children:o.category}),Jt.jsx("h2",{children:o.title}),Jt.jsxs("p",{children:[o.location," · ",o.year]})]}),Jt.jsxs("span",{className:"photo-counter",children:[String(n+1).padStart(2,"0")," / ",String(a).padStart(2,"0")]})]})]}),Jt.jsx("button",{className:"nav-button nav-right",onClick:f,"aria-label":"Fotografía siguiente",children:"→"})]})}const ir={name:"ND",title:"Niko Defilippi Photography",tagline:"Surf · Lifestyle · Retrato · Marcas",whatsapp:"54 3512894641",instagram:"https://instagram.com/niko_defilippi",email:"nikodefilippi@gmail.com",services:["Sesiones personales","Contenido para marcas","Surf & lifestyle","Eventos y proyectos"]};function WR({onClose:o}){const n=encodeURIComponent("Hola Nico! Vi tu portfolio y me gustaría consultar por una sesión de fotos.");return Jt.jsxs("div",{className:"contact-panel",role:"dialog","aria-modal":"true","aria-label":"Contacto",children:[Jt.jsx("button",{className:"close-button",onClick:o,"aria-label":"Cerrar",children:"×"}),Jt.jsx("p",{className:"eyebrow",children:"TRABAJEMOS JUNTOS"}),Jt.jsx("h2",{children:"¿Tenés un proyecto?"}),Jt.jsx("p",{className:"contact-copy",children:"Fotografía para personas, marcas, surf, lifestyle y proyectos especiales."}),Jt.jsx("div",{className:"services",children:ir.services.map(a=>Jt.jsx("span",{children:a},a))}),Jt.jsxs("div",{className:"contact-links",children:[Jt.jsx("a",{className:"contact-primary",href:`https://wa.me/${ir.whatsapp}?text=${n}`,target:"_blank",rel:"noreferrer",children:"WhatsApp"}),Jt.jsx("a",{href:ir.instagram,target:"_blank",rel:"noreferrer",children:"Instagram"}),Jt.jsx("a",{href:`mailto:${ir.email}`,children:"Email"})]})]})}function jR({onContact:o}){return Jt.jsxs("header",{className:"intro",children:[Jt.jsxs("div",{children:[Jt.jsx("p",{className:"eyebrow",children:"PORTFOLIO"}),Jt.jsx("h1",{children:ir.name}),Jt.jsx("p",{className:"intro-title",children:ir.title})]}),Jt.jsx("div",{className:"intro-actions",children:Jt.jsx("button",{className:"text-button",onClick:o,children:"Contacto"})})]})}const ZR=[{number:2,width:678,height:1024},{number:5,width:683,height:1024},{number:6,width:678,height:1024},{number:10,width:684,height:1024},{number:11,width:684,height:1024},{number:14,width:819,height:1024},{number:1,width:1024,height:683},{number:3,width:1024,height:682},{number:4,width:1024,height:684},{number:7,width:1024,height:689},{number:8,width:1024,height:684},{number:9,width:1024,height:683},{number:12,width:1024,height:684},{number:13,width:1024,height:684},{number:15,width:1024,height:684},{number:16,width:1024,height:684}],KR=ZR.map(({number:o,width:n,height:a})=>{const s=String(o).padStart(2,"0");return{id:`shows-${s}`,src:`/photos/Shows/${s}.webp`,thumb:`/photos/thumb/${s}.webp`,width:n,height:a,title:s,category:"Shows",location:"Brasil",year:"2026",alt:`Fotografía de show ${s}`}}),QR=[],JR=[],Y0=[...KR,...QR,...JR],$R=["Todas","Shows","Comidas","Retratos"];function tC(){const[o,n]=ri.useState(null),[a,s]=ri.useState(!1),[u,f]=ri.useState("Shows"),h=ri.useMemo(()=>u==="Todas"?Y0:Y0.filter(p=>p.category===u),[u]),d=o!==null?h[o]:null,_=ri.useCallback(()=>{n(p=>p===null||h.length===0?p:(p-1+h.length)%h.length)},[h.length]),g=ri.useCallback(()=>{n(p=>p===null||h.length===0?p:(p+1)%h.length)},[h.length]),v=p=>{f(p),n(null)};return ri.useEffect(()=>{const p=x=>{x.key==="Escape"&&(n(null),s(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[]),Jt.jsxs("div",{className:"app",children:[Jt.jsx(jR,{onContact:()=>s(!0)}),Jt.jsx("nav",{className:"category-nav","aria-label":"Galerías",children:Jt.jsx("div",{className:"category-nav-inner",children:$R.map(p=>Jt.jsx("button",{type:"button",className:`category-link ${u===p?"is-active":""}`,onClick:()=>v(p),"aria-pressed":u===p,children:Jt.jsx("span",{children:p})},p))})}),h.length?Jt.jsx(qR,{photos:h,onSelect:p=>n(p)}):Jt.jsx("main",{className:"gallery-shell gallery-empty",children:Jt.jsxs("div",{className:"empty-category",children:[Jt.jsx("span",{className:"eyebrow",children:"PRÓXIMAMENTE"}),Jt.jsx("p",{children:"Estoy preparando esta galería."})]})}),Jt.jsxs("footer",{className:"site-footer",children:[Jt.jsxs("div",{className:"footer-info",children:[Jt.jsx("span",{children:ir.name}),Jt.jsx("span",{children:ir.tagline})]}),Jt.jsxs("div",{className:"footer-right",children:[Jt.jsx("span",{className:"footer-gallery-name",children:u}),Jt.jsx("button",{className:"footer-contact",onClick:()=>s(!0),children:"CONTACTO ↗"})]})]}),d&&Jt.jsx(YR,{photo:d,index:o,total:h.length,onClose:()=>n(null),onPrevious:_,onNext:g}),a&&Jt.jsx(WR,{onClose:()=>s(!1)})]})}mM.createRoot(document.getElementById("root")).render(Jt.jsx(oM.StrictMode,{children:Jt.jsx(tC,{})}));
