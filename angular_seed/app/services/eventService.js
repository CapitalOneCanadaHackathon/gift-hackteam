(function (){
    'use strict';
    angular.module('faver.core').service('EventService', EventService);

    EventService.$inject = ['ApiService'];

    function EventService(ApiService){

        var eventService = {};

        eventService.monthlyEvents = [];

        
        //retrieve all events
        eventService.getMonthlyEvents = function() {
            ApiService.getMonthlyBookings()
                .then(function(data){
                    //must remove old bookings before trying to add new ones
                    var numEvents = eventService.monthlyEvents.length;
		            eventService.monthlyEvents.splice(0,numEvents);
				    for(var i = 0; i<data.length; i++){//add events to array one by one
                        var colour = eventService.pickEventColour(data[i].type);
                        data[i].color = colour;
                        eventService.monthlyEvents.push(data[i]);
                    }
                    console.log(eventService.monthlyEvents);
                },
                function(err){
                    alert("error with getAllGroups");
                });
	    }

        eventService.pickEventColour = function(type) {
            if(type == "volunteer-meeting"){
                return '#6371C6';
            }
            else if (type == "social"){
                return '#37a3fb';
            }
            else if (type == "lunch"){
                return '#2ca09e';
            }
            else if (type == "board-meeting"){
                return '#990D6F';
            }
            else if (type == "family-meeting"){
                return '#5931b4';
            }
            else if (type == "board-meeting"){
                return '#5931b4';
            }
            else {
                return '#2EB671';
            }
        }


        return eventService;
    }
})();