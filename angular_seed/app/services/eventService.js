(function (){
    'use strict';
    angular.module('faver.home').service('EventService', EventService);

    EventService.$inject = [];

    function EventService(){

        var eventService = {};
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        eventService.monthlyEvents = [ {title: 'All Day Event',start: new Date(y, m, 1)},
            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
            {title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
            {title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
            {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
            {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29)}];

        return eventService;
    }
})();