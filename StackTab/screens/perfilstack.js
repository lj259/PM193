import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from './perfil';
import Detalle from './detalle';

const Stack = createNativeStackNavigator();

export default function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen name="Detalle" component={Detalle} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}