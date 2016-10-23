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
            myStory:"I worked as a programmer for 3 years, which made for a easy transition into technical writing at the end of 2011. I found that having a background in Computer Science with a penchant for  english language gave me the wherewithal to succeed in this field. When I got into technical writing, I found that I enjoyed translating complex, jargon-driven technical information into everyday language that anyone could easily understand. Because I came from a programming background, I was able to translate ideas while keeping their scientific integrity.",
            tag:"#hackathon"
        };

        //Retreive user profile
        apiService.getUserProfile = function(){
            var q = $q.defer();
            q.resolve(apiService.userProfile);
            return q.promise;
        }

        apiService.users = [
            {firstName: "Frank", lastName: "Kang", userEmail: "Frank.Kang@live.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus sed mi imperdiet facilisis id faucibus tortor. Nullam accumsan lorem a aliquet aliquam. Ut porta sem sed orci porttitor, in ornare eros tempor. Vestibulum sollicitudin orci at risus rutrum congue. Suspendisse venenatis facilisis purus, id dignissim ex vulputate vel. Quisque euismod fringilla volutpat. Vivamus et quam sed dui suscipit egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque felis dui, pretium a libero id, efficitur auctor ipsum. Vivamus purus tellus, pretium sit amet facilisis eget, tincidunt vel magna. Suspendisse quis sollicitudin risus, ut finibus enim. Curabitur sem ante, vulputate at sollicitudin in, ornare quis velit. Fusce in dui eu urna feugiat lacinia vel ac enim. Aliquam ut tristique dolor. Curabitur imperdiet diam vel odio tincidunt, non molestie tellus ornare. Donec id diam fringilla, tempus dolor eu, ullamcorper metus. Morbi pellentesque ac ligula luctus tincidunt. Aenean maximus urna sed magna posuere, dapibus ullamcorper ex pellentesque."},
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

        return apiService;
    }
})();