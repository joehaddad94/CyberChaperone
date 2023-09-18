import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import globalStyles from '../styles';
import CameraScreen from '../Screens/CameraScreen'; 
import InfoScreen from '../Screens/InfoScreen'; 
import DashboardScreen from '../Screens/DashboardScreen'; 
import ProfileScreen from '../Screens/ProfileScreen';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Header from './Header';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: "#00B69B",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
    }}
    >
      <Tab.Screen 
        name="Camera" 
        component={CameraScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style= {globalStyles.center}>
                <Ionicons name="camera-outline" size={24} color="black" />
              </View>
            )
          },
          headerShown: false,
        }}
        />
      <Tab.Screen 
        name="Info" 
        component={InfoScreen} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style= {globalStyles.center}>
                <Entypo name="info" size={24} color="black" />
              </View>
            )
          },
          headerShown: true,
        }}
        />
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style= {globalStyles.center}>
                <Ionicons name="ios-analytics-sharp" size={24} color="black" />
              </View>
            )
          },
          headerShown: true,
          headerStyle: {
            backgroundColor: '#00B69B'
          }
        }}
        />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style= {globalStyles.center}>
                <FontAwesome name="user" size={24} color="grey" />
              </View>
            )
          },
          headerShown: true,
        }}
        />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;