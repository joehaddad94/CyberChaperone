import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { styles } from "./styles";

const BarChartComponent = () => {
    const barData = [
        {   value: 99, 
            label: 'Disgusted', 
            frontColor: 'green', 
            topLabelComponent: () => (
            <Text style={styles.percentage}>20.12%</Text>
            ),
        },
        {   value: 15.75, 
            label: 'Surprised', 
            frontColor: 'pink', 
            topLabelComponent: () => (
            <Text style={styles.percentage}>15.75%</Text>
            ),
        },
        {   value: 18.33, 
            label: 'Anger', 
            frontColor: 'red', 
            topLabelComponent: () => (
            <Text style={styles.percentage}>18.33%</Text>
            ),
        },
        {   value:  13.44, 
            label: 'Sad', 
            frontColor: 'blue', 
            topLabelComponent: () => (
            <Text style={styles.percentage}>13.44%</Text>
            ),
        },
        {   value: 10.80, 
            label: 'Happy', 
            frontColor: 'yellow', 
            topLabelComponent: () => (
            <Text style={styles.percentage}>10.80%</Text>
            ),
        },
        {   value: 0, 
            label: 'Neutral', 
            frontColor: '#4ABFF4', 
            topLabelComponent: () => (
            <Text style={styles.percentage}>5.00%</Text>
            ),
        },
        {   value: 20.12, 
            label: 'Fear', 
            frontColor: 'brown', 
            topLabelComponent: () => (
            <Text style={styles.percentage}>20.12%</Text>
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
                maxValue={100}
                noOfSections={10}
            />
        </View>
    );
};

export default BarChartComponent;