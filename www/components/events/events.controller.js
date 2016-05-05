(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.events')
    .controller('EventsController', EventsController);
    
    EventsController.$inject = ['FBURL'];
    
    function EventsController(FBURL) {
        
    }
    
})(angular);