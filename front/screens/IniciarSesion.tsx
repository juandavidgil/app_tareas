import React,{useState} from "react";
import { View, Text, TextInput,TouchableOpacity, ImageBackground } from "react-native";
import styles from "./Style";


function IniciarSesion (): React.JSX.Element{
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


export default IniciarSesion