import{d,bb as l,E as v,m as f,z as p,aN as m,bc as g,aT as h,a$ as y,N as i,aE as _}from"./entry.90983124.js";const N=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=l(u),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await m(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(u){const a=y(),{navigation:n}=u,o=e=>i(_,{to:e._path},()=>e.title),t=(e,r)=>i("ul",r?{"data-level":r}:null,e.map(s=>s.children?i("li",null,[o(s),t(s.children,r+1)]):i("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),C=N;export{C as default};
