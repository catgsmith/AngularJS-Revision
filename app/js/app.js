angular.module("myApp", [])
.controller('MainController', function($scope) { 

    $scope.getReply  = function () {
        $scope.name = prompt('Enter your name / email'); //gerard.harrison@gmit.ie
    };

    $scope.selectChars = function (numString) {
        var num = 1;
        if (numString !== null && !isNaN(numString)) {
            num = Number(numString);
        }

        var chars = [];
        for(var i=num-1; i < $scope.name.length; i+=num ) {
            chars.push($scope.name.charAt(i));
        }
        $scope.selected = chars.join("");
    };
});
