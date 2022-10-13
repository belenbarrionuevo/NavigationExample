import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Pantalla1 from './Screens/Pantalla1';
import Pantalla2 from './Screens/Pantalla2';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen3">
        <Drawer.Screen name="Screen1" component={Pantalla1} />
        <Drawer.Screen name="Screen2" component={Pantalla2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

