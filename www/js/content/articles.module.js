(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.content', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {
        
        $stateProvider
        .state('neteApp.readArticle', {
            url: '/articles/:articleID',
            views: {
                'menuContent': {
                    templateUrl: 'templates/articles-read.html',
                    controller: 'ArticlesController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
})(angular);