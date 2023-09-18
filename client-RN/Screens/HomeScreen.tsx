import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import BottomTabsNavigator from '../Components/BottomNavigationBar'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Switch from '../Components/Switch'
import SearchBar from '../Components/SearchBar'
import Header from '../Components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeCalendar from '../Components/SwipeCalendar';
import globalStyles from '../styles';
import { StackParamList } from '../ParamTypes';

import CameraScreen from './CameraScreen';
import InfoScreen from './InfoScreen';
import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';

export default function HomeScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const Stack = createNativeStackNavigator<StackParamList>();

    return(
        <View style={globalStyles.container}>
            <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen
                name="CameraScreen"
                component={CameraScreen} 
                options={{ headerShown: false }}
                />
            <Stack.Screen
                name="InfoScreen"
                component={InfoScreen} 
                options={{ headerShown: true }}
                />
            <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen} 
            options={{ headerShown: true }}
            />
             <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen} 
            options={{ headerShown: true }}
            />
        </Stack.Navigator>
        </NavigationContainer>
                {/* <Header 
                    headerTitle={"Settings"}
                /> */}
                {/* <SwipeCalendar/> */}
                
                {/* <SearchBar/> */}
                {/* <Switch/> */}
        <BottomTabsNavigator/>
        </View>

    )
}