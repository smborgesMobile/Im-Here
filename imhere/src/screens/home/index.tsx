import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";


export default function Home() {

    function handleParticipantAdd() {
        console.log('Participant added');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.eventName}> Nome do Evento</Text>
            <Text style={styles.eventDate}> Sexta, 4 de Novembro de 2035.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Type your text here...'
                    placeholderTextColor='#6b6b6b'
                />

                <TouchableOpacity onPress={handleParticipantAdd} style={styles.buttonSend}>
                    <Text style={styles.buttonSend}> + </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}