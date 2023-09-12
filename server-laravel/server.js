import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
});

io.on("connection", (socket) => {
    console.log('A user connected');

    // Add event listener for receiving data from the client
    socket.on("custom-event", (data) => {
        console.log("Received data from client:", data);
        // Handle the received data as needed
    });
});

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});







