import { createServer } from "http";
import { Server } from "socket.io";
import axios from "axios";

let userToken;
let accumulatedEmotions = [];
let calculateAverageTimer;

let emotionsArray = [
    {
        emotions: [
          '{"emotion":"Neutral","percentage":"1.85"}',
          '{"emotion":"Happy","percentage":"98.05"}',
          '{"emotion":"Sad","percentage":"0.04"}',
          '{"emotion":"Angry","percentage":"0.00"}',
          '{"emotion":"Fearful","percentage":"0.00"}',
          '{"emotion":"Disgusted","percentage":"0.01"}',
          '{"emotion":"Surprised","percentage":"0.05"}'
        ]
      },
      {
        emotions: [
          '{"emotion":"Neutral","percentage":"1.85"}',
          '{"emotion":"Happy","percentage":"98.05"}',
          '{"emotion":"Sad","percentage":"0.04"}',
          '{"emotion":"Angry","percentage":"0.00"}',
          '{"emotion":"Fearful","percentage":"0.00"}',
          '{"emotion":"Disgusted","percentage":"0.01"}',
          '{"emotion":"Surprised","percentage":"0.05"}'
        ]
      },
      {
        emotions: [
          '{"emotion":"Neutral","percentage":"1.88"}',
          '{"emotion":"Happy","percentage":"98.01"}',
          '{"emotion":"Sad","percentage":"0.05"}',
          '{"emotion":"Angry","percentage":"0.00"}',
          '{"emotion":"Fearful","percentage":"0.00"}',
          '{"emotion":"Disgusted","percentage":"0.02"}',
          '{"emotion":"Surprised","percentage":"0.02"}'
        ]
      },
]


let emotionsArray1 = [
        { emotion: 'Fearful', percentage: '0.00' },
        { emotion: 'Disgusted', percentage: '0.00' },
        { emotion: 'Surprised', percentage: '0.04' },
        { emotion: 'Neutral', percentage: '15.44' },
        { emotion: 'Happy', percentage: '84.42' },
        { emotion: 'Sad', percentage: '0.01' },
        { emotion: 'Angry', percentage: '0.03' },
        { emotion: 'Fearful', percentage: '0.00' },
        { emotion: 'Disgusted', percentage: '0.02' },
        { emotion: 'Surprised', percentage: '0.09' },
        { emotion: 'Neutral', percentage: '5.25' },
        { emotion: 'Happy', percentage: '94.71' },
        { emotion: 'Sad', percentage: '0.00' },
        { emotion: 'Angry', percentage: '0.00' },
        { emotion: 'Fearful', percentage: '0.00' },
        { emotion: 'Disgusted', percentage: '0.00' },
        { emotion: 'Surprised', percentage: '0.04' },
        { emotion: 'Neutral', percentage: '5.02' },
        { emotion: 'Happy', percentage: '94.93' },
        { emotion: 'Sad', percentage: '0.00' },
        { emotion: 'Angry', percentage: '0.00' },
        { emotion: 'Fearful', percentage: '0.00' },
        { emotion: 'Disgusted', percentage: '0.00' },
        { emotion: 'Surprised', percentage: '0.04' },
        { emotion: 'Neutral', percentage: '10.09' },
        { emotion: 'Happy', percentage: '89.86' },
        { emotion: 'Sad', percentage: '0.00' },
        { emotion: 'Angry', percentage: '0.01' },
]

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

            // const averageEmotions = calculateEmotionAverages(emotions);
            // console.log(averageEmotions)
            accumulatedEmotions.push(...emotions);

        if (!calculateAverageTimer) {
            calculateAverageTimer = setInterval(() => {
                const averageEmotions = calculateEmotionAverages(accumulatedEmotions);
                accumulatedEmotions = [];
                console.log("Average emotion data:", averageEmotions);
        }, 20000);
    }
            // const response = await axios.post(apiUrl, averageEmotions, { headers });

            // console.log("Average emotion data sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending average emotion data:", error);
        }
    });
});

function calculateEmotionAverages(emotionsArray) {
    // Initialize an object to store the sum and count for each emotion
    const emotionSum = {};
    const emotionCount = {};

    // Iterate through the emotionsArray and parse the JSON strings to calculate the sum and count
    emotionsArray.forEach((entry) => {
        entry.emotions.forEach((emotionStr) => {
            const emotionObj = JSON.parse(emotionStr);
            const { emotion, percentage } = emotionObj;
            const percentageValue = parseFloat(percentage);

            // Update the sum and count for each emotion
            if (!emotionSum[emotion]) {
                emotionSum[emotion] = 0;
                emotionCount[emotion] = 0;
            }
            emotionSum[emotion] += percentageValue;
            emotionCount[emotion]++;
        });
    });

    // Calculate the average for each emotion
    const emotionAverages = {};
    for (const emotion in emotionSum) {
        const average = emotionSum[emotion] / emotionCount[emotion];
        emotionAverages[emotion] = Math.round(average * 100) / 100;
    }

    // Get the timestamp from the first entry (assuming they all have the same timestamp)
    const currentTimestamp = new Date().toISOString();

    return { timestamp: currentTimestamp, emotionAverages };

}


httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});

