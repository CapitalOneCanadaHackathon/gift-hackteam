(function (){
    'use strict';
    angular.module('faver.stats').controller('StatsController', StatsController);

    function StatsController(LoginService){
        var vm = this;
        
        //confirm the user has logged in on page load
        //TODO: should do this and confirm before making database calls
        LoginService.confirmSession();
        
        
    }
})();