import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import styleAbout from './styleAbout';

export default function AboutScreen ({navigation}){
    const goDescubra = () => {
      navigation.navigate('Descubra')
    }
    return(
    <View style={styleAbout.container}>
      
      <Text style={styleAbout.title}>this is your about page</Text>
            
      <TouchableOpacity 
        style={styleAbout.buttonContatos}  
        onPress={() => goDescubra()} >
        <Text style={styleAbout.buttonText}>Ir para a pagina descubra</Text>
        
      </TouchableOpacity> 
      
    </View>
    );
  }