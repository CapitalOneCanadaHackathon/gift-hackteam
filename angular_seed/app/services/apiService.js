(function () {
    'use strict';
    angular.module('faver.core').service('ApiService', ApiService);

    ApiService.$inject = ['$q'];

    function ApiService($q) {

        var apiService = {};
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        apiService.monthlyEvents = [
            { title: 'All Day Event', start: new Date(y, m, 1), eventID: 1, type: "volunteer-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:5},
            { title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2), eventID: 2, type: "social", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:2},
            { title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false, eventID: 3, type: "lunch", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:5},
            { title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false, eventID: 4, type: "board-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:8},
            { title: 'Birthday Party', start: new Date(y, m + 1, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false, eventID: 5, type: "family-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:5},
            { title: 'Click for Google', start: new Date(y, m, 28), end: new Date(y, m, 29), eventID: 6, type: "board-meeting", location: "123 address st.", description: "this is a great meeting", createdBy:"12", numVolunNeeded:7}
        ];

        //retrieve all events
        apiService.getMonthlyBookings = function () {
            var q = $q.defer();
            q.resolve(apiService.monthlyEvents);
            return q.promise;
        }

        apiService.attendees = [
            { firstName: "Erin", lastName: "Gallagher" },
            { firstName: "Rebeccaa", lastName: "Song" },
            { firstName: "Mark", lastName: "Water" },
            { firstName: "Annelise", lastName: "Jade" }
        ];

        //returns the list of attendees for an event
        apiService.getAttendees = function (eventID) {
            var q = $q.defer();
            q.resolve(apiService.attendees);
            return q.promise;
            //TODO: connect to server.js
        }

        //adds the current user to the attendee list for an event
        apiService.attendEvent = function (eventID) {
            var q = $q.defer();
            q.resolve();
            return q.promise;
            //TODO: connect to server.js
        }

        //updates the total number of people who visited the event
        //and who visited the event in logs
        apiService.visitedEvent = function (eventID) {
            //TODO: connect to server.js
            console.log("user visited page, updating db....");
        }


        return apiService;
    }
})();