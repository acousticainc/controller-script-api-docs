"use strict";(self.webpackChunkmixcraft_10_api_docs=self.webpackChunkmixcraft_10_api_docs||[]).push([[548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>I});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,I=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(I,i(i({ref:t},u),{},{components:a})):n.createElement(I,i({ref:t},u))}));function I(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:5},i="MIDI",s={unversionedId:"API Sections/MIDI",id:"API Sections/MIDI",title:"MIDI",description:"In the `OnMIDI(messageType, midiChannel, value1, value2)` function, you'll find the `messageType`, `midiChannel`, `value1`, and `value2` parameters. More details about each one of those is documented below.",source:"@site/docs/API Sections/MIDI.md",sourceDirName:"API Sections",slug:"/API Sections/MIDI",permalink:"/controller-script-api-docs/docs/API Sections/MIDI",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Mixcraft",permalink:"/controller-script-api-docs/docs/API Sections/Mixcraft"},next:{title:"Perform",permalink:"/controller-script-api-docs/docs/API Sections/Perform"}},o={},p=[{value:"messageType",id:"messagetype",level:3},{value:"midiChannel",id:"midichannel",level:3},{value:"value1 and value2",id:"value1-and-value2",level:3},{value:"Constants",id:"constants",level:3},{value:"Functions",id:"functions",level:2},{value:"SendMIDI(type, chan, data1, data2)",id:"sendmiditype-chan-data1-data2",level:3},{value:"SendMIDIArray(arrayOfBytes)",id:"sendmidiarrayarrayofbytes",level:3},{value:"SendSysEx(arrayOfBytes)",id:"sendsysexarrayofbytes",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"midi"},"MIDI"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnMIDI(messageType, midiChannel, value1, value2)")," function, you'll find the ",(0,r.kt)("inlineCode",{parentName:"p"},"messageType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"midiChannel"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value1"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"value2")," parameters. More details about each one of those is documented below."),(0,r.kt)("h3",{id:"messagetype"},"messageType"),(0,r.kt)("p",null,"The following list holds the constants available for MIDI message types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MIDI.NOTE_ON"),(0,r.kt)("li",{parentName:"ul"},"MIDI.NOTE_OFF"),(0,r.kt)("li",{parentName:"ul"},"MIDI.POLY_PRESSURE"),(0,r.kt)("li",{parentName:"ul"},"MIDI.CC_MESSAGE"),(0,r.kt)("li",{parentName:"ul"},"MIDI.PROGRAM_CHANGE"),(0,r.kt)("li",{parentName:"ul"},"MIDI.CHANNEL_PRESSURE"),(0,r.kt)("li",{parentName:"ul"},"MIDI.PITCH_BEND  ")),(0,r.kt)("h3",{id:"midichannel"},"midiChannel"),(0,r.kt)("p",null,"A hexadecimal value from 0x0 to 0xF (0 to 15) representing MIDI channels 1 to 16.  "),(0,r.kt)("h3",{id:"value1-and-value2"},"value1 and value2"),(0,r.kt)("p",null,"A hexadecimal value for the second and third byte of a MIDI message. Depending on the messageType, this can change.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MIDI.NOTE_ON"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value1 = note number"),(0,r.kt)("li",{parentName:"ul"},"value2 = velocity value  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MIDI.NOTE_OFF"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value1 = note number"),(0,r.kt)("li",{parentName:"ul"},"value2 = velocity value  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MIDI.POLY_PRESSURE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value1 = note number"),(0,r.kt)("li",{parentName:"ul"},"value2 = pressure value  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MIDI.CC_MESSAGE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value1 = cc number"),(0,r.kt)("li",{parentName:"ul"},"value2 = pressure value"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MIDI.PROGRAM_CHANGE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value1 = instrument number"),(0,r.kt)("li",{parentName:"ul"},"value2 = null  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MIDI.CHANNEL_PRESSURE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value1 = pressure value"),(0,r.kt)("li",{parentName:"ul"},"value2 = null  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MIDI.NOTE_ON"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value1 = pitch bend value"),(0,r.kt)("li",{parentName:"ul"},"value2 = null  ")))),(0,r.kt)("h3",{id:"constants"},"Constants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MIDI.NOTE_OFF (128)"),(0,r.kt)("li",{parentName:"ul"},"MIDI.NOTE_ON (144)"),(0,r.kt)("li",{parentName:"ul"},"MIDI.POLY_PRESSURE (160)"),(0,r.kt)("li",{parentName:"ul"},"MIDI.CC_MESSAGE (167)"),(0,r.kt)("li",{parentName:"ul"},"MIDI.PROGRAM_CHANGE (192)"),(0,r.kt)("li",{parentName:"ul"},"MIDI.CHANNEL_PRESSURE (208)"),(0,r.kt)("li",{parentName:"ul"},"MIDI.PITCH_BEND (224)"),(0,r.kt)("li",{parentName:"ul"},"SYS_EX  (240)")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"sendmiditype-chan-data1-data2"},"SendMIDI(type, chan, data1, data2)"),(0,r.kt)("p",null,"The SendMIDI function sends MIDI messages to the hardware controller. This function allows the user to specify the type of MIDI message to be sent, the channel on which the message will be sent, and any associated data values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"type")," (type): ",(0,r.kt)("em",{parentName:"p"},"specifies the type of MIDI message to be sent to the device. The type parameter corresponds with an  integer value, but we recommend using the constants above, for readability"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"chan")," (int): ",(0,r.kt)("em",{parentName:"p"},"specifies the MIDI channel on which the message will be sent, with values ranging from 1 to 16"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"data1")," (int): ",(0,r.kt)("em",{parentName:"p"},"specifies the first data value associated with the MIDI message, with values ranging from 0 to 127"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"data2")," (int): _ specifies the second data value associated with the MIDI message, with values ranging from 0 to 127_This parameter is only required for certain types of MIDI messages (i.e., Note On, Note Off, Control Change, and Pitch Bend)."))),(0,r.kt)("h3",{id:"sendmidiarrayarrayofbytes"},"SendMIDIArray(arrayOfBytes)"),(0,r.kt)("p",null,"This function sends and array of bytes as a MIDI message."),(0,r.kt)("h3",{id:"sendsysexarrayofbytes"},"SendSysEx(arrayOfBytes)"),(0,r.kt)("p",null," This function sends and array of bytes with the system exclusive start (xF0) and end bytes (xF7)included -- they are not needed in the array; the function will will handle adding them."))}c.isMDXComponent=!0}}]);