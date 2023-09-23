import React, { useState, useEffect, useCallback } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import the focus effect hook
import globalStyles from '../styles';

const bgImage = require("../assets/images/DarkBG.png");

export default function CameraScreen({ navigation }) {
  const [cameraOpen, setCameraOpen] = useState(false); // Initialize as closed
  const [type] = useState(CameraType.front); // Set the camera type to front (selfie)
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    // Cleanup function when the component unmounts
    return () => {
      // Release the camera resources when the component unmounts
      if (cameraOpen) {
        setCameraOpen(false);
      }
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      // This callback runs when the screen is focused
      // If the camera is open, keep it open; otherwise, leave it closed
      return () => {
        // This callback runs when the screen is unfocused
        // Close the camera when the screen is unfocused
        if (cameraOpen) {
          setCameraOpen(false);
        }
      };
    }, [cameraOpen]) // Include cameraOpen in the dependencies to react to its changes
  );

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function openCamera() {
    setCameraOpen(true); // Open the camera when the button is pressed
  }

  function closeCamera() {
    setCameraOpen(false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        style={globalStyles.backgroundImage}
        resizeMode='cover'
      >
        {cameraOpen ? (
          <Camera 
            style={styles.camera} 
            type={type}
            ratio= "16:9"
            >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={closeCamera}>
                <Text style={styles.text}>Close Camera</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <View style={styles.buttonContainer}>
            <Button 
              onPress={openCamera} 
              title="Open Camera"
              color="#00BFA4"
              />
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

// import React, { useState, useEffect, useCallback } from 'react';
// import { Camera, CameraType } from 'expo-camera';
// import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import globalStyles from '../styles';

// const bgImage = require("../assets/images/DarkBG.png");

// export default function CameraScreen({ navigation }) {
//   const [cameraOpen, setCameraOpen] = useState(false);
//   const [type] = useState(CameraType.front);
//   const [permission, requestPermission] = Camera.useCameraPermissions();
//   const [aspectRatio, setAspectRatio] = useState("16:9"); // Default to 16:9

//   useEffect(() => {
//     return () => {
//       if (cameraOpen) {
//         setCameraOpen(false);
//       }
//     };
//   }, []);

//   useFocusEffect(
//     useCallback(() => {
//       return () => {
//         if (cameraOpen) {
//           setCameraOpen(false);
//         }
//       };
//     }, [cameraOpen])
//   );

//   useEffect(() => {
//     // Retrieve the supported resolutions and select an appropriate aspect ratio
//     async function fetchSupportedResolutions() {
//       const ratios = await Camera.getAvailableCameraPreviewResolutionsAsync(type);
      
//       // Determine the desired aspect ratio based on the device's specifications
//       // For example, you might choose a specific ratio like "16:9" or calculate it programmatically
      
//       // Set the selected aspect ratio
//       setAspectRatio("16:9"); // Modify this value based on your device's specifications
//     }

//     fetchSupportedResolutions();
//   }, [type]);

//   if (!permission) {
//     return <View />;
//   }

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
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
//           <Camera
//             style={[styles.camera, { aspectRatio: aspectRatio }]}
//             type={type}
//           >
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.button} onPress={closeCamera}>
//                 <Text style={styles.text}>Close Camera</Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         ) : (
//           <View style={styles.buttonContainer}>
//             <Button onPress={openCamera} title="Open Camera" />
//           </View>
//         )}
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     height: '100%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });
