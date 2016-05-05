(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.events')
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .state('neteApp.eventsRoot', {
            url: '/events',
            views: {
                'menuContent': {
                    templateUrl: 'components/events/events-root.html',
                    controller: 'EventsController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
})(angular);