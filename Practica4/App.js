/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto =({style})=>{
  const [contenido,setContenido] = useState('Hola Mundo')
  const actualizaTexto =()=>{setContenido('Estado Modificado')}
  return(
    <Text  style={[styles.Text,style]} onPress={actualizaTexto}>{contenido}</Text>
  )
}

/*Zona de ejecucion */
export default function App() {
  const [botonTexto, setBotonTexto] = useState('Presionar');
  const cambiarTextoBoton =()=>setBotonTexto('boton presionado');
  return (
    <View style={styles.container}>
      <Texto style={styles.Naranja}>Hola </Texto>
      <Texto style={styles.Amarillo}>mundo</Texto>
      <Texto style={styles.Verde}>React Native</Texto>
      {/* <Button title={botonTexto} onPress={cambiarTextoBoton}></Button> */}
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona de Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech', //Izquierda a derecha
    justifyContent: 'center', //Arriba a abajo
  },
  Text: {
    color: 'white',
    fontSize: 20,
  },
  Naranja: {
    backgroundColor: 'orange',
  },
  Amarillo: {
    backgroundColor: 'yellow',
  },
  Verde: {
    backgroundColor: 'green',
  },
});
