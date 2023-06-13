"use strict";(self.webpackChunkmixcraft_10_api_docs=self.webpackChunkmixcraft_10_api_docs||[]).push([[4329],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},g="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),g=s(n),u=a,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||i;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[g]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7980:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Integrated Log Console",l={unversionedId:"getting-started/intergrated-logging",id:"getting-started/intergrated-logging",title:"Integrated Log Console",description:"This section covers the integrated logging console found in the Mixcraft script editor.",source:"@site/docs/getting-started/intergrated-logging.md",sourceDirName:"getting-started",slug:"/getting-started/intergrated-logging",permalink:"/controller-script-api-docs/docs/getting-started/intergrated-logging",draft:!1,editUrl:"https://github.com/acousticainc/controller-script-api-docs/docs/getting-started/intergrated-logging.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using an External IDE",permalink:"/controller-script-api-docs/docs/getting-started/using-an-external-ide"},next:{title:"Available JavaScript Operators and Keywords",permalink:"/controller-script-api-docs/docs/getting-started/javascript-limitations"}},c={},s=[],p={toc:s},g="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(g,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrated-log-console"},"Integrated Log Console"),(0,a.kt)("p",null,"This section covers the integrated logging console found in the Mixcraft script editor."),(0,a.kt)("p",null,"On the bottom of the script editor, you\u2019ll find a window that prints anything that is sent using the ",(0,a.kt)("inlineCode",{parentName:"p"}," Globals.Log()"),"function. This can be extra handy for troubleshooting and debugging your scripts."),(0,a.kt)("h1",{id:"integrated-midi-monitor"},"Integrated MIDI Monitor"),(0,a.kt)("p",null,"On the right-hand side of the in-application editor, you\u2019ll find a MIDI monitor window that logs any incoming MIDI data when the ",(0,a.kt)("strong",{parentName:"p"},"Log MIDI")," feature is enabled."),(0,a.kt)("p",null,"The MIDI data in this log column is presented in the following format:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Line"),(0,a.kt)("th",{parentName:"tr",align:null},"Message Type"),(0,a.kt)("th",{parentName:"tr",align:null},"MIDI Channel"),(0,a.kt)("th",{parentName:"tr",align:null},"Data 1"),(0,a.kt)("th",{parentName:"tr",align:null},"Data 2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"80 (cc)"),(0,a.kt)("td",{parentName:"tr",align:null},"CH:16"),(0,a.kt)("td",{parentName:"tr",align:null},"0x3D"),(0,a.kt)("td",{parentName:"tr",align:null},"0x3C")))),(0,a.kt)("admonition",{title:"Note: ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"MIDI Channel is being converted from hexidecimal")))}d.isMDXComponent=!0}}]);