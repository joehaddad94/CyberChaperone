import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

interface PressableTitle {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isRed?: boolean;
}

const PressableTitle: React.FC<PressableTitle> = ({ title, onPress, style, isRed }) => {

  const titleStyle = isRed ? [styles.menuText, { color: 'red' }] : styles.menuText;

  return (
    <TouchableOpacity style={[styles.menuItem, style]} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PressableTitle;
