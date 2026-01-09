module.exports=[277721,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";c.default=function(a){var b=a.split("-"),c=b[1],e=b[2],f=b[3];if(!c||!e||!f)throw Error("Malformed asset _ref '".concat(a,"'. Expected an id like \"").concat(d,'".'));var g=e.split("x"),h=g[0],i=g[1],j=+h,k=+i;if(!(isFinite(j)&&isFinite(k)))throw Error("Malformed asset _ref '".concat(a,"'. Expected an id like \"").concat(d,'".'));return{id:c,width:j,height:k,format:f}}},314855,(a,b,c)=>{"use strict";var d=a.e&&a.e.__assign||function(){return(d=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function e(a){var b=a.split("/").slice(-1);return"image-".concat(b[0]).replace(/\.([a-z]+)$/,"-$1")}Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(a){var b,c;if(!a)return null;if("string"==typeof a&&(c=a,/^https?:\/\//.test("".concat(c))))b={asset:{_ref:e(a)}};else if("string"==typeof a)b={asset:{_ref:a}};else if(a&&"string"==typeof a._ref)b={asset:a};else if(a&&"string"==typeof a._id)b={asset:{_ref:a._id||""}};else if(a&&a.asset&&"string"==typeof a.asset.url)b={asset:{_ref:e(a.asset.url)}};else{if("object"!=typeof a.asset)return null;b=d({},a)}return a.crop&&(b.crop=a.crop),a.hotspot&&(b.hotspot=a.hotspot),function(a){if(a.crop&&a.hotspot)return a;var b=d({},a);return b.crop||(b.crop={left:0,top:0,bottom:0,right:0}),b.hotspot||(b.hotspot={x:.5,y:.5,height:1,width:1}),b}(b)}},841862,(a,b,c)=>{"use strict";var d=a.e&&a.e.__assign||function(){return(d=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},e=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.parseSource=c.SPEC_NAME_TO_URL_NAME_MAPPINGS=void 0;var f=e(a.r(277721)),g=e(a.r(314855));c.parseSource=g.default,c.SPEC_NAME_TO_URL_NAME_MAPPINGS=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"],["frame","frame"]],c.default=function(a){var b=d({},a||{}),e=b.source;delete b.source;var h=(0,g.default)(e);if(!h)throw Error("Unable to resolve image URL from source (".concat(JSON.stringify(e),")"));var i=h.asset._ref||h.asset._id||"",j=(0,f.default)(i),k=Math.round(h.crop.left*j.width),l=Math.round(h.crop.top*j.height),m={left:k,top:l,width:Math.round(j.width-h.crop.right*j.width-k),height:Math.round(j.height-h.crop.bottom*j.height-l)},n=h.hotspot.height*j.height/2,o=h.hotspot.width*j.width/2,p=h.hotspot.x*j.width,q=h.hotspot.y*j.height;return b.rect||b.focalPoint||b.ignoreImageParams||b.crop||(b=d(d({},b),function(a,b){var c,d=b.width,e=b.height;if(!(d&&e))return{width:d,height:e,rect:a.crop};var f=a.crop,g=a.hotspot,h=d/e;if(f.width/f.height>h){var i=Math.round(f.height),j=Math.round(i*h),k=Math.max(0,Math.round(f.top)),l=Math.max(0,Math.round(Math.round((g.right-g.left)/2+g.left)-j/2));l<f.left?l=f.left:l+j>f.left+f.width&&(l=f.left+f.width-j),c={left:l,top:k,width:j,height:i}}else{var j=f.width,i=Math.round(j/h),l=Math.max(0,Math.round(f.left)),m=Math.max(0,Math.round(Math.round((g.bottom-g.top)/2+g.top)-i/2));m<f.top?m=f.top:m+i>f.top+f.height&&(m=f.top+f.height-i),c={left:l,top:m,width:j,height:i}}return{width:d,height:e,rect:c}}({crop:m,hotspot:{left:p-o,top:q-n,right:p+o,bottom:q+n}},b))),function(a){var b=(a.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),d=a.vanityName?"/".concat(a.vanityName):"",e="".concat(a.asset.id,"-").concat(a.asset.width,"x").concat(a.asset.height,".").concat(a.asset.format).concat(d),f="".concat(b,"/images/").concat(a.projectId,"/").concat(a.dataset,"/").concat(e),g=[];if(a.rect){var h=a.rect,i=h.left,j=h.top,k=h.width,l=h.height;(0!==i||0!==j||l!==a.asset.height||k!==a.asset.width)&&g.push("rect=".concat(i,",").concat(j,",").concat(k,",").concat(l))}a.bg&&g.push("bg=".concat(a.bg)),a.focalPoint&&(g.push("fp-x=".concat(a.focalPoint.x)),g.push("fp-y=".concat(a.focalPoint.y)));var m=[a.flipHorizontal&&"h",a.flipVertical&&"v"].filter(Boolean).join("");return(m&&g.push("flip=".concat(m)),c.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(b){var c=b[0],d=b[1];void 0!==a[c]?g.push("".concat(d,"=").concat(encodeURIComponent(a[c]))):void 0!==a[d]&&g.push("".concat(d,"=").concat(encodeURIComponent(a[d])))}),0===g.length)?f:"".concat(f,"?").concat(g.join("&"))}(d(d({},b),{asset:j}))}},840402,(a,b,c)=>{"use strict";var d=a.e&&a.e.__assign||function(){return(d=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},e=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c),Object.defineProperty(a,d,{enumerable:!0,get:function(){return b[c]}})}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),f=a.e&&a.e.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),g=a.e&&a.e.__importStar||function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)"default"!==c&&Object.prototype.hasOwnProperty.call(a,c)&&e(b,a,c);return f(b,a),b};Object.defineProperty(c,"__esModule",{value:!0}),c.ImageUrlBuilder=void 0;var h=g(a.r(841862)),i=["clip","crop","fill","fillmax","max","scale","min"],j=["top","bottom","left","right","center","focalpoint","entropy"],k=["format"];c.default=function(a){if(a&&"config"in a&&"function"==typeof a.config){var b=a.config(),c=b.apiHost,d=b.projectId,e=b.dataset,f=c||"https://api.sanity.io";return new l(null,{baseUrl:f.replace(/^https:\/\/api\./,"https://cdn."),projectId:d,dataset:e})}if(a&&"clientConfig"in a&&"object"==typeof a.clientConfig){var g=a.clientConfig,c=g.apiHost,d=g.projectId,e=g.dataset,f=c||"https://api.sanity.io";return new l(null,{baseUrl:f.replace(/^https:\/\/api\./,"https://cdn."),projectId:d,dataset:e})}return new l(null,a||{})};var l=function(){function a(a,b){this.options=a?d(d({},a.options||{}),b||{}):d({},b||{})}return a.prototype.withOptions=function(b){var c=b.baseUrl||this.options.baseUrl,e={baseUrl:c};for(var f in b)b.hasOwnProperty(f)&&(e[function(a){for(var b=h.SPEC_NAME_TO_URL_NAME_MAPPINGS,c=0;c<b.length;c++){var d=b[c],e=d[0],f=d[1];if(a===e||a===f)return e}return a}(f)]=b[f]);return new a(this,d({baseUrl:c},e))},a.prototype.image=function(a){return this.withOptions({source:a})},a.prototype.dataset=function(a){return this.withOptions({dataset:a})},a.prototype.projectId=function(a){return this.withOptions({projectId:a})},a.prototype.bg=function(a){return this.withOptions({bg:a})},a.prototype.dpr=function(a){return this.withOptions(a&&1!==a?{dpr:a}:{})},a.prototype.width=function(a){return this.withOptions({width:a})},a.prototype.height=function(a){return this.withOptions({height:a})},a.prototype.focalPoint=function(a,b){return this.withOptions({focalPoint:{x:a,y:b}})},a.prototype.maxWidth=function(a){return this.withOptions({maxWidth:a})},a.prototype.minWidth=function(a){return this.withOptions({minWidth:a})},a.prototype.maxHeight=function(a){return this.withOptions({maxHeight:a})},a.prototype.minHeight=function(a){return this.withOptions({minHeight:a})},a.prototype.size=function(a,b){return this.withOptions({width:a,height:b})},a.prototype.blur=function(a){return this.withOptions({blur:a})},a.prototype.sharpen=function(a){return this.withOptions({sharpen:a})},a.prototype.rect=function(a,b,c,d){return this.withOptions({rect:{left:a,top:b,width:c,height:d}})},a.prototype.format=function(a){return this.withOptions({format:a})},a.prototype.invert=function(a){return this.withOptions({invert:a})},a.prototype.orientation=function(a){return this.withOptions({orientation:a})},a.prototype.quality=function(a){return this.withOptions({quality:a})},a.prototype.forceDownload=function(a){return this.withOptions({download:a})},a.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},a.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},a.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},a.prototype.fit=function(a){if(-1===i.indexOf(a))throw Error('Invalid fit mode "'.concat(a,'"'));return this.withOptions({fit:a})},a.prototype.crop=function(a){if(-1===j.indexOf(a))throw Error('Invalid crop mode "'.concat(a,'"'));return this.withOptions({crop:a})},a.prototype.saturation=function(a){return this.withOptions({saturation:a})},a.prototype.auto=function(a){if(-1===k.indexOf(a))throw Error('Invalid auto mode "'.concat(a,'"'));return this.withOptions({auto:a})},a.prototype.pad=function(a){return this.withOptions({pad:a})},a.prototype.vanityName=function(a){return this.withOptions({vanityName:a})},a.prototype.frame=function(a){if(1!==a)throw Error('Invalid frame value "'.concat(a,'"'));return this.withOptions({frame:a})},a.prototype.url=function(){return(0,h.default)(this.options)},a.prototype.toString=function(){return this.url()},a}();c.ImageUrlBuilder=l},927058,(a,b,c)=>{"use strict";b.exports=(a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}})(a.r(840402)).default},954807,a=>{"use strict";var b=a.i(187924),c=a.i(225700),d=a.i(927058);let e={projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||"",dataset:"production",apiVersion:"2023-03-09",useCdn:!1,token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN||""};function f(a,...b){let c=a.length-1;return a.slice(0,c).reduce((a,c,d)=>a+c+b[d],"")+a[c]}f`*[_type == "post"] {
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
  }`,f`*[_type == "post" && slug.current == $slug][0] {
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
  }`,f`*[_type == "post" && category->slug.current == $slug] {
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
  }`,f`*[_type == "post" && $slug in tags] {
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
  }`,f`*[_type == "category"] {
    name,
    slug  
  }`,a.i(692237);var g=a.i(571987),h=a.i(238246);a.s(["default",0,({blog:a})=>{let{mainImage:f,title:i,metadata:j,slug:k}=a;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(c.MotionDiv,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.5},viewport:{once:!0},className:"animate_top group rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection",children:[(0,b.jsx)(h.default,{href:`/blog/${k.current}`,className:"relative block aspect-[368/239] overflow-hidden rounded-lg",children:f?(0,b.jsx)(g.default,{src:f?(0,d.default)(e).image(f).url():"",alt:i,fill:!0,className:"duration-300 group-hover:scale-110"}):"No image"}),(0,b.jsxs)("div",{className:"px-4",children:[(0,b.jsx)("h3",{className:"mb-3.5 mt-7.5 line-clamp-2 text-lg font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2",children:(0,b.jsx)(h.default,{href:`/blog/${k.current}`,children:`${i.slice(0,40)}...`})}),(0,b.jsx)("p",{className:"line-clamp-3",children:j})]})]})})}],954807)}];

//# sourceMappingURL=_f6639349._.js.map