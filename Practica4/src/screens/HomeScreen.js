import React from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground
        source={require("C:\\Users\\luisj\\OneDrive\\Escritorio\\Escuela\\9 Cuatrimestre\\Programacion Movi - Isay\\PM193\\Practica4\\src\\assets\\gato juzgando.jpg")}
        style={styles.background}
    >
        <SafeAreaView
        style={styles.content}>
            <Text 
            style={styles.text}>
                Pantalla Principal
            </Text>
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
});