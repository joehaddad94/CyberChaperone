import {useState} from 'react';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { ViewStyle } from 'react-native';

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
  onChangeText: (text: string) => void;
  inputStyle?: ViewStyle;
  value: string;
}

const textInput: React.FC<InputProps> = ({label, placeholder, onChangeText, inputStyle}) => {
  return (
    <TextInput
      mode='outlined'
      label={label}
      placeholder={placeholder}
      onChangeText={onChangeText}
      underlineColor='#00BFA4'
      // activeOutlineColor='00BFA4'
      style={inputStyle}
      theme={customTheme}
    />
  );
};

export default textInput
