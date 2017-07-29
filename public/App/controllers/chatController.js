angular.module('rentApp').controller('chatController', function ($scope, $rootScope) {

    var user = $rootScope.user;
    var socket = new Socket(location.href.split('#')[0], user.name, user.id, user.type);

    $scope.users = [];
    $scope.index = 0;
    $scope.loggedUser = $rootScope.user.email;
    socket.connect();
    socket.on('receiveMessage', function (msg) {
        console.log(msg);
        var area = document.getElementById('txtArea');
        area.value += '\n Cliente: ' + msg.message;

        $scope.currentChat = { id: msg.origin, nickname: msg.nickname };
        $scope.index = 0;
    });

    socket.on('userConnected', function (user) {
        var arr = [];
        arr.push(user);
        for (var i = 0; i < $scope.users.length; i++)
            if ($scope.users[i].id != user.id)
                arr.push($scope.users[i]);
        $scope.users = arr;
    });

    socket.on('userDisconnected', function (userId) {
        var arr = [];
        for (var i = 0; i < $scope.users.length; i++)
            if ($scope.users[i].id != userId)
                arr.push($scope.users[i]);
        $scope.users = arr;
    });

    socket.on('refreshOnlineProfessionals', function (users) {
        if (Array.isArray(users))
            $scope.users = users;
    })

    socket.on('loadUsers', function (userId) {
        var arr = [];
        for (var i = 0; i < $scope.users.length; i++)
            if ($scope.users[i].id != userId)
                arr.push($scope.users[i]);
        $scope.users = arr;
    });

    $scope.send = function (event) {
        if (event.keyCode == 13 && $scope.message && $scope.currentChat) {
            $scope.historico += '\n' + user.nickname + ': ' + $scope.message;
            var area = document.getElementById('txtArea');
            area.scrollTop = area.scrollHeight;
            socket.sendMessage($scope.message, $scope.currentChat.id);
            $scope.message = '';
        }
    }

    $scope.changeChat = function () {
        if ($scope.users.length > 0 && $scope.index < ($scope.users.length - 1)) {
            $scope.currentChat = $scope.users[$scope.index];
            $scope.index++;
        } else if ($scope.users.length > 0) {
            $scope.currentChat = $scope.users[0];
            $scope.index = 0;
        }
    }
});