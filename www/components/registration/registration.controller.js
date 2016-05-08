(function (angular) { 'use strict';
    
    /* global angular */
    
    angular
    .module('nete.registration')
    .controller('RegistrationController', RegistrationController);
    
    RegistrationController.$inject = ['auth'];
    
    function RegistrationController(auth) {
        
        var vm = this;
        
    }
    
    
})(angular);