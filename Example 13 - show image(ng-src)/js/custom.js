var mymodule=angular.module("ht",[]);

mymodule.controller("personCtrl", function($scope) {
   
    var employee = {
    	fname:'chirag',
        lname: 'chaudhari',
        profileUrl: 'js/ic_splash.png'
    };

    $scope.employee = employee; 
});