import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles';
import Header from '../Components/Header'

export default function ProfileScreen() {
    return(
            <ImageBackground
              source={require('../assets/images/DarkBG.png')}
              style={globalStyles.backgroundImage}
              resizeMode="cover"
            >
              <Header 
                headerTitle={"Profile"}
                backgroundColor= '#00B69B'
            />
              
              <View style={[globalStyles.container]}>
                <Text>Profile Screen</Text>
              </View>
            </ImageBackground>
          );
        
}