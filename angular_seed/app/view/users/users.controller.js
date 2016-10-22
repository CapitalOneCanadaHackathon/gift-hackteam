(function (){
    'use strict';
    angular.module('faver.users').controller('UsersController', UsersController);

    function UsersController(){
        var vm = this;
		vm.myVar = "smiley.jpg"
        vm.firstName = 'First Name'; // First Name display
        vm.lastName = 'Last Name'; // Last Name display
        vm.email = 'Email'; // Email
        vm.lastActive = 'Last Active Activity'; // last Activity
        vm.hashTag = 'Tags'; // Tags 


    }
})();