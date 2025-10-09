import { View, Text } from 'react-native'
import React from 'react'
import Layout_Responsivo from './src/components/Layout_Responsivo'
import CartaoPerfil from './src/components/CartaoPerfil'
import CartaoApresentacao from './src/components/CartaoApresentacao'

const App = () => {
  return (
    <View style={{flex:1}}>
      <CartaoApresentacao/>
    </View>
  )
}

export default App