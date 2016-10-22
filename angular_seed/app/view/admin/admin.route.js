(function (){
    'use strict';

    var routerApp = angular.module('faver.admin');
    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/view/admin/admin.html',
            controller: 'AdminController',
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