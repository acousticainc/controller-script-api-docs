"use strict";(self.webpackChunkmixcraft_10_api_docs=self.webpackChunkmixcraft_10_api_docs||[]).push([[7203],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},l=void 0,o={unversionedId:"API Sections/Globals",id:"API Sections/Globals",title:"Globals",description:"In this section we will review the Global functions available in the Mixcraft controller scripting API.",source:"@site/docs/API Sections/Globals.md",sourceDirName:"API Sections",slug:"/API Sections/Globals",permalink:"/controller-script-api-docs/docs/API Sections/Globals",draft:!1,editUrl:"https://github.com/acousticainc/controller-script-api-docs/docs/API Sections/Globals.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Functions Called by Mixcraft",permalink:"/controller-script-api-docs/docs/API Sections/functions-called-by-mixcraft"},next:{title:"Track",permalink:"/controller-script-api-docs/docs/API Sections/Track"}},s={},m=[{value:"Log(args)",id:"logargs",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example",level:4},{value:"SetDebug(bool)",id:"setdebugbool",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Example",id:"example-1",level:4},{value:"StartTimer(timerID, time)",id:"starttimertimerid-time",level:2},{value:"Paramteters",id:"paramteters",level:3},{value:"Example",id:"example-2",level:4},{value:"StopTimer(timerID)",id:"stoptimertimerid",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Example",id:"example-3",level:4},{value:"ToHexString(number, padding)",id:"tohexstringnumber-padding",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Example",id:"example-4",level:4}],p={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section we will review the Global functions available in the Mixcraft controller scripting API."),(0,n.kt)("h2",{id:"logargs"},"Log(args)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"Log()")," function prints strings to the in-application log window. This is useful for debugging and confirming values.")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"args")," (variable or string) - ",(0,n.kt)("em",{parentName:"li"},"The Log() function can print the stored value of an existing variable as well as strings,  which can be concatenated to create helpful log entries"),".")),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'Globals.Log("MIDI channel" + midiChannel + " and MIDI CC number is " + value1);\n')),(0,n.kt)("h2",{id:"setdebugbool"},"SetDebug(bool)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"SetDebug()")," function enables the in-application script editor, MIDI monitor and console, which are launched after the script is ",(0,n.kt)("a",{parentName:"li",href:"/controller-script-api-docs/docs/getting-started/setting-up"},"selected in the Mixcraft Preferences menu"),". Generally, it's best to always have this set to true and comment out the line when you are done using debug mode.")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"True")," ",(0,n.kt)("em",{parentName:"li"},"(bool)")," - ",(0,n.kt)("em",{parentName:"li"},"The debug enable state"))),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Globals.SetDebug(true); \n")),(0,n.kt)("h2",{id:"starttimertimerid-time"},"StartTimer(timerID, time)"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"StartTimer()")," function starts the defined ",(0,n.kt)("inlineCode",{parentName:"p"},"timerID"),", which will run for the supplied argument of ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," in milliseconds."),(0,n.kt)("h3",{id:"paramteters"},"Paramteters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"timerID")," ",(0,n.kt)("em",{parentName:"li"},"(int)")," - ",(0,n.kt)("em",{parentName:"li"},"The timer to start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"time")," ",(0,n.kt)("em",{parentName:"li"},"(int)")," - ",(0,n.kt)("em",{parentName:"li"},"The duration of time to run the timer in milliseconds"))),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Globals.StartTimer(FLASH_TIMER, 250);\n")),(0,n.kt)("h2",{id:"stoptimertimerid"},"StopTimer(timerID)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"StopTimer()")," function stops the defined ",(0,n.kt)("inlineCode",{parentName:"li"},"timerID"),".")),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"timerID")," ",(0,n.kt)("em",{parentName:"li"},"(int)")," - ",(0,n.kt)("em",{parentName:"li"},"The timer to stop"))),(0,n.kt)("h4",{id:"example-3"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Globals.StopTimer(ANIMATION_TIMER);\n")),(0,n.kt)("h2",{id:"tohexstringnumber-padding"},"ToHexString(number, padding)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"ToHexString()")," function was added as there isn\u2019t a function for this in javascript. The ",(0,n.kt)("inlineCode",{parentName:"li"},"padding")," argument is the minimum number of digits. As the name implies, it will accept an integer and convert it to a hexadecimal string. ")),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"number")," ",(0,n.kt)("em",{parentName:"li"},"(int)")," - ",(0,n.kt)("em",{parentName:"li"},"The integer value to convert ot a hexadecimal string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"padding")," ",(0,n.kt)("em",{parentName:"li"},"(int)")," - ",(0,n.kt)("em",{parentName:"li"},"The minimum number of digits"))),(0,n.kt)("h4",{id:"example-4"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// This will convert the decimal value of 100 to a string of the \n// hex value, 64\nGlobals.ToHexString(100, 2)\n\n")))}u.isMDXComponent=!0}}]);