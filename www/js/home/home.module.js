(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.home', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .state('neteApp.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home-root.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
})(angular);