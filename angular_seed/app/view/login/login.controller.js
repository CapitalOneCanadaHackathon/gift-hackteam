(function (){
    'use strict';
    angular.module('faver.login').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$state','LoginService'];

    function LoginController($scope,$state,LoginService){
        var vm = this;
        vm.login = {};
        vm.login.email = "";
        vm.login.password = "";
        
        $scope.formSubmit = function() { 
            var email = vm.login.email;
            var password = vm.login.password;
            LoginService.validate()
                .then(function(email,password){
                    console.log("valid credentials, singing in");
                    $state.go("home");
                },
                function(err){
                    alert("error retrieving events");
                });
        }
        
    }
})();