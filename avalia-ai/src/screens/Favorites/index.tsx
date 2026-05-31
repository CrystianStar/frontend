import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Já vem no Expo

export default function FavoritesScreen() {
  const [favoriteItems, setFavoriteItems] = useState<Record<string, boolean>>({
    restauranteVista: true,
    mareAlta: true,
    bistroUrbano: true,
    praiaPontal: true,
  });

  const toggleFavorite = (item: string) => {
    setFavoriteItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

return (
    <View style={styles.container}>
    <ScrollView>
        {/* 1. Header com Imagem de Fundo */}
        <ImageBackground 
        source={require('../../assets/img_login/img_dunas.png')} 
        style={styles.headerBackground}
        accessible={false}
        >
        <View style={styles.overlay}>
            <View style={styles.avatarContainer}>
            <Ionicons name="person-circle" size={80} color="white" accessible={false} />
            </View>
            <Text style={styles.headerTitle} accessibilityRole="header" accessibilityLabel="Meus Favoritos">Meus Favoritos</Text>
        </View>
        
          {/* Botão Flutuante de Coração */}
        <TouchableOpacity
            style={styles.fabHeart}
            accessibilityRole="button"
            accessibilityLabel="Remover favorito"
            accessibilityHint="Remove o item selecionado da lista de favoritos"
        >
            <Ionicons name="heart" size={24} color="white" accessible={false} />
        </TouchableOpacity>
        </ImageBackground>

        {/* 2. Filtros e Contador */}
        <View style={styles.infoRow}>
        <Text style={styles.countText} accessibilityLabel="Quantidade de favoritos">4 lugares favoritos</Text>
        <TouchableOpacity
            style={styles.filterButton}
            accessibilityRole="button"
            accessibilityLabel="Ordenar por mais recentes"
            accessibilityHint="Ordena a lista de favoritos mostrando os itens mais recentes primeiro"
        >
            <Text style={styles.filterText}>Mais recentes</Text>
            <Ionicons name="filter" size={16} color="blue" accessible={false} />
        </TouchableOpacity>
        </View>

        {/* 3. Card do Restaurante (Exemplo baseado na image_ccbcd8.png) */}
        <View
        style={styles.card}
        accessible
        accessibilityRole="button"
        accessibilityLabel="Restaurante Vista, 4.8 estrelas, Restaurante, 1,2 km"
        accessibilityHint="Toque para ver mais detalhes sobre o Restaurante Vista"
        >
        <Image 
            source={require('../../assets/img_login/img_restaurant.png')} 
            style={styles.cardImage}
            accessible={false}
        />
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
            <Text style={styles.restaurantName}>Restaurante Vista</Text>
            <TouchableOpacity
              onPress={() => toggleFavorite('restauranteVista')}
              accessibilityRole="button"
              accessibilityLabel={favoriteItems.restauranteVista ? 'Remover Restaurante Vista dos favoritos' : 'Adicionar Restaurante Vista aos favoritos'}
              accessibilityHint="Ativa ou desativa o favorito deste item"
              style={styles.bookmarkButton}
            >
              <Ionicons
                name={favoriteItems.restauranteVista ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={favoriteItems.restauranteVista ? 'blue' : '#999'}
                accessible={false}
              />
            </TouchableOpacity>
            </View>
            
            <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#f1c40f" accessible={false} />
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.categoryText}> • Restaurante</Text>
            </View>

            <Text style={styles.locationText}>
            <Ionicons name="location" size={12} accessible={false} /> Centro, Florianópolis  •  1,2 km
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
            Ambiente incrível e comida ainda melhor!
            </Text>
        </View>
        </View>

        {/* 3. Card do Restaurante (Exemplo baseado na image_ccbcd8.png) */}
        <View
        style={styles.card}
        accessible
        accessibilityRole="button"
        accessibilityLabel="Restaurante Maré Alta, restaurante de praia com vista para o mar, 4.8 estrelas, 800 metros"
        accessibilityHint="Toque para ver mais detalhes sobre o Restaurante Maré Alta"
        >
        <Image 
            source={require('../../assets/img_login/img_praia.png')} 
            style={styles.cardImage}
            accessible={false}
        />
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
            <Text style={styles.restaurantName}>Restaurante Maré Alta</Text>
            <TouchableOpacity
              onPress={() => toggleFavorite('mareAlta')}
              accessibilityRole="button"
              accessibilityLabel={favoriteItems.mareAlta ? 'Remover Restaurante Maré Alta dos favoritos' : 'Adicionar Restaurante Maré Alta aos favoritos'}
              accessibilityHint="Ativa ou desativa o favorito deste item"
              style={styles.bookmarkButton}
            >
              <Ionicons
                name={favoriteItems.mareAlta ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={favoriteItems.mareAlta ? 'blue' : '#999'}
                accessible={false}
              />
            </TouchableOpacity>
            </View>
            
            <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#f1c40f" accessible={false} />
            <Text style={styles.ratingText}>4.9</Text>
            <Text style={styles.categoryText}> • Praia</Text>
            </View>

            <Text style={styles.locationText}>
            <Ionicons name="location" size={12} accessible={false} /> Praia do Rosa  •  800 m
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
            Sabores do litoral com vista para o mar.
            </Text>
        </View>
        </View>

        {/* 3. Card do Restaurante (Exemplo baseado na image_ccbcd8.png) */}
        <View
        style={styles.card}
        accessible
        accessibilityRole="button"
        accessibilityLabel="Bistrô Urbano, ambiente urbano e contemporâneo, 4.8 estrelas, 500 metros"
        accessibilityHint="Toque para ver mais detalhes sobre o Bistrô Urbano"
        >
        <Image 
            source={require('../../assets/img_login/img_turismo.png')} 
            style={styles.cardImage}
            accessible={false}
        />
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
            <Text style={styles.restaurantName}>Bistrô Urbano</Text>
            <TouchableOpacity
              onPress={() => toggleFavorite('bistroUrbano')}
              accessibilityRole="button"
              accessibilityLabel={favoriteItems.bistroUrbano ? 'Remover Bistrô Urbano dos favoritos' : 'Adicionar Bistrô Urbano aos favoritos'}
              accessibilityHint="Ativa ou desativa o favorito deste item"
              style={styles.bookmarkButton}
            >
              <Ionicons
                name={favoriteItems.bistroUrbano ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={favoriteItems.bistroUrbano ? 'blue' : '#999'}
                accessible={false}
              />
            </TouchableOpacity>
            </View>
            
            <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#f1c40f" accessible={false} />
            <Text style={styles.ratingText}>4.7</Text>
            <Text style={styles.categoryText}> • Turismo</Text>
            </View>

            <Text style={styles.locationText}>
            <Ionicons name="location" size={12} accessible={false} /> Centro histórico  •  500 m
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
            Comida contemporânea em ambiente descolado.
            </Text>
        </View>
        </View>

        {/* 3. Card do Restaurante (Exemplo baseado na image_ccbcd8.png) */}
        <View
        style={styles.card}
        accessible
        accessibilityRole="button"
        accessibilityLabel="Café do Pontal, café à beira da praia, 4.8 estrelas, 2,5 km"
        accessibilityHint="Toque para ver mais detalhes sobre o Café do Pontal"
        >
        <Image 
            source={require('../../assets/img_login/img_praia1.png')} 
            style={styles.cardImage}
            accessible={false}
        />
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
            <Text style={styles.restaurantName}>Praia do Pontal</Text>
            <TouchableOpacity
              onPress={() => toggleFavorite('praiaPontal')}
              accessibilityRole="button"
              accessibilityLabel={favoriteItems.praiaPontal ? 'Remover Praia do Pontal dos favoritos' : 'Adicionar Praia do Pontal aos favoritos'}
              accessibilityHint="Ativa ou desativa o favorito deste item"
              style={styles.bookmarkButton}
            >
              <Ionicons
                name={favoriteItems.praiaPontal ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={favoriteItems.praiaPontal ? 'blue' : '#999'}
                accessible={false}
              />
            </TouchableOpacity>
            </View>
            
            <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#f1c40f" accessible={false} />
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.categoryText}> • Parque</Text>
            </View>

            <Text style={styles.locationText}>
            <Ionicons name="location" size={12} accessible={false} /> Parque das Águas  •  2,5 km
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
            Parque com vista para praia.
            </Text>
        </View>
        </View>
    </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  headerBackground: { height: 220, justifyContent: 'flex-end' },
  overlay: { padding: 20, backgroundColor: 'rgba(0,0,0,0.3)' },
  avatarContainer: { marginBottom: 10 },
  headerTitle: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  fabHeart: { 
    position: 'absolute', bottom: -25, right: 20, 
    backgroundColor: 'blue', padding: 15, borderRadius: 30,
    elevation: 5
  },
  infoRow: { 
    flexDirection: 'row', justifyContent: 'space-between', 
    padding: 20, marginTop: 10 
  },
  countText: { fontWeight: 'bold', color: '#333' },
  filterButton: { flexDirection: 'row', alignItems: 'center' },
  filterText: { color: 'blue', marginRight: 5, fontWeight: 'bold' },
  card: {
    flexDirection: 'row', backgroundColor: 'white', margin: 15,
    borderRadius: 15, padding: 10, elevation: 3
  },
  cardImage: { width: 100, height: 100, borderRadius: 10 },
  cardContent: { flex: 1, marginLeft: 10, justifyContent: 'center' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  bookmarkButton: { padding: 4 },
  restaurantName: { fontSize: 18, fontWeight: 'bold' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  ratingText: { color: 'blue', fontWeight: 'bold', marginLeft: 4 },
  categoryText: { color: '#666' },
  locationText: { fontSize: 12, color: '#666' },
  descriptionText: { fontSize: 12, color: '#444', marginTop: 4 },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', 
    backgroundColor: '#444', paddingVertical: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20
  }
});