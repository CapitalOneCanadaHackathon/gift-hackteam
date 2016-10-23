(function (){
    'use strict';
    angular.module('faver.core').service('LoginService', LoginService);

    LoginService.$inject = ['$q','ApiService'];

    function LoginService($q,ApiService){

        var loginService = {};

        loginService.validate = function(email,password) {
            var q = $q.defer();
            ApiService.validateLoginCredentials(email,password)
                .then(function(userID){
                    q.resolve(userID);
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