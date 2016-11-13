angular.module("myApp",[])

.directive('myFirstDirective', function() {
  return { template: 
  "<h4>This is My First Directive</h4>"
  };
});