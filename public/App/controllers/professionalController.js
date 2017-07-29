angular.module('rentApp').controller('professionalController', function ($scope, $rootScope, $http) {
  $scope.professionais = [];
  $scope.refresh = function () {
    $http.get('/professional').then(function (response) {
      console.log(response.data);
    })
  }

  $scope.refresh()

});