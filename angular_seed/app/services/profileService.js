(function (){
    'use strict';
    angular.module('faver.core').service('ProfileService', ProfileService);

    ProfileService.$inject = ['ApiService', '$sessionStorage'];

    function ProfileService(ApiService, $sessionStorage){

        var profileService = {};

        profileService.usersList = {};

        //retrieve all events
        profileService.getProfile = function() {
            var id = $sessionStorage.userID;
            ApiService.getUserProfile(id)
                .then(function(userProfile){  
                    console.log("USER PROFILE");
                    console.log(userProfile);
                    profileService.usersList.firstName=userProfile.data.firstName;
                    profileService.usersList.lastName=userProfile.data.lastName;
                    profileService.usersList.userEmail=userProfile.data.userEmail;
                    profileService.usersList.myStory=userProfile.data.myStory;
                    profileService.usersList.tag=userProfile.data.tag;
                },
                function(err){
                    alert("error with getUsersService");
                });
	    }
        return profileService;
    }
})();