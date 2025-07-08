import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{ title: 'Buscar Restaurantes' }} 
          />
          <Stack.Screen 
            name="Results" 
            component={ResultsScreen} 
            options={{ title: 'Resultados' }} 
          />
          <Stack.Screen 
            name="RestaurantDetail" 
            component={RestaurantDetailScreen} 
            options={{ title: 'Detalles' }} 
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});