module.exports = function(io){
    io.sockets.on('connection', function(client){
        client.on('enviarMensagem', function(data){
            var msg = "<b>" + data.name + ":</b> " + data.message + "<br>";
            client.emit("receberMensagem", "<b>Você:</b> " + data.message + "<br>");
            client.broadcast.emit("receberMensagem", "<b>" + data.name + ":</b> " + data.message + "<br>");
        });
    });
}