import { Button, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./styles";


export default function Home() {

    function handleParticipantAdd() { 
        console.log('Participant added');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.eventName}> Nome do Evento</Text>
            <Text style={styles.eventDate}> 12/02/1998! </Text>
            <TextInput
                style={styles.input}
                placeholder='Type your text here...'
                placeholderTextColor='#6b6b6b'
            />
            <TouchableOpacity onPress={handleParticipantAdd} style={styles.buttonSend}>
                <Text style={styles.buttonSend}> + </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}