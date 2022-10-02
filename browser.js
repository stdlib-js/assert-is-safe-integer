// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var a,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||c.call(e,t)?(a=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=a):e[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&u&&u.call(e,t,r.set),e};function f(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"number"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",m=b()?function(e){var t,r,n,o,i;if(null==e)return s.call(e);r=e[d],i=d,t=null!=(o=e)&&_.call(o,i);try{e[d]=void 0}catch(t){return s.call(e)}return n=s.call(e),t?e[d]=r:delete e[d],n}:function(e){return s.call(e)},v=Number,j=v.prototype.toString,g=b();function S(e){return"object"==typeof e&&(e instanceof v||(g?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function h(e){return p(e)||S(e)}f(h,"isPrimitive",p),f(h,"isObject",S);var O=Math.floor;function w(e){return e>=-9007199254740991&&e<=9007199254740991&&function(e){return O(e)===e}(e)}function P(e){return p(e)&&w(e)}function T(e){return S(e)&&w(e.valueOf())}function x(e){return P(e)||T(e)}f(x,"isPrimitive",P),f(x,"isObject",T),e.default=x,e.isObject=T,e.isPrimitive=P,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isSafeInteger={});
//# sourceMappingURL=browser.js.map
