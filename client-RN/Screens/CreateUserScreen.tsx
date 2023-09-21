import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles';
import NestedHeader from '../Components/NestedHeader';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button'
import { userCredentials } from '../ParamTypes';
import { BASE_URL } from '../react-native.config';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackParamList } from '../ParamTypes';
import axios from 'axios';

export default function CreateUserScreen() {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const navigation = useNavigation<NavigationProp<StackParamList>>();


    const [userCredentials, setUserCredentials] = useState<userCredentials>({
    username: '',
    email: '',
    password: '',
    })

    const handleChange = (field: keyof userCredentials, value: string) => {
    setUserCredentials({
        ...userCredentials,
        [field]: value,
    })
    }

    const validateForm = () => {
        let errors: Record<string, string> = {};

        if (!userCredentials.username) errors.username = 'Username is required';
        if (!userCredentials.email) errors.email = 'Email is required';
        if (!userCredentials.password) errors.password = 'Password is required';

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async () => {
    if (validateForm()) {
        try{
        const apiUrl = `${BASE_URL}/api/register`

        const response = await axios.post(apiUrl, userCredentials, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }})
            navigation.goBack();
        } catch(error) {
            console.log(error)
        }
        setUserCredentials({
            username: '',
            email: '',
            password: '',
        })
        }
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
                    value={userCredentials.username}
                    inputStyle={styles.inputStyle}
                    handleChange={(field, value) => handleChange('username', value)}
                    secureTextEntry={false}
                />
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    value={userCredentials.email}
                    inputStyle={styles.inputStyle}
                    handleChange={(field, value) => handleChange('email', value)}
                    secureTextEntry={false}
                />
                <TextInput
                    label="Password"
                    placeholder="Enter your password"
                    value={userCredentials.password}
                    inputStyle={styles.inputStyle}
                    handleChange={(field, value) => handleChange('password', value)}
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