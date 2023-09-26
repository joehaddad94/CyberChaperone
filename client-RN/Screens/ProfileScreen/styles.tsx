import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilePicture: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 20,
    },
    topContainer: {
      marginBottom: 40,
      alignItems: 'center',
    }, 
    botContainer: {
      marginBottom: 20,
    },
    username: {
      color: 'white',
      fontSize: 18,
    },
    email: {
      color: 'white',
      fontSize: 16,
      paddingTop: 5,
    }
  });