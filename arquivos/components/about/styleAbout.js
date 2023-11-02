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



  // imgsColumn:{
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
  // imgMeio:{
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // image:{
  //   width:100,
  //   height:100,
  //   margin: 5
  // },

  /* <Image
        source={Marley} // Aqui você usa a variável que importou anteriormente
        style={styleAbout.image} // Defina um estilo para a imagem
      />
      <Image
        source={Marley} // Aqui você usa a variável que importou anteriormente
        style={styleAbout.image} // Defina um estilo para a imagem
      />
      <Image
        source={Marley} // Aqui você usa a variável que importou anteriormente
        style={styleAbout.image} // Defina um estilo para a imagem
      />
      <Image
        source={Marley} // Aqui você usa a variável que importou anteriormente
        style={styleAbout.image} // Defina um estilo para a imagem
      />
      </View>
      <View style={styleAbout.imgMeio}>
      <Image
        source={Marley} // Aqui você usa a variável que importou anteriormente
        style={styleAbout.image} // Defina um estilo para a imagem
      /> 
      
    */

  
});
export default styleAbout;