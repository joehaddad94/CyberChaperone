import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        position: 'absolute',
        width: '100%',
        height: 650,
        bottom: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    parentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingLeft: 25,
        paddingRight: 20,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
    },
    textContainer: {
        gap: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    email: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    profilePicture: {
        width: 70,
        height: 70,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    emptyState: {
        alignItems: 'center',
        marginTop: 70,
    },
    noUsersImage: {
        width:200,
        height:200,
    },
    emptyStateText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    }
});