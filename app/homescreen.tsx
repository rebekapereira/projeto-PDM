import { useRouter } from 'expo-router';
import { Image, View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function HomeScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={isMobile ? stylesMobile.container : stylesDesktop.container}>
            {/* Barra superior */}
            <View style={isMobile ? stylesMobile.header : stylesDesktop.header}>

                {/* Esquerda: Imagem de Perfil */}
                <TouchableOpacity onPress={() => router.push('/perfilscreen')}>
                    <Image
                        source={require('@/assets/images/perfil.png')}
                        style={isMobile ? stylesMobile.profileImage : stylesDesktop.profileImage}
                    />
                </TouchableOpacity>

                {/* Centro: Opções */}
                <View style={isMobile ? stylesMobile.middleOptions : stylesDesktop.middleOptions}>
                    <TouchableOpacity style={isMobile ? stylesMobile.optionButton : stylesDesktop.optionButton}>
                        <Text style={isMobile ? stylesMobile.optionText : stylesDesktop.optionText}>Carona VIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isMobile ? stylesMobile.optionButton : stylesDesktop.optionButton}>
                        <Text style={isMobile ? stylesMobile.optionText : stylesDesktop.optionText}>Carona FREE</Text>
                    </TouchableOpacity>
                </View>

                {/* Direita: Menu */}
                <TouchableOpacity onPress={() => router.push('/menuscreen')}>
                    <Ionicons name="menu" size={isMobile ? 24 : 28} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Conteúdo da página */}
            <View style={isMobile ? stylesMobile.content : stylesDesktop.content}>
                <Text style={isMobile ? stylesMobile.welcome : stylesDesktop.welcome}>
                    Bem-vindo à Radiance Caronas!
                    Encontre ou ofereça caronas de forma prática, segura e econômica.
                </Text>
            </View>
        </View>
    );
}

// Estilos mobile
const stylesMobile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6F0FA',
    },
    header: {
        backgroundColor: '#0077B6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#fff',
    },
    middleOptions: {
        flexDirection: 'row',
        gap: 10,
    },
    optionButton: {
        backgroundColor: '#00B4D8',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    optionText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    welcome: {
        fontSize: 16,
        color: '#023E8A',
        textAlign: 'center',
    },
});

// Estilos desktop/tablet
const stylesDesktop = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6F0FA',
    },
    header: {
        backgroundColor: '#0077B6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 40,
        paddingBottom: 20,
    },
    profileImage: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#fff',
    },
    middleOptions: {
        flexDirection: 'row',
        gap: 16,
    },
    optionButton: {
        backgroundColor: '#00B4D8',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    optionText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    welcome: {
        fontSize: 20,
        color: '#023E8A',
        textAlign: 'center',
    },
});


