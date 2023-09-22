import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../ContextFiles/AuthContext';
import PieChartComponent from '../Components/PieChartComponent';


export default function CameraScreen() {
    const { user } = useAuth();
    return(
        <View>
            <PieChartComponent/>
        </View>
    )
}