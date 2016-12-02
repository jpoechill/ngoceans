// FooterDirective
app.directive("ocFooter", function() {
    return {
        templateUrl: "ngViews/footer/footer.html",
        restrict: 'E',
        controller:
          function ($scope, $location) {
            $scope.showFooter = function () {
              if ($location.path() == '/signup' || $location.path() == '/signin') {
                return false;
              } else {
                return true;
              }
            };
          }
    };
});
