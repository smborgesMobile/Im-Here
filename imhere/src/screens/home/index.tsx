import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Partcipant";
import { styles } from "./styles";

export default function Home() {
    const participants = [
        "Sérgio Mendes de Oliveira Borges",
        "Ana Maria Assis",
        "Mateus Mendes",
        "Sérgio Vilhena",
        "João Pedro",
        "Lucas Mendes",
        "Sérgio Mendes de Oliveira Borges 00c",
        "Ana Maria Assis 00",
        "Mateus Mendes 00",
        "Sérgio Vilhena 00",
        "João Pedro 00",
        "Lucas Mendes 00",
    ];

    function handleParticipantAdd(name: string) {
        console.log(`Participant added: ${name}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.eventName}> Nome do Evento</Text>
            <Text style={styles.eventDate}> Sexta, 4 de Novembro de 2035.</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your text here..."
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity onPress={() => handleParticipantAdd} style={styles.buttonSend}>
                    <Text style={styles.buttonSend}> + </Text>
                </TouchableOpacity>
            </View>
            // FlatList is used to efficiently render a large list of participants.
            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        onRemove={() => {
                            handleParticipantAdd(item);
                        }}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.lisEmpty}>Sem participantes cadastrados</Text>
                )}
            />
        </SafeAreaView>
    );
}
