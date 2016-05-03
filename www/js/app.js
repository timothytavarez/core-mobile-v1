angular.module('nete', [

// Dependencies for Nete Mobile features and frameworks
  'ionic',
  'firebase',
  'ngSanitize',
  'ngCordova',
  'uiGmapgoogle-maps',

// Modules that comprise Nete Mobile
  'nete.menu',
  'nete.config',
  'nete.home',
  'nete.content',
  'nete.services',
  'nete.locations'

])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
  
})

// This .run provides state change debugging within the browser console. 
.run(['$rootScope', '$log', '$state', function($rootScope, $log, $state) {
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

			$log.debug('Successfully changed states');
			
			$log.debug('event', event);
			$log.debug('toState', toState);
			$log.debug('toParams', toParams);
			$log.debug('fromState', fromState);
			$log.debug('fromParams', fromParams);
		});
		
		$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
			
			$log.error('Requested state was not found: ', unfoundState);
		});
		
		$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
			
			$log.error('An error occurred while changing states: ', error);
			
			$log.debug('event', event);
			$log.debug('toState', toState);
			$log.debug('toParams', toParams);
			$log.debug('fromState', fromState);
			$log.debug('fromParams', fromParams);
		});
		
	}
]);