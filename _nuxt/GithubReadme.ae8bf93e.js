import{d as n,aL as s,aR as d,aZ as f}from"./entry.f1babb25.js";import{u as i}from"./useGithub.856834b4.js";const c=n({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchReadme:r}=i(),{data:u,refresh:e,pending:t}=await s(`github-readme-${d(a.query)}`,()=>r(a.query));return{readme:u,refresh:e,pending:t}},render({readme:a,refresh:r,pending:u}){var t;const e=f();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{readme:a,refresh:r,pending:u})}});export{c as default};