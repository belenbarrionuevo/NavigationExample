import {View, Text, Button} from 'react-native';

function Pantalla2({route, navigation}) {
  const {text} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff"}}>
      <Text>Bienvenido a la Pantalla 2 {text}</Text>

      <Button title="Volver a pantalla 1" onPress={() => navigation.goBack()} /> 
    </View>
  );
}

export default Pantalla2;

