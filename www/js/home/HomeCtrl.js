(function (angular) {
    "use strict";
    /* global angular */
    
    angular
    .module('nete.home')
    .controller('HomeCtrl', ['$scope', function ($scope) {
        
        var vm = this;
        console.log('HomeCtrl is initialized!');

    }]);
    
}) (angular);