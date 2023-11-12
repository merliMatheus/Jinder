import { StyleSheet } from 'react-native';
const styleDescubra = StyleSheet.create({
//fundo tela
  container: {
    backgroundColor: '#D3D3D3',
    flex: 1,    
  },
  contentContainer:{
    justifyContent: 'center',
  },
  flatlist:{
    paddingTop: '20px',
  },
  cardRoles: {
    paddingVertical: '5px',
 },


 ButtonBottom:{
  width: '100px',
  height:'40px',
  backgroundColor: 'black',
  borderRadius: '10px',
  margin: '20px',
},

 imageFlatlist:{
  marginLeft: '10px',
  width: '180px',
  height: '280px',
  padding: '20px',
  opacity: '0.85',
  borderRadius: '20px',
  borderColor: 'black',
  borderWidth: 1,
 },
 textFlatlist:{
  fontSize: '24px',
  paddingLeft: '15px',
  fontWeight: 'bold',
 },
  cabecalho:{
    flexDirection: 'row',           
  },
  cardTop:{           
    alignItems:'center' ,    
  },
  titleTop:{
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
  },
  titleTopView:{
    marginTop: '120px',  
    position: 'absolute',
    marginLeft: '50px',
  },
  ButtonTopView:{    
    marginTop: '90px',  
    position: 'absolute',  
    marginLeft: '210px',      
  },
  ButtonTop:{    
    backgroundColor: 'white',
    opacity: '0.85',
    paddingHorizontal: '22px',        
    borderRadius: '20px',    
    paddingHorizontal: '17px',
    paddingVertical: '7px',
  },
  subtitleTop:{
    fontSize: '17px',       
    color: 'black',
    fontWeight: 'bold',
  },  
  imagecardTop:{
    width: '350px', 
    height: '200px',
    opacity: '0.88',
    borderRadius: '15px',
    borderColor: 'black',
    borderWidth: '1.5px',
  },     
  buttonSobre: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '40px',
    padding: '10px',
    borderRadius: '25px',    
    margin: '10px',
},
  buttonText:{
    fontSize: '18px',
  },





});
export default styleDescubra;