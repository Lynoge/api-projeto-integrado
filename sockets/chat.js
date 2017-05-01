module.exports = function (io) {

  var hashs = {};
  var sockets = io.sockets.sockets;
  io.sockets.on('connection', function (client) {

    client.on('updateHash', function (hash) {
      hashs[hash] = client.id;
    });

    client.on('sendMessage', function (data) {

      const destinyId = hashs[data.destiny]
      if (destinyId)
        sockets[destinyId].emit('receiveMessage', data)
    });

  });
}
