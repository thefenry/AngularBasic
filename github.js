(function() {
  var module = angular.module("githubViewer");

  var github = function($http) {
    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepoDetails = function(username, reponame) {
      var repo;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

      return $http.get(repoUrl).then(function(response) {
        repo = response.data;
        return $http.get(repoUrl + "/collaborators");
      })
        .then(function(response) {
          repo.collaborator = response.data;
          return repo;
        });
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };

  };

  module.factory("github", github);
}());