import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
const styleRecomendacao = StyleSheet.create({

container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
 
  item: {
    backgroundColor: '#e0e0e0',
    padding: '5px',
    width: '100%',
    marginVertical: '15px',
  },
  safearea:{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '15px',


   

  },
  
  fotoContainer:{
    height: '500px',
    width: '300px',
    borderWidth: '2px',
    
  },
  
  info:{
    paddingTop: '15px',
    flexDirection: 'row',
    paddingHorizontal: '5px',
    

    
  },

  buttonSobre: {
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingHorizontal: '25px',
    padding: '10px',
    borderRadius: '25px',
    marginHorizontal: '10px',
    
},
buttonContatos: {
  alignItems: 'center',
  backgroundColor: 'blue',
  paddingHorizontal: '25px',
  padding: '10px',
  borderRadius: '25px',
  marginHorizontal: '10px',

},
//texto dentro do botão
  buttonText:{
    fontSize: '20px',
    
  },
});
export default styleRecomendacao;