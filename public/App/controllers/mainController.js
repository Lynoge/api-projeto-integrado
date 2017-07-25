angular.module('rentApp').controller('mainController',
  function ($scope, $mdSidenav, $rootScope, $location, $http, $mdDialog) {

    $scope.toggleLeft = buildToggler('left');

    $scope.email = $rootScope.user ? $rootScope.user.email : '';
    $scope.image = $rootScope.user && $rootScope.user.image ? 'image/' + $rootScope.user.image : 'img/menu.svg'

    $scope.init = function () {
      if ($location.path() != '/login') {
        var menu = $scope.menus[3];
        $location.path(menu.location);
        $scope.currentMenu = menu;
      }
    }

    $scope.menus = [
      { name: 'Profissões', location: '/profission' },
      { name: 'Profissionais', location: '/professional' },
      { name: 'Clientes', location: '/client' },
      { name: 'Chat', location: '/chat' }
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

    $scope.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    $scope.logout = function () {
      localStorage.removeItem('rentUser');
      location.reload();
    }

    $scope.openUploadImage = function (ev) {

      $mdDialog.show({
        controller: function ($scope) {
          $scope.changeFile = function (files) {

            var user = JSON.parse(localStorage.getItem('rentUser'))
            var elem = document.getElementById('fileNameUpload')
            if (elem)
              elem.textContent = files[0].name
            elem = document.getElementById('uploadForm')
            if (elem)
              elem.action += "?id=" + user.id

            user.image = null
            localStorage.setItem('rentUser', JSON.stringify(user))



          }
        },
        templateUrl: '/App/templates/upload.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen
      })
    }
  });