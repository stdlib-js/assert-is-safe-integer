"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(f){throw (e=0, f)}};};var t=i(function(d,n){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,o=require('@stdlib/math-base-assert-is-safe-integer/dist');function b(r){return m(r)&&o(r)}n.exports=b
});var s=i(function(y,a){
var O=require('@stdlib/assert-is-number/dist').isObject,I=require('@stdlib/math-base-assert-is-safe-integer/dist');function S(r){return O(r)&&I(r.valueOf())}a.exports=S
});var c=i(function(R,v){
var j=t(),p=s();function x(r){return j(r)||p(r)}v.exports=x
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),P=t(),g=s();q(u,"isPrimitive",P);q(u,"isObject",g);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
