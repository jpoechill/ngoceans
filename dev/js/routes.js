// Routes file
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        // controller : "MainController"
    })
    .when("/item", {
        templateUrl : "views/item.html",
        // controller : "MainController"
    })
    .when("/artic", {
        templateUrl : "views/artic.html",
        // controller : "MainController"
    })
});
