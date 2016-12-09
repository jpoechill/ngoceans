// FooterController
app.controller('FooterController', ['$scope', '$location',
  function FooterController($scope, $location) {
    $scope.showFooter = function () {
      if ($location.path() == '/signup' || $location.path() == '/signin') {
        return false;
      } else {
        return true;
      }
    };
  }]
);
