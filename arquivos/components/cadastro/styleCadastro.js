import { StyleSheet } from 'react-native';
const styleCadastro = StyleSheet.create({

  container: {
    backgroundColor: '#BB2525',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextInput: {
    margin: 10,
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: '20px',
    textAlign: 'left',
    backgroundColor: 'white'

  },

  title: {
    fontSize: '40px',
    color: 'white',
    fontWeight:'25px',
    paddingBottom: '150px',
  },
  boxForm:{
    padding: '15px',
    marginTop: '100px',
    borderRadius: '5px',
  },
  button: { 
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '40px',
    padding: '10px',
    borderRadius: '25px',
    margin: '10px',
  },
  buttonText: {
    color: 'black',
  },
});
export default styleCadastro;