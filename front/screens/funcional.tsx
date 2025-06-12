import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import { Task } from "./Tareas";
import styles from './Style'

interface ItemProps{
    item: Task
    markDone: ()=>void
    deleteF: ()=>void
}

export default function RenderItem({item,markDone,deleteF}:{item:ItemProps}){
  return(  
  <View style={styles.dataTask}>
    <TouchableOpacity onPress={markDone}>
    <Text style={item.done ? styles.textDone : styles.textoRenderizado}>{item.titulo}</Text>
    <Text>{item.date.toDateString()}</Text>
    </TouchableOpacity>
    {
      item.done &&
      (
        <TouchableOpacity onPress={deleteF} style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>
            Eliminar
          </Text>
        </TouchableOpacity>
      )
    }
  </View>
  )
}