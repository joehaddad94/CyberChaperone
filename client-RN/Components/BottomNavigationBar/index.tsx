import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import globalStyles from '../../styles';
import CameraScreen from '../../Screens/CameraScreen'; 
import InfoScreen from '../../Screens/InfoScreen'; 
import DashboardScreen from '../../Screens/DashboardScreen'; 
import ProfileScreen from '../../Screens/ProfileScreen';
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import Header from '../Header';

const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customTabBarButton}>
      {children}
    </TouchableOpacity>
  );
}

function BottomTabsNavigator() {
  return (
    <ImageBackground
      source={require('../assets/images/DarkBG.png')}
      style={[globalStyles.backgroundImage, globalStyles.container]}
      resizeMode="cover"
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: '#00B69B',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconComponent: React.ComponentType<any> = FontAwesome;
            let iconName;

            if (route.name === 'Camera') {
              iconComponent = Ionicons;
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'Info') {
              iconComponent = Entypo;
              iconName = focused ? 'info' : 'info-with-circle';
            } else if (route.name === 'Dashboard') {
              iconComponent = Ionicons;
              iconName = focused ? 'ios-analytics-sharp' : 'ios-analytics-outline';
            } else if (route.name === 'Profile') {
              iconComponent = FontAwesome;
              iconName = focused ? 'user' : 'user-o';
            }

            const iconStyle = focused ? { color: 'white' } : { color: '#454545' };

            return React.createElement(iconComponent, {
              name: iconName,
              size: 28,
              style: iconStyle,
            });
          },
        })}
      >
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </ImageBackground>
  );
}

export default BottomTabsNavigator;

