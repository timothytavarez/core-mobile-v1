(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.content')
    .controller('ArticlesController', ArticlesController);
    
    ArticlesController.$inject = ['articles'];
    
    function ArticlesController(articles) {
        
        var vm = this;
        
        vm.listArticles = listArticles();
        
        function listArticles() {
            
            vm.articlesList = articles.getArticlesList();
            
        }
    }
})(angular);