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
            
                <View>
                    <PieChartComponent/>
                </View>
            
        </ScrollView>
        
        
    )
}