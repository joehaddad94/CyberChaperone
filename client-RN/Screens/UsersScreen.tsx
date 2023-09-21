import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import NestedHeader from '../Components/NestedHeader';
import globalStyles from '../styles';
import { StackParamList } from '../ParamTypes';
import SearchBar from '../Components/SearchBar';


export default function UsersScreen() {
    const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleCreateUserPress = () => {
    // Navigate to the CreateUserScreen
    navigation.navigate('CreateUsersScreen');
  };

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
            onButtonPress={handleCreateUserPress}
        />
        </ImageBackground>
    </SafeAreaView>
    );
}