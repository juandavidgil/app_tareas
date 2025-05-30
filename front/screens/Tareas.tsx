import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  contenedor:{
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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
 /*  imagenInicio:{
    width: '50%',
    height: '50%',
    marginTop:'3%',
    resizeMode: 'cover'
  }, */
  TextInput:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#black',
    padding:2,
    width: Dimensions.get("screen").width*0.6,
    height: '60%',
    marginLeft: '4%',
    marginTop:'5%',
    fontSize:20
    },
  botonAgregar:{
    backgroundColor:'#7fee73',
    borderRadius: 5,
    borderWidth: 2,
    width: '30%',
    height: '60%',
    marginTop: '5%',
    marginRight:'3%',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
textoBoton:{
  fontSize: 15,
},
Ctareas:{
  width:'100%',
  height:'10%',
  flexDirection:'row',
  justifyContent:'space-between',
  gap: 10
},
renderizado:{
  fontSize:40,
  width:'100%',
  height:'90%',
  
/*   backgroundColor:'#008f39' */
},
textoR:{
 fontSize:20,
 
 marginLeft:'7%',
 marginBottom:'3%',
 /* backgroundColor: '#ff0000' */
},
dataTask:{
 paddingVertical: 20, 
 marginLeft: '10%',
  width:'80%',
  
  borderBottomColor: "#6f6f6f",
  borderBottomWidth: 2,
/*   backgroundColor:'#ddd' */
}

})

const tasks=[
  
  {
    titulo:"Estudiar",
    done:false,
    date: new Date()
  },
  {
    titulo:"jugar",
    done:false,
    date: new Date()
  
  },
  {
    titulo: "caminar",
    done: false,
    date: new Date()
  }
]

interface Task{
  titulo:string,
  done:boolean,
  date: Date
}
function renderItem({item}:{item:Task}){
  return(  <View style={styles.dataTask}>

    <Text style={styles.textoR}>{item.titulo}</Text>
  </View>
  )
}

function Tareas(): React.JSX.Element {
  return(
  
 <View style={styles.contenedor}>
    <Text style={styles.texto}>Mis Tareas</Text>
        <View style={styles.contenedorElementos}>
          <View style={styles.Ctareas}>
              <TextInput style={styles.TextInput} placeholder="Escriba su tarea"/>
            <TouchableOpacity style={styles.botonAgregar}>
              <Text style={styles.textoBoton}>Agregar</Text>
            </TouchableOpacity>
          </View>
          
            <FlatList style={styles.renderizado}
              renderItem={renderItem}
              data={tasks}
            />
    {/* <Image source={require('../img/fondo.webp')} style={styles.imagenInicio}/> */}
      </View>
          
          
</View>
)
}
export default Tareas;
