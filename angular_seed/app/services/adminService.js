(function (){
    'use strict';
    angular.module('faver.core').service('AdminService', AdminService);

    AdminService.$inject = ['$q', 'ApiService'];

    function AdminService($q, ApiService){

        var adminService = {};

        adminService.keyCode = {};

        // handle generating the key code
        adminService.getKeyCode = function() {
            var q = $q.defer();
            ApiService.getKeyCode()
                .then(function(data) {
                    console.log(data);
                    adminService.keyCode.key = data.key;
                    adminService.keyCode.date = data.date;
                    adminService.generateKey();
                    q.resolve();
                }, function(err) {
                    alert("Error retrieving keycode");
                    q.reject();
                });
                return q.promise;
        };

        adminService.users = [];
        adminService.editUsersList = [];

        // get list of users
        adminService.getCurrentUsers = function() {
            var q = $q.defer();
            ApiService.getUsers()
                .then(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        adminService.users.push(data[i]);
                        // adminService.editUsersList.push(data[i]);
                    }
                    q.resolve();
                    angular.copy(adminService.users, adminService.editUsersList);
                }, function(err) {
                    alert("Error retrieving users");
                    q.defer();
                });
           return q.promise;     
        }

        // helper function to generate a new key every day
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
                ApiService.updateKey(adminService.keyCode).then(function(data) {
                    console.log("Key updated");
                }, function(err) {
                    alert("Error updating key code");
                });
            }

        };

        // save users if changes have been made
        adminService.saveUsers = function(users) {

            adminService.editUsersList = [];
            for (var i = 0; i < users.length; i++) {
                adminService.editUsersList.push(users[i]);
            }

            if (!adminService.equals(adminService.users, adminService.editUsersList)) {
                // send to db
                console.log("Saved Edited Users");
                angular.copy(adminService.editUsersList, adminService.users);
                ApiService.saveUsers(adminService.users).then(function() {
                    console.log(adminService.users);    
                }, function(err) {
                    alert("Error saving users");
                });
            }
        };

        // helper function to determine if the original
        // list of users is different from the saved list
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

        return adminService;
    }
})();