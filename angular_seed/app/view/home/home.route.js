(function (){
    'use strict';

    var routerApp = angular.module('faver.home');
    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/view/home/home.html',
            controller: 'HomeController',
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