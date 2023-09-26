import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 50,
    },
    inputStyle: {
      width: 300,
    },
    containerGap: {
      gap: 20,
    },
    footer: {
      backgroundColor: '#787878',
      width: '100%',
      height: 100,
      alignItems: 'center',
      borderTopLeftRadius:45,
      borderTopRightRadius:45,
    },
    footerText: {
      marginTop: 10,
      color: 'white',
    },
    register: {
      fontWeight: 'bold', 
      textDecorationLine: 'underline',
      color: 'white',
    },
    InputGap: {
      gap: 10,
    },
    button: {
      marginTop: 20,
    },
    errorText: {
      color: "red",
    }
  });