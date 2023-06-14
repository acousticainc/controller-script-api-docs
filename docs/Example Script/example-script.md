Here is an example script with comments for reference. If you see functions being used that don't appear in the API, be sure to scroll down after the OnMID() function closes, where many helper functions were created. Some of these are specific to the controller, and some could be reused in other scripts.


```js

//This example script is for the Novation Launch Control XL using the Mixcraft 10 Scripting API

// using the Novation Launch Control XL MIDI implementation guide here: https://customer.novationmusic.com/sites/customer/files/novation/downloads/10598/launch-control-xl-programmers-reference-guide_0.pdf

// establish constants for the Launch Control XL


// an array of FADER1 - FADER8
FADERS = [0x4D, 0x4E, 0x4F, 0x50, 0x51, 0x52, 0x53, 0x54];

// an array of ROW_1_KNOB_1 - ROW_1_KNOB_8
ROW_1_KNOBS = [0x0D, 0x0E, 0x0F, 0x10, 0x11, 0x12, 0x13, 0x14];

// an array of ROW_2_KNOB_1 - ROW_2_KNOB_8
ROW_2_KNOBS = [0x1D, 0x1E, 0x1F, 0x20, 0x21, 0x22, 0x23, 0x24];

// an array of ROW_3_KNOB_1 - ROW_3_KNOB_8
ROW_3_KNOBS = [0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38];

// an array of ALL KNOBS
ALL_KNOBS = [0x0D, 0x0E, 0x0F, 0x10, 0x11, 0x12, 0x13, 0x14, 0x1D, 0x1E, 0x1F, 0x20, 0x21, 0x22, 0x23, 0x24, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38];

// an array of ROW_1_BUTTON_1 - ROW_1_BUTTON_8
ROW_1_BUTTONS = [0x29, 0x2A, 0x2B, 0x2C, 0x39, 0x3A, 0x3B, 0x3C];

// an array of ROW_2_BUTTON_1 - ROW_2_BUTTON_8
ROW_2_BUTTONS = [0x49, 0x4A, 0x4B, 0x4C, 0x59, 0x5A, 0x5B, 0x5C];


SEND_SELECT_BUTTON_UP = 0x68;
SEND_SELECT_BUTTON_DOWN = 0x69;

TRACK_SELECT_BUTTON_LEFT = 0x6A;
TRACK_SELECT_BUTTON_RIGHT = 0x6B;

SELECT_OFFSET = 0x0;

DEVICE_BUTTON = 0x69;
MUTE_BUTTON = 0x6A;
SOLO_BUTTON = 0x6B;
REC_ARM_BUTTON = 0x6C;

// 0 == DEFAULT, 1 == PROCESSING
BUTTON_STATE = 0x0;
PAGE = 0x1;
BOTTOM_BUTTON_STATE = 0x0;
BANK = 0;

LED_OFF = 0x0C;
LED_GREEN = 0x3C;
LED_RED = 0x0F;
LED_YELLOW = 0x3F;

ON - 0x7F;
OFF = 0x0;

MIDI_CHANNEL = 0x8;


Globals.SetDebug(true);

function OnStartup() {

    // aelect the first track on launch
    HandleTrackSelect(0x29);

    // aet the bank size of the grid
    Track.SetBankSize(8);

    // initialize the bank offset
    Track.SetBankOffset(0);

    // set a confirmation message
    Globals.Log("Launch Control XL script started");

    // update the LEDs on the bottom of the controller
    UpdateBottomButtonState(REC_ARM_BUTTON, ON);

    // set the mode for the bottom buttons, which uses this variable
    BOTTOM_BUTTON_STATE = 0x2;
}

function OnShutdown() {

    // shutdown confirmation message
    Globals.Log("Launch Control XL script shutting down");

    // reset LaunchControl XL -- Bnh, 00h, 00h
    MIDI.SendMIDI(0xB0, MIDI_CHANNEL, OFF, OFF);

}

// update controller with any changes made in Mixcraft
function Notify(notificationType, data1, data2) {
    if (notificationType == MM.TRACK_MUTE_CHANGE && BOTTOM_BUTTON_STATE == OFF) {

        UpdateBottomButtonLEDs();
    }
    if (notificationType == MM.TRACK_SOLO_CHANGE && BOTTOM_BUTTON_STATE == 0x1) {

        UpdateBottomButtonLEDs();
    }
    if (notificationType == MM.TRACK_ARM_CHANGE && BOTTOM_BUTTON_STATE == 0x2) {

        UpdateBottomButtonLEDs();
    }

}

// this receives  all incoming MIDI messages. Here we will filter by type using user-created functions found after the OnMIDI() function and then handle the MIDI data accordingly
function OnMIDI(messageType, midiChannel, value1, value2) {

    // handy variables that we want in scope for all OnMIDI blocks  

    // for knobs that have a 0-1.0 range
    volume = value2 / 127;

    // for knobs that are centered at 12 o'clock, like a pan knob
    centered_knob = ((value2 - 64) / 64);

    // the LaunchControlXL factory Preset 1 is set to MIDI channel 9, so all other MIDI is ignored, just to be safe
    if (midiChannel == MIDI_CHANNEL) {
        // ***************************************************************************************
        // FADERS
        // ***************************************************************************************

        // if a fader is moved, set the volume of the track by using the FADER array index of the value1 to supply the track parameter
        if (value1 >= FADERS[0] && value1 <= FADERS[7]) {
            first_channel = SELECT_OFFSET;

            // fill the track variable by determining the index of the FADER array
            track = FADERS.indexOf(value1) + SELECT_OFFSET;
            Track.SetVolume(track, volume);
        }

        // ***************************************************************************************
        // KNOBS
        // ***************************************************************************************

        // if a knob is moved, determine which knob it is and handle accordingly
        if (IsKnob(value1)) {

            // if the BUTTON_STATE is 0 and PAGE = 0x0, then the DEVICE button is not engaged and the knobs act accordingly: row 1 Send A, row 2 Send B, row 3 Pan
            // if the BUTTON_STATE is 0 and PAGE = 0x1 and there are more than two Send tracks, then the DEVICE button is not engaged and the knobs act     accordingly: row 1 Send C, row 2 Send D, row 3 Pan
            // if the BUTTON_STATE is 1 and PAGE = 0x0, then the DEVICE button is engaged and the knobs act accordingly: row 1 EQ High, row 2 EQ Mid, row 3 EQ Low
            if (BUTTON_STATE == 0) {

                // set the pan of the track by using the ROW_3_KNOBS array index of the value1 to supply the track parameter
                if (value1 >= ROW_3_KNOBS[0] && value1 <= ROW_3_KNOBS[7]) {

                    // fill the track variable by determining the index of the ROW_3_KNOBS array
                    knob_index = ROW_3_KNOBS.indexOf(value1);
                    track = knob_index + GetSelectedTrack();
                    Track.SetPan(track, centered_knob);
                }

                // set the value of the Send A of the track by using the ROW_1_KNOBS array index of the value1 to supply the track parameter
                if (value1 >= ROW_1_KNOBS[0] && value1 <= ROW_1_KNOBS[7]) {
                    n = (PAGE - 1) * 2;

                    // fill the track variable by determining the index of the ROW_1_KNOBS array
                    knob_index = ROW_1_KNOBS.indexOf(value1);
                    track = knob_index + GetSelectedTrack();
                    Track.SetSendValue(track, n, volume);
                }

                // set the value of the Send B of the track by using the ROW_2_KNOBS array index of the value1 to supply the track parameter
                if (value1 >= ROW_2_KNOBS[0] && value1 <= ROW_2_KNOBS[7]) {
                    n = ((PAGE - 1) * 2) + 1;

                    // fill the track variable by determining the index of the ROW_2_KNOBS array
                    knob_index = ROW_2_KNOBS.indexOf(value1);
                    track = knob_index + GetSelectedTrack();
                    Track.SetSendValue(track, n, volume);
                }
            }

            if (BUTTON_STATE == 1) {
                track = GetSelectedTrack();
                row = GetKnobRow(value1);
                volume = value2 / 127;
                if (PAGE == 1) {
                    if (row == 0) {
                        Track.SetEQ(track, Track.EQ_HIGH, volume);
                    }
                    else if (row == 1) {
                        Track.SetEQ(track, Track.EQ_MID, volume);
                    }
                    else if (row == 2) {
                        Track.SetEQ(track, Track.EQ_LOW, volume);
                    }
                }
                if (PAGE == 2) {
                    if (row == 0) {
                        Track.SetCompressor(track, volume);
                    }
                    else if (row == 1) {
                        Track.SetDrive(track, volume);
                    }
                    else if (row == 2) {
                    }
                }
            }
        }

        // ***************************************************************************************
        // BUTTONS
        // ***************************************************************************************

        // if the DEVICE_BUTTON, MUTE_BUTTON, SOLO_BUTTON, or REC_ARM_BUTTON is pressed, handle appropriately
        if (messageType == 0x90 && value2 == ON) {

            // update the DEVICE_BUTTON state and LED
            if (value1 == DEVICE_BUTTON) {
                HandleDeviceButton();
            }

            // update the Track Focus button
            if (value1 >= ROW_1_BUTTONS[0] && value1 <= ROW_1_BUTTONS[7]) {
                HandleTrackSelect(value1);
            }

            if (value1 == MUTE_BUTTON | value1 == SOLO_BUTTON | value1 == REC_ARM_BUTTON) {
                UpdateBottomButtonState(value1, value2);

                // If BOTTOM_BUTTON_STATE == 0, then ROW_2_BUTTONS are MUTE, when BOTTOM_BUTTON_STATE == 1, then ROW_2_BUTTONS are SOLO, when BOTTOM_BUTTON_STATE == 2, then ROW_2_BUTTONS are REC_ARM. Update the LEDs accordingly
                if (BOTTOM_BUTTON_STATE == 0) {
                    UpdateBottomButtonLEDs();
                }
                else if (BOTTOM_BUTTON_STATE == 1) {
                    UpdateBottomButtonLEDs();
                }
                else if (BOTTOM_BUTTON_STATE == 2) {
                    UpdateBottomButtonLEDs();
                }
            }

            // if the BOTTOM_BUTTON_STATE == 0, then ROW_2_BUTTONS are MUTE, when BOTTOM_BUTTON_STATE == 1, then ROW_2_BUTTONS are SOLO, when BOTTOM_BUTTON_STATE == 2, then ROW_2_BUTTONS are REC_ARM. Handle the button press accordingly
            if (BOTTOM_BUTTON_STATE == 0) {
                if (value1 >= ROW_2_BUTTONS[0] && value1 <= ROW_2_BUTTONS[7]) {
                    HandleMuteButton(value1, value2);
                }
            }
            else if (BOTTOM_BUTTON_STATE == 1) {
                if (value1 >= ROW_2_BUTTONS[0] && value1 <= ROW_2_BUTTONS[7]) {
                    HandleSoloButton(value1, value2);
                }
            }
            else if (BOTTOM_BUTTON_STATE == 2) {
                if (value1 >= ROW_2_BUTTONS[0] && value1 <= ROW_2_BUTTONS[7]) {
                    HandleRecArmButton(value1, value2);
                }
            }
            UpdateBottomButtonLEDs();
        }

        // Handle the SEND_SELECT_BUTTONS
        if (value1 == SEND_SELECT_BUTTON_DOWN || value1 == SEND_SELECT_BUTTON_UP && value2 == ON && messageType == MIDI.CC_MESSAGE) {
            HandleSendSelect(value1, value2);
        }

        // if the TRACK_SELECT_BUTTON_LEFT is pressed, make sure there is a bank of 8 tracks available to move to, if so, set the tack to 8 tracks to the left, if not, move one track at a time until the first track is selected
        if (value1 == TRACK_SELECT_BUTTON_LEFT || value1 == TRACK_SELECT_BUTTON_RIGHT && value2 == ON && messageType == MIDI.CC_MESSAGE) {
            HandleTrackSelection(value1, value2, messageType);
            HandleTrackSelect(ROW_1_BUTTONS[0]);
            UpdateBottomButtonLEDs();
        }
    }


    /// END OF LINE LOGGING
    UpdateBottomButtonLEDs();
}

// END OF OnMIDI() section
// ***************************************************************************************
// ***************************************************************************************
// ***************************************************************************************


// ***************************************************************************************
// USER HELPER FUNCTIONS
// ***************************************************************************************

// a function that returns the 
function GetSelectedTrack() {
    track = 0;
    numTracks = Track.NumTracks();
    for (i = 0; i < numTracks; i++) {
        if (Track.IsSelected(i)) {
            track = i;
        }
    }
    return track;
}

// a function that gets the index of the the selected track relative to the bank of 8 tracks
function GetSelectedTrackIndex() {
    track = GetSelectedTrack();
    return track % 8;
}


// a function that returns a bool value based on if the control is a knob.  This is used to determine if the control is a knob or a button
function IsKnob(control) {
    if (control >= ROW_1_KNOBS[0] && control <= ROW_3_KNOBS[7] && messageType == MIDI.CC_MESSAGE) {
        return true;
    } else {
        return false;
    }
}

// determines if the MIDI message is from a button
function IsButton(value1) {
    if (value1 >= ROW_1_BUTTONS[0] && value1 <= ROW_3_BUTTONS[7] && messageType == MIDI.NOTE_ON_MESSAGE) {
        return true;
    } else {
        return false;
    }

}

// a function tha determines if value1 is of a fader
function IsFader(value1) {
    if (value1 >= FADERS[0] && value1 <= FADERS[7] && messageType == MIDI.CC_MESSAGE) {
        return true;
    } else {
        return false;
    }
}

// color is value2 (velocity)
function SetLED(messageType, note, color, state) {
    for (i = 0; i < numTracks; i++) {
        if (Track.IsArmed(i)) {

            MIDI.SendMIDI(0x90, 0x8, ROW_2_BUTTONS[i], 0x3C, OFF);
        }
    }
}

// a function that handles the Device button LED and state
function HandleDeviceButton() {
    ClearRow2LEDs();
    BUTTON_STATE++;

    if (BUTTON_STATE == 2) {
        BUTTON_STATE = 0;
    }

    // if the DEVICE_BUTTON is pressed and the button state doesn't equal 0, set the LED to yellow
    if (BUTTON_STATE != 0) {
        MIDI.SendMIDI(0x90, 0x8, DEVICE_BUTTON, 0x3F, 0xF);
    } else {
        MIDI.SendMIDI(0x80, 0x8, DEVICE_BUTTON, 0x3C, 0xF);
    }
}

// a function that determines which row of knobs a knob is from and assigns an index value of 0, 1, or 2
function GetKnobRow(knob) {
    if (knob >= ROW_1_KNOBS[0] && knob <= ROW_1_KNOBS[7]) {
        return 0;
    } else if (knob >= ROW_2_KNOBS[0] && knob <= ROW_2_KNOBS[7]) {
        return 1;
    } else if (knob >= ROW_3_KNOBS[0] && knob <= ROW_3_KNOBS[7]) {
        return 2;
    }
}

// a function that gets the button row using the button value
function GetButtonRow(button) {
    if (button >= ROW_1_BUTTONS[0] && button <= ROW_1_BUTTONS[7]) {
        return 1;
    } else if (button >= ROW_2_BUTTONS[0] && button <= ROW_2_BUTTONS[7]) {
        return 2;
    }
}

// a function that gets the knob index using the knob value and the appropriate knob array
function GetKnobIndex(value1) {
    // determine the row of the knob
    row = GetKnobRow(value1);
    // based on the row, determine the index of the knob in ROW_1_KNOBS or ROW_2_KNOBS using indexof
    if (row == 1) {
        return ROW_1_KNOBS.indexOf(value1);
    } else if (row == 2) {
        return ROW_2_KNOBS.indexOf(value1);
    }
}

function HandleSendSelect(value1, value2) {
    if (value1 == SEND_SELECT_BUTTON_UP && value2 == ON) {
        number_of_sends = Track.NumSendTracks(0);

        if (PAGE < number_of_sends / 2) {
            PAGE++;
        }
    }
    if (value1 == SEND_SELECT_BUTTON_DOWN && value2 == ON) {
        number_of_sends = Track.NumSendTracks(0);

        if (PAGE > 1) {
            PAGE--;

            // set the LED
            //ModeButtonsLEDs(BUTTON_STATE, flag);
        }
    }

}

// a function that handles the selected track state and LEDs
function HandleTrackSelect(value1) {

    // fill the track variable by determining the index of the ROW_1_BUTTONS array
    track = ROW_1_BUTTONS.indexOf(value1);

    // turn off all the ROW_1_BUTTONS
    for (i = 0; i < 8; i++) {
        MIDI.SendMIDI(0x80, 0x8, ROW_1_BUTTONS[i], 0x3C, OFF);
    }

    // turn on the selected ROW_1_BUTTON
    MIDI.SendMIDI(0x90, 0x8, ROW_1_BUTTONS[track], 0x3F, 0x3E);
    Track.Select(track + SELECT_OFFSET);
}

// a function that updates the bottom row of LEDs based on the selected side button (which changes the BOTTOM_BUTTON_STATE)
function UpdateBottomButtonState(value1, value2) {
    // Mute == 0, Solo == 1, Arm == 2
    if (value1 == MUTE_BUTTON && value2 == ON) {
        BOTTOM_BUTTON_STATE = 0;
        MIDI.SendMIDI(0x90, 0x8, MUTE_BUTTON, 0x3F, 0x3E);
        MIDI.SendMIDI(0x80, 0x8, SOLO_BUTTON, 0x3F, 0x3E);
        MIDI.SendMIDI(0x80, 0x8, REC_ARM_BUTTON, 0x3F, 0x3E);
    }
    if (value1 == SOLO_BUTTON && value2 == ON) {
        BOTTOM_BUTTON_STATE = 1;
        MIDI.SendMIDI(0x90, 0x8, SOLO_BUTTON, 0x3F, 0x3E);
        MIDI.SendMIDI(0x80, 0x8, REC_ARM_BUTTON, 0x3F, 0x3E);
        MIDI.SendMIDI(0x80, 0x8, MUTE_BUTTON, 0x3F, 0x3E);
    }
    if (value1 == REC_ARM_BUTTON && value2 == ON) {
        BOTTOM_BUTTON_STATE = 2;
        MIDI.SendMIDI(0x90, 0x8, REC_ARM_BUTTON, 0x3F, 0x3E);
        MIDI.SendMIDI(0x80, 0x8, MUTE_BUTTON, 0x3F, 0x3E);
        MIDI.SendMIDI(0x80, 0x8, SOLO_BUTTON, 0x3F, 0x3E);
    }
    ClearRow2LEDs();
    UpdateBottomButtonLEDs();
}

// a function that is called to update the LEDs of the bottom row of buttons
function UpdateBottomButtonLEDs() {

    for (i = 0; i < 8; i++) {
        track = SELECT_OFFSET + i;
        if (BOTTOM_BUTTON_STATE == 0) {
            if (Track.IsMuted(track)) {
                MIDI.SendMIDI(0x90, 0x8, ROW_2_BUTTONS[i], 0x3E, 0x0C);
            } else {
                MIDI.SendMIDI(0x80, 0x8, ROW_2_BUTTONS[i], 0x3E, 0x0C);
            }
        }

        if (BOTTOM_BUTTON_STATE == 1) {
            if (Track.IsSoloed(track)) {
                MIDI.SendMIDI(0x90, 0x8, ROW_2_BUTTONS[i], 0x3C, 0x3F);
            } else {
                MIDI.SendMIDI(0x80, 0x8, ROW_2_BUTTONS[i], 0x3C, 0x3F);
            }
        }

        if (BOTTOM_BUTTON_STATE == 2) {
            if (Track.IsArmed(track)) {
                MIDI.SendMIDI(0x90, 0x8, ROW_2_BUTTONS[i], 0x0F, 0xF);
            } else {
                MIDI.SendMIDI(0x80, 0x8, ROW_2_BUTTONS[i], 0x0F, 0xF);
            }
        }


    }
}
// a function that sets all of the LEDs on the bottom row of buttons to off
function ClearRow2LEDs() {
    for (i = 0; i < 8; i++) {
        MIDI.SendMIDI(0x80, 0x8, ROW_2_BUTTONS[i], 0x3C, OFF);
    }

}

// A function that updates the state of an LED based on the value of the button, the value of the LED, the color and the flag. If the flag is 0, then the LED is turned off. If the flag is 1, then the LED is turned on.
function UpdateLED(value1, value2, color, flag) {

    if (flag == 0) {
        MIDI.SendMIDI(0x80, 0x8, value1, color, OFF);
    } else if (flag == 1) {
        MIDI.SendMIDI(0x90, 0x8, value1, color, 0x3E);
    }
}


/// a function called HandleMuteButton that handles the mute button
function HandleMuteButton(value1, value2) {
    selected_track = GetSelectedTrack();
    index = ROW_2_BUTTONS.indexOf(value1);
    track = selected_track + index;

    // if the mute button is pressed
    if (value1 >= ROW_2_BUTTONS[0] && value1 <= ROW_2_BUTTONS[7] && value2 == ON) {

        // if the track is muted
        if (Track.IsMuted(track)) {
            // unmute the track
            Track.Mute(track, false);
            MIDI.SendMIDI(0x80, 0x8, ROW_2_BUTTONS[index], 0x3E, 0x0C);
            // if the track is not muted
        } else {
            // mute the track
            Track.Mute(track, true);
            MIDI.SendMIDI(0x90, 0x8, ROW_2_BUTTONS[index], 0x3E, 0x0C);
            // turn on the LED
        }
    }
}

/// a function that handles the solo button
function HandleSoloButton(value1, value2) {
    selected_track = GetSelectedTrack();
    index = ROW_2_BUTTONS.indexOf(value1);
    track = selected_track + index;

    // if the solo button is pressed
    if (value1 >= ROW_2_BUTTONS[0] && value1 <= ROW_2_BUTTONS[7] && value2 == ON) {

        // if the track is soloed
        if (Track.IsSoloed(track)) {
            // unsolo the track
            Track.Solo(track, false);
            MIDI.SendMIDI(0x80, 0x8, ROW_2_BUTTONS[index], 0x3C, 0x3F);
            // if the track is not soloed
        } else {
            // solo the track
            Track.Solo(track, true);
            MIDI.SendMIDI(0x90, 0x8, ROW_2_BUTTONS[index], 0x3C, 0x3F);
            // turn on the LED
        }
    }
}

// a function called HandleRecArmButton that handles the rec arm button
function HandleRecArmButton(value1, value2) {
    ClearRow2LEDs();
    selected_track = GetSelectedTrack();
    index = ROW_2_BUTTONS.indexOf(value1);
    track = selected_track + index;

    // if the rec arm button is pressed
    if (value1 >= ROW_2_BUTTONS[0] && value1 <= ROW_2_BUTTONS[7] && value2 == ON) {

        // if the track is armed
        if (Track.IsArmed(track)) {
            // disarm the track
            Track.Arm(track, false);
            MIDI.SendMIDI(0x80, 0x8, ROW_2_BUTTONS[index], 0x0F, 0xF);
            // if the track is not armed
        } else {
            // arm the track
            Track.Arm(track, true);
            MIDI.SendMIDI(0x90, 0x8, ROW_2_BUTTONS[index], 0x0F, 0xF);
            // turn on the LED
        }
    }
}

function HandleTrackSelection(value1, value2, messageType) {
    // depending on the value of BUTTON_STATE, the track selection will be handled differently - when 0, it will shift tracks by 1, when 1, it will shift tracks by 8.

    if (BUTTON_STATE == 0) {
        if (value2 == ON) {
            if (value1 == TRACK_SELECT_BUTTON_LEFT) {
                // if the track is not the first track, then select the previous track
                if (SELECT_OFFSET > 0) {
                    SELECT_OFFSET--;
                    Globals.Log(SELECT_OFFSET + " farts");
                }
                else {
                    SELECT_OFFSET = 0;
                }
            } else if (value1 == TRACK_SELECT_BUTTON_RIGHT) {
                // if the track is not the last track, then select the next track
                if (SELECT_OFFSET != Track.NumTracks() - 1) {
                    SELECT_OFFSET++;
                    Globals.Log(SELECT_OFFSET + " smiles");
                }
            }
        }
    }
    if (BUTTON_STATE == 1) {
        if (value2 == ON) {
            if (value1 == TRACK_SELECT_BUTTON_LEFT) {
                if (SELECT_OFFSET > 8) {
                    SELECT_OFFSET -= 8;
                }
                else {
                    SELECT_OFFSET = 0;
                }
            } else if (value1 == TRACK_SELECT_BUTTON_RIGHT) {
                if (SELECT_OFFSET < Track.NumTracks() - 8) {
                    SELECT_OFFSET += 8;
                }
                else {
                    SELECT_OFFSET = Track.NumTracks() - 8;
                }
            }
        }
    }
    Track.Select(SELECT_OFFSET);
}

```  