angular.module('rentApp', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "App/templates/login.html",
                controller: 'loginController'
            })
            .when("/chat", {
                templateUrl: "App/templates/chat.html",
                controller: 'chatController'
            })
            .otherwise("/chat", {
                templateUrl: "App/templates/chat.html",
                controller: 'chatController'
            });
    })
    .run(function ($rootScope, $location) {
        $rootScope.user = JSON.parse(localStorage.getItem('rentUser'));
        if ($rootScope.user && $rootScope.user.token)
            $location.path('/chat');
        else
            $location.path('/login');
    });