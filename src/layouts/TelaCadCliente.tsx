import React, { useState } from 'react';
import {Text, View, Pressable, Alert} from 'react-native';
import { styles } from '../styles/styles';
import CadastroCliente from '../components/CadastroCliente';
import { Cliente } from '../types/Cliente';
import { CadClienteProps } from '../navigation/HomeNavigator';

import firestone from '@react-native-firebase/firestore';

const TelaCadCliente = (props: CadClienteProps) => {


   return ( 
       <View style={[styles.tela, styles.centralizar]}>
        <CadastroCliente />
        <Pressable style={styles.botao}
                      onPress={() => props.navigation.goBack()}>
                      <Text style={styles.titulo_campos}>Voltar</Text>
                    </Pressable>
       </View>
   )
};

export default TelaCadCliente;