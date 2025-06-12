/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto =()=>{
  return(
    <Text>Hola mundo React Native</Text>
  )
}

/*Zona de ejecucion */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
      <Texto />
      <Texto />
      <Button title="Presionar"></Button>
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
