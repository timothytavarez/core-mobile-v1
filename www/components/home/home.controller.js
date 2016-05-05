(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.home')
    .controller('HomeController', HomeController);
    
    HomeController.$inject = ['FBURL', '$scope', '$firebaseArray', 'articles', 
    '$state', '$stateParams', '$rootScope'];
    
    function HomeController(FBURL, $scope, $firebaseArray, articles, $state,
    $stateParams, $rootScope) {
        
        var vm = this;
        
        vm.listArticles = listArticles();
        
        function listArticles() {
            
            vm.articlesList = articles.getArticlesList();
            console.log(vm.articlesList);
            
        }
        
    }
    
}) (angular);