/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/preloads/extensions-preload.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron-extensions/build/preload.js":
/*!***********************************************************!*\
  !*** ./node_modules/electron-extensions/build/preload.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=__webpack_require__(/*! electron */ "electron")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.WINDOW_ID_NONE=-1,n.WINDOW_ID_CURRENT=-2,n.TAB_ID_NONE=-1,n.PROTOCOL="chrome-extension",n.PROTOCOL_SCHEME=n.PROTOCOL+"://"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(3),r=t(1);(async()=>{location.href.startsWith(r.PROTOCOL_SCHEME)&&process.once("document-start",()=>{o.injectAPI()})})()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(4),r=t(5),i=t(1),c=t(6),a=t(8);class s{get(){}set(){}clear(){}}n.injectAPI=()=>{const e=chrome.runtime.getManifest(),n=Object.assign(Object.assign({},chrome.tabs),{TAB_ID_NONE:i.TAB_ID_NONE,getCurrent:r.ipcInvoker("tabs.getCurrent"),create:r.ipcInvoker("tabs.create"),get:r.ipcInvoker("tabs.get"),remove:r.ipcInvoker("tabs.remove"),getAllInWindow:r.ipcInvoker("tabs.getAllInWindow"),getSelected:r.ipcInvoker("tabs.getSelected"),insertCSS:r.ipcInvoker("tabs.insertCSS"),query:r.ipcInvoker("tabs.query"),reload:r.ipcInvoker("tabs.reload"),update:r.ipcInvoker("tabs.update"),onCreated:new o.IpcEvent("tabs.onCreated"),onRemoved:new o.IpcEvent("tabs.onRemoved"),onUpdated:new o.IpcEvent("tabs.onUpdated"),onActivated:new o.IpcEvent("tabs.onActivated")}),t=Object.assign(Object.assign({},chrome.cookies),{get:r.ipcInvoker("cookies.get"),getAll:r.ipcInvoker("cookies.getAll"),remove:r.ipcInvoker("cookies.remove"),set:r.ipcInvoker("cookies.set"),onChanged:new o.IpcEvent("cookies.onChanged")}),u=Object.assign(Object.assign({},chrome.windows),{WINDOW_ID_NONE:i.WINDOW_ID_NONE,WINDOW_ID_CURRENT:i.WINDOW_ID_CURRENT,get:r.ipcInvoker("windows.get"),getAll:r.ipcInvoker("windows.getAll"),getCurrent:r.ipcInvoker("windows.getCurrent"),getLastFocused:r.ipcInvoker("windows.getLastFocused"),create:r.ipcInvoker("windows.create"),update:r.ipcInvoker("windows.update"),remove:r.ipcInvoker("windows.remove"),onCreated:new o.IpcEvent("windows.onCreated"),onRemoved:new o.IpcEvent("windows.onRemoved"),onFocusChanged:new o.IpcEvent("windows.onFocusChanged")}),d=Object.assign(Object.assign({},chrome.extension),{getViews:()=>[],isAllowedFileSchemeAccess:e=>e&&e(!1),isAllowedIncognitoAccess:e=>e&&e(!1)}),v=Object.assign(Object.assign({},chrome.contextMenus),{onClicked:new o.IpcEvent("contextMenus.onClicked"),create:r.ipcInvoker("contextMenus.create",{noop:!0}),removeAll:r.ipcInvoker("contextMenus.removeAll",{noop:!0}),remove:r.ipcInvoker("contextMenus.remove",{noop:!0})}),l=Object.assign(Object.assign({},chrome.notifications),{create(){},update(){},clear(){},getAll(){},getPermissionLevel(){},onClosed:new o.IpcEvent("notifications.onClosed"),onClicked:new o.IpcEvent("notifications.onClicked"),onButtonClicked:new o.IpcEvent("notifications.onButtonClicked"),onPermissionLevelChanged:new o.IpcEvent("notifications.onPermissionLevelChanged"),onShowSettings:new o.IpcEvent("notifications.onShowSettings")}),p=Object.assign(Object.assign({},chrome.permissions),{onAdded:new o.IpcEvent("permissions.onAdded"),getAll:()=>{}}),f=Object.assign(Object.assign({},chrome.privacy),{network:{networkPredictionEnabled:new s,webRTCIPHandlingPolicy:new s,webRTCMultipleRoutesEnabled:new s,webRTCNonProxiedUdpEnabled:new s},websites:{hyperlinkAuditingEnabled:new s}}),g=Object.assign(Object.assign({},chrome.browserAction),{setBadgeBackgroundColor:r.ipcInvoker("browserAction.setBadgeBackgroundColor",{includeId:!0}),setBadgeText:r.ipcInvoker("browserAction.setBadgeText",{includeId:!0}),setIcon:r.ipcInvoker("browserAction.setIcon",{includeId:!0,serialize:e=>(e.imageData&&(e.imageData instanceof ImageData?e.imageData=a.imageData2base64(e.imageData):e.imageData=Object.entries(e.imageData).reduce((e,n)=>(e[n[0]]=a.imageData2base64(n[1]),e),{})),[e])}),setTitle:r.ipcInvoker("browserAction.setTitle",{includeId:!0}),setPopup:r.ipcInvoker("browserAction.setPopup",{includeId:!0}),onClicked:new o.IpcEvent("browserAction.onClicked")}),b=Object.assign(Object.assign({},chrome.webRequest),{ResourceType:{CSP_REPORT:"csp_report",FONT:"font",IMAGE:"image",MAIN_FRAME:"main_frame",MEDIA:"media",OBJECT:"object",OTHER:"other",PING:"ping",SCRIPT:"script",STYLESHEET:"stylesheet",SUB_FRAME:"sub_frame",WEBSOCKET:"websocket",XMLHTTPREQUEST:"xmlhttprequest"},onBeforeRequest:new c.WebRequestEvent("onBeforeRequest"),onBeforeSendHeaders:new c.WebRequestEvent("onBeforeSendHeaders"),onHeadersReceived:new c.WebRequestEvent("onHeadersReceived"),onSendHeaders:new c.WebRequestEvent("onSendHeaders"),onResponseStarted:new c.WebRequestEvent("onResponseStarted"),onBeforeRedirect:new c.WebRequestEvent("onBeforeRedirect"),onCompleted:new c.WebRequestEvent("onCompleted"),onErrorOccurred:new c.WebRequestEvent("onErrorOccurred"),onAuthRequired:new c.WebRequestEvent("onAuthRequired")}),m=Object.assign(Object.assign({},chrome.webNavigation),{onBeforeNavigate:new o.IpcEvent("webNavigation.onBeforeNavigate"),onCompleted:new o.IpcEvent("webNavigation.onCompleted"),onCreatedNavigationTarget:new o.IpcEvent("webNavigation.onCreatedNavigationTarget"),onCommitted:new o.IpcEvent("webNavigation.onCommitted")});Object.assign(chrome,{tabs:n,cookies:t,windows:u,extension:d,notifications:l,permissions:p,contextMenus:v,webNavigation:m,webRequest:b,privacy:f}),e.browser_action&&(chrome.browserAction=g),chrome.storage&&(chrome.storage.sync=chrome.storage.local),Object.freeze(chrome)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(0);n.IpcEvent=class{constructor(e){this.name=e}addListener(e){o.ipcRenderer.addListener(this.name,(n,...t)=>{e(...t)})}removeListener(e){o.ipcRenderer.removeListener(this.name,e)}}},function(e,n,t){"use strict";var o;Object.defineProperty(n,"__esModule",{value:!0});const r=t(0),i=null===(o=null===chrome||void 0===chrome?void 0:chrome.runtime)||void 0===o?void 0:o.id;n.ipcInvoker=(e,{noop:n,noopValue:t,includeId:o,serialize:c}={})=>async(...a)=>{const s="function"==typeof a[a.length-1]?a.pop():void 0;if(n||void 0!==t)return s&&s(t),t;c&&(a=c(...a)),o&&(a=[i,...a]);const u=await r.ipcRenderer.invoke(e,...a);if(!s)return u;s(u)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(0),r=t(7);n.WebRequestEvent=class{constructor(e){this.callbackIdMap=new Map,this.name=e}addListener(e,n=null){const t=r.randomId();this.callbackIdMap.set(e,t),o.ipcRenderer.on(t,(n,r,i)=>{const c=e(r);o.ipcRenderer.send(`${t}-${i}`,c)}),o.ipcRenderer.send("webRequest.addListener",t,this.name,n)}removeListener(e){if(!this.callbackIdMap.has(e))return;const n=this.callbackIdMap.get(e);o.ipcRenderer.removeAllListeners(n),o.ipcRenderer.send("webRequest.removeListener-"+n)}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(9);n.randomId=()=>o.v4()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.imageData2base64=e=>{const n=document.createElement("canvas"),t=n.getContext("2d");return n.width=e.width,n.height=e.height,t.putImageData(e,0,0),n.toDataURL()}},function(e,n,t){"use strict";t.r(n),t.d(n,"v1",(function(){return p})),t.d(n,"v3",(function(){return O})),t.d(n,"v4",(function(){return y})),t.d(n,"v5",(function(){return C}));var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function i(){if(!o)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}for(var c=[],a=0;a<256;++a)c[a]=(a+256).toString(16).substr(1);var s,u,d=function(e,n){var t=n||0,o=c;return[o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]]].join("")},v=0,l=0;var p=function(e,n,t){var o=n&&t||0,r=n||[],c=(e=e||{}).node||s,a=void 0!==e.clockseq?e.clockseq:u;if(null==c||null==a){var p=e.random||(e.rng||i)();null==c&&(c=s=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==a&&(a=u=16383&(p[6]<<8|p[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:l+1,b=f-v+(g-l)/1e4;if(b<0&&void 0===e.clockseq&&(a=a+1&16383),(b<0||f>v)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=f,l=g,u=a;var m=(1e4*(268435455&(f+=122192928e5))+g)%4294967296;r[o++]=m>>>24&255,r[o++]=m>>>16&255,r[o++]=m>>>8&255,r[o++]=255&m;var w=f/4294967296*1e4&268435455;r[o++]=w>>>8&255,r[o++]=255&w,r[o++]=w>>>24&15|16,r[o++]=w>>>16&255,r[o++]=a>>>8|128,r[o++]=255&a;for(var I=0;I<6;++I)r[o+I]=c[I];return n||d(r)};var f=function(e,n,t){var o=function(e,o,r,i){var c=r&&i||0;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}(e)),"string"==typeof o&&(o=function(e){var n=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){n.push(parseInt(e,16))})),n}(o)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(o)||16!==o.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var a=t(o.concat(e));if(a[6]=15&a[6]|n,a[8]=63&a[8]|128,r)for(var s=0;s<16;++s)r[c+s]=a[s];return r||d(a)};try{o.name=e}catch(e){}return o.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",o};function g(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function b(e,n,t,o,r,i){return g((c=g(g(n,e),g(o,i)))<<(a=r)|c>>>32-a,t);var c,a}function m(e,n,t,o,r,i,c){return b(n&t|~n&o,e,n,r,i,c)}function w(e,n,t,o,r,i,c){return b(n&o|t&~o,e,n,r,i,c)}function I(e,n,t,o,r,i,c){return b(n^t^o,e,n,r,i,c)}function h(e,n,t,o,r,i,c){return b(t^(n|~o),e,n,r,i,c)}var O=f("v3",48,(function(e){if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=new Array(n.length);for(var t=0;t<n.length;t++)e[t]=n.charCodeAt(t)}return function(e){var n,t,o,r=[],i=32*e.length;for(n=0;n<i;n+=8)t=e[n>>5]>>>n%32&255,o=parseInt("0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t),16),r.push(o);return r}(function(e,n){var t,o,r,i,c;e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;var a=1732584193,s=-271733879,u=-1732584194,d=271733878;for(t=0;t<e.length;t+=16)o=a,r=s,i=u,c=d,a=m(a,s,u,d,e[t],7,-680876936),d=m(d,a,s,u,e[t+1],12,-389564586),u=m(u,d,a,s,e[t+2],17,606105819),s=m(s,u,d,a,e[t+3],22,-1044525330),a=m(a,s,u,d,e[t+4],7,-176418897),d=m(d,a,s,u,e[t+5],12,1200080426),u=m(u,d,a,s,e[t+6],17,-1473231341),s=m(s,u,d,a,e[t+7],22,-45705983),a=m(a,s,u,d,e[t+8],7,1770035416),d=m(d,a,s,u,e[t+9],12,-1958414417),u=m(u,d,a,s,e[t+10],17,-42063),s=m(s,u,d,a,e[t+11],22,-1990404162),a=m(a,s,u,d,e[t+12],7,1804603682),d=m(d,a,s,u,e[t+13],12,-40341101),u=m(u,d,a,s,e[t+14],17,-1502002290),s=m(s,u,d,a,e[t+15],22,1236535329),a=w(a,s,u,d,e[t+1],5,-165796510),d=w(d,a,s,u,e[t+6],9,-1069501632),u=w(u,d,a,s,e[t+11],14,643717713),s=w(s,u,d,a,e[t],20,-373897302),a=w(a,s,u,d,e[t+5],5,-701558691),d=w(d,a,s,u,e[t+10],9,38016083),u=w(u,d,a,s,e[t+15],14,-660478335),s=w(s,u,d,a,e[t+4],20,-405537848),a=w(a,s,u,d,e[t+9],5,568446438),d=w(d,a,s,u,e[t+14],9,-1019803690),u=w(u,d,a,s,e[t+3],14,-187363961),s=w(s,u,d,a,e[t+8],20,1163531501),a=w(a,s,u,d,e[t+13],5,-1444681467),d=w(d,a,s,u,e[t+2],9,-51403784),u=w(u,d,a,s,e[t+7],14,1735328473),s=w(s,u,d,a,e[t+12],20,-1926607734),a=I(a,s,u,d,e[t+5],4,-378558),d=I(d,a,s,u,e[t+8],11,-2022574463),u=I(u,d,a,s,e[t+11],16,1839030562),s=I(s,u,d,a,e[t+14],23,-35309556),a=I(a,s,u,d,e[t+1],4,-1530992060),d=I(d,a,s,u,e[t+4],11,1272893353),u=I(u,d,a,s,e[t+7],16,-155497632),s=I(s,u,d,a,e[t+10],23,-1094730640),a=I(a,s,u,d,e[t+13],4,681279174),d=I(d,a,s,u,e[t],11,-358537222),u=I(u,d,a,s,e[t+3],16,-722521979),s=I(s,u,d,a,e[t+6],23,76029189),a=I(a,s,u,d,e[t+9],4,-640364487),d=I(d,a,s,u,e[t+12],11,-421815835),u=I(u,d,a,s,e[t+15],16,530742520),s=I(s,u,d,a,e[t+2],23,-995338651),a=h(a,s,u,d,e[t],6,-198630844),d=h(d,a,s,u,e[t+7],10,1126891415),u=h(u,d,a,s,e[t+14],15,-1416354905),s=h(s,u,d,a,e[t+5],21,-57434055),a=h(a,s,u,d,e[t+12],6,1700485571),d=h(d,a,s,u,e[t+3],10,-1894986606),u=h(u,d,a,s,e[t+10],15,-1051523),s=h(s,u,d,a,e[t+1],21,-2054922799),a=h(a,s,u,d,e[t+8],6,1873313359),d=h(d,a,s,u,e[t+15],10,-30611744),u=h(u,d,a,s,e[t+6],15,-1560198380),s=h(s,u,d,a,e[t+13],21,1309151649),a=h(a,s,u,d,e[t+4],6,-145523070),d=h(d,a,s,u,e[t+11],10,-1120210379),u=h(u,d,a,s,e[t+2],15,718787259),s=h(s,u,d,a,e[t+9],21,-343485551),a=g(a,o),s=g(s,r),u=g(u,i),d=g(d,c);return[a,s,u,d]}(function(e){var n,t=[];for(t[(e.length>>2)-1]=void 0,n=0;n<t.length;n+=1)t[n]=0;var o=8*e.length;for(n=0;n<o;n+=8)t[n>>5]|=(255&e[n/8])<<n%32;return t}(e),8*e.length))}));var y=function(e,n,t){var o=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n)for(var c=0;c<16;++c)n[o+c]=r[c];return n||d(r)};function E(e,n,t,o){switch(e){case 0:return n&t^~n&o;case 1:return n^t^o;case 2:return n&t^n&o^t&o;case 3:return n^t^o}}function R(e,n){return e<<n|e>>>32-n}var C=f("v5",80,(function(e){var n=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var o=unescape(encodeURIComponent(e));e=new Array(o.length);for(var r=0;r<o.length;r++)e[r]=o.charCodeAt(r)}e.push(128);var i=e.length/4+2,c=Math.ceil(i/16),a=new Array(c);for(r=0;r<c;r++){a[r]=new Array(16);for(var s=0;s<16;s++)a[r][s]=e[64*r+4*s]<<24|e[64*r+4*s+1]<<16|e[64*r+4*s+2]<<8|e[64*r+4*s+3]}for(a[c-1][14]=8*(e.length-1)/Math.pow(2,32),a[c-1][14]=Math.floor(a[c-1][14]),a[c-1][15]=8*(e.length-1)&4294967295,r=0;r<c;r++){for(var u=new Array(80),d=0;d<16;d++)u[d]=a[r][d];for(d=16;d<80;d++)u[d]=R(u[d-3]^u[d-8]^u[d-14]^u[d-16],1);var v=t[0],l=t[1],p=t[2],f=t[3],g=t[4];for(d=0;d<80;d++){var b=Math.floor(d/20),m=R(v,5)+E(b,l,p,f)+g+n[b]+u[d]>>>0;g=f,f=p,p=R(l,30)>>>0,l=v,v=m}t[0]=t[0]+v>>>0,t[1]=t[1]+l>>>0,t[2]=t[2]+p>>>0,t[3]=t[3]+f>>>0,t[4]=t[4]+g>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,255&t[0],t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,255&t[1],t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,255&t[2],t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,255&t[3],t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,255&t[4]]}))}]);
//# sourceMappingURL=preload.js.map

/***/ }),

/***/ "./node_modules/electron-extensions/preload.js":
/*!*****************************************************!*\
  !*** ./node_modules/electron-extensions/preload.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./build/preload.js */ "./node_modules/electron-extensions/build/preload.js");


/***/ }),

/***/ "./src/preloads/extensions-preload.ts":
/*!********************************************!*\
  !*** ./src/preloads/extensions-preload.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! electron-extensions/preload */ "./node_modules/electron-extensions/preload.js");


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

/******/ });