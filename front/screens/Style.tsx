import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
  
  //PRESENTACION 

  textoBienvenida: {
    position: 'absolute',
    marginBottom: '40%',
    fontSize: 18,
    fontFamily: 'Serif'
  },
  botonesInicio: {
    display: 'flex',
    backgroundColor: '#BEDCFE',
    alignItems: 'center',
    width: '50%',
    padding: 10,
    margin: '2%',
    borderWidth: 2,
    borderRadius: 50
  },
  containerBotones: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    marginTop: '90%'

  },
  //REGISTRO
  TextInputRegistro:{
    borderRadius: 20
  },
  picker: {
    width: '70%',

    backgroundColor: '#669BBC',
    borderRadius: 10
  },
  //INICIAR SESION 

  label: {
    fontSize: 25,
    margin: '5%',
    color: '#ade8f4'
  },

  botonInciarSesion: {
    padding: '4%',
    borderWidth: 1,
    borderRadius: 30,
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#caf0f8',
    margin: '3%'
  },
  botones: {
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  //TAREAS
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contenedorElementos: {
    alignItems: 'center',
    width: '100%',
    height: '80%'
  },
  texto: {
    fontSize: 40,
    padding: '5%',
    marginBottom: '5%'
  },
  imagenInicio: {
    width: '50%',
    height: '50%',
    marginTop: '3%',
    resizeMode: 'cover'
  },
  TextInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#black',
    padding: 2,
    width: Dimensions.get("screen").width * 0.6,
    height: '60%',
    marginLeft: '4%',
    marginTop: '5%',
    fontSize: 20
  },
  botonAgregar: {
    backgroundColor: '#7fee73',
    borderRadius: 5,
    borderWidth: 2,
    width: '30%',
    height: '60%',
    marginTop: '5%',
    marginRight: '3%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  textoBoton: {
    fontSize: 15,
  },
  Ctareas: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  renderizado: {
    fontSize: 40,
    width: '100%',
    height: '90%',
  },
  textoRenderizado: {
    fontSize: 20,
    marginBottom: '3%',
  },
  dataTask: {
    paddingVertical: 20,
    marginLeft: '10%',
    width: '80%',

    borderBottomColor: "#6f6f6f",
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botonEliminar: {
    borderWidth: 1,
    borderRadius: 20,
    padding: '2%',
    backgroundColor: 'red'
  },
  textoEliminar: {
    fontSize: 15,
    color: 'white'
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: '6c6c6c'
  },
})

export default styles