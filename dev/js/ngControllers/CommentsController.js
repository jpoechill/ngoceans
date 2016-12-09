// CommentsController
app.controller('CommentsController', ['$scope', 'OceansService', 'thisJSON',
  function CommentsController($scope, OceansService, thisJSON) {
    // Controller for adding comments and showing new followers in following list
    $scope.thisJSON = thisJSON;

    $scope.isFollows = function (thisSea) {
      var thisFollowerList = $scope.thisJSON.seas[thisSea].followers;
      var follower = {
        "name" : "Julian Bishop",
        "photo" : "img/avatar-thumb-4.png",
      };

      if (containsObject(follower, thisFollowerList)) {
        return true;
      } else {
        return false;
      }
    };

    $scope.togglecomments = function (thisSea) {
      $scope.thisJSON.seas[thisSea].togglecomments = !$scope.thisJSON.seas[thisSea].togglecomments;
    };

    $scope.addFollowers = function (thisSea) {
      var newFollower = {
        "name" : "Julian Bishop",
        "photo" : "img/avatar-thumb-4.png",
      };

      if (containsObject(newFollower, $scope.thisJSON.seas[thisSea].followers) !== true) {
        $scope.thisJSON.seas[thisSea].followers.push(newFollower);
      }
    };

    function containsObject(obj, list) {
      for (var i = 0; i < list.length; i++) {
          if (angular.equals(list[i], obj)) {
              return true;
          }
      }

      return false;
    }

  }
]);
