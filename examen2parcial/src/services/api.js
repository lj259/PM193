import axios from 'axios';

// *** Reemplaza esto con tu clave de API de TomTom ***
// Asegúrate de que esta sea la clave de la imagen (vR8i...lwzv)
const TOMTOM_API_KEY = 'vR8iDpTbGTSzB3X0wApJIQJwuuvIlwzv'; 

// Usaremos el endpoint 'search' que es más general
const TOMTOM_SEARCH_API_BASE_URL = 'https://api.tomtom.com/search/2/search/';
// Alternativamente, si el problema persiste, podríamos intentar:
// const TOMTOM_POI_SEARCH_API_BASE_URL = 'https://api.tomtom.com/search/2/poiSearch/';

export const searchRestaurants = async (city, foodType) => {
  try {
    // TomTom puede manejar la ciudad y el tipo de comida en el 'query'
    // O podemos intentar pasar la ciudad como un parámetro 'countrySet' o 'limitToCountry'
    // Pero por ahora, mantengamos la consulta en 'query' y agreguemos un countrySet si es necesario.
    const queryString = `${foodType} restaurant in ${city}`;

    const response = await axios.get(
      `${TOMTOM_SEARCH_API_BASE_URL}${encodeURIComponent(queryString)}.json`,
      {
        params: {
          key: TOMTOM_API_KEY,
          limit: 20, // Número de resultados
          // Parámetros para refinar la búsqueda a POIs o categorías de restaurantes
          // La categoría 7315 es para "Restaurant" en TomTom.
          // Asegúrate que tu clave de API tenga permisos para 'categorySet'.
          categorySet: '7315', 
          // Si buscas solo en un país específico, puedes usarlo para mejorar la precisión
          // countrySet: 'MX' // Código ISO 3166-1 alpha-2 para México (si solo buscas en México)
        }
      }
    );

    if (!response.data || !response.data.results || response.data.results.length === 0) {
      return []; // No se encontraron resultados
    }

    // Formateamos los resultados de TomTom
    return response.data.results.map((item, index) => ({
      id: item.id || `${item.poi?.id}-${index}`, 
      name: item.poi?.name || item.address?.freeformAddress || `Restaurante ${index + 1}`,
      location: {
        address: item.address?.freeformAddress,
        city: item.address?.municipality || city, 
        lat: item.position?.lat,
        lon: item.position?.lon
      },
      details: {
        rating: (Math.random() * 3 + 2).toFixed(1), // TomTom no suele dar ratings/reviews directamente
        type: item.poi?.categories?.join(', ') || 'Restaurante', 
        category: item.poi?.classifications?.[0]?.names?.[0]?.name || 'Restaurante', 
        phone: item.poi?.phone,
        // TomTom no devuelve fotos de restaurantes directamente. Mantendremos el placeholder.
        photos: [] 
      }
    }));

  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    
    if (error.response) {
      console.error('Estado del error HTTP:', error.response.status);
      console.error('Datos del error HTTP:', error.response.data);
      throw new Error(`Error en la solicitud HTTP a TomTom: ${error.response.status}. ${error.response.data.detailedError?.message || error.response.data.errorText || error.response.data.message || 'Error desconocido de TomTom.'}`);
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor de TomTom. Verifica tu conexión a internet.');
    } else {
      throw new Error('Error al configurar la solicitud a TomTom: ' + error.message);
    }
  }
};