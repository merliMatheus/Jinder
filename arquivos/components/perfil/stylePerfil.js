import { StyleSheet } from 'react-native';
const stylePerfil = StyleSheet.create({
//fundo tela
  container: {
    backgroundColor: '#D3D3D3',
    flex: 1,
  },  
  cabecalho:{
    flexDirection: 'row',
    justifyContent: 'space-between',        
  },
  cardTop:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '10px',

  },
   user:{
    display: 'flex',
    flexDirection: 'inline',    
    alignItems:'center' ,
    justifyContent: 'center',
    marginTop: '40px', 
    
  },
  infoUser:{ 
    fontSize:'25px',
    fontWeight: 'bold',

  },
  userImage:{
    width: '200px',
    height:'200px',
    borderRadius: '50%',
    
  },   
  planos:{
    backgroundColor: '#DCDCDC',
    borderColor: 'black',
    borderWidth: '1.5px',
    borderRadius: '10px',     
    marginHorizontal: '5px',    
    paddingHorizontal: '20px',
    flex: 1,
  },
  info:{
    flexDirection: 'row',   
    justifyContent: 'space-around',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  upgradeButton:{
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: '22px',
    height:'41px',
    paddingTop: '11px',
    borderRadius: '25px',
    margin: '10px',
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
  },
  infoTitle:{
    marginLeft:'8px'
  },
  likeTitle:{
    color: 'blue',
    fontWeight: 'bold',
  },
  boostTitle:{
    color: 'purple',
    fontWeight: 'bold',
  },
  assinaturaTitle:{
    color: 'orange',
    fontWeight: 'bold',
    marginLeft:'5px'
  }, 
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
  },
  cardMeio: {

  },
  cardBottom: {

  },

});
export default stylePerfil;