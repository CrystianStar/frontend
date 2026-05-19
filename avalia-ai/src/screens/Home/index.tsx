import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

// Pega a largura e altura da tela do celular
const { width } = Dimensions.get('window');

export default function Home() {
return (
  <View style={styles.container}>
    
    {/* QUADRADO TEMPORÁRIO PARA SUBSTITUIR O MAPA NA WEB */}
    <View style={{ width: '100%', height: 400, backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#666', fontWeight: 'bold' }}>[ Espaço do Mapa - Visível no Celular ]</Text>
    </View>

    {/* Sua barra de pesquisa flutuante vai aparecer perfeitamente em cima desse quadrado agora */}
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#666" style={styles.icon} />
      <TextInput 
        style={styles.input}
        placeholder="Buscar lugares, restaurantes, cafés..."
      />
      <Ionicons name="options-outline" size={20} color="#0044ff" style={styles.icon} />
    </View>

    {/* Botão de Localização */}
    <TouchableOpacity style={styles.locationButton}>
      <Ionicons name="locate" size={16} color="#0044ff" />
      <Text style={styles.locationText}>Minha localização</Text>
    </TouchableOpacity>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ou um tamanho fixo se isso for só um pedaço da tela
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mapa: {
    width: '100%',
    height: '100%', // Ajuste a altura conforme precisar para encaixar com o resto do app
  },
  
  // Estilo da Barra de Pesquisa (Flutuando no topo do mapa)
  searchContainer: {
    position: 'absolute',
    top: 20, // Distância do topo
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 25,
    // Sombra para dar o efeito flutuante (Android e iOS)
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    padding: 5,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 14,
  },

  // Estilo do Botão Minha Localização
  locationButton: {
    position: 'absolute',
    top: 85, // Fica logo abaixo da barra de pesquisa
    left: '5%', // Alinhado à esquerda da barra
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  locationText: {
    color: '#0044ff',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
  }
});