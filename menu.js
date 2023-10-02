import { StyleSheet } from 'react-native';

const styleMenu = StyleSheet.create({

    txtPessoas:{
        marginLeft: "28%",
        fontSize:50,
        fontWeight: "bold",
        color: "#08214a"
    },

    txtOnline:{
        marginLeft: "50%",
        fontSize: 40,
        color: "white",
        bottom: 17,
        
    },

    infoUserFuncao:{
        color: "white",
        fontSize: 24,
        marginLeft:"40%",
        marginTop:-55,
        textShadowRadius: 5,
        textShadowOffset:{width: 1, height: 1},
        textShadowColor: "black"
        
    },

    infoUserEmpresa:{
        color: "white",
        fontSize: 15,
        marginLeft: "40%",
        textShadowRadius: 5,
        textShadowOffset:{width: 1, height: 1},
        textShadowColor: "black",

    },

    btnsInfo:{
        width:170,
        height:50,
        marginTop:20,
        marginBottom:20,
        backgroundColor:"#003963'",
        borderColor:"#ccc",
        borderWidth:1,
       
    },

    txtInfo:{
        color:"white"
    },

    

});

export default styleMenu;