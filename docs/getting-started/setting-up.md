---
sidebar_position: 1
---

# Setting Up the Script

This section covers the steps required to get started when writing a control surface script for Mixcraft 10.

Before running Mixcraft, create a script with the extension ```.js```, (e.g., ```myscript.js```) in the following location: ```%programdata%\Acoustica\Mixcraft\controllers\scripts\manufacturer```. The manufacturer directory should be the name of your controller's manufacturer (e.g., Novation, Akai, etc.)
 
Add ``` Globals.SetDebug(true);``` on the first line at the top of the script and save it.

Upon opening Mixcraft 10, enter the **Preferences** menu and choose _**Control Surfaces**_.  


![](/img/adding-script.png)  


Click _**Add New**_ from the dropdown menu, and choose the file you created in the previous step.

Choose the appropriate MIDI input and output device. MIDI output is only required if your hardware device receives information from Mixcraft to feedback LED indicators, motorized faders, LCD characters.

Ensure that your selected MIDI device is enabled in the MIDI section of the Mixcraft **Preferences** menu.  