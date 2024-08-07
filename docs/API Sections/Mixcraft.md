---
sidebar_position: 4
---

The ```Mixcraft``` section covers functions and properties that allow access to the transport controls in Mixcraft.  

## Seek properties  

### SEEK_MAX 
 - used in ```Rewind()  ``` or ```FastForward()  ``` for maximum speed  

### SEEK_NORMAL   
 - used in ```Rewind()  ``` or ```FastForward()  ``` for normal speed  

### SEEK_TINY
 - used in ```Rewind()  ``` or ```FastForward()  ``` for slow speed  
   
## Metronome properties  

### METRONOME_PLAYBACK
- play the metronome only during playback

### METRONOME_RECORDING
- play the metronome only during recording

### METRONOME_RECORDINGCOUNTIN
- play the metronome only for count the defined count-in measures (measures defined via GUI dialog box)
### METRONOME_ALL
- enable all of the above metronome types

## Snap Type constants

1. Mixcraft.SS_Project (default)
2. Mixcraft.SS_Off // no snap
3. Mixcraft.SS_Grid
4. Mixcraft.SS_GridTriplets
5. Mixcraft.SS_8_Measures
6. Mixcraft.SS_4_Measures
7. Mixcraft.SS_2_Measures
8. Mixcraft.SS_1_1_Note
9. Mixcraft.SS_1_2_Note
10. Mixcraft.SS_1_4_Note
11. Mixcraft.SS_1_8_Note
12. Mixcraft.SS_1_16_Note
13. Mixcraft.SS_1_32_Note
14. Mixcraft.SS_1_64_Note
15. Mixcraft.SS_1_4_Trip_Note
16. Mixcraft.SS_1_8_Trip_Note
17. Mixcraft.SS_1_16_Trip_Note
18. Mixcraft.SS_1_32_Trip_Note
19. Mixcraft.SS_1_64_Trip_Note

## Functions  

### AddMarker(time)    
This function adds a marker to the project at the specified time.

- **time** (int): _the time (in milliseconds) to set the marker on the timeline_

### ConvertMeasureToTime(measures)
This function takes a a float that represents a measure and beat value and returns a ms time value. See the inverse function below.

- **measures** (float): _the location of measures and beats to convert to time in ms_

### ConvertTimeToMeasure(time)
This function takes a time in ms and returns a float that represents a measure value. For example, a returned value of 4.25 would represent measure 4, beat 2.5.

- **time** (int): _the time (in milliseconds) to convert into measures and beats_

### FastForward(seekAmount)    
This function forwards the playhead by the specified SeekAmount (see [seek properties](#seek-properties) above).

- **seekAmount** (float): _the amount of time (in seconds) to forward the playhead_

### GetKey()
This function returns the current key of the project, represented by an integer between 0 and 7.

### GetLoopStart()  
This function returns the loop start time in ms.

### GetLoopEnd()
This function returns the loop end time in ms.

### GetLoopLength()
This function returns the length of the loop in ms.

### GetMarkerName(index)  
This function returns the name of the marker at the specified index.

- **index** (int): _the index of the marker to get the name of_

### GetPlayPercentage()    
This function returns an integer value between 1 and 100, representing the percentage of the project that has been played, calculated from the current playhead position.

### GetProjectLength()  
This function returns the total length of the project in beats or time.

### GetSnappedTime(time)
This function returns the closest snap point on the grid to the supplied time (in milliseconds). A second argument of snap type can be supplied. This can be useful for taking user input from button presses to set loop points using SetLoopEndTime() and SetLoopStart().
_If snapped time isn't specified it uses the default snap value in the project. Otherwise it's one of the constants listed in [the list of snap type constants above](./Mixcraft.md/#snap-type-constants).

### GetTempo()
This function returns a float value of the project's tempo in beats per minute.

### GetTime()  
This function returns the current playhead time in the project.

### GetTimeSignatureDenominator()  
This function returns an int value of the project's time signature denominator.

### GetTimeSignatureNumerator()  
This function returns an int value of the project's time signature numerator.

### HidePage(pageType)
This function hides the pageType supplied as an argument. The inverse is [ShowPage()](./Mixcraft.md/#showpagepagetype)

- **pageType** (const): _the pageType options are Mixcraft.Sound, Mixcraft.Mixer, Mixcraft.Project, Mixcraft.Library, or Mixcraft.Store_

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

### Rewind(seekAmount)    
This function rewinds the playhead by the specified SeekAmount (see [seek properties](#seek-properties) above).

- **seekAmount** (float): _the amount of time (in seconds) to rewind the playhead_

### Save()
This function saves the current state of the project.

### SeekToMarker(index)  
This function sets the playhead to the specified marker index.

- **index** (int): _the index of the marker to seek to_

### SetKey(key (0-7)  )  
This function sets the project's key to the specified value, represented by an integer between 0 and 7.

- **key** (int): _an integer representing the key (0-7) to set for the project_

### SetLoopEnd(time)  
This function sets the loop end time.

- **start** (float): _a number representing the position on the timeline in ms_

### SetLoopStart(time)  
This function sets the loop start time.

- **start** (float): _a number representing the position on the timeline in ms_

### SetLoopLength(time)
This function sets the length of the loop.

- **length** (float): _a number representing the number ms the loop will cover_


### SetMetronome(metroType, state)
This function that sets the metronome type and toggles the on/off state.

- **metroType** (CONST): one of the available metronome types as listed above in [metronome properties](#metronome-properties) above.

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

### ShowPage(pageType)
This function shows the pageType supplied as an argument. The inverse is [HidePage()](./Mixcraft.md/#hidepagepagetype)

- **pageType** (const): _the pageType options are Mixcraft.Sound, Mixcraft.Mixer, Mixcraft.Project, Mixcraft.Library, or Mixcraft.Store_

- **bool** (bool): _a true or false value that sets the state for the loop region indicator in the GUI_

### TogglePlay()
This function toggles the play state between playing and stopped.

### Undo()
This function reverts to the last undo state in memory.

### ZoomHorizontal(val)
This function controls the horizontal zoom value in Mixcraft.
- **val** (double): _the horizontal zoom value between 0 to 1.0._

### ZoomVertical(val)
This function controls the vertical zoom value in Mixcraft.
- **val** (double): _the vertical zoom value between 0 to 1.0._
