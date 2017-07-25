angular.module('rentApp', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "App/templates/login.html",
                controller: 'loginController'
            })
            .when("/profission", {
                templateUrl: "App/templates/profission.html",
                controller: 'profissionController'
            })
            .when("/professional", {
                templateUrl: "App/templates/professional.html",
                controller: 'professionalController'
            })
            .when("/client", {
                templateUrl: "App/templates/client.html",
                controller: 'clientController'
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
    .run(function ($rootScope, $location, $http) {
        $rootScope.user = JSON.parse(localStorage.getItem('rentUser'));
        if ($rootScope.user && $rootScope.user.token) {
            $http.defaults.headers.common.token = $rootScope.user.token;
            $location.path('/chat');

            if (!$rootScope.user.image) {
                $http.get('/account').then(function (response) {
                    var user = response.data
                    if (user.image) {
                        localStorage.setItem('rentUser', JSON.stringify(user))
                        location.reload()
                    }
                })
            }
        }
        else
            $location.path('/login');
    });