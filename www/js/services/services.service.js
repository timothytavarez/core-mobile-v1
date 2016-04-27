(function (angular) { 'use strict';
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.services')
    .factory('services', services);
    
    services.$inject = ['FBURL', '$firebaseArray'];
    
    function services(FBURL, $firebaseArray) {
        
        var servicesRef = new Firebase(FBURL + 'services/');
        
        var service = {
            getServicesList: getServicesList
        };
        
        return service;
        
        //////////////
        
        function getServicesList() {
            return $firebaseArray(servicesRef);
        }
    }
    
})(angular);