import{_ as p}from"./BzgyczLa.js";import{y as l,ah as m,c as o,P as i,R as b,s as f}from"./hXN4IFxx.js";import"./hbOoBq-x.js";const v=l({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(n){const e=n,r=m().isEnabled(),c=o(()=>{let t=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(t=e.value.excerpt),t}),d=o(()=>{const{body:t,excerpt:u,...a}=e.value;return{...a,...e.data}}),s=o(()=>({...e.components,...d.value._components||{}}));return(t,u)=>{const a=p;return f(),i(a,{body:c.value,data:d.value,tag:n.tag,components:s.value,"data-content-id":b(r)?n.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}}),g=Object.assign(v,{__name:"ContentRendererMarkdown"});export{g as default};
