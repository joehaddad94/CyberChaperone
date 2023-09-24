import React from "react";
import { View, Text } from 'react-native'
import { PieChart } from "react-native-gifted-charts";
import { EmotionAverages } from '../../ParamTypes';
import {styles} from './styles'

interface PieChartProps {
  emotionAverages: EmotionAverages | null;
}

const getColorForEmotion = (emotion: string) => {
  switch (emotion) {
    case 'Neutral':
      return 'lightblue';
    case 'Happy':
      return 'yellow';
    case 'Sad':
      return 'blue';
    case 'Angry':
      return 'red';
    case 'Surprised':
      return 'pink';
    case 'Fearful':
      return 'brown';
    case 'Disgusted':
      return 'green';
    default:
      return 'gray';
  }
};

const PieChartComponent: React.FC<PieChartProps> = ({ emotionAverages }) => {

const legends = Object.entries(emotionAverages || {}).map(([emotion, percentage], index) => ({
  label: `${emotion} ${percentage}%`,
  color: getColorForEmotion(emotion),
}));

const pieData = Object.entries(emotionAverages || {}).map(([emotion, percentage]) => ({
  value: percentage,
  gradientCenterColor: getColorForEmotion(emotion),
  text: `${percentage}%`,
}));

// console.log('Legends:', legends);
// console.log('Pie Data:', pieData);

return(
    <View style={styles.chartContainer}>
      <View style={styles.chartWithLegends}>
        <PieChart
          // showText
          textColor="black"
          radius={90}
          // textSize={10}
          // showTextBackground
          textBackgroundRadius={15}
          data={pieData}
          // showValuesAsLabels={false}
          // showGradient
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