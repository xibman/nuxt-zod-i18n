import{d as u,aN as n,aT as i,a$ as m}from"./entry.90983124.js";import{u as o}from"./useGithub.3e64d463.js";const f=u({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(t){const{fetchCommits:r}=o(),{data:s,pending:e,refresh:a}=await n(`github-commits-${i(t.query)}`,()=>r(t.query));return{commits:s,pending:e,refresh:a}},render({commits:t,pending:r,refresh:s}){var a;const e=m();return(a=e==null?void 0:e.default)==null?void 0:a.call(e,{commits:t,pending:r,refresh:s})}});export{f as default};
