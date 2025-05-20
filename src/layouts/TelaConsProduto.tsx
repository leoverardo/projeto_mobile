import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { ConsProdutoProps } from "../navigation/HomeNavigator";
import { Venda } from "../types/Venda";
import { styles } from "../styles/styles";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const TelaConsProduto = (props: ConsProdutoProps) => {
  const [venda, setVenda] = useState<Venda[]>([]);

  useEffect(() => {
    const subscribe = firestore()
      .collection('vendas')
      .onSnapshot(querySnapshot => { 
        
        const data = querySnapshot.docs.map(doc => {     
          return {
            id: doc.id,
            ...doc.data() 
          }

        }) as Venda[];

        setVenda(data);
      });

    return () => subscribe();
  }, []);

  function deletarVenda(id: string) {
    firestore()
      .collection('vendas')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert("Venda", "Cancelada com sucesso")
      })
      .catch((error) => console.log(error));
  }

  function alterarVenda(id: string) {
   // props.navigation.navigate("TelaAltProduto", { id: id })
  }

  return (
    <View style={styles.tela}>

      <Text style={styles.tituloTela}>Listagem de Vendas</Text>
      <FlatList
        data={venda}
        renderItem={(info) =>
          <ItemVenda
            numeroOrdem={info.index + 1}
            venda={info.item}
            onDeletar={deletarVenda}
            onAlterar={alterarVenda} />} />


      <View
        style={styles.centralizar}>
        <Pressable
          style={[styles.botao, { width: '40%' }]}
          onPress={() => { props.navigation.goBack() }}>
          <Text style={styles.texto_botao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

type ItemVendaProps = {
  numeroOrdem: number;
  venda: Venda;
  onDeletar: (id: string) => void;
  onAlterar: (id: string) => void;
}

const ItemVenda = (props: ItemVendaProps) => {

  return (
    <View style={styles.card}>
      <View style={styles_local.dados_card}>
        <Text style={{ fontSize: 30, color: 'black' }}>
          {props.numeroOrdem + ' - ' + props.venda.idCliente}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Id:{props.venda.id}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Ingresso:{props.venda.idIngresso}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Preço: R${props.venda.valorTotal.toFixed(2)}
        </Text>
      </View>

      <View
        style={styles_local.botoes_card}>
        <View style={styles_local.botao_deletar}>
          <Pressable
            onPress={() => props.onDeletar(props.venda.id)}>
            <Text style={styles_local.texto_botao_card}>
              X
            </Text>
          </Pressable>
        </View>

        <View style={styles_local.botao_alterar}>
          <Pressable
            onPress={() => props.onAlterar(props.venda.id)}>
            <Text style={styles_local.texto_botao_card}>
              A
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TelaConsProduto;

const styles_local = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: 'grey',
    margin: 5,
    borderRadius: 10,
    padding: 3,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  dados_card: {
    flex: 1
  },
  botoes_card: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botao_deletar: {
    backgroundColor: 'red',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao_alterar: {
    backgroundColor: 'yellow',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto_botao_card: {
    fontWeight: "bold",
    fontSize: 40,
    color: 'black'
  }
});
