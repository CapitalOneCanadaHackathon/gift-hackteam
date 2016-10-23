(function () {
    'use strict';
    angular.module('faver.core').service('ApiService', ApiService);

    ApiService.$inject = ['$q', '$http'];

    function ApiService($q, $http) {

        var apiService = {};
        var userInfo = {//TODO remove once real data is returned 
            userID:"1",
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
        ];

        //retrieve all events
        apiService.getMonthlyBookings = function () {
            // var q = $q.defer();
            // q.resolve(apiService.monthlyEvents);
            // return q.promise;

            //var promisePost = 
            // $http({
            //     method: 'POST',
            //     url: '/api/postTest',
            //     data: {"name": 1, "id": 2222}
            // }).then(function successCallback(response) {
            //     console.log("worked!");
            // }, function errorCallback(response) {
            //     console.log("error has occurred!");
            // });
		    
            // var promisePost = $http({
            //     method: 'GET',
            //     url: '/api/getEvents',
            // }).then(function successCallback(response) {
            //     console.log(response);
            //     apiService.monthlyEvents = response.data;
            //     console.log(apiService.monthlyEvents);
            // }, function errorCallback(response) {
            //     console.log("error has occurred!");
            // });


             var promisePost = $http.get('/api/getEvents', {})
                  .success(function(data, status) {
                  })
                  .error(function(data, status) {
                     console.log("Error has occured!");
                  });
  
  		    return promisePost;
        }

        // apiService.attendees = [
        //     // { firstName: "Erin", lastName: "Gallagher", userID:"123ecg" },
        //     // { firstName: "Rebeccaa", lastName: "Song", userID:"122dewg" },
        //     // { firstName: "Mark", lastName: "Water", userID:"3ecweg" },
        //     // { firstName: "Annelise", lastName: "Jade", userID:"574ecg" }
        // ];

        //returns the list of attendees for an event
        apiService.getAttendees = function (eventID) {
            //hardcoded userid
            var promisePost = $http.post('api/getAttendees', { "eventId" :eventID})
		    .success(function(data, status) {
                console.log(data);
		    })
		    .error(function(data, status) {
		    	return 'error';
   
		    });

    		return promisePost;
        }

        //adds the current user to the attendee list for an event
        //parameters: eventID, userID
        apiService.attendEvent = function (eventID,userID) {

            console.log(userID);
            var promisePost = $http.post('api/attendEvent', { "eventId" :eventID, "userId": userID})
		    .success(function(data, status) {
                console.log(data);
		    })
		    .error(function(data, status) {
		    	return 'error';
		    });

    		return promisePost;
        }

         //leaves the current event and remove user from attendee list
         //parameters: eventID, userID
        apiService.leaveEvent = function (eventID,userID) {
           
            console.log(eventID);
            var promisePost = $http.post('api/leaveEvent', { "eventId" :eventID, "userId": userID})
		    .success(function(data, status) {
                console.log(data);
		    })
		    .error(function(data, status) {
		    	return 'error';
		    });

    		return promisePost;
        }

        //updates the total number of people who visited the event
        //and who visited the event in logs
        //parameters: eventID, userID
        apiService.visitedEvent = function (eventID) {
            var promisePost = $http.post('api/visitedEventPage', { "eventId" :eventID})
		    .success(function(data, status) {
                console.log(data);
		    })
		    .error(function(data, status) {
		    	return 'error';
		    });
            console.log("user visited page, updating db....");
    		return promisePost;
            
        }

        // ---- ADMIN ---- //

        // for the account creation code
        apiService.keyCode = { 
            "date": new Date("2016/10/22"),
            "key": "AfL24Jfm1GKLylme234Po63M"  
        };

        apiService.updateKey = function(key){
            var promisePost = $http.post('api/updateKey', { "key" :key})
		    .success(function(data, status) {
                console.log(data);
		    })
		    .error(function(data, status) {
		    	return 'error';
		    });
            
    		return promisePost;
            
        };

        apiService.getKeyCode = function() {

            // var q = $q.defer();
            // q.resolve(apiService.keyCode);
            // return q.promise;
            var promisePost = $http.post('api/adminInfo')
		    .success(function(data, status) {
                console.log(data);
		    })
		    .error(function(data, status) {
		    	return 'error';
		    });
            
    		return promisePost;
                
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

        return apiService;
    }
})();