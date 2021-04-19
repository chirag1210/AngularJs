var mymodule = angular.module("ht", []);

mymodule.controller("personCtrl", function($scope) {

	var employees = [{
			firstName: "Chirag",
			lastName: "Chaudhari",
			dateOfBirth: new Date("November 23, 1980"),
			gender: "Male",
			salary: 5500.788
		},
		{
			firstName: "Komal",
			lastName: "Chaudhari",
			dateOfBirth: new Date("May 05, 1970"),
			gender: "Female",
			salary: 5800
		},
		{
			firstName: "Srushti",
			lastName: "Chaudhari",
			dateOfBirth: new Date("June 15, 1974"),
			gender: "Male",
			salary: 57000
		},
		{
			firstName: "Prabhakar",
			lastName: "Chaudhari",
			dateOfBirth: new Date("December 15, 1974"),
			gender: "Male",
			salary: 100000
		},
		{
			firstName: "Jayashri",
			lastName: "Chaudhari",
			dateOfBirth: new Date("August 30, 1974"),
			gender: "Female",
			salary: 500000
		},
		{
			firstName: "Neha",
			lastName: "Chaudhari",
			dateOfBirth: new Date("November 15, 1984"),
			gender: "Female",
			salary: 599000
		}

	];

	$scope.employees = employees;
	$scope.rowlimit = 3

});