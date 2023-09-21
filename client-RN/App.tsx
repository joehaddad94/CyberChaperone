import React, { useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { AuthProvider } from './ContextFiles/AuthContext';
import * as SplashScreen from 'expo-splash-screen';


import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ManageProfileScreen from './Screens/ManageProfileScreen';
import UsersScreen from './Screens/UsersScreen';
import CreateUsersScreen from './Screens/CreateUserScreen'

import { StackParamList } from './ParamTypes';

const Stack = createNativeStackNavigator<StackParamList>();

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log('not loaded')
    return null;
  }

  return (
    <AuthProvider>
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageProfileScreen"
          component={ManageProfileScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UsersScreen"
          component={UsersScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateUsersScreen"
          component={CreateUsersScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
