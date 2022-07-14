"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=o(a),u=r,N=k["".concat(d,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(665),r=(a(9496),a(9613));const l={id:"Client",title:"Class: Client",sidebar_label:"Client",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"api/classes/Client",id:"api/classes/Client",title:"Class: Client",description:"Youtube Client",source:"@site/docs/api/classes/Client.md",sourceDirName:"api/classes",slug:"/api/classes/Client",permalink:"/youtubei/docs/api/classes/Client",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Client",title:"Class: Client",sidebar_label:"Client",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"Chat",permalink:"/youtubei/docs/api/classes/Chat"},next:{title:"Comment",permalink:"/youtubei/docs/api/classes/Comment"}},d={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Methods",id:"methods",level:2},{value:"findOne",id:"findone",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"getChannel",id:"getchannel",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getPlaylist",id:"getplaylist",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getVideo",id:"getvideo",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"search",id:"search",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4}],s={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Youtube Client"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Client"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/youtubei/docs/api/modules#clientoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"ClientOptions")),">")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"findone"},"findOne"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"findOne"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/modules#searchresult"},(0,r.kt)("inlineCode",{parentName:"a"},"SearchResult")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"type"'),"]",">",">"),(0,r.kt)("p",null,"Search for videos / playlists / channels and returns the first result"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/youtubei/docs/api/modules#searchoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SearchOptions")))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/modules#searchresult"},(0,r.kt)("inlineCode",{parentName:"a"},"SearchResult")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"type"'),"]",">",">"),(0,r.kt)("p",null,"Can be ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/VideoCompact"},"VideoCompact")," | ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/PlaylistCompact"},"PlaylistCompact")," | ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/BaseChannel"},"BaseChannel")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getchannel"},"getChannel"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getChannel"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"channelId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/Channel"},(0,r.kt)("inlineCode",{parentName:"a"},"Channel")),">"),(0,r.kt)("p",null,"Get channel information by channel id+"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"channelId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/Channel"},(0,r.kt)("inlineCode",{parentName:"a"},"Channel")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getplaylist"},"getPlaylist"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPlaylist"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"playlistId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Get playlist information and its videos by playlist id or URL"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/youtubei/docs/api/classes/Playlist"},(0,r.kt)("inlineCode",{parentName:"a"},"Playlist"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/youtubei/docs/api/classes/MixPlaylist"},(0,r.kt)("inlineCode",{parentName:"a"},"MixPlaylist")))))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"playlistId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getvideo"},"getVideo"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getVideo"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"videoId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Get video information by video id or URL"),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/youtubei/docs/api/classes/Video"},(0,r.kt)("inlineCode",{parentName:"a"},"Video"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/youtubei/docs/api/classes/LiveVideo"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveVideo")))))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"videoId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"search"},"search"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"search"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/SearchManager"},(0,r.kt)("inlineCode",{parentName:"a"},"SearchManager")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"type"'),"]",">",">"),(0,r.kt)("p",null,"Searches for videos / playlists / channels"),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/youtubei/docs/api/modules#searchoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SearchOptions")))))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The search query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Search options")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/SearchManager"},(0,r.kt)("inlineCode",{parentName:"a"},"SearchManager")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"type"'),"]",">",">"))}m.isMDXComponent=!0}}]);