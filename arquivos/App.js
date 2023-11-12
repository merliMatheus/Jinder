//import principal
import React from 'react';
//imports de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//importando as telas
import LoginScreen from './components/login/LoginScreen';
import HomeScreen from './components/home/home';
import CadastroScreen from './components/cadastro/CadastroScreen';
import RecomendacaoScreen from './components/Recomendacao/RecomendacaoScreen';
import DescubraScreen from './components/Descubra/DescubraScreen';
import AboutScreen from './components/about/AboutScreen';
import ContactScreen from './components/contacts/ContactScreen';
import PerfilScreen from './components/perfil/PerfilScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} />  
        <Stack.Screen name="Cadastro" component={CadastroScreen} /> 
        <Stack.Screen name="Descubra" component={DescubraScreen} />      
        <Stack.Screen name="Recomendacao" component={RecomendacaoScreen} />  
        <Stack.Screen name="Login" component={LoginScreen} />    
        <Stack.Screen name="About" component={AboutScreen} />  
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



