(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.locations', ['ui.router', 'uiGmapgoogle-maps'])
    .config(['$stateProvider', 'uiGmapGoogleMapApiProvider',
    function ($stateProvider, uiGmapGoogleMapApiProvider) {
        
        $stateProvider
        .state('neteApp.locationsRoot', {
            url: '/locations',
            views: {
                'menuContent': {
                    templateUrl: 'components/locations/locations-root.html',
                    controller: 'LocationsController',
                    controllerAs: 'vm'
                }
            }
        });
        
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyByo8485fgPq0CC4ksKCoF3xYCLDve45wc',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
        
    }]);
})(angular);