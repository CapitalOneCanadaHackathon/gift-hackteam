(function (){
    'use strict';
    angular.module('faver.stats').controller('StatsController', StatsController);

    function StatsController(LoginService, StatsService){
        var vm = this;
        
        //confirm the user has logged in on page load
        //TODO: should do this and confirm before making database calls
        LoginService.confirmSession();
        
        vm.eventsYear = "2016";
        vm.growthYear = "2016";
        vm.loginYear = "2016";
        
        // Following commented functions were initially
        // to get the years for each graph's dropdowns

        // vm.eventsYears = [];
        // vm.getEventsYears = function() {
        //     StatsService.getEventsYears()
        //         .then(function(data) { 

        //          }, function(err) { 

        //          });
        // };

        // vm.getGrowthYears = function() {
        //     StatsService.getGrowthYears()
        //         .then(function(data) { 

        //          }, function(err) { 

        //          });
        // };

        // vm.getLoginYears = function() {
        //     StatsService.getLoginYears()
        //         .then(function(data) { 

        //          }, function(err) { 

        //          });
        // };

        vm.createGrowthReport = function() {

            StatsService.getVolunteerData(vm.growthYear)
                .then(function(volunteerData) {
                    var data = volunteerData;

                var chart = AmCharts.makeChart("growthChart", {
                    "type": "serial",
                    "theme": "light",
                    "marginRight": 70,
                    "dataProvider": data,
                    "valueAxes": [{
                        "axisAlpha": 0,
                        "position": "left",
                        "title": "Total Number of Volunteers"
                    }],
                    "startDuration": 1,
                    "titles":[
                        {
                            "text": "Number of Volunteers"
                        },
                        {
                            "text": vm.growthYear,
                            "bold": false
                        }
                    ],
                    "graphs": [{
                        "balloonText": "<b>[[category]]: [[value]]</b>",
                        "fillColorsField": "color",
                        "fillAlphas": 0.9,
                        "lineAlpha": 0.2,
                        "type": "column",
                        "valueField": "volunteers"
                    }],
                    "chartCursor": {
                        "categoryBalloonEnabled": false,
                        "cursorAlpha": 0,
                        "zoomable": false
                    },
                    "categoryField": "month",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "labelRotation": 45,
                        "title": "Month"
                    },
                    "export": {
                        "enabled": true
                    }

                    });

                    vm.showGrowth = 'true';
                    

                }, function(err) {
                    alert("Error occurred generating volunteer report");
                });
        };

        vm.createLoginReport = function(year) {

            StatsService.getLoginData(vm.loginYear)
                .then(function(loginData) {

                    var data = loginData;
                    var chart = AmCharts.makeChart("loginChart", {
                            "type": "serial",
                            "theme": "light",
                            "marginRight": 70,
                            "dataProvider": data,
                            "valueAxes": [{
                                "axisAlpha": 0,
                                "position": "left",
                                "title": "Number of Sign-Ins"
                            }],
                            "startDuration": 1,
                            "titles":[
                                {
                                    "text": "Number of Sign-Ins"
                                },
                                {
                                    "text": vm.loginYear,
                                    "bold": false
                                }
                            ],
                            "graphs": [{
                                "balloonText": "<b>[[category]]: [[value]]</b>",
                                "fillColorsField": "lineColor",
                                "lineColorField": "lineColor",
                                "bullet": "round",
                                "lineThickness": 3,
                                "bulletSize": 7,
                                "bulletBorderAlpha": 1,
                                "useLineColorForBulletBorder": true,
                                "bulletBorderThickness": 3,
                                "fillAlphas": 0,
                                "lineAlpha": 1,
                                "type": "line",
                                "valueField": "logins"
                            }],
                            "chartCursor": {
                                "categoryBalloonEnabled": false,
                                "cursorAlpha": 0,
                                "zoomable": false
                            },
                            "categoryField": "month",
                            "categoryAxis": {
                                "gridPosition": "start",
                                "labelRotation": 45,
                                "title": "Month"
                            },
                            "export": {
                                "enabled": true
                            }

                        });            

                    vm.showLogin = 'true';

                }, function(err){
                    alert("Error getting login data");
                });
        };

        vm.createEventsCountReport = function(year) {

            StatsService.getEventsCountData(vm.eventsYear)
                .then(function(eventCountData) { 

                    var data = eventCountData;

                    var chart = AmCharts.makeChart("eventsCountChart", {
                        "type": "serial",
                        "theme": "light",
                        "marginRight": 70,
                        "dataProvider": data,
                        "valueAxes": [{
                            "id": "eventsId",
                            "axisAlpha": 0,
                            "position": "left",
                            "title": "Number of Events",
                            "gridThickness": 0
                        }, {
                            "id": "attendanceId",
                            "axisAlpha": 0,
                            "position": "right",
                            "title": "Number of Attendees",
                            "gridThickness": 0
                        }],
                        "startDuration": 1,
                        "titles":[
                            {
                                "text": "Events Count"
                            },
                            {
                                "text": vm.eventsYear,
                                "bold": false
                            }
                        ],
                        "graphs": [{
                            "valueAxis": "eventsId",
                            "balloonText": "<b>Events: [[value]]</b>",
                            "fillColorsField": "lineColor",
                            "fillAlphas": 0.9,
                            "lineAlpha": 0.2,
                            "type": "column",
                            "valueField": "count"
                        }, {
                            "valueAxis": "attendanceId",
                            "balloonText": "<b>Attendees: [[value]]</b>",
                            "fillColor": "#FCD202",
                            "lineColor": "#88D202",
                            "bullet": "round",
                            "lineThickness": 3,
                            "bulletSize": 7,
                            "bulletBorderAlpha": 1,
                            "useLineColorForBulletBorder": true,
                            "bulletBorderThickness": 3,
                            "fillAlphas": 0,
                            "lineAlpha": 1,

                            "type": "line",
                            "valueField": "attendees"
                        }],
                        "chartCursor": {
                            "categoryBalloonEnabled": false,
                            "cursorAlpha": 0,
                            "zoomable": false
                        },
                        "categoryField": "month",
                        "categoryAxis": {
                            "gridPosition": "start",
                            "labelRotation": 45,
                            "title": "Month"
                        },
                        "export": {
                            "enabled": true
                        }

                        });  
                        vm.showEventsCount = 'true';
                                  
                }, function(err){ 
                    alert("Error retrieving event count data");
                });

        };

        vm.showEventsCount = 'false';

        vm.submitEventsYear = function() {
            vm.showEventsCount = 'true';
        };

        vm.showGrowth = 'false';
        vm.showLogin = 'false';

        vm.submitGrowthYear = function() {
            vm.showGrowth = 'true';
        };

        vm.submitLoginYear = function() {
            vm.showLogin = 'true';
        };

        // vm.createGrowthReport();
        // vm.createLoginReport();
        // vm.createEventsCountReport();
    }
})();