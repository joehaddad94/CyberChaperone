import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import globalStyles from '../styles';
import { Ionicons } from '@expo/vector-icons';



interface NestedHeaderProps {
    headerTitle: string;
    backgroundColor: string;
  }
  
  const NestedHeader: React.FC<NestedHeaderProps> = ({ headerTitle, backgroundColor}) => {
    const navigation = useNavigation();

    const handleBackButtonPress = () => {
        navigation.goBack();
      };

    return (
      <View style={[styles.headerContainer, { backgroundColor }]}>
        <TouchableOpacity onPress={handleBackButtonPress}>
            <Ionicons name="arrow-back-sharp" size={40} color="white" /> 
          </TouchableOpacity>
        <Text style={globalStyles.headerTitle}> {headerTitle} </Text>
    </View>
  );
  };
  
export default NestedHeader

const styles = StyleSheet.create({
  headerContainer: {
    height: 55,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})