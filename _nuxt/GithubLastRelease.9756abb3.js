import{d as u,aN as n,aT as d,a$ as f}from"./entry.d937c162.js";import{u as i}from"./useGithub.d7ec09d6.js";const h=u({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchLastRelease:s}=i(),{data:r,refresh:e,pending:t}=await n(`github-last-release-${d(a.query)}`,()=>s(a.query));return{release:r,refresh:e,pending:t}},render({release:a,refresh:s,pending:r}){var t;const e=f();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{release:a,refresh:s,pending:r})}});export{h as default};