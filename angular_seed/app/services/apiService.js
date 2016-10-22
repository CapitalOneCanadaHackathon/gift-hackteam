(function (){
    'use strict';
    angular.module('faver.core').service('ApiService', ApiService);

    ApiService.$inject = ['$q'];

    function ApiService($q){

        var apiService = {};
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

		}
        

        return apiService;
    }
})();