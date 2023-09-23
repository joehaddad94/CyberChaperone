import React from "react";
import { View, Text } from 'react-native'
import { PieChart } from "react-native-gifted-charts";
import {styles} from './styles'

const PieChartComponent = () => {

  const pieData = [
    {value: 30, gradientCenterColor: 'lightblue', text: '30%'},
    {value: 30, gradientCenterColor: '#79D2DE', text: '30%'},
    {value: 25, gradientCenterColor: '#ED6665', text: '25%'},
    {value: 15, gradientCenterColor: '#ED6665', text: '15%'},
];

const legends = [
  { label: 'Legend 1', color: 'lightblue' },
  { label: 'Legend 2', color: '#79D2DE' },
  { label: 'Legend 3', color: '#ED6665' },
  // Add more legends as needed
];

return(
    <View style={styles.chartContainer}>
      <View style={styles.chartWithLegends}>
        <PieChart
          showText
          textColor="black"
          radius={100}
          textSize={10}
          showTextBackground
          textBackgroundRadius={15}
          data={pieData}
          showValuesAsLabels={true}
          showGradient
          focusOnPress
        />
      <View style={styles.legendContainer}>
        {legends.map((legend, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColorBox, { backgroundColor: legend.color }]} />
            <Text style={styles.legendLabel}>{legend.label}</Text>
          </View>
        ))}
      </View>
    </View>
  </View>
)
}
export default PieChartComponent;


