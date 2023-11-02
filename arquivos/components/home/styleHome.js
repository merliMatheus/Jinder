import { StyleSheet } from 'react-native';
const styleHome = StyleSheet.create({
//fundo tela
  container: {
    backgroundColor: '#BB2525',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
//"Jinder" 
  nomeApp: {
    fontSize: '50px',
    color: 'white',
    fontWeight:'30px',
    paddingBottom: '200px',
  },
 
//botão login
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '90px',
    padding: '10px',
    borderRadius: '25px',
    marginTop:'95px',
    margin: '10px',
},
//botão cadastro
buttonCadastro: {
  alignItems: 'center',
  backgroundColor: 'white',
  paddingHorizontal: '70px',
  padding: '10px',
  borderRadius: '25px', 
},
//texto dentro do botão
  buttonText:{
    fontSize: '20px',
    fontStyle: 'bolder',
  },
});
export default styleHome;