(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.locations')
    .factory('locations', locations);
    
    locations.$inject['FBURL', '$firebaseArray'];
    
    function locations(FBURL, $firebaseArray) {
        var locationsRef = new Firebase(FBURL + 'content/locations');
        
        var service = {
            getLocationsList: getLocationsList,
            getLocation: getLocation
        };
        
        return service;
        
        /////////////
        
        function getLocationsList() {
            
            return $firebaseArray(locationsRef)
            
        }
        
        function getLocation() {
            var locationRef = new Firebase(FBURL + 'content/locations' + $stateParams.locationID);
            
            return $firebaseObject(locationRef);
            
        }
    }
    
})(angular);