(function () {
    'use strict';
    angular.module('faver.core').service('ApiService', ApiService);

    ApiService.$inject = ['$q', '$http'];

    function ApiService($q, $http) {

        var apiService = {};

        // ---- EVENTS ---- //

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var userID = "123ecg";

        apiService.monthlyEvents = [
        ];

        //retrieve all events
        apiService.getMonthlyBookings = function () {
            // var q = $q.defer();
            // q.resolve(apiService.monthlyEvents);
            // return q.promise;

            //var promisePost = // Simple GET request example:
            // $http({
            //     method: 'POST',
            //     url: '/api/postTest',
            //     data: {"name": 1, "id": 2222}
            // }).then(function successCallback(response) {
            //     console.log("worked!");
            // }, function errorCallback(response) {
            //     console.log("error has occurred!");
            // });
		    
            var promisePost = $http({
                method: 'GET',
                url: '/api/getEvents',
            }).then(function successCallback(response) {
                console.log(response);
                apiService.monthlyEvents = response.data;
            }, function errorCallback(response) {
                console.log("error has occurred!");
            });
		    

            return promisePost;
        }

        apiService.attendees = [
            { firstName: "Erin", lastName: "Gallagher", userID:"123ecg" },
            { firstName: "Rebeccaa", lastName: "Song", userID:"122dewg" },
            { firstName: "Mark", lastName: "Water", userID:"3ecweg" },
            { firstName: "Annelise", lastName: "Jade", userID:"574ecg" }
        ];

        //returns the list of attendees for an event
        apiService.getAttendees = function (eventID) {
            var q = $q.defer();
            q.resolve(apiService.attendees);
            return q.promise;
            //TODO: connect to server.js
        }

        //adds the current user to the attendee list for an event
        //parameters: eventID, userID
        apiService.attendEvent = function (eventID) {
            var q = $q.defer();
            q.resolve();
            return q.promise;
            //TODO: connect to server.js
        }

         //leaves the current event and remove user from attendee list
         //parameters: eventID, userID
        apiService.leaveEvent = function (eventID) {
            var q = $q.defer();
            q.resolve();
            return q.promise;
            //TODO: connect to server.js
        }

        //updates the total number of people who visited the event
        //and who visited the event in logs
        //parameters: eventID, userID
        apiService.visitedEvent = function (eventID) {
            //TODO: connect to server.js
            console.log("user visited page, updating db....");
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