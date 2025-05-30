import React, { useState } from "react";
import { View,Text, StyleSheet, TextInput, TouchableOpacity,  } from "react-native";
import {Picker} from "@react-native-picker/picker"



const styles = StyleSheet.create({
    container: {
    width: "100%",
    height: "100%",
    backgroundColor:'#FDF0D5', 
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8
    
},
    label:{
    fontSize: 20,
    margin: '1%',
    color: '#003049'
},
    TextInput:{
    padding: '2%',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderRadius: 10,
    width: '70%',
    marginBottom: '2%',
    backgroundColor: '#669BBC',
},
botonInciarSesion:{
    padding:'3%',
    borderWidth: 2,
    borderRadius: 30,
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#60d394',
    marginTop: '25%'
    
},
 
  picker: {
    width: '70%',
   
    backgroundColor: '#669BBC',
    borderRadius:10
  },
})

function Registro(): React.JSX.Element{
    const [TipoDocumento, setTipoDocumento] = useState('Cedula de ciudadania');
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.TextInput} placeholder="Nombre"/>

            <Text style={styles.label}>Correo</Text>
            <TextInput style={styles.TextInput} placeholder="Correo" />

            <Text style={styles.label}>Tipo documento</Text>
            
            
            <Picker style={styles.picker} selectedValue={TipoDocumento}
                    onValueChange={setTipoDocumento}>
                <Picker.Item label="Tarjeta de identidad" />
                <Picker.Item label="Cedula de ciudadania" />
                <Picker.Item label="Pasaporte" />
            </Picker>

            <Text style={styles.label}>Documento</Text>
            <TextInput style={styles.TextInput} placeholder="Documento"/>

            <Text style={styles.label}>Telefono</Text>
            <TextInput style={styles.TextInput} placeholder="Telefono"/>

            <Text style={styles.label}>Usuario</Text>
            <TextInput style={styles.TextInput} placeholder="Usuario"/>

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.TextInput} placeholder="Contraseña"/>
            <TouchableOpacity style={styles.botonInciarSesion}  >  
                <Text>    
                  Registrarse
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Registro