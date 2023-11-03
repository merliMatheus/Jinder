import { StyleSheet } from 'react-native';
const stylePerfil = StyleSheet.create({
//fundo tela
  container: {
    backgroundColor: '#BB2525',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: '35px',
    color: 'white',
    fontWeight:'30px',
    paddingBottom: '200px',
  },
  buttonRecomendacao: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '40px',
    padding: '10px',
    borderRadius: '25px',
    marginTop:'95px',
    margin: '10px',
},
buttonDescubra: {
  alignItems: 'center',
  backgroundColor: 'white',
  paddingHorizontal: '25px',
  padding: '10px',
  borderRadius: '25px',
  marginBottom: '10px',
},
//texto dentro do botão
  buttonText:{
    fontSize: '18px',
  },
});
export default stylePerfil;