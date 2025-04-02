import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.eventName}> Sérgio Mendes! </Text>
        <Text style={styles.eventDate}> 12/02/1998! </Text>
      </View>
    </SafeAreaView>
  );
}

// Create a CSS style sheet.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e0',
    alignItems: 'center',
  },
  eventName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4363d8',
  },
  eventDate: {
    color: '#4363d8',
    fontSize: 20,
    marginTop: 10,
  }
});
