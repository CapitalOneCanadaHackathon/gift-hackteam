(function (){
    'use strict';
    angular.module('faver.userList').controller('UserListController', UserListController);

    function UserListController(){
        var vm = this;
        vm.test = "TTTTEST STATS";
        vm.userList = {
        	"person1" : {
        		"firstName" : "Frank",
        		"lastName" : "Kang",
        		"email" : "frank2258"
        	},
        	"person2" : {
        		"firstName" : "Rebecca",
        		"lastName" : "Song",
        		"email" : "rebecca.song"
        	},
        	"person3" :{
        		"firstName" : "Erin",
        		"lastName" : "Gar",
        		"email" : "erin.gar"
        	}
        }
        //this should be displayed

        
    }
})();