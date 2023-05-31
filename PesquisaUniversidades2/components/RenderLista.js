import { FlatList } from 'react-native';

const RenderLista = (props) => {
    return <FlatList
            data={props.resultado} 
            renderItem={({item}) => props.callBackexibir(item)}
            keyExtractor={item => props.resultado.indexOf(item)} />
}

module.exports.RenderLista = RenderLista;