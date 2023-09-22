import React from "react";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const PieChartComponent = () => {
  const data = [
    {
      name: "Neutral",
      percentage: 90,
    },
    {
      name: "Happy",
      percentage: 5,
    },
    {
      name: "Surprised",
      percentage: 1,
    },
    // {
    //   name: "sad",
    //   percentage: 1,
    // },
    // {
    //   name: "Fearful",
    //   percentage: 1,
    // },
    // {
    //   name: "Disgusted",
    //   percentage: 1,
    // },
    // {
    //   name: "Angry",
    //   percentage: 1,
    // },
  ];

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
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
        height={300}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"white"}
        paddingLeft={"10"}
        center={[10, 50]}
        absolute
/>
  );
};

export default PieChartComponent;
