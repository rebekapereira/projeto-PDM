import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Seta de voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={28} color="#154360" />
            </TouchableOpacity>

            <View style={styles.profileContainer}>
                <Image
                    source={require('@/assets/images/perfil.png')} // Substitua com a imagem do usuário
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Jojo Todynho</Text>
                <Text style={styles.info}>Número de Telefone: (XX) XXXXX-XXXX</Text>
                <Text style={styles.info}>E-mail: jojo.todynho@gmail.com</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.replace('/')} // Redireciona para login
                >
                    <Text style={styles.buttonText}>Sair da Conta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => {
                        alert('Conta excluída com sucesso.');
                        router.replace('/');
                    }}
                >
                    <Text style={styles.buttonText}>Apagar Conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#D6EAF8',
        padding: 20,
        paddingTop: 60,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 10,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#3498DB',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#154360',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: '#2C3E50',
        marginBottom: 5,
    },
    buttonsContainer: {
        width: '100%',
        marginTop: 40,
        gap: 15,
    },
    button: {
        backgroundColor: '#3498DB',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#E74C3C',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});


