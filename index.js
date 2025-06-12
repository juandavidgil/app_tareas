/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Presentacion from './front/screens/Presentacion';
import Registro from './front/screens/Registro';
import IniciarSesion from './front/screens/IniciarSesion';
import Tareas from './front/screens/Tareas';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Registro);
