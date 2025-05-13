import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';

type ListaProps = {
    listaPessoas: string[]
}   
const Lista = (props: ListaProps) => {
    const [pessoa, setPessoa] = useState('');
    const [lista, setLista] = useState(props.listaPessoas);
    const [fraseSelecionada, setFraseSelecionada] = useState('');

    const selecionarFrase = (frase: string) => {
        setFraseSelecionada(frase);
    };

    const adicionarPessoa = () => {
        if (pessoa.trim() !== '') {
            setLista([...lista, pessoa]);
            setPessoa('');
        }
    };

    return (
        <View style={[styles.tela, styles.margem, styles.centralizar]}>
            <TextInput
                style={styles.caixa_texto}
                value={pessoa}
                onChangeText={setPessoa}
                placeholder="Digite o nome"
            />
            <Button title="Adicionar" onPress={adicionarPessoa} />
            <FlatList
                data={lista}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}
                        onPress={() => selecionarFrase(item)}>
                        {item}
                    </Text>
                )}
            />
            <Text style={[styles.titulo1,styles.nome]}>Nome: {fraseSelecionada}</Text>
        </View>
    );
};
export default Lista;