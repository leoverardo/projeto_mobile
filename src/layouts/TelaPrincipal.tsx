import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from '../components/Exemplo01';
import Exemplo1 from '../components/Exemplo1';
import Exemplo05_Text from '../components/Exemplo05_Text';
import Exemplo06_TextInput from '../components/Exemplo06_TextInput';
import Exemplo14_ParametroFunction from '../components/Exemplo14_ParametroFunction';
import ExemploCalculo from '../components/ExemploCalculo';
import CadastroCliente  from '../components/CadastroCliente';
import Notas from '../components/Notas';
import CampoDeTexto from '../components/CampoDeTexto';
import Exemplo15_ConstrucaoCondicao from '../components/Exemplo15_ConstrucaoCondicao';
//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
  
  // function funcaoClick2() {
  //   Alert.alert('Botão Clicado 2!');
  // }

  // function exibirValor(valor: string) {
  //   Alert.alert(`Valor recebido: ${valor}`);
  // }
  
  return (
    <View
      style={[styles.tela]}>  
        <Exemplo15_ConstrucaoCondicao/>
    </View>
  );
} 

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
