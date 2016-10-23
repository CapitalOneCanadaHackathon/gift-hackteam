(function (){
    'use strict';
    angular.module('faver.core').service('UsersService', UsersService);

    UsersService.$inject = ['ApiService'];

    function UsersService(ApiService){

        var usersService = {};

        usersService.usersList = [];

        //retrieve all events
        usersService.getUsersList = function() {
            ApiService.getUsersList()
                .then(function(data){
                    for(var i = 0; i<data.length; i++){//pushing data one by one
                        usersService.usersList.push(data[i]);
                    }
                },
                function(err){
                    alert("error with getUsersService");
                });
	    }
        return usersService;
    }
})();