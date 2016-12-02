// NavBarDirective
app.directive("navBar", function() {
    return {
        templateUrl: "js/ngDirectives/navbar.html",
        controller: function ($scope, LoginService) {
          $scope.loggedin = function () {
            // console.log(LoginService.isSignedIn);
            return LoginService.isSignedIn;
          };

          $scope.hello = function () {
            if (LoginService.isSignedIn) {
              return "You are signed in"
            } else {
              return "You are not signed in."
            }
          }
          $scope.userAvatar = "img/avatar-thumb-7.png";
          $scope.signOut = function () {
            // console.log(LoginService.isSignedIn);
            LoginService.signOut();
            // console.log(LoginService.isSignedIn);
            // console.log("HELLO");
          }
        },
        restrict: 'E'
    };
});
