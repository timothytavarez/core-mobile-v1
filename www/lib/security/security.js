(function (angular) {
  "use strict";

  // when $routeProvider.whenAuthenticated() is called, the path is stored in this list
  // to be used by authRequired() in the services below
  var securedRoutes = [];

  angular.module('nete.security', ['firebase.auth', 'nete.config'])

    .config(['$stateProvider', function($stateProvider) {
      // routes which are not in our map are redirected to /home
      //$routeProvider.otherwise({redirectTo: '/login'});
    }])

    .config(['$stateProvider', function($stateProvider) {
      $stateProvider.whenAuthenticatedState = function(path, route) {
        securedRoutes.push(path); // store all secured routes for use with authRequired() below
        route.resolve = route.resolve || {};
        route.resolve.user = ['auth', function(auth) {
          return auth.$requireAuth();
        },
        ];

        $stateProvider.state(path, route);
        return this;
      };
    },])

  /**
   * Apply some route security. Any route's resolve method can reject the promise with
   * { authRequired: true } to force a redirect. This method enforces that and also watches
   * for changes in auth status which might require us to navigate away from a path
   * that we can no longer view.
   */
    .run(['$rootScope', '$state', 'auth', 'loginRedirectPath',
      function($rootScope, $state, auth, loginRedirectPath) {
        // watch for login status changes and redirect if appropriate
        auth.$onAuth(check);

        // some of our routes may reject resolve promises with the special {authRequired: true} error
        // this redirects to the login page whenever that is encountered
        $rootScope.$on('$routeChangeError', function(e, next, prev, err) {
          if (err === 'AUTH_REQUIRED') {
            $state.go(loginRedirectPath);
          }
        });
        
        $rootScope.$on('$stateChangeError', function(e, next, prev, err) {
          if (err === 'AUTH_REQUIRED') {
            $state.go(loginRedirectPath);
          }
        });

        function check(user) {
          if (!user && authRequired($state.$current.name)) {
            console.log('check failed', user, $state.$current.name); //debug
            $state.go(loginRedirectPath);
          }
        }

        function authRequired(path) {
          console.log('authRequired?', path, securedRoutes.indexOf(path)); //debug
          return securedRoutes.indexOf(path) !== -1;
        }
      }
    ]);

})(angular);
