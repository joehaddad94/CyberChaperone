 import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';

const bgImage = require("../assets/images/DarkBG.png");
const Logo = require("../assets/images/Logo.png");

export default function LoginScreen() {

  return (
    <ImageBackground
      source={bgImage}
      style={globalStyles.backgroundImage}
      resizeMode='cover'
    >
      <View style={[globalStyles.container, globalStyles.center]}>
        <Image
          source={Logo}
          resizeMode='cover'
          style={styles.logo}
        />
        <Text style={styles.text}>Hello, React Native with TypeScript!</Text>
      </View>
    </ImageBackground>
  );
}

  const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    logo: {
    width: 150,
    height: 150,
    }
  });