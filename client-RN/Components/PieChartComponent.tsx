import React from "react";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const PieChartComponent = () => {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
    },
    {
      name: "Toronto",
      population: 2800000,
    },
    {
      name: "Beijing",
      population: 527612,
    },
    {
      name: "New York",
      population: 8538000,
    },
    {
      name: "Moscow",
      population: 11920000,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 50]}
        absolute
/>
  );
};

export default PieChartComponent;
