import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
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
    }
  });