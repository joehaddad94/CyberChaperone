import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//     },
//     permissionContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems:'center',
//       gap: 10
//     },
//     camera: {
//       flex: 1,
//     },
//     buttonContainer: {
//       height: '100%',
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'transparent',
//     },
//     button: {
//       flex: 1,
//       alignSelf: 'flex-end',
//       alignItems: 'center',
//       width: 100,
//     },
//     text: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       color: 'white',
//     },
//     cameraHeight: {
//       height: 650,
//     }
//   });

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    animatedView: {
      // Add styles for the animated view here
    },
    bottomContainerWrapper:{
        position: 'absolute',
        bottom: 70,
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
  });