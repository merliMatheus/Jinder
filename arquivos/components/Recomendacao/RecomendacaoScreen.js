import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SectionList, SafeAreaView, Image, FlatList} from 'react-native';
import styleRecomendacao from './styleRecomendacao'; 

const ListaItem = ({ item }) => {
  return (
    <View style={styleRecomendacao.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styleRecomendacao.itemPhoto}
        resizeMode="cover"
      />      
    </View>
  );
};

export default () => {
  return (
    <View style={styleRecomendacao.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}          
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styleRecomendacao.styleNome}>{section.nome} </Text> 
              <Text style={styleRecomendacao.styleIdade}>{section.idade}</Text>
              <Text style={styleRecomendacao.styleDistancia}>{section.distancia}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}                  
                  renderItem={({ item }) => <ListaItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />                
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListaItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};
const SECTIONS = [
  {
    nome: 'clodoaldo',
    idade: '30 anos',
    distancia: '2m de distancia',
    horizontal: true,
    data: [
      {
        key: '1',        
        uri: require('./icons/Clodo.jpeg'),
      },
      {
        key: '2',        
        uri: require('./icons/Clodo2.jpg'),
      },

      {
        key: '3',
        uri: require('./icons/Clodo3.png'),
      },
      
    ],
  },
  {
    nome: 'Luciano',
    idade: '18 anos',
    distancia: '15m de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/luciano.jpg'),
      },
      {
        key: '2',
        uri: require('./icons/luciano2.jpg'),
      },
      {
        key: '4',
        uri: require('./icons/lucianoo.jpg'),
      },
    ],
  },
  {
    nome: 'Carlos',
    idade: '24 anos',
    distancia: '19m de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/carlao.jpg'),
      },
      {
        key: '3',
        uri: require('./icons/carlao2.jpg'),
      },

      {
        key: '3',
        uri: require('./icons/carlao3.png'), 
      },
    ],
  },
  {
    nome: 'ryan gosling',
    idade: '22 anos',
    distancia: '12 km de distancia',    
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/ryan.jpg'),
      },
      {
        key: '2',
        uri: require('./icons/Ryan2.jpg'),
      },

      {
        key: '3',
        uri: require('./icons/ryan3.jpg'),
      },
      {
        key: '4',
        uri: require('./icons/ryan4.png'),
      },
      {
        key: '5',
        uri: require('./icons/ryan5.jpg'),
      },
    ],
  },
  {
    nome: 'Cbum',
    idade: '35 anos',
    distancia: '200 km de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/cbum4.jpg'),
      },
      {
        key: '2',
        uri: require('./icons/cbum2.jpg'),
      },
      {
        key: '3',
        uri: require('./icons/cbum3.jpg'),
      },
      {
        key: '4',
        uri: require('./icons/cibam.jpg'),
      },     
    ],
  },

  {
    nome: 'ernesto',
    idade: '38 anos',
    distancia: '1 km de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/ernesto.jpg'),
      },
      {
        key: '2',
        uri: require('./icons/ernesto2.jpg'),      
      },

     
    ],
  },
  {
    nome: 'jacinto',
    idade: '28 anos',
    distancia: '160 km de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/jacinto.jpg'),
      },
      {
        key: '2',
        uri: require('./icons/Jacinto2.jpg'),    
      },

      {
        key: '3',
        uri: require('./icons/Jacinto3.jpg'),
      },
      
    ],
  },
  {
    nome: 'nego bam',
    idade: '27 anos',
    distancia: '8 km de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/Negobam.jpg'),
      },
      {
        key: '2',
        uri: require('./icons/Negobam2.jpg'),      
      },

      {
        key: '3',
        uri: require('./icons/Negobam3.jpg'),      
      },
     
    ],
  },
  {
    nome: 'ednaldo pereira',
    idade:'45 anos',
    distancia: '50 km de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/Ednaldo.jpg'),
      },
      {
        key: '2',
        uri: require('./icons/Ednaldo2.png'),    
      },
      {
        key: '3',
        uri: require('./icons/Ednaldo3.jpeg'),
      },
      {
        key: '4',
        uri: require('./icons/Ednaldo4.jpg'),
      },
      {
        key: '5',
        uri: require('./icons/Ednaldo5.jpg'),
      },
    ],
  },
  {
    nome: 'Andressa Urach',
    idade: '17 anos',
    distancia: '900m de distancia!',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/Andressa1.png'),
      },
      {
        key: '2',
        uri: require('./icons/Andressa2.jpg'),      
      },

      {
        key: '3',
        uri: require('./icons/Andressa3.jpg'),
      },
      
    ],
  },
  {
    nome: 'carminha',
    idade: '42 anos',
    distancia: '8km de distancia',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/carminha.png'),
      },
      {
        key: '2',
        uri: require('./icons/carminha2.png'),      
      },

      {
        key: '3',
        uri: require('./icons/carminha3.png'),
      },
    ],
  },
  {
    nome: 'tedros adhanom',
    idade: '32 anos',
    distancia: '500m de distancia', 
    horizontal: true,
    data: [
      {
        key: '1',
        uri: require('./icons/tedros adanom.png'),
      },
      {
        key: '2',
        uri: require('./icons/tedros adanom2.jpg'),     
      },

      {
        key: '3',
        uri: require('./icons/tedros adanom3.jpg'),
      },
    ],
  },
  {
    nome: 'neyma',
    idade: '20 anos',
    distancia: '5 km de distancia', 
    horizontal: true,
    data: [
      {
        key: '2',
        uri: require('./icons/neyma2.jpg'),     
      },

      {
        key: '3',
        uri: require('./icons/neyma3.jpg'),
      },
      {
        key: '4',
        uri: require('./icons/neyma4.jpg'),
      },
      {
        key: '5',
        uri: require('./icons/neyma5.jpeg'),
      },
      {
        key: '1',
        uri: require('./icons/neyma.jpg'),
      },
    ],
  },
];

