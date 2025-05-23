import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable, StyleSheet, Alert} from 'react-native';
import { styles } from '../styles/styles';
import { Venda } from '../types/Venda';

import firestore from '@react-native-firebase/firestore';

const CadastroCliente = () => {
        const [Filme, setFilme] = useState('');
        const [Cliente, setCliente] = useState('');
        const [dataVenda, setDataVenda] = useState('');
        const [valorTotal, setValorTotal] = useState('');        

function cadastrar() {
    if (verificaCampos()) {
      let venda: Venda = {
        filme: Filme,
        cliente: Cliente,
        dataVenda: dataVenda,
        valorTotal: Number.parseFloat(valorTotal)
      } as Venda;

      firestore()
        .collection('vendas')
        .add(venda)
        .then(() => {
          Alert.alert("Venda", "Cadastrada com sucesso!");
        })
        .catch((error: any) => {
          Alert.alert("Erro", String(error));
        });

    }
}

function verificaCampos() {
    if (!Filme) { 
      Alert.alert("Ingresso em branco",
        "Digite um Ingresso")
      return false;
    }
    if (!Cliente) {
      Alert.alert("Cliente em branco",
        "Digite um Cliente")
      return false;
    }
    if (!dataVenda) {
      Alert.alert("Telefone em branco",
        "Digite um Numero de telefone")
      return false;
    }
    if (!valorTotal) {
      Alert.alert("Telefone em branco",
        "Digite um Numero de telefone")
      return false;
    }

    return true;
  }

              function limparCampos() {
                setFilme('');
                setCliente('');
                setDataVenda('');
                setValorTotal('');
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
                        value={Filme}
                                onChangeText={(text) => {setFilme(text)}}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Ingresso"
                        />

                        <Text style={stylesLocal.titulo_campos}>E-mail</Text>
                        <TextInput
                        value={Cliente}
                                onChangeText={(text) => {setCliente(text)}}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="E-mail"
                        />

                        <Text style={stylesLocal.titulo_campos}>Telefone</Text>
                        <TextInput
                        value={dataVenda}
                                onChangeText={(text) => {setDataVenda(text)}}
                                maxLength={11}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Telefone"
                        />

                        <Text style={stylesLocal.tituloRadio}>Possui Comorbidade?</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={stylesLocal.titulo_campos}>Telefone</Text>
                        <TextInput
                        value={valorTotal.toString()}
                                onChangeText={(text) => {setValorTotal(text)}}
                                maxLength={11}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Valor Total"
                        />
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                        <Pressable
                                style={(state) => [stylesLocal.Cadastrar, state.pressed && styles.click]}
                                        onPress={() => {cadastrar()}}>
                                <Text style={styles.titulo2}>Cadastrar</Text>
                        </Pressable>

                        <Pressable
                                style={(state) => [stylesLocal.Excluir, state.pressed && styles.click]}
                                onPress={() => limparCampos()}> 
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