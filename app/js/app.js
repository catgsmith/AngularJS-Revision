angular.module("myApp", [])
    .controller('MainController', function($scope) {  
        $scope.names = [];
        $scope.addName = function( name ) {
        	var isFound = false;
        	for(var i=0; i < $scope.names.length; i++){
        		if($scope.names[i] === name) {
        			isFound = true;
        			break;
        		}
        	}
        	// add name to array
        	if (!isFound) {
        		$scope.names.push(name);
        	} else {
        		console.log("ng-repeat crashes if duplicates found");
        	}
        };
        $scope.removeName  = function (name) {
        	for(var i=0; i < $scope.names.length; i++){
        		if($scope.names[i] === name) {
        			$scope.names.splice(i,1);
        			break;
        		}
        	}
        };
        $scope.removeLastName = function(){
        	if($scope.names.length > 0 ) {
        		var name = $scope.names.pop();
        		console.log('Removed '+ name +' from the list');
        	}
        };
    });
