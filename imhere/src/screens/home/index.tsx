import { useState } from "react";
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Participant } from "../../components/Partcipant";
import { styles } from "./styles";

export default function Home() {
    const [participants, setParcipants] = useState<string[]>([]);
    const [participantName, setParcipantName] = useState("");

    function handleParticipantDelete(name: string) {
        return Alert.alert(
            "Remover",
            `Deseja mesmo remover o participante ${name}`, [
            {
                text: "Sim",
                onPress: () => {
                    setParcipants((prevState) => prevState.filter((participant) => participant !== name));
                }
            },
            {
                text: "Não",
                style: "cancel"
            },

        ]);
    }

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert(
                "Atenção",
                "Ja existe um participante cadastrado com esse nome", [
                {
                    text: "OK",
                    style: "cancel"
                },
            ]);
        }

        setParcipants((prevState) => [...prevState, participantName]);
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
                    onChangeText={setParcipantName}
                />

                <TouchableOpacity onPress={() => handleParticipantAdd()} style={styles.buttonSend}>
                    <Text style={styles.buttonSend}> + </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        onRemove={() => {
                            handleParticipantDelete(item);
                        }}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.lisEmpty}> Ainda não há participantes cadastrados. Para começar, adicione participantes à lista.
                        Clique no botão abaixo para adicionar um novo participante.</Text>
                )}
            />
        </SafeAreaView>
    );
}
