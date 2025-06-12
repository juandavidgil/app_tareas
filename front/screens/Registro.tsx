import React, { useState } from "react";
import { View,Text, StyleSheet, TextInput, TouchableOpacity,  } from "react-native";
import {Picker} from "@react-native-picker/picker"
import styles from "./Style";




function Registro(): React.JSX.Element{
    const [TipoDocumento, setTipoDocumento] = useState('Cedula de ciudadania');
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.TextInputRegistro} placeholder="Nombre"/>

            <Text style={styles.label}>Correo</Text>
            <TextInput style={styles.TextInputRegistro} placeholder="Correo" />

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