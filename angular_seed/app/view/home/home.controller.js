(function (){
    'use strict';
    angular.module('faver.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope','uiCalendarConfig','EventService'];

    function HomeController($scope,uiCalendarConfig,EventService){
        var vm = this;
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        $scope.events = EventService.monthlyEvents;

        $scope.eventSources = [$scope.events];

        $scope.alertOnEventClick = function( date, jsEvent, view){
            console.log("clicked");
        };


        /* config object */
        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                left: 'title',
                center: '',
                right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

        //on page load retirve events for given month   
        EventService.getMonthlyEvents(date);

    }
})();