/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto =(props)=>{
  const {children} = props;
  return(
    <Text>{children}</Text>
  )
}

/*Zona de ejecucion */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto>Hola </Texto>
      <Texto>mundo</Texto>
      <Texto>React Native</Texto>
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
