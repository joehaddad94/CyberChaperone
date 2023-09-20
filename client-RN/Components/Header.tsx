import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import globalStyles from '../styles';

interface HeaderProps {
    headerTitle: string;
    backgroundColor: string;
  }
  
  const Header: React.FC<HeaderProps> = ({ headerTitle, backgroundColor}) => {
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