(function (){
    'use strict';
    angular.module('faver.admin').controller('AdminController', AdminController);

    function AdminController(){
        var vm = this;
        vm.test = "ADMINNNN";
        //this should be displayed
        
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
            }
        ];


    }
})();