import React from 'react'
import { Text, View } from 'react-native'

import globalStyles from '../../styles';
import { styles } from './styles'

interface HeaderProps {
    headerTitle: string;
    backgroundColor: string;
  }
  
  const Header: React.FC<HeaderProps> = ({ headerTitle, backgroundColor}) => {
    return (
      <View style={[styles.headerContainer, { backgroundColor }]}>
        <Text style={globalStyles.headerTitle}> {headerTitle} </Text>
    </View>
  );
  };

export default Header