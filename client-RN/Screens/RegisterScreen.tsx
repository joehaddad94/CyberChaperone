import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import globalStyles from '../styles';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../ParamTypes';
import { Ionicons } from '@expo/vector-icons';
import { BASE_URL } from '../react-native.config';
import { registerCredentials } from '../ParamTypes';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { useAuth } from '../ContextFiles/AuthContext';

const bgImage = require('../assets/images/DarkBG.png');
const Logo = require('../assets/images/Logo.png');

export default function RegisterScreen() {
  const { user, saveUserInfo, logout } = useAuth();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const [registerCredentials, setRegisterCredentials] = useState<registerCredentials>({
    username: '',
    email: '',
    password: '',
 })

  const handleChange = (field: keyof registerCredentials, value: string) => {
    setRegisterCredentials({
      ...registerCredentials,
      [field]: value,
    })
  }

  const validateForm = () => {
    let errors: Record<string, string> = {};

    if (!registerCredentials.username) errors.username = 'Username is required';
    if (!registerCredentials.email) errors.email = 'Email is required';
    if (!registerCredentials.password) errors.password = 'Password is required';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try{
        const apiUrl = `${BASE_URL}/api/register`

        const response = await axios.post(apiUrl, registerCredentials, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
            }})
        
        saveUserInfo(
          response.data.token,
          response.data.user.username,
          response.data.user.email
          )
          // navigation.navigate('HomeScreen');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }], 
            })
          );
      } catch(error) {
        console.log(error)
      }
      setRegisterCredentials({
        username: '',
        email: '',
        password: '',
      })
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrors({});
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errors]);

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[globalStyles.container, styles.screen]}>
      <ImageBackground
        source={bgImage}
        style={globalStyles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackButtonPress}>
            <Ionicons name="arrow-back-sharp" size={40} color="white" /> 
          </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={globalStyles.headerTitle}> Register </Text>
        </View>
    </View>
        <View style={[styles.container, styles.containerGap]}>
          <Image source={Logo} resizeMode="cover" style={styles.logo} />
          <View style={styles.InputGap}>
            <TextInput
              label="Username"
              placeholder="Enter your username"
              value={registerCredentials.username}
              handleChange={(field, value) => handleChange('username', value)}
              inputStyle={styles.inputStyle}
              secureTextEntry={false}
            />
            {errors.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <TextInput
              label="Email"
              placeholder="Enter your email"
              value={registerCredentials.email}
              handleChange={(field, value) => handleChange('email', value)}
              inputStyle={styles.inputStyle}
              secureTextEntry={false}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <TextInput
              label="Password"
              placeholder="Enter your password"
              value={registerCredentials.password}
              handleChange={(field, value) => handleChange('password', value)}
              inputStyle={styles.inputStyle}
              secureTextEntry={true}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>
          <View style={styles.button}>
            <Button title="Register" handleSubmit={handleSubmit} />
          </View>
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
    marginBottom: 50,
  },
  inputStyle: {
    width: 300,
  },
  containerGap: {
    gap: 20,
  },
  footer: {
    backgroundColor: '#787878',
    width: '100%',
    height: 100,
    alignItems: 'center',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  footerText: {
    marginTop: 10,
    color: 'white',
  },
  login: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'white',
  },
  InputGap: {
    gap: 15,
  },
  button: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
  },
  headerContainer: {
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#787878'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
