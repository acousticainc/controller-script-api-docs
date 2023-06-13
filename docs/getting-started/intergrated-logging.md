---
sidebar_position: 4
---

# Integrated Log Console

This section covers the integrated logging console found in the Mixcraft script editor.

On the bottom of the script editor, you’ll find a window that prints anything that is sent using the ``` Globals.Log()```function. This can be extra handy for troubleshooting and debugging your scripts.


# Integrated MIDI Monitor

On the right-hand side of the in-application editor, you’ll find a MIDI monitor window that logs any incoming MIDI data when the **Log MIDI** feature is enabled.

The MIDI data in this log column is presented in the following format:

Line | Message Type | MIDI Channel | Data 1 | Data 2
---  | ---          | ---          | ---    | ---        
1	 | B0 (CC)      | CH:00 (1)		   | 0x04 (4) 	| 0x2A (42)  
  
The values are displayed in their hex and decimal values. In the case of the MEssage Type, it will display the hex and common name (e.g., CC, Note, etc.)

![](/img/MIDImonitor.png)