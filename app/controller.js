(function () {
	"use strict";

	angular
		.module("productManagemenet")
		.controller("MyController", MyController);

	function MyController() {
		var vm = this;

		vm.message = "hello";
	}
}());