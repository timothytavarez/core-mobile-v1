(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.services')
    .controller('ServicesController', ServicesController);
    
    ServicesController.$inject = ['FBURL', '$scope', '$firebaseArray', 'services'];
    
    function ServicesController(FBURL, $scope, $firebaseArray, services) {
        
        var vm = this;
        
        vm.listServices = listServices();
        
        function listServices() {
            
            vm.servicesList = services.getServicesList();
            
        }
        
        console.log('ServicesController initialized!');
        
    }
    
})(angular);