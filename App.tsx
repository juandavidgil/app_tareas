import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  contenedor:{
    width: '100%',
    height: '100%',
    backgroundColor: '#dfd2cf',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contenedorElementos:{
    alignItems: 'center',
    width: '100%',
    height: '80%'
  },
  texto:{
    fontSize: 40,
    padding: '5%',
    marginBottom: '5%'
  },
  imagenInicio:{
    width: '50%',
    height: '50%',
    resizeMode: 'cover'
  },
  TextInput:{
    borderRadius: 5,
    borderWidth: 2,
   borderBottomColor: '#000000'
  },
  botonAgregar:{
    backgroundColor:'#7fee73',
    borderRadius: 5,
    borderWidth: 2,
    width: '30%',
    height: '4%',
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center'
    
}
})
function App(): React.JSX.Element {
  return(
  
 <View style={styles.contenedor}>
  <Text style={styles.texto}>Mis Tareas</Text>
  <View style={styles.contenedorElementos}>

   <Image source={require('./front/img/ImgInicio.png')} style={styles.imagenInicio}/>
    <TextInput
  placeholder="Escriba su tarea"
    />
    <TouchableOpacity style={styles.botonAgregar}>
      <Text>
        Agregar
      </Text>
    </TouchableOpacity>
  </View>
 
</View>
)
}
export default App;
