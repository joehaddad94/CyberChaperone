import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../ContextFiles/AuthContext';


export default function CameraScreen() {
    const { user } = useAuth();
    return(
        <View>
        </View>
    )
}