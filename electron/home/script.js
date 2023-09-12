const video = document.getElementById('video');
const videoContainer = document.getElementById('videoContainer');
const detectionToggleButton = document.getElementById('startDetection');
const emptyStateText = document.querySelector('.empty-state-text');
const placeholderImage = document.querySelector('.placeholder-image');
const logOutButton = document.getElementById('logOut');

let isVideoRunning = false;

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
  
  async function toggleVideo() {
    if (!isVideoRunning) {
      try {
        detectionToggleButton.textContent = 'Stop Detection';
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        isVideoRunning = true;
        emptyStateText.style.display = 'none';
        placeholderImage.style.display = 'none';
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
        placeholderImage.style.display = 'block';
        resetProgressBars()
      }
    }
  }

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
            console.log(detections)

            if (detections.length > 0) {
                const emotions = detections[0].expressions;
          
                // for (const emotion in emotions) {
                //   if (emotionBars[emotion]) {
                //     const percentage = (emotions[emotion] * 100).toFixed(2);
                //     emotionBars[emotion].textContent = `${emotion.charAt(0).toUpperCase() +
                //       emotion.slice(1)}: ${percentage}%`;
                //   }
                // }

                for (const emotion in emotions) {
                  if (emotionBars[emotion]) {
                    const percentage = (emotions[emotion] * 100).toFixed(2);
                    const capitalizedEmotion = emotion.charAt(0).toUpperCase() + emotion.slice(1);
                    // emotionBars[emotion].textContent = `${capitalizedEmotion}: ${percentage}%`;

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

logOutButton.addEventListener('click', () => {
  console.log(logOutButton)
  console.log('clicked')
  ipcRenderer.send('logout');
})

ipcRenderer.on('console-log', (event, message) => {
  // Display the console message in the renderer process
  console.log(message);
});