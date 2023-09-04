const video = document.getElementById('video');

const emotionBars = {
    angry: document.getElementById('anger'),
    disgusted: document.getElementById('disgust'),
    fearful: document.getElementById('fear'),
    happy: document.getElementById('happy'),
    neutral: document.getElementById('neutral'),
    sad: document.getElementById('sad'),
    surprised: document.getElementById('surprise'),
  };

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
    faceapi.nets.faceExpressionNet.loadFromUri('../models')
  ]).then(startVideo)

async function startVideo() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  }

  video.addEventListener('play', () => {

    const canvas = faceapi.createCanvasFromMedia(video);
    canvas.willReadFrequently = true;
    document.body.append(canvas);
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
          
                for (const emotion in emotions) {
                  if (emotionBars[emotion]) {
                    const percentage = (emotions[emotion] * 100).toFixed(2);
                    emotionBars[emotion].textContent = `${emotion.charAt(0).toUpperCase() +
                      emotion.slice(1)}: ${percentage}%`;
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