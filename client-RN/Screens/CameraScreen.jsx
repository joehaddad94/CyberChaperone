import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import the focus effect hook
import globalStyles from '../styles';

const bgImage = require("../assets/images/DarkBG.png");

export default function CameraScreen({ navigation }) {
  const [cameraOpen, setCameraOpen] = useState(true); // Open the selfie camera by default
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
    React.useCallback(() => {
      // This callback runs when the screen is focused
      setCameraOpen(true); // Open the camera when the screen is focused
      return () => {
        // This callback runs when the screen is unfocused
        // Close the camera when the screen is unfocused
        if (cameraOpen) {
          setCameraOpen(false);
        }
      };
    }, [])
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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        style={globalStyles.backgroundImage}
        resizeMode='cover'
      >
        {cameraOpen ? (
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setCameraOpen(false)}>
                <Text style={styles.text}>Close Camera</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <View style={styles.buttonContainer}>
            <Button onPress={() => setCameraOpen(true)} title="Open Camera" />
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
