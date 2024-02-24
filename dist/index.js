"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(N,n){
var f=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/math-base-assert-is-safe-integer/dist');function o(r){return f(r)&&m(r)}n.exports=o
});var s=i(function(d,a){
var b=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/math-base-assert-is-safe-integer/dist');function I(r){return b(r)&&O(r.valueOf())}a.exports=I
});var c=i(function(y,v){
var S=t(),j=s();function p(r){return S(r)||j(r)}v.exports=p
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),x=t(),P=s();q(u,"isPrimitive",x);q(u,"isObject",P);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
