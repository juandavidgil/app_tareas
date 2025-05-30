import React from "react";
import Presentacion from "./front/screens/Presentacion";
import Registro from "./front/screens/Registro";
import InciarSesion from "./front/screens/InciarSesion";
import Tareas from "./front/screens/Tareas";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootList = {
  Presentacion: undefined
  InciarSesion: undefined;
  Registro: undefined;
    Tareas: undefined;
}


export default function App() {
  const Stack = createNativeStackNavigator<RootList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InciarSesion" /* screenOptions={{ headerStyle: { backgroundColor: "red" }, headerTintColor: 'black', headerTitleStyle: { fontWeight: 'bold' } }} */>
        <Stack.Screen name="InciarSesion" component={InciarSesion} options={{ title: "Inicio sesion" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}