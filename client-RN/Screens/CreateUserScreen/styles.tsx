import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    inputStyle: {
        width: 300,
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
    }
})