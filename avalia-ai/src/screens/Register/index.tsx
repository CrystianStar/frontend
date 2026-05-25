import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Register() {
  const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [dataNascimento, setDataNascimento] = useState('');
    const handleDataChange = (texto: string) => {
    // 1. Remove tudo que NÃO for número (bloqueia letras)
    let apenasNumeros = texto.replace(/[^0-9]/g, '');
    const navigation = useNavigation<any>();

    // 2. Coloca as barras automaticamente (Opcional, mas fica lindo!)
    if (apenasNumeros.length > 2) {
      apenasNumeros = apenasNumeros.replace(/^(\d{2})(\d)/, '$1/$2');
    }
    if (apenasNumeros.length > 5) {
      apenasNumeros = apenasNumeros.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
    }

    // Atualiza o estado com no máximo 10 caracteres (DD/MM/AAAA)
    setDataNascimento(apenasNumeros.substring(0, 10));
  };


    return (
    <View style={styles.container}>
    <ImageBackground 
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000' }} 
            style={styles.headerBackground}
            >
            <View style={styles.overlay}>
                {/* Logo e Nome */}
                <View style={styles.logoContainer}>
                <MaterialCommunityIcons name="map-marker" size={28} color="#0044ff" />
                <Text style={styles.logoText}>AvaliaAí</Text>
                </View>
                
                {/* Textos de impacto */}
                <Text style={styles.slogan}>Avalie lugares.{'\n'}Inspire pessoas.{'\n'}Cada avaliação faz a diferença.</Text>
            </View>
            </ImageBackground>

            <View style={styles.cartaoLogin}>
        
        {/* Título do Cartão (Opcional, caso queira igual ao design) */}
        <Text style={styles.tituloCadastro}>Crie uma Conta</Text>

        <View style={styles.campoContainer}>
        <Text style={styles.rotulo}>NOME</Text>
        <TextInput 
            style={styles.caixaTexto} 
            placeholder="Jiara Martins" 
            placeholderTextColor="#666"
            value={nome}
            onChangeText={setNome}
        />
        </View>

        <View style={styles.campoEmailContainer}>
        <Text style={styles.rotulo}>EMAIL</Text>
        <TextInput 
            style={styles.caixaTexto} 
            placeholder="ola@gmail.com" 
            placeholderTextColor="#666"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />
        </View>

        <View style={styles.campoSenhaContainer}>
        <Text style={styles.rotulo}>SENHA</Text>
        <TextInput 
            style={styles.caixaTexto} 
            placeholder="******" 
            placeholderTextColor="#666"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
        />
        </View>

        <View style={styles.campoDataContainer}>
        <Text style={styles.rotulo}>DATA DE NASCIMENTO</Text>
        <TextInput 
            style={styles.caixaTexto} 
            placeholder="DD/MM/AAAA" 
            placeholderTextColor="#666"
            value={dataNascimento}
            onChangeText={handleDataChange}
            keyboardType="numeric" // Força o teclado numérico no celular!
            maxLength={10}
        />
        </View>

        <TouchableOpacity style={styles.botaoEntrar}>
        <Text style={styles.textoBotaoEntrar}>Cadastrar</Text>
        </TouchableOpacity>

        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    },
    headerBackground: {
    flex: 1, // Ocupa o espaço disponível no topo
    justifyContent: 'flex-end', // Joga o texto para o fundo da imagem
    },
    overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', // Uma camada escura sobre a foto para o texto branco aparecer melhor
    padding: 20,
    justifyContent: 'center',
    },
    cartaoLogin: {
    backgroundColor: '#050505', // Fundo bem escuro
    borderTopLeftRadius: 30,    // Arredonda a ponta esquerda
    borderTopRightRadius: 30,   // Arredonda a ponta direita
    paddingHorizontal: 30,      // Respiro nas laterais
    paddingTop: 40,             // Espaço em cima antes do título
    paddingBottom: 40,          // Espaço no final
    marginTop: -40,             // Puxa o cartão para cima da imagem de fundo
    },
    logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
    },
    logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
    },
    slogan: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    },
    campoEmailContainer: {
    marginBottom: 20, // Espaço entre um campo e o outro
    },
    campoSenhaContainer: {
    marginBottom: 20, // Espaço entre um campo e o outro
    },
    campoDataContainer: {
    marginBottom: 20, // Espaço entre um campo e o outro
    },
    rotulo: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8, // Espaço entre o texto NOME e a caixa cinza
    marginLeft: 5,
    },
    caixaTexto: {
    backgroundColor: '#333', // O cinza escuro da caixa
    height: 55,
    borderRadius: 15, // Bem arredondado
    paddingHorizontal: 20,
    color: '#fff',
    },
    tituloCadastro: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    },
    campoContainer: {
    marginBottom: 15,
    },
    botaoEntrar: {
    backgroundColor: '#1a1a1a', 
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    },
    textoBotaoEntrar: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    },
});