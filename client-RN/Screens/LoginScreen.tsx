import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import globalStyles from '../styles';
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterScreen from '../Screens/RegisterScreen';
import { StackParamList } from '../ParamTypes';

const bgImage = require("../assets/images/DarkBG.png");
const Logo = require("../assets/images/Logo.png");

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  }

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  }

  const navigateToRegister = () => {
    navigation.navigate('RegisterScreen');
  }

  return (
    <SafeAreaView style={[globalStyles.container, styles.screen]}>
      <ImageBackground
        source={bgImage}
        style={globalStyles.backgroundImage}
        resizeMode='cover'
      >
        <View style={[styles.container, styles.containerGap]}>
          <Image
            source={Logo}
            resizeMode='cover'
            style={styles.logo}
          />
          <TextInput
            label="Username"
            placeholder="Enter your username"
            onChangeText={handleUsernameChange}
            inputStyle={styles.inputStyle}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            onChangeText={handlePasswordChange}
            inputStyle={styles.inputStyle}
          />
          <Button />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Register</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  footer: {
    backgroundColor: '#787878',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  footerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
