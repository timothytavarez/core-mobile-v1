(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.events')
    .controller('EventsController', EventsController);
    
    EventsController.$inject = ['FBURL'];
    
    function EventsController(FBURL) {
        
        var vm = this;
        
        console.log('Controller initialized');
        
        vm.testEvent = [{
            title: 'Adult Coloring Time',
            startTime: new Date(Date.UTC(2016, 4, 11, 4)),
            endTime: new Date(Date.UTC(2016, 4, 11, 6)),
            allDay: false
        },{
            title: 'Lina Landing Day',
            startTime: new Date(Date.UTC(2016, 4, 18, 2)),
            endTime: new Date(Date.UTC(2016, 4, 18, 8)),
            allDay: false
        }];
        
    }
    
})(angular);