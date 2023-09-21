import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NestedHeader from '../Components/NestedHeader';
import globalStyles from '../styles';
import SearchBar from '../Components/SearchBar';


export default function UsersScreen() {
    return(
    <SafeAreaView style = {globalStyles.container}>
        <ImageBackground
            source={require('../assets/images/DarkBG.png')}
            style={globalStyles.backgroundImage}
            resizeMode="cover"
        >
        <NestedHeader
            headerTitle={'Users'}
            backgroundColor="#00B69B"
            showButton={true}
        />
        </ImageBackground>
    </SafeAreaView>
    );
}