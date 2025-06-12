import React from "react";
import Presentacion from "./front/screens/Presentacion";
import Registro from "./front/screens/Registro";
import IniciarSesion from "./front/screens/IniciarSesion";
import Tareas from "./front/screens/Tareas";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootList = {
  Presentacion: undefined
  IniciarSesion: undefined;
  Registro: undefined;
  Tareas: undefined;
}


export default function App() {
  const Stack = createNativeStackNavigator<RootList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Presentacion"  screenOptions={{ headerStyle: { backgroundColor: "red" }, headerTintColor: 'black', headerTitleStyle: { fontWeight: 'bold' } }} >
        <Stack.Screen name="Presentacion" component={Presentacion} options={{ title: "Presentacion" }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: "Registro" }} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} options={{ title: "Inicio sesion" }} />
        <Stack.Screen name="Tareas" component={Tareas} options={{ title: "Tareas" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}