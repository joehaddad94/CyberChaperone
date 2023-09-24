import React, { useState } from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import NestedHeader from '../../Components/NestedHeader/NestedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from '../../Components/TextInput'
import ButtonComponent from '../../Components/Button';

import globalStyles from '../../styles';
import { styles } from './styles'

const ManageProfileScreen: React.FC = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleFirstNameChange = () => {
    }

    const handleLastNameChange = () => {
    }

    const handleSave = () => {
    }

  return (
    <SafeAreaView style = {globalStyles.container}>
    <ImageBackground
      source={require('../../assets/images/DarkBG.png')}
      style={globalStyles.backgroundImage}
      resizeMode="cover"
    >
      <NestedHeader
        headerTitle={'Account'}
        backgroundColor="#00B69B"
        showButton={false}
      />

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require('../../assets/images/user.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>email</Text>
        </View>
        <View style={styles.botContainer}>
            <TextInput
                label="First Name"
                placeholder="Enter your First Name"
                value={firstName}
                handleChange={handleFirstNameChange}
                inputStyle={styles.inputStyle}
                secureTextEntry={false}
              />
            <TextInput 
                label="Last Name"
                placeholder="Enter your Last Name"
                value={lastName}
                handleChange={handleLastNameChange}
                inputStyle={styles.inputStyle}
                secureTextEntry={false}
            />
        </View>
        <ButtonComponent
            title='Save Changes'
            handleSubmit={handleSave}
        />
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

export default ManageProfileScreen;
