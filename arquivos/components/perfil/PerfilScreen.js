import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import stylePerfil from './stylePerfil';

export default function PerfilScreen ({navigation}){
  const handlePress = () => {
    navigation.navigate('home')
  }
  const renderItem = ({ item }) => (
    <View style={stylePerfil.planos}>       
          <View style={stylePerfil.cardTop}>
            <Image source={{ uri: item.url }} style={{ width: '100px', height: '50px' }} />
            <TouchableOpacity 
              style={stylePerfil.upgradeButton}>
              <Text style={stylePerfil.buttonText}>UPGRADE</Text>
            </TouchableOpacity>  
          </View>
         
          <View style={stylePerfil.cardMeio}>
            <Text style={{ fontSize: 19, paddingVertical:'5px', }}>{item.linha2}</Text> 
            <Text style={{ fontSize: 19, paddingVertical:'5px', }}>{item.linha3}</Text>
            <Text style={{ fontSize: 19, paddingVertical:'5px', }}>{item.linha4}</Text>
          </View>

          <View style={stylePerfil.cardBottom}>
             <Text style={{ fontSize: 19, display:'flex', justifyContent:'center', marginBottom:'8px', paddingTop:'10px', paddingBottom:'5px', fontWeight:'bold', color:'#363636', }}>{item.linha5}</Text>
          </View> 

    </View>        
   );
   const DATA = [
    {
       id: '1',
       url: 'https://logosmarcas.net/wp-content/uploads/2020/09/Tinder-Logo.png',       
       linha2: 'Beneficios do plano Gold:',
       linha3: '● Curtidas prioritarias ilimitadas',
       linha4: '● Mande mensagens antes do match',
       linha5: 'Ver todos os recursos',                   
    },
    {
       id: '2',       
       url: 'https://logosmarcas.net/wp-content/uploads/2020/09/Tinder-Logo.png',        
       linha2: 'Beneficios do plano Platinum:',
       linha3: '● Curtidas prioritarias ilimitadas',
       linha4: '● Mande mensagens antes do match',
       linha5: 'Ver todos os recursos',              
    },
    {
      id: '3',
      url: 'https://logosmarcas.net/wp-content/uploads/2020/09/Tinder-Logo.png',        
       linha2: 'Beneficios do plano PlatinumPlus:',
       linha3: '● Curtidas prioritarias',
       linha4: '● Mande mensagens antes do match',
       linha5: 'Ver todos os recursos',       
   },
  ];
    return(
      <View style={stylePerfil.container}>
        <View style={stylePerfil.cabecalho}>
          <Image
              source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/09/Tinder-Logo.png' }}
              style={{ width: 100, height: 35, margin: '10px'}}              
          />
          <TouchableOpacity>
            <Image 
              source={{ uri: 'https://cdn.icon-icons.com/icons2/1632/PNG/512/62971gear_109245.png' }}
              style={{ width: 35, height: 35, margin: '10px'}}
              onPress={() => handlePress()}
            />
          </TouchableOpacity>
        </View> 

        <View style={stylePerfil.user}>
          <Image 
            source={'https://pbs.twimg.com/profile_images/1273415288428658688/8MT_mVIA_400x400.jpg'} 
            style={stylePerfil.userImage}             
          />
          <TouchableOpacity> </TouchableOpacity>
          <Text style={stylePerfil.infoUser}>Vector Balthazar, 22</Text>                  
        </View>  

        <View style={stylePerfil.info}>
          <View>
            <Image 
              source={'https://cdn-icons-png.flaticon.com/512/747/747958.png'} 
              style={{ width: '60px', height: '60px', marginLeft:'15px'}} />
                <Text style={stylePerfil.infoTitle}>Super Likes</Text>
                <Text style={stylePerfil.likeTitle}>RECEBA MAIS</Text>
          </View>
          <View>
            <Image 
              source={'https://icones.pro/wp-content/uploads/2022/07/icones-d-eclair-violet.png'} 
              style={{ width: '60px', height: '60px', marginLeft:'15px'}} />
                <Text style={stylePerfil.infoTitle}>Meus Boosts</Text>
                <Text style={stylePerfil.boostTitle}>RECEBA MAIS</Text>
          </View>
          <View>
            <Image 
              source={'https://media3.giphy.com/media/9MIJf6Oj0WebKsETmP/giphy_s.gif?cid=6c09b9527v9xuejlio1ycitea3g33ya7aiz81m2zvjgo5wnv&ep=v1_internal_gif_by_id&rid=giphy_s.gif&ct=s'} 
              style={{ width: '60px', height: '60px', marginLeft:'15px'}} />
                <Text style={stylePerfil.infoTitle}>Assinaturas</Text>
                <Text style={stylePerfil.assinaturaTitle}>CONFIRA JÁ</Text>

          </View>
        </View>
        <View style={stylePerfil.flatlist}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}            
          />            
        </View>                 
      </View>
    );
  }
  


