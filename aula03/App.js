import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screems/LoginScreens'

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginScreen/>
    </View>
  )
}

export default App