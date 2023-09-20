import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

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

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: '#FFFFFF',
    width: 300,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00B69B',
  },
});

export default PressableTitle;
