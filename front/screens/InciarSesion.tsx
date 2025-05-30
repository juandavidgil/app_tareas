import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const styles = StyleSheet.create({
 container: {
    width: "100%",
    height: "100%",
    /* backgroundColor:'#0096c7', */
    alignItems: "center",
    justifyContent: "center",
    opacity:0.8
},
label:{
    fontSize: 25,
    margin: '5%',
    color: '#ade8f4'
},
TextInput:{
    padding: '2%',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRadius: 10,
    width: '60%',
    marginBottom: '10%',
    backgroundColor: '#ade8f4',
},
botonInciarSesion:{
    padding:'4%',
    borderWidth: 1,
    borderRadius: 30,
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#caf0f8',
    margin: '3%'
},
botones:{
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    

    
}
})

function InciarSesion (): React.JSX.Element{
    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')
const InicioSesion = console.log(usuario, contraseña)
   

    return(
        <ImageBackground source={require('../img/fondo1.jpg')} resizeMode="cover" style={styles.container} >
     

    
        <Text style={styles.label}>Usuario</Text>
        <TextInput style={styles.TextInput} 
            placeholder="escriba su usuario"
            value={usuario}
            onChangeText={setUsuario}
            />
            
            <Text style={styles.label}>Contraseña</Text>
            
            <TextInput style={styles.TextInput} 
            placeholder="escriba su constraseña"
            value={contraseña}
            onChangeText={setContraseña}
            />
            
            <View style={styles.botones}>

            <TouchableOpacity style={styles.botonInciarSesion} onPress={() => InicioSesion} >  
                <Text>    
                    Iniciar Sesion
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonInciarSesion} onPress={() => InicioSesion} >  
                <Text>    
                    Registrarse
                </Text>
            </TouchableOpacity>
            </View>
        
        </ImageBackground>
     
    )
}


export default InciarSesion