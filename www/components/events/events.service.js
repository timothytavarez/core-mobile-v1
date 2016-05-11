(function (angular) { 'use strict';
    /* global angular */
    /* global Firebase */
    
    angular
    .module('nete.events')
    .factory('events', events);
    
    events.$inject = ['FBURL', '$firebaseObject', '$firebaseArray', '$state',
    '$stateParams', 'auth'];
    
    function events(FBURL, $firebaseObject, $firebaseArray, $state,
    $stateParams, auth) {
        
        var eventsRef = new Firebase(FBURL + 'events/');
        
        var service = {
            
            createEvent: createEvent,
            readEvent: readEvent,
            readEventList: readEventList,
            updateEvent: updateEvent,
            deleteEvent: deleteEvent,
            registerForEvent: registerForEvent
            
        };
        
        return service;
        
        ///////////////
        
        function createEvent(newEvent) {
            
            eventsRef.push({
                eventTitle: newEvent.eventTitle,
                eventDescription: newEvent.eventDescription,
                startTime: newEvent.startTime,
                endTime: newEvent.endTime,
                allDay: newEvent.allDay
            }).then(function (toastSuccess) {
                
                $state.go('eventsRoot');
                
            //   TODO toast
               
            }, function (error) {
                
                console.log('Failure');
                
            //   TODO Toast
                
            });
        }
        
        function readEvent() {
            
            var eventRef = new Firebase(FBURL + 'events/' + $stateParams.eventID);
            
            return $firebaseObject(eventRef);
            
        }
        
        function readEventList() {
            
            return $firebaseArray(eventsRef);
            
        }
        
        function updateEvent(event) {
            
            event.$save().then(function (success) {
                
                // TODO toast
                
                return success;
                
            }, function (error) {
                
                // TODO toast
                
            });
            
        }
        
        function deleteEvent(event) {
            
            event.$remove().then(function (success) {
                
                $state.go('eventsRoot');
                
            }, function (error) {
                
                // TODO toast
                
            });
            
        }
        
        function registerForEvent() {
            
            var eventRef = new Firebase(FBURL + 'events/' + 
            $stateParams.eventID + '/attendees/');
            var patron = auth.$getAuth().uid;
            
            eventRef.update({
                [patron]: true
            });
            
        }
        
        
    }
    
})(angular);