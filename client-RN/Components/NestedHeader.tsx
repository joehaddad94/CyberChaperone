import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import globalStyles from '../styles';

interface NestedHeaderProps {
    headerTitle: string;
    backgroundColor: string;
  }
  
  const Header: React.FC<NestedHeaderProps> = ({ headerTitle, backgroundColor}) => {
    return (
      <View style={[styles.headerContainer, { backgroundColor }]}>
        <Text style={globalStyles.headerTitle}> {headerTitle} </Text>
    </View>
  );
  };

  
export default Header

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