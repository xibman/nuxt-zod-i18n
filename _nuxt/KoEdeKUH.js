const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DCDO3Uog.js","./Bp5r8Sa_.js","./yPNdBW-D.js","./DY8QSC5h.js","./hbOoBq-x.js","./Cpj98o6Y.js","./BELIdli1.js","./w_anNcm0.js","./index.FxdF6oUC.css","./bNaE6FFb.js","./BNDVfiKV.js","./dwbxrGt_.js","./DNgb01dh.js","./u4bm_LMz.js","./CVESyXxo.js","./DWmkr0yC.js","./I2-WqrIG.js","./7A4NbmCl.js","./CNXuF1yM.js","./CIiI48o2.js"])))=>i.map(i=>d[i]);
var K=Object.defineProperty;var Q=(i,t,r)=>t in i?K(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;var p=(i,t,r)=>Q(i,typeof t!="symbol"?t+"":t,r);import{_ as u}from"./DY8QSC5h.js";import{getMdcConfigs as X}from"./bNaE6FFb.js";class j extends Error{constructor(t){super(t),this.name="ShikiError"}}function Y(){return 2147483648}function Z(){return typeof performance<"u"?performance.now():Date.now()}const q=(i,t)=>i+(t-i%t)%t;async function tt(i){let t,r;const e={};function m(o){r=o,e.HEAPU8=new Uint8Array(o),e.HEAPU32=new Uint32Array(o)}function _(o,s,L){e.HEAPU8.copyWithin(o,s,s+L)}function c(o){try{return t.grow(o-r.byteLength+65535>>>16),m(t.buffer),1}catch{}}function a(o){const s=e.HEAPU8.length;o=o>>>0;const L=Y();if(o>L)return!1;for(let w=1;w<=4;w*=2){let g=s*(1+.2/w);g=Math.min(g,o+100663296);const A=Math.min(L,q(Math.max(o,g),65536));if(c(A))return!0}return!1}const n=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function l(o,s,L=1024){const w=s+L;let g=s;for(;o[g]&&!(g>=w);)++g;if(g-s>16&&o.buffer&&n)return n.decode(o.subarray(s,g));let A="";for(;s<g;){let E=o[s++];if(!(E&128)){A+=String.fromCharCode(E);continue}const U=o[s++]&63;if((E&224)===192){A+=String.fromCharCode((E&31)<<6|U);continue}const D=o[s++]&63;if((E&240)===224?E=(E&15)<<12|U<<6|D:E=(E&7)<<18|U<<12|D<<6|o[s++]&63,E<65536)A+=String.fromCharCode(E);else{const P=E-65536;A+=String.fromCharCode(55296|P>>10,56320|P&1023)}}return A}function v(o,s){return o?l(e.HEAPU8,o,s):""}const h={emscripten_get_now:Z,emscripten_memcpy_big:_,emscripten_resize_heap:a,fd_write:()=>0};async function b(){const s=await i({env:h,wasi_snapshot_preview1:h});t=s.memory,m(t.buffer),Object.assign(e,s),e.UTF8ToString=v}return await b(),e}let y=null;function et(i){throw new j(i.UTF8ToString(i.getLastOnigError()))}class B{constructor(t){p(this,"utf16Length");p(this,"utf8Length");p(this,"utf16Value");p(this,"utf8Value");p(this,"utf16OffsetToUtf8");p(this,"utf8OffsetToUtf16");const r=t.length,e=B._utf8ByteLength(t),m=e!==r,_=m?new Uint32Array(r+1):null;m&&(_[r]=e);const c=m?new Uint32Array(e+1):null;m&&(c[e]=r);const a=new Uint8Array(e);let n=0;for(let l=0;l<r;l++){const v=t.charCodeAt(l);let h=v,b=!1;if(v>=55296&&v<=56319&&l+1<r){const o=t.charCodeAt(l+1);o>=56320&&o<=57343&&(h=(v-55296<<10)+65536|o-56320,b=!0)}m&&(_[l]=n,b&&(_[l+1]=n),h<=127?c[n+0]=l:h<=2047?(c[n+0]=l,c[n+1]=l):h<=65535?(c[n+0]=l,c[n+1]=l,c[n+2]=l):(c[n+0]=l,c[n+1]=l,c[n+2]=l,c[n+3]=l)),h<=127?a[n++]=h:h<=2047?(a[n++]=192|(h&1984)>>>6,a[n++]=128|(h&63)>>>0):h<=65535?(a[n++]=224|(h&61440)>>>12,a[n++]=128|(h&4032)>>>6,a[n++]=128|(h&63)>>>0):(a[n++]=240|(h&1835008)>>>18,a[n++]=128|(h&258048)>>>12,a[n++]=128|(h&4032)>>>6,a[n++]=128|(h&63)>>>0),b&&l++}this.utf16Length=r,this.utf8Length=e,this.utf16Value=t,this.utf8Value=a,this.utf16OffsetToUtf8=_,this.utf8OffsetToUtf16=c}static _utf8ByteLength(t){let r=0;for(let e=0,m=t.length;e<m;e++){const _=t.charCodeAt(e);let c=_,a=!1;if(_>=55296&&_<=56319&&e+1<m){const n=t.charCodeAt(e+1);n>=56320&&n<=57343&&(c=(_-55296<<10)+65536|n-56320,a=!0)}c<=127?r+=1:c<=2047?r+=2:c<=65535?r+=3:r+=4,a&&e++}return r}createString(t){const r=t.omalloc(this.utf8Length);return t.HEAPU8.set(this.utf8Value,r),r}}const T=class T{constructor(t){p(this,"id",++T.LAST_ID);p(this,"_onigBinding");p(this,"content");p(this,"utf16Length");p(this,"utf8Length");p(this,"utf16OffsetToUtf8");p(this,"utf8OffsetToUtf16");p(this,"ptr");if(!y)throw new j("Must invoke loadWasm first.");this._onigBinding=y,this.content=t;const r=new B(t);this.utf16Length=r.utf16Length,this.utf8Length=r.utf8Length,this.utf16OffsetToUtf8=r.utf16OffsetToUtf8,this.utf8OffsetToUtf16=r.utf8OffsetToUtf16,this.utf8Length<1e4&&!T._sharedPtrInUse?(T._sharedPtr||(T._sharedPtr=y.omalloc(1e4)),T._sharedPtrInUse=!0,y.HEAPU8.set(r.utf8Value,T._sharedPtr),this.ptr=T._sharedPtr):this.ptr=r.createString(y)}convertUtf8OffsetToUtf16(t){return this.utf8OffsetToUtf16?t<0?0:t>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[t]:t}convertUtf16OffsetToUtf8(t){return this.utf16OffsetToUtf8?t<0?0:t>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[t]:t}dispose(){this.ptr===T._sharedPtr?T._sharedPtrInUse=!1:this._onigBinding.ofree(this.ptr)}};p(T,"LAST_ID",0),p(T,"_sharedPtr",0),p(T,"_sharedPtrInUse",!1);let H=T;class rt{constructor(t){p(this,"_onigBinding");p(this,"_ptr");if(!y)throw new j("Must invoke loadWasm first.");const r=[],e=[];for(let a=0,n=t.length;a<n;a++){const l=new B(t[a]);r[a]=l.createString(y),e[a]=l.utf8Length}const m=y.omalloc(4*t.length);y.HEAPU32.set(r,m/4);const _=y.omalloc(4*t.length);y.HEAPU32.set(e,_/4);const c=y.createOnigScanner(m,_,t.length);for(let a=0,n=t.length;a<n;a++)y.ofree(r[a]);y.ofree(_),y.ofree(m),c===0&&et(y),this._onigBinding=y,this._ptr=c}dispose(){this._onigBinding.freeOnigScanner(this._ptr)}findNextMatchSync(t,r,e){let m=0;if(typeof e=="number"&&(m=e),typeof t=="string"){t=new H(t);const _=this._findNextMatchSync(t,r,!1,m);return t.dispose(),_}return this._findNextMatchSync(t,r,!1,m)}_findNextMatchSync(t,r,e,m){const _=this._onigBinding,c=_.findNextOnigScannerMatch(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(r),m);if(c===0)return null;const a=_.HEAPU32;let n=c/4;const l=a[n++],v=a[n++],h=[];for(let b=0;b<v;b++){const o=t.convertUtf8OffsetToUtf16(a[n++]),s=t.convertUtf8OffsetToUtf16(a[n++]);h[b]={start:o,end:s,length:s-o}}return{index:l,captureIndices:h}}}function it(i){return typeof i.instantiator=="function"}function nt(i){return typeof i.default=="function"}function ot(i){return typeof i.data<"u"}function st(i){return typeof Response<"u"&&i instanceof Response}function at(i){var t;return typeof ArrayBuffer<"u"&&(i instanceof ArrayBuffer||ArrayBuffer.isView(i))||typeof Buffer<"u"&&((t=Buffer.isBuffer)==null?void 0:t.call(Buffer,i))||typeof SharedArrayBuffer<"u"&&i instanceof SharedArrayBuffer||typeof Uint32Array<"u"&&i instanceof Uint32Array}let C;function ft(i){if(C)return C;async function t(){y=await tt(async r=>{let e=i;return e=await e,typeof e=="function"&&(e=await e(r)),typeof e=="function"&&(e=await e(r)),it(e)?e=await e.instantiator(r):nt(e)?e=await e.default(r):(ot(e)&&(e=e.data),st(e)?typeof WebAssembly.instantiateStreaming=="function"?e=await ut(e)(r):e=await ct(e)(r):at(e)?e=await M(e)(r):e instanceof WebAssembly.Module?e=await M(e)(r):"default"in e&&e.default instanceof WebAssembly.Module&&(e=await M(e.default)(r))),"instance"in e&&(e=e.instance),"exports"in e&&(e=e.exports),e})}return C=t(),C}function M(i){return t=>WebAssembly.instantiate(i,t)}function ut(i){return t=>WebAssembly.instantiateStreaming(i,t)}function ct(i){return async t=>{const r=await i.arrayBuffer();return WebAssembly.instantiate(r,t)}}let lt;function wt(){return lt}async function ht(i){return i&&await ft(i),{createScanner(t){return new rt(t)},createString(t){return new H(t)}}}async function mt(i){return ht(i)}function G({langs:i=[],themes:t=[],bundledLangs:r={},bundledThemes:e={},getMdcConfigs:m,options:_,engine:c}={}){let a,n;async function l(){var P,O;const{createHighlighterCore:o,addClassToHast:s,isSpecialLang:L,isSpecialTheme:w}=await u(async()=>{const{createHighlighterCore:S,addClassToHast:V,isSpecialLang:F,isSpecialTheme:R}=await import("./DCDO3Uog.js");return{createHighlighterCore:S,addClassToHast:V,isSpecialLang:F,isSpecialTheme:R}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),{transformerNotationDiff:g,transformerNotationErrorLevel:A,transformerNotationFocus:E,transformerNotationHighlight:U}=await u(async()=>{const{transformerNotationDiff:S,transformerNotationErrorLevel:V,transformerNotationFocus:F,transformerNotationHighlight:R}=await import("./DyXibH8M.js");return{transformerNotationDiff:S,transformerNotationErrorLevel:V,transformerNotationFocus:F,transformerNotationHighlight:R}},[],import.meta.url),D=await o({langs:i,themes:t,engine:c});for await(const S of await h())await((O=(P=S.shiki)==null?void 0:P.setup)==null?void 0:O.call(P,D));return{shiki:D,addClassToHast:s,isSpecialLang:L,isSpecialTheme:w,transformers:[g(),A(),E(),U()]}}async function v(){return a||(a=l()),a}async function h(){return n||(n=Promise.resolve((m==null?void 0:m())||[])),n}return async(o,s,L,w={})=>{var W,$,z;const{shiki:g,addClassToHast:A,isSpecialLang:E,isSpecialTheme:U,transformers:D}=await v(),P={defaultColor:!1,meta:{__raw:w.meta}};s==="ts-type"||s==="typescript-type"?(s="typescript",P.grammarContextCode="let a:"):(s==="vue-html"||s==="vue-template")&&(s="vue",P.grammarContextCode="<template>");const O={...typeof L=="string"?{default:L}:L||{}},S=g.getLoadedThemes(),V=g.getLoadedLanguages();typeof s=="string"&&!V.includes(s)&&!E(s)&&(r[s]?await g.loadLanguage(r[s]):s="text");for(const[f,d]of Object.entries(O))typeof d=="string"&&!S.includes(d)&&!U(d)&&(e[d]?await g.loadTheme(e[d]):O[f]="none");const F=[...D];for(const f of await h()){const d=typeof((W=f.shiki)==null?void 0:W.transformers)=="function"?await(($=f.shiki)==null?void 0:$.transformers(o,s,L,w)):((z=f.shiki)==null?void 0:z.transformers)||[];F.push(...d)}const x=g.codeToHast(o.trimEnd(),{lang:s,...P,themes:O,transformers:[...F,{name:"mdc:highlight",line(f,d){var I;(I=w.highlights)!=null&&I.includes(d)&&A(f,"highlight"),f.properties.line=d}},{name:"mdc:newline",line(f){if(o!=null&&o.includes(`
`)){if(f.children.length===0||f.children.length===1&&f.children[0].type==="element"&&f.children[0].children.length===1&&f.children[0].children[0].type==="text"&&f.children[0].children[0].value===""){f.children=[{type:"element",tagName:"span",properties:{emptyLinePlaceholder:!0},children:[{type:"text",value:`
`}]}];return}const d=f.children.at(-1);if((d==null?void 0:d.type)==="element"&&d.tagName==="span"){const I=d.children.at(-1);(I==null?void 0:I.type)==="text"&&(I.value+=`
`)}}}}]}).children[0],J=x.children[0],k=_==null?void 0:_.wrapperStyle;x.properties.style=k?typeof k=="string"?k:x.properties.style:"";const N=[];return Object.keys(O).forEach(f=>{const d=f!=="default"?`.${f}`:"";N.push(k?`${d} .shiki,`:"",`html .${f} .shiki span {`,`color: var(--shiki-${f});`,`background: var(--shiki-${f}-bg);`,`font-style: var(--shiki-${f}-font-style);`,`font-weight: var(--shiki-${f}-font-weight);`,`text-decoration: var(--shiki-${f}-text-decoration);`,"}"),N.push(`html${d} .shiki span {`,`color: var(--shiki-${f});`,`background: var(--shiki-${f}-bg);`,`font-style: var(--shiki-${f}-font-style);`,`font-weight: var(--shiki-${f}-font-weight);`,`text-decoration: var(--shiki-${f}-text-decoration);`,"}")}),{tree:J.children,className:Array.isArray(x.properties.class)?x.properties.class.join(" "):x.properties.class,inlineStyle:x.properties.style,style:N.join("")}}}const _t={javascript:()=>u(()=>import("./DNgb01dh.js"),[],import.meta.url),js:()=>u(()=>import("./DNgb01dh.js"),[],import.meta.url),jsx:()=>u(()=>import("./CM4fc1WH.js"),[],import.meta.url),json:()=>u(()=>import("./DWmkr0yC.js"),[],import.meta.url),typescript:()=>u(()=>import("./CVESyXxo.js"),[],import.meta.url),ts:()=>u(()=>import("./CVESyXxo.js"),[],import.meta.url),tsx:()=>u(()=>import("./DqpEK-75.js"),[],import.meta.url),vue:()=>u(()=>import("./BNDVfiKV.js"),__vite__mapDeps([10,11,12,13,14,15,16]),import.meta.url),css:()=>u(()=>import("./u4bm_LMz.js"),[],import.meta.url),html:()=>u(()=>import("./dwbxrGt_.js"),__vite__mapDeps([11,12,13]),import.meta.url),shellscript:()=>u(()=>import("./HNM5thJl.js"),[],import.meta.url),bash:()=>u(()=>import("./HNM5thJl.js"),[],import.meta.url),sh:()=>u(()=>import("./HNM5thJl.js"),[],import.meta.url),shell:()=>u(()=>import("./HNM5thJl.js"),[],import.meta.url),zsh:()=>u(()=>import("./HNM5thJl.js"),[],import.meta.url),markdown:()=>u(()=>import("./CNXuF1yM.js"),[],import.meta.url),md:()=>u(()=>import("./CNXuF1yM.js"),[],import.meta.url),mdc:()=>u(()=>import("./7A4NbmCl.js"),__vite__mapDeps([17,18,19,16,11,12,13]),import.meta.url),yaml:()=>u(()=>import("./CIiI48o2.js"),[],import.meta.url),yml:()=>u(()=>import("./CIiI48o2.js"),[],import.meta.url),diff:()=>u(()=>import("./Dnfm4U7b.js"),[],import.meta.url),ini:()=>u(()=>import("./BjABl1g7.js"),[],import.meta.url),properties:()=>u(()=>import("./BjABl1g7.js"),[],import.meta.url)},pt={"material-theme-lighter":()=>u(()=>import("./B0m2ddpp.js"),[],import.meta.url).then(i=>i.default),"material-theme":()=>u(()=>import("./D5KoaKCx.js"),[],import.meta.url).then(i=>i.default),"material-theme-palenight":()=>u(()=>import("./Csfq5Kiy.js"),[],import.meta.url).then(i=>i.default)},dt={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"}},gt=mt(()=>u(()=>import("./CG6Dc4jp.js"),[],import.meta.url)),yt=G({bundledLangs:_t,bundledThemes:pt,options:dt,getMdcConfigs:X,engine:gt}),At=Object.freeze(Object.defineProperty({__proto__:null,createShikiHighlighter:G,default:yt},Symbol.toStringTag,{value:"Module"}));export{ht as c,wt as g,At as m};
