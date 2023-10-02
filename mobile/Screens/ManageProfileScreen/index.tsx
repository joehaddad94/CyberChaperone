import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NestedHeader from '../../Components/NestedHeader/NestedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from '../../Components/TextInput/TextInput'
import ButtonComponent from '../../Components/Button';
import { useAuth } from '../../ContextFiles/AuthContext';
import { BASE_URL } from '../../react-native.config';
import axios from 'axios';

import globalStyles from '../../styles';
import { styles } from './styles'

const ManageProfileScreen: React.FC = () => {
    const { user } = useAuth();
    const [profileInfo, setProfileInfo] = useState({
      firstName: user?.first_name || '',
      lastName: user?.last_name || ''
    });
    const navigation = useNavigation();

    const handleProfileChange = (field: string, value: string) => {
      setProfileInfo({
          ...profileInfo,
          [field]: value,
      });
  };

    const handleSave = () => {
      editProfile()
    };

    const editProfile = async () => {
      try {
        const apiUrl = `${BASE_URL}/api/edit_profile`;

        const updatedProfileData = {
          first_name: profileInfo.firstName,
          last_name: profileInfo.lastName,
      }

        const response = await axios.post(apiUrl, updatedProfileData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json',
          },
          });

            if (response.status === 200) {
              console.log('Profile updated successfully');
              navigation.goBack();
            } else {
              console.log('Failed to update profile');
            }
          } catch (error) {
            console.error('An error occurred while updating the profile:', error);
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
                label="First Name"
                placeholder="Edit your First Name"
                value={profileInfo.firstName}
                handleChange={(field, value) => handleProfileChange('firstName', value)}
                inputStyle={styles.inputStyle}
                secureTextEntry={false}
              />
            <TextInput 
                label="Last Name"
                placeholder="Edit your Last Name"
                value={profileInfo.lastName}
                handleChange={(field, value) => handleProfileChange('lastName', value)}
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
