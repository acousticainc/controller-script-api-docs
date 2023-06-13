---
sidebar_position: 7
---

# notificationType

A list of notification types that Mixcraft can send. These properties can be used in the [Notify()](./functions-called-by-mixcraft.md/#notifynotificationtype-data1-data2) function to send feedback to your hardware controller, when applicable.

1. MM.TRACK_ORDER_CHANGED
2. MM.TRACK_VOLUME_CHANGE  (data1=trackIndex, data2 = vol from 0 to 2)
3. MM.TRACK_PAN_CHANGE  (data1=trackIndex, data2 = pan from -1 to 1)
4. MM.TRACK_MUTE_CHANGE ( data1 = trackIndex, data2=mute flag)
5. MM.TRACK_SOLO_CHANGE  ( data1 = trackIndex, data2=solo flag)
6. MM.TRACK_ARM_CHANGE   ( data1 = trackIndex, data2=arm flag)
7. MM.TRACK_SELECTED  ( data1 = trackIndex)
8. MM.TRACK_NAME_CHANGED ( data1 = trackIndex) 
9. MM.SLOT_STATUS_CHANGED (data1 = row, data2 = col)
10. MM.MASTER_STOP_CHANGED 
11. MM.UPDATE_ALL_SLOTS
12. MM.PLAYBACK_STARTED
13. MM.PLAYBACK_STOPPED
14. MM.RECORDING_STARTED
15. MM.RECORDING_STOPPED
16. BANK_OFFSET_CHANGE (data1 = trackindex)
17. LOOP_MODE_CHANGED (data1 = loopFlag)


