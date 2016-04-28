(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.locations')
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .$state('neteApp.locationsRoot', {
            url: 'locations/',
            views: {
                'menuContent': {
                    templatUrl: 'templates/locations-root.html',
                    controller: 'LocationsController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
})(angular);