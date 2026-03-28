"use strict";var N=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var s=N(function(g,f){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-log1pf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),E=require('@stdlib/constants-float32-pinf/dist'),o=require('@stdlib/constants-float32-ninf/dist'),O=e(0),t=e(1),u=e(.5),n=e(-1),c=e(e(1)/(1<<28));function p(r){var a,i;return r=e(r),q(r)||r<n||r>t?NaN:r===t?E:r===n?o:(r<O&&(a=!0,r=e(-r)),r<c?a?e(-r):r:(r<u?(i=e(r+r),i=e(u*v(e(i+e(i*e(r/e(t-r))))))):i=e(u*v(e(e(r+r)/e(t-r)))),a?e(-i):i))}f.exports=p
});var F=s();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
