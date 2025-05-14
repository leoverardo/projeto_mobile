import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NotasProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { PrincipalProps } from '../navigation/HomeNavigator';
import TelaPrincipal from './TelaPrincipal';
import CadastroCliente from '../components/CadastroCliente';
import Notas from '../components/Notas';

const TelaNotas = (props: NotasProps) => {
  return (
    <View
          style={[styles.tela, styles.centralizar]}> 
          <Notas nome='Leonardo' nota1={9} nota2={7}/>
            <Pressable style={styles.botao}
              onPress={() => props.navigation.goBack()}>
              <Text style={styles.titulo_campos}>Voltar</Text>
            </Pressable>
        </View>
  );
}

export default TelaNotas;