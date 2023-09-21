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

    io.on("connection", (socket) => {
        console.log('Electron App is connected');

        socket.on("token", (token) => {
            userToken = token;
        });

        socket.on("emotions-data", async (emotions) => {
            // console.log(emotions)
            accumulatedEmotions.push(...emotions);

            if (accumulatedEmotions.length > 0 && !calculateAverageTimer) {
                calculateAverageTimer = setInterval(() => {
                    averageEmotions = calculateEmotionAverages(accumulatedEmotions);
                    accumulatedEmotions = [];
                    console.log("Average emotion data:", averageEmotions);
                }, 20000);
            }

            if (averageEmotions && Object.keys(averageEmotions.emotionAverages).length > 0) {
                try {
                    const apiUrl = `${baseUrl}/api/register`;

                    const headers = {
                        Authorization: `Bearer ${userToken}`,
                    };

                    const response = await axios.post(apiUrl, averageEmotions, { headers });
                    console.log("Average emotion data sent successfully:", response.data);
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

