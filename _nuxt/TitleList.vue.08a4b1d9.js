import{_ as S}from"./TitleFrame.2dd2787c.js";import{d as L,n as B,v as T,o as q,g as s,h as u,i as k,w as $,A as z,z as p,j as f,y as _,F as C,r as I,B as E,_ as F,q as g,k as P,P as N,c as G,ap as R,ah as j,ak as A,ax as H,ay as M,az as O,a as Z,m as D,a8 as J}from"./entry.3011d873.js";import{_ as K}from"./ContentPop-v2.vue.01cc6e6b.js";const Q={key:0},U={key:1},W={key:2},X={key:3},Y=L({__name:"BasePagination",props:{maxPage:{default:1},yield:{type:Boolean},selectedPage:{default:1},isLoading:{type:Boolean}},emits:["pageChanged"],setup(x,{emit:y}){const r=x,e=B(1);async function d(n){r.yield||e.value===n||(await new Promise(i=>setTimeout(i,25)),e.value=n,y("pageChanged",n))}function l(){return e.value<=3?3:e.value}function m(n){const i=[];for(const c of n)c>0&&c<=r.maxPage&&i.push(c);return i}function o(){const n=[l()-2,l()-1,l(),l()+1,l()+2];if(n.length===5&&r.maxPage===5)return m([1,2,3,4,5]);for(const i in n)if(n[i]>=r.maxPage){if(i==="3")return m([l()-3,l()-2,l()-1,l(),l()+1]);if(i==="2")return m([l()-4,l()-3,l()-2,l()-1,l()])}return n}return T(()=>r.selectedPage,()=>{e.value=r.selectedPage}),q(()=>e.value=r.selectedPage),(n,i)=>{const c=F;return s(),u("ul",{class:p(["local-numbers flex flex-row items-center gap-1 text-base",{"disable-block":n.isLoading}]),dir:"ltr"},[o()[0]>1?(s(),u("li",Q,[k(c,{class:p(["hover:bg-bg-10/70 flex min-w-[2em] shrink-0 items-center justify-center rounded-xl px-2 py-1 transition-colors",{"bg-primary-500 hover:bg-primary-500 !rounded-xl text-white":f(e)===1}]),to:{query:{...n.$route.query,page:1}},onClick:i[0]||(i[0]=t=>d(1))},{default:$(()=>[z(" 1 ")]),_:1},8,["class","to"])])):_("",!0),o()[0]>1?(s(),u("li",U," ... ")):_("",!0),(s(!0),u(C,null,I(o(),t=>(s(),u("li",{key:t.id},[k(c,{class:p(["hover:bg-bg-10/70 flex min-w-[2em] shrink-0 items-center justify-center rounded-xl px-2 py-1 transition-colors",{"bg-primary-500 hover:bg-primary-500 !rounded-xl text-white":f(e)===t}]),to:{query:{...n.$route.query,page:t}},onClick:a=>d(t)},{default:$(()=>[z(E(t.toString()),1)]),_:2},1032,["class","to","onClick"])]))),128)),f(e)+2<n.maxPage&&n.maxPage>5?(s(),u("li",W," ... ")):_("",!0),f(e)+2<n.maxPage&&n.maxPage>5?(s(),u("li",X,[k(c,{class:p(["hover:bg-bg-10/70 flex min-w-[2em] shrink-0 items-center justify-center rounded-xl px-2 py-1 transition-colors",{"bg-primary-500 hover:bg-primary-500 !rounded-xl text-white":f(e)===n.maxPage}]),to:{query:{...n.$route.query,page:n.maxPage}},onClick:i[1]||(i[1]=t=>d(n.maxPage))},{default:$(()=>[z(E(n.maxPage.toString()),1)]),_:1},8,["class","to"])])):_("",!0)],2)}}}),ee={class:"titles-renderer-group"},te={role:"none",class:"pointer-events-none absolute top-1/2 z-10 -translate-y-1/2 ltr:-left-8 rtl:-right-8"},ae=g("path",{d:"M0 30.5C9.52005 21.5889 4.18533 11.5501 0 8V30.5Z"},null,-1),ne=g("path",{d:"M3 11.5C2 10.3333 0 6.4 0 0V8L3 11.5Z"},null,-1),se=g("path",{d:"M3 27C2 28.1667 0 32 0 38V30.5L3 27Z"},null,-1),re=[ae,ne,se],oe={class:"local-numbers absolute top-1/2 z-10 -translate-y-1/2 text-2xl font-semibold ltr:left-0 rtl:right-0"},le=L({__name:"TitlesRendererGroup",props:{isLoading:{type:Boolean},visible:{type:Boolean},transparent:{type:Boolean},page:{},items:{}},emits:["onInView","reachedEnd"],setup(x,{emit:y}){const r=x,e=B({firstEntry:r.items[0],lastEntry:r.items[r.items.length-1],entries:r.items.slice(1,r.items.length-1)}),d=B(null),l=B(null),m=B(null),o=new IntersectionObserver(t=>t.map(n),{threshold:0});function n(t){if(t.target.getAttribute("data-is-skeleton"))return t.isIntersecting?y("onInView"):null;t.target.getAttribute("data-is-first")&&(t.positionInGroup="start"),t.target.getAttribute("data-is-last")&&(t.positionInGroup="end"),t.isIntersecting&&t.positionInGroup==="end"&&y("reachedEnd")}async function i(){var t,a;m.value&&(o==null||o.unobserve(m.value)),await N(),d.value&&(o==null||o.observe((t=d.value)==null?void 0:t.$el)),l.value&&(o==null||o.observe((a=l.value)==null?void 0:a.$el))}async function c(){var t,a;d.value&&(o==null||o.unobserve((t=d.value)==null?void 0:t.$el)),l.value&&(o==null||o.unobserve((a=l.value)==null?void 0:a.$el)),await N(),m.value&&(o==null||o.observe(m.value))}return q(()=>{r.isLoading?c():i()}),T(()=>r.isLoading,t=>{t?c():i()}),(t,a)=>{const h=S;return s(),u("div",ee,[g("div",{class:p(["relative flex h-24 w-full items-center px-6",{invisible:t.page===1}])},[g("span",te,[(s(),u("svg",{role:"none",class:p(["fill-bg-12 h-full w-8 transform-gpu will-change-transform rtl:rotate-180",{hidden:t.transparent}]),viewBox:"0 0 6 38",xmlns:"http://www.w3.org/2000/svg"},re,2)),g("span",oe,E(t.page),1)]),g("span",{class:p(["bg-bg-12 block h-2 w-[10%] overflow-hidden rounded-full ltr:origin-left rtl:origin-right",{"!bg-bg-11":t.transparent}])},null,2)],2),t.isLoading?(s(),u("div",{key:1,ref_key:"skeletonComponent",ref:m,class:p([{"-translate-y-24":t.page===1},"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"]),"data-is-skeleton":"true"},[(s(!0),u(C,null,I(t.items.length,v=>(s(),P(h,{key:v,size:"medium","is-loading":""}))),128))],2)):(s(),u("div",{key:0,class:p([{"-translate-y-24":t.page===1},"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"])},[k(h,{ref_key:"firstTitleComponent",ref:d,size:"medium","data-is-first":"true",data:f(e).firstEntry},null,8,["data"]),(s(!0),u(C,null,I(f(e).entries,(v,w)=>(s(),P(h,{key:w,size:"medium",data:v},null,8,["data"]))),128)),t.items.length>1?(s(),P(h,{key:0,ref_key:"lastTitleComponent",ref:l,size:"medium","data-is-last":"true",data:f(e).lastEntry},null,8,["data"])):_("",!0)],2))])}}}),ie=L({__name:"TitlesRenderer",props:{maxPage:{},data:{},transparent:{type:Boolean},isLoading:{type:Boolean}},emits:["loadNextPage"],setup(x,{emit:y}){const r=x,e=G(()=>{const a=Object.keys(r.data).map(h=>Number(h));return a.length?Math.max(...a):0}),d=G(()=>{const a=[];for(let h=1;h<=e.value;h++)a.push(r.data[h]);return a});function l(a){a>=r.maxPage||r.data[a+1]||y("loadNextPage",a+1)}const m=B(1496);function o(){const a=document.querySelectorAll(".titles-renderer-group");return a.length?a[a.length-1].clientHeight:0}function n(){e.value>=r.maxPage||r.isLoading||y("loadNextPage",e.value+1)}let{list:i,containerProps:c,wrapperProps:t}=R(d,{itemHeight:m.value,overscan:3});return j(window,"resize",A(()=>m.value=o(),1e3)),T(m,()=>{const a=R(d,{itemHeight:m.value});i=a.list,c=a.containerProps,t=a.wrapperProps}),q(async()=>{await N(),m.value=o()}),(a,h)=>{const v=le;return s(),u("div",null,[g("div",O(f(c),{class:"hide-scrollbar h-full transform-gpu p-8"}),[g("div",H(M(f(t))),[(s(!0),u(C,null,I(f(i),w=>(s(),P(v,{key:w.index,transparent:a.transparent,page:Number(w.index+1),items:w.data,onReachedEnd:V=>l(Number(w.index+1))},null,8,["transparent","page","items","onReachedEnd"]))),128)),f(e)<a.maxPage?(s(),P(v,{key:0,page:f(e)+1,transparent:a.transparent,items:Array(24).fill({}),"is-loading":!0,onOnInView:n},null,8,["page","transparent","items"])):_("",!0)],16)],16)])}}}),ue={class:"flex w-full flex-col"},de={key:0,class:"flex w-full pb-24"},pe={key:0,class:"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"},ge={key:1,class:"title-list grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center"},he=L({__name:"TitleList",props:{title:{},icon:{},style:{},aligned:{type:Boolean},transparent:{type:Boolean},secondaryTitleType:{type:Boolean},data:{},resultInfo:{},isLoading:{type:Boolean}},emits:["pageChanged"],setup(x){const y=Z(),{infiniteScrolling:r}=D();return T(()=>y.query.page,e=>{var d;r.value||(d=document.getElementById("main-content-app"))==null||d.scrollIntoView({behavior:"smooth"})}),(e,d)=>{var i,c;const l=S,m=Y,o=ie,n=K;return s(),u("div",{id:"title-list-result",class:p(["mt-[-2.4rem] flex w-full flex-shrink-0 flex-col gap-20",{"!mt-[-4.7rem]":e.aligned}])},[k(n,{title:e.title,foreground:(i=e.style)==null?void 0:i.foreground,"shadow-background":(c=e.style)==null?void 0:c.shadowFore,transparent:e.transparent,"secondary-title-type":e.secondaryTitleType,icon:e.icon,class:"h-[calc(100%_+_3.1rem)]"},{header:$(()=>[J(e.$slots,"header")]),content:$(()=>{var t,a,h,v,w,V;return[g("div",ue,[f(r)?_("",!0):(s(),u("div",de,[e.isLoading?(s(),u("div",pe,[(s(),u(C,null,I(24,b=>k(l,{key:b,"is-loading":"",size:"medium"})),64))])):(s(),u("div",ge,[(s(!0),u(C,null,I(e.resultInfo?e.data[e.resultInfo.page]:[],b=>(s(),P(l,{key:b.id,size:"medium",data:b},null,8,["data"]))),128))]))])),!f(r)&&e.resultInfo?(s(),u("div",{key:1,class:p(["absolute bottom-0 left-1/2 flex h-12 -translate-x-1/2 justify-center px-8",(t=e.style)==null?void 0:t.background])},[g("span",{class:p([{hidden:e.transparent},"absolute top-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:left-0 rtl:right-0"])},[g("span",{class:p(["absolute top-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:left-0 rtl:right-0",(a=e.style)==null?void 0:a.shadowFore])},null,2)],2),g("span",{class:p([{hidden:e.transparent},"absolute top-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:right-0 rtl:left-0"])},[g("span",{class:p(["absolute top-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:right-0 rtl:left-0",(h=e.style)==null?void 0:h.shadowFore])},null,2)],2),g("span",{class:p([{hidden:e.transparent},"absolute bottom-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:right-full rtl:left-full"])},[g("span",{class:p(["absolute bottom-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:right-0 rtl:left-0",(v=e.style)==null?void 0:v.shadowBack])},null,2)],2),g("span",{class:p([{hidden:e.transparent},"absolute bottom-0 h-[1.5em] w-[1.5em] overflow-hidden ltr:left-full rtl:right-full"])},[g("span",{class:p(["absolute bottom-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:left-0 rtl:right-0",(w=e.style)==null?void 0:w.shadowBack])},null,2)],2),k(m,{"max-page":e.resultInfo.pages,"is-loading":e.isLoading,"selected-page":e.resultInfo.page,onPageChanged:d[0]||(d[0]=b=>e.$emit("pageChanged",b))},null,8,["max-page","is-loading","selected-page"])],2)):_("",!0),f(r)?(s(),P(o,{key:2,class:p(["h-[calc(100vh_-_11.4em_-_1.5em_-_var(--header-size)_*_1px)]",{"!h-[calc(100vh_-_11.4em_+_2.3em_-_var(--header-size)_*_1px)]":e.aligned}]),"is-loading":e.isLoading,transparent:e.transparent,data:e.data,"max-page":((V=e.resultInfo)==null?void 0:V.pages)||1,onLoadNextPage:d[1]||(d[1]=b=>e.$emit("pageChanged",b))},null,8,["class","is-loading","transparent","data","max-page"])):_("",!0)])]}),_:3},8,["title","foreground","shadow-background","transparent","secondary-title-type","icon"])],2)}}});export{he as _};
