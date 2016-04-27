(function (angular) {
    "use strict";
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.home')
    .controller('HomeController', HomeController)
    
    HomeController.$inject = ['FBURL', '$scope', '$firebaseArray', 'articles']
    
    function HomeController(FBURL, $scope, $firebaseArray, articles) {
        
        var vm = this;
        
        vm.listArticles = listArticles();
        
        function listArticles() {
            
            vm.articlesList = articles.getArticlesList();
            
        }
        
    }
    
}) (angular);