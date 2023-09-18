import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import globalStyles from '../styles';
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../ParamTypes';

const bgImage = require("../assets/images/DarkBG.png");
const Logo = require("../assets/images/Logo.png");

export default function LoginScreen() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState({});
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

  const validateFOrm = () => {
    let errors: Record<string, string> = {}

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    
    return Object.keys(errors).length === 0;
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
          <View style = {styles.InputGap}>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            value = {username}
            onChangeText={handleUsernameChange}
            inputStyle={styles.inputStyle}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            value= {password}
            onChangeText={handlePasswordChange}
            inputStyle={styles.inputStyle}
          />
          <Button 
            title = "Login"  
            onPress={() => {}}/>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={styles.register}>Register</Text>
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
    gap: 100,
  },
  footer: {
    backgroundColor: '#787878',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
  register: {
    fontWeight: 'bold', 
    textDecorationLine: 'underline',
    color: 'white',
  },
  InputGap: {
    gap: 40,
  },
});
