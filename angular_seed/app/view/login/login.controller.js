(function (){
    'use strict';
    angular.module('faver.login').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$state'];

    function LoginController($scope,$state){
        var vm = this;
        vm.login = {};
        vm.login.email = "";
        vm.login.password = "";
        
        $scope.formSubmit = function() { 
            console.log("submit");
        }
        
    }
})();