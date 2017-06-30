/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem
)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
    b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);;
//http://api.filepicker.io/v2/filepicker.js
"use strict";!function(){var e=function(){var e={},t=function(t,r,n){for(var o=t.split("."),i=0;i<o.length-1;i++)n[o[i]]||(n[o[i]]={}),n=n[o[i]];"function"==typeof r?r.isClass?n[o[i]]=r:n[o[i]]=function(){return r.apply(e,arguments)}:n[o[i]]=r},r=function(r,n,o){t(r,n,e),o&&t(r,n,window.filepicker)},n=function(t,n,o){"function"==typeof t&&(o=n,n=t,t=""),t&&(t+=".");var i=n.call(e);for(var a in i)r(t+a,i[a],o)},o=function(t){t.apply(e,arguments)};return{extend:n,internal:o}}();if(window.filepicker)for(var t in e)window.filepicker[t]=e[t];else window.filepicker=e}(),filepicker.extend("comm",function(){var e=this,t="filepicker_comm_iframe",r="fpapi_comm_iframe",n=function(){if(void 0===window.frames[t]){a();var n;n=document.createElement("iframe"),n.id=n.name=t,n.src=e.urls.COMM,n.style.display="none",document.body.appendChild(n)}if(void 0===window.frames[r]){a();var o;o=document.createElement("iframe"),o.id=o.name=r,o.src=e.urls.API_COMM,o.style.display="none",document.body.appendChild(o)}},o=function(t){if(t.origin===e.urls.BASE||t.origin===e.urls.DIALOG_BASE){try{var r=e.json.parse(t.data)}catch(n){console.log("[Filepicker] Failed processing message:",t.data)}r&&e.handlers.run(r)}},i=!1,a=function(){if(!i)if(i=!0,window.addEventListener)window.addEventListener("message",o,!1);else{if(!window.attachEvent)throw new e.FilepickerException("Unsupported browser");window.attachEvent("onmessage",o)}},s=function(){if(window.removeEventListener)window.removeEventListener("message",o,!1);else{if(!window.attachEvent)throw new e.FilepickerException("Unsupported browser");window.detachEvent("onmessage",o)}if(i){i=!1;for(var n=document.getElementsByName(t),a=0;a<n.length;a++)n[a].parentNode.removeChild(n[a]);try{delete window.frames[t]}catch(s){}for(var c=document.getElementsByName(r),l=0;l<c.length;l++)c[l].parentNode.removeChild(c[l]);try{delete window.frames[r]}catch(s){}}};return{openChannel:n,closeChannel:s}}),filepicker.extend("comm_fallback",function(){var e,t,r=this,n="filepicker_comm_iframe",o="host_comm_iframe",i="",a=200,s=function(){c()},c=function(){if(void 0===window.frames[o]){var e;e=document.createElement("iframe"),e.id=e.name=o,i=e.src=r.urls.constructHostCommFallback(),e.style.display="none";var t=function(){i=e.contentWindow.location.href,l()};e.attachEvent?e.attachEvent("onload",t):e.onload=t,document.body.appendChild(e)}},l=function(){if(void 0===window.frames[n]){var e;e=document.createElement("iframe"),e.id=e.name=n,e.src=r.urls.FP_COMM_FALLBACK+"?host_url="+encodeURIComponent(i),e.style.display="none",document.body.appendChild(e)}f()},u=!1,d="",p=function(){var e=window.frames[n];if(e){var t=e.frames[o];if(t){var i=t.location.hash;if(i&&"#"===i.charAt(0)&&(i=i.substr(1)),i!==d&&(d=i)){var a;try{a=r.json.parse(i)}catch(s){}a&&r.handlers.run(a)}}}},f=function(){u||(u=!0,e=window.setInterval(p,a))},m=function(){if(window.clearInterval(e),u){u=!1;for(var t=document.getElementsByName(n),r=0;r<t.length;r++)t[r].parentNode.removeChild(t[r]);try{delete window.frames[n]}catch(i){}for(t=document.getElementsByName(o),r=0;r<t.length;r++)t[r].parentNode.removeChild(t[r]);try{delete window.frames[o]}catch(i){}}},h=!("postMessage"in window),g=function(){t=r.comm,r.comm={openChannel:s,closeChannel:m}};return h&&g(),{openChannel:s,closeChannel:m,isEnabled:h}}),filepicker.extend("cookies",function(){var e=this,t=function(t){var r=function(r){"ThirdPartyCookies"===r.type&&(e.cookies.THIRD_PARTY_COOKIES=!!r.payload,t&&"function"==typeof t&&t(!!r.payload))};return r},r=function(r){var n=t(r);e.handlers.attach("cookies",n),e.comm.openChannel()};return{checkThirdParty:r}}),filepicker.extend("handlers",function(){var e={},t=function(t,r){return e.hasOwnProperty(t)?e[t].push(r):e[t]=[r],r},r=function(t,r){var n=e[t];if(n)if(r){for(var o=0;o<n.length;o++)if(n[o]===r){n.splice(o,1);break}0===n.length&&delete e[t]}else delete e[t]},n=function(t){if(null==t||null==t.id)return!1;var r=t.id;if(e.hasOwnProperty(r)){for(var n=e[r],o=0;o<n.length;o++)n[o](t);return!0}return!1};return{attach:t,detach:r,run:n}}),filepicker.extend("exporter",function(){var e=this,t=function(t){var r=function(r,n,o){t[n]&&!e.util.isArray(t[n])?t[n]=[t[n]]:t[r]?t[n]=[t[r]]:o&&(t[n]=o)};if(t.mimetype&&t.extension)throw e.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the export function");if(r("service","services"),t.services)for(var n=0;n<t.services.length;n++){var o=(""+t.services[n]).replace(" ",""),i=e.services[o];t.services[n]=void 0===i?o:i}t.openTo&&(t.openTo=e.services[t.openTo]||t.openTo),e.util.setDefault(t,"container",e.browser.openInModal()?"modal":"window")},r=function(t,r){var n=function(n){if("filepickerUrl"===n.type){if(n.error)e.util.console.error(n.error),r(e.errors.FPError(132));else{var o={};o.url=n.payload.url,o.filename=n.payload.data.filename,o.mimetype=n.payload.data.type,o.size=n.payload.data.size,o.client=n.payload.data.client,o.isWriteable=!0,t(o)}e.modal.close()}};return n},n=function(o,i,a,s){t(i);var c={close:function(){e.modal.close()}};if(i.debug)return setTimeout(function(){a({id:1,url:"https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",filename:"test.png",mimetype:"image/png",size:58979,client:"computer"})},1),c;if(void 0===e.cookies.THIRD_PARTY_COOKIES){var l=!1;return e.cookies.checkThirdParty(function(){l||(n(o,i,a,s),l=!0)}),c}var u=e.util.getId(),d=!1,p=function(e){d=!0,a(e)},f=function(e){d=!0,s(e)},m=function(){d||(d=!0,s(e.errors.FPError(131)))};return e.window.open(i.container,e.urls.constructExportUrl(o,i,u),m),e.handlers.attach(u,r(p,f)),c};return{createExporter:n}}),filepicker.extend("modal",function(){function e(){var e=document.getElementById(i);e&&(e.hidden=!0);var r=document.getElementById(a);r&&(r.hidden=!0),t()}function t(){var e=n();e&&(e.style.overflow=c)}function r(){var e=".fp__overlay {top: 0;right: 0;bottom: 0;left: 0;z-index: 1000;background: rgba(0, 0, 0, 0.8);}.fp__close {top: 104px; right: 108px; width: 35px; height: 35px; z-index: 20; cursor: pointer}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__close {top: 15px; right: 12px;}}.fp__close a {text-indent: -9999px; overflow: hidden; display: block; width: 100%; height: 100%; background: url(https://d1zyh3sbxittvg.cloudfront.net/close.png) 50% 50% no-repeat;}.fp__close a:hover {background-color: rgba(0,0,0, .02); opacity: .8;}@media screen and (max-width: 768px), screen and (max-height: 500px) {top: 14px; right: 14px;}.fp__copy {display: none;}.fp__container {-webkit-overflow-scrolling: touch; overflow: hidden; min-height: 300px; top: 100px;right: 100px;bottom: 100px;left: 100px;background: #eee; box-sizing:content-box; -webkit-box-sizing:content-box; -moz-box-sizing:content-box;}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__copy {bottom: 0; left: 0; right: 0; height: 20px; background: #333;}}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__copy a {margin-left: 5px;}}@media screen and (max-width: 768px), screen and (max-height: 500px) {.fp__container {top: 0;right: 0;bottom: 0;left: 0;}}.fp__overlay, .fp__close, .fp__copy, .fp__container {position: fixed;}",t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),t.appendChild(r)}function n(){try{return document.getElementsByTagName("html")[0]}catch(e){return null}}var o=this,i="filepicker_shade",a="filepicker_dialog_container",s=n();if(s)var c=s.style.overflow;var l=function(e,t){r();var i=u(t),a=d(),s=p(t),c=document.createElement("iframe");c.name=o.window.WINDOW_NAME,c.id=o.window.WINDOW_NAME,c.style.width="100%",c.style.height="100%",c.style.border="none",c.style.position="relative",c.setAttribute("border",0),c.setAttribute("frameborder",0),c.setAttribute("frameBorder",0),c.setAttribute("marginwidth",0),c.setAttribute("marginheight",0),c.src=e,a.appendChild(c),i.appendChild(s),i.appendChild(a),document.body.appendChild(i);var l=n();return l&&(l.style.overflow="hidden"),c},u=function(e){var t=document.createElement("div");return t.id=i,t.className="fp__overlay",t.onclick=f(e),t},d=function(){var e=document.createElement("div");return e.id=a,e.className="fp__container",e},p=function(e){var t=document.createElement("div");t.className="fp__close";var r=document.createElement("a");return r.appendChild(document.createTextNode("X")),t.appendChild(r),r.onclick=f(e),document.onkeydown=function(t){t=t||window.event,27===t.keyCode&&f(e)()},t},f=function(e,r){return r=!!r,function(){if(!o.uploading||r||window.confirm('You are currently uploading. If you choose "OK", the window will close and your upload will not finish. Do you want to stop uploading and close the window?')){o.uploading=!1,document.onkeydown=null,t();var n=document.getElementById(i);n&&document.body.removeChild(n);var s=document.getElementById(a);s&&document.body.removeChild(s);try{delete window.frames[o.window.WINDOW_NAME]}catch(c){}e&&e()}}},m=f(function(){});return{generate:l,close:m,hide:e}}),filepicker.extend("picker",function(){function e(e,r){if("filepickerProgress"===e.type)t.uploading=!0,r&&r(e.payload.data);else if("notUploading"===e.type)t.uploading=!1;else if("closeModal"===e.type)t.modal.close();else if("hideModal"===e.type)t.modal.hide();else if("filepickerUrl"===e.type||"serverHttpError"===e.type)return!1;return!0}var t=this,r=function(e){var r=function(r,n,o){e[n]?t.util.isArray(e[n])||(e[n]=[e[n]]):e[r]?e[n]=[e[r]]:o&&(e[n]=o)};if(r("service","services"),r("mimetype","mimetypes"),r("extension","extensions"),e.services)for(var n=0;n<e.services.length;n++){var o=(""+e.services[n]).replace(" ","");void 0!==t.services[o]&&(o=t.services[o]),e.services[n]=o}if(e.mimetypes&&e.extensions)throw t.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the pick function");e.mimetypes||e.extensions||(e.mimetypes=["*/*"]),e.openTo&&(e.openTo=t.services[e.openTo]||e.openTo),t.util.setDefault(e,"container",t.browser.openInModal()?"modal":"window")},n=function(r,n,o){var i=function(i){if(!e(i,o))if(t.uploading=!1,i.error)t.util.console.error(i.error),i.error.code?n(t.errors.FPError(i.error.code)):(n(t.errors.FPError(102)),t.modal.close());else{var a=s(i.payload);r(a),t.modal.close()}};return i},o=function(r,n,o){var i=function(i){e(i,o)||(t.uploading=!1,i.error?(t.util.console.error(i.error),n(t.errors.FPError(102))):(i.payload.data.url=i.payload.url,r(i.payload.data)),t.modal.close())};return i},i=function(e){e=e||function(){};var r=function(r){"uploading"===r.type&&(t.uploading=!!r.payload,e(t.uploading))};return r},a=function(e,t,r){e[r]&&(t[r]=e[r])},s=function(e){var t={},r=e.url;r&&r.url&&(r=r.url),t.url=r;var n=e.url.data||e.data;return t.filename=n.filename,t.mimetype=n.type,t.size=n.size,void 0!==n.cropped&&(t.cropped=n.cropped),void 0!==n.rotated&&(t.rotated=n.rotated),void 0!==n.converted&&(t.converted=n.converted),a(n,t,"id"),a(n,t,"key"),a(n,t,"container"),a(n,t,"path"),a(n,t,"client"),t.isWriteable=!0,t},c=function(r,n,o){var i=function(i){if(!e(i,o)){if(t.uploading=!1,i.error)t.util.console.error(i.error),n(t.errors.FPError(102));else{var a=[];t.util.isArray(i.payload)||(i.payload=[i.payload]);for(var c=0;c<i.payload.length;c++){var l=s(i.payload[c]);a.push(l)}r(a)}t.modal.close()}};return i},l=function(e,a,s,u,d,p,f){r(e);var m={close:function(){t.modal.close()}};if(e.debug){var h,g={id:1,url:"https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",filename:"test.png",mimetype:"image/png",size:58979,client:"computer"};return h=u||e.storeLocation?[g,g,g]:g,setTimeout(function(){a(h)},1),m}if(void 0===t.cookies.THIRD_PARTY_COOKIES){var v=!1;return t.cookies.checkThirdParty(function(){v||(l(e,a,s,!!u,d,p),v=!0)}),m}var w,y,b=t.util.getId(),x=!1,E=function(t){"window"===e.container&&(window.onbeforeunload=null),x=!0,a(t)},A=function(e){x=!0,s(e)},F=function(){x||(x=!0,s(t.errors.FPError(101)))};f?(w=t.urls.constructConvertUrl(e,b),y=n(E,A,p)):u?(w=t.urls.constructPickUrl(e,b,!0),y=c(E,A,p)):d?(w=t.urls.constructPickFolderUrl(e,b),y=o(E,A,p)):(w=t.urls.constructPickUrl(e,b,!1),y=n(E,A,p)),t.window.open(e.container,w,F),t.handlers.attach(b,y);var k=b+"-upload";return t.handlers.attach(k,i(function(){t.handlers.detach(k)})),m};return{createPicker:l}}),filepicker.extend("window",function(){var e=this,t="filepicker_dialog",r="left=100,top=100,height=600,width=800,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=yes,dependent=yes,dialog=yes",n=100,o=function(o,i,a){if(a=a||function(){},!o&&e.browser.openInModal()?o="modal":o||(o="window"),"window"===o){var s=t+e.util.getId();window.onbeforeunload=function(){return"Filepicker upload does not complete."};var c=window.open(i,s,r);c||(window.onbeforeunload=null,window.alert("Please disable your popup blocker to upload files."));var l=window.setInterval(function(){(!c||c.closed)&&(window.onbeforeunload=null,window.clearInterval(l),a())},n)}else if("modal"===o)e.modal.generate(i,a);else{var u=document.getElementById(o);if(!u)throw new e.FilepickerException('Container "'+o+'" not found. This should either be set to "window","modal", or the ID of an iframe that is currently in the document.');u.src=i}};return{open:o,WINDOW_NAME:t}}),filepicker.extend("conversions",function(){var e=this,t={align:"string",blurAmount:"number",crop:"string or array",crop_first:"boolean",compress:"boolean",exif:"string or boolean",filter:"string",fit:"string",format:"string",height:"number",policy:"string",quality:"number",page:"number",rotate:"string or number",secure:"boolean",sharpenAmount:"number",signature:"string",storeAccess:"string",storeContainer:"string",storeRegion:"string",storeLocation:"string",storePath:"string",text:"string",text_align:"string",text_color:"string",text_font:"string",text_padding:"number",text_size:"number",watermark:"string",watermark_position:"string",watermark_size:"number",width:"number"},r={w:"width",h:"height"},n=function(e){var n={};for(var o in e)n[r[o]||o]=e[o],"number"===t[r[o]||o]&&(n[r[o]||o]=Number(e[o]));return n},o=function(r){var n;for(var o in r){n=!1;for(var i in t)if(o===i&&(n=!0,-1===t[i].indexOf(e.util.typeOf(r[o]))))throw new e.FilepickerException("Conversion parameter "+o+" is not the right type: "+r[o]+". Should be a "+t[i]);if(!n)throw new e.FilepickerException("Conversion parameter "+o+" is not a valid parameter.")}},i=function(t,r,n,i,a){o(r),r.crop&&e.util.isArray(r.crop)&&(r.crop=r.crop.join(",")),e.ajax.post(t+"/convert",{data:r,json:!0,success:function(t){n(e.util.standardizeFPFile(t))},error:function(t,r,n){i("not_found"===t?new e.errors.FPError(141):"bad_params"===t?new e.errors.FPError(142):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(143))},progress:a})};return{convert:i,mapRestParams:n}}),filepicker.extend("errors",function(){var e=this,t=function(e){if(this===window)return new t(e);if(this.code=e,filepicker.debug){var r=filepicker.error_map[this.code];this.message=r.message,this.moreInfo=r.moreInfo,this.toString=function(){return"FPError "+this.code+": "+this.message+". For help, see "+this.moreInfo}}else this.toString=function(){return"FPError "+this.code+". Include filepicker_debug.js for more info"};return this};t.isClass=!0;var r=function(t){filepicker.debug&&e.util.console.error(t.toString())};return{FPError:t,handleError:r}},!0),filepicker.extend(function(){var e=this,t="2.4.18";e.API_VERSION="v2";var r=function(t){e.apikey=t},n=function(e){return this.text=e,this.toString=function(){return"FilepickerException: "+this.text},this};n.isClass=!0;var o=function(t,r,n,o){return e.util.checkApiKey(),"function"==typeof t&&(n=r,r=t,t={}),t=t||{},r=r||function(){},n=n||e.errors.handleError,e.picker.createPicker(t,r,n,!1,!1,o)},i=function(t,r,n,o){return e.util.checkApiKey(),"function"==typeof t&&(o=n,n=r,r=t,t={}),t=t||{},r=r||function(){},n=n||e.errors.handleError,e.picker.createPicker(t,r,n,!0,!1,o)},a=function(t,r,n,o,i){if(e.util.checkApiKey(),!t||!r||"function"==typeof t||"function"==typeof t)throw new e.FilepickerException("Not all required parameters given, missing picker or store options");o=o||e.errors.handleError;var a=!!t.multiple,s=t?e.util.clone(t):{};if(s.storeLocation=r.location||"S3",s.storePath=r.path,s.storeContainer=r.storeContainer||r.container,s.storeRegion=r.storeRegion,s.storeAccess=r.access||"private",a&&s.storePath&&"/"!==s.storePath.charAt(s.storePath.length-1))throw new e.FilepickerException(NaN);var c=n;return a||(c=function(e){n([e])}),e.picker.createPicker(s,c,o,a,!1,i)},s=function(t,r,n,o){return e.util.checkApiKey(),"function"==typeof t&&(n=r,r=t,t={}),t=t||{},r=r||function(){},n=n||e.errors.handleError,e.picker.createPicker(t,r,n,!1,!0,o)},c=function(t,r,n,o,i){if(e.util.checkApiKey(),!t)throw new e.FilepickerException("No input given - nothing to read!");if("function"==typeof r&&(i=o,o=n,n=r,r={}),r=r||{},n=n||function(){},o=o||e.errors.handleError,i=i||function(){},"string"==typeof t)e.util.isFPUrl(t)?e.files.readFromFPUrl(t,r,n,o,i):e.files.readFromUrl(t,r,n,o,i);else if(e.util.isFileInputElement(t))t.files?0===t.files.length?o(new e.errors.FPError(115)):e.files.readFromFile(t.files[0],r,n,o,i):l(t,r,n,o,i);else if(e.util.isFile(t))e.files.readFromFile(t,r,n,o,i);else{if(!t.url)throw new e.FilepickerException("Cannot read given input: "+t+". Not a url, file input, DOM File, or FPFile object.");e.files.readFromFPUrl(t.url,r,n,o,i)}},l=function(t,r,n,o,i){i(10),e.store(t,function(t){i(50),e.read(t,r,n,o,function(e){i(50+e/2)})},o)},u=function(t,r,n,o,i,a){if(e.util.checkApiKey(),!t)throw new e.FilepickerException("No fpfile given - nothing to write to!");if(void 0===r||null===r)throw new e.FilepickerException("No input given - nothing to write!");"function"==typeof n&&(a=i,i=o,o=n,n={}),n=n||{},o=o||function(){},i=i||e.errors.handleError,a=a||function(){};var s;if(e.util.isFPUrl(e.util.getFPUrl(t)))s=t;else{if(!t.url)throw new e.FilepickerException("Invalid file to write to: "+t+". Not a filepicker url or FPFile object.");s=t.url}if(s=e.util.trimConvert(e.util.getFPUrl(s)),"string"==typeof r)e.files.writeDataToFPUrl(s,r,n,o,i,a);else if(e.util.isFileInputElement(r))r.files?0===r.files.length?i(new e.errors.FPError(115)):e.files.writeFileToFPUrl(s,r.files[0],n,o,i,a):e.files.writeFileInputToFPUrl(s,r,n,o,i,a);else if(e.util.isFile(r))e.files.writeFileToFPUrl(s,r,n,o,i,a);else{if(!r.url)throw new e.FilepickerException("Cannot read from given input: "+r+". Not a string, file input, DOM File, or FPFile object.");e.files.writeUrlToFPUrl(s,r.url,n,o,i,a)}},d=function(t,r,n,o,i,a){if(e.util.checkApiKey(),!t)throw new e.FilepickerException("No fpfile given - nothing to write to!");if(void 0===r||null===r)throw new e.FilepickerException("No input given - nothing to write!");"function"==typeof n&&(a=i,i=o,o=n,n={}),n=n||{},o=o||function(){},i=i||e.errors.handleError,a=a||function(){};var s;if(e.util.isFPUrl(e.util.getFPUrl(t)))s=t;else{if(!t.url)throw new e.FilepickerException("Invalid file to write to: "+t+". Not a filepicker url or FPFile object.");s=t.url}s=e.util.getFPUrl(s),e.files.writeUrlToFPUrl(e.util.trimConvert(s),r,n,o,i,a)},p=function(t,r,n,o){e.util.checkApiKey(),"function"==typeof r&&(o=n,n=r,r={}),r=r?e.util.clone(r):{},n=n||function(){},o=o||e.errors.handleError;var i;if("string"==typeof t&&e.util.isUrl(t))i=t;else{if(!t.url)throw new e.FilepickerException("Invalid file to export: "+t+". Not a valid url or FPFile object. You may want to use filepicker.store() to get an FPFile to export");i=t.url,r.mimetype||r.extension||(r.mimetype=t.mimetype),r.suggestedFilename||(r.suggestedFilename=t.filename)}return r.suggestedFilename&&(r.suggestedFilename=encodeURI(r.suggestedFilename)),e.exporter.createExporter(i,r,n,o)},f=function(t,r,n,o,i){var a;if(e.util.checkApiKey(),"function"==typeof r&&(o=n,n=r,r={}),r=r||{},n=n||function(){},o=o||e.errors.handleError,"string"==typeof t)a=t;else{if(!t.url)throw new e.FilepickerException("Invalid file to convert: "+t+". Not a valid url or FPFile object or not filepicker url. You can convert only filepicker url images.");a=t.url,r.filename||(r.filename=t.filename)}return r.convertUrl=a,r.multiple=!1,r.services=["CONVERT","COMPUTER"],r.backgroundUpload=!0,r.hide=!1,e.picker.createPicker(r,n,o,!1,!1,i,!0)},m=function(t,r,n,o,i){if(e.util.checkApiKey(),"function"==typeof r&&(i=o,o=n,n=r,r={}),r=r?e.util.clone(r):{},n=n||function(){},o=o||e.errors.handleError,i=i||function(){},"string"==typeof t)e.files.storeData(t,r,n,o,i);else if(e.util.isFileInputElement(t))t.files?0===t.files.length?o(new e.errors.FPError(115)):e.files.storeFile(t.files[0],r,n,o,i):e.files.storeFileInput(t,r,n,o,i);else if(e.util.isFile(t))e.files.storeFile(t,r,n,o,i);else{if(!t.url)throw new e.FilepickerException("Cannot store given input: "+t+". Not a string, file input, DOM File, or FPFile object.");r.filename||(r.filename=t.filename),e.files.storeUrl(t.url,r,n,o,i)}},h=function(t,r,n,o,i){e.util.checkApiKey(),"function"==typeof r&&(i=o,o=n,n=r,r={}),r=r||{},n=n||function(){},o=o||e.errors.handleError,i=i||function(){},e.files.storeUrl(t,r,n,o,i)},g=function(t,r,n,o){e.util.checkApiKey(),"function"==typeof r&&(o=n,n=r,r={}),r=r||{},n=n||function(){},o=o||e.errors.handleError;var i;if(e.util.isFPUrl(e.util.getFPUrl(t)))i=t;else{if(!t.url)throw new e.FilepickerException("Invalid file to get metadata for: "+t+". Not a filepicker url or FPFile object.");i=t.url}i=e.util.getFPUrl(i),e.files.stat(e.util.trimConvert(i),r,n,o)},v=function(t,r,n,o){e.util.checkApiKey(),"function"==typeof r&&(o=n,n=r,r={}),r=r||{},n=n||function(){},o=o||e.errors.handleError;var i;if(e.util.isFPUrl(e.util.getFPUrl(t)))i=t;else{if(!t.url)throw new e.FilepickerException("Invalid file to remove: "+t+". Not a filepicker url or FPFile object.");i=t.url}i=e.util.getFPUrl(i),e.files.remove(e.util.trimConvert(i),r,n,o)},w=function(t,r,n,o,i,a){if(e.util.checkApiKey(),!t)throw new e.FilepickerException("No fpfile given - nothing to convert!");"function"==typeof n&&(a=i,i=o,o=n,n={});var s=r?e.util.clone(r):{};n=n||{},o=o||function(){},i=i||e.errors.handleError,a=a||function(){},n.location&&(s.storeLocation=n.location),n.path&&(s.storePath=n.path),n.container&&(s.storeContainer=n.container),s.storeAccess=n.access||"private";var c;if(e.util.isFPUrl(e.util.getFPUrl(t)))c=t;else{if(!t.url)throw new e.FilepickerException("Invalid file to convert: "+t+". Not a filepicker url or FPFile object.");if(c=t.url,!e.mimetypes.matchesMimetype(t.mimetype,"image/*")&&!e.mimetypes.matchesMimetype(t.mimetype,"application/pdf"))return void i(new e.errors.FPError(142))}if(c=e.util.getFPUrl(c),c.indexOf("/convert")>-1){var l=e.util.parseUrl(c).params;l=e.conversions.mapRestParams(l),l.crop&&e.util.setDefault(l,"crop_first",!0);for(var u in l)e.util.setDefault(s,u,l[u])}e.conversions.convert(e.util.trimConvert(c),s,o,i,a)},y=function(t){return e.widgets.constructWidget(t)},b=function(t,r){return e.dragdrop.makeDropPane(t,r)},x=function(t){return e.responsiveImages.setResponsiveOptions(t)},E=function(){e.responsiveImages.update.apply(null,arguments)},A=function(t){t=t||{},e.ajax.get(e.urls.LOGOUT,{success:t.onSuccess,error:t.onError,withCredentials:!0})};return{setKey:r,setResponsiveOptions:x,pick:o,pickFolder:s,pickMultiple:i,pickAndStore:a,read:c,write:u,writeUrl:d,"export":p,exportFile:p,processImage:f,store:m,storeUrl:h,stat:g,metadata:g,remove:v,convert:w,constructWidget:y,makeDropPane:b,FilepickerException:n,responsive:E,logout:A,version:t}},!0),filepicker.extend("mimetypes",function(){var e=this,t={".stl":"application/sla",".hbs":"text/html",".pdf":"application/pdf",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".imp":"application/x-impressionist",".vob":"video/dvd"},r=["application/octet-stream","application/download","application/force-download","octet/stream","application/unknown","application/x-download","application/x-msdownload","application/x-secure-download"],n=function(e){if(e.type){var n=e.type;n=n.toLowerCase();for(var o=!1,i=0;i<r.length;i++)o=o||n===r[i];if(!o)return e.type}var a=e.name||e.fileName,s=a.match(/\.\w*$/);return s?t[s[0].toLowerCase()]||"":e.type?e.type:""},o=function(t,n){if(!t)return"*/*"===n;t=e.util.trim(t).toLowerCase(),n=e.util.trim(n).toLowerCase();for(var o=0;o<r.length;o++)if(t===r[o])return!0;var i=t.split("/"),a=n.split("/");return"*"===a[0]?!0:a[0]!==i[0]?!1:"*"===a[1]?!0:a[1]===i[1]};return{getMimetype:n,matchesMimetype:o}}),filepicker.extend("services",function(){return{COMPUTER:1,DROPBOX:2,FACEBOOK:3,GITHUB:4,GMAIL:5,IMAGE_SEARCH:6,URL:7,WEBCAM:8,GOOGLE_DRIVE:9,SEND_EMAIL:10,INSTAGRAM:11,FLICKR:12,VIDEO:13,EVERNOTE:14,PICASA:15,WEBDAV:16,FTP:17,ALFRESCO:18,BOX:19,SKYDRIVE:20,GDRIVE:21,CUSTOMSOURCE:22,CLOUDDRIVE:23,GENERIC:24,CONVERT:25,AUDIO:26}},!0),filepicker.extend("urls",function(){function e(e,n){return"?key="+o.apikey+"&id="+n+"&referrer="+window.location.hostname+"&iframe="+("window"!==e.container)+"&version="+o.API_VERSION+(e.services?"&s="+e.services.join(","):"")+(void 0!==e.container?"&container="+e.container:"modal")+(e.openTo?"&loc="+e.openTo:"")+"&language="+(e.language||o.browser.getLanguage())+(void 0!==e.mobile?"&mobile="+e.mobile:"")+(void 0!==e.backgroundUpload?"&bu="+e.backgroundUpload:"")+(e.cropRatio?"&cratio="+e.cropRatio:"")+(e.cropDim?"&cdim="+e.cropDim.join(","):"")+(e.cropMax?"&cmax="+e.cropMax.join(","):"")+(e.cropMin?"&cmin="+e.cropMin.join(","):"")+(void 0!==e.cropForce?"&cforce="+e.cropForce:"")+(void 0!==e.hide?"&hide="+e.hide:"")+(e.customCss?"&css="+encodeURIComponent(e.customCss):"")+(e.customText?"&text="+encodeURIComponent(e.customText):"")+(e.imageMin?"&imin="+e.imageMin.join(","):"")+(e.imageMax?"&imax="+e.imageMax.join(","):"")+(e.imageDim?"&idim="+e.imageDim.join(","):"")+(e.imageQuality?"&iq="+e.imageQuality:"")+(e.noFileReader?"&nfl="+e.noFileReader:"")+(o.util.isCanvasSupported()?"":"&canvas=false")+(e.redirectUrl?"&redirect_url="+e.redirectUrl:"")+(e.showClose&&"modal"!==e.container?"&showClose="+e.showClose:"")+t(e)+"&plugin="+r()}function t(e){return(e.signature?"&signature="+e.signature:"")+(e.policy?"&policy="+e.policy:"")}function r(){return filepicker.plugin||"js_lib"}function n(e){e=e||[];var t,r,n=[];for(t in e)for(r in p)e[t]===p[r]&&e.hasOwnProperty(t)&&n.push(e[t]);return n.length||n.push("crop"),"&co="+n.join(",")}var o=this,i="https://www.filepicker.io";window.filepicker.hostname&&(i=window.filepicker.hostname);var a=i.replace("www","dialog"),s=a+"/dialog/open/",c=a+"/dialog/save/",l=a+"/dialog/process/",u=a+"/dialog/folder/",d=i+"/api/store/",p=["crop","rotate","filter"],f=function(t,r,o){return s+e(t,r)+(o?"&multi="+!!o:"")+(void 0!==t.mimetypes?"&m="+t.mimetypes.join(","):"")+(void 0!==t.extensions?"&ext="+t.extensions.join(","):"")+(t.maxSize?"&maxSize="+t.maxSize:"")+(t.customSourceContainer?"&customSourceContainer="+t.customSourceContainer:"")+(t.customSourcePath?"&customSourcePath="+t.customSourcePath:"")+(t.maxFiles?"&maxFiles="+t.maxFiles:"")+(void 0!==t.folders?"&folders="+t.folders:"")+(t.storeLocation?"&storeLocation="+t.storeLocation:"")+(t.storePath?"&storePath="+t.storePath:"")+(t.storeContainer?"&storeContainer="+t.storeContainer:"")+(t.storeRegion?"&storeRegion="+t.storeRegion:"")+(t.storeAccess?"&storeAccess="+t.storeAccess:"")+(t.webcam&&t.webcam.webcamDim?"&wdim="+t.webcam.webcamDim.join(","):"")+(t.webcamDim?"&wdim="+t.webcamDim.join(","):"")+(t.webcam&&t.webcam.videoRes?"&videoRes="+t.webcam.videoRes:"")+(t.webcam&&t.webcam.videoLen?"&videoLen="+t.webcam.videoLen:"")+(t.webcam&&t.webcam.audioLen?"&audioLen="+t.webcam.audioLen:"")+n(t.conversions)},m=function(t,r){var o=t.convertUrl;return(o.indexOf("&")>=0||o.indexOf("?")>=0)&&(o=encodeURIComponent(o)),l+e(t,r)+"&curl="+o+n(t.conversions)},h=function(t,r){return u+e(t,r)},g=function(t,r,n){return(t.indexOf("&")>=0||t.indexOf("?")>=0)&&(t=encodeURIComponent(t)),c+e(r,n)+"&url="+t+(void 0!==r.mimetype?"&m="+r.mimetype:"")+(void 0!==r.extension?"&ext="+r.extension:"")+(r.suggestedFilename?"&defaultSaveasName="+r.suggestedFilename:"")},v=function(e){return d+e.location+"?key="+o.apikey+(e.base64decode?"&base64decode=true":"")+(e.mimetype?"&mimetype="+e.mimetype:"")+(e.filename?"&filename="+encodeURIComponent(e.filename):"")+(e.path?"&path="+e.path:"")+(e.container?"&container="+e.container:"")+(e.access?"&access="+e.access:"")+t(e)+"&plugin="+r()},w=function(e,n){return e+"?nonce=fp"+(n.base64decode?"&base64decode=true":"")+(n.mimetype?"&mimetype="+n.mimetype:"")+t(n)+"&plugin="+r()},y=function(){var e=o.util.parseUrl(window.location.href);return e.origin+"/404"};return{BASE:i,DIALOG_BASE:a,API_COMM:i+"/dialog/comm_iframe/",COMM:a+"/dialog/comm_iframe/",FP_COMM_FALLBACK:a+"/dialog/comm_hash_iframe/",STORE:d,PICK:s,EXPORT:c,LOGOUT:i+"/api/clients/unauth",constructPickUrl:f,constructConvertUrl:m,constructPickFolderUrl:h,constructExportUrl:g,constructWriteUrl:w,constructStoreUrl:v,constructHostCommFallback:y,getPlugin:r}}),filepicker.extend("ajax",function(){var e=this,t=function(e,t){t.method="GET",i(e,t)},r=function(t,r){r.method="POST",t+=(t.indexOf("?")>=0?"&":"?")+"_cacheBust="+e.util.getId(),i(t,r)},n=function(t,r){var o=[];for(var i in t){var a=t[i];r&&(i=r+". + key + ");var s;switch(e.util.typeOf(a)){case"object":s=n(a,i);break;case"array":for(var c={},l=0;l<a.length;l++)c[l]=a[l];s=n(c,i);break;default:s=i+"="+encodeURIComponent(a)}null!==a&&o.push(s)}return o.join("&")},o=function(){try{return new window.XMLHttpRequest}catch(e){try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){return null}}}},i=function(t,r){t=t||"";var i=r.method?r.method.toUpperCase():"POST",s=r.success||function(){},c=r.error||function(){},l=void 0===r.async?!0:r.async,u=r.data||null,d=void 0===r.processData?!0:r.processData,p=r.headers||{},f=e.util.parseUrl(t),m=window.location.protocol+"//"+window.location.host,h=m!==f.origin,g=!1;t+=(t.indexOf("?")>=0?"&":"?")+"plugin="+e.urls.getPlugin(),u&&d&&(u=n(r.data));var v;if(r.xhr)v=r.xhr;else if(v=o(),!v)return r.error("Ajax not allowed"),v;if(h&&window.XDomainRequest&&!("withCredentials"in v))return new a(t,r);r.progress&&v.upload&&v.upload.addEventListener("progress",function(e){e.lengthComputable&&r.progress(Math.round(95*e.loaded/e.total))},!1);var w=function(){if(4==v.readyState&&!g)if(r.progress&&r.progress(100),v.status>=200&&v.status<300){var t=v.responseText;if(r.json)try{t=e.json.decode(t)}catch(n){return void y.call(v,"Invalid json: "+t)}s(t,v.status,v),g=!0}else y.call(v,v.responseText),g=!0};v.onreadystatechange=w;var y=function(e){return g?void 0:(r.progress&&r.progress(100),g=!0,400==this.status?void c("bad_params",this.status,this):403==this.status?void c("not_authorized",this.status,this):404==this.status?void c("not_found",this.status,this):h?4==this.readyState&&0===this.status?void c("CORS_not_allowed",this.status,this):void c("CORS_error",this.status,this):void c(e,this.status,this))};v.onerror=y,u&&"GET"==i&&(t+=(-1!==t.indexOf("?")?"&":"?")+u,u=null),r.withCredentials&&(v.withCredentials=!0),v.open(i,t,l),r.json?v.setRequestHeader("Accept","application/json, text/javascript"):v.setRequestHeader("Accept","text/javascript, text/html, application/xml, text/xml, */*");var b=p["Content-Type"]||p["content-type"];if(u&&d&&("POST"==i||"PUT"==i)&&void 0===b&&v.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"),p)for(var x in p)v.setRequestHeader(x,p[x]);return v.send(u),v},a=function(t,r){if(!window.XDomainRequest)return null;var o=r.method?r.method.toUpperCase():"POST",i=r.success||function(){},a=r.error||function(){},s=r.data||{};if("http:"==window.location.protocol?t=t.replace("https:","http:"):"https:"==window.location.protocol&&(t=t.replace("http:","https:")),r.async)throw new e.FilepickerException("Asyncronous Cross-domain requests are not supported");"GET"!==o&&"POST"!==o&&(s._method=o,
    o="POST"),r.processData!==!1&&(s=s?n(s):null),s&&"GET"==o&&(t+=(t.indexOf("?")>=0?"&":"?")+s,s=null),t+=(t.indexOf("?")>=0?"&":"?")+"_xdr=true&_cacheBust="+e.util.getId();var c=new window.XDomainRequest;return c.onload=function(){var t=c.responseText;if(r.progress&&r.progress(100),r.json)try{t=e.json.decode(t)}catch(n){return void a("Invalid json: "+t,200,c)}i(t,200,c)},c.onerror=function(){r.progress&&r.progress(100),a(c.responseText||"CORS_error",this.status||500,this)},c.onprogress=function(){},c.ontimeout=function(){},c.timeout=3e4,c.open(o,t,!0),c.send(s),c};return{get:t,post:r,request:i}}),filepicker.extend("files",function(){var e=this,t=function(t,n,o,i,a){var s=void 0===n.base64encode;s&&(n.base64encode=!0),n.base64encode=n.base64encode!==!1;var c=function(t){s&&(t=e.base64.decode(t,!!n.asText)),o(t)};r.call(this,t,n,c,i,a)},r=function(t,r,n,o,i){r.cache!==!0&&(r._cacheBust=e.util.getId()),e.ajax.get(t,{data:r,headers:{"X-NO-STREAM":!0},success:n,error:function(t,r,n){o("CORS_not_allowed"===t?new e.errors.FPError(113):"CORS_error"===t?new e.errors.FPError(114):"not_found"===t?new e.errors.FPError(115):"bad_params"===t?new e.errors.FPError(400):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(118))},progress:i})},n=function(t,r,n,o,i){if(!(window.File&&window.FileReader&&window.FileList&&window.Blob))return i(10),void e.files.storeFile(t,{},function(t){i(50),e.files.readFromFPUrl(t.url,r,n,o,function(e){i(50+e/2)})},o,function(e){i(e/2)});var a=!!r.base64encode,s=!!r.asText,c=new FileReader;c.onprogress=function(e){e.lengthComputable&&i(Math.round(e.loaded/e.total*100))},c.onload=function(t){i(100),n(a?e.base64.encode(t.target.result,s):t.target.result)},c.onerror=function(t){switch(t.target.error.code){case t.target.error.NOT_FOUND_ERR:o(new e.errors.FPError(115));break;case t.target.error.NOT_READABLE_ERR:o(new e.errors.FPError(116));break;case t.target.error.ABORT_ERR:o(new e.errors.FPError(117));break;default:o(new e.errors.FPError(118))}},s||!c.readAsBinaryString?c.readAsText(t):c.readAsBinaryString(t)},o=function(t,r,n,o,i,a){var s=n.mimetype||"text/plain";e.ajax.post(e.urls.constructWriteUrl(t,n),{headers:{"Content-Type":s},data:r,processData:!1,json:!0,success:function(t){o(e.util.standardizeFPFile(t))},error:function(t,r,n){i("not_found"===t?new e.errors.FPError(121):"bad_params"===t?new e.errors.FPError(122):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(123))},progress:a})},i=function(t,r,n,o,i,a){var s=function(t,r,n){i("not_found"===t?new e.errors.FPError(121):"bad_params"===t?new e.errors.FPError(122):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(123))},c=function(t){o(e.util.standardizeFPFile(t))};u(r,e.urls.constructWriteUrl(t,n),c,s,a)},a=function(t,r,n,o,i,a){var s=function(t,r,n){i("not_found"===t?new e.errors.FPError(121):"bad_params"===t?new e.errors.FPError(122):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(123))},c=function(t){o(e.util.standardizeFPFile(t))};n.mimetype=r.type,u(r,e.urls.constructWriteUrl(t,n),c,s,a)},s=function(t,r,n,o,i,a){e.ajax.post(e.urls.constructWriteUrl(t,n),{data:{url:r},json:!0,success:function(t){o(e.util.standardizeFPFile(t))},error:function(t,r,n){i("not_found"===t?new e.errors.FPError(121):"bad_params"===t?new e.errors.FPError(122):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(123))},progress:a})},c=function(t,r,n,o,i){if(t.files)return void(0===t.files.length?o(new e.errors.FPError(115)):l(t.files[0],r,n,o,i));e.util.setDefault(r,"location","S3"),r.filename||(r.filename=t.value.replace("C:\\fakepath\\","")||t.name);var a=t.name;t.name="fileUpload",e.iframeAjax.post(e.urls.constructStoreUrl(r),{data:t,processData:!1,json:!0,success:function(r){t.name=a,n(e.util.standardizeFPFile(r))},error:function(t,r,n){o("not_found"===t?new e.errors.FPError(121):"bad_params"===t?new e.errors.FPError(122):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(123))}})},l=function(t,r,n,o,i){e.util.setDefault(r,"location","S3");var a=function(t,r,n){"not_found"===t?o(new e.errors.FPError(121)):"bad_params"===t?o(new e.errors.FPError(122)):"not_authorized"===t?o(new e.errors.FPError(403)):(e.util.console.error(t),o(new e.errors.FPError(123)))},s=function(t){n(e.util.standardizeFPFile(t))};r.filename||(r.filename=t.name||t.fileName),u(t,e.urls.constructStoreUrl(r),s,a,i)},u=function(t,r,n,o,i){t.files&&(t=t.files[0]);var a=!!window.FormData&&!!window.XMLHttpRequest;if(a){var s=new window.FormData;s.append("fileUpload",t),e.ajax.post(r,{json:!0,processData:!1,data:s,success:n,error:o,progress:i})}else e.iframeAjax.post(r,{data:t,json:!0,success:n,error:o})},d=function(t,r,n,o,i){e.util.setDefault(r,"location","S3"),e.util.setDefault(r,"mimetype","text/plain"),e.ajax.post(e.urls.constructStoreUrl(r),{headers:{"Content-Type":r.mimetype},data:t,processData:!1,json:!0,success:function(t){n(e.util.standardizeFPFile(t))},error:function(t,r,n){o("not_found"===t?new e.errors.FPError(121):"bad_params"===t?new e.errors.FPError(122):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(123))},progress:i})},p=function(t,r,n,o,i){e.util.setDefault(r,"location","S3"),e.ajax.post(e.urls.constructStoreUrl(r),{data:{url:e.util.getFPUrl(t)},json:!0,success:function(t){n(e.util.standardizeFPFile(t))},error:function(t,r,n){o("not_found"===t?new e.errors.FPError(151):"bad_params"===t?new e.errors.FPError(152):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(153))},progress:i})},f=function(t,r,n,o){var i=["uploaded","modified","created"];r.cache!==!0&&(r._cacheBust=e.util.getId()),e.ajax.get(t+"/metadata",{json:!0,data:r,success:function(e){for(var t=0;t<i.length;t++)e[i[t]]&&(e[i[t]]=new Date(e[i[t]]));n(e)},error:function(t,r,n){o("not_found"===t?new e.errors.FPError(161):"bad_params"===t?new e.errors.FPError(400):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(162))}})},m=function(t,r,n,o){r.key=e.apikey,e.ajax.post(t+"/remove",{data:r,success:function(e){n()},error:function(t,r,n){o("not_found"===t?new e.errors.FPError(171):"bad_params"===t?new e.errors.FPError(400):"not_authorized"===t?new e.errors.FPError(403):new e.errors.FPError(172))}})};return{readFromUrl:r,readFromFile:n,readFromFPUrl:t,writeDataToFPUrl:o,writeFileToFPUrl:a,writeFileInputToFPUrl:i,writeUrlToFPUrl:s,storeFileInput:c,storeFile:l,storeUrl:p,storeData:d,stat:f,remove:m}}),filepicker.extend("iframeAjax",function(){var e=this,t="ajax_iframe",r=[],n=!1,o=function(e,t){t.method="GET",s(e,t)},i=function(t,r){r.method="POST",t+=(t.indexOf("?")>=0?"&":"?")+"_cacheBust="+e.util.getId(),s(t,r)},a=function(){if(r.length>0){var e=r.shift();s(e.url,e.options)}},s=function(o,i){if(n)return void r.push({url:o,options:i});o+=(o.indexOf("?")>=0?"&":"?")+"plugin="+e.urls.getPlugin()+"&_cacheBust="+e.util.getId(),o+="&Content-Type=text%2Fhtml",e.comm.openChannel();var a;try{a=document.createElement('<iframe name="'+t+'">')}catch(s){a=document.createElement("iframe")}a.id=a.name=t,a.style.display="none";var u=function(){n=!1};a.attachEvent?(a.attachEvent("onload",u),a.attachEvent("onerror",u)):a.onerror=a.onload=u,a.id=t,a.name=t,a.style.display="none",a.onerror=a.onload=function(){n=!1},document.body.appendChild(a),e.handlers.attach("upload",c(i));var d=document.createElement("form");d.method=i.method||"GET",d.action=o,d.target=t;var p=i.data;(e.util.isFileInputElement(p)||e.util.isFile(p))&&(d.encoding=d.enctype="multipart/form-data"),document.body.appendChild(d);var f;if(e.util.isFile(p)){var m=l(p);if(!m)throw e.FilepickerException("Couldn't find corresponding file input.");p={fileUpload:m}}else e.util.isFileInputElement(p)?(f=p,p={},p.fileUpload=f):p&&e.util.isElement(p)&&"INPUT"===p.tagName?(f=p,p={},p[f.name]=f):i.processData!==!1&&(p={data:p});p.format="iframe";var h={};for(var g in p){var v=p[g];if(e.util.isElement(v)&&"INPUT"===v.tagName)h[g]={par:v.parentNode,sib:v.nextSibling,name:v.name,input:v,focused:v===document.activeElement},v.name=g,d.appendChild(v);else{var w=document.createElement("input");w.name=g,w.value=v,d.appendChild(w)}}n=!0,window.setTimeout(function(){d.submit();for(var e in h){var t=h[e];t.par.insertBefore(t.input,t.sib),t.input.name=t.name,t.focused&&t.input.focus()}d.parentNode.removeChild(d)},1)},c=function(t){var r=t.success||function(){},o=t.error||function(){},i=function(t){if("Upload"===t.type){n=!1;var i=t.payload;i.error?o(i.error):r(i),e.handlers.detach("upload"),a()}};return i},l=function(e){for(var t=document.getElementsByTagName("input"),r=0;r<t.length;r++){var n=t[0];if("file"===n.type&&n.files&&n.files.length)for(var o=0;o<n.files.length;o++)if(n.files[o]===e)return n}return null};return{get:o,post:i,request:s}}),filepicker.extend("base64",function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t=function(t,r){r=r||void 0===r;var o,i,a,s,c,l,u,d="",p=0;for(r&&(t=n(t));p<t.length;)o=t.charCodeAt(p),i=t.charCodeAt(p+1),a=t.charCodeAt(p+2),p+=3,s=o>>2,c=(3&o)<<4|i>>4,l=(15&i)<<2|a>>6,u=63&a,isNaN(i)?l=u=64:isNaN(a)&&(u=64),d=d+e.charAt(s)+e.charAt(c)+e.charAt(l)+e.charAt(u);return d},r=function(t,r){r=r||void 0===r;var n,i,a,s,c,l,u,d="",p=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");p<t.length;)s=e.indexOf(t.charAt(p)),c=e.indexOf(t.charAt(p+1)),l=e.indexOf(t.charAt(p+2)),u=e.indexOf(t.charAt(p+3)),p+=4,n=s<<2|c>>4,i=(15&c)<<4|l>>2,a=(3&l)<<6|u,d+=String.fromCharCode(n),64!=l&&(d+=String.fromCharCode(i)),64!=u&&(d+=String.fromCharCode(a));return r&&(d=o(d)),d},n=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);128>n?t+=String.fromCharCode(n):n>127&&2048>n?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},o=function(e){for(var t="",r=0,n=0,o=0;r<e.length;)n=e.charCodeAt(r),128>n?(t+=String.fromCharCode(n),r++):n>191&&224>n?(o=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&o),r+=2):(o=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&o)<<6|63&c3),r+=3);return t};return{encode:t,decode:r}},!0),filepicker.extend("browser",function(){var e=function(){return!!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))},t=function(){return!!navigator.userAgent.match(/Android/i)},r=function(){var e=window.navigator.userLanguage||window.navigator.language;return void 0===e&&(e="en"),e=e.replace("-","_").toLowerCase()};return{getLanguage:r,openInModal:function(){return!(e()||t())||!!window.navigator.standalone},isMobile:function(){return e()||t()}}}),filepicker.extend("conversionsUtil",function(){var e=this,t=e.urls.BASE.replace("www","process")+"/",r=function(e){if(!e)return{url:null,optionsDict:{}};e=e.replace(t,"");var r=e.substring(e.indexOf("/http")+1);e=e.replace("/"+r,"");var n=e.substring(0,e.indexOf("/"));e=e.replace(n+"/","");var o,i,a,s,c,l=e.split("/"),u={};for(s in l)if(o=l[s].split("="),o.length>1){u[o[0]]={},i=o[1].split(",");for(c in i)a=i[c].split(":"),a.length>1&&(u[o[0]][a[0]]=a[1])}else l[s]&&(u[l[s]]=null);return{url:r,apikey:n,optionsDict:u}},n=function(r,n,o){var i,a,s,c=t+o;n=n||{};for(i in n){c+="/"+i,s=e.util.objectKeys(n[i]||{}).length,s&&(c+="=");for(a in n[i])c+=a+":"+n[i][a],0!==--s&&(c+=",")}return c+="/"+r};return{CONVERSION_DOMAIN:t,parseUrl:r,buildUrl:n}}),filepicker.extend("json",function(){var fp=this,special={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},escape=function(e){return special[e]||"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)},validate=function(e){return e=e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""),/^[\],:{}\s]*$/.test(e)},encode=function(e){if(window.JSON&&window.JSON.stringify)return window.JSON.stringify(e);e&&e.toJSON&&(e=e.toJSON());var t=[];switch(fp.util.typeOf(e)){case"string":return'"'+e.replace(/[\x00-\x1f\\"]/g,escape)+'"';case"array":for(var r=0;r<e.length;r++)t.push(encode(e[r]));return"["+t+"]";case"object":case"hash":var n,o;for(o in e)n=encode(e[o]),n&&t.push(encode(o)+":"+n),n=null;return"{"+t+"}";case"number":case"boolean":return""+e;case"null":return"null";default:return"null"}return null},decode=function(string,secure){if(!string||"string"!==fp.util.typeOf(string))return null;if(window.JSON&&window.JSON.parse)return window.JSON.parse(string);if(secure&&!validate(string))throw new Error("JSON could not decode the input; security is enabled and the value is not secure.");return eval("("+string+")")};return{validate:validate,encode:encode,stringify:encode,decode:decode,parse:decode}}),filepicker.extend("util",function(){var e=function(e){return e.replace(/^\s+|\s+$/g,"")},t=function(e){return e.replace(/\/convert\b.*/,"")},r=/^(http|https)\:.*\/\//i,n=function(e){return!!e.match(r)},o=function(e){e&&"/"!==e.charAt(0)||(e=window.location.protocol+"//"+window.location.host+e);var t=document.createElement("a");t.href=e;var r=-1===t.hostname.indexOf(":")?t.hostname:t.host,n={source:e,protocol:t.protocol.replace(":",""),host:r,port:t.port,query:t.search,params:function(){for(var e,r={},n=t.search.replace(/^\?/,"").split("&"),o=n.length,i=0;o>i;i++)n[i]&&(e=n[i].split("="),r[e[0]]=e[1]);return r}(),file:(t.pathname.match(/\/([^\/?#]+)$/i)||[void 0,""])[1],hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^\/])/,"/$1"),relative:(t.href.match(/tps?:\/\/[^\/]+(.+)/)||[void 0,""])[1],segments:t.pathname.replace(/^\//,"").split("/")};return n.origin=n.protocol+"://"+n.host+(n.port?":"+n.port:""),n.rawUrl=(n.origin+n.path).replace("/convert",""),n},i=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},a=function(e,t,r){return e+(e.indexOf("?")>=0?"&":"?")+t+"="+r};return{trim:e,trimConvert:t,parseUrl:o,isUrl:n,endsWith:i,appendQueryToUrl:a}}),filepicker.extend("util",function(){var e=this,t=function(e){return e&&"[object Array]"===Object.prototype.toString.call(e)},r=function(e){return e&&("[object File]"===Object.prototype.toString.call(e)||"[object Blob]"===Object.prototype.toString.call(e))},n=function(e){return"object"==typeof window.HTMLElement?e instanceof window.HTMLElement:e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName},o=function(e){return n(e)&&"INPUT"===e.tagName&&"file"===e.type},i=function(e){return null===e?"null":t(e)?"array":r(e)?"file":typeof e},a=function(){var e=new Date;return e.getTime().toString()},s=function(e,t,r){void 0===e[t]&&(e[t]=r)},c=function(e){if(window.jQuery)window.jQuery(function(){e()});else{var t="load";if(window.addEventListener)window.addEventListener(t,e,!1);else if(window.attachEvent)window.attachEvent("on"+t,e);else if(window.onload){var r=window.onload;window.onload=function(){r(),e()}}else window.onload=e}},l=function(t){return"string"==typeof t&&t.match(e.urls.BASE+"/api/file/")},u=function(e){return"string"==typeof e&&e.match("/api/file/")},d=function(t){if("string"==typeof t){var r=t.match(/(?:^https?:\/\/cdn.filestackcontent.com|^https?:\/\/cdn.filepicker.io)[\S]*\/([\S]{20,})/);if(r&&r.length>1)return e.urls.BASE+"/api/file/"+r[1]}return t},p=function(e){return function(){if(window.console&&"function"==typeof window.console[e])try{window.console[e].apply(window.console,arguments)}catch(t){window.alert(Array.prototype.join.call(arguments,","))}}},f={};f.log=p("log"),f.error=p("error");var m=function(e){var t={};for(var r in e)t[r]=e[r];return t},h=function(e){var t={};return t.url=e.url,t.filename=e.filename||e.name,t.mimetype=e.mimetype||e.type,t.size=e.size,t.key=e.key||e.s3_key,t.isWriteable=!(!e.isWriteable&&!e.writeable),t},g=function(){try{var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}catch(t){return!1}},v=function(e,t){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},w=function(){if(!e.apikey)throw new e.FilepickerException("API Key not found")},y=function(e){return"function"!=typeof Object.keys?function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);return t}:Object.keys(e)};return{isArray:t,isFile:r,isElement:n,isFileInputElement:o,getId:a,setDefault:s,typeOf:i,addOnLoad:c,isFPUrl:l,getFPUrl:d,isFPUrlCdn:u,console:f,clone:m,standardizeFPFile:h,isCanvasSupported:g,extend:v,checkApiKey:w,objectKeys:y}}),filepicker.extend("windowUtils",function(){function e(){return document.documentElement.clientWidth||document.body&&document.body.clientWidth||1024}function t(){return document.documentElement.clientHeight||document.body&&document.body.clientHeight||768}return{getWidth:e,getHeight:t}}),filepicker.extend("dragdrop",function(){var e=this,t=function(){return(!!window.FileReader||navigator.userAgent.indexOf("Safari")>=0)&&"draggable"in document.createElement("span")},r=function(r,n){function o(t){var r=A(0,1),n=e.util.clone(t);n.name=n.filename,C([n])?r(t):e.files.remove(t.url,w,function(){},function(){})}function i(t){var n,o=t.length;if(C(t))for(d(t),r.setAttribute("disabled","disabled"),n=0;n<t.length;n++)e.store(t[n],w,A(n,o),F,k(n,o))}function a(t){var r=k(0,1);e.storeUrl(t,o,F,r)}function s(e){var t,r,n;if(e.dataTransfer.items)for(r=e.dataTransfer.items,n=0;n<r.length;n++)if(t=r[n]&&r[n].webkitGetAsEntry?r[n].webkitGetAsEntry():void 0,t&&t.isDirectory)return f("WrongType","Uploading a folder is not allowed"),!0;return!1}var c="No DOM element found to create drop pane";if(!r)throw new e.FilepickerException(c);if(r.jquery){if(0===r.length)throw new e.FilepickerException(c);r=r[0]}if(!t())return e.util.console.error("Your browser doesn't support drag-drop functionality"),!1;n=n||{};var l=n.dragEnter||function(){},u=n.dragLeave||function(){},d=n.onStart||function(){},p=n.onSuccess||function(){},f=n.onError||function(){},m=n.onProgress||function(){},h=n.mimetypes;h||(h=n.mimetype?[n.mimetype]:["*/*"]),"string"===e.util.typeOf(h)&&(h=h.split(","));var g=n.extensions;if(g||n.extension&&(g=[n.extension]),"string"===e.util.typeOf(g)&&(g=g.replace(/ /g,"").split(",")),g)for(var v=0;v<g.length;v++)g[v]=g[v].toLowerCase();var w={location:n.location,path:n.path,container:n.container,access:n.access,policy:n.policy,signature:n.signature},y=function(){return r&&"disabled"!==(r.getAttribute("disabled")||"enabled")};r.addEventListener("dragenter",function(e){return y()&&l(),e.stopPropagation(),e.preventDefault(),!1},!1),r.addEventListener("dragleave",function(e){return y()&&u(),e.stopPropagation(),e.preventDefault(),!1},!1),r.addEventListener("dragover",function(e){return e.dataTransfer.dropEffect="copy",e.preventDefault(),!1},!1),r.addEventListener("drop",function(e){if(e.stopPropagation(),e.preventDefault(),!y())return!1;if(s(e))return!1;var t=e.dataTransfer.files,r=_(e.dataTransfer);return t.length?i(t):r?a(r):f("NoFilesFound","No files uploaded"),!1});var b=function(){r.setAttribute("disabled","enabled"),window.$&&window.$(r).prop("disabled",!1)},x={},E=[],A=function(e,t){return function(r){n.multiple?(E.push(r),E.length===t?(p(E),E=[],x={}):(x[e]=100,P(t))):p([r]),b()}},F=function(e){f("UploadError",e.toString()),b()},k=function(e,t){return function(r){x[e]=r,P(t)}},P=function(e){var t=0;for(var r in x)t+=x[r];var n=t/e;m(n)},C=function(t){if(t.length>0){if(t.length>1&&!n.multiple)return f("TooManyFiles","Only one file at a time"),!1;if(n.maxFiles>0&&t.length>n.maxFiles)return f("TooManyFiles","Only "+n.maxFiles+" files at a time"),!1;for(var r,o,i,a=0;a<t.length;a++){r=!1,o=t[a],i=o.name||o.fileName||"Unknown file";for(var s=0;s<h.length;s++){var c=e.mimetypes.getMimetype(o);r=r||e.mimetypes.matchesMimetype(c,h[s])}if(!r)return f("WrongType",i+" isn't the right type of file"),!1;if(g){for(r=!1,s=0;s<g.length;s++)r=r||e.util.endsWith(i,g[s]);if(!r)return f("WrongType",i+" isn't the right type of file"),!1}if(o.size&&n.maxSize&&o.size>n.maxSize)return f("WrongSize",i+" is too large ("+o.size+" Bytes)"),!1}return!0}return f("NoFilesFound","No files uploaded"),!1},_=function(t){var r,n;if(t&&"function"==typeof t.getData){r=t.getData("text");try{r=r||t.getData("text/html")}catch(o){e.util.console.error(o)}r&&!e.util.isUrl(r)&&(n=r.match(/<img.*?src="(.*?)"/i),r=n&&n.length>1?n[1]:null)}return r};return!0};return{enabled:t,makeDropPane:r}}),filepicker.extend("responsiveImages",function(){function e(){n(),w(k)}function t(){y(k)}function r(e){if(void 0!==e){if("IMG"!==e.nodeName)throw new A.FilepickerException("Passed object is not an image");h(e)}else n(!0)}function n(e){var t,r,n=document.querySelectorAll("img[data-fp-src]");for(r=0;r<n.length;r++)t=n[r],(o(t)||e===!0)&&h(t)}function o(e){var t=l(e),r=s(e)||b().onResize||"all";if(!t||"all"===r)return!0;if("none"===r)return!1;var n=m(t).width<i(e).width;return n&&"up"===r||!n&&"down"===r?!0:!1}function i(e){var t={};return null===e.parentNode?(t.width=A.windowUtils.getWidth(),t.height=A.windowUtils.getWidth(),t):e.alt&&!e.fpAltCheck?(e.parentNode.fpAltCheck=!0,i(e.parentNode)):(t.width=e.offsetWidth,t.height=e.offsetHeight,t.width?t:i(e.parentNode))}function a(e,t){var r=l(e)||u(e);r!==t&&(e.src=t,r&&(e.onerror=function(){e.src=r,e.onerror=null}))}function s(e){return e.getAttribute("data-fp-on-resize")}function c(e){return e.getAttribute("data-fp-pixel-round")}function l(e){return e.getAttribute("src")}function u(e){return e.getAttribute("data-fp-src")}function d(e){return e.getAttribute("data-fp-apikey")}function p(e){return e.getAttribute("data-fp-signature")}function f(e){return e.getAttribute("data-fp-policy")}function m(e){return A.conversionsUtil.parseUrl(e).optionsDict.resize||{}}function h(e){var t=u(e)||l(e),r=d(e)||A.apikey,n=b();A.apikey||(A.setKey(r),A.util.checkApiKey()),a(e,A.conversionsUtil.buildUrl(t,g(e,n),r))}function g(e,t){t=t||{};var r=i(e),n=c(e)||t.pixelRound||10,o={resize:{width:E(r.width,n)}},a=t.signature||p(e);return a&&(o.security={signature:a,policy:t.policy||f(e)}),o}function v(e,t){var r;return function(){var n=this,o=arguments,i=function(){r=null,e.apply(n,o)};clearTimeout(r),r=setTimeout(i,t)}}function w(e){window.addEventListener?window.addEventListener("resize",e,!1):window.attachEvent&&window.attachEvent("onresize",e)}function y(e){window.removeEventListener?window.removeEventListener("resize",e,!1):window.detachEvent&&window.detachEvent("onresize",e)}function b(){return A.responsiveOptions||{}}function x(e){if(e=e||{},"object"!=typeof e)throw new A.FilepickerException("Responsive options must be an object.");A.responsiveOptions=e}function E(e,t){var r=0===t?1:t;return Math.ceil(e/r)*r}var A=this,F=200,k=v(function(){n()},F);return{activate:e,deactivate:t,update:r,setResponsiveOptions:x,getResponsiveOptions:b,getElementDims:i,replaceSrc:a,getCurrentResizeParams:m,construct:h,constructParams:g,shouldConstruct:o,roundWithStep:E,addWindowResizeEvent:w,removeWindowResizeEvent:y}}),filepicker.extend("widgets",function(){function e(){try{var e='.fp__btn{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:34px;padding:4px 30px 5px 40px;position:relative;margin-bottom:0;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Open Sans", sans-serif;font-size:12px;font-weight:600;line-height:1.42857143;color:#fff;text-align:center;white-space:nowrap;background:#ef4925;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAABGdBTUEAALGPC/xhBQAAAJRJREFUOBHNUcEWgCAIy14fbl9egK5MRarHQS7ocANmOCgWh1gdNERig1CgwPlLxkZuE80ndHlU+4Lda1zz0m01dSKtcz0h7qpQb7WR+HyrqRPxahzwwMqqkEVs6qnv+86NQAbcJlK/X+vMeMe7XcBOYaRzcbItUR7/8QgcykmElQrQPErnmxNxl2yyiwcgEvQUocIJaE6yERwqXDIAAAAASUVORK5CYII=");background-repeat:no-repeat;background-position:15px 6px;border:1px solid transparent;border-radius:17px}.fp__btn:hover{background-color:#d64533}.fp__btn::after{position:absolute;content:"";top:15px;right:14px;width:7px;height:4px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAABGdBTUEAALGPC/xhBQAAAGlJREFUCB1j/P//vw4DA4MiEKOD+0xAkatA/AJNBsS/ysTIyPgfyDgHxO+hCkD0Oag4RAhoPDsQm4NoqCIGBiBnAhBjAxNAkkxAvBZNFsQHuQesmxPIOQZVAKI54UZDFYgABbcBsQhMAgDIVGYSqZsn6wAAAABJRU5ErkJggg==");}.fp__btn:hover::after{background-position:0 -4px;}.fp__btn:active,.fp__btn:focus{outline:none}@media only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2 / 1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2){.fp__btn{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAABGdBTUEAALGPC/xhBQAAAQFJREFUWAntWEESwjAIbBwfHl+upNoRNjKUJhk5kIvZQGG7bHOwPGltgdYtEJedShKyJnLHhEILz1Zi9HCOzFI7FUqFLAWseDgPdfeQ9QZ4b1j53nstnEJJyBqx20NeT1gEMB5uZG6Fzn5lV5UMp1ASQhMjdnvoqjewsYbDjcytEH5lsxULp1AS0sx8nJfVnjganf3NkVlKhVPIfQ9Zb6jF0atK3mNriXwpicPHvIeyr3sTDA53VgpgH8BvMu1ZCCz7ew/7MPwlE4CQJPNnQj2ZX4SYlEPbVpsvKFZ5TOwhcRoUTQiwwhVjArPEqVvRhMCneMXzDk9lwYphIwrZZOihF32oehMAa1qSAAAAAElFTkSuQmCC");background-size:18px 21px}.fp__btn::after{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAABGdBTUEAALGPC/xhBQAAANpJREFUKBWVkU8KglAYxJ/u3HuBwmUX8BqepKN4ka4RguDOVYu2QVCrhIJ6/caekqLiGxi+PzPD58PAWrszxmygD84h7hpePFLy1mEQBJamgvcVYXkqZXTR0LwpJWw0z0Ba6bymDcrI4kkp4EvzCNoVztNKfVATwoOiyx/NDup1SVqPQVBbDDeK3txBb9JuHfhNW3HWjZhDX+SGRAgPHkl5f0+kieBxRVieaPD5LGJ4WghLiwehbkBI4HUirF3S+SYrhhQ2f2H16aR5vMSYwbdjNtYXZ0J7cc70BXnFMHIGznzEAAAAAElFTkSuQmCC");background-size:7px 8px;}}',t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),t.appendChild(r)}catch(n){}}var t=this,r=function(e,t,r,n){var o=n.getAttribute(r);o&&(t[e]=o)},n=function(e,t){var r;document.createEvent?(r=document.createEvent("Event"),r.initEvent("change",!0,!1),r.fpfile=t?t[0]:void 0,r.fpfiles=t,e.dispatchEvent(r)):document.createEventObject?(r=document.createEventObject("Event"),r.eventPhase=2,r.currentTarget=r.srcElement=r.target=e,r.fpfile=t?t[0]:void 0,r.fpfiles=t,e.fireEvent("onchange",r)):e.onchange&&e.onchange(t)},o=function(e,t){t[e]&&(t[e]=t[e].split(","))},i=function(e,t,n){for(var o in n)r(n[o],e,o,t)},a=function(e,n){n=n||"pick";var a={},s={"data-fp-container":"container","data-fp-mimetype":"mimetype","data-fp-extension":"extension","data-fp-openTo":"openTo","data-fp-debug":"debug","data-fp-signature":"signature","data-fp-policy":"policy","data-fp-language":"language","data-fp-background-upload":"backgroundUpload","data-fp-hide":"hide","data-fp-custom-css":"customCss","data-fp-crop-force":"cropForce","data-fp-crop-ratio":"cropRatio","data-fp-crop-dim":"cropDim","data-fp-crop-max":"cropMax","data-fp-crop-min":"cropMin","data-fp-show-close":"showClose","data-fp-conversions":"conversions","data-fp-custom-text":"customText","data-fp-custom-source-container":"customSourceContainer","data-fp-custom-source-path":"customSourcePath"},c={"data-fp-mimetypes":"mimetypes","data-fp-extensions":"extensions","data-fp-maxSize":"maxSize","data-fp-maxFiles":"maxFiles","data-fp-store-location":"storeLocation","data-fp-store-path":"storePath","data-fp-store-container":"storeContainer","data-fp-store-region":"storeRegion","data-fp-store-access":"storeAccess","data-fp-image-quality":"imageQuality","data-fp-image-dim":"imageDim","data-fp-image-max":"imageMax","data-fp-image-min":"imageMin"},l={"data-fp-video-recording-resolution":"videoRes","data-fp-webcam-dim":"webcamDim","data-fp-video-length":"videoLen","data-fp-audio-length":"audioLen"};i(a,e,s),"export"===n?r("suggestedFilename",a,"data-fp-suggestedFilename",e):"pick"===n&&(i(a,e,c),a.webcam={},i(a.webcam,e,l));var u=e.getAttribute("data-fp-services");if(u){u=u.split(",");for(var d=0;d<u.length;d++)u[d]=t.services[u[d].replace(" ","")]||u[d];a.services=u}var p=e.getAttribute("data-fp-service");p&&(a.service=t.services[p.replace(" ","")]||p);var f=["extensions","mimetypes","imageDim","imageMin","imageMax","cropDim","cropMax","cropMin","webcamDim","conversions"];for(var m in f)o(f[m],a);var h=e.getAttribute("data-fp-apikey");return h&&t.setKey(h),a.folders="true"===e.getAttribute("data-fp-folders"),a},s=function(e){return"true"===e.getAttribute("data-fp-multiple")},c=function(e){var r=document.createElement("button");r.setAttribute("type","button"),r.innerHTML=e.getAttribute("data-fp-button-text")||"Pick File",r.className=e.getAttribute("data-fp-button-class")||e.className||"fp__btn",e.style.display="none";var o=a(e);s(e)?r.onclick=function(){return r.blur(),t.pickMultiple(o,function(t){for(var r=[],o=0;o<t.length;o++)r.push(t[o].url);e.value=r.join(),n(e,t)}),!1}:r.onclick=function(){return r.blur(),t.pick(o,function(t){e.value=t.url,n(e,[t])}),!1},e.parentNode.insertBefore(r,e.nextSibling)},l=function(e){var r=e.getAttribute("data-fp-url");if(!r)return!0;var o=document.createElement("button");o.setAttribute("type","button"),o.innerHTML=e.getAttribute("data-fp-button-text")||"Convert File",o.className=e.getAttribute("data-fp-button-class")||e.className||"fp__btn",e.style.display="none";var i=a(e,"convert");o.onclick=function(){return o.blur(),t.processImage(r,i,function(t){e.value=t.url,n(e,[t])}),!1},e.parentNode.insertBefore(o,e.nextSibling)},u=function(e){var r=document.createElement("div");r.className=e.getAttribute("data-fp-class")||e.className,r.style.padding="1px",e.style.display="none",e.parentNode.insertBefore(r,e.nextSibling);var o=document.createElement("button");o.setAttribute("type","button"),o.innerHTML=e.getAttribute("data-fp-button-text")||"Pick File",o.className=e.getAttribute("data-fp-button-class")||"fp__btn",r.appendChild(o);var i=document.createElement("div");p(i),i.innerHTML=e.getAttribute("data-fp-drag-text")||"Or drop files here",i.className=e.getAttribute("data-fp-drag-class")||"",r.appendChild(i);var c=a(e),l=s(e);t.dragdrop.enabled()?f(i,l,c,e):i.innerHTML="&nbsp;",l?i.onclick=o.onclick=function(){return o.blur(),t.pickMultiple(c,function(t){for(var r=[],o=[],a=0;a<t.length;a++)r.push(t[a].url),o.push(t[a].filename);e.value=r.join(),d(e,i,o.join(", ")),n(e,t)}),!1}:i.onclick=o.onclick=function(){return o.blur(),t.pick(c,function(t){e.value=t.url,d(e,i,t.filename),n(e,[t])}),!1}},d=function(e,r,o){r.innerHTML=o,r.style.padding="2px 4px",r.style.cursor="default",r.style.width="";var i=document.createElement("span");i.innerHTML="X",i.style.borderRadius="8px",i.style.fontSize="14px",i.style.cssFloat="right",i.style.padding="0 3px",i.style.color="#600",i.style.cursor="pointer";var a=function(o){return o||(o=window.event),o.cancelBubble=!0,o.stopPropagation&&o.stopPropagation(),p(r),t.dragdrop.enabled?r.innerHTML=e.getAttribute("data-fp-drag-text")||"Or drop files here":r.innerHTML="&nbsp;",e.value="",n(e),!1};i.addEventListener?i.addEventListener("click",a,!1):i.attachEvent&&i.attachEvent("onclick",a),r.appendChild(i)},p=function(e){e.style.border="1px dashed #AAA",e.style.display="inline-block",e.style.margin="0 0 0 4px",e.style.borderRadius="3px",e.style.backgroundColor="#F3F3F3",e.style.color="#333",e.style.fontSize="14px",e.style.lineHeight="22px",e.style.padding="2px 4px",e.style.verticalAlign="middle",e.style.cursor="pointer",e.style.overflow="hidden"},f=function(e,r,o,i){var a,s=e.innerHTML;t.dragdrop.makeDropPane(e,{multiple:r,maxSize:o.maxSize,mimetypes:o.mimetypes,mimetype:o.mimetype,extensions:o.extensions,extension:o.extension,location:o.storeLocation,path:o.storePath,container:o.storeContainer,region:o.storeRegion,access:o.storeAccess,policy:o.policy,signature:o.signature,dragEnter:function(){e.innerHTML="Drop to upload",e.style.backgroundColor="#E0E0E0",e.style.border="1px solid #000"},dragLeave:function(){e.innerHTML=s,e.style.backgroundColor="#F3F3F3",e.style.border="1px dashed #AAA"},onError:function(t,r){"TooManyFiles"===t?e.innerHTML=r:"WrongType"===t?e.innerHTML=r:"NoFilesFound"===t?e.innerHTML=r:"UploadError"===t&&(e.innerHTML="Oops! Had trouble uploading.");
},onStart:function(t){a=m(e)},onProgress:function(e){a&&(a.style.width=e+"%")},onSuccess:function(t){for(var r=[],o=[],a=0;a<t.length;a++)r.push(t[a].url),o.push(t[a].filename);i.value=r.join(),d(i,e,o.join(", ")),n(i,t)}})},m=function(e){var t=document.createElement("div"),r=e.offsetHeight-2;return t.style.height=r+"px",t.style.backgroundColor="#0E90D2",t.style.width="2%",t.style.borderRadius="3px",e.style.width=e.offsetWidth+"px",e.style.padding="0",e.style.border="1px solid #AAA",e.style.backgroundColor="#F3F3F3",e.style.boxShadow="inset 0 1px 2px rgba(0, 0, 0, 0.1)",e.innerHTML="",e.appendChild(t),t},h=function(e){e.onclick=function(){var r=e.getAttribute("data-fp-url");if(!r)return!0;var n=a(e,"export");return t.exportFile(r,n),!1}},g=function(){if(document.querySelectorAll){var t,r=document.querySelectorAll('input[type="filepicker"]');for(t=0;t<r.length;t++)c(r[t]);var n=document.querySelectorAll('input[type="filepicker-dragdrop"]');for(t=0;t<n.length;t++)u(n[t]);var o=document.querySelectorAll('input[type="filepicker-convert"]');for(t=0;t<o.length;t++)l(o[t]);var i=[],a=document.querySelectorAll("button[data-fp-url]");for(t=0;t<a.length;t++)i.push(a[t]);for(a=document.querySelectorAll("a[data-fp-url]"),t=0;t<a.length;t++)i.push(a[t]);for(a=document.querySelectorAll('input[type="button"][data-fp-url]'),t=0;t<a.length;t++)i.push(a[t]);for(t=0;t<i.length;t++)h(i[t]);var s=document.querySelectorAll('[type="filepicker-preview"][data-fp-url]');for(t=0;t<s.length;t++)w(s[t]);e()}},v=function(e){e.jquery&&(e=e[0]);var r=e.getAttribute("type");"filepicker"===r?c(e):"filepicker-dragdrop"===r?u(e):"filepicker-preview"===r?w(e):e.getAttribute("data-fp-src")?t.responsiveImages.construct(e):h(e)},w=function(e){var r=e.getAttribute("data-fp-url"),n=e.getAttribute("data-fp-custom-css"),r=t.util.getFPUrl(r);if(!r||!t.util.isFPUrl(r))return!0;r=r.replace("api/file/","api/preview/");var o=document.createElement("iframe");n&&(r=t.util.appendQueryToUrl(r,"css",n)),o.src=r,o.width="100%",o.height="100%",e.appendChild(o)};return{constructPickWidget:c,constructDragWidget:u,constructExportWidget:h,buildWidgets:g,constructWidget:v}}),function(){filepicker.internal(function(){var e=this;e.util.addOnLoad(e.cookies.checkThirdParty),e.util.addOnLoad(e.widgets.buildWidgets),e.util.addOnLoad(e.responsiveImages.activate)}),delete filepicker.internal,delete filepicker.extend;var e,t=filepicker._queue||[],r=t.length;if(r)for(var n=0;r>n;n++)e=t[n],filepicker[e[0]].apply(filepicker,e[1]);filepicker._queue&&delete filepicker._queue}();;
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})};
/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&
this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=
this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?
e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.11"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g.refreshPositions();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},
b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=
d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};
a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&
this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",
{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",
a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+
c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<
c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+
c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),
f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),
{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=
parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Resizable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),k=0;k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,k);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){e(this).removeClass("ui-resizable-autohide");b._handles.show()},function(){if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),
d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:
this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",
b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;
f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(l(b.left))this.position.left=b.left;if(l(b.top))this.position.top=b.top;if(l(b.height))this.size.height=b.height;if(l(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=
null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+
this.size.height,k=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&k)b.left=i-a.minWidth;if(d&&k)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=
[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,
a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,
c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.11"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=
b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var k=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(k.css("position"))){c._revertToRelativePosition=true;k.css({position:"absolute",top:"auto",left:"auto"})}k.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};
if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-
g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,
height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=
e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,
d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?
d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=
a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&
/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");
b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/
(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},l=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Button 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,f=a([]);if(c)f=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return f};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
i);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||a(this).removeClass(f)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var e=b.element[0];h(e).not(e).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");
g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(e){if(c.disabled)return false;if(e.keyCode==a.ui.keyCode.SPACE||e.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",
c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var b=this.element.parents().filter(":last"),c="label[for="+this.element.attr("id")+"]";this.buttonElement=b.find(c);if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();this.buttonElement=b.filter(c);if(!this.buttonElement.length)this.buttonElement=b.find(c)}this.element.addClass("ui-helper-hidden-accessible");
(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,f=d.primary&&d.secondary,e=[];if(d.primary||d.secondary){if(this.options.text)e.push("ui-button-text-icon"+(f?"s":d.primary?"-primary":"-secondary"));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){e.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||b.attr("title",c)}}else e.push("ui-button-text-only");b.addClass(e.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,j){var k={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},l={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&
c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",
-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=
b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");a.uiDialog.remove();a.originalTitle&&
a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==b.uiDialog[0]){e=c(this).css("z-index");
isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);
d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===f[0]&&e.shiftKey){g.focus(1);return false}}});
c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,function(){return!(d=true)});if(d){c.each(a,function(f,
h){h=c.isFunction(h)?{click:h,text:f}:h;f=c('<button type="button"></button>').attr(h,true).unbind("click").click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.fn.button&&f.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=
d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,originalSize:f.originalSize,
position:f.position,size:f.size}}a=a===j?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",f,b(h))},stop:function(f,
h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):[a[0],a[1]];if(b.length===
1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);if(g in k)e=true;if(g in
l)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):e.removeClass("ui-dialog-disabled");
break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=this.options,b,d,e=
this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-b,0));this.uiDialog.is(":data(resizable)")&&
this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.11",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(a){if(this.instances.length===
0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,
function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();
else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),h,g,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=
false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");h=b._start(c,f);if(h===false)return}break}i=b.options.step;h=b.options.values&&b.options.values.length?(g=b.values(f)):(g=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:g=b._valueMin();break;case d.ui.keyCode.END:g=b._valueMax();break;case d.ui.keyCode.PAGE_UP:g=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:g=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(h===
b._valueMax())return;g=b._trimAlignValue(h+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(h===b._valueMin())return;g=b._trimAlignValue(h-i);break}b._slide(c,f,g);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,h,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});e=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(i){var j=Math.abs(c-h.values(i));if(e>j){e=j;f=d(this);g=i}});if(a.range===true&&this.values(1)===a.min){g+=1;f=d(this.handles[g])}if(this._start(b,
g)===false)return false;this._mouseSliding=true;h._handleIndex=g;f.addClass("ui-state-active").focus();a=f.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-f.width()/2,top:b.pageY-a.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;
if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(a);c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],
value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):this.value();
else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,h={},g,i,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(k){f=(c.values(k)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](h,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(k===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);
if(k===1)c.range[e?"animate":"css"]({width:f-g+"%"},{queue:false,duration:a.animate})}else{if(k===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(k===1)c.range[e?"animate":"css"]({height:f-g+"%"},{queue:false,duration:a.animate})}g=f});else{i=this.value();j=this._valueMin();l=this._valueMax();f=l!==j?(i-j)/(l-j)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](h,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function n(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return o.transparent;return o[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return n(b)}function p(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function q(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function m(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=n(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},r=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue("fx",function(){var e=f(this),g=e.attr("style")||" ",h=q(p.call(this)),l,v=e.attr("className");f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});l=q(p.call(this));e.attr("className",v);e.animate(u(h,l),a,b,function(){f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)});h=f.queue(this);l=h.splice(h.length-1,1)[0];
h.splice(1,0,l);f.dequeue(this)})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,
a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.11",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,
a){var b;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);
return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(m(c))return this._show.apply(this,arguments);
else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(m(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(m(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),
b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,
a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,
a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==
e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=
g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,
a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;;
/*!
 * jQuery dragscrollable Plugin
 * version: 1.0 (25-Jun-2009)
 * Copyright (c) 2009 Miquel Herrera
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Modified by David Richard (2011)
 *   - added delegateMode option
 */
/*!
 * jQuery dragscrollable Plugin
 * version: 1.0 (25-Jun-2009)
 * Copyright (c) 2009 Miquel Herrera
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Modified by David Richard (2011)
 *   - added delegateMode option
 */
;
(function ($) { // secure $ jQuery alias

    /**
     * <pre>
     * Adds the ability to manage elements scroll by dragging
     * one or more of its descendant elements. Options parameter
     * allow to specifically select which inner elements will
     * respond to the drag events.
     *
     * options properties:
     * ------------------------------------------------------------------------
     *  dragSelector         | jquery selector to apply to each wrapped element
     *                       | to find which will be the dragging elements.
     *                       | Defaults to '&gt;:first' which is the first child of
     *                       | scrollable element
     * ------------------------------------------------------------------------
     *  acceptPropagatedEvent| Will the dragging element accept propagated
     *                       | events? default is yes, a propagated mouse event
     *                       | on a inner element will be accepted and processed.
     *                       | If set to false, only events originated on the
     *                       | draggable elements will be processed.
     * ------------------------------------------------------------------------
     *  preventDefault       | Prevents the event to propagate further effectivey
     *                       | dissabling other default actions. Defaults to true
     * ------------------------------------------------------------------------
     *  delegateMode         | Attach the dragSelector using $.delegate() instead of $.bind()
     *
     *  usage examples:
     *  To add the scroll by drag to the element id=viewport when dragging its
     *  first child accepting any propagated events
     * $('#viewport').dragscrollable();
     *  To add the scroll by drag ability to any element div of class viewport
     *  when dragging its first descendant of class dragMe responding only to
     *  evcents originated on the '.dragMe' elements.
     * $('div.viewport').dragscrollable({dragSelector:'.dragMe:first',
	 * 								  acceptPropagatedEvent: false});
     *  Notice that some 'viewports' could be nested within others but events
     *  would not interfere as acceptPropagatedEvent is set to false.
     * </pre>
     */
    $.fn.dragscrollable = function (options) {

        var settings = $.extend({
            dragSelector: '>:first',
            acceptPropagatedEvent: true,
            preventDefault: true,
            delegateMode: false
        }, options || {});

        var dragscroll = {
            mouseDownHandler: function (event) {
                // mousedown, left click, check propagation
                // if (event.which != 1
                // || (!event.data.acceptPropagatedEvent && event.target !=
                // this)) {
                // return false;
                // }

                // fix:
                // http://plugins.jquery.com/content/problems-input-boxes-inside-elements-draggable-area
                if (event.which != 1) {
                    return false;
                } else if (!event.data.acceptPropagatedEvent) {
                    if ((event.target.localName == "input")
                        || (event.target.localName == "textarea")) {
                        return true;
                    } else if (event.target != this) {
                        return false;
                    }
                }

                // Initial coordinates will be the last when dragging
                event.data.lastCoord = {
                    left: event.clientX,
                    top: event.clientY
                };

                $.event.add(document, "mouseup", dragscroll.mouseUpHandler,
                    event.data);
                $.event.add(document, "mousemove", dragscroll.mouseMoveHandler,
                    event.data);
                if (event.data.preventDefault) {
                    event.preventDefault();
                    return false;
                }
            },
            mouseMoveHandler: function (event) { // User is dragging
                // How much did the mouse move?
                var delta = {
                    left: (event.clientX - event.data.lastCoord.left),
                    top: (event.clientY - event.data.lastCoord.top)
                };

                // Set the scroll position relative to what ever the scroll is
                // now
                event.data.scrollable.scrollLeft(event.data.scrollable
                        .scrollLeft()
                    - delta.left);
                event.data.scrollable.scrollTop(event.data.scrollable
                        .scrollTop()
                    - delta.top);

                // Save where the cursor is
                event.data.lastCoord = {
                    left: event.clientX,
                    top: event.clientY
                };
                if (event.data.preventDefault) {
                    event.preventDefault();
                    return false;
                }

            },
            mouseUpHandler: function (event) { // Stop scrolling
                $.event.remove(document, "mousemove",
                    dragscroll.mouseMoveHandler);
                $.event.remove(document, "mouseup", dragscroll.mouseUpHandler);
                if (event.data.preventDefault) {
                    event.preventDefault();
                    return false;
                }
            }
        };

        // set up the initial events
        this.each(function () {
            // closure object data for each scrollable element
            var data = {
                scrollable: $(this),
                acceptPropagatedEvent: settings.acceptPropagatedEvent,
                preventDefault: settings.preventDefault
            };

            // Set mouse initiating event on the desired descendant
            if (settings.delegateMode) {
                $(this).delegate(settings.dragSelector, 'mousedown', data,
                    dragscroll.mouseDownHandler);
            } else {
                $(this).find(settings.dragSelector).bind('mousedown', data,
                    dragscroll.mouseDownHandler);
            }

        });
    }; // end plugin dragscrollable

})(jQuery); // confine scope
;
/*!
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */
/*!
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */

(function (jQuery) {

    jQuery.hotkeys = {
        version: "0.8",

        specialKeys: {
            8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
            20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
            37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del",
            96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
            104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/",
            112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
            120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
        },

        shiftNums: {
            "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
            "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
            ".": ">", "/": "?", "\\": "|"
        }
    };

    function keyHandler(handleObj) {
        // Only care when a possible input has been specified
        if (typeof handleObj.data !== "string") {
            return;
        }

        var origHandler = handleObj.handler,
            keys = handleObj.data.toLowerCase().split(" ");

        handleObj.handler = function (event) {
            // Don't fire in text-accepting inputs that we didn't directly bind to
            if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) ||
                event.target.type === "text")) {
                return;
            }

            // Keypress represents characters, not special keys
            var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
                character = String.fromCharCode(event.which).toLowerCase(),
                key, modif = "", possible = {};

            // check combinations (alt|ctrl|shift+anything)
            if (event.altKey && special !== "alt") {
                modif += "alt+";
            }

            if (event.ctrlKey && special !== "ctrl") {
                modif += "ctrl+";
            }

            // TODO: Need to make sure this works consistently across platforms
            if (event.metaKey && !event.ctrlKey && special !== "meta") {
                modif += "meta+";
            }

            if (event.shiftKey && special !== "shift") {
                modif += "shift+";
            }

            if (special) {
                possible[modif + special] = true;

            } else {
                possible[modif + character] = true;
                possible[modif + jQuery.hotkeys.shiftNums[character]] = true;

                // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
                if (modif === "shift+") {
                    possible[jQuery.hotkeys.shiftNums[character]] = true;
                }
            }

            for (var i = 0, l = keys.length; i < l; i++) {
                if (possible[keys[i]]) {
                    return origHandler.apply(this, arguments);
                }
            }
        };
    }

    jQuery.each(["keydown", "keyup", "keypress"], function () {
        jQuery.event.special[this] = {add: keyHandler};
    });

})(jQuery);;
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */

(function ($) {

    var types = ['DOMMouseScroll', 'mousewheel'];

    $.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function () {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
        }
        if (event.detail) {
            delta = -event.detail / 3;
        }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return $.event.handle.apply(this, args);
    }

})(jQuery);;
/*!
 * jQuery miniColors: A small color selector
 *
 * Copyright 2011 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)
 *
 * Dual licensed under the MIT or GPL Version 2 licenses
 *
 */
/*!
 * jQuery miniColors: A small color selector
 *
 * Copyright 2011 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)
 *
 * Dual licensed under the MIT or GPL Version 2 licenses
 *
 */
/*
 * Usage:
 *
 *	1. Link to jQuery: <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
 *
 *  2. Link to miniColors: <script type="text/javascript" src="jquery.miniColors.js"></script>
 *
 *  3. Include miniColors stylesheet: <link type="text/css" rel="stylesheet" href="jquery.miniColors.css" />
 *
 *	4. Apply $([selector]).miniColors() to one or more INPUT elements
 *
 *
 * Options:
 *
 *	disabled		[true|false]
 *	readonly		[true|false]
 *
 *
 *  Specify options on creation:
 *
 *		$([selector]).miniColors({
 *
 *			optionName: value,
 *			optionName: value,
 *			...
 *
 *		});
 *
 *
 * Methods:
 *
 *	Call a method using: $([selector]).miniColors('methodName', [value]);
 *
 *	disabled		[true|false]
 *	readonly		[true|false]
 *	value			[hex value]
 *	destroy
 *
 *
 * Events:
 *
 *	Attach events on creation:
 *
 *		$([selector]).miniColors({
 *
 *			change: function(hex, rgb) { ... }
 *
 *		});
 *
 *	change(hex, rgb)	called when the color value changes; 'this' will refer to the original input element;
 *                      hex is the string hex value of the selected color; rgb is an object with the RGB values
 *
 *
 * Change log:
 *
 *	- v0.1 (2011-02-24) - Initial release
 *
 *
 * Attribution:
 *
 *	- The color picker icon is based on an icon from the amazing Fugue icon set: 
 *    http://p.yusukekamiyamane.com/
 *
 *	- The gradient image, the hue image, and the math functions are courtesy of 
 *    the eyecon.co jQuery color picker: http://www.eyecon.ro/colorpicker/
 *
 *
 */


/*
 * Changes by David (20/05/2011):
 * - added hide callback
 * - center colorpicker beneath trigger element (hardcoded) 
 * - add invisible overlay
 */

/*
 * Changes by David (25/04/2012):
 * - Add move callback
 */
if (jQuery) (function ($) {

    $.extend($.fn, {

        miniColors: function (o, data) {


            var create = function (input, o, data) {

                //
                // Creates a new instance of the miniColors selector
                //

                // Determine initial color (defaults to white)
                var color = cleanHex(input.val());
                if (!color) color = 'FFFFFF';
                var hsb = hex2hsb(color);

                // Create trigger
                var trigger = $('<a class="miniColors-trigger" style="background-color: #' + color + '" href="#"></a>');
                trigger.insertAfter(input);

                // Add necessary attributes
                input.addClass('miniColors').attr('maxlength', 7).attr('autocomplete', 'off');

                // Set input data
                input.data('trigger', trigger);
                input.data('hsb', hsb);
                if (o.change) input.data('change', o.change);
                if (o.hide) input.data('hide', o.hide);
                if (o.move) input.data('move', o.move);

                // Handle options
                if (o.readonly) input.attr('readonly', true);
                if (o.disabled) disable(input);

                // Show selector when trigger is clicked
                trigger.bind('click.miniColors', function (event) {
                    event.preventDefault();
                    input.trigger('focus');
                });

                // Show selector when input receives focus
                input.bind('focus.miniColors', function (event) {
                    show(input);
                });

                // Hide on blur
                input.bind('blur.miniColors', function (event) {
                    var hex = cleanHex(input.val());
                    input.val(hex ? '#' + hex : '');
                });

                // Hide when tabbing out of the input
                input.bind('keydown.miniColors', function (event) {
                    if (event.keyCode === 9) hide(input);
                });

                // Update when color is typed in
                input.bind('keyup.miniColors', function (event) {
                    // Remove non-hex characters
                    var filteredHex = input.val().replace(/[^A-F0-9#]/ig, '');
                    input.val(filteredHex);
                    if (!setColorFromInput(input)) {
                        // Reset trigger color when color is invalid
                        input.data('trigger').css('backgroundColor', '#FFF');
                    }
                });

                // Handle pasting
                input.bind('paste.miniColors', function (event) {
                    // Short pause to wait for paste to complete
                    setTimeout(function () {
                        input.trigger('keyup');
                    }, 5);
                });

            };


            var destroy = function (input) {

                //
                // Destroys an active instance of the miniColors selector
                //

                hide();

                input = $(input);
                input.data('trigger').remove();
                input.removeAttr('autocomplete');
                input.removeData('trigger');
                input.removeData('selector');
                input.removeData('hsb');
                input.removeData('huePicker');
                input.removeData('colorPicker');
                input.removeData('mousebutton');
                input.removeData('moving');
                input.unbind('click.miniColors');
                input.unbind('focus.miniColors');
                input.unbind('blur.miniColors');
                input.unbind('keyup.miniColors');
                input.unbind('keydown.miniColors');
                input.unbind('paste.miniColors');

            };


            var enable = function (input) {

                //
                // Disables the input control and the selector
                //

                input.attr('disabled', false);
                input.data('trigger').css('opacity', 1);

            };


            var disable = function (input) {

                //
                // Disables the input control and the selector
                //


                input.attr('disabled', true);
                input.data('trigger').css('opacity', .5);
                hide(input);

            };


            var show = function (input) {

                //
                // Shows the miniColors selector
                //

                if (input.attr('disabled')) return false;

                // Hide all other instances
                hide();

                // Generate the selector
                var selector = $('<div class="miniColors-selector"></div>');
                selector.append('<div class="miniColors-colors" style="background-color: #ffffff;"><div class="miniColors-colorPicker"></div></div>');
                selector.append('<div class="miniColors-hues"><div class="miniColors-huePicker"></div></div>');
                selector.css({
                    top: input.is(':visible') ? input.offset().top + input.outerHeight() : input.data('trigger').offset().top + input.data('trigger').outerHeight(),
                    left: input.is(':visible') ? input.offset().left : input.data('trigger').offset().left - /** david: hack! - align middle*/ 87,
                    display: 'none'
                }).addClass(input.attr('class'));

                // Set background for colors
                var hsb = input.data('hsb');
                selector.find('.miniColors-colors').css('backgroundColor', '#' + hsb2hex({h: hsb.h, s: 100, b: 100}));

                // Set colorPicker position
                var colorPosition = input.data('colorPosition');
                if (!colorPosition) colorPosition = getColorPositionFromHSB(hsb);
                selector.find('.miniColors-colorPicker').css('top', colorPosition.y + 'px').css('left', colorPosition.x + 'px');

                // Set huePicker position
                var huePosition = input.data('huePosition');
                if (!huePosition) huePosition = getHuePositionFromHSB(hsb);
                selector.find('.miniColors-huePicker').css('top', huePosition.y + 'px');


                // Set input data
                input.data('selector', selector);
                input.data('huePicker', selector.find('.miniColors-huePicker'));
                input.data('colorPicker', selector.find('.miniColors-colorPicker'));
                input.data('mousebutton', 0);

                // invisible overlay accept clicks outside the color picker area
                var $overlay = $("<div class='miniColors-overlay no-select'/>").css({
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    "z-index": 10000
                }).appendTo("BODY").mousedown(function () {
                    hide(input);
                    $overlay.remove();
                });

                $('BODY').append(selector);


                selector.fadeIn(100);

                // Prevent text selection in IE
                selector.bind('selectstart', function () {
                    return false;
                });

                selector.bind('mousedown.miniColors', function (event) {
                    input.data('mousebutton', 1);

                    if ($(event.target).hasClass('miniColors-colors')) {
                        event.preventDefault();
                        input.data('moving', 'colors');
                        moveColor(input, event);
                    }

                    if ($(event.target).hasClass('miniColors-hues')) {
                        event.preventDefault();
                        input.data('moving', 'hues');
                        moveHue(input, event);
                    }

                    if (input.data('move')) {
                        input.data('move').call(input, input.val());
                    }
                });

                selector.bind('mouseup.miniColors', function (event) {
                    input.data('mousebutton', 0);
                    input.removeData('moving');
                });

                selector.bind('mousemove.miniColors', function (event) {
                    if (input.data('mousebutton') === 1) {
                        if (input.data('moving') === 'colors') moveColor(input, event);
                        if (input.data('moving') === 'hues') moveHue(input, event);

                        if (input.data('move')) {
                            input.data('move').call(input, input.val());
                        }
                    }
                });

            };


            var hide = function (input) {

                // call hide callback
                if (input) {
                    if (input.data('hide')) {
                        input.data('hide').call(input, input.val());
                    }
                }
                //
                // Hides one or more miniColors selectors
                //

                // Hide all other instances if input isn't specified
                if (!input) input = '.miniColors';

                $(input).each(function () {
                    var selector = $(this).data('selector');
                    $(this).removeData('selector');
                    $(selector).fadeOut(100, function () {
                        $(this).remove();
                    });
                });
            };


            var moveColor = function (input, event) {

                var colorPicker = input.data('colorPicker');

                colorPicker.hide();

                var position = {
                    x: event.clientX - input.data('selector').find('.miniColors-colors').offset().left + $(document).scrollLeft() - 5,
                    y: event.clientY - input.data('selector').find('.miniColors-colors').offset().top + $(document).scrollTop() - 5
                };

                if (position.x <= -5) position.x = -5;
                if (position.x >= 144) position.x = 144;
                if (position.y <= -5) position.y = -5;
                if (position.y >= 144) position.y = 144;
                input.data('colorPosition', position);
                colorPicker.css('left', position.x).css('top', position.y).show();

                // Calculate saturation
                var s = Math.round((position.x + 5) * .67);
                if (s < 0) s = 0;
                if (s > 100) s = 100;

                // Calculate brightness
                var b = 100 - Math.round((position.y + 5) * .67);
                if (b < 0) b = 0;
                if (b > 100) b = 100;

                // Update HSB values
                var hsb = input.data('hsb');
                hsb.s = s;
                hsb.b = b;

                // Set color
                setColor(input, hsb, true);

            };


            var moveHue = function (input, event) {

                var huePicker = input.data('huePicker');

                huePicker.hide();

                var position = {
                    y: event.clientY - input.data('selector').find('.miniColors-colors').offset().top + $(document).scrollTop() - 1
                };

                if (position.y <= -1) position.y = -1;
                if (position.y >= 149) position.y = 149;
                input.data('huePosition', position);
                huePicker.css('top', position.y).show();

                // Calculate hue
                var h = Math.round((150 - position.y - 1) * 2.4);
                if (h < 0) h = 0;
                if (h > 360) h = 360;

                // Update HSB values
                var hsb = input.data('hsb');
                hsb.h = h;

                // Set color
                setColor(input, hsb, true);

            };


            var setColor = function (input, hsb, updateInputValue) {

                input.data('hsb', hsb);
                var hex = hsb2hex(hsb);
                if (updateInputValue) input.val('#' + hex);
                input.data('trigger').css('backgroundColor', '#' + hex);
                if (input.data('selector')) input.data('selector').find('.miniColors-colors').css('backgroundColor', '#' + hsb2hex({h: hsb.h, s: 100, b: 100}));

                if (input.data('change')) {
                    input.data('change').call(input, '#' + hex, hsb2rgb(hsb));
                }

            };


            var setColorFromInput = function (input) {

                // Don't update if the hex color is invalid
                var hex = cleanHex(input.val());
                if (!hex) return false;

                // Get HSB equivalent
                var hsb = hex2hsb(hex);

                // If color is the same, no change required
                var currentHSB = input.data('hsb');
                if (hsb.h === currentHSB.h && hsb.s === currentHSB.s && hsb.b === currentHSB.b) return true;

                // Set colorPicker position
                var colorPosition = getColorPositionFromHSB(hsb);
                var colorPicker = $(input.data('colorPicker'));
                colorPicker.css('top', colorPosition.y + 'px').css('left', colorPosition.x + 'px');

                // Set huePosition position
                var huePosition = getHuePositionFromHSB(hsb);
                var huePicker = $(input.data('huePicker'));
                huePicker.css('top', huePosition.y + 'px');

                setColor(input, hsb, false);

                return true;

            };


            var getColorPositionFromHSB = function (hsb) {

                var x = Math.ceil(hsb.s / .67);
                if (x < 0) x = 0;
                if (x > 150) x = 150;

                var y = 150 - Math.ceil(hsb.b / .67);
                if (y < 0) y = 0;
                if (y > 150) y = 150;

                return {x: x - 5, y: y - 5};

            }


            var getHuePositionFromHSB = function (hsb) {

                var y = 150 - (hsb.h / 2.4);
                if (y < 0) h = 0;
                if (y > 150) h = 150;

                return {y: y - 1};

            }


            var cleanHex = function (hex) {

                //
                // Turns a dirty hex string into clean, 6-character hex color
                //

                hex = hex.replace(/[^A-Fa-f0-9]/, '');

                if (hex.length == 3) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                }

                return hex.length === 6 ? hex : null;

            };


            var hsb2rgb = function (hsb) {
                var rgb = {};
                var h = Math.round(hsb.h);
                var s = Math.round(hsb.s * 255 / 100);
                var v = Math.round(hsb.b * 255 / 100);
                if (s == 0) {
                    rgb.r = rgb.g = rgb.b = v;
                } else {
                    var t1 = v;
                    var t2 = (255 - s) * v / 255;
                    var t3 = (t1 - t2) * (h % 60) / 60;
                    if (h == 360) h = 0;
                    if (h < 60) {
                        rgb.r = t1;
                        rgb.b = t2;
                        rgb.g = t2 + t3;
                    }
                    else if (h < 120) {
                        rgb.g = t1;
                        rgb.b = t2;
                        rgb.r = t1 - t3;
                    }
                    else if (h < 180) {
                        rgb.g = t1;
                        rgb.r = t2;
                        rgb.b = t2 + t3;
                    }
                    else if (h < 240) {
                        rgb.b = t1;
                        rgb.r = t2;
                        rgb.g = t1 - t3;
                    }
                    else if (h < 300) {
                        rgb.b = t1;
                        rgb.g = t2;
                        rgb.r = t2 + t3;
                    }
                    else if (h < 360) {
                        rgb.r = t1;
                        rgb.g = t2;
                        rgb.b = t1 - t3;
                    }
                    else {
                        rgb.r = 0;
                        rgb.g = 0;
                        rgb.b = 0;
                    }
                }
                return {
                    r: Math.round(rgb.r),
                    g: Math.round(rgb.g),
                    b: Math.round(rgb.b)
                };
            };


            var rgb2hex = function (rgb) {

                var hex = [
                    rgb.r.toString(16),
                    rgb.g.toString(16),
                    rgb.b.toString(16)
                ];
                $.each(hex, function (nr, val) {
                    if (val.length == 1) hex[nr] = '0' + val;
                });

                return hex.join('');
            };


            var hex2rgb = function (hex) {
                var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);

                return {
                    r: hex >> 16,
                    g: (hex & 0x00FF00) >> 8,
                    b: (hex & 0x0000FF)
                };
            };


            var rgb2hsb = function (rgb) {
                var hsb = {h: 0, s: 0, b: 0};
                var min = Math.min(rgb.r, rgb.g, rgb.b);
                var max = Math.max(rgb.r, rgb.g, rgb.b);
                var delta = max - min;
                hsb.b = max;
                hsb.s = max != 0 ? 255 * delta / max : 0;
                if (hsb.s != 0) {
                    if (rgb.r == max) {
                        hsb.h = (rgb.g - rgb.b) / delta;
                    } else if (rgb.g == max) {
                        hsb.h = 2 + (rgb.b - rgb.r) / delta;
                    } else {
                        hsb.h = 4 + (rgb.r - rgb.g) / delta;
                    }
                } else {
                    hsb.h = -1;
                }
                hsb.h *= 60;
                if (hsb.h < 0) {
                    hsb.h += 360;
                }
                hsb.s *= 100 / 255;
                hsb.b *= 100 / 255;
                return hsb;
            };


            var hex2hsb = function (hex) {
                var hsb = rgb2hsb(hex2rgb(hex));
                // Zero out hue marker for black, white, and grays (saturation === 0)
                if (hsb.s === 0) hsb.h = 360;
                return hsb;
            };


            var hsb2hex = function (hsb) {
                return rgb2hex(hsb2rgb(hsb));
            };


            //
            // Handle calls to $([selector]).miniColors()
            //
            switch (o) {

                case 'readonly':

                    $(this).each(function () {
                        $(this).attr('readonly', data);
                    });

                    return $(this);

                    break;

                case 'disabled':

                    $(this).each(function () {
                        if (data) {
                            disable($(this));
                        } else {
                            enable($(this));
                        }
                    });

                    return $(this);

                case 'value':

                    $(this).each(function () {
                        $(this).val(data).trigger('keyup');
                    });

                    return $(this);

                    break;

                case 'destroy':

                    $(this).each(function () {
                        destroy($(this));
                    });

                    return $(this);

                default:

                    if (!o) o = {};

                    $(this).each(function () {

                        // Must be called on an input element
                        if ($(this)[0].tagName.toLowerCase() !== 'input') return;

                        // If a trigger is present, the control was already created
                        if ($(this).data('trigger')) return;

                        // Create the control
                        create($(this), o, data);

                    });

                    return $(this);

            }


        }


    });

})(jQuery);



;
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (jQuery, undefined) {
    var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = {key: 0, data: {}}, itemKey = 0, cloneIndex = 0, stack = [];

    function newTmplItem(options, parentItem, fn, data) {
        // Returns a template item data structure for a new rendered instance of a template (a 'template item').
        // The content field is a hierarchical array of strings and nested items (to be
        // removed and replaced by nodes field of dom elements, once inserted in DOM).
        var newItem = {
            data: data || (data === 0 || data === false) ? data : (parentItem ? parentItem.data : {}),
            _wrap: parentItem ? parentItem._wrap : null,
            tmpl: null,
            parent: parentItem || null,
            nodes: [],
            calls: tiCalls,
            nest: tiNest,
            wrap: tiWrap,
            html: tiHtml,
            update: tiUpdate
        };
        if (options) {
            jQuery.extend(newItem, options, {nodes: [], parent: parentItem});
        }
        if (fn) {
            // Build the hierarchical content to be used during insertion into DOM
            newItem.tmpl = fn;
            newItem._ctnt = newItem._ctnt || newItem.tmpl(jQuery, newItem);
            newItem.key = ++itemKey;
            // Keep track of new template item, until it is stored as jQuery Data on DOM element
            (stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
        }
        return newItem;
    }

    // Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQuery.fn[name] = function (selector) {
            var ret = [], insert = jQuery(selector), elems, i, l, tmplItems,
                parent = this.length === 1 && this[0].parentNode;

            appendToTmplItems = newTmplItems || {};
            if (parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1) {
                insert[original](this[0]);
                ret = this;
            } else {
                for (i = 0, l = insert.length; i < l; i++) {
                    cloneIndex = i;
                    elems = (i > 0 ? this.clone(true) : this).get();
                    jQuery(insert[i])[original](elems);
                    ret = ret.concat(elems);
                }
                cloneIndex = 0;
                ret = this.pushStack(ret, name, insert.selector);
            }
            tmplItems = appendToTmplItems;
            appendToTmplItems = null;
            jQuery.tmpl.complete(tmplItems);
            return ret;
        };
    });

    jQuery.fn.extend({
        // Use first wrapped element as template markup.
        // Return wrapped set of template items, obtained by rendering template against data.
        tmpl: function (data, options, parentItem) {
            return jQuery.tmpl(this[0], data, options, parentItem);
        },

        // Find which rendered template item the first wrapped DOM element belongs to
        tmplItem: function () {
            return jQuery.tmplItem(this[0]);
        },

        // Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
        template: function (name) {
            return jQuery.template(name, this[0]);
        },

        domManip: function (args, table, callback, options) {
            if (args[0] && jQuery.isArray(args[0])) {
                var dmArgs = jQuery.makeArray(arguments), elems = args[0], elemsLength = elems.length, i = 0, tmplItem;
                while (i < elemsLength && !(tmplItem = jQuery.data(elems[i++], "tmplItem"))) {
                }
                if (tmplItem && cloneIndex) {
                    dmArgs[2] = function (fragClone) {
                        // Handler called by oldManip when rendered template has been inserted into DOM.
                        jQuery.tmpl.afterManip(this, fragClone, callback);
                    };
                }
                oldManip.apply(this, dmArgs);
            } else {
                oldManip.apply(this, arguments);
            }
            cloneIndex = 0;
            if (!appendToTmplItems) {
                jQuery.tmpl.complete(newTmplItems);
            }
            return this;
        }
    });

    jQuery.extend({
        // Return wrapped set of template items, obtained by rendering template against data.
        tmpl: function (tmpl, data, options, parentItem) {
            var ret, topLevel = !parentItem;
            if (topLevel) {
                // This is a top-level tmpl call (not from a nested template using {{tmpl}})
                parentItem = topTmplItem;
                tmpl = jQuery.template[tmpl] || jQuery.template(null, tmpl);
                wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
            } else if (!tmpl) {
                // The template item is already associated with DOM - this is a refresh.
                // Re-evaluate rendered template for the parentItem
                tmpl = parentItem.tmpl;
                newTmplItems[parentItem.key] = parentItem;
                parentItem.nodes = [];
                if (parentItem.wrapped) {
                    updateWrapped(parentItem, parentItem.wrapped);
                }
                // Rebuild, without creating a new template item
                return jQuery(build(parentItem, null, parentItem.tmpl(jQuery, parentItem)));
            }
            if (!tmpl) {
                return []; // Could throw...
            }
            if (typeof data === "function") {
                data = data.call(parentItem || {});
            }
            if (options && options.wrapped) {
                updateWrapped(options, options.wrapped);
            }
            ret = jQuery.isArray(data) ?
                jQuery.map(data, function (dataItem) {
                    return dataItem ? newTmplItem(options, parentItem, tmpl, dataItem) : null;
                }) :
                [newTmplItem(options, parentItem, tmpl, data)];
            return topLevel ? jQuery(build(parentItem, null, ret)) : ret;
        },

        // Return rendered template item for an element.
        tmplItem: function (elem) {
            var tmplItem;
            if (elem instanceof jQuery) {
                elem = elem[0];
            }
            while (elem && elem.nodeType === 1 && !(tmplItem = jQuery.data(elem, "tmplItem")) && (elem = elem.parentNode)) {
            }
            return tmplItem || topTmplItem;
        },

        // Set:
        // Use $.template( name, tmpl ) to cache a named template,
        // where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
        // Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

        // Get:
        // Use $.template( name ) to access a cached template.
        // Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
        // will return the compiled template, without adding a name reference.
        // If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
        // to $.template( null, templateString )
        template: function (name, tmpl) {
            if (tmpl) {
                // Compile template and associate with name
                if (typeof tmpl === "string") {
                    // This is an HTML string being passed directly in.
                    tmpl = buildTmplFn(tmpl)
                } else if (tmpl instanceof jQuery) {
                    tmpl = tmpl[0] || {};
                }
                if (tmpl.nodeType) {
                    // If this is a template block, use cached copy, or generate tmpl function and cache.
                    tmpl = jQuery.data(tmpl, "tmpl") || jQuery.data(tmpl, "tmpl", buildTmplFn(tmpl.innerHTML));
                    // Issue: In IE, if the container element is not a script block, the innerHTML will remove quotes from attribute values whenever the value does not include white space.
                    // This means that foo="${x}" will not work if the value of x includes white space: foo="${x}" -> foo=value of x.
                    // To correct this, include space in tag: foo="${ x }" -> foo="value of x"
                }
                return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
            }
            // Return named compiled template
            return name ? (typeof name !== "string" ? jQuery.template(null, name) :
                (jQuery.template[name] ||
                // If not in map, and not containing at least on HTML tag, treat as a selector.
                // (If integrated with core, use quickExpr.exec)
                jQuery.template(null, htmlExpr.test(name) ? name : jQuery(name)))) : null;
        },

        encode: function (text) {
            // Do HTML encoding replacing < > & and ' and " by corresponding entities.
            return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
        }
    });

    jQuery.extend(jQuery.tmpl, {
        tag: {
            "tmpl": {
                _default: {$2: "null"},
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
                // tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
                // This means that {{tmpl foo}} treats foo as a template (which IS a function).
                // Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
            },
            "wrap": {
                _default: {$2: "null"},
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            "each": {
                _default: {$2: "$index, $value"},
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {$1: "true"},
                open: "}else if(($notnull_1) && $1a){"
            },
            "html": {
                // Unecoded expression evaluation.
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                // Encoded expression evaluation. Abbreviated form is ${}.
                _default: {$1: "$data"},
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                // Comment tag. Skipped by parser
                open: ""
            }
        },

        // This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
        complete: function (items) {
            newTmplItems = {};
        },

        // Call this from code which overrides domManip, or equivalent
        // Manage cloning/storing template items etc.
        afterManip: function afterManip(elem, fragClone, callback) {
            // Provides cloned fragment ready for fixup prior to and after insertion into DOM
            var content = fragClone.nodeType === 11 ?
                jQuery.makeArray(fragClone.childNodes) :
                fragClone.nodeType === 1 ? [fragClone] : [];

            // Return fragment to original caller (e.g. append) for DOM insertion
            callback.call(elem, fragClone);

            // Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
            storeTmplItems(content);
            cloneIndex++;
        }
    });

    //========================== Private helper functions, used by code above ==========================

    function build(tmplItem, nested, content) {
        // Convert hierarchical content into flat string array
        // and finally return array of fragments ready for DOM insertion
        var frag, ret = content ? jQuery.map(content, function (item) {
            return (typeof item === "string") ?
                // Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
                (tmplItem.key ? item.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2") : item) :
                // This is a child template item. Build nested template.
                build(item, tmplItem, item._ctnt);
        }) :
            // If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
            tmplItem;
        if (nested) {
            return ret;
        }

        // top-level template
        ret = ret.join("");

        // Support templates which have initial or final text nodes, or consist only of text
        // Also support HTML entities within the HTML markup.
        ret.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (all, before, middle, after) {
            frag = jQuery(middle).get();

            storeTmplItems(frag);
            if (before) {
                frag = unencode(before).concat(frag);
            }
            if (after) {
                frag = frag.concat(unencode(after));
            }
        });
        return frag ? frag : unencode(ret);
    }

    function unencode(text) {
        // Use createElement, since createTextNode will not render HTML entities correctly
        var el = document.createElement("div");
        el.innerHTML = text;
        return jQuery.makeArray(el.childNodes);
    }

    // Generate a reusable function that will serve to render a template against data
    function buildTmplFn(markup) {
        return new Function("jQuery", "$item",
            // Use the variable __ to hold a string array while building the compiled template. (See https://github.com/jquery/jquery-tmpl/issues#issue/10).
            "var $=jQuery,call,__=[],$data=$item.data;" +

            // Introduce the data as local variables using with(){}
            "with($data){__.push('" +

            // Convert the template into pure JavaScript
            jQuery.trim(markup)
                .replace(/([\\'])/g, "\\$1")
                .replace(/[\r\t\n]/g, " ")
                .replace(/\$\{([^\}]*)\}/g, "{{= $1}}")
                .replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                    function (all, slash, type, fnargs, target, parens, args) {
                        var tag = jQuery.tmpl.tag[type], def, expr, exprAutoFnDetect;
                        if (!tag) {
                            throw "Unknown template tag: " + type;
                        }
                        def = tag._default || [];
                        if (parens && !/\w$/.test(target)) {
                            target += parens;
                            parens = "";
                        }
                        if (target) {
                            target = unescape(target);
                            args = args ? ("," + unescape(args) + ")") : (parens ? ")" : "");
                            // Support for target being things like a.toLowerCase();
                            // In that case don't call with template item as 'this' pointer. Just evaluate...
                            expr = parens ? (target.indexOf(".") > -1 ? target + unescape(parens) : ("(" + target + ").call($item" + args)) : target;
                            exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
                        } else {
                            exprAutoFnDetect = expr = def.$1 || "null";
                        }
                        fnargs = unescape(fnargs);
                        return "');" +
                            tag[slash ? "close" : "open"]
                                .split("$notnull_1").join(target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true")
                                .split("$1a").join(exprAutoFnDetect)
                                .split("$1").join(expr)
                                .split("$2").join(fnargs || def.$2 || "") +
                            "__.push('";
                    }) +
            "');}return __;"
        );
    }

    function updateWrapped(options, wrapped) {
        // Build the wrapped content.
        options._wrap = build(options, true,
            // Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
            jQuery.isArray(wrapped) ? wrapped : [htmlExpr.test(wrapped) ? wrapped : jQuery(wrapped).html()]
        ).join("");
    }

    function unescape(args) {
        return args ? args.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null;
    }

    function outerHtml(elem) {
        var div = document.createElement("div");
        div.appendChild(elem.cloneNode(true));
        return div.innerHTML;
    }

    // Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
    function storeTmplItems(content) {
        var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
        for (i = 0, l = content.length; i < l; i++) {
            if ((elem = content[i]).nodeType !== 1) {
                continue;
            }
            elems = elem.getElementsByTagName("*");
            for (m = elems.length - 1; m >= 0; m--) {
                processItemKey(elems[m]);
            }
            processItemKey(elem);
        }
        function processItemKey(el) {
            var pntKey, pntNode = el, pntItem, tmplItem, key;
            // Ensure that each rendered template inserted into the DOM has its own template item,
            if ((key = el.getAttribute(tmplItmAtt))) {
                while (pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute(tmplItmAtt))) {
                }
                if (pntKey !== key) {
                    // The next ancestor with a _tmplitem expando is on a different key than this one.
                    // So this is a top-level element within this template item
                    // Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
                    pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute(tmplItmAtt) || 0)) : 0;
                    if (!(tmplItem = newTmplItems[key])) {
                        // The item is for wrapped content, and was copied from the temporary parent wrappedItem.
                        tmplItem = wrappedItems[key];
                        tmplItem = newTmplItem(tmplItem, newTmplItems[pntNode] || wrappedItems[pntNode]);
                        tmplItem.key = ++itemKey;
                        newTmplItems[itemKey] = tmplItem;
                    }
                    if (cloneIndex) {
                        cloneTmplItem(key);
                    }
                }
                el.removeAttribute(tmplItmAtt);
            } else if (cloneIndex && (tmplItem = jQuery.data(el, "tmplItem"))) {
                // This was a rendered element, cloned during append or appendTo etc.
                // TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
                cloneTmplItem(tmplItem.key);
                newTmplItems[tmplItem.key] = tmplItem;
                pntNode = jQuery.data(el.parentNode, "tmplItem");
                pntNode = pntNode ? pntNode.key : 0;
            }
            if (tmplItem) {
                pntItem = tmplItem;
                // Find the template item of the parent element.
                // (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
                while (pntItem && pntItem.key != pntNode) {
                    // Add this element as a top-level node for this rendered template item, as well as for any
                    // ancestor items between this item and the item of its parent element
                    pntItem.nodes.push(el);
                    pntItem = pntItem.parent;
                }
                // Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
                delete tmplItem._ctnt;
                delete tmplItem._wrap;
                // Store template item as jQuery data on the element
                jQuery.data(el, "tmplItem", tmplItem);
            }
            function cloneTmplItem(key) {
                key = key + keySuffix;
                tmplItem = newClonedItems[key] =
                    (newClonedItems[key] || newTmplItem(tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent));
            }
        }
    }

    //---- Helper functions for template item ----

    function tiCalls(content, tmpl, data, options) {
        if (!content) {
            return stack.pop();
        }
        stack.push({_: content, tmpl: tmpl, item: this, data: data, options: options});
    }

    function tiNest(tmpl, data, options) {
        // nested template, using {{tmpl}} tag
        return jQuery.tmpl(jQuery.template(tmpl), data, options, this);
    }

    function tiWrap(call, wrapped) {
        // nested template, using {{wrap}} tag
        var options = call.options || {};
        options.wrapped = wrapped;
        // Apply the template, which may incorporate wrapped content,
        return jQuery.tmpl(jQuery.template(call.tmpl), call.data, options, call.item);
    }

    function tiHtml(filter, textOnly) {
        var wrapped = this._wrap;
        return jQuery.map(
            jQuery(jQuery.isArray(wrapped) ? wrapped.join("") : wrapped).filter(filter || "*"),
            function (e) {
                return textOnly ?
                e.innerText || e.textContent :
                e.outerHTML || outerHtml(e);
            });
    }

    function tiUpdate() {
        var coll = this.nodes;
        jQuery.tmpl(null, null, null, this).insertBefore(coll[0]);
        jQuery(coll).remove();
    }
})(jQuery);
;
/*!
 // Copyright Joyent, Inc. and other Node contributors.
 //
 // Permission is hereby granted, free of charge, to any person obtaining a
 // copy of this software and associated documentation files (the
 // "Software"), to deal in the Software without restriction, including
 // without limitation the rights to use, copy, modify, merge, publish,
 // distribute, sublicense, and/or sell copies of the Software, and to permit
 // persons to whom the Software is furnished to do so, subject to the
 // following conditions:
 //
 // The above copyright notice and this permission notice shall be included
 // in all copies or substantial portions of the Software.
 //
 // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 // USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/*!
 // Copyright Joyent, Inc. and other Node contributors.
 //
 // Permission is hereby granted, free of charge, to any person obtaining a
 // copy of this software and associated documentation files (the
 // "Software"), to deal in the Software without restriction, including
 // without limitation the rights to use, copy, modify, merge, publish,
 // distribute, sublicense, and/or sell copies of the Software, and to permit
 // persons to whom the Software is furnished to do so, subject to the
 // following conditions:
 //
 // The above copyright notice and this permission notice shall be included
 // in all copies or substantial portions of the Software.
 //
 // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 // USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * modified 10/06/2011 (david):
 * - make compatabile for browser
 * - added augment function
 * - added aliases publish, subscribe, unsubscribe  
 */
var EventEmitter = function () {
};

// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
EventEmitter.prototype.setMaxListeners = function (n) {
    if (!this._events)
        this._events = {};
    this._events.maxListeners = n;
};

EventEmitter.prototype.emit = function (type) {
    // If there is no 'error' event listener then throw.
    if (type === 'error') {
        if (!this._events
            || !this._events.error
            || (Array.isArray(this._events.error) && !this._events.error.length)) {
            if (arguments[1] instanceof Error) {
                throw arguments[1]; // Unhandled 'error' event
            } else {
                throw new Error("Uncaught, unspecified 'error' event.");
            }
            return false;
        }
    }

    if (!this._events)
        return false;
    var handler = this._events[type];
    if (!handler)
        return false;

    if (typeof handler == 'function') {
        switch (arguments.length) {
            // fast cases
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            // slower
            default:
                var args = Array.prototype.slice.call(arguments, 1);
                handler.apply(this, args);
        }
        return true;

    } else if (Array.isArray(handler)) {
        var args = Array.prototype.slice.call(arguments, 1);

        var listeners = handler.slice();
        for (var i = 0, l = listeners.length; i < l; i++) {
            listeners[i].apply(this, args);
        }
        return true;

    } else {
        return false;
    }
};

EventEmitter.prototype.publish = EventEmitter.prototype.emit;

// EventEmitter is defined in src/node_events.cc
// EventEmitter.prototype.emit() is also defined there.
EventEmitter.prototype.addListener = function (type, listener) {
    if ('function' !== typeof listener) {
        throw new Error('addListener only takes instances of Function');
    }

    if (!this._events)
        this._events = {};

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if (!this._events[type]) {
        // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener;
    } else if (Array.isArray(this._events[type])) {

        // If we've already got an array, just append.
        this._events[type].push(listener);

        // Check for listener leak
        if (!this._events[type].warned) {
            var m;
            if (this._events.maxListeners !== undefined) {
                m = this._events.maxListeners;
            } else {
                m = 10;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error('(node) warning: possible EventEmitter memory '
                    + 'leak detected. %d listeners added. '
                    + 'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
                console.trace();
            }
        }
    } else {
        // Adding the second element, need to change to array.
        this._events[type] = [this._events[type], listener];
    }

    return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.subscribe = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
    if ('function' !== typeof listener) {
        throw new Error('.once only takes instances of Function');
    }

    var self = this;

    function g() {
        self.removeListener(type, g);
        listener.apply(this, arguments);
    }
    ;

    g.listener = listener;
    self.on(type, g);

    return this;
};

EventEmitter.prototype.removeListener = function (type, listener) {
    if ('function' !== typeof listener) {
        throw new Error('removeListener only takes instances of Function');
    }

    // does not use listeners(), so no side effect of creating _events[type]
    if (!this._events || !this._events[type])
        return this;

    var list = this._events[type];

    if (Array.isArray(list)) {
        var position = -1;
        for (var i = 0, length = list.length; i < length; i++) {
            if (list[i] === listener
                || (list[i].listener && list[i].listener === listener)) {
                position = i;
                break;
            }
        }

        if (position < 0)
            return this;
        list.splice(position, 1);
        if (list.length == 0)
            delete this._events[type];
    } else if (list === listener
        || (list.listener && list.listener === listener)) {
        delete this._events[type];
    }

    return this;
};

EventEmitter.prototype.unsubscribe = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function (type) {
    if (arguments.length === 0) {
        this._events = {};
        return this;
    }

    // does not use listeners(), so no side effect of creating _events[type]
    if (type && this._events && this._events[type])
        this._events[type] = null;
    return this;
};

EventEmitter.prototype.listeners = function (type) {
    if (!this._events)
        this._events = {};
    if (!this._events[type])
        this._events[type] = [];
    if (!Array.isArray(this._events[type])) {
        this._events[type] = [this._events[type]];
    }
    return this._events[type];
};

/**
 * Augment an object with the EventEmitter mixin
 *
 * @param {object} obj The object to be augmented
 */
EventEmitter.mixin = function (obj) {
    for (var method in EventEmitter.prototype) {
        if (!obj.prototype[method]) {
            obj.prototype[method] = EventEmitter.prototype[method];
        }
    }
};;
/*!
 *  mindmaps - a HTML5 powered mind mapping application
 *  Copyright (C) 2011  David Richard
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*!
 *  mindmaps - a HTML5 powered mind mapping application
 *  Copyright (C) 2011  David Richard
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Make sure this is the first file to be referenced in index.hml.
 */

// Use ECMA5 strict mode. see:
// http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
"use strict";

/**
 * @namespace Application wide namespace for mindmaps.
 */
var mindmaps = mindmaps || {};
mindmaps.VERSION = "0.7.2";


// experimental app cache invalidator. from:
// http://www.html5rocks.com/en/tutorials/appcache/beginner/#toc-updating-cache/
// Check if a new cache is available on page load.
window.addEventListener('load', function (e) {
    window.applicationCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            window.applicationCache.swapCache();
            window.onbeforeunload = null;
            if (confirm('A new version of the app is available. Load it?')) {
                window.location.reload();
            }
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);

}, false)

/**
 * Start up. This function is executed when the DOM is loaded.
 */
$(function () {
    removeEventLayerXY();

    // take car of old browsers
    createECMA5Shims();
    createHTML5Shims();

    setupConsole();
    trackErrors();

    if (!mindmaps.DEBUG) {
        addUnloadHook();
    }

    // create a new app controller and go
    var appController = new mindmaps.ApplicationController();
    appController.go();
});

/**
 * Remove layerX and layerY from the jQuery event object, it causes heaps of deprecated
 * warnings in WebKit browsers.
 * See: http://stackoverflow.com/questions/7825448/webkit-issues-with-event-layerx-and-event-layery
 *
 * Can be removed when upgrading to jQuery 1.7+.
 */
function removeEventLayerXY() {
    // remove layerX and layerY
    var all = $.event.props,
        len = all.length,
        res = [];

    while (len--) {
        var el = all[len];
        if (el != 'layerX' && el != 'layerY') res.push(el);
    }
    $.event.props = res;
}

/**
 * Adds a confirmation dialog when the user navigates away from the app.
 */
function addUnloadHook() {
    window.onbeforeunload = function (e) {
        var msg = "Are you sure? Any unsaved progress will be lost."
        e = e || window.event;

        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = msg;
        }

        // For Safari
        return msg;
    };
}


function trackErrors() {
    window.onerror = function (msg, url, line) {
        if (!window._gaq) {
            return;
        }

        // Track JS errors in GA.
        _gaq.push(['_trackEvent', 'Error Log', msg, url + '_' + line]);

        return false; // false prevents default error handling.
    };
}

/**
 * Initialize the console object.
 */
function setupConsole() {
    var noOp = function () {
    };

    // provide console object and dummy functions if not built-in
    var console = window.console || {};
    ['log', 'info', 'debug', 'warn', 'error'].forEach(function (prop) {
        console[prop] = console[prop] || noOp;
    });

    // turn all console.xx calls into no-ops when in production mode except
    // for errors, do an alert.
    if (!mindmaps.DEBUG) {
        console.debug = noOp;
        console.info = noOp;
        console.log = noOp;
        console.warn = noOp;
        console.error = function (s) {
            window.alert("Error: " + s);
        };
    }

    window.console = console;
}

// warum sind manche leute nur so drauf...
$(function () {
    $("#bottombar table").remove();
    $("input[name='hosted_button_id']").val("123");
});

/**
 * Creates ECMA5 shims if the browser does not implement them.
 */
function createECMA5Shims() {
    // from: https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js

    // ES-5 15.3.4.5
    // http://www.ecma-international.org/publications/files/drafts/tc39-2009-025.pdf
    if (!Function.prototype.bind) {
        var slice = Array.prototype.slice;
        Function.prototype.bind = function bind(that) { // .length is 1
            var target = this;
            if (typeof target.apply !== "function"
                || typeof target.call !== "function")
                return new TypeError();
            var args = slice.call(arguments);

            function bound() {

                if (this instanceof bound) {

                    var self = Object.create(target.prototype);
                    target.apply(self, args.concat(slice.call(arguments)));
                    return self;
                } else {
                    return target.call.apply(target, args.concat(slice
                        .call(arguments)));
                }

            }

            bound.length = (typeof target === "function" ? Math.max(
                target.length - args.length, 0) : 0);
            return bound;
        };
    }

    // ES5 15.4.3.2
    if (!Array.isArray) {
        Array.isArray = function isArray(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
        };
    }

    // ES5 15.4.4.18
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function forEach(block, thisObject) {
            var len = +this.length;
            for (var i = 0; i < len; i++) {
                if (i in this) {
                    block.call(thisObject, this[i], i, this);
                }
            }
        };
    }

    // ES5 15.4.4.19
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
    if (!Array.prototype.map) {
        Array.prototype.map = function map(fun /* , thisp */) {
            var len = +this.length;
            if (typeof fun !== "function")
                throw new TypeError();

            var res = new Array(len);
            var thisp = arguments[1];
            for (var i = 0; i < len; i++) {
                if (i in this)
                    res[i] = fun.call(thisp, this[i], i, this);
            }

            return res;
        };
    }

    // ES5 15.4.4.20
    if (!Array.prototype.filter) {
        Array.prototype.filter = function filter(block /* , thisp */) {
            var values = [];
            var thisp = arguments[1];
            for (var i = 0; i < this.length; i++)
                if (block.call(thisp, this[i]))
                    values.push(this[i]);
            return values;
        };
    }

    // ES5 15.4.4.16
    if (!Array.prototype.every) {
        Array.prototype.every = function every(block /* , thisp */) {
            var thisp = arguments[1];
            for (var i = 0; i < this.length; i++)
                if (!block.call(thisp, this[i]))
                    return false;
            return true;
        };
    }

    // ES5 15.4.4.17
    if (!Array.prototype.some) {
        Array.prototype.some = function some(block /* , thisp */) {
            var thisp = arguments[1];
            for (var i = 0; i < this.length; i++)
                if (block.call(thisp, this[i]))
                    return true;
            return false;
        };
    }

    // ES5 15.4.4.21
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function reduce(fun /* , initial */) {
            var len = +this.length;
            if (typeof fun !== "function")
                throw new TypeError();

            // no value to return if no initial value and an empty array
            if (len === 0 && arguments.length === 1)
                throw new TypeError();

            var i = 0;
            if (arguments.length >= 2) {
                var rv = arguments[1];
            } else {
                do {
                    if (i in this) {
                        rv = this[i++];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (++i >= len)
                        throw new TypeError();
                } while (true);
            }

            for (; i < len; i++) {
                if (i in this)
                    rv = fun.call(null, rv, this[i], i, this);
            }

            return rv;
        };
    }

    // ES5 15.4.4.22
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
    if (!Array.prototype.reduceRight) {
        Array.prototype.reduceRight = function reduceRight(fun /* , initial */) {
            var len = +this.length;
            if (typeof fun !== "function")
                throw new TypeError();

            // no value to return if no initial value, empty array
            if (len === 0 && arguments.length === 1)
                throw new TypeError();

            var rv, i = len - 1;
            if (arguments.length >= 2) {
                rv = arguments[1];
            } else {
                do {
                    if (i in this) {
                        rv = this[i--];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (--i < 0)
                        throw new TypeError();
                } while (true);
            }

            for (; i >= 0; i--) {
                if (i in this)
                    rv = fun.call(null, rv, this[i], i, this);
            }

            return rv;
        };
    }

    // ES5 15.4.4.14
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function indexOf(value /* , fromIndex */) {
            var length = this.length;
            if (!length)
                return -1;
            var i = arguments[1] || 0;
            if (i >= length)
                return -1;
            if (i < 0)
                i += length;
            for (; i < length; i++) {
                if (!(i in this))
                    continue;
                if (value === this[i])
                    return i;
            }
            return -1;
        };
    }

    // ES5 15.4.4.15
    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function lastIndexOf(value) {
            var length = this.length;
            if (!length)
                return -1;
            var i = arguments[1] || length;
            if (i < 0)
                i += length;
            i = Math.min(i, length - 1);
            for (; i >= 0; i--) {
                if (!(i in this))
                    continue;
                if (value === this[i])
                    return i;
            }
            return -1;
        };
    }

    // ES5 15.9.4.4
    if (!Date.now) {
        Date.now = function now() {
            return new Date().getTime();
        };
    }
}

/**
 * Create shims for HTML5 functionality if not supported by browser.
 */
function createHTML5Shims() {
    // localstorage dummy (does nothing)
    if (typeof window.localStorage == 'undefined') {
        window.localStorage = {
            getItem: function () {
                return null;
            },
            setItem: function () {
            },
            clear: function () {
            },
            removeItem: function () {
            },
            length: 0,
            key: function () {
                return null;
            }
        };
    }
}
;
/**
 * Creates a new command. Base class for all commands
 *
 * @constructor
 * @borrows EventEmitter
 */
mindmaps.Command = function () {
    this.id = "BASE_COMMAND";
    this.shortcut = null;
    /**
     * The handler function.
     *
     * @private
     * @function
     */
    this.handler = null;
    this.label = null;
    this.description = null;

    /**
     * @private
     */
    this.enabled = false;
};

/**
 * Events that can be emitted by a command object.
 * @namespace
 */
mindmaps.Command.Event = {
    HANDLER_REGISTERED: "HandlerRegisteredCommandEvent",
    HANDLER_REMOVED: "HandlerRemovedCommandEvent",
    ENABLED_CHANGED: "EnabledChangedCommandEvent"
};

mindmaps.Command.prototype = {
    /**
     * Executes the command. Tries to call the handler function.
     */
    execute: function () {
        if (this.handler) {
            this.handler();
            if (mindmaps.DEBUG) {
                console.log("handler called for", this.id);
            }
        } else {
            if (mindmaps.DEBUG) {
                console.log("no handler found for", this.id);
            }
        }
    },

    /**
     * Registers a new handler.
     *
     * @param {Function} handler
     */
    setHandler: function (handler) {
        this.removeHandler();
        this.handler = handler;
        this.publish(mindmaps.Command.Event.HANDLER_REGISTERED);
    },

    /**
     * Removes the current handler.
     */
    removeHandler: function () {
        this.handler = null;
        this.publish(mindmaps.Command.Event.HANDLER_REMOVED);
    },

    /**
     * Sets the enabled state of the command.
     *
     * @param {Boolean} enabled
     */
    setEnabled: function (enabled) {
        this.enabled = enabled;
        this.publish(mindmaps.Command.Event.ENABLED_CHANGED, enabled);
    }
};
/**
 * Mixin EventEmitter into command objects.
 */
EventEmitter.mixin(mindmaps.Command);

/**
 * Node commands
 */

/**
 * Creates a new CreateNodeCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.CreateNodeCommand = function () {
    this.id = "CREATE_NODE_COMMAND";
    this.shortcut = "tab";
    this.label = "Add";
    this.icon = "ui-icon-plusthick";
    this.description = "Creates a new node";
};
mindmaps.CreateNodeCommand.prototype = new mindmaps.Command();

/**
 * Creates a new CreateSiblingNodeCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.CreateSiblingNodeCommand = function () {
    this.id = "CREATE_SIBLING_NODE_COMMAND";
    this.shortcut = "shift+tab";
    this.label = "Add";
    this.icon = "ui-icon-plusthick";
    this.description = "Creates a new sibling node";
};
mindmaps.CreateSiblingNodeCommand.prototype = new mindmaps.Command();

/**
 * Creates a new DeleteNodeCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.DeleteNodeCommand = function () {
    this.id = "DELETE_NODE_COMMAND";
    this.shortcut = ["del", "backspace"];
    this.label = "Delete";
    this.icon = "ui-icon-minusthick";
    this.description = "Deletes a new node";
};
mindmaps.DeleteNodeCommand.prototype = new mindmaps.Command();

/**
 * Creates a new EditNodeCaptionCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.EditNodeCaptionCommand = function () {
    this.id = "EDIT_NODE_CAPTION_COMMAND";
    this.shortcut = ["F2", "return"];
    this.label = "Edit node caption";
    this.description = "Edits the node text";
};
mindmaps.EditNodeCaptionCommand.prototype = new mindmaps.Command();

/**
 * Creates a new ToggleNodeFoldedCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.ToggleNodeFoldedCommand = function () {
    this.id = "TOGGLE_NODE_FOLDED_COMMAND";
    this.shortcut = "space";
    this.description = "Show or hide the node's children";
};
mindmaps.ToggleNodeFoldedCommand.prototype = new mindmaps.Command();

/**
 * Undo commands
 */

/**
 * Creates a new UndoCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.UndoCommand = function () {
    this.id = "UNDO_COMMAND";
    this.shortcut = ["ctrl+z", "meta+z"];
    this.label = "Undo";
    this.icon = "ui-icon-arrowreturnthick-1-w";
    this.description = "Undo";
};
mindmaps.UndoCommand.prototype = new mindmaps.Command();

/**
 * Creates a new RedoCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.RedoCommand = function () {
    this.id = "REDO_COMMAND";
    this.shortcut = ["ctrl+y", "meta+shift+z"];
    this.label = "Redo";
    this.icon = "ui-icon-arrowreturnthick-1-e";
    this.description = "Redo";
};
mindmaps.RedoCommand.prototype = new mindmaps.Command();

/**
 * Clipboard commands
 */

/**
 * Creates a new CopyNodeCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.CopyNodeCommand = function () {
    this.id = "COPY_COMMAND";
    this.shortcut = ["ctrl+c", "meta+c"];
    this.label = "Copy";
    this.icon = "ui-icon-copy";
    this.description = "Copy a branch";
};
mindmaps.CopyNodeCommand.prototype = new mindmaps.Command();

/**
 * Creates a new CutNodeCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.CutNodeCommand = function () {
    this.id = "CUT_COMMAND";
    this.shortcut = ["ctrl+x", "meta+x"];
    this.label = "Cut";
    this.icon = "ui-icon-scissors";
    this.description = "Cut a branch";
};
mindmaps.CutNodeCommand.prototype = new mindmaps.Command();

/**
 * Creates a new PasteNodeCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.PasteNodeCommand = function () {
    this.id = "PASTE_COMMAND";
    this.shortcut = ["ctrl+v", "meta+v"];
    this.label = "Paste";
    this.icon = "ui-icon-clipboard";
    this.description = "Paste a branch";
};
mindmaps.PasteNodeCommand.prototype = new mindmaps.Command();

/**
 * Document commands
 */

/**
 * Creates a new NewDocumentCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.NewDocumentCommand = function () {
    this.id = "NEW_DOCUMENT_COMMAND";
    this.label = "New";
    this.icon = "ui-icon-document-b";
    this.description = "Start working on a new mind map";
};
mindmaps.NewDocumentCommand.prototype = new mindmaps.Command();

/**
 * Creates a new OpenDocumentCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.OpenDocumentCommand = function () {
    this.id = "OPEN_DOCUMENT_COMMAND";
    this.label = "Open...";
    this.shortcut = ["ctrl+o", "meta+o"];
    this.icon = "ui-icon-folder-open";
    this.description = "Open an existing mind map";
};
mindmaps.OpenDocumentCommand.prototype = new mindmaps.Command();

/**
 * Creates a new SaveDocumentCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.SaveDocumentCommand = function () {
    this.id = "SAVE_DOCUMENT_COMMAND";
    this.label = "Save...";
    this.shortcut = ["ctrl+s", "meta+s"];
    this.icon = "ui-icon-disk";
    this.description = "Save the mind map";
};
mindmaps.SaveDocumentCommand.prototype = new mindmaps.Command();

/**
 * Creates a new CloseDocumentCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.CloseDocumentCommand = function () {
    this.id = "CLOSE_DOCUMENT_COMMAND";
    this.label = "Close";
    this.icon = "ui-icon-close";
    this.description = "Close the mind map";
};
mindmaps.CloseDocumentCommand.prototype = new mindmaps.Command();

/**
 * Creates a new HelpCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.HelpCommand = function () {
    this.id = "HELP_COMMAND";
    this.enabled = true;
    this.icon = "ui-icon-help";
    this.label = "Help";
    this.shortcut = "F1";
    this.description = "Get help!";
};
mindmaps.HelpCommand.prototype = new mindmaps.Command();

/**
 * Creates a new PrintCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.PrintCommand = function () {
    this.id = "PRINT_COMMAND";
    this.icon = "ui-icon-print";
    this.label = "Print";
    this.shortcut = ["ctrl+p", "meta+p"];
    this.description = "Print the mind map";
};
mindmaps.PrintCommand.prototype = new mindmaps.Command();

/**
 * Creates a new ExportCommand.
 *
 * @constructor
 * @augments mindmaps.Command
 */
mindmaps.ExportCommand = function () {
    this.id = "EXPORT_COMMAND";
    this.icon = "ui-icon-image";
    this.label = "Export As Image...";
    this.description = "Export the mind map";
};
mindmaps.ExportCommand.prototype = new mindmaps.Command();
;
/**
 * Creates a new CommandRegistry.
 *
 * @constructor
 * @param {mindmaps.ShortcutController} [shortcutController]
 */
mindmaps.CommandRegistry = function (shortcutController) {
    this.commands = {};

    function registerShortcut(command) {
        if (command.shortcut && command.execute) {
            shortcutController.register(command.shortcut, command.execute
                .bind(command));
        }
    }

    function unregisterShortcut(command) {
        if (command.shortcut) {
            shortcutController.unregister(command.shortcut);
        }
    }

    /**
     * Returns a command object for the given command type.
     *
     * @param commandType
     * @returns {mindmaps.Command} a command object.
     */
    this.get = function (commandType) {
        var command = this.commands[commandType];
        if (!command) {
            command = new commandType;
            this.commands[commandType] = command;

            if (shortcutController) {
                registerShortcut(command);
            }
        }
        return command;
    };

    /**
     * Removes the command object for the given command type.
     *
     * @param commandType
     */
    this.remove = function (commandType) {
        // TODO remove by object
        var command = this.commands[commandType];
        if (!command) {
            return;
        }

        delete this.commands[commandType];

        if (shortcutController) {
            unregisterShortcut(command);
        }
    };
};
;
/**
 * @namespace
 */
mindmaps.action = {};

/**
 * Creates a new action.
 *
 * @constructor
 */
mindmaps.action.Action = function () {
};

mindmaps.action.Action.prototype = {
    /**
     * Make this action un-undoable.
     *
     * @returns {Action}
     */
    noUndo: function () {
        delete this.undo;
        delete this.redo;
        return this;
    },

    /**
     * Don't emit an event after execution.
     *
     * @returns {Action}
     */
    noEvent: function () {
        delete this.event;
        return this;
    },

    /**
     * Executes this action. Explicitly returning false will cancel this action
     * and not raise an event or undoable action.
     *
     */
    execute: function () {
    },

    cancel: function () {
        this.cancelled = true;
    }
};

/**
 * Creates a new MoveNodeAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {Point} offset
 */
mindmaps.action.MoveNodeAction = function (node, offset) {
    var oldOffset = node.offset;

    this.execute = function () {
        node.offset = offset;
    };

    this.event = [mindmaps.Event.NODE_MOVED, node];
    this.undo = function () {
        return new mindmaps.action.MoveNodeAction(node, oldOffset);
    };
};
mindmaps.action.MoveNodeAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new DeleteNodeAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {mindmaps.MindMap} mindmap
 */
mindmaps.action.DeleteNodeAction = function (node, mindmap) {
    var parent = node.getParent();

    this.execute = function () {
        if (node.isRoot()) {
            return false;
        }
        mindmap.removeNode(node);
    };

    this.event = [mindmaps.Event.NODE_DELETED, node, parent];
    this.undo = function () {
        return new mindmaps.action.CreateNodeAction(node, parent, mindmap);
    };
};
mindmaps.action.DeleteNodeAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new CreateAutoPositionedNodeAction.
 *
 * @constructor
 * @param {mindmaps.Node} parent
 * @param {mindmaps.MindMap} mindmap
 * @returns {CreateNodeAction}
 */
mindmaps.action.CreateAutoPositionedNodeAction = function (parent, mindmap) {
    if (parent.isRoot()) {
        var branchColor = mindmaps.Util.randomColor();

        // calculate position
        // magic formula
        var leftRight = Math.random() > 0.49 ? 1 : -1;
        var topBottom = Math.random() > 0.49 ? 1 : -1;
        var x = leftRight * (100 + Math.random() * 250);
        var y = topBottom * (Math.random() * 250);
    } else {
        var branchColor = parent.branchColor;

        // calculate position
        var leftRight = parent.offset.x > 0 ? 1 : -1;
        var x = leftRight * (150 + Math.random() * 10);

        // put into random height when child nodes are there
        if (parent.isLeaf()) {
            var max = 5, min = -5;
        } else {
            var max = 150, min = -150;
        }

        var y = Math.floor(Math.random() * (max - min + 1) + min);
    }
    var node = new mindmaps.Node();
    node.branchColor = branchColor;
    node.shouldEditCaption = true;
    node.offset = new mindmaps.Point(x, y);

    return new mindmaps.action.CreateNodeAction(node, parent, mindmap);
};

/**
 * Creates a new CreateNodeAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {mindmaps.Node} parent
 * @param {mindmaps.MindMap} mindmap
 */
mindmaps.action.CreateNodeAction = function (node, parent, mindmap) {
    this.execute = function () {
        mindmap.addNode(node);
        parent.addChild(node);
    };

    this.event = [mindmaps.Event.NODE_CREATED, node];
    this.undo = function () {
        return new mindmaps.action.DeleteNodeAction(node, mindmap);
    };
};
mindmaps.action.CreateNodeAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new ToggleNodeFoldAction.
 *
 *
 * @constructor
 * @param {mindmaps.Node} node
 * @returns {Action}
 */
mindmaps.action.ToggleNodeFoldAction = function (node) {
    if (node.foldChildren) {
        return new mindmaps.action.OpenNodeAction(node);
    } else {
        return new mindmaps.action.CloseNodeAction(node);
    }
};

/**
 * Creates a new OpenNodeAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 */
mindmaps.action.OpenNodeAction = function (node) {
    this.execute = function () {
        node.foldChildren = false;
    };

    this.event = [mindmaps.Event.NODE_OPENED, node];

};
mindmaps.action.OpenNodeAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new CloseNodeAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 */
mindmaps.action.CloseNodeAction = function (node) {
    this.execute = function () {
        node.foldChildren = true;
    };

    this.event = [mindmaps.Event.NODE_CLOSED, node];

};
mindmaps.action.CloseNodeAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new ChangeNodeCaptionAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {String} caption
 */
mindmaps.action.ChangeNodeCaptionAction = function (node, caption) {
    var oldCaption = node.getCaption();

    this.execute = function () {
        // dont update if nothing has changed
        if (oldCaption === caption) {
            return false;
        }
        node.setCaption(caption);
    };

    this.event = [mindmaps.Event.NODE_TEXT_CAPTION_CHANGED, node];
    this.undo = function () {
        return new mindmaps.action.ChangeNodeCaptionAction(node, oldCaption);
    };
};
mindmaps.action.ChangeNodeCaptionAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new ChageNodeFontSizeAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {Integer} step
 */
mindmaps.action.ChangeNodeFontSizeAction = function (node, step) {
    this.execute = function () {
        node.text.font.size += step;
    };

    this.event = [mindmaps.Event.NODE_FONT_CHANGED, node];
    this.undo = function () {
        return new mindmaps.action.ChangeNodeFontSizeAction(node, -step);
    };
};
mindmaps.action.ChangeNodeFontSizeAction.prototype = new mindmaps.action.Action();

/**
 * @constructor
 * @param {mindmaps.Node} node
 * @returns {ChangeNodeFontSizeAction}
 */
mindmaps.action.DecreaseNodeFontSizeAction = function (node) {
    return new mindmaps.action.ChangeNodeFontSizeAction(node, -4);
};

/**
 * @constructor
 * @param {mindmaps.Node} node
 * @returns {ChangeNodeFontSizeAction}
 */
mindmaps.action.IncreaseNodeFontSizeAction = function (node) {
    return new mindmaps.action.ChangeNodeFontSizeAction(node, 4);
};

/**
 * Creates a new SetFontWeightAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {Boolean} bold
 */
mindmaps.action.SetFontWeightAction = function (node, bold) {
    this.execute = function () {
        var weight = bold ? "bold" : "normal";
        node.text.font.weight = weight;
    };

    this.event = [mindmaps.Event.NODE_FONT_CHANGED, node];
    this.undo = function () {
        return new mindmaps.action.SetFontWeightAction(node, !bold);
    };
};
mindmaps.action.SetFontWeightAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new SetFontStyleAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {Boolean} italic
 */
mindmaps.action.SetFontStyleAction = function (node, italic) {
    this.execute = function () {
        var style = italic ? "italic" : "normal";
        node.text.font.style = style;
    };

    this.event = [mindmaps.Event.NODE_FONT_CHANGED, node];
    this.undo = function () {
        return new mindmaps.action.SetFontStyleAction(node, !italic);
    };
};
mindmaps.action.SetFontStyleAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new SetFontDecorationAction. Possible styles: "none", "underline",
 * "line-through".
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {String} style
 */
mindmaps.action.SetFontDecorationAction = function (node, style) {
    var oldDecoration = node.text.font.decoration;
    this.execute = function () {
        node.text.font.decoration = style;
    };

    this.event = [mindmaps.Event.NODE_FONT_CHANGED, node];
    this.undo = function () {
        return new mindmaps.action.SetFontDecorationAction(node, oldDecoration);
    };
};
mindmaps.action.SetFontDecorationAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new SetFontColorAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {String} fontColor color as hex
 */
mindmaps.action.SetFontColorAction = function (node, fontColor) {
    var oldColor = node.text.font.color;
    this.execute = function () {
        node.text.font.color = fontColor;
    };

    this.event = [mindmaps.Event.NODE_FONT_CHANGED, node];
    this.undo = function () {
        return new mindmaps.action.SetFontColorAction(node, oldColor);
    };
};
mindmaps.action.SetFontColorAction.prototype = new mindmaps.action.Action();

/**
 * Creates a new SetBranchColorAction.
 *
 * @constructor
 * @augments mindmaps.action.Action
 * @param {mindmaps.Node} node
 * @param {String} branchColor color as hex
 */
mindmaps.action.SetBranchColorAction = function (node, branchColor) {
    var oldColor = node.branchColor;
    this.execute = function () {
        if (branchColor === node.branchColor) {
            return false;
        }
        node.branchColor = branchColor;
    };

    this.event = [mindmaps.Event.NODE_BRANCH_COLOR_CHANGED, node];
    this.undo = function () {
        return new mindmaps.action.SetBranchColorAction(node, oldColor);
    };
};
mindmaps.action.SetBranchColorAction.prototype = new mindmaps.action.Action();

/**
 * A composite action is a group of actions.
 */
mindmaps.action.CompositeAction = function () {
    this.actions = [];
};

mindmaps.action.CompositeAction.prototype.addAction = function (action) {
    this.actions.push(action);
};

/**
 * Apply fn on each action.
 */
mindmaps.action.CompositeAction.prototype.forEachAction = function (fn) {
    this.actions.forEach(fn)
};


/**
 * Changes the branch color of all the node's children to branch
 * color of the node.
 */
mindmaps.action.SetChildrenBranchColorAction = function (node) {
    mindmaps.action.CompositeAction.call(this);
    var branchColor = node.branchColor;
    var self = this;

    node.forEachDescendant(function (desc) {
        self.addAction(new mindmaps.action.SetBranchColorAction(desc, branchColor));
    });
}
mindmaps.action.SetChildrenBranchColorAction.prototype = new mindmaps.action.CompositeAction();
;
/**
 * @namespace
 */
mindmaps.Util = mindmaps.Util || {};

/**
 * Tracks an event to google analytics.
 */
mindmaps.Util.trackEvent = function (category, action, label) {
    return;

    /*
     if (!window._gaq) {
     return;
     }

     if (label) {
     _gaq.push([ '_trackEvent', category, action, label]);
     } else {
     _gaq.push([ '_trackEvent', category, action]);
     }
     */
}

/**
 * Creates a UUID in compliance with RFC4122.
 *
 * @static
 * @returns {String} a unique id
 */
mindmaps.Util.createUUID = function () {
    // http://www.ietf.org/rfc/rfc4122.txt
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

/**
 * Returns an ID used by model objects.
 *
 * @returns {String} id
 */
mindmaps.Util.getId = function () {
    return mindmaps.Util.createUUID();
};

/**
 * Creates a random color.
 *
 * @returns {String} color in hex format
 */
mindmaps.Util.randomColor = function () {
    // http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript/5365036#5365036
    // return "#"+((1<<24)*Math.random()|0).toString(16);

    // http://paulirish.com/2009/random-hex-color-code-snippets/#comment-34808
    // return '#'+~~(Math.random()*(1<<24)).toString(16);

    // http://paulirish.com/2009/random-hex-color-code-snippets/#comment-34878
    return (function (h) {
        return '#000000'.substr(0, 7 - h.length) + h;
    })((~~(Math.random() * (1 << 24))).toString(16));
};


mindmaps.Util.getUrlParams = function () {
    // http://stackoverflow.com/questions/901115/get-query-string-values-in-javascript/2880929#2880929
    var urlParams = {};
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) {
            return decodeURIComponent(s.replace(a, " "));
        },
        q = window.location.search.substring(1);

    while (e = r.exec(q))
        urlParams[d(e[1])] = d(e[2]);

    return urlParams;
};

function timeit(func, caption) {
    var start = new Date().getTime();
    func();
    var stop = new Date().getTime();
    var diff = stop - start;
    console.log(caption || "", diff, "ms");
}

mindmaps.Util.distance = function (offsetX, offsetY) {
    return Math.sqrt(offsetX * offsetX + offsetY * offsetY);
};


/**
 * test Default documents
 */

function getBinaryMapWithDepth(depth) {
    var mm = new mindmaps.MindMap();
    var root = mm.root;

    function createTwoChildren(node, depth) {
        if (depth === 0) {
            return;
        }

        var left = mm.createNode();
        left.text.caption = "Node " + left.id;
        node.addChild(left);
        createTwoChildren(left, depth - 1);

        var right = mm.createNode();
        right.text.caption = "Node " + right.id;
        node.addChild(right);
        createTwoChildren(right, depth - 1);
    }

    // depth 10: about 400kb, 800kb in chrome
    // depth 12: about 1600kb
    // depth 16: 25mb
    var depth = depth || 10;
    createTwoChildren(root, depth);

    // generate positions for all nodes.
    // tree grows balanced from left to right
    root.offset = new mindmaps.Point(400, 400);
    // var offset = Math.pow(2, depth-1) * 10;
    var offset = 80;
    var c = root.children.values();
    setOffset(c[0], 0, -offset);
    setOffset(c[1], 0, offset);
    function setOffset(node, depth, offsetY) {
        node.offset = new mindmaps.Point((depth + 1) * 50, offsetY);

        if (node.isLeaf()) {
            return;
        }

        var c = node.children.values();
        var left = c[0];
        setOffset(left, depth + 1, offsetY - offsetY / 2);

        var right = c[1];
        setOffset(right, depth + 1, offsetY + offsetY / 2);
    }

    // color nodes
    c[0].branchColor = mindmaps.Util.randomColor();
    c[0].forEachDescendant(function (node) {
        node.branchColor = mindmaps.Util.randomColor();
    });
    c[1].branchColor = mindmaps.Util.randomColor();
    c[1].forEachDescendant(function (node) {
        node.branchColor = mindmaps.Util.randomColor();
    });

    return mm;
}

/**
 * <pre>
 *        r
 *    /     |        \
 *   0    1     2
 *       / \     / | \  \
 *        10  11  20 21 22 23
 *        |
 *        100
 *        |
 *        1000
 * </pre>
 */
function getDefaultTestMap() {
    var mm = new mindmaps.MindMap();
    var root = mm.root;

    var n0 = mm.createNode();
    var n1 = mm.createNode();
    var n2 = mm.createNode();
    root.addChild(n0);
    root.addChild(n1);
    root.addChild(n2);

    var n10 = mm.createNode();
    var n11 = mm.createNode();
    n1.addChild(n10);
    n1.addChild(n11);

    var n20 = mm.createNode();
    var n21 = mm.createNode();
    var n22 = mm.createNode();
    var n23 = mm.createNode();
    n2.addChild(n20);
    n2.addChild(n21);
    n2.addChild(n22);
    n2.addChild(n23);

    var n100 = mm.createNode();
    n10.addChild(n100);

    var n1000 = mm.createNode();
    n100.addChild(n1000);

    return mm;
}

function getDefaultTestDocument() {
    var doc = new mindmaps.Document();
    doc.title = "test document";
    doc.mindmap = getDefaultTestMap();

    return doc;
}

function getSimpleMap() {
    var mm = new mindmaps.MindMap();
    var root = mm.root;

    var n0 = mm.createNode();
    var n1 = mm.createNode();
    root.addChild(n0);
    root.addChild(n1);

    return mm;
}
;
/**
 * Point class.
 *
 * @constructor
 * @param {Number} [x=0]
 * @param {Number} [y=0]
 */
mindmaps.Point = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

/**
 * Returns a new point object from generic obj.
 *
 * @static
 * @param obj
 * @returns {mindmaps.Point}
 */
mindmaps.Point.fromObject = function (obj) {
    return new mindmaps.Point(obj.x, obj.y);
};

/**
 * Clones a the point.
 *
 * @returns {mindmaps.Point}
 */
mindmaps.Point.prototype.clone = function () {
    return new mindmaps.Point(this.x, this.y);
};

/**
 * Adds a point to the point.
 * @param {mindmaps.Point} point
 */
mindmaps.Point.prototype.add = function (point) {
    this.x += point.x;
    this.y += point.y;
};

/**
 * Returns a String representation.
 * @returns {String}
 */
mindmaps.Point.prototype.toString = function () {
    return "{x: " + this.x + " y: " + this.y + "}";
};
;
/**
 * Creates a new Document.
 *
 * @constructor
 */
mindmaps.Document = function () {
    this.id = mindmaps.Util.createUUID();
    this.title = "New Document";
    this.mindmap = new mindmaps.MindMap();
    this.dates = {
        created: new Date(),
        modified: null
    };

    this.dimensions = new mindmaps.Point(4000, 2000);
    this.autosave = true;
};

/**
 * Creates a new document object from a JSON string.
 *
 * @static
 * @param {String} json
 * @returns {mindmaps.Document}
 */
mindmaps.Document.fromJSON = function (json) {
    return mindmaps.Document.fromObject(JSON.parse(json))
};

/**
 * Creates a new document object from a generic object.
 *
 * @static
 * @param {Object} json
 * @returns {mindmaps.Document}
 */
mindmaps.Document.fromObject = function (obj) {
    var doc = new mindmaps.Document();
    doc.id = obj.id;
    doc.title = obj.title;
    doc.mindmap = mindmaps.MindMap.fromObject(obj.mindmap);
    doc.dates = {
        created: new Date(obj.dates.created),
        modified: obj.dates.modified ? new Date(obj.dates.modified) : null
    };

    doc.dimensions = mindmaps.Point.fromObject(obj.dimensions);
    doc.autosave = obj.autosave;

    return doc;
};

/**
 * Called by JSON.stringify().
 *
 * @private
 */
mindmaps.Document.prototype.toJSON = function () {
    // store dates in milliseconds since epoch
    var dates = {
        created: this.dates.created.getTime()
    };

    if (this.dates.modified) {
        dates.modified = this.dates.modified.getTime();
    }

    return {
        id: this.id,
        title: this.title,
        mindmap: this.mindmap,
        dates: dates,
        dimensions: this.dimensions,
        autosave: this.autosave
    };
};

/**
 * Returns a JSON representation of the object.
 *
 * @returns {String} the json.
 */
mindmaps.Document.prototype.serialize = function () {
    return JSON.stringify(this);
};

/**
 * Updates modified date and title for saving.
 */
mindmaps.Document.prototype.prepareSave = function () {
    this.dates.modified = new Date();
    this.title = this.mindmap.getRoot().getCaption();
    return this;
};

/**
 * Sort function for Array.sort().
 *
 * @static
 * @param {mindmaps.Document} doc1
 * @param {mindmaps.Document} doc2
 */
mindmaps.Document.sortByModifiedDateDescending = function (doc1, doc2) {
    if (doc1.dates.modified > doc2.dates.modified) {
        return -1;
    }
    if (doc1.dates.modified < doc2.dates.modified) {
        return 1;
    }
    return 0;
};

/**
 * Tells whether this document considerd as "new", that is has not been saved
 * yet.
 *
 * @returns {Boolean}
 */
mindmaps.Document.prototype.isNew = function () {
    return this.dates.modified === null;
};

/**
 * Returns the created date.
 *
 * @returns {Date}
 */
mindmaps.Document.prototype.getCreatedDate = function () {
    return this.dates.created;
};

/**
 * Gets the width of the document.
 *
 * @returns {Number}
 */
mindmaps.Document.prototype.getWidth = function () {
    return this.dimensions.x;
};

/**
 * Gets the height of the document.
 *
 * @returns {Number}
 */
mindmaps.Document.prototype.getHeight = function () {
    return this.dimensions.y;
};


mindmaps.Document.prototype.isAutoSave = function () {
    return this.autosave;
}


/**
 * Sets autosave setting.
 *
 * @param {Boolean}
 */
mindmaps.Document.prototype.setAutoSave = function (autosave) {
    this.autosave = autosave;
}
;
/**
 *
 * Creates a new mind map.
 *
 * @constructor
 * @param {mindmaps.Node} [root]
 */
mindmaps.MindMap = function (root) {
    /**
     * nodes is only used for quick lookup of a node by id. Each node must be
     * registered in this map via createNode() or addNode(node).
     */
    this.nodes = new mindmaps.NodeMap();

    if (root) {
        this.root = root;
    } else {
        this.root = new mindmaps.Node();
        this.root.text.font.size = 20;
        this.root.text.font.weight = "bold";
        this.root.text.caption = "Central Idea";
    }

    this.addNode(this.root);
};

/**
 * Creates a new mind map object from JSON String.
 *
 * @static
 * @param {String} json
 * @returns {mindmaps.MindMap}
 */
mindmaps.MindMap.fromJSON = function (json) {
    return mindmaps.MindMap.fromObject(JSON.parse(json));
};

/**
 * Creates a new mind map object from generic object.
 *
 * @static
 * @param {Object} obj
 * @returns {mindmaps.MindMap}
 */
mindmaps.MindMap.fromObject = function (obj) {
    var root = mindmaps.Node.fromObject(obj.root);
    var mm = new mindmaps.MindMap(root);

    // register all nodes in the map
    root.forEachDescendant(function (descendant) {
        mm.addNode(descendant);
    });

    return mm;
};

/**
 * Called by JSON.stringify().
 *
 * @private
 *
 */
mindmaps.MindMap.prototype.toJSON = function () {
    var obj = {
        root: this.root
    };
    return obj;
};

/**
 * Creates a JSON representation of the mind map.
 *
 * @returns {String}
 */
mindmaps.MindMap.prototype.serialize = function () {
    return JSON.stringify(this);
};

/**
 * Create a node and add to nodes map.
 *
 * @returns {mindmaps.Node}
 */
mindmaps.MindMap.prototype.createNode = function () {
    var node = new mindmaps.Node();
    this.addNode(node);
    return node;
};

/**
 * Adds an existing node and all its children to the nodes map.
 *
 * @param {mindmaps.Node} node
 */
mindmaps.MindMap.prototype.addNode = function (node) {
    this.nodes.add(node);

    // add all children
    var self = this;
    node.forEachDescendant(function (descendant) {
        self.nodes.add(descendant);
    });
};

/**
 * Removes a node from the mind map. Severs tie to the parent.
 *
 * @param {mindmaps.Node} node
 */
mindmaps.MindMap.prototype.removeNode = function (node) {
    // detach node from parent
    var parent = node.parent;
    parent.removeChild(node);

    // clear nodes table: remove node and its children
    var self = this;
    node.forEachDescendant(function (descendant) {
        self.nodes.remove(descendant);
    });

    this.nodes.remove(node);
};

/**
 * Get the root of the mind map.
 *
 * @returns {mindmaps.Node}
 */
mindmaps.MindMap.prototype.getRoot = function () {
    return this.root;
};
;
/**
 * Creates a new node.
 *
 * @constructor
 */
mindmaps.Node = function () {
    this.id = mindmaps.Util.getId();
    this.parent = null;
    this.children = new mindmaps.NodeMap();
    this.text = {
        caption: "New Idea",
        font: {
            style: "normal",
            weight: "normal",
            decoration: "none",
            /** unit: pixel */
            size: 15,
            color: "#000000"
        }
    };
    this.offset = new mindmaps.Point();
    this.foldChildren = false;
    this.branchColor = "#000000";
};

/**
 * Creates a deep copy of this node, where all nodes have a new IDs.
 *
 * @returns {mindmaps.Node} the cloned node
 */
mindmaps.Node.prototype.clone = function () {
    var clone = new mindmaps.Node();
    var text = {
        caption: this.text.caption
    };
    var font = {
        weight: this.text.font.weight,
        style: this.text.font.style,
        decoration: this.text.font.decoration,
        size: this.text.font.size,
        color: this.text.font.color
    };
    text.font = font;
    clone.text = text;
    clone.offset = this.offset.clone();
    clone.foldChildren = this.foldChildren;
    clone.branchColor = this.branchColor;

    this.forEachChild(function (child) {
        var childClone = child.clone();
        clone.addChild(childClone);
    });

    return clone;
};

/**
 * Creates a new node object from JSON String.
 *
 * @param {String} json
 * @returns {mindmaps.Node}
 */
mindmaps.Node.fromJSON = function (json) {
    return mindmaps.Node.fromObject(JSON.parse(json));
};

/**
 * Creates a new node object from a generic object.
 *
 * @param {Object} obj
 * @returns {mindmaps.Node}
 */
mindmaps.Node.fromObject = function (obj) {
    var node = new mindmaps.Node();
    node.id = obj.id;
    node.text = obj.text;
    node.offset = mindmaps.Point.fromObject(obj.offset);
    node.foldChildren = obj.foldChildren;
    node.branchColor = obj.branchColor;

    // extract all children from array of objects
    obj.children.forEach(function (child) {
        var childNode = mindmaps.Node.fromObject(child);
        node.addChild(childNode);
    });

    return node;
};

/**
 * Returns a presentation of this node and its children ready for serialization.
 * Called by JSON.stringify().
 *
 * @private
 */
mindmaps.Node.prototype.toJSON = function () {
    // TODO see if we cant improve this
    // http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
    // copy all children into array
    var self = this;
    var children = (function () {
        var result = [];
        self.forEachChild(function (child) {
            result.push(child.toJSON());
        });
        return result;
    })();

    var obj = {
        id: this.id,
        // store parent as id since we have to avoid circular references
        parentId: this.parent ? this.parent.id : null,
        text: this.text,
        offset: this.offset,
        foldChildren: this.foldChildren,
        branchColor: this.branchColor,
        children: children
    };

    return obj;
};

/**
 * Creates a JSON representation of the node.
 *
 * @returns {String}
 */
mindmaps.Node.prototype.serialize = function () {
    return JSON.stringify(this);
};

/**
 * Adds a child to the node.
 *
 * @param {mindmaps.Node} node
 */
mindmaps.Node.prototype.addChild = function (node) {
    node.parent = this;
    this.children.add(node);
};

/**
 * Removes a direct child.
 *
 * @param {mindmaps.Node} node
 */
mindmaps.Node.prototype.removeChild = function (node) {
    node.parent = null;
    this.children.remove(node);
};

/**
 * Returns whether this node is a root.
 *
 * @returns {Boolean}
 */
mindmaps.Node.prototype.isRoot = function () {
    return this.parent === null;
};

/**
 * Returns whether this node is a leaf.
 *
 * @returns {Boolean}
 */
mindmaps.Node.prototype.isLeaf = function () {
    return this.children.size() === 0;
};

/**
 * Returns the parent node.
 *
 * @returns {mindmaps.Node}
 */
mindmaps.Node.prototype.getParent = function () {
    return this.parent;
};

/**
 * Returns the root if this node is part of a tree structure, otherwise it
 * returns itself.
 *
 * @returns {mindmaps.Node} The root of the tree structure.
 */
mindmaps.Node.prototype.getRoot = function () {
    var root = this;
    while (root.parent) {
        root = root.parent;
    }

    return root;
};

/**
 * Gets the position of the node relative to the root.
 *
 * @returns {mindmaps.Point}
 */
mindmaps.Node.prototype.getPosition = function () {
    var pos = this.offset.clone();
    var node = this.parent;

    while (node) {
        pos.add(node.offset);
        node = node.parent;
    }
    return pos;
};

/**
 * Gets the depth of the node. Root has a depth of 0.
 *
 * @returns {Number}
 */
mindmaps.Node.prototype.getDepth = function () {
    var node = this.parent;
    var depth = 0;

    while (node) {
        depth++;
        node = node.parent;
    }

    return depth;
};

/**
 * Gets the children of the node. Traverses the whole sub tree if recursive is
 * true.
 *
 * @param recursive
 * @returns {Array}
 * @deprecated
 */
mindmaps.Node.prototype.getChildren = function (recursive) {
    var nodes = [];

    this.children.each(function (node) {
        if (recursive) {
            var childNodes = node.getChildren(true);
            childNodes.forEach(function (child) {
                nodes.push(child);
            });
        }
        nodes.push(node);
    });

    return nodes;
};

/**
 * Iterator. Traverses all child nodes.
 *
 * @param {Function} func
 */
mindmaps.Node.prototype.forEachChild = function (func) {
    this.children.each(func);
};

/**
 * Iterator. Traverses all child nodes recursively.
 *
 * @param {Function} func
 */
mindmaps.Node.prototype.forEachDescendant = function (func) {
    this.children.each(function (node) {
        func(node);
        node.forEachDescendant(func);
    });
};

/**
 * Sets the caption for the node
 *
 * @param {String} caption
 */
mindmaps.Node.prototype.setCaption = function (caption) {
    this.text.caption = caption;
};

/**
 * Gets the caption for the node.
 *
 * @returns {String}
 */
mindmaps.Node.prototype.getCaption = function () {
    return this.text.caption;
};

/**
 * Tests (depth-first) whether the other node is a descendant of this node.
 *
 * @param {mindmaps.Node} other
 * @returns {Boolean} true if descendant, false otherwise.
 */
mindmaps.Node.prototype.isDescendant = function (other) {
    function test(node) {
        var children = node.children.values();
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (test(child)) {
                return true;
            }

            if (child === other) {
                return true;
            }
        }
        return false;
    }

    return test(this);
};
;
/**
 * Creates a new NodeMap object. Map implementation for nodes. The key is
 * automatically set to the node id.
 *
 * @constructor
 */
mindmaps.NodeMap = function () {
    this.nodes = {};
    this.count = 0;
};

/**
 * Return a node by its ID.
 *
 * @param {String} nodeId
 * @returns {mindmaps.Node}
 */
mindmaps.NodeMap.prototype.get = function (nodeId) {
    return this.nodes[nodeId];
};

/**
 * Adds a node to the map if it hasn't been added before.
 *
 * @param {mindmaps.Node} node
 * @returns {Boolean} true if added, false otherwise.
 */
mindmaps.NodeMap.prototype.add = function (node) {
    if (!this.nodes.hasOwnProperty(node.id)) {
        this.nodes[node.id] = node;
        this.count++;
        return true;
    }
    return false;
};

/**
 * Removes a node from the map.
 *
 * @param {mindmaps.Node} node
 * @returns {Boolean} true if removed, false otherwise.
 */
mindmaps.NodeMap.prototype.remove = function (node) {
    if (this.nodes.hasOwnProperty(node.id)) {
        delete this.nodes[node.id];
        this.count--;
        return true;
    }
    return false;
};

/**
 * Returns the number of nodes in the map.
 *
 * @returns {Number}
 */
mindmaps.NodeMap.prototype.size = function () {
    return this.count;
};

/**
 * Returns all nodes in the map.
 *
 * @returns {Array}
 */
mindmaps.NodeMap.prototype.values = function () {
    return Object.keys(this.nodes).map(function (key) {
        return this.nodes[key];
    }, this);
};

/**
 * Iterator for nodes.
 *
 * @param {Function} callback, first argument should be the node.
 */
mindmaps.NodeMap.prototype.each = function (callback) {
    for (var id in this.nodes) {
        callback(this.nodes[id]);
    }
};
;
/**
 * Creates a new UndoManager
 *
 * @constructor
 * @param {Integer} [maxStackSize=64]
 */
function UndoManager(maxStackSize) {
    this.maxStackSize = maxStackSize || 64;

    var State = {
        UNDO: "undo",
        REDO: "redo"
    };

    var self = this;
    var undoStack = new UndoManager.CircularStack(this.maxStackSize);
    var redoStack = new UndoManager.CircularStack(this.maxStackSize);
    var undoContext = false;
    var currentAction = null;
    var currentState = null;

    var onStateChange = function () {
        if (self.stateChanged) {
            self.stateChanged();
        }
    };

    var callAction = function (action) {
        currentAction = action;
        undoContext = true;
        switch (currentState) {
            case State.UNDO:
                action.undo();
                break;
            case State.REDO:
                action.redo();
                break;
        }
        undoContext = false;
    };

    /**
     * Register an undo operation. A call to .undo() will cause the undo
     * function to be executed. If you omit the second argument and the undo
     * function will cause the registration of another undo operation, then this
     * operation will be used as the redo function.
     *
     * If you provide both arguments, a call to addUndo() during an undo() or
     * redo() will have no effect.
     *
     *
     * @param {Function} undoFunc The function that should undo the changes.
     * @param {Function} [redoFunc] The function that should redo the undone
     *            changes.
     */
    this.addUndo = function (undoFunc, redoFunc) {
        if (undoContext) {
            /**
             * If we are currently undoing an action and don't have a redo
             * function yet, store the undo function to the undo function, which
             * is in turn the redo function.
             */
            if (currentAction.redo == null && currentState == State.UNDO) {
                currentAction.redo = undoFunc;
            }
        } else {
            /**
             * We are not undoing right now. Store the functions as an action.
             */
            var action = {
                undo: undoFunc,
                redo: redoFunc
            };
            undoStack.push(action);
            // clear redo stack
            redoStack.clear();

            onStateChange();
        }
    };

    /**
     * Undoes the last action.
     */
    this.undo = function () {
        if (this.canUndo()) {
            currentState = State.UNDO;
            var action = undoStack.pop();
            callAction(action);

            if (action.redo) {
                redoStack.push(action);
            }

            onStateChange();
        }
    };

    /**
     * Redoes the last action.
     */
    this.redo = function () {
        if (this.canRedo()) {
            currentState = State.REDO;
            var action = redoStack.pop();
            callAction(action);

            if (action.undo) {
                undoStack.push(action);
            }

            onStateChange();
        }
    };

    /**
     *
     * @returns {Boolean} true if undo is possible, false otherwise.
     */
    this.canUndo = function () {
        return !undoStack.isEmpty();
    };

    /**
     *
     * @returns {Boolean} true if redo is possible, false otherwise.
     */
    this.canRedo = function () {
        return !redoStack.isEmpty();
    };

    /**
     * Resets this instance of the undo manager.
     */
    this.reset = function () {
        undoStack.clear();
        redoStack.clear();
        undoContext = false;
        currentAction = null;
        currentState = null;

        onStateChange();
    };

    /**
     * Event that is fired when undo or redo state changes.
     *
     * @event
     */
    this.stateChanged = function () {
    };
}

/**
 * Creates a new CircularStack. This is a stack implementation backed by a
 * circular buffer where the oldest entries automatically are overwritten when
 * new items are pushed onto the stack and the maximum size has been reached.
 *
 * @constructor
 * @param {Integer} [maxSize=32]
 */
UndoManager.CircularStack = function (maxSize) {
    this.maxSize = maxSize || 32;
    this.buffer = [];
    this.nextPointer = 0;
};

/**
 * Pushes a new item onto the stack.
 *
 * @param {Any} item
 */
UndoManager.CircularStack.prototype.push = function (item) {
    this.buffer[this.nextPointer] = item;
    this.nextPointer = (this.nextPointer + 1) % this.maxSize;
};

/**
 * Checks whether the stack is empty.
 *
 * @returns {Boolean} true if empty, false otherwise.
 */
UndoManager.CircularStack.prototype.isEmpty = function () {
    if (this.buffer.length === 0) {
        return true;
    }

    var prevPointer = this.getPreviousPointer();
    if (prevPointer === null) {
        return true;
    } else {
        return this.buffer[prevPointer] === null;
    }
};

/**
 * Gets the position of the previously inserted item in the buffer.
 *
 * @private
 * @returns {Integer} the previous pointer position or null if no previous
 *          exists.
 */
UndoManager.CircularStack.prototype.getPreviousPointer = function () {
    if (this.nextPointer > 0) {
        return this.nextPointer - 1;
    } else {
        if (this.buffer.length < this.maxSize) {
            return null;
        } else {
            return this.maxSize - 1;
        }
    }
};

/**
 * Clears the stack.
 */
UndoManager.CircularStack.prototype.clear = function () {
    this.buffer.length = 0;
    this.nextPointer = 0;
};

/**
 * Returns and removes the top most item of the stack.
 *
 * @returns {Any} the last inserted item or null if stack is empty.
 */
UndoManager.CircularStack.prototype.pop = function () {
    if (this.isEmpty()) {
        return null;
    }

    var previousPointer = this.getPreviousPointer();
    var item = this.buffer[previousPointer];
    this.buffer[previousPointer] = null;
    this.nextPointer = previousPointer;

    return item;
};

/**
 * Returns but not removes the top most item of the stack.
 *
 * @returns {Any} the last inserted item or null if stack is empty.
 */
UndoManager.CircularStack.prototype.peek = function () {
    if (this.isEmpty()) {
        return null;
    }
    return this.buffer[this.getPreviousPointer()];
};
;
/**
 * Creates a new UndoController. The undo controller manages an instance of
 * UndoManager and delegates all undo and redo commands to the undo manager.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.CommandRegistry} commandRegistry
 */
mindmaps.UndoController = function (eventBus, commandRegistry) {

    /**
     * Initialise.
     *
     * @private
     */
    this.init = function () {
        this.undoManager = new UndoManager(128);
        this.undoManager.stateChanged = this.undoStateChanged.bind(this);

        this.undoCommand = commandRegistry.get(mindmaps.UndoCommand);
        this.undoCommand.setHandler(this.doUndo.bind(this));

        this.redoCommand = commandRegistry.get(mindmaps.RedoCommand);
        this.redoCommand.setHandler(this.doRedo.bind(this));

        eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, this.documentOpened
            .bind(this));

        eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, this.documentClosed
            .bind(this));
    };

    /**
     * Handler for state changed event from undo manager.
     */
    this.undoStateChanged = function () {
        this.undoCommand.setEnabled(this.undoManager.canUndo());
        this.redoCommand.setEnabled(this.undoManager.canRedo());
    };

    /**
     * @see mindmaps.UndoManager#addUndo
     */
    this.addUndo = function (undoFunc, redoFunc) {
        this.undoManager.addUndo(undoFunc, redoFunc);
    };

    /**
     * Handler for undo command.
     */
    this.doUndo = function () {
        this.undoManager.undo();
    };

    /**
     * Handler for redo command.
     */
    this.doRedo = function () {
        this.undoManager.redo();
    };

    /**
     * Handler for document opened event.
     */
    this.documentOpened = function () {
        this.undoManager.reset();
        this.undoStateChanged();
    };

    /**
     * Handler for document closed event.
     */
    this.documentClosed = function () {
        this.undoManager.reset();
        this.undoStateChanged();
    };

    this.init();
};
;
/**
 * Creates a new ClipboardController.
 * Handles copy, cut and paste commands.
 *
 * @constructor
 *
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.CommandRegistry} commandRegistry
 * @param {mindmaps.MindMapModel} mindmapModel
 */
mindmaps.ClipboardController = function (eventBus, commandRegistry, mindmapModel) {
    var node, copyCommand, cutCommand, pasteCommand;

    function init() {
        copyCommand = commandRegistry.get(mindmaps.CopyNodeCommand);
        copyCommand.setHandler(doCopy);

        cutCommand = commandRegistry.get(mindmaps.CutNodeCommand);
        cutCommand.setHandler(doCut);

        pasteCommand = commandRegistry.get(mindmaps.PasteNodeCommand);
        pasteCommand.setHandler(doPaste);
        pasteCommand.setEnabled(false);

        eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, function () {
            copyCommand.setEnabled(false);
            cutCommand.setEnabled(false);
            pasteCommand.setEnabled(false);
        });

        eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, function () {
            copyCommand.setEnabled(true);
            cutCommand.setEnabled(true);
            pasteCommand.setEnabled(node != null);
        });

    }

    function copySelectedNode() {
        node = mindmapModel.selectedNode.clone();
        pasteCommand.setEnabled(true);
    }

    function doCopy() {
        copySelectedNode();
    }

    function doCut() {
        copySelectedNode();
        mindmapModel.deleteNode(mindmapModel.selectedNode);
    }

    function doPaste() {
        if (!node) {
            return;
        }

        // send a cloned copy of our node, so we can paste multiple times
        mindmapModel.createNode(node.clone(), mindmapModel.selectedNode);
    }

    init();
};
;
/**
 * Creates a new ZoomController. Object that controls the zoom setting.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 */
mindmaps.ZoomController = function (eventBus, commandRegistry) {
    var self = this;

    /**
     * @constant
     */
    this.ZOOM_STEP = 0.25;

    /**
     * @constant
     */
    this.MAX_ZOOM = 3;

    /**
     * @constant
     */
    this.MIN_ZOOM = 0.25;

    /**
     * @constant
     */
    this.DEFAULT_ZOOM = 1;

    /**
     * @private
     */
    this.zoomFactor = this.DEFAULT_ZOOM;

    /**
     * Sets the zoom factor if param is within MIN_ZOOM and MAX_ZOOM bounds.
     *
     * @param {Number} factor
     */
    this.zoomTo = function (factor) {
        if (factor <= this.MAX_ZOOM && factor >= this.MIN_ZOOM) {
            this.zoomFactor = factor;
            eventBus.publish(mindmaps.Event.ZOOM_CHANGED, factor);
        }
    };

    /**
     * Zooms in by ZOOM_STEP.
     *
     * @returns {Number} the new zoomFactor.
     */
    this.zoomIn = function () {
        this.zoomFactor += this.ZOOM_STEP;
        if (this.zoomFactor > this.MAX_ZOOM) {
            this.zoomFactor -= this.ZOOM_STEP;
        } else {
            eventBus.publish(mindmaps.Event.ZOOM_CHANGED, this.zoomFactor);
        }

        return this.zoomFactor;
    };

    /**
     * Zooms out by ZOOM_STEP,
     *
     * @returns {Number} the new zoomFactor.
     */
    this.zoomOut = function () {
        this.zoomFactor -= this.ZOOM_STEP;
        if (this.zoomFactor < this.MIN_ZOOM) {
            this.zoomFactor += this.ZOOM_STEP;
        } else {
            eventBus.publish(mindmaps.Event.ZOOM_CHANGED, this.zoomFactor);
        }

        return this.zoomFactor;
    };

    /**
     * Reset zoom factor when document was closed.
     *
     * @ignore
     */
    eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, function (doc) {
        self.zoomTo(self.DEFAULT_ZOOM);
    });
};
;
/**
 * Creates a new ShortcutController. This object takes care of all keyboard
 * shortcuts.
 *
 * @constructor
 */
mindmaps.ShortcutController = function () {
    // set to save shortcuts in
    /**
     * @private
     */
    this.shortcuts = {};

    /**
     * Set the event type and add namespace for later removal.
     *
     * @param {String} shortcut the key combination
     * @param {String} [type="keydown"]
     * @returns {String}
     */
    function getType(shortcut, type) {
        type = type || "keydown";
        return type + "." + shortcut;
    }

    /**
     * Registers a new application wide shortcut. shortcuts can be
     * either a string or an array containing multiple possible
     * shortcuts for the same action.
     *
     * @param {String|Array} shortcuts
     * @param {Function} handler
     * @param {String} [type="keydown"]
     */
    this.register = function (shortcuts, handler, type) {
        if (!Array.isArray(shortcuts)) {
            shortcuts = [shortcuts];
        }

        var self = this;
        shortcuts.forEach(function (shortcut) {
            type = getType(shortcut, type);
            $(document).bind(type, shortcut, function (e) {
                // try best to cancel default actions on shortcuts like ctrl+n
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                handler();
                return false;
                self.shortcut[type] = true
            });
        });
    };

    /**
     * Unregisters a application shortcut.
     *
     * @param {String} shortcut
     * @param {String} [type="keydown"]
     */
    this.unregister = function (shortcut, type) {
        type = getType(shortcut, type);
        $(document).unbind(type);
        delete this.shortcuts[type];
    };

    /**
     * Removes all shortcuts.
     */
    this.unregisterAll = function () {
        for (var shortcut in shortcuts) {
            $(document).unbind(shortcut);
        }
    };
};
;
/**
 * <pre>
 * Listens to HELP_COMMAND and displays notifications.
 * Provides interactive tutorial for first time users.
 * </pre>
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.commandRegistry} commandRegistry
 */
mindmaps.HelpController = function (eventBus, commandRegistry) {

    /**
     * Prepare tutorial guiders.
     */
    function setupInteractiveMode() {
        if (isTutorialDone()) {
            console.debug("skipping tutorial");
            return;
        }

        var notifications = [];
        var interactiveMode = true;

        // start tutorial after a short delay
        eventBus.once(mindmaps.Event.DOCUMENT_OPENED, function () {
            setTimeout(start, 1000);
        });

        function closeAllNotifications() {
            notifications.forEach(function (n) {
                n.close();
            });
        }

        var helpMain, helpRoot;

        function start() {
            helpMain = new mindmaps.Notification(
                "#toolbar",
                {
                    position: "bottomMiddle",
                    maxWidth: 550,
                    title: "Welcome to mindmaps",
                    content: "Hello there, it seems like you are new here! These bubbles "
                    + "will guide you through the app. Or they won't if you want to skip this tutorial and <a class='skip-tutorial link'>click here<a/>."
                });
            notifications.push(helpMain);
            helpMain.$().find("a.skip-tutorial").click(function () {
                interactiveMode = false;
                closeAllNotifications();
                tutorialDone();
            });
            setTimeout(theRoot, 2000);
        }

        function theRoot() {
            if (isTutorialDone())
                return;

            helpRoot = new mindmaps.Notification(
                ".node-caption.root",
                {
                    position: "bottomMiddle",
                    closeButton: true,
                    maxWidth: 350,
                    title: "This is where you start - your main idea",
                    content: "Double click the idea to change what it says. This will be the main topic of your mind map."
                });
            notifications.push(helpRoot);

            eventBus.once(mindmaps.Event.NODE_TEXT_CAPTION_CHANGED, function () {
                helpRoot.close();
                setTimeout(theNub, 900);
            });
        }

        function theNub() {
            if (isTutorialDone())
                return;

            var helpNub = new mindmaps.Notification(
                ".node-caption.root",
                {
                    position: "bottomMiddle",
                    closeButton: true,
                    maxWidth: 350,
                    padding: 20,
                    title: "Creating new ideas",
                    content: "Now it's time to build your mind map.<br/> Move your mouse over the idea, click and then drag"
                    + " the <span style='color:red'>red circle</span> away from the root. This is how you create a new branch."
                });
            notifications.push(helpNub);
            eventBus.once(mindmaps.Event.NODE_CREATED, function () {
                helpMain.close();
                helpNub.close();
                setTimeout(newNode, 900);
            });
        }

        function newNode() {
            if (isTutorialDone())
                return;

            var helpNewNode = new mindmaps.Notification(
                ".node-container.root > .node-container:first",
                {
                    position: "bottomMiddle",
                    closeButton: true,
                    maxWidth: 350,
                    title: "Your first branch",
                    content: "Great! This is easy, right? The red circle is your most important tool. Now, you can move your idea"
                    + " around by dragging it or double click to change the text again."
                });
            notifications.push(helpNewNode);
            setTimeout(inspector, 2000);

            eventBus.once(mindmaps.Event.NODE_MOVED, function () {
                helpNewNode.close();
                setTimeout(navigate, 0);
                setTimeout(toolbar, 15000);
                setTimeout(menu, 10000);
                setTimeout(tutorialDone, 20000);
            });
        }

        function navigate() {
            if (isTutorialDone())
                return;

            var helpNavigate = new mindmaps.Notification(
                ".float-panel:has(#navigator)",
                {
                    position: "bottomRight",
                    closeButton: true,
                    maxWidth: 350,
                    expires: 10000,
                    title: "Navigation",
                    content: "You can click and drag the background of the map to move around. Use your mousewheel or slider over there to zoom in and out."
                });
            notifications.push(helpNavigate);
        }

        function inspector() {
            if (isTutorialDone())
                return;

            var helpInspector = new mindmaps.Notification(
                "#inspector",
                {
                    position: "leftBottom",
                    closeButton: true,
                    maxWidth: 350,
                    padding: 20,
                    title: "Don't like the colors?",
                    content: "Use these controls to change the appearance of your ideas. "
                    + "Try clicking the icon in the upper right corner to minimize this panel."
                });
            notifications.push(helpInspector);
        }

        function toolbar() {
            if (isTutorialDone())
                return;

            var helpToolbar = new mindmaps.Notification(
                "#toolbar .buttons-left",
                {
                    position: "bottomLeft",
                    closeButton: true,
                    maxWidth: 350,
                    padding: 20,
                    title: "The tool bar",
                    content: "Those buttons do what they say. You can use them or work with keyboard shortcuts. "
                    + "Hover over the buttons for the key combinations."
                });
            notifications.push(helpToolbar);
        }

        function menu() {
            if (isTutorialDone())
                return;

            var helpMenu = new mindmaps.Notification(
                "#toolbar .buttons-right",
                {
                    position: "leftTop",
                    closeButton: true,
                    maxWidth: 350,
                    title: "Save your work",
                    content: "The button to the right opens a menu where you can save your mind map or start working "
                    + "on another one if you like."
                });
            notifications.push(helpMenu);
        }

        function isTutorialDone() {
            return mindmaps.LocalStorage.get("mindmaps.tutorial.done") == 1;
        }

        function tutorialDone() {
            mindmaps.LocalStorage.put("mindmaps.tutorial.done", 1);
        }

    }

    /**
     * Prepares notfications to show for help command.
     */
    function setupHelpButton() {
        var command = commandRegistry.get(mindmaps.HelpCommand);
        command.setHandler(showHelp);

        var notifications = [];

        function showHelp() {
            // true if atleast one notifications is still on screen
            var displaying = notifications.some(function (noti) {
                return noti.isVisible();
            });

            // hide notifications if visible
            if (displaying) {
                notifications.forEach(function (noti) {
                    noti.close();
                });
                notifications.length = 0;
                return;
            }

            // show notifications
            var helpRoot = new mindmaps.Notification(
                ".node-caption.root",
                {
                    position: "bottomLeft",
                    closeButton: true,
                    maxWidth: 350,
                    title: "This is your main idea",
                    content: "Double click an idea to edit its text. Move the mouse over "
                    + "an idea and drag the red circle to create a new idea."
                });

            var helpNavigator = new mindmaps.Notification(
                "#navigator",
                {
                    position: "leftTop",
                    closeButton: true,
                    maxWidth: 350,
                    padding: 20,
                    title: "This is the navigator",
                    content: "Use this panel to get an overview of your map. "
                    + "You can navigate around by dragging the red rectangle or change the zoom by clicking on the magnifier buttons."
                });

            var helpInspector = new mindmaps.Notification(
                "#inspector",
                {
                    position: "leftTop",
                    closeButton: true,
                    maxWidth: 350,
                    padding: 20,
                    title: "This is the inspector",
                    content: "Use these controls to change the appearance of your ideas. "
                    + "Try clicking the icon in the upper right corner to minimize this panel."
                });

            var helpToolbar = new mindmaps.Notification(
                "#toolbar .buttons-left",
                {
                    position: "bottomLeft",
                    closeButton: true,
                    maxWidth: 350,
                    title: "This is your toolbar",
                    content: "Those buttons do what they say. You can use them or work with keyboard shortcuts. "
                    + "Hover over the buttons for the key combinations."
                });

            notifications.push(helpRoot, helpNavigator, helpInspector,
                helpToolbar);
        }
    }

    setupInteractiveMode();
    setupHelpButton();
};
;
/**
 * Creates a new FloatPanelFactory. This factory object can create new instances
 * of mindmaps.FloatPanel that are constrained inside the container.
 *
 * @constructor
 * @param container
 */
mindmaps.FloatPanelFactory = function (container) {
    var $container = container.getContent();
    var dialogs = [];
    var paddingRight = 15;
    var paddingTop = 5;

    function setPosition(dialog) {
        // reposition dialog on window resize
        container.subscribe(mindmaps.CanvasContainer.Event.RESIZED, function () {
            dialogs.forEach(function (dialog) {
                if (dialog.visible) {
                    dialog.ensurePosition();
                }
            });
        });

        var ccw = $container.outerWidth();
        var hh = $container.offset().top;
        var dw = dialog.width();
        var dh = dialog.height();
        var heightOffset = dialogs.reduce(function (memo, dialog) {
            return memo + dialog.height() + paddingTop;
        }, 0);

        dialog.setPosition(ccw - dw - paddingRight, hh + paddingTop
            + heightOffset);
    }

    /**
     * Creates a new FloatPanel.
     *
     * @param {String} caption the float panel title
     * @param {jQuery} $content the content as a jquery object
     * @returns {mindmaps.FloatPanel}
     */
    this.create = function (caption, $content) {
        var dialog = new mindmaps.FloatPanel(caption, $container, $content);
        setPosition(dialog);
        dialogs.push(dialog);
        return dialog;
    };
};

/**
 * A reusable, draggable panel gui element. The panel is contained within the
 * container. When a $hideTarget is set, the hide/show animations will show a
 * transfer effect.
 *
 * @constructor
 * @param {String} caption the float panel title
 * @param {jQuery} $container the surrounding container jquery object
 * @param {jQuery} $content the content as a jquery object
 */
mindmaps.FloatPanel = function (caption, $container, $content) {
    var self = this;
    var animating = false;

    this.caption = caption;
    this.visible = false;
    this.animationDuration = 400;

    /**
     * Replaces the content in the panel.
     *
     * @param {jQuery} $content
     */
    this.setContent = function ($content) {
        this.clearContent();
        $("div.ui-dialog-content", this.$widget).append($content);
    };

    /**
     * Clears the content of the panel.
     */
    this.clearContent = function () {
        $("div.ui-dialog-content", this.$widget).children().detach();
    };

    /**
     * @private
     */
    this.$widget = (function () {
        var $panel = $("#template-float-panel").tmpl({
            title: caption
        });

        // hide button
        $panel.find(".ui-dialog-titlebar-close").click(function () {
            self.hide();
        });

        // add content panel
        if ($content) {
            $panel.find(".ui-dialog-content").append($content);
        }

        // make draggable, hide, append to container
        $panel.draggable({
            containment: "parent",
            handle: "div.ui-dialog-titlebar",
            opacity: 0.75
        }).hide().appendTo($container);

        return $panel;
    })();

    /**
     * Hides the panel. Will show transfer effect if $hideTarget is set.
     */
    this.hide = function () {
        if (!animating && this.visible) {
            this.visible = false;
            this.$widget.fadeOut(this.animationDuration * 1.5);

            // show transfer effect is hide target is set
            if (this.$hideTarget) {
                this.transfer(this.$widget, this.$hideTarget);
            }
        }
    };

    /**
     * Shows the panel. Will show transfer effect if $hideTarget is set.
     */
    this.show = function () {
        if (!animating && !this.visible) {
            this.visible = true;
            this.$widget.fadeIn(this.animationDuration * 1.5);
            this.ensurePosition();

            // show transfer effect is hide target is set
            if (this.$hideTarget) {
                this.transfer(this.$hideTarget, this.$widget);
            }
        }
    };

    /**
     * Shows or hides the panel.
     */
    this.toggle = function () {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    };

    /**
     * Shows a transfer effect.
     *
     * @private
     * @param {jQuery} $from
     * @param {jQuery} $to
     */
    this.transfer = function ($from, $to) {
        animating = true;
        var endPosition = $to.offset(), animation = {
            top: endPosition.top,
            left: endPosition.left,
            height: $to.innerHeight(),
            width: $to.innerWidth()
        }, startPosition = $from.offset(), transfer = $(
            '<div class="ui-effects-transfer"></div>').appendTo(
            document.body).css({
            top: startPosition.top,
            left: startPosition.left,
            height: $from.innerHeight(),
            width: $from.innerWidth(),
            position: 'absolute'
        }).animate(animation, this.animationDuration, "linear", function () {
            // end
            transfer.remove();
            animating = false;
        });
    };

    /**
     *
     * @returns {Number} the width.
     */
    this.width = function () {
        return this.$widget.outerWidth();
    };

    /**
     *
     * @returns {Number} the height.
     */
    this.height = function () {
        return this.$widget.outerHeight();
    };

    /**
     *
     * @returns {Object} the offset
     */
    this.offset = function () {
        return this.$widget.offset();
    };

    /**
     * Sets the position of the panel relative to the container.
     *
     * @param {Number} x
     * @param {Number} y
     */
    this.setPosition = function (x, y) {
        this.$widget.offset({
            left: x,
            top: y
        });
    };

    /**
     * Moves panel into view port if position exceeds the bounds of the
     * container.
     *
     * @private
     */
    this.ensurePosition = function () {
        var cw = $container.outerWidth();
        var ch = $container.outerHeight();
        var col = $container.offset().left;
        var cot = $container.offset().top;
        var dw = this.width();
        var dh = this.height();
        var dol = this.offset().left;
        var dot = this.offset().top;

        // window width is too small for current dialog position but bigger than
        // dialog width
        if (cw + col < dw + dol && cw >= dw) {
            this.setPosition(cw + col - dw, dot);
        }

        // window height is too small for current dialog position but bigger
        // than dialog height
        if (ch + cot < dh + dot && ch >= dh) {
            this.setPosition(dol, ch + cot - dh);
        }
    };

    /**
     * Sets the hide target for the panel.
     *
     * @param {jQuery} $target
     */
    this.setHideTarget = function ($target) {
        this.$hideTarget = $target;
    };
};
;
/**
 * Creates a NavigatorView. This view shows a minified version of the mindmap +
 * controls for adjusting the zoom.
 *
 * @constructor
 */
mindmaps.NavigatorView = function () {
    var self = this;

    var $content = $("#template-navigator").tmpl();
    var $contentActive = $content.children(".active").hide();
    var $contentInactive = $content.children(".inactive").hide();
    var $dragger = $("#navi-canvas-overlay", $content);
    var $canvas = $("#navi-canvas", $content);

    /**
     * Returns the content.
     *
     * @returns {jQuery}
     */
    this.getContent = function () {
        return $content;
    };

    /**
     * Shows the active content.
     */
    this.showActiveContent = function () {
        $contentInactive.hide();
        $contentActive.show();
    };

    /**
     * Shows the inactive content.
     */
    this.showInactiveContent = function () {
        $contentActive.hide();
        $contentInactive.show();
    };

    /**
     * Adjusts the size of the red rectangle.
     *
     * @param {Number} width
     * @param {Nubmer} height
     */
    this.setDraggerSize = function (width, height) {
        $dragger.css({
            width: width,
            height: height
        });
    };

    /**
     * Sets the position of the dragger rectangle.
     *
     * @param {Number} x
     * @param {Number} y
     */
    this.setDraggerPosition = function (x, y) {
        $dragger.css({
            left: x,
            top: y
        });
    };

    /**
     * Sets the height of the mini canvas.
     *
     * @param {Number} height
     */
    this.setCanvasHeight = function (height) {
        $("#navi-canvas", $content).css({
            height: height
        });
    };

    /**
     * Gets the width of the mini canvas.
     *
     * @returns {Number}
     */
    this.getCanvasWidth = function () {
        return $("#navi-canvas", $content).width();
    };

    this.init = function (canvasSize) {
        $("#navi-slider", $content).slider({
            // TODO remove magic numbers. get values from presenter
            min: 0,
            max: 11,
            step: 1,
            value: 3,
            slide: function (e, ui) {
                if (self.sliderChanged) {
                    self.sliderChanged(ui.value);
                }
            }
        });

        $("#button-navi-zoom-in", $content).button({
            text: false,
            icons: {
                primary: "ui-icon-zoomin"
            }
        }).click(function () {
            if (self.buttonZoomInClicked) {
                self.buttonZoomInClicked();
            }
        });

        $("#button-navi-zoom-out", $content).button({
            text: false,
            icons: {
                primary: "ui-icon-zoomout"
            }
        }).click(function () {
            if (self.buttonZoomOutClicked) {
                self.buttonZoomOutClicked();
            }
        });

        // make draggable
        $dragger.draggable({
            containment: "parent",
            start: function (e, ui) {
                if (self.dragStart) {
                    self.dragStart();
                }
            },
            drag: function (e, ui) {
                if (self.dragging) {
                    var x = ui.position.left;
                    var y = ui.position.top;
                    self.dragging(x, y);
                }
            },
            stop: function (e, ui) {
                if (self.dragStop) {
                    self.dragStop();
                }
            }
        });
    };

    /**
     * Draws the complete mindmap onto the mini canvas.
     *
     * @param {mindmaps.MindMap} mindmap
     * @param {Number} scaleFactor
     */
    this.draw = function (mindmap, scaleFactor) {
        var root = mindmap.root;
        var canvas = $canvas[0];
        var width = canvas.width;
        var height = canvas.height;
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 1.8;

        drawNode(root, width / 2, height / 2);

        // draw rect for root
        ctx.fillRect(width / 2 - 4, height / 2 - 2, 8, 4);

        function scale(value) {
            return value / scaleFactor;
        }

        function drawNode(node, x, y) {
            ctx.save();
            ctx.translate(x, y);

            if (!node.collapseChildren) {
                node.forEachChild(function (child) {
                    ctx.beginPath();
                    ctx.strokeStyle = child.branchColor;
                    ctx.moveTo(0, 0);
                    var posX = scale(child.offset.x);
                    var posY = scale(child.offset.y);
                    // var textWidth =
                    // ctx.measureText(child.getCaption()).width;
                    var textWidth = 5;

                    /**
                     * draw two lines: one going up to the node, and a second
                     * horizontal line for the node caption. if node is left of
                     * the parent (posX < 0), we shorten the first line and draw
                     * the rest horizontally to arrive at the node's offset
                     * position. in the other case, we draw the line to the
                     * node's offset and draw another for the text.
                     */
                    if (posX < 0) {
                        var firstStop = posX + textWidth;
                        var secondStop = posX;
                    } else {
                        var firstStop = posX;
                        var secondStop = posX + textWidth;
                    }
                    ctx.lineTo(firstStop, posY);
                    ctx.lineTo(secondStop, posY);

                    ctx.stroke();
                    drawNode(child, secondStop, posY);
                });
            }
            ctx.restore();
        }
    };

    /**
     * Shows the zoom level as percentage.
     *
     * @param {String} zoom
     */
    this.showZoomLevel = function (zoom) {
        $("#navi-zoom-level").text(zoom);
    };

    /**
     * Sets the value of the zoom slider.
     *
     * @param {Integer} value
     */
    this.setSliderValue = function (value) {
        $("#navi-slider").slider("value", value);
    };
};

/**
 * Creates a new NavigatorPresenter.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.NavigatorView} view
 * @param {mindmaps.CanvasContainer} container
 * @param {mindmaps.ZoomController} zoomController
 */
mindmaps.NavigatorPresenter = function (eventBus, view, container,
                                        zoomController) {
    var self = this;
    var $container = container.getContent();
    var viewDragging = false;
    var scale = zoomController.DEFAULT_ZOOM;
    var canvasSize = new mindmaps.Point();
    var docSize = null;
    var mindmap = null;

    /**
     * Calculates and sets the size of the dragger element.
     */
    function calculateDraggerSize() {
        var cw = $container.width() / scale;
        var ch = $container.height() / scale;
        // doc.x / container.x = canvas.x / dragger.x
        var width = (cw * canvasSize.x) / docSize.x;
        var height = (ch * canvasSize.y) / docSize.y;

        // limit size to bounds of canvas
        if (width > canvasSize.x) {
            width = canvasSize.x;
        }

        if (height > canvasSize.y) {
            height = canvasSize.y;
        }

        view.setDraggerSize(width, height);
    }

    /**
     * Calculates and sets the size of the mini canvas.
     */
    function calculateCanvasSize() {
        var width = view.getCanvasWidth();
        var _scale = docSize.x / width;
        var height = docSize.y / _scale;

        view.setCanvasHeight(height);

        canvasSize.x = width;
        canvasSize.y = height;
    }

    /**
     * Calculates and sets the possition of the dragger element.
     */
    function calculateDraggerPosition() {
        var sl = $container.scrollLeft() / scale;
        var st = $container.scrollTop() / scale;

        // sl / dox = dl / cw
        // dl = sl * cw / dox
        var left = sl * canvasSize.x / docSize.x;
        var top = st * canvasSize.y / docSize.y;
        view.setDraggerPosition(left, top);
    }

    /**
     * Calculates and sets the zoom level.
     */
    function calculateZoomLevel() {
        var zoomlevel = scale * 100 + " %";
        view.showZoomLevel(zoomlevel);
    }

    /**
     * Calculates and sets the slider value for the zoom level.
     */
    function calculateSliderValue() {
        var val = scale / zoomController.ZOOM_STEP - 1;
        view.setSliderValue(val);
    }

    /**
     * Initialize view when a document was opened.
     */
    function documentOpened(doc) {
        docSize = doc.dimensions;
        mindmap = doc.mindmap;

        calculateCanvasSize();
        calculateDraggerPosition();
        calculateDraggerSize();
        calculateZoomLevel();
        calculateSliderValue();
        renderView();

        view.showActiveContent();

        // move dragger when container was scrolled
        $container.bind("scroll.navigator-view", function () {
            if (!viewDragging) {
                calculateDraggerPosition();
            }
        });
    }

    /**
     * Update the canvas of the view component.
     */
    function renderView() {
        // draw canvas
        var scale = docSize.x / canvasSize.x;
        view.draw(mindmap, scale);
    }

    /**
     * Reset when document was closed.
     */
    function documentClosed() {
        docSize = null;
        mindmap = null;
        scale = 1;
        // clean up
        // remove listeners
        $container.unbind("scroll.navigator-view");

        view.showInactiveContent();
    }

    /**
     * View callbacks.
     *
     * @ignore
     */

    view.dragStart = function () {
        viewDragging = true;
    };

    // scroll container when the dragger is dragged
    view.dragging = function (x, y) {
        var scrollLeft = scale * docSize.x * x / canvasSize.x;
        var scrollTop = scale * docSize.y * y / canvasSize.y;
        $container.scrollLeft(scrollLeft).scrollTop(scrollTop);
    };

    view.dragStop = function () {
        viewDragging = false;
    };

    view.buttonZoomInClicked = function () {
        zoomController.zoomIn();
    };

    view.buttonZoomOutClicked = function () {
        zoomController.zoomOut();
    };

    view.sliderChanged = function (value) {
        zoomController.zoomTo((value + 1) * zoomController.ZOOM_STEP);
    };

    // set dragger size when container was resized
    container.subscribe(mindmaps.CanvasContainer.Event.RESIZED, function () {
        if (docSize) {
            calculateDraggerSize();
        }
    });

    // document events
    eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, documentOpened);
    eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, documentClosed);

    // node events
    eventBus.subscribe(mindmaps.Event.NODE_MOVED, renderView);
    eventBus.subscribe(mindmaps.Event.NODE_BRANCH_COLOR_CHANGED, renderView);
    eventBus.subscribe(mindmaps.Event.NODE_CREATED, renderView);
    eventBus.subscribe(mindmaps.Event.NODE_DELETED, renderView);
    eventBus.subscribe(mindmaps.Event.NODE_OPENED, renderView);
    eventBus.subscribe(mindmaps.Event.NODE_CLOSED, renderView);

    eventBus.subscribe(mindmaps.Event.ZOOM_CHANGED, function (zoomFactor) {
        scale = zoomFactor;
        calculateDraggerPosition();
        calculateDraggerSize();
        calculateZoomLevel();
        calculateSliderValue();
    });

    this.go = function () {
        view.init();
        view.showInactiveContent();
    };
};
;
/**
 * Creates a new InspectorView.
 *
 * @constructor
 */
mindmaps.InspectorView = function () {
    var self = this;
    var $content = $("#template-inspector").tmpl();
    var $sizeDecreaseButton = $("#inspector-button-font-size-decrease",
        $content);
    var $sizeIncreaseButton = $("#inspector-button-font-size-increase",
        $content);
    var $boldCheckbox = $("#inspector-checkbox-font-bold", $content);
    var $italicCheckbox = $("#inspector-checkbox-font-italic", $content);
    var $underlineCheckbox = $("#inspector-checkbox-font-underline", $content);
    var $linethroughCheckbox = $("#inspector-checkbox-font-linethrough",
        $content);
    var $branchColorChildrenButton = $("#inspector-button-branch-color-children", $content);
    var branchColorPicker = $("#inspector-branch-color-picker", $content);
    var fontColorPicker = $("#inspector-font-color-picker", $content);
    var $allButtons = [$sizeDecreaseButton, $sizeIncreaseButton,
        $boldCheckbox, $italicCheckbox, $underlineCheckbox,
        $linethroughCheckbox, $branchColorChildrenButton];
    var $allColorpickers = [branchColorPicker, fontColorPicker];

    /**
     * Returns a jquery object.
     *
     * @returns {jQuery}
     */
    this.getContent = function () {
        return $content;
    };

    /**
     * Sets the enabled state of all controls.
     *
     * @param {Boolean} enabled
     */
    this.setControlsEnabled = function (enabled) {
        var state = enabled ? "enable" : "disable";
        $allButtons.forEach(function ($button) {
            $button.button(state);
        });

        $allColorpickers.forEach(function ($colorpicker) {
            $colorpicker.miniColors("disabled", !enabled);
        });
    };

    /**
     * Sets the checked state of the bold font option.
     *
     * @param {Boolean} checked
     */
    this.setBoldCheckboxState = function (checked) {
        $boldCheckbox.prop("checked", checked).button("refresh");
    };

    /**
     * Sets the checked state of the italic font option.
     *
     * @param {Boolean} checked
     */
    this.setItalicCheckboxState = function (checked) {
        $italicCheckbox.prop("checked", checked).button("refresh");
    };

    /**
     * Sets the checked state of the underline font option.
     *
     * @param {Boolean} checked
     */
    this.setUnderlineCheckboxState = function (checked) {
        $underlineCheckbox.prop("checked", checked).button("refresh");
    };

    /**
     * Sets the checked state of the linethrough font option.
     *
     * @param {Boolean} checked
     */
    this.setLinethroughCheckboxState = function (checked) {
        $linethroughCheckbox.prop("checked", checked).button("refresh");
    };

    /**
     * Sets the color of the branch color picker.
     *
     * @param {String} color
     */
    this.setBranchColorPickerColor = function (color) {
        branchColorPicker.miniColors("value", color);
    };

    /**
     * Sets the color of the font color picker.
     *
     * @param {String} color
     */
    this.setFontColorPickerColor = function (color) {
        fontColorPicker.miniColors("value", color);
    };

    /**
     * Initialise
     */
    this.init = function () {
        $(".buttonset", $content).buttonset();
        $branchColorChildrenButton.button();

        $sizeDecreaseButton.click(function () {
            if (self.fontSizeDecreaseButtonClicked) {
                self.fontSizeDecreaseButtonClicked();
            }
        });

        $sizeIncreaseButton.click(function () {
            if (self.fontSizeIncreaseButtonClicked) {
                self.fontSizeIncreaseButtonClicked();
            }
        });

        $boldCheckbox.click(function () {
            if (self.fontBoldCheckboxClicked) {
                var checked = $(this).prop("checked");
                self.fontBoldCheckboxClicked(checked);
            }
        });

        $italicCheckbox.click(function () {
            if (self.fontItalicCheckboxClicked) {
                var checked = $(this).prop("checked");
                self.fontItalicCheckboxClicked(checked);
            }
        });

        $underlineCheckbox.click(function () {
            if (self.fontUnderlineCheckboxClicked) {
                var checked = $(this).prop("checked");
                self.fontUnderlineCheckboxClicked(checked);
            }
        });

        $linethroughCheckbox.click(function () {
            if (self.fontLinethroughCheckboxClicked) {
                var checked = $(this).prop("checked");
                self.fontLinethroughCheckboxClicked(checked);
            }
        });

        branchColorPicker.miniColors({
            hide: function (hex) {
                // dont emit event if picker was hidden due to disable
                if (this.attr('disabled')) {
                    return;
                }

                console.log("hide branch", hex);
                if (self.branchColorPicked) {
                    self.branchColorPicked(hex);
                }
            },

            move: function (hex) {
                if (self.branchColorPreview) {
                    self.branchColorPreview(hex);
                }
            }
        });

        fontColorPicker.miniColors({
            hide: function (hex) {
                // dont emit event if picker was hidden due to disable
                if (this.attr('disabled')) {
                    return;
                }
                console.log("font", hex);
                if (self.fontColorPicked) {
                    self.fontColorPicked(hex);
                }
            },

            move: function (hex) {
                if (self.fontColorPreview) {
                    self.fontColorPreview(hex);
                }
            }
        });

        $branchColorChildrenButton.click(function () {
            if (self.branchColorChildrenButtonClicked) {
                self.branchColorChildrenButtonClicked();
            }
        });
    };
};

/**
 * Creates a new InspectorPresenter. This presenter manages basic node
 * attributes like font settings and branch color.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.MindMapModel} mindmapModel
 * @param {mindmaps.InspectorView} view
 */
mindmaps.InspectorPresenter = function (eventBus, mindmapModel, view) {
    var self = this;

    /**
     * View callbacks: React to user input and execute appropiate action.
     */

    view.fontSizeDecreaseButtonClicked = function () {
        var action = new mindmaps.action.DecreaseNodeFontSizeAction(
            mindmapModel.selectedNode);
        mindmapModel.executeAction(action);
    };

    view.fontSizeIncreaseButtonClicked = function () {
        var action = new mindmaps.action.IncreaseNodeFontSizeAction(
            mindmapModel.selectedNode);
        mindmapModel.executeAction(action);
    };

    view.fontBoldCheckboxClicked = function (checked) {
        var action = new mindmaps.action.SetFontWeightAction(
            mindmapModel.selectedNode, checked);
        mindmapModel.executeAction(action);
    };

    view.fontItalicCheckboxClicked = function (checked) {
        var action = new mindmaps.action.SetFontStyleAction(
            mindmapModel.selectedNode, checked);
        mindmapModel.executeAction(action);
    };

    view.fontUnderlineCheckboxClicked = function (checked) {
        var action = new mindmaps.action.SetFontDecorationAction(
            mindmapModel.selectedNode, checked ? "underline" : "none");
        mindmapModel.executeAction(action);
    };

    view.fontLinethroughCheckboxClicked = function (checked) {
        var action = new mindmaps.action.SetFontDecorationAction(
            mindmapModel.selectedNode, checked ? "line-through" : "none");
        mindmapModel.executeAction(action);
    };

    view.branchColorPicked = function (color) {
        var action = new mindmaps.action.SetBranchColorAction(mindmapModel.selectedNode, color);
        mindmapModel.executeAction(action);
    };

    view.branchColorPreview = function (color) {
        eventBus.publish(mindmaps.Event.NODE_BRANCH_COLOR_PREVIEW,
            mindmapModel.selectedNode, color);
    }

    view.fontColorPicked = function (color) {
        var action = new mindmaps.action.SetFontColorAction(
            mindmapModel.selectedNode, color);
        mindmapModel.executeAction(action);
    };

    view.fontColorPreview = function (color) {
        eventBus.publish(mindmaps.Event.NODE_FONT_COLOR_PREVIEW,
            mindmapModel.selectedNode, color);
    };

    /**
     * Change branch color of all the node's children.
     */
    view.branchColorChildrenButtonClicked = function () {
        var action = new mindmaps.action.SetChildrenBranchColorAction(
            mindmapModel.selectedNode);
        mindmapModel.executeAction(action);
    }

    /**
     * Update view on font events.
     */
    eventBus.subscribe(mindmaps.Event.NODE_FONT_CHANGED, function (node) {
        if (mindmapModel.selectedNode === node) {
            updateView(node);
        }
    });

    eventBus.subscribe(mindmaps.Event.NODE_BRANCH_COLOR_CHANGED,
        function (node) {
            if (mindmapModel.selectedNode === node) {
                updateView(node);
            }
        });

    eventBus.subscribe(mindmaps.Event.NODE_SELECTED, function (node) {
        updateView(node);
    });

    /**
     * Enable controls when a document has been opened.
     */
    eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, function () {
        view.setControlsEnabled(true);
    });

    /**
     * Disable controls when document was closed.
     */
    eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, function () {
        view.setControlsEnabled(false);
    });

    /**
     * Sets the view params to match the node's attributes.
     *
     * @param {mindmaps.Node} node
     */
    function updateView(node) {
        var font = node.text.font;
        view.setBoldCheckboxState(font.weight === "bold");
        view.setItalicCheckboxState(font.style === "italic");
        view.setUnderlineCheckboxState(font.decoration === "underline");
        view.setLinethroughCheckboxState(font.decoration === "line-through");
        view.setFontColorPickerColor(font.color);
        view.setBranchColorPickerColor(node.branchColor);
    }

    this.go = function () {
        view.init();
    };
};
;
/**
 * Creates a new ToolBarView.
 *
 * @constructor
 */
mindmaps.ToolBarView = function () {
    var self = this;

    this.init = function () {
    };

    /**
     * Adds a button to the toolbar with the given align function.
     *
     * @param {mindmaps.ToolBarButton} button
     * @param {Function} alignFunc
     */
    this.addButton = function (button, alignFunc) {
        // var $button = this.createButton(button);
        alignFunc(button.asJquery());
    };

    /**
     * Adds a set of buttons grouped together to the toolbar.
     *
     * @param {mindmaps.ToolBarButton[]} buttons
     * @param {Function} alignFunc
     */
    this.addButtonGroup = function (buttons, alignFunc) {
        var $buttonset = $("<span/>");
        buttons.forEach(function (button) {
            // var $button = self.createButton(button);
            $buttonset.append(button.asJquery());
        });
        $buttonset.buttonset();
        alignFunc($buttonset);
    };

    /**
     * Adds a menu to the toolbar.
     *
     * @param {mindmaps.ToolBarMenu} menu
     */
    this.addMenu = function (menu) {
        this.alignRight(menu.getContent());
    };

    /**
     * Adds the element to the left side of the toolbar.
     *
     * @param {jQuery} $el
     */
    this.alignLeft = function ($el) {
        $el.appendTo("#toolbar .buttons-left");
    };

    /**
     * Adds the element to the right side of the toolbar.
     *
     * @param {jQuery} $el
     */
    this.alignRight = function ($el) {
        $el.appendTo("#toolbar .buttons-right");
    };
};

/**
 * Toolbar button model.
 *
 * @constructor
 * @param {mindmaps.Command} command
 */

mindmaps.ToolBarButton = function (command) {
    this.command = command;

    // callback to update display state
    var self = this;
    command.subscribe(mindmaps.Command.Event.ENABLED_CHANGED,
        function (enabled) {
            if (self.setEnabled) {
                self.setEnabled(enabled);
            }
        });
};

/**
 * Returns whether the button should have an enabled style.
 *
 * @returns {Boolean}
 */
mindmaps.ToolBarButton.prototype.isEnabled = function () {
    return this.command.enabled;
};

/**
 * Executes the button's command.
 */
mindmaps.ToolBarButton.prototype.click = function () {
    this.command.execute();
};

/**
 * Gets the button's title.
 *
 * @returns {String}
 */
mindmaps.ToolBarButton.prototype.getTitle = function () {
    return this.command.label;
};

/**
 * Gets the tooltip.
 *
 * @returns {String}
 */
mindmaps.ToolBarButton.prototype.getToolTip = function () {
    var tooltip = this.command.description;

    var shortcut = this.command.shortcut;
    if (shortcut) {
        if (Array.isArray(shortcut)) {
            shortcut = shortcut.join(", ");
        }

        tooltip += " [" + shortcut.toUpperCase() + "]";
    }

    return tooltip;
};

/**
 * Gets the unique id of the button.
 *
 * @returns {String}
 */
mindmaps.ToolBarButton.prototype.getId = function () {
    return "button-" + this.command.id;
};

/**
 * Constructs a jQuery element that represents the button.
 *
 * @returns {jQuery}
 */
mindmaps.ToolBarButton.prototype.asJquery = function () {
    var self = this;
    var $button = $("<button/>", {
        id: this.getId(),
        title: this.getToolTip()
    }).click(function () {
        self.click();
    }).button({
        label: this.getTitle(),
        disabled: !this.isEnabled()
    });

    var icon = this.command.icon;
    if (icon) {
        $button.button({
            icons: {
                primary: icon
            }
        });
    }

    // callback to update display state
    this.setEnabled = function (enabled) {
        $button.button(enabled ? "enable" : "disable");
    };

    return $button;
};

/**
 * Creates a new ToolBarMenu.
 *
 * @constructor
 * @param {String} title
 * @param {String} icon
 */
mindmaps.ToolBarMenu = function (title, icon) {
    var self = this;
    this.$menuWrapper = $("<span/>", {
        "class": "menu-wrapper"
    }).hover(function () {
        self.$menu.show();
    }, function () {
        self.$menu.hide();
    });

    this.$menuButton = $("<button/>").button({
        label: title,
        icons: {
            primary: icon,
            secondary: "ui-icon-triangle-1-s"
        }
    }).appendTo(this.$menuWrapper);

    this.$menu = $("<div/>", {
        "class": "menu"
    }).click(function () {
        self.$menu.hide();
    }).appendTo(this.$menuWrapper);

    /**
     * Adds a new button entry to the menu.
     *
     * @param {mindmaps.ToolBarButton|mindmaps.ToolBarButtons[]} buttons a
     *            single button or an array of buttons
     */
    this.add = function (buttons) {
        if (!Array.isArray(buttons)) {
            buttons = [buttons];
        }

        buttons.forEach(function (button) {
            var $button = button.asJquery().removeClass("ui-corner-all")
                .addClass("menu-item");
            this.$menu.append($button);
        }, this);

        // last item gets rounded corners
        this.$menu.children().last().addClass("ui-corner-bottom").prev()
            .removeClass("ui-corner-bottom");
    };

    /**
     * Returns the underlying jquery object.
     *
     * @returns {jQuery}
     */
    this.getContent = function () {
        return this.$menuWrapper;
    };
};

/**
 * Creates a new ToolBarPresenter.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.CommandRegistry} commandRegistry
 * @param {mindmaps.ToolBarView} view
 * @param {mindmaps.MindMapModel} mindmapModel
 */
mindmaps.ToolBarPresenter = function (eventBus, commandRegistry, view,
                                      mindmapModel) {
    /**
     * Returns a button that registers with a command of the given commandType
     *
     * @param {mindmaps.Command} commandType
     * @returns {mindmaps.ToolBarButton}
     */
    function commandToButton(commandType) {
        var command = commandRegistry.get(commandType);
        return new mindmaps.ToolBarButton(command);
    }

    function commandsToButtons(commands) {
        return commands.map(commandToButton);
    }

    // populate toolbar

    // node buttons
    var nodeCommands = [mindmaps.CreateNodeCommand, mindmaps.DeleteNodeCommand];
    var nodeButtons = commandsToButtons(nodeCommands);
    view.addButtonGroup(nodeButtons, view.alignLeft);

    // undo buttons
    var undoCommands = [mindmaps.UndoCommand, mindmaps.RedoCommand];
    var undoButtons = commandsToButtons(undoCommands);
    view.addButtonGroup(undoButtons, view.alignLeft);

    // clipboard buttons.
    var clipboardCommands = [mindmaps.CopyNodeCommand,
        mindmaps.CutNodeCommand, mindmaps.PasteNodeCommand];
    var clipboardButtons = commandsToButtons(clipboardCommands);
    view.addButtonGroup(clipboardButtons, view.alignLeft);

    // file menu
    var fileMenu = new mindmaps.ToolBarMenu("Mind map", "ui-icon-document");
    var fileCommands = [mindmaps.NewDocumentCommand,
        mindmaps.OpenDocumentCommand, mindmaps.SaveDocumentCommand,
        mindmaps.ExportCommand, mindmaps.PrintCommand,
        mindmaps.CloseDocumentCommand];
    var fileButtons = commandsToButtons(fileCommands);
    fileMenu.add(fileButtons);
    view.addMenu(fileMenu);

    // help button
    view.addButton(commandToButton(mindmaps.HelpCommand), view.alignRight);

    this.go = function () {
        view.init();
    };
};
;
// TODO Rename those objects to TaskBar*

/**
 * Creates a new StatusBarView.
 *
 * @constructor
 */
mindmaps.StatusBarView = function () {
    var self = this;
    var $statusbar = $("#statusbar");

    this.init = function () {
    };

    /**
     * Creates and adds a new button to the stats baar.
     *
     * @param {String} id
     * @param {String} text
     * @returns {jQuery}
     */
    this.createButton = function (id, text) {
        return $("<button/>", {
            id: "statusbar-button-" + id
        }).button({
            label: text
        }).click(function () {
            if (self.buttonClicked) {
                self.buttonClicked(id);
            }
        }).prependTo($statusbar.find(".buttons"));
    };

    /**
     * Returns the underlying jquery object.
     *
     * @returns {jQuery}
     */
    this.getContent = function () {
        return $statusbar;
    };
};

/**
 * Creates a new StatusBarPresenter. This object provides buttons for the
 * floating panels for a taskbar-like behaviour.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.StatusBarView} view
 */
mindmaps.StatusBarPresenter = function (eventBus, view) {
    var buttonCounter = 0;
    var buttonIdPanelMap = {};
    var statusController = new mindmaps.StatusNotificationController(eventBus,
        view.getContent());

    view.buttonClicked = function (id) {
        buttonIdPanelMap[id].toggle();
    };

    this.go = function () {
        view.init();

    };

    /**
     * Adds a new button for a panel to the statusbar and registers the button
     * as a hide target for the panel.
     *
     * @param {mindmaps.FloatPanel} panel
     */
    this.addEntry = function (panel) {
        var id = buttonCounter++;
        var $button = view.createButton(id, panel.caption);
        panel.setHideTarget($button);
        buttonIdPanelMap[id] = panel;
    };
};

/**
 * This object subscribes to some events and displays status messages in the
 * bottom right corner.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.StatusBarView} view
 */
mindmaps.StatusNotificationController = function (eventBus, view) {
    var $anchor = $("<div class='notification-anchor'/>").css({
        position: "absolute",
        right: 20
    }).appendTo(view);

    eventBus.subscribe(mindmaps.Event.DOCUMENT_SAVED, function () {
        var n = new mindmaps.Notification($anchor, {
            position: "topRight",
            expires: 2500,
            content: "Mind map saved"
        });
    });

    eventBus.subscribe(mindmaps.Event.NOTIFICATION_INFO, function (message) {
        var n = new mindmaps.Notification($anchor, {
            position: "topRight",
            content: message,
            expires: 2500,
            type: "info"
        });
    });

    eventBus.subscribe(mindmaps.Event.NOTIFICATION_WARN, function (message) {
        var n = new mindmaps.Notification($anchor, {
            position: "topRight",
            title: "Warning",
            content: message,
            expires: 3000,
            type: "warn"
        });
    });


    eventBus.subscribe(mindmaps.Event.NOTIFICATION_ERROR, function (message) {
        var n = new mindmaps.Notification($anchor, {
            position: "topRight",
            title: "Error",
            content: message,
            expires: 3500,
            type: "error"
        });
    });
};
;
mindmaps.CanvasDrawingUtil = {
    /**
     * Calculates the width of a branch for a node for the given depth
     *
     * @param {Integer} depth the depth of the node
     * @returns {Number}
     */
    getLineWidth: function (zoomFactor, depth) {
        // var width = this.zoomFactor * (10 - depth);
        var width = zoomFactor * (12 - depth * 2);

        if (width < 2) {
            width = 2;
        }

        return width;
    },

    /**
     * Draws a rounded rectangle
     * @param ctx
     * @param x
     * @param y
     * @param width
     * @param height
     * @param radius
     */
    roundedRect: function roundedRect(ctx, x, y, width, height, radius) {
        // from MDN docs
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
        ctx.lineTo(x + width - radius, y + height);
        ctx.quadraticCurveTo(x + width, y + height, x + width, y + height
            - radius);
        ctx.lineTo(x + width, y + radius);
        ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.quadraticCurveTo(x, y, x, y + radius);
        ctx.stroke();
        ctx.fill();
    }
};

/**
 * Object that draws the line connection (the branch) between two nodes onto a
 * canvas object.
 *
 * @constructor
 */
mindmaps.CanvasBranchDrawer = function () {
    /**
     * Callback during render() method. Is called after calculating the
     * boundaries of the line and before actual drawing.
     *
     * @event
     */
    this.beforeDraw = function (width, height, left, top) {

    };

    /**
     * Render that.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {Integer} depth
     * @param {Number} offsetX
     * @param {Number} offsetY
     * @param {jQuery} $node
     * @param {jQuery} $parent
     * @param {String} color
     * @param {Number} zoomFactor
     */
    this.render = function (ctx, depth, offsetX, offsetY, $node, $parent, color,
                            zoomFactor) {

        offsetX = offsetX * zoomFactor;
        offsetY = offsetY * zoomFactor;

        var pw = $parent.width();
        var nw = $node.width();
        var pih = $parent.innerHeight();
        var nih = $node.innerHeight();

        // line is drawn from node to parent
        // draw direction
        var leftToRight, topToBottom;

        // node overlaps with parent above or delow
        var overlap = false;

        // canvas attributes
        var left, top, width, height;
        var bColor;

        // position relative to parent
        var nodeLeft = offsetX + nw / 2 < pw / 2;
        if (nodeLeft) {
            var aOffsetX = Math.abs(offsetX);
            if (aOffsetX > nw) {
                // normal left

                // make it one pixel too wide to fix firefox rounding issues
                width = aOffsetX - nw + 1;
                left = nw;
                leftToRight = true;

                // bColor = "red";
            } else {
                // left overlap
                left = -offsetX;
                width = nw + offsetX;
                leftToRight = false;
                overlap = true;

                // bColor = "orange";
            }
        } else {
            if (offsetX > pw) {
                // normal right

                // make it one pixel too wide to fix firefox rounding issues
                width = offsetX - pw + 1;
                left = pw - offsetX;
                leftToRight = false;

                // bColor = "green";
            } else {
                // right overlap
                width = pw - offsetX;
                left = 0;
                leftToRight = true;
                overlap = true;

                // bColor = "yellow";
            }
        }

        var lineWidth = mindmaps.CanvasDrawingUtil.getLineWidth(zoomFactor,
            depth);
        var halfLineWidth = lineWidth / 2;

        // avoid zero widths
        if (width < lineWidth) {
            width = lineWidth;
        }

        var nodeAbove = offsetY + nih < pih;
        if (nodeAbove) {
            top = nih;
            height = $parent.outerHeight() - offsetY - top;

            topToBottom = true;
        } else {
            top = pih - offsetY;
            height = $node.outerHeight() - top;

            topToBottom = false;
        }

        // fire before draw event
        this.beforeDraw(width, height, left, top);

        // determine start and end coordinates
        var startX, startY, endX, endY;
        if (leftToRight) {
            startX = 0;
            endX = width;
        } else {
            startX = width;
            endX = 0;
        }

        // calculate difference in line width to parent node
        // and position line vertically centered to parent line
        var pLineWidth = mindmaps.CanvasDrawingUtil.getLineWidth(zoomFactor,
            depth - 1);
        var diff = (pLineWidth - lineWidth) / 2;

        if (topToBottom) {
            startY = 0 + halfLineWidth;
            endY = height - halfLineWidth - diff;
        } else {
            startY = height - halfLineWidth;
            endY = 0 + halfLineWidth + diff;
        }

        // calculate bezier points
        if (!overlap) {
            var cp2x = startX > endX ? startX / 5 : endX - (endX / 5);
            var cp2y = endY;

            var cp1x = Math.abs(startX - endX) / 2;
            var cp1y = startY;
        } else {
            // node overlaps with parent

            // take left and right a bit away so line fits fully in canvas
            if (leftToRight) {
                startX += halfLineWidth;
                endX -= halfLineWidth;
            } else {
                startX -= halfLineWidth;
                endX += halfLineWidth;
            }

            // reversed bezier for overlap
            var cp1x = startX;
            var cp1y = Math.abs(startY - endY) / 2;

            var cp2x = endX;
            var cp2y = startY > endY ? startY / 5 : endY - (endY / 5);
        }

        // draw
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        ctx.stroke();

        var drawControlPoints = false;
        if (drawControlPoints) {
            // control points
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(cp1x, cp1y, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.arc(cp2x, cp2y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
    };
};

/**
 * Utility module that calculates how much space a text would take up in a node.
 * This is done through a dummy div that has the same formatting as the node and
 * gets the text injected.
 *
 */
mindmaps.TextMetrics = (function () {
    var $div = $("<div/>", {
        "class": "node-text-behaviour"
    }).css({
        position: "absolute",
        visibility: "hidden",
        height: "auto",
        width: "auto"
    }).prependTo($("body"));

    return {
        /**
         * @constant
         */
        ROOT_CAPTION_MIN_WIDTH: 100,

        /**
         * @constant
         */
        NODE_CAPTION_MIN_WIDTH: 70,

        /**
         * @constant
         */
        NODE_CAPTION_MAX_WIDTH: 150,

        /**
         * Calculates the width and height a node would have to provide to show
         * the text.
         *
         * @param {mindmaps.Node} node the node whose text is to be measured.
         * @param {mindmaps.Node} [text] use this instead of the text of node
         * @returns {Object} object with properties width and height.
         */
        getTextMetrics: function (node, zoomFactor, text) {
            zoomFactor = zoomFactor || 1;
            text = text || node.getCaption();
            var font = node.text.font;
            var minWidth = node.isRoot() ? this.ROOT_CAPTION_MIN_WIDTH
                : this.NODE_CAPTION_MIN_WIDTH;
            var maxWidth = this.NODE_CAPTION_MAX_WIDTH;

            $div.css({
                "font-size": zoomFactor * font.size,
                "min-width": zoomFactor * minWidth,
                "max-width": zoomFactor * maxWidth,
                "font-weight": font.weight
            }).text(text);

            // add some safety pixels for firefox, otherwise it doesnt render
            // right on textareas
            var w = $div.width() + 2;
            var h = $div.height() + 2;

            return {
                width: w,
                height: h
            };
        }
    };
})();
;
// TODO take container as argument,c reate drawing area dynamically. remove on
// clear();, recreate on init()

/**
 * Creates a new CanvasView. This is the base class for all canvas view
 * implementations.
 *
 * @constructor
 */
mindmaps.CanvasView = function () {
    /**
     * Returns the element that used to draw the map upon.
     *
     * @returns {jQuery}
     */
    this.$getDrawingArea = function () {
        return $("#drawing-area");
    };

    /**
     * Returns the element that contains the drawing area.
     *
     * @returns {jQuery}
     */
    this.$getContainer = function () {
        return $("#canvas-container");
    };

    /**
     * Scrolls the container to show the center of the drawing area.
     */
    this.center = function () {
        var c = this.$getContainer();
        var area = this.$getDrawingArea();
        var w = area.width() - c.width();
        var h = area.height() - c.height();
        this.scroll(w / 2, h / 2);
    };

    /**
     * Scrolls the container.
     *
     * @param {Number} x
     * @param {Number} y
     */
    this.scroll = function (x, y) {
        var c = this.$getContainer();
        c.scrollLeft(x).scrollTop(y);
    };

    /**
     * Changes the size of the drawing area to match with with the new zoom
     * factor and scrolls the container to adjust the view port.
     */
    this.applyViewZoom = function () {
        var delta = this.zoomFactorDelta;
        // console.log(delta);

        var c = this.$getContainer();
        var sl = c.scrollLeft();
        var st = c.scrollTop();

        var cw = c.width();
        var ch = c.height();
        var cx = cw / 2 + sl;
        var cy = ch / 2 + st;

        cx *= this.zoomFactorDelta;
        cy *= this.zoomFactorDelta;

        sl = cx - cw / 2;
        st = cy - ch / 2;
        // console.log(sl, st);

        var drawingArea = this.$getDrawingArea();
        var width = drawingArea.width();
        var height = drawingArea.height();
        drawingArea.width(width * delta).height(height * delta);

        // scroll only after drawing area's width was set.
        this.scroll(sl, st);

        // adjust background size
        var backgroundSize = parseFloat(drawingArea.css("background-size"));
        if (isNaN(backgroundSize)) {
            // parsing could possibly fail in the future.
            console.warn("Could not set background-size!");
        }
        drawingArea.css("background-size", backgroundSize * delta);
    };

    /**
     * Applies the new size according to current zoom factor.
     *
     * @param {Integer} width
     * @param {Integer} height
     */
    this.setDimensions = function (width, height) {
        width = width * this.zoomFactor;
        height = height * this.zoomFactor;

        var drawingArea = this.$getDrawingArea();
        drawingArea.width(width).height(height);
    };

    /**
     * Sets the new zoom factor and stores the delta to the old one.
     *
     * @param {Number} zoomFactor
     */
    this.setZoomFactor = function (zoomFactor) {
        this.zoomFactorDelta = zoomFactor / (this.zoomFactor || 1);
        this.zoomFactor = zoomFactor;
    };
};

/**
 * Should draw the mind map onto the drawing area.
 *
 * @param {mindmaps.MindMap} map
 */
mindmaps.CanvasView.prototype.drawMap = function (map) {
    throw new Error("Not implemented");
};

/**
 * Creates a new DefaultCanvasView. This is the reference implementation for
 * drawing mind maps.
 *
 * @extends mindmaps.CanvasView
 * @constructor
 */
mindmaps.DefaultCanvasView = function () {
    var self = this;
    var nodeDragging = false;
    var creator = new Creator(this);
    var captionEditor = new CaptionEditor(this);
    captionEditor.commit = function (node, text) {
        if (self.nodeCaptionEditCommitted) {
            self.nodeCaptionEditCommitted(node, text);
        }
    };

    var textMetrics = mindmaps.TextMetrics;
    var branchDrawer = new mindmaps.CanvasBranchDrawer();
    branchDrawer.beforeDraw = function (width, height, left, top) {
        this.$canvas.attr({
            width: width,
            height: height
        }).css({
            left: left,
            top: top
        });
    };

    /**
     * Enables dragging of the map with the mouse.
     */
    function makeDraggable() {
        self.$getContainer().dragscrollable({
            dragSelector: "#drawing-area, canvas.line-canvas",
            acceptPropagatedEvent: false,
            delegateMode: true,
            preventDefault: true
        });
    }

    function $getNodeCanvas(node) {
        return $("#node-canvas-" + node.id);
    }

    function $getNode(node) {
        return $("#node-" + node.id);
    }

    function $getNodeCaption(node) {
        return $("#node-caption-" + node.id);
    }

    function drawLineCanvas($canvas, depth, offsetX, offsetY, $node, $parent,
                            color) {
        var canvas = $canvas[0];
        var ctx = canvas.getContext("2d");

        // set $canvas for beforeDraw() callback.
        branchDrawer.$canvas = $canvas;
        branchDrawer.render(ctx, depth, offsetX, offsetY, $node, $parent,
            color, self.zoomFactor);
    }

    this.init = function () {
        makeDraggable();
        this.center();

        var $drawingArea = this.$getDrawingArea();
        $drawingArea.addClass("mindmap");

        // setup delegates
        $drawingArea.delegate("div.node-caption", "mousedown", function (e) {
            var node = $(this).parent().data("node");
            if (self.nodeMouseDown) {
                self.nodeMouseDown(node);
            }
        });

        $drawingArea.delegate("div.node-caption", "mouseup", function (e) {
            var node = $(this).parent().data("node");
            if (self.nodeMouseUp) {
                self.nodeMouseUp(node);
            }
        });

        $drawingArea.delegate("div.node-caption", "dblclick", function (e) {
            var node = $(this).parent().data("node");
            if (self.nodeDoubleClicked) {
                self.nodeDoubleClicked(node);
            }
        });

        $drawingArea.delegate("div.node-container", "mouseover", function (e) {
            if (e.target === this) {
                var node = $(this).data("node");
                if (self.nodeMouseOver) {
                    self.nodeMouseOver(node);
                }
            }
            return false;
        });

        $drawingArea.delegate("div.node-caption", "mouseover", function (e) {
            if (e.target === this) {
                var node = $(this).parent().data("node");
                if (self.nodeCaptionMouseOver) {
                    self.nodeCaptionMouseOver(node);
                }
            }
            return false;
        });

        // mouse wheel listener
        this.$getContainer().bind("mousewheel", function (e, delta) {
            if (self.mouseWheeled) {
                self.mouseWheeled(delta);
            }
        });
    };

    /**
     * Clears the drawing area.
     */
    this.clear = function () {
        var drawingArea = this.$getDrawingArea();
        drawingArea.children().remove();
        drawingArea.width(0).height(0);
    };

    /**
     * Calculates the width of a branch for a node for the given depth
     *
     * @param {Integer} depth the depth of the node
     * @returns {Number}
     */
    this.getLineWidth = function (depth) {
        return mindmaps.CanvasDrawingUtil.getLineWidth(this.zoomFactor, depth);
    };

    /**
     * Draws the complete map onto the drawing area. This should only be called
     * once for a mind map.
     */
    this.drawMap = function (map) {
        var now = new Date().getTime();
        var $drawingArea = this.$getDrawingArea();

        // clear map first
        $drawingArea.children().remove();

        var root = map.root;

        // 1.5. do NOT detach for now since DIV dont have widths and heights,
        // and loading maps draws wrong canvases (or create nodes and then draw
        // canvases)

        var detach = false;
        if (detach) {
            // detach drawing area during map creation to avoid unnecessary DOM
            // repaint events. (binary7 is 3 times faster)
            var $parent = $drawingArea.parent();
            $drawingArea.detach();
            self.createNode(root, $drawingArea);
            $drawingArea.appendTo($parent);
        } else {
            self.createNode(root, $drawingArea);
        }

        console.debug("draw map ms: ", new Date().getTime() - now);
    };

    /**
     * Inserts a new node including all of its children into the DOM.
     *
     * @param {mindmaps.Node} node - The model of the node.
     * @param {jQuery} [$parent] - optional jquery parent object the new node is
     *            appended to. Usually the parent node. If argument is omitted,
     *            the getParent() method of the node is called to resolve the
     *            parent.
     * @param {Integer} [depth] - Optional. The depth of the tree relative to
     *            the root. If argument is omitted the getDepth() method of the
     *            node is called to resolve the depth.
     */
    this.createNode = function (node, $parent, depth) {
        var parent = node.getParent();
        var $parent = $parent || $getNode(parent);
        var depth = depth || node.getDepth();
        var offsetX = node.offset.x;
        var offsetY = node.offset.y;

        // div node container
        var $node = $("<div/>", {
            id: "node-" + node.id,
            "class": "node-container"
        }).data({
            node: node
        }).css({
            "font-size": node.text.font.size
        });
        $node.appendTo($parent);

        if (node.isRoot()) {
            var w = this.getLineWidth(depth);
            $node.css("border-bottom-width", w);
        }

        if (!node.isRoot()) {
            // draw border and position manually only non-root nodes
            var bThickness = this.getLineWidth(depth);
            var bColor = node.branchColor;
            var bb = bThickness + "px solid " + bColor;

            $node.css({
                left: this.zoomFactor * offsetX,
                top: this.zoomFactor * offsetY,
                "border-bottom": bb
            });

            // node drag behaviour
            /**
             * Only attach the drag handler once we mouse over it. this speeds
             * up loading of big maps.
             */
            $node.one("mouseenter", function () {
                $node.draggable({
                    // could be set
                    // revert: true,
                    // revertDuration: 0,
                    handle: "div.node-caption:first",
                    start: function () {
                        nodeDragging = true;
                    },
                    drag: function (e, ui) {
                        // reposition and draw canvas while dragging
                        var offsetX = ui.position.left / self.zoomFactor;
                        var offsetY = ui.position.top / self.zoomFactor;
                        var color = node.branchColor;
                        var $canvas = $getNodeCanvas(node);

                        drawLineCanvas($canvas, depth, offsetX, offsetY, $node,
                            $parent, color);

                        // fire dragging event
                        if (self.nodeDragging) {
                            self.nodeDragging();
                        }
                    },
                    stop: function (e, ui) {
                        nodeDragging = false;
                        var pos = new mindmaps.Point(ui.position.left
                            / self.zoomFactor, ui.position.top
                            / self.zoomFactor);

                        // fire dragged event
                        if (self.nodeDragged) {
                            self.nodeDragged(node, pos);
                        }
                    }
                });
            });
        }

        // text caption
        var font = node.text.font;
        var $text = $("<div/>", {
            id: "node-caption-" + node.id,
            "class": "node-caption node-text-behaviour",
            text: node.text.caption
        }).css({
            "color": font.color,
            "font-size": this.zoomFactor * 100 + "%",
            "font-weight": font.weight,
            "font-style": font.style,
            "text-decoration": font.decoration
        }).appendTo($node);

        var metrics = textMetrics.getTextMetrics(node, this.zoomFactor);
        $text.css(metrics);

        // create fold button for parent if he hasn't one already
        var parentAlreadyHasFoldButton = $parent.data("foldButton");
        var nodeOrParentIsRoot = node.isRoot() || parent.isRoot();
        if (!parentAlreadyHasFoldButton && !nodeOrParentIsRoot) {
            this.createFoldButton(parent);
        }

        if (!node.isRoot()) {
            // toggle visibility
            if (parent.foldChildren) {
                $node.hide();
            } else {
                $node.show();
            }

            // draw canvas to parent if node is not a root
            var $canvas = $("<canvas/>", {
                id: "node-canvas-" + node.id,
                "class": "line-canvas"
            });

            // position and draw connection
            drawLineCanvas($canvas, depth, offsetX, offsetY, $node, $parent,
                node.branchColor);
            $canvas.appendTo($node);
        }

        if (node.isRoot()) {
            $node.children().andSelf().addClass("root");
        }

        // draw child nodes
        node.forEachChild(function (child) {
            self.createNode(child, $node, depth + 1);
        });
    };

    /**
     * Removes a node from the view and with it all its children and the branch
     * leading to the parent.
     *
     * @param {mindmaps.Node} node
     */
    this.deleteNode = function (node) {
        // detach creator first, we need still him
        // creator.detach();

        // delete all DOM below
        var $node = $getNode(node);
        $node.remove();
    };

    /**
     * Highlights a node to show that it is selected.
     *
     * @param {mindmaps.Node} node
     */
    this.highlightNode = function (node) {
        var $text = $getNodeCaption(node);
        $text.addClass("selected");
    };

    /**
     * Removes the hightlight of a node.
     *
     * @param {mindmaps.Node} node
     */
    this.unhighlightNode = function (node) {
        var $text = $getNodeCaption(node);
        $text.removeClass("selected");
    };

    /**
     * Hides all children of a node.
     *
     * @param {mindmaps.Node} node
     */
    this.closeNode = function (node) {
        var $node = $getNode(node);
        $node.children(".node-container").hide();

        var $foldButton = $node.children(".button-fold").first();
        $foldButton.removeClass("open").addClass("closed");
    };

    /**
     * Shows all children of a node.
     *
     * @param {mindmaps.Node} node
     */
    this.openNode = function (node) {
        var $node = $getNode(node);
        $node.children(".node-container").show();

        var $foldButton = $node.children(".button-fold").first();
        $foldButton.removeClass("closed").addClass("open");
    };

    /**
     * Creates the fold button for a node that shows/hides its children.
     *
     * @param {mindmaps.Node} node
     */
    this.createFoldButton = function (node) {
        var position = node.offset.x > 0 ? " right" : " left";
        var openClosed = node.foldChildren ? " closed" : " open";
        var $foldButton = $("<div/>", {
            "class": "button-fold no-select" + openClosed + position
        }).click(function (e) {
            // fire event
            if (self.foldButtonClicked) {
                self.foldButtonClicked(node);
            }

            e.preventDefault();
            return false;
        });

        // remember that foldButton was set and attach to node
        var $node = $getNode(node);
        $node.data({
            foldButton: true
        }).append($foldButton);
    };

    /**
     * Removes the fold button.
     *
     * @param {mindmaps.Node} node
     */
    this.removeFoldButton = function (node) {
        var $node = $getNode(node);
        $node.data({
            foldButton: false
        }).children(".button-fold").remove();
    };

    /**
     * Goes into edit mode for a node.
     *
     * @param {mindmaps.Node} node
     */
    this.editNodeCaption = function (node) {
        captionEditor.edit(node, this.$getDrawingArea());
    };

    /**
     * Stops the current edit mode.
     */
    this.stopEditNodeCaption = function () {
        captionEditor.stop();
    };

    /**
     * Updates the text caption for a node.
     *
     * @param {mindmaps.Node} node
     * @param {String} value
     */
    this.setNodeText = function (node, value) {
        var $text = $getNodeCaption(node);
        var metrics = textMetrics.getTextMetrics(node, this.zoomFactor, value);
        $text.css(metrics).text(value);
    };

    /**
     * Get a reference to the creator tool.
     *
     * @returns {Creator}
     */
    this.getCreator = function () {
        return creator;
    };

    /**
     * Returns whether a node is currently being dragged.
     *
     * @returns {Boolean}
     */
    this.isNodeDragging = function () {
        return nodeDragging;
    };

    /**
     * Redraws a node's branch to its parent.
     *
     * @param {mindmaps.Node} node
     * @param {String} optional color
     */
    function drawNodeCanvas(node, color) {
        var parent = node.getParent();
        var depth = node.getDepth();
        var offsetX = node.offset.x;
        var offsetY = node.offset.y;
        color = color || node.branchColor;

        var $node = $getNode(node);
        var $parent = $getNode(parent);
        var $canvas = $getNodeCanvas(node);

        drawLineCanvas($canvas, depth, offsetX, offsetY, $node, $parent, color);
    }

    /**
     * Redraws all branches that a node is connected to.
     *
     * @param {mindmaps.Node} node
     */
    this.redrawNodeConnectors = function (node) {

        // redraw canvas to parent
        if (!node.isRoot()) {
            drawNodeCanvas(node);
        }

        // redraw all child canvases
        if (!node.isLeaf()) {
            node.forEachChild(function (child) {
                drawNodeCanvas(child);
            });
        }
    };

    /**
     * Changes only the color of the branch leading up to it's parent.
     */
    this.updateBranchColor = function (node, color) {
        var $node = $getNode(node);
        $node.css("border-bottom-color", color);

        // redraw canvas to parent
        if (!node.isRoot()) {
            drawNodeCanvas(node, color);
        }
    };

    /**
     * Changes only the font color of a node.
     */
    this.updateFontColor = function (node, color) {
        var $text = $getNodeCaption(node);
        $text.css("color", color);
    };

    /**
     * Does a complete visual update of a node to reflect all of its attributes.
     *
     * @param {mindmaps.Node} node
     */
    this.updateNode = function (node) {
        var $node = $getNode(node);
        var $text = $getNodeCaption(node);
        var font = node.text.font;
        $node.css({
            "font-size": font.size,
            "border-bottom-color": node.branchColor
        });

        var metrics = textMetrics.getTextMetrics(node, this.zoomFactor);

        $text.css({
            "color": font.color,
            "font-weight": font.weight,
            "font-style": font.style,
            "text-decoration": font.decoration
        }).css(metrics);

        this.redrawNodeConnectors(node);
    };

    /**
     * Moves the node a new position.
     *
     * @param {mindmaps.Node} node
     */
    this.positionNode = function (node) {
        var $node = $getNode(node);
        // TODO try animate
        // position
        $node.css({
            left: this.zoomFactor * node.offset.x,
            top: this.zoomFactor * node.offset.y
        });

        // redraw canvas to parent
        drawNodeCanvas(node);
    };

    /**
     * Redraws the complete map to adapt to a new zoom factor.
     */
    this.scaleMap = function () {
        var zoomFactor = this.zoomFactor;
        var $root = this.$getDrawingArea().children().first();
        var root = $root.data("node");

        var w = this.getLineWidth(0);
        $root.css("border-bottom-width", w);

        // handle root differently
        var $text = $getNodeCaption(root);
        var metrics = textMetrics.getTextMetrics(root, this.zoomFactor);
        $text.css(
            {
                "font-size": zoomFactor * 100 + "%",
                "left": zoomFactor
                * -mindmaps.TextMetrics.ROOT_CAPTION_MIN_WIDTH / 2
            }).css(metrics);

        root.forEachChild(function (child) {
            scale(child, 1);
        });

        function scale(node, depth) {
            var $node = $getNode(node);

            // draw border and position manually
            var bWidth = self.getLineWidth(depth);

            $node.css({
                left: zoomFactor * node.offset.x,
                top: zoomFactor * node.offset.y,
                "border-bottom-width": bWidth
            });

            var $text = $getNodeCaption(node);
            $text.css({
                "font-size": zoomFactor * 100 + "%"
            });

            var metrics = textMetrics.getTextMetrics(node, self.zoomFactor);
            $text.css(metrics);

            // redraw canvas to parent
            drawNodeCanvas(node);

            // redraw all child canvases
            if (!node.isLeaf()) {
                node.forEachChild(function (child) {
                    scale(child, depth + 1);
                });
            }
        }
    };

    /**
     * Creates a new CaptionEditor. This tool offers an inline editor component
     * to change a node's caption.
     *
     * @constructor
     * @param {mindmaps.CanvasView} view
     */
    function CaptionEditor(view) {
        var self = this;
        var attached = false;

        // text input for node edits.
        var $editor = $("<textarea/>", {
            id: "caption-editor",
            "class": "node-text-behaviour"
        }).bind("keydown", "esc", function () {
            self.stop();
        }).bind("keydown", "return", function () {
            commitText();
        }).mousedown(function (e) {
            // avoid premature canceling
            e.stopPropagation();
        }).blur(function () {
            commitText();
        }).bind(
            "input",
            function () {
                var metrics = textMetrics.getTextMetrics(self.node,
                    view.zoomFactor, $editor.val());
                $editor.css(metrics);
                alignBranches();
            });

        function commitText() {
            if (attached && self.commit) {
                self.commit(self.node, $editor.val());
            }
        }

        function alignBranches() {
            // slightly defer execution for better performance on slow
            // browsers
            setTimeout(function () {
                view.redrawNodeConnectors(self.node);
            }, 1);
        }

        /**
         * Attaches the textarea to the node and temporarily removes the
         * original node caption.
         *
         * @param {mindmaps.Node} node
         * @param {jQuery} $cancelArea
         */
        this.edit = function (node, $cancelArea) {
            if (attached) {
                return;
            }
            this.node = node;
            attached = true;

            // TODO put text into span and hide()
            this.$text = $getNodeCaption(node);
            this.$cancelArea = $cancelArea;

            this.text = this.$text.text();

            this.$text.css({
                width: "auto",
                height: "auto"
            }).empty().addClass("edit");

            // jquery ui prevents blur() event from happening when dragging a
            // draggable. need this
            // workaround to detect click on other draggable
            $cancelArea.bind("mousedown.editNodeCaption", function (e) {
                commitText();
            });

            var metrics = textMetrics.getTextMetrics(self.node,
                view.zoomFactor, this.text);
            $editor.attr({
                value: this.text
            }).css(metrics).appendTo(this.$text).select();

        };

        /**
         * Removes the editor from the node and restores its old text value.
         */
        this.stop = function () {
            if (attached) {
                attached = false;
                this.$text.removeClass("edit");
                $editor.detach();
                this.$cancelArea.unbind("mousedown.editNodeCaption");
                view.setNodeText(this.node, this.text);

                alignBranches();
            }
        };
    }

    /**
     * Creates a new Creator. This tool is used to drag out new branches to
     * create new nodes.
     *
     * @constructor
     * @param {mindmaps.CanvasView} view
     * @returns {Creator}
     */
    function Creator(view) {
        var self = this;
        var dragging = false;

        this.node = null;
        this.lineColor = null;

        var $wrapper = $("<div/>", {
            id: "creator-wrapper"
        }).bind("remove", function (e) {
            // detach the creator when some removed the node or opened a new map
            self.detach();
            // and avoid removing from DOM
            e.stopImmediatePropagation();

            console.debug("creator detached.");
            return false;
        });

        // red dot creator element
        var $nub = $("<div/>", {
            id: "creator-nub"
        }).appendTo($wrapper);

        var $fakeNode = $("<div/>", {
            id: "creator-fakenode"
        }).appendTo($nub);

        // canvas used by the creator tool to draw new lines
        var $canvas = $("<canvas/>", {
            id: "creator-canvas",
            "class": "line-canvas"
        }).hide().appendTo($wrapper);

        // make it draggable
        $wrapper.draggable({
            revert: true,
            revertDuration: 0,
            start: function () {
                dragging = true;
                // show creator canvas
                $canvas.show();
                if (self.dragStarted) {
                    self.lineColor = self.dragStarted(self.node);
                }
            },
            drag: function (e, ui) {
                // update creator canvas
                var offsetX = ui.position.left / view.zoomFactor;
                var offsetY = ui.position.top / view.zoomFactor;

                // set depth+1 because we are drawing the canvas for the child
                var $node = $getNode(self.node);
                drawLineCanvas($canvas, self.depth + 1, offsetX, offsetY,
                    $fakeNode, $node, self.lineColor);
            },
            stop: function (e, ui) {
                dragging = false;
                // remove creator canvas, gets replaced by real canvas
                $canvas.hide();
                if (self.dragStopped) {
                    var $wp = $wrapper.position();
                    var $wpLeft = $wp.left / view.zoomFactor;
                    var $wpTop = $wp.top / view.zoomFactor;
                    var nubLeft = ui.position.left / view.zoomFactor;
                    var nubTop = ui.position.top / view.zoomFactor;

                    var distance = mindmaps.Util.distance($wpLeft - nubLeft,
                        $wpTop - nubTop);
                    self.dragStopped(self.node, nubLeft, nubTop, distance);
                }

                // remove any positioning that the draggable might have caused
                $wrapper.css({
                    left: "",
                    top: ""
                });
            }
        });

        /**
         * Attaches the tool to a node.
         *
         * @param {mindmaps.Node} node
         */
        this.attachToNode = function (node) {
            if (this.node === node) {
                return;
            }
            this.node = node;

            // position the nub correctly
            $wrapper.removeClass("left right");
            if (node.offset.x > 0) {
                $wrapper.addClass("right");
            } else if (node.offset.x < 0) {
                $wrapper.addClass("left");
            }

            // set border on our fake node for correct line drawing
            this.depth = node.getDepth();
            var w = view.getLineWidth(this.depth + 1);
            $fakeNode.css("border-bottom-width", w);

            var $node = $getNode(node);
            $wrapper.appendTo($node);
        };

        /**
         * Removes the tool from the current node.
         */
        this.detach = function () {
            $wrapper.detach();
            this.node = null;
        };

        /**
         * Returns whether the tool is currently in use being dragged.
         *
         * @returns {Boolean}
         */
        this.isDragging = function () {
            return dragging;
        };
    }
};

// inherit from base canvas view
mindmaps.DefaultCanvasView.prototype = new mindmaps.CanvasView();
;
/**
 * Creates a new CanvasPresenter. The canvas presenter is responsible for drawing the mind map onto a
 * canvas view and reacting to user input on the map (e.g. dragging a node, double clicking it etc.)
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.CommandRegistry} commandRegistry
 * @param {mindmaps.MindMapModel} mindmapModel
 * @param {mindmaps.CanvasView} view
 * @param {mindmaps.ZoomController} zoomController
 */
mindmaps.CanvasPresenter = function (eventBus, commandRegistry, mindmapModel,
                                     view, zoomController) {
    var self = this;
    var creator = view.getCreator();

    /**
     * Initializes this presenter.
     */
    this.init = function () {
        var editCaptionCommand = commandRegistry
            .get(mindmaps.EditNodeCaptionCommand);
        editCaptionCommand.setHandler(this.editNodeCaption.bind(this));

        var toggleNodeFoldedCommand = commandRegistry
            .get(mindmaps.ToggleNodeFoldedCommand);
        toggleNodeFoldedCommand.setHandler(toggleFold);
    };

    /**
     * Handles the edit caption command. Tells view to start edit mode for node.
     *
     * @param {mindmaps.Node} node
     */
    this.editNodeCaption = function (node) {
        if (!node) {
            node = mindmapModel.selectedNode;
        }
        view.editNodeCaption(node);
    };

    /**
     * Toggles the fold state of a node.
     *
     * @param {mindmaps.Node} node
     */
    var toggleFold = function (node) {
        if (!node) {
            node = mindmapModel.selectedNode;
        }

        // toggle node visibility
        var action = new mindmaps.action.ToggleNodeFoldAction(node);
        mindmapModel.executeAction(action);
    };

    /**
     * Tells the view to select a node.
     *
     * @param {mindmaps.Node} selectedNode
     * @param {mindmaps.Node} oldSelectedNode
     */
    var selectNode = function (selectedNode, oldSelectedNode) {

        // deselect old node
        if (oldSelectedNode) {
            view.unhighlightNode(oldSelectedNode);
        }
        view.highlightNode(selectedNode);
    };

    // listen to events from view
    /**
     * View callback: Zoom on mouse wheel.
     *
     * @ignore
     */
    view.mouseWheeled = function (delta) {
        view.stopEditNodeCaption();

        if (delta > 0) {
            zoomController.zoomIn();
        } else {
            zoomController.zoomOut();
        }
    };

    /**
     * View callback: Attach creator to node if mouse hovers over node.
     *
     * @ignore
     */
    view.nodeMouseOver = function (node) {
        if (view.isNodeDragging() || creator.isDragging()) {
            // dont relocate the creator if we are dragging
        } else {
            creator.attachToNode(node);
        }
    };

    /**
     * View callback: Attach creator to node if mouse hovers over node caption.
     *
     * @ignore
     */
    view.nodeCaptionMouseOver = function (node) {
        if (view.isNodeDragging() || creator.isDragging()) {
            // dont relocate the creator if we are dragging
        } else {
            creator.attachToNode(node);
        }
    };

    /**
     * View callback: Select node if mouse was pressed.
     *
     * @ignore
     */
    view.nodeMouseDown = function (node) {
        mindmapModel.selectNode(node);
        // show creator
        creator.attachToNode(node);
    };

    // view.nodeMouseUp = function(node) {
    // };

    /**
     * View callback: Go into edit mode when node was double clicked.
     *
     * @ignore
     */
    view.nodeDoubleClicked = function (node) {
        view.editNodeCaption(node);
    };

    // view.nodeDragging = function() {
    // };

    /**
     * View callback: Execute MoveNodeAction when node was dragged.
     *
     * @ignore
     */
    view.nodeDragged = function (node, offset) {
        // view has updated itself

        // update model
        var action = new mindmaps.action.MoveNodeAction(node, offset);
        mindmapModel.executeAction(action);
    };

    /**
     * View callback: Toggle fold mode when fold button was clicked.
     *
     * @ignore
     */
    view.foldButtonClicked = function (node) {
        toggleFold(node);
    };

    // CREATOR TOOL
    /**
     * View callback: Return new random color to view when creator tool was
     * started to drag.
     *
     * @ignore
     */
    creator.dragStarted = function (node) {
        // set edge color for new node. inherit from parent or random when root
        var color = node.isRoot() ? mindmaps.Util.randomColor()
            : node.branchColor;
        return color;
    };

    /**
     * View callback: Create a new node when creator tool was stopped.
     *
     * @ignore
     */
    creator.dragStopped = function (parent, offsetX, offsetY, distance) {
        // disregard if the creator was only dragged a bit
        if (distance < 50) {
            return;
        }

        // update the model
        var node = new mindmaps.Node();
        node.branchColor = creator.lineColor;
        node.offset = new mindmaps.Point(offsetX, offsetY);
        // indicate that we want to set this nodes caption after creation
        node.shouldEditCaption = true;

        mindmapModel.createNode(node, parent);
    };

    /**
     * View callback: Change node caption when text change was committed in
     * view.
     *
     * @ignore
     * @param {mindmaps.Node} node
     * @param {String} str
     */
    view.nodeCaptionEditCommitted = function (node, str) {
        // avoid whitespace only strings
        var str = $.trim(str);
        if (!str) {
            return;
        }

        view.stopEditNodeCaption();
        mindmapModel.changeNodeCaption(node, str);
    };

    this.go = function () {
        view.init();
    };

    /**
     * Draw the mind map on the canvas.
     *
     * @param {mindmaps.Document} doc
     */
    function showMindMap(doc) {
        view.setZoomFactor(zoomController.DEFAULT_ZOOM);
        var dimensions = doc.dimensions;
        view.setDimensions(dimensions.x, dimensions.y);
        var map = doc.mindmap;
        view.drawMap(map);
        view.center();

        mindmapModel.selectNode(map.root);
    }

    /**
     * Hook up with EventBus.
     */
    function bind() {
        // listen to global events
        eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, function (doc,
                                                                     newDocument) {
            showMindMap(doc);

            // if (doc.isNew()) {
            // // edit root node on start
            // var root = doc.mindmap.root;
            // view.editNodeCaption(root);
            // }
        });

        eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, function (doc) {
            view.clear();
        });

        eventBus.subscribe(mindmaps.Event.NODE_MOVED, function (node) {
            view.positionNode(node);
        });

        eventBus.subscribe(mindmaps.Event.NODE_TEXT_CAPTION_CHANGED, function (node) {
            view.setNodeText(node, node.getCaption());

            // redraw node in case height has changed
            // TODO maybe only redraw if height has changed
            view.redrawNodeConnectors(node);
        });

        eventBus.subscribe(mindmaps.Event.NODE_CREATED, function (node) {
            view.createNode(node);

            // edit node caption immediately if requested
            if (node.shouldEditCaption) {
                delete node.shouldEditCaption;
                // open parent node when creating a new child and the other
                // children are hidden
                var parent = node.getParent();
                if (parent.foldChildren) {
                    var action = new mindmaps.action.OpenNodeAction(parent);
                    mindmapModel.executeAction(action);
                }

                // select and go into edit mode on new node
                mindmapModel.selectNode(node);
                // attach creator manually, sometimes the mouseover listener wont fire
                creator.attachToNode(node);
                view.editNodeCaption(node);
            }
        });

        eventBus.subscribe(mindmaps.Event.NODE_DELETED, function (node, parent) {
            // select parent if we are deleting a selected node or a descendant
            var selected = mindmapModel.selectedNode;
            if (node === selected || node.isDescendant(selected)) {
                // deselectCurrentNode();
                mindmapModel.selectNode(parent);
            }

            // update view
            view.deleteNode(node);
            if (parent.isLeaf()) {
                view.removeFoldButton(parent);
            }
        });

        eventBus.subscribe(mindmaps.Event.NODE_SELECTED, selectNode);

        eventBus.subscribe(mindmaps.Event.NODE_OPENED, function (node) {
            view.openNode(node);
        });

        eventBus.subscribe(mindmaps.Event.NODE_CLOSED, function (node) {
            view.closeNode(node);
        });

        eventBus.subscribe(mindmaps.Event.NODE_FONT_CHANGED, function (node) {
            view.updateNode(node);
        });

        eventBus.subscribe(mindmaps.Event.NODE_FONT_COLOR_PREVIEW, function (node, color) {
            view.updateFontColor(node, color);
        });

        eventBus.subscribe(mindmaps.Event.NODE_BRANCH_COLOR_CHANGED, function (node) {
            view.updateNode(node);
        });

        eventBus.subscribe(mindmaps.Event.NODE_BRANCH_COLOR_PREVIEW, function (node, color) {
            view.updateBranchColor(node, color)
        });

        eventBus.subscribe(mindmaps.Event.ZOOM_CHANGED, function (zoomFactor) {
            view.setZoomFactor(zoomFactor);
            view.applyViewZoom();
            view.scaleMap();
        });
    }

    bind();
    this.init();
};
;
/**
 * Creates a new Application Controller.
 *
 * @constructor
 */
mindmaps.ApplicationController = function () {
    var eventBus = new mindmaps.EventBus();
    var shortcutController = new mindmaps.ShortcutController();
    var commandRegistry = new mindmaps.CommandRegistry(shortcutController);
    var undoController = new mindmaps.UndoController(eventBus, commandRegistry);
    var mindmapModel = new mindmaps.MindMapModel(eventBus, commandRegistry, undoController);
    var clipboardController = new mindmaps.ClipboardController(eventBus,
        commandRegistry, mindmapModel);
    var helpController = new mindmaps.HelpController(eventBus, commandRegistry);
    var printController = new mindmaps.PrintController(eventBus,
        commandRegistry, mindmapModel);
    var autosaveController = new mindmaps.AutoSaveController(eventBus, mindmapModel);
    var filePicker = new mindmaps.FilePicker(eventBus, mindmapModel);

    /**
     * Handles the new document command.
     */
    function doNewDocument() {
        // close old document first
        var doc = mindmapModel.getDocument();
        doCloseDocument();

        var presenter = new mindmaps.NewDocumentPresenter(eventBus,
            mindmapModel, new mindmaps.NewDocumentView());
        presenter.go();
    }

    /**
     * Handles the save document command.
     */
    function doSaveDocument() {
        var presenter = new mindmaps.SaveDocumentPresenter(eventBus,
            mindmapModel, new mindmaps.SaveDocumentView(), autosaveController, filePicker);
        presenter.go();
    }

    /**
     * Handles the close document command.
     */
    function doCloseDocument() {
        var doc = mindmapModel.getDocument();
        if (doc) {
            // TODO for now simply publish events, should be intercepted by
            // someone
            mindmapModel.setDocument(null);
        }
    }

    /**
     * Handles the open document command.
     */
    function doOpenDocument() {
        var presenter = new mindmaps.OpenDocumentPresenter(eventBus,
            mindmapModel, new mindmaps.OpenDocumentView(), filePicker);
        presenter.go();
    }

    function doExportDocument() {
        var presenter = new mindmaps.ExportMapPresenter(eventBus,
            mindmapModel, new mindmaps.ExportMapView());
        presenter.go();
    }

    /**
     * Initializes the controller, registers for all commands and subscribes to
     * event bus.
     */
    this.init = function () {
        var newDocumentCommand = commandRegistry
            .get(mindmaps.NewDocumentCommand);
        newDocumentCommand.setHandler(doNewDocument);
        newDocumentCommand.setEnabled(true);

        var openDocumentCommand = commandRegistry
            .get(mindmaps.OpenDocumentCommand);
        openDocumentCommand.setHandler(doOpenDocument);
        openDocumentCommand.setEnabled(true);

        var saveDocumentCommand = commandRegistry
            .get(mindmaps.SaveDocumentCommand);
        saveDocumentCommand.setHandler(doSaveDocument);

        var closeDocumentCommand = commandRegistry
            .get(mindmaps.CloseDocumentCommand);
        closeDocumentCommand.setHandler(doCloseDocument);

        var exportCommand = commandRegistry.get(mindmaps.ExportCommand);
        exportCommand.setHandler(doExportDocument);

        eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, function () {
            saveDocumentCommand.setEnabled(false);
            closeDocumentCommand.setEnabled(false);
            exportCommand.setEnabled(false);
        });

        eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, function () {
            saveDocumentCommand.setEnabled(true);
            closeDocumentCommand.setEnabled(true);
            exportCommand.setEnabled(true);
        });
    };

    /**
     * Launches the main view controller.
     */
    this.go = function () {
        var viewController = new mindmaps.MainViewController(eventBus,
            mindmapModel, commandRegistry);
        viewController.go();

        doNewDocument();
    };

    this.init();
};
;
/**
 * <pre>
 * Creates a new MindMapModel.
 *
 * This object represents the underlying mind map model and provides access
 * to the document, the mind map and the currently selected node.
 *
 * All changes to the mind map pass through this object, either through calling
 * methods directly or using the executeAction() method to perform NodeActions.
 * </pre>
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.CommandRegistry} commandRegistry
 */
mindmaps.MindMapModel = function (eventBus, commandRegistry, undoController) {
    var self = this;
    this.document = null;
    this.selectedNode = null;

    /**
     * Gets the current document.
     *
     * @returns {mindmaps.Document} the current document.
     */
    this.getDocument = function () {
        return this.document;
    };

    /**
     * Sets the current document and will publish a DOCUMENT_OPENED or
     * DOCUMENT_CLOSED event.
     *
     * @param {mindmaps.Document} doc or pass null to close the document
     */
    this.setDocument = function (doc) {
        this.document = doc;
        if (doc) {
            eventBus.publish(mindmaps.Event.DOCUMENT_OPENED, doc);
        } else {
            eventBus.publish(mindmaps.Event.DOCUMENT_CLOSED);
        }
    };

    /**
     * Gets the current mind map associated with the document.
     *
     * @returns {mindmaps.MindMap} the mind map or null
     */
    this.getMindMap = function () {
        if (this.document) {
            return this.document.mindmap;
        }
        return null;
    };

    /**
     * Initialise.
     *
     * @private
     */
    this.init = function () {
        var createNodeCommand = commandRegistry.get(mindmaps.CreateNodeCommand);
        createNodeCommand.setHandler(this.createNode.bind(this));

        var createSiblingNodeCommand = commandRegistry
            .get(mindmaps.CreateSiblingNodeCommand);
        createSiblingNodeCommand.setHandler(this.createSiblingNode.bind(this));

        var deleteNodeCommand = commandRegistry.get(mindmaps.DeleteNodeCommand);
        deleteNodeCommand.setHandler(this.deleteNode.bind(this));

        eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, function () {
            createNodeCommand.setEnabled(false);
            createSiblingNodeCommand.setEnabled(false);
            deleteNodeCommand.setEnabled(false);
        });

        eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, function () {
            createNodeCommand.setEnabled(true);
            createSiblingNodeCommand.setEnabled(true);
            deleteNodeCommand.setEnabled(true);
        });
    };

    /**
     * Deletes a node or the currently selected one if no argument is passed.
     *
     * @param {mindmaps.Node} [node] defaults to currently selected.
     */
    this.deleteNode = function (node) {
        if (!node) {
            node = this.selectedNode;
        }
        var map = this.getMindMap();
        var action = new mindmaps.action.DeleteNodeAction(node, map);
        this.executeAction(action);
    };

    /**
     * Attaches a new node the mind map. If invoked without arguments, it will
     * add a new child to the selected node with an automatically generated
     * position.
     *
     * @param {mindmaps.Node} node the new node
     * @param {mindmaps.Node} parent
     */
    this.createNode = function (node, parent) {
        var map = this.getMindMap();
        if (!(node && parent)) {
            parent = this.selectedNode;
            var action = new mindmaps.action.CreateAutoPositionedNodeAction(
                parent, map);
        } else {
            var action = new mindmaps.action.CreateNodeAction(node, parent, map);
        }

        this.executeAction(action);
    };

    /**
     * Creates a new auto positioned node as a sibling to the current selected
     * node.
     */
    this.createSiblingNode = function () {
        var map = this.getMindMap();
        var selected = this.selectedNode;
        var parent = selected.getParent();

        // root nodes dont have a parent
        if (parent === null) {
            return;
        }

        var action = new mindmaps.action.CreateAutoPositionedNodeAction(parent,
            map);
        this.executeAction(action);
    };

    /**
     * Sets the node as the currently selected.
     *
     * @param {mindmaps.Node} node
     */
    this.selectNode = function (node) {
        if (node === this.selectedNode) {
            return;
        }

        var oldSelected = this.selectedNode;
        this.selectedNode = node;
        eventBus.publish(mindmaps.Event.NODE_SELECTED, node, oldSelected);
    };

    /**
     * Changes the caption for the passed node or for the selected one if node
     * is null.
     *
     * @param {mindmaps.Node} node
     * @param {String} caption
     */
    this.changeNodeCaption = function (node, caption) {
        if (!node) {
            node = this.selectedNode;
        }

        var action = new mindmaps.action.ChangeNodeCaptionAction(node, caption);
        this.executeAction(action);
    };

    /**
     * Executes a node action. An executed action might raise an event over the
     * event bus and cause an undo event to be emitted via
     * MindMapModel#undoAction.
     *
     * @param {mindmaps.Action} action
     */
    this.executeAction = function (action) {
        // a composite action consists of multiple actions which are
        // processed individually.
        if (action instanceof mindmaps.action.CompositeAction) {
            var execute = this.executeAction.bind(this);
            action.forEachAction(execute);
            return;
        }

        var executed = action.execute();

        // cancel action if false was returned
        if (executed !== undefined && !executed) {
            return false;
        }

        // publish event
        if (action.event) {
            if (!Array.isArray(action.event)) {
                action.event = [action.event];
            }
            eventBus.publish.apply(eventBus, action.event);
        }

        // register undo function if available
        if (action.undo) {
            var undoFunc = function () {
                self.executeAction(action.undo());
            };

            // register redo function
            if (action.redo) {
                var redoFunc = function () {
                    self.executeAction(action.redo());
                };
            }

            undoController.addUndo(undoFunc, redoFunc);
        }
    };

    /**
     * Saves a document to the localstorage and publishes DOCUMENT_SAVED event on success.
     *
     * @returns {Boolean} whether the save was successful.
     */
    this.saveToLocalStorage = function () {
        var doc = this.document.prepareSave();
        var success = mindmaps.LocalDocumentStorage.saveDocument(doc);
        if (success) {
            eventBus.publish(mindmaps.Event.DOCUMENT_SAVED, doc);
        }

        return success;
    }

    this.init();
};
;
/**
 * Unused for now.
 *
 * @constructor
 */
mindmaps.NewDocumentView = function () {

};

/**
 * Creates a new NewDocumentPresenter. This presenter has no view associated
 * with it for now. It simply creates a new document. It could in the future
 * display a dialog where the user could chose options like document title and
 * such.
 *
 * @constructor
 */
mindmaps.NewDocumentPresenter = function (eventBus, mindmapModel, view) {

    this.go = function () {
        var doc = new mindmaps.Document();
        mindmapModel.setDocument(doc);
    };
};
;
/**
 * Creates a new OpenDocumentView. This view shows a dialog from which the user
 * can select a mind map from the local storage or a hard disk.
 *
 * @constructor
 */
mindmaps.OpenDocumentView = function () {
    var self = this;

    // create dialog
    var $dialog = $("#template-open").tmpl().dialog({
        autoOpen: false,
        modal: true,
        zIndex: 5000,
        width: 550,
        close: function () {
            $(this).dialog("destroy");
            $(this).remove();
        }
    });

    var $openCloudButton = $("#button-open-cloud").button().click(function () {
        if (self.openCloudButtonClicked) {
            self.openCloudButtonClicked();
        }
    });

    $dialog.find(".file-chooser input").bind("change", function (e) {
        if (self.openExernalFileClicked) {
            self.openExernalFileClicked(e);
        }
    });

    var $table = $dialog.find(".localstorage-filelist");
    $table.delegate("a.title", "click", function () {
        if (self.documentClicked) {
            var t = $(this).tmplItem();
            self.documentClicked(t.data);
        }
    }).delegate("a.delete", "click", function () {
        if (self.deleteDocumentClicked) {
            var t = $(this).tmplItem();
            self.deleteDocumentClicked(t.data);
        }
    });

    /**
     * Render list of documents in the local storage
     *
     * @param {mindmaps.Document[]} docs
     */
    this.render = function (docs) {
        // empty list and insert list of documents
        var $list = $(".document-list", $dialog).empty();

        $("#template-open-table-item").tmpl(docs, {
            format: function (date) {
                if (!date) return "";

                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return day + "/" + month + "/" + year;
            }
        }).appendTo($list);
    };

    /**
     * Shows the dialog.
     *
     * @param {mindmaps.Document[]} docs
     */
    this.showOpenDialog = function (docs) {
        this.render(docs);
        $dialog.dialog("open");
    };

    /**
     * Hides the dialog.
     */
    this.hideOpenDialog = function () {
        $dialog.dialog("close");
    };

    this.showCloudError = function (msg) {
        $dialog.find('.cloud-loading').removeClass('loading');
        $dialog.find('.cloud-error').text(msg);
    };

    this.showCloudLoading = function () {
        $dialog.find('.cloud-error').text('');
        $dialog.find('.cloud-loading').addClass('loading');
    };

    this.hideCloudLoading = function () {
        $dialog.find('.cloud-loading').removeClass('loading');
    };
};

/**
 * Creates a new OpenDocumentPresenter. The presenter can load documents from
 * the local storage or hard disk.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.MindMapModel} mindmapModel
 * @param {mindmaps.OpenDocumentView} view
 * @param {mindmaps.FilePicker} filePicker
 */
mindmaps.OpenDocumentPresenter = function (eventBus, mindmapModel, view, filePicker) {

    /**
     * Open file via cloud
     */
    view.openCloudButtonClicked = function (e) {
        mindmaps.Util.trackEvent("Clicks", "cloud-open");

        filePicker.open({
            load: function () {
                view.showCloudLoading();
            },
            success: function () {
                view.hideOpenDialog();
            },
            error: function (msg) {
                view.showCloudError(msg);
            }
        });
    };

    // http://www.w3.org/TR/FileAPI/#dfn-filereader
    /**
     * View callback: external file has been selected. Try to read and parse a
     * valid mindmaps Document.
     *
     * @ignore
     */
    view.openExernalFileClicked = function (e) {
        mindmaps.Util.trackEvent("Clicks", "hdd-open");

        var files = e.target.files;
        var file = files[0];

        var reader = new FileReader();
        reader.onload = function () {
            try {
                var doc = mindmaps.Document.fromJSON(reader.result);
            } catch (e) {
                eventBus.publish(mindmaps.Event.NOTIFICATION_ERROR, 'File is not a valid mind map!');
                throw new Error('Error while opening map from hdd', e);
            }
            mindmapModel.setDocument(doc);
            view.hideOpenDialog();
        };

        reader.readAsText(file);
    };

    /**
     * View callback: A document in the local storage list has been clicked.
     * Load the document and close view.
     *
     * @ignore
     * @param {mindmaps.Document} doc
     */
    view.documentClicked = function (doc) {
        mindmaps.Util.trackEvent("Clicks", "localstorage-open");

        mindmapModel.setDocument(doc);
        view.hideOpenDialog();
    };

    /**
     * View callback: The delete link the local storage list has been clicked.
     * Delete the document, and render list again.
     *
     * @ignore
     * @param {mindmaps.Document} doc
     */
    view.deleteDocumentClicked = function (doc) {
        // TODO event
        mindmaps.LocalDocumentStorage.deleteDocument(doc);

        // re-render view
        var docs = mindmaps.LocalDocumentStorage.getDocuments();
        view.render(docs);
    };

    /**
     * Initialize.
     */
    this.go = function () {
        var docs = mindmaps.LocalDocumentStorage.getDocuments();
        docs.sort(mindmaps.Document.sortByModifiedDateDescending);
        view.showOpenDialog(docs);
    };
};
;
/**
 * Creates a new SaveDocumentView. This view renders a dialog where the user can
 * save the mind map.
 *
 * @constructor
 */
mindmaps.SaveDocumentView = function () {
    var self = this;

    var $dialog = $("#template-save").tmpl().dialog({
        autoOpen: false,
        modal: true,
        zIndex: 5000,
        width: 550,
        close: function () {
            // remove dialog from DOM
            $(this).dialog("destroy");
            $(this).remove();
        }
    });

    //@TODO: remove this awful fix
    // I'm really sorry for this awful and ugly hotfix
    $dialog.splice(1, 1);

    var $saveCloudStorageButton = $("#button-save-cloudstorage").button().click(
        function () {
            if (self.cloudStorageButtonClicked) {
                self.cloudStorageButtonClicked();
            }
        });

    var $localSorageButton = $("#button-save-localstorage").button().click(
        function () {
            if (self.localStorageButtonClicked) {
                self.localStorageButtonClicked();
            }
        });

    var $autoSaveCheckbox = $("#checkbox-autosave-localstorage").click(
        function () {
            if (self.autoSaveCheckboxClicked) {
                self.autoSaveCheckboxClicked($(this).prop("checked"));
            }
        });

    var $hddSaveButton = $("#button-save-hdd").button().click(
        function () {
            var filename = self.fileNameRequested();
            var content = self.fileContentsRequested();
            var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
            saveAs(blob, filename);
        });

    this.setAutoSaveCheckboxState = function (checked) {
        $autoSaveCheckbox.prop("checked", checked);
    }

    this.showSaveDialog = function () {
        $dialog.dialog("open");
    };

    this.hideSaveDialog = function () {
        $dialog.dialog("close");
    };

    this.showCloudError = function (msg) {
        $dialog.find('.cloud-error').text(msg);
    }
};

/**
 * Creates a new SaveDocumentPresenter. The presenter can store documents in the
 * local storage or to a hard disk.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.MindMapModel} mindmapModel
 * @param {mindmaps.SaveDocumentView} view
 * @param {mindmaps.AutoSaveController} autosaveController
 * @param {mindmaps.FilePicker} filePicker
 */
mindmaps.SaveDocumentPresenter = function (eventBus, mindmapModel, view, autosaveController, filePicker) {

    /**
     * Save in cloud button was clicked.
     */
    view.cloudStorageButtonClicked = function () {
        mindmaps.Util.trackEvent("Clicks", "cloud-save");

        filePicker.save({
            success: function () {
                view.hideSaveDialog();
            },
            error: function (msg) {
                view.showCloudError(msg);
            }
        });
    };

    /**
     * View callback when local storage button was clicked. Saves the document
     * in the local storage.
     *
     * @ignore
     */
    view.localStorageButtonClicked = function () {
        mindmaps.Util.trackEvent("Clicks", "localstorage-save");

        var success = mindmapModel.saveToLocalStorage();
        if (success) {
            view.hideSaveDialog();
        } else {
            eventBus.publish(mindmaps.Event.NOTIFICATION_ERROR, "Error while saving to local storage");
        }
    };


    /**
     * View callback: Enables or disables the autosave function for localstorage.
     *
     * @ignore
     */
    view.autoSaveCheckboxClicked = function (checked) {
        if (checked) {
            autosaveController.enable();
        } else {
            autosaveController.disable();
        }
    }

    /**
     * View callback: Returns the filename for the document for saving on hard
     * drive.
     *
     * @ignore
     * @returns {String}
     */
    view.fileNameRequested = function () {
        mindmaps.Util.trackEvent("Clicks", "hdd-save");

        return mindmapModel.getMindMap().getRoot().getCaption() + ".json";
    };

    /**
     * View callback: Returns the serialized document.
     *
     * @ignore
     * @returns {String}
     */
    view.fileContentsRequested = function () {
        return mindmapModel.getDocument().prepareSave().serialize();
    };

    /**
     * View callback: Saving to the hard drive was sucessful.
     *
     * @ignore
     */
    view.saveToHddComplete = function () {
        var doc = mindmapModel.getDocument();
        eventBus.publish(mindmaps.Event.DOCUMENT_SAVED, doc);
        view.hideSaveDialog();
    };

    this.go = function () {
        view.setAutoSaveCheckboxState(autosaveController.isEnabled());
        view.showSaveDialog();
    };
};
;
/**
 * The canvas container is the area in between the toolbar and the statusbar.
 * Inside the mind map will be drawn and the floating panels are contained
 * within this area.
 *
 * @constructor
 */
mindmaps.CanvasContainer = function () {
    var self = this;
    var $content = $("#canvas-container");

    /**
     * @returns {jQuery}
     */
    this.getContent = function () {
        return $content;
    };

    /**
     * Sets the height of the canvas to fit between header and footer.
     */
    this.setSize = function () {
        var windowHeight = $(window).height();
        var headerHeight = $("#topbar").outerHeight(true);
        var footerHeight = $("#bottombar").outerHeight(true);
        var height = windowHeight - headerHeight - footerHeight;
        $content.height(height);

        var size = new mindmaps.Point($content.width(), height);
        self.publish(mindmaps.CanvasContainer.Event.RESIZED, size);
    };

    /**
     * Set up the container to accept drag and drop of files from the desktop.
     */
    this.acceptFileDrop = function () {

        function ignore(e) {
            e.originalEvent.stopPropagation();
            e.originalEvent.preventDefault();
        }

        function handleDragOver(e) {
            ignore(e);
        }

        function handleDrop(e) {
            ignore(e);

            var files = e.originalEvent.dataTransfer.files;
            var file = files[0];

            var reader = new FileReader();
            reader.onload = function () {
                self.receivedFileDrop(reader.result);
            };
            reader.readAsText(file);
        }

        $content.bind('dragover', handleDragOver);
        $content.bind('drop', handleDrop);
    };

    this.init = function () {
        // recalculate size when window is resized.
        $(window).resize(function () {
            self.setSize();
        });

        this.setSize();
        this.acceptFileDrop();
    };

    /**
     * Callback for when a file was dropped onto the container.
     *
     * @event
     * @param {String} result
     */
    this.receivedFileDrop = function (result) {
    };

};
EventEmitter.mixin(mindmaps.CanvasContainer);

/**
 * Events fired by the container.
 *
 * @namespace
 */
mindmaps.CanvasContainer.Event = {
    /**
     * Fired when the container has been resized.
     *
     * @event
     * @param {mindmaps.Point} point the new size
     */
    RESIZED: "ResizedEvent"
};

/**
 * Creates a new MainViewController. The controller is responsible for creating
 * all main ui elements.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.MindMapModel} mindmapModel
 * @param {mindmaps.InspectorView} view
 */
mindmaps.MainViewController = function (eventBus, mindmapModel, commandRegistry) {
    var zoomController = new mindmaps.ZoomController(eventBus, commandRegistry);
    var canvasContainer = new mindmaps.CanvasContainer();

    /**
     * When a file was dropped on the canvas container try to open it.
     */
    canvasContainer.receivedFileDrop = function (result) {
        try {
            var doc = mindmaps.Document.fromJSON(result);
            mindmapModel.setDocument(doc);
        } catch (e) {
            eventBus.publish(mindmaps.Event.NOTIFICATION_ERROR, "Could not read the file.");
            console.warn("Could not open the mind map via drag and drop.");
        }
    };

    this.go = function () {
        canvasContainer.init();

        // init all presenters

        // toolbar
        var toolbar = new mindmaps.ToolBarView();
        var toolbarPresenter = new mindmaps.ToolBarPresenter(eventBus,
            commandRegistry, toolbar, mindmapModel);
        toolbarPresenter.go();

        // canvas
        var canvas = new mindmaps.DefaultCanvasView();
        var canvasPresenter = new mindmaps.CanvasPresenter(eventBus,
            commandRegistry, mindmapModel, canvas, zoomController);
        canvasPresenter.go();

        // statusbar
        var statusbar = new mindmaps.StatusBarView();
        var statusbarPresenter = new mindmaps.StatusBarPresenter(eventBus,
            statusbar);
        statusbarPresenter.go();

        // floating Panels
        var fpf = new mindmaps.FloatPanelFactory(canvasContainer);

        // inspector
        var inspectorView = new mindmaps.InspectorView();
        var inspectorPresenter = new mindmaps.InspectorPresenter(eventBus,
            mindmapModel, inspectorView);
        inspectorPresenter.go();

        var inspectorPanel = fpf
            .create("Inspector", inspectorView.getContent());
        inspectorPanel.show();
        statusbarPresenter.addEntry(inspectorPanel);

        // navigator
        var naviView = new mindmaps.NavigatorView();
        var naviPresenter = new mindmaps.NavigatorPresenter(eventBus, naviView,
            canvasContainer, zoomController);
        naviPresenter.go();

        var navigatorPanel = fpf.create("Navigator", naviView.getContent());
        navigatorPanel.show();
        statusbarPresenter.addEntry(navigatorPanel);
    };
};
;
// TODO store a wrapper object with doc title, modified date and document as string in localstorage.
// in open document window show wrapper object and only parse document on demand.
// when many large documents are stored in LS, opening of window takes a rather long time
mindmaps.LocalStorage = (function () {
    return {
        put: function (key, value) {
            localStorage.setItem(key, value);
        },
        get: function (key) {
            return localStorage.getItem(key);
        },
        clear: function () {
            localStorage.clear();
        }
    };
})();

mindmaps.SessionStorage = (function () {
    return {
        put: function (key, value) {
            sessionStorage.setItem(key, value);
        },
        get: function (key) {
            return sessionStorage.getItem(key);
        },
        clear: function () {
            sessionStorage.clear();
        }
    };
})();

/**
 * @namespace
 */
mindmaps.LocalDocumentStorage = (function () {
    var prefix = "mindmaps.document.";

    var getDocumentByKey = function (key) {
        var json = localStorage.getItem(key);
        if (json === null) {
            return null;
        }

        /**
         * Catch any SytaxErrors when document can't be parsed.
         */
        try {
            return mindmaps.Document.fromJSON(json);
        } catch (error) {
            console.error("Error while loading document from local storage",
                error);
            return null;
        }
    };

    /**
     * Public API
     * @scope mindmaps.LocalDocumentStorage
     */
    return {
        /**
         * Saves a document to the localstorage. Overwrites the old document if
         * one with the same id exists.
         *
         * @param {mindmaps.Document} doc
         *
         * @returns {Boolean} true if save was successful, false otherwise.
         */
        saveDocument: function (doc) {
            try {
                localStorage.setItem(prefix + doc.id, doc.serialize());
                return true;
            } catch (error) {
                // QUOTA_EXCEEDED
                console.error("Error while saving document to local storage",
                    error);
                return false;
            }
        },

        /**
         * Loads a document from the local storage.
         *
         * @param {String} docId
         *
         * @returns {mindmaps.Document} the document or null if not found.
         */
        loadDocument: function (docId) {
            return getDocumentByKey(prefix + docId);
        },

        /**
         * Finds all documents in the local storage object.
         *
         * @returns {Array} an Array of documents
         */
        getDocuments: function () {
            var documents = [];
            // search localstorage for saved documents
            for (var i = 0, max = localStorage.length; i < max; i++) {
                var key = localStorage.key(i);
                // value is a document if key confirms to prefix
                if (key.indexOf(prefix) == 0) {
                    var doc = getDocumentByKey(key);
                    if (doc) {
                        documents.push(doc);
                    }
                }
            }
            return documents;
        },

        /**
         * Gets all document ids found in the local storage object.
         *
         * @returns {Array} an Array of document ids
         */
        getDocumentIds: function () {
            var ids = [];
            // search localstorage for saved documents
            for (var i = 0, max = localStorage.length; i < max; i++) {
                var key = localStorage.key(i);
                // value is a document if key confirms to prefix
                if (key.indexOf(prefix) == 0) {
                    ids.push(key.substring(prefix.length));
                }
            }
            return ids;
        },

        /**
         * Deletes a document from the local storage.
         *
         * @param {mindmaps.Document} doc
         */
        deleteDocument: function (doc) {
            localStorage.removeItem(prefix + doc.id);
        },

        /**
         * Deletes all documents from the local storage.
         */
        deleteAllDocuments: function () {
            this.getDocuments().forEach(this.deleteDocument);
        }
    };
})();
;
/**
 * Events that the event bus carries.
 *
 * @namespace
 */
mindmaps.Event = {
    /**
     * @event
     * @param {mindmaps.Document} document
     */
    DOCUMENT_OPENED: "DocumentOpenedEvent",

    /**
     * @event
     * @param {mindmaps.Document} document
     */
    DOCUMENT_SAVED: "DocumentSavedEvent",

    /**
     * @event
     * @param {mindmaps.Document} document
     */
    DOCUMENT_CLOSED: "DocumentClosedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     * @param {mindmaps.Node} oldSelectedNode
     */
    NODE_SELECTED: "NodeSelectedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_DESELECTED: "NodeDeselectedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_MOVED: "NodeMovedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_TEXT_CAPTION_CHANGED: "NodeTextCaptionChangedEvent",

    /**
     * Some parameter of the node font attribute has changed.
     *
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_FONT_CHANGED: "NodeFontChangedEvent",

    /**
     * Preview event for node font color changes.
     *
     * @event
     * @param {mindmaps.Node} node
     * @param {String} color
     */
    NODE_FONT_COLOR_PREVIEW: "NodeFontColorPreviewEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_BRANCH_COLOR_CHANGED: "NodeBranchColorChangedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     * @param {String} color
     */
    NODE_BRANCH_COLOR_PREVIEW: "NodeBranchColorPreviewEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_CREATED: "NodeCreatedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     * @param {mindmaps.Node} parent
     */
    NODE_DELETED: "NodeDeletedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_OPENED: "NodeOpenedEvent",

    /**
     * @event
     * @param {mindmaps.Node} node
     */
    NODE_CLOSED: "NodeClosedEvent",

    /**
     * @event
     * @param {Number} zoomFactor
     */
    ZOOM_CHANGED: "ZoomChangedEvent",

    /**
     * @event
     * @param {String} message
     */
    NOTIFICATION_INFO: "NotificationInfoEvent",

    /**
     * @event
     * @param {String} message
     */
    NOTIFICATION_WARN: "NotificationWarnEvent",

    /**
     * @event
     * @param {String} message
     */
    NOTIFICATION_ERROR: "NotificationErrorEvent"
};

/**
 * Simple Event bus powered by EventEmitter.
 *
 * @constructor
 * @augments EventEmitter
 *
 */
mindmaps.EventBus = EventEmitter;

if (mindmaps.DEBUG) {
    // overwrite publish func and display amount of listeners
    var old = mindmaps.EventBus.prototype.emit;
    mindmaps.EventBus.prototype.publish = function (type) {
        var l = this.listeners(type).length;
        console.log("EventBus > publish: " + type, "(Listeners: " + l + ")");

        old.apply(this, arguments);
    };
}
;
/**
 * Creates a new notification and attaches it to the target selector. If the
 * selector matches more than one element, the first one is taken.
 *
 * @constructor
 * @param {String} targetSelector
 * @param [options] the options
 * @param {String} [options.title] the title of the notification
 * @param {String} [options.content] the content
 * @param {String} [options.position] possible values: topLeft, topMiddle,
 *            topRight, rightTop, rightMiddle, rightBottom, bottomLeft,
 *            bottomMiddle, bottomRight, leftTop, leftMiddle, leftBottom
 * @param {Integer} [options.padding]
 * @param {Integer} [options.expires]
 * @param {Boolean} [options.closeButton]
 * @param {Integer} [options.maxWidth]
 * @param {String} [options.type] possible values: info, warn, error
 */
mindmaps.Notification = function (targetSelector, options) {
    var self = this;
    options = $.extend({}, mindmaps.Notification.Defaults, options);

    // render template
    var $notification = this.$el = $("#template-notification").tmpl(options)
        .css({
            "max-width": options.maxWidth
        }).addClass(options.type);

    // notification target
    var $target = $(targetSelector);
    if ($target.length === 0) {
        /**
         * Return unfinished, invisible notification if selector didn't match.
         * It will simply not show up, and does not have to be handled specially
         * by the caller.
         */
        return this;
    }

    var offset = $target.offset();
    var targetLeft = offset.left;
    var targetTop = offset.top;
    var targetWidth = $target.outerWidth();
    var targetHeight = $target.outerHeight();

    // add to dom. we need measurings
    $notification.appendTo($("body"));
    var notiWidth = $notification.outerWidth();
    var notiHeight = $notification.outerHeight();
    var notiLeft, notiTop;
    var padding = options.padding;

    // position
    switch (options.position) {

        case "topLeft":
            notiTop = targetTop - padding - notiHeight;
            notiLeft = targetLeft;
            break;
        case "topMiddle":
            notiTop = targetTop - padding - notiHeight;
            if (notiWidth < targetWidth) {
                notiLeft = targetLeft + (targetWidth - notiWidth) / 2;
            } else {
                notiLeft = targetLeft - (notiWidth - targetWidth) / 2;
            }
            break;
        case "topRight":
            notiTop = targetTop - padding - notiHeight;
            notiLeft = targetLeft + targetWidth - notiWidth;
            break;
        case "rightTop":
            notiTop = targetTop;

            break;
        case "rightMiddle":
            if (notiHeight < targetHeight) {
                notiTop = targetTop + (targetHeight - notiHeight) / 2;
            } else {
                notiTop = targetTop - (notiHeight - targetHeight) / 2;
            }
            notiLeft = targetLeft + padding + targetWidth;
            break;
        case "rightBottom":
            notiTop = targetTop + targetHeight - notiHeight;
            notiLeft = targetLeft + padding + targetWidth;
            break;
        case "bottomLeft":
            notiTop = targetTop + padding + targetHeight;
            notiLeft = targetLeft;
            break;
        case "bottomMiddle":
            notiTop = targetTop + padding + targetHeight;
            if (notiWidth < targetWidth) {
                notiLeft = targetLeft + (targetWidth - notiWidth) / 2;
            } else {
                notiLeft = targetLeft - (notiWidth - targetWidth) / 2;
            }
            break;
        case "bottomRight":
            notiTop = targetTop + padding + targetHeight;
            notiLeft = targetLeft + targetWidth - notiWidth;
            break;
        case "leftTop":
            notiTop = targetTop;
            notiLeft = targetLeft - padding - notiWidth;
            break;
        case "leftMiddle":
            if (notiHeight < targetHeight) {
                notiTop = targetTop + (targetHeight - notiHeight) / 2;
            } else {
                notiTop = targetTop - (notiHeight - targetHeight) / 2;
            }
            notiLeft = targetLeft - padding - notiWidth;
            break;
        case "leftBottom":
            notiTop = targetTop + targetHeight - notiHeight;
            notiLeft = targetLeft - padding - notiWidth;
            break;
    }

    $notification.offset({
        left: notiLeft,
        top: notiTop
    });

    // fadeout?
    if (options.expires) {
        setTimeout(function () {
            self.close();
        }, options.expires);
    }

    // close button
    if (options.closeButton) {
        $notification.find(".close-button").click(function () {
            self.close();
        });
    }

    // display
    $notification.fadeIn(600);
};

mindmaps.Notification.prototype = {
    /**
     * Removes the notification.
     */
    close: function () {
        var n = this.$el;
        n.fadeOut(800, function () {
            n.remove();
            this.removed = true;
        });
    },
    /**
     * Returns whether the notification is still on screen.
     *
     * @returns {Boolean}
     */
    isVisible: function () {
        return !this.removed;
    },
    /**
     * Returns the element as a jQuery object.
     *
     * @returns {jQuery}
     */
    $: function () {
        return this.$el;
    }
};

/**
 * The default options.
 */
mindmaps.Notification.Defaults = {
    title: null,
    content: "New Notification",
    position: "topLeft",
    padding: 10,
    expires: 0,
    closeButton: false,
    maxWidth: 500,
    type: "info"
};
;
// TODO proper emulation of line-break: word-wrap

/**
 * Object that renders a mindmap model onto a single canvas object. The map will
 * be drawn without it's interactive elements (fold buttons, creator nub) and
 * the resulting image will be trimmed to fit the map plus a bit of padding onto
 * it.
 *
 * @constructor
 */
mindmaps.StaticCanvasRenderer = function () {

    // magic number. node caption padding top/bottom + node padding bottom - two
    // extra pixel from text metrics
    var padding = 8;
    var zoomFactor = 1;
    var self = this;

    var $canvas = $("<canvas/>", {
        "class": "map"
    });
    var ctx = $canvas[0].getContext("2d");

    var branchDrawer = new mindmaps.CanvasBranchDrawer();
    branchDrawer.beforeDraw = function (width, height, left, top) {
        ctx.translate(left, top);
    };

    function drawBranch(node, $parent) {
        ctx.save();
        branchDrawer.render(ctx, node.getDepth(), node.offset.x, node.offset.y,
            node, $parent, node.branchColor, zoomFactor);
        ctx.restore();
    }

    /**
     * Adds some information to each node which are needed for rendering.
     *
     * @param mindmap
     * @returns
     */
    function prepareNodes(mindmap) {
        // clone tree since we modify it
        var root = mindmap.getRoot().clone();

        function addProps(node) {
            var lineWidth = mindmaps.CanvasDrawingUtil.getLineWidth(zoomFactor,
                node.getDepth());
            var metrics = mindmaps.TextMetrics.getTextMetrics(node, zoomFactor);

            var props = {
                lineWidth: lineWidth,
                textMetrics: metrics,
                width: function () {
                    if (node.isRoot()) {
                        return 0;
                    }
                    return metrics.width;
                },
                innerHeight: function () {
                    return metrics.height + padding;
                },

                outerHeight: function () {
                    return metrics.height + lineWidth + padding;
                }
            };

            $.extend(node, props);

            node.forEachChild(function (child) {
                addProps(child);
            });
        }

        addProps(root);

        return root;
    }

    /**
     * Finds the nodes which are farthest away from the root and calculates the
     * actual dimensions of the mind map.
     *
     * @param {mindmaps.Node} root
     * @returns {object} with properties width and height
     */
    function getMindMapDimensions(root) {
        var pos = root.getPosition();
        var left = 0, top = 0, right = 0, bottom = 0;
        var padding = 50;

        function checkDimensions(node) {
            var pos = node.getPosition();
            var tm = node.textMetrics;

            if (pos.x < left) {
                left = pos.x;
            }

            if (pos.x + tm.width > right) {
                right = pos.x + tm.width;
            }

            if (pos.y < top) {
                top = pos.y;
            }

            if (pos.y + node.outerHeight() > bottom) {
                bottom = pos.y + node.outerHeight();
            }
        }

        checkDimensions(root);
        root.forEachDescendant(function (node) {
            checkDimensions(node);
        });

        // find the longest offset to either side and use twice the length for
        // canvas width
        var horizontal = Math.max(Math.abs(right), Math.abs(left));
        var vertical = Math.max(Math.abs(bottom), Math.abs(top));

        return {
            width: 2 * horizontal + padding,
            height: 2 * vertical + padding
        };
    }

    /**
     * Returns the canvas image in Base64 encoding. The canvas has to be
     * rendered first.
     *
     * @param {mindmaps.Document} document
     * @returns {String}
     */
    this.getImageData = function (document) {
        renderCanvas(document);
        return $canvas[0].toDataURL("image/png");
    };

    /**
     * Returns a jquery object containing an IMG object with the map as PNG.
     *
     * @param {mindmaps.Document} document
     * @returns {jQuery}
     */
    this.renderAsPNG = function (document) {
        var data = this.getImageData(document);

        var $img = $("<img/>", {
            src: data,
            "class": "map"
        });

        return $img;
    };

    /**
     * Returns the rendered canvas as a jQuery object.
     *
     * @param {mindmaps.Document} document
     * @returns {jQuery}
     */
    this.renderAsCanvas = function (document) {
        renderCanvas(document);
        return $canvas;
    };

    /**
     * Renders the map onto the canvas.
     *
     * @param {mindmaps.Document} document
     */
    function renderCanvas(document) {
        var map = document.mindmap;
        var root = prepareNodes(map);
        var dimensions = getMindMapDimensions(root);

        var width = dimensions.width;
        var height = dimensions.height;
        $canvas.attr({
            width: width,
            height: height
        });

        ctx.textBaseline = "top";
        ctx.textAlign = "center";

        // fill background white
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);

        ctx.translate(width / 2, height / 2);

        // render in two passes: 1. lines, 2. captions. because we have
        // no z-index, captions should not be covered by lines
        drawLines(root);
        drawCaptions(root);

        /**
         * Draws all branches
         */
        function drawLines(node, parent) {
            ctx.save();
            var x = node.offset.x;
            var y = node.offset.y;
            ctx.translate(x, y);

            // branch
            if (parent) {
                drawBranch(node, parent);
            }

            // bottom border
            if (!node.isRoot()) {
                ctx.fillStyle = node.branchColor;
                var tm = node.textMetrics;
                ctx.fillRect(0, tm.height + padding, tm.width, node.lineWidth);
            }

            node.forEachChild(function (child) {
                drawLines(child, node);
            });

            ctx.restore();
        }

        /**
         * Draws all captions.
         *
         * @param node
         */
        function drawCaptions(node) {
            ctx.save();
            var x = node.offset.x;
            var y = node.offset.y;
            ctx.translate(x, y);

            var tm = node.textMetrics;
            var caption = node.getCaption();
            var font = node.text.font;

            // ctx.strokeStyle = "#CCC";
            // ctx.strokeRect(0, 0, tm.width, tm.height);

            ctx.font = font.style + " " + font.weight + " " + font.size
                + "px sans-serif";

            var captionX = tm.width / 2;
            var captionY = 0;
            if (node.isRoot()) {
                // TODO remove magic numbers
                captionX = 0;
                captionY = 20;

                // root box
                ctx.lineWidth = 5.0;
                ctx.strokeStyle = "orange";
                ctx.fillStyle = "white";
                mindmaps.CanvasDrawingUtil.roundedRect(ctx,
                    0 - tm.width / 2 - 4, 20 - 4, tm.width + 8,
                    tm.height + 8, 10);
            }

            ctx.strokeStyle = font.color;
            ctx.fillStyle = font.color;

            // TODO underline manually. canvas doesnt support it
            // TODO strike through manually

            function checkLength(str) {
                var ctm = ctx.measureText(str);
                return ctm.width <= tm.width;
            }

            // write node caption.

            if (checkLength(caption)) {
                // easy part only one line
                ctx.fillText(caption, captionX, captionY);
            } else {
                /**
                 * caption consists of multiple lines. needs special handling
                 * that imitates the line breaking algorithm "word-wrap:
                 * break-word;"
                 *
                 * <pre>
                 * 1. break up string into words
                 * 2. cut words that are too long into smaller pieces so they fit on a line
                 * 3. construct lines: fit as many words as possible on a line
                 * 4. print lines
                 * </pre>
                 */

                /**
                 * step 1
                 */
                    // check all words and break words that are too long for a one
                    // line
                    // TODO not perfect yet
                    // find words in string (special treatment for hyphens)
                    // a hyphen breaks like a white-space does
                    // var regex = /(\w+-+)|(\w+)|(-+)/gi;
                    // var regex = /[^- ]+[- ]*/gi;
                    // var regex = /[^ -]+-* *|[- ]+/gi;
                    // for now just match for words and the trailing space
                    // hyphenating has probably be done in step 2
                var regex = /[^ ]+ */gi;
                var words1 = caption.match(regex);
                console.log("words1", words1);

                /**
                 * step 2
                 */
                var words2 = [];
                words1.forEach(function (word) {
                    if (!checkLength(word)) {
                        var part = "";
                        for (var i = 0; i < word.length; i++) {
                            var c = word.charAt(i);
                            if (checkLength(part + c)) {
                                part += c;
                                continue;
                            } else {
                                words2.push(part);
                                part = c;
                            }
                        }
                        words2.push(part);
                    } else {
                        words2.push(word);
                    }
                });

                console.log("words2", words2);

                /**
                 * step 3
                 */
                var wordWidth = function (str) {
                    return ctx.measureText(str).width;
                };

                var lines = [];
                var line = "";
                var lineWidth = tm.width;

                // construct invidual lines
                words2.forEach(function (word) {
                    if (line === "") {
                        line = word;
                    } else {
                        if (wordWidth(line + " " + word) > lineWidth) {
                            lines.push(line);
                            line = word;
                        } else {
                            line += " " + word;
                        }
                    }
                });
                lines.push(line);
                console.log("lines", lines);

                /**
                 * step 4
                 */
                // print lines
                for (var j = 0; j < lines.length; j++) {
                    var line = lines[j];
                    ctx.fillText(line, captionX, captionY + j * font.size);
                }
            }

            node.forEachChild(function (child) {
                drawCaptions(child);
            });

            ctx.restore();
        }
    }
};
;
/**
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.CommandRegistry} commandRegistry
 * @param {mindmaps.MindMapModel} mindmapModel
 */
mindmaps.PrintController = function (eventBus, commandRegistry, mindmapModel) {
    var printCommand = commandRegistry.get(mindmaps.PrintCommand);
    printCommand.setHandler(doPrintDocument);

    var renderer = new mindmaps.StaticCanvasRenderer();

    function doPrintDocument() {
        var $img = renderer.renderAsPNG(mindmapModel.getDocument());
        $("#print-area").html($img);
        window.print();

        // TODO chrome only: after print() opens a new tab, and one switches
        // back to the old tab the canvas container has scrolled top-left.
    }

    eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, function () {
        printCommand.setEnabled(false);
    });

    eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, function () {
        printCommand.setEnabled(true);
    });
};
;
/**
 *
 * @constructor
 */
mindmaps.ExportMapView = function () {
    var self = this;

    // create dialog
    var $dialog = $("#template-export-map").tmpl().dialog({
        autoOpen: false,
        modal: true,
        zIndex: 5000,
        width: "auto",
        height: "auto",
        close: function () {
            $(this).dialog("destroy");
            $(this).remove();
        },
        open: function () {
            $(this).css({
                "max-width": $(window).width() * 0.9,
                "max-height": $(window).height() * 0.8
            });
            $dialog.dialog("option", "position", "center");
        },
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
            }
        }
    });

    /**
     * Shows the dialog.
     *
     */
    this.showDialog = function () {
        $dialog.dialog("open");
    };

    /**
     * Hides the dialog.
     */
    this.hideDialog = function () {
        $dialog.dialog("close");
    };

    this.setImage = function ($img) {
        $("#export-preview").html($img);
    };
};

/**
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.MindMapModel} mindmapModel
 * @param {mindmaps.ExportMapView} view
 */
mindmaps.ExportMapPresenter = function (eventBus, mindmapModel, view) {
    var renderer = new mindmaps.StaticCanvasRenderer();

    this.go = function () {
        var $img = renderer.renderAsPNG(mindmapModel.getDocument());
        view.setImage($img);

        // slightly delay showing the dialog. otherwise dialog is not correctly
        // centered, because the image is inserted too late
        setTimeout(function () {
            view.showDialog();
        }, 30);
    };
};
;
/**
 * Creates a new AutoSaveController. This controller is able to automatically
 * save the document every X minutes. This setting is global for all mindmaps.
 *
 * @constructor
 * @param {mindmaps.EventBus} eventBus
 * @param {mindmaps.MindMapModel} mindmapModel
 */
mindmaps.AutoSaveController = function (eventBus, mindmapModel) {
    var SAVE_INTERVAL = 1000 * 60; // 1 minute
    var timer = null;

    function save() {
        console.debug("Autosaving...");
        mindmapModel.saveToLocalStorage();
    }

    function autosave() {
        if (!timer) {
            timer = setInterval(save, SAVE_INTERVAL);
        }
    }

    function stopAutosave() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    /**
     * Enable autosave.
     */
    this.enable = function () {
        autosave();
        mindmapModel.getDocument().setAutoSave(true);
    }

    /**
     * Disable autosave.
     */
    this.disable = function () {
        stopAutosave();
        mindmapModel.getDocument().setAutoSave(false);
    }

    this.isEnabled = function () {
        return mindmapModel.getDocument().isAutoSave();
    }

    this.init = function () {
        eventBus.subscribe(mindmaps.Event.DOCUMENT_OPENED, this.documentOpened
            .bind(this));

        eventBus.subscribe(mindmaps.Event.DOCUMENT_CLOSED, this.documentClosed
            .bind(this));
    }

    this.documentOpened = function (doc) {
        if (this.isEnabled()) {
            autosave();
        }
    }

    this.documentClosed = function () {
        stopAutosave();
    }

    this.init();
}
;
/**
 * Class for interaction with the filepicker API. Provides open and save
 * from/to cloud storages.
 *
 * @constructor
 */
mindmaps.FilePicker = function (eventBus, mindmapModel) {

    // filepicker is not defined when we are offline
    if (window.filepicker) {
        var filepicker = window.filepicker;
        filepicker.setKey('P9tQ4bicRwyIe8ZUsny5');

        var mimetype = "application/json";
    }

    /**
     * Shows the open dialog and tries to open a mindmap.
     */
    this.open = function (options) {
        options = options || {};

        if (!filepicker || !navigator.onLine) {
            options.error && options.error("Cannot access cloud, it appears you are offline.");
            return;
        }

        filepicker.pick(
            {
                //mimetype: mimetype,
                extension: '.json',
                // hide: true
            },
            function (data) {
                console.log(JSON.stringify(data));

                // load mindmap
                $.ajax({
                    url: data.url,
                    success: function (data) {

                        try {
                            // convert to object first if response is a string
                            if (Object.prototype.toString.call(data) == '[object String]') {
                                data = JSON.parse(data);
                            }

                            var doc = mindmaps.Document.fromObject(data);
                        } catch (e) {
                            eventBus.publish(mindmaps.Event.NOTIFICATION_ERROR, 'File is not a valid mind map!');
                            throw new Error('Error while parsing map from cloud', e);
                        }

                        mindmapModel.setDocument(doc);

                        // execute callback
                        if (options.success) {
                            options.success(doc);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (options.error) {
                            options.error("Error: Could not open mind map!");
                        }
                        throw new Error('Error while loading map from filepicker. ' + textStatus + ' ' + errorThrown);
                    }
                });

            },
            function (FPError) {
                console.log(FPError.toString());
            }
        );
    };

    /**
     * Shows the save dialog where the user can save the current mindmap. Skips
     * the dialog and saves directly when options.saveAs = true is passed and
     * a cloud storage file is currently open.
     */
    this.save = function (options) {
        options = options || {};

        if (!filepicker || !navigator.onLine) {
            options.error && options.error("Cannot access cloud, it appears you are offline.");
            return;
        }

        var data = mindmapModel.getDocument().prepareSave().serialize();

        var success = function (url) {
            console.log('saved to:', url);
            eventBus.publish(mindmaps.Event.DOCUMENT_SAVED, doc);

            if (options.success) {
                options.success();
            }
        };

        // save dialog
        options.filename = mindmapModel.getMindMap().getRoot().getCaption() + ".json";
        options.mimetype = mimetype;

        filepicker.store(
            data,
            options,
            function (blob) {
                filepicker.exportFile(
                    blob,
                    function (Blob) {
                        success(Blob.url);
                    }
                );

                console.log("Store successful:", JSON.stringify(blob));
            },
            function (FPError) {
                //  console.log(FPError.toString()); - print errors to console
            },
            function (progress) {
                console.log("Loading: " + progress + "%");
            }
        );
    }
}
;
;