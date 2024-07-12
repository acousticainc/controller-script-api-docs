"use strict";(self.webpackChunkmixcraft_10_api_docs=self.webpackChunkmixcraft_10_api_docs||[]).push([[413],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=k(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,m=d["".concat(o,".").concat(p)]||d[p]||s[p]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var k={};for(var o in t)hasOwnProperty.call(t,o)&&(k[o]=t[o]);k.originalType=e,k[d]="string"==typeof e?e:r,l[1]=k;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>k,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},l=void 0,k={unversionedId:"API Sections/Track",id:"API Sections/Track",title:"Track",description:"The `Track` section covers functions and properties that allow access to the track controls in Mixcraft.",source:"@site/docs/API Sections/Track.md",sourceDirName:"API Sections",slug:"/API Sections/Track",permalink:"/controller-script-api-docs/docs/API Sections/Track",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Globals",permalink:"/controller-script-api-docs/docs/API Sections/Globals"},next:{title:"Mixcraft",permalink:"/controller-script-api-docs/docs/API Sections/Mixcraft"}},o={},u=[{value:"Track properties",id:"track-properties",level:2},{value:"Track EQ properties",id:"track-eq-properties",level:2},{value:"Quantize properties",id:"quantize-properties",level:2},{value:"Track Type properties",id:"track-type-properties",level:2},{value:"Functions",id:"functions",level:2},{value:"Arm(trackIndex, bool)",id:"armtrackindex-bool",level:3},{value:"FaderToTrack(value)",id:"fadertotrackvalue",level:3},{value:"GetBankOffset()",id:"getbankoffset",level:3},{value:"GetBankSize()",id:"getbanksize",level:3},{value:"GetColor(trackIndex)",id:"getcolortrackindex",level:3},{value:"GetCompressor(trackIndex)",id:"getcompressortrackindex",level:3},{value:"GetDrive(trackIndex)",id:"getdrivetrackindex",level:3},{value:"GetEQ(trackIndex, eqtype)",id:"geteqtrackindex-eqtype",level:3},{value:"GetGain(trackIndex)",id:"getgaintrackindex",level:3},{value:"GetID(trackIndex)",id:"getidtrackindex",level:3},{value:"GetMIDIRecordingQuantize(trackIndex)",id:"getmidirecordingquantizetrackindex",level:3},{value:"GetName(trackIndex)",id:"getnametrackindex",level:3},{value:"GetNumberOfLanes(trackIndex)",id:"getnumberoflanestrackindex",level:3},{value:"GetNumPluginParams(track, index)",id:"getnumpluginparamstrack-index",level:3},{value:"GetPan(trackIndex)",id:"getpantrackindex",level:3},{value:"GetPluginName(track, index)",id:"getpluginnametrack-index",level:3},{value:"GetPluginParamName(track, index, paramIndex)",id:"getpluginparamnametrack-index-paramindex",level:3},{value:"GetPluginParamValue(track, index, paramIndex)",id:"getpluginparamvaluetrack-index-paramindex",level:3},{value:"GetRecordingLevel(trackIndex)",id:"getrecordingleveltrackindex",level:3},{value:"GetSendValue(track, SendTrackNumber)",id:"getsendvaluetrack-sendtracknumber",level:3},{value:"GetSelectedTrack()",id:"getselectedtrack",level:3},{value:"GetTrackIndex(trackID)",id:"gettrackindextrackid",level:3},{value:"GetTrackType(index)",id:"gettracktypeindex",level:3},{value:"GetVolume(trackIndex)",id:"getvolumetrackindex",level:3},{value:"IsArmed(trackIndex)",id:"isarmedtrackindex",level:3},{value:"IsMuted(trackIndex)",id:"ismutedtrackindex",level:3},{value:"IsSelected(trackIndex)",id:"isselectedtrackindex",level:3},{value:"IsSoloed(trackIndex)",id:"issoloedtrackindex",level:3},{value:"Mute(trackIndex, state)",id:"mutetrackindex-state",level:3},{value:"NumPlugin(trackIndex)",id:"numplugintrackindex",level:3},{value:"NumSendTracks()",id:"numsendtracks",level:3},{value:"NumTracks()",id:"numtracks",level:3},{value:"NumTracksOfType(trackType)",id:"numtracksoftypetracktype",level:3},{value:"NumVisibleTracks()",id:"numvisibletracks",level:3},{value:"Select(trackIndex)",id:"selecttrackindex",level:3},{value:"SetBankOffset(trackIndex)",id:"setbankoffsettrackindex",level:3},{value:"SetBankSize(size)",id:"setbanksizesize",level:3},{value:"SetCanControlFaderBanks",id:"setcancontrolfaderbanks",level:3},{value:"SetColor(trackIndex, color)",id:"setcolortrackindex-color",level:3},{value:"SetCompressor(trackIndex, amount)",id:"setcompressortrackindex-amount",level:3},{value:"SetDrive(trackIndex, amount)",id:"setdrivetrackindex-amount",level:3},{value:"SetEQ(trackIndex, eqtype, val)",id:"seteqtrackindex-eqtype-val",level:3},{value:"SetGain(trackIndex, amount)",id:"setgaintrackindex-amount",level:3},{value:"SetMIDIRecordingQuantize(trackIndex, quantizeValue)",id:"setmidirecordingquantizetrackindex-quantizevalue",level:3},{value:"SetName(trackIndex, name)",id:"setnametrackindex-name",level:3},{value:"SetPan(trackIndex, pan)",id:"setpantrackindex-pan",level:3},{value:"SetPluginParamValue(track, index, paramIndex, value)",id:"setpluginparamvaluetrack-index-paramindex-value",level:3},{value:"SetRecordingLevel(trackIndex, level)",id:"setrecordingleveltrackindex-level",level:3},{value:"SetSendValue(track, SendTrackNumber, value)",id:"setsendvaluetrack-sendtracknumber-value",level:3},{value:"SetTouchVolume(index)",id:"settouchvolumeindex",level:3},{value:"SetVolume(trackIndex, level)",id:"setvolumetrackindex-level",level:3},{value:"ShowPlugin(track, index, bShow)",id:"showplugintrack-index-bshow",level:3},{value:"Solo(trackIndex, state)",id:"solotrackindex-state",level:3},{value:"ToggleMIDIRecordingQuantize(index)",id:"togglemidirecordingquantizeindex",level:3},{value:"TrackToFader(value)",id:"tracktofadervalue",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Track")," section covers functions and properties that allow access to the track controls in Mixcraft."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All functions that take a track index as an argument will default to a relative track index that corresponds with the bank offset. However, the optional argument ",(0,r.kt)("inlineCode",{parentName:"p"},"bAbsoluteFlag = true")," can be added, which will set the index argument to an absolute value, based on the tracks index in Mixcraft.")),(0,r.kt)("h2",{id:"track-properties"},"Track properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MASTER_TRACK (-1)"),(0,r.kt)("li",{parentName:"ul"},"PREVIEW_TRACK (-2)")),(0,r.kt)("h2",{id:"track-eq-properties"},"Track EQ properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EQ_LOW"),(0,r.kt)("li",{parentName:"ul"},"EQ_MID"),(0,r.kt)("li",{parentName:"ul"},"EQ_HIGH")),(0,r.kt)("h2",{id:"quantize-properties"},"Quantize properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_OFF"),(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_4"),(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_8"),(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_16"),(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_32"),(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_4_TRIP"),(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_8_TRIP"),(0,r.kt)("li",{parentName:"ul"},"QUANTIZE_16_TRIP")),(0,r.kt)("h2",{id:"track-type-properties"},"Track Type properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TT_Audio"),(0,r.kt)("li",{parentName:"ul"},"TT_MIDI"),(0,r.kt)("li",{parentName:"ul"},"TT_SubMix"),(0,r.kt)("li",{parentName:"ul"},"TT_Master"),(0,r.kt)("li",{parentName:"ul"},"TT_Send"),(0,r.kt)("li",{parentName:"ul"},"TT_Output"),(0,r.kt)("li",{parentName:"ul"},"TT_Video"),(0,r.kt)("li",{parentName:"ul"},"TT_InstrumentOutput"),(0,r.kt)("li",{parentName:"ul"},"TT_Rewire"),(0,r.kt)("li",{parentName:"ul"},"TT_Text")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"armtrackindex-bool"},"Arm(trackIndex, bool)"),(0,r.kt)("p",null,"This function arms or disarms the track at the specified index for recording based on the provided boolean value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bool")," )bool): ",(0,r.kt)("em",{parentName:"li"},"The arm state of the track"))),(0,r.kt)("h3",{id:"fadertotrackvalue"},"FaderToTrack(value)"),(0,r.kt)("p",null,"This function returns the track index of a Mixcraft track that is mapped to the fader of a control surface. The value is retrieved based on the bank offset value which is set with Track.SetBankOffset()."),(0,r.kt)("h3",{id:"getbankoffset"},"GetBankOffset()"),(0,r.kt)("p",null,"This function returns the current bank offset."),(0,r.kt)("h3",{id:"getbanksize"},"GetBankSize()"),(0,r.kt)("p",null,"This function returns the current size of the bank for the control surface."),(0,r.kt)("h3",{id:"getcolortrackindex"},"GetColor(trackIndex)"),(0,r.kt)("p",null,"This function returns a string version of the color for the specified track index, in the format AARRGGBB."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the color of"))),(0,r.kt)("h3",{id:"getcompressortrackindex"},"GetCompressor(trackIndex)"),(0,r.kt)("p",null,"This function returns the compressor value for the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the compressor value of"))),(0,r.kt)("h3",{id:"getdrivetrackindex"},"GetDrive(trackIndex)"),(0,r.kt)("p",null,"This function returns the drive value for the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the drive value of"))),(0,r.kt)("h3",{id:"geteqtrackindex-eqtype"},"GetEQ(trackIndex, eqtype)"),(0,r.kt)("p",null,"This function returns the current EQ value for the specified track index and EQ type."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"eqType")," (type): ",(0,r.kt)("em",{parentName:"li"},"The EQ type to get the value from (see ",(0,r.kt)("a",{parentName:"em",href:"#track-eq-properties"},"EQ properties")," at top of page) "))),(0,r.kt)("h3",{id:"getgaintrackindex"},"GetGain(trackIndex)"),(0,r.kt)("p",null,"This function returns the gain value for the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the gain value of"))),(0,r.kt)("h3",{id:"getidtrackindex"},"GetID(trackIndex)"),(0,r.kt)("p",null,"This function returns the ID of the track at the specified track index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the ID of"))),(0,r.kt)("h3",{id:"getmidirecordingquantizetrackindex"},"GetMIDIRecordingQuantize(trackIndex)"),(0,r.kt)("p",null,"This function returns the recording quantize value of the track at the specified index (only applies to MIDI tracks)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the ID of"))),(0,r.kt)("h3",{id:"getnametrackindex"},"GetName(trackIndex)"),(0,r.kt)("p",null,"This function returns the name of the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the name of"))),(0,r.kt)("h3",{id:"getnumberoflanestrackindex"},"GetNumberOfLanes(trackIndex)"),(0,r.kt)("p",null,"This function returns the number of lanes, as an int value, of the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the number of lanes of"))),(0,r.kt)("h3",{id:"getnumpluginparamstrack-index"},"GetNumPluginParams(track, index)"),(0,r.kt)("p",null,"This function returns the number of parameters for the plugin at the specified index on the given track."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track where the plugin is instantiated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the plugin inserted on the defined track"))),(0,r.kt)("h3",{id:"getpantrackindex"},"GetPan(trackIndex)"),(0,r.kt)("p",null,"This function returns the pan value for the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the pan value of"))),(0,r.kt)("h3",{id:"getpluginnametrack-index"},"GetPluginName(track, index)"),(0,r.kt)("p",null,"This function returns the name of the plugin, as a string value, at the specified index for the given track."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track where the plugin is instantiated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the plugin inserted on the defined track"))),(0,r.kt)("h3",{id:"getpluginparamnametrack-index-paramindex"},"GetPluginParamName(track, index, paramIndex)"),(0,r.kt)("p",null,"This function returns the name of the parameter, as a string value, at the specified paramIndex for the plugin at the specified index on the given track."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track where the plugin is instantiated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the plugin inserted on the defined track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"paramindex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the plugin parameter"))),(0,r.kt)("h3",{id:"getpluginparamvaluetrack-index-paramindex"},"GetPluginParamValue(track, index, paramIndex)"),(0,r.kt)("p",null,"This function returns the value of the parameter, as a double value, at the specified paramIndex for the plugin at the specified index on the given track. The value is between 0 and 1.0."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track where the plugin is instantiated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the plugin inserted on the defined track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"paramindex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the parameter"))),(0,r.kt)("h3",{id:"getrecordingleveltrackindex"},"GetRecordingLevel(trackIndex)"),(0,r.kt)("p",null,"This function returns the recording level of the track at the specified index as a float value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the recording level of"))),(0,r.kt)("h3",{id:"getsendvaluetrack-sendtracknumber"},"GetSendValue(track, SendTrackNumber)"),(0,r.kt)("p",null,"This function gets the value of the defined Send track and return the float value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the defined send level value of")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The number of the Send track to get the send level value of"))),(0,r.kt)("h3",{id:"getselectedtrack"},"GetSelectedTrack()"),(0,r.kt)("p",null,"This function returns the index of the currently selected track."),(0,r.kt)("h3",{id:"gettrackindextrackid"},"GetTrackIndex(trackID)"),(0,r.kt)("p",null,"This function returns the track index for the specified track ID."),(0,r.kt)("h3",{id:"gettracktypeindex"},"GetTrackType(index)"),(0,r.kt)("p",null,"This function returns one of the following track types:\nTrack.TT_Audio, Track.TT_MIDI, Track.TT_SubMix, Track.TT_MasterTrack, Track.TT_Video, Track.TT_InstrumentOutput, Track.TT_ReWire, Track.TT_Text"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to get the track type of"))),(0,r.kt)("h3",{id:"getvolumetrackindex"},"GetVolume(trackIndex)"),(0,r.kt)("p",null,"This function returns the current volume of the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track"))),(0,r.kt)("h3",{id:"isarmedtrackindex"},"IsArmed(trackIndex)"),(0,r.kt)("p",null,"This function returns a boolean indicating if the track at the specified index is armed for recording."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track being checked for armed state"))),(0,r.kt)("h3",{id:"ismutedtrackindex"},"IsMuted(trackIndex)"),(0,r.kt)("p",null,"This function returns a boolean indicating if the track at the specified index is muted."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track being checked for mute state"))),(0,r.kt)("h3",{id:"isselectedtrackindex"},"IsSelected(trackIndex)"),(0,r.kt)("p",null,"This function returns a boolean indicating if the track at the specified index is currently selected."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track being checked for selection state"))),(0,r.kt)("h3",{id:"issoloedtrackindex"},"IsSoloed(trackIndex)"),(0,r.kt)("p",null,"This function returns a boolean indicating if the track at the specified index is in solo mode."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track being checked for solo state"))),(0,r.kt)("h3",{id:"mutetrackindex-state"},"Mute(trackIndex, state)"),(0,r.kt)("p",null,"This function mutes or unmutes the track at the specified index based on the provided boolean value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state")," (bool): ",(0,r.kt)("em",{parentName:"li"},"The muted state of the defined track"))),(0,r.kt)("h3",{id:"numplugintrackindex"},"NumPlugin(trackIndex)"),(0,r.kt)("p",null,"This function returns the number of plugins for the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track"))),(0,r.kt)("h3",{id:"numsendtracks"},"NumSendTracks()"),(0,r.kt)("p",null,"This function returns the total number of Send tracks in the project."),(0,r.kt)("h3",{id:"numtracks"},"NumTracks()"),(0,r.kt)("p",null,"This function returns the total number of tracks in the project."),(0,r.kt)("h3",{id:"numtracksoftypetracktype"},"NumTracksOfType(trackType)"),(0,r.kt)("p",null,"This function returns the total number of tracks of a defined type in the project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackType")," (type): ",(0,r.kt)("em",{parentName:"li"},"The type of the track. See ",(0,r.kt)("a",{parentName:"em",href:"#track-type-properties"},"Track Type properties")," above"))),(0,r.kt)("h3",{id:"numvisibletracks"},"NumVisibleTracks()"),(0,r.kt)("p",null,"This function returns the number of visible tracks in the main window of Mixcraft. The children of a Submix track would not be counted as visible until the Submix track is expanded."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackType")," (type): ",(0,r.kt)("em",{parentName:"li"},"The type of the track. See ",(0,r.kt)("a",{parentName:"em",href:"#track-type-properties"},"Track Type properties")," above"))),(0,r.kt)("h3",{id:"selecttrackindex"},"Select(trackIndex)"),(0,r.kt)("p",null,"This function selects the track at the specified index."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track"))),(0,r.kt)("h3",{id:"setbankoffsettrackindex"},"SetBankOffset(trackIndex)"),(0,r.kt)("p",null,"This function sets the bank offset to the specified track index."),(0,r.kt)("h3",{id:"setbanksizesize"},"SetBankSize(size)"),(0,r.kt)("p",null,"This function sets the size of the bank for the control surface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"size")," (int): ",(0,r.kt)("em",{parentName:"li"},"The number of faders available on the controller"))),(0,r.kt)("h3",{id:"setcancontrolfaderbanks"},"SetCanControlFaderBanks"),(0,r.kt)("p",null,"This function sets whether the control surface can control fader banks."),(0,r.kt)("h3",{id:"setcolortrackindex-color"},"SetColor(trackIndex, color)"),(0,r.kt)("p",null,"This function sets the color of the track at the specified index using the provided string version of the color."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," (string): ",(0,r.kt)("em",{parentName:"li"},"The color in the format AARRGGBB"))),(0,r.kt)("h3",{id:"setcompressortrackindex-amount"},"SetCompressor(trackIndex, amount)"),(0,r.kt)("p",null,"This function sets the compressor value for the track at the specified index to the given amount."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): The index of the track."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"amount")," (float): ",(0,r.kt)("em",{parentName:"li"},"The compressor value to set"))),(0,r.kt)("h3",{id:"setdrivetrackindex-amount"},"SetDrive(trackIndex, amount)"),(0,r.kt)("p",null,"This function sets the drive value for the track at the specified index to the given amount."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"amount")," (float): ",(0,r.kt)("em",{parentName:"li"},"The drive value to set"))),(0,r.kt)("h3",{id:"seteqtrackindex-eqtype-val"},"SetEQ(trackIndex, eqtype, val)"),(0,r.kt)("p",null,"This function sets the EQ value for the specified track index and EQ type to the given value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"eqType")," (type): ",(0,r.kt)("em",{parentName:"li"},"The EQ type to apply the value to (see ",(0,r.kt)("a",{parentName:"em",href:"#track-eq-properties"},"EQ properties")," at top of page)"))),(0,r.kt)("h3",{id:"setgaintrackindex-amount"},"SetGain(trackIndex, amount)"),(0,r.kt)("p",null,"This function sets the gain value for the track at the specified index to the given amount."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"amount")," (float): The gain value to set_")),(0,r.kt)("h3",{id:"setmidirecordingquantizetrackindex-quantizevalue"},"SetMIDIRecordingQuantize(trackIndex, quantizeValue)"),(0,r.kt)("p",null,"This function sets the Automatic Quantization value available for MIDI Recording."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantizeValue")," (type): ",(0,r.kt)("em",{parentName:"li"},"The quantize value to apply to the Automatic Quantization of MIDI recording. See ",(0,r.kt)("a",{parentName:"em",href:"#quantize-properties"},"quantization properties")," above"))),(0,r.kt)("h3",{id:"setnametrackindex-name"},"SetName(trackIndex, name)"),(0,r.kt)("p",null,"This function sets the name of the track at the specified index to the given name."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," (string): ",(0,r.kt)("em",{parentName:"li"},"The name of the track"))),(0,r.kt)("h3",{id:"setpantrackindex-pan"},"SetPan(trackIndex, pan)"),(0,r.kt)("p",null,"This function sets the pan value for the track at the specified index to the given pan value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"amount")," (float): ",(0,r.kt)("em",{parentName:"li"},"The pan value to set"))),(0,r.kt)("h3",{id:"setpluginparamvaluetrack-index-paramindex-value"},"SetPluginParamValue(track, index, paramIndex, value)"),(0,r.kt)("p",null,"This function sets the value of the parameter at the specified paramIndex for the plugin at the specified index on the given track. The value should be between 0 and 1.0."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the plugin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"paramindex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the parameter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," (float): ",(0,r.kt)("em",{parentName:"li"},"The value to set for the parameter, ranging from 0 to 1.0"))),(0,r.kt)("h3",{id:"setrecordingleveltrackindex-level"},"SetRecordingLevel(trackIndex, level)"),(0,r.kt)("p",null,"This function sets the recording level of the track at the specified index to the given level."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track"))),(0,r.kt)("h3",{id:"setsendvaluetrack-sendtracknumber-value"},"SetSendValue(track, SendTrackNumber, value)"),(0,r.kt)("p",null,"This function sets the value of the defined Send track."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The number of the Send track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," (float): ",(0,r.kt)("em",{parentName:"li"},"The value to set for the parameter, ranging from 0 to 1.0"))),(0,r.kt)("h3",{id:"settouchvolumeindex"},"SetTouchVolume(index)"),(0,r.kt)("p",null,"This function sets the touch volume for the control surface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to set the touch volume for"))),(0,r.kt)("h3",{id:"setvolumetrackindex-level"},"SetVolume(trackIndex, level)"),(0,r.kt)("p",null,"This function sets the volume of the track at the specified index to the given level."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track to set the volume of")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"level")," (float): ",(0,r.kt)("em",{parentName:"li"},"The volume level value to set for the defined track ranging from 0 to 1.0. Where 0db on the fader is equal to 0.773475"))),(0,r.kt)("h3",{id:"showplugintrack-index-bshow"},"ShowPlugin(track, index, bShow)"),(0,r.kt)("p",null,"This function shows or hides the plugin at the specified index on the given track based on the provided boolean value bShow."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"track")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the plugin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bShow")," (bool): ",(0,r.kt)("em",{parentName:"li"},"The boolean value indicating whether to show or hide the plugin"))),(0,r.kt)("h3",{id:"solotrackindex-state"},"Solo(trackIndex, state)"),(0,r.kt)("p",null,"This function enables or disables solo for the track at the specified index based on the provided boolean value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackIndex")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state")," (bool): ",(0,r.kt)("em",{parentName:"li"},"The soloed state of the defined track"))),(0,r.kt)("h3",{id:"togglemidirecordingquantizeindex"},"ToggleMIDIRecordingQuantize(index)"),(0,r.kt)("p",null,"This function toggles the Automatic Quantize function on a MIDI track."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (int): ",(0,r.kt)("em",{parentName:"li"},"The index of the track in which to toggle Automatic Quantize feature"))),(0,r.kt)("h3",{id:"tracktofadervalue"},"TrackToFader(value)"),(0,r.kt)("p",null,"This function returns the fader index of a control surface based on the Mixcraft track index supplied as an argument. The value is retrieved based on the bank offset value which is set with Track.SetBankOffset()."))}s.isMDXComponent=!0}}]);