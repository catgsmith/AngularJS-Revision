angular.module('starter.services', [])
.service('ageService', function() {

    this.getAgeNextYear = function(age) {

    return ++age;
  };
});
