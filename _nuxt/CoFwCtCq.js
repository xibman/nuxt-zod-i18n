import m from"./CPyyQtJG.js";import u from"./CXU0iZ95.js";import{y as f,M as p,s as n,l as r,S as o,Q as a,m as s,v as g,V as y,R as b,x as v}from"./vQgku0AB.js";const _=f({__name:"ProseCode",props:{code:{type:String,required:!0},icon:{type:String,default:void 0},language:{type:String,default:void 0},hideHeader:{type:Boolean,default:!1},filename:{type:String,default:void 0},highlights:{type:Array,default:void 0},meta:{type:String,default:void 0}},setup(e){const d={wrapper:"[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5",header:"flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose",icon:{base:""},button:{base:"absolute top-2.5 right-2.5"},filename:"text-gray-700 dark:text-gray-200 text-sm/6"},{ui:t}=p("content.prose.code",void 0,d,void 0,!0);return(i,x)=>{const l=m,c=u;return n(),r("div",{class:o(["relative",!!e.filename&&a(t).wrapper])},[e.filename&&!e.hideHeader?(n(),r("div",{key:0,class:o(a(t).header)},[s(l,{icon:e.icon,filename:e.filename,class:o(a(t).icon.base)},null,8,["icon","filename","class"]),g("span",{class:o(a(t).filename)},y(e.filename),3)],2)):b("",!0),s(c,{code:e.code,class:o(a(t).button.base)},null,8,["code","class"]),v(i.$slots,"default")],2)}}}),k=Object.assign(_,{__name:"ProseCode"});export{k as default};
