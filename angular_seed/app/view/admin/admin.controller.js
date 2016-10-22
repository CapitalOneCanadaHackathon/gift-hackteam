(function (){
    'use strict';
    angular.module('faver.admin').controller('AdminController', AdminController);

    function AdminController(AdminService){
        var vm = this;
        vm.test = "ADMINNNN";
        
        // copy original array of users into new array to detect changes made

        // vm.keyCode = { 
        //     "date": new Date("2016/10/22"),
        //     "key": "AfL24Jfm1GKLylme234Po63M"  
        // };

        vm.keyCode = AdminService.keyCode;

        // vm.users = AdminService.users;
        AdminService.setUsers(); 
        vm.editUsersList = AdminService.editUsersList;
        // [

        //     {
        //     "firstname": "Person",
        //     "lastname": "One",
        //     "email": "personone@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Two",
        //     "email": "persontwo@email.com",
        //     "isAdmin": true,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Three",
        //     "email": "personthree@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Four",
        //     "email": "personfour@email.com",
        //     "isAdmin": true,
        //     },
        //            {
        //     "firstname": "Person",
        //     "lastname": "Five",
        //     "email": "personfive@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Six",
        //     "email": "personsix@email.com",
        //     "isAdmin": true,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Seven",
        //     "email": "personseven@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Eight",
        //     "email": "personeight@email.com",
        //     "isAdmin": true,
        //     },
        //       {
        //     "firstname": "Person",
        //     "lastname": "One",
        //     "email": "personone@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Two",
        //     "email": "persontwo@email.com",
        //     "isAdmin": true,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Three",
        //     "email": "personthree@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Four",
        //     "email": "personfour@email.com",
        //     "isAdmin": true,
        //     },
        //            {
        //     "firstname": "Person",
        //     "lastname": "Five",
        //     "email": "personfive@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Six",
        //     "email": "personsix@email.com",
        //     "isAdmin": true,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Seven",
        //     "email": "personseven@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Eight",
        //     "email": "personeight@email.com",
        //     "isAdmin": true,
        //     },
        //       {
        //     "firstname": "Person",
        //     "lastname": "One",
        //     "email": "personone@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Two",
        //     "email": "persontwo@email.com",
        //     "isAdmin": true,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Three",
        //     "email": "personthree@email.com",
        //     "isAdmin": false,
        //     },
        //     {
        //     "firstname": "Person",
        //     "lastname": "Four",
        //     "email": "personfour@email.com",
        //     "isAdmin": true,
        //     }
        // ];

        vm.numAdmin = AdminService.numAdmin;
        vm.numVolunteers = AdminService.numVolunteers;
        vm.totalUsers = AdminService.totalUsers;

        // vm.numAdmin = 0;
        // vm.numVolunteers = 0;
        // vm.totalUsers = 0;


        // vm.generateKey = function() {

        //     var msPerDay = (24 * 60 * 60 * 1000);

        //     console.log("Old key generated at: " + vm.keyCode.date);
        //     var currDate = new Date();
        //     console.log("Current Date : " + currDate);
        //     var dateDiff = currDate - vm.keyCode.date;
        //     console.log("Milliseconds since last generated key: " + dateDiff);

        //     var daysPassed = Math.ceil(dateDiff / msPerDay);
        //     console.log("Days since last generated key: " + daysPassed);

        //     if (daysPassed > 1) {
        //         vm.keyCode.date = currDate;
        //         vm.keyCode.key = (Math.random() + 1).toString(36).substr(2, 24);
        //     }
        // };

        vm.countUsers = function() {

            vm.numAdmin = 0;
            vm.numVolunteers = 0;
            vm.totalUsers = 0;

            for (var i = 0; i < vm.editUsersList.length; i++) {
                var user = vm.editUsersList[i];
                if (user.isAdmin) {
                    vm.numAdmin++;
                } else {
                    vm.numVolunteers++;
                }
                vm.totalUsers++;
            }

        };

        vm.saveUsers = function() {
            AdminService.saveUsers();
        };

        // vm.saveUsers = function() {

        //     if (!vm.equals(vm.users, vm.editUsersList)) {
        //         // send to db
        //         console.log("Saved Edited Users");
        //         angular.copy(vm.editUsersList, vm.users);
        //     }
        // };

        // vm.equals = function(origUsers, editedUsers) {

        //     var isEqual = true;

        //     if (origUsers.length != editedUsers.length) {
        //         isEqual = false;
        //     } else {
        //         for (var i = 0; i < origUsers.length; i++) {
        //             if (origUsers[i].isAdmin != editedUsers[i].isAdmin) {
        //                 isEqual = false;
        //                 break;
        //             }
        //         }
        //     }

        //     return isEqual;
        // };

        vm.removeUser = function(user) {

            var index = vm.editUsersList.indexOf(user);
            vm.editUsersList.splice(index, 1);

        };

        // vm.editUsersList = [];
        // angular.copy(AdminService.users, vm.editUsersList);
        AdminService.generateKey();
        // vm.generateKey();
        vm.countUsers();

    }
})();