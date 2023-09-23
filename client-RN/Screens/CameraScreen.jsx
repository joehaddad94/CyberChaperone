import React, { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import globalStyles from '../styles';

const bgImage = require("../assets/images/DarkBG.png");

export default function CameraScreen() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

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

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function toggleCamera() {
    setCameraOpen(prevCameraOpen => !prevCameraOpen);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        style={globalStyles.backgroundImage}
        resizeMode='cover'
      >
      {!cameraOpen ? (
        <View style={styles.buttonContainer}>
          <Button onPress={toggleCamera} title="Open Camera" />
        </View>
      ) : (
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleCamera}>
              <Text style={styles.text}>Close Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
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
    // flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
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
