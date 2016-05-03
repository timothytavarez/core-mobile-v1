(function (angular) { 'use strict';
    /* global angular */
    /* global google */

    angular
    .module('nete.locations')
    .controller('LocationsController', LocationsController);
    
    LocationsController.$inject = ['$cordovaGeolocation', '$compile', '$scope',
    '$ionicLoading', 'locations'];
    
    function LocationsController($cordovaGeolocation, $compile, $scope,
    $ionicLoading, locations) {
        
        var map;
        var vm = this;
        vm.getLocations = getLocations();
        vm.locationList;
       
       vm.map = { center: { latitude: 38.84, longitude: -104.83 }, zoom: 6 };
        
        function getLocations() {
            
            vm.locationList = locations.getLocationsList();
            
        }
        
    }
    
})(angular);