import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { styles } from "./styles";

const BarcChartComponent = () => {
    const barData = [
        { value: 20.12, label: 'Jan', frontColor: '#4ABFF4' },
        { value: 15.75, label: 'Feb', frontColor: '#79C3DB' },
        { value: 18.33, label: 'Mar', frontColor: '#28B2B3' },
        { value: 13.44, label: 'Apr', frontColor: '#4ADDBA' },
        { value: 16.56, label: 'May', frontColor: '#91E3E3' },
        { value: 10.80, label: 'Jun', frontColor: '#91E3E3' },
        { value: 5.00, label: 'Jul', frontColor: '#91E3E3' },
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

export default BarcChartComponent;