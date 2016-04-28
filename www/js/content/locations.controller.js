(function (angular) { 'use strict';
    /* global angular */

    angular
    .module('nete.locations')
    .controller('LocationsController', LocationsController);
    
    LocationsController.$inject = ['locations'];
    
    function LocationsController(locations) {
        
    }
    
})(angular);