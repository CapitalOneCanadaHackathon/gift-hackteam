(function (){
    'use strict';

    var routerApp = angular.module('faver.createAccount');
    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('create-account', {
            url: '/create-account',
            templateUrl: 'app/view/createAccount/createAccount.html',
            controller: 'CreateAccountController',
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