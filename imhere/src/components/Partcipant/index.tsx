import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant() {
    function handleParticipantAdd() {
        console.log('Participant added');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                Sérgio Mendes de Oliveira Borges
            </Text>
            <TouchableOpacity onPress={handleParticipantAdd} style={styles.buttonSend}>
                <Text style={styles.buttonSend}> + </Text>
            </TouchableOpacity>
        </View>
    );
}