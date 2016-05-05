(function (angular) { 'use strict';
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.locations')
    .factory('locations', locations);
    
    locations.$inject['FBURL', '$firebaseArray', '$firebaseObject', '$stateParams'];
    
    function locations(FBURL, $firebaseArray, $firebaseObject, $stateParams) {
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