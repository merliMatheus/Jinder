import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styleHome from './styleHome';

export default function HomeScreen({navigation}){
    const goLogin = () => {
      navigation.navigate('Login')
    }
    const goCadastro = () =>{
      navigation.navigate('Cadastro')
    }
    return(
      <View style={styleHome.container}>
        <View style={styleHome.titulo}>
          <Text style={styleHome.nomeApp}> Jinder </Text>
        </View>
        
        <View style={styleHome.botoes}>
          <TouchableOpacity 
          style={styleHome.buttonLogin}  
          onPress={() => goLogin()} >
          <Text style={styleHome.buttonText}>LOGIN</Text>          
          </TouchableOpacity> 

          <TouchableOpacity 
          style={styleHome.buttonCadastro}  
          onPress={() => goCadastro()} >
          <Text style={styleHome.buttonText}>CADASTRO</Text>
          </TouchableOpacity> 
        </View>
      </View> 
    );
  }
  
