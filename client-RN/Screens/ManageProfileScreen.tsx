import React, { useState } from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import NestedHeader from '../Components/NestedHeader';
import globalStyles from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';

const ManageProfileScreen: React.FC = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleFirstNameChange = () => {
    }

    const handleLastNameChange = () => {
    }

  return (
    <SafeAreaView style = {globalStyles.container}>
    <ImageBackground
      source={require('../assets/images/DarkBG.png')}
      style={globalStyles.backgroundImage}
      resizeMode="cover"
    >
      <NestedHeader
        headerTitle={'Settings'}
        backgroundColor="#00B69B"
        showButton={false}
      />

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require('../assets/images/user.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>email</Text>
        </View>
        <View style={styles.topContainer}>
            <TextInput
                label="First Name"
                placeholder="Enter your First Name"
                value={firstName}
                onChangeText={handleFirstNameChange}
                style={styles.inputStyle}
                secureTextEntry={false}
              />
            <TextInput 
                label="Last Name"
                placeholder="Enter your Last Name"
                value={lastName}
                onChangeText={handleLastNameChange}
                style={styles.inputStyle}
                secureTextEntry={false}
            />
        </View>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

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
  },
  inputStyle: {
    width: 300,
  },
});

export default ManageProfileScreen;
