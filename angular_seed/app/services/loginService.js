(function (){
    'use strict';
    angular.module('faver.core').service('LoginService', LoginService);

    LoginService.$inject = ['$q','ApiService'];

    function LoginService($q,ApiService){

        var loginService = {};

        loginService.validate = function(email,password) {
            var q = $q.defer();
            ApiService.validateLoginCredentials(email,password)
                .then(function(){
                    q.resolve();
                },
                function(err){
                    alert("error could not attend event");
                    q.reject();
                });
            return q.promise;
        }


        return loginService;
    }
})();