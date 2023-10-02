import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    day: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    selectedDay: {
        borderColor: '#00B69B',
        backgroundColor: '#00B69B',
    },
    selectedText: {
        color: 'white',
  },
    monthName: {
        textAlign: 'center',
        fontSize: 18, 
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'white'
      },
      colorWhite: {
        color: 'white'
      }
})