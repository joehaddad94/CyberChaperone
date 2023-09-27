import { Text, View, ScrollView } from 'react-native';
import globalStyles from '../../styles';
import Header from '../../Components/Header'
import { info } from '../../info'
import { styles } from './styles'


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
