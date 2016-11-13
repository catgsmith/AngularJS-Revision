angular.module("myApp",[])

.directive('myGmit', function() {
  return { template: 
  "<h2>GMIT</h2>Schools:"+ "<ol><li>Science</li>" +
    "<li>Engineering</li><li>Business</li></ol>"
  };
})

.directive('gmitScience', function(){
  return { template: 
    "<h2>School of Science</h2>"
  };
});