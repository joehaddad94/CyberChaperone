import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';
import Header from '../Components/Header'


export default function InfoScreen() {
    return(
        <View style={[globalStyles.container, globalStyles.primaryColor]}>
            <Header 
                headerTitle={"Info"}
            />
            <Text>
                Info Screen!!!
            </Text>
        </View>
    )
}