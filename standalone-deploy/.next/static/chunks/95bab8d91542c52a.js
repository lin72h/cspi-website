(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,439884,(t,i,e)=>{t.e,i.exports=function(){function t(){return(t=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,r=Array(i);e<i;e++)r[e]=t[e];return r}var e="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function r(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}var n=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"],["frame","frame"]],o=["clip","crop","fill","fillmax","max","scale","min"],a=["top","bottom","left","right","center","focalpoint","entropy"],s=["format"],h=function(){function h(i,e){this.options=void 0,this.options=i?t({},i.options||{},e||{}):t({},e||{})}var u=h.prototype;return u.withOptions=function(e){var r=e.baseUrl||this.options.baseUrl,o={baseUrl:r};for(var a in e)e.hasOwnProperty(a)&&(o[function(t){for(var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return i(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,void 0)}}(t))){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n);!(e=r()).done;){var o=e.value,a=o[0],s=o[1];if(t===a||t===s)return a}return t}(a)]=e[a]);return new h(this,t({baseUrl:r},o))},u.image=function(t){return this.withOptions({source:t})},u.dataset=function(t){return this.withOptions({dataset:t})},u.projectId=function(t){return this.withOptions({projectId:t})},u.bg=function(t){return this.withOptions({bg:t})},u.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},u.width=function(t){return this.withOptions({width:t})},u.height=function(t){return this.withOptions({height:t})},u.focalPoint=function(t,i){return this.withOptions({focalPoint:{x:t,y:i}})},u.maxWidth=function(t){return this.withOptions({maxWidth:t})},u.minWidth=function(t){return this.withOptions({minWidth:t})},u.maxHeight=function(t){return this.withOptions({maxHeight:t})},u.minHeight=function(t){return this.withOptions({minHeight:t})},u.size=function(t,i){return this.withOptions({width:t,height:i})},u.blur=function(t){return this.withOptions({blur:t})},u.sharpen=function(t){return this.withOptions({sharpen:t})},u.rect=function(t,i,e,r){return this.withOptions({rect:{left:t,top:i,width:e,height:r}})},u.format=function(t){return this.withOptions({format:t})},u.invert=function(t){return this.withOptions({invert:t})},u.orientation=function(t){return this.withOptions({orientation:t})},u.quality=function(t){return this.withOptions({quality:t})},u.forceDownload=function(t){return this.withOptions({download:t})},u.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},u.flipVertical=function(){return this.withOptions({flipVertical:!0})},u.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},u.fit=function(t){if(-1===o.indexOf(t))throw Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},u.crop=function(t){if(-1===a.indexOf(t))throw Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},u.saturation=function(t){return this.withOptions({saturation:t})},u.auto=function(t){if(-1===s.indexOf(t))throw Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},u.pad=function(t){return this.withOptions({pad:t})},u.vanityName=function(t){return this.withOptions({vanityName:t})},u.frame=function(t){if(1!==t)throw Error('Invalid frame value "'+t+'"');return this.withOptions({frame:t})},u.url=function(){return function(i){var o=t({},i||{}),a=o.source;delete o.source;var s=function(i){var e,n;if(!i)return null;if("string"==typeof i&&(n=i,/^https?:\/\//.test(""+n)))e={asset:{_ref:r(i)}};else if("string"==typeof i)e={asset:{_ref:i}};else if(i&&"string"==typeof i._ref)e={asset:i};else if(i&&"string"==typeof i._id)e={asset:{_ref:i._id||""}};else if(i&&i.asset&&"string"==typeof i.asset.url)e={asset:{_ref:r(i.asset.url)}};else{if("object"!=typeof i.asset)return null;e=t({},i)}return i.crop&&(e.crop=i.crop),i.hotspot&&(e.hotspot=i.hotspot),function(i){if(i.crop&&i.hotspot)return i;var e=t({},i);return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}(e)}(a);if(!s)throw Error("Unable to resolve image URL from source ("+JSON.stringify(a)+")");var h=function(t){var i=t.split("-"),r=i[1],n=i[2],o=i[3];if(!r||!n||!o)throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+e+'".');var a=n.split("x"),s=a[0],h=a[1],u=+s,l=+h;if(!(isFinite(u)&&isFinite(l)))throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+e+'".');return{id:r,width:u,height:l,format:o}}(s.asset._ref||s.asset._id||""),u=Math.round(s.crop.left*h.width),l=Math.round(s.crop.top*h.height),p={left:u,top:l,width:Math.round(h.width-s.crop.right*h.width-u),height:Math.round(h.height-s.crop.bottom*h.height-l)},f=s.hotspot.height*h.height/2,c=s.hotspot.width*h.width/2,d=s.hotspot.x*h.width,g=s.hotspot.y*h.height;return o.rect||o.focalPoint||o.ignoreImageParams||o.crop||(o=t({},o,function(t,i){var e,r=i.width,n=i.height;if(!(r&&n))return{width:r,height:n,rect:t.crop};var o=t.crop,a=t.hotspot,s=r/n;if(o.width/o.height>s){var h=Math.round(o.height),u=Math.round(h*s),l=Math.max(0,Math.round(o.top)),p=Math.max(0,Math.round(Math.round((a.right-a.left)/2+a.left)-u/2));p<o.left?p=o.left:p+u>o.left+o.width&&(p=o.left+o.width-u),e={left:p,top:l,width:u,height:h}}else{var f=o.width,c=Math.round(f/s),d=Math.max(0,Math.round(o.left)),g=Math.max(0,Math.round(Math.round((a.bottom-a.top)/2+a.top)-c/2));g<o.top?g=o.top:g+c>o.top+o.height&&(g=o.top+o.height-c),e={left:d,top:g,width:f,height:c}}return{width:r,height:n,rect:e}}({crop:p,hotspot:{left:d-c,top:g-f,right:d+c,bottom:g+f}},o))),function(t){var i=(t.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),e=t.vanityName?"/"+t.vanityName:"",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format+e,o=i+"/images/"+t.projectId+"/"+t.dataset+"/"+r,a=[];if(t.rect){var s=t.rect,h=s.left,u=s.top,l=s.width,p=s.height;(0!==h||0!==u||p!==t.asset.height||l!==t.asset.width)&&a.push("rect="+h+","+u+","+l+","+p)}t.bg&&a.push("bg="+t.bg),t.focalPoint&&(a.push("fp-x="+t.focalPoint.x),a.push("fp-y="+t.focalPoint.y));var f=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return(f&&a.push("flip="+f),n.forEach(function(i){var e=i[0],r=i[1];void 0!==t[e]?a.push(r+"="+encodeURIComponent(t[e])):void 0!==t[r]&&a.push(r+"="+encodeURIComponent(t[r]))}),0===a.length)?o:o+"?"+a.join("&")}(t({},o,{asset:h}))}(this.options)},u.toString=function(){return this.url()},h}();return function(t){if(t&&"config"in t&&"function"==typeof t.config){var i=t.config(),e=i.apiHost,r=i.projectId,n=i.dataset;return new h(null,{baseUrl:(e||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:r,dataset:n})}if(t&&"clientConfig"in t&&"object"==typeof t.clientConfig){var o=t.clientConfig,a=o.apiHost,s=o.projectId,u=o.dataset;return new h(null,{baseUrl:(a||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:s,dataset:u})}return new h(null,t||{})}}()},241196,t=>{"use strict";var i=t.i(843476),e=t.i(473605),r=t.i(439884),n=t.i(247167);let o={projectId:n.default.env.NEXT_PUBLIC_SANITY_PROJECT_ID||"",dataset:"production",apiVersion:"2023-03-09",useCdn:!1,token:n.default.env.NEXT_PUBLIC_SANITY_API_TOKEN||""};function a(t,...i){let e=t.length-1;return t.slice(0,e).reduce((t,e,r)=>t+e+i[r],"")+t[e]}a`*[_type == "post"] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`,a`*[_type == "post" && slug.current == $slug][0] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`,a`*[_type == "post" && category->slug.current == $slug] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`,a`*[_type == "post" && $slug in tags] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`,a`*[_type == "category"] {
    name,
    slug  
  }`,t.i(828499);var s=t.i(657688),h=t.i(522016);t.s(["default",0,({blog:t})=>{let{mainImage:n,title:a,metadata:u,slug:l}=t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(e.MotionDiv,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.5},viewport:{once:!0},className:"animate_top group rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection",children:[(0,i.jsx)(h.default,{href:`/blog/${l.current}`,className:"relative block aspect-[368/239] overflow-hidden rounded-lg",children:n?(0,i.jsx)(s.default,{src:n?(0,r.default)(o).image(n).url():"",alt:a,fill:!0,className:"duration-300 group-hover:scale-110"}):"No image"}),(0,i.jsxs)("div",{className:"px-4",children:[(0,i.jsx)("h3",{className:"mb-3.5 mt-7.5 line-clamp-2 text-lg font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2",children:(0,i.jsx)(h.default,{href:`/blog/${l.current}`,children:`${a.slice(0,40)}...`})}),(0,i.jsx)("p",{className:"line-clamp-3",children:u})]})]})})}],241196)}]);