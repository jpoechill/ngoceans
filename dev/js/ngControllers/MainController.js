// MainController
app.controller('MainController', ['$scope', 'OceansService', 'thisJSON', 'webNotification', '$timeout',
  function MainController($scope, OceansService, thisJSON, webNotification, $timeout) {
    // To do: Setup, integrate for UI-Router
    $scope.thisJSON = thisJSON;

    $scope.addFollowers = function (thisSea) {
      var newFollower = {
        "name" : "Julian Bishop",
        "photo" : "img/avatar-thumb-4.png",
      };

      if (containsObject(newFollower, $scope.thisJSON.seas[thisSea].followers) !== true) {
        $scope.thisJSON.seas[thisSea].followers.push(newFollower);
      }

      // console.log("Clicked.");
      $timeout(function() { showNotification($scope.thisJSON.seas[thisSea].name);}, 3000);
      // showNotification($scope.thisJSON.seas[thisSea].name);

      function showNotification (thisSeaName) {
        webNotification.showNotification('Oceans', {
            body: 'Now following ' + thisSeaName,
            icon: 'img/favicon-lrg.png',
            autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
        }, function onShow(error, hide) {
            if (error) {
                window.alert('Unable to show notification: ' + error.message);
            } else {
                console.log('Notification Shown.');

                setTimeout(function hideNotification() {
                    console.log('Hiding notification....');
                    hide(); //manually close the notification (you can skip this if you use the autoClose option)
                }, 5000);
            }
        });
      }
    };

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
