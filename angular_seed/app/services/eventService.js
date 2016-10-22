(function (){
    'use strict';
    angular.module('faver.core').service('EventService', EventService);

    EventService.$inject = ['$q','ApiService'];

    function EventService($q,ApiService){

        var eventService = {};

        eventService.monthlyEvents = [];
        eventService.eventAttendees = [];
        eventService.eventInfo = {
            eventName:"Volunteer Meeting",
            firstName:"Erin",
            lastName:"Gallagher",
            date:"October 24th, 2016",
            start:"6pm",
            end:"8pm",
            location:"123 adress st.",
            volunteersRequired:0
         };
         eventService.numberOfVolunteers = 0;

        
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
                    alert("error retrieving events");
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

        //returns the list of attendees for an event
        eventService.getAttendees = function() {
            ApiService.getAttendees(eventService.eventInfo.eventID)
                .then(function(data){
                    var numEvents = eventService.eventAttendees.length;
                   eventService.eventAttendees.splice(0,numEvents);
                    eventService.eventInfo.volunteersRequired = 0;
                     eventService.numberOfVolunteers = 0;
				    for(var i = 0; i<data.length; i++){//add events to array one by one
                       eventService.eventAttendees.push(data[i]);
                       eventService.numberOfVolunteers ++;
                    }
                    eventService.eventInfo.volunteersRequired = eventService.eventInfo.numVolunNeeded - eventService.numberOfVolunteers;
                    console.log(eventService.eventInfo.volunteersRequired);
            },
                function(err){
                    alert("error retrieving attendees");
                });
        }

        //adds the current user to the attendee list for an event
        eventService.attendEvent = function() {
            var q = $q.defer();
            ApiService.attendEvent(eventService.eventInfo.eventID)
                .then(function(){
                    q.resolve();
                },
                function(err){
                    alert("error could not attend event");
                    q.reject();
                });
            return q.promise;
        }

        //leaves the current event and remove user from attendee list
        eventService.leaveEvent = function() {
            var q = $q.defer();
            ApiService.leaveEvent(eventService.eventInfo.eventID)
                .then(function(){
                    q.resolve();
                },
                function(err){
                    alert("error could not attend event");
                    q.reject();
                });
            return q.promise;
        }

        

        //updates the total number of people who visited the event
        //and who visited the event in logs
        eventService.visitedEvent = function() {
            ApiService.visitedEvent(eventService.eventInfo.eventID);
        }


        return eventService;
    }
})();