angular.module('rentApp').controller('loginController', function ($location, $scope, $http, $rootScope) {

    $scope.login = function () {
        $http.post('/token', { email: $scope.name, password: $scope.password })
            .then(res => {
                if (res.data && res.data.user) {
                    localStorage.setItem('rentUser', JSON.stringify(res.data.user));
                    location.reload();
                } else if (res.data && res.data.error) {
                    console.log(res.data.error);
                } else {
                    console.log(res);
                }
            });
    }
});