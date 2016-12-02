// OceansService
app.factory('OceansService', function($http) {
  var getOceans = function(thisOcean) {
    var thisUrl = 'api/' + thisOcean;
    return $http.get(thisUrl).then(function(response) {
      return response.data;
    });
  }

  return {
    getOceans: getOceans
  };
});
