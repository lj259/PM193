/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

import { Alert, ScrollView, TouchableOpacity,TouchableHighlight, TouchableNativeFeedback, Pressable, Switch } from 'react-native'; //practica 8
import {Button as Buttonpaper, Provider as ProveedorPaper} from 'react-native-paper';
import {Button as ButtonElements} from 'react-native-elements';



/*Zona de ejecucion */
export default function App() {
  const [ModoOscuro, setModoOscuro] = useState(false);

  const alternarModoOscuro = () => setModoOscuro(previo => !previo);
  return (
  <ProveedorPaper>
    <ScrollView contentContainerStyle={styles.ScrollContainer}>
      <View style={[styles.container, { backgroundColor: ModoOscuro ? '#333' : '#fff' }]}>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Modo de pantalla: {ModoOscuro ? 'oscuro' : 'claro'}</Text>
        <Switch value={ModoOscuro} onValueChange={alternarModoOscuro} />
      </View>
    </ScrollView>

    {/* Botton 1 */}
     <View style={styles.section}>
      <Text style={styles.title}>Primer boton</Text>
      <Button
        tittle="Boton Nativo"
        color="#841584"
        onPress={() => window.alert('Boton Nativo precionado')}>

      </Button>
    </View>
  </ProveedorPaper>
  );
}

/*Zona de Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', //Izquierda a derecha
    justifyContent: 'center', //Arriba a abajo
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000',
  },
  section:{
    marginVertical: 15,
    textAlign: 'center',
    width: '100%',
  }
});
