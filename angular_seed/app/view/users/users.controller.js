(function (){
    'use strict';
    angular.module('faver.users').controller('UsersController', UsersController);

    function UsersController(){
        var vm = this;
		vm.myVar = "http://www.gravatar.com/avatar/"

        vm.firstName = 'Frank'; // First Name display
        vm.lastName = 'Kang'; // Last Name display
        vm.email = 'frank2258@hotmail.com'; // Email
        vm.lastActive = 'activity'; // last Activity
        vm.hashTag = '#tags'; // Tags 
        vm.myStory = 'text'; 


    }
})();