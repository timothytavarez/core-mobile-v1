(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.core')
    .factory('_', _);
    
    _.$inject = ['$window'];
    
    function _ ($window) {
        return $window._;
    }
    
})(angular);