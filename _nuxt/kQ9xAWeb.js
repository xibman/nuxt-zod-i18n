import{y as g,B as C,c as b,I as S,f as _,E as Q,J as m,G as A,z as O,A as $}from"./vQgku0AB.js";const k=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(u){const{path:t,only:n,without:o,where:a,sort:l,limit:f,skip:d,locale:s,find:y}=C(u),c=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!S().public.content.experimental.advanceQuery;_(()=>u,()=>r(),{deep:!0});const i=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:p,refresh:r}=await Q(`content-query-${A(u)}`,()=>{let e;return t.value?e=m(t.value):e=m(),n.value&&(e=e.only(n.value)),o.value&&(e=e.without(o.value)),a.value&&(e=e.where(a.value)),l.value&&(e=e.sort(l.value)),f.value&&(e=e.limit(f.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),y.value==="one"?e.findOne().then(i):y.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:c,data:p,refresh:r}},render(u){var v;const t=O(),{data:n,refresh:o,isPartial:a,path:l,only:f,without:d,where:s,sort:y,limit:c,skip:h,locale:i,find:p}=u,r={path:l,only:f,without:d,where:s,sort:y,limit:c,skip:h,locale:i,find:p};if(r.find==="one"){if(!n&&(t!=null&&t["not-found"]))return t["not-found"]({props:r,...this.$attrs});if(t!=null&&t.empty&&(n==null?void 0:n._type)==="markdown"&&!((v=n==null?void 0:n.body)!=null&&v.children.length))return t.empty({props:r,...this.$attrs})}else if((!n||!n.length)&&t!=null&&t["not-found"])return t["not-found"]({props:r,...this.$attrs});return t!=null&&t.default?t.default({data:n,refresh:o,isPartial:a,props:r,...this.$attrs}):((w,q)=>$("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:n,props:r,isPartial:a})}}),N=k,R=Object.assign(N,{__name:"ContentQuery"});export{R as default};