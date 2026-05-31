import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useState, useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    function formatarData(texto: string) {

        let data = texto.replace(/\D/g, '');

        if (data.length > 2) {
            data = data.replace(/(\d{2})(\d)/, '$1/$2');
        }

        if (data.length > 5) {
            data = data.replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
        }

        setDataNascimento(data);
    }

    async function userRegister() {
        // await api.post('/user/register', {
        //     name: nome,
        //     email: email,
        //     password: senha,
        //     birthDate: dataNascimento
        // );
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000' }}
                style={styles.headerBackground}
                accessible={false}
            >
                <View style={styles.overlay}>
                    {/* Logo e Nome */}
                    <View style={styles.logoContainer}>
                        <MaterialCommunityIcons name="map-marker" size={28} color="#0044ff" accessible={false} />
                        <Text style={styles.logoText}>AvaliaAí</Text>
                    </View>

                    <Text style={styles.slogan}>Avalie lugares.{'\n'}Inspire pessoas.{'\n'}Cada avaliação faz a diferença.</Text>
                </View>
            </ImageBackground>

            <View style={styles.cartaoLogin}>

                <Text style={styles.tituloCadastro} accessibilityRole="header" accessibilityLabel="Criar uma conta">Crie uma Conta</Text>

                <View style={styles.campoContainer}>
                    <Text style={styles.rotulo}>NOME</Text>
                    <TextInput
                        style={styles.caixaTexto}
                        placeholder="Jiara Martins"
                        placeholderTextColor="#666"
                        value={nome}
                        onChangeText={setNome}
                        accessibilityLabel="Campo de nome"
                        accessibilityHint="Digite seu nome completo"
                        textContentType="name"
                    />
                </View>

                <View style={styles.campoEmailContainer}>
                    <Text style={styles.rotulo}>EMAIL</Text>
                    <TextInput
                        style={styles.caixaTexto}
                        placeholder="ola@gmail.com"
                        placeholderTextColor="#666"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        accessibilityLabel="Campo de e-mail"
                        accessibilityHint="Digite seu e-mail para cadastro"
                        textContentType="emailAddress"
                    />
                </View>

                <View style={styles.campoSenhaContainer}>
                    <Text style={styles.rotulo}>SENHA</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <TextInput
                                                    style={[styles.caixaTexto, { flex: 1 }]}
                                                    placeholder="******"
                                                    placeholderTextColor="#666"
                                                    secureTextEntry={!mostrarSenha}
                                                    value={senha}
                                                    onChangeText={setSenha}
                                                    accessibilityLabel="Campo de senha"
                                                    accessibilityHint="Digite sua senha de cadastro"
                                                    textContentType="password"
                                            />
                                            <TouchableOpacity
                                                onPress={() => setMostrarSenha(s => !s)}
                                                accessibilityRole="switch"
                                                accessibilityLabel="Alternar exibição da senha"
                                                accessibilityHint="Mostra ou oculta o texto da senha"
                                                accessibilityState={{ checked: mostrarSenha }}
                                                style={{ marginLeft: 8 }}
                                            >
                                                <MaterialCommunityIcons name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'} size={22} color="#fff" accessible={false} />
                                            </TouchableOpacity>
                                        </View>
                </View>

                <View style={styles.campoDataContainer}>

                    <Text style={styles.rotulo}>
                        DATA DE NASCIMENTO
                    </Text>

                    <TextInput
                        style={styles.caixaTexto}
                        placeholder="10/10/2010"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        maxLength={10}
                        value={dataNascimento}
                        onChangeText={formatarData}
                        accessibilityLabel="Campo de data de nascimento"
                        accessibilityHint="Digite sua data de nascimento no formato dia, mês e ano"
                    />

                </View>

                <TouchableOpacity
                    style={styles.botaoEntrar}
                    onPress={userRegister}
                    accessibilityRole="button"
                    accessibilityLabel="Botão cadastrar"
                    accessibilityHint="Envia os dados para criar sua conta"
                >
                    <Text style={styles.textoBotaoEntrar}>Cadastrar</Text>
                </TouchableOpacity>

                {/* Use accessibilityLiveRegion="polite" em mensagens de erro/carregamento para notificar leitores de tela sobre estados assíncronos. */}

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 20,
        justifyContent: 'center',
    },
    cartaoLogin: {
        backgroundColor: '#050505',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 40,
        marginTop: -40,
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
        marginBottom: 20,
    },
    campoSenhaContainer: {
        marginBottom: 20,
    },
    campoDataContainer: {
        marginBottom: 20,
    },
    rotulo: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 5,
    },
    caixaTexto: {
        backgroundColor: '#333',
        height: 55,
        borderRadius: 15,
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