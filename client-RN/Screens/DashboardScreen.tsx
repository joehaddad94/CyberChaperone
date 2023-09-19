import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import SwipeCalendar from '../Components/SwipeCalendar';
import globalStyles from '../styles';


export default function DashboardScreen() {
    return(
        <View
              style={[globalStyles.backgroundImage,globalStyles.primaryColor]}
            >
            <SwipeCalendar/>
        </View>
        
        
    )
}