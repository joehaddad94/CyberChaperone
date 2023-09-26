import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chartContainer: {
      marginTop: 20,
    },
    chartWithLegends: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    legendContainer: {
      marginLeft: 10,
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    legendColorBox: {
      width: 16,
      height: 16,
      marginRight: 5,
    },
    legendLabel: {
      fontSize: 12,
    },
  });