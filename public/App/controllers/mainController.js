angular.module('rentApp').controller('mainController', function ($scope, $mdSidenav, $rootScope, $location) {

  $scope.toggleLeft = buildToggler('left');

  $scope.init = function () {
    if ($location.path() != '/login') {
      var menu = $scope.menus[0];
      $location.path(menu.location);
      $scope.currentMenu = menu;
    }
  }

  $scope.menus = [
    { name: 'Profissões', location: '/profission' },
    { name: 'Profissionais', location: '/professional' },
    { name: 'Clientes', location: '/client' }
  ];

  $scope.changeLocation = function (menu) {
    $location.path(menu.location);
    $mdSidenav('left').toggle();
    $scope.currentMenu = menu;
  }

  function buildToggler(componentId) {
    return function () {
      $mdSidenav(componentId).toggle();
    };
  }

});