(function () {
    'use strict';
    angular.module('faver.core').service('ApiService', ApiService);

    ApiService.$inject = ['$q'];

    function ApiService($q) {

        var apiService = {};
        var userInfo = {//TODO remove once real data is returned 
            userID:"123ecg",
            userType:"admin" //Admin or Volunteer
        };
        // ---- LOGIN ---- //

        //validate login credentials
        //return userID
        apiService.validateLoginCredentials = function (email,password) {
            var q = $q.defer();
            q.resolve(userInfo);
            return q.promise;
        }

        // ---- EVENTS ---- //

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

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
		}

        // ---- USERS ---- //

        apiService.userProfile = {
            firstName:"Frank",
            lastName:"Kang",
            userEmail:"Frank.Kang@live.com",
            myStory:"Hi, my name is Frank Kang",
            tag:"#hackathon"
        };

        //Retreive user profile
        apiService.getUserProfile = function(){
            var q = $q.defer();
            q.resolve(apiService.userProfile);
            return q.promise;
        }

        apiService.users = [
            {firstName: "Frank", lastName: "Kang", userEmail: "Frank.Kang@live.com", description: "Hi, my name is Frank Kang"},
            {firstName: "Rebecca", lastName: "Song", userEmail: "Rebecca.Song@live.com", description: "Hi my name is Rebecca Song"},
            {firstName: "Erin", lastName: "Gallagher", userEmail: "Erin.Gallagher@live.com", description: "Hi my name is Erin Gallagher"},
            {firstName: "Anthony", lastName: "Lionti", userEmail: "Anthony.Lionti@live.com", description: "Hi my name is Anthony Lionti"}
        ];

        //retrieve all users in the system
        apiService.getUsersList = function(){
            var q = $q.defer();
            q.resolve(apiService.users);
            return q.promise;
        }
       
        // ---- STATS ---- //

                    apiService.eventData = [{
                            "month": "January",
                            "count": 3,
                            "attendees": 8,
                            "lineColor": "#FF0F00"
                        }, {
                            "month": "February",
                            "count": 5,
                            "attendees": 10,
                            "lineColor": "#FF6600"
                        }, {
                            "month": "March",
                            "count": 6,
                            "attendees": 14,
                            "lineColor": "#FF9E01"
                        }, {
                            "month": "April",
                            "count": 8,
                            "attendees": 17,
                            "lineColor": "#FCD202"
                        }, {
                            "month": "May",
                            "count": 10,
                            "attendees": 20,
                            "lineColor": "#F8FF01"
                        }, {
                            "month": "June",
                            "count": 12,
                            "attendees": 30,
                            "lineColor": "#B0DE09"
                        }, {
                            "month": "July",
                            "count": 16,
                            "attendees": 40,
                            "lineColor": "#04D215"
                        }, {
                            "month": "August",
                            "count": 15,
                            "attendees": 40,
                            "lineColor": "#0D8ECF"
                        }, {
                            "month": "September",
                            "count": 17,
                            "attendees": 45,
                            "lineColor": "#0D52D1"
                        }, {
                            "month": "October",
                            "count": 12,
                            "attendees": 30,
                            "lineColor": "#2A0CD0"
                        }, {
                            "month": "November",
                            "attendees": null,
                            "count": null
                        }, {
                            "month": "December",
                            "attendees": null,
                            "count": null
                        }];

        // get number of events grouped by each month
        // for the selected year
        apiService.getEventsCount = function(year) {
            console.log("Reached API Service Events Count");
            var q = $q.defer();
            q.resolve(apiService.eventData);
            return q.promise;

        };

        apiService.volunteerData = [{
                        "month": "January",
                        "volunteers": 20,
                        "color": "#FF0F00"
                    }, {
                        "month": "February",
                        "volunteers": 22,
                        "color": "#FF6600"
                    }, {
                        "month": "March",
                        "volunteers": 21,
                        "color": "#FF9E01"
                    }, {
                        "month": "April",
                        "volunteers": 22,
                        "color": "#FCD202"
                    }, {
                        "month": "May",
                        "volunteers": 24,
                        "color": "#F8FF01"
                    }, {
                        "month": "June",
                        "volunteers": 26,
                        "color": "#B0DE09"
                    }, {
                        "month": "July",
                        "volunteers": 30,
                        "color": "#04D215"
                    }, {
                        "month": "August",
                        "volunteers": 31,
                        "color": "#0D8ECF"
                    }, {
                        "month": "September",
                        "volunteers": 28,
                        "color": "#0D52D1"
                    }, {
                        "month": "October",
                        "volunteers": 26,
                        "color": "#2A0CD0"
                    }, {
                        "month": "November",
                        "volunteers": 0,
                        "color": "#8A0CCF"
                    }, {
                        "month": "December",
                        "volunteers": 0,
                        "color": "#CD0D74"
                    }];
        // get num of volunteers in the org
        // grouped by each month for the selected year
        apiService.getNumVolunteers = function(year) {
            console.log("Reached API Service Num Volunteers");
            var q = $q.defer();
            q.resolve(apiService.volunteerData);
            return q.promise;

        };


        apiService.loginData = [{
                            "month": "January",
                            "logins": 30,
                            "lineColor": "#FF0F00"
                        }, {
                            "month": "February",
                            "logins": 31,
                            "lineColor": "#FF6600"
                        }, {
                            "month": "March",
                            "logins": 30,
                            "lineColor": "#FF9E01"
                        }, {
                            "month": "April",
                            "logins": 34,
                            "lineColor": "#FCD202"
                        }, {
                            "month": "May",
                            "logins": 40,
                            "lineColor": "#F8FF01"
                        }, {
                            "month": "June",
                            "logins": 58,
                            "lineColor": "#B0DE09"
                        }, {
                            "month": "July",
                            "logins": 73,
                            "lineColor": "#04D215"
                        }, {
                            "month": "August",
                            "logins": 94,
                            "lineColor": "#0D8ECF"
                        }, {
                            "month": "September",
                            "logins": 82,
                            "lineColor": "#0D52D1"
                        }, {
                            "month": "October",
                            "logins": 60,
                            "lineColor": "#2A0CD0"
                        }, {
                            "month": "November",
                            "logins": null
                        }, {
                            "month": "December",
                            "logins": null
                        }];
        // get num of logins (join to the login log table)
        // grouped by each month for the selected year
        apiService.getLoginActivity = function(year) {
            console.log("Reached API Service Login Activity");
            var q = $q.defer();
            q.resolve(apiService.loginData);
            return q.promise;

        };

        return apiService;
    }
})();