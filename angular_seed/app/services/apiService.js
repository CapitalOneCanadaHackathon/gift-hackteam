(function () {
    'use strict';
    angular.module('faver.core').service('ApiService', ApiService);

    ApiService.$inject = ['$q'];

    function ApiService($q) {

        var apiService = {};

        // ---- LOGIN ---- //

        //retrieve all events
        apiService.validateLoginCredentials = function (email,password) {
            var q = $q.defer();
            q.resolve();
            return q.promise;
        }

        // ---- EVENTS ---- //

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var userID = "123ecg";

        apiService.monthlyEvents = [
            { title: 'All Day Event', start: new Date(y, m, 1), eventID: 1, type: "volunteer-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:5, numAttendees:3},
            { title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2), eventID: 2, type: "social", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:2, numAttendees:5},
            { title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false, eventID: 3, type: "lunch", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:5, numAttendees:2},
            { title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false, eventID: 4, type: "board-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:8, numAttendees:6},
            { title: 'Birthday Party', start: new Date(y, m + 1, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false, eventID: 5, type: "family-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:5, numAttendees:1},
            { title: 'Click for Google', start: new Date(y, m, 28), end: new Date(y, m, 29), eventID: 6, type: "board-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:7, numAttendees:2}
        ];

        //retrieve all events
        apiService.getMonthlyBookings = function () {
            var q = $q.defer();
            q.resolve(apiService.monthlyEvents);
            return q.promise;
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