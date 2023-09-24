import React, { useState } from 'react';
import { ImageBackground, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NestedHeader from '../../Components/NestedHeader/NestedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from '../../Components/TextInput'
import ButtonComponent from '../../Components/Button';
import { useAuth } from '../../ContextFiles/AuthContext';

import globalStyles from '../../styles';
import { styles } from './styles'

const ManageProfileScreen: React.FC = () => {
    const { user } = useAuth();
    const [firstName, setFirstName] = useState(user?.first_name || '')
    const [lastName, setLastName] = useState(user?.last_name || '')
    const [isFirstNameChanged, setIsFirstNameChanged] = useState<boolean>(false);
    const [isLastNameChanged, setIsLastNameChanged] = useState<boolean>(false);
    const navigation = useNavigation();

    const handleFirstNameChange = (value: string) => {
      setFirstName(value);
      setIsFirstNameChanged(value !== user.first_name);
    };

    const handleLastNameChange = (value: string) => {
      setLastName(value);
      setIsLastNameChanged(value !== user.last_name);
    };

    const handleSave = () => {
      if (isFirstNameChanged || isLastNameChanged) {

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
      } else {
        console.log('No changes detected.')
        navigation.goBack();
      }
    };
    
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
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <View style={styles.botContainer}>
            <TextInput
                label={firstName ? firstName : "First Name"}
                placeholder="Edit your First Name"
                value={firstName}
                handleChange={handleFirstNameChange}
                inputStyle={styles.inputStyle}
                secureTextEntry={false}
              />
            <TextInput 
                label={lastName ? lastName : "Last Name"}
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
