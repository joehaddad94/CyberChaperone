import React from "react";
import { View, StyleSheet, Text } from 'react-native'
// import { PieChart } from "react-native-chart-kit";
import { PieChart } from "react-native-gifted-charts";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const PieChartComponent = () => {
  
  const pieData = [
    {value: 40, gradientCenterColor: 'lightblue', text: '54%'},
    {value: 40, gradientCenterColor: '#79D2DE', text: '30%'},
    {value: 20, gradientCenterColor: '#ED6665', text: '26%'},
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
          textBackgroundRadius={20}
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

const styles = StyleSheet.create({
  chartContainer: {
    marginTop: 20,
  },
  chartWithLegends: {
    flexDirection: 'row', // Display the pie chart and legends side by side
    alignItems: 'center', // Vertically center the pie chart and legends
  },
  legendContainer: {
    marginLeft: 10, // Add margin to separate the pie chart and legends
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Add margin between legend items
  },
  legendColorBox: {
    width: 16,
    height: 16,
    marginRight: 5, // Add margin between color box and label
  },
  legendLabel: {
    fontSize: 12,
  },
});
