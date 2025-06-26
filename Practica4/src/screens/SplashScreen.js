import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("C:\\Users\\luisj\\OneDrive\\Escritorio\\Escuela\\9 Cuatrimestre\\Programacion Movi - Isay\\PM193\\Practica4\\src\\assets\\ardillas y cangrejos.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bienvenido a la App</Text>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222831",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        marginTop: 20,
        color: "#eeeeee",
        fontSize: 24,
        fontWeight: "bold",
    },
});