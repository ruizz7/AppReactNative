import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entrada } from './Entrada'
import { RenderLista } from './RenderLista'
import { ExibirAviso } from './ExibirAviso'

export default function Universidade() {
    const [mensagem, atualizarMensagem] = useState('');
    const [resultado, atualizarLista] = useState([]);

    const atualizaMensagem = (txt) => {
        atualizarMensagem(txt);
    }

    const exibirUniversidade = (item) => {
        return <View style={styles.lista}>
                <Text>{item.name}</Text>
            </View>;
    }
    return (
        <View style={styles.container}>
            <Entrada callBackMensagem={atualizaMensagem} callBackatualizar={atualizarLista}/>
            <ExibirAviso mensagem={mensagem}/>
            <RenderLista resultado={resultado} callBackexibir={exibirUniversidade}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 25,
    },
    lista: {
      padding: 5,
      margin: 5,
      paddingLeft: 15,
      paddingRight: 15,
    },
});

module.exports.Universidade = Universidade;