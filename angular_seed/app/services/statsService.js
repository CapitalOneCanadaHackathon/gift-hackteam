(function (){
    'use strict';
    angular.module('faver.core').service('StatsService', StatsService);

    StatsService.$inject = ['$q', 'ApiService'];

    function StatsService($q, ApiService){

        var statsService = {};
        statsService.eventsCountData = [];
        statsService.volunteerData = [];
        statsService.loginData = [];

        statsService.getEventsCountData = function(year) {
            var q = $q.defer();

            ApiService.getEventsCount(year)
                .then(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        statsService.eventsCountData.push(data[i]);
                        // adminService.editUsersList.push(data[i]);
                    }
                    q.resolve(statsService.eventsCountData);
                }, function(err) {
                    alert("Error retrieving events count data");
                    q.defer();
                });

            return q.promise;

        };

        statsService.getVolunteerData = function(year) {

            var q = $q.defer();

            ApiService.getNumVolunteers(year)
                .then(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        statsService.volunteerData.push(data[i]);
                        // adminService.editUsersList.push(data[i]);
                    }
                    q.resolve(statsService.volunteerData);
                }, function(err) {
                    alert("Error retrieving number of volunteers data");
                    q.defer();
                });

            return q.promise;

        };

        statsService.getLoginData = function(year) {

            var q = $q.defer();

            ApiService.getLoginActivity(year)
                .then(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        statsService.loginData.push(data[i]);
                        // adminService.editUsersList.push(data[i]);
                    }
                    q.resolve(statsService.loginData);
                }, function(err) {
                    alert("Error retrieving login data");
                    q.defer();
                });

            return q.promise;

        };

        // IGNORE. (service initially to get list of years)

        // statsService.eventsYears = [];
        // statsService.getEventsYears = function() {
        //     var q = $q.defer();
        //     ApiService.getEventsYears()
        //         .then(function(data) {
        //             for (var i = 0; i < data.length; i++) {
        //                 statsService.eventsYears.push(data[i]);
        //                 // adminService.editUsersList.push(data[i]);
        //             }
        //             q.resolve(statsService.eventsYears);
        //         }, function(err) {
        //             alert("Error retrieving events years data");
        //             q.defer();
        //         });
        //         return q.promise;
        // };

        return statsService;
    }
})();