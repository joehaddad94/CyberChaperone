import React, { useState, useEffect, useCallback } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import the focus effect hook
import globalStyles from '../../styles';
import { styles } from './styles'

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
    }, [cameraOpen])
  );

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function openCamera() {
    setCameraOpen(true);
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
          <View style = {styles.cameraHeight}>
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
          </View>
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


