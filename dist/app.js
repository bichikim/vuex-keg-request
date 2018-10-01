!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("url-join")):"function"==typeof define&&define.amd?define("vuex-keg-request",["url-join"],n):"object"==typeof exports?exports["vuex-keg-request"]=n(require("url-join")):t["vuex-keg-request"]=n(t["url-join"])}(this,function(t){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=47)}([
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_shared */25)("wks"),o=e(/*! ./_uid */14),i=e(/*! ./_global */1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_an-object */3),o=e(/*! ./_ie8-dom-define */35),i=e(/*! ./_to-primitive */27),u=Object.defineProperty;n.f=e(/*! ./_descriptors */5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){t.exports=!e(/*! ./_fails */9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-dp */2),o=e(/*! ./_property-desc */18);t.exports=e(/*! ./_descriptors */5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_global */1),o=e(/*! ./_hide */6),i=e(/*! ./_has */7),u=e(/*! ./_uid */14)("src"),c=Function.toString,f=(""+c).split("toString");e(/*! ./_core */8).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_iobject */37),o=e(/*! ./_defined */28);t.exports=function(t){return r(o(t))}},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=!1},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-keys-internal */36),o=e(/*! ./_enum-bug-keys */30);t.exports=Object.keys||function(t){return r(t,o)}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports={}},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_global */1),o=e(/*! ./_core */8),i=e(/*! ./_hide */6),u=e(/*! ./_redefine */10),c=e(/*! ./_ctx */19),f=function(t,n,e){var s,a,l,p,v=t&f.F,h=t&f.G,y=t&f.S,d=t&f.P,m=t&f.B,b=h?r:y?r[n]||(r[n]={}):(r[n]||{}).prototype,g=h?o:o[n]||(o[n]={}),x=g.prototype||(g.prototype={});for(s in h&&(e=n),e)l=((a=!v&&b&&void 0!==b[s])?b:e)[s],p=m&&a?c(l,r):d&&"function"==typeof l?c(Function.call,l):l,b&&u(b,s,l,t&f.U),g[s]!=l&&i(g,s,p),d&&x[s]!=l&&(x[s]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_a-function */20);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-dp */2).f,o=e(/*! ./_has */7),i=e(/*! ./_wks */0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){n.f={}.propertyIsEnumerable},
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,e){n.exports=t},
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(n){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=r=function(t){return e(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},r(n)}t.exports=r},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_core */8),o=e(/*! ./_global */1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(/*! ./_library */13)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4),o=e(/*! ./_global */1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_shared */25)("keys"),o=e(/*! ./_uid */14);t.exports=function(t){return r[t]||(r[t]=o(t))}},
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){n.f=Object.getOwnPropertySymbols},
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_export */17);r(r.S+r.F,"Object",{assign:e(/*! ./_object-assign */73)})},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_global */1),o=e(/*! ./_core */8),i=e(/*! ./_library */13),u=e(/*! ./_wks-ext */34),c=e(/*! ./_object-dp */2).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){n.f=e(/*! ./_wks */0)},
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){t.exports=!e(/*! ./_descriptors */5)&&!e(/*! ./_fails */9)(function(){return 7!=Object.defineProperty(e(/*! ./_dom-create */26)("div"),"a",{get:function(){return 7}}).a})},
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_has */7),o=e(/*! ./_to-iobject */11),i=e(/*! ./_array-includes */52)(!1),u=e(/*! ./_shared-key */29)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_cof */12);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_to-integer */39),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_an-object */3),o=e(/*! ./_object-dps */55),i=e(/*! ./_enum-bug-keys */30),u=e(/*! ./_shared-key */29)("IE_PROTO"),c=function(){},f=function(){var t,n=e(/*! ./_dom-create */26)("iframe"),r=i.length;for(n.style.display="none",e(/*! ./_html */41).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_global */1).document;t.exports=r&&r.documentElement},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-keys-internal */36),o=e(/*! ./_enum-bug-keys */30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_cof */12),o=e(/*! ./_wks */0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r,o,i,u=e(/*! ./_ctx */19),c=e(/*! ./_invoke */65),f=e(/*! ./_html */41),s=e(/*! ./_dom-create */26),a=e(/*! ./_global */1),l=a.process,p=a.setImmediate,v=a.clearImmediate,h=a.MessageChannel,y=a.Dispatch,d=0,m={},b=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},g=function(t){b.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++d]=function(){c("function"==typeof t?t:Function(t),n)},r(d),d},v=function(t){delete m[t]},"process"==e(/*! ./_cof */12)(l)?r=function(t){l.nextTick(u(b,t,1))}:y&&y.now?r=function(t){y.now(u(b,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(r=function(t){a.postMessage(t+"","*")},a.addEventListener("message",g,!1)):r="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),t.exports={set:p,clear:v}},
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_a-function */20);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_defined */28);t.exports=function(t){return Object(r(t))}},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){t.exports=e(/*! ./src/index.ts */85)},
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){e(/*! ./_wks-define */33)("asyncIterator")},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_global */1),o=e(/*! ./_has */7),i=e(/*! ./_descriptors */5),u=e(/*! ./_export */17),c=e(/*! ./_redefine */10),f=e(/*! ./_meta */50).KEY,s=e(/*! ./_fails */9),a=e(/*! ./_shared */25),l=e(/*! ./_set-to-string-tag */21),p=e(/*! ./_uid */14),v=e(/*! ./_wks */0),h=e(/*! ./_wks-ext */34),y=e(/*! ./_wks-define */33),d=e(/*! ./_enum-keys */51),m=e(/*! ./_is-array */54),b=e(/*! ./_an-object */3),g=e(/*! ./_is-object */4),x=e(/*! ./_to-iobject */11),S=e(/*! ./_to-primitive */27),w=e(/*! ./_property-desc */18),O=e(/*! ./_object-create */40),_=e(/*! ./_object-gopn-ext */56),j=e(/*! ./_object-gopd */57),P=e(/*! ./_object-dp */2),E=e(/*! ./_object-keys */15),T=j.f,k=P.f,M=_.f,A=r.Symbol,L=r.JSON,I=L&&L.stringify,F=v("_hidden"),q=v("toPrimitive"),N={}.propertyIsEnumerable,C=a("symbol-registry"),R=a("symbols"),D=a("op-symbols"),G=Object.prototype,H="function"==typeof A,V=r.QObject,W=!V||!V.prototype||!V.prototype.findChild,B=i&&s(function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=T(G,n);r&&delete G[n],k(t,n,e),r&&t!==G&&k(G,n,r)}:k,J=function(t){var n=R[t]=O(A.prototype);return n._k=t,n},K=H&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},U=function(t,n,e){return t===G&&U(D,n,e),b(t),n=S(n,!0),b(e),o(R,n)?(e.enumerable?(o(t,F)&&t[F][n]&&(t[F][n]=!1),e=O(e,{enumerable:w(0,!1)})):(o(t,F)||k(t,F,w(1,{})),t[F][n]=!0),B(t,n,e)):k(t,n,e)},z=function(t,n){b(t);for(var e,r=d(n=x(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},Y=function(t){var n=N.call(this,t=S(t,!0));return!(this===G&&o(R,t)&&!o(D,t))&&(!(n||!o(this,t)||!o(R,t)||o(this,F)&&this[F][t])||n)},Q=function(t,n){if(t=x(t),n=S(n,!0),t!==G||!o(R,n)||o(D,n)){var e=T(t,n);return!e||!o(R,n)||o(t,F)&&t[F][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=M(x(t)),r=[],i=0;e.length>i;)o(R,n=e[i++])||n==F||n==f||r.push(n);return r},X=function(t){for(var n,e=t===G,r=M(e?D:x(t)),i=[],u=0;r.length>u;)!o(R,n=r[u++])||e&&!o(G,n)||i.push(R[n]);return i};H||(c((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===G&&n.call(D,e),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),B(this,t,w(1,e))};return i&&W&&B(G,t,{configurable:!0,set:n}),J(t)}).prototype,"toString",function(){return this._k}),j.f=Q,P.f=U,e(/*! ./_object-gopn */42).f=_.f=$,e(/*! ./_object-pie */22).f=Y,e(/*! ./_object-gops */31).f=X,i&&!e(/*! ./_library */13)&&c(G,"propertyIsEnumerable",Y,!0),h.f=function(t){return J(v(t))}),u(u.G+u.W+u.F*!H,{Symbol:A});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)v(Z[tt++]);for(var nt=E(v.store),et=0;nt.length>et;)y(nt[et++]);u(u.S+u.F*!H,"Symbol",{for:function(t){return o(C,t+="")?C[t]:C[t]=A(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in C)if(C[n]===t)return n},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!H,"Object",{create:function(t,n){return void 0===n?O(t):z(O(t),n)},defineProperty:U,defineProperties:z,getOwnPropertyDescriptor:Q,getOwnPropertyNames:$,getOwnPropertySymbols:X}),L&&u(u.S+u.F*(!H||s(function(){var t=A();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(g(n)||void 0!==t)&&!K(t))return m(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!K(n))return n}),r[1]=n,I.apply(L,r)}}),A.prototype[q]||e(/*! ./_hide */6)(A.prototype,q,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_uid */14)("meta"),o=e(/*! ./_is-object */4),i=e(/*! ./_has */7),u=e(/*! ./_object-dp */2).f,c=0,f=Object.isExtensible||function(){return!0},s=!e(/*! ./_fails */9)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&f(t)&&!i(t,r)&&a(t),t}}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-keys */15),o=e(/*! ./_object-gops */31),i=e(/*! ./_object-pie */22);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&n.push(u);return n}},
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_to-iobject */11),o=e(/*! ./_to-length */38),i=e(/*! ./_to-absolute-index */53);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_to-integer */39),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_cof */12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-dp */2),o=e(/*! ./_an-object */3),i=e(/*! ./_object-keys */15);t.exports=e(/*! ./_descriptors */5)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_to-iobject */11),o=e(/*! ./_object-gopn */42).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-pie */22),o=e(/*! ./_property-desc */18),i=e(/*! ./_to-iobject */11),u=e(/*! ./_to-primitive */27),c=e(/*! ./_has */7),f=e(/*! ./_ie8-dom-define */35),s=Object.getOwnPropertyDescriptor;n.f=e(/*! ./_descriptors */5)?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r,o,i,u,c=e(/*! ./_library */13),f=e(/*! ./_global */1),s=e(/*! ./_ctx */19),a=e(/*! ./_classof */43),l=e(/*! ./_export */17),p=e(/*! ./_is-object */4),v=e(/*! ./_a-function */20),h=e(/*! ./_an-instance */59),y=e(/*! ./_for-of */60),d=e(/*! ./_species-constructor */64),m=e(/*! ./_task */44).set,b=e(/*! ./_microtask */66)(),g=e(/*! ./_new-promise-capability */45),x=e(/*! ./_perform */67),S=e(/*! ./_user-agent */68),w=e(/*! ./_promise-resolve */69),O=f.TypeError,_=f.process,j=_&&_.versions,P=j&&j.v8||"",E=f.Promise,T="process"==a(_),k=function(){},M=o=g.f,A=!!function(){try{var t=E.resolve(1),n=(t.constructor={})[e(/*! ./_wks */0)("species")]=function(t){t(k,k)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==P.indexOf("6.6")&&-1===S.indexOf("Chrome/66")}catch(t){}}(),L=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},I=function(t,n){if(!t._n){t._n=!0;var e=t._c;b(function(){for(var r=t._v,o=1==t._s,i=0,u=function(n){var e,i,u,c=o?n.ok:n.fail,f=n.resolve,s=n.reject,a=n.domain;try{c?(o||(2==t._h&&N(t),t._h=1),!0===c?e=r:(a&&a.enter(),e=c(r),a&&(a.exit(),u=!0)),e===n.promise?s(O("Promise-chain cycle")):(i=L(e))?i.call(e,f,s):f(e)):s(r)}catch(t){a&&!u&&a.exit(),s(t)}};e.length>i;)u(e[i++]);t._c=[],t._n=!1,n&&!t._h&&F(t)})}},F=function(t){m.call(f,function(){var n,e,r,o=t._v,i=q(t);if(i&&(n=x(function(){T?_.emit("unhandledRejection",o,t):(e=f.onunhandledrejection)?e({promise:t,reason:o}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=T||q(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},q=function(t){return 1!==t._h&&0===(t._a||t._c).length},N=function(t){m.call(f,function(){var n;T?_.emit("rejectionHandled",t):(n=f.onrejectionhandled)&&n({promise:t,reason:t._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},R=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw O("Promise can't be resolved itself");(n=L(t))?b(function(){var r={_w:e,_d:!1};try{n.call(t,s(R,r,1),s(C,r,1))}catch(t){C.call(r,t)}}):(e._v=t,e._s=1,I(e,!1))}catch(t){C.call({_w:e,_d:!1},t)}}};A||(E=function(t){h(this,E,"Promise","_h"),v(t),r.call(this);try{t(s(R,this,1),s(C,this,1))}catch(t){C.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(/*! ./_redefine-all */70)(E.prototype,{then:function(t,n){var e=M(d(this,E));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=T?_.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&I(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(R,t,1),this.reject=s(C,t,1)},g.f=M=function(t){return t===E||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!A,{Promise:E}),e(/*! ./_set-to-string-tag */21)(E,"Promise"),e(/*! ./_set-species */71)("Promise"),u=e(/*! ./_core */8).Promise,l(l.S+l.F*!A,"Promise",{reject:function(t){var n=M(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!A),"Promise",{resolve:function(t){return w(c&&this===u?E:this,t)}}),l(l.S+l.F*!(A&&e(/*! ./_iter-detect */72)(function(t){E.all(t).catch(k)})),"Promise",{all:function(t){var n=this,e=M(n),r=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,u=1;y(t,!1,function(t){var c=i++,f=!1;e.push(void 0),u++,n.resolve(t).then(function(t){f||(f=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=M(n),r=e.reject,o=x(function(){y(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_ctx */19),o=e(/*! ./_iter-call */61),i=e(/*! ./_is-array-iter */62),u=e(/*! ./_an-object */3),c=e(/*! ./_to-length */38),f=e(/*! ./core.get-iterator-method */63),s={},a={};(n=t.exports=function(t,n,e,l,p){var v,h,y,d,m=p?function(){return t}:f(t),b=r(e,l,n?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=c(t.length);v>g;g++)if((d=n?b(u(h=t[g])[0],h[1]):b(t[g]))===s||d===a)return d}else for(y=m.call(t);!(h=y.next()).done;)if((d=o(y,b,h.value,n))===s||d===a)return d}).BREAK=s,n.RETURN=a},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_an-object */3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_iterators */16),o=e(/*! ./_wks */0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_classof */43),o=e(/*! ./_wks */0)("iterator"),i=e(/*! ./_iterators */16);t.exports=e(/*! ./_core */8).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_an-object */3),o=e(/*! ./_a-function */20),i=e(/*! ./_wks */0)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_global */1),o=e(/*! ./_task */44).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,f="process"==e(/*! ./_cof */12)(u);t.exports=function(){var t,n,e,s=function(){var r,o;for(f&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(f)e=function(){u.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var a=c.resolve(void 0);e=function(){a.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_global */1).navigator;t.exports=r&&r.userAgent||""},
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_an-object */3),o=e(/*! ./_is-object */4),i=e(/*! ./_new-promise-capability */45);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_redefine */10);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_global */1),o=e(/*! ./_object-dp */2),i=e(/*! ./_descriptors */5),u=e(/*! ./_wks */0)("species");t.exports=function(t){var n=r[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_wks */0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_object-keys */15),o=e(/*! ./_object-gops */31),i=e(/*! ./_object-pie */22),u=e(/*! ./_to-object */46),c=e(/*! ./_iobject */37),f=Object.assign;t.exports=!f||e(/*! ./_fails */9)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=u(t),f=arguments.length,s=1,a=o.f,l=i.f;f>s;)for(var p,v=c(arguments[s++]),h=a?r(v).concat(a(v)):r(v),y=h.length,d=0;y>d;)l.call(v,p=h[d++])&&(e[p]=v[p]);return e}:f},
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){for(var r=e(/*! ./es6.array.iterator */75),o=e(/*! ./_object-keys */15),i=e(/*! ./_redefine */10),u=e(/*! ./_global */1),c=e(/*! ./_hide */6),f=e(/*! ./_iterators */16),s=e(/*! ./_wks */0),a=s("iterator"),l=s("toStringTag"),p=f.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),y=0;y<h.length;y++){var d,m=h[y],b=v[m],g=u[m],x=g&&g.prototype;if(x&&(x[a]||c(x,a,p),x[l]||c(x,l,m),f[m]=p,b))for(d in r)x[d]||i(x,d,r[d],!0)}},
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_add-to-unscopables */76),o=e(/*! ./_iter-step */77),i=e(/*! ./_iterators */16),u=e(/*! ./_to-iobject */11);t.exports=e(/*! ./_iter-define */78)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_wks */0)("unscopables"),o=Array.prototype;void 0==o[r]&&e(/*! ./_hide */6)(o,r,{}),t.exports=function(t){o[r][t]=!0}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_library */13),o=e(/*! ./_export */17),i=e(/*! ./_redefine */10),u=e(/*! ./_hide */6),c=e(/*! ./_iterators */16),f=e(/*! ./_iter-create */79),s=e(/*! ./_set-to-string-tag */21),a=e(/*! ./_object-gpo */80),l=e(/*! ./_wks */0)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,d,m){f(e,n,h);var b,g,x,S=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",O="values"==y,_=!1,j=t.prototype,P=j[l]||j["@@iterator"]||y&&j[y],E=P||S(y),T=y?O?S("entries"):E:void 0,k="Array"==n&&j.entries||P;if(k&&(x=a(k.call(new t)))!==Object.prototype&&x.next&&(s(x,w,!0),r||"function"==typeof x[l]||u(x,l,v)),O&&P&&"values"!==P.name&&(_=!0,E=function(){return P.call(this)}),r&&!m||!p&&!_&&j[l]||u(j,l,E),c[n]=E,c[w]=v,y)if(b={values:O?E:S("values"),keys:d?E:S("keys"),entries:T},m)for(g in b)g in j||i(j,g,b[g]);else o(o.P+o.F*(p||_),n,b);return b}},
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_object-create */40),o=e(/*! ./_property-desc */18),i=e(/*! ./_set-to-string-tag */21),u={};e(/*! ./_hide */6)(u,e(/*! ./_wks */0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_has */7),o=e(/*! ./_to-object */46),i=e(/*! ./_shared-key */29)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){e(/*! ./_fix-re-wks */82)("split",2,function(t,n,r){"use strict";var o=e(/*! ./_is-regexp */83),i=r,u=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var c=void 0===/()??/.exec("")[1];r=function(t,n){var e=String(this);if(void 0===t&&0===n)return[];if(!o(t))return i.call(e,t,n);var r,f,s,a,l,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,y=void 0===n?4294967295:n>>>0,d=new RegExp(t.source,v+"g");for(c||(r=new RegExp("^"+d.source+"$(?!\\s)",v));(f=d.exec(e))&&!((s=f.index+f[0].length)>h&&(p.push(e.slice(h,f.index)),!c&&f.length>1&&f[0].replace(r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(f[l]=void 0)}),f.length>1&&f.index<e.length&&u.apply(p,f.slice(1)),a=f[0].length,h=s,p.length>=y));)d.lastIndex===f.index&&d.lastIndex++;return h===e.length?!a&&d.test("")||p.push(""):p.push(e.slice(h)),p.length>y?p.slice(0,y):p}}else"0".split(void 0,0).length&&(r=function(t,n){return void 0===t&&0===n?[]:i.call(this,t,n)});return[function(e,o){var i=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,i,o):r.call(String(i),e,o)},r]})},
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_hide */6),o=e(/*! ./_redefine */10),i=e(/*! ./_fails */9),u=e(/*! ./_defined */28),c=e(/*! ./_wks */0);t.exports=function(t,n,e){var f=c(t),s=e(u,f,""[t]),a=s[0],l=s[1];i(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(o(String.prototype,t,a),r(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4),o=e(/*! ./_cof */12),i=e(/*! ./_wks */0)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-dp */2).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(/*! ./_descriptors */5)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},
/*!**********************************!*\
  !*** ./src/index.ts + 3 modules ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/typeof.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "url-join" (<- Module is not an ECMAScript module) */function(t,n,e){"use strict";e.r(n);e(48),e(49),e(58),e(32);var r=e(23),o=e.n(r);e(74);function i(t,n){return"string"==typeof n?n:"function"==typeof n?n(t):""}var u=function(t,n){if(Array.isArray(n)){var e="";return n.forEach(function(n){n&&(e=o()(e,i(t,n)))}),e}return i(t,n)},c=e(24),f=e.n(c),s=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];if(!t)throw new Error("[vuex-keg-request resolve-params] firstArgs must exist");if("string"==typeof t||"function"==typeof t||"object"===f()(t)&&!t.requestInfo){var r=n[0],o=n[1],i=n[2];return Object.assign({requestInfo:t},{params:r,pathParams:o,headers:i})}return t},a=(e(81),e(84),function(){return(a=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)});function l(t,n,e){var r=t.split("@"),o=r[0],i=r[1],u=function(t){return{basePath:t.basePath,requestInfo:function(t,n){return n.requests[t]}(o,t)}};return u(i?function t(n,e,r){var o=n.slice();if(o.length>0){var i=o.shift();if(!r.modules)throw new Error("[vuex-keg-request enterModule] there is no modules any moreis "+n.join("/"));var u=r.modules[i],c=r.basePath,f=u.basePath;return Array.isArray(c)||(c=[c]),Array.isArray(f)||(f=[f]),t(o,e,a({},u,{basePath:c.concat(f)}))}return r}(i.split("/"),n,e):e)}var p=function(t,n,e){if("string"==typeof t)return l(t,n,e);if("object"===f()(t)||"function"==typeof t)return{basePath:e.basePath,requestInfo:t};throw new Error("[vuex-keg-request resolveRequestInfo] requestInfo should be a function, a object or a string")},v=function(){return(v=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},h=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{f(r.next(t))}catch(t){i(t)}}function c(t){try{f(r.throw(t))}catch(t){i(t)}}function f(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,c)}f((r=r.apply(t,n||[])).next())})},y=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},d=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&(e[r[o]]=t[r[o]])}return e};function m(t,n,e){return h(this,void 0,void 0,function(){var r,o,i;return y(this,function(u){switch(u.label){case 0:if(!e)return[2,n];if(!Array.isArray(e))return[3,5];r=n,o=0,i=e,u.label=1;case 1:return o<i.length?[4,(0,i[o])(t,r)]:[3,4];case 2:r=u.sent(),u.label=3;case 3:return o++,[3,1];case 4:return[2,r];case 5:return[2,e(t,n)]}})})}n.default=function(t){var n=this;void 0===t&&(t={});var e=t.requestConfig,r=void 0===e?{requests:{}}:e,i=t.def,c=(void 0===i?{}:i).method,f=void 0===c?"GET":c,a=t.afterHook,l=t.beforeHook,b=t.request;return function(){return function(t){return function(e){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];return h(n,void 0,void 0,function(){var n,c,h,g,x,S,w,O,_,j,P,E,T,k,M,A,L,I,F;return y(this,function(y){switch(y.label){case 0:return n=s.apply(void 0,[e].concat(i)),c=n.requestInfo,h=n.headers,g=n.params,x=n.pathParams,S=p(c,t,r),w=S.basePath,O=S.requestInfo,_=u(t,w),"function"==typeof O?[2,O(_,{params:g,headers:h,method:f})]:(j=O.path,P=void 0===j?"":j,E=O.method,T=void 0===E?f:E,k=O.request,M=o()(_,"function"==typeof P?P(x):P),[4,m(t,{path:M,params:g,headers:h,method:T},l)]);case 1:return A=y.sent(),L=A.path,I=d(A,["path"]),k?[4,k(L,I)]:[3,3];case 2:return F=y.sent(),[3,7];case 3:return b?[4,b(L,I)]:[3,5];case 4:return F=y.sent(),[3,7];case 5:return[4,fetch(L,{body:JSON.stringify(I.params),headers:v({"Content-Type":"application/json"},I.headers),method:I.method})];case 6:F=y.sent(),y.label=7;case 7:return[2,m(t,F,a)]}})})}}}}}])});
//# sourceMappingURL=app.js.map