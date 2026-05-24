import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
  ScrollView, 
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps'; // 👉 Importamos o Mapa Real

const { width } = Dimensions.get('window');

export default function Home() {

  return (
    <View style={styles.container}>
      
      {/* 1. ÁREA SUPERIOR (MAPA INTERATIVO NO CELULAR) */}
      <View style={styles.mapPlaceholder}>
        
        {/* 👉 O Mapa do Google Real */}
        <MapView 
          style={StyleSheet.absoluteFillObject} // Faz o mapa preencher todo o espaço do mapPlaceholder
          initialRegion={{
            latitude: -9.6659,    // Coordenadas centrais de Maceió
            longitude: -35.7350,
            latitudeDelta: 0.05,  // Nível de Zoom
            longitudeDelta: 0.05,
          }}
        >
          {/* Um pino de exemplo para não ficar vazio */}
          <Marker 
            coordinate={{ latitude: -9.6659, longitude: -35.7350 }}
            title="Centro de Maceió"
            description="Ponto inicial"
          />
        </MapView>

        {/* Barra de Pesquisa Flutuante */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.icon} />
          <TextInput 
            style={styles.input}
            placeholder="Buscar lugares, restaurantes, cafés..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color="#0044ff" style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Botão de Localização Flutuante */}
        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="locate" size={16} color="#0044ff" />
          <Text style={styles.locationText}>Minha localização</Text>
        </TouchableOpacity>
      </View>

      {/* 2. CONTEÚDO INFERIOR (LISTAS) */}
      <View style={styles.content}>
        
        {/* Título e Filtros */}
        <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>Categorias</Text>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.filtersScroll}
          contentContainerStyle={{ paddingLeft: 20 }}
        >
          <FilterItem icon="grid-outline" label="Todos" active />
          <FilterItem icon="restaurant-outline" label="Restaurantes" />
          <FilterItem icon="cafe-outline" label="Café" />
          <FilterItem icon="umbrella-outline" label="Praia" />
          <FilterItem icon="trail-sign-outline" label="Parques" />
        </ScrollView>

        {/* Lista de Lugares (Cards) */}
        <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>Populares</Text>
           <TouchableOpacity><Text style={styles.seeAll}>Ver todos</Text></TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
        >
          <PlaceCard 
            image="https://picsum.photos/200/300" 
            title="Restaurante Beira Mar" 
            rating="4.8"
          />
          <PlaceCard 
            image="https://picsum.photos/201/300" 
            title="Café do Porto" 
            rating="4.5"
          />
          <PlaceCard 
            image="https://picsum.photos/202/300" 
            title="Barraca do Sol" 
            rating="4.9"
          />
        </ScrollView>

      </View>
    </View>
  );
}

// =========================================================================
// Componentes Auxiliares (Agora com Tipagem do TypeScript)
// =========================================================================

// Tipagem para o Filtro
type FilterItemProps = {
  icon: string;
  label: string;
  active?: boolean; // A interrogação significa que é opcional
};

function FilterItem({ icon, label, active = false }: FilterItemProps) {
  return (
    <TouchableOpacity style={[styles.filterItem, active && styles.filterActive]}>
      <Ionicons name={icon as any} size={24} color={active ? "#fff" : "#333"} />
      <Text style={[styles.filterLabel, active && { color: '#fff' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

// Tipagem para o Card
type PlaceCardProps = {
  image: string;
  title: string;
  rating: string;
};

function PlaceCard({ image, title, rating }: PlaceCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} numberOfLines={1}>{title}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapPlaceholder: {
    width: '100%',
    height: '45%',
    position: 'relative', // Mantém a busca e o botão flutuando na posição certa
  },
  searchContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  icon: {
    padding: 2,
  },
  locationButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3,
    zIndex: 10,
  },
  locationText: {
    color: '#0044ff',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#0044ff',
    fontSize: 14,
  },
  filtersScroll: {
    maxHeight: 100,
    marginBottom: 20,
  },
  filterItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#f8f8f8',
  },
  filterActive: {
    backgroundColor: '#0044ff',
  },
  filterLabel: {
    fontSize: 11,
    marginTop: 5,
    color: '#666',
  },
  card: {
    width: 150,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 2,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#eee',
  },
  cardInfo: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
});