
var myApp = angular.module('githubViewer', []);

myApp.controller('MainController', ['$scope', function($scope) {
  
  var person = {
    firstName:"Ivan",
    lastName:"Sued",
    imageSrc: "https://avatars.githubusercontent.com/u/5784034?v=2"
  };
  
    $scope.message = "Hello, Angular";
    $scope.person = person;
}]);