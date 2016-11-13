(function() {

    var app = angular.module("myApp", []);

    app.directive("newDirective", function() {
        return {
        	restrict: 'C',
            template: "<h3>By default, Directives apply to Elements and Attributes</h3>",
        };
    });
    /* Elements 	E, Attributes	A, Class		C */

}());
