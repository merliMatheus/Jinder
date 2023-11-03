import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styleDescubra from './styleDescubra';

export default function DescubraScreen ({navigation}){
    const goAbout = () => {
      navigation.navigate('About')
    }
    const goContact = () =>{
      navigation.navigate('Contact')
    }
    const goRecomendacao = () =>{
      navigation.navigate('Recomendacao')
    }
    const goPerfil = () => {
      navigation.navigate('Perfil')
    }
  
  
    return(
      <View style={styleDescubra.container}>
        <Text style={styleDescubra.title}> descubra novas pessoas </Text>
  
        <TouchableOpacity 
        style={styleDescubra.buttonSobre}  
        onPress={() => goAbout()} >
        <Text style={styleDescubra.buttonText}>SOBRE NÓS</Text>
        
        </TouchableOpacity> 
  
        <TouchableOpacity 
        style={styleDescubra.buttonContatos}  
        onPress={() => goContact()} >
        <Text style={styleDescubra.buttonText}>IR PARA CONTATOS</Text>
        
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={styleDescubra.buttonContatos}  
        onPress={() => goRecomendacao()} >
        <Text style={styleDescubra.buttonText}>IR PARA RECOMENDADOS</Text>
        
        </TouchableOpacity>

        <TouchableOpacity 
        style={styleDescubra.buttonContatos}  
        onPress={() => goPerfil()} >
        <Text style={styleDescubra.buttonText}>IR PARA PERFIL</Text>
        
        </TouchableOpacity>


  
      </View>
    );
  }
  
  