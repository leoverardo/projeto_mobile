import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaCadastroPaciente from "../layouts/TelaCadastroPaciente";


type RootStackParamList = {
  TelaPrincipal: undefined;
  TelaCadastroPaciente: undefined;
 
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
      <Stack.Screen name="TelaCadastroPaciente" component={TelaCadastroPaciente} />
      
    </Stack.Navigator>
    
  );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;
  type ListaProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadastroPaciente'>;
  
export default HomeNavigator;


export type {
  PrincipalProps,
  ListaProps,
};