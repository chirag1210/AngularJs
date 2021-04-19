var mymodule=angular.module("ht",[]);

mymodule.controller("personCtrl", function($scope) {
   
    var employee = {
    	fname:'chirag',
        lname: 'chaudhari'
    };

    $scope.employee = employee; 
});