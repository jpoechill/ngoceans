// OceansService
app.factory('OceansService', function($http) {
  var getOceans = function(thisOcean) {
    var thisUrl = 'api/' + thisOcean;
    return $http.get(thisUrl).then(function(response) {

      // Add data to offline cache (IndexedDB)
      console.log("Inside the service");
      addNewOcean(thisOcean, response.data);

      return response.data;
    });
  }

  return {
    getOceans: getOceans
  };
});
