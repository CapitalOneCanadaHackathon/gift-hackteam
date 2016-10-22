(function (){
    'use strict';
    angular.module('faver.core').service('ApiService', ApiService);

    ApiService.$inject = ['$q'];

    function ApiService($q){

        var apiService = {};

        // ---- EVENTS ---- //

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        apiService.monthlyEvents = [ 
            {title: 'All Day Event',start: new Date(y, m, 1), eventID:1, type:"volunteer-meeting",location:"123 address st.",description:"this is a great meeting"},
            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2), eventID:2, type:"social",location:"123 address st.",description:"this is a great meeting"},
            {title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false, eventID:3, type:"lunch",location:"123 address st.",description:"this is a great meeting"},
            {title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false, eventID:4, type:"board-meeting",location:"123 address st.",description:"this is a great meeting"},
            {title: 'Birthday Party',start: new Date(y, m+1, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false ,eventID:5, type:"family-meeting",location:"123 address st.",description:"this is a great meeting"},
            {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29), eventID:6, type:"board-meeting",location:"123 address st.",description:"this is a great meeting"}
        ];

        //retrieve all events
        apiService.getMonthlyBookings = function(){
            var q = $q.defer();
            q.resolve(apiService.monthlyEvents);
            return q.promise;

            /*
            var promisePost = $http.post('/test', {})
                .success(function(data, status) {

                })
                .error(function(data, status) {

    
                });

		    return promisePost;

            */

		}

        // ---- ADMIN ---- //

        // for the account creation code
        apiService.keyCode = { 
            "date": new Date("2016/10/22"),
            "key": "AfL24Jfm1GKLylme234Po63M"  
        };

        apiService.getKeyCode = function() {

            var q = $q.defer();
            q.resolve(apiService.keyCode);
            return q.promise;

        };

        // for retrieving the users
        apiService.users = [
            { "firstname": "Person", "lastname": "One", "email": "personone@email.com", "isAdmin": false },
            { "firstname": "Person", "lastname": "Two", "email": "persontwo@email.com", "isAdmin": true },
            { "firstname": "Person", "lastname": "Three", "email": "personthree@email.com", "isAdmin": false },
            { "firstname": "Person", "lastname": "Four", "email": "personfour@email.com", "isAdmin": true },
            { "firstname": "Person", "lastname": "Five", "email": "personfive@email.com", "isAdmin": false },
            { "firstname": "Person", "lastname": "Six","email": "personsix@email.com", "isAdmin": true }
        ];

        apiService.getUsers = function() {
            var q = $q.defer();
            q.resolve(apiService.users);
            return q.promise;
        };

        // for saving users
        apiService.saveUsers = function(users) {

            // db insert
            var q = $q.defer();
            q.resolve();
            return q.promise;

        };

        return apiService;
    }
})();