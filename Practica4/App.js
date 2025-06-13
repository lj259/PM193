/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto =()=>{
  const [contenido,setContenido] = useState('Hola Mundo')
  const actualizaTexto =()=>{setContenido('Estado Modificado')}
  return(
    <Text onPress={actualizaTexto}>{contenido}</Text>
  )
}

/*Zona de ejecucion */
export default function App() {
  const [botonTexto, setBotonTexto] = useState('Presionar');
  const cambiarTextoBoton =()=>setBotonTexto('boton presionado');
  return (
    <View style={styles.container}>
      <Texto>Hola </Texto>
      <Texto>mundo</Texto>
      <Texto>React Native</Texto>
      <Button title={botonTexto} onPress={cambiarTextoBoton}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona de Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
