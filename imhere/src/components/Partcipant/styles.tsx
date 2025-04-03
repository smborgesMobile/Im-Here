import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    name: {
        flex: 1,
        height: 56,
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 8,
        marginEnd: 8,
        lineHeight: 56,
        backgroundColor: '#1F1E25',
    },
    buttonSend: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E51C44',
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 16,
        lineHeight: 56
    },
})