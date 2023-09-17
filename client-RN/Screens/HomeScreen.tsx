import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import BottomTabsNavigator from '../Components/BottomNavigationBar'
import Switch from '../Components/Switch'
import SearchBar from '../Components/SearchBar'
import Header from '../Components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return(
        <SafeAreaView>
            <Header 
                headerTitle={"Settings"}
            />
            
            {/* <SearchBar/> */}
            {/* <Switch/> */}
            {/* <BottomTabsNavigator/> */}
        </SafeAreaView>
    )
}