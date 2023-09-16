import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';

import { StackParamList } from './ParamTypes';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

  return (
    <NavigationContainer>
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
