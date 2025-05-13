import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NovaProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { PrincipalProps } from '../navigation/HomeNavigator';
import TelaPrincipal from './TelaPrincipal';

const TelaNova = (props: NovaProps) => {
  return (
    <View
          style={[styles.tela, styles.centralizar]}> 
          <Text style={styles.titulo1}>Tela Nova</Text>  
            <Pressable style={styles.botao}
              onPress={() => props.navigation.navigate('TelaPrincipal')}>
              <Text style={styles.titulo1}>Navegar</Text>
            </Pressable>
        </View>
  );
}

export default TelaNova;