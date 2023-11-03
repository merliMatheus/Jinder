import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput,  } from 'react-native';
import styleLogin from './styleLogin';

export default function LoginScreen ({navigation}) {
    let [email, setEmail] = useState ('');
    let [senha, setSenha] = useState ('');
    const validacao = () => {
      if(email === "eus@com" && senha === "123"){
      navigation.navigate('Descubra')
      }else{
       
      } 
  }
    return(
      <ScrollView style={styleLogin.container}>
        <View style={styleLogin.ViewTitle}>
          <Text style={styleLogin.logo}>Jinder</Text>
        </View>  
        <View style={styleLogin.viewMeio}>
            <Text style={styleLogin.login}>login</Text>
            <Text style={styleLogin.bemvindo}>bem vindo de volta!</Text>
      
          <Text style={styleLogin.email}>NOME DE USUÁRIO OU EMAIL</Text>
          <TextInput 
            keyboardType='text'
            style={styleLogin.TextInput}
            Value={email}
            onChangeText={(texto) => setEmail(texto)}
          />
          <Text style={styleLogin.senha}>SENHA</Text>
          <TextInput 
            keyboardType='text'
            style={styleLogin.TextInput}
            secureTextEntry={true}
            Value={senha}
            onChangeText={number => setSenha(number)}
          />
        </View>
  
          <TouchableOpacity 
            style={styleLogin.buttonLogin}  
            onPress={() => validacao()}>
            <Text style={styleLogin.buttonText}>ENTRAR</Text>
          </TouchableOpacity> 
        
      </ScrollView>
    );
  }