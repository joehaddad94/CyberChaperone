import * as React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import globalStyles from '../styles';


const MyComponent = () => (
        <Button 
            mode="contained" 
            onPress={() => console.log('Pressed')}
            buttonColor='#00BFA4'
            style={styles.button}
            >
            Press me
        </Button>
);

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
    },
    button: {
      width: 300,
      borderRadius: 10,
    },
  });

export default MyComponent;