import React, { useState } from 'react';
import {Text, View, Pressable, Alert} from 'react-native';
import { styles } from '../styles/styles';
import CadastroCliente from '../components/CadastroCliente';
import { Venda } from '../types/Venda';
import { CadVendaProps } from '../navigation/HomeNavigator';

import firestone from '@react-native-firebase/firestore';
import CadastrarVenda from '../components/CadastrarVenda';

const TelaCadVenda = (props: CadVendaProps) => {


   return ( 
       <View style={[styles.tela, styles.centralizar]}>
        <CadastrarVenda />
        <Pressable style={styles.botao}
                      onPress={() => props.navigation.goBack()}>
                      <Text style={styles.titulo_campos}>Voltar</Text>
                    </Pressable>
       </View>
   )
};

export default TelaCadVenda;