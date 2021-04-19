var mymodule = angular.module("ht", []);

mymodule.controller("personCtrl", function($scope) {
	$scope.name = "hello";

	$scope.showMsg = function() {
		alert($scope.name);
	};

	var employee = {
		fname: "Chirag",
		lname: "Chaudhari"
	};

	$scope.employee = employee;

	$scope.showMsg = function() {
		alert($scope.employee.fname);
	};
});