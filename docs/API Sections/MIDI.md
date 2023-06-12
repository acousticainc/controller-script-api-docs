---
sidebar_position: 5
---
# MIDI

In the ```OnMIDI(messageType, midiChannel, value1, value2)``` function, you'll find the ```messageType```, ```midiChannel```, ```value1```, and ```value2``` parameters. More details about each one of those is documented below.


### messageType  
The following list holds the constants available for MIDI message types:

- MIDI.NOTE_ON
- MIDI.NOTE_OFF
- MIDI.POLY_PRESSURE
- MIDI.CC_MESSAGE
- MIDI.PROGRAM_CHANGE
- MIDI.CHANNEL_PRESSURE
- MIDI.PITCH_BEND  
  
    
### midiChannel  

A hexadecimal value from 0x0 to 0xF (0 to 15) representing MIDI channels 1 to 16.  
  
### value1 and value2  

A hexadecimal value for the second and third byte of a MIDI message. Depending on the messageType, this can change.  

- MIDI.NOTE_ON
    - value1 = note number
    - value2 = velocity value  

- MIDI.NOTE_OFF
    - value1 = note number
    - value2 = velocity value  

- MIDI.POLY_PRESSURE
    - value1 = note number
    - value2 = pressure value  

- MIDI.CC_MESSAGE
    - value1 = cc number
    - value2 = pressure value

- MIDI.PROGRAM_CHANGE
    - value1 = instrument number
    - value2 = null  

- MIDI.CHANNEL_PRESSURE
    - value1 = pressure value
    - value2 = null  

- MIDI.NOTE_ON
    - value1 = pitch bend value
    - value2 = null  
  
    
### Constants  
  
- MIDI.NOTE_OFF (128)
- MIDI.NOTE_ON (144)
- MIDI.POLY_PRESSURE (160)
- MIDI.CC_MESSAGE (167)
- MIDI.PROGRAM_CHANGE (192)
- MIDI.CHANNEL_PRESSURE (208)
- MIDI.PITCH_BEND (224)
- SYS_EX  (240)
  

## Functions  
  
### SendMIDI(type, chan, data1, data2)

The SendMIDI function sends MIDI messages to the hardware controller. This function allows the user to specify the type of MIDI message to be sent, the channel on which the message will be sent, and any associated data values.

- **type** (type): _specifies the type of MIDI message to be sent to the device. The type parameter corresponds with an  integer value, but we recommend using the constants above, for readability_

- **chan** (int): _specifies the MIDI channel on which the message will be sent, with values ranging from 1 to 16_

- **data1** (int): _specifies the first data value associated with the MIDI message, with values ranging from 0 to 127_

- **data2** (int): _ specifies the second data value associated with the MIDI message, with values ranging from 0 to 127_This parameter is only required for certain types of MIDI messages (i.e., Note On, Note Off, Control Change, and Pitch Bend).

### SendMIDIArray(arrayOfBytes)


### SendSysEx(arrayOfBytes)

 The system exclusive start (xF0) and end byte (xF7) are not needed and the system will handle it appropriately.




