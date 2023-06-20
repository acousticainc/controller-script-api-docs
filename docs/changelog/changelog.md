--- 
sidebar_position: 1
--- 

## build 526

### New properties 

Globals.APILevel (defaults to 1)

### New functions

#### Track:
- NumVisibleTracks()
- FaderToTrack() - converts fader index to absolute track index.
- TrackToFader() - converts absolute track index to fader index.
- GetTrackType() - returns one of the following:
  Track.TT_Audio, Track.TT_MIDI, Track.TT_SubMix, Track.TT_MasterTrack, Track.TT_Video, Track.TT_InstrumentOutput, Track.TT_ReWire, Track.TT_Text

### New Flag

The new bAbsoluteFlag has been added to the functions listed below. This flag defaults to true, which gets or sets the argument expected as the track index. If set to false, the fader index is used. 

In this example, the gain of the track in Mixcraft that is mapped to the fourth fader of your controller will be returned: 
```js
GetGain(4, bAbsoluteTrackIndexFlag=false);
```

In this example, the gain of the track in Mixcraft at index 4 will be returned: 
```js
GetGain(4);
```

#### Functions that can now use the bAbsoluteFlag argument

- Arm()
- GetColor()
- GetCompressor()
- GetDrive()
- GetEQ()
- GetGain()
- GetID()
- GetName()
- GetNumPluginParamers()
- GetPan()
- GetPluginName()
- GetPluginParamName()
- GetPluginParamValue()
- GetRecordingLevel()
- GetSendValue()
- GetTrackType()
- GetVolume()
- IsArmed()
- IsMuted()
- IsSelected()
- IsSoloed()
- Mute()
- NumberOfPlugins()
- Select()
- SetColor()
- SetCompressor()
- SetDrive()
- SetEQ()
- SetGain()
- SetName()
- SetPan()
- SetPluginParamValue()
- SetRecordingLevel()
- SetSendValue()
- SetTouchVolume()
- SetVolume()
- ShowPlugin()