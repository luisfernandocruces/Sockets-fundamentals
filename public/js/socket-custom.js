var socket = io();
// connect with server
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

// on escuchar sucesos
socket.on("disconnect", function() {
    console.log("lost connection with server");
});
// emit para enviar info
socket.emit(
    "sendMessage", {
        user: "lucho",
        message: "hello world!!!!",
    },
    function(resp) {
        console.log(resp);
    }
);

// listening info
socket.on("sendMessage", function(res) {
    console.log(res);
});