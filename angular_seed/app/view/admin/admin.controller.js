(function (){
    'use strict';
    angular.module('faver.admin').controller('AdminController', AdminController);

    function AdminController(){
        var vm = this;
        vm.test = "ADMINNNN";
        //this should be displayed
        
        vm.keyCode = "AfL24Jfm$^&4";

        vm.users = [

            {
            "firstname": "Person",
            "lastname": "One",
            "email": "personone@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Two",
            "email": "persontwo@email.com",
            "isAdmin": true,
            },
            {
            "firstname": "Person",
            "lastname": "Three",
            "email": "personthree@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Four",
            "email": "personfour@email.com",
            "isAdmin": true,
            },
                   {
            "firstname": "Person",
            "lastname": "Five",
            "email": "personfive@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Six",
            "email": "personsix@email.com",
            "isAdmin": true,
            },
            {
            "firstname": "Person",
            "lastname": "Seven",
            "email": "personseven@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Eight",
            "email": "personeight@email.com",
            "isAdmin": true,
            },
              {
            "firstname": "Person",
            "lastname": "One",
            "email": "personone@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Two",
            "email": "persontwo@email.com",
            "isAdmin": true,
            },
            {
            "firstname": "Person",
            "lastname": "Three",
            "email": "personthree@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Four",
            "email": "personfour@email.com",
            "isAdmin": true,
            },
                   {
            "firstname": "Person",
            "lastname": "Five",
            "email": "personfive@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Six",
            "email": "personsix@email.com",
            "isAdmin": true,
            },
            {
            "firstname": "Person",
            "lastname": "Seven",
            "email": "personseven@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Eight",
            "email": "personeight@email.com",
            "isAdmin": true,
            },
              {
            "firstname": "Person",
            "lastname": "One",
            "email": "personone@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Two",
            "email": "persontwo@email.com",
            "isAdmin": true,
            },
            {
            "firstname": "Person",
            "lastname": "Three",
            "email": "personthree@email.com",
            "isAdmin": false,
            },
            {
            "firstname": "Person",
            "lastname": "Four",
            "email": "personfour@email.com",
            "isAdmin": true,
            }
        ];

        vm.numAdmin = 0;
        vm.numVolunteers = 0;
        vm.totalUsers = 0;

        vm.countUsers = function() {

            vm.numAdmin = 0;
            vm.numVolunteers = 0;
            vm.totalUsers = 0;

            for (var i = 0; i < vm.users.length; i++) {
                var user = vm.users[i];
                if (user.isAdmin) {
                    vm.numAdmin++;
                } else {
                    vm.numVolunteers++;
                }
                vm.totalUsers++;
            }

        };

        vm.countUsers();

    }
})();