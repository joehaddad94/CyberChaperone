import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from '../Screens/Camera'; 
import InfoScreen from '../Screens/Info'; 
import DashboardScreen from '../Screens/dashboard'; 
import SettingsScreen from '../Screens/Settings'; 

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}