angular.module("myApp", [])
    .controller('MainController', function($scope) {  
        $scope.Connaught = {
	    population: 545000,
	    numCounties: 5,
	    counties: ["Galway", "Leitrim", "Mayo", "Roscommon","Sligo"],
	    largestTown: "Galway",
	    founded: new Date("November 12, 988"),
	    avgIndWage: 36500.00
	  };
    });
