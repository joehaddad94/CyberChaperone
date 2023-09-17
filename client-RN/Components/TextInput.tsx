import {useState} from 'react';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { ViewStyle } from 'react-native';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00BFA4',
  },
};
interface InputProps {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  inputStyle?: ViewStyle;
}

const textInput: React.FC<InputProps> = ({label, placeholder, onChangeText, inputStyle}) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      onChangeText={onChangeText}
      underlineColor="#00BFA4"
      activeOutlineColor='00BFA4'
      style={inputStyle}
      theme={customTheme}
    />
  );
};

export default textInput
