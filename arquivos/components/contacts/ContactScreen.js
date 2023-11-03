import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styleContact from './styleContact';


export default function ContactScreen ({navigation}){
    const goAbout = () => {
      navigation.navigate('About')
    }
    return(
    <View style={styleContact.container}>
      <Text style={styleContact.title}>this is your contacts page</Text>
  
      <TouchableOpacity 
        style={styleContact.buttonSobre}  
        onPress={() => goAbout()} >
        <Text style={styleContact.buttonText}>SOBRE NÓS</Text>  
      </TouchableOpacity> 
      
    </View>
    );
  }
  