(function (){
    'use strict';

    var routerApp = angular.module('faver.profile');
    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('profile', {
            url: '/profile',
            templateUrl: 'app/view/profile/profile.html',
            controller: 'profileController',
            controllerAs: 'vm'
        })
        /*
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('login', {
            // we'll get to this in a bit       
        });
        */
});
    
})();