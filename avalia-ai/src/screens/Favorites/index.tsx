import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Já vem no Expo

export default function FavoritesScreen() {
return (
    <View style={styles.container}>
    <ScrollView>
        {/* 1. Header com Imagem de Fundo */}
        <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5' }} 
        style={styles.headerBackground}
        >
        <View style={styles.overlay}>
            <View style={styles.avatarContainer}>
            <Ionicons name="person-circle" size={80} color="white" />
            </View>
            <Text style={styles.headerTitle}>Meus Favoritos</Text>
        </View>
        
          {/* Botão Flutuante de Coração */}
        <TouchableOpacity style={styles.fabHeart}>
            <Ionicons name="heart" size={24} color="white" />
        </TouchableOpacity>
        </ImageBackground>

        {/* 2. Filtros e Contador */}
        <View style={styles.infoRow}>
        <Text style={styles.countText}>12 lugares favoritos</Text>
        <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Mais recentes</Text>
            <Ionicons name="filter" size={16} color="blue" />
        </TouchableOpacity>
        </View>

        {/* 3. Card do Restaurante (Exemplo baseado na image_ccbcd8.png) */}
        <View style={styles.card}>
        <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' }} 
            style={styles.cardImage} 
        />
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
            <Text style={styles.restaurantName}>Restaurante Vista</Text>
            <Ionicons name="bookmark" size={20} color="blue" />
            </View>
            
            <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#f1c40f" />
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.categoryText}> • Restaurante</Text>
            </View>

            <Text style={styles.locationText}>
            <Ionicons name="location" size={12} /> Centro, Florianópolis  •  1,2 km
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
            Ambiente incrível e comida ainda melhor!
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