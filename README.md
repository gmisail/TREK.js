# TREK.js

TREK.js is a library for customizing Apple web apps. TREK.js customizes your application's HTML file in order to provide a more native experience.
It is meant to be used with Safari's "Add To Home Screen" feature.

# Reference

### Installation

Drag the mobile.js file into your project and link it like any other Javascript file. 

```
<script src="path/to/mobile.js"></script>
```

Note: Link this before you call any of its functions, just like most JS libraries.

### Documentation

*All functions are in the TREK namespace!* For example, ```TREK.setTitle("Hello!");```

*setTitle*(**String**);
- Sets the title of the application (This can be changed by the user, however this used as the default value)

*setVisible*(**Boolean**);
- Removes the normal browser elements, like the search bar, tool bar, etc.

*setStatusColor*(**Color**);
- Sets the color of the status bar.
- Must be:
  - "black"
  - "black-translucent"
  - "default"
  
*addIcon*(**String**);
- Sets the icon to the specified path

*isRequired*();
 - Returns **true** if the system supports Safari.
 - Put most of the TREK calls within an if statement like this:
    - ```if(TREK.isRequired()){
          // TREK calls
      }```
    - This will make sure to not manipulate HTML if it is not necessary.
    
*setWidth*(**Int**);
- Sets the width of the viewport.

*setHeight*(**Int**);
- Sets the height of the viewport.

*setScale*(**Int**);
- Sets the scale of the viewport.

*setScalable*(**Boolean**);
- Sets if the screen can be stretched/scaled





