(function (angular) { 'use strict';
    
    /* global angular */
    
    angular
    .module('nete.patrons')
    .controller('PatronsController', PatronsController);
    
    PatronsController.$inject = ['FBURL', 'auth'];
    
    function PatronsController(FBURL, auth) {
    
        var vm = this;
        
        
        
    }
    
})(angular);