backbone-sublime-text-snippets
==============================

Some useful, commented Backbone Component snippets for Sublime Text.

Backbone is a great javascript component library, but it doesn't have a generator app like Spine.js does.  This means that a developer can spend a lot of time typing boilerplate code to get their components set up.

These snippets are meant to enable a developer using Sublime Text to roll their own Backbone.js components quicker, and with intelligent comments.  The goal is to have commented code using snippets be quicker than uncommented code without snippets.

==============================

# Installation

Sublime Text snippets generally live in `/Users/{username}/Library/Application Support/Sublime Text {version}/Packages/User/`

A user can install the package by running the following commands, in this order, switching out the variables in {curly brackets} with their environment-specific values:

``` shell
cd /Users/{user}/Library/Application\ Support/Sublime\ Text\ {version}/Packages/User && git clone git@github.com:createbang/backbone-sublime-text-snippets.git && cp backbone-sublime-text-snippets/snippets/* . && rm -rf backbone-sublime-text-snippets/
```

==============================

## Component Starters

### Backbone Model

tabTrigger: `bbm`  
scope: `source.js`  
content:  
``` javascript
// ==========================================
// Backbone Model: ${1}
// Represents: ${2}
// ==========================================

${3}.Models.${1} = Backbone.Model.extend({



  // ------------------------------------------
  // Property: defaults
  // Description: Default properties for the model
  // ------------------------------------------
  
  defaults: {},



  // ------------------------------------------
  // Method: initialize
  // Arguments: 
  //    options: {}
  // Description:
  // ------------------------------------------
  
  initialize: function(options) {
    ${0}
  },



});
```

### Backbone Collection

tabTrigger: `bbc`  
scope: `source.js`  
content:  
``` javascript
// ==========================================
// Backbone Collection: ${1}
// Represents: ${2}
// Server resource path: ${3}
// ==========================================

${4}.Models.${5} = Backbone.Model.extend({
  


  // ------------------------------------------
  // Property: model
  // Description: The type of model that each item in this collection represents
  // ------------------------------------------
  
  model: '${6}',



  // ------------------------------------------
  // Property: url
  // Description: The path to the server API endpoint
  // ------------------------------------------
  
  url: '${7}',



  // ------------------------------------------
  // Initialize:
  // Arguments: 
  //    options: {}
  // Description:
  // ------------------------------------------
  
  initialize: function(options) {
    ${0}
  },



});
```

### Backbone View

tabTrigger: `bbv`  
scope: `source.js`  
content:  
``` javascript
// ==========================================
// Backbone View: ${1}
// ==========================================

${2}.Views.${1} = Backbone.Model.extend({



  // ------------------------------------------
  // Property: events
  // Description: Bound events to the view's DOM elements
  // ------------------------------------------
  
  events: {},



  // ------------------------------------------
  // Method: initialize
  // Arguments: 
  //    options: {}
  // Description:
  // ------------------------------------------
  
  initialize: function(options) {
    ${0}
  },



  // ------------------------------------------
  // Method: render
  // Arguments: 
  // Description:
  // ------------------------------------------
  
  render: function() {

  },



});
```

## Backbone Component Additions

### Property

tabTrigger: `bbprop`  
scope: `source.js`  
content:  
``` javascript

// ------------------------------------------
// Property: ${1}
// Description: ${2}
// ------------------------------------------

${1}: ${3},

```

### Method

tabTrigger: `bbmeth`  
scope: `source.js`  
content:  
``` javascript

// ------------------------------------------
// Method: ${1}
// Arguments: 
//    ${2}
// Description: ${3}
// ------------------------------------------

${1}: function(${4}) {

},

```