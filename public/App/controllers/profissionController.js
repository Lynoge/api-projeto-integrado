angular.module('rentApp').controller('profissionController', function ($scope, $rootScope, $http, $mdDialog) {

  $scope.profissions = [];

  $scope.refresh = () => {
    $http.get('/profission')
      .then(res => {
        $scope.profissions = res.data;
      }, err => {
        if (err.status == 401)
          localStorage.removeItem('rentUser')
      });
  }

  $scope.refresh();

  $scope.remove = (profission, ev) => {
    $mdDialog.show(
      $mdDialog.confirm()
        .textContent('Excluir profissão ?')
        .ariaLabel('Excluir')
        .targetEvent(ev)
        .ok('Sim')
        .cancel('Não')
    ).then(function () {
      $http.delete('/profission/' + profission.id)
        .then(res => {
          $scope.refresh();
        }, err => {
          if (err.data.error) {
            $mdDialog.show(
              $mdDialog.alert()
                .clickOutsideToClose(false)
                .title(err.data.error)
                .ariaLabel('Error')
                .ok('ok')
                .targetEvent(ev));
          }
        });
    })
  }

  $scope.new = function (ev) {
    var confirm = $mdDialog.prompt()
      .placeholder('Nome da profissão')
      .ariaLabel('Nome')
      .targetEvent(ev)
      .ok('ok')
      .cancel('Cancelar');

    $mdDialog.show(confirm).then(function (name) {
      $http.post('/profission/', { name: name })
        .then(res => {
          $scope.refresh();
        });
    });
  }
});