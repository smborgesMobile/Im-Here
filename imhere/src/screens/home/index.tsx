import { SafeAreaView, Text } from 'react-native';
import { styles } from "./styles";


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}> Nome do Evento</Text>
      <Text style={styles.eventDate}> 12/02/1998! </Text>
    </SafeAreaView>
  );
}