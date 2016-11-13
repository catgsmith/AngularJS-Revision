(function() {

    var app = angular.module("myApp", []);

    app.directive("myFirstDirective", function() {
        return {
            template: "<h4>This is My First Directive</h4>",
        };
    });

}());
