import{d as S,ap as A,aq as k,b as r,c as p,n as c,E as e,aj as v,j as I,t as C,f as m,e as h,g as $,F as N,ah as D,ai as b,ak as w,ab as B,ao as ae,w as U,aL as se,y as z,D as P,aM as Y,aN as re,ac as oe,aO as ie,r as T,H as le,aP as ce,aQ as ue,u as de,aR as pe,k as ge,v as me,aS as Z,aT as ye,aU as fe,aw as G,aV as J,aW as ke,aX as he,aY as be,s as ee,aZ as ve}from"./Cyv6xLjR.js";import xe from"./7wK7jUqA.js";import"./CD1QHaNt.js";import"./CRbwRq1h.js";const _e={class:"flex flex-col lg:flex-row items-start gap-6"},we={class:"flex-1"},$e=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const o={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},i=a,{ui:s,attrs:n}=A("page.header",k(i,"ui"),o,k(i,"class"),!0);return(t,l)=>{var d;const y=B,g=ae;return r(),p("div",w({class:e(s).wrapper},e(n)),[a.headline||t.$slots.headline?(r(),p("div",{key:0,class:c(e(s).headline)},[v(t.$slots,"headline",{},()=>[I(C(a.headline),1)])],2)):m("",!0),h("div",_e,[a.icon||t.$slots.icon?(r(),p("div",{key:0,class:c(e(s).icon.wrapper)},[v(t.$slots,"icon",{},()=>[$(y,{name:a.icon,class:c(e(s).icon.base)},null,8,["name","class"])])],2)):m("",!0),h("div",we,[h("div",{class:c(e(s).container)},[h("h1",{class:c(e(s).title)},[v(t.$slots,"title",{},()=>[I(C(a.title),1)])],2),(d=a.links)!=null&&d.length||t.$slots.links?(r(),p("div",{key:0,class:c(e(s).links)},[v(t.$slots,"links",{},()=>[(r(!0),p(N,null,D(a.links,(f,u)=>(r(),b(g,w({key:u},{...f,target:f.target||"_blank",color:f.color||"white"},{onClick:f.click}),null,16,["onClick"]))),128))])],2)):m("",!0)],2),a.description||t.$slots.description?(r(),p("p",{key:0,class:c(e(s).description)},[v(t.$slots,"description",{},()=>[I(C(a.description),1)])],2)):m("",!0),v(t.$slots,"default")])])],16)}}}),Ce=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const o={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},i=a,{ui:s,attrs:n}=A("content.surround.link",k(i,"ui"),o,k(i,"class"),!0);return(t,l)=>{const y=B,g=se;return r(),b(g,w({to:a.link._path,class:e(s).wrapper},e(n)),{default:U(()=>[a.icon||a.link.icon?(r(),p("div",{key:0,class:c(e(s).icon.wrapper)},[$(y,{name:a.icon||a.link.icon,class:c(e(s).icon.base)},null,8,["name","class"])],2)):m("",!0),h("p",{class:c(e(s).title)},C(a.link.title),3),h("p",{class:c(e(s).description)},C(a.link.description),3)]),_:1},16,["to","class"])}}}),Se={key:1,class:"hidden sm:block"},Ae=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const o={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},i=a,{ui:s,attrs:n}=A("content.surround",k(i,"ui"),o,k(i,"class"),!0),[t,l]=i.surround||[];return(y,g)=>{const d=Ce;return r(),p("div",w({class:e(s).wrapper},e(n)),[e(t)?(r(),b(d,{key:0,link:e(t),ui:e(s).link,icon:e(s).icon.prev},null,8,["link","ui","icon"])):(r(),p("span",Se," ")),e(l)?(r(),b(d,{key:2,link:e(l),ui:e(s).link,icon:e(s).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),Ue=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const o={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},i=a,{ui:s,attrs:n}=A("page.body",k(i,"ui"),o,k(i,"class"),!0);return(t,l)=>(r(),p("div",w({class:[e(s).wrapper,a.prose&&e(s).prose]},e(n)),[v(t.$slots,"default")],16))}}),Oe=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const o=z(),i=P(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:o.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),s=a,{ui:n,attrs:t}=A("page.links",k(s,"ui"),i,k(s,"class"),!0);return(l,y)=>{const g=B,d=oe,f=ie;return r(),p("div",w({class:e(n).wrapper},e(t)),[a.title||l.$slots.title?(r(),p("p",{key:0,class:c(e(n).title)},[v(l.$slots,"title",{},()=>[I(C(a.title),1)])],2)):m("",!0),h("div",{class:c(e(n).container)},[v(l.$slots,"default",{},()=>[(r(!0),p(N,null,D(a.links,(u,x)=>(r(),b(f,w({key:x},e(re)(u),{class:e(n).base,"active-class":e(n).active,"inactive-class":e(n).inactive,onClick:u.click}),{default:U(()=>[u.icon?(r(),b(g,{key:0,name:u.icon,class:c(e(Y)(e(n).icon.base,u.iconClass))},null,8,["name","class"])):m("",!0),u.avatar?(r(),b(d,w({key:1},{size:e(n).avatar.size,...u.avatar},{class:e(Y)(e(n).avatar.base,u.avatarClass)}),null,16,["class"])):m("",!0),h("span",{class:c(e(n).label)},[I(C(u.label)+" ",1),u.target==="_blank"?(r(),b(g,{key:0,name:e(n).externalIcon.name,class:c(e(n).externalIcon.base)},null,8,["name","class"])):m("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),je=()=>{const a=T(),o=T([]),i=T([]),s=t=>{t.forEach(l=>{const y=l.target.id;l.isIntersecting?o.value=[...o.value,y]:o.value=o.value.filter(g=>g!==y)})},n=t=>{t.forEach(l=>{a.value&&a.value.observe(l)})};return le(o,(t,l)=>{t.length===0?i.value=l:i.value=t}),ce(()=>a.value=new IntersectionObserver(s)),ue(()=>{var t;return(t=a.value)==null?void 0:t.disconnect()}),{visibleHeadings:o,activeHeadings:i,updateHeadings:n}},Ie=["href","onClick"],te=S({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(a,{emit:o}){const i={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},s=a,n=o,t=de(),l=ge(),{activeHeadings:y,updateHeadings:g}=je(),{ui:d,attrs:f}=A("content.toc.links",k(s,"ui"),i,k(s,"class"),!0);l.hooks.hookOnce("page:finish",()=>{g([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const u=x=>{const O=encodeURIComponent(x);t.push(`#${O}`),n("move",x)};return(x,O)=>{var L;const H=te;return(L=a.links)!=null&&L.length?(r(),p("ul",w({key:0,class:e(d).wrapper},e(f)),[(r(!0),p(N,null,D(a.links,_=>(r(),p("li",{key:_.text,class:c([e(d).wrapper,_.depth===3&&e(d).depth])},[h("a",{href:`#${_.id}`,class:c([e(d).base,e(y).includes(_.id)?e(d).active:e(d).inactive]),onClick:pe(R=>u(_.id),["prevent"])},C(_.text),11,Ie),_.children?(r(),b(H,{key:0,links:_.children},null,8,["links"])):m("",!0)],2))),128))],16)):m("",!0)}}}),Le=S({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const o=z(),i=P(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:o.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),s=a,{ui:n,attrs:t}=A("content.toc",k(s,"ui"),i,k(s,"class"),!0),l=T(!1);return(y,g)=>{var u,x;const d=B,f=te;return r(),p("nav",w({class:e(n).wrapper},e(t)),[h("div",{class:c([(u=a.links)!=null&&u.length?e(n).container.base:e(n).container.empty])},[v(y.$slots,"top"),(x=a.links)!=null&&x.length?(r(),p("button",{key:0,class:c(e(n).button.base),tabindex:"-1",onClick:g[0]||(g[0]=O=>l.value=!e(l))},[h("span",{class:c(e(n).button.label)},C(a.title),3),$(d,{name:e(n).button.trailingIcon.name,class:c(["lg:!hidden",[e(n).button.trailingIcon.base,e(l)?e(n).button.trailingIcon.active:e(n).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):m("",!0),$(f,{links:a.links,ui:e(n).links,class:c([e(l)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),v(y.$slots,"bottom")],2)],16)}}}),Te={key:1},De=S({__name:"[...slug]",async setup(a){let o,i;const s=me(),{toc:n}=z(),{data:t}=([o,i]=Z(()=>J(s.path,()=>ee(s.path).findOne(),"$aROEKgqrzL")),o=await o,i(),o);if(!t.value)throw ye({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:l}=([o,i]=Z(()=>J(`${s.path}-surround`,()=>ee().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(ve(s.path)))),o=await o,i(),o);fe({titleTemplate:"%s - Nuxt zodi18n Documentation",title:t.value.title,twitterTitle:"%s - Nuxt zodi18n Documentation",twitterDescription:t.value.description,ogTitle:`${t.value.title} - Nuxt zodi18n Documentation`,description:t.value.description,ogDescription:t.value.description});const y=P(()=>ke(t.value)),g=P(()=>{var d,f,u;return[((d=n==null?void 0:n.bottom)==null?void 0:d.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${n.bottom.edit}/${(f=t==null?void 0:t.value)==null?void 0:f._file}`,target:"_blank"},...((u=n==null?void 0:n.bottom)==null?void 0:u.links)||[]].filter(Boolean)});return(d,f)=>{const u=$e,x=xe,O=Ae,H=Ue,L=he,_=Oe,R=Le,ne=be;return r(),b(ne,null,G({default:U(()=>[$(u,{title:e(t).title,description:e(t).description,links:e(t).links,headline:e(y)},null,8,["title","description","links","headline"]),$(H,{prose:""},{default:U(()=>{var j;return[e(t).body?(r(),b(x,{key:0,value:e(t)},null,8,["value"])):m("",!0),(j=e(l))!=null&&j.length?(r(),p("hr",Te)):m("",!0),$(O,{surround:e(l)},null,8,["surround"])]}),_:1})]),_:2},[e(t).toc!==!1?{name:"right",fn:U(()=>{var j,q,E,M;return[$(R,{title:(j=e(n))==null?void 0:j.title,links:(E=(q=e(t).body)==null?void 0:q.toc)==null?void 0:E.links},G({_:2},[(M=e(n))!=null&&M.bottom?{name:"bottom",fn:U(()=>{var V,F,K,Q,W,X;return[h("div",{class:c(["hidden lg:block space-y-6",{"!mt-6":(K=(F=(V=e(t).body)==null?void 0:V.toc)==null?void 0:F.links)==null?void 0:K.length}])},[(X=(W=(Q=e(t).body)==null?void 0:Q.toc)==null?void 0:W.links)!=null&&X.length?(r(),b(L,{key:0,type:"dashed"})):m("",!0),$(_,{title:e(n).bottom.title,links:e(g)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{De as default};