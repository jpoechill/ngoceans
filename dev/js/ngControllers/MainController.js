// MainController
app.controller('MainController', ['$scope', 'OceansService', 'thisJSON',
  function MainController($scope, OceansService, thisJSON) {
    // To do
    // V Remove oceans JSON and place in mock-backend script
    // V Add $http calls per request to mock-backend
    // Setup//integrate for UI-Router

    // Create and divide new controllers per individual action set

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
      console.log("Hello");
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

    $scope.appliedClass = function (tideLevel) {
      if (tideLevel == "LOW") {
        return "sea-data-tide-low";
      } else if (tideLevel == "MED") {
        return "sea-data-tide-med";
      } else {
        return "sea-data-tide-high";
      }
    };

  }
]);
