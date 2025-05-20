import React, { useState } from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { styles } from '../styles/styles';
import { Venda } from '../types/Venda';
import firestore from '@react-native-firebase/firestore';

const CadastrarVenda = () => {
       const [Filme, setFilme] = useState('');
        const [Cliente, setCliente] = useState('');
        const [dataVenda, setDataVenda] = useState('');
        const [valorTotal, setValorTotal] = useState('');        

function cadastrar() {
    if (verificaCampos()) {
      const venda = {
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
          limparCampos();
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
      Alert.alert("Data da Venda em branco",
        "Digite uma Data da Venda")
      return false;
    }
    if (!valorTotal) {
      Alert.alert("Valor Total em branco",
        "Digite um Valor Total")
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
                <View style={styles.tela}>
                        <View style={styles.centralizar}>
                        <Text style={styles.titulo1}>Cadastro de Venda</Text>
                        <Image
                                source={require('../images/cadastro.png')}
                                style={stylesLocal.imagem}
                        />

                        <Text style={[stylesLocal.titulo_campos, styles.centralizar]}>Filme</Text>
                        <TextInput
                                value={Filme}
                                onChangeText={setFilme}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Filme"
                        />

                        <Text style={stylesLocal.titulo_campos}>Cliente</Text>
                        <TextInput
                                value={Cliente}
                                onChangeText={setCliente}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Cliente"
                        />

                        <Text style={stylesLocal.titulo_campos}>Data da Venda</Text>
                        <TextInput
                                value={dataVenda}
                                onChangeText={setDataVenda}
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Data da Venda (ex: 2024-06-01)"
                        />

                        <Text style={stylesLocal.titulo_campos}>Valor Total</Text>
                        <TextInput
                                value={valorTotal}
                                onChangeText={setValorTotal}
                                keyboardType="numeric"
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

                </View>

        )
};

export default CadastrarVenda;


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
