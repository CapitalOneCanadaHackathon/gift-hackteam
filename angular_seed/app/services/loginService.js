(function (){
    'use strict';
    angular.module('faver.core').service('LoginService', LoginService);

    LoginService.$inject = ['$q','ApiService','$sessionStorage','$state'];

    function LoginService($q,ApiService,$sessionStorage,$state){

        var loginService = {};

        loginService.validate = function(email,password) {
            var q = $q.defer();
            ApiService.validateLoginCredentials(email,password)
                .then(function(data){
                    var newData = data.data;
                    if(data.data == ""){ //determine if validated
                        q.reject();
                    }else{
                        var userInfo = {
                            userID:newData.userId,
                            userInfo:newData.userType
                        };
                        q.resolve(userInfo);
                    }
                    
                },
                function(err){
                    //alert("error could not attend event");
                    q.reject();
                });
            return q.promise;
        }

        //confirm that the user has logged and has a userID
        loginService.confirmSession = function() {
            if($sessionStorage.userID == undefined){
                $state.go("login");
            }
            else{
                console.log("session valid");
            }
        }


        return loginService;
    }
})();