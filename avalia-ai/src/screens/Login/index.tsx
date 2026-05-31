import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const navigation = useNavigation<any>();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrarMim, setLembrarMim] = useState(false);

  return (
    <View style={styles.container}>

      {/* --- PARTE 1: O TOPO COM A IMAGEM --- */}
      {/* Usamos uma imagem de restaurante da internet como exemplo */}
      <ImageBackground
        // Usa uma URL da internet provisoriamente
        source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' }}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        {/* CAMADA 2: O filtro escuro (Overlay) */}
        <View style={styles.overlay}>

          {/* CAMADA 3: O Grupo da Logo (Pin + Texto) */}
          <View style={styles.logoContainer}>
            {/* Ícone de Pin Amarelo */}
            <MaterialCommunityIcons name="map-marker-radius" size={28} color="#FFD700" />
            {/* Texto "AvaliaAí" Amarelo */}
            <Text style={styles.logoText}>AvaliaAí</Text>
          </View>
        </View>
      </ImageBackground>


      {/* --- PARTE 2: O CARTÃO ESCURO DE LOGIN --- */}
      <View style={styles.bottomSheet}>

        <Text
          style={styles.titulo}
          accessible={true}
          accessibilityRole="header"
          accessibilityLabel="Bem-vindo de volta!"
        >
          Bem-vindo de <Text style={styles.tituloDestaque}>volta!</Text> 👋
        </Text>
        <Text style={styles.subtitulo}>faça login para continuar</Text>

        {/* Campo de E-mail com Ícone */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#888"
            style={styles.icon}
            accessible={false}
          />
          <TextInput
            style={styles.input}
            placeholder="E-MAIL"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
            accessibilityLabel="Campo de e-mail"
            accessibilityHint="Digite seu e-mail para entrar"
          />
        </View>

        {/* Campo de Senha com Ícone de Olho */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={20}
            color="#888"
            style={styles.icon}
            accessible={false}
          />
          <TextInput
            style={styles.input}
            placeholder="SENHA"
            placeholderTextColor="#888"
            secureTextEntry={!mostrarSenha} // Esconde a senha se for falso
            accessibilityLabel="Campo de senha"
            accessibilityHint="Digite sua senha para entrar"
            textContentType="password"
          />
          <TouchableOpacity
            onPress={() => setMostrarSenha(!mostrarSenha)}
            accessibilityRole="button"
            accessibilityLabel="Alternar exibição da senha"
            accessibilityHint="Mostra ou oculta o texto da senha"
          >
            <MaterialCommunityIcons
              name={mostrarSenha ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#888"
              accessible={false}
            />
          </TouchableOpacity>
        </View>

        {/* Se você adicionar mensagens de erro ou estado de carregamento, use accessibilityLiveRegion="polite" aqui para avisar leitores de tela. */}

        {/* Links de Lembrar Senha */}
        <View style={styles.opcoesContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setLembrarMim(!lembrarMim)}
            accessibilityRole="checkbox"
            accessibilityLabel="Lembrar de mim"
            accessibilityHint="Ativa para manter você conectado"
            accessibilityState={{ checked: lembrarMim }}
          >
            {/* O ícone muda de nome dependendo se lembrarMim for verdadeiro ou falso */}
            <MaterialCommunityIcons
              name={lembrarMim ? "checkbox-marked" : "checkbox-blank-outline"}
              size={20}
              color="#FFD700"
              accessible={false}
            />
            <Text style={{ marginLeft: 8, color: '#4e4848' }}>Lembrar de mim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Esqueci minha senha"
            accessibilityHint="Abre a tela de recuperação de senha"
          >
            <Text style={styles.linkAmarelo}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Principal */}
        <TouchableOpacity
          style={styles.botaoEntrar}
          accessibilityRole="button"
          accessibilityLabel="Botão para entrar no sistema"
          accessibilityHint="Faz login com o e-mail e senha informados"
        >
          <Text style={styles.textoBotaoEntrar}>Entrar</Text>
        </TouchableOpacity>

        {/* Rodapé para Criar Conta */}
        <View style={styles.rodape}>
          <Text style={styles.textoOpcoes}>Ainda não tem uma conta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            accessibilityRole="button"
            accessibilityLabel="Criar uma conta"
            accessibilityHint="Abre a tela de cadastro"
          >
            <Text style={styles.linkAmarelo}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}


// --- PARTE 3: O "CSS" (Estilização) ---
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    backgroundColor: '#000', // Fundo preto para evitar piscos brancos
  },
  headerBackground: {
    height: 250,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden', // Crucial para o arredondamento funcionar no Android
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Uma camada escura sobre a foto para o texto branco aparecer melhor
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 5,
  },
  sloganContainer: {
    marginTop: 40,
  },
  sloganText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 5,
  },
  sloganBold: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 15, // Espaçamento entre as linhas
  },
  bottomSheet: {
    flex: 1.2, // Pega um pouco mais da metade da tela
    backgroundColor: '#050505', // Preto quase total
    borderTopLeftRadius: 30, // Arredonda a ponta superior esquerda
    borderTopRightRadius: 30, // Arredonda a ponta superior direita
    padding: 30,
    marginTop: -20, // Puxa o cartão um pouco para cima da imagem para dar o efeito de sobreposição
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tituloDestaque: {
    color: '#FFD700', // O ouro da palavra "volta!"
  },
  subtitulo: {
    color: '#bbb',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row', // Coloca o ícone e o texto lado a lado
    alignItems: 'center',
    backgroundColor: '#111', // Cinza muito escuro
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 55,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // Faz o campo de digitar ocupar o resto do espaço
    color: '#fff',
    fontSize: 14,
  },
  opcoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Joga um pro canto esquerdo e outro pro direito
    alignItems: 'center',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoOpcoes: {
    color: '#888',
    fontSize: 12,
    marginLeft: 5,
  },
  linkAmarelo: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
  },
  botaoEntrar: {
    backgroundColor: '#1a1a1a', // Cinza escuro
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotaoEntrar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  }
});