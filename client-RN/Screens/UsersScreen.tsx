import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import NestedHeader from '../Components/NestedHeader';
import globalStyles from '../styles';
import { StackParamList } from '../ParamTypes';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL } from '../react-native.config';
import { useAuth } from '../ContextFiles/AuthContext';

interface User {
    email: string;
    username: string;
    id: number;
}

export default function UsersScreen() {
    const navigation = useNavigation<NavigationProp<StackParamList>>();
    const user = useAuth();
    const [users, setUsers] = useState<User[]>([]);

    const handleCreateUserPress = () => {
        navigation.navigate('CreateUsersScreen');
    };

    async function fetchAllUsers() {
        try {
            const authToken = user.user.token;
            const apiUrl = `${BASE_URL}/api/fetch_all_users`;

            const response = await axios.get(apiUrl, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': `Bearer ${authToken}`
                }
            });
            console.log(response.data)
            setUsers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchAllUsers();
        }, [])
    );

    return (
        <SafeAreaView style={globalStyles.container}>
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
                <ScrollView style={[globalStyles.primaryColor, styles.scrollView]}>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <View style={styles.parentContainer} key={user.id}>
                                <View style={styles.leftContainer}>
                                    <Image
                                        source={require('../assets/images/user.png')}
                                        style={styles.profilePicture}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.username}>{user.username}</Text>
                                        <Text style={styles.email}>{user.email}</Text>
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
                        ))
                    ) : (
                        <Text>No users available</Text>
                    )}
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
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    parentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingLeft: 25,
        paddingRight: 20,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
    },
    textContainer: {
        gap: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    email: {
        fontSize: 14,
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
});
