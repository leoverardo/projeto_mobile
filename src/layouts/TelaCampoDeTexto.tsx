import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { onPressBotao } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import CampoDeTexto from '../components/CampoDeTexto';

const TelaNova = (props: onPressBotao) => {

  function exibirValor(valor: string) {
    Alert.alert(`Valor recebido: ${valor}`);
  }
  return (
    <View
          style={[styles.tela, styles.centralizar]}> 
          <CampoDeTexto onClick={exibirValor}/>
            <Pressable style={styles.botao}
              onPress={() => props.navigation.goBack()}>
              <Text style={styles.titulo_campos}>Voltar</Text>
            </Pressable>
        </View>
  );
}

export default TelaNova;