import { StyleSheet } from 'react-native';
const styleLogin = StyleSheet.create({
  //fundo tela
  container: {
    backgroundColor: '#BB2525',
    flex: 1,
    
  },
  //view do titulo
  ViewTitle:{
    alignItems: 'center',
   
  },
  viewMeio:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 

  
  },

  login:{
    paddingLeft: 5,
    fontSize: '30px',
    color: 'white',

  },

  bemvindo:{
    paddingLeft: 5,
    color: 'white',
  }, 
  email:{
    color: 'white',

  },
  senha:{
    color: 'white',

  },
  
  //titulo 
  logo: {
    fontSize: '30px',
    color: 'white',
  },

  TextInput: {
    margin: '10px',
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: '30px',
    fontSize: '20px',
    textAlign: 'left',
    backgroundColor: 'white',

  },


  //botão login
  buttonLogin: {
    justifyContent: 'top', 
    backgroundColor: 'red',
    padding: '10px',
    paddingHorizontal: '130px',
    borderRadius: '25px',
    margin: '10px',
   
},
  buttonText: {
    color: 'white',
    fontSize: '25px',
    color: 'white',
  },

  
});
export default styleLogin;