(function (){
    'use strict';
    angular.module('faver.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope','$state','uiCalendarConfig','EventService'];

    function HomeController($scope,$state,uiCalendarConfig,EventService){
        var vm = this;
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        $scope.events = EventService.monthlyEvents;

        $scope.eventSources = [$scope.events];

        //go to events page and display this events' info
        $scope.alertOnEventClick = function(eventObj, jsEvent, view){
            EventService.eventInfo = {
                title:eventObj.title,
                start: new Date(eventObj.start),
                end: new Date(eventObj.end),
                eventID: eventObj.eventID,
                type: eventObj.type,
                location: eventObj.location, 
                description: eventObj.description,
                createdBy: eventObj.createdBy,
                numVolunNeeded: eventObj.numVolunNeeded,
                allDay:eventObj.allDay
            };
            $state.go("event");
        };


        /* config object */
        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                left: '',
                center: 'title',
                right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

        //on page load retirve events for given month   
        EventService.getMonthlyEvents();

    }
})();