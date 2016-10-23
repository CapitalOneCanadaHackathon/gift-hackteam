(function (){
    'use strict';
    angular.module('faver.profile').controller('profileController', profileController);

    function profileController(ProfileService,LoginService){
        var vm = this;
        vm.profile = {};
        vm.profile.userProfile = ProfileService.usersList;
        
        //retirve user profile
        ProfileService.getProfile();

        //confirm the user has logged in on page load
        //TODO: should do this and confirm before making database calls
        LoginService.confirmSession();
    }
})();