import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CartaoApresentacao = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
        style={styles.imagemPerfil} 
      />

    <Text style={styles.nome}>John Doe</Text>
    <Text style={styles.descricao}>Desenvolvedor Mobile | Apaixonado por Tecnologia</Text>

    <View style={styles.botoesContainer}>
        <TouchableOpacity style={[styles.botao, styles.botaoGithub]}>
            <Text style={styles.textoBotao}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoLinkedin]}>
            <Text style={styles.textoBotao}>LinkedIn</Text>
        </TouchableOpacity>
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,

    },
    nome: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333'  
    },
    descricao: {
      fontSize: 14,
      color: '#666',
      textAlign: 'center',
      marginVertical: 10,  
    },
    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    botaoGithub: {
        backgroundColor: '#333'
    },
    botaoLinkedin: {
        backgroundColor: '#0077b5'
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'    
    },
    botoesContainer: {
        flexDirection: 'row',
        marginTop: 10
    }

})

export default CartaoApresentacao