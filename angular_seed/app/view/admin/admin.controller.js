(function (){
    'use strict';
    angular.module('faver.admin').controller('AdminController', AdminController);

    function AdminController(){
        var vm = this;
        vm.test = "ADMINNNN";
        //this should be displayed
        


        vm.keyCode = { 
            "date": new Date("2016-10-21"),
            "key": "AfL24Jfm1GKLylme234Po63M"  
        };

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

        vm.generateKey = function() {

            var msPerDay = (24 * 60 * 60 * 100);

            console.log("Old key generated at: " + vm.keyCode.date);
            var currDate = new Date();
            console.log("Current Date : " + currDate);
            var dateDiff = currDate - vm.keyCode.date;
            console.log("Milliseconds since last generated key: " + dateDiff);

            var daysPassed = Math.floor(dateDiff / msPerDay);
            console.log("Days since last generated key: " + daysPassed);

            if (daysPassed > 7) {
                vm.keyCode.date = currDate;
                vm.keyCode.key = (Math.random() + 1).toString(36).substr(2, 24);
            }
        };

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

        vm.generateKey();
        vm.countUsers();

    }
})();