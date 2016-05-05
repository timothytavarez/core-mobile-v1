(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.content')
    .controller('ArticlesController', ArticlesController);
    
    ArticlesController.$inject = ['articles', '$scope', '$firebaseObject'];
    
    function ArticlesController(articles, $scope, $firebaseObject) {
        
        var vm = this;
        
        vm.listArticles = listArticles;
        vm.getArticle = getArticle();
        
        function listArticles() {
            
            vm.articlesList = articles.getArticlesList();
            
        }
        
        function getArticle() {
            
            vm.article = articles.getArticle();
            console.log(vm.article);
        }
        
    }
})(angular);