import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// Objeto para definir as cores e facilitar a manutenção
const colors = {
  background: '#EAEAEA',
  darkHeader: '#3F3F3F',
  listSection: '#9C9C9C',
  listItem: '#AFAFAF',
  listItemBorder: '#6e6868',
  textMain: '#FFFFFF',
  textListHeader: '#000000',
  textListItem: '#000000',
  iconColor: '#C0C0C0',
  iconNav: '#9C9C9C',
  iconActive: '#FFD700', // Dourado
};

// Componente para itens de lista reutilizável
const ListItem = ({ label }: { label: string }) => (
  <View style={styles.listItem} accessible accessibilityLabel={label}>
    <Text style={styles.listItemText}>{label}</Text>
  </View>
);

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simulação de navegação inferior (guarda a aba ativa)
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <View style={styles.mainContainer}>
      {/* Configura a barra de status (hora, bateria) para ter conteúdo claro */}
      <StatusBar barStyle="light-content" />
      
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        {/* CABEÇALHO ESCURO (com foto e nome) */}
        <View style={styles.darkHeader}>
          <Image 
            source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/027/842/188/small/user-ecommerce-icon-fill-style-png.png' }} // Foto de exemplo
            style={styles.profileImage}
            accessible={false}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName} accessibilityRole="header" accessibilityLabel="Perfil de Fulano">Fulano</Text>
            <Text style={styles.userVersion}>v 00.0</Text>
          </View>
          <TouchableOpacity
            style={styles.settingsIcon}
            accessibilityRole="button"
            accessibilityLabel="Abrir configurações"
            accessibilityHint="Abre as opções de configurações do perfil"
          >
            <MaterialCommunityIcons name="cog" size={32} color={colors.iconColor} accessible={false} />
          </TouchableOpacity>
        </View>

        {/* SEÇÃO MODO NOTURNO */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.headerIconLabel}>
              <MaterialCommunityIcons name="tune" size={24} color={colors.textListHeader} accessible={false} />
              <Text style={styles.sectionHeaderText}>Modo Noturno/Modo Claro</Text>
            </View>
            <Switch
              accessibilityRole="switch"
              accessibilityLabel="Modo noturno"
              accessibilityHint="Ativa ou desativa o modo noturno"
              accessibilityState={{ checked: isDarkMode }}
              trackColor={{ false: colors.listItem, true: colors.darkHeader }}
              thumbColor={isDarkMode ? colors.iconActive : colors.iconColor}
              ios_backgroundColor={colors.listItem}
              onValueChange={() => setIsDarkMode(previousState => !previousState)}
              value={isDarkMode}
              style={styles.switchAlign}
            />
          </View>
        </View>

        {/* SEÇÃO USUÁRIO */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.headerIconLabel}>
              <MaterialCommunityIcons name="account" size={24} color={colors.textListHeader} accessible={false} />
              <Text style={styles.sectionHeaderText}>Usuário</Text>
            </View>
            <TouchableOpacity
              style={styles.sectionActionIcon}
              accessibilityRole="button"
              accessibilityLabel="Redefinir opções do usuário"
              accessibilityHint="Restaura as opções do usuário para o padrão"
            >
              <MaterialCommunityIcons name="undo" size={24} color={colors.textListHeader} accessible={false} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.listContent}>
            <ListItem label="Mudar Senha" />
            <ListItem label="Alterar E-mail" />
            <ListItem label="Alterar Foto de Perfil" />
          </View>
        </View>

        {/* SEÇÃO FEEDBACK */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.headerIconLabel}>
              <MaterialCommunityIcons name="comment-text-outline" size={24} color={colors.textListHeader} accessible={false} />
              <Text style={styles.sectionHeaderText}>Feedback</Text>
            </View>
            <View style={styles.emptyAction} /> 
          </View>
        </View>
        
        {/* Espaçador final para o conteúdo não ficar escondido pela navbar (barra de navegação) */}
        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20, // Padding extra no final do scroll
  },
  darkHeader: {
    backgroundColor: colors.darkHeader,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50, // Espaço para a StatusBar (iOS)
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#C0C0C0',
  },
  userInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  userName: {
    color: colors.textMain,
    fontSize: 24,
    fontWeight: 'bold',
  },
  userVersion: {
    color: colors.textMain,
    fontSize: 14,
    marginTop: 2,
  },
  settingsIcon: {
    padding: 5,
  },
  sectionContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  sectionHeaderRow: {
    backgroundColor: colors.listSection,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  headerIconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeaderText: {
    color: colors.textListHeader,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  switchAlign: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], // Ajuste de tamanho do Switch
  },
  sectionActionIcon: {
    padding: 2,
  },
  emptyAction: {
    width: 28, // Largura para alinhar com o ícone de ação da outra seção
  },
  listContent: {
    backgroundColor: colors.listItem,
    marginHorizontal: 5, // Leve recuo para os itens da lista
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden', // Mantém o border radius nos itens internos
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.listItemBorder,
  },
  listItemText: {
    color: colors.textListItem,
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: colors.darkHeader,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});