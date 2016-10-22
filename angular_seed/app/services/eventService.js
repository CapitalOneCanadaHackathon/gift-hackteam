(function (){
    'use strict';
    angular.module('faver.home').service('EventService', EventService);

    EventService.$inject = ['ApiService'];

    function EventService(ApiService){

        var eventService = {};

        eventService.monthlyEvents = [];

        
        //retrieve all events for the given month and all future months
        eventService.getMonthlyEvents = function(date) {
            ApiService.getMonthlyBookings(date)
                .then(function(data){
                    //must remove old bookings before trying to add new ones
                    var numEvents = eventService.monthlyEvents.length;
		            eventService.monthlyEvents.splice(0,numEvents);
				    for(var i = 0; i<data.length; i++){//add events to array one by one
                        eventService.monthlyEvents.push(data[i]);
                    }
                },
                function(err){
                    alert("error with getAllGroups");
                });
	    }
        return eventService;
    }
})();