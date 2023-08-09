import{_ as D}from"./BaseScore.vue.c49021b9.js";import{d as L,Y as M,n as F,c as k,g as o,h as l,q as s,F as N,r as A,z as f,j as i,i as g,w as B,k as x,T as j,p as E,D as S,ai as U,at as $,x as V,B as y,y as n,A as R,aA as q,aB as G,G as H,H as O,I as P}from"./entry.3011d873.js";const W={class:"flex w-[calc(100%)] h-[16.125rem] bg-bg-13/50 backdrop-blur-sm rounded-xl transition-all will-change-transform absolute z-[10000]"},Y={class:"w-full h-full flex-col items-center flex justify-around text-[1.7rem]"},J=["onClick"],K={class:"w-[1.25rem] h-[1.25rem] relative flex justify-center items-center"},Q={key:0,class:"flex items-center justify-center relative"},X=L({__name:"TitleFrameUserlist",props:{titleId:{},target:{}},setup(m){const u=m,d=M(),c=["favorite","watchlist","downloadlist","notify"],h=F(!1),e=k(()=>{var t;return(t=d.library)==null?void 0:t.favorite.post.includes(u.titleId)}),r=k(()=>{var t;return(t=d.library)==null?void 0:t.watchlist.post.includes(u.titleId)}),v=k(()=>{var t;return(t=d.library)==null?void 0:t.downloadlist.post.includes(u.titleId)}),b=k(()=>{var t;return(t=d.library)==null?void 0:t.notify.post.includes(u.titleId)});async function I(t){h.value||(h.value=!0,_(t)?d.removeFromLibrary(u.titleId,t):d.addToLibrary(u.titleId,t),await E.API.actions.user_list_toggle(t,u.titleId),h.value=!1)}function w(t){switch(t){case"favorite":return e.value?"ph:heart-fill":"ph:heart";case"watchlist":return r.value?"ph:eye-fill":"ph:eye";case"downloadlist":return v.value?"ph:plus-circle-fill":"ph:plus-circle";case"notify":return b.value?"ph:bell-fill":"ph:bell"}}function _(t){switch(t){case"favorite":return e.value;case"watchlist":return r.value;case"downloadlist":return v.value;case"notify":return b.value}}return(t,z)=>{const p=S;return o(),l("aside",W,[s("ul",Y,[(o(),l(N,null,A(c,a=>s("li",{key:a,class:f(["w-full py-2 flex items-center justify-center hover:bg-white/5 transition-colors",{"disable-block":i(h)}]),onClick:C=>I(a)},[s("span",K,[g(j,{name:"fade-preset"},{default:B(()=>[_(a)?(o(),l("span",Q,[g(p,{name:w(a),class:f(["transition-all bg-gradient-to-tl p-3 text-transparent bg-clip-text absolute will-change-transform active:scale-125 active:opacity-80 test bg-red-500",[{"from-rose-400 to-rose-700":a==="favorite"},{"from-emerald-400 to-emerald-700":a==="watchlist"},{"from-yellow-400 to-yellow-700":a==="notify"},{"from-sky-400 to-sky-700":a==="downloadlist"}]])},null,8,["name","class"]),s("span",{class:f(["absolute w-3 h-3 blur-md rounded-full bg-gradient-to-tl pointer-events-none",[{"from-rose-400 to-rose-700":a==="favorite"},{"from-emerald-400 to-emerald-700":a==="watchlist"},{"from-yellow-400 to-yellow-700":a==="notify"},{"from-sky-400 to-sky-700":a==="downloadlist"}]])},null,2)])):(o(),x(p,{key:1,name:w(a),class:"transition-all absolute p-3 will-change-transform active:scale-125 active:opacity-80"},null,8,["name"]))]),_:2},1024)])],10,J)),64))])])}}}),T=m=>(H("data-v-84640db0"),m=m(),O(),m),Z={key:0,class:"flex w-full flex-col gap-2"},ee=T(()=>s("div",{key:"sekleton-2",class:"flex w-full flex-col gap-2"},[s("div",{class:"flex",dir:"ltr"},[s("span",{class:"__skeleton-2 w-[100px] self-end rounded-full text-[1.4em] leading-5"}," ")]),s("div",{class:"flex flex-row flex-nowrap justify-between"},[s("span",{class:"__skeleton-2 w-[4.5em] rounded-md text-[1em]"}),s("span",{class:"__skeleton-2 rounded-md px-3 py-1 text-[1em] font-semibold"},[s("div",{class:"invisible opacity-0"},"0000")])])],-1)),te=["onMousedown"],se={class:"local-numbers number absolute -left-4 bottom-16 z-30 text-[14em]"},ae={class:"absolute left-2 top-2 flex flex-col gap-2"},oe={class:"absolute bottom-2 right-2 flex flex-col gap-1"},le={key:0,class:"text-secondary-500 bg-bg-13/50 rounded-full p-2 text-[1.6em] backdrop-blur-sm"},re=T(()=>s("span",{class:"bg-primary-500 absolute inset-0 flex h-full w-full scale-50 rounded-full opacity-0 blur-[12px] transition-opacity group-hover/icon:opacity-100"},null,-1)),ne={class:"absolute bottom-[0.8rem] left-0 flex flex-col gap-2"},ie={key:0,class:"bg-primary-500 rounded-r-lg p-1 px-2 text-xs"},de={key:1,class:"bg-primary-500 rounded-r-lg p-1 px-2 text-xs"},ce={dir:"ltr",class:"line-clamp-1 text-left text-[1.4em] leading-5"},ue={class:"flex w-full",dir:"ltr"},pe={class:"flex min-h-[1.5rem] items-center"},fe={key:0,class:"bg-bg-10/80 text-fonts-200 flex rounded-md px-3 py-1 text-[1em] font-semibold"},me={key:0,class:"flex flex-1 items-center justify-end gap-1"},he={dir:"auto"},ye={key:0,class:"text-primary-500 text-[1.4em] font-semibold"},ge=L({__name:"TitleFrame",props:{size:{},isLoading:{type:Boolean},data:{},number:{}},setup(m){const u=m,d=F(),c=F(!1);U(d,()=>c.value=!1);const h=k(()=>G.size.poster(u.size));return(e,r)=>{var w,_,t,z;const v=D,b=S,I=X;return o(),l("section",{class:f(["group relative mx-4 mt-8 flex flex-col flex-nowrap items-center gap-2",[`w-poster-${e.size}`,{"text-xs":e.size==="medium"}]])},[e.isLoading?(o(),l("section",Z,[s("span",{key:"skeleton-1",class:f([[`w-poster-${e.size}`,`h-poster-${e.size}`],"__skeleton rounded-xl"])},null,2),ee])):e.data?(o(),l("section",{key:1,ref_key:"titleFrameMainEl",ref:d,class:"flex w-full cursor-pointer flex-col gap-2 relative",onContextmenu:r[4]||(r[4]=$(p=>c.value=!0,["prevent"]))},[s("div",{key:"poster",class:f([[`w-poster-${e.size}`,`h-poster-${e.size}`,{"group-hover:-translate-y-1":!i(c)}],"relative rounded-xl transition-transform duration-300 will-change-transform"]),onClick:r[2]||(r[2]=p=>{var a;return e.$router.push({path:"/single/"+((a=e.data)==null?void 0:a.id)})})},[s("span",{class:f(["absolute inset-0 overflow-hidden rounded-xl",[`w-poster-${e.size}`,`h-poster-${e.size}`]]),draggable:"false",onMousedown:$(p=>"",["prevent"])},[g(i(V),{ref:"img","style-suffix":"30nama-title-frame",src:e.data.image.poster.webp[e.size],punch:1,hash:e.data.image.poster.preview,class:"h-full w-full","res-x":4,"remove-canvas":"","res-y":6,duration:1e3,"height-size":i(h).height,"width-size":i(h).width},null,8,["src","hash","height-size","width-size"])],42,te),s("h4",se,y(e.number),1),s("ul",ae,[(w=e.data.score)!=null&&w.myanimelist?(o(),x(v,{key:0,type:"myanimelist",data:e.data.score.myanimelist,"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):(_=e.data.score)!=null&&_.imdb&&((t=e.data.score)!=null&&t.imdb.votes)?(o(),x(v,{key:1,type:"imdb",data:e.data.score.imdb,"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):n("",!0),(z=e.data.score)!=null&&z["30nama"]?(o(),x(v,{key:2,type:"30nama",data:e.data.score["30nama"],"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):n("",!0)]),i(c)?n("",!0):(o(),l("div",{key:0,class:"absolute z-10 top-2 right-2 bg-bg-13/50 backdrop-blur-sm text-base opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:scale-90 will-change-transform p-2 rounded-full isolate",onClick:r[0]||(r[0]=$(p=>c.value=!i(c),["stop","prevent"]))},[g(b,{name:"ph:dots-three-outline-vertical-fill",class:"relative"})])),s("div",oe,[e.data.options.exclusive_subtitle?(o(),l("span",le,[g(b,{name:"ph:closed-captioning-fill"})])):n("",!0),e.data.options.stream?(o(),l("span",{key:1,class:"group/icon text-primary-500 bg-bg-13/50 hover:bg-bg-13/70 relative rounded-full p-2 text-[1.6em] backdrop-blur-sm transition-all",onClick:r[1]||(r[1]=$(p=>{var a,C;return e.$router.push({path:`/play/${(a=e.data)==null?void 0:a.id}`,query:{free:(C=e.data)!=null&&C.options.free_stream?"true":void 0}})},["stop","prevent"]))},[re,g(b,{name:"ph:play-fill",class:"relative"})])):n("",!0)]),s("div",ne,[e.data.options.free_stream?(o(),l("span",ie,y(e.$t("watchFree")),1)):n("",!0),e.data.options.free_download?(o(),l("span",de,y(e.$t("downloadFree")),1)):n("",!0)])],2),s("footer",{key:"footer",class:f(["flex w-full flex-col gap-2 transition-all duration-500 will-change-transform",{"group-hover:-translate-y-1":!i(c)}]),onClick:r[3]||(r[3]=p=>{var a;return e.$router.push({path:"/single/"+((a=e.data)==null?void 0:a.id)})})},[s("h6",ce,y(e.data.title.english.split(" ").slice(0,-1).join(" ")),1),s("div",ue,[s("div",pe,[e.data.info.year?(o(),l("span",fe,y(e.data.info.year),1)):n("",!0)]),e.data.options.is_series?(o(),l("span",me,[s("div",he,[R(y(e.$t("season"))+" ",1),e.data.info.seasons?(o(),l("span",ye,y(e.data.info.seasons),1)):n("",!0)])])):n("",!0)])],2),g(j,{name:"user-list",appear:""},{default:B(()=>[i(c)?(o(),x(I,{key:0,ref:"userListEl","title-id":e.data.id,class:"top-0 duration-500",target:("toRef"in e?e.toRef:i(q))(i(d))},null,8,["title-id","target"])):n("",!0)]),_:1})],544)):n("",!0)],2)}}});const we=P(ge,[["__scopeId","data-v-84640db0"]]);export{we as _};
