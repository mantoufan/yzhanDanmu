!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.YZhanDanMu=r():t.YZhanDanMu=r()}(this,(function(){return function(){var t={7766:function(t,r,n){t.exports=n(8065)},8914:function(t,r,n){t.exports=n(6279)},3649:function(t,r,n){t.exports=n(2073)},7302:function(t,r,n){t.exports=n(2856)},1942:function(t,r,n){t.exports=n(3383)},4943:function(t,r,n){t.exports=n(4471)},1238:function(t,r,n){t.exports=n(6877)},149:function(t,r,n){t.exports=n(888)},4341:function(t,r,n){t.exports=n(3685)},6394:function(t){t.exports=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},9198:function(t,r,n){var e=n(4341);function o(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),e(t,o.key,o)}}t.exports=function(t,r,n){return r&&o(t.prototype,r),n&&o(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0},530:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},5367:function(t,r,n){n(5906);var e=n(5703);t.exports=e("Array").concat},9324:function(t,r,n){n(2437);var e=n(5703);t.exports=e("Array").forEach},4900:function(t,r,n){n(186);var e=n(5703);t.exports=e("Array").slice},2948:function(t,r,n){n(4115);var e=n(5703);t.exports=e("Array").sort},1031:function(t,r,n){n(2595),t.exports=n(1899)},6043:function(t,r,n){var e=n(7046),o=n(5367),i=Array.prototype;t.exports=function(t){var r=t.concat;return t===i||e(i,t)&&r===i.concat?o:r}},9601:function(t,r,n){var e=n(7046),o=n(4900),i=Array.prototype;t.exports=function(t){var r=t.slice;return t===i||e(i,t)&&r===i.slice?o:r}},9355:function(t,r,n){var e=n(7046),o=n(2948),i=Array.prototype;t.exports=function(t){var r=t.sort;return t===i||e(i,t)&&r===i.sort?o:r}},5999:function(t,r,n){n(9221);var e=n(4058);t.exports=e.Object.assign},5254:function(t,r,n){n(3882);var e=n(4058).Object;t.exports=function(t,r){return e.create(t,r)}},8171:function(t,r,n){n(6450);var e=n(4058).Object,o=t.exports=function(t,r,n){return e.defineProperty(t,r,n)};e.defineProperty.sham&&(o.sham=!0)},7579:function(t,r,n){n(9718);var e=n(4058);t.exports=e.parseFloat},888:function(t,r,n){n(9668);var e=n(2369);t.exports=e},3685:function(t,r,n){var e=n(1910);t.exports=e},4883:function(t,r,n){var e=n(1899),o=n(7475),i=n(9826),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},1851:function(t,r,n){var e=n(1899),o=n(7475),i=e.String,u=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}},8479:function(t){t.exports=function(){}},6059:function(t,r,n){var e=n(1899),o=n(941),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},6837:function(t,r,n){"use strict";var e=n(3610).forEach,o=n(4194)("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},1692:function(t,r,n){var e=n(4529),o=n(9413),i=n(623),u=function(t){return function(r,n,u){var c,a=e(r),f=i(a),s=o(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},3610:function(t,r,n){var e=n(6843),o=n(5329),i=n(7026),u=n(9678),c=n(623),a=n(4692),f=o([].push),s=function(t){var r=1==t,n=2==t,o=3==t,s=4==t,p=6==t,l=7==t,v=5==t||p;return function(d,h,y,x){for(var g,m,b=u(d),O=i(b),S=e(h,y),w=c(O),j=0,A=x||a,E=r?A(d,w):n||l?A(d,0):void 0;w>j;j++)if((v||j in O)&&(m=S(g=O[j],j,b),t))if(r)E[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:f(E,g)}else switch(t){case 4:return!1;case 7:f(E,g)}return p?-1:o||s?s:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},568:function(t,r,n){var e=n(5981),o=n(9813),i=n(3385),u=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},4194:function(t,r,n){"use strict";var e=n(5981);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},3765:function(t,r,n){var e=n(5329);t.exports=e([].slice)},1388:function(t,r,n){var e=n(3765),o=Math.floor,i=function(t,r){var n=t.length,a=o(n/2);return n<8?u(t,r):c(t,i(e(t,0,a),r),i(e(t,a),r),r)},u=function(t,r){for(var n,e,o=t.length,i=1;i<o;){for(e=i,n=t[i];e&&r(t[e-1],n)>0;)t[e]=t[--e];e!==i++&&(t[e]=n)}return t},c=function(t,r,n,e){for(var o=r.length,i=n.length,u=0,c=0;u<o||c<i;)t[u+c]=u<o&&c<i?e(r[u],n[c])<=0?r[u++]:n[c++]:u<o?r[u++]:n[c++];return t};t.exports=i},5693:function(t,r,n){var e=n(1899),o=n(1052),i=n(4284),u=n(941),c=n(9813)("species"),a=e.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,(i(r)&&(r===a||o(r.prototype))||u(r)&&null===(r=r[c]))&&(r=void 0)),void 0===r?a:r}},4692:function(t,r,n){var e=n(5693);t.exports=function(t,r){return new(e(t))(0===r?0:r)}},2532:function(t,r,n){var e=n(5329),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},9697:function(t,r,n){var e=n(1899),o=n(2885),i=n(7475),u=n(2532),c=n(9813)("toStringTag"),a=e.Object,f="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=a(t),c))?n:f?u(r):"Object"==(e=u(r))&&i(r.callee)?"Arguments":e}},4160:function(t,r,n){var e=n(5981);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},1046:function(t,r,n){"use strict";var e=n(5143).IteratorPrototype,o=n(9290),i=n(1887),u=n(904),c=n(2077),a=function(){return this};t.exports=function(t,r,n){var f=r+" Iterator";return t.prototype=o(e,{next:i(1,n)}),u(t,f,!1,!0),c[f]=a,t}},2029:function(t,r,n){var e=n(5746),o=n(5988),i=n(1887);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},1887:function(t){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},5449:function(t,r,n){"use strict";var e=n(3894),o=n(5988),i=n(1887);t.exports=function(t,r,n){var u=e(r);u in t?o.f(t,u,i(0,n)):t[u]=n}},7771:function(t,r,n){"use strict";var e=n(6887),o=n(8834),i=n(2529),u=n(9417),c=n(7475),a=n(1046),f=n(249),s=n(8929),p=n(904),l=n(2029),v=n(9754),d=n(9813),h=n(2077),y=n(5143),x=u.PROPER,g=u.CONFIGURABLE,m=y.IteratorPrototype,b=y.BUGGY_SAFARI_ITERATORS,O=d("iterator"),S="keys",w="values",j="entries",A=function(){return this};t.exports=function(t,r,n,u,d,y,E){a(n,r,u);var T,L,P,_=function(t){if(t===d&&R)return R;if(!b&&t in C)return C[t];switch(t){case S:case w:case j:return function(){return new n(this,t)}}return function(){return new n(this)}},k=r+" Iterator",M=!1,C=t.prototype,I=C[O]||C["@@iterator"]||d&&C[d],R=!b&&I||_(d),F="Array"==r&&C.entries||I;if(F&&(T=f(F.call(new t)))!==Object.prototype&&T.next&&(i||f(T)===m||(s?s(T,m):c(T[O])||v(T,O,A)),p(T,k,!0,!0),i&&(h[k]=A)),x&&d==w&&I&&I.name!==w&&(!i&&g?l(C,"name",w):(M=!0,R=function(){return o(I,this)})),d)if(L={values:_(w),keys:y?R:_(S),entries:_(j)},E)for(P in L)(b||M||!(P in C))&&v(C,P,L[P]);else e({target:r,proto:!0,forced:b||M},L);return i&&!E||C[O]===R||v(C,O,R,{name:d}),h[r]=R,L}},5746:function(t,r,n){var e=n(5981);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},1333:function(t,r,n){var e=n(1899),o=n(941),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},3281:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},4342:function(t,r,n){var e=n(2861).match(/firefox\/(\d+)/i);t.exports=!!e&&+e[1]},7797:function(t,r,n){var e=n(2861);t.exports=/MSIE|Trident/.test(e)},2861:function(t,r,n){var e=n(626);t.exports=e("navigator","userAgent")||""},3385:function(t,r,n){var e,o,i=n(1899),u=n(2861),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},8938:function(t,r,n){var e=n(2861).match(/AppleWebKit\/(\d+)\./);t.exports=!!e&&+e[1]},5703:function(t,r,n){var e=n(4058);t.exports=function(t){return e[t+"Prototype"]}},6759:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6887:function(t,r,n){"use strict";var e=n(1899),o=n(9730),i=n(5329),u=n(7475),c=n(9677).f,a=n(7252),f=n(4058),s=n(6843),p=n(2029),l=n(953),v=function(t){var r=function(n,e,i){if(this instanceof r){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,i)}return o(t,this,arguments)};return r.prototype=t.prototype,r};t.exports=function(t,r){var n,o,d,h,y,x,g,m,b=t.target,O=t.global,S=t.stat,w=t.proto,j=O?e:S?e[b]:(e[b]||{}).prototype,A=O?f:f[b]||p(f,b,{})[b],E=A.prototype;for(d in r)n=!a(O?d:b+(S?".":"#")+d,t.forced)&&j&&l(j,d),y=A[d],n&&(x=t.noTargetGet?(m=c(j,d))&&m.value:j[d]),h=n&&x?x:r[d],n&&typeof y==typeof h||(g=t.bind&&n?s(h,e):t.wrap&&n?v(h):w&&u(h)?i(h):h,(t.sham||h&&h.sham||y&&y.sham)&&p(g,"sham",!0),p(A,d,g),w&&(l(f,o=b+"Prototype")||p(f,o,{}),p(f[o],d,h),t.real&&E&&!E[d]&&p(E,d,h)))}},5981:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9730:function(t){var r=Function.prototype,n=r.apply,e=r.bind,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(e?o.bind(n):function(){return o.apply(n,arguments)})},6843:function(t,r,n){var e=n(5329),o=n(4883),i=e(e.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?i(t,r):function(){return t.apply(r,arguments)}}},8834:function(t){var r=Function.prototype.call;t.exports=r.bind?r.bind(r):function(){return r.apply(r,arguments)}},9417:function(t,r,n){var e=n(5746),o=n(953),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},5329:function(t){var r=Function.prototype,n=r.bind,e=r.call,o=n&&n.bind(e);t.exports=n?function(t){return t&&o(e,t)}:function(t){return t&&function(){return e.apply(t,arguments)}}},626:function(t,r,n){var e=n(4058),o=n(1899),i=n(7475),u=function(t){return i(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},4229:function(t,r,n){var e=n(4883);t.exports=function(t,r){var n=t[r];return null==n?void 0:e(n)}},1899:function(t,r,n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},953:function(t,r,n){var e=n(5329),o=n(9678),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},7748:function(t){t.exports={}},5463:function(t,r,n){var e=n(626);t.exports=e("document","documentElement")},2840:function(t,r,n){var e=n(5746),o=n(5981),i=n(1333);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7026:function(t,r,n){var e=n(1899),o=n(5329),i=n(5981),u=n(2532),c=e.Object,a=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?a(t,""):c(t)}:c},1302:function(t,r,n){var e=n(5329),o=n(7475),i=n(3030),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},5402:function(t,r,n){var e,o,i,u=n(8019),c=n(1899),a=n(5329),f=n(941),s=n(2029),p=n(953),l=n(3030),v=n(4262),d=n(7748),h="Object already initialized",y=c.TypeError,x=c.WeakMap;if(u||l.state){var g=l.state||(l.state=new x),m=a(g.get),b=a(g.has),O=a(g.set);e=function(t,r){if(b(g,t))throw new y(h);return r.facade=t,O(g,t,r),r},o=function(t){return m(g,t)||{}},i=function(t){return b(g,t)}}else{var S=v("state");d[S]=!0,e=function(t,r){if(p(t,S))throw new y(h);return r.facade=t,s(t,S,r),r},o=function(t){return p(t,S)?t[S]:{}},i=function(t){return p(t,S)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!f(r)||(n=o(r)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}}}},1052:function(t,r,n){var e=n(2532);t.exports=Array.isArray||function(t){return"Array"==e(t)}},7475:function(t){t.exports=function(t){return"function"==typeof t}},4284:function(t,r,n){var e=n(5329),o=n(5981),i=n(7475),u=n(9697),c=n(626),a=n(1302),f=function(){},s=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),d=!l.exec(f),h=function(t){if(!i(t))return!1;try{return p(f,s,t),!0}catch(t){return!1}};t.exports=!p||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!v(l,a(t))}:h},7252:function(t,r,n){var e=n(5981),o=n(7475),i=/#|\.prototype\./,u=function(t,r){var n=a[c(t)];return n==s||n!=f&&(o(r)?e(r):!!r)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},941:function(t,r,n){var e=n(7475);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},2529:function(t){t.exports=!0},6664:function(t,r,n){var e=n(1899),o=n(626),i=n(7475),u=n(7046),c=n(2302),a=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&u(r.prototype,a(t))}},5143:function(t,r,n){"use strict";var e,o,i,u=n(5981),c=n(7475),a=n(9290),f=n(249),s=n(9754),p=n(9813),l=n(2529),v=p("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=f(f(i)))!==Object.prototype&&(e=o):d=!0),null==e||u((function(){var t={};return e[v].call(t)!==t}))?e={}:l&&(e=a(e)),c(e[v])||s(e,v,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:d}},2077:function(t){t.exports={}},623:function(t,r,n){var e=n(3057);t.exports=function(t){return e(t.length)}},2497:function(t,r,n){var e=n(3385),o=n(5981);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8019:function(t,r,n){var e=n(1899),o=n(7475),i=n(1302),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},4018:function(t,r,n){var e=n(1899),o=n(5981),i=n(5329),u=n(5803),c=n(4853).trim,a=n(3483),f=i("".charAt),s=e.parseFloat,p=e.Symbol,l=p&&p.iterator,v=1/s(a+"-0")!=-1/0||l&&!o((function(){s(Object(l))}));t.exports=v?function(t){var r=c(u(t)),n=s(r);return 0===n&&"-"==f(r,0)?-0:n}:s},4420:function(t,r,n){"use strict";var e=n(5746),o=n(5329),i=n(8834),u=n(5981),c=n(4771),a=n(7857),f=n(6760),s=n(9678),p=n(7026),l=Object.assign,v=Object.defineProperty,d=o([].concat);t.exports=!l||u((function(){if(e&&1!==l({b:1},l(v({},"a",{enumerable:!0,get:function(){v(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},r={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){r[t]=t})),7!=l({},t)[n]||c(l({},r)).join("")!=o}))?function(t,r){for(var n=s(t),o=arguments.length,u=1,l=a.f,v=f.f;o>u;)for(var h,y=p(arguments[u++]),x=l?d(c(y),l(y)):c(y),g=x.length,m=0;g>m;)h=x[m++],e&&!i(v,y,h)||(n[h]=y[h]);return n}:l},9290:function(t,r,n){var e,o=n(6059),i=n(9938),u=n(6759),c=n(7748),a=n(5463),f=n(1333),s=n(4262)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(l("")),t.close();var r=t.parentWindow.Object;return t=null,r},d=function(){try{e=new ActiveXObject("htmlfile")}catch(t){}var t,r;d="undefined"!=typeof document?document.domain&&e?v(e):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F):v(e);for(var n=u.length;n--;)delete d.prototype[u[n]];return d()};c[s]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[s]=t):n=d(),void 0===r?n:i(n,r)}},9938:function(t,r,n){var e=n(5746),o=n(5988),i=n(6059),u=n(4529),c=n(4771);t.exports=e?Object.defineProperties:function(t,r){i(t);for(var n,e=u(r),a=c(r),f=a.length,s=0;f>s;)o.f(t,n=a[s++],e[n]);return t}},5988:function(t,r,n){var e=n(1899),o=n(5746),i=n(2840),u=n(6059),c=n(3894),a=e.TypeError,f=Object.defineProperty;r.f=o?f:function(t,r,n){if(u(t),r=c(r),u(n),i)try{return f(t,r,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},9677:function(t,r,n){var e=n(5746),o=n(8834),i=n(6760),u=n(1887),c=n(4529),a=n(3894),f=n(953),s=n(2840),p=Object.getOwnPropertyDescriptor;r.f=e?p:function(t,r){if(t=c(t),r=a(r),s)try{return p(t,r)}catch(t){}if(f(t,r))return u(!o(i.f,t,r),t[r])}},7857:function(t,r){r.f=Object.getOwnPropertySymbols},249:function(t,r,n){var e=n(1899),o=n(953),i=n(7475),u=n(9678),c=n(4262),a=n(4160),f=c("IE_PROTO"),s=e.Object,p=s.prototype;t.exports=a?s.getPrototypeOf:function(t){var r=u(t);if(o(r,f))return r[f];var n=r.constructor;return i(n)&&r instanceof n?n.prototype:r instanceof s?p:null}},7046:function(t,r,n){var e=n(5329);t.exports=e({}.isPrototypeOf)},5629:function(t,r,n){var e=n(5329),o=n(953),i=n(4529),u=n(1692).indexOf,c=n(7748),a=e([].push);t.exports=function(t,r){var n,e=i(t),f=0,s=[];for(n in e)!o(c,n)&&o(e,n)&&a(s,n);for(;r.length>f;)o(e,n=r[f++])&&(~u(s,n)||a(s,n));return s}},4771:function(t,r,n){var e=n(5629),o=n(6759);t.exports=Object.keys||function(t){return e(t,o)}},6760:function(t,r){"use strict";var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);r.f=o?function(t){var r=e(this,t);return!!r&&r.enumerable}:n},8929:function(t,r,n){var e=n(5329),o=n(6059),i=n(1851);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=e(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return o(n),i(e),r?t(n,e):n.__proto__=e,n}}():void 0)},5623:function(t,r,n){"use strict";var e=n(2885),o=n(9697);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},9811:function(t,r,n){var e=n(1899),o=n(8834),i=n(7475),u=n(941),c=e.TypeError;t.exports=function(t,r){var n,e;if("string"===r&&i(n=t.toString)&&!u(e=o(n,t)))return e;if(i(n=t.valueOf)&&!u(e=o(n,t)))return e;if("string"!==r&&i(n=t.toString)&&!u(e=o(n,t)))return e;throw c("Can't convert object to primitive value")}},4058:function(t){t.exports={}},9754:function(t,r,n){var e=n(2029);t.exports=function(t,r,n,o){o&&o.enumerable?t[r]=n:e(t,r,n)}},8219:function(t,r,n){var e=n(1899).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},4911:function(t,r,n){var e=n(1899),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},904:function(t,r,n){var e=n(2885),o=n(5988).f,i=n(2029),u=n(953),c=n(5623),a=n(9813)("toStringTag");t.exports=function(t,r,n,f){if(t){var s=n?t:t.prototype;u(s,a)||o(s,a,{configurable:!0,value:r}),f&&!e&&i(s,"toString",c)}}},4262:function(t,r,n){var e=n(8726),o=n(9418),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},3030:function(t,r,n){var e=n(1899),o=n(4911),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},8726:function(t,r,n){var e=n(2529),o=n(3030);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.19.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},4853:function(t,r,n){var e=n(5329),o=n(8219),i=n(5803),u=n(3483),c=e("".replace),a="["+u+"]",f=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),p=function(t){return function(r){var n=i(o(r));return 1&t&&(n=c(n,f,"")),2&t&&(n=c(n,s,"")),n}};t.exports={start:p(1),end:p(2),trim:p(3)}},9413:function(t,r,n){var e=n(2435),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},4529:function(t,r,n){var e=n(7026),o=n(8219);t.exports=function(t){return e(o(t))}},2435:function(t){var r=Math.ceil,n=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?n:r)(e)}},3057:function(t,r,n){var e=n(2435),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},9678:function(t,r,n){var e=n(1899),o=n(8219),i=e.Object;t.exports=function(t){return i(o(t))}},6935:function(t,r,n){var e=n(1899),o=n(8834),i=n(941),u=n(6664),c=n(4229),a=n(9811),f=n(9813),s=e.TypeError,p=f("toPrimitive");t.exports=function(t,r){if(!i(t)||u(t))return t;var n,e=c(t,p);if(e){if(void 0===r&&(r="default"),n=o(e,t,r),!i(n)||u(n))return n;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},3894:function(t,r,n){var e=n(6935),o=n(6664);t.exports=function(t){var r=e(t,"string");return o(r)?r:r+""}},2885:function(t,r,n){var e={};e[n(9813)("toStringTag")]="z",t.exports="[object z]"===String(e)},5803:function(t,r,n){var e=n(1899),o=n(9697),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},9826:function(t,r,n){var e=n(1899).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9418:function(t,r,n){var e=n(5329),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},2302:function(t,r,n){var e=n(2497);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},9813:function(t,r,n){var e=n(1899),o=n(8726),i=n(953),u=n(9418),c=n(2497),a=n(2302),f=o("wks"),s=e.Symbol,p=s&&s.for,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var r="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&p?p(r):l(r)}return f[t]}},3483:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},5906:function(t,r,n){"use strict";var e=n(6887),o=n(1899),i=n(5981),u=n(1052),c=n(941),a=n(9678),f=n(623),s=n(5449),p=n(4692),l=n(568),v=n(9813),d=n(3385),h=v("isConcatSpreadable"),y=9007199254740991,x="Maximum allowed index exceeded",g=o.TypeError,m=d>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=l("concat"),O=function(t){if(!c(t))return!1;var r=t[h];return void 0!==r?!!r:u(t)};e({target:"Array",proto:!0,forced:!m||!b},{concat:function(t){var r,n,e,o,i,u=a(this),c=p(u,0),l=0;for(r=-1,e=arguments.length;r<e;r++)if(O(i=-1===r?u:arguments[r])){if(l+(o=f(i))>y)throw g(x);for(n=0;n<o;n++,l++)n in i&&s(c,l,i[n])}else{if(l>=y)throw g(x);s(c,l++,i)}return c.length=l,c}})},2437:function(t,r,n){"use strict";var e=n(6887),o=n(6837);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},6274:function(t,r,n){"use strict";var e=n(4529),o=n(8479),i=n(2077),u=n(5402),c=n(7771),a="Array Iterator",f=u.set,s=u.getterFor(a);t.exports=c(Array,"Array",(function(t,r){f(this,{type:a,target:e(t),index:0,kind:r})}),(function(){var t=s(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},186:function(t,r,n){"use strict";var e=n(6887),o=n(1899),i=n(1052),u=n(4284),c=n(941),a=n(9413),f=n(623),s=n(4529),p=n(5449),l=n(9813),v=n(568),d=n(3765),h=v("slice"),y=l("species"),x=o.Array,g=Math.max;e({target:"Array",proto:!0,forced:!h},{slice:function(t,r){var n,e,o,l=s(this),v=f(l),h=a(t,v),m=a(void 0===r?v:r,v);if(i(l)&&(n=l.constructor,(u(n)&&(n===x||i(n.prototype))||c(n)&&null===(n=n[y]))&&(n=void 0),n===x||void 0===n))return d(l,h,m);for(e=new(void 0===n?x:n)(g(m-h,0)),o=0;h<m;h++,o++)h in l&&p(e,o,l[h]);return e.length=o,e}})},4115:function(t,r,n){"use strict";var e=n(6887),o=n(5329),i=n(4883),u=n(9678),c=n(623),a=n(5803),f=n(5981),s=n(1388),p=n(4194),l=n(4342),v=n(7797),d=n(3385),h=n(8938),y=[],x=o(y.sort),g=o(y.push),m=f((function(){y.sort(void 0)})),b=f((function(){y.sort(null)})),O=p("sort"),S=!f((function(){if(d)return d<70;if(!(l&&l>3)){if(v)return!0;if(h)return h<603;var t,r,n,e,o="";for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(e=0;e<47;e++)y.push({k:r+e,v:n})}for(y.sort((function(t,r){return r.v-t.v})),e=0;e<y.length;e++)r=y[e].k.charAt(0),o.charAt(o.length-1)!==r&&(o+=r);return"DGBEFHACIJK"!==o}}));e({target:"Array",proto:!0,forced:m||!b||!O||!S},{sort:function(t){void 0!==t&&i(t);var r=u(this);if(S)return void 0===t?x(r):x(r,t);var n,e,o=[],f=c(r);for(e=0;e<f;e++)e in r&&g(o,r[e]);for(s(o,function(t){return function(r,n){return void 0===n?-1:void 0===r?1:void 0!==t?+t(r,n)||0:a(r)>a(n)?1:-1}}(t)),n=o.length,e=0;e<n;)r[e]=o[e++];for(;e<f;)delete r[e++];return r}})},2595:function(t,r,n){n(6887)({global:!0},{globalThis:n(1899)})},9221:function(t,r,n){var e=n(6887),o=n(4420);e({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},3882:function(t,r,n){n(6887)({target:"Object",stat:!0,sham:!n(5746)},{create:n(9290)})},6450:function(t,r,n){var e=n(6887),o=n(5746);e({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(5988).f})},9718:function(t,r,n){var e=n(6887),o=n(4018);e({global:!0,forced:parseFloat!=o},{parseFloat:o})},9668:function(t,r,n){n(2595)},7634:function(t,r,n){n(6274);var e=n(3281),o=n(1899),i=n(9697),u=n(2029),c=n(2077),a=n(9813)("toStringTag");for(var f in e){var s=o[f],p=s&&s.prototype;p&&i(p)!==a&&u(p,a,f),c[f]=c.Array}},9216:function(t,r,n){var e=n(9324);t.exports=e},2369:function(t,r,n){var e=n(1031);t.exports=e},8065:function(t,r,n){var e=n(6043);t.exports=e},6279:function(t,r,n){n(7634);var e=n(9697),o=n(953),i=n(7046),u=n(9216),c=Array.prototype,a={DOMTokenList:!0,NodeList:!0};t.exports=function(t){var r=t.forEach;return t===c||i(c,t)&&r===c.forEach||o(a,e(t))?u:r}},2073:function(t,r,n){var e=n(9601);t.exports=e},2856:function(t,r,n){var e=n(9355);t.exports=e},3383:function(t,r,n){var e=n(5999);t.exports=e},4471:function(t,r,n){var e=n(5254);t.exports=e},1910:function(t,r,n){var e=n(8171);t.exports=e},6877:function(t,r,n){var e=n(7579);t.exports=e},1550:function(t,r,n){var e,o,i;n(7302),n(1238),void 0!==n(149)||"undefined"!=typeof self&&self,o=[n(1942),n(7302),n(1238),n(4943),n(6394),n(9198)],void 0===(i="function"==typeof(e=function(r,e,o,i,u,c){"use strict";var a=n(530);r=a(r),e=a(e),o=a(o),i=a(i),u=a(u),c=a(c),t.exports=function(){function t(n){var e=n.top,o=n.bottom,i=n.id;(0,u.default)(this,t),(0,r.default)(this,{_oid:0,s:{p:[],o:[]},v:{top:e,bottom:o,id:i}})}return(0,c.default)(t,[{key:"id",value:function(t){return null===t?null:(void 0===t._oid&&(t._oid=this._oid++),t._oid)}},{key:"q",value:function(t,r,n){for(var i,u=0;i=t[u],u<t.length;u++){var c=[],a=Math.min(i[0],i[1]),f=Math.max(i[0],i[1]),s=void 0;for(var p in r[a]||(r[a]=2),r[f]||(r[f]=1),r)p>=a&&p<=f&&c.push([p,r[p]]);(0,e.default)(c).call(c,(function(t,r){return t[0]-r[0]})),delete r[a],delete r[f];var l=c.length;if(i[1]>=i[0]){for(var v,d=0;v=c[d],d<l;d++)if(2==v[1])s=v[0];else if(1==v[1]&&s&&v[0]-s>=n)return(0,o.default)(s)}else for(var h,y=l-1;h=c[y],y>-1;y--)if(1==h[1])s=h[0];else if(2==h[1]&&s&&s-h[0]>=n)return(0,o.default)(s-n)}return!1}},{key:"bpi",value:function(t,r,n){return t[r]||(t[r]=(0,i.default)(null)),t[r][n]||(t[r][n]=(0,i.default)(null)),t}},{key:"add",value:function(t){for(var r=this.bpi,n=this.q,e=this.s,o=this.v,i=o.id,u=this.id(t),c=!1,a=t.offsetHeight,f=0;!1===c&&f<3;)e.p=r(e.p,i,f),a=(c=n([[o.top,o.bottom]],e.p[i][f],a))+a,f++;f--;var s=e.p[i][f][c],p=e.p[i][f][a];return e.p[i][f][c]=s&&2==s?3:1,e.p[i][f][a]=p&&1==p?3:2,e.o[u]=[c,a,f,i],c}},{key:"remove",value:function(t){var r=this.s,n=this.id(t);if(void 0!==r.o[n]){var e=r.o[n],o=e[0],i=e[1],u=e[2],c=e[3],a=r.p[c][u][o],f=r.p[c][u][i];delete r.o[n],a&&(3===a?r.p[c][u][o]=2:1===a&&delete r.p[c][u][o]),f&&(3===f?r.p[c][u][i]=1:2===f&&delete r.p[c][u][i])}}}]),t}()})?e.apply(r,o):e)||(t.exports=i)},2068:function(t,r,n){var e,o,i;n(3649),n(8914),n(7766),void 0!==n(149)||"undefined"!=typeof self&&self,o=[n(6394),n(9198),n(3649),n(1942),n(8914),n(7766),n(1550)],e=function(r,e,o,i,u,c,a){"use strict";var f=n(530);r=f(r),e=f(e),o=f(o),i=f(i),u=f(u),c=f(c),a=f(a);var s=function(){var t;return(0,o.default)(t=Math.random().toString(36)).call(t,-6)};t.exports=function(){function t(n){var e,o=n.p;(0,r.default)(this,t),void 0===o.id&&(o.id="yzhan_p_"+s()),0===o.offsetHeight&&(o.style.height="300px");var c=new a.default({top:0,bottom:o.offsetHeight,id:o.id});(0,i.default)(this,{p:o,mtfWay:c,cssList:{danmu:"yzhan-danmu",animations:{rightToLeft:"yzhan-right-to-left"}},observer:new IntersectionObserver((function(t,r){(0,u.default)(t).call(t,(function(t){var n=t.isIntersecting,e=t.target;n&&(r.unobserve(e),c.remove(e),clearTimeout(e.timeout))}))}),{root:o,threshold:1}),resetHeight:function(){return c.v.bottom=o.offsetHeight}}),this.initCSS(o.id,o.offsetWidth),null===(e=this.window)||void 0===e||e.addEventListener("resize",this.resetHeight)}return(0,e.default)(t,[{key:"initCSS",value:function(t,r){var n,e=this.cssList,o=document.createElement("style");document.head.appendChild(o);var i=e.danmu,u=e.animations.rightToLeft;o.sheet.insertRule("#".concat(t," { position: relative }"),0),o.sheet.insertRule(".".concat(i," { position: absolute; right: 0; animation-timing-function: linear; animation-fill-mode: forwards; }"),0),o.sheet.insertRule((0,c.default)(n="@keyframes ".concat(u," { from { transform: translateX(100%); } to { transform: translateX(-")).call(n,r,"px); } }"),0)}},{key:"add",value:function(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).animations,n=this.p,e=this.mtfWay,o=this.cssList,u=this.observer;if(t&&n){void 0===t.id&&(t.id="yzhan_d_"+s());var c=o.danmu,a=o.animations.rightToLeft;for(var f in t.className=c,r=(0,i.default)({"animation-name":a,"animation-duration":"5s"},r))t.style.setProperty(f,r[f]);n.appendChild(t),t.style.top=e.add(t)+"px",t.destroy=function(){u.unobserve(t),e.remove(t),n.removeChild(t)},t.addEventListener("animationend",t.destroy),u.observe(t)}}},{key:"destroy",value:function(){for(var t,r=this.p,n=this.resetHeight,e=this.observer,o=0;o<r.children.length;o++){var u=r.children[o];u.removeEventListener("animationend",u.destroy),u.destroy()}e.disconnect(),null===(t=window)||void 0===t||t.removeEventListener("resize",n),(0,i.default)(this,{p:null,mtfWay:null,cssList:null,observer:null,resetHeight:null})}}]),t}()},void 0===(i=e.apply(r,o))||(t.exports=i)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n(2068)}()}));