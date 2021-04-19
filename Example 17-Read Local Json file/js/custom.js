var myApp = angular.module("myApp", []);

myApp.controller("jsonCtrl", function($scope, $http) {

	$scope.message = "chirag";

	$http.get("js/employee.json").then(function(response) {
		$scope.employees = response.data;
	}, function(response) {
		console.log("error " + response.data);
	});
});