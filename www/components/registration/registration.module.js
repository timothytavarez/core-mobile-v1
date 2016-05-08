(function (angular) { 'use strict';
    
    /* global angular */
    
    angular
    .module('nete.registration', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .state('neteApp.registrationRoot', {
            url: '/register',
            views: {
                'menuContent': {
                    templateUrl: 'components/registration/registration-root.html',
                    controller: 'RegistrationController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
})(angular);