(function (){
    'use strict';
    angular.module('faver.stats').controller('StatsController', StatsController);

    function StatsController(){
        var vm = this;
        
        vm.createGrowthReport = function() {

            var chart = AmCharts.makeChart("growthChart", {
                "type": "serial",
                "theme": "light",
                "marginRight": 70,
                "dataProvider": [{
                    "month": "January",
                    "volunteers": 20,
                    "color": "#FF0F00"
                }, {
                    "month": "February",
                    "volunteers": 22,
                    "color": "#FF6600"
                }, {
                    "month": "March",
                    "volunteers": 21,
                    "color": "#FF9E01"
                }, {
                    "month": "April",
                    "volunteers": 22,
                    "color": "#FCD202"
                }, {
                    "month": "May",
                    "volunteers": 24,
                    "color": "#F8FF01"
                }, {
                    "month": "June",
                    "volunteers": 26,
                    "color": "#B0DE09"
                }, {
                    "month": "July",
                    "volunteers": 30,
                    "color": "#04D215"
                }, {
                    "month": "August",
                    "volunteers": 31,
                    "color": "#0D8ECF"
                }, {
                    "month": "September",
                    "volunteers": 28,
                    "color": "#0D52D1"
                }, {
                    "month": "October",
                    "volunteers": 26,
                    "color": "#2A0CD0"
                }, {
                    "month": "November",
                    "volunteers": 0,
                    "color": "#8A0CCF"
                }, {
                    "month": "December",
                    "volunteers": 0,
                    "color": "#CD0D74"
                }],
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
                        "text": "2016",
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

        };

        vm.createLoginReport = function() {


            var chart = AmCharts.makeChart("loginChart", {
                "type": "serial",
                "theme": "light",
                "marginRight": 70,
                "dataProvider": [{
                    "month": "January",
                    "logins": 30,
                    "lineColor": "#FF0F00"
                }, {
                    "month": "February",
                    "logins": 31,
                    "lineColor": "#FF6600"
                }, {
                    "month": "March",
                    "logins": 30,
                    "lineColor": "#FF9E01"
                }, {
                    "month": "April",
                    "logins": 34,
                    "lineColor": "#FCD202"
                }, {
                    "month": "May",
                    "logins": 40,
                    "lineColor": "#F8FF01"
                }, {
                    "month": "June",
                    "logins": 58,
                    "lineColor": "#B0DE09"
                }, {
                    "month": "July",
                    "logins": 73,
                    "lineColor": "#04D215"
                }, {
                    "month": "August",
                    "logins": 94,
                    "lineColor": "#0D8ECF"
                }, {
                    "month": "September",
                    "logins": 82,
                    "lineColor": "#0D52D1"
                }, {
                    "month": "October",
                    "logins": 60,
                    "lineColor": "#2A0CD0"
                }, {
                    "month": "November",
                    "logins": null
                }, {
                    "month": "Decemnber",
                    "logins": null
                }],
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
                        "text": "2016",
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
                    // "bulletColor": "#FFFFFF",
                    "useLineColorForBulletBorder": true,
                    "bulletBorderThickness": 3,
                    "fillAlphas": 0,
                    "lineAlpha": 1,

                    // "fillAlphas": 0.9,
                    // "lineAlpha": 0.2,
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

        };

        vm.createGrowthReport();
        vm.createLoginReport();
    }
})();