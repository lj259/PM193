import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const AlertaBasica = () => {
    window.alert('Hola desde alerta básica.');
  };

  const AlertaConfirmacion = () => {
    const userConfirmed = window.confirm('Seleciona OK o Cancelar');
    if (userConfirmed) {
      window.alert('Has presionado OK.');
    } else {
      window.alert('Has presionado cancelar.');
    }
  };

  const AlertaConEntrada = () => {
    const userInput = window.prompt('Ejemplo de entrada:', 'Ejemplo');
    if (userInput) {
      window.alert(`Hola, ${userInput}!`);
    } else {
      window.alert('No ingresaste nada en el input.');
    }
  };

  const AlertaCondicional = () => {
    const userInput = window.prompt('Ingresa un número entre 1 y 10:');
    const number = parseInt(userInput, 10);
    if (number >= 1 && number <= 10) {
      window.alert(`Número válido: ${number}`);
    } else {
      window.alert('Número inválido. Debe estar entre 1 y 10.');
    }
  };
  
  const AlertaConTemporizador = () => {
    setTimeout(() => {
      window.alert('Esta alerta apareció después de 3 segundos.');
    }, 3000);
  };
  
  const AlertaRedireccion = () => {
    if (window.confirm('¿Quieres ir a Google?')) {
      window.location.href = 'https://www.google.com';
    }
  };
  
  return (
    <View style={styles.container}>
      <Text>Botones de alerta</Text>
      <Button title="Alerta básica" onPress={AlertaBasica} />
      <Text> </Text>
      <Button title="Alerta de confirmación" onPress={AlertaConfirmacion} />
      <Text> </Text>
      <Button title="Alerta con entrada de texto" onPress={AlertaConEntrada} />
      <Text> </Text>
      <Button title="Alerta condicional" onPress={AlertaCondicional} />
      <Text> </Text>
      <Button title="Alerta con temporizador" onPress={AlertaConTemporizador} />
      <Text> </Text>
      <Button title="Alerta de redirección" onPress={AlertaRedireccion} />
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});