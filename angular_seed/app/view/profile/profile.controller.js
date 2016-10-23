(function (){
    'use strict';
    angular.module('faver.profile').controller('profileController', profileController);

    function profileController(ProfileService){
        var vm = this;
        vm.profile = {};
        vm.profile.userProfile = ProfileService.usersList;
        
        //retirve user profile
        ProfileService.getProfile();
    }
})();