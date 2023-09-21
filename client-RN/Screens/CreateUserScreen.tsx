import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles";
import NestedHeader from "../Components/NestedHeader";
import { ImageBackground, View, Text } from 'react-native';


export default function CreateUserScreen () {
    return(
        <SafeAreaView style = {globalStyles.container}>
            <ImageBackground
            source={require('../assets/images/DarkBG.png')}
            style={globalStyles.backgroundImage}
            resizeMode="cover"
            >
            <NestedHeader
                headerTitle = "Create User"
                backgroundColor= "#00B69B"
                showButton= {false}
            />
            </ImageBackground>
        </SafeAreaView>
    )
}