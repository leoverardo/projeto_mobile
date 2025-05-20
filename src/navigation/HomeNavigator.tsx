import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaCadProduto from "../layouts/TelaCadProduto";
import TelaAltProduto from "../layouts/TelaAltProduto";
import TelaConsProduto from "../layouts/TelaConsProduto";
import TelaCadCliente from "../layouts/TelaCadCliente";
import TelaCadVenda from "../layouts/TelaCadVenda";


type RootStackParamList = {
  TelaPrincipal: undefined;
  TelaCadCliente: undefined;
  TelaAltProduto: { id: string };
  TelaConsProduto: undefined;
  TelaCadProduto: undefined;
  TelaCadVenda: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal" 
      screenOptions={{ headerShown: false }} 
    >

      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaCadCliente" component={TelaCadCliente} />
      <Stack.Screen name="TelaAltProduto" component={TelaAltProduto} />
      <Stack.Screen name="TelaConsProduto" component={TelaConsProduto} />
      <Stack.Screen name="TelaCadProduto" component={TelaCadProduto} />
      <Stack.Screen name="TelaCadVenda" component={TelaCadVenda} />
      
    </Stack.Navigator>
    
  );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;
  type AltProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaAltProduto'>;
  type ConsProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsProduto'>;
  type CadClienteProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadCliente'>;
  type CadProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadProduto'>;
  type CadVendaProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadVenda'>;


export default HomeNavigator;


export type {
  PrincipalProps,
  CadClienteProps,
  AltProdutoProps,
  ConsProdutoProps,
  CadProdutoProps,
  CadVendaProps
};