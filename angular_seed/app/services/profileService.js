(function (){
    'use strict';
    angular.module('faver.core').service('ProfileService', ProfileService);

    ProfileService.$inject = ['ApiService'];

    function ProfileService(ApiService){

        var profileService = {};

        profileService.usersList = {};

        //retrieve all events
        profileService.getProfile = function() {
            ApiService.getUserProfile()
                .then(function(userProfile){  
                    profileService.usersList.firstName=userProfile.firstName;
                    profileService.usersList.lastName=userProfile.lastName;
                    profileService.usersList.userEmail=userProfile.userEmail;
                    profileService.usersList.myStory=userProfile.myStory;
                    profileService.usersList.tag=userProfile.tag;
                },
                function(err){
                    alert("error with getUsersService");
                });
	    }
        return profileService;
    }
})();