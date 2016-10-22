(function (){
    'use strict';

    var routerApp = angular.module('faver.event');
    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('event', {
            url: '/event',
            templateUrl: 'app/view/event/event.html',
            controller: 'EventController',
            controllerAs: 'vm'
        })
        /*
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('home', {
            // we'll get to this in a bit       
        });
       */ 
});
    
})();