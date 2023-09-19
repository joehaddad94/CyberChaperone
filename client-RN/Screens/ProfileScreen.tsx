import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';

export default function ProfileScreen() {
    return(
            <ImageBackground
              source={require('../assets/images/DarkBG.png')}
              style={globalStyles.backgroundImage}
              resizeMode="cover"
            >
           
              <View style={[globalStyles.container]}>
                <Text>Profile Screen</Text>
              </View>
            </ImageBackground>
          );
        
}