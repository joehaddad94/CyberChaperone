import * as React from 'react';
import { Button } from 'react-native-paper';
import {styles} from './styles';

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

export default ButtonComponent;