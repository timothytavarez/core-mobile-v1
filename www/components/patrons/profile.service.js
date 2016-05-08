(function (angular) { 'use strict';
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.patrons')
    .factory('profile', profile);
    
    profile.$inject = ['FBURL', 'auth', '$firebaseObject'];
    
    function profile (FBURL, auth, $firebaseObject) {
        
        var patronsRef = new Firebase(FBURL + 'patrons/');
        
        var service = {
            getProfile: getProfile
        };
        
        return service;
        
        ///////////////
        
        function getProfile() {
            
            // $getAuth is synchronous, so we don't have to use a promise.
            var authData = auth.$getAuth();
            var profileRef = new Firebase(FBURL + 'patrons/' + authData.uid);
            
            console.log($firebaseObject(profileRef));
            return $firebaseObject(profileRef);
        }
        
    }
    
})(angular);