---
sidebar_position: 2
---

# Script Editor

This section covers the Mixcraft Script editor, which allows you to write and test your control surface scripts directly in Mixcraft.

After exiting the Preference dialogue, you will see a scripting editor appear. This appears because you added```Globals.SetDebug(true);``` in your script. Once you have completed writing your script, you will remove or comment out this line to stop the in-application editor from launching when the script is selected in the Control Surfaces menu.  

### Reload  

The **Reload** button will reload your script in its last saved state, which is useful if you want to initialize and run any procedures you have in OnStartup(). If you have made changes but not saved them, clicking the **Reload** button will warn you that it's going to discard the current script and reload the saved script file from disk.

### Compile  

The **Compile** button will recompile your script without saving any recent changes to file. This is useful if you want to test changes, but not commit them to the file right away. If there are any detectable errors in your script, the console window will report them upon clicking the **Compile** button.  
  
### Log  
  
Enabling the **_Log_** feature by clicking the selection box to its left will print messages to the console window at the bottom of the script editor. This feature is enabled by default.

### Font Size

This feature allows you to customize the font size of the script editor. The font size of the console output and the MIDI log are not customizable and are therefore not affected by this control.

The script editor has a console window at the bottom, which will print any messages that are sent via ```Globals.Log()```, if the Log option is enabled by clicking the check box to the right of the **Compile** button.  
  
### Log MIDI  
  
When selected, **_Log MIDI_** will enable the output of the MIDI monitor, found on the right-hand side of the script editor window. This log reports all MIDI data being sent and received at the defined MIDI device, which is displayed in the top center of the window.  
  
### Clear Logs  
  
When the **Clear Logs** button is clicked, all MIDI logs and console logs will be cleared.

![](/img/setDebug.png)  
