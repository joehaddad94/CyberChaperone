import { ImageBackground, Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import NestedHeader from '../Components/NestedHeader';
import globalStyles from '../styles';
import { StackParamList } from '../ParamTypes';
import { AntDesign } from '@expo/vector-icons';
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
        <ScrollView style = {[globalStyles.primaryColor, styles.scrollView]}>
            <View style = {styles.parentContainer}>
                <View style= {styles.leftContainer}>
                    <Image
                        source={require('../assets/images/user.png')}
                        style={styles.profilePicture}
                    />
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}>Username</Text>
                        <Text style = {styles.text}>Email</Text>
                    </View>
                </View>  
                <View style={styles.buttonContainer} >
                <TouchableOpacity
              // onPress={() => handleEditUser(user.id)}
                    style={styles.editButton}
                    >
                    <AntDesign name="edit" size={24} color="#00BFA4" />
                    </TouchableOpacity>
                    <TouchableOpacity
                    // onPress={() => handleDeleteUser(user.id)}
                    style={styles.deleteButton}
                    >
                    <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
                </View>    
            </View>
        </ScrollView>
        </ImageBackground>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        position: 'absolute',
        width: '100%',
        height: 650,
        bottom: 0,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    parentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingLeft: 25,
        paddingRight:20,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
    },
    textContainer :{
        gap:10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    profilePicture: {
        width: 70,
        height: 70,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
        editButton: {

        },
        deleteButton: {

        },
})