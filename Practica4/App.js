/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

import { Alert, ScrollView, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Pressable, Switch, TouchableWithoutFeedback } from 'react-native';
import {Button as Buttonpaper, Provider as ProveedorPaper} from 'react-native-paper';
import {Button as ButtonElements} from 'react-native-elements';



/*Zona de ejecucion */
export default function App() {
  const [ModoOscuro, setModoOscuro] = useState(false);

  const alternarModoOscuro = () => setModoOscuro(previo => !previo);
  return (
    <ProveedorPaper>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.container, { backgroundColor: ModoOscuro ? '#333' : '#fff' }]}>

          <Text style={[styles.title, { color: ModoOscuro ? '#fff' : '#000' }]}>
            Modo de pantalla: {ModoOscuro ? 'oscuro' : 'claro'}
          </Text>
          <Switch value={ModoOscuro} onValueChange={alternarModoOscuro} />

       <View style={styles.section}>
          <Text style={styles.title}>Primer boton</Text>
          <Button
            title="Boton Nativo"
            color="#841584"
            onPress={() => window.alert('Boton Nativo precionado')}>

          </Button>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Segundo boton</Text>
          <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#28a745'}]}
          onPress={() => window.alert('TouchableOpacity')}
            >
            <Text style={styles.btnText}>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Tercer boton</Text>
          <TouchableHighlight
            style={[styles.btn, {backgroundColor: '#ffc107'}]}
            underlayColor='#e0a800'
            onPress={() => window.alert('TouchableHighlight')}
          >
            <Text style={styles.btnText}>TouchableHighlight</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Cuarto boton</Text>
          <TouchableWithoutFeedback onPress={() => window.alert('¡Sin retroalimentación visual!')}>
            <View style={[styles.btn, { backgroundColor: '#17a2b8' }]}>
              <Text style={styles.btnText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Quinto boton</Text>
             <Pressable
                style={({ pressed }) => [
                    styles.btn,
                    {
                      backgroundColor: pressed ? '#6c757d' : '#343a40',
                    },
                  ]}
                  onPress={() => window.alert('¡Presionaste Pressable!')}
                >
                <Text style={styles.btnText}>Pressable</Text>
             </Pressable>
        </View>

          <View style={styles.section}>
            <Text style={styles.title}>Sexto boton</Text>
            <Buttonpaper
              mode="contained"
              buttonColor="#9c27b0"
              textColor="#fff"
              onPress={() => window.alert('¡Presionaste el botón de Paper!')}
              style={styles.paperButton}
            >
              Botón Paper
            </Buttonpaper>
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Séptimo boton</Text>
            <ButtonElements
              title="Botón Elements"
              onPress={() => window.alert('¡Presionaste el botón de Elements!')}
              buttonStyle={{
                backgroundColor: '#ff5722',
                borderRadius: 10,
                padding: 10,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
            />
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ProveedorPaper>
  );
}

/*Zona de Estilos */
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  Text: {
    fontSize: 27,
    marginVertical: 10,
  },
  azul: { backgroundColor: 'blue' },
  verde: { backgroundColor: 'green' },
  negro: { backgroundColor: 'black' },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000',
  },
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  paperButton: {
    marginTop: 5,
    width: 220,
  },
});