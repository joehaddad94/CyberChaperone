import { createServer } from "http";
import { Server } from "socket.io";
import axios from "axios";

let userToken;

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
});

io.on("connection", (socket) => {
    console.log('Electron App is connected');

    socket.on("token", (token) => {
        userToken = token;
      });

      socket.on("emotions-data", async (emotions) => {
        console.log(emotions)
    //     try {
    //         const apiUrl = "";

    //         const headers = {
    //             Authorization: `Bearer ${userToken}`,
    //         };

    //         const response = await axios.post(apiUrl, emotions, { headers });

    //         console.log("Emotion data sent successfully:", response.data);
    //     } catch (error) {
    //         console.error("Error sending emotion data:", error);
    //     }
    });

});

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});






