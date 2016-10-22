(function (){
    'use strict';

    var routerApp = angular.module('faver.userList');
    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('userList', {
            url: '/userList',
            templateUrl: 'app/view/userList/userList.html',
            controller: 'UserListController',
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