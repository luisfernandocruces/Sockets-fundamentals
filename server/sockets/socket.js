const { io } = require("../server");

io.on("connection", (client) => {
    console.log("user connect!!");

    client.emit("sendMessage", {
        user: "Admin",
        message: "welcome to this app",
    });

    client.on("disconnect", () => {
        console.log("desconnected user");
    });

    // Listening client
    client.on("sendMessage", (data, callback) => {
        console.log(data);

        client.broadcast.emit("sendMessage", {
            data,
        });
        // if (message.user) {
        //     callback({
        //         resp: "All right",
        //     });
        // } else {
        //     callback({
        //         resp: "All bad",
        //     });
        // }
    });
});