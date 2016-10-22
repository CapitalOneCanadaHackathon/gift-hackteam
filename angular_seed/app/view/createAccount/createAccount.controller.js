(function (){
    'use strict';
    angular.module('faver.createAccount').controller('CreateAccountController', CreateAccountController);
	
	CreateAccountController.$inject = [];

    function CreateAccountController(){
        var vm = this;
		
		vm.submit = function () {
			console.log(vm.code);
		}
        
        
    }
})();