import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // height:700,
    },
    cameraContainer: {
      // flex: 1,
      height:700,
    },
    closedCameraContainer: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    bottomContainerWrapper:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    bottomContainer: {
        width: 330,
        height: 150,
        marginLeft: 15,
        borderRadius: 20,
    },
    smallContainer: {
        height: '100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 20,
    },
    emoji: {
      width: 100,
      height: 100,
      marginRight: 8,
    },
    emotionText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
    },
    buttonContainer: {
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });