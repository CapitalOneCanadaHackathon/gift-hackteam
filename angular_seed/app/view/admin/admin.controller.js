(function (){
    'use strict';
    angular.module('faver.admin').controller('AdminController', AdminController);

    function AdminController(AdminService,LoginService){
        var vm = this;

        vm.numAdmin = 0;
        vm.numVolunteers = 0;
        vm.totalUsers = 0;

        // function to count users
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

        // save users
        vm.saveUsers = function() {
            AdminService.saveUsers(vm.editUsersList);
        };


        // remove user
        vm.removeUser = function(user) {

            var index = vm.editUsersList.indexOf(user);
            vm.editUsersList.splice(index, 1);

        };

        vm.emailAllUsers = function() {
            var emails = "";
            for (var i = 0; i < vm.editUsersList.length; i++) {
                var user = vm.editUsersList[i];
                emails += user.email;
                if (i != (vm.editUsersList.length-1)) {
                    emails += ",";
                }
            }
            window.open("mailto:" + emails);

        };

        // set up the page by retrieving the key code
        // and the list of users
        vm.setUpPage = function() {

            AdminService.getKeyCode().then(function(data) {

                vm.keyCode = AdminService.keyCode;

                AdminService.getCurrentUsers().then(function(data) {

                    vm.editUsersList = AdminService.editUsersList;
                    vm.countUsers();
                }, function(err) {
                    alert("Error retrieving users");
                });

            }, function(err) {
                alert("Error retrieving key code");
            });

        };

        vm.setUpPage();

        //confirm the user has logged in on page load
        //TODO: should do this and confirm before making database calls
        LoginService.confirmSession();

    }
})();