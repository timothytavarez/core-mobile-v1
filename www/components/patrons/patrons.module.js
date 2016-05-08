(function (angular) { 'use strict';
    
    /* global angular */
    
    angular
    .module('nete.patrons', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .state('profileRoot', {
            url: '/profile/:patronID',
            views: {
                'menuContent': {
                    templateUrl: 'components/patrons/patron-profile-root.html',
                    controller: 'PatronsController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
    
})(angular);