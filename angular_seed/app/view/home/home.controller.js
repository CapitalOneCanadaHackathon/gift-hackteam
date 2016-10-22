(function (){
    'use strict';
    angular.module('faver.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope','uiCalendarConfig'];

    function HomeController($scope,uiCalendarConfig){
        var vm = this;

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        //this should be displayed

        $scope.events = [
            {title: 'All Day Event',start: new Date(y, m, 1)},
            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
            {title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
            {title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
            {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
            {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29)}
        ];

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

    }
})();