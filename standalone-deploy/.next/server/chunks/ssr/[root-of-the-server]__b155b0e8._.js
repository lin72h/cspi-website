module.exports=[224361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},814747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},342602,(a,b,c)=>{"use strict";b.exports=a.r(918622)},187924,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].ReactJsxRuntime},572131,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].React},935112,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].ReactDOM},909270,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored.contexts.AppRouterContext},738783,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored["react-ssr"].ReactServerDOMTurbopackClient},918622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},120635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},736313,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored.contexts.HooksClientContext},818341,(a,b,c)=>{"use strict";b.exports=a.r(342602).vendored.contexts.ServerInsertedHtml},446786,(a,b,c)=>{b.exports=a.x("os",()=>require("os"))},406461,(a,b,c)=>{b.exports=a.x("zlib",()=>require("zlib"))},792509,(a,b,c)=>{b.exports=a.x("url",()=>require("url"))},688947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},427699,(a,b,c)=>{b.exports=a.x("events",()=>require("events"))},254799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},921517,(a,b,c)=>{b.exports=a.x("http",()=>require("http"))},524836,(a,b,c)=>{b.exports=a.x("https",()=>require("https"))},630407,(a,b,c)=>{var d="undefined"!=typeof Element,e="function"==typeof Map,f="function"==typeof Set,g="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;b.exports=function(a,b){try{return function a(b,c){if(b===c)return!0;if(b&&c&&"object"==typeof b&&"object"==typeof c){var h,i,j,k;if(b.constructor!==c.constructor)return!1;if(Array.isArray(b)){if((h=b.length)!=c.length)return!1;for(i=h;0!=i--;)if(!a(b[i],c[i]))return!1;return!0}if(e&&b instanceof Map&&c instanceof Map){if(b.size!==c.size)return!1;for(k=b.entries();!(i=k.next()).done;)if(!c.has(i.value[0]))return!1;for(k=b.entries();!(i=k.next()).done;)if(!a(i.value[1],c.get(i.value[0])))return!1;return!0}if(f&&b instanceof Set&&c instanceof Set){if(b.size!==c.size)return!1;for(k=b.entries();!(i=k.next()).done;)if(!c.has(i.value[0]))return!1;return!0}if(g&&ArrayBuffer.isView(b)&&ArrayBuffer.isView(c)){if((h=b.length)!=c.length)return!1;for(i=h;0!=i--;)if(b[i]!==c[i])return!1;return!0}if(b.constructor===RegExp)return b.source===c.source&&b.flags===c.flags;if(b.valueOf!==Object.prototype.valueOf&&"function"==typeof b.valueOf&&"function"==typeof c.valueOf)return b.valueOf()===c.valueOf();if(b.toString!==Object.prototype.toString&&"function"==typeof b.toString&&"function"==typeof c.toString)return b.toString()===c.toString();if((h=(j=Object.keys(b)).length)!==Object.keys(c).length)return!1;for(i=h;0!=i--;)if(!Object.prototype.hasOwnProperty.call(c,j[i]))return!1;if(d&&b instanceof Element)return!1;for(i=h;0!=i--;)if(("_owner"!==j[i]&&"__v"!==j[i]&&"__o"!==j[i]||!b.$$typeof)&&!a(b[j[i]],c[j[i]]))return!1;return!0}return b!=b&&c!=c}(a,b)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},828525,(a,b,c)=>{!function(){"use strict";var c={}.hasOwnProperty;function d(){for(var a="",b=0;b<arguments.length;b++){var f=arguments[b];f&&(a=e(a,function(a){if("string"==typeof a||"number"==typeof a)return a;if("object"!=typeof a)return"";if(Array.isArray(a))return d.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var b="";for(var f in a)c.call(a,f)&&a[f]&&(b=e(b,f));return b}(f)))}return a}function e(a,b){return b?a?a+" "+b:a+b:a}if(b.exports)d.default=d,b.exports=d;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==d&&a.v(d);else window.classNames=d}()},192434,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},68063,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getDeploymentId:function(){return f},getDeploymentIdQueryOrEmptyString:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(){return!1}function g(){return""}},346058,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},808591,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"useMergedRef",{enumerable:!0,get:function(){return e}});let d=a.r(572131);function e(a,b){let c=(0,d.useRef)(null),e=(0,d.useRef)(null);return(0,d.useCallback)(d=>{if(null===d){let a=c.current;a&&(c.current=null,a());let b=e.current;b&&(e.current=null,b())}else a&&(c.current=f(a,d)),b&&(e.current=f(b,d))},[a,b])}function f(a,b){if("function"!=typeof a)return a.current=b,()=>{a.current=null};{let c=a(b);return"function"==typeof c?c:()=>a(null)}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},225700,a=>{"use strict";var b=a.i(346271);let c=b.motion.div,d=b.motion.section;b.motion.span,b.motion.h2,b.motion.p;let e=b.motion.a;a.s(["MotionA",0,e,"MotionDiv",0,c,"MotionSection",0,d])},533095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(833354),g=a.r(494915),h=a.r(767161),i=f._(a.r(402305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},571987,(a,b,c)=>{b.exports=a.r(533095)},739118,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DEFAULT_SEGMENT_KEY:function(){return l},NOT_FOUND_SEGMENT_KEY:function(){return m},PAGE_SEGMENT_KEY:function(){return k},addSearchParamsIfPageSegment:function(){return i},computeSelectedLayoutSegment:function(){return j},getSegmentValue:function(){return f},getSelectedLayoutSegmentPath:function(){return function a(b,c,d=!0,e=[]){let g;if(d)g=b[1][c];else{let a=b[1];g=a.children??Object.values(a)[0]}if(!g)return e;let h=f(g[0]);return!h||h.startsWith(k)?e:(e.push(h),a(g,c,!1,e))}},isGroupSegment:function(){return g},isParallelRouteSegment:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return Array.isArray(a)?a[1]:a}function g(a){return"("===a[0]&&a.endsWith(")")}function h(a){return a.startsWith("@")&&"@children"!==a}function i(a,b){if(a.includes(k)){let a=JSON.stringify(b);return"{}"!==a?k+"?"+a:k}return a}function j(a,b){if(!a||0===a.length)return null;let c="children"===b?a[0]:a[a.length-1];return c===l?null:c}let k="__PAGE__",l="__DEFAULT__",m="/_not-found"},692237,a=>{"use strict";var b=a.i(187924);let c={isSanityEnabled:!1,isStripeEnabled:!1,isAlgoliaEnabled:!1,isMailchimpEnabled:!1,isAuthEnabled:!1},d={sanity:(0,b.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["Sanity is not enabled. Follow the"," ",(0,b.jsx)("a",{href:"https://nextjstemplates.com/docs/enableintegration",className:"text-primary underline",target:"_blank",rel:"noopener noreferrer",children:"documentation"})," ","to enable it."]}),stripe:(0,b.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["Stripe is not enabled. Follow the"," ",(0,b.jsx)("a",{href:"https://nextjstemplates.com/docs/enableintegration",className:"text-primary underline",target:"_blank",rel:"noopener noreferrer",children:"documentation"})," ","to enable it."]}),algolia:(0,b.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["Algolia is not enabled. Follow the"," ",(0,b.jsx)("a",{href:"https://nextjstemplates.com/docs/enableintegration",className:"text-primary underline",children:"documentation"})," ","to enable it."]}),mailchimp:(0,b.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["Mailchimp is not enabled. Follow the ","",(0,b.jsx)("a",{href:"https://nextjstemplates.com/docs/enableintegration",className:"text-primary underline",children:"documentation"})," ","to enable it."]}),auth:(0,b.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["Auth is not enabled. Follow the"," ",(0,b.jsx)("a",{href:"https://nextjstemplates.com/docs/enableintegration",className:"text-primary underline",children:"documentation"})," ","to enable it."]})};a.s(["integrations",()=>c,"messages",()=>d])},489679,a=>{"use strict";var b=a.i(187924),c=a.i(572131);let d=(0,c.createContext)(void 0);a.s(["LanguageProvider",0,({children:e})=>{let[f,g]=(0,c.useState)("zh"),[h,i]=(0,c.useState)({}),[j,k]=(0,c.useState)(!1);(0,c.useEffect)(()=>{k(!0);let b=localStorage.getItem("language");b&&g(b),a.A(178625).then(a=>{i(a.default)})},[]),(0,c.useEffect)(()=>{j&&localStorage.setItem("language",f)},[f,j]);let l=(a,b="common")=>h[b]&&h[b][f]&&h[b][f][a]||a;return(0,b.jsx)(d.Provider,{value:{language:f,setLanguage:g,t:l,getBilingualText:(a,b="common")=>{let c=l(a,b),d="en"===f?"zh":"en";return{current:c,other:h[b]&&h[b][d]&&h[b][d][a]||a}}},children:e})},"useLanguage",0,()=>{let a=(0,c.useContext)(d);if(void 0===a)throw Error("useLanguage must be used within a LanguageProvider");return a}])},522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},406704,a=>{"use strict";let b,c;var d,e=a.i(572131);let f={data:""},g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,i=/\n+/g,j=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?j(g,f):f+"{"+j(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=j(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=j.p?j.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},k={},l=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+l(a[c]);return b}return a};function m(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let m=l(a),n=k[m]||(k[m]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(m));if(!k[n]){let b=m!==a?a:(a=>{let b,c,d=[{}];for(;b=g.exec(a.replace(h,""));)b[4]?d.shift():b[3]?(c=b[3].replace(i," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(i," ").trim();return d[0]})(a);k[n]=j(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&k.g?k.g:null;return c&&(k.g=k[n]),f=k[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":j(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||f,d.g,d.o,d.k)}m.bind({g:1});let n,o,p,q=m.bind({k:1});function r(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:o&&o()},h),c.o=/ *go\d+/.test(i),h.className=m.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),p&&j[0]&&p(h),n(j,h)}return b?b(e):e}}var s=(a,b)=>"function"==typeof a?a(b):a,t=(b=0,()=>(++b).toString()),u=(a,b)=>{switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,20)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:c}=b;return u(a,{type:+!!a.toasts.find(a=>a.id===c.id),toast:c});case 3:let{toastId:d}=b;return{...a,toasts:a.toasts.map(a=>a.id===d||void 0===d?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let e=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+e}))}}},v=[],w={toasts:[],pausedAt:void 0},x=a=>{w=u(w,a),v.forEach(a=>{a(w)})},y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=a=>(b,c)=>{let d=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||t()}))(b,a,c);return x({type:2,toast:d}),d.id},A=(a,b)=>z("blank")(a,b);A.error=z("error"),A.success=z("success"),A.loading=z("loading"),A.custom=z("custom"),A.dismiss=a=>{x({type:3,toastId:a})},A.remove=a=>x({type:4,toastId:a}),A.promise=(a,b,c)=>{let d=A.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?s(b.success,a):void 0;return e?A.success(e,{id:d,...c,...null==c?void 0:c.success}):A.dismiss(d),a}).catch(a=>{let e=b.error?s(b.error,a):void 0;e?A.error(e,{id:d,...c,...null==c?void 0:c.error}):A.dismiss(d)}),a};var B=(a,b)=>{x({type:1,toast:{id:a,height:b}})},C=()=>{x({type:5,time:Date.now()})},D=new Map,E=1e3,F=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,I=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,K=r("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,L=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,M=q`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,N=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,O=r("div")`
  position: absolute;
`,P=r("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=r("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,S=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?e.createElement(R,null,b):b:"blank"===c?null:e.createElement(P,null,e.createElement(K,{...d}),"loading"!==c&&e.createElement(O,null,"error"===c?e.createElement(I,{...d}):e.createElement(N,{...d})))},T=r("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,U=r("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=e.memo(({toast:a,position:b,style:d,children:f})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${q(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=e.createElement(S,{toast:a}),i=e.createElement(U,{...a.ariaProps},s(a.message,a));return e.createElement(T,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof f?f({icon:h,message:i}):e.createElement(e.Fragment,null,h,i))});d=e.createElement,j.p=void 0,n=d,o=void 0,p=void 0;var W=({id:a,className:b,style:c,onHeightUpdate:d,children:f})=>{let g=e.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return e.createElement("div",{ref:g,className:b,style:c},f)},X=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,containerStyle:h,containerClassName:i})=>{let{toasts:j,handlers:k}=(a=>{let{toasts:b,pausedAt:c}=((a={})=>{let[b,c]=(0,e.useState)(w),d=(0,e.useRef)(w);(0,e.useEffect)(()=>(d.current!==w&&c(w),v.push(c),()=>{let a=v.indexOf(c);a>-1&&v.splice(a,1)}),[]);let f=b.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||y[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...b,toasts:f}})(a);(0,e.useEffect)(()=>{if(c)return;let a=Date.now(),d=b.map(b=>{if(b.duration===1/0)return;let c=(b.duration||0)+b.pauseDuration-(a-b.createdAt);if(c<0){b.visible&&A.dismiss(b.id);return}return setTimeout(()=>A.dismiss(b.id),c)});return()=>{d.forEach(a=>a&&clearTimeout(a))}},[b,c]);let d=(0,e.useCallback)(()=>{c&&x({type:6,time:Date.now()})},[c]),f=(0,e.useCallback)((a,c)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=c||{},g=b.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[b]);return(0,e.useEffect)(()=>{b.forEach(a=>{if(a.dismissed)((a,b=E)=>{if(D.has(a))return;let c=setTimeout(()=>{D.delete(a),x({type:4,toastId:a})},b);D.set(a,c)})(a.id,a.removeDelay);else{let b=D.get(a.id);b&&(clearTimeout(b),D.delete(a.id))}})},[b]),{toasts:b,handlers:{updateHeight:B,startPause:C,endPause:d,calculateOffset:f}}})(d);return e.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...h},className:i,onMouseEnter:k.startPause,onMouseLeave:k.endPause},j.map(d=>{let h,i,j=d.position||b,l=k.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${l*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(W,{id:d.id,key:d.id,onHeightUpdate:k.updateHeight,className:d.visible?X:"",style:m},"custom"===d.type?s(d.message,d):g?g(d):e.createElement(V,{toast:d,position:j}))}))};a.s(["Toaster",()=>Y,"default",()=>A,"toast",()=>A],406704)},718402,a=>{"use strict";var b=a.i(187924),c=a.i(572131);class d extends Error{constructor(a,b){a instanceof Error?super(void 0,{cause:{err:a,...a.cause,...b}}):"string"==typeof a?(b instanceof Error&&(b={err:b,...b.cause}),super(a,b)):super(void 0,a),this.name=this.constructor.name,this.type=this.constructor.type??"AuthError",this.kind=this.constructor.kind??"error",Error.captureStackTrace?.(this,this.constructor);const c=`https://errors.authjs.dev#${this.type.toLowerCase()}`;this.message+=`${this.message?". ":""}Read more at ${c}`}}class e extends d{}class f extends d{}async function g(a,b,c,d={}){let f=`${h(b)}/${a}`;try{let a={headers:{"Content-Type":"application/json",...d?.headers?.cookie?{cookie:d.headers.cookie}:{}}};d?.body&&(a.body=JSON.stringify(d.body),a.method="POST");let b=await fetch(f,a),c=await b.json();if(!b.ok)throw c;return c}catch(a){return c.error(new e(a.message,a)),null}}function h(a){return`${a.baseUrlServer}${a.basePathServer}`}function i(){return Math.floor(Date.now()/1e3)}function j(a){let b=new URL("http://localhost:3000/api/auth");a&&!a.startsWith("http")&&(a=`https://${a}`);let c=new URL(a||b),d=("/"===c.pathname?b.pathname:c.pathname).replace(/\/$/,""),e=`${c.origin}${d}`;return{origin:c.origin,host:c.host,path:d,base:e,toString:()=>e}}let k={baseUrl:j(process.env.NEXTAUTH_URL??process.env.VERCEL_URL).origin,basePath:j(process.env.NEXTAUTH_URL).path,baseUrlServer:j(process.env.NEXTAUTH_URL_INTERNAL??process.env.NEXTAUTH_URL??process.env.VERCEL_URL).origin,basePathServer:j(process.env.NEXTAUTH_URL_INTERNAL??process.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:()=>{}},l=null;function m(){return"undefined"==typeof BroadcastChannel?{postMessage:()=>{},addEventListener:()=>{},removeEventListener:()=>{},name:"next-auth",onmessage:null,onmessageerror:null,close:()=>{},dispatchEvent:()=>!1}:new BroadcastChannel("next-auth")}function n(){return null===l&&(l=m()),l}let o={debug:console.debug,error:console.error,warn:console.warn},p=c.createContext?.(void 0);function q(a){if(!p)throw Error("React Context is unavailable in Server Components");let b=c.useContext(p),{required:d,onUnauthenticated:e}=a??{},f=d&&"unauthenticated"===b.status;return(c.useEffect(()=>{if(f){let a=`${k.basePath}/signin?${new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href})}`;e?e():window.location.href=a}},[f,e]),f)?{data:b.data,update:b.update,status:"loading"}:b}async function r(a){let b=await g("session",k,o,a);return(a?.broadcast??!0)&&m().postMessage({event:"session",data:{trigger:"getSession"}}),b}async function s(){let a=await g("csrf",k,o);return a?.csrfToken??""}async function t(){return g("providers",k,o)}async function u(a,b,c){let{callbackUrl:d,...e}=b??{},{redirect:f=!0,redirectTo:g=d??window.location.href,...i}=e,j=h(k),l=await t();if(!l){let a=`${j}/error`;window.location.href=a;return}if(!a||!l[a]){let a=`${j}/signin?${new URLSearchParams({callbackUrl:g})}`;window.location.href=a;return}let m=l[a].type;if("webauthn"===m)throw TypeError(`Provider id "${a}" refers to a WebAuthn provider.
Please use \`import { signIn } from "next-auth/webauthn"\` instead.`);let n=`${j}/${"credentials"===m?"callback":"signin"}/${a}`,o=await s(),p=await fetch(`${n}?${new URLSearchParams(c)}`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({...i,csrfToken:o,callbackUrl:g})}),q=await p.json();if(f){let a=q.url??g;window.location.href=a,a.includes("#")&&window.location.reload();return}let r=new URL(q.url).searchParams.get("error")??void 0,u=new URL(q.url).searchParams.get("code")??void 0;return p.ok&&await k._getSession({event:"storage"}),{error:r,code:u,status:p.status,ok:p.ok,url:r?null:q.url}}async function v(a){let{redirect:b=!0,redirectTo:c=a?.callbackUrl??window.location.href}=a??{},d=h(k),e=await s(),f=await fetch(`${d}/signout`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({csrfToken:e,callbackUrl:c})}),g=await f.json();if(n().postMessage({event:"session",data:{trigger:"signout"}}),b){let a=g.url??c;window.location.href=a,a.includes("#")&&window.location.reload();return}return await k._getSession({event:"storage"}),g}function w(a){if(!p)throw Error("React Context is unavailable in Server Components");let{children:d,basePath:e,refetchInterval:h,refetchWhenOffline:j}=a;e&&(k.basePath=e);let l=void 0!==a.session;k._lastSync=l?i():0;let[m,q]=c.useState(()=>(l&&(k._session=a.session),a.session)),[t,u]=c.useState(!l);c.useEffect(()=>(k._getSession=async({event:a}={})=>{try{let b="storage"===a;if(b||void 0===k._session){k._lastSync=i(),k._session=await r({broadcast:!b}),q(k._session);return}if(!a||null===k._session||i()<k._lastSync)return;k._lastSync=i(),k._session=await r(),q(k._session)}catch(a){o.error(new f(a.message,a))}finally{u(!1)}},k._getSession(),()=>{k._lastSync=0,k._session=void 0,k._getSession=()=>{}}),[]),c.useEffect(()=>{let a=()=>k._getSession({event:"storage"});return n().addEventListener("message",a),()=>n().removeEventListener("message",a)},[]),c.useEffect(()=>{let{refetchOnWindowFocus:b=!0}=a,c=()=>{b&&"visible"===document.visibilityState&&k._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",c,!1),()=>document.removeEventListener("visibilitychange",c,!1)},[a.refetchOnWindowFocus]);let v=function(){let[a,b]=c.useState("undefined"!=typeof navigator&&navigator.onLine),d=()=>b(!0),e=()=>b(!1);return c.useEffect(()=>(window.addEventListener("online",d),window.addEventListener("offline",e),()=>{window.removeEventListener("online",d),window.removeEventListener("offline",e)}),[]),a}(),w=!1!==j||v;c.useEffect(()=>{if(h&&w){let a=setInterval(()=>{k._session&&k._getSession({event:"poll"})},1e3*h);return()=>clearInterval(a)}},[h,w]);let x=c.useMemo(()=>({data:m,status:t?"loading":m?"authenticated":"unauthenticated",async update(a){if(t)return;u(!0);let b=await g("session",k,o,void 0===a?void 0:{body:{csrfToken:await s(),data:a}});return u(!1),b&&(q(b),n().postMessage({event:"session",data:{trigger:"getSession"}})),b}}),[m,t]);return(0,b.jsx)(p.Provider,{value:x,children:d})}a.s(["SessionProvider",()=>w,"signIn",()=>u,"signOut",()=>v,"useSession",()=>q],718402)},178625,a=>{a.v(b=>Promise.all(["server/chunks/ssr/translations_index_ts_a17f93db._.js"].map(b=>a.l(b))).then(()=>b(609408)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__b155b0e8._.js.map