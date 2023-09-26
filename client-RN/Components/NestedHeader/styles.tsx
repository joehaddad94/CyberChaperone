import { StyleSheet } from 'react-native'

 export const styles = StyleSheet.create({
    headerContainer: {
    height: 55,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: 'white',
        padding: 5,
        marginRight: 10,
        borderRadius: 5,
       
    },
    buttonText: {
        color: '#00B69B',
        fontSize: 16,
        marginRight: 10,
        fontWeight: 'bold',
    },
})