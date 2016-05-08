(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.communities', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .state('neteApp.communitiesRoot', {
            url: 'communities/'
        });
        
    }]);
})(angular);