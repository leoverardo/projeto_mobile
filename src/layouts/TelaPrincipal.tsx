import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';


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
      style={[styles.tela, styles.centralizar]}> 
      <Text style={styles.titulo1}>Tela Principal</Text>  
        <Pressable style={styles.botao}
          onPress={() => props.navigation.navigate('TelaCampoDeTexto')}>
          <Text style={styles.titulo_campos}>Campo de Texto</Text>
        </Pressable>
        <Pressable style={styles.botao}
          onPress={() => props.navigation.navigate('TelaNotas')}>
          <Text style={styles.titulo_campos}>Notas Alunos</Text>
        </Pressable>
        <Pressable style={styles.botao}
          onPress={() => props.navigation.navigate('TelaLista')}>
          <Text style={styles.titulo_campos}>Lista Pessoas</Text>
        </Pressable>
    </View>
  );
} 

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
