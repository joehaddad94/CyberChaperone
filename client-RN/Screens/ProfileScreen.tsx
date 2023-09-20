import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import globalStyles from '../styles';
import Header from '../Components/Header';
import PressableTitle from '../Components/PressableTitle';

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/DarkBG.png')}
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
            source={require('../assets/images/user.png')}
            style={styles.profilePicture}
          />
          <Text style = {styles.username}>Username</Text>
          <Text style = {styles.email}>email</Text>
        </View>
        <View style = {styles.topContainer}>
          <PressableTitle title="Manage Account" onPress={() => handleMenuItemPress('Manage Account')} />
          <PressableTitle title="Manage Users" onPress={() => handleMenuItemPress('Manage Users')} />
          <PressableTitle title="Settings" onPress={() => handleMenuItemPress('Settings')} />
          <PressableTitle title="Logout" onPress={() => handleMenuItemPress('Logout')} isRed={true} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  topContainer: {
    marginBottom: 40,
    alignItems: 'center',
  }, 
  botContainer: {
    marginBottom: 20,
  },
  username: {
    color: 'white',
    fontSize: 18,
  },
  email: {
    color: 'white',
    fontSize: 16,
    paddingTop: 5,
  }
});


function handleMenuItemPress(item: string) {

  switch (item) {
    case 'Manage Account':

      break;
    case 'Manage Users':

      break;
    case 'Settings':
  
      break;
    case 'Logout':

      break;
    default:
      break;
  }
}
