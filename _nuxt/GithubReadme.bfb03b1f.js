import{d as n,aN as s,aT as d,a$ as f}from"./entry.d937c162.js";import{u as i}from"./useGithub.d7ec09d6.js";const c=n({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchReadme:r}=i(),{data:u,refresh:e,pending:t}=await s(`github-readme-${d(a.query)}`,()=>r(a.query));return{readme:u,refresh:e,pending:t}},render({readme:a,refresh:r,pending:u}){var t;const e=f();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{readme:a,refresh:r,pending:u})}});export{c as default};