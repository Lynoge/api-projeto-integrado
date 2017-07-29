angular.module('rentApp').controller('professionalController', function ($scope, $rootScope, $http) {
  $scope.professionals = [];
  $scope.refresh = function () {
    $http.get('/professional').then(function (response) {
      $scope.professionals = response.data;
    })
  }

  $scope.refresh()

});