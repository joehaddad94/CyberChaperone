import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';

export default function InfoScreen() {
    return(
        <View style={[globalStyles.container, globalStyles.primaryColor]}>
            <Text>
                Info Screen!!!
            </Text>
        </View>
    )
}