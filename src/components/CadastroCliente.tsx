import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable, StyleSheet, Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../styles/styles';


const CadastroCliente = () => {
        const [checked, setChecked] = React.useState('first');

        return (
                <ScrollView style={[styles.tela, styles.fundo]}>
                        <View style={styles.centralizar}>
                        <Text style={styles.titulo1}>Cadastro de Cliente</Text>
                                <Image
                                        source={require('../images/cadastro.png')}
                                        style={stylesLocal.imagem}
                                />
                        

                        <Text style={[stylesLocal.titulo_campos, styles.centralizar]}>Nome</Text>
                        <TextInput
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Nome"
                        />

                        <Text style={stylesLocal.titulo_campos}>E-mail</Text>
                        <TextInput
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="E-mail"
                        />

                        <Text style={stylesLocal.titulo_campos}>Telefone</Text>
                        <TextInput
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Telefone"
                        />

                        <Text style={stylesLocal.tituloRadio}>Possui Comorbidade?</Text>

                        <Text style={stylesLocal.RadioButton}>Sim</Text>
                        <RadioButton
                            value="Sim"
                            status={ checked === 'Sim' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Sim')}
                        />

                        <Text style={stylesLocal.RadioButton}>Não</Text>
                        <RadioButton
                            value="Não"
                            status={ checked === 'Não' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Não')}
                        />

                        <Pressable
                                style={{backgroundColor: 'green', alignItems:'center', marginTop: 10, padding: 10, borderRadius: 5}}
                                    onPress={() => {Alert.alert('Cadastro Realizado!')}}>   
                                <Text style={styles.titulo2}>Cadastrar</Text>
                        </Pressable>

                        <Pressable
                                style={{backgroundColor: 'red', marginTop: 10, padding: 10, borderRadius: 5}}
                                    onPress={() => {Alert.alert('Cadastro Cancelado!')}}>
                                <Text style={styles.titulo2}>Cancelar</Text>
                        </Pressable>
                        </View>
                </ScrollView>
                
        )
};

export default CadastroCliente;

const stylesLocal = StyleSheet.create({
    RadioButton: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    tituloRadio: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    titulo_campos: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagem: {
        width: 100,
        height: 100,
    }
});