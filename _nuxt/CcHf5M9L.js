import{i as T,t as g,r as y,a as V,c as W,h as _,b as A,w as I,p as b,d as j,e as G,n as Q,f as U,g as q,j as $,o as D,k as F}from"./vQgku0AB.js";const O=T?window:void 0;function P(t){var s;const r=g(t);return(s=r==null?void 0:r.$el)!=null?s:r}function M(...t){let s,r,m,h;if(typeof t[0]=="string"||Array.isArray(t[0])?([r,m,h]=t,s=O):[s,r,m,h]=t,!s)return Q;r=$(r),m=$(m);const i=[],a=()=>{i.forEach(f=>f()),i.length=0},v=(f,c,l,e)=>(f.addEventListener(c,l,e),()=>f.removeEventListener(c,l,e)),u=U(()=>[P(s),g(h)],([f,c])=>{if(a(),!f)return;const l=q(c)?{...c}:c;i.push(...r.flatMap(e=>m.map(n=>v(f,e,n,l))))},{immediate:!0,flush:"post"}),p=()=>{u(),a()};return j(p),p}function R(){const t=y(!1),s=F();return s&&D(()=>{t.value=!0},s),t}function z(t){const s=R();return W(()=>(s.value,!!t()))}const J=Symbol("vueuse-ssr-width");function X(){const t=_()?A(J,null):null;return typeof t=="number"?t:void 0}function E(t,s={}){const{window:r=O,ssrWidth:m=X()}=s,h=z(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function"),i=y(typeof m=="number");let a;const v=y(!1),u=c=>{v.value=c.matches},p=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",u):a.removeListener(u))},f=I(()=>{if(i.value){i.value=!h.value;const c=g(t).split(",");v.value=c.some(l=>{const e=l.includes("not all"),n=l.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=l.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let w=!!(n||d);return n&&w&&(w=m>=b(n[1])),d&&w&&(w=m<=b(d[1])),e?!w:w});return}h.value&&(p(),a=r.matchMedia(g(t)),"addEventListener"in a?a.addEventListener("change",u):a.addListener(u),v.value=a.matches)});return j(()=>{f(),p(),a=void 0}),W(()=>v.value)}const Z={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function k(t,s={}){function r(e,n){let d=g(t[g(e)]);return n!=null&&(d=G(d,n)),typeof d=="number"&&(d=`${d}px`),d}const{window:m=O,strategy:h="min-width",ssrWidth:i=X()}=s,a=typeof i=="number",v=a?y(!1):{value:!0};a&&V(()=>v.value=!!m);function u(e,n){return!v.value&&a?e==="min"?i>=b(n):i<=b(n):m?m.matchMedia(`(${e}-width: ${n})`).matches:!1}const p=e=>E(()=>`(min-width: ${r(e)})`,s),f=e=>E(()=>`(max-width: ${r(e)})`,s),c=Object.keys(t).reduce((e,n)=>(Object.defineProperty(e,n,{get:()=>h==="min-width"?p(n):f(n),enumerable:!0,configurable:!0}),e),{});function l(){const e=Object.keys(t).map(n=>[n,c[n],b(r(n))]).sort((n,d)=>n[2]-d[2]);return W(()=>e.filter(([,n])=>n.value).map(([n])=>n))}return Object.assign(c,{greaterOrEqual:p,smallerOrEqual:f,greater(e){return E(()=>`(min-width: ${r(e,.1)})`,s)},smaller(e){return E(()=>`(max-width: ${r(e,-.1)})`,s)},between(e,n){return E(()=>`(min-width: ${r(e)}) and (max-width: ${r(n,-.1)})`,s)},isGreater(e){return u("min",r(e,.1))},isGreaterOrEqual(e){return u("min",r(e))},isSmaller(e){return u("max",r(e,-.1))},isSmallerOrEqual(e){return u("max",r(e))},isInBetween(e,n){return u("min",r(e))&&u("max",r(n,-.1))},current:l,active(){const e=l();return W(()=>e.value.length===0?"":e.value.at(h==="min-width"?-1:0))}})}const K={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function ee(t={}){const{type:s="page",touch:r=!0,resetOnTouchEnds:m=!1,initialValue:h={x:0,y:0},window:i=O,target:a=i,scroll:v=!0,eventFilter:u}=t;let p=null,f=0,c=0;const l=y(h.x),e=y(h.y),n=y(null),d=typeof s=="function"?s:K[s],w=o=>{const x=d(o);p=o,x&&([l.value,e.value]=x,n.value="mouse"),i&&(f=i.scrollX,c=i.scrollY)},S=o=>{if(o.touches.length>0){const x=d(o.touches[0]);x&&([l.value,e.value]=x,n.value="touch")}},L=()=>{if(!p||!i)return;const o=d(p);p instanceof MouseEvent&&o&&(l.value=o[0]+i.scrollX-f,e.value=o[1]+i.scrollY-c)},Y=()=>{l.value=h.x,e.value=h.y},H=u?o=>u(()=>w(o),{}):o=>w(o),B=u?o=>u(()=>S(o),{}):o=>S(o),C=u?()=>u(()=>L(),{}):()=>L();if(a){const o={passive:!0};M(a,["mousemove","dragover"],H,o),r&&s!=="movement"&&(M(a,["touchstart","touchmove"],B,o),m&&M(a,"touchend",Y,o)),v&&s==="page"&&M(i,"scroll",C,{passive:!0})}return{x:l,y:e,sourceType:n}}export{ee as a,Z as b,P as c,O as d,k as u};