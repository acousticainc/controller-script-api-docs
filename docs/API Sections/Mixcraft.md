---
sidebar_position: 4
---

The ```Mixcraft``` section covers functions and constants that allow access to the transport controls in Mixcraft.  

## Seek Constants  

### SEEK_MAX 
 - used in ```Rewind()  ``` or ```FastForward()  ``` for maximum speed  

### SEEK_NORMAL   
 - used in ```Rewind()  ``` or ```FastForward()  ``` for normal speed  

### SEEK_TINY
 - used in ```Rewind()  ``` or ```FastForward()  ``` for slow speed  
   
## Metronome Constants  

### METRONOME_PLAYBACK
- play the metronome only during playback

### METRONOME_RECORDING
- play the metronome only during recording

### METRONOME_RECORDINGCOUNTIN
- play the metronome only for count the defined count-in measures (measures defined via GUI dialog box)
### METRONOME_ALL
- enable all of the above metronome types


## Functions  

### AddMarker(Time)    
This function adds a marker to the project at the specified time.

- **Time** (float): _the time (in milliseconds) to set the marker on the timeline_

### FastForward(SeekAmount)    
This function forwards the playhead by the specified SeekAmount (see seek constants above).

- **SeekAmount** (float): _the amount of time (in seconds) to forward the playhead_

### GetKey()
This function returns the current key of the project, represented by an integer between 0 and 7.

### GetLoopStart()  
This function returns the loop start time.

### GetLoopLength()
This function returns the length of the loop.

### GetMarkerName(index)  
This function returns the name of the marker at the specified index.

- **index** (int): _the index of the marker to get the name of_

### GetPlayPercentage()    
This function returns an integer value between 1 and 100, representing the percentage of the project that has been played, calculated from the current playhead position.

### GetProjectLength()  
This function returns the total length of the project in beats or time.

### GetTempo()
This function returns a float value of the project's tempo in beats per minute.

### GetTime()  
This function returns the current playhead time in the project.

### GetTimeSignatureDenominator()  
This function returns an int value of the project's time signature denominator.

### GetTimeSignatureNumerator()  
This function returns an int value of the project's time signature numerator.

### IsLoopOn()  
This function returns a boolean value indicating whether the loop is enabled.

### IsMetronomeOn(metronomeType)  
This function returns a boolean value indicating whether the specified metronome type is enabled. (see metronome types above).

- **metronomeType** (string): _the type of metronome to check the status of_

### IsPlaying()    
This function returns a boolean value that indicates whether the DAW is currently playing.

### NumMarkers()  
This function returns the number of markers in the project.

### Play()    
This function starts playback from the current playhead position.

### Record()  
This function starts the recording process in Mixcraft.

### Redo()
This function redoes the last action performed in Mixcraft.

### Rewind(SeekAmount)    
This function rewinds the playhead by the specified SeekAmount (see seek constants above).

- **SeekAmount** (float): _the amount of time (in seconds) to rewind the playhead_

### Save()
This function saves the current state of the project.

### SeekToMarker(index)  
This function sets the playhead to the specified marker index.

- **index** (int): _the index of the marker to seek to_

### SetKey(key (0-7)  )  
This function sets the project's key to the specified value, represented by an integer between 0 and 7.

- **key** (int): _an integer representing the key (0-7) to set for the project_

### SetLoopStart(start)  
This function sets the loop start time.

- **start** (float): _a number representing the bar the loop starts on_

### SetLoopLength(length)
This function sets the length of the loop.

- **length** (float): _a number representing the number of bars the loop is set to_


### SetMetronome(metroType, state)
This function that sets the metronome type and toggles the on/off state.

- **metroType** (CONST): one of the available metronome types as listed above in Metronome Constants.

- **state** (bool): the on or off state for the metronome.

### SetTempo(tempo)
This function sets the tempo.

- **tempo** (float): _a number representing the tempo in beats per minute_

### SetTime(time)
This function sets the location of the playhead on the timeline.

- **time** (float): _the location in milliseconds to set the time of the playhead_

### SetTimeSignature(numerator, denominator)
This function sets the location of the playhead on the timeline.

- **numerator** (int): _the numerator value of teh time signature_
- **denominator** (int): _the denominator value of teh time signature_

### ShowLoop(bool)
This function toggles the loop GUI indicators.

- **bool** (bool): _a true or false value that sets the state for the loop region indicator in the GUI_

### TogglePlay()
This function toggles the play state between playing and stopped.

### Undo()
This function reverts to the last undo state in memory.
