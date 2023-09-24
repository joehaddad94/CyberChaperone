import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { styles } from "./styles";

const BarcChartComponent = () => {
    const barData = [
    {value: 15, label: 'Jan'},
    {value: 40, label: 'Feb'},
    {value: 10, label: 'Mar'},
    {value: 30, label: 'Apr'},
    ];
    return (
    <View>
        <BarChart
        data={barData}
        barWidth={35}
        cappedBars
        capColor={'rgba(78, 0, 142)'}
        capThickness={4}
        showGradient
        gradientColor={'rgba(200, 100, 244,0.8)'}
        frontColor={'rgba(219, 182, 249,0.2)'}
        />
    </View>
    );
};

export default BarcChartComponent;