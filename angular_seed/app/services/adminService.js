(function (){
    'use strict';
    angular.module('faver.core').service('AdminService', AdminService);

    AdminService.$inject = ['$q', 'ApiService', '$http'];

    function AdminService($q, ApiService, $http){

        var adminService = {};

        adminService.keyCode = {};

        // handle generating the key code
        adminService.getKeyCode = function() {
            var q = $q.defer();
            ApiService.getKeyCode()
                .then(function(data) {
                    console.log(data.data[0]);
                    adminService.keyCode.key = data.data[0].key;
                    adminService.keyCode.date = data.data[0].date;
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

        //     var promisePost = $http.post('api/getUsers')
		//     .success(function(data, status) {
        //         console.log(data);
		//     })
		//     .error(function(data, status) {
        //         console.log(status);
		//     	return 'error';
		//     });
            
    	// 	return promisePost;
        // };

            var q = $q.defer();
            ApiService.getUsers()
                .then(function(data) {
                    console.log(data.data);
                    for (var i = 0; i < data.data.length; i++) {
                        adminService.users.push(data.data[i]);
                        // adminService.editUsersList.push(data[i]);
                    }
                    q.resolve();
                    angular.copy(adminService.users, adminService.editUsersList);
                    
                }, function(err) {
                    alert("Error retrieving users");
                    q.reject();
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
            console.log("USERS");
            console.log(users);
            adminService.editUsersList = [];
            for (var i = 0; i < users.length; i++) {
                adminService.editUsersList.push(users[i]);
            }

            if (!adminService.equals(adminService.users, adminService.editUsersList)) {
                // send to db
                console.log("Saved Edited Users");
                console.log(adminService.users);
                console.log(adminService.editUsersList);
                var diff = [];
                var updateAdmin = [];
                for(var i = 0; i < adminService.editUsersList.length; i++){
                    updateAdmin.push({"userId":adminService.editUsersList[i].userId, "isAdmin": adminService.editUsersList[i].isAdmin})
                }
                

                var inlist = false;
                for(var i = 0; i < adminService.users.length; i++){
                    for(var j = 0; j < adminService.editUsersList.length; j++){
                        if(adminService.users[i].userId == adminService.editUsersList[j].userId){
                            inlist = true;
                        }
                    }
                    if(inlist == false){
                        diff.push(adminService.users[i]);
                    }
                    inlist = false;
                }

                console.log("DIFFFFFF");
                console.log(diff);

                angular.copy(adminService.editUsersList, adminService.users);
                
                ApiService.saveUsers(updateAdmin, diff).then(function() {
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