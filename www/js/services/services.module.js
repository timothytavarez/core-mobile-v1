(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.services', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
        .state('neteApp.servicesRoot', {
            url: '/services',
            views: {
                'menuContent': {
                    templateUrl: 'templates/services-root.html',
                    controller: 'ServicesController',
                    controllerAs: 'vm'
                }
            }
        });
    }]);
})(angular);