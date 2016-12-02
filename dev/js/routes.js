// Routes file
app.config(function($routeProvider) {
    $routeProvider

    // Account and login specs
    .when("/account", {
        templateUrl : "ngViews/user/account.html",
        controller : "MainController",
        resolve: {
          thisJSON: function(OceansService) {
            // var
            return OceansService.getOceans('account').then(
              function (result) {
                return result;
              }
            );
          }
        }
    })
    .when("/signin", {
        templateUrl : "ngViews/login/signin.html",
        controller : function ($scope, LoginService) {
          $scope.hello = function hello () {
            console.log(LoginService.isSignedIn);
            LoginService.signIn();
            console.log(LoginService.isSignedIn);
            console.log("HELLO");
          }
        }
    })
    .when("/signup", {
        templateUrl : "ngViews/login/signup.html",
        controller : "MainController"
    })
    .when("/signout", {
        templateUrl : "ngViews/login/signout.html",
    })

    // Main page
    .when("/", {
        templateUrl : "ngViews/main.html",
        controller : "MainController",
        resolve: {
          thisJSON: function(OceansService, $route) {
            return OceansService.getOceans('artic').then(
              function (result) {
                return result;
              });
          }
        }
    })

    // Each oceans page
    .when("/:paramType", {
        templateUrl : "ngViews/main.html",
        controller : "MainController",
        resolve: {
          thisJSON: function(OceansService, $route) {
            var whichOcean = $route.current.params.paramType;

            return OceansService.getOceans(whichOcean).then(
              function (result) {
                return result;
              });
          }
        }
    });
});
