import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles';
import NestedHeader from '../Components/NestedHeader';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button'


export default function CreateUserScreen() {
  // Define state for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    // Handle the form submission logic here
    // You can access the form values from the state variables (username, email, password)
    // Example: Send a POST request to create a new user
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require('../assets/images/DarkBG.png')}
        style={globalStyles.backgroundImage}
        resizeMode="cover"
      >
        <NestedHeader
          headerTitle="Create User"
          backgroundColor="#00B69B"
          showButton={false}
        />
        
        <View style={[globalStyles.container, styles.mainContainer ]}>
            <View>
                <Image
                    source={require('../assets/images/user.png')}
                    style={styles.profilePicture}
                />
            </View>
            <View style= {styles.inputContainer}>
                <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    value={username}
                    inputStyle={styles.inputStyle}
                    onChangeText={(text) => setUsername(text)}
                    secureTextEntry={false}
                />
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    inputStyle={styles.inputStyle}
                    onChangeText={(text) => setEmail(text)}
                    secureTextEntry={false}
                />
                <TextInput
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    inputStyle={styles.inputStyle}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Button title="Save" handleSubmit={handleSubmit} />
            </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    inputStyle: {
        width: 300,
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
})