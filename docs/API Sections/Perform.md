---
sidebar_position: 6
---

# Perform  

The ```Perform``` section covers functions and properties that allow access to the performance panel and controls available in Mixcraft.

## Slot state properties  

- SLOT States
 - SS_EMPTY (0)
 - SS_READY (1)
 - SS_QUEING (2)
 - SS_PLAYING (3)
 - SS_STOPPING (4)
 - SS_ARMED (5)
 - SS_QUEUED_FOR_RECORDING (6)
 - SS_RECORDING (7)  
 

## Performance play properties
- PP_Instant
- PP_8_MEASURES
- PP_4_MEASURES
- PP_2_MEASURES
- PP_2_MEASURE
- PP_1_2_NOTE
- PP_1_4_NOTE
- PP_1_8_NOTE

## Performance Global Queue properties
- PP_Instant
- PP_8_MEASURES
- PP_4_MEASURES
- PP_2_MEASURES
- PP_1_MEASURE
- PP_1_2_NOTE
- PP_1_4_NOTE
- PP_1_8_NOTE
- PP_1_16_NOTE
- PP_1_32_NOTE
- PP_1_64_NOTE
- PP_1_16_NOTE
- PP_1_4_TRIP_NOTE
- PP_1_8_TRIP_NOTE
- PP_1_16_TRIP_NOTE
- PP_1_32_TRIP_NOTE
- PP_1_64_TRIP_NOTE

## Functions  

### ArmRow(row, bool)
This function arms or disarms a specified row for recording based on the boolean value.

- **row** (int): _the row number (starting from 0) to arm or disarm_
- **bool** (bool): _indicates whether to arm (true) or disarm (false) the specified row_

### CanMoveGridDown()
This function returns a boolean indicating if the grid can be shifted downwards.

### CanMoveGridLeft()
This function returns a boolean indicating if the grid can be shifted to the left.

### CanMoveGridRight()
This function returns a boolean indicating if the grid can be shifted to the right.

### CanMoveGridUp()
This function returns a boolean indicating if the grid can be shifted upwards.

### DeleteClip(row, col)
This function deletes the clip in the supplied row and column arguments.
- **row** (int): _the row number (starting from 0) of teh clip to delete_
- **col** (int): _the column number (starting from 0) of teh clip to delete_
### GetGridSetOffset()
This function returns the current set offset of the grid controller.

### GetGridTrackOffset()
This function returns the current track offset of the grid controller.

### GetPan(row)
This function returns the current pan for the specified row (track)

- **row** (int): _the row number (starting from 0) to get the pan location of_

### GetSlotState(row, col)
This function returns the current state of the specified slot (row, col).

- **row** (int): _the row number (starting from 0) of the slot state to return_
- **col** (int): _the column number (starting from 0) of the slot state to return_

### GetTrackID(row)
This function returns the track ID for the specified row.

- **row** (int): _the row number (starting from 0) to return the track ID of_

### GetTrackIndex(row)
This function returns the track index for the specified row.

- **row** (int): _the row number (starting from 0) of the track to get the index for_

### GetVolume(row)
This function returns the current volume for the specified row (track).

- **row** (int): _the row number (starting from 0) to get the volume of_

### IsArmed()
This function returns a boolean indicating if the selected track is armed for recording.

### IsShowing()
This function returns a boolean indicating if the performance panel is open or not.

### IsRowArmed(row)
This function returns a boolean indicating if the specified row is armed for recording.

- **row** (int): _the row number (starting from 0) to check the armed state of_

### MoveGridDown()
This function shifts the grid controller view one row down.

### MoveGridLeft()
This function shifts the grid controller view one column to the left.

### MoveGridRight()
This function shifts the grid controller view one column to the right.

### MoveGridUp()
This function shifts the grid controller view one row up.

### NumColumns()
This function returns the number of columns in the grid controller as an int value.

### NumRows()
This function returns the number of rows in the grid controller as an int value.

- **col** (int): _the column number (starting from 0) to start playback on_

### Playing()
This function starts playback of the currently selected track.

### Record()
This function starts or stops recording for the selected track, depending on the current record state.

### SetGlobalQueueMode(prop)
This function sets the global queue value for performance mode.

- **prop** (int): _the desired global queue property constant_
Refer to [Global Queue Properties section ](##-Performance-Global-Queue-properties) for all available options.

### SetGlobalRecordMode(numBars)
This function sets the global record value for performance mode.
- **numBars** (int): _the number of bars a recorded clip will be. Options are 1,2,4,8,12,16,32 and 64 bars._

### SetGridSetOffset(setIndex)
This function sets the grid controller's offset to the specified set index.

- **index** (int): _the index in which to apply to the controller's grid offset value_

### SetGridTrackOffset(trackIndex)
This function sets the grid controller's track offset to the specified track index.

- **index** (int): _the index in which to apply to the controller's track offset value_

### SetIsButtonController()
This function sets whether the control surface is a button controller (e.g., grid controller) based on a boolean input.

### SetSize(numRows, numCols)
This function sets the size of the grid controller with the specified number of rows (numRows) and columns (numCols).

- **numRows** (int): _the number of rows available on the grid controller_
- **numCols** (int): _the number of columns available on the grid controller_

### Show(bool)
This function will show or hide the performance panel based on the supplied bool value.

- **bool** (bool): _determines whether to open or close the performance panel_

### StopAll()
This function stops playback and recording for all tracks.

### StopRow(rowIndex)
This function stops playback and recording for the specified row.

- **rowIndex** (int): _the row number (starting from 0) to stop playback and recording on_

### StopSlot(row, col)
This function stops playback for the specified slot (row, col).

- **row** (int): _the row number (starting from 0) of the slot to stop_
- **col** (int): _the column number (starting from 0) of the slot to stop_

### TriggerSet(col)
This function starts playback for all tracks in the specified column (set).

### TriggerSlot(row, col, bButtonDown)
This function triggers the specified slot (row, col) to play or stop based on the boolean value bButtonDown.

- **row** (int): _the row number (starting from 0) of the slot to trigger_
- **col** (int): _the column number (starting from 0) of the slot to trigger_
- **bButtonDown** (bool): _indicates whether to play (true) or stop (false) the specified slot_

