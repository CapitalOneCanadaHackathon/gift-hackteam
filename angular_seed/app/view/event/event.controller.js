(function (){
    'use strict';
    angular.module('faver.event').controller('EventController', EventController);

    function EventController(){
        var vm = this;
        vm.events = {};
        vm.events.eventName = "Volunteer Meeting";
        vm.events.firstName = "Erin";
        vm.events.lastName = "Gallagher";
        vm.events.date = "October 24th, 2016";
        vm.events.start = "6pm";
        vm.events.end = "8pm";
        vm.events.location = "123 adress st.";

        vm.events.attendees = [
            {firstName:"Erin", lastName:"Gallagher"},
            {firstName:"Rebeccaa", lastName:"Song"},
            {firstName:"Mark", lastName:"Water"},
            {firstName:"Annelise", lastName:"Jade"}
        ];

        vm.events.description = "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
        
    }
})();