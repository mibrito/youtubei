"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[906],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var l=i(9496);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(i),c=n,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return i?l.createElement(f,r(r({ref:t},u),{},{components:i})):l.createElement(f,r({ref:t},u))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<a;p++)r[p]=i[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3050:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var l=i(665),n=(i(9496),i(9613));const a={id:"MixPlaylist",title:"Class: MixPlaylist",sidebar_label:"MixPlaylist",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"api/classes/MixPlaylist",id:"api/classes/MixPlaylist",title:"Class: MixPlaylist",description:"Represents a MixPlaylist, usually returned from client.getPlaylist()",source:"@site/docs/api/classes/MixPlaylist.md",sourceDirName:"api/classes",slug:"/api/classes/MixPlaylist",permalink:"/youtubei/docs/api/classes/MixPlaylist",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MixPlaylist",title:"Class: MixPlaylist",sidebar_label:"MixPlaylist",sidebar_position:0,custom_edit_url:null},sidebar:"sidebars",previous:{title:"LiveVideo",permalink:"/youtubei/docs/api/classes/LiveVideo"},next:{title:"Playlist",permalink:"/youtubei/docs/api/classes/Playlist"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"id",id:"id",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"title",id:"title",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"videoCount",id:"videocount",level:3},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"videos",id:"videos",level:3},{value:"Implementation of",id:"implementation-of-4",level:4}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents a MixPlaylist, usually returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"client.getPlaylist()")),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/Base"},(0,n.kt)("inlineCode",{parentName:"a"},"Base"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"MixPlaylist"))))),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MixPlaylistProperties"))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"client"},"client"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"client"),": ",(0,n.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/Client"},(0,n.kt)("inlineCode",{parentName:"a"},"Client"))),(0,n.kt)("p",null,"An instance of ",(0,n.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/Client"},"Client")),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,"MixPlaylistProperties.client"),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/Base"},"Base"),".",(0,n.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/Base#client"},"client")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"id"},"id"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"id"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,n.kt)("p",null,"MixPlaylistProperties.id"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"title"},"title"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"title"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"The title of this playlist"),(0,n.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,n.kt)("p",null,"MixPlaylistProperties.title"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"videocount"},"videoCount"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"videoCount"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"How many videos in this playlist"),(0,n.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,n.kt)("p",null,"MixPlaylistProperties.videoCount"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"videos"},"videos"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"videos"),": ",(0,n.kt)("a",{parentName:"p",href:"/youtubei/docs/api/classes/VideoCompact"},(0,n.kt)("inlineCode",{parentName:"a"},"VideoCompact")),"[] = ",(0,n.kt)("inlineCode",{parentName:"p"},"[]")),(0,n.kt)("p",null,"How many viewers does this playlist have"),(0,n.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,n.kt)("p",null,"MixPlaylistProperties.videos"))}m.isMDXComponent=!0}}]);