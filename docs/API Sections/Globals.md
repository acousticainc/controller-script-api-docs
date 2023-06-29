---
sidebar_position: 2

---

In this section we will review the Global functions available in the Mixcraft controller scripting API.

## Log(args)

- The ```Log()``` function prints strings to the in-application log window. This is useful for debugging and confirming values.

#### Parameters

- **args** (variable or string) - _The Log() function can print the stored value of an existing variable as well as strings,  which can be concatenated to create helpful log entries_.

#### Example
```js
Globals.Log("MIDI channel" + midiChannel + " and MIDI CC number is " + value1);
```  


## SetDebug(bool)  

- The ```SetDebug()``` function enables the in-application script editor, MIDI monitor and console, which are launched after the script is [selected in the Mixcraft Preferences menu](/docs/getting-started/setting-up.md). Generally, it's best to always have this set to true and comment out the line when you are done using debug mode.

#### Parameters

- **True** *(bool)* - _The debug enable state_

#### Example
```js
Globals.SetDebug(true); 
```  
  
## StartTimer(timerID, time)

The ```StartTimer()``` function starts the defined ```timerID```, which will run for the supplied argument of ```time``` in milliseconds.

### Paramteters

- **timerID** *(int)* - _The timer to start_
- **time** *(int)* - _The duration of time to run the timer in milliseconds_

#### Example

```js
Globals.StartTimer(FLASH_TIMER, 250);
```  



## StopTimer(timerID)  

- The ```StopTimer()``` function stops the defined ```timerID```.

#### Parameters

- **timerID** *(int)* - _The timer to stop_

#### Example

```js
Globals.StopTimer(ANIMATION_TIMER);
```  
  
## IsTimerRunning(timerID)

The ```IsTimerRunning()``` function returns a bool based on wether the timer ID supplied as an argument is running or not.

### Paramteters

- **timerID** *(int)* - _The timer to start_

#### Example

```js
ANIM_TIMER = 0x01;
Globals.IsTimerRunning(ANIM_TIMER);
```  

## ToHexString(number, padding)  

- The ```ToHexString()``` function was added as there isn’t a function for this in javascript. The ```padding``` argument is the minimum number of digits. As the name implies, it will accept an integer and convert it to a hexadecimal string. 

#### Parameters

- **number** *(int)* - _The integer value to convert ot a hexadecimal string_
- **padding** *(int)* - _The minimum number of digits_

#### Example

```js
// This will convert the decimal value of 100 to a string of the 
// hex value, 64
Globals.ToHexString(100, 2)

```