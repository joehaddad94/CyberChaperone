import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import globalStyles from '../styles';
import Header from '../Components/Header';
import PressableTitle from '../Components/PressableTitle'; // Import the new component

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
        <View>
        <Image
          source={require('../assets/images/user.png')}
          style={styles.profilePicture}
        />
        <Text>Username</Text>
        <Text>email</Text>

        </View>
        <View style = {styles.container}>
        <PressableTitle title="Manage Account" onPress={() => handleMenuItemPress('Manage Account')} />
        <PressableTitle title="Manage Users" onPress={() => handleMenuItemPress('Manage Users')} />
        <PressableTitle title="Settings" onPress={() => handleMenuItemPress('Settings')} />
        <PressableTitle title="Logout" onPress={() => handleMenuItemPress('Logout')} />
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
    borderRadius: 75,
    marginBottom: 20,
  },
  pressableTitle: {
    width: 200,
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
