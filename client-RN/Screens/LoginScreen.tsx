import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {

    return (
    <View style={styles.container}>
      <Text>Hello, React Native with TypeScript!</Text>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });