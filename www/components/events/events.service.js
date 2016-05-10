// (function (angular) { 'use strict';
//     /* global angular */
//     /* global Firebase */
    
//     angular
//     .module('nete.events')
//     .factory('events', events);
    
//     events.$inject = ['FBURL', '$firebaseObject', '$firebaseArray', '$state'];
    
//     function events(FBURL, $firebaseObject, $firebaseArray, $state) {
        
//         var eventsRef = new Firebase(FBURL + 'events/');
        
//         var service = {
            
//             createEvent: createEvent,
//             readEvent: readEvent,
//             readEventList: readEventList,
//             updateEvent: updateEvent,
//             deleteEvent: deleteEvent
            
//         };
        
//         return service;
        
//         ///////////////
        
//         function createEvent(newEvent) {
            
//             eventsRef.push({
//                 eventTitle: newEvent.eventTitle,
//                 eventDescription: newEvent.eventDescription,
//                 startTime: newEvent.startTime,
//                 endTime: newEvent.endTime,
//                 allDay: newEvent.allDay
//             }).then(function (toastSuccess) {
                
//                 $state.go('eventsRoot');
                
//                 $mdToast.show(
//                     $mdToast.simple()
//                     .textContent('Event created!')
//                     .hideDelay(3000)
//                 );
//             }, function (error) {
                
//                 console.log('Failure');
                
//                 $mdToast.show(
//                     $mdToast.simple()
//                     .textContent('Creation failure. Contact Nete Support.')
//                     .hideDelay(3000)
//                 );
                
//             });
//         }
        
//         function readEvent(eventID) {
            
//             var eventRef = new Firebase(FBURL + 'events/' + eventID);
            
//             return $firebaseObject(eventRef);
            
//         }
        
//         function readEventList() {
            
//             return $firebaseArray(eventsRef);
            
//         }
        
//         function updateEvent(event) {
            
//             event.$save().then(function (success) {
                
//                 $mdToast.show(
//                     $mdToast.simple()
//                     .textContent('Event updated!')
//                     .hideDelay(3000)
//                 );
                
//                 return success;
                
//             }, function (error) {
//                 $mdToast.show(
//                     $mdToast.simple()
//                     .textContent('Error! Contact Nete Support.')
//                     .hideDelay(3000)
//                 );
//             });
            
//         }
        
//         function deleteEvent(event) {
            
//             event.$remove().then(function (success) {
                
//                 $state.go('eventsRoot');
                
//             }, function (error) {
                
//                 $mdToast.show(
//                     $mdToast.simple()
//                         .textContent('Deletion failure. Contact Nete Support.')
//                         .hideDelay(3000)
//                 );
                
//             });
            
//         }
        
        
//     }
    
// })(angular);