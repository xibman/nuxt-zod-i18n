import{y as d,L as m,c as f,M as b,P as g,q as n,R as e,s as x,m as s,v as y,T as _,S as o,V as l,a2 as v,a3 as C,a4 as h,a5 as S,a6 as k}from"./hXN4IFxx.js";import{r as T}from"./CnUCuEwm.js";import"./hbOoBq-x.js";const w=d({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(t){const i=m(),c=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:i.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:a}=b("content.collapsible",void 0,c,void 0,!0);return S(()=>k()),(u,V)=>{const p=_;return x(),g(e(h),{as:"div"},{default:n(({open:r})=>[s(e(v),{class:o(e(a).button.base)},{default:n(()=>[s(p,{name:e(a).button.icon.name,class:o([e(a).button.icon.base,r?e(a).button.icon.active:e(a).button.icon.inactive])},null,8,["name","class"]),y("span",null,l(r?t.closeText:t.openText)+" "+l(t.name),1)]),_:2},1032,["class"]),s(e(C),{class:o(e(a).panel)},{default:n(()=>[T(u.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}}),U=Object.assign(w,{__name:"Collapsible"});export{U as default};
