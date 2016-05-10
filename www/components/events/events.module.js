(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.events', ['ui.router', 'ui.rCalendar'])
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
        })
        .state('neteApp.readEvent', {
            url: '/events/:eventID',
            views: {
                'menuContent': {
                    templateUrl: 'components/events/events-read.html',
                    controller: 'EventsController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
})(angular);