---
sidebar_position: 6
---

# Perform  

The ```Perform``` section covers functions and constants that allow access to the performance panel and controls available in Mixcraft.

## Constants  

- SLOT States
 - SS_EMPTY (0)
 - SS_READY (1)
 - SS_QUEING (2)
 - SS_PLAYING (3)
 - SS_STOPPING (4)
 - SS_ARMED (5)
 - SS_QUEUED_FOR_RECORDING (6)
 - SS_RECORDING (7)  

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
This function returns the number of columns in the grid controller.

### NumRows()
This function returns the number of rows in the grid controller.

### PlaySet(col)
This function starts playback for all tracks in the specified column (set).

- **col** (int): _the column number (starting from 0) to start playback on_

### Playing()
This function starts playback of the selected track.

### Record()
This function starts or stops recording for the selected track, depending on its current state.

### SetGridSetOffset(setIndex)
This function sets the grid controller's set offset to the specified set index.

### SetGridTrackOffset(trackIndex)
This function sets the grid controller's track offset to the specified track index.

### SetIsButtonController()
This function sets whether the control surface is a button controller (e.g., grid controller) based on a boolean input.

### SetSize(numCols, numRows)
This function sets the size of the grid controller with the specified number of columns (numCols) and rows (numRows).

### StopAll()
This function stops playback and recording for all tracks.

### StopRow(rowIndex)
This function stops playback and recording for the specified row.

- **rowIndex** (int): _the row number (starting from 0) to stop playback and recording on_

### StopSlot(row, col)
This function stops playback for the specified slot (row, col).

- **row** (int): _the row number (starting from 0) of the slot to stop_
- **col** (int): _the column number (starting from 0) of the slot to stop_

### TriggerSlot(row, col, bButtonDown)
This function triggers the specified slot (row, col) to play or stop based on the boolean value bButtonDown.

- **row** (int): _the row number (starting from 0) of the slot to trigger_
- **col** (int): _the column number (starting from 0) of the slot to trigger_
- **bButtonDown** (bool): _indicates whether to play (true) or stop (false) the specified slot_

