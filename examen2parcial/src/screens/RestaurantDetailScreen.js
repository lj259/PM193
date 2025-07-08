import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const handleOpenMap = () => {
    if (restaurant.location.lat && restaurant.location.lon) {
      // Usaremos Google Maps. Asegúrate de que la URL sea correcta.
      // Esta es una URL común para abrir un punto en Google Maps.
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.location.lat},${restaurant.location.lon}`;
      Linking.openURL(googleMapsUrl);
    } else {
      Alert.alert('Ubicación no disponible', 'No se pudo obtener la ubicación exacta de este restaurante para mostrar en el mapa.');
    }
  };

  const handleCallPhone = () => {
    if (restaurant.details.phone) {
      Linking.openURL(`tel:${restaurant.details.phone}`);
    } else {
      Alert.alert('Información no disponible', 'Número de teléfono no proporcionado para este restaurante.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      
      {restaurant.details.photos && restaurant.details.photos.length > 0 ? (
        <Image 
          source={{ uri: restaurant.details.photos[0] }} 
          style={styles.mainImage} 
        />
      ) : (
        <View style={styles.mainImagePlaceholder}>
          <Icon name="cutlery" size={90} color="#DDD" />
          <Text style={styles.imagePlaceholderText}>Imagen no disponible</Text>
        </View>
      )}
      
      <View style={styles.contentArea}>
        <Text style={styles.name}>{restaurant.name}</Text>
        
        <View style={styles.section}>
          {/* Aquí es donde solía haber un problema, ahora todo dentro de <Text> anidado */}
          <Text style={styles.sectionTitle}>
            <Icon name="cutlery" size={20} color="#FF6F00" />{' '} 
            <Text>Tipo de cocina:</Text>
          </Text>
          <Text style={styles.sectionText}>{restaurant.details.type || 'Restaurante'}</Text>
        </View>
        
        <View style={styles.section}>
          {/* Revisado: Icono, espacio y texto envueltos */}
          <Text style={styles.sectionTitle}>
            <Icon name="map-marker" size={20} color="#FF6F00" />{' '}
            <Text>Dirección:</Text>
          </Text>
          <Text style={styles.sectionText}>{restaurant.location.address || 'Dirección no disponible'}</Text>
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={handleOpenMap}
          >
            <Icon name="location-arrow" size={18} color="#FFF" style={styles.linkButtonIcon} />
            <Text style={styles.linkButtonText}>Cómo llegar</Text>
          </TouchableOpacity>
        </View>

        {restaurant.details.phone && (
          <View style={styles.section}>
            {/* Revisado: Icono, espacio y texto envueltos */}
            <Text style={styles.sectionTitle}>
              <Icon name="phone" size={20} color="#FF6F00" />{' '}
              <Text>Contacto:</Text>
            </Text>
            <TouchableOpacity 
              style={styles.linkButton}
              onPress={handleCallPhone}
            >
              <Icon name="phone-square" size={18} color="#FFF" style={styles.linkButtonIcon} />
              <Text style={styles.linkButtonText}>{restaurant.details.phone}</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <View style={styles.section}>
          {/* Revisado: Icono, espacio y texto envueltos */}
          <Text style={styles.sectionTitle}>
            <Icon name="star" size={20} color="#FF6F00" />{' '}
            <Text>Calificación:</Text>
          </Text>
          <Text style={styles.sectionText}>
            <Icon name="star" size={18} color="#FFB800" /> 
            {/* Espacio y texto dentro del <Text> */}
            <Text style={{ marginLeft: 8, fontWeight: 'bold' }}> {restaurant.details.rating}/5</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 0,
  },
  mainImagePlaceholder: {
    width: '100%',
    height: 250,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    marginTop: 15,
    color: '#AAA',
    fontSize: 17,
  },
  contentArea: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    marginTop: -50,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 40,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#222',
  },
  section: {
    marginBottom: 28,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    color: '#555',
    fontSize: 17,
    lineHeight: 26,
    marginLeft: 5,
  },
  linkButton: {
    backgroundColor: '#FF6F00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  linkButtonIcon: {
    marginRight: 10,
  },
  linkButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default RestaurantDetailScreen;