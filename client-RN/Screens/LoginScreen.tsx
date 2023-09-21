import React, { useEffect, useState } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import globalStyles from '../styles';
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../ParamTypes';
import { loginCredentials } from '../ParamTypes';

const bgImage = require("../assets/images/DarkBG.png");
const Logo = require("../assets/images/Logo.png");

export default function LoginScreen() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if(validateFOrm()) {
      setUsername("");
      setPassword("");
    }
  }

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
            value = {username}
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
            value= {password}
            handleChange={(field, value) => handleChange('password', value)}
            inputStyle={styles.inputStyle}
            secureTextEntry={true}
          />
          {
            errors.password ? (
            <Text style= {styles.errorText}>{errors.password}</Text>
          ) : null }
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
              <Text style={styles.register}>Register</Text>
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
