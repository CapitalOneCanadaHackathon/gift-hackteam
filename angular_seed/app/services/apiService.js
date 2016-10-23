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