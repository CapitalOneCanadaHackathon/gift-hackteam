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
            {title: 'All Day Event',start: new Date(y, m, 1)},
            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
            {title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
            {title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
            {title: 'Birthday Party',start: new Date(y, m+1, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
            {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29)}
        ];

        //retrieve the events for the given month and all future months
        apiService.getMonthlyBookings = function(date){
            var q = $q.defer();
            q.resolve(apiService.monthlyEvents);
            return q.promise;

		}
        

        return apiService;
    }
})();