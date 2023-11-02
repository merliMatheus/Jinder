//imports principais
import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput, FlatList  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import dos componentes
import styleLogin from './components/login/styleLogin';
import styleHome from './components/home/styleHome'; 
import styleContact from './components/contacts/styleContact'; 
import styleAbout from './components/about/styleAbout';
import styleCadastro from './components/cadastro/styleCadastro';
import styleRecomendacao from './components/Recomendacao/styleRecomendacao';
import styleDescubra from './components/Descubra/styleDescubra';





//home page > login or cadastro 
function HomeScreen ({navigation}){
  const goLogin = () => {
    navigation.navigate('Login')
  }
  const goCadastro = () =>{
    navigation.navigate('Cadastro')
  }

  return(
    <View style={styleHome.container}>
      <View style={styleHome.titulo}>
        <Text style={styleHome.nomeApp}> Jinder </Text>
      </View>
      <View style={styleHome.botoes}>
        <TouchableOpacity 
        style={styleHome.buttonLogin}  
        onPress={() => goLogin()} >
        <Text style={styleHome.buttonText}>LOGIN</Text>
        
        </TouchableOpacity> 


        <TouchableOpacity 
        style={styleHome.buttonCadastro}  
        onPress={() => goCadastro()} >
        <Text style={styleHome.buttonText}>CADASTRO</Text>
        
        </TouchableOpacity>
      </View>
    </View>
  );
}

//login page > go to About
function LoginScreen ({navigation}) {
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


//cadasttro page > go to About
function CadastroScreen ({navigation}) {
  let [nome, setNome] = useState('');
  let [email, setEmail] = useState ('');
  let [senha, setSenha] = useState ('');
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

function DescubraScreen ({navigation}){
  const goAbout = () => {
    navigation.navigate('About')
  }
  const goContact = () =>{
    navigation.navigate('Contact')
  }
  const goRecomendacao = () =>{
    navigation.navigate('Recomendacao')
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

    </View>
  );
}
function RecomendacaoScreen ({navigation}){

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
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 2,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 3,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },

    {
      id: 4,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
      
    },
    {
      id: 5,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 6,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 7,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
      
    },
    {
      id: 8,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 9,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 10,
      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 11,

      imagens:[
        require('./components/Recomendacao/icons/tedros adanon.jpg'), 
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
        require('./components/Recomendacao/icons/tedros adanon.jpg'),
      ] 
    },
    {
      id: 12,
      imagens: [
        require('./components/Recomendacao/icons/neyma.jpg'), 
        require('./components/Recomendacao/icons/neyma.jpg'), 
        require('./components/Recomendacao/icons/neyma.jpg'),
        require('./components/Recomendacao/icons/neyma.jpg'), 
        require('./components/Recomendacao/icons/neyma.jpg')
      ],
    },




  ];

  const DATA = [
    {
      id: 1,
      nome: 'clodoaldo',
      idade: ' 21',
      distancia: '5m de distancia',
      imagem: require('./components/Recomendacao/icons/Clodo.jpeg'),
      
      
    },
    {
      id: 2,
      nome: 'luciano',
      idade: ' 18',
      distancia: '20m de distancia',
      imagem: require('./components/Recomendacao/icons/luciano.jpg'),
    },
    {
      id: 3,
      nome: 'carlos',
      idade: ' 25',
      distancia: '15m de distancia',
      imagem: require('./components/Recomendacao/icons/carlao.jpg'),
    },
    {
      id: 4,
      nome: 'ryan gosling',
      idade: ' 22',
      distancia: '12 km de distancia',
      imagem: require('./components/Recomendacao/icons/ryan.jpg'),
      
    },
    {
      id: 5,
      nome: 'Cbum',
      idade: ' 35',
      distancia: '20 km de distancia',
      imagem: require('./components/Recomendacao/icons/cibam.jpg'),
    },
    {
      id: 6,
      nome: 'ernesto',
      idade: ' 38',
      distancia: '1 km de distancia',
      imagem: require('./components/Recomendacao/icons/ernesto.jpg'),
    },
    {
      id: 7,
      nome: 'jacinto',
      idade: ' 28',
      distancia: '160 km de distancia',
      imagem: require('./components/Recomendacao/icons/jacinto.jpg'),
      
    },
    {
      id: 8,
      nome: 'nego bam',
      idade: ' 30',
      distancia: '8 km de distancia',
      imagem: require('./components/Recomendacao/icons/Negobam.jpg'),
    },
    {
      id: 9,
      nome: 'ednaldo pereira',
      idade:' 45',
      distancia: '50 km de distancia',
      imagem: require('./components/Recomendacao/icons/Ednaldo.jpg'),
    },
    {
      id: 10,
      nome: 'rodela',
      idade: ' 55',
      distancia: '23 km de distancia',
      imagem: require('./components/Recomendacao/icons/rodela.jpeg'),
      
    },
    {
      id: 11,
      nome: 'tedros adhanom',
      idade: ' 58',
      distancia: '500m de distancia',
      imagem: require('./components/Recomendacao/icons/tedros adanon.jpg'),
    },
    {
      id: 12,
      nome: 'neyma',
      idade: ' 24',
      distancia: '5 km de distancia',
      imagem: require('./components/Recomendacao/icons/neyma.jpg'),
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


//about page > go to contacts page
function AboutScreen ({navigation}){
  const goDescubra = () => {
    navigation.navigate('Descubra')
  }
  return(
  <View style={styleAbout.container}>
    
    <Text style={styleAbout.title}>this is your about page</Text>
    <View style={styleAbout.imgsColumn}>
      

    </View>
    
    <TouchableOpacity 
      style={styleAbout.buttonContatos}  
      onPress={() => goDescubra()} >
      <Text style={styleDescubra.buttonText}>Ir para a pagina descubra</Text>
      
    </TouchableOpacity> 
    
    
  
  </View>
  );
}

function ContactScreen ({navigation}){
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

//
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />  
        <Stack.Screen name="Cadastro" component={CadastroScreen} /> 
        <Stack.Screen name="Descubra" component={DescubraScreen} />      
        <Stack.Screen name="Recomendacao" component={RecomendacaoScreen} />  
        <Stack.Screen name="Login" component={LoginScreen} />    
        <Stack.Screen name="About" component={AboutScreen} />  
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




