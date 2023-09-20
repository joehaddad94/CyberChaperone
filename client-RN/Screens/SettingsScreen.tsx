import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Switch } from 'react-native';
import NestedHeader from '../Components/NestedHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles';

export default function SettingsScreen() {
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(false);

  const togglePushNotifications = () => {
    setPushNotificationsEnabled(!pushNotificationsEnabled);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require('../assets/images/DarkBG.png')}
        style={globalStyles.backgroundImage}
        resizeMode="cover"
      >
        <NestedHeader
          headerTitle={'Settings'}
          backgroundColor="#00B69B"
          showButton={false}
        />
        <View style={styles.contentContainer}>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Push Notifications</Text>
            <Switch
              value={pushNotificationsEnabled}
              onValueChange={togglePushNotifications}
              trackColor={{ false: '#767577', true: '#00B69B' }}
              thumbColor={pushNotificationsEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingText: {
    color: 'white',
    fontSize: 18,
  },
});
