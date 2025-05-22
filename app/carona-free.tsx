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

const destinosFree = [
    {
        imagem: require('@/assets/images/destinofree1.jpg'),
        descricao: 'Jericoacoara – CE',
    },
    {
        imagem: require('@/assets/images/destinofree2.jpg'),
        descricao: 'Paraty – RJ',
    },
    {
        imagem: require('@/assets/images/destinofree3.jpg'),
        descricao: 'Chapada dos Veadeiros – GO',
    },
    {
        imagem: require('@/assets/images/destino.jpg'),
        descricao: 'Ilhabela – SP',
    },
];

export default function CaronaFreeScreen() {
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
                <Text style={isMobile ? stylesMobile.headerTitle : stylesDesktop.headerTitle}>Carona FREE</Text>
                <View style={{ width: isMobile ? 24 : 28 }} />
            </View>

            <ScrollView contentContainerStyle={isMobile ? stylesMobile.content : stylesDesktop.content}>
                {/* Logo clicável abaixo do header */}
                <TouchableOpacity onPress={() => router.push('/homescreen')}>
                    <Image
                        source={require('@/assets/images/viagens.png')} // substitua pelo seu logo
                        style={stylesMobile.logo}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Text style={isMobile ? stylesMobile.title : stylesDesktop.title}>Destinos Populares</Text>

                <View style={stylesMobile.imageGrid}>
                    {destinosFree.map((destino, index) => (
                        <View key={index} style={stylesMobile.imageItem}>
                            <TouchableOpacity onPress={() => setSelectedImage(destino.imagem)}>
                                <Image source={destino.imagem} style={stylesMobile.imageThumb} />
                            </TouchableOpacity>
                            <Text style={stylesMobile.imageDescription}>{destino.descricao}</Text>
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={isMobile ? stylesMobile.button : stylesDesktop.button}>
                    <Ionicons name="car" size={20} color="#fff" />
                    <Text style={isMobile ? stylesMobile.buttonText : stylesDesktop.buttonText}>Solicitar Carona FREE</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Modal para imagem expandida */}
            <Modal visible={!!selectedImage} transparent={true}>
                <Pressable style={stylesMobile.modalBackground} onPress={() => setSelectedImage(null)}>
                    <Image source={selectedImage} style={stylesMobile.fullImage} resizeMode="contain" />
                </Pressable>
            </Modal>
        </View>
    );
}

const stylesMobile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6FAE6',
    },
    header: {
        backgroundColor: '#2D6A4F', // verde escuro
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
        color: '#1B4332',
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
        color: '#1B4332',
    },
    button: {
        backgroundColor: '#2D6A4F',
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
