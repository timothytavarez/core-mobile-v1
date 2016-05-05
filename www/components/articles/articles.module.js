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
                    templateUrl: 'components/articles/articles-read.html',
                    controller: 'ArticlesController',
                    controllerAs: 'vm'
                }
            }
        });
        
    }]);
})(angular);