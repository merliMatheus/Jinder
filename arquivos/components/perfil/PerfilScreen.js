import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import stylePerfil from './stylePerfil';

export default function PerfilScreen ({navigation}){
    const goDescubra = () =>{
        navigation.navigate('Descubra')
      }
    const goRecomendacao = () =>{
      navigation.navigate('Recomendacao')
    }
  
  
    return(
      <View style={stylePerfil.container}>
        <Text style={stylePerfil.title}> descubra novas pessoas </Text>

        <TouchableOpacity 
        style={stylePerfil.buttonDescubra}  
        onPress={() => goDescubra()} >
        <Text style={stylePerfil.buttonText}>DESCUBRA</Text>
        
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={stylePerfil.buttonRecomendacao}  
        onPress={() => goRecomendacao()} >
        <Text style={stylePerfil.buttonText}>RECOMENDADOS</Text>
        
        </TouchableOpacity>

      </View>
    );
  }
  


