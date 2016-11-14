angular.module('starter.controllers', [])
    .controller('MainController', function($scope, ageService) {
		
        $scope.getAgeNextYear = function(ageString) {

            console.log("target MainController age" + ageString);
			$scope.result = "??";

            var age = parseInt(ageString);
            if (isNaN(age)) {     
            	console.log("You didn't enter a number");
            } else if (age < 0) {
                console.log("Number entered is invalid");   
       		} else {
       			$scope.result = ageService.getAgeNextYear(age);
       		}
        };
    });
