(function (angular) { 'use strict';
    
    /* global angular */
    /* global Firebase */
    
    angular
    .module('firebase.auth', ['firebase'])
    .factory('auth', auth);
    
    auth.$inject = ['FBURL', '$firebaseAuth'];
    
    function auth (FBURL, $firebaseAuth) {
        
        var patronsRef = new Firebase(FBURL + 'patrons');
        return $firebaseAuth(patronsRef);

    }
    
})(angular);