'use strict';

// Declare app level module which depends on filters, and services
angular.module('nete.config', [])

  // version of this seed app is compatible with angularFire 1.0.0
  // see tags for other versions: https://github.com/firebase/angularFire-seed/tags
  .constant('version', '1.0.0')

  // where to redirect users if they need to authenticate (see security.js)
  .constant('loginRedirectPath', 'login')

  // The FBURL constant is used throughout the application for DRY purposes.
  // We will have to use the FBURL a LOT for referencing our Firebase.
  .constant('FBURL', 'https://nete-services.firebaseio.com/');