import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

function Pantalla1({navigation}) {
  const [contador, setContador] = useState(0);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setContador(contador=>contador+1);
    });
    return unsubscribe;
    }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text>Pantalla 1</Text>
    </View>
  );
}

export default Pantalla1;

