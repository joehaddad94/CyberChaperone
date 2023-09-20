import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import NestedHeader from '../Components/NestedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SettingsScreen() {
    return(
        <SafeAreaView>
            <NestedHeader 
                headerTitle={'Settings'} 
                backgroundColor = '#00B69B'
                showButton = {false}
                />
        </SafeAreaView>
    );
}