(function (angular) {
    "use strict";
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.home')
    .factory('articles', articles);
    
    articles.$inject = ['FBURL', '$firebaseArray'];
    
    function articles(FBURL, $firebaseArray) {
        
        var articlesRef = new Firebase(FBURL + 'content/articles');
        
        var service = {
            getArticlesList: getArticlesList
        };
        
        return service;
        
        //////////////
        
        function getArticlesList() {
            return $firebaseArray(articlesRef);
        }
    }
    
}) (angular);