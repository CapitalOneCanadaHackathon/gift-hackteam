(function (){
    'use strict';
    angular.module('faver.users').controller('UsersController', UsersController);

    UsersController.$inject = ['$scope','UsersService'];

    function UsersController($scope, UsersService){
    	
    	$scope.firstNameList = [];
    	$scope.lastNameList = [];
    	$scope.userEmailList = [];

    	UsersService.getUsersList();//generate users array through API serivce 
        $scope.usersList = UsersService.usersList; // ?
    }

})();