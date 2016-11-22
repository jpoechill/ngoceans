// Define Login Controller
app.controller('LoginController', ['$scope', '$facebook', 'hexafy', function ($scope, $facebook, hexafy) {
  $scope.socialLogoUrl = "img/facebook.png";
  $scope.getCurrentUser = hexafy.getUserName;
  $scope.getUrl = hexafy.getUrl;
  $scope.getLoggedIn = hexafy.getSignedIn;

  $scope.login = function() {
    $facebook.login().then(function() {
      hexafy.signIn();
      $scope.refresh();
    });
  }

  $scope.logout = function() {
    // $scope.isLoggedIn = false;
    // $scope.welcomeMsg = "Please log in ...";
    // $scope.usrProfilePicture = "";
    hexafy.signOut();
    // $facebook.logout().then(function() {
    //   $scope.refresh();
    // });
  }

  function fetchProfilePic(userid) {
    $facebook.api("/" + userid + "/picture?type=large").then(
      function(response) {
        $scope.usrProfilePicture = response.data.url;
        $scope.changeUrl(response.data.url);
        $scope.isLoggedIn = true;
      },
      function(err) {
        console.log("Could not fetch profile picture.");
      });
  }

  $scope.refresh = function () {
    $facebook.api("/me").then(
      function(response) {
        $scope.welcomeMsg = "Welcome, " + response.name;
        console.log("Bird 123 " + response.name);
        console.log(hexafy.getUserName());
        hexafy.setUserName(response.name);
        console.log(hexafy.getUserName());
        fetchProfilePic(response.id);
        $scope.isLoggedIn = true;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in ...";
      });
  }

  $scope.changeUrl = function (input) {
    return hexafy.changeUrl(input);
  }

  $scope.refresh();
}]);
