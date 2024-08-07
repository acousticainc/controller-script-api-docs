---
sidebar_position: 3
---

The ```Track``` section covers functions and properties that allow access to the track controls in Mixcraft.

:::tip

All functions that take a track index as an argument will default to a relative track index that corresponds with the bank offset. However, the optional argument ```bAbsoluteFlag = true``` can be added, which will set the index argument to an absolute value, based on the tracks index in Mixcraft.

:::

## Track properties

- MASTER_TRACK (-1)
- PREVIEW_TRACK (-2)

## Track EQ properties

- EQ_LOW
- EQ_MID
- EQ_HIGH

## Quantize properties

- QUANTIZE_OFF
- QUANTIZE_4
- QUANTIZE_8
- QUANTIZE_16
- QUANTIZE_32
- QUANTIZE_4_TRIP
- QUANTIZE_8_TRIP
- QUANTIZE_16_TRIP

## Track Type properties

- TT_Audio
- TT_MIDI
- TT_SubMix
- TT_Master
- TT_Send
- TT_Output
- TT_Video
- TT_InstrumentOutput
- TT_Rewire
- TT_Text

## Functions

### Arm(trackIndex, bool)
This function arms or disarms the track at the specified index for recording based on the provided boolean value.

- **trackIndex** (int): _The index of the track_
- **bool** )bool): _The arm state of the track_

### FaderToTrack(value)
This function returns the track index of a Mixcraft track that is mapped to the fader of a control surface. The value is retrieved based on the bank offset value which is set with Track.SetBankOffset().

### GetBankOffset()
This function returns the current bank offset.

### GetBankSize()
This function returns the current size of the bank for the control surface.

### GetColor(trackIndex)
This function returns a string version of the color for the specified track index, in the format AARRGGBB.

- **trackIndex** (int): _The index of the track to get the color of_

### GetCompressor(trackIndex)
This function returns the compressor value for the track at the specified index.

- **trackIndex** (int): _The index of the track to get the compressor value of_

### GetDrive(trackIndex)
This function returns the drive value for the track at the specified index.

- **trackIndex** (int): _The index of the track to get the drive value of_

### GetEQ(trackIndex, eqtype)
This function returns the current EQ value for the specified track index and EQ type.

- **trackIndex** (int): _The index of the track_
- **eqType** (type): _The EQ type to get the value from (see [EQ properties](#track-eq-properties) at top of page) _

### GetGain(trackIndex)
This function returns the gain value for the track at the specified index.

- **trackIndex** (int): _The index of the track to get the gain value of_

### GetID(trackIndex)
This function returns the ID of the track at the specified track index.

- **trackIndex** (int): _The index of the track to get the ID of_

### GetMIDIRecordingQuantize(trackIndex)
This function returns the recording quantize value of the track at the specified index (only applies to MIDI tracks).

- **trackIndex** (int): _The index of the track to get the ID of_

### GetName(trackIndex)
This function returns the name of the track at the specified index.

- **trackIndex** (int): _The index of the track to get the name of_

### GetNumberOfLanes(trackIndex)
This function returns the number of lanes, as an int value, of the track at the specified index.

- **trackIndex** (int): _The index of the track to get the number of lanes of_

### GetNumPluginParams(track, index)
This function returns the number of parameters for the plugin at the specified index on the given track.

- **track** (int): _The index of the track where the plugin is instantiated_
- **index** (int): _The index of the plugin inserted on the defined track_

### GetPan(trackIndex)
This function returns the pan value for the track at the specified index.

- **trackIndex** (int): _The index of the track to get the pan value of_

### GetPluginName(track, index)
This function returns the name of the plugin, as a string value, at the specified index for the given track.

- **track** (int): _The index of the track where the plugin is instantiated_
- **index** (int): _The index of the plugin inserted on the defined track_

### GetPluginParamName(track, index, paramIndex)
This function returns the name of the parameter, as a string value, at the specified paramIndex for the plugin at the specified index on the given track.

- **track** (int): _The index of the track where the plugin is instantiated_
- **index** (int): _The index of the plugin inserted on the defined track_
- **paramindex** (int): _The index of the plugin parameter_

### GetPluginParamValue(track, index, paramIndex)
This function returns the value of the parameter, as a double value, at the specified paramIndex for the plugin at the specified index on the given track. The value is between 0 and 1.0.

- **track** (int): _The index of the track where the plugin is instantiated_
- **index** (int): _The index of the plugin inserted on the defined track_
- **paramindex** (int): _The index of the parameter_

### GetRecordingLevel(trackIndex)
This function returns the recording level of the track at the specified index as a float value.

- **trackIndex** (int): _The index of the track to get the recording level of_

### GetSendValue(track, SendTrackNumber)
This function gets the value of the defined Send track and return the float value.

- **track** (int): _The index of the track to get the defined send level value of_
- **index** (int): _The number of the Send track to get the send level value of_

### GetSelectedTrack()
This function returns the index of the currently selected track.

### GetTrackIndex(trackID)
This function returns the track index for the specified track ID.

### GetTrackType(index)
This function returns one of the following track types:
Track.TT_Audio, Track.TT_MIDI, Track.TT_SubMix, Track.TT_MasterTrack, Track.TT_Video, Track.TT_InstrumentOutput, Track.TT_ReWire, Track.TT_Text

- **index** (int): _The index of the track to get the track type of_

### GetVolume(trackIndex)
This function returns the current volume of the track at the specified index.

- **trackIndex** (int): _The index of the track_

### IsArmed(trackIndex)
This function returns a boolean indicating if the track at the specified index is armed for recording.

- **trackIndex** (int): _The index of the track being checked for armed state_

### IsMuted(trackIndex)
This function returns a boolean indicating if the track at the specified index is muted.

- **trackIndex** (int): _The index of the track being checked for mute state_

### IsSelected(trackIndex)
This function returns a boolean indicating if the track at the specified index is currently selected.

- **trackIndex** (int): _The index of the track being checked for selection state_

### IsSoloed(trackIndex)
This function returns a boolean indicating if the track at the specified index is in solo mode.

- **trackIndex** (int): _The index of the track being checked for solo state_

### Mute(trackIndex, state)
This function mutes or unmutes the track at the specified index based on the provided boolean value.

- **trackIndex** (int): _The index of the track_
- **state** (bool): _The muted state of the defined track_

### NumPlugin(trackIndex)
This function returns the number of plugins for the track at the specified index.

- **trackIndex** (int): _The index of the track_

### NumSendTracks()
This function returns the total number of Send tracks in the project.

### NumTracks()
This function returns the total number of tracks in the project.

### NumTracksOfType(trackType)
This function returns the total number of tracks of a defined type in the project.

- **trackType** (type): _The type of the track. See [Track Type properties](#track-type-properties) above_

### NumVisibleTracks()
This function returns the number of visible tracks in the main window of Mixcraft. The children of a Submix track would not be counted as visible until the Submix track is expanded.

- **trackType** (type): _The type of the track. See [Track Type properties](#track-type-properties) above_

### Select(trackIndex)
This function selects the track at the specified index.

- **trackIndex** (int): _The index of the track_

### SetBankOffset(trackIndex)
This function sets the bank offset to the specified track index.

### SetBankSize(size)
This function sets the size of the bank for the control surface.

- **size** (int): _The number of faders available on the controller_

### SetCanControlFaderBanks
This function sets whether the control surface can control fader banks.

### SetColor(trackIndex, color)
This function sets the color of the track at the specified index using the provided string version of the color.

- **trackIndex** (int): _The index of the track_
- **color** (string): _The color in the format AARRGGBB_

### SetCompressor(trackIndex, amount)
This function sets the compressor value for the track at the specified index to the given amount.

- **trackIndex** (int): The index of the track.
- **amount** (float): _The compressor value to set_

### SetDrive(trackIndex, amount)
This function sets the drive value for the track at the specified index to the given amount.

- **trackIndex** (int): _The index of the track_
- **amount** (float): _The drive value to set_

### SetEQ(trackIndex, eqtype, val)
This function sets the EQ value for the specified track index and EQ type to the given value.

- **trackIndex** (int): _The index of the track_
- **eqType** (type): _The EQ type to apply the value to (see [EQ properties](#track-eq-properties) at top of page)_

### SetGain(trackIndex, amount)
This function sets the gain value for the track at the specified index to the given amount.

- **trackIndex** (int): _The index of the track_
- **amount** (float): The gain value to set_

### SetMIDIRecordingQuantize(trackIndex, quantizeValue)
This function sets the Automatic Quantization value available for MIDI Recording.

- **trackIndex** (int): _The index of the track_
- **quantizeValue** (type): _The quantize value to apply to the Automatic Quantization of MIDI recording. See [quantization properties](#quantize-properties) above_

### SetName(trackIndex, name)
This function sets the name of the track at the specified index to the given name.

- **trackIndex** (int): _The index of the track_
- **name** (string): _The name of the track_

### SetPan(trackIndex, pan)
This function sets the pan value for the track at the specified index to the given pan value.

- **trackIndex** (int): _The index of the track_
- **amount** (float): _The pan value to set_

### SetPluginParamValue(track, index, paramIndex, value)
This function sets the value of the parameter at the specified paramIndex for the plugin at the specified index on the given track. The value should be between 0 and 1.0.

- **track** (int): _The index of the track_
- **index** (int): _The index of the plugin_
- **paramindex** (int): _The index of the parameter_
- **value** (float): _The value to set for the parameter, ranging from 0 to 1.0_

### SetRecordingLevel(trackIndex, level)
This function sets the recording level of the track at the specified index to the given level.

- **trackIndex** (int): _The index of the track_

### SetSendValue(track, SendTrackNumber, value)
This function sets the value of the defined Send track.

- **track** (int): _The index of the track_
- **index** (int): _The number of the Send track_
- **value** (float): _The value to set for the parameter, ranging from 0 to 1.0_

### SetTouchVolume(index)
This function sets the touch volume for the control surface.

- **index** (int): _The index of the track to set the touch volume for_

### SetVolume(trackIndex, level)
This function sets the volume of the track at the specified index to the given level.

- **trackIndex** (int): _The index of the track to set the volume of_
- **level** (float): _The volume level value to set for the defined track ranging from 0 to 1.0. Where 0db on the fader is equal to 0.773475_

### ShowPlugin(track, index, bShow)
This function shows or hides the plugin at the specified index on the given track based on the provided boolean value bShow.

- **track** (int): _The index of the track_
- **index** (int): _The index of the plugin_
- **bShow** (bool): _The boolean value indicating whether to show or hide the plugin_

### Solo(trackIndex, state)
This function enables or disables solo for the track at the specified index based on the provided boolean value.

- **trackIndex** (int): _The index of the track_
- **state** (bool): _The soloed state of the defined track_

### ToggleMIDIRecordingQuantize(index)
This function toggles the Automatic Quantize function on a MIDI track.

- **index** (int): _The index of the track in which to toggle Automatic Quantize feature_

### TrackToFader(value)
This function returns the fader index of a control surface based on the Mixcraft track index supplied as an argument. The value is retrieved based on the bank offset value which is set with Track.SetBankOffset().