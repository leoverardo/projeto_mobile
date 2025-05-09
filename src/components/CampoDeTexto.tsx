import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";

type onPressBotao={
    onClick: (text: string) => void; 
  }

const CampoDeTexto = (props: onPressBotao) => {
    const [text, setText] = useState(''); 

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={[styles.caixa_texto, styles.largura_70, styles.centralizar]} 
            placeholder="Digite Aqui"
            value={text}
            onChangeText={setText}>
            </TextInput>

            <Pressable
                style={styles.botao}
                onPress={() => { props.onClick && props.onClick(text) }}>
                <Text style={styles.texto_botao}>Clique</Text>
            </Pressable>
        </View>
    );
}

export default CampoDeTexto;
