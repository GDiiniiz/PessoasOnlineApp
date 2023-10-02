import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, TextInput, ScrollView , Image} from 'react-native';
import style from './styles.js';
import styleLogin from './login.js';
import styleMenu from './menu.js';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  const [entrar, setEntrar] = useState(false);

  const handleEntrarPress = () => {
    setEntrar(true);
  };

  const handleBackPress = () => {
    setEntrar(false);
  };

  const [login, setLogin] = useState(false);

  const handleLoginPress = () => {
    setLogin(true);
  };

  const handleBackLoginPress = () => {
    setLogin(false);
  };


  const [usuariologin, setUsuarioLogin] = useState('');
  const [senha, setSenha] = useState('');
  
  const infoUsuario = [
    funcao = "ADMINISTRADOR",
    empresa = "ATENTO BRASIL S/A",
    matricula = 1467881,
    email = "guilherme.diniz0056@gmail.com",
    telefone = "(11) 94029-5079",
    DltFerias = "01/08/2024",
    cpf = "241.971.028-28",
    rg = "60.138.765-X",


  ]

  const realizarLogin = () => {
    if (usuariologin === 'Admin' && senha === 'Admin') {

      handleLoginPress(true);
    } else {

      alert('Usuário ou senha incorretos. Por favor, tente novamente.');
    }
  };


  const [infoPessoal, setInfoPessoal] = useState(true);

  const infoPessoal2 = () => {
    setInfoPessoal(true);
    setContrato(false);
  };

  const [contrato, setContrato] = useState(true);

  const InfoContrato = () => {
    setInfoPessoal(false);
    setContrato(true);
  };




  if(entrar === false){
  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/fotos-premium/garota-feliz-e-emocional-comemora-a-vitoria-o-conceito-de-apostas-esportivas-mulher-afro-americana-jovem-e-animada-fazendo-compras-on-line-com-dinheiro-de-volta_207258-523.jpg',
      }}
      style={style.imagem1}>

      <View style={style.container}>
        <Text style={style.pessoas}>Pessoas</Text>
        <Text style={style.online}>Online</Text>
      </View>

      <View style={style.btnLogin}>
        <TouchableOpacity onPress={handleEntrarPress}>
          <Text style={style.btnEntrar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={style.btnDemostracao}>Demonstração</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>

  );}else if(entrar === true && login === false){
    return(
      <View>
        <View style={{marginTop:0, paddingTop:60 ,backgroundColor:"rgba(8, 8, 8, 0.8)"}}>
          <TouchableOpacity onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={35} color="white" left={15} />
          </TouchableOpacity> 

          <View style={{left:90}}>
            <Text style={styleLogin.pessoas}>Pessoas</Text>
            <Text style={styleLogin.online}>Online</Text>
          </View>

        </View>
        <View style={styleLogin.form}>
          <TextInput style={styleLogin.styleInput} placeholder="Usuário:" onChangeText={(text) => setUsuarioLogin(text)} value={usuariologin}/>
          <TextInput style={styleLogin.styleInput} secureTextEntry={true} placeholder="Senha:" onChangeText={(text) => setSenha(text)}/>
        <TouchableOpacity style={styleLogin.btnEntrar} onPress={realizarLogin} >
          <Text style={styleLogin.txtEntrar}>ENTRAR</Text>
        </TouchableOpacity>   
        </View>

      </View>

    );
  }else if (login === true && usuariologin === "Admin" && senha === "Admin"){
    return(
      <ScrollView >
       <View style={{height: 250,maxHeight:250, backgroundColor: "rgba(247, 129, 2, 0.9)"}}>
        <TouchableOpacity onPress={handleBackLoginPress}>
            <Ionicons name="arrow-back" size={35} color="white" left={25} top={45} />
          </TouchableOpacity> 
          <Text style={styleMenu.txtPessoas}>Pessoas</Text>
          <Text style={styleMenu.txtOnline}>Online</Text>

          <FontAwesome name="user-circle" size={64} color="white" marginLeft={35} />
            <Text style={styleMenu.infoUserFuncao}>{infoUsuario[0]}</Text> 
            <Text style={styleMenu.infoUserEmpresa}>{infoUsuario[1]}</Text>
        </View>

        <View style={{flexDirection:"row", backgroundColor: '#f5f5f5'}}>
          <TouchableOpacity onPress={infoPessoal2 } style={[styleMenu.btnsInfo, {marginLeft:20,  borderTopLeftRadius: 5, borderBottomLeftRadius: 5, backgroundColor: infoPessoal ? '#003963' : 'white', }]}>
            <Text style={[styleMenu.txtInfo, { textAlign:"center",top:15 ,color : infoPessoal ? '#fff' : '#ccc'}]}>Pessoais</Text>
          </TouchableOpacity>
            
          <TouchableOpacity onPress={InfoContrato || contrato} style={[styleMenu.btnsInfo, {borderTopRightRadius: 5, borderBottomRightRadius: 5, backgroundColor: infoPessoal ? 'white' : '#003963'}]}>
            <Text style={[styleMenu.txtInfo, { textAlign:"center",top:15 ,color : infoPessoal ? '#ccc' : '#fff'}]}>Contratuais</Text>
          </TouchableOpacity>
        </View>
        <View>
        {infoPessoal &&
            <View style={styleMenu.info}>
             <Text style={{backgroundColor:"#e0e0e0", paddingLeft: 20, paddingTop:5, color: "#636363", height: 30, fontWeight: "bold"}}>Pessoais</Text>
             <View style={{paddingLeft: 20}}>
             <Text style={{color: "#003963", fontSize: 14 }}>Matrícula</Text>
             <Text>{infoUsuario[2]}</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>    
             <Text style={{color: "#003963", fontSize: 14 }}>E-mail</Text>
             <Text>{infoUsuario[3]}</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Telefone</Text>
             <Text>{infoUsuario[4]}</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Data limite para férias</Text>
             <Text>{infoUsuario[5]}</Text>
          
             <Text style={{backgroundColor:"#e0e0e0", marginLeft:-20,paddingLeft: 20, paddingTop:5, color: "#636363", height: 30, fontWeight: "bold",marginTop: 10, marginBottom:10}}>Documentos</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>CPF</Text>
             <Text>{infoUsuario[6]}</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>RG</Text>
             <Text>{infoUsuario[7]}</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Carteira Profissioanl</Text>
             <Text>11</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Titulo de Eleitor</Text>
             <Text>11</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>PIS PASEP</Text>
             <Text></Text>
             </View>
            </View>
             }

             {contrato &&
             <View style={styleMenu.info}>
             <Text style={{backgroundColor:"#e0e0e0", paddingLeft: 20, paddingTop:5, color: "#636363", height: 30, fontWeight: "bold"}}>Contratuais</Text>
             <View style={{paddingLeft: 20}}>
             <Text style={{color: "#003963", fontSize: 14 }}>Empresa</Text>
             <Text>1 - {infoUsuario[1]}</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>CNPPJ</Text>
             <Text>02.879.250/0001-79</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Cargo</Text>
             <Text>Desenvolvedor</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Admissão</Text>
             <Text>20/07/2023</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Salario</Text>
             <Text>R$ 5.000,00</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Gestor</Text>
             <Text>3 - GERENTE MODELO</Text>
             <Text style={{color:"#ccc"}}>_______________________________________________</Text>
             <Text style={{color: "#003963", fontSize: 14 }}>Departamento</Text>
             <Text>111 - COORDENADORES / GESTORES</Text>
             </View>
            </View>

             }
        </View>
      </ScrollView>
    );
  }
  
}
