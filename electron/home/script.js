const video = document.getElementById('video');
const videoContainer = document.getElementById('videoContainer');
const detectionToggleButton = document.getElementById('startDetection');
const emptyStateText = document.querySelector('.empty-state-text');
const placeholderImage = document.querySelector('.placeholder-image');
const logOutButton = document.getElementById('logOut');
const welcomeUser = document.getElementById('welcomeUser');

let isVideoRunning = false;
let localStorageData = getFromLocalStorage('loginResponse')

let token = localStorageData.token
ipcRenderer.send('token', token);

const accumulatedEmotionData = [];
const dispatchThreshold = 50;

const emotionBars = {
    angry: document.getElementById('anger'),
    disgusted: document.getElementById('disgust'),
    fearful: document.getElementById('fear'),
    happy: document.getElementById('happy'),
    neutral: document.getElementById('neutral'),
    sad: document.getElementById('sad'),
    surprised: document.getElementById('surprise'),
  };

  const emotionToId = {
    angry: 'anger',
    disgusted: 'disgust',
    fearful: 'fear',
    happy: 'happy',
    neutral: 'neutral',
    sad: 'sad',
    surprised: 'surprise'
  };

  function dispatchEmotionData() {
    if (accumulatedEmotionData.length >= dispatchThreshold) {
      ipcRenderer.send('emotion-data', accumulatedEmotionData);
      accumulatedEmotionData.length = 0;
    }
  }

  function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

  async function toggleVideo() {
  if (!isVideoRunning) {
    try {
      detectionToggleButton.textContent = 'Stop Detection';
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      isVideoRunning = true;
      emptyStateText.style.display = 'none';
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  } else {
    const stream = video.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
      isVideoRunning = false;

      const canvasElements = document.getElementsByTagName('canvas');
      console.log(canvasElements)
      for (let i = canvasElements.length - 1; i >= 0; i--) {
        canvasElements[i].remove();
      }
      
      detectionToggleButton.textContent = 'Start Detection';
      emptyStateText.style.display = 'block';
      resetProgressBars()
    }
  }
}

  function resetProgressBars() {
  for (const emotion in emotionBars) {
    if (emotionBars[emotion]) {
      const percentageSpan = emotionBars[emotion].querySelector('.percentage');
      if (percentageSpan) {
        percentageSpan.textContent = '0%';
      }

      const progressBar = emotionBars[emotion].querySelector('.progress-fill');
      if (progressBar) {
        progressBar.style.width = '0%';
      }
    }
  }
}

function setWelcomeMessage(username) {
  const welcomeMessage = username ? `Hello ${username}` : 'Hello';
  welcomeUser.textContent = welcomeMessage;
}

const savedUsername = localStorageData?.username;
setWelcomeMessage(savedUsername);

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
  faceapi.nets.faceExpressionNet.loadFromUri('../models')
]).then(() => {
  detectionToggleButton.addEventListener('click', () => {
    toggleVideo();
  });
});
  

  video.addEventListener('play', () => {

    const canvas = faceapi.createCanvasFromMedia(video);
    canvas.willReadFrequently = true;
    videoContainer.appendChild(canvas)
    const displaySize = { 
      width: video.width,
        height: video.height
    }
    faceapi.matchDimensions(canvas, displaySize)

    setInterval(async () =>{
        const detections = await faceapi.detectAllFaces(video,
            new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

            if (detections.length > 0) {
                const emotions = detections[0].expressions;
                
                let emotionsObject = {
                  'emotions': [],
                  'timestamp': new Date()
                }

                for (const emotion in emotions) {
                  if (emotionBars[emotion]) {
                    const percentage = (emotions[emotion] * 100).toFixed(2);
                    const capitalizedEmotion = emotion.charAt(0).toUpperCase() + emotion.slice(1);
                    // emotionBars[emotion].textContent = `${capitalizedEmotion}: ${percentage}%`;
                    
                    let emotionsData = {
                      // 'emotion': capitalizedEmotion.toString(),
                      'emotion': capitalizedEmotion,
                      'percentage': percentage,
                    }
                    
                    emotionsObject.emotions.push(JSON.stringify(emotionsData));
                    accumulatedEmotionData.push(emotionsObject);
                    // dispatchEmotionData();
                    ipcRenderer.send('emotion-data', emotionsObject);

                    const emotionId = emotionToId[emotion];

                    const percentageSpan = document.querySelector(`#${emotionId} .percentage`)
                    if (percentageSpan) {
                      percentageSpan.textContent = `${percentage}%`;
                    }

                    const progressBar = emotionBars[emotion].querySelector('.progress-fill');
                    if (progressBar) {
                      progressBar.style.width = `${percentage}%`;
                    }
                  }
                }
              }

            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    },100)
})

logOutButton.addEventListener('click', () => {
  const token = localStorageData?.token;
  // console.log(token)
  ipcRenderer.send('logout-btn', token);
})
