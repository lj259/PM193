import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ResultsScreen = ({ route, navigation }) => {
  const { restaurants, city, foodType } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
    >
      {item.details.photos && item.details.photos.length > 0 ? (
        <Image 
          source={{ uri: item.details.photos[0] }} 
          style={styles.restaurantImage} 
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Icon name="cutlery" size={45} color="#BBB" />
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={17} color="#FFB800" />
          {/* TEXTO DENTRO DE <Text> */}
          <Text style={styles.rating}>{item.details.rating}</Text> 
          {/* TEXTO DENTRO DE <Text> */}
          <Text style={styles.distance}>{item.distance || '--'} km</Text> 
        </View>
        <Text style={styles.address}>{item.location.address}</Text>
        <Text style={styles.type}>{item.details.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={styles.header.backgroundColor} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{`Encontrados en "${city}"`}</Text>
        {/* TEXTO DENTRO DE <Text> */}
        <Text style={styles.headerSubtitle}><Text style={{fontWeight: 'bold'}}>Tipo:</Text> {foodType}</Text>
      </View>
      
      {restaurants.length === 0 ? (
        // TEXTO DENTRO DE <Text>
        <Text style={styles.noResultsText}>No se encontraron resultados para tu búsqueda.</Text>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    backgroundColor: '#FF6F00',
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFE000',
    textAlign: 'center',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 18,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 18,
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 18,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
    color: '#222',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  rating: {
    marginLeft: 6,
    marginRight: 16,
    color: '#555',
    fontSize: 15,
  },
  distance: {
    color: '#FF6F00',
    fontSize: 14,
  },
  address: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
  },
  type: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
    fontStyle: 'italic',
  },
  list: {
    paddingVertical: 15,
    paddingBottom: 25,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 17,
    color: '#888',
  },
});

export default ResultsScreen;