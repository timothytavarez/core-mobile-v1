(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.events')
    .controller('EventsController', EventsController);
    
    EventsController.$inject = ['events', '$firebaseObject'];
    
    function EventsController(events, $firebaseObject) {
        
        var vm = this;
        vm.readEvent = readEvent();
        vm.readEventList = readEventList();
        
        
        vm.testEvent = [{
            eventTitle: 'Adult Coloring Time',
            startTime: new Date(Date.UTC(2016, 4, 11, 4)),
            endTime: new Date(Date.UTC(2016, 4, 11, 6)),
            allDay: false
        },{
            eventTitle: 'Lina Landing Day',
            startTime: new Date(Date.UTC(2016, 4, 18, 2)),
            endTime: new Date(Date.UTC(2016, 4, 18, 8)),
            allDay: false
        }];
        
        function readEvent() {
            
            vm.event = events.readEvent();
            
        }
        
        function readEventList() {
            
            vm.eventList = events.readEventList();
            
        }
        
    }
    
})(angular);