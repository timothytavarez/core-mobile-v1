(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.menu', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        
        $stateProvider
        .state('neteApp', {
            url: '/app',
            abstract: true,
            templateUrl: 'components/menu/menu-root.html',
            controller: 'LoginController'
        });
        
    }]);
})(angular);