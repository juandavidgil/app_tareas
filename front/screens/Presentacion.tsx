import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './Style'

function Presentacion(): React.JSX.Element{
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text style={styles.textoBienvenida}>
                BIENVENIDO, ORGANIZA TUS PENDIENTES
            </Text>
           <View style={styles.containerBotones}>
            <TouchableOpacity /* onPress={() => navigation.navigate('IniciarSesion')} */ style={styles.botonesInicio}>
                <Text>Iniciar Sesion</Text>
            </TouchableOpacity>
             <TouchableOpacity /* onPress={() => navigation.navigate('Registro')} */ style={styles.botonesInicio}>
                <Text>Registrarse</Text>
            </TouchableOpacity>
           </View>

        </View>
    )
}

export default Presentacion



