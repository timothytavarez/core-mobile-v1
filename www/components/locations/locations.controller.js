(function (angular) { 'use strict';
    /* global angular */

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
       
       vm.map = { center: { latitude: 38.8401481, longitude: -104.8251865 }, zoom: 12 };
        
        function getLocations() {
            
            vm.locationList = locations.getLocationsList();
            
        }
        
        
        
    }
    
})(angular);