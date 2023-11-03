//imports principais
import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styleRecomendacao from './styleRecomendacao';
export default function RecomendacaoScreen ({navigation}){

    const goAbout = () => {
      navigation.navigate('About')
    }
    const goContact = () => {
      navigation.navigate('Contact')
    }
    const IMAGENS = [
      {
        id:1,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 2,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 3,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
  
      {
        id: 4,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
        
      },
      {
        id: 5,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 6,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 7,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
        
      },
      {
        id: 8,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 9,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 10,
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 11,
  
        imagens:[
          require('./icons/tedros adanon.jpg'), 
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
          require('./icons/tedros adanon.jpg'),
        ] 
      },
      {
        id: 12,
        imagens: [
          require('./icons/neyma.jpg'), 
          require('./icons/neyma.jpg'), 
          require('./icons/neyma.jpg'),
          require('./icons/neyma.jpg'), 
          require('./icons/neyma.jpg')
        ],
      },
  
  
  
  
    ];
  
    const DATA = [
      {
        id: 1,
        nome: 'clodoaldo',
        idade: ' 21',
        distancia: '5m de distancia',
        imagem: require('./icons/Clodo.jpeg'),
        
        
      },
      {
        id: 2,
        nome: 'luciano',
        idade: ' 18',
        distancia: '20m de distancia',
        imagem: require('./icons/luciano.jpg'),
      },
      {
        id: 3,
        nome: 'carlos',
        idade: ' 25',
        distancia: '15m de distancia',
        imagem: require('./icons/carlao.jpg'),
      },
      {
        id: 4,
        nome: 'ryan gosling',
        idade: ' 22',
        distancia: '12 km de distancia',
        imagem: require('./icons/ryan.jpg'),
        
      },
      {
        id: 5,
        nome: 'Cbum',
        idade: ' 35',
        distancia: '20 km de distancia',
        imagem: require('./icons/cibam.jpg'),
      },
      {
        id: 6,
        nome: 'ernesto',
        idade: ' 38',
        distancia: '1 km de distancia',
        imagem: require('./icons/ernesto.jpg'),
      },
      {
        id: 7,
        nome: 'jacinto',
        idade: ' 28',
        distancia: '160 km de distancia',
        imagem: require('./icons/jacinto.jpg'),
        
      },
      {
        id: 8,
        nome: 'nego bam',
        idade: ' 30',
        distancia: '8 km de distancia',
        imagem: require('./icons/Negobam.jpg'),
      },
      {
        id: 9,
        nome: 'ednaldo pereira',
        idade:' 45',
        distancia: '50 km de distancia',
        imagem: require('./icons/Ednaldo.jpg'),
      },
      {
        id: 10,
        nome: 'rodela',
        idade: ' 55',
        distancia: '23 km de distancia',
        imagem: require('./icons/rodela.jpeg'),
        
      },
      {
        id: 11,
        nome: 'tedros adhanom',
        idade: ' 58',
        distancia: '500m de distancia',
        imagem: require('./icons/tedros adanon.jpg'),
      },
      {
        id: 12,
        nome: 'neyma',
        idade: ' 24',
        distancia: '5 km de distancia',
        imagem: require('./icons/neyma.jpg'),
      },
    ];
    
    const Item = ({ nome, idade, distancia, imagem }) => (
      <View style={styleRecomendacao.item}>
  
        <View style={styleRecomendacao.fotoContainer}>
          <Image 
            style={{Width: '300px', height: '500px' }}
            source={{uri:`${imagem}`}} 
          />
        </View>
  
        <View style={styleRecomendacao.info}>
          <Text style={{fontSize: '20px'}}>{nome}</Text>
          <Text style={{fontSize: '20px'}}>{idade}</Text>
        </View>
        
        <Text style={{paddingHorizontal: '5px', fontSize: '20px'}}>{distancia}</Text>
      </View>
  
  );
  const renderItem=({item})=>(
    <Item 
      nome={item.nome} 
      idade={item.idade} 
      distancia={item.distancia} 
      imagem={item.imagem} 
    />
  )
  return(
  
      <View style={styleRecomendacao.container}>
  
        <FlatList
          ListHeaderComponent = {
          <Text style={{  height: 55 , fontSize: '20px', fontWeight: 'bold', color: 'black'}}>
            Pessoas que talvez você goste
          </Text>}
  
          data = {DATA}
          renderItem={renderItem} 
          keyExtractor = {item => item.id}
          
        />
  
        <SafeAreaView style={styleRecomendacao.safearea}>
        
          <TouchableOpacity 
          style={styleRecomendacao.buttonSobre}  
          onPress={() => goAbout()} >
          <Text style={styleRecomendacao.buttonText}>SOBRE NÓS</Text>
          
          </TouchableOpacity> 
  
          <TouchableOpacity 
          style={styleRecomendacao.buttonContatos}  
          onPress={() => goContact()} >
          <Text style={styleRecomendacao.buttonText}>CONTATOS</Text>
          
          </TouchableOpacity>
  
        </SafeAreaView>
      </View>
    );
  }
  