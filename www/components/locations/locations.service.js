(function (angular) { 'use strict';
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.locations')
    .factory('locations', locations);
    
    locations.$inject = ['FBURL', '$firebaseArray', '$firebaseObject'];
    
    function locations(FBURL, $firebaseArray, $firebaseObject) {
        var locationsRef = new Firebase(FBURL + '/locations');
        
        var service = {
            getLocationsList: getLocationsList,
        };
        
        return service;
        
        /////////////
        
        function getLocationsList() {
            
            return $firebaseArray(locationsRef);
            
        }
        
    }
    
})(angular);