import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const style = StyleSheet.create({

imagem1:{
  height:"100%",
  backgroundColor: 'rgba(0,0,0,0.5)',
    
},
container:{
  top: "45%",
  left: "27%",
  top: "20%",
   
},

pessoas:{
fontSize: 51,
color: "white",
fontWeight: "bold"
},

online:{
  fontSize: 40,
  color: "orange",
  left: 85,
  bottom: 20,

},

btnLogin:{
  flexDirection: "row",
  top: "150%"

},

btnEntrar:{
  color:"white",
  backgroundColor: "rgba(64, 64, 64, 0.9)",
  height: 100,
  width: 200,
  fontWeight: "bold",
  paddingTop:35,
  paddingLeft:60,
  marginRight: 5,
  fontSize:25

},

btnDemostracao:{
  color:"white",
  backgroundColor: "rgba(64, 64, 64, 0.9) ",
  height: 100,
  width: 200,
  fontWeight: "bold",
  paddingTop:35,
  paddingLeft:20,
  marginRight: 5,
  fontSize:23
},


});


export default style;
