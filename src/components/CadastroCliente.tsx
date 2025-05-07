import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable, StyleSheet, Alert} from 'react-native';
import { Switch } from 'react-native-paper';
import { styles } from '../styles/styles';


const CadastroCliente = () => {
        const [ativado, setAtivado] = useState(false);        

        return (
                <ScrollView style={[styles.tela, styles.fundo]}>
                        <View style={styles.centralizar}>
                        <Text style={styles.titulo1}>Cadastro de Cliente</Text>
                                <Image
                                        source={require('../images/cadastro.png')}
                                        style={stylesLocal.imagem}
                                />
                        

                        <Text style={[stylesLocal.titulo_campos, styles.centralizar]}>Nome</Text>
                        <TextInput
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Nome"
                        />

                        <Text style={stylesLocal.titulo_campos}>E-mail</Text>
                        <TextInput
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="E-mail"
                        />

                        <Text style={stylesLocal.titulo_campos}>Telefone</Text>
                        <TextInput
                                style={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
                                placeholder="Telefone"
                        />

                        <Text style={stylesLocal.tituloRadio}>Possui Comorbidade?</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={stylesLocal.SwitchText}>Não</Text>
                        <Switch 
                                value={ativado} 
                                onValueChange={(value)=>{setAtivado(value)}} />  
                        <Text style={stylesLocal.SwitchText}>Sim</Text>  
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                        <Pressable
                                style={{backgroundColor: 'green', alignItems:'flex-start', marginTop: 10, padding: 10, borderRadius: 5}}
                                    onPress={() => {Alert.alert('Cadastro Realizado!')}}>   
                                <Text style={styles.titulo2}>Cadastrar</Text>
                        </Pressable>

                        <Pressable
                                style={{backgroundColor: 'red', alignItems:'flex-end', marginTop: 10, padding: 10, borderRadius: 5}}
                                    onPress={() => {Alert.alert('Cadastro Cancelado!')}}>
                                <Text style={styles.titulo2}>Cancelar</Text>
                        </Pressable>
                        </View>
                        
                </ScrollView>
                
        )
};

export default CadastroCliente;

const stylesLocal = StyleSheet.create({
    SwitchText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginInline: 10,
    },
    tituloRadio: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    titulo_campos: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagem: {
        width: 100,
        height: 100,
        marginTop: 20
    }
});