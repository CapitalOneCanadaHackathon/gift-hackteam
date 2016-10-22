(function (){
    'use strict';
    angular.module('faver.core').service('AdminService', AdminService);

    AdminService.$inject = ['ApiService'];

    function AdminService(ApiService){

        var adminService = {};

        adminService.keyCode = { 
            "date": new Date("2016/10/22"),
            "key": "AfL24Jfm1GKLylme234Po63M"  
        };

        adminService.editUsersList = [];
        adminService.users = [
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
        adminService.numAdmin = 0;
        adminService.numVolunteers = 0;
        adminService.totalUsers = 0;

        adminService.generateKey = function() {
            
            var msPerDay = (24 * 60 * 60 * 1000);

            console.log("Old key generated at: " + adminService.keyCode.date);
            var currDate = new Date();
            console.log("Current Date : " + currDate);
            var dateDiff = currDate - adminService.keyCode.date;
            console.log("Milliseconds since last generated key: " + dateDiff);

            var daysPassed = Math.ceil(dateDiff / msPerDay);
            console.log("Days since last generated key: " + daysPassed);

            if (daysPassed > 1) {
                adminService.keyCode.date = currDate;
                adminService.keyCode.key = (Math.random() + 1).toString(36).substr(2, 24);
            }

        };

        adminService.saveUsers = function() {

            if (!adminService.equals(adminService.users, adminService.editUsersList)) {
                // send to db
                console.log("Saved Edited Users");
                angular.copy(adminService.editUsersList, adminService.users);
            }

        };

        adminService.equals = function(origUsers, editedUsers) {

            var isEqual = true;

            if (origUsers.length != editedUsers.length) {
                isEqual = false;
            } else {
                for (var i = 0; i < origUsers.length; i++) {
                    if (origUsers[i].isAdmin != editedUsers[i].isAdmin) {
                        isEqual = false;
                        break;
                    }
                }
            }

            return isEqual;
        };

        adminService.setUsers = function() {
            angular.copy(adminService.users, adminService.editUsersList);
        };

        return adminService;
    }
})();