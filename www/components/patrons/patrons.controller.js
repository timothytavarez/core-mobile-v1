(function (angular) { 'use strict';
    
    /* global angular */
    
    angular
    .module('nete.patrons')
    .controller('PatronsController', PatronsController);
    
    PatronsController.$inject = ['FBURL', 'auth', 'profile'];
    
    function PatronsController(FBURL, auth, profile) {
    
        var vm = this;
        vm.getProfile = getProfile();
        
        function getProfile() {
            
            vm.profile = profile.getProfile();
            
        }
        
        
    }
    
})(angular);