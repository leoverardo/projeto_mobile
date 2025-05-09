import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable, StyleSheet, Alert} from 'react-native';
import { styles } from '../styles/styles';

type NotasProps = {
    nome: string;
    nota1: number;
    nota2: number;
}



const Notas = (props: NotasProps) => {
    function MediaNotas() {
        return (
            (props.nota1 + props.nota2) / 2   
        );
    }

    function Aprovar(){
        if (MediaNotas() >= 7) {
            return (
                <Text style={styles.titulo2}>Meus Parbéns Você está Aprovado!</Text>
            )
        } else {
            return (
                <Text style={styles.titulo2}>Você foi Reprovado, Estude mais!</Text>
            )
        }
    }

    return (
        <View style={[styles.fundo, styles.centralizar]}>
            <Text style={styles.titulo1}>Notas do Aluno</Text>
            <Text style={styles.titulo2}>Nome: {props.nome}</Text>
            <Text style={styles.titulo2}>Nota 1: {props.nota1}</Text>
            <Text style={styles.titulo2}>Nota 2: {props.nota2}</Text>
            <Text style={styles.titulo2}>Média: {MediaNotas()} </Text>
            <Text style={styles.titulo2}>Resultado: {Aprovar()} </Text>
        </View>
    )
};

export default Notas;