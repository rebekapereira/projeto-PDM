import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Modal,
    Pressable,
    useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Cada destino tem imagem + descrição
const destinos = [
    {
        imagem: require('@/assets/images/destino1.jpg'),
        descricao: 'Lençóis Maranhenses – MA',
    },
    {
        imagem: require('@/assets/images/destino2.jpg'),
        descricao: 'Cristo Redentor – RJ',
    },
    {
        imagem: require('@/assets/images/destino3.jpg'),
        descricao: 'Fernando de Noronha – PE',
    },
    {
        imagem: require('@/assets/images/destino4.jpg'),
        descricao: 'Chapada Diamantina – BA',
    },
];

export default function CaronaVipScreen() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const router = useRouter();

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <View style={isMobile ? stylesMobile.container : stylesDesktop.container}>
            {/* Header */}
            <View style={isMobile ? stylesMobile.header : stylesDesktop.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={isMobile ? 24 : 28} color="#fff" />
                </TouchableOpacity>
                <Text style={isMobile ? stylesMobile.headerTitle : stylesDesktop.headerTitle}>Carona VIP</Text>
                <View style={{ width: isMobile ? 24 : 28 }} />
            </View>

            <ScrollView contentContainerStyle={isMobile ? stylesMobile.content : stylesDesktop.content}>

                {/* Logo clicável */}
                <TouchableOpacity onPress={() => router.push('/homescreen')}>
                    <Image
                        source={require('@/assets/images/viagens.png')}
                        style={stylesMobile.logo}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Text style={isMobile ? stylesMobile.title : stylesDesktop.title}>Destinos Populares</Text>

                <View style={stylesMobile.imageGrid}>
                    {destinos.map((destino, index) => (
                        <View key={index} style={stylesMobile.imageItem}>
                            <TouchableOpacity onPress={() => setSelectedImage(destino.imagem)}>
                                <Image source={destino.imagem} style={stylesMobile.imageThumb} />
                            </TouchableOpacity>
                            <Text style={stylesMobile.imageDescription}>{destino.descricao}</Text>
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={isMobile ? stylesMobile.button : stylesDesktop.button}>
                    <Ionicons name="star" size={20} color="#fff" />
                    <Text style={isMobile ? stylesMobile.buttonText : stylesDesktop.buttonText}>Solicitar Carona VIP</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Modal de Imagem Expandida */}
            <Modal visible={!!selectedImage} transparent={true}>
                <Pressable style={stylesMobile.modalBackground} onPress={() => setSelectedImage(null)}>
                    <Image source={selectedImage} style={stylesMobile.fullImage} resizeMode="contain" />
                </Pressable>
            </Modal>
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
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        padding: 16,
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 60,
        marginBottom: 16,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#023E8A',
        marginBottom: 16,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 24,
    },
    imageItem: {
        width: '48%',
        marginBottom: 16,
    },
    imageThumb: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    imageDescription: {
        marginTop: 6,
        textAlign: 'center',
        fontSize: 14,
        color: '#023E8A',
    },
    button: {
        backgroundColor: '#0077B6',
        padding: 14,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '90%',
        height: '70%',
    },
});

// Estilos desktop (reaproveitando do mobile com ajustes)
const stylesDesktop = StyleSheet.create({
    ...stylesMobile,
    headerTitle: {
        fontSize: 22,
    },
    title: {
        fontSize: 24,
    },
    buttonText: {
        fontSize: 16,
    },
});
