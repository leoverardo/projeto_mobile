import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable, StyleSheet, Button, FlatList} from 'react-native';
import { styles } from '../styles/styles';


type Paciente = {
    nome: string;
    idade: string;
    sintoma: string;
    urgencia: string;
};

type ListaProps = {
    listaPaciente: Paciente[];
};

const Lista = (props: ListaProps) => {
    const [pessoa, setPessoa] = useState('');
    const [idade, setIdade] = useState('');
    const [sintoma, setSintoma] = useState('');
    const [urgencia, setUrgencia] = useState('');
    const [listaPaciente, setListaPaciente] = useState<Paciente[]>(props.listaPaciente ?? []);

    const botaoAdicionar = () => {
        if (pessoa.trim() && idade.trim() && sintoma.trim() && urgencia.trim() && ['1', '2', '3', '4', '5'].includes(urgencia.trim() ) && !isNaN(Number(idade.trim())) && Number(idade.trim()) > 0) {
         {
            setListaPaciente([
                ...listaPaciente,
                { nome: pessoa, idade, sintoma, urgencia }
            ]);
            setPessoa('');
            setIdade('');
            setSintoma('');
            setUrgencia('');
        }
    };
    }

    return (
        <View style={[styles.tela, styles.margem, styles.centralizar]}>
            <Image
                source={require('../images/relatorio-de-saude.png')}
                style={stylesLocal.imagem}
                                            />
            <TextInput
                style={styles.caixa_texto}
                value={pessoa}
                onChangeText={setPessoa}
                placeholder="Digite o nome do Paciente"
            />
            <TextInput
                style={styles.caixa_texto}
                value={idade}
                onChangeText={setIdade}
                placeholder="Digite a idade do Paciente"
            />
            <TextInput
                style={styles.caixa_texto}
                value={sintoma}
                onChangeText={setSintoma}
                placeholder="Digite o Sintoma do Paciente"
            />
            <TextInput
                style={styles.caixa_texto}
                value={urgencia}
                onChangeText={setUrgencia}
                placeholder="Classifique a urgência 1,2,3,4 ou 5"
            />
            <Pressable style={styles.botao} onPress={botaoAdicionar}> 
                <Text style={styles.texto_botao}>Adicionar Paciente</Text> 
                </Pressable>
            
            <FlatList
                data={listaPaciente}
                keyExtractor={(_, idx) => idx.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.titulo_campos}>Urgência:
                            {item.urgencia === '1' ? 
                            <Text style={stylesLocal.urgencia1}>Leve</Text> 
                            : item.urgencia === '2' ? <Text style={stylesLocal.urgencia2}>Menos Grave</Text> 
                            : item.urgencia === '3' ? <Text style={stylesLocal.urgencia3}>Urgência</Text>
                            : item.urgencia === '4' ? <Text style={stylesLocal.urgencia4}>Muita Urgência</Text>
                            : <Text style={stylesLocal.urgencia5}>Emergência</Text>}</Text>
                        
                        <Text style={styles.titulo_campos}>Nome: {item.nome}</Text>
                        <Text style={styles.titulo_campos}>Idade: {item.idade}</Text>
                        <Text style={styles.titulo_campos}>Sintoma: {item.sintoma}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const stylesLocal = StyleSheet.create({
    urgencia1: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold'
    },
    urgencia2: {
        color: '#90EE90',
        fontSize: 30,
        fontWeight: 'bold'
    },
    urgencia3: {
        color: 'yellow',
        fontSize: 30,
        fontWeight: 'bold'
    },
    urgencia4: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold'
    },
    urgencia5: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imagem: {
        width: 100,
        height: 100,
        marginTop: -10,
        marginBottom: 15
    }
});

export default Lista;
