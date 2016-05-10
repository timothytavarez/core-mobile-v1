(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.content')
    .controller('ArticlesController', ArticlesController);
    
    ArticlesController.$inject = ['articles', '$firebaseObject'];
    
    function ArticlesController(articles, $firebaseObject) {
        
        var vm = this;
        
        vm.listArticles = listArticles;
        vm.getArticle = getArticle();
        
        function listArticles() {
            
            vm.articlesList = articles.getArticlesList();
            
        }
        
        function getArticle() {
            
            vm.article = articles.getArticle();
            
        }
        
    }
})(angular);