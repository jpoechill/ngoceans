// NavBarDirective
app.directive("navBar", function() {
    return {
        templateUrl: "ngViews/navbar/navbar.html",
        controller: function ($scope, LoginService) {
          $scope.loggedin = function () {
            return LoginService.isSignedIn;
          };

          $scope.hello = function () {
            if (LoginService.isSignedIn) {
              return "bubble";
            } else {
              return "bubble-short";
            }
          }

          $scope.userAvatar = "img/avatar-thumb-7.png";
          $scope.signOut = function () {
            LoginService.signOut();
          }
        },
        restrict: 'E'
    };
});
