import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

const Entrada = (props) => {

    const [nome, atualizarNome] = useState('');
    
    const [pais, atualizarPais] = useState('');

    const atualizaNome = (txt) => {
        atualizarNome(txt);
    }
  
    const atualizaPais = (txt) => {
        atualizarPais(txt);
    }

    const pesquisar = () => {
        if (pais == '' & nome == '') {
          props.callBackMensagem("Digite um campo.");
          props.callBackatualizar('');
        } else {
          props.callBackMensagem("Resultado:");
          if (pais == '') {
            fetch('http://universities.hipolabs.com/search?name=' + nome).then((response) => response.json()).then((res) => {
              let listaUniv = res;
              props.callBackatualizar(listaUniv);
            }).catch((error) => {
              console.error(error);
            });
          } else if (nome == '') {
            fetch('http://universities.hipolabs.com/search?country=' + pais).then((response) => response.json()).then((res) => {
              let listaUniv = res;
              props.callBackatualizar(listaUniv);
            }).catch((error) => {
              console.error(error);
            });
          } else {
            fetch('http://universities.hipolabs.com/search?name=' + nome + '&country=' + pais).then((response) => response.json()).then((res) => {
              let listaUniv = res;
              props.callBackatualizar(listaUniv);
            }).catch((error) => {
              console.error(error);
            });
          }
        }
      }

    return <>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TextInput style={styles.input} 
                            placeholder='País (em inglês)'
                            onChangeText={atualizaPais}
                            value={pais}/>
            </View>
            <View style={{alignItems: "center"}}>
              <TextInput style={styles.input} 
                            placeholder='Nome (em inglês)'
                            onChangeText={atualizaNome}
                            value={nome}/>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-start", marginTop: 20, marginLeft: 20}}>
                <Button color="pink" title='Buscar' onPress={pesquisar}/>
            </View>
          </>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        width: 375,
        borderWidth: 1,
        padding: 10,
      }
})

module.exports.Entrada = Entrada;