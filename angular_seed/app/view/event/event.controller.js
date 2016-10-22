(function (){
    'use strict';
    angular.module('faver.event').controller('EventController', EventController);

    EventController.$inject = ['EventService'];

    function EventController(EventService){
        var vm = this;
        vm.events = {};
        vm.events.eventInfo = EventService.eventInfo;
        vm.events.eventInfo.volunteersRequired = EventService.volunteersRequired

        vm.events.attendees = EventService.eventAttendees;

        vm.events.description = "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
        //retirve attendees given an event ID
        EventService.getAttendees();

        //updates the total number of people who visited the event
        //and who visited the event in logs
        EventService.visitedEvent();

        //have that user added to the attendee list
        //once successfully added, get new attendee list
        vm.events.attendEvent = function(){
            EventService.attendEvent()
                .then(function(){
                     EventService.getAttendees();
                },
                function(err){
                });
        }

        //have that user removed to the attendee list
        //once successfully removed, get new attendee list
        vm.events.leaveEvent = function(){
            EventService.leaveEvent()
                .then(function(){
                     EventService.getAttendees();
                },
                function(err){
                });
        }
        
    }
})();