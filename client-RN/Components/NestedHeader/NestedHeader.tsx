import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import globalStyles from '../../styles';
import { styles } from './styles'
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
            <Button
            title="Create User"
            onPress={onButtonPress}
            color="#292937"
          />
         )}
            

        </View>
    </View>
    );
};

export default NestedHeader
