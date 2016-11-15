angular.module('starter.controllers', [])
    .controller('StudentController', function($scope, dateService) {
    	function Student(name, address, dob) {
    	    this.name = name;
    	    this.address = address;
    	    this.dob = dateService.formatDate(dob);
    	    this.getAge = function() {
    	    	return dateService.calculateAge(this.dob);
    	    };
    	}

		
        $scope.students = [
        	new Student("Tom", "Galway", "November 19th 1995"),
        	new Student("John", "Tuam", "August 11th 1996"),
        	new Student("Mary", "Balinasloe", "September 1st 1995"),
        	new Student("Fred", "Athenry", "August 11th 1994")
        ];
    })
    .controller('GMITController', function($scope, dateService){

    	$scope.GMIT = {
    		name: "Galway-Mayo Institute of Technology",
    		address: ["Galway, Letterfrack,", "Mountbellew, Castlebar"],
    		founded: dateService.formatDate("September 18th 1972")
    	};
    	$scope.GMIT.getCurrentAge = function () {    		
    		return dateService.calculateAge(this.founded);
    	};
    });
