import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import Header from '../../Components/Header';
import PressableTitle from '../../Components/PressableTitle';
import { useNavigation, NavigationProp, CommonActions } from '@react-navigation/native';
import { StackParamList } from '../../ParamTypes';
import { useAuth } from '../../ContextFiles/AuthContext';

import globalStyles from '../../styles';
import { styles } from './styles';

const  ProfileScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { user, logout } = useAuth();
  
  function handleMenuItemPress(item: string) {

    switch (item) {
      case 'Manage Account':
        navigation.navigate('ManageProfileScreen');
        break;
      case 'Manage Users':
        navigation.navigate('UsersScreen');
        break;
      case 'Settings':
        navigation.navigate('SettingsScreen');
        break;
      case 'Logout':
        logout();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        );
        break;
      default:
        break;
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/images/DarkBG.png')}
      style={globalStyles.backgroundImage}
      resizeMode="cover"
    >
      <Header
        headerTitle={"Profile"}
        backgroundColor='#00B69B'
      />

      <View style={styles.container}>
        <View style = {styles.topContainer}>
          <Image
            source={require('../../assets/images/user.png')}
            style={styles.profilePicture}
          />
          <Text style = {styles.username}>{user.username}</Text>
          <Text style = {styles.email}>{user.email}</Text>
        </View>
        <View style = {styles.botContainer}>
          <PressableTitle title="Manage Account" onPress={() => handleMenuItemPress('Manage Account')} />
          <PressableTitle title="Manage Users" onPress={() => handleMenuItemPress('Manage Users')} />
          <PressableTitle title="Settings" onPress={() => handleMenuItemPress('Settings')} />
          <PressableTitle title="Logout" onPress={() => handleMenuItemPress('Logout')} isRed={true} />
        </View>
      </View>
    </ImageBackground>
  );
}

export default ProfileScreen;
