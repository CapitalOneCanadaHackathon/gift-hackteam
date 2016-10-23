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
                    console.log("USER SERVICE");
                    console.log(data);
                    var numEvents = usersService.usersList.length;
		           usersService.usersList.splice(0,numEvents);
                    for(var i = 0; i<data.data.length; i++){//pushing data one by one
                        usersService.usersList.push(data.data[i]);
                    }
                },
                function(err){
                    alert("error with getUsersService");
                });
	    }
        return usersService;
    }
})();