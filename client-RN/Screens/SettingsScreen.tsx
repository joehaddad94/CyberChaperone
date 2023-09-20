import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import NestedHeader from '../Components/NestedHeader';


export default function SettingsScreen() {
    return(
        <View>
            <NestedHeader headerTitle={'Settings'} backgroundColor = '#00B69B'/>
        </View>
    );
}