import React from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Switch,TextInput,Button,Platform, Alert} from "react-native";
import { useState } from "react";


const HomeScreen = () => {
    //Nombre y Correo
    const [NombreText, onChangeNombre] = useState('');
    const [emailText, setEmailText] = useState('');
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    //Terminos y condiciones
    const [terminosAceptados, setTerminosAceptados] = useState(false);

    //Alerta
    const AlertaConfrimacion = () => {
       if (Platform.OS === 'android') {
        if (!terminosAceptados) {
            Alert.alert('Debes aceptar los términos y condiciones');
        } else {
            if (NombreText !== '') {
                if (!isValidEmail(emailText)) {
                    Alert.alert('Correo no válido');
                } else {
                    Alert.alert(`Bienvenido, ${NombreText}\nTu correo es: ${emailText}`);
                }
            } else {
                 Alert.alert('Se Requiere un nombre');
            }
       }
     } else {
        if (!terminosAceptados) {
            window.alert('Debes aceptar los términos y condiciones');
        } else {
            if (NombreText !== '') {
                if (!isValidEmail(emailText)) {
                    window.alert('Correo no válido');
                } else {
                    window.alert(`Bienvenido, ${NombreText}\nTu correo es: ${emailText}`);
                }
            } else {
                 window.alert('Se Requiere un nombre');
            }
       }
}
    };

  return (
    <ImageBackground
        source={require("C:\\Users\\luisj\\OneDrive\\Escritorio\\Escuela\\9 Cuatrimestre\\Programacion Movi - Isay\\PM193\\my-blank\\src\\assets\\gato juzgando.jpg")}
        style={styles.background}
    >
        <SafeAreaView
        style={styles.content}>
            <Text 
                style={styles.text}>
                Pantalla Principal
            </Text>
            <Text style={styles.label}>Nombre Completo</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNombre}
                value={NombreText}
                placeholder="Escribe solo texto"
                keyboardType='default'
            />
            <Text style={styles.label}>Correo: </Text>
            <TextInput
                style={[styles.input, !isValidEmail(emailText) && emailText ? styles.errorInput : null]}
                placeholder='Escribe un correo'
                keyboardType='email-address'
                value={emailText}
                onChangeText={setEmailText}
                autoCapitalize='none'
                />
                {!isValidEmail(emailText) && emailText !== '' && (
                <Text style={styles.errorText}>Correo no válido</Text>
            )}
            <Text style={styles.label}>Terminos y Condiciones</Text>
            <Switch
                value={terminosAceptados}
                onValueChange={(value) => setTerminosAceptados(value)}
            />
            <Button title='Ingresar' onPress={AlertaConfrimacion}></Button>
            
        </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#fff",
    },
    label: {
        color: "#fff",
        fontSize: 16,
        marginVertical: 5,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: -5,
        marginBottom: 10,
    },
});