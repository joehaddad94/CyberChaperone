import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import BottomTabsNavigator from '../Components/BottomNavigationBar'
import Switch from '../Components/Switch'
import SearchBar from '../Components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return(
        <SafeAreaView>
            <SearchBar/>
            {/* <Switch/> */}
            {/* <BottomTabsNavigator/> */}
        </SafeAreaView>
    )
}