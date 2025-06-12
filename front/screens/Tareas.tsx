import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import RenderItem from "./funcional";
import styles from './Style'


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
    done: true,
    date: new Date()
  }
]

interface Task{
  titulo:string,
  done:boolean,
  date: Date
}
function renderItem({item}:{item:Task}){
  return(  
  <View style={styles.dataTask}>
    <TouchableOpacity>
    <Text style={item.done ? styles.textDone : styles.textoRenderizado}>{item.titulo}</Text>
    <Text>{item.date.toDateString()}</Text>
    </TouchableOpacity>
    {
      item.done &&
      (
        <TouchableOpacity style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>
            Eliminar
          </Text>
        </TouchableOpacity>
      )
    }
  </View>
  )
}

function Tareas(): React.JSX.Element {
  const markDone=()=>{}
  const deleteF=()=>{}
  return(
  
 <View style={styles.container}>
    <Text style={styles.texto}>Mis Tareas</Text>
        <View style={styles.contenedorElementos}>
          <View style={styles.Ctareas}>
              <TextInput style={styles.TextInput} placeholder="Escriba su tarea"/>
            <TouchableOpacity style={styles.botonAgregar}>
              <Text style={styles.textoBoton}>Agregar</Text>
            </TouchableOpacity>
          </View>
            <FlatList style={styles.renderizado}
              renderItem={({item})=>(
              <RenderItem
              item={item}  
              markDone={markDone}
              deleteF={deleteF}
              />
              )}
              data={tasks}
            />
  {/*   <Image source={require('../img/fondo1.jpg')} style={styles.imagenInicio}/> */}
      </View>
          
          
</View>
)
}
export default Tareas;
