angular.module('rentApp').controller('chatController', function ($scope, $mdSidenav, $rootScope) {

    var user = $rootScope.user;
    var socket = new Socket(location.href.split('#')[0], user.name, user.id, user.type);

    $scope.users = [];
    $scope.loggedUser = $rootScope.user.email;
    socket.connect();
    socket.on('receiveMessage', function (msg) {
        var area = document.getElementById('txtArea');
        area.value += '\n Outro - ' + msg.message;
    });

    socket.on('userConnected', function (user) {
        var arr = [];
        arr.push(user);
        for (var i = 0; i < $scope.users.length; i++)
            if ($scope.users[i].id != user.id)
                arr.push($scope.users[i]);
        $scope.users = arr;
        console.log(arr);
    });

    socket.on('userDisconnected', function (userId) {
        var arr = [];
        for (var i = 0; i < $scope.users.length; i++)
            if ($scope.users[i].id != userId)
                arr.push($scope.users[i]);
        $scope.users = arr;
    });

    socket.on('refreshOnlineProfessionals', function(users){
        if(Array.isArray(users))
        $scope.users = users;
    })

    socket.on('loadUsers', function (userId) {
        var arr = [];
        for (var i = 0; i < $scope.users.length; i++)
            if ($scope.users[i].id != userId)
                arr.push($scope.users[i]);
        $scope.users = arr;
    });

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.historico = '';

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.changeChat = function (user) {
        $scope.currentChat = user;
    }

    $scope.send = function (event) {
        if (event.keyCode == 13 && $scope.message && $scope.currentChat) {
            $scope.historico += '\n' + $scope.currentChat.nickname + ' - ' + $scope.message; 
            var area = document.getElementById('txtArea');
            area.scrollTop = area.scrollHeight;
            socket.sendMessage($scope.message, $scope.currentChat.id);
            $scope.message = '';
        }
    }

    $scope.logout = function(){ 
        localStorage.removeItem('rentUser');
        location.reload();
     }
});