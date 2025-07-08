import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Alert, 
  ActivityIndicator, 
  StatusBar,
  TouchableOpacity // <-- ¡Esta importación es CRÍTICA y ahora está aquí!
} from 'react-native';
import { searchRestaurants } from '../services/api';

const SearchScreen = ({ navigation }) => {
  const [foodType, setFoodType] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!foodType.trim() || !city.trim()) {
      Alert.alert('¡Atención!', 'Por favor ingresa el tipo de comida y la ciudad para buscar.');
      return;
    }

    setIsLoading(true);

    try {
      const restaurants = await searchRestaurants(city, foodType);
      
      if (restaurants.length === 0) {
        Alert.alert(
          'Lo sentimos...', 
          `No se encontraron resultados para "${foodType}" en "${city}". Prueba con otros términos o en otra ubicación.`
        );
        return;
      }

      navigation.navigate('Results', { restaurants, city, foodType });

    } catch (error) {
      Alert.alert('Error de Búsqueda', error.message || 'Ocurrió un error inesperado al buscar restaurantes.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={styles.header.backgroundColor} />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>¿Qué se te antoja hoy?</Text>
        <Text style={styles.headerSubtitle}>Encuentra el restaurante perfecto</Text>
      </View>
      
      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Ej: pizza, sushi, tacos..."
          placeholderTextColor="#888"
          value={foodType}
          onChangeText={setFoodType}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Tu ciudad (Ej: San Juan del Río)"
          placeholderTextColor="#888"
          value={city}
          onChangeText={setCity}
        />
        
        {isLoading ? (
          <ActivityIndicator size="large" color="#FFB800" style={styles.activityIndicator} />
        ) : (
          <TouchableOpacity
            style={[styles.button, (!foodType || !city) && styles.buttonDisabled]}
            onPress={handleSearch}
            disabled={!foodType || !city}
          >
            {/* El texto "BUSCAR RESTAURANTES" debe estar DENTRO de un <Text> */}
            <Text style={styles.buttonText}>BUSCAR RESTAURANTES</Text> 
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Un gris claro para el fondo general
  },
  header: {
    backgroundColor: '#FF6F00', // Naranja vibrante para el encabezado
    paddingTop: 60, // Espacio superior para la barra de estado
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF', // Blanco para el título
    marginBottom: 5,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#FFE000', // Amarillo para el subtítulo
    textAlign: 'center',
  },
  formSection: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginTop: -40, // Superposición para un efecto visual moderno
  },
  input: {
    height: 55,
    backgroundColor: '#FFF', // Fondo blanco para los inputs
    borderRadius: 10,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#333', // Texto casi negro
    marginBottom: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#EEE', // Borde sutil
  },
  button: {
    backgroundColor: '#FFB800', // Amarillo para el botón principal
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: '#FFD700', // Amarillo más claro para deshabilitado
    opacity: 0.7,
  },
  buttonText: {
    color: '#000', // Texto negro para el botón amarillo
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  activityIndicator: {
    marginTop: 25,
  }
});

export default SearchScreen;