import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native';
import styleCadastro from './styleCadastro';

export default function CadastroScreen ({navigation}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState ('');    
    const [senha, setSenha] = useState ('');
    const Cadastrar = () => {
      navigation.navigate('Descubra')
    }
    return(
      <View style={styleCadastro.container}>
        <Text style={styleCadastro.title}>this is cadastro page</Text>
  
        <View style={styleCadastro.boxForm}>
          {/* botão que chama a validação */}
  
          <TextInput 
            keyboardType='text'
            style={styleCadastro.TextInput}
            placeholder="nome:"
            Value={nome}
            onChangeText={(texto) => setNome(texto)}
          />
          <TextInput 
            keyboardType='text'
            style={styleCadastro.TextInput}
            placeholder="email:"
            Value={email}
            onChangeText={(texto) => setEmail(texto)}
          />
          <TextInput 
            keyboardType='text'
            style={styleCadastro.TextInput}
            secureTextEntry={true}
            placeholder='senha:'
            Value={senha}
            onChangeText={number => setSenha(number)}
          />
  
          <TouchableOpacity 
            style={styleCadastro.button}  
            onPress={() => Cadastrar()}>
            <Text style={styleCadastro.buttonText}>CADASTRAR-SE</Text>
  
          </TouchableOpacity> 
        
        </View>
      </View>
    );
  }
  