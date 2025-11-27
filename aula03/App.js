import { View, Text } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Tela de Login"  }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Cursos"  }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Detalhes do Curso"  }} />
        {/* Cada Screen recebe uma navigation como prop */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App