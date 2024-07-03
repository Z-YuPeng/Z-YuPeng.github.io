(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function w(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
w("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
w("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function ka(a,b){a.raw=b;return a}
function x(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function la(a){if(!(a instanceof Array)){a=x(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ma(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ma(d,e)&&(a[e]=d[e])}return a};
w("Object.assign",function(a){return a||oa});
var pa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if(typeof Object.setPrototypeOf=="function")ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=ra;
function y(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function xa(){this.A=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.l=0;this.P=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.H=function(a){this.i=a};
function za(a,b){a.j={exception:b,jd:!0};a.h=a.l||a.v}
xa.prototype.return=function(a){this.j={return:a};this.h=this.v};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;c!=void 0&&(a.v=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.jd?a.h=a.l||a.v:b.B!=void 0&&a.v<b.B?(a.h=b.B,a.j=null):a.h=a.v:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ga(a)}a.h.m=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.jd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.m?b=Fa(a,a.h.m.next,b,a.h.H):(a.h.H(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Fa(a,a.h.m["throw"],b,a.h.H):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
w("Reflect",function(a){return a?a:{}});
w("Reflect.construct",function(){return qa});
w("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
w("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.da),reject:g(this.v)}};
b.prototype.da=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.ba(g):this.m(g)}};
b.prototype.ba=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}typeof h=="function"?this.xa(h,g):this.m(g)};
b.prototype.v=function(g){this.H(2,g)};
b.prototype.m=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.P()};
b.prototype.ga=function(){var g=this;e(function(){if(g.W()){var h=fa.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.W=function(){if(this.A)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.P=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.l();g.ac(h.resolve,h.reject)};
b.prototype.xa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(u){try{l(r(u))}catch(v){n(v)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.ac(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ac=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=x(g),n=l.next();!n.done;n=l.next())d(n.value).ac(h,k)})};
b.all=function(g){var h=x(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(u){return function(v){r[u]=v;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).ac(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
w("Object.setPrototypeOf",function(a){return a||wa});
w("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
w("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=x(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ma(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(n.get(k)!=2||n.get(l)!=3)return!1;n.delete(k);n.set(l,4);return!n.has(k)&&n.get(l)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ma(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ma(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)?delete k[g][this.h]:!1};
return b});
w("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&ma(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=x(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(x([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||n.value[1]!="s")return!1;n=l.next();return n.done||n.value[0].x!=4||n.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
w("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
w("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
w("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
w("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
w("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
w("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
w("Set",function(a){function b(c){this.h=new Map;if(c){c=x(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(x([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
w("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
w("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
w("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
w("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
w("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
w("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push(b[d]);return c}});
w("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
w("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
w("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
w("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
w("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
w("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
w("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
w("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push([d,b[d]]);return c}});
w("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Pa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(eb===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=ka(["\x00"],["\\0"]),pb=ka(["\n"],["\\n"]),qb=ka(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.pe=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=typeof a==="string"?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Yb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Zb(a,b){if(b instanceof jb)a.href=kb(b).toString();else{if(Yb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);if(b===void 0)return;a.href=b}a.rel="stylesheet"}
;function $b(a){var b,c;return(a=(c=(b=a.document).querySelector)==null?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ac(a){this.h=a}
ac.prototype.toString=function(){return this.h.toString()};function bc(a){var b=$b(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function cc(a,b){if(b instanceof ac)b=b.h;else throw Error("");a.textContent=b;bc(a)}
function dc(a,b){a.src=kb(b);bc(a)}
;function ec(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function fc(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=hc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ic[c])c=ic[c];else{c=String(c);if(!ic[c]){var f=/function\s+([^\(]+)/m.exec(c);ic[c]=f?f[1]:"[Anonymous]"}c=ic[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function hc(a,b){b||(b={});b[jc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[jc(a)]&&(c+="\nCaused by: ",a.stack&&a.stack.indexOf(a.toString())==0||(c+=typeof a==="string"?a:a.message+"\n"),c+=hc(a,b));return c}
function jc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ic={};function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];(e=uc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(a){this.h=a}
;function zc(a,b,c){this.l=a;this.j=b;this.fields=c||[];this.h=new Map}
m=zc.prototype;m.Ld=function(a){var b=B.apply(1,arguments),c=this.yc(b);c?c.push(new yc(a)):this.xd(a,b)};
m.xd=function(a){var b=this.Sc(B.apply(1,arguments));this.h.set(b,[new yc(a)])};
m.yc=function(){var a=this.Sc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.ce=function(){var a=this.yc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Sc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Ac(a,b){zc.call(this,a,3,b)}
y(Ac,zc);Ac.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.ce(b);d&&(c=d.h);this.xd(c+a,b)};function Bc(a,b){zc.call(this,a,2,b)}
y(Bc,zc);Bc.prototype.record=function(a){this.Ld(a,B.apply(1,arguments))};function Cc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Dc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Dc.apply(null,d):Cc(d)}}
;function G(){this.V=this.V;this.v=this.v}
G.prototype.V=!1;G.prototype.dispose=function(){this.V||(this.V=!0,this.U())};
function Ec(a,b){a.addOnDisposeCallback(Ya(Cc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.V?b!==void 0?a.call(b):a():(this.v||(this.v=[]),this.v.push(b!==void 0?Xa(a,b):a))};
G.prototype.U=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Fc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Fc.prototype.stopPropagation=function(){this.j=!0};
Fc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Gc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Hc=Oa(1,!0),Ic=Oa(610401301,!1),Jc=Oa(188588736,Hc),Kc=Oa(645172343,Hc);function Lc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Mc,Nc=C.navigator;Mc=Nc?Nc.userAgentData||null:null;function Oc(a){return Ic?Mc?Mc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Lc().indexOf(a)!=-1}
;function Pc(){return Ic?!!Mc&&Mc.brands.length>0:!1}
function Qc(){return Pc()?!1:I("Opera")}
function Rc(){return I("Firefox")||I("FxiOS")}
function Sc(){return Pc()?Oc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Pc()?0:I("Edge"))||I("Silk")}
;function Tc(){return Ic?!!Mc&&!!Mc.platform:!1}
function Uc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Vc(a){Vc[" "](a);return a}
Vc[" "]=function(){};var Wc=Qc(),Xc=Pc()?!1:I("Trident")||I("MSIE"),Yc=I("Edge"),Zc=I("Gecko")&&!(Lc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),$c=Lc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");$c&&I("Mobile");Tc()||I("Macintosh");Tc()||I("Windows");(Tc()?Mc.platform==="Linux":I("Linux"))||Tc()||I("CrOS");var ad=Tc()?Mc.platform==="Android":I("Android");Uc();I("iPad");I("iPod");Uc()||I("iPad")||I("iPod");Lc().toLowerCase().indexOf("kaios");function bd(a,b){Fc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(bd,Fc);var cd={2:"touch",3:"pen",4:"mouse"};
bd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Zc){a:{try{Vc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=typeof a.pointerType==="string"?a.pointerType:cd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&bd.Ba.preventDefault.call(this)};
bd.prototype.stopPropagation=function(){bd.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
bd.prototype.preventDefault=function(){bd.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dd="closure_listenable_"+(Math.random()*1E6|0);var ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hc=e;this.key=++ed;this.Qb=this.Zb=!1}
function gd(a){a.Qb=!0;a.listener=null;a.proxy=null;a.src=null;a.hc=null}
;function hd(a){this.src=a;this.listeners={};this.h=0}
hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=id(a,b,d,e);g>-1?(b=a[g],c||(b.Zb=!1)):(b=new fd(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=id(e,b,c,d);return b>-1?(gd(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function jd(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(gd(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qb&&f.listener==b&&f.capture==!!c&&f.hc==d)return e}return-1}
;var kd="closure_lm_"+(Math.random()*1E6|0),ld={},md=0;function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):qd(a,b,c,!1,d,e)}
function qd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=rd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=sd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Gc||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(td(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");md++}}
function sd(){function a(c){return b.call(a.src,a.listener,c)}
var b=ud;return a}
function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):qd(a,b,c,!0,d,e)}
function vd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)vd(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?a.h.remove(String(b),c,d,e):a&&(a=rd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=a>-1?b[a]:null)&&wd(c))}
function wd(a){if(typeof a!=="number"&&a&&!a.Qb){var b=a.src;if(b&&b[dd])jd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(td(c),d):b.addListener&&b.removeListener&&b.removeListener(d);md--;(c=rd(b))?(jd(c,a),c.h==0&&(c.src=null,b[kd]=null)):gd(a)}}}
function td(a){return a in ld?ld[a]:ld[a]="on"+a}
function ud(a,b){if(a.Qb)a=!0;else{b=new bd(b,this);var c=a.listener,d=a.hc||a.src;a.Zb&&wd(a);a=c.call(d,b)}return a}
function rd(a){a=a[kd];return a instanceof hd?a:null}
var xd="__closure_events_fn_"+(Math.random()*1E9>>>0);function pd(a){if(typeof a==="function")return a;a[xd]||(a[xd]=function(b){return a.handleEvent(b)});
return a[xd]}
;function yd(){G.call(this);this.h=new hd(this);this.Za=this;this.ga=null}
$a(yd,G);yd.prototype[dd]=!0;m=yd.prototype;m.addEventListener=function(a,b,c,d){nd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){vd(this,a,b,c,d)};
function zd(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Za;c=b.type||b;typeof b==="string"?b=new Fc(b,a):b instanceof Fc?b.target=b.target||a:(e=b,b=new Fc(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Ad(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ad(g,c,!0,b)&&e,b.j||(e=Ad(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ad(g,c,!1,b)&&e}
m.U=function(){yd.Ba.U.call(this);this.removeAllListeners();this.ga=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,gd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ad(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Qb&&g.capture==c){var h=g.listener,k=g.hc||g.src;g.Zb&&jd(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Bd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Bd.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Cd(a,b){a.l(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Dd(){}
function Ed(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Fd(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
m=Fd.prototype;m.clone=function(){return new Fd(this.x,this.y)};
m.equals=function(a){return a instanceof Fd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Gd(a,b){this.width=a;this.height=b}
m=Gd.prototype;m.clone=function(){return new Gd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Hd(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Id(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Jd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Kd;function Ld(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Id("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Wc;c.Wc=null;e()}};
return function(e){d.next={Wc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Md(a){C.setTimeout(function(){throw a;},0)}
;function Nd(){this.i=this.h=null}
Nd.prototype.add=function(a,b){var c=Od.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Nd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Od=new Bd(function(){return new Pd},function(a){return a.reset()});
function Pd(){this.next=this.scope=this.h=null}
Pd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Pd.prototype.reset=function(){this.next=this.scope=this.h=null};var Qd,Rd=!1,Sd=new Nd;function Td(a,b){Qd||Ud();Rd||(Qd(),Rd=!0);Sd.add(a,b)}
function Ud(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Qd=function(){a.then(Vd)}}else Qd=function(){var b=Vd;
typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(Kd||(Kd=Ld()),Kd(b)):C.setImmediate(b)}}
function Vd(){for(var a;a=Sd.remove();){try{a.h.call(a.scope)}catch(b){Md(b)}Cd(Od,a)}Rd=!1}
;function Wd(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=Dd)try{var b=this;a.call(void 0,function(c){Xd(b,2,c)},function(c){Xd(b,3,c)})}catch(c){Xd(this,3,c)}}
function Yd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Yd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Zd=new Bd(function(){return new Yd},function(a){a.reset()});
function $d(a,b,c){var d=Zd.get();d.i=a;d.h=b;d.context=c;return d}
function ae(a){return new Wd(function(b,c){c(a)})}
Wd.prototype.then=function(a,b,c){return be(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Wd.prototype.$goog_Thenable=!0;m=Wd.prototype;m.qc=function(a,b){return be(this,null,a,b)};
m.catch=Wd.prototype.qc;m.cancel=function(a){if(this.h==0){var b=new ce(a);Td(function(){de(this,b)},this)}};
function de(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?de(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ee(c),fe(c,e,3,b)))}a.j=null}else Xd(a,3,b)}
function ge(a,b){a.i||a.h!=2&&a.h!=3||he(a);a.l?a.l.next=b:a.i=b;a.l=b}
function be(a,b,c,d){var e=$d(null,null,null);e.child=new Wd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ce?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ge(a,e);return e.child}
m.hf=function(a){this.h=0;Xd(this,2,a)};
m.jf=function(a){this.h=0;Xd(this,3,a)};
function Xd(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.hf,f=a.jf;if(d instanceof Wd){ge(d,$d(e||Dd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){ie(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,he(a),b!=3||c instanceof ce||je(a,c))}}
function ie(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function he(a){a.m||(a.m=!0,Td(a.Wd,a))}
function ee(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Wd=function(){for(var a;a=ee(this);)fe(this,a,this.h,this.A);this.m=!1};
function fe(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,ke(b,c,d);else try{b.j?b.i.call(b.context):ke(b,c,d)}catch(e){le.call(null,e)}Cd(Zd,b)}
function ke(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function je(a,b){a.v=!0;Td(function(){a.v&&le.call(null,b)})}
var le=Md;function ce(a){bb.call(this,a)}
$a(ce,bb);ce.prototype.name="cancel";function me(a,b){yd.call(this);this.j=a||1;this.i=b||C;this.l=Xa(this.ef,this);this.m=Za()}
$a(me,yd);m=me.prototype;m.enabled=!1;m.Fa=null;m.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
m.ef=function(){if(this.enabled){var a=Za()-this.m;a>0&&a<this.j*.8?this.Fa=this.i.setTimeout(this.l,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),zd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.l,this.j),this.m=Za())};
m.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
m.U=function(){me.Ba.U.call(this);this.stop();delete this.i};
function ne(a,b,c){if(typeof a==="function")c&&(a=Xa(a,c));else if(a&&typeof a.handleEvent=="function")a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:C.setTimeout(a,b||0)}
;function oe(a){G.call(this);this.H=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new me(this.flushInterval);this.h.listen("tick",this.Aa,!1,this);Ec(this,this.h)}
y(oe,G);m=oe.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function pe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Aa()}
m.Aa=function(){var a=this.i.values();a=[].concat(la(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.m);qe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Ra=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ac(a,b))};
m.Eb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bc(a,b))};
function re(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.Ab=function(a){this.Jd(a,1,B.apply(1,arguments))};
m.Jd=function(a,b){var c=B.apply(2,arguments),d=re(this,a);d&&d instanceof Ac&&(d.i(b,c),pe(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=re(this,a);d&&d instanceof Bc&&(d.record(b,c),pe(this))};
function qe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function se(a){this.h=a;this.h.Ra("/client_streamz/bg/fic",{G:3,F:"ke"})}
function te(a){this.h=a;this.h.Ra("/client_streamz/bg/fiec",{G:3,F:"rk"},{G:3,F:"ke"},{G:2,F:"ec"})}
function ue(a){this.h=a;this.h.Eb("/client_streamz/bg/fil",{G:3,F:"rk"},{G:3,F:"ke"})}
ue.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ve(a){this.h=a;this.h.Ra("/client_streamz/bg/fcc",{G:2,F:"ph"},{G:3,F:"ke"})}
function we(a){this.h=a;this.h.Eb("/client_streamz/bg/fcd",{G:2,F:"ph"},{G:3,F:"ke"})}
we.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function xe(a){this.h=a;this.h.Ra("/client_streamz/bg/fsc",{G:3,F:"rk"},{G:3,F:"ke"})}
function ye(a){this.h=a;this.h.Eb("/client_streamz/bg/fsl",{G:3,F:"rk"},{G:3,F:"ke"})}
ye.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};
function ze(a){this.h=a;this.h.Eb("/client_streamz/bg/wrl",{G:3,F:"mn"},{G:2,F:"ac"},{G:2,F:"sc"},{G:3,F:"rk"},{G:3,F:"mk"})}
ze.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Ae(a){this.h=a;this.h.Eb("/client_streamz/bg/el",{G:3,F:"en"},{G:3,F:"bk"},{G:3,F:"rk"},{G:3,F:"mk"})}
Ae.prototype.record=function(a,b,c,d,e){this.h.record("/client_streamz/bg/el",a,b,c,d,e)};
function Be(a){this.h=a;this.h.Ra("/client_streamz/bg/cec",{G:2,F:"ec"},{G:3,F:"bk"},{G:3,F:"rk"},{G:3,F:"mk"})}
function Ce(a){this.h=a;this.h.Ra("/client_streamz/bg/po/csc",{G:2,F:"cs"},{G:3,F:"rk"},{G:3,F:"mk"})}
function De(a){this.h=a;this.h.Ra("/client_streamz/bg/po/ctav",{G:3,F:"av"},{G:3,F:"rk"},{G:3,F:"mk"})}
function Ee(a){this.h=a;this.h.Ra("/client_streamz/bg/po/cwsc",{G:3,F:"su"},{G:3,F:"rk"},{G:3,F:"mk"})}
;Rc();var Fe=Uc()||I("iPod"),Ge=I("iPad");!I("Android")||Sc()||Rc()||Qc()||I("Silk");Sc();var He=I("Safari")&&!(Sc()||(Pc()?0:I("Coast"))||Qc()||(Pc()?0:I("Edge"))||(Pc()?Oc("Microsoft Edge"):I("Edg/"))||(Pc()?Oc("Opera"):I("OPR"))||Rc()||I("Silk")||I("Android"))&&!(Uc()||I("iPad")||I("iPod"));var Ie={},Je=null;function Ke(a,b){Qa(a);b===void 0&&(b=0);Le();b=Ie[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Me(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Ne(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ne(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Je[l];if(n!=null)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Le();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Le(){if(!Je){Je={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Ie[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Je[f]===void 0&&(Je[f]=e)}}}}
;var Oe=typeof Uint8Array!=="undefined",Pe=!Xc&&typeof btoa==="function";function Qe(a){if(!Pe)return Ke(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Re=/[-_.]/g,Se={"-":"+",_:"/",".":"="};function Te(a){return Se[a]||""}
function Ue(a){return Oe&&a!=null&&a instanceof Uint8Array}
var Ve={};var We;function Xe(a){if(a!==Ve)throw Error("illegal external caller");}
function Ye(a,b){Xe(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Ye.prototype.sizeBytes=function(){Xe(Ve);var a=this.h;if(a!=null&&!Ue(a))if(typeof a==="string")if(Pe){Re.test(a)&&(a=a.replace(Re,Te));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Me(a);else Pa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};function Ze(){return typeof BigInt==="function"}
;var $e=0,af=0;function bf(a){var b=a<0;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=x(cf(c,a)),b=c.next().value,a=c.next().value,c=b);$e=c>>>0;af=a>>>0}
function df(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Ze()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=Math.floor(a/1E7),a%=1E7),c>=1E7&&(b+=Math.floor(c/1E7),c%=1E7),c=b+ef(c)+ef(a));return c}
function ef(a){a=String(a);return"0000000".slice(a.length)+a}
function ff(){var a=$e,b=af;b&2147483648?Ze()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=x(cf(a,b)),a=b.next().value,b=b.next().value,a="-"+df(a,b)):a=df(a,b);return a}
function cf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function gf(a){return Array.prototype.slice.call(a)}
;var hf=typeof Symbol==="function"&&typeof Symbol()==="symbol";function jf(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var kf=jf(),lf=jf("0di"),mf=jf("2ex"),nf=jf("1oa");Math.max.apply(Math,la(Object.values({ug:1,sg:2,rg:4,xg:8,wg:16,vg:32,zf:64,zg:128,qg:256,pg:512,tg:1024,Ef:2048,yg:4096,Ff:8192})));var of=hf?function(a,b){a[kf]|=b}:function(a,b){a.Ua!==void 0?a.Ua|=b:Object.defineProperties(a,{Ua:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function pf(a,b,c){return c?a|b:a&~b}
var qf=hf?function(a){return a[kf]|0}:function(a){return a.Ua|0},rf=hf?function(a){return a[kf]}:function(a){return a.Ua},sf=hf?function(a,b){a[kf]=b;
return a}:function(a,b){a.Ua!==void 0?a.Ua=b:Object.defineProperties(a,{Ua:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function tf(a){of(a,34);return a}
function uf(a,b){sf(b,(a|0)&-14591)}
function vf(a,b){sf(b,(a|34)&-14557)}
function wf(a){a=a>>14&1023;return a===0?536870912:a}
;var xf={},yf={};function zf(a){return!(!a||typeof a!=="object"||a.re!==yf)}
function Af(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Bf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=qf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;sf(a,d|1);return!0}
var Cf,Df=[];sf(Df,55);Cf=Object.freeze(Df);function Ef(a){if(a&2)throw Error();}
function Ff(a,b,c){this.j=0;this.h=a;this.i=b;this.thisArg=c}
Ff.prototype.next=function(){if(this.j<this.h.length){var a=this.h[this.j++];return{done:!1,value:this.i?this.i.call(this.thisArg,a):a}}return{done:!0,value:void 0}};
Ff.prototype[Symbol.iterator]=function(){return new Ff(this.h,this.i,this.thisArg)};
function Gf(){}
Object.freeze(new function(){});
Object.freeze(new Gf);var Hf=Object.freeze(new Gf);var If;function Jf(a){a=Error(a);ec(a,"warning");return a}
;function Kf(a){return a.displayName||a.name||"unknown type name"}
function Lf(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Mf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Nf(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Mf.test(a)}
function Of(a){if(typeof a!=="number")throw Jf("int32");if(!Number.isFinite(a))throw Jf("int32");return a|0}
function Pf(a){return a==null?a:Of(a)}
function Qf(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function Rf(a){if(a!=null){var b=!!b;if(!Nf(a))throw Jf("int64");a=typeof a==="string"?Sf(a):b?Tf(a):Uf(a)}return a}
function Vf(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Uf(a){Nf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){bf(a);var b=$e,c=af;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function Tf(a){Nf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Vf(b)?a=b:(bf(a),a=ff())}return a}
function Sf(a){Nf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));a.indexOf(".");if(!Vf(a)){if(a.length<16)bf(Number(a));else if(Ze())a=BigInt(a),$e=Number(a&BigInt(4294967295))>>>0,af=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");af=$e=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),af*=1E6,$e=$e*1E6+d,$e>=4294967296&&(af+=Math.trunc($e/4294967296),af>>>=0,$e>>>=0);b&&(b=x(cf($e,af)),
a=b.next().value,b=b.next().value,$e=a,af=b)}a=ff()}return a}
function Wf(a){if(typeof a!=="string")throw Error();return a}
function Xf(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Yf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Kf(b)+" but got "+(a&&Kf(a.constructor)));}
function Zf(a,b,c,d){if(a!=null&&typeof a==="object"&&a.Fc===xf)return a;if(!Array.isArray(a))return c?d&2?(a=b[lf])?b=a:(a=new b,tf(a.D),b=b[lf]=a):b=new b:b=void 0,b;var e=c=qf(a);e===0&&(e|=d&32);e|=d&2;e!==c&&sf(a,e);return new b(a)}
;var $f;function ag(a,b){qf(b);$f=b;a=new a(b);$f=void 0;return a}
function J(a,b,c){a==null&&(a=$f);$f=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=qf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Af(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}sf(a,d);return a}
;var bg=function(){try{var a=function(){return qa(Map,[],this.constructor)};
y(a,Map);Vc(new a);return!1}catch(b){return!0}}();
function cg(){this.h=new Map}
m=cg.prototype;m.get=function(a){return this.h.get(a)};
m.set=function(a,b){this.h.set(a,b);this.size=this.h.size;return this};
m.delete=function(a){a=this.h.delete(a);this.size=this.h.size;return a};
m.clear=function(){this.h.clear();this.size=this.h.size};
m.has=function(a){return this.h.has(a)};
m.entries=function(){return this.h.entries()};
m.keys=function(){return this.h.keys()};
m.values=function(){return this.h.values()};
m.forEach=function(a,b){return this.h.forEach(a,b)};
cg.prototype[Symbol.iterator]=function(){return this.entries()};
var dg=function(){function a(){return qa(Map,[],this.constructor)}
if(bg)return Object.setPrototypeOf(cg.prototype,Map.prototype),Object.defineProperties(cg.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),cg;y(a,Map);return a}();
function eg(a){return a}
function fg(a,b,c,d){c=c===void 0?eg:c;d=d===void 0?eg:d;var e=dg.call(this)||this;var f=qf(a);f|=64;sf(a,f);e.Vb=f;e.sc=b;e.Kb=c;e.Pc=e.sc?gg:d;for(var g=0;g<a.length;g++){var h=a[g],k=c(h[0],!1,!0),l=h[1];b?l===void 0&&(l=null):l=d(h[1],!1,!0,void 0,void 0,f);dg.prototype.set.call(e,k,l)}return e}
y(fg,dg);function hg(a){if(a.Vb&2)throw Error("Cannot mutate an immutable Map");}
function ig(a,b){b=b===void 0?jg:b;if(a.size!==0)return kg(a,b)}
function kg(a,b){b=b===void 0?jg:b;var c=[];a=dg.prototype.entries.call(a);for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
m=fg.prototype;m.clear=function(){hg(this);dg.prototype.clear.call(this)};
m.delete=function(a){hg(this);return dg.prototype.delete.call(this,this.Kb(a,!0,!1))};
m.entries=function(){var a=Array.from(dg.prototype.keys.call(this));return new Ff(a,lg,this)};
m.keys=function(){return dg.prototype.keys.call(this)};
m.values=function(){var a=Array.from(dg.prototype.keys.call(this));return new Ff(a,fg.prototype.get,this)};
m.forEach=function(a,b){var c=this;dg.prototype.forEach.call(this,function(d,e){a.call(b,c.get(e),e,c)})};
m.set=function(a,b){hg(this);a=this.Kb(a,!0,!1);return a==null?this:b==null?(dg.prototype.delete.call(this,a),this):dg.prototype.set.call(this,a,this.Pc(b,!0,!0,this.sc,!1,this.Vb))};
m.has=function(a){return dg.prototype.has.call(this,this.Kb(a,!1,!1))};
m.get=function(a){a=this.Kb(a,!1,!1);var b=dg.prototype.get.call(this,a);if(b!==void 0){var c=this.sc;return c?(c=this.Pc(b,!1,!0,c,this.Eg,this.Vb),c!==b&&dg.prototype.set.call(this,a,c),c):b}};
fg.prototype[Symbol.iterator]=function(){return this.entries()};
fg.prototype.toJSON=void 0;fg.prototype.re=yf;function gg(a,b,c,d,e,f){b&&Yf(a,d);a=Zf(a,d,c,f);e&&(a=mg(a));f&2&&qf(a.D);return a}
function jg(a){return a}
function lg(a){return[a,this.get(a)]}
;function ng(a,b){return og(b)}
function og(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Bf(a,void 0,0))return}else{if(Ue(a))return Qe(a);if(a instanceof Ye){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=Qe(b)}if(a instanceof fg)return ig(a)}}return a}
;function pg(a,b,c){a=gf(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function qg(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Bf(a,void 0,0)?void 0:e&&qf(a)&2?a:rg(a,b,c,d!==void 0,e);else if(Af(a)){var f={},g;for(g in a)f[g]=qg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function rg(a,b,c,d,e){var f=d||c?qf(a):0;d=d?!!(f&32):void 0;a=gf(a);for(var g=0;g<a.length;g++)a[g]=qg(a[g],b,c,d,e);c&&c(f,a);return a}
function sg(a){return qg(a,tg,void 0,void 0,!1)}
function tg(a){return a.Fc===xf?a.toJSON():a instanceof fg?ig(a,sg):og(a)}
;function ug(a,b,c){c=c===void 0?vf:c;if(a!=null){if(Oe&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=qf(a);d&2||(b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16))),a=b?sf(a,(d|34)&-12293):rg(a,ug,d&4?vf:c,!0,!0));return a}a.Fc===xf?(c=a.D,d=rf(c),a=d&2?a:ag(a.constructor,vg(c,d,!0))):a instanceof fg&&!(a.Vb&2)&&(c=tf(kg(a,ug)),a=new fg(c,a.sc,a.Kb,a.Pc));return a}}
function vg(a,b,c){var d=c||b&2?vf:uf,e=!!(b&32);a=pg(a,b,function(f){return ug(f,e,d)});
of(a,32|(c?2:0));return a}
function mg(a){var b=a.D,c=rf(b);return c&2?ag(a.constructor,vg(b,c,!1)):a}
;function wg(a,b){a=a.D;return xg(a,rf(a),b)}
function yg(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function xg(a,b,c,d){if(c===-1)return null;var e=wf(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(yg(a,b,e,c)&&mf!=null){var g;a=(g=If)!=null?g:If={};g=a[mf]||0;g>=4||(a[mf]=g+1,g=Error(),ec(g,"incident"),Md(g))}return d}return yg(a,b,e,c)}}
function K(a,b,c){var d=a.D,e=rf(d);Ef(e);zg(d,e,b,c);return a}
function zg(a,b,c,d,e){Af(d);var f=wf(b);if(c>=f||e&&!Kc){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&sf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Ag(a){return Bg(a,Cg,11,!1)!==void 0}
function Dg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Eg(a,b,c){var d=a.D,e=rf(d);Ef(e);if(b==null)return zg(d,e,3),a;if(!Array.isArray(b))throw Jf();var f=qf(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Hf||!1);if(!(4&f))for(f=21,h&&(b=gf(b),g=0,f=Fg(f,e),f=Gg(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=gf(b),g=0,f=Fg(f,e),f=Gg(f,e,!0));f!==g&&sf(b,f);zg(d,e,3,b);return a}
function Hg(a,b,c,d){a=a.D;var e=rf(a);Ef(e);if(d==null){var f=Ig(a);if(Jg(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Ig(a);var g=Jg(f,a,e,c);g!==b&&(g&&(e=zg(a,e,g)),f.set(c,b))}zg(a,e,b,d)}
function Ig(a){if(hf){var b;return(b=a[nf])!=null?b:a[nf]=new Map}if(nf in a)return a[nf];b=new Map;Object.defineProperty(a,nf,{value:b});return b}
function Jg(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];xg(b,c,g)!=null&&(e!==0&&(c=zg(b,c,e)),e=g)}a.set(d,e);return e}
function Bg(a,b,c,d){a=a.D;var e=rf(a),f=xg(a,e,c,d);b=Zf(f,b,!1,e);b!==f&&b!=null&&zg(a,e,c,b,d);return b}
function Kg(a,b,c,d){d=d===void 0?!1:d;b=Bg(a,b,c,d);if(b==null)return b;a=a.D;var e=rf(a);if(!(e&2)){var f=mg(b);f!==b&&(b=f,zg(a,e,c,b,d))}return b}
function Lg(a,b,c,d){d!=null?Yf(d,b):d=void 0;return K(a,c,d)}
function Mg(a,b,c,d){var e=a.D,f=rf(e);Ef(f);if(d==null)return zg(e,f,c),a;if(!Array.isArray(d))throw Jf();for(var g=qf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&(void 0===Hf||!1),p=!0,r=!0,t=0;t<d.length;t++){var u=d[t];Yf(u,b);k||(u=!!(qf(u.D)&2),p&&(p=!u),r&&(r=u))}k||(g=pf(g,5,!0),g=pf(g,8,p),g=pf(g,16,r));if(n||l&&g!==h)d=gf(d),h=0,g=Fg(g,f),g=Gg(g,f,!0);g!==h&&sf(d,g);zg(e,f,c,d);return a}
function Fg(a,b){a=pf(a,2,!!(2&b));a=pf(a,32,!0);return a=pf(a,2048,!1)}
function Gg(a,b,c){32&b&&c||(a=pf(a,32,!1));return a}
function Ng(a,b){a=wg(a,b);var c;a==null?c=a:Nf(a)?typeof a==="number"?c=Uf(a):c=Sf(a):c=void 0;return c}
function Og(a){a=wg(a,1);var b=b===void 0?!1:b;b=a==null?a:Nf(a)?typeof a==="string"?Sf(a):b?Tf(a):Uf(a):void 0;return b}
function Pg(a){var b=0;b=b===void 0?0:b;a=wg(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:b}
function Qg(a,b,c){return K(a,b,Xf(c))}
function Rg(a,b,c){if(c!=null){if(!Number.isFinite(c))throw Jf("enum");c|=0}return K(a,b,c)}
;function Sg(a){return a}
function Tg(a){return a}
function Wg(a,b,c,d){return Xg(a,b,c,d,Yg,Zg)}
function $g(a,b,c,d){return Xg(a,b,c,d,ah,bh)}
function Xg(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,n=0,p=c.length-1;p>=0;p--){var r=c[p];d&&p===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)p=+t,isNaN(p)||(n+=ch(p),h++,p>g&&(g=p));l=e(l,k)+f(h,g,n);t=k;p=h;r=g;for(var u=n,v=c.length-1;v>=0;v--){var z=c[v];if(!(z==null||d&&v===c.length-1&&z===d)){z=v-b;var F=e(z,t)+f(p,r,u);F<l&&(a=1+z,l=F);p++;t--;u+=ch(z);r=Math.max(r,z)}}b=e(0,0)+f(p,r,u);b<l&&(a=0,l=b);if(d){p=h;r=g;u=n;t=k;for(var H in d)d=+H,isNaN(d)||d>=
1024||(p--,t++,u-=H.length,g=e(d,t)+f(p,r,u),g<l&&(a=1+d,l=g))}return a}
function bh(a,b,c){return c+a*3+(a>1?a-1:0)}
function ah(a,b){return(a>1?a-1:0)+(a-b)*4}
function Zg(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Yg(a){return 40+4*a}
function ch(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var dh,eh;function L(a,b,c){this.D=J(a,b,c)}
m=L.prototype;m.toJSON=function(){return fh(this)};
m.serialize=function(a){try{return eh=!0,a&&(dh=a===Tg||a!==Sg&&a!==Wg&&a!==$g?Tg:a),JSON.stringify(fh(this),ng)}finally{a&&(dh=void 0),eh=!1}};
function gh(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");of(b,32);return ag(a,b)}
m.clone=function(){var a=this.D,b=rf(a);return ag(this.constructor,vg(a,b,!1))};
m.Fc=xf;m.toString=function(){try{return eh=!0,fh(this).toString()}finally{eh=!1}};
function fh(a){var b;eh?b=a.D:b=rg(a.D,tg,void 0,void 0,!1);var c=!eh;var d=Jc?void 0:a.constructor.Qa;var e=rf(c?a.D:b);if(a=b.length){var f=b[a-1],g=Af(f);g?a--:f=void 0;var h=+!!(e&512)-1,k=a-h,l=!!dh&&Kc&&!(e&512),n;e=(n=dh)!=null?n:Tg;e=l?e(k,h,b,f):k;k=(n=l&&k!==e)?Array.prototype.slice.call(b,0,a):b;if(g||n){b:{var p=k;var r=f;g={};l=!1;if(n)for(var t=Math.max(0,e+h);t<p.length;t++){var u=p[t],v=t-h;u==null||Bf(u,d,v)||zf(u)&&u.size===0||(p[t]=void 0,g[v]=u,l=!0)}if(r)for(var z in r)if(t=+z,
isNaN(t))g[z]=r[z];else if(u=r[z],Array.isArray(u)&&(Bf(u,d,+z)||zf(u)&&u.size===0)&&(u=null),u==null&&(l=!0),n&&t<e){l=!0;u=t+h;for(v=p.length;v<=u;v++)p.push(void 0);p[u]=r[t]}else u!=null&&(g[z]=u);if(l){for(var F in g){r=g;break b}r=null}}p=r==null?f!=null:r!==f}n&&(a=k.length);for(;a>0;a--){F=a-1;z=k[F];F-=h;if(!(z==null||Bf(z,d,F)||zf(z)&&z.size===0))break;var H=!0}if(k!==b||p||H){if(!n&&!c)k=Array.prototype.slice.call(k,0,a);else if(H||p||r)k.length=a;r&&k.push(r)}H=k}else H=b;return H}
;function hh(a){a.Kg=!0;return a}
;function ih(a){this.D=J(a)}
y(ih,L);ih.Qa=[1,2,3,4];var jh={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function kh(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=lh(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=mh(a,h),d+=mh(a,h+4),e+=mh(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return jh.toString(e)}
function lh(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function mh(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function nh(a){this.D=J(a)}
y(nh,L);var oh=[1,2,3];function ph(a){this.D=J(a)}
y(ph,L);var qh=[1,2,3];function rh(a){this.D=J(a)}
y(rh,L);rh.Qa=[1];function sh(a){this.D=J(a)}
y(sh,L);sh.Qa=[3,6,4];function th(a){this.D=J(a)}
y(th,L);th.Qa=[1];function uh(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function vh(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;t<64;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;t<80;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var u=e[1],v=e[2],z=e[3],F=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var H=z^u&(v^z);var O=1518500249}else H=u^v^z,O=1859775393;else t<60?(H=u&v|z&(u|v),O=2400959708):(H=u^v^z,O=3395469782);H=((p<<5|p>>>27)&4294967295)+H+F+O+r[t]&4294967295;F=z;z=v;v=(u<<30|u>>>2)&4294967295;u=p;p=H}e[0]=e[0]+p&4294967295;e[1]=e[1]+u&4294967295;e[2]=
e[2]+v&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+F&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var t=[],u=0,v=p.length;u<v;++u)t.push(p.charCodeAt(u));p=t}r||(r=p.length);t=0;if(l==0)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,l==64)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=n*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var u=24;u>=0;u-=8)p[r++]=e[t]>>u&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Sd:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function wh(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,xh(uh(d),a,c||null)].join(" "):null}
function xh(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Db(d,function(h){e.push(h)}),yh(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=yh(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function yh(a){var b=vh();b.update(a);return b.Sd().toLowerCase()}
;var zh={};function Ah(a){this.h=a||{cookie:""}}
m=Ah.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Ob:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Le;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ob}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Ob:0,path:b,domain:c});return d};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Bh=new Ah(typeof document=="undefined"?null:document);function Ch(a){return!!zh.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Dh(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ch(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Ah(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Ch(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Eh(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Ah(document)).get(b));return a?wh(a,c,d):null}
function Fh(a,b){b=b===void 0?!1:b;var c=uh(String(C.location.href)),d=[];if(Dh(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Ah(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?wh(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ch(b)&&((b=Eh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Eh("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Gh(a){this.D=J(a)}
y(Gh,L);Gh.Qa=[2];function Hh(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
Hh.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Hh.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Hh.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Hh.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Ih(a){this.D=J(a)}
y(Ih,L);function Jh(a){this.D=J(a)}
y(Jh,L);function Kh(a){this.h=this.i=this.j=a}
Kh.prototype.reset=function(){this.h=this.i=this.j};
Kh.prototype.getValue=function(){return this.i};function Lh(a){this.D=J(a)}
y(Lh,L);Lh.prototype.fc=function(){return Pg(this)};function Mh(a){this.D=J(a)}
y(Mh,L);function Nh(a){this.D=J(a)}
y(Nh,L);function Oh(a,b){Mg(a,Mh,1,b)}
Nh.Qa=[1];function Cg(a){this.D=J(a)}
y(Cg,L);var Ph=["platform","platformVersion","architecture","model","uaFullVersion"],Qh=new Nh,Rh=null;function Sh(a,b){b=b===void 0?Ph:b;if(!Rh){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Mh;f=Qg(f,1,e.brand);return Qg(f,2,e.version)});
Oh(K(Qh,2,Lf(a.mobile)),c);Rh=a.getHighEntropyValues(b)}var d=new Set(b);return Rh.then(function(e){var f=Qh.clone();d.has("platform")&&Qg(f,3,e.platform);d.has("platformVersion")&&Qg(f,4,e.platformVersion);d.has("architecture")&&Qg(f,5,e.architecture);d.has("model")&&Qg(f,6,e.model);d.has("uaFullVersion")&&Qg(f,7,e.uaFullVersion);return f}).catch(function(){return Qh.clone()})}
;function Th(a){this.D=J(a)}
y(Th,L);function Uh(a){this.D=J(a,4)}
y(Uh,L);function Vh(a){this.D=J(a,35)}
y(Vh,L);Vh.Qa=[3,20,27];function Wh(a){this.D=J(a,19)}
y(Wh,L);Wh.prototype.Rb=function(a){return Rg(this,2,a)};
Wh.Qa=[3,5];function Xh(a){this.D=J(a,8)}
y(Xh,L);var Yh=function(a){return function(b){return gh(a,b)}}(Xh);
Xh.Qa=[5,6,7];function Zh(a){this.D=J(a)}
y(Zh,L);var $h;$h=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=Kg;this.defaultValue=void 0}(175237375,Zh);function ai(a){G.call(this);var b=this;this.componentId="";this.j=[];this.da="";this.pageId=null;this.ga=this.W=-1;this.experimentIds=null;this.P=this.m=0;this.ia=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Jb=a.Jb||function(){};
this.i=new bi(a.logSource,a.eb);this.network=a.network;this.yb=a.yb||null;this.bufferSize=1E3;this.A=a.kf||null;this.sessionIndex=a.sessionIndex||null;this.Hb=a.Hb||!1;this.logger=null;this.withCredentials=!a.Zc;this.eb=a.eb||!1;this.H=typeof URLSearchParams!=="undefined"&&!!(new URL(ci())).searchParams&&!!(new URL(ci())).searchParams.set;var c=Rg(new Th,1,1);di(this.i,c);this.l=new Kh(1E4);a=ei(this,a.Tc);this.h=new Hh(this.l.getValue(),a);this.ba=new Hh(6E5,a);this.Hb||this.ba.start();this.eb||
(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.xc()}),document.addEventListener("pagehide",this.xc.bind(this)))}
y(ai,G);function ei(a,b){return a.H?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=ai.prototype;m.U=function(){this.xc();this.h.stop();this.ba.stop();G.prototype.U.call(this)};
m.log=function(a){if(this.H){a=a.clone();var b=this.ia++;a=K(a,21,Rf(b));this.componentId&&Qg(a,26,this.componentId);if(Og(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";K(b,1,Rf(c))}Ng(a,15)==null&&K(a,15,Rf((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Lg(b,Gh,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Hb||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ga>d&&this.W<d)b&&b("throttled");else{this.network&&(typeof this.network.fc==="function"?fi(this.i,this.network.fc()):fi(this.i,0));var e=gi(this.i,this.j,this.m,this.P,this.yb);d={};var f=this.Jb();f&&(d.Authorization=f);this.A||(this.A=ci());try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.da===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Cg:1,td:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=Yh(n)}catch(r){}if(l){k=Number;n="-1";n=n===void 0?"0":n;var p=Og(l);k=k(p!=null?p:n);k>0&&(c.W=Date.now(),c.ga=c.W+k);l=$h.ctor?$h.i(l,$h.ctor,$h.h,!0):$h.i(l,$h.h,null,!0);if(k=l===null?void 0:l)l=-1,l=l===void 0?0:l,k=Qf(wg(k,1)),l=k!=null?k:l,l!==-1&&(c.l=new Kh(l<1?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.P=0};
h=function(k,l){var n=e.D;var p=rf(n),r=p,t=!(2&p),u=!!(2&r);p=u?1:2;t&&(t=!u);u=xg(n,r,3);u=Array.isArray(u)?u:Cf;var v=qf(u),z=!!(4&v);if(!z){var F=v;F===0&&(F=Fg(F,r));F=pf(F,1,!0);v=u;var H=r,O=!!(2&F);O&&(H=pf(H,2,!0));for(var S=!O,da=!0,va=0,P=0;va<v.length;va++){var ea=Zf(v[va],Vh,!1,H);if(ea instanceof Vh){if(!O){var na=!!(qf(ea.D)&2);S&&(S=!na);da&&(da=na)}v[P++]=ea}}P<va&&(v.length=P);F=pf(F,4,!0);F=pf(F,16,da);F=pf(F,8,S);sf(v,F);O&&Object.freeze(v);v=F}if(t&&!(8&v||!u.length&&(p===1||
p===4&&32&v))){Dg(v)&&(u=gf(u),v=Fg(v,r),r=zg(n,r,3,u));t=u;for(F=0;F<t.length;F++)H=t[F],O=mg(H),H!==O&&(t[F]=O);v=pf(v,8,!0);v=pf(v,16,!t.length);sf(t,v)}Dg(v)||(t=v,(F=p===1||p===4&&!!(32&v))?(H=!!(32&v),v=pf(v,!u.length||16&v&&(!z||H)?2:2048,!0)):v=Gg(v,r,!1),v!==t&&sf(u,v),F&&Object.freeze(u));p===2&&Dg(v)&&(u=gf(u),v=Fg(v,r),v=Gg(v,r,!1),sf(u,v),zg(n,r,3,u));n=u;r=Ng(e,14);p=c.l;p.h=Math.min(3E5,p.h*2);p.i=Math.min(3E5,p.h+Math.round((Math.random()-.5)*.2*p.h));c.h.setInterval(c.l.getValue());
k===401&&f&&(c.da=f);r&&(c.m+=r);l===void 0&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Hb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.P};
c.network&&c.network.send(d,g,h)}}}};
m.xc=function(){hi(this.i,!0);this.flush();hi(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function ci(){return"https://play.google.com/log?format=json&hasfast=true"}
function bi(a,b){this.eb=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Wh;Number.isInteger(a)&&this.h.Rb(a);b||(this.locale=document.documentElement.getAttribute("lang"));di(this,new Th)}
bi.prototype.Rb=function(a){this.h.Rb(a);return this};
function di(a,b){Lg(a.h,Th,1,b);Pg(b)||Rg(b,1,1);if(!a.eb){b=ii(a);var c=c===void 0?"":c;var d=wg(b,5);d=d==null||typeof d==="string"?d:void 0;(d!=null?d:c)||Qg(b,5,a.locale)}a.i&&(c=ii(a),Kg(c,Nh,9)||Lg(c,Nh,9,a.i))}
function fi(a,b){Ag(ji(a))&&(a=ki(a),Rg(a,1,b))}
function hi(a,b){Ag(ji(a))&&(a=ki(a),K(a,2,Lf(b)))}
function ji(a){return Kg(a.h,Th,1)}
function li(a){var b=b===void 0?Ph:b;var c=a.eb?void 0:window;c?Sh(c,b).then(function(d){a.i=d;d=ii(a);Lg(d,Nh,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function ii(a){a=ji(a);var b=Kg(a,Cg,11);b||(b=new Cg,Lg(a,Cg,11,b));return b}
function ki(a){a=ii(a);var b=Kg(a,Lh,10);b||(b=new Lh,K(b,2,Lf(!1)),Lg(a,Lh,10,b));return b}
function gi(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(Ag(ji(a))){var h=ki(a);K(h,3,Pf(d))}Ag(ji(a))&&(d=ki(a),K(d,4,Pf(f)));Ag(ji(a))&&(f=ki(a),K(f,5,Pf(g)));a=a.h.clone();g=Date.now().toString();a=K(a,4,Rf(g));b=b.slice();b=Mg(a,Vh,3,b);e&&(a=new Ih,e=K(a,13,Pf(e)),a=new Jh,e=Lg(a,Ih,2,e),a=new Uh,e=Lg(a,Jh,1,e),e=Rg(e,2,9),Lg(b,Uh,18,e));c&&K(b,14,Rf(c));return b}
;function mi(){this.Kd=typeof AbortController!=="undefined"}
mi.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,p,r,t;return A(function(u){switch(u.h){case 1:return f=(e=d.Kd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(u,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.td)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),u.yield(fetch(a.url,g),5);case 5:h=u.i;if(h.status!==200){(k=c)==null||k(h.status);u.B(3);break}if((l=b)==null){u.B(7);break}return u.yield(h.text(),8);case 8:l(u.i);case 7:case 3:u.P=[u.j];u.l=0;u.v=0;clearTimeout(f);Ca(u);break;case 2:n=Ba(u);switch((p=n)==null?void 0:p.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}u.B(3)}})};
mi.prototype.fc=function(){return 4};function ni(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.l=!1;this.network=null;this.componentId="";this.pageId=this.i=this.yb=null}
y(ni,G);ni.prototype.Zc=function(){this.m=!0;return this};
function oi(a){a.network||(a.network=new mi);var b=new ai({logSource:a.logSource,Jb:a.Jb?a.Jb:Fh,sessionIndex:a.sessionIndex,kf:a.j,eb:a.l,Hb:!1,Zc:a.m,Tc:a.Tc,network:a.network});Ec(a,b);if(a.h){var c=a.h,d=ii(b.i);Qg(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.yb&&(b.yb=a.yb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new Gh),c=b.experimentIds,d=d.serialize(),Qg(c,4,d)):b.experimentIds&&K(b.experimentIds,4));li(b.i);a.network.Rb&&a.network.Rb(a.logSource);
a.network.We&&a.network.We(b);return b}
;function pi(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new ni(a,"0"),a.componentId=b,Ec(this,a),c!==""&&(a.j=c),d&&(a.l=!0),e&&(a.h=e),g&&(a.network=g),b=oi(a));this.h=b}
y(pi,G);
pi.prototype.flush=function(a){var b=a||[];if(b.length){a=new th;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new sh;f=Qg(f,1,e.l);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].F);f=Eg(f,g,Wf);g=[];h=[];for(var k=x(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.j;for(var p=e.yc(l)||[],r=[],t=0;t<p.length;t++){var u=p[t],v=u&&u.h;u=new ph;switch(n){case 3:v=Number(v);Number.isFinite(v)&&Hg(u,1,qh,Rf(v));break;case 2:v=Number(v);
if(v!=null&&typeof v!=="number")throw Error("Value of float/double field must be a number, found "+typeof v+": "+v);Hg(u,2,qh,v)}r.push(u)}n=r;for(p=0;p<n.length;p++){r=n[p];t=new rh;r=Lg(t,ph,2,r);t=l;u=[];v=[];for(var z=0;z<e.fields.length;z++)v.push(e.fields[z].G);for(z=0;z<v.length;z++){var F=v[z],H=t[z],O=new nh;switch(F){case 3:Hg(O,1,oh,Xf(String(H)));break;case 2:F=Number(H);Number.isFinite(F)&&Hg(O,2,oh,Pf(F));break;case 1:Hg(O,3,oh,Lf(H==="true"))}u.push(O)}Mg(r,nh,1,u);g.push(r)}}Mg(f,
rh,4,g);c.push(f);e.clear()}Mg(a,sh,1,c);b=this.h;b.H&&(a instanceof Vh?b.log(a):(c=new Vh,a=a.serialize(),a=Qg(c,8,a),b.log(a)));this.h.flush()}};function qi(){}
qi.prototype.serialize=function(a){var b=[];ri(this,a,b);return b.join("")};
function ri(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ri(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),si(d,c),c.push(":"),ri(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":si(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ti={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ui=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function si(a,b){b.push('"',a.replace(ui,function(c){var d=ti[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),ti[c]=d);return d}),'"')}
;function vi(){}
vi.prototype.h=null;vi.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var wi;function xi(){}
$a(xi,vi);wi=new xi;function yi(a){yd.call(this);this.headers=new Map;this.Ga=a||null;this.i=!1;this.P=this.T=null;this.l=this.da="";this.j=this.ba=this.m=this.W=!1;this.H=0;this.A=null;this.xa="";this.ia=!1}
$a(yi,yd);var zi=/^https?$/i,Ai=["POST","PUT"],Bi=[];function Ci(a,b,c,d,e,f,g){var h=new yi;Bi.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Qd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ia=g);h.send(a,c,d,e)}
m=yi.prototype;m.Qd=function(){this.dispose();Ib(Bi,this)};
m.send=function(a,b,c,d){if(this.T)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.T=new XMLHttpRequest;this.P=this.Ga?this.Ga.getOptions():wi.getOptions();this.T.onreadystatechange=Xa(this.nd,this);try{this.getStatus(),this.ba=!0,this.T.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Di(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=x(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Cb(Ai,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=x(c);for(d=b.next();!d.done;d=b.next())c=x(d.value),d=c.next().value,c=c.next().value,this.T.setRequestHeader(d,c);this.xa&&(this.T.responseType=this.xa);"withCredentials"in this.T&&this.T.withCredentials!==this.ia&&(this.T.withCredentials=this.ia);try{Ei(this),this.H>0&&(this.getStatus(),this.A=ne(this.gf,this.H,this)),this.getStatus(),this.m=!0,this.T.send(a),this.m=
!1}catch(g){this.getStatus(),Di(this,g)}};
m.gf=function(){typeof La!="undefined"&&this.T&&(this.l="Timed out after "+this.H+"ms, aborting",this.getStatus(),zd(this,"timeout"),this.abort(8))};
function Di(a,b){a.i=!1;a.T&&(a.j=!0,a.T.abort(),a.j=!1);a.l=b;Fi(a);Gi(a)}
function Fi(a){a.W||(a.W=!0,zd(a,"complete"),zd(a,"error"))}
m.abort=function(){this.T&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.T.abort(),this.j=!1,zd(this,"complete"),zd(this,"abort"),Gi(this))};
m.U=function(){this.T&&(this.i&&(this.i=!1,this.j=!0,this.T.abort(),this.j=!1),Gi(this,!0));yi.Ba.U.call(this)};
m.nd=function(){this.V||(this.ba||this.m||this.j?Hi(this):this.ze())};
m.ze=function(){Hi(this)};
function Hi(a){if(a.i&&typeof La!="undefined")if(a.P[1]&&Ii(a)==4&&a.getStatus()==2)a.getStatus();else if(a.m&&Ii(a)==4)ne(a.nd,0,a);else if(zd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Ji(a))zd(a,"complete"),zd(a,"success");else{try{var b=Ii(a)>2?a.T.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Fi(a)}}finally{Gi(a)}}}
function Gi(a,b){if(a.T){Ei(a);var c=a.T,d=a.P[0]?function(){}:null;
a.T=null;a.P=null;b||zd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Ei(a){a.A&&(C.clearTimeout(a.A),a.A=null)}
m.isActive=function(){return!!this.T};
m.isComplete=function(){return Ii(this)==4};
function Ji(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=nc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!zi.test(a?a.toLowerCase():"");c=b}return c}
function Ii(a){return a.T?a.T.readyState:0}
m.getStatus=function(){try{return Ii(this)>2?this.T.status:-1}catch(a){return-1}};
m.getLastError=function(){return typeof this.l==="string"?this.l:String(this.l)};function Ki(){}
Ki.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Ci(a.url,function(d){d=d.target;if(Ji(d)){try{var e=d.T?d.T.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.td,a.timeoutMillis,a.withCredentials)};
Ki.prototype.fc=function(){return 1};function Li(a,b,c){this.logger=a;this.event=b;if(c===void 0||c)this.h=Mi()}
Li.prototype.start=function(){this.h=Mi()};
Li.prototype.done=function(){this.h!=null&&this.logger.Nb(this.event,Mi()-this.h)};
function Ni(){}
m=Ni.prototype;m.Cc=function(){};
m.Nb=function(){};
m.kd=function(a){return a()};
m.Ha=function(){};
m.Aa=function(){};
function Oi(a,b,c,d){c=c===void 0?"":c;G.call(this);this.Ea=b;this.A=c;this.i=new Map;this.j=new Map;b=new ni(1828,"0");b.h="22";b.network=new Ki;d&&(c=new ih,d=Eg(c,d,Of),b.i=d);this.m=new pi(1828,"","",!1,"",oi(b));this.h=new oe(this.m);this.h.l=1E5;d=this.h;d.flushInterval=3E4;d.h.setInterval(3E4);this.da=new ue(this.h);this.ga=new xe(this.h);this.ia=new ye(this.h);this.ba=new te(this.h);this.H=new ve(this.h);this.P=new we(this.h);this.errorCount=new Be(this.h);this.W=new Ae(this.h);new ze(this.h);
new Ce(this.h);new De(this.h);new Ee(this.h);this.l=a?kh(a):"";a=new se(this.h);this.i.set("h",1);this.i.set("u",2);this.i.set("k",3);this.i.set("P",4);this.i.set("p",5);this.j.set(25,1);this.j.set(26,2);this.j.set(27,3);this.j.set(28,4);a.h.Ab("/client_streamz/bg/fic",this.Ea);Ec(this,this.m);Ec(this,this.h)}
y(Oi,G);m=Oi.prototype;m.Cc=function(){this.ga.h.Ab("/client_streamz/bg/fsc",this.l,this.Ea)};
m.Nb=function(a,b){if(a==="t")this.da.record(b,this.l,this.Ea);else if(a==="n")this.ia.record(b,this.l,this.Ea);else if(a==="h"||a==="u"||a==="k"||a==="P"||a==="p"){if(a=this.i.get(a))this.H.h.Ab("/client_streamz/bg/fcc",a,this.Ea),this.P.record(b,a,this.Ea)}else this.W.record(b,a,"",this.A,this.Ea)};
m.kd=function(a,b){var c=Mi();a=a();this.Nb(b,Mi()-c);return a};
m.Ha=function(a){var b=this.j.get(a);b?this.ba.h.Ab("/client_streamz/bg/fiec",this.l,this.Ea,b):this.errorCount.h.Ab("/client_streamz/bg/cec",a,"",this.A,this.Ea)};
m.Aa=function(){this.h.Aa()};
function Mi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Pi(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Qi(a){function b(p,r,t){Promise.resolve().then(function(){l.done();d.ea.Aa();k.resolve({Nd:p,Ze:r,Qg:t})})}
function c(p,r,t,u){var v="k";r?v="h":t&&(v="u");v!=="k"?u!==0&&d.ea.Nb(v,p):d.h<=0?(d.ea.Nb(v,p),d.h=Math.floor(Math.random()*200)):d.h--}
G.call(this);var d=this;this.h=Math.floor(Math.random()*200);var e=a.program;var f=a.ee;var g=new G;this.addOnDisposeCallback(function(){d.i.then(function(p){p=p.Ze;d.ea.Aa();p==null||p();g.dispose()})});
if(a.Fe!==!1)if(a.ea)this.ea=a.ea;else{var h;Ec(g,this.ea=new Oi(f,(h=a.Ea)!=null?h:"_"))}else this.ea=new Ni;var k=new Pi;this.i=k.promise;var l=new Li(this.ea,"t",!1);if(!C[f])throw this.ea.Ha(25),this.ea.Aa(),Error("EGOU");if(!C[f].a)throw this.ea.Ha(26),this.ea.Aa(),Error("ELIU");try{var n=C[f].a;l.start();this.j=x(n(e,b,!0,a.ah,c)).next().value;this.Ye=k.promise.then(function(){})}catch(p){throw this.ea.Ha(28),this.ea.Aa(),p;
}}
y(Qi,G);Qi.prototype.snapshot=function(a){var b=this;if(this.V)throw Error("Already disposed");this.ea.Cc();return this.i.then(function(c){var d=c.Nd;return new Promise(function(e){var f=new Li(b.ea,"n");d(function(g){f.done();b.ea.Aa();e(g)},[a.Yc,
a.af,a.mf,a.bf])})})};
Qi.prototype.zd=function(a){var b=this;if(this.V)throw Error("Already disposed");this.ea.Cc();var c=this.ea.kd(function(){return b.j([a.Yc,a.af,a.mf,a.bf])},"n");
this.ea.Aa();return c};var Ri=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function Si(a){var b=Ti;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ui(){var a=[];Si(function(b){a.push(b)});
return a}
var Ti={nf:"allow-forms",pf:"allow-modals",qf:"allow-orientation-lock",rf:"allow-pointer-lock",sf:"allow-popups",tf:"allow-popups-to-escape-sandbox",uf:"allow-presentation",vf:"allow-same-origin",wf:"allow-scripts",xf:"allow-top-navigation",yf:"allow-top-navigation-by-user-activation"},Vi=Ed(function(){return Ui()});
function Wi(){var a=Xi(),b={};Db(Vi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Xi(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Yi(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Zi=(new Date).getTime();function $i(){var a=aj;return hh(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;function bj(a){yd.call(this);var b=this;this.A=this.j=0;this.Da=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.l=function(){return A(function(e){return e.yield(cj(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||dj(this)}
y(bj,yd);function ej(){var a=fj;bj.h||(bj.h=new bj(a));return bj.h}
bj.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.qa(this.A);delete bj.h};
bj.prototype.va=function(){return this.i};
function dj(a){a.A=a.Da.pa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.B(3):c.yield(cj(a),3):c.yield(cj(a),3);dj(a);c.h=0})},3E4)}
function cj(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.l=0;h.v=0;a.m=void 0;a.j&&(a.Da.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?zd(a,"networkstatus-online"):zd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function gj(){this.data=[];this.h=-1}
gj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
gj.prototype.get=function(a){return!!this.data[a]};
function hj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function ij(){this.blockSize=-1}
;function jj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(jj,ij);jj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function kj(a,b,c){c||(c=0);var d=a.m;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
jj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(f==0)for(;d<=c;)kj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){kj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){kj(this,e);f=0;break}}this.i=f;this.l+=b}};
jj.prototype.digest=function(){var a=[],b=this.l*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.v[c]=b&255,b/=256;kj(this,this.v);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function lj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function mj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function nj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:lj(a).match(/\S+/g)||[],b=Cb(a,b)>=0);return b}
function oj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):nj(a,"inverted-hdpi")&&mj(a,Array.prototype.filter.call(a.classList?a.classList:lj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function pj(){}
pj.prototype.next=function(){return qj};
var qj={done:!0,value:void 0};pj.prototype.mb=function(){return this};function rj(a){if(a instanceof sj||a instanceof tj||a instanceof uj)return a;if(typeof a.next=="function")return new sj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new sj(function(){return a[Symbol.iterator]()});
if(typeof a.mb=="function")return new sj(function(){return a.mb()});
throw Error("Not an iterator or iterable.");}
function sj(a){this.h=a}
sj.prototype.mb=function(){return new tj(this.h())};
sj.prototype[Symbol.iterator]=function(){return new uj(this.h())};
sj.prototype.i=function(){return new uj(this.h())};
function tj(a){this.h=a}
y(tj,pj);tj.prototype.next=function(){return this.h.next()};
tj.prototype[Symbol.iterator]=function(){return new uj(this.h)};
tj.prototype.i=function(){return new uj(this.h)};
function uj(a){sj.call(this,function(){return a});
this.j=a}
y(uj,sj);uj.prototype.next=function(){return this.j.next()};function M(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
$a(M,G);m=M.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Bb(a)}return!1};
m.Bb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.l!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];vj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.V;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,this.j.length>0&&this.l==0)for(;c=this.j.pop();)this.Bb(c)}}return e!=0}return!1};
function vj(a,b,c){Td(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Bb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.U=function(){M.Ba.U.call(this);this.clear();this.j.length=0};function wj(a){this.h=a}
wj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new qi).serialize(b))};
wj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
wj.prototype.remove=function(a){this.h.remove(a)};function xj(a){this.h=a}
$a(xj,wj);function yj(a){this.data=a}
function zj(a){return a===void 0||a instanceof yj?a:new yj(a)}
xj.prototype.set=function(a,b){xj.Ba.set.call(this,a,zj(b))};
xj.prototype.i=function(a){a=xj.Ba.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
xj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Aj(a){this.h=a}
$a(Aj,xj);Aj.prototype.set=function(a,b,c){if(b=zj(b)){if(c){if(c<Za()){Aj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Aj.Ba.set.call(this,a,b)};
Aj.prototype.i=function(a){var b=Aj.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Aj.prototype.remove.call(this,a);else return b}};function Bj(){}
;function Cj(){}
$a(Cj,Bj);Cj.prototype[Symbol.iterator]=function(){return rj(this.mb(!0)).i()};
Cj.prototype.clear=function(){var a=Array.from(this);a=x(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Dj(a){this.h=a;this.i=null}
$a(Dj,Cj);m=Dj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
m.set=function(a,b){Ej(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){Ej(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){Ej(this);this.h.removeItem(a)};
m.mb=function(a){Ej(this);var b=0,c=this.h,d=new pj;d.next=function(){if(b>=c.length)return qj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
m.clear=function(){Ej(this);this.h.clear()};
m.key=function(a){Ej(this);return this.h.key(a)};
function Ej(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Md(Error("Storage mechanism: Storage unavailable"))}
;function Fj(){var a=null;try{a=C.localStorage||null}catch(b){}Dj.call(this,a)}
$a(Fj,Dj);function Gj(a,b){this.i=a;this.h=b+"::"}
$a(Gj,Cj);Gj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Gj.prototype.get=function(a){return this.i.get(this.h+a)};
Gj.prototype.remove=function(a){this.i.remove(this.h+a)};
Gj.prototype.mb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new pj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Hj=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Nc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ij={nb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
cd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Jj={nb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
cd:function(a){return[].concat.apply([],a)}};
N.Xe=function(){Hj?(N.lb=Uint8Array,N.Ja=Uint16Array,N.Id=Int32Array,N.assign(N,Ij)):(N.lb=Array,N.Ja=Array,N.Id=Array,N.assign(N,Jj))};
N.Xe();var Kj=!0;try{new Uint8Array(1)}catch(a){Kj=!1}
function Lj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Mj={};Mj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Nj={},Oj,Pj=[],Qj=0;Qj<256;Qj++){Oj=Qj;for(var Rj=0;Rj<8;Rj++)Oj=Oj&1?3988292384^Oj>>>1:Oj>>>1;Pj[Qj]=Oj}Nj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Pj[(a^b[d])&255];return a^-1};var Sj={};Sj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Tj(a){for(var b=a.length;--b>=0;)a[b]=0}
var Uj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Vj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Wj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Xj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Yj=Array(576);Tj(Yj);var Zj=Array(60);Tj(Zj);var ak=Array(512);Tj(ak);var bk=Array(256);Tj(bk);var ck=Array(29);Tj(ck);var dk=Array(30);Tj(dk);function ek(a,b,c,d,e){this.Ad=a;this.Zd=b;this.Yd=c;this.Td=d;this.we=e;this.gd=a&&a.length}
var fk,gk,hk;function ik(a,b){this.bd=a;this.vb=0;this.Wa=b}
function jk(a,b){a.Z[a.pending++]=b&255;a.Z[a.pending++]=b>>>8&255}
function kk(a,b,c){a.ja>16-c?(a.oa|=b<<a.ja&65535,jk(a,a.oa),a.oa=b>>16-a.ja,a.ja+=c-16):(a.oa|=b<<a.ja&65535,a.ja+=c)}
function lk(a,b,c){kk(a,c[b*2],c[b*2+1])}
function mk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function nk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=mk(d[e]++,e))}
function ok(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.bb[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ra[512]=1;a.Pa=a.zb=0;a.ya=a.matches=0}
function pk(a){a.ja>8?jk(a,a.oa):a.ja>0&&(a.Z[a.pending++]=a.oa);a.oa=0;a.ja=0}
function qk(a,b,c){pk(a);jk(a,c);jk(a,~c);N.nb(a.Z,a.window,b,c,a.pending);a.pending+=c}
function rk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function sk(a,b,c){for(var d=a.aa[c],e=c<<1;e<=a.Na;){e<a.Na&&rk(b,a.aa[e+1],a.aa[e],a.depth)&&e++;if(rk(b,d,a.aa[e],a.depth))break;a.aa[c]=a.aa[e];c=e;e<<=1}a.aa[c]=d}
function tk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.Z[a.Gb+d*2]<<8|a.Z[a.Gb+d*2+1];var f=a.Z[a.Bc+d];d++;if(e===0)lk(a,f,b);else{var g=bk[f];lk(a,g+256+1,b);var h=Uj[g];h!==0&&(f-=ck[g],kk(a,f,h));e--;g=e<256?ak[e]:ak[256+(e>>>7)];lk(a,g,c);h=Vj[g];h!==0&&(e-=dk[g],kk(a,e,h))}}while(d<a.ya)}lk(a,256,b)}
function uk(a,b){var c=b.bd,d=b.Wa.Ad,e=b.Wa.gd,f=b.Wa.Td,g,h=-1;a.Na=0;a.qb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.aa[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.aa[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Pa--;e&&(a.zb-=d[k*2+1])}b.vb=h;for(g=a.Na>>1;g>=1;g--)sk(a,c,g);k=f;do g=a.aa[1],a.aa[1]=a.aa[a.Na--],sk(a,c,1),d=a.aa[1],a.aa[--a.qb]=g,a.aa[--a.qb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.aa[1]=k++,sk(a,c,1);while(a.Na>=
2);a.aa[--a.qb]=a.aa[1];g=b.bd;k=b.vb;d=b.Wa.Ad;e=b.Wa.gd;f=b.Wa.Zd;var l=b.Wa.Yd,n=b.Wa.we,p,r=0;for(p=0;p<=15;p++)a.Ka[p]=0;g[a.aa[a.qb]*2+1]=0;for(b=a.qb+1;b<573;b++){var t=a.aa[b];p=g[g[t*2+1]*2+1]+1;p>n&&(p=n,r++);g[t*2+1]=p;if(!(t>k)){a.Ka[p]++;var u=0;t>=l&&(u=f[t-l]);var v=g[t*2];a.Pa+=v*(p+u);e&&(a.zb+=v*(d[t*2+1]+u))}}if(r!==0){do{for(p=n-1;a.Ka[p]===0;)p--;a.Ka[p]--;a.Ka[p+1]+=2;a.Ka[n]--;r-=2}while(r>0);for(p=n;p!==0;p--)for(t=a.Ka[p];t!==0;)d=a.aa[--b],d>k||(g[d*2+1]!==p&&(a.Pa+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),t--)}nk(c,h,a.Ka)}
function vk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function wk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do lk(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(lk(a,l,a.ka),g--),lk(a,16,a.ka),kk(a,g-3,2)):g<=10?(lk(a,17,a.ka),kk(a,g-3,3)):(lk(a,18,a.ka),kk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function xk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var yk=!1;function zk(a,b,c){a.Z[a.Gb+a.ya*2]=b>>>8&255;a.Z[a.Gb+a.ya*2+1]=b&255;a.Z[a.Bc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(bk[c]+256+1)*2]++,a.bb[(b<256?ak[b]:ak[256+(b>>>7)])*2]++);return a.ya===a.Mb-1}
;function Ak(a,b){a.msg=Sj[b];return b}
function Bk(a){for(var b=a.length;--b>=0;)a[b]=0}
function Ck(a){var b=a.state,c=b.pending;c>a.R&&(c=a.R);c!==0&&(N.nb(a.output,b.Z,b.Pb,c,a.wb),a.wb+=c,b.Pb+=c,a.Oc+=c,a.R-=c,b.pending-=c,b.pending===0&&(b.Pb=0))}
function Dk(a,b){var c=a.ta>=0?a.ta:-1,d=a.o-a.ta,e=0;if(a.level>0){a.K.wc===2&&(a.K.wc=xk(a));uk(a,a.jc);uk(a,a.dc);vk(a,a.ra,a.jc.vb);vk(a,a.bb,a.dc.vb);uk(a,a.Uc);for(e=18;e>=3&&a.ka[Xj[e]*2+1]===0;e--);a.Pa+=3*(e+1)+14;var f=a.Pa+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)kk(a,b?1:0,3),qk(a,c,d);else if(a.strategy===4||g===f)kk(a,2+(b?1:0),3),tk(a,Yj,Zj);else{kk(a,4+(b?1:0),3);c=a.jc.vb+1;d=a.dc.vb+1;e+=1;kk(a,c-257,5);kk(a,d-1,5);kk(a,e-4,4);for(f=0;f<e;f++)kk(a,a.ka[Xj[f]*
2+1],3);wk(a,a.ra,c-1);wk(a,a.bb,d-1);tk(a,a.ra,a.bb)}ok(a);b&&pk(a);a.ta=a.o;Ck(a.K)}
function R(a,b){a.Z[a.pending++]=b}
function Ek(a,b){a.Z[a.pending++]=b>>>8&255;a.Z[a.pending++]=b&255}
function Fk(a,b){var c=a.ld,d=a.o,e=a.wa,f=a.md,g=a.o>a.ma-262?a.o-(a.ma-262):0,h=a.window,k=a.Xa,l=a.Ia,n=a.o+258,p=h[d+e-1],r=h[d+e];a.wa>=a.ed&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.ub=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.u?e:a.u}
function Gk(a){var b=a.ma,c;do{var d=a.Gd-a.u-a.o;if(a.o>=b+(b-262)){N.nb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.ta-=b;var e=c=a.ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.o+a.u;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,N.nb(c,e.input,e.hb,g,f),e.state.wrap===1?e.J=Mj(e.J,c,g,f):e.state.wrap===2&&(e.J=Nj(e.J,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(a.u+a.sa>=3)for(d=a.o-a.sa,a.M=a.window[d],
a.M=(a.M<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.M=(a.M<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.Xa]=a.head[a.M],a.head[a.M]=d,d++,a.sa--,a.u+a.sa<3););}while(a.u<262&&a.K.na!==0)}
function Hk(a,b){for(var c;;){if(a.u<262){Gk(a);if(a.u<262&&b===0)return 1;if(a.u===0)break}c=0;a.u>=3&&(a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);c!==0&&a.o-c<=a.ma-262&&(a.S=Fk(a,c));if(a.S>=3)if(c=zk(a,a.o-a.ub,a.S-3),a.u-=a.S,a.S<=a.Dc&&a.u>=3){a.S--;do a.o++,a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o;while(--a.S!==0);a.o++}else a.o+=a.S,a.S=0,a.M=a.window[a.o],a.M=(a.M<<a.Ma^a.window[a.o+1])&a.La;else c=zk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Dk(a,!1),a.K.R===0))return 1}a.sa=a.o<2?a.o:2;return b===4?(Dk(a,!0),a.K.R===0?3:4):a.ya&&(Dk(a,!1),a.K.R===0)?1:2}
function Ik(a,b){for(var c,d;;){if(a.u<262){Gk(a);if(a.u<262&&b===0)return 1;if(a.u===0)break}c=0;a.u>=3&&(a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);a.wa=a.S;a.pd=a.ub;a.S=2;c!==0&&a.wa<a.Dc&&a.o-c<=a.ma-262&&(a.S=Fk(a,c),a.S<=5&&(a.strategy===1||a.S===3&&a.o-a.ub>4096)&&(a.S=2));if(a.wa>=3&&a.S<=a.wa){d=a.o+a.u-3;c=zk(a,a.o-1-a.pd,a.wa-3);a.u-=a.wa-1;a.wa-=2;do++a.o<=d&&(a.M=(a.M<<a.Ma^a.window[a.o+3-1])&a.La,a.Ia[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);
while(--a.wa!==0);a.fb=0;a.S=2;a.o++;if(c&&(Dk(a,!1),a.K.R===0))return 1}else if(a.fb){if((c=zk(a,0,a.window[a.o-1]))&&Dk(a,!1),a.o++,a.u--,a.K.R===0)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(zk(a,0,a.window[a.o-1]),a.fb=0);a.sa=a.o<2?a.o:2;return b===4?(Dk(a,!0),a.K.R===0?3:4):a.ya&&(Dk(a,!1),a.K.R===0)?1:2}
function Jk(a,b){for(var c,d,e,f=a.window;;){if(a.u<=258){Gk(a);if(a.u<=258&&b===0)return 1;if(a.u===0)break}a.S=0;if(a.u>=3&&a.o>0&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.S=258-(e-d);a.S>a.u&&(a.S=a.u)}a.S>=3?(c=zk(a,1,a.S-3),a.u-=a.S,a.o+=a.S,a.S=0):(c=zk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Dk(a,!1),a.K.R===0))return 1}a.sa=0;return b===4?(Dk(a,!0),a.K.R===0?3:4):
a.ya&&(Dk(a,!1),a.K.R===0)?1:2}
function Kk(a,b){for(var c;;){if(a.u===0&&(Gk(a),a.u===0)){if(b===0)return 1;break}a.S=0;c=zk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Dk(a,!1),a.K.R===0))return 1}a.sa=0;return b===4?(Dk(a,!0),a.K.R===0?3:4):a.ya&&(Dk(a,!1),a.K.R===0)?1:2}
function Lk(a,b,c,d,e){this.ge=a;this.ue=b;this.ye=c;this.te=d;this.be=e}
var Mk;Mk=[new Lk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.u<=1){Gk(a);if(a.u===0&&b===0)return 1;if(a.u===0)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(a.o===0||a.o>=d)if(a.u=a.o-d,a.o=d,Dk(a,!1),a.K.R===0)return 1;if(a.o-a.ta>=a.ma-262&&(Dk(a,!1),a.K.R===0))return 1}a.sa=0;if(b===4)return Dk(a,!0),a.K.R===0?3:4;a.o>a.ta&&Dk(a,!1);return 1}),
new Lk(4,4,8,4,Hk),new Lk(4,5,16,8,Hk),new Lk(4,6,32,32,Hk),new Lk(4,4,16,16,Ik),new Lk(8,16,32,32,Ik),new Lk(8,16,128,128,Ik),new Lk(8,32,128,256,Ik),new Lk(32,128,258,1024,Ik),new Lk(32,258,258,4096,Ik)];
function Nk(){this.K=null;this.status=0;this.Z=null;this.wrap=this.pending=this.Pb=this.za=0;this.I=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Rc=this.ma=0;this.window=null;this.Gd=0;this.head=this.Ia=null;this.md=this.ed=this.strategy=this.level=this.Dc=this.ld=this.wa=this.u=this.ub=this.o=this.fb=this.pd=this.S=this.ta=this.Ma=this.La=this.zc=this.ic=this.M=0;this.ra=new N.Ja(1146);this.bb=new N.Ja(122);this.ka=new N.Ja(78);Bk(this.ra);Bk(this.bb);Bk(this.ka);this.Uc=this.dc=this.jc=
null;this.Ka=new N.Ja(16);this.aa=new N.Ja(573);Bk(this.aa);this.qb=this.Na=0;this.depth=new N.Ja(573);Bk(this.depth);this.ja=this.oa=this.sa=this.matches=this.zb=this.Pa=this.Gb=this.ya=this.Mb=this.Bc=0}
function Ok(a,b){if(!a||!a.state||b>5||b<0)return a?Ak(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return Ak(a,a.R===0?-5:-2);c.K=a;var d=c.sb;c.sb=b;if(c.status===42)if(c.wrap===2)a.J=0,R(c,31),R(c,139),R(c,8),c.I?(R(c,(c.I.text?1:0)+(c.I.Ta?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),R(c,c.I.time&255),R(c,c.I.time>>8&255),R(c,c.I.time>>16&255),R(c,c.I.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(R(c,c.I.extra.length&255),R(c,c.I.extra.length>>8&255)),c.I.Ta&&(a.J=Nj(a.J,c.Z,c.pending,0)),c.Ca=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Rc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.o!==0&&(e|=32);c.status=113;Ek(c,e+(31-e%31));c.o!==0&&(Ek(c,a.J>>>16),Ek(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ca<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Ta&&c.pending>e&&(a.J=Nj(a.J,c.Z,c.pending-e,e)),Ck(a),e=c.pending,c.pending!==c.za));)R(c,c.I.extra[c.Ca]&255),c.Ca++;c.I.Ta&&c.pending>e&&(a.J=Nj(a.J,c.Z,c.pending-e,e));c.Ca===c.I.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Ta&&c.pending>e&&(a.J=Nj(a.J,c.Z,c.pending-e,e)),Ck(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.I.name.length?c.I.name.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.I.Ta&&c.pending>
e&&(a.J=Nj(a.J,c.Z,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Ta&&c.pending>e&&(a.J=Nj(a.J,c.Z,c.pending-e,e)),Ck(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.I.comment.length?c.I.comment.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.I.Ta&&c.pending>e&&(a.J=Nj(a.J,c.Z,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Ta?(c.pending+2>c.za&&Ck(a),c.pending+2<=c.za&&(R(c,a.J&
255),R(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(Ck(a),a.R===0)return c.sb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Ak(a,-5);if(c.status===666&&a.na!==0)return Ak(a,-5);if(a.na!==0||c.u!==0||b!==0&&c.status!==666){d=c.strategy===2?Kk(c,b):c.strategy===3?Jk(c,b):Mk[c.level].be(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.R===0&&(c.sb=-1),0;if(d===2&&(b===1?(kk(c,2,3),lk(c,256,Yj),c.ja===16?(jk(c,c.oa),c.oa=0,c.ja=0):c.ja>=8&&
(c.Z[c.pending++]=c.oa&255,c.oa>>=8,c.ja-=8)):b!==5&&(kk(c,0,3),qk(c,0,0),b===3&&(Bk(c.head),c.u===0&&(c.o=0,c.ta=0,c.sa=0))),Ck(a),a.R===0))return c.sb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.J&255),R(c,a.J>>8&255),R(c,a.J>>16&255),R(c,a.J>>24&255),R(c,a.kb&255),R(c,a.kb>>8&255),R(c,a.kb>>16&255),R(c,a.kb>>24&255)):(Ek(c,a.J>>>16),Ek(c,a.J&65535));Ck(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Pk={};Pk=function(){this.input=null;this.kb=this.na=this.hb=0;this.output=null;this.Oc=this.R=this.wb=0;this.msg="";this.state=null;this.wc=2;this.J=0};var Qk=Object.prototype.toString;
function Rk(a){if(!(this instanceof Rk))return new Rk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new Pk;this.K.R=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Ak(b,-2);else{e===8&&(e=9);var k=new Nk;b.state=k;k.K=b;k.wrap=h;k.I=null;k.Rc=e;k.ma=1<<k.Rc;k.Xa=k.ma-1;k.zc=f+7;k.ic=1<<k.zc;k.La=k.ic-1;k.Ma=~~((k.zc+3-1)/3);k.window=new N.lb(k.ma*2);k.head=new N.Ja(k.ic);k.Ia=new N.Ja(k.ma);k.Mb=1<<f+6;k.za=k.Mb*4;k.Z=new N.lb(k.za);k.Gb=1*k.Mb;k.Bc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Oc=0;b.wc=2;c=b.state;c.pending=0;c.Pb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.sb=0;if(!yk){d=Array(16);for(f=g=0;f<28;f++)for(ck[f]=g,e=0;e<1<<Uj[f];e++)bk[g++]=f;bk[g-1]=f;for(f=g=0;f<16;f++)for(dk[f]=g,e=0;e<1<<Vj[f];e++)ak[g++]=f;for(g>>=7;f<30;f++)for(dk[f]=g<<7,e=0;e<1<<Vj[f]-7;e++)ak[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Yj[e*2+1]=8,e++,d[8]++;for(;e<=255;)Yj[e*2+1]=9,e++,d[9]++;for(;e<=279;)Yj[e*2+1]=7,e++,d[7]++;for(;e<=287;)Yj[e*2+1]=8,e++,d[8]++;nk(Yj,287,d);for(e=0;e<30;e++)Zj[e*2+1]=5,Zj[e*2]=mk(e,5);fk=new ek(Yj,Uj,257,286,15);gk=new ek(Zj,
Vj,0,30,15);hk=new ek([],Wj,0,19,7);yk=!0}c.jc=new ik(c.ra,fk);c.dc=new ik(c.bb,gk);c.Uc=new ik(c.ka,hk);c.oa=0;c.ja=0;ok(c);c=0}else c=Ak(b,-2);c===0&&(b=b.state,b.Gd=2*b.ma,Bk(b.head),b.Dc=Mk[b.level].ue,b.ed=Mk[b.level].ge,b.md=Mk[b.level].ye,b.ld=Mk[b.level].te,b.o=0,b.ta=0,b.u=0,b.sa=0,b.S=b.wa=2,b.fb=0,b.M=0);b=c}}else b=-2;if(b!==0)throw Error(Sj[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Lj(a.dictionary):
Qk.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.u)b=-2;else{b===1&&(a.J=Mj(a.J,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(Bk(l.head),l.o=0,l.ta=0,l.sa=0),c=new N.lb(l.ma),N.nb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.na;d=a.hb;e=a.input;a.na=g;a.hb=0;a.input=f;for(Gk(l);l.u>=3;){f=l.o;g=l.u-2;do l.M=(l.M<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.Xa]=l.head[l.M],l.head[l.M]=f,f++;while(--g);
l.o=f;l.u=2;Gk(l)}l.o+=l.u;l.ta=l.o;l.sa=l.u;l.u=0;l.S=l.wa=2;l.fb=0;a.hb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Sj[b]);this.Ag=!0}}
Rk.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Lj(a):Qk.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.na=c.input.length;do{c.R===0&&(c.output=new N.lb(d),c.wb=0,c.R=d);a=Ok(c,e);if(a!==1&&a!==0)return Sk(this,a),this.ended=!0,!1;if(c.R===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Nc(c.output,c.wb);b=f;f=f.length;if(f<65537&&(b.subarray&&Kj||!b.subarray))b=
String.fromCharCode.apply(null,N.Nc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Nc(c.output,c.wb),this.chunks.push(b)}while((c.na>0||c.R===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Ak(c,-2):(c.state=null,a=d===113?Ak(c,-3):0)):a=-2,Sk(this,a),this.ended=!0,a===0;e===2&&(Sk(this,0),c.R=0);return!0};
function Sk(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.cd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function Tk(a,b){b=b||{};b.gzip=!0;b=new Rk(b);b.push(a,!0);if(b.err)throw b.msg||Sj[b.err];return b.result}
;function Uk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function Vk(a){return mb(a===null?"null":a===void 0?"undefined":a)}
;function Wk(a){this.name=a}
;var Xk=new Wk("rawColdConfigGroup");var Yk=new Wk("rawHotConfigGroup");function Zk(a){this.D=J(a)}
y(Zk,L);var $k=new Wk("continuationCommand");var al=new Wk("webCommandMetadata");var bl=new Wk("signalServiceEndpoint");var cl={Df:"EMBEDDED_PLAYER_MODE_UNKNOWN",Af:"EMBEDDED_PLAYER_MODE_DEFAULT",Cf:"EMBEDDED_PLAYER_MODE_PFP",Bf:"EMBEDDED_PLAYER_MODE_PFL"};var dl=new Wk("feedbackEndpoint");function el(a){this.D=J(a)}
y(el,L);el.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Ye(a,Ve):We||(We=new Ye(null,Ve));else if(a.constructor!==Ye)if(Ue(a))a=a.length?new Ye(new Uint8Array(a),Ve):We||(We=new Ye(null,Ve));else throw Error();return K(this,1,a)};var aj={fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Hf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Gf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED"};var fl=new Wk("shareEndpoint"),gl=new Wk("shareEntityEndpoint"),hl=new Wk("shareEntityServiceEndpoint"),il=new Wk("webPlayerShareEntityServiceEndpoint");var jl=new Wk("playlistEditEndpoint");var kl=new Wk("modifyChannelNotificationPreferenceEndpoint");var ll=new Wk("unsubscribeEndpoint");var ml=new Wk("subscribeEndpoint");function nl(){var a=ol;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function pl(a){D("yt.ads.biscotti.lastId_",a)}
;function ql(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var rl=C.window,sl,tl,ul=(rl==null?void 0:(sl=rl.yt)==null?void 0:sl.config_)||(rl==null?void 0:(tl=rl.ytcfg)==null?void 0:tl.data_)||{};D("yt.config_",ul);function vl(){ql(ul,arguments)}
function T(a,b){return a in ul?ul[a]:b}
function wl(a){var b=ul.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var xl=[];function yl(a){xl.forEach(function(b){return b(a)})}
function zl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Al(b)}}:a}
function Al(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),vl("ERRORS",b));yl(a)}
function Bl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),vl("ERRORS",f))}
;var Cl=/^[\w.]*$/,Dl={q:!0,search_query:!0};function El(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Fl(f[0]||""),h=Fl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(El);l.args=[{key:n,value:f[1],query:a,method:Gl===p?"unchanged":p}];Dl.hasOwnProperty(n)||Bl(l)}}return c}
var Gl=String(El);function Hl(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Il(a){a.charAt(0)==="?"&&(a=a.substring(1));return El(a,"&")}
function Jl(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Il(a.length>1?a[1]:a[0])):{}}
function Kl(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Il(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function Ll(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)===d&&(Number(nc(4,b))||null)===(Number(nc(4,a))||null):!0;return a}
function Fl(a){return a&&a.match(Cl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Ml(a){var b=Nl;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Ri:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=Ri.screen)==null?void 0:k.height;var l;e.u_w=(l=Ri.screen)==null?void 0:l.width;var n;e.u_ah=(n=Ri.screen)==null?void 0:n.availHeight;var p;e.u_aw=
(p=Ri.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=Ri.screen)==null?void 0:r.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var u=h.screenY}catch(Ma){}try{var v=h.outerWidth;var z=h.outerHeight}catch(Ma){}try{var F=h.innerWidth;var H=h.innerHeight}catch(Ma){}try{var O=h.screenLeft;var S=h.screenTop}catch(Ma){}try{F=h.innerWidth,H=h.innerHeight}catch(Ma){}try{var da=h.screen.availWidth;var va=h.screen.availTop}catch(Ma){}t=[O,S,t,u,da,va,v,z,F,H];try{var P=(b.h.top||window).document,ea=P.compatMode==
"CSS1Compat"?P.documentElement:P.body;var na=(new Gd(ea.clientWidth,ea.clientHeight)).round()}catch(Ma){na=new Gd(-12245933,-12245933)}P=na;na={};var Na=Na===void 0?C:Na;ea=new gj;"SVGElement"in Na&&"createElementNS"in Na.document&&ea.set(0);u=Wi();u["allow-top-navigation-by-user-activation"]&&ea.set(1);u["allow-popups-to-escape-sandbox"]&&ea.set(2);Na.crypto&&Na.crypto.subtle&&ea.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&ea.set(4);Na=hj(ea);na.bc=Na;na.bih=P.height;na.biw=P.width;na.brdim=t.join();
b=b.i;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!Ri.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Nl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Hl(Ml(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var Ol="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Pl(){if(!Ol)return null;var a=Ol();return"open"in a?a:null}
function Ql(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Rl(a,b){typeof a==="function"&&(a=zl(a));return window.setTimeout(a,b)}
;var Sl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(la(Sl),["client_dev_set_cookie"]);function U(a){a=Tl(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Ul(a,b){a=Tl(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Tl(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Vl(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=x(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});d=x(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Wl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Xl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(la(Sl)),Yl=!1;
function Zl(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&zl(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Pl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=$l(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=am(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){Bl(p)}}l.send(d);return l}
function am(a,b){b=b===void 0?{}:b;var c=Ll(a),d=T("INNERTUBE_CLIENT_NAME"),e=U("web_ajax_ignore_global_headers_if_set"),f;for(f in Wl){var g=T(Wl[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=T("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(oc(a)?!1:!0))){k=a;var l;if(l=U("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=oc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=mc(nc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var n=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}n&&
(b["X-YouTube-Time-Zone"]=n)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=Hl(Ml()));return b}
function bm(a,b){b.method="POST";b.postParams||(b.postParams={});return cm(a,b)}
function cm(a,b){var c=b.format||"JSON";a=dm(a,b);var d=em(a,b),e=!1,f=fm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Ql(k),n=null,p=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||p||r)n=gm(a,c,k,b.convertToSafeHtml);l&&(l=hm(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Rl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function dm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Kl(a,b||{},!0);return a}
function em(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Il(e),Ub(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):sc(e));f=e||f&&!Nb(f);!Yl&&f&&b.method!=="POST"&&(Yl=!0,Al(Error("AJAX request with postData should use POST")));return e}
function gm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Bl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?im(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=jm(g)})}d&&km(e);
return e}
function km(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else km(a[b])}}
function hm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function im(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function jm(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function $l(a){var b=window.location.search,c=oc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Ll(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Il(b),f={};Db(Xl,function(g){e[g]&&(f[g]=e[g])});
return Kl(a,f||{},!1)}
var fm=Zl;var lm=[{Ec:function(a){return"Cannot read property '"+a.key+"'"},
kc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ec:function(a){return"Cannot call '"+a.key+"'"},
kc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ec:function(a){return a.key+" is not defined"},
kc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var nm={Va:[],Sa:[{callback:mm,weight:500}]};function mm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function om(){this.Sa=[];this.Va=[]}
var pm;function qm(){if(!pm){var a=pm=new om;a.Va.length=0;a.Sa.length=0;nm.Va&&a.Va.push.apply(a.Va,nm.Va);nm.Sa&&a.Sa.push.apply(a.Sa,nm.Sa)}return pm}
;var rm=new M;function sm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=tm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=tm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=tm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function tm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function um(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=wm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=sm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?wm(f+".ve",g,h,k):0;d+=f;d+=wm(e,a[e],b,c);if(d>500)break}}else c[b]=xm(a),d+=c[b].length;else c[b]=xm(a),d+=c[b].length;return d}
function wm(a,b,c,d){c+="."+a;a=xm(b);d[c]=a;return c.length+a.length}
function xm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function ym(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function zm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Am(){this.cf=!0}
function Bm(){Am.h||(Am.h=new Am);return Am.h}
function Cm(a,b){a={};var c=[];"SESSION_ID"in ul&&c.push({key:"u",value:T("SESSION_ID")});if(c=Fh(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in ul||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in ul&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));return a}
;var Dm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Em(a,b,c,d,e){Bh.set(""+a,b,{Ob:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function Fm(a){return Bh.get(""+a,void 0)}
function Gm(a,b,c){Bh.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Hm(){if(U("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Bh.isEnabled())return!1;if(Bh.h.cookie)return!0;U("embeds_web_enable_cookie_detection_fix")?Bh.set("TESTCOOKIESENABLED","1",{Ob:60,Le:"none",secure:!0}):Bh.set("TESTCOOKIESENABLED","1",{Ob:60});if(Bh.get("TESTCOOKIESENABLED")!=="1")return!1;Bh.remove("TESTCOOKIESENABLED");return!0}
;var Im=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Im);function Jm(){this.h=T("ALT_PREF_COOKIE_NAME","PREF");this.i=T("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Fm(this.h);a&&this.parse(a)}
var Km;function Lm(){Km||(Km=new Jm);return Km}
m=Jm.prototype;m.get=function(a,b){Mm(a);Nm(a);a=Im[a]!==void 0?Im[a].toString():null;return a!=null?a:b?b:""};
m.set=function(a,b){Mm(a);Nm(a);if(b==null)throw Error("ExpectedNotNull");Im[a]=b.toString()};
function Om(a){return!!((Pm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Mm(a);Nm(a);delete Im[a]};
m.clear=function(){for(var a in Im)delete Im[a]};
function Nm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Mm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Pm(a){a=Im[a]!==void 0?Im[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Im[d]=c.toString())}};var Qm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Rm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Sm(){var a=C.navigator;return a?a.connection:void 0}
function Tm(){var a=Sm();if(a){var b=Qm[a.type||"unknown"]||"CONN_UNKNOWN";a=Qm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Um(){var a=Sm();if(a!=null&&a.effectiveType)return Rm.hasOwnProperty(a.effectiveType)?Rm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(la(b))}
y(V,Error);function Vm(){try{return Wm(),!0}catch(a){return!1}}
function Wm(a){if(T("DATASYNC_ID")!==void 0)return T("DATASYNC_ID");throw new V("Datasync ID not set",a===void 0?"unknown":a);}
;function Xm(){}
function Ym(a,b){return fj.ab(a,0,b)}
Xm.prototype.pa=function(a,b){return this.ab(a,1,b)};
Xm.prototype.Db=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Zm=Ul("web_emulated_idle_callback_delay",300),$m=1E3/60-3,an=[8,5,4,3,2,1,0];
function bn(a){a=a===void 0?{}:a;G.call(this);this.i=[];this.j={};this.da=this.h=0;this.ba=this.m=!1;this.P=[];this.W=this.ga=!1;for(var b=x(an),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.vc=a.timeout||1;this.H=$m;this.A=0;this.xa=this.Ae.bind(this);this.uc=this.ff.bind(this);this.Za=this.Md.bind(this);this.Cb=this.he.bind(this);this.Ub=this.De.bind(this);this.Ga=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
y(bn,G);m=bn.prototype;m.Db=function(a){var b=Za();cn(this,a);a=Za()-b;this.m||(this.H-=a)};
m.ab=function(a,b,c){++this.da;if(b===10)return this.Db(a),this.da;var d=this.da;this.j[d]=a;this.m&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.ba||this.m||(this.h!==0&&dn(this)!==this.A&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function en(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function fn(a){return!a.isHidden()&&a.ia}
function dn(a){if(a.i[8].length){if(a.W)return 4;if(fn(a))return 3}for(var b=5;b>=a.l;b--)if(a.i[b].length>0)return b>0?fn(a)?3:2:1;return 0}
m.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function cn(a,b){try{b()}catch(c){a.Ha(c)}}
function gn(a){for(var b=x(an),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.he=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;hn(this,b);this.ga=!1};
m.ff=function(){hn(this)};
m.Md=function(){jn(this)};
m.De=function(a){this.W=!0;var b=dn(this);b===4&&b!==this.A&&(this.stop(),this.start());hn(this,void 0,a);this.W=!1};
m.Ae=function(){this.isHidden()||jn(this);this.h&&(this.stop(),this.start())};
function jn(a){a.stop();a.m=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&cn(a,e)}kn(a);a.m=!1;gn(a)&&a.start();b=Za()-b;a.H-=b}
function kn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function hn(a,b,c){a.W&&a.A===4&&a.h||a.stop();a.m=!0;b=Za()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&cn(a,f);d=a.ga?0:1;d=a.l>d?a.l:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&cn(a,c)}while(c&&Za()<b)}a.m=!1;kn(a);a.H=$m;gn(a)&&a.start()}
m.start=function(){this.ba=!1;if(this.h===0)switch(this.A=dn(this),this.A){case 1:var a=this.Cb;this.h=this.Ga?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Zm);break;case 2:this.h=window.setTimeout(this.uc,this.vc);break;case 3:this.h=window.requestAnimationFrame(this.Ub);break;case 4:this.h=window.setTimeout(this.Za,0)}};
m.pause=function(){this.stop();this.ba=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Ga?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.U=function(){en(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.xa);G.prototype.U.call(this)};var ln=E("yt.scheduler.instance.timerIdMap_")||{},mn=Ul("kevlar_tuner_scheduler_soft_state_timer_ms",800),nn=0,on=0;function pn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.V)a=new bn(T("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function qn(){rn();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Cc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function rn(){en(pn());for(var a in ln)ln.hasOwnProperty(a)&&delete ln[Number(a)]}
function sn(a,b,c){if(!c)return c=c===void 0,-pn().ab(a,b,c);var d=window.setTimeout(function(){var e=pn().ab(a,b);ln[d]=e},c);
return d}
function tn(a){pn().Db(a)}
function un(a){var b=pn();if(a<0)b.qa(-a);else{var c=ln[a];c?(b.qa(c),delete ln[a]):window.clearTimeout(a)}}
function vn(){wn()}
function wn(){window.clearTimeout(nn);pn().start()}
function xn(){pn().pause();window.clearTimeout(nn);nn=window.setTimeout(vn,mn)}
function yn(){window.clearTimeout(on);on=window.setTimeout(function(){zn(0)},mn)}
function zn(a){yn();var b=pn();b.l=a;b.start()}
function An(a){yn();var b=pn();b.l>a&&(b.l=a,b.start())}
function Bn(){window.clearTimeout(on);var a=pn();a.l=0;a.start()}
;function Cn(){Xm.apply(this,arguments)}
y(Cn,Xm);function Dn(){Cn.h||(Cn.h=new Cn);return Cn.h}
Cn.prototype.ab=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Rl(a,c||0)};
Cn.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Cn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Cn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var fj=Dn();
U("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",qn),D("yt.scheduler.instance.addJob",sn),D("yt.scheduler.instance.addImmediateJob",tn),D("yt.scheduler.instance.cancelJob",un),D("yt.scheduler.instance.cancelAllJobs",rn),D("yt.scheduler.instance.start",wn),D("yt.scheduler.instance.pause",xn),D("yt.scheduler.instance.setPriorityThreshold",zn),D("yt.scheduler.instance.enablePriorityThreshold",An),D("yt.scheduler.instance.clearPriorityThreshold",Bn),D("yt.scheduler.initialized",
!0));function En(a){var b=new Fj;this.h=(a=b.isAvailable()?a?new Gj(b,a):b:null)?new Aj(a):null;this.i=document.domain||window.location.hostname}
En.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new qi).serialize(b))}catch(f){return}else e=escape(b);Em(a,e,c,this.i)};
En.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Fm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
En.prototype.remove=function(a){this.h&&this.h.remove(a);Gm(a,"/",this.i)};var Fn=function(){var a;return function(){a||(a=new En("ytidb"));return a}}();
function Gn(){var a;return(a=Fn())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Hn=[],In,Jn=!1;function Kn(){var a={};for(In=new Ln(a.handleError===void 0?Mn:a.handleError,a.logEvent===void 0?Nn:a.logEvent);Hn.length>0;)switch(a=Hn.shift(),a.type){case "ERROR":In.Ha(a.payload);break;case "EVENT":In.logEvent(a.eventType,a.payload)}}
function On(a){Jn||(In?In.Ha(a):(Hn.push({type:"ERROR",payload:a}),Hn.length>10&&Hn.shift()))}
function Pn(a,b){Jn||(In?In.logEvent(a,b):(Hn.push({type:"EVENT",eventType:a,payload:b}),Hn.length>10&&Hn.shift()))}
;function Qn(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Rn(a){return a.substr(0,a.indexOf(":"))||a}
;var Sn=Fe||Ge;function Tn(a){var b=Lc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Un={},Vn=(Un.AUTH_INVALID="No user identifier specified.",Un.EXPLICIT_ABORT="Transaction was explicitly aborted.",Un.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Un.MISSING_INDEX="Index not created.",Un.MISSING_OBJECT_STORES="Object stores not created.",Un.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Un.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Un.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Un.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Un.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Un.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Un.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Un),Wn={},Xn=(Wn.AUTH_INVALID="ERROR",Wn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Wn.EXPLICIT_ABORT="IGNORED",Wn.IDB_NOT_SUPPORTED="ERROR",Wn.MISSING_INDEX=
"WARNING",Wn.MISSING_OBJECT_STORES="ERROR",Wn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Wn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Wn.QUOTA_EXCEEDED="WARNING",Wn.QUOTA_MAYBE_EXCEEDED="WARNING",Wn.UNKNOWN_ABORT="WARNING",Wn.INCOMPATIBLE_DB_VERSION="WARNING",Wn),Yn={},Zn=(Yn.AUTH_INVALID=!1,Yn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Yn.EXPLICIT_ABORT=!1,Yn.IDB_NOT_SUPPORTED=!1,Yn.MISSING_INDEX=!1,Yn.MISSING_OBJECT_STORES=!1,Yn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Yn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Yn.QUOTA_EXCEEDED=!1,Yn.QUOTA_MAYBE_EXCEEDED=!0,Yn.UNKNOWN_ABORT=!0,Yn.INCOMPATIBLE_DB_VERSION=!1,Yn);function $n(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Vn[a]:c;d=d===void 0?Xn[a]:d;e=e===void 0?Zn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,$n.prototype)}
y($n,V);function ao(a,b){$n.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Vn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,ao.prototype)}
y(ao,$n);function bo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,bo.prototype)}
y(bo,Error);var co=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function eo(a,b,c,d){b=Rn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof $n)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new $n("QUOTA_EXCEEDED",a);if(He&&e.name==="UnknownError")return new $n("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof bo)return new $n("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&co.some(function(f){return e.message.includes(f)}))return new $n("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new $n("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",od:e.name})];e.level="WARNING";return e}
function fo(a,b,c){var d=Gn();return new $n("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function go(a){if(!a)throw Error();throw a;}
function ho(a){return a}
function io(a){this.h=a}
function jo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=x(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=x(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
jo.all=function(a){return new jo(new io(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)jo.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
jo.resolve=function(a){return new jo(new io(function(b,c){a instanceof jo?a.then(b,c):b(a)}))};
jo.reject=function(a){return new jo(new io(function(b,c){c(a)}))};
jo.prototype.then=function(a,b){var c=this,d=a!=null?a:ho,e=b!=null?b:go;return new jo(new io(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){ko(c,c,d,f,g)}),c.i.push(function(){lo(c,c,e,f,g)})):c.state.status==="FULFILLED"?ko(c,c,d,f,g):c.state.status==="REJECTED"&&lo(c,c,e,f,g)}))};
jo.prototype.catch=function(a){return this.then(void 0,a)};
function ko(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof jo?mo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function lo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof jo?mo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function mo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof jo?mo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function no(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function oo(a){return new Promise(function(b,c){no(a,b,c)})}
function po(a){return new jo(new io(function(b,c){no(a,b,c)}))}
;function qo(a,b){return new jo(new io(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var ro=window,W=ro.ytcsi&&ro.ytcsi.now?ro.ytcsi.now:ro.performance&&ro.performance.timing&&ro.performance.now&&ro.performance.timing.navigationStart?function(){return ro.performance.timing.navigationStart+ro.performance.now()}:function(){return(new Date).getTime()};function so(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=so.prototype;m.add=function(a,b,c){return to(this,[a],{mode:"readwrite",la:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return to(this,[a],{mode:"readwrite",la:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return to(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).count(b)})};
function uo(a,b,c){a=a.h.createObjectStore(b,c);return new vo(a)}
m.delete=function(a,b){return to(this,[a],{mode:"readwrite",la:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return to(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).get(b)})};
function wo(a,b,c){return to(a,[b],{mode:"readwrite",la:!0},function(d){d=d.objectStore(b);return po(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function to(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,u,v;return A(function(z){switch(z.h){case 1:var F={mode:"readonly",la:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?F.mode=c:Object.assign(F,c);e=F;a.transactionCount++;f=e.la?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(W());Aa(z,5);l=a.h.transaction(b,e.mode);F=z.yield;var H=new xo(l);H=yo(H,d);return F.call(z,H,7);case 7:return n=z.i,p=Math.round(W()),zo(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:r=Ba(z);t=Math.round(W());u=eo(r,
a.h.name,b.join(),a.h.version);if((v=u instanceof $n&&!u.h)||g>=f)zo(a,k,t,g,u,b.join(),e),h=u;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function zo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof $n&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Pn("QUOTA_EXCEEDED",{dbName:Rn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof $n&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=Math.pow(2,31)&&(c=0),Pn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Ao(a,!1,d,f,b,g.tag),On(e)):Ao(a,!0,d,f,b,g.tag)}
function Ao(a,b,c,d,e,f){Pn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function vo(a){this.h=a}
m=vo.prototype;m.add=function(a,b){return po(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return po(this.h.clear()).then(function(){})};
function Bo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return po(this.h.count(a))};
function Co(a,b){return Do(a,{query:b},function(c){return c.delete().then(function(){return Eo(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Co(this,a):po(this.h.delete(a))};
m.get=function(a){return po(this.h.get(a))};
m.index=function(a){try{return new Fo(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new bo(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Do(a,b,c){a=a.h.openCursor(b.query,b.direction);return Go(a).then(function(d){return qo(d,c)})}
function xo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=$n;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function yo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return x(d).next().value})}
xo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new $n("EXPLICIT_ABORT");};
xo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new vo(a),this.i.set(a,b));return b};
function Fo(a){this.h=a}
m=Fo.prototype;m.count=function(a){return po(this.h.count(a))};
m.delete=function(a){return Ho(this,{query:a},function(b){return b.delete().then(function(){return Eo(b)})})};
m.get=function(a){return po(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Ho(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Go(a).then(function(d){return qo(d,c)})}
function Io(a,b){this.request=a;this.cursor=b}
function Go(a){return po(a).then(function(b){return b?new Io(a,b):null})}
function Eo(a){a.cursor.continue(void 0);return Go(a.request)}
Io.prototype.delete=function(){return po(this.cursor.delete()).then(function(){})};
Io.prototype.getValue=function(){return this.cursor.value};
Io.prototype.update=function(a){return po(this.cursor.update(a))};function Jo(a,b,c){return new Promise(function(d,e){function f(){r||(r=new so(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Od,k=c.blocking,l=c.df,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Pn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Rn(a)});var u=f(),v=new xo(g.transaction);
n&&n(u,function(z){return t.oldVersion<z&&t.newVersion>=z},v);
v.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Pn("IDB_UNEXPECTEDLY_CLOSED",{dbName:Rn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ko(a,b,c){c=c===void 0?{}:c;return Jo(a,b,c)}
function Lo(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Od)&&c.addEventListener("blocked",function(){e()}),g.yield(oo(c),4);
if(g.h!=2)g.h=0,g.l=0;else throw f=Ba(g),eo(f,a,"",-1);})}
;function Mo(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
Mo.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Ko(a,b,c)};
Mo.prototype.delete=function(a){a=a===void 0?{}:a;return Lo(this.name,a)};
function No(a,b){return new $n("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Oo(a,b){if(!b)throw fo("openWithToken",Rn(a.name));return a.open()}
Mo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,u;return A(function(v){switch(v.h){case 1:return g=(f=Error().stack)!=null?f:"",Aa(v,2),v.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=v.i,F=c.options,H=[],O=x(Object.keys(F.xb)),S=O.next();!S.done;S=O.next()){S=S.value;var da=F.xb[S],va=da.Ge===void 0?Number.MAX_VALUE:da.Ge;!(z.h.version>=da.Fb)||z.h.version>=va||z.h.objectStoreNames.contains(S)||H.push(S)}k=H;if(k.length===0){v.B(5);break}l=Object.keys(c.options.xb);
n=h.objectStoreNames();if(c.v<Ul("ytidb_reopen_db_retries",0))return c.v++,h.close(),On(new $n("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),v.return(a());if(!(c.l<Ul("ytidb_remake_db_retries",1))){v.B(6);break}c.l++;return v.yield(c.delete(),7);case 7:return On(new $n("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),v.return(a());case 6:throw new ao(n,l);case 5:return v.return(h);case 2:p=Ba(v);
if(p instanceof DOMException?p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){v.B(8);break}return v.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=v.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,No(c,t);return v.return(r);case 8:throw b(),p instanceof
Error&&!U("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),eo(p,c.name,"",(u=c.options.version)!=null?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw No(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,df:b,upgrade:this.options.upgrade};return this.h=d=a()};var Po=new Mo("YtIdbMeta",{xb:{databases:{Fb:1}},upgrade:function(a,b){b(1)&&uo(a,"databases",{keyPath:"actualName"})}});
function Qo(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Oo(Po,b),2);c=d.i;return d.return(to(c,["databases"],{la:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return po(f.h.put(a,void 0)).then(function(){})})}))})}
function Ro(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Oo(Po,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function So(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Oo(Po,b),2)):e.h!=3?(d=e.i,e.yield(to(d,["databases"],{la:!0,mode:"readonly"},function(f){c.length=0;return Do(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return Eo(g)})}),3)):e.return(c)})}
function To(a){return So(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Uo(a,b,c){return So(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Vo(a){var b,c;return A(function(d){if(d.h==1)return b=Wm("YtIdbMeta hasAnyMeta other"),d.yield(So(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Wo,Xo=new function(){}(new function(){});
function Yo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Gn();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Sn)f=/WebKit\/([0-9]+)/.exec(Lc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Lc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Yc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Qo(d,Xo),4);case 4:return e.yield(Ro("yt-idb-test-do-not-use",Xo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Zo(){if(Wo!==void 0)return Wo;Jn=!0;return Wo=Yo().then(function(a){Jn=!1;var b;if((b=Fn())!=null&&b.h){var c;b={hasSucceededOnce:((c=Gn())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Fn())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function $o(){return E("ytglobal.idbToken_")||void 0}
function ap(){var a=$o();return a?Promise.resolve(a):Zo().then(function(b){(b=b?Xo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var bp=0;function cp(a,b){bp||(bp=fj.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(ap(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(Uo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(Lo(f.actualName),7);case 7:return h.yield(Ro(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),On(g),d=!1;case 4:fj.qa(bp),bp=0,d&&cp(a,b),h.h=0}})}))}
function dp(){var a;return A(function(b){return b.h==1?b.yield(ap(),2):(a=b.i)?b.return(Vo(a)):b.return(!1)})}
new Pi;function ep(a){if(!Vm())throw a=new $n("AUTH_INVALID",{dbName:a}),On(a),a;var b=Wm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function fp(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=(e=Error().stack)!=null?e:"",n.yield(ap(),2);case 2:g=n.i;if(!g)throw h=fo("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),On(h),h;Qn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ep(a);Aa(n,3);return n.yield(Qo(k,g),5);case 5:return n.yield(Ko(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(Ro(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function gp(a,b,c){c=c===void 0?{}:c;return fp(a,b,!1,c)}
function hp(a,b,c){c=c===void 0?{}:c;return fp(a,b,!0,c)}
function ip(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(ap(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Qn(a);d=ep(a);return e.yield(Lo(d.actualName,b),3)}return e.yield(Ro(d.actualName,c),0)})}
function jp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(Lo(d.actualName,b),2):e.yield(Ro(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function kp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(ap(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Qn("LogsDatabaseV2");return d.yield(To(b),3)}c=d.i;return d.yield(jp(c,a,b),0)})}
function lp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(ap(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Qn(a);return d.yield(Lo(a,b),3)}return d.yield(Ro(a,c),0)})}
;function mp(a,b){Mo.call(this,a,b);this.options=b;Qn(a)}
y(mp,Mo);function np(a,b){var c;return function(){c||(c=new mp(a,b));return c}}
mp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?hp:gp)(a,b,Object.assign({},c))};
mp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?lp:ip)(this.name,a)};
function op(a,b){return np(a,b)}
;var pp={},qp=op("ytGcfConfig",{xb:(pp.coldConfigStore={Fb:1},pp.hotConfigStore={Fb:1},pp),shared:!1,upgrade:function(a,b){b(1)&&(Bo(uo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Bo(uo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function rp(a){return Oo(qp(),a)}
function sp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(rp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(wo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function tp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(rp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(wo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function up(a){var b,c;return A(function(d){return d.h==1?d.yield(rp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(to(b,["coldConfigStore"],{mode:"readwrite",la:!0},function(e){return Ho(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function vp(a){var b,c;return A(function(d){return d.h==1?d.yield(rp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(to(b,["hotConfigStore"],{mode:"readwrite",la:!0},function(e){return Ho(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function wp(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(la(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
y(wp,G);wp.prototype.U=function(){for(var a=x(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;G.prototype.U.call(this)};function xp(){this.h=0;this.i=new wp}
function yp(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:T("RAW_HOT_CONFIG_GROUP")}
function zp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=$o();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(vp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(sp(c,b,d),3);case 3:if(c)for(var h=c,k=x(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Ap(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=$o())?c?h.B(4):h.yield(up(d),5):h.B(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(tp(c,b,g,d),0)})}
function Bp(){if(!xp.h){var a=new xp;xp.h=a}a=xp.h;var b=W()-a.h;if(!(a.h!==0&&b<Ul("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
xp.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Cp(){return"INNERTUBE_API_KEY"in ul&&"INNERTUBE_API_VERSION"in ul}
function Dp(){return{innertubeApiKey:T("INNERTUBE_API_KEY"),innertubeApiVersion:T("INNERTUBE_API_VERSION"),je:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),hd:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Jg:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),le:T("INNERTUBE_CONTEXT_HL"),ke:T("INNERTUBE_CONTEXT_GL"),me:T("INNERTUBE_HOST_OVERRIDE")||"",oe:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ne:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ep(a){var b={client:{hl:a.le,gl:a.ke,clientName:a.hd,clientVersion:a.innertubeContextClientVersion,configInfo:a.je}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Vl();c.length>0&&(b.request={internalExperimentFlags:c});c=a.hd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=zm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Tm())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&
(a=Um())&&b&&(b.client.effectiveConnectionType=a);U("start_client_gcf")&&(e=Bp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=x(Object.entries(Il(T("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=x(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?d.deviceMake=h:g==="cmodel"?d.deviceModel=h:g==="cbr"?d.browserName=h:g==="cbrver"?d.browserVersion=h:g==="cos"?d.osName=h:g==="cosver"?d.osVersion=h:g==="cplatform"&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Fp(a,b,c){c=c===void 0?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||T("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Bg:(a=Cm(Bm()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Gp=typeof TextEncoder!=="undefined"?new TextEncoder:null,Hp=Gp?function(a){return Gp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Ip(a,b){this.version=a;this.args=b}
Ip.prototype.serialize=function(){return{version:this.version,args:this.args}};function Jp(a,b){this.topic=a;this.h=b}
Jp.prototype.toString=function(){return this.topic};var Kp=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Bb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",Kp);var Lp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Lp);var Mp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Mp);var Np=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Np);
D("ytPubsub2Pubsub2SkipSubKey",null);function Op(a,b){var c=Pp();c&&c.publish.call(c,a.toString(),a,b)}
function Qp(a){var b=Rp,c=Pp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Lp[d])try{if(f&&b instanceof Jp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ed){var l=new h;h.Ed=l.version}var n=h.Ed}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(t>0){var u=Array(t);for(k=0;k<t;k++)u[k]=r[k];var v=u}else v=[];f=p.call(n,h,v)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Al(z)}},Np[b.toString()]?E("yt.scheduler.instance")?fj.pa(g):Rl(g,0):g())});
Lp[d]=!0;Mp[b.toString()]||(Mp[b.toString()]=[]);Mp[b.toString()].push(d);return d}
function Sp(){var a=Tp,b=Qp(function(c){a.apply(void 0,arguments);Up(b)});
return b}
function Up(a){var b=Pp();b&&(typeof a==="number"&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete Lp[c]}))}
function Pp(){return E("ytPubsub2Pubsub2Instance")}
;function Vp(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Op("meta_logging_csi_event",{timerName:a,Zg:b})}
;var Wp=void 0,Xp=void 0;function Yp(){Xp||(Xp=Uk(T("WORKER_SERIALIZATION_URL")));return Xp||void 0}
function Zp(){var a=Yp();Wp||a===void 0||(Wp=new Worker(kb(a),void 0));return Wp}
;var $p=Ul("max_body_size_to_compress",5E5),aq=Ul("min_body_size_to_compress",500),bq=!0,cq=0,dq=0,eq=Ul("compression_performance_threshold_lr",250),fq=Ul("slow_compressions_before_abandon_count",4),gq=!1,hq=new Map,iq=1,jq=!0;function kq(){if(typeof Worker==="function"&&Yp()&&!gq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=hq.get(c.key);d&&(lq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),hq.delete(c.key))}},b=Zp();
b&&(b.addEventListener("message",a),b.onerror=function(){hq.clear()},gq=!0)}}
function mq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(bq)try{var g=nq(b);if(g!=null&&(g>$p||g<aq))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!jq||!U("initial_gzip_use_main_thread"))){gq||kq();var h=Zp();if(h&&!e){hq.set(iq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:iq});iq++;return}}var k=Tk(Hp(b));lq(k,f,a,c,d)}}catch(l){Bl(l),d(a,c)}else d(a,c)}
function lq(a,b,c,d,e){jq=!1;var f=W();b.ticks.gelc=f;dq++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=eq&&(cq++,U("abandon_compression_after_N_slow_zips")?dq===Ul("compression_disable_point")&&cq>fq&&(bq=!1):bq=!1);oq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function pq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(bq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=nq(g);if(h!=null&&(h>$p||h<aq))return a;c=b?{level:1}:void 0;f=Tk(Hp(g),c);var k=W();e.ticks.gelc=k;if(b){dq++;if((U("disable_compression_due_to_performance_degredation")||U("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=eq)if(cq++,U("abandon_compression_after_N_slow_zips")||U("abandon_compression_after_N_slow_zips_lr")){b=cq/dq;var l=fq/Ul("compression_disable_point");dq>0&&dq%Ul("compression_disable_point")===0&&b>=l&&(bq=!1)}else bq=!1;oq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Bl(n),a}}else return a}
function nq(a){try{return(new Blob(a.split(""))).size}catch(b){return Bl(b),null}}
function oq(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Vp("gel_compression",a,{sampleRate:.1})}
;function qq(a){a=Object.assign({},a);delete a.Authorization;var b=Fh();if(b){var c=new jj;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Ke(c.digest(),3)}return a}
;var rq;function sq(){rq||(rq=new En("yt.innertube"));return rq}
function tq(a,b,c,d){if(d)return null;d=sq().get("nextId",!0)||1;var e=sq().get("requests",!0)||{};e[d]={method:a,request:b,authState:qq(c),requestTime:Math.round(W())};sq().set("nextId",d+1,86400,!0);sq().set("requests",e,86400,!0);return d}
function uq(a){var b=sq().get("requests",!0)||{};delete b[a];sq().set("requests",b,86400,!0)}
function vq(a){var b=sq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=qq(Fp(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),wq(a,d.method,e,{}));delete b[c]}}sq().set("requests",b,86400,!0)}}
;function xq(a){this.Yb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Ib=!1;var b;this.Bd=(b=a.Bd)!=null?b:100;var c;this.vd=(c=a.vd)!=null?c:1;var d;this.sd=(d=a.sd)!=null?d:2592E6;var e;this.qd=(e=a.qd)!=null?e:12E4;var f;this.ud=(f=a.ud)!=null?f:5E3;var g;this.X=(g=a.X)!=null?g:void 0;this.ec=!!a.ec;var h;this.cc=(h=a.cc)!=null?h:.1;var k;this.mc=(k=a.mc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Ib&&(this.Ib=a.Ib);a.Yb&&(this.Yb=a.Yb);this.Y=a.Y;this.Da=a.Da;this.ha=a.ha;this.fa=a.fa;this.sendFn=a.sendFn;
this.Kc=a.Kc;this.Hc=a.Hc;yq(this)&&(!this.Y||this.Y("networkless_logging"))&&zq(this)}
function zq(a){yq(a)&&!a.Ib&&(a.h=!0,a.ec&&Math.random()<=a.cc&&a.ha.Pd(a.X),Aq(a),a.fa.va()&&a.Tb(),a.fa.listen(a.Kc,a.Tb.bind(a)),a.fa.listen(a.Hc,a.Vc.bind(a)))}
m=xq.prototype;m.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(yq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ha.set(d,this.X).then(function(e){d.id=e;c.fa.va()&&Bq(c,d)}).catch(function(e){Bq(c,d);
Cq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(yq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.va()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ha.set(e,d.X).catch(function(l){Cq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ha.set(e,this.X).catch(function(g){d.sendFn(a,b,e.skipRetry);
Cq(d,g)})}else this.sendFn(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(yq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ha.ob(d.id,c.X):e=!0;c.fa.gb&&c.Y&&c.Y("vss_network_hint")&&c.fa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ha.set(d,this.X).then(function(g){d.id=g;e&&c.ha.ob(d.id,c.X)}).catch(function(g){Cq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Tb=function(){var a=this;if(!yq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.pa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ha.dd("NEW",a.X),2);if(c.h!=3)return b=c.i,b?c.yield(Bq(a,b),3):(a.Vc(),c.return());a.i&&(a.i=0,a.Tb());c.h=0})},this.Bd))};
m.Vc=function(){this.Da.qa(this.i);this.i=0};
function Bq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!yq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.B(2);break}return d.yield(a.ha.se(b.id,a.X),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(Dq(a,b,a.sd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.B(5);break}return d.yield(a.ha.ob(b.id,a.X),5);case 5:return d.return();case 4:b.skipRetry||(b=Eq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||b.id===void 0){d.B(8);break}return d.yield(a.ha.ob(b.id,a.X),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Eq(a,b){if(!yq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Fq(f);(h=Gq(f))&&a.Y&&a.Y("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){n.B(2);break}if(!a.fa.pc){n.B(3);break}return n.yield(a.fa.pc(),3);case 3:if(a.fa.va()){n.B(2);break}c(e,f);if(!a.Y||!a.Y("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){n.B(6);
break}return n.yield(a.ha.Lc(b.id,a.X,!1),6);case 6:return n.return();case 2:if(a.Y&&a.Y("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.mc)return n.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){n.B(8);break}return b.sendCount<a.vd?n.yield(a.ha.Lc(b.id,a.X,!0,h?!1:void 0),12):n.yield(a.ha.ob(b.id,a.X),8);case 12:a.Da.pa(function(){a.fa.va()&&a.Tb()},a.ud);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.B(2):h.yield(a.ha.ob(b.id,a.X),2);a.fa.gb&&a.Y&&a.Y("vss_network_hint")&&a.fa.gb(!0);d(e,f);h.h=0})};
return b}
function Dq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Aq(a){if(!yq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ha.dd("QUEUED",a.X).then(function(b){b&&!Dq(a,b,a.qd)?a.Da.pa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.B(2):c.yield(a.ha.Lc(b.id,a.X),2);Aq(a);c.h=0})}):a.fa.va()&&a.Tb()})}
function Cq(a,b){a.Hd&&!a.fa.va()?a.Hd(b):a.handleError(b)}
function yq(a){return!!a.X||a.Yb}
function Fq(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Gq(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Hq;
function Iq(){if(Hq)return Hq();var a={};Hq=op("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Fb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&uo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Bo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Hq()}
;function Jq(a){return Oo(Iq(),a)}
function Kq(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Jq(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(wo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Lq(c);return g.return(f)})}
function Mq(a,b){var c,d,e,f,g,h,k,l;return A(function(n){if(n.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(Jq(b),2);if(n.h!=3)return d=n.i,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",U("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield(to(d,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(p){return Ho(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();Lq(c);return n.return(l)})}
function Nq(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Jq(b),2);c=d.i;return d.return(to(c,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",po(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Oq(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(Jq(b),2);e=f.i;return f.return(to(e,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),po(h.h.put(k,void 0)).then(function(){return k})):jo.resolve(void 0)})}))})}
function Pq(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Jq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Qq(a){var b,c;return A(function(d){if(d.h==1)return d.yield(Jq(a),2);b=d.i;c=W()-2592E6;return d.yield(to(b,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){return Do(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Eo(f)})})}),0)})}
function Rq(){A(function(a){return a.yield(kp(),0)})}
function Lq(a){U("nwl_csi_killswitch")||Vp("networkless_performance",a,{sampleRate:1})}
;var Sq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500};var Tq={},Uq=op("ServiceWorkerLogsDatabase",{xb:(Tq.SWHealthLog={Fb:1},Tq),shared:!0,upgrade:function(a,b){b(1)&&Bo(uo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Vq(a){return Oo(Uq(),a)}
function Wq(a){var b,c;A(function(d){if(d.h==1)return d.yield(Vq(a),2);b=d.i;c=W()-2592E6;return d.yield(to(b,["SWHealthLog"],{mode:"readwrite",la:!0},function(e){return Do(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Eo(f)})})}),0)})}
function Xq(a){var b;return A(function(c){if(c.h==1)return c.yield(Vq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Yq={},Zq=0;function $q(a){var b=new Image,c=""+Zq++;Yq[c]=b;b.onload=b.onerror=function(){delete Yq[c]};
b.src=a}
;var ar;function br(){ar||(ar=new En("yt.offline"));return ar}
function cr(a){if(U("offline_error_handling")){var b=br().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);br().set("errors",b,2592E3,!0)}}
;function dr(){this.h=new Map;this.i=!1}
function er(){if(!dr.h){var a=E("yt.networkRequestMonitor.instance")||new dr;D("yt.networkRequestMonitor.instance",a);dr.h=a}return dr.h}
dr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
dr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
dr.prototype.removeParams=function(a){return a.split("?")[0]};
dr.prototype.removeParams=dr.prototype.removeParams;dr.prototype.isEndpointCFR=dr.prototype.isEndpointCFR;dr.prototype.requestComplete=dr.prototype.requestComplete;dr.getInstance=er;function fr(){yd.call(this);var a=this;this.j=!1;this.i=ej();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=br().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Al(d)}br().set("errors",{},2592E3,!0)}}})}
y(fr,yd);function gr(){if(!fr.h){var a=E("yt.networkStatusManager.instance")||new fr;D("yt.networkStatusManager.instance",a);fr.h=a}return fr.h}
m=fr.prototype;m.va=function(){return this.i.va()};
m.gb=function(a){this.i.i=a};
m.de=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
m.Ud=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.pc=function(a){a=cj(this.i,a);a.then(function(b){U("use_cfr_monitor")&&er().requestComplete("generate_204",b)});
return a};
fr.prototype.sendNetworkCheckRequest=fr.prototype.pc;fr.prototype.listen=fr.prototype.listen;fr.prototype.enableErrorFlushing=fr.prototype.Ud;fr.prototype.getWindowStatus=fr.prototype.de;fr.prototype.networkStatusHint=fr.prototype.gb;fr.prototype.isNetworkAvailable=fr.prototype.va;fr.getInstance=gr;function hr(a){a=a===void 0?{}:a;yd.call(this);var b=this;this.i=this.m=0;this.j=gr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){ir(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ir(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){zd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){zd(b,"publicytnetworkstatus-offline")})))}
y(hr,yd);hr.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
hr.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
hr.prototype.pc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&er().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function ir(a,b){a.rateLimit?a.i?(fj.qa(a.m),a.m=fj.pa(function(){a.l!==b&&(zd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(zd(a,b),a.l=b,a.i=W()):zd(a,b)}
;var jr;function kr(){var a=xq.call;jr||(jr=new hr({Og:!0,Hg:!0}));a.call(xq,this,{ha:{Pd:Qq,ob:Pq,dd:Mq,se:Nq,Lc:Oq,set:Kq},fa:jr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Bl(new V(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Al(b)},
pb:Bl,sendFn:lr,now:W,Hd:cr,Da:Dn(),Kc:"publicytnetworkstatus-online",Hc:"publicytnetworkstatus-offline",ec:!0,cc:.1,mc:Ul("potential_esf_error_limit",10),Y:U,Ib:!(Vm()&&mr())});this.j=new Pi;U("networkless_immediately_drop_all_requests")&&Rq();lp("LogsDatabaseV2")}
y(kr,xq);function nr(){var a=E("yt.networklessRequestController.instance");a||(a=new kr,D("yt.networklessRequestController.instance",a),U("networkless_logging")&&ap().then(function(b){a.X=b;zq(a);a.j.resolve();a.ec&&Math.random()<=a.cc&&a.X&&Wq(a.X);U("networkless_immediately_drop_sw_health_store")&&or(a)}));
return a}
kr.prototype.writeThenSend=function(a,b){b||(b={});b=pr(a,b);Vm()||(this.h=!1);xq.prototype.writeThenSend.call(this,a,b)};
kr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=pr(a,b);Vm()||(this.h=!1);xq.prototype.sendThenWrite.call(this,a,b,c)};
kr.prototype.sendAndWrite=function(a,b){b||(b={});b=pr(a,b);Vm()||(this.h=!1);xq.prototype.sendAndWrite.call(this,a,b)};
kr.prototype.awaitInitialization=function(){return this.j.promise};
function or(a){var b;A(function(c){if(!a.X)throw b=fo("clearSWHealthLogsDb"),b;return c.return(Xq(a.X).catch(function(d){a.handleError(d)}))})}
function lr(a,b,c,d){d=d===void 0?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&qr(a,b);if(U("use_request_time_ms_header"))b.headers&&Ll(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Zl(a,void 0,"POST",f,void 0);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Zl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.l){var l=mc(nc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(vc),r=uc(a,0,"ri",p);if(r<0)var t=null;else{var u=a.indexOf("&",r);if(u<0||u>p)u=p;t=decodeURIComponent(a.slice(r+3,u!==-1?u:0).replace(/\+/g," "))}n=t!=="1"}var v=!n;break b}}catch(F){}v=!1}if(v){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(F){}z=!1}c=z?!0:!1}else c=
!1;c||$q(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),mq(a,b.postBody,b,cm,d)):mq(a,JSON.stringify(b.postParams),b,bm,d):cm(a,b)}
function pr(a,b){U("use_event_time_ms_header")&&Ll(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function qr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){er().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){er().requestComplete(a,!0);d(e,f)}}
function mr(){return oc(document.location.toString())!=="www.youtube-nocookie.com"}
;var rr=!1,sr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:rr};D("ytNetworklessLoggingInitializationOptions",sr);function tr(){var a;A(function(b){if(b.h==1)return b.yield(ap(),2);a=b.i;if(!a||!Vm()&&!U("nwl_init_require_datasync_id_killswitch")||!mr())return b.B(0);rr=!0;sr.isNwlInitialized=rr;return b.yield(nr().awaitInitialization(),0)})}
;function ur(a){var b=this;this.config_=null;a?this.config_=a:Cp()&&(this.config_=Dp());Ym(function(){vq(b)},5E3)}
ur.prototype.isReady=function(){!this.config_&&Cp()&&(this.config_=Dp());return!!this.config_};
function wq(a,b,c,d){function e(u){u=u===void 0?!1:u;var v;if(d.retry&&h!="www.youtube-nocookie.com"&&(u||U("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(v=tq(b,c,l,k)),v)){var z=g.onSuccess,F=g.onFetchSuccess;g.onSuccess=function(S,da){uq(v);z(S,da)};
c.onFetchSuccess=function(S,da){uq(v);F(S,da)}}try{if(u&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?nr().writeThenSend(t,g):nr().sendAndWrite(t,g);
else if(d.compress){var H=!d.networklessOptions.writeThenSend;if(g.postBody){var O=g.postBody;typeof O!=="string"&&(O=JSON.stringify(g.postBody));mq(t,O,g,cm,H)}else mq(t,JSON.stringify(g.postParams),g,bm,H)}else U("web_all_payloads_via_jspb")?cm(t,g):bm(t,g)}catch(S){if(S.name==="InvalidAccessError")v&&(uq(v),v=0),Bl(Error("An extension is blocking network request."));else throw S;}v&&Ym(function(){vq(a)},5E3)}
!T("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Bl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);Al(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(u,v){if(d.onSuccess)d.onSuccess(v)},
onFetchSuccess:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,v){if(d.onError)d.onError(v)},
onFetchError:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.me)&&(h=f);var k=a.config_.oe||!1,l=Fp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.ne&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=Kl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
sr.isNwlInitialized:rr)?Zo().then(function(u){e(u)}):e(!1)}
;var vr=0,wr=$c?"webkit":Zc?"moz":Xc?"ms":Wc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++vr});var xr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function yr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in xr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function zr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
yr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
yr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
yr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Mb);var Ar=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Ar);
function Br(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Cr(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Br(a,b,c,d);if(e)return e;e=++Ar.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new yr(h);if(!Jd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new yr(h);
h.currentTarget=a;return c.call(a,h)};
g=zl(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Gr()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function Hr(a){a&&(typeof a=="string"&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Gr()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var Gr=Ed(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Ir(a){this.H=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.W=Cr(window,"mousemove",Xa(this.ba,this));a=Xa(this.P,this);typeof a==="function"&&(a=zl(a));this.da=window.setInterval(a,25)}
$a(Ir,G);Ir.prototype.ba=function(a){a.h===void 0&&zr(a);var b=a.h;a.i===void 0&&zr(a);this.h=new Fd(b,a.i)};
Ir.prototype.P=function(){if(this.h){var a=W();if(this.l!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=Math.abs((d-this.m)/this.m)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
Ir.prototype.U=function(){window.clearInterval(this.da);Hr(this.W)};var Jr={};
function Kr(a){var b=a===void 0?{}:a;a=b.Ce===void 0?!1:b.Ce;b=b.Vd===void 0?!0:b.Vd;if(E("_lact",window)==null){var c=parseInt(T("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Lr();Cr(document,"keydown",Lr);Cr(document,"keyup",Lr);Cr(document,"mousedown",Lr);Cr(document,"mouseup",Lr);a?Cr(window,"touchmove",function(){Mr("touchmove",200)},{passive:!0}):(Cr(window,"resize",function(){Mr("resize",200)}),b&&Cr(window,"scroll",function(){Mr("scroll",200)}));
new Ir(function(){Mr("mouse",100)});
Cr(document,"touchstart",Lr,{passive:!0});Cr(document,"touchend",Lr,{passive:!0})}}
function Mr(a,b){Jr[a]||(Jr[a]=!0,fj.pa(function(){Lr();Jr[a]=!1},b))}
function Lr(){E("_lact",window)==null&&Kr();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Nr(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Or=C.ytPubsubPubsubInstance||new M,Pr=C.ytPubsubPubsubSubscribedKeys||{},Qr=C.ytPubsubPubsubTopicToKeys||{},Rr=C.ytPubsubPubsubIsSynchronous||{};function Sr(a,b){var c=Tr();if(c&&b){var d=c.subscribe(a,function(){function e(){Pr[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Rr[a]?e():Rl(e,0)}catch(g){Al(g)}},void 0);
Pr[d]=!0;Qr[a]||(Qr[a]=[]);Qr[a].push(d);return d}return 0}
function Ur(a){var b=Tr();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete Pr[c]}))}
function Vr(a,b){var c=Tr();c&&c.publish.apply(c,arguments)}
function Wr(a){var b=Tr();if(b)if(b.clear(a),a)Xr(a);else for(var c in Qr)Xr(c)}
function Tr(){return C.ytPubsubPubsubInstance}
function Xr(a){Qr[a]&&(a=Qr[a],Db(a,function(b){Pr[b]&&delete Pr[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Bb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",Or);D("ytPubsubPubsubTopicToKeys",Qr);D("ytPubsubPubsubIsSynchronous",Rr);D("ytPubsubPubsubSubscribedKeys",Pr);var Yr=Symbol("injectionDeps");function Zr(a){this.name=a}
Zr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function $r(a){this.key=a}
function as(){this.i=new Map;this.j=new Map;this.h=new Map}
function bs(a,b){a.i.set(b.oc,b);var c=a.j.get(b.oc);if(c)try{c.Vg(a.resolve(b.oc))}catch(d){c.Tg(d)}}
as.prototype.resolve=function(a){return a instanceof $r?cs(this,a.key,[],!0):cs(this,a,[])};
function cs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Dd!==void 0)var e=d.Dd;else if(d.lf)e=d[Yr]?ds(a,d[Yr],c):[],e=d.lf.apply(d,la(e));else if(d.Cd){e=d.Cd;var f=e[Yr]?ds(a,e[Yr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(la(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Yg||a.h.set(b,e);return e}
function ds(a,b,c){return b?b.map(function(d){return d instanceof $r?cs(a,d.key,c,!0):cs(a,d,c)}):[]}
;var es;function gs(){es||(es=new as);return es}
;var hs=window;function is(){var a,b;return"h5vcc"in hs&&((a=hs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=hs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in hs&&hs.performance.mark&&hs.performance.measure?2:0}
function js(a){var b=is();switch(b){case 1:hs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:hs.performance.mark(a+"-start");break;case 0:break;default:Xb(b,"unknown trace type")}}
function ks(a){var b=is();switch(b){case 1:hs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";hs.performance.mark(c);hs.performance.measure(a,b,c);break;case 0:break;default:Xb(b,"unknown trace type")}}
;var ls=U("web_enable_lifecycle_monitoring")&&is()!==0,ms=U("web_enable_lifecycle_monitoring");function ns(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Dn():d;this.j=c;this.scheduler=d;this.i=new Pi;this.h=a;for(a={cb:0};a.cb<this.h.length;a={lc:void 0,cb:a.cb},a.cb++)a.lc=this.h[a.cb],c=function(e){return function(){e.lc.Ac();b.h[e.cb].nc=!0;b.h.every(function(f){return f.nc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.lc),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.lc,{Ac:c,
jobId:d})}
function ps(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=x(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.nc||(a.scheduler.qa(c.jobId),a.scheduler.ab(c.Ac,10))}
ns.prototype.cancel=function(){for(var a=x(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.nc||this.scheduler.qa(b.jobId),b.nc=!0;this.i.resolve()};
ns.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function qs(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};ls&&js(this.state)}
m=qs.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;ls&&ks(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ps(this.j),this.j=void 0);rs(this,a,b);this.state=a;ls&&js(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ss(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ss(a,b){var c=b.filter(function(e){return ts(a,e)===10}),d=b.filter(function(e){return ts(a,e)!==10});
return a.A.Xg?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Je.apply(a,[c].concat(la(e))),2);a.yd.apply(a,[d].concat(la(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ke.apply(a,[c].concat(la(e)));a.yd.apply(a,[d].concat(la(e)))}}
m.Ke=function(a){for(var b=B.apply(1,arguments),c=Dn(),d=x(a),e=d.next(),f={};!e.done;f={Lb:void 0},e=d.next())f.Lb=e.value,c.Db(function(g){return function(){us(g.Lb.name);g.Lb.callback.apply(g.Lb,la(b));vs(g.Lb.name)}}(f))};
m.Je=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=Dn(),d=x(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.B(0);f.tb=e.value;f.Wb=void 0;g=function(k){return function(){us(k.tb.name);var l=k.tb.callback.apply(k.tb,la(b));typeof(l==null?void 0:l.then)==="function"?k.Wb=l.then(function(){vs(k.tb.name)}):vs(k.tb.name)}}(f);
c.Db(g);return f.Wb?h.yield(f.Wb,3):h.B(3)}f={tb:void 0,Wb:void 0};e=d.next();return h.B(2)})};
m.yd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ac:function(){us(e.name);e.callback.apply(e,la(b));vs(e.name)},
priority:ts(c,e)}});
d.length&&(this.j=new ns(d))};
function ts(a,b){var c,d;return(d=(c=a.l)!=null?c:b.priority)!=null?d:0}
function us(a){ls&&a&&js(a)}
function vs(a){ls&&a&&ks(a)}
function rs(a,b,c){ms&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(qs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function ws(a){qs.call(this,a===void 0?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var xs;y(ws,qs);ws.prototype.i=function(a,b){var c=this;this.h=Ym(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
ws.prototype.v=function(a,b){this.h&&(fj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function ys(){xs||(xs=new ws);return xs}
;var zs=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return zs});function As(){this.store={};this.h={}}
As.prototype.storePayload=function(a,b){a=Bs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
As.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Cs(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,la(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,la(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,la(this.smartExtractMatchingEntries(a))));return c};
As.prototype.extractMatchingEntries=function(a){a=Cs(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,la(this.store[a[c]])),delete this.store[a[c]]);return b};
As.prototype.getSequenceCount=function(a){a=Cs(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Cs(a,b){var c=Bs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Bs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ds(b.auth,g[0])){var h=b.isJspb;Ds(h===void 0?"undefined":h?"true":"false",g[1])&&Ds(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Ds(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Ds(a,b){return a===void 0||a==="undefined"?!0:a===b}
As.prototype.getSequenceCount=As.prototype.getSequenceCount;As.prototype.extractMatchingEntries=As.prototype.extractMatchingEntries;As.prototype.smartExtractMatchingEntries=As.prototype.smartExtractMatchingEntries;As.prototype.storePayload=As.prototype.storePayload;function Bs(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Es(a,b){if(a)return a[b.name]}
;var Fs=Ul("initial_gel_batch_timeout",2E3),Gs=Ul("gel_queue_timeout_max_ms",6E4),Hs=Math.pow(2,16)-1,Is=Ul("gel_min_batch_size",5),Js=void 0;function Ks(){this.l=this.h=this.i=0;this.j=!1}
var Ls=new Ks,Ms=new Ks,Ns=new Ks,Os=new Ks,Ps,Qs=!0,Rs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Rs);var Ss={};function Ts(){var a=E("yt.logging.ims");a||(a=new As,D("yt.logging.ims",a));return a}
function Us(a,b){if(a.endpoint==="log_event"){Vs();var c=Ws(a),d=Xs(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=Sq[d||""];var f,g,h,k=gs().resolve(new $r(xp))==null?void 0:(f=yp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!U("web_payload_policy_disabled_killswitch"))return;k=Ys(e.tier);if(k===400){Zs(a,b);return}}Ss[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Ts().storePayload(e,a.payload);$s(b,c,e,d==="gelDebuggingEvent")}}
function $s(a,b,c,d){function e(){at({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Js=new a);a=Ul("tvhtml5_logging_max_batch_ads_fork")||Ul("web_logging_max_batch")||100;var g=W(),h=bt(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=Ts().getSequenceCount(c));d>=1E3?e():d>=a?Ps||(Ps=ct(function(){e();Ps=void 0},0)):g-k>=10&&(dt(f,c.tier),h.l=g)}
function Zs(a,b){if(a.endpoint==="log_event"){Vs();var c=Ws(a),d=new Map;d.set(c,[a.payload]);var e=Xs(a.payload)||"";b&&(Js=new b);return new Wd(function(f,g){Js&&Js.isReady()?et(d,Js,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Ws(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Rs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function at(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Wd(function(e,f){var g=bt(c,d),h=g.j;g.j=!1;ft(g.i);ft(g.h);g.h=0;Js&&Js.isReady()?d===void 0&&U("enable_web_tiered_gel")?gt(e,f,a,b,c,300,h):gt(e,f,a,b,c,d,h):(dt(c,d),e())})}
function gt(a,b,c,d,e,f,g){var h=Js;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=U("enable_web_tiered_gel")?Ts().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ts().extractMatchingEntries(e),k.set(d,f);else for(d=x(Object.keys(Ss)),l=d.next();!l.done;l=d.next())l=l.value,e=U("enable_web_tiered_gel")?Ts().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ts().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Ss[l];et(k,h,a,b,c,!1,g)}
function dt(a,b){function c(){at({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=bt(a,b),e=d===Os||d===Ns?5E3:Gs;U("web_gel_timeout_cap")&&!d.h&&(e=ct(function(){c()},e),d.h=e);
ft(d.i);e=T("LOGGING_BATCH_TIMEOUT",Ul("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Qs&&(e=Fs);e=ct(function(){Ul("gel_min_batch_size")>0?Ts().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Is&&c():c()},e);
d.i=e}
function et(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&U("vss_through_gel_video_stats")?"video_stats":"log_event";a=x(a);var n=a.next();for(g={};!n.done;g={Gc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Jc:void 0,Ic:void 0},n=a.next()){var p=x(n.value);n=p.next().value;p=p.next().value;g.batchRequest=Sb({context:Ep(b.config_||Dp())});if(!Qa(p)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Rs[n])&&
ht(g.batchRequest,n,p);delete Rs[n];g.dangerousLogToVisitorSession=n==="visitorOnlyApprovedKey";jt(g.batchRequest,h,g.dangerousLogToVisitorSession);U("always_send_and_write")&&(e.writeThenSend=!1);g.Jc=function(r){U("start_client_gcf")&&fj.pa(function(){return A(function(t){return t.yield(kt(r),0)})});
k--;k||c()};
g.Gc=0;g.Ic=function(r){return function(){r.Gc++;if(e.bypassNetworkless&&r.Gc===1)try{wq(b,l,r.batchRequest,lt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Jc,r.Ic,f)),Qs=!1}catch(t){Al(t),d()}k--;k||c()}}(g);
try{wq(b,l,g.batchRequest,lt(e,g.dangerousLogToVisitorSession,g.Jc,g.Ic,f)),Qs=!1}catch(r){Al(r),d()}}}
function lt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Dg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};mt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function jt(a,b,c){mt()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&((c=T("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Hs/2)),c++,c>Hs&&(c=1),vl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ht(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Vs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Tl("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(zs=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",zs),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function mt(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function ct(a,b){return U("transport_use_scheduler")===!1?Rl(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Ym(function(){if(ys().currentState==="none")a();else{var c={};ys().install((c.none={callback:a},c))}},b):Ym(a,b)}
function ft(a){U("transport_use_scheduler")?fj.qa(a):window.clearTimeout(a)}
function kt(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return p.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Es(d,Yk),g=(f=d)==null?void 0:f.hotHashData,h=Es(d,Xk),l=(k=d)==null?void 0:k.coldHashData,(n=gs().resolve(new $r(xp)))?g?e?p.yield(zp(n,g,e),2):p.yield(zp(n,g),2):p.B(2):p.return()):l?h?p.yield(Ap(n,l,h),0):p.yield(Ap(n,l),0):p.B(0)})}
function bt(a,b){b=b===void 0?200:b;return a?b===300?Os:Ms:b===300?Ns:Ls}
function Xs(a){a=Object.keys(a);a=x(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Sq[b])return b}
function Ys(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var nt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",nt);
function ot(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Nr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,nt[b]=b in nt?nt[b]+1:0,a.sequence={index:nt[b],groupKey:b},d.endOfSequence&&delete nt[d.sequenceGroup]);(d.sendIsolatedPayload?Zs:Us)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Nn(a,b,c){c=c===void 0?{}:c;var d=ur;T("ytLoggingEventsDefaultDisabled",!1)&&ur===ur&&(d=null);U("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=Nr(),c.timestamp=W());ot(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var pt=new Set,qt=0,rt=0,st=0,tt=[],ut=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Mn(a){vt(a)}
function wt(a){vt(a,"WARNING")}
function xt(a){a instanceof Error?vt(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",wt(a))}
function vt(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||T("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(qt>=5))){d=tt;var k=fc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=um(a.args[r],"params."+r,c,p),
p>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var u="params."+r,v=xm(t[r]);c[u]=v;p+=u.length+v.length;if(p>500)break}}else c.params=xm(t)}if(d.length)for(r=0;r<d.length&&!(p=um(d[r],"params.context."+r,c,p),p>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=qm();c=x(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Pg)){a=d.weight;break a}a=x(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=x(lm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.kc[r.name])for(e=x(c.kc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Ec(f);break}r.params||(r.params={});a=qm();r.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Sa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);
if(r.sampleWeight!==0&&!pt.has(r.message)){if(g&&U("web_enable_error_204"))zt(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(rm.Ya("handleError",r),U("record_app_crashed_web")&&st===0&&r.sampleWeight===1&&(st++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),Nn("appCrashed",g)),rt++):b==="WARNING"&&rm.Ya("handleWarning",r);if(U("kevlar_gel_error_routing")){g=b;h=h===
void 0?{}:h;b:{a=x(ut);for(c=a.next();!c.done;c=a.next())if(Tn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];T("FEXP_EXPERIMENTS")&&(h.experimentIds=T("FEXP_EXPERIMENTS"));d=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!wl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=x(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=x(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=T("SERVER_NAME");e=T("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Nn("clientError",h),(g==="ERROR"||U("errors_flush_gel_always_killswitch"))&&at(void 0,void 0,!1))}U("suppress_error_204_logging")||zt(b,r)}try{pt.add(r.message)}catch(z){}qt++}}}
function zt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=x(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=x(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}cm(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function At(){this.register=new Map}
function Bt(a){a=x(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Sg("ABORTED")}
At.prototype.clear=function(){Bt(this);this.register.clear()};
var Ct=new At;var Dt=Date.now().toString();
function Et(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Dt)for(a=1,b=0;b<Dt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Dt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ft,Gt=C.ytLoggingDocDocumentNonce_;Gt||(Gt=Et(),D("ytLoggingDocDocumentNonce_",Gt));Ft=Gt;function Ht(a){this.h=a}
m=Ht.prototype;m.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new el;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&K(a,2,Pf(this.h.veType)),this.h.veCounter!==void 0&&K(a,6,Pf(this.h.veCounter)),this.h.elementIndex!==void 0&&K(a,3,Pf(this.h.elementIndex)),this.h.isCounterfactual&&K(a,5,Lf(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Lg(a,el,7,b)}this.h.youtubeData!==void 0&&Lg(a,Zk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function It(a){return T("client-screen-nonce-store",{})[a===void 0?0:a]}
function Jt(a,b){b=b===void 0?0:b;var c=T("client-screen-nonce-store");c||(c={},vl("client-screen-nonce-store",c));c[b]=a}
function Kt(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Lt(a){return T(Kt(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Lt);function Mt(){var a=T("csn-to-ctt-auth-info");a||(a={},vl("csn-to-ctt-auth-info",a));return a}
function Nt(){return Object.values(T("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Ot(a){a=It(a===void 0?0:a);if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Ot);function Pt(a,b,c){var d=Mt();(c=Ot(c))&&delete d[c];b&&(d[a]=b)}
function Qt(a){return Mt()[a]}
D("yt_logging_screen.getCttAuthInfo",Qt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==It(c)||b!==T(Kt(c)))if(Pt(a,d,c),Jt(a,c),vl(Kt(c),b),b=function(){setTimeout(function(){a&&Nn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ft,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Rt(){var a=Rb(St),b;return(new Wd(function(c,d){a.onSuccess=function(e){Ql(e)?c(new Tt(e)):d(new Ut("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ut("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ut("Request timed out","net.timeout",e))};
b=cm("//googleads.g.doubleclick.net/pagead/id",a)})).qc(function(c){if(c instanceof ce){var d;
(d=b)==null||d.abort()}return ae(c)})}
function Ut(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
y(Ut,bb);function Tt(a){this.xhr=a}
;function Vt(){this.h=0;this.i=null}
Vt.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Wt(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Xt(a):this};
Vt.prototype.getValue=function(){return this.i};
Vt.prototype.isRejected=function(){return this.h==2};
Vt.prototype.$goog_Thenable=!0;function Xt(a){var b=new Vt;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Wt(a){var b=new Vt;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Yt(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Ll(a)?"same-origin":"cors",credentials:Ll(a)?"same-origin":"include"};b={};for(var d=x(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Zt(){return Dh()||(Fe||Ge)&&Tn("applewebkit")&&!Tn("version")&&(!Tn("safari")||Tn("gsa/"))||ad&&Tn("version/")?!0:T("EOM_VISITOR_DATA")?!1:!0}
;function $t(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in cl)if(cl[d]==c.embeddedPlayerMode){b=cl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function au(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof bu;this.isTimeout=a instanceof Ut&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ce}
y(au,bb);au.prototype.name="BiscottiError";function bu(){bb.call(this,"Biscotti ID is missing from server")}
y(bu,bb);bu.prototype.name="BiscottiMissingError";var St={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},cu=null;function du(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Zt())return Error("User has not consented - not fetching biscotti id.");var a=T("PLAYER_VARS",{});if(Pb(a)=="1")return Error("Biscotti ID is not available in private embed mode");if($t(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function ol(){var a=du();if(a!==void 0)return ae(a);cu||(cu=Rt().then(eu).qc(function(b){return fu(2,b)}));
return cu}
function eu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new bu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new bu;a=a.id;pl(a);cu=Wt(a);gu(18E5,2);return a}
function fu(a,b){b=new au(b);pl("");cu=Xt(b);a>0&&gu(12E4,a-1);throw b;}
function gu(a,b){Rl(function(){Rt().then(eu,function(c){return fu(b,c)}).qc(Dd)},a)}
function hu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():ol()}catch(b){return ae(b)}}
;var Bb=ja(["data-"]);function iu(a){a&&(a.dataset?a.dataset[ju()]="true":Wb(a))}
function ku(a){return a?a.dataset?a.dataset[ju()]:a.getAttribute("data-loaded"):null}
var lu={};function ju(){return lu.loaded||(lu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function mu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
mu.prototype.clone=function(){var a=new mu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Pa(c)=="object"?a[b]=Rb(c):a[b]=c}return a};var nu=["share/get_share_panel"],ou=["share/get_web_player_share_panel"],pu=["feedback"],qu=["notification/modify_channel_preference"],ru=["browse/edit_playlist"],su=["subscription/subscribe"],tu=["subscription/unsubscribe"];var uu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",uu);function vu(a){ql(uu,arguments)}
;function wu(a,b,c){xu(a,b,c===void 0?null:c)}
function yu(a){a=zu(a);var b=document.getElementById(a);b&&(Wr(a),b.parentNode.removeChild(b))}
function Au(a,b){a&&b&&(a=""+Sa(b),(a=Bu[a])&&Ur(a))}
function xu(a,b,c){c=c===void 0?null:c;var d=zu(a),e=document.getElementById(d),f=e&&ku(e),g=e&&!f;f?b&&b():(b&&(f=Sr(d,b),b=""+Sa(b),Bu[b]=f),g||(e=Cu(a,d,function(){ku(e)||(iu(e),Vr(d),Rl(function(){Wr(d)},0))},c)))}
function Cu(a,b,c,d){d=d===void 0?null:d;var e=Id("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);dc(e,Vk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function zu(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Bu={};function Du(a){var b=Eu(a),c=document.getElementById(b),d=c&&ku(c);d||c&&!d||(c=Fu(a,b,function(){if(!ku(c)){iu(c);Vr(b);var e=Ya(Wr,b);Rl(e,0)}}))}
function Fu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Vk(a);Zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Eu(a){var b=Id("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Gu(a){var b=B.apply(1,arguments);if(!Hu(a)||b.some(function(d){return!Hu(d)}))throw Error("Only objects may be merged.");
b=x(b);for(var c=b.next();!c.done;c=b.next())Iu(a,c.value)}
function Iu(a,b){for(var c in b)if(Hu(b[c])){if(c in a&&!Hu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Iu(a[c],b[c])}else if(Ju(b[c])){if(c in a&&!Ju(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ku(a[c],b[c])}else a[c]=b[c];return a}
function Ku(a,b){b=x(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Hu(c)?a.push(Iu({},c)):Ju(c)?a.push(Ku([],c)):a.push(c);return a}
function Hu(a){return typeof a==="object"&&!Array.isArray(a)}
function Ju(a){return typeof a==="object"&&Array.isArray(a)}
;function Lu(a){a=a===void 0?!1:a;G.call(this);this.h=new M(a);Ec(this,this.h)}
$a(Lu,G);Lu.prototype.subscribe=function(a,b,c){return this.V?0:this.h.subscribe(a,b,c)};
Lu.prototype.unsubscribe=function(a,b,c){return this.V?!1:this.h.unsubscribe(a,b,c)};
Lu.prototype.l=function(a,b){this.V||this.h.Ya.apply(this.h,arguments)};var Mu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Nu(a,b){var c=c===void 0?!0:c;var d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=oc(window.location.href);e&&d.push(e);e=oc(a);if(Cb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=pc(a),a=qc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ot()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Ou(a,b,f)}else Ou(a,b)}
function Ou(a,b,c){a=Pu(a);b=b?sc(b):"";c=c||5;Zt()&&Em(a,b,c)}
function Pu(a){for(var b=x(Mu),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+kc(a).toString(36)}
;function Qu(a){Ip.call(this,1,arguments);this.csn=a}
y(Qu,Ip);var Rp=new Jp("screen-created",Qu),Ru=[],Su=0,Tu=new Map,Uu=new Map,Vu=new Map;
function Wu(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Xu({cttAuthInfo:Qt(b)||void 0},b),g=x(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&wt(Error("Child VE logged with no data"));if(U("no_client_ve_attach_unless_shown")){var l=Yu(h,b);if(k.veType&&!Uu.has(l)&&!Vu.has(l)&&!e){if(!U("il_attach_cache_limit")||Tu.size<1E3){Tu.set(l,[a,b,c,h]);return}U("il_attach_cache_limit")&&Tu.size>1E3&&wt(new V("IL Attach cache exceeded limit"))}h=Yu(c,b);Tu.has(h)?
Zu(c,b):Vu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(n){return n.getAsJson()})};
b==="UNDEFINED_CSN"?$u("visualElementAttached",f,c):a?ot("visualElementAttached",c,a,f):Nn("visualElementAttached",c,f)}
function $u(a,b,c){Ru.push({Be:a,payload:c,Lg:void 0,options:b});Su||(Su=Sp())}
function Tp(a){if(Ru){for(var b=x(Ru),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Nn(c.Be,c.payload,c.options));Ru.length=0}Su=0}
function Yu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Zu(a,b){a=Yu(a,b);Tu.has(a)&&(b=Tu.get(a)||[],Wu(b[0],b[1],b[2],[b[3]],!0),Tu.delete(a))}
function Xu(a,b){U("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function av(){try{return!!self.localStorage}catch(a){return!1}}
;function bv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function cv(a){if(av()){var b=Object.keys(window.localStorage);b=x(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=bv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function dv(){if(!av())return!1;var a=Wm(),b=Object.keys(window.localStorage);b=x(b);for(var c=b.next();!c.done;c=b.next())if(c=bv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function ev(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(T("INNERTUBE_CLIENT_NAME")==="WEB"||T("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function fv(a){if(T("LOGGED_IN",!0)&&ev()){var b=T("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=oc(window.location.href);c&&b.push(c);c=oc(a);Cb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=pc(a),(b=qc(b))?(b=Pu(b),b=(b=Fm(b)||null)?Il(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;ev()?(d||(d=T("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Nu(a,b)}}
;function gv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Nu(a,b);if(c)return!1;fv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=tc(a,e);fv(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.pe(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function hv(a){if(Pb(T("PLAYER_VARS",{}))!="1"){a&&nl();try{hu().then(function(){},function(){}),Rl(hv,18E5)}catch(b){Al(b)}}}
;var iv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function jv(){var a=a===void 0?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Jl(a).theme;return iv.get(b)||null}catch(c){}return null}
;function kv(){this.h={};if(this.i=Hm()){var a=Fm("CONSISTENCY");a&&lv(this,{encryptedTokenJarContents:a})}}
kv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Oa.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=x(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];lv(this,a)}};
function lv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Em("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var mv=window.location.hostname.split(".").slice(-2).join(".");function nv(){this.j=-1;var a=T("LOCATION_PLAYABILITY_TOKEN");T("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=ov(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var pv;function qv(){pv=E("yt.clientLocationService.instance");pv||(pv=new nv,D("yt.clientLocationService.instance",pv));return pv}
m=nv.prototype;
m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.l||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.l||
this.locationPlayabilityToken};
m.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,T("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=ov(this))&&this.h.set("yt-location-playability-token",a,15552E3):Em("YT_CL",JSON.stringify({loctok:a}),15552E3,mv,!0))};
function ov(a){return a.h===void 0?new En("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=ov(this))&&this.h.remove("yt-location-playability-token"):Gm("YT_CL");this.l=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;T("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function rv(a){var b={"Content-Type":"application/json"};T("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=T("EOM_VISITOR_DATA"):T("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=T("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=T("LOGGED_IN",!1);T("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=T("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=T("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=T("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=T("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=T("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function sv(){this.h={}}
sv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
sv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
sv.prototype.set=function(a,b){this.h[a]=b};
sv.prototype.remove=function(a){delete this.h[a]};function tv(){this.mappings=new sv}
tv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
tv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Xb(b)}}return a};
new tv;function uv(a){return function(){return new a}}
;var vv={},wv=(vv.WEB_UNPLUGGED="^unplugged/",vv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",vv.WEB_UNPLUGGED_OPS="^unplugged/",vv.WEB_UNPLUGGED_PUBLIC="^unplugged/",vv.WEB_CREATOR="^creator/",vv.WEB_KIDS="^kids/",vv.WEB_EXPERIMENTS="^experiments/",vv.WEB_MUSIC="^music/",vv.WEB_REMIX="^music/",vv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",vv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",vv);
function xv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=wv[b];if(c){c=new RegExp(c);for(var d=x(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(wv).forEach(function(g){var h=x(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=x(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function yv(){}
yv.prototype.v=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Dm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=T("INNERTUBE_CONTEXT");if(g){g=Sb(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=T("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;Lm();var l="USER_INTERFACE_THEME_LIGHT";Om(165)?l="USER_INTERFACE_THEME_DARK":Om(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:jv()||l;h.userInterfaceTheme=k;if(!f){if(k=Tm())h.connectionType=k;U("web_log_effective_connection_type")&&(k=Um())&&(g.client.effectiveConnectionType=k)}var n;if(U("web_log_memory_total_kbytes")&&((n=C.navigator)==null?0:n.deviceMemory)){var p;n=(p=C.navigator)==null?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+n*1E6}U("web_gcf_hashes_innertube")&&(k=Bp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},p&&(g.client.configInfo.coldConfigData=
p),n&&(g.client.configInfo.coldHashData=n),k&&(g.client.configInfo.hotHashData=k));p=Jl(C.location.href);!U("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},U("kevlar_woffle")&&ym.h&&(p=ym.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=zm(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!U("web_lr_app_quality_killswitch")&&(p=T("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=T("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!U("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}r=
void 0}r&&(h.timeZone=r)}(r=T("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=Vl();kv.h||(kv.h=new kv);h=kv.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!U("web_prequest_context_killswitch")&&(t=T("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=Lm();t=Om(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);U("warm_op_csn_cleanup")?e&&(f=Ot())&&(g.clientScreenNonce=f):!f&&(f=Ot())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;qv().setLocationOnInnerTubeContext(g);try{var u=Ml(),v=u.bid;delete u.bid;g.adSignalsInfo={params:[],bid:v};var z=x(Object.entries(u));for(var F=z.next();!F.done;F=z.next()){var H=x(F.value),O=H.next().value,S=H.next().value;u=O;v=S;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:u,value:""+
v})}var da;if(U("add_ifa_to_tvh5_requests")&&((da=g.client)==null?void 0:da.clientName)==="TVHTML5"){var va=T("INNERTUBE_CONTEXT");va.adSignalsInfo&&(g.adSignalsInfo.advertisingId=va.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=va.adSignalsInfo.limitAdTracking)}}catch(ea){vt(ea)}z=g}else vt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(F=this.i(a)){this.h(z,F,b);var P;
b="/youtubei/v1/"+xv(this.j());(F=(P=Es(a.commandMetadata,al))==null?void 0:P.apiUrl)&&(b=F);P=b;(b=T("INNERTUBE_HOST_OVERRIDE"))&&(P=String(b)+String(pc(P)));b={};U("web_api_key_killswitch")&&(b.key=T("INNERTUBE_API_KEY"));U("json_condensed_response")&&(b.prettyPrint="false");P=Kl(P,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:P,ib:Yt(P),Oa:z,config:a};a.config.Xb?a.config.Xb.identity=c:a.config.Xb={identity:c};return a}vt(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(yv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function zv(){}
y(zv,yv);function Av(){}
y(Av,zv);Av.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:Yt("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
Av.prototype.j=function(){return[]};
Av.prototype.i=function(){};
Av.prototype.h=function(){};var Bv={},Cv=(Bv.GET_DATASYNC_IDS=uv(Av),Bv);function Dv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ev(){var a=Dv();a.info||(a.info={});return a.info}
function Fv(a){a=Dv(a);a.metadata||(a.metadata={});return a.metadata}
function Gv(a){a=Dv(a);a.tick||(a.tick={});return a.tick}
function Hv(a){a=Dv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Iv(a){a=Hv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Jv(a){var b=Dv(a).nonce;b||(b=Et(),Dv(a).nonce=b);return b}
;function Kv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Lv(a){a=a||"";var b=E("ytcsi.reference");b||(Kv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Kv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Mv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings=
"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",
X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function Nv(a,b){Ip.call(this,1,arguments);this.timer=b}
y(Nv,Ip);var Ov=new Jp("aft-recorded",Nv);var Pv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Pv);function Qv(){this.h=0}
function Rv(){Qv.h||(Qv.h=new Qv);return Qv.h}
Qv.prototype.tick=function(a,b,c,d){Sv(this,"tick_"+a+"_"+b)||Nn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Qv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Sv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Nn("latencyActionInfo",a,{cttAuthInfo:c}))};
Qv.prototype.jspbInfo=function(){};
Qv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Sv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Nn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Sv(a,b){Pv[b]=Pv[b]||{count:0};var c=Pv[b];c.count++;c.time=W();a.h||(a.h=Ym(function(){var d=W(),e;for(e in Pv)Pv[e]&&d-Pv[e].time>6E4&&delete Pv[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||wt(c)),!0):!1}
;var Tv=window;function Uv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Vv(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Wv(e.requestStart),e.responseEnd=Wv(e.responseEnd),e.redirectStart=Wv(e.redirectStart),e.redirectEnd=Wv(e.redirectEnd),e.domainLookupEnd=Wv(e.domainLookupEnd),e.connectStart=Wv(e.connectStart),e.connectEnd=
Wv(e.connectEnd),e.responseStart=Wv(e.responseStart),e.secureConnectionStart=Wv(e.secureConnectionStart),e.domainLookupStart=Wv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=U("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Wv(a){return Math.round(Xv()+a)}
function Xv(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Tv.performance||Tv.mozPerformance||Tv.msPerformance||Tv.webkitPerformance||new Uv;var Yv=!1,Zv=!1,$v={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Dd,Y);function aw(a,b){if(!U("web_csi_action_sampling_enabled")||!Dv(b).actionDisabled){var c=Lv(b||"");Gu(c.info,a);a.loadType&&(c=a.loadType,Fv(b).loadType=c);Gu(Iv(b),a);c=Jv(b);b=Dv(b).cttAuthInfo;Rv().info(a,c,b)}}
function bw(){var a,b,c,d;return((d=gs().resolve(new $r(xp))==null?void 0:(a=yp())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!U("web_csi_action_sampling_enabled")||!Dv(c).actionDisabled){var d=Jv(c),e;if(e=U("web_csi_debug_sample_enabled")&&d){(gs().resolve(new $r(xp))==null?0:yp())&&!Zv&&(Zv=!0,Z("gcfl",W(),c));var f,g,h;e=(gs().resolve(new $r(xp))==null?void 0:(f=yp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=bw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=f%1E5%e!==0;Dv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,aw(f,c));Dv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||U("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f-=Y.timeOrigin||Y.timing.navigationStart;try{Y.mark(e,{startTime:f})}catch(k){}}e=Lv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=x(e.callback[a]),f=e.next();!f.done;f=
e.next())f=f.value,f();e=Hv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Gv(c);e=b||W();U("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Dv(c).cttAuthInfo;a==="_start"?(a=Rv(),Sv(a,"baseline_"+d)||Nn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Rv().tick(a,d,b,f);cw(c);return e}}}
function dw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=wr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function ew(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=x(Object.entries(T("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=x(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function fw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);$b(window)&&a.setAttribute("nonce",$b(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Xv(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function gw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Eb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Wv(b.startTime)),Z("wffe",Wv(b.responseEnd)))}
function hw(a){var b=iw("aft",a);if(b)return b;b=T((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=iw(b[d],a);if(e)return e}return NaN}
function iw(a,b){if(a=Gv(b)[a])return typeof a==="number"?a:a[a.length-1]}
function cw(a){var b=iw("_start",a),c=hw(a),d=U("enable_cow_info_csi")||!Yv;b&&c&&d&&(Op(Ov,new Nv(Math.round(c-b),a)),Yv=!0)}
function jw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Hb(a,function(b){return b.name==="first-paint"}))return Wv(a.startTime)}a=Y.timing;
return a.xe?Math.max(0,a.xe):0}
;function kw(a,b){zl(function(){Lv("").info.actionType=a;b&&vl("TIMING_AFT_KEYS",b);vl("TIMING_ACTION",a);var c=ew();Object.keys(c).length>0&&aw(c);c={isNavigation:!0,actionType:Mv[T("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=T("PREVIOUS_ACTION");d&&(c.previousAction=Mv[d]||"LATENCY_ACTION_UNKNOWN");if(d=T("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=T("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Ot())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=dw();if(d===1||d===-1)c.isVisible=!0;Fv();Ev();
c.loadType="cold";d=Ev();var e=Vv(),f=Xv(),g=T("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=jw();d>0&&Z("fpt",d);d=Vv();d.isPerformanceNavigationTiming&&aw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Xv()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&gw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in $v)$v.hasOwnProperty(h)&&(e=$v[h],
fw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=x(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});aw(c);c=Hv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Iv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Fv().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Gv();e=Hv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,iw(k));else if(U("log_repeated_ytcsi_ticks"))for(f=
x(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=x(h);for(e=h.next();!e.done;e=h.next())d=e.value,Gu(c,d),Gu(k,d),d=!0;d&&aw(k)}D("ytglobal.timingready_",!0);k=T("TIMING_ACTION");E("ytglobal.timingready_")&&k&&lw()&&hw()&&cw()})()}
function lw(){return zl(function(){return mw()})()}
function nw(a,b,c){zl(aw)(a,b,c===void 0?!1:c)}
function ow(a,b,c){return zl(Z)(a,b,c)}
function mw(){return zl(function(){return"_start"in Gv()})()}
function pw(){zl(function(){var a=Jv();requestAnimationFrame(function(){setTimeout(function(){a===Jv()&&ow("ol",void 0,void 0)},0)})})()}
var qw=window;qw.ytcsi&&(qw.ytcsi.infoGel=nw,qw.ytcsi.tick=ow);var rw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),sw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function tw(a,b,c,d){this.v=a;this.fa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Sb||(a.Sb={});a.Sb=Object.assign({},Cv,a.Sb)}
function uw(a,b,c,d){if(tw.h!==void 0){if(d=tw.h,a=[a!==d.v,b!==d.fa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else tw.h=new tw(a,b,c,d)}
function vw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Dm:c;var d=ww(a,b);return d?new Wd(function(e,f){var g,h,k,l,n;return A(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.v(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));p.B(0);break}fv(h.input);l=((k=h.ib)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.l.cf){var r=h.config,t;r=r==null?void 0:(t=r.Xb)==null?void 0:t.sessionIndex;t=Cm(0,{sessionIndex:r});n=Object.assign({},
rv(l),t);p.B(4);break}return p.yield(xw(h.config,l),5);case 5:n=p.i;case 4:e(yw(a,h,n)),p.h=0}})}):ae(new V("Error: No request builder found for command.",b))}
function zw(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=x(rw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function yw(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,n,p,r,t,u,v,z,F,H,O,S,da,va,P,ea,na,Na,Ma,Ug,Vg,Dr,Er,Fr;return A(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Oa)==null?0:g.context)){ha.B(4);break}h=b.Oa.context;ha.B(5);break;case 5:k=x([]),l=k.next();case 8:if(l.done){ha.B(4);break}n=l.value;return ha.yield(n.Rg(h),9);case 9:l=k.next();ha.B(8);break;case 4:if((p=a.i)==null||!p.Wg(b.input,b.Oa)){ha.B(12);break}return ha.yield(a.i.Ng(b.input,
b.Oa),13);case 13:return r=ha.i,U("kevlar_process_local_innertube_responses_killswitch")||zw(a,r,b),ha.return(r);case 12:return(v=(u=b.config)==null?void 0:u.Ug)&&a.h.has(v)?t=a.h.get(v):(z=JSON.stringify(b.Oa),O=(H=(F=b.ib)==null?void 0:F.headers)!=null?H:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},O,c)}),S=Object.assign({},b.ib),b.ib.method==="POST"&&(S=Object.assign({},S,{body:z})),((da=b.config)==null?0:da.He)&&ow(b.config.He),va=function(){return a.fa.fetch(b.input,S,b.config)},t=
va(),v&&a.h.set(v,t)),ha.yield(t,14);
case 14:if((P=ha.i)&&"error"in P&&((ea=P)==null?0:(na=ea.error)==null?0:na.details))for(Na=P.error.details,Ma=x(Na),Ug=Ma.next();!Ug.done;Ug=Ma.next())Vg=Ug.value,(Dr=Vg["@type"])&&sw.indexOf(Dr)>-1&&(delete Vg["@type"],P=Vg);v&&a.h.has(v)&&a.h.delete(v);((Er=b.config)==null?0:Er.Ie)&&ow(b.config.Ie);if(P||(Fr=a.i)==null||!Fr.Fg(b.input,b.Oa)){ha.B(15);break}return ha.yield(a.i.Mg(b.input,b.Oa),16);case 16:P=ha.i;case 15:return zw(a,P,b),d(),ha.return(P||void 0)}})}
function ww(a,b){a:{a=a.v;var c,d=(c=Es(b,bl))==null?void 0:c.signal;if(d&&a.Sb&&(c=a.Sb[d])){var e=c();break a}var f;if((c=(f=Es(b,$k))==null?void 0:f.request)&&a.Rd&&(f=a.Rd[c])){e=f();break a}for(e in b)if(a.Xc[e]&&(b=a.Xc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function xw(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Xb)==null?void 0:d.sessionIndex;var h=g.yield;var k=Cm(0,{sessionIndex:e});if(!(k instanceof Wd)){var l=new Wd(Dd);Xd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},rv(b),f)))})}
;var Aw=new Zr("INNERTUBE_TRANSPORT_TOKEN");function Bw(){}
y(Bw,zv);Bw.prototype.j=function(){return su};
Bw.prototype.i=function(a){return Es(a,ml)||void 0};
Bw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Bw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Cw(){}
y(Cw,zv);Cw.prototype.j=function(){return tu};
Cw.prototype.i=function(a){return Es(a,ll)||void 0};
Cw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Cw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Dw=new Zr("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Ew(a){this.m=a}
y(Ew,zv);Ew.prototype.j=function(){return nu};
Ew.prototype.i=function(a){return Es(a,gl)||Es(a,hl)||Es(a,fl)};
Ew.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.m)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.m.i(b.clientParamIdentifier)}};
Ew[Yr]=[Dw];function Fw(){}
y(Fw,zv);Fw.prototype.j=function(){return pu};
Fw.prototype.i=function(a){return Es(a,dl)||void 0};
Fw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Fw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Gw(){}
y(Gw,zv);Gw.prototype.j=function(){return qu};
Gw.prototype.i=function(a){return Es(a,kl)||void 0};
Gw.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Hw(){}
y(Hw,zv);Hw.prototype.j=function(){return ru};
Hw.prototype.i=function(a){return Es(a,jl)||void 0};
Hw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Iw(){}
y(Iw,zv);Iw.prototype.j=function(){return ou};
Iw.prototype.i=function(a){return Es(a,il)};
Iw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function Jw(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
y(Jw,V);var Kw=new Zr("NETWORK_SLI_TOKEN");function Lw(a){this.h=a}
Lw.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=Mw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){wt(g);
if((c==null?0:c.Xd)&&g instanceof Jw&&g.errorType===1)return Promise.reject(g)}))})};
function Mw(a,b,c){if(a.h){var d=mc(nc(5,xc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;U("wug_networking_gzip_request")&&(a=pq(c));return new window.Request(b,a)}
Lw.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.qe)&&a.ok)return gh(b.qe,d);d=d.replace(")]}'","");if((b==null?0:b.Xd)&&d)try{var e=JSON.parse(d)}catch(g){throw new Jw(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ig(),c=c.then(function(d){wt(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Lw[Yr]=[new $r(Kw)];var Nw=new Zr("NETWORK_MANAGER_TOKEN");var Ow;function Pw(){var a,b,c;return A(function(d){if(d.h==1)return a=gs().resolve(Aw),a?d.yield(vw(a),2):(wt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return wt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Gg;return d.return(c)}wt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Qw(){var a;return(a=T("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Rw=C.caches,Sw;function Tw(a){var b=a.indexOf(":");return b===-1?{od:a}:{od:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Uw(){return A(function(a){if(Sw!==void 0)return a.return(Sw);Sw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Rw.open("test-only"),4);case 4:return d.yield(Rw.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Sw)})}
function Vw(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Uw(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Rw.keys(),3)}c=k.i;d=x(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Tw(f),h=g.datasyncId,!h||a.includes(h)||b.push(Rw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Ww(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Uw(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Wm("cache contains other");return h.yield(Rw.keys(),3)}b=h.i;c=x(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Tw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Xw(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Yw(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Zw(a){if(Xw()){var b=Object.keys(window.sessionStorage);b=x(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Yw(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function $w(){if(!Xw())return!1;var a=Wm(),b=Object.keys(window.sessionStorage);b=x(b);for(var c=b.next();!c.done;c=b.next())if(c=Yw(c.value),c!==void 0&&c!==a)return!0;return!1}
;function ax(){Pw().then(function(a){a&&(cp(a),Vw(a),cv(a),Zw(a))})}
function bx(){var a=new hr;fj.pa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){g.B(2);break}b=Wm("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];cp(h);Vw(h);cv(h);Zw(h);return g.return()}c=dv();d=$w();return g.yield(Ww(),3);case 3:return e=g.i,g.yield(dp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?ax():a.h.add("publicytnetworkstatus-online",ax,!0,void 0,void 0),g.h=0}})})}
;function cx(){this.state=1;this.h=null}
m=cx.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new ac(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=Uk(a.interpreterSafeUrl).toString());dx(this,d,e,a.program,b,c)}else wt(Error("Cannot initialize botguard without program"))};
function dx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,wu(c,function(){window[g]?ex(a,d,g,e):(a.state=3,yu(c),wt(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Id("SCRIPT"),b instanceof ac?cc(f,b):f.textContent=b,f.nonce=$b(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?ex(a,d,g,e):(a.state=4,wt(new V("Unable to load Botguard from JS")))):wt(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return this.state===2};
function ex(a,b,c,d){a.state=5;try{var e=new Qi({program:b,ee:c,Fe:U("att_web_record_metrics"),Ea:"aGIf"});e.Ye.then(function(){a.state=6;d&&d(b)});
a.Mc(e)}catch(f){a.state=7,f instanceof Error&&wt(f)}}
m.invoke=function(a){a=a===void 0?{}:a;return this.Qc()?this.Fd({Yc:a}):null};
m.dispose=function(){this.Mc(null);this.state=8};
m.Qc=function(){return!!this.h};
m.Fd=function(a){return this.h.zd(a)};
m.Mc=function(a){Cc(this.h);this.h=a};var fx=[],gx=!1;function hx(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&Zt()){var a=T("PLAYER_VARS",{});if(Pb(a)!="1"&&!$t(a)){var b=function(){gx=!0;"google_ad_status"in window?vl("DCLKSTAT",1):vl("DCLKSTAT",2)};
try{wu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}fx.push(fj.pa(function(){if(!(gx||"google_ad_status"in window)){try{Au("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}gx=!0;vl("DCLKSTAT",3)}},5E3))}}}
function ix(){var a=Number(T("DCLKSTAT",0));return isNaN(a)?0:a}
;function jx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function kx(){cx.apply(this,arguments)}
y(kx,cx);kx.prototype.Mc=function(a){var b;(b=jx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.zd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
kx.prototype.Qc=function(){return!!jx()};
kx.prototype.Fd=function(a){return jx().bgvmc(a)};function lx(a){qs.call(this,a===void 0?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
y(lx,qs);lx.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
lx.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
lx.prototype.m=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
lx.prototype.i=function(){this.h=new Map};function mx(a){qs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
y(mx,qs);mx.prototype.i=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
mx.prototype.h=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
mx.prototype.v=function(a,b){a(b==null?void 0:b.event)};
mx.prototype.m=function(a,b){a(b==null?void 0:b.event)};function nx(){this.l=new lx;this.v=new mx}
nx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function ox(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
ox.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Ot(c===void 0?0:c)){a=this.client;d=new Ht({trackingParams:d});var e=void 0;if(U("no_client_ve_attach_unless_shown")){var f=Yu(d,c);Uu.set(f,!0);Zu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Xu({cttAuthInfo:Qt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?$u("visualElementGestured",f,d):a?ot("visualElementGestured",d,a,f):Nn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
ox.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Ht({trackingParams:a}),b,c===void 0?0:c)};
ox.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Ot(d);a||(a=(a=Lt(d===void 0?0:d))?new Ht({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Xu({cttAuthInfo:Qt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?$u("visualElementStateChanged",d,b):a?ot("visualElementStateChanged",b,a,d):Nn("visualElementStateChanged",b,d))}};
function px(a,b){if(b===void 0)for(var c=Nt(),d=0;d<c.length;d++)c[d]!==void 0&&px(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Wu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function qx(){nx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));U("web_log_cfg_cee_ks")||Ym(rx)}
y(qx,nx);qx.prototype.j=function(){Nn("finalPayload",{csn:Ot()})};
qx.prototype.h=function(){Bt(Ct)};
qx.prototype.i=function(){var a=px;ox.h||(ox.h=new ox);a(ox.h)};
function rx(){var a=T("CLIENT_EXPERIMENT_EVENTS");if(a){var b=$i();a=x(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Nn("genericClientExperimentEvent",{eventType:c});delete ul.CLIENT_EXPERIMENT_EVENTS}}
;function sx(){}
function tx(){var a=E("ytglobal.storage_");a||(a=new sx,D("ytglobal.storage_",a));return a}
sx.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(ux()):d.return()})};
function ux(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",sx);function Ln(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Ln.prototype.Ha=function(a){this.handleError(a)};
Ln.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":vx(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function vx(a,b){tx().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:wx(c==null?void 0:c.usage),deviceStorageQuotaMbytes:wx(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function wx(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;function xx(a,b,c){G.call(this);var d=this;this.channel="widget";this.sessionId=this.h=this.commands=this.l=null;this.targetOrigin="*";this.j=c||T("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.i=b||null;this.m=!!a;this.listener=function(e){a:if(!(d.j!=="*"&&e.origin!==d.j||d.i&&e.source!==d.i||typeof e.data!=="string")){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(f==null||d.m&&(d.sessionId&&d.sessionId!==f.id||d.channel&&d.channel!==f.channel))&&f)switch(f.event){case "listening":e.origin!==
"null"&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.commands||Cb(d.commands,f.func)>=0)&&d.l(f.func,f.args,e.origin)}}};
window.addEventListener("message",this.listener)}
y(xx,G);xx.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){wt(d)}}};
xx.prototype.U=function(){window.removeEventListener("message",this.listener);G.prototype.U.call(this)};var yx={},zx=(yx["api.invalidparam"]=2,yx.auth=150,yx["drm.auth"]=150,yx["heartbeat.net"]=150,yx["heartbeat.servererror"]=150,yx["heartbeat.stop"]=150,yx["html5.unsupportedads"]=5,yx["fmt.noneavailable"]=5,yx["fmt.decode"]=5,yx["fmt.unplayable"]=5,yx["html5.missingapi"]=5,yx["html5.unsupportedlive"]=5,yx["drm.unavailable"]=5,yx["mrm.blocked"]=151,yx["embedder.identity.denied"]=152,yx);var Ax=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Bx(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Cx(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=x(Ax);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Dx(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Ex(){var a=Fx;this.l=[];this.isReady=!1;this.v={};this.j=[];this.i=[];this.A=!1;this.m=U("web_player_split_event_bus_iframe");var b=this.h=new xx(!!T("WIDGET_ID_ENFORCE")),c=this.Ee.bind(this);b.l=c;b.commands=null;this.h.channel="widget";if(b=T("WIDGET_ID"))this.h.sessionId=b;this.api=a;Gx(this,"onReady",this.onReady.bind(this));Gx(this,"onVideoProgress",this.Te.bind(this));Gx(this,"onVolumeChange",this.Ue.bind(this));Gx(this,"onApiChange",this.Me.bind(this));Gx(this,"onPlaybackQualityChange",
this.Qe.bind(this));Gx(this,"onPlaybackRateChange",this.Re.bind(this));Gx(this,"onStateChange",this.Se.bind(this));Gx(this,"onWebglSettingsChanged",this.Ve.bind(this));Gx(this,"onCaptionsTrackListChanged",this.Ne.bind(this));Gx(this,"captionssettingschanged",this.Oe.bind(this))}
m=Ex.prototype;
m.Ee=function(a,b,c){if(a==="addEventListener"&&b)a=b[0],a==="onReady"?this.api.logApiCall(a+" invocation",c):a==="onError"&&this.A&&(this.api.logApiCall(a+" invocation",c,this.errorCode),this.errorCode=void 0),this.api.logApiCall(a+" registration",c),this.v[a]||a==="onReady"||(b=Hx(this,a,c),this.i.push({eventType:a,listener:b,origin:c}),this.m?this.api.handleExternalCall("addEventListener",[a,b],c):this.api.addEventListener(a,b),this.v[a]=!0);else if(this.api.isExternalMethodAvailable(a,c)){b=b||
[];if(b.length>0&&Bx(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Cx(d[0],d[1]!==void 0?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];typeof e==="string"&&(e={mediaContentUrl:e,startSeconds:d[1]!==void 0?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=Cx(e);break;case "loadPlaylist":case "cuePlaylist":e=
Dx(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Bx(a)&&Ix(this,Jx(this))}};
m.ae=function(){this.isReady=!0;this.sendMessage("initialDelivery",Jx(this));this.sendMessage("onReady");Db(this.l,this.wd,this);this.l=[]};
function Ix(a,b){a.sendMessage("infoDelivery",b)}
m.wd=function(a){this.isReady?this.h.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.wd({event:a,info:b===void 0?null:b})};
function Hx(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
m.onReady=function(){var a=this.h,b=this.ae.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.A=!0;a=a.errorCode;var c=c===void 0?5:c;this.errorCode=a?zx[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
function Gx(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Jx(a){if(!a.api)return null;var b=a.api.getApiInterface();Ib(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
m.Se=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ix(this,a)};
m.Qe=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Ix(this,a)};
m.Re=function(a){Ix(this,{playbackRate:a})};
m.Me=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ue=function(){Ix(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Te=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ix(this,a)};
m.Ve=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ix(this,a)};
m.Ne=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Ix(this,a)}};
m.Oe=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Ix(this,a)}};
m.dispose=function(){this.h=null;for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.m?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};function Kx(a,b){G.call(this);this.h={};this.started=!1;this.i=U("web_player_split_event_bus_iframe");this.connection=b;this.connection.subscribe("command",this.rd,this);this.api=a;this.start()}
y(Kx,G);m=Kx.prototype;m.start=function(){this.started||this.V||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.V&&this.connection.jb(a,b)};
m.rd=function(a,b,c){if(this.started&&!this.V){var d=b||{};switch(a){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,c);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,c);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Lx(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Mx(a,c))&&this.jb(a,c))}}};
m.addListener=function(a,b,c){a in this.h||(b=this.Pe.bind(this,a),this.h[a]=b,this.addEventListener(a,b,c))};
m.Pe=function(a,b){this.started&&!this.V&&this.connection.jb(a,Nx(a,b))};
m.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
m.addEventListener=function(a,b,c){this.i?this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
m.removeEventListener=function(a,b,c){this.i?this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Lx(a,b){switch(a){case "loadVideoById":return a=Cx(b),[a];case "cueVideoById":return a=Cx(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Dx(b),[a];case "cuePlaylist":return a=Dx(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Mx(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Nx(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
m.U=function(){this.connection.unsubscribe("command",this.rd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.U.call(this);delete this.api};function Ox(a,b,c){Lu.call(this);this.j=a;this.i=b;this.id=c}
y(Ox,Lu);Ox.prototype.jb=function(a,b){this.V||this.j.jb(this.i,this.id,a,b)};
Ox.prototype.U=function(){this.i=this.j=null;Lu.prototype.U.call(this)};function Px(a,b,c){G.call(this);this.h=a;this.origin=c;this.j=Cr(window,"message",this.i.bind(this));this.connection=new Ox(this,a,b);Ec(this,this.connection)}
y(Px,G);Px.prototype.jb=function(a,b,c,d){this.V||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Px.prototype.i=function(a){if(!this.V&&a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.V||c.l("command",b.command,b.data,a.origin)}}}};
Px.prototype.U=function(){Hr(this.j);this.h=null;G.prototype.U.call(this)};var Qx=new kx;function Rx(){return Qx.Qc()}
function Sx(a){a=a===void 0?{}:a;return Qx.invoke(a)}
;function Tx(a,b,c,d,e){G.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.uc=e;this.Za=!1;this.api={};this.ia=this.m=null;this.W=new M;this.h={};this.da=this.xa=this.elementId=this.Cb=this.config=null;this.ba=!1;this.j=this.H=null;this.Ga={};this.vc=["onReady"];this.lastError=null;this.Ub=NaN;this.P={};this.ga=0;this.i=this.l=a;Ec(this,this.W);Ux(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Vx(this),Wx(this))}
y(Tx,G);m=Tx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.V){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof mu||(b=new mu(b));this.config=b;this.setConfig(a);Wx(this);this.isReady()&&Xx(this)}};
function Vx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Cb=a;this.config=Yx(a);Vx(this);if(!this.xa){var b;this.xa=Zx(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Yi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Yi(Number(a)||a))};
function Xx(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function $x(a){var b=!0,c=ay(a);c&&a.config&&(b=c.dataset.version===by(a));return b&&!!E("yt.player.Application.create")}
function Wx(a){if(!a.V&&!a.ba){var b=$x(a);if(b&&(ay(a)?"html5":null)==="html5")a.da="html5",a.isReady()||cy(a);else if(dy(a),a.da="html5",b&&a.j&&a.l)a.l.appendChild(a.j),cy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=ey(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Yx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.uc);cy(a)};
a.ba=!0;b?a.H():(wu(by(a),a.H),(b=fy(a))&&Du(b||""),gy(a)&&!c&&D("yt.player.Application.create",null))}}}
function ay(a){var b=Hd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function cy(a){if(!a.V){var b=ay(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.ba=!1;if(!ey(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}hy(a)}else a.Ub=setTimeout(function(){cy(a)},50)}}
function hy(a){Ux(a);a.Za=!0;var b=ay(a);if(b){a.m=iy(a,b,"addEventListener");a.ia=iy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=iy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);Xx(a);a.xa&&a.xa(a.api);a.W.Ya("onReady",a.api)}
function iy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function Ux(a){a.Za=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.m=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Cb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Za};
m.addEventListener=function(a,b){var c=this,d=Zx(this,b);d&&(Cb(this.vc,a)>=0||this.h[a]||(b=jy(this,a),this.m&&this.m(a,b)),this.W.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.V||(b=Zx(this,b))&&this.W.unsubscribe(a,b)};
function Zx(a,b){var c=b;if(typeof b==="string"){if(a.Ga[b])return a.Ga[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ga[b]=c}return c?c:null}
function jy(a,b){function c(d){var e=setTimeout(function(){if(!a.V){try{a.W.Ya(b,d!=null?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.P;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.P,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.da||(ay(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function dy(a){a.cancel();Ux(a);a.da=null;a.config&&(a.config.loaded=!1);var b=ay(a);b&&($x(a)||!gy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.H&&Au(by(this),this.H);clearTimeout(this.Ub);this.ba=!1};
m.U=function(){dy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ga=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Cb=this.config=this.api=null;delete this.l;delete this.i;G.prototype.U.call(this)};
function gy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function by(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function fy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ey(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Yx(a){for(var b={},c=x(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Rb(e):e}return b}
;var ky={},ly="player_uid_"+(Math.random()*1E9>>>0);function my(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Hd(c):c;var e=ly+"_"+Sa(c),f=ky[e];if(f&&d)return ny(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Tx(c,e,a,b,void 0);ky[e]=f;f.addOnDisposeCallback(function(){delete ky[f.getId()]});
return f.api}
function ny(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Fx=null,oy=null,py=null;
function qy(){pw();var a=Lm(),b=Om(119),c=window.devicePixelRatio>1;if(document.body&&nj(document.body,"exp-invert-logo"))if(c&&!nj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!nj(d,"inverted-hdpi")){var e=lj(d);mj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&nj(document.body,"inverted-hdpi")&&oj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Pm(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Im[b]:(c=d.toString(16),Im[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Im)Im.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Im[f])));var f=d.join("&");Em(b,f,63072E3,a.i,c)}}
function ry(){sy()}
function ty(){ow("ep_init_pr");sy()}
function sy(){var a=Fx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function uy(){Fx&&Fx.sendAbandonmentPing&&Fx.sendAbandonmentPing();T("PL_ATT")&&Qx.dispose();for(var a=fj,b=0,c=fx.length;b<c;b++)a.qa(fx[b]);fx.length=0;yu("//static.doubleclick.net/instream/ad_status.js");gx=!1;vl("DCLKSTAT",0);Dc(py,oy);Fx&&(Fx.removeEventListener("onVideoDataChange",ry),Fx.destroy())}
;D("yt.setConfig",vl);D("yt.config.set",vl);D("yt.setMsg",vu);D("yt.msgs.set",vu);D("yt.logging.errors.log",vt);
D("writeEmbed",function(){var a=T("PLAYER_CONFIG");if(!a){var b=T("PLAYER_VARS");b&&(a={args:b})}hv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=T("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);kw("embed",["ol"]);c=Qw();if(!c.serializedForcedExperimentIds){var d=Jl(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&kw("watch",["pbs","pbu","pbp"]);Fx=my(a,c);Fx.addEventListener("onVideoDataChange",ry);Fx.addEventListener("onReady",ty);a=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?py=new Ex:T("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(oy=new Px(window.parent,a,b),py=new Kx(Fx,oy.connection));hx();U("ytidb_create_logger_embed_killswitch")||Kn();a={};qx.h||(qx.h=new qx);qx.h.install((a.flush_logs={callback:function(){at()}},a));
tr();U("ytidb_clear_embedded_player")&&fj.pa(function(){var f,g;if(!Ow){var h=gs();bs(h,{oc:Nw,Cd:Lw});var k={Xc:{feedbackEndpoint:uv(Fw),modifyChannelNotificationPreferenceEndpoint:uv(Gw),playlistEditEndpoint:uv(Hw),shareEntityEndpoint:uv(Ew),subscribeEndpoint:uv(Bw),unsubscribeEndpoint:uv(Cw),webPlayerShareEntityServiceEndpoint:uv(Iw)}},l=qv(),n={};l&&(n.client_location=l);f===void 0&&(f=Bm());g===void 0&&(g=h.resolve(Nw));uw(k,g,f,n);bs(h,{oc:Aw,Dd:tw.h});Ow=h.resolve(Aw)}bx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Rx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Sx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||ix);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||gv);D("yt.util.activity.init",E("yt.util.activity.init")||Kr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Nr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Lr);window.addEventListener("load",zl(function(){qy()}));
window.addEventListener("pageshow",zl(function(a){a.persisted||qy()}));
window.addEventListener("pagehide",zl(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?uy():a.persisted||uy()}));
window.onerror=function(a,b,c,d,e){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var f=!1,g=wl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(g[h].src.indexOf("/debug-")>0){f=!0;break}}f&&(f=!1,e?f=!0:(typeof a==="string"?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?vt(e):wt(e))};
le=xt;window.addEventListener("unhandledrejection",function(a){xt(a.reason)});
Db(T("ERRORS")||[],function(a){vt.apply(null,a)});
vl("ERRORS",[]);}).call(this);
