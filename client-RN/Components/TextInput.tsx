import {useState} from 'react';
import { TextInput } from 'react-native-paper';
import { ViewStyle } from 'react-native';

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
      // selectionColor='#00BFA4'
      style={inputStyle}
    />
  );
};

export default textInput
