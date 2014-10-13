
var myApp = angular.module('spicyApp1', []);

myApp.controller('MainController', ['$scope', function($scope) {
  
  var person = {
    firstName:"Ivan",
    lastName:"Sued",
    imageSrc: "https://github.com/thefenry?tab=repositories"
  };
  
    $scope.message = "Hello, Angular";
    $scope.person = person;
}]);