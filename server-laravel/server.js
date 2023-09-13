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
    console.log('Electron App is connected');

    socket.on("hello", (arg) => {
        console.log(arg);
      });

      socket.on("emotions-data", (emotions) => {
        console.log(emotions);
      });
});

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});







