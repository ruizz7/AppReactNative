import { StyleSheet, Text } from 'react-native';

const ExibirAviso = (props) => {
    return <Text style={styles.aviso}>{props.aviso}</Text>
}

const styles = StyleSheet.create({
    aviso: {
        margin: 10,
        fontSize: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})

module.exports.ExibirAviso = ExibirAviso;