import { StyleSheet } from 'react-native';
const styleAbout = StyleSheet.create({

  container: {
    backgroundColor: '#BB2525',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '15px',
    margin:'20px',
    paddingBottom: '200px',
    
  },
  buttonContatos: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '25px',
    padding: '10px',
    borderRadius: '25px',
  },
  title: {
    fontSize: '30px',
    color: 'white',
    fontWeight:'25px',
    paddingBottom: '150px',
  },  
  buttonText:{
    fontSize: '18px',
  },
});

export default styleAbout;