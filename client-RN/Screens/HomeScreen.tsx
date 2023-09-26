import React, { useEffect } from 'react';
import BottomTabsNavigator from '../Components/BottomNavigationBar'
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles';

export default function HomeScreen() {

    return(
        <SafeAreaView style={[globalStyles.container]}>
        <BottomTabsNavigator/>
        </SafeAreaView>
    )
}