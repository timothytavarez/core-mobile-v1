(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.events')
    .controller('EventsController', EventsController);
    
    EventsController.$inject = ['FBURL', '$cordovaToast'];
    
    function EventsController(FBURL, $cordovaToast) {
        
        var vm = this;
        
        console.log('Controller initialized');
        
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
        
        $cordovaToast
            .show('Here is a message', 'long', 'center')
            .then(function(success) {
              console.log(success);
            }, function (error) {
              console.log(error);
            });
        
    }
    
})(angular);