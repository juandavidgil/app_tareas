import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

const styles = StyleSheet.create({
 container: {
    width:'100%',
    backgroundColor:'#C0D7BB',
    height:'100%',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
 },
 textoBienvenida:{
    position:'absolute',
    marginBottom:'40%',
    fontSize:18,
    fontFamily: 'Serif'
 },
 botonesInicio:{
    display:'flex',
    
    backgroundColor: '#BEDCFE',
    alignItems:'center',
    width:'50%',
    padding:10,
    margin:'2%',
    borderWidth: 2,
    borderRadius: 50
 },
 containerBotones:{
    position:'absolute',
    width:'100%',
    alignItems:'center',
    marginTop:'90%'

 }
})
function Presentacion(): React.JSX.Element{
    return(
        <View style={styles.container}>
            <Text style={styles.textoBienvenida}>
                BIENVENIDO, ORGANIZA TUS PENDIENTES
            </Text>
           <View style={styles.containerBotones}>
            <TouchableOpacity style={styles.botonesInicio}>
                <Text>Iniciar Sesion</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.botonesInicio}>
                <Text>Registrarse</Text>
            </TouchableOpacity>
           </View>

        </View>
    )
}

export default Presentacion



