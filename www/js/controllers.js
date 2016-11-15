angular.module('starter.controllers', [])
    .controller('PresidentsController', function($scope, presidentService) {
    	
        presidentService.getPresidents(
        	function(presidents){
        		$scope.presidents = presidents;
        	},
        	function(errorStatus, errorStatusText) {
        		$scope.errorMsg = "ERROR: ";
        		$scope.errorStatus = errorStatus;
        		$scope.errorStatusText = errorStatusText;
        	}
        	);
    });
   