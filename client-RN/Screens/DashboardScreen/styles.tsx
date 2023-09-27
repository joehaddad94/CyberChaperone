import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pieChartContainerWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pieChartContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      width: 350,
      borderRadius: 10,
      elevation: 5,
      borderWidth: 2,
    },
    barChartContainerWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 80,
    },
    barChartContainer: {
      width: 350,
      alignItems: 'center',
      height: 360,
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 5, 
    },
    barChartSmallContainer: {
      width: 300,
    },
    chartTitle: {
      color: 'white',
      fontSize: 18,
      paddingVertical:10,
      textAlign: 'center'
    },
    emptyStateImgContainer: {
      alignItems:'center',
      marginTop:50,
    },
    emptyStateImg: {
      width: 300,
      height: 300,
    },
    dropdownList: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    analysisContainer: {
      height: 150,
      alignItems: 'center',
      backgroundColor: 'white',
      width: 350,
      borderRadius: 10,
      elevation: 5,
      borderWidth: 2,
    },
    emptyAnalysis: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    emptyAnalysisContainer:{
      height: '100%',
      justifyContent:'center',
    }
  });