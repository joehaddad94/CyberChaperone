import { createServer } from "http";
import { Server } from "socket.io";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000'

let userToken;
let accumulatedEmotions = [];
let calculateAverageTimer;
let averageEmotions;

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
});

    //Socket.io Connection
    io.on("connection", (socket) => {

        //Receive token from electron App
        socket.on("token", (token) => {
            userToken = token;
        });

        //Receive emotions from electron App
        socket.on("emotions-data", async (emotions) => {
            accumulatedEmotions.push(...emotions);

            if (!calculateAverageTimer) {
                calculateAverageTimer = setInterval(() => {
                    averageEmotions = calculateEmotionAverages(accumulatedEmotions);
                    accumulatedEmotions = [];
                }, 20000);
            }

            if (averageEmotions && Object.keys(averageEmotions.emotionAverages).length > 0) {
                try {
                    const apiUrl = `${baseUrl}/api/save_emotions`;

                    const headers = {
                        Authorization: `Bearer ${userToken}`,
                    };

                    const response = await axios.post(apiUrl, averageEmotions, { headers });
                    console.log('saved')
                } catch (error) {
                    console.error("Error sending average emotion data:", error);
                }
            }
        });
    });

function calculateEmotionAverages(emotionsArray) {
    const emotionSum = {};
    const emotionCount = {};

    emotionsArray.forEach((entry) => {
        entry.emotions.forEach((emotionStr) => {
            const emotionObj = JSON.parse(emotionStr);
            const { emotion, percentage } = emotionObj;
            const percentageValue = parseFloat(percentage);

            if (!emotionSum[emotion]) {
                emotionSum[emotion] = 0;
                emotionCount[emotion] = 0;
            }
            emotionSum[emotion] += percentageValue;
            emotionCount[emotion]++;
        });
    });

    const emotionAverages = {};
    for (const emotion in emotionSum) {
        const average = emotionSum[emotion] / emotionCount[emotion];
        emotionAverages[emotion] = Math.round(average * 100) / 100;
    }

    const currentTimestamp = new Date().toISOString();

    return { timestamp: currentTimestamp, emotionAverages };

}


httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});

