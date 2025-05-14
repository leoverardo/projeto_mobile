import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ListaProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Lista from '../components/Lista';


const TelaLista = (props: ListaProps) => {
  return (
    <View
          style={[styles.tela, styles.centralizar]}> 
          <Lista listaPessoas={[]}/>
            <Pressable style={styles.botao}
              onPress={() => props.navigation.goBack()}>
              <Text style={styles.titulo_campos}>Voltar</Text>
            </Pressable>
        </View>
  );
}

export default TelaLista;