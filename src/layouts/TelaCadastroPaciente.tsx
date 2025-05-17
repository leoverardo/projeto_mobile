import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ListaProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import CadastrarPaciente from '../components/CadastrarPaciente';


const TelaLista = (props: ListaProps) => {
  return (
    <View
          style={[styles.tela, styles.centralizar]}> 
          <CadastrarPaciente listaPaciente={[]}/>
            <Pressable style={styles.botao}
              onPress={() => props.navigation.goBack()}>
              <Text style={styles.texto_botao}>Voltar</Text>
            </Pressable>
        </View>
  );
}

export default TelaLista;