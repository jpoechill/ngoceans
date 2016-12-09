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
        controller : function ($scope, LoginService, $location) {
          $scope.hello = function () {
            LoginService.signIn();
            $location.path("/")
          }

          $scope.checkEmail = function (inputValue) {
            if (!inputValue) {
              return "Please enter a valid email address"
            }
          }
        }
    })
    .when("/signup", {
        templateUrl : "ngViews/login/signup.html",
        controller : function ($scope, LoginService, $location) {
          $scope.submitSignUp = function () {

            console.log("Hello");
            $location.path("/");
            console.log("Hello");
          }
          $scope.submitForm = function() {
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }
          };
        }
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
