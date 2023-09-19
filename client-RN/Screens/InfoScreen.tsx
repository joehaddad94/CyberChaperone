import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';
import Header from '../Components/Header'


export default function InfoScreen() {
    return(
        <View style={[globalStyles.container, globalStyles.primaryColor]}>
            <Header 
                headerTitle={"Info"}
                backgroundColor = '#00B69B'
            />
            <Text>
                Info Screen!!!
            </Text>
        </View>
    )
}