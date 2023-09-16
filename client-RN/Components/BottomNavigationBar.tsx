import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from '../Screens/Camera'; 
import InfoScreen from '../Screens/Info'; 
import DashboardScreen from '../Screens/dashboard'; 
import SettingsScreen from '../Screens/Settings'; 
import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
        initialRouteName='Camera'
        screenOptions={{
            tabBarStyle: { 
                position: 'absolute',
            },
          }}
    >
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;