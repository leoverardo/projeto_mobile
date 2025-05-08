import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable, StyleSheet, Alert} from 'react-native';
import { Switch } from 'react-native-paper';
import { styles } from '../styles/styles';


const CadastroCliente = () => {
        const [ativado, setAtivado] = useState('Não');
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [telefone, setTelefone] = useState('');        

        function exibirMensagem() {
                Alert.alert(
                'Cadastro Realizado com sucesso!',        
                  'Nome: ' + nome +
                '\nE-mail: ' + email +
                '\nTelefone: ' + telefone +
                '\nComorbidade: ' + ativado
                )
              }
              function limparCampos() {
                setNome('');
                setEmail('');
                setTelefone('');
                setAtivado('Não');
                }

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
                        value={nome}
                                onChangeText={(text) => {setNome(text)}}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Nome"
                        />

                        <Text style={stylesLocal.titulo_campos}>E-mail</Text>
                        <TextInput
                        value={email}
                                onChangeText={(text) => {setEmail(text)}}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="E-mail"
                        />

                        <Text style={stylesLocal.titulo_campos}>Telefone</Text>
                        <TextInput
                        value={telefone}
                                onChangeText={(text) => {setTelefone(text)}}
                                maxLength={11}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Telefone"
                        />

                        <Text style={stylesLocal.tituloRadio}>Possui Comorbidade?</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={stylesLocal.SwitchText}>Não</Text>
                        <Switch 
                                value={ativado  === 'Sim'}
                                onValueChange={(value)=>{setAtivado(value ? 'Sim' : 'Não')}} /> 
                        <Text style={stylesLocal.SwitchText}>Sim</Text>  
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                        <Pressable
                                style={(state) => [stylesLocal.Cadastrar, state.pressed && styles.click]}
                                        onPress={() => {exibirMensagem()}}>
                                <Text style={styles.titulo2}>Cadastrar</Text>
                        </Pressable>

                        <Pressable
                                style={(state) => [stylesLocal.Excluir, state.pressed && styles.click]}
                                onPress={() => {limparCampos()}}> 
                                <Text style={styles.titulo2}>Cancelar</Text>
                        </Pressable>
                        </View>
                        
                </ScrollView>
                
        )
};

export default CadastroCliente;

const stylesLocal = StyleSheet.create({
    SwitchText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginInline: 10,
    },
    tituloRadio: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    titulo_campos: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagem: {
        width: 100,
        height: 100,
        marginTop: 20
    },
    Cadastrar: {
        backgroundColor: 'green',
         alignItems:'flex-start',
          marginTop: 10,
           padding: 10,
            borderRadius: 5
    },
    Excluir:{
        backgroundColor: 'red', 
        alignItems:'flex-end',
        marginTop: 10,
        padding: 10,
        borderRadius: 5
    }
});