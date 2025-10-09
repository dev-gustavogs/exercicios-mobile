import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Digite seu email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" />

      { /* Botão GitHub */ }
      <TouchableOpacity style={[styles.socialButtons, { backgroundColor: '#333' }]}>
        <Icon name="github" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.socialText}>Entrar com GitHub</Text>
      </TouchableOpacity>

      {/* Botão Google */}
      <TouchableOpacity style={[styles.socialButtons, { backgroundColor: '#DB4437' }]}>
        <Icon name="google" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.socialText}>Entrar com Google</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1,  justifyContent: 'center', alignItems: 'center', padding: 20  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 8},
  orText: { marginVertical: 20, fontSize: 16, color: '#555' },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 5,
    margimVertical: 5,
    margin: 10,
    justifyContent: 'center'
  },
  icon: { marginRight: 10 },
  socialText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }

})

export default LoginScreen