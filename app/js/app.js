(function() {

    var app = angular.module("myApp", []);

    app.directive("myCustomTemplate", function() {
        return {
            restrict: 'E',
            templateUrl: "template1.html"
        };
    });

}());

