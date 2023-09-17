import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import globalStyles from '../styles';
import CameraScreen from '../Screens/Camera'; 
import InfoScreen from '../Screens/Info'; 
import DashboardScreen from '../Screens/dashboard'; 
import SettingsScreen from '../Screens/Settings';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#00B69B"
  }
}

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        // position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: "#00B69B",
      },
    }}
    >
      <Tab.Screen 
        name="Camera" 
        component={CameraScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style= {globalStyles.center}>
                {/* <Feather name="camera" size={24} color="black" /> */}
                {/* <Ionicons name="camera-outline" size={24} color="black" /> */}
              </View>
            )
          }
        }}
        />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;