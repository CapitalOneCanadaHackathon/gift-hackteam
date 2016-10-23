(function (){
    'use strict';
    angular.module('faver.users').controller('UsersController', UsersController);

    UsersController.$inject = ['$scope','UsersService','LoginService'];

    function UsersController($scope, UsersService,LoginService){
    	
    	$scope.firstNameList = [];
    	$scope.lastNameList = [];
    	$scope.userEmailList = [];

    	UsersService.getUsersList();//generate users array through API serivce 
        $scope.usersList = UsersService.usersList; // ?

         //confirm the user has logged in on page load
        //TODO: should do this and confirm before making database calls
        LoginService.confirmSession();
    }

})();