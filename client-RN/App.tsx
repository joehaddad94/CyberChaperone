import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';

import { StackParamList } from './ParamTypes';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'Urbanist': require('./assets/fonts/Urbanist.ttf'),
  // });

  // if (!fontsLoaded) {
  //   console.log('not loaded')
  //   return null;
  // }

  return (
    <NavigationContainer>
      {/* <Text style={styles.text}>Hello, React Native with TypeScript!</Text> */}
      <Stack.Navigator>
      <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    // fontFamily: 'Urbanist'
  }
})