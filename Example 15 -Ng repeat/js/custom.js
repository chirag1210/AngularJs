var mymodule = angular.module("ht", []);

mymodule.controller("personCtrl", function($scope) {

	var employees = [{
			FirstName: "Chirag",
			LastName: "Chaudhari",
			Gender: "Male",
			Salary: "20000"
		},
		{
			FirstName: "Komal",
			LastName: "Chaudhari",
			Gender: "Female",
			Salary: "20000"
		},
		{
			FirstName: "Srushti",
			LastName: "Chaudhari",
			Gender: "Female",
			Salary: "20000"
		}
	];

	$scope.employees = employees;



	var countries = [{
			countryName: "India",
			cities: [
				{ cityName: "Pune" },
				{ cityName: "Mumbai" },
				{ cityName: "Nashik" }
			]
		},
		{
			countryName: "US",
			cities: [
			    { cityName: "Califoria" },
				{ cityName: "New york" },
				{ cityName: "Las anjlis" }
			]
		}
	];

	$scope.countries = countries;



});