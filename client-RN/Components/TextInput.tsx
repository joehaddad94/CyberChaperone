import {useState} from 'react';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { ViewStyle } from 'react-native';
import { registerCredentials } from '../ParamTypes';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00BFA4',
  },
  text: {
    ...DefaultTheme.colors,
    primary: '#FF0000',
  },
    roundness: 4,
    background: '#2B2B2B', 
  };

interface InputProps {
  label: string;
  placeholder: string;
  handleChange: (field: keyof registerCredentials, value: string) => void;
  inputStyle?: ViewStyle;
  value: string;
  secureTextEntry: boolean;
}

const textInput: React.FC<InputProps> = ({label, placeholder, handleChange, inputStyle, secureTextEntry}) => {
  return (
    <TextInput
      // mode='outlined'
      label={label}
      placeholder={placeholder}
      onChangeText={(text) => handleChange(label as keyof registerCredentials, text)}
      underlineColor='#00BFA4'
      style={inputStyle}
      theme={customTheme}
      secureTextEntry = {secureTextEntry}
    />
  );
};

export default textInput
