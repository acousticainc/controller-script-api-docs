"use strict";(self.webpackChunkmixcraft_10_api_docs=self.webpackChunkmixcraft_10_api_docs||[]).push([[7814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},l="Functions Called by Mixcraft",o={unversionedId:"API Sections/functions-called-by-mixcraft",id:"API Sections/functions-called-by-mixcraft",title:"Functions Called by Mixcraft",description:"This section covers the functions in your script that are called by Micraft.",source:"@site/docs/API Sections/functions-called-by-mixcraft.md",sourceDirName:"API Sections",slug:"/API Sections/functions-called-by-mixcraft",permalink:"/controller-script-api-docs/docs/API Sections/functions-called-by-mixcraft",draft:!1,editUrl:"https://github.com/acousticainc/controller-script-api-docs/docs/API Sections/functions-called-by-mixcraft.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Sections",permalink:"/controller-script-api-docs/docs/category/api-sections"},next:{title:"Globals",permalink:"/controller-script-api-docs/docs/API Sections/Globals"}},s={},c=[{value:"OnStartup()",id:"onstartup",level:2},{value:"Example",id:"example",level:4},{value:"OnShutdown()",id:"onshutdown",level:2},{value:"Example",id:"example-1",level:4},{value:"Notify(notificationType, data1, data2)",id:"notifynotificationtype-data1-data2",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example-2",level:4},{value:"OnTimer()",id:"ontimer",level:2},{value:"Example",id:"example-3",level:4},{value:"OnMIDI(messageType, midiChannel, value1,  value2)",id:"onmidimessagetype-midichannel-value1--value2",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Example",id:"example-4",level:4},{value:"OnSysEx()",id:"onsysex",level:2},{value:"Example",id:"example-5",level:4}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions-called-by-mixcraft"},"Functions Called by Mixcraft"),(0,i.kt)("p",null,"This section covers the functions in your script that are called by Micraft."),(0,i.kt)("h2",{id:"onstartup"},"OnStartup()"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OnStartup()")," function will do any setup work, such as setting variables, setting timers, or sending SysEx data to initialize or reset hardware."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function OnStartup() {\n\n  MIDI.SendMIDI(MIDI.NOTE_ON, 0xf, 0x0c, 0x7f);\n\n  Track.SetBankSize(2);\n  Track.SetBankOffset(selectedTrack);\n\n  Perform.SetIsButtonController(true);\n  Perform.SetSize(2, 8);\n}\n")),(0,i.kt)("h2",{id:"onshutdown"},"OnShutdown()"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OnShutdown()")," function will do any cleanup work such as sending SysEx data to initialize or reset hardware."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"OnShutdown(){\n    MIDI.SendMIDI(MIDI.NOTE_ON, 0xf, 0x0c, 0x7f);\n    SetSlotsToState(0x00); \n}\n")),(0,i.kt)("h2",{id:"notifynotificationtype-data1-data2"},"Notify(notificationType, data1, data2)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Notify(notificationType, data1, data2 )")," sends data when the state of a control in Mixcraft has changed allowing for bi-directional feedback between Mixcraft and the hardware controller."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notificationType (type)")," - _The notification type sent from Mixcraft. Refer to ",(0,i.kt)("a",{parentName:"li",href:"/controller-script-api-docs/docs/API%20Sections/MM"},"MM section in API Sections")," for all notification types."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data1")," ",(0,i.kt)("em",{parentName:"li"},"(int)")," - ",(0,i.kt)("em",{parentName:"li"},"In most notification types this will be an index value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data2")," ",(0,i.kt)("em",{parentName:"li"},"(int)")," - ",(0,i.kt)("em",{parentName:"li"},"In most notification types this will be the updated value of the control that has been changed"))),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Notify(notificationType, data1, data2) {\n  if (notificationType == MM.TRACK_VOLUME_CHANGE) {\n    midiValue = data2 * 63 + 1;\n    track = data1 + 1;\n    MIDI.SendMIDI(MIDI.CC_MESSAGE, 0x0F, track, midiValue);\n  }\n")),(0,i.kt)("h2",{id:"ontimer"},"OnTimer()"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OnTimer()")," function is called when a timer is triggered. You can set and stop timers with ",(0,i.kt)("a",{parentName:"p",href:"/controller-script-api-docs/docs/API%20Sections/Globals"},"Globals.StartTimer(timerID, mils) and Globals.StopTimer(timerID)"),"."),(0,i.kt)("h4",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function OnTimer(timerID)\n{\n    if ( timerID == start_timer)\n    {\n        ...\n    }\n}\n")),(0,i.kt)("h2",{id:"onmidimessagetype-midichannel-value1--value2"},"OnMIDI(messageType, midiChannel, value1,  value2)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OnMIDI()")," function is called when a MIDI message is received at the defined MIDI input of the connected device. "),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"messageType")," ",(0,i.kt)("em",{parentName:"p"},"(int)")," - The MIDI message type. The available ",(0,i.kt)("inlineCode",{parentName:"p"},"messageType")," constants and their corresponding integer values as ",(0,i.kt)("em",{parentName:"p"},"(int)"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MIDI.NOTE_OFF (128)"),(0,i.kt)("li",{parentName:"ul"},"MIDI.NOTE_ON (144)"),(0,i.kt)("li",{parentName:"ul"},"MIDI.POLY_PRESSURE (160)"),(0,i.kt)("li",{parentName:"ul"},"MIDI.CC_MESSAGE (167)"),(0,i.kt)("li",{parentName:"ul"},"MIDI.PROGRAM_CHANGE (192)"),(0,i.kt)("li",{parentName:"ul"},"MIDI.CHANNEL_PRESSURE (208)"),(0,i.kt)("li",{parentName:"ul"},"MIDI.PITCH_BEND (224)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"midiChannel")," ",(0,i.kt)("em",{parentName:"p"},"(int)")," - ",(0,i.kt)("em",{parentName:"p"},"The MIDI Channel that the data was received on"),"\n",(0,i.kt)("strong",{parentName:"p"},"value1")," ",(0,i.kt)("em",{parentName:"p"},"(int)")," - ",(0,i.kt)("em",{parentName:"p"},"The second byte value of the MIDI message"),"\n",(0,i.kt)("strong",{parentName:"p"},"value2")," ",(0,i.kt)("em",{parentName:"p"},"(int)")," - ",(0,i.kt)("em",{parentName:"p"},"The third byte value of the MIDI message")),(0,i.kt)("h4",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"OnMIDI(messageType, midiChannel, value1, value2){\n  ...\n    if (messageType == MIDI.CC_MESSAGE && midiChannel == 0x0f) {\n        if (value1 == FADER) {\n        Track.SetVolume(track, volume);\n      }\n    }\n    else if (messageType == MIDI.NOTE_ON && midiChannel == 0x0f) {\n      if (value1 == ARM_BUTTON) {\n        bArmed = Track.IsArmed(track);\n        Track.Arm(track, !bArmed);\n      }\n    }\n    ...\n}\n")),(0,i.kt)("h2",{id:"onsysex"},"OnSysEx()"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSysEx(sysExData)")," function is called when a MIDI SysEx message is received at the defined MIDI input of the connected device. The received ",(0,i.kt)("inlineCode",{parentName:"p"},"sysExData")," payload is an array of bytes. To access the array, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"sysExData[index]")," where index is the index into the array. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sysExData.length")," stores the length of the array."),(0,i.kt)("h4",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function OnSysEx(sysExData)\n{\n    \n    for (  i = 0; i < sysExData.length; i++)\n    {\n        Globals.Log(sysExData[i]);\n    }\n\n}\n")))}d.isMDXComponent=!0}}]);