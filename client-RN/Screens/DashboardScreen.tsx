import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import Header from '../Components/Header'
import SwipeCalendar from '../Components/SwipeCalendar';
import globalStyles from '../styles';


export default function DashboardScreen() {
    return(
        <View style={[globalStyles.backgroundImage,globalStyles.primaryColor]}>
             <Header 
                headerTitle={"Dashboard"}
                backgroundColor= '#00B69B'
            /> 
            <SwipeCalendar/>
        </View>
        
        
    )
}