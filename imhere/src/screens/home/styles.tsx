import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1d2129',
      marginTop: StatusBar.currentHeight
    },
    eventName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
      marginLeft: 4,
      marginTop: 20
    },
    eventDate: {
      color: '#d5d8de',
      fontSize: 12,
      marginTop: 2,
      marginLeft: 8
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 8,
        marginHorizontal: 10,
        backgroundColor: '#1F1E25',
        color: '#FFFFFF',
        padding: 16,
        fontSize: 16
    }
  });