import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={
      {
        flex: 1,
        backgroundColor: '#b0e0e0',
        alignItems: 'center',
      }
    }>
      <Text style={
        {
          flex: 1,
          fontSize: 32,
          fontWeight: 'bold',
          color: '#4363d8',
        }
      }>
        Sérgio Mendes!
      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
