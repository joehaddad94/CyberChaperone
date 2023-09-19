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
        // console.log(emotions)
        try {
            const apiUrl = "";

            const headers = {
                Authorization: `Bearer ${userToken}`,
            };

            const parsedEmotions = JSON.parse(emotions);
            // console.log(parsedEmotions)

            // const averageEmotions = calculateAverageEmotions(parsedEmotions);
            const averageEmotions = calculateAverageEmotions(emotions);
            console.log(averageEmotions)

            // const response = await axios.post(apiUrl, averageEmotions, { headers });

            // console.log("Average emotion data sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending average emotion data:", error);
        }
    });
});

function calculateAverageEmotions(emotionsData) {
    const emotionTotals = {
        Neutral: 0,
        Happy: 0,
        Sad: 0,
        Angry: 0,
        Fearful: 0,
        Disgusted: 0,
        Surprised: 0,
    };

    emotionsData.forEach((emotion) => {

        const parsedEmotion = JSON.parse(emotion);

        for (const emotionName in parsedEmotion) {
            if (emotionTotals.hasOwnProperty(emotionName)) {
                emotionTotals[emotionName] += parseFloat(parsedEmotion[emotionName]);
            }
        }
    });

    const numEmotions = emotionsData.length;
    const averageEmotions = {};

    for (const emotionName in emotionTotals) {
        if (emotionTotals.hasOwnProperty(emotionName)) {
            averageEmotions[emotionName] = (emotionTotals[emotionName] / numEmotions).toFixed(2);
        }
    }

    return averageEmotions;
}

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});






