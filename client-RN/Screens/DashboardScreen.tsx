import { ImageBackground, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import {useState} from 'react'
import Header from '../Components/Header'
import SwipeCalendar from '../Components/SwipeCalendar';
import DropdownList from '../Components/DropdownList'
import globalStyles from '../styles';
import PieChartComponent from '../Components/PieChartComponent';


export default function DashboardScreen() {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    return(
        <ScrollView style={[globalStyles.backgroundImage,globalStyles.primaryColor]}>
            <Header 
                headerTitle={"Dashboard"}
                backgroundColor= '#00B69B'
            /> 
            <DropdownList 
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
            <SwipeCalendar/>
            
            <View style={styles.chartContainerWrapper}>
        <View style={styles.chartContainer}>
          <PieChartComponent />
        </View>
      </View>
            
        </ScrollView>
        
        
    )
}

const styles = StyleSheet.create({
    chartContainerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    chartContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      width:350,
      borderRadius: 10,
      elevation: 5,
      borderWidth: 2,
    },
  })