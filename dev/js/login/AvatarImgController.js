// Define 'AvatarImgController' controller
app.controller('AvatarImgController', ['$scope', '$location', 'hexafy', '$facebook', function AvatarImgController($scope, $location, hexafy, $facebook) {
  // $scope.pagelink = function () {
  //   if ($scope.isLoggedIn == false) {
  //     $location.path("/login");
  //   } else {
  //     console.log("You clicked 'signed out.'");
  //     $location.path("/logout");
  //   }
  // };
  // $scope.url = hexfy.getAvatar();

  $scope.url = "img/avatar/blank.png";
  $scope.usrName = "";

  $scope.getUrl = hexafy.getUrl;

  // $scope.signedInPicture = function () {
  //     return "/img/avatar/blank.png";
  // }

  $scope.isLoggedIn = false;
  // $scope.usrProfilePicture =  "";
  //
  // $scope.login = function() {
  //   // $location.path("/login");
  //   $facebook.login(function() {
  //   }).then(function(message) {
  //     $scope.isLoggedIn = true;
  //     console.log("Logged in through facebook.");
  //     refresh();
  //   });
  // }
  //
  // $scope.logout = function() {
  //   $facebook.logout().then(function() {
  //     $scope.isLoggedIn = false;
  //     refresh();
  //   });
  // }
  //
  // function fetchProfilePic(userid) {
  //   $facebook.api("/" + userid + "/picture?type=large").then(
  //     function(response) {
  //       console.log(response.data.url);
  //       $scope.url = response.data.url;
  //       $scope.isLoggedIn = true;
  //     },
  //     function(err) {
  //       console.log("Could not fetch profile picture.");
  //     });
  // }

  // function refresh () {
  //   $facebook.api("/me").then(
  //     function(response) {
  //       // $scope.welcomeMsg = "Welcome, " + response.name;
  //       // console.log(response);
  //       fetchProfilePic(response.id);
  //       $scope.usrName = response.name;
  //       $scope.isLoggedIn = true;
  //     },
  //     function(err) {
  //       $scope.url = "/img/avatar/blank.png";
  //       // $scope.welcomeMsg = "Please log in ...";
  //     });
  //     // console.log("Hello");
  // }


  // function fetchProfilePic(userid) {
  //   $facebook.api("/" + userid + "/picture?type=large").then(
  //     function(response) {
  //       $scope.usrProfilePicture = response.data.url;
  //       $scope.isLoggedIn = true;
  //     },
  //     function(err) {
  //       console.log("Could not fetch profile picture.");
  //     });
  // }
  //
  // $scope.refresh = function () {
  //   $facebook.api("/me").then(
  //     function(response) {
  //       $scope.welcomeMsg = "Welcome " + response.name;
  //       $scope.isLoggedIn = true;
  //     },
  //     function(err) {
  //       $scope.welcomeMsg = "Checking if logged in ...";
  //     });
  // }


      // if ($scope.isLoggedIn == true) {
      //   $scope.url = "/img/avatar/ava-1.png";
      //   console.log("I made the change");
      // }

    //   $scope.$watch('url', function() {
    //     alert('hey, myVar has changed!');
  //   // });
  // }
  //
  // $scope.login;
  // refresh();
}]);
