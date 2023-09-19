import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyles from '../styles';

interface HeaderProps {
    headerTitle: string;
    backgroundColor: string;
  }
  
  const Header: React.FC<HeaderProps> = ({ headerTitle, backgroundColor }) => {
    return (
        <View style= {[styles.headerContainer, globalStyles.center,, { backgroundColor }]}>
            <Text style ={globalStyles.headerTitle}> {headerTitle} </Text>
        </View>
    )
  }

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    height:50,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  }
})