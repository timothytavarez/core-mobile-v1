## Style guide

The Nete Mobile project uses John Papa's Angular Styleguide, widely considered
to be the standard in Angular code best practices.

The style guide is available at: 
(https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

## Directory Structure

├── bower.json     // bower dependencies
├── config.xml     // cordova configuration
├── gulpfile.js    // gulp tasks
├── hooks          // custom cordova hooks to execute on specific commands
├── ionic.project  // ionic configuration
├── package.json   // node dependencies
├── platforms      // iOS/Android specific builds will reside here
├── plugins        // where your cordova/ionic plugins will be installed
├── scss           // scss code, which will output to www/css/
└── www            // application - JS code and libs, CSS, images, etc.