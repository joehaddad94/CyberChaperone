import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import globalStyles from '../styles';
import { Ionicons } from '@expo/vector-icons';

interface NestedHeaderProps {
    headerTitle: string;
    backgroundColor: string;
    showButton: boolean;
    onButtonPress?: () => void;
  }
  
  const NestedHeader: React.FC<NestedHeaderProps> = ({ headerTitle, backgroundColor, showButton, onButtonPress}) => {
    const navigation = useNavigation();

    const handleBackButtonPress = () => {
        navigation.goBack();
      };

    return (
      <View style={[styles.headerContainer, { backgroundColor }]}>
        <View style = {styles.leftHeader}>
            <TouchableOpacity onPress={handleBackButtonPress}>
                <Ionicons name="arrow-back-sharp" size={40} color="white" /> 
            </TouchableOpacity>
            <Text style={globalStyles.headerTitle}> {headerTitle} </Text>
        </View>
        <View>
            {showButton && (
            <TouchableOpacity style = {styles.buttonContainer} onPress={onButtonPress}>
            <Text style={styles.buttonText}>Create User</Text>
            </TouchableOpacity>
        )}
        </View>
    </View>
    );
};

export default NestedHeader

const styles = StyleSheet.create({
    headerContainer: {
    height: 55,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: 'white',
        padding: 5,
        marginRight: 10,
        borderRadius: 5,
       
    },
    buttonText: {
        color: '#00B69B',
        fontSize: 16,
        marginRight: 10,
        fontWeight: 'bold',
    },
})