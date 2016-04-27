(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.content', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        
        $stateProvider
        .state('articleRead', {
            url: 'article/:id',
            templateUrl: 'templates/articles-read.html',
            controller: 'ArticlesController',
            controllerAs: 'vm'
        });
        
    }]);
})(angular);