import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import styleDescubra from './styleDescubra';
import imagecardTop from './images/pexels-olga-shenderova-8537318.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DescubraScreen ({navigation}){
  const goRecomendacao = () => {
    navigation.navigate('Recomendacao');    
  };  
  const goContact = () => {
    navigation.navigate('Contact')
  }

  const data = 
  [
    { id: '1', url: 'https://images.pexels.com/photos/18948429/pexels-photo-18948429/free-photo-of-violao-outono-declinio-trilha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Trilha' },
    { id: '2', url: 'https://images.pexels.com/photos/3692859/pexels-photo-3692859.jpeg', text: 'Comida' },
    { id: '3', url: 'https://images.pexels.com/photos/7862407/pexels-photo-7862407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Games'  },
    { id: '4', url: 'https://images.pexels.com/photos/1152853/pexels-photo-1152853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Esporte'  },
    { id: '5', url: 'https://images.pexels.com/photos/7991525/pexels-photo-7991525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Cineminha'  },
    { id: '6', url: 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Interior'  },
    { id: '7', url: 'https://images.pexels.com/photos/6864496/pexels-photo-6864496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Musica'  },
    { id: '8', url: 'https://images.pexels.com/photos/11590912/pexels-photo-11590912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Balada'  },
    { id: '9', url: 'https://images.pexels.com/photos/4395196/pexels-photo-4395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Ficar em casa'  },
    { id: '10', url: 'https://images.pexels.com/photos/2362391/pexels-photo-2362391.jpeg?auto=compress&cs=tinysrgb&w=1600', text: 'Bebedeira'  },    
  ];    

  const renderItem = ({ item }) => (
    <View style={styleDescubra.cardRoles}>
      <Text style={styleDescubra.textFlatlist}>{item.text}</Text>
      <TouchableOpacity 
      onPress={()=>goRecomendacao()}>
        <Image 
          source={{ uri: item.url }} 
          style={styleDescubra.imageFlatlist}
        />
      </TouchableOpacity>              
    </View>
 );
    return(
      <ScrollView style={styleDescubra.container}>
        <View style={styleDescubra.cabecalho}>
          <Image
              source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/09/Tinder-Logo.png' }}
              style={{ width: 100, height: 35, margin: '10px'}}              
          />          
        </View> 

        <View style={styleDescubra.cardTop}>
          <Image
            style={styleDescubra.imagecardTop}
            source={imagecardTop}                         
          />
        </View> 

        <View style={styleDescubra.titleTopView}> 
          <Text style={styleDescubra.titleTop}>Verifique o seu perfil</Text>   
          <View  style={styleDescubra.ButtonTopView}>
            <TouchableOpacity 
              style={styleDescubra.ButtonTop}>
              <Text style={styleDescubra.subtitleTop}>Verificar</Text>
            </TouchableOpacity>
          </View>     
            
        </View>  
          <TouchableOpacity 
            onPress={()=>goContact()}
            style={styleDescubra.ButtonBottom}>
            
            <Text style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>ir para sobre</Text>
          </TouchableOpacity>
        <View style={styleDescubra.flatlist}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styleDescubra.contentContainer}          
          />
        </View>        
      </ScrollView>
      

    );
  }
  
        