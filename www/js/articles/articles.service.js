(function (angular) { 'use strict';
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.home')
    .factory('articles', articles);
    
    articles.$inject = ['FBURL', '$firebaseArray', '$firebaseObject',
    '$stateParams'];
    
    function articles(FBURL, $firebaseArray, $firebaseObject, $stateParams) {
        
        var articlesRef = new Firebase(FBURL + 'content/articles');
        
        var service = {
            getArticlesList: getArticlesList,
            getArticle: getArticle
        };
        
        return service;
        
        //////////////
        
        function getArticlesList() {
            
            return $firebaseArray(articlesRef);
            
        }
        
        function getArticle() {
            
            var articleRef = new Firebase(FBURL + 'content/articles/' + $stateParams.articleID);
            
            return $firebaseObject(articleRef);
            
        }
    }
    
})(angular);