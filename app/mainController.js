(function(){
	"use strict";
	angular
		.module("myApp")
		.controller("MainController", MainController);

	function MainController(){
		var vm = this;
		vm.helloMessage = "string";
	}
}());