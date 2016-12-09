// FooterDirective
app.directive("ocFooter", function() {
    return {
        templateUrl: "ngViews/footer/footer.html",
        restrict: 'E',
        controller:
          function ($scope, $location) {
            // Hide footer for login pages
            $scope.showFooter = function () {
              if ($location.path() == '/signup' || $location.path() == '/signin' || $location.path() == '/signout' ) {
                return false;
              } else {
                return true;
              }
            };
          }
    };
});

app.directive("compareTo", function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});
