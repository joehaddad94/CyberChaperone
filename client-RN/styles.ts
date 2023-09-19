import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
      flexDirection: 'row'
    },
    text: {
      fontSize: 16,
      color: '#333333',
    },
    backgroundImage: {
      flex: 1,
    },
    primaryColor: {
      backgroundColor: '#292937',
    },
    secondaryColor: {
      backgroundColor: '#787878',
    },
    headerTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    }

  });
  
  export default globalStyles;