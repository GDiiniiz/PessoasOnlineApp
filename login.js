import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const styleLogin = StyleSheet.create({
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
    form:{
        width:"90%",
        height: 200,
        marginTop: 150,
        marginLeft:15
        
    },
    styleInput:{
        height:70,
        backgroundColor: "#ccc",
        marginBottom: 3,
        paddingLeft: 10,
        fontSize:20
    },

    btnEntrar:{
        backgroundColor: "#003963",
        height:75,
        marginTop:10,
        
    },

    txtEntrar:{
        fontSize:25,
        color: "white",
        paddingTop: 25,
        paddingLeft: "35%",
        fontWeight: "bold"
    }


});


export default styleLogin;
