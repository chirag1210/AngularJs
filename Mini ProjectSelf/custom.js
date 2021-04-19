var mymodule = angular.module("ht", []);

mymodule.controller("personCtrl", function($scope, $http) {

	$http.get("https://covid19.mathdro.id/api").then(function mySuccess(response) {
		$scope.confirmed = response.data.confirmed.value;
		$scope.recovered = response.data.recovered.value;
		$scope.deaths = response.data.deaths.value;
	}, function myError(response) {
		console.log("error " + response.data);
	});

	$scope.changeCountry = function() {
		console.log($scope.country);

		$http.get("https://covid19.mathdro.id/api/countries/" + $scope.country).then(function mySuccess(response) {
			$scope.confirmed1 = response.data.confirmed.value;
			$scope.recovered1 = response.data.recovered.value;
			$scope.deaths1 = response.data.deaths.value;
		}, function myError(response) {
			console.log("error " + response.data);
		});

	}

	$http.get("https://www.w3schools.com/angular/customers.php").then(function mySuccess(response) {
		$scope.records = response.data.records;
		console.log("records " + $scope.records);
	}, function myError(response) {
		console.log("error " + response.data);
	});


});