import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import globalStyles from '../styles';
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../ParamTypes';
import { loginCredentials } from '../ParamTypes';
import axios from 'axios';
import { BASE_URL } from '../react-native.config';
import { useAuth } from '../ContextFiles/AuthContext';
import { CommonActions } from '@react-navigation/native';


const bgImage = require("../assets/images/DarkBG.png");
const Logo = require("../assets/images/Logo.png");

export default function LoginScreen() {
  const { user, saveUserInfo, logout } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({
    username: '',
    password: '',
 })

  const handleChange = (field: keyof loginCredentials, value: string) => {
    setLoginCredentials({
      ...loginCredentials,
      [field]: value,
    })
  }

  const navigateToRegister = () => {
    navigation.navigate('RegisterScreen');
  }

  const validateFOrm = () => {
    let errors: Record<string, string> = {}

    if (!loginCredentials.username) errors.username = "Username is required";
    if (!loginCredentials.password) errors.password = "Password is required";

    setErrors(errors);
    
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async () => {
    if (validateFOrm()) {
      try{
        const apiUrl = `${BASE_URL}/api/login`

        const response = await axios.post(apiUrl, loginCredentials, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
            }})
        
        saveUserInfo(
          response.data.token,
          response.data.user.username,
          response.data.user.email
          )

          setLoginError(null);

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            })
          );
      } catch(error: any) {
        console.log(error)
        if (error.response && error.response.data && error.response.data.message) {
          setLoginError(error.response.data.message);
        } else {
          setLoginError('An error occurred during login.');
        }
      }
      setLoginCredentials({
        username: '',
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
            value = {loginCredentials.username}
            handleChange={(field, value) => handleChange('username', value)}
            inputStyle={styles.inputStyle}
            secureTextEntry={false}
          />
          {
            errors.username ? (
            <Text style= {styles.errorText}>{errors.username}</Text>
          ) : null } 
          <TextInput
            label="Password"
            placeholder="Enter your password"
            value= {loginCredentials.password}
            handleChange={(field, value) => handleChange('password', value)}
            inputStyle={styles.inputStyle}
            secureTextEntry={true}
          />
          {
            errors.password ? (
            <Text style= {styles.errorText}>{errors.password}</Text>
          ) : null }
          {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
          </View>
          <View style= {styles.button}>
          <Button 
            title = "Login"  
            handleSubmit={handleSubmit}/>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
          </Text>
          
          <TouchableOpacity onPress={navigateToRegister}>
            </TouchableOpacity>
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
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
  },
  footerText: {
    marginTop: 10,
    color: 'white',
  },
  register: {
    fontWeight: 'bold', 
    textDecorationLine: 'underline',
    color: 'white',
  },
  InputGap: {
    gap: 10,
  },
  button: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
  }
});
