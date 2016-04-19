angular.module('nete', ['ionic', 
'nete.controllers',
'nete.home'

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
  $stateProvider

  .state('neteApp', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('neteApp.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('neteApp.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('neteApp.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-root.html',
        // templateUrl: 'templates/playlist.html',
        controller: 'HomeCtrl'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})
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
