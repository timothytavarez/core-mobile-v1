(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.communities')
    .controller('CommunitiesController');
    
    CommunitiesController.$inject = ['FBURL'];
    
    function CommunitiesController(FBURL) {
        
        var vm = this;
        
    }
    
})(angular);