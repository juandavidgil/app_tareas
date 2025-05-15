/* import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation} from '@react-navigation/native'
import { StackParamlist } from "../../types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
const InicioPantalla: React.FC = () =>{
const navigation =  useNavigation<NativeStackNavigationProp<StackParamlist>>();
    return(
       <View>
        <Text>soy la pantalla de incio</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text>Registrarse</Text>
        </TouchableOpacity>
       </View>
    )
}

export default InicioPantalla */