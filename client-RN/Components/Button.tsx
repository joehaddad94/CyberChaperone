import * as React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface ButtonComponentProps {
  handleSubmit: () => void;
  title: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ handleSubmit, title }) => (
        <Button 
            mode="contained" 
            onPress={() => handleSubmit()}
            buttonColor='#00BFA4'
            style={styles.button}
            >
            {title}
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

export default ButtonComponent;