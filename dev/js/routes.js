// Routes file
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        controller : "MainController"
    })
    .when("/artic", {
        templateUrl : "views/artic.html",
        controller : "MainController"
    })
    .when("/atlantic", {
        templateUrl : "views/atlantic.html",
        controller : "MainController"
    })
    .when("/indian", {
        templateUrl : "views/indian.html",
        controller : "MainController"
    })
    .when("/pacific", {
        templateUrl : "views/pacific.html",
        controller : "MainController"
    })
    .when("/southern", {
        templateUrl : "views/southern.html",
        controller : "MainController"
    })
});
