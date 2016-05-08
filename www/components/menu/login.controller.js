(function (angular) { 'use strict';
    /* global angular */
    
    angular
    .module('nete.menu')
    .controller('LoginController', LoginController);
    
    LoginController.$inject = ['$scope', '$ionicModal', 'auth', '$state'];
    
    function LoginController ($scope, $ionicModal, auth, $state) {
        
        $scope.email = null;
        $scope.password = null;
        
        
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('components/menu/login-root.html', {
        scope: $scope
        }).then(function(modal) {
        $scope.modal = modal;
        });
        
        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
        $scope.modal.hide();
        };
        
        // Open the login modal
        $scope.login = function() {
        $scope.modal.show();
        };
        
        $scope.goLogin = function(email, password) {
            $scope.err = null;
        auth.$authWithPassword({ 
            email: email,
            password: password },
            {rememberMe: true})
        .then(function(/* user */) {
          $state.go('neteApp.home');
          console.log('Successfully logged in');
        }, function(err) {
          console.log(err);
        });
        };
        
        // Perform the login action when the user submits the login form
        // $scope.doLogin = function() {
        // console.log('Doing login', $scope.loginData);
        
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        // $timeout(function() {
        //   $scope.closeLogin();
        // }, 1000);
            
        }
    
    
})(angular);