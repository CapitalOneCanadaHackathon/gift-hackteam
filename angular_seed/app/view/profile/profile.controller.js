(function (){
    'use strict';
    angular.module('faver.profile').controller('profileController', profileController);

    function profileController(){
        var vm = this;
        vm.firstName = "Frank";
        vm.lastName = "Kang";
        vm.userEmail = "Frank.Kang@live.com";
        vm.myStory = "Hi, my name is Frank Kang";
        vm.tag = "#hackathon";
        
    }
})();