(function (){
    'use strict';
    angular.module('faver.login').controller('LoginController', LoginController);

	LoginController.$inject = [];
	
    function LoginController(){
        var vm = this;
		
		
		vm.submit = function () {
			console.log(vm.username);
			console.log(vm.password);
		}
   
    }
	
})();