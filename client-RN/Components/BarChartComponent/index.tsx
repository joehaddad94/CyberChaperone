import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { MaxEmotions } from "../../ParamTypes";

import { styles } from "./styles";

interface BarChartProps {
    maxEmotions: any | null;
}

const BarChartComponent: React.FC<BarChartProps> = ({maxEmotions}) => {
    const barData = [
        {   
            value: maxEmotions?.Disgusted || 0,
            label: 'Disg',
            frontColor: 'green',
            topLabelComponent: () => (
                <Text style={styles.percentage}>{Math.round(maxEmotions?.Disgusted || 0)}%</Text>
            ),
        },
        {
            value: maxEmotions?.Surprised || 0,
            label: 'Surp',
            frontColor: 'pink',
            topLabelComponent: () => (
                <Text style={styles.percentage}>{Math.round(maxEmotions?.Surprised || 0)}%</Text>
            ),
        },
        {
            value: maxEmotions?.Angry || 0,
            label: 'Ang',
            frontColor: 'red',
            topLabelComponent: () => (
                <Text style={styles.percentage}>{Math.round(maxEmotions?.Angry || 0)}%</Text>
            ),
        },
        {
            value: maxEmotions?.Sad || 0,
            label: 'Sad',
            frontColor: 'blue',
            topLabelComponent: () => (
                <Text style={styles.percentage}>{Math.round(maxEmotions?.Sad || 0)}%</Text>
            ),
        },
        {
            value: maxEmotions?.Happy || 0,
            label: 'Hap',
            frontColor: 'yellow',
            topLabelComponent: () => (
                <Text style={styles.percentage}>{Math.round(maxEmotions?.Happy || 0)}%</Text>
            ),
        },
        {
            value: maxEmotions?.Neutral || 0,
            label: 'Neut',
            frontColor: '#4ABFF4',
            topLabelComponent: () => (
                <Text style={styles.percentage}>{Math.round(maxEmotions?.Neutral || 0)}%</Text>
            ),
        },
        {
            value: maxEmotions?.Fearful || 0,
            label: 'Fear',
            frontColor: 'brown',
            topLabelComponent: () => (
                <Text style={styles.percentage}>{Math.round(maxEmotions?.Fearful || 0)}%</Text>
            ),
        },
    ];

        return (
        <View>
            <BarChart
                horizontal
                barWidth={22}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                width={280}
                maxValue={110}
                noOfSections={11}
                xAxisLabelTextStyle={{
                    marginRight: 5,
                }}
            />
        </View>
    );
};

export default BarChartComponent;