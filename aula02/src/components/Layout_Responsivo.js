import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Layout_Responsivo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Cabeçalho</Text>
      </View>
      <View style={styles.content}>
        <Text>Conteudo principal</Text>
      </View>
      <View style={styles.footer}>
        <Text>Rodapé</Text>
      </View>
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {flex: 1},
    header: {flex:1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'},
    content: {flex:3, backgroundColor: 'White', justifyContent: 'center', alignItems: 'center'},
    footer:{flex:1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'}
  })

export default Layout_Responsivo



