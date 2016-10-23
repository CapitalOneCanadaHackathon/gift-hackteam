(function (){
    'use strict';
    angular.module('faver.users').controller('UsersController', UsersController);

    UsersController.$inject = ['$scope','UsersService','LoginService'];

    function UsersController($scope, UsersService,LoginService){
    	
    	/*$scope.firstNameList = [];
    	$scope.lastNameList = [];
    	$scope.userEmailList = [];
        */

    	UsersService.getUsersList();//generate users array through API serivce 
        $scope.usersList = UsersService.usersList; // ?

        var allSelected = false;
        $scope.selected = {};
        $scope.checkAll = function(){
            if(allSelected){
                for (var i = 0; i < $scope.usersList.length; i++) {
                    var user = $scope.usersList[i];
                        $scope.selected[user.userEmail] = false;
                }
                allSelected = false

            }else{
                for (var i = 0; i < $scope.usersList.length; i++) {
                    var user = $scope.usersList[i];
                        $scope.selected[user.userEmail] = true;
                }
                allSelected = true
            }
        }
            

        $scope.emailSelected = function(){
            var emails = "";
            for (var i = 0; i < $scope.usersList.length; i++) {
                var user = $scope.usersList[i];
                if ($scope.selected[user.userEmail] == true){
                    emails += ",";
                    emails += user.userEmail;
                }
            }
            console.log("hello");
            window.open('mailto:' + emails);
        }

         //confirm the user has logged in on page load
        //TODO: should do this and confirm before making database calls
        LoginService.confirmSession();
    }

})();