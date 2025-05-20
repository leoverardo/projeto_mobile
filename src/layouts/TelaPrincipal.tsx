import React, { useState } from 'react';
import { Alert, Pressable, Image, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';


const TelaPrincipal = (props: PrincipalProps) => {
  

  
  return (
    <View
      style={[styles.tela, styles.centralizar]}> 
      <Text style={styles.titulo1}>SUS</Text>
      <Image
         source={require('../images/cruz-vermelha.png')}
          style={styles.imagem}
                                /> 

        <Pressable style={styles.botaoPaciente}
          onPress={() => props.navigation.navigate('TelaCadVenda')}>
          <Text style={styles.textoBotaoPaciente}>Cadastrar</Text>
          <Text style={styles.textoBotaoPaciente}>Venda</Text>
        </Pressable>
        
    </View>
  );
} 


export default TelaPrincipal;
