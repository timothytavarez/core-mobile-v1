(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.community')
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .state('neteApp.communityRoot', {
            url: 'community/'
        });
        
    }]);
})(angular);