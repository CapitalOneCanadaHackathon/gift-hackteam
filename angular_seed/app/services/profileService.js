(function (){
    'use strict';
    angular.module('faver.core').service('ProfileService', ProfileService);

    ProfileService.$inject = ['ApiService'];

    function ProfileService(ApiService){

        var usersService = {};

        usersService.usersList = [];

        //retrieve all events
        profileService.getProfile = function() {
            ApiService.getUsersList()
                .then(function(data){
                    for(var i = 0; i<data.length; i++){//pushing data one by one
                        profileService.usersList.push(data[i]);
                    }
                },
                function(err){
                    alert("error with getUsersService");
                });
	    }
        return profileService;
    }
})();