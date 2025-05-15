import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaCampoDeTexto from "../layouts/TelaCampoDeTexto";
import TelaNotas from "../layouts/TelaNotas";
import TelaLista from "../layouts/TelaLista";
import TelaCadProduto from "../layouts/TelaCadProduto";
import TelaCadCliente from "../layouts/TelaCadCliente";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined; 
  TelaCampoDeTexto: undefined;
  TelaNotas: undefined;
  TelaLista: undefined;
  TelaCadProduto: undefined;
  TelaCadCliente: undefined;
};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal" //nome da tela inicial
      screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
    >

      {/* define uma te la dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaCampoDeTexto" component={TelaCampoDeTexto} />
      <Stack.Screen name="TelaNotas" component={TelaNotas} />
      <Stack.Screen name="TelaLista" component={TelaLista} />
      <Stack.Screen name="TelaCadProduto" component={TelaCadProduto} />
      <Stack.Screen name="TelaCadCliente" component={TelaCadCliente} />
      

      
    </Stack.Navigator>
    
  );
}

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;
  type onPressBotao = NativeStackScreenProps<RootStackParamList,
  'TelaCampoDeTexto'>;
  type NotasProps = NativeStackScreenProps<RootStackParamList,
  'TelaNotas'>;
  type ListaProps = NativeStackScreenProps<RootStackParamList,
  'TelaLista'>;
  type CadProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadProduto'>;
  type CadClienteProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadCliente'>;



//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  onPressBotao,
  NotasProps,
  ListaProps,
  CadProdutoProps,
  CadClienteProps
};