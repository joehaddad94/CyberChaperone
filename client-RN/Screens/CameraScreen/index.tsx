import React, { useState, useEffect, useCallback } from 'react';
import { Camera, CameraType, FaceDetectionResult } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import globalStyles from '../../styles';
import { styles } from './styles'

const bgImage = require("../../assets/images/DarkBG.png");
const happyEmoji = require("../../assets/images/happy.png");
const neutralEmoji = require("../../assets/images/neutral.png");

// export default function CameraScreen({ navigation }) {
//   const [cameraOpen, setCameraOpen] = useState(false); // Initialize as closed
//   const [type] = useState(CameraType.front); // Set the camera type to front (selfie)
//   const [permission, requestPermission] = Camera.useCameraPermissions();

//   useEffect(() => {
//     // Cleanup function when the component unmounts
//     return () => {
//       // Release the camera resources when the component unmounts
//       if (cameraOpen) {
//         setCameraOpen(false);
//       }
//     };
//   }, []);

//   useFocusEffect(
//     useCallback(() => {
//       // This callback runs when the screen is focused
//       // If the camera is open, keep it open; otherwise, leave it closed
//       return () => {
//         // This callback runs when the screen is unfocused
//         // Close the camera when the screen is unfocused
//         if (cameraOpen) {
//           setCameraOpen(false);
//         }
//       };
//     }, [cameraOpen])
//   );

//   if (!permission) {
//     return <View />;
//   }

//   if (!permission.granted) {
//     return (
//       <View style={styles.permissionContainer}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="Grant Permission" />
//       </View>
//     );
//   }

//   function openCamera() {
//     setCameraOpen(true);
//   }

//   function closeCamera() {
//     setCameraOpen(false);
//   }

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={bgImage}
//         style={globalStyles.backgroundImage}
//         resizeMode='cover'
//       >
//         {cameraOpen ? (
//           <View style = {styles.cameraHeight}>
//             <Camera 
//               style={styles.camera} 
//               type={type}
//               ratio= "16:9"
//               >
//               <View style={styles.buttonContainer}>
//                 <TouchableOpacity style={styles.button} onPress={closeCamera}>
//                   <Text style={styles.text}>Close Camera</Text>
//                 </TouchableOpacity>
//               </View>
//             </Camera>
//           </View>
//         ) : (
//           <View style={styles.buttonContainer}>
//             <Button 
//               onPress={openCamera} 
//               title="Open Camera"
//               color="#00BFA4"
//               />
//           </View>
//         )}
//       </ImageBackground>
//     </View>
//   );
// }

export default function CameraScreen () {
  const [facedetected, setFaceDetected] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraOpen, setCameraOpen] = useState(false);

  const [emoji, setEmoji] = useState(neutralEmoji);
  const [emotion, setEmotion] = useState('neutral');

  const faceValues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })

  function openCamera() {
    setCameraOpen(true);
  }

  function handleFacesDetected({faces}: FaceDetectionResult) {
    // console.log(faces);
    const face = faces[0] as any;

    if (face) {
      const { size, origin } = face.bounds;

      faceValues.value = {
        width: size.width,
        height: size.height,
        x: origin.x,
        y: origin.y,
      }
      setFaceDetected(true);

      const smilingProbability = face.smilingProbability;
      const happyThreshold = 0.5;

      if (smilingProbability > happyThreshold) {
        setEmotion('happy');
        setEmoji(happyEmoji);
      } else {
        setEmotion('neutral');
        setEmoji(neutralEmoji);
      }
    } else {
      setFaceDetected(false);
    }
  }

  const animatedStyle = useAnimatedStyle(() =>({
    position: 'absolute',
    zIndex: 1,
    width: faceValues.value.width,
    height: faceValues.value.height,
    transform: [
      {translateX: faceValues.value.x},
      {translateY: faceValues.value.y},
    ],
    borderColor: '#00B69B',
    borderWidth: 5,
  }))

  useEffect(() => {
    requestPermission();
  },[]) 

  if (!permission?.granted) {
    return;
  }

  if (!cameraOpen) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bgImage}
          style={globalStyles.backgroundImage}
          resizeMode='cover'
        >
        <View style={styles.buttonContainer}>
          <Button 
              onPress={openCamera} 
              title="Open Camera"
              color="#00BFA4"
               />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {cameraOpen ? (
        <>
          {facedetected && (
            <View>
              <Animated.View style={animatedStyle} />
            </View>
          )}
          <Camera
            style={styles.camera}
            type={CameraType.front}
            ratio="16:9"
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.fast,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
              minDetectionInterval: 100,
              tracking: true,
            }}
          />
          <View style={[styles.bottomContainerWrapper, globalStyles.primaryColor]}>
            <View style={styles.bottomContainer}>
              <View style={styles.smallContainer}>
                <Image source={emoji} style={styles.emoji} />
                <Text style={styles.emotionText}>{emotion}</Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        // Render the "Open Camera" button when the camera is closed
        <TouchableOpacity onPress={openCamera}>
          <View>
            <Text>Open Camera</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}


