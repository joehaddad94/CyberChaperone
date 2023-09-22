import { ImageBackground, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import globalStyles from '../styles';
import Header from '../Components/Header'
import { info } from '../info'


export default function InfoScreen() {
    return(
    <View style={[globalStyles.container, globalStyles.primaryColor]}>
      <Header headerTitle={'Info'} backgroundColor="#00B69B" />
        <ScrollView style = {styles.scrollViewContent}>
            <View style = {styles.mainContainer}>
            {info.map((item, index) => (
                <View style = {styles.subContainer} key={index}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.Description}</Text>
                </View>
            ))}
            </View>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding: 20,
    },
    scrollViewContent: {
        paddingBottom: 40, // Add padding at the bottom of the content container
      },
    subContainer: {
        // marginBottom: 20,
        
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        color: 'white',
        fontSize: 14,
        marginTop:10,
        marginBottom: 20,
    }
    }
)