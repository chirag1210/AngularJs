var mymodule=angular.module("ht",[]);

mymodule.controller('mycontroller', function($scope){
	$scope.name='Chirag';
	$scope.detail = function() {
       return "Hello " + $scope.name;;
	};
})