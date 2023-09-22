import React from "react";
import { View, StyleSheet } from 'react-native'
// import { PieChart } from "react-native-chart-kit";
import { PieChart } from "react-native-gifted-charts";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const PieChartComponent = () => {

  const pieData = [
    {value: 54, gradientCenterColor: 'lightblue', text: '54%'},
    {value: 40, gradientCenterColor: '#79D2DE', text: '30%'},
    {value: 20, gradientCenterColor: '#ED6665', text: '26%'},
];

return(
    <View>
        <PieChart
        showText
        textColor="black"
        radius={100}
        textSize={10}
        showTextBackground
        textBackgroundRadius={20}
        data={pieData}
        showValuesAsLabels
        showGradient
        
        />
    </View>
)
}
export default PieChartComponent;

