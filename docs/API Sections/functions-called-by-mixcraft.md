---
sidebar_position: 1
---

# Functions Called by Mixcraft

This section covers the functions in your script that are called by Micraft.

## OnStartup()

The ```OnStartup()``` function will do any setup work, such as setting variables, setting timers, or sending SysEx data to initialize or reset hardware.

#### Example
```js
function OnStartup() {

  MIDI.SendMIDI(MIDI.NOTE_ON, 0xf, 0x0c, 0x7f);

  Track.SetBankSize(2);
  Track.SetBankOffset(selectedTrack);

  Perform.SetIsButtonController(true);
  Perform.SetSize(2, 8);
}
``` 


## OnShutdown()

The ```OnShutdown()``` function will do any cleanup work such as sending SysEx data to initialize or reset hardware.

#### Example
```js
OnShutdown(){
    MIDI.SendMIDI(MIDI.NOTE_ON, 0xf, 0x0c, 0x7f);
    SetSlotsToState(0x00); 
}
```

## Notify(notificationType, data1, data2)

The ```Notify(notificationType, data1, data2 )``` sends data when the state of a control in Mixcraft has changed allowing for bi-directional feedback between Mixcraft and the hardware controller.

#### Parameters

- **notificationType (type)** - _The notification type sent from Mixcraft. Refer to [MM section in API Sections](/docs/API%20Sections/MM.md) for all notification types.
- **data1** *(int)* - _In most notification types this will be an index value_
- **data2** *(int)* - _In most notification types this will be the updated value of the control that has been changed_

#### Example
```js
function Notify(notificationType, data1, data2) {
  if (notificationType == MM.TRACK_VOLUME_CHANGE) {
    midiValue = data2 * 63 + 1;
    track = data1 + 1;
    MIDI.SendMIDI(MIDI.CC_MESSAGE, 0x0F, track, midiValue);
  }
```

## OnTimer()
The ```OnTimer()``` function is called when a timer is triggered. You can set and stop timers with [Globals.StartTimer(timerID, mils) and Globals.StopTimer(timerID)](/docs/API%20Sections/Globals.md).

#### Example
```js
function OnTimer(timerID)
{
	if ( timerID == start_timer)
	{
        ...
	}
}
```

## OnMIDI(messageType, midiChannel, value1,  value2)
The ```OnMIDI()``` function is called when a MIDI message is received at the defined MIDI input of the connected device. 

#### Parameters
**messageType** *(int)* - The MIDI message type. The available ```messageType``` constants and their corresponding integer values as _(int)_:


- MIDI.NOTE_OFF (128)
- MIDI.NOTE_ON (144)
- MIDI.POLY_PRESSURE (160)
- MIDI.CC_MESSAGE (167)
- MIDI.PROGRAM_CHANGE (192)
- MIDI.CHANNEL_PRESSURE (208)
- MIDI.PITCH_BEND (224)


**midiChannel** *(int)* - _The MIDI Channel that the data was received on_
**value1** *(int)* - _The second byte value of the MIDI message_
**value2** *(int)* - _The third byte value of the MIDI message_

#### Example
```js
OnMIDI(messageType, midiChannel, value1, value2){
  ...
    if (messageType == MIDI.CC_MESSAGE && midiChannel == 0x0f) {
        if (value1 == FADER) {
        Track.SetVolume(track, volume);
      }
    }
    else if (messageType == MIDI.NOTE_ON && midiChannel == 0x0f) {
      if (value1 == ARM_BUTTON) {
        bArmed = Track.IsArmed(track);
        Track.Arm(track, !bArmed);
      }
    }
    ...
}
```

## OnSysEx()
The ```OnSysEx(sysExData)``` function is called when a MIDI SysEx message is received at the defined MIDI input of the connected device. The received ```sysExData``` payload is an array of bytes. To access the array, you can use ```sysExData[index]``` where index is the index into the array. 

```sysExData.length``` stores the length of the array.

#### Example

```js
function OnSysEx(sysExData)
{
    
    for (  i = 0; i < sysExData.length; i++)
    {
        Globals.Log(sysExData[i]);
    }

}
```