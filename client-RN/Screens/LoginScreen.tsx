import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'

const bgImage = require("../assets/images/DarkBG.png");
const Logo = require("../assets/images/Logo.png");

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange =  (newUsername: string) => {
    setUsername(newUsername);
  }

  const handlePasswordChange =  (newPassword: string) => {
    setPassword(newPassword);
  }

  return (
    <ImageBackground
      source={bgImage}
      style={globalStyles.backgroundImage}
      resizeMode='cover'
    >
      <View style={[globalStyles.container, globalStyles.center, styles.containerGap]}>
        <Image
          source={Logo}
          resizeMode='cover'
          style={styles.logo}
        />
        {/* <Text style={styles.text}>Hello, React Native with TypeScript!</Text> */}
        <TextInput 
          label="Username" 
          placeholder="Enter your username"
          onChangeText={handleUsernameChange}
          inputStyle= {styles.inputStyle}
          />
          <TextInput 
          label="Password" 
          placeholder="Enter your password"
          onChangeText={handlePasswordChange}
          inputStyle= {styles.inputStyle}
          />
          <Button 
            />
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
      fontFamily: 'Urbanist-Regular'
    },
    logo: {
    width: 150,
    height: 150,
    },
    inputStyle: {
      width: 300,
    },
    containerGap: {
      gap: 10,
    }

  });