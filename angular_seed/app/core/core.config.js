(function (){
    'use strict';
    var core = angular.module('seedApp.core');

    core.config(configure);
    

    configure.$inject = ['$urlRouterProvider'];

    function configure($urlRouterProvider){
        //$urlRouterProvider.otherwise('/page1');
    }

})();