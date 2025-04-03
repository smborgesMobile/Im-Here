import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
    name: string;
}

export function Participant({ name }: ParticipantProps) {

    function handleParticipantAdd() {
        console.log('Participant deleted successfully: ' + name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity onPress={handleParticipantAdd} style={styles.buttonSend}>
                <Text style={styles.buttonSend}> - </Text>
            </TouchableOpacity>
        </View>
    );
}