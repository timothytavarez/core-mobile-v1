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
            // getLocation: getLocation
        };
        
        return service;
        
        /////////////
        
        function getLocationsList() {
            
            return $firebaseArray(locationsRef);
            
            
        }
        
        // function getLocation() {
        //     var locationRef = new Firebase(FBURL + '/locations' + $stateParams.locationID);
            
        //     return $firebaseObject(locationRef);
            
        // }
    }
    
})(angular);