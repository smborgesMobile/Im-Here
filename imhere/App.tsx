import { SafeAreaView, StyleSheet, Text } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>
        Sérgio Mendes!
      </Text>
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
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4363d8',
  }
});
