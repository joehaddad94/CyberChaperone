import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ProfileMenuItemProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.menuItem, style]} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: '#FFFFFF',
    width: '80%',
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

export default ProfileMenuItem;
