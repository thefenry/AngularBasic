(function() {

  var myApp = angular.module('githubViewer', []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    };

    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    }


    $scope.username = "angular";
    $scope.message = "Angular Github Viewer!";

  };

  myApp.controller('MainController', ["$scope", "$http", MainController]);


}());