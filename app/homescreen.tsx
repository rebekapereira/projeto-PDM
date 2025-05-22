import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PerfilDrawer from '../components/PerfilDrawer';
import SideMenu from '../components/SideMenu';

export default function HomeScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    const [showPerfil, setShowPerfil] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <View style={isMobile ? stylesMobile.container : stylesDesktop.container}>
            {/* Barra superior */}
            <View style={isMobile ? stylesMobile.header : stylesDesktop.header}>
                {/* Esquerda: Imagem de Perfil */}
                <TouchableOpacity onPress={() => setShowPerfil(true)}>
                    <Image
                        source={require('@/assets/images/perfil.png')}
                        style={isMobile ? stylesMobile.profileImage : stylesDesktop.profileImage}
                    />
                </TouchableOpacity>

                {/* Centro: Logo */}
                {/* Centro: Logo */}
<Image
    source={require('@/assets/images/viagens.png')} // Caminho da sua logo
    style={isMobile ? stylesMobile.logoImage : stylesDesktop.logoImage}
    resizeMode="contain"
/>


                {/* Direita: Menu */}
                <TouchableOpacity onPress={() => setShowMenu(true)}>
                    <Ionicons name="menu" size={isMobile ? 24 : 28} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Conteúdo da página */}
            <ScrollView style={isMobile ? stylesMobile.content : stylesDesktop.content}>
                {/* Boas-vindas */}
                <Text style={isMobile ? stylesMobile.welcome : stylesDesktop.welcome}>
                    Bem-vindo à Explore world!
                </Text>

                {/* Dashboard com botões principais */}
                <View style={isMobile ? stylesMobile.dashboardButtons : stylesDesktop.dashboardButtons}>
                    <TouchableOpacity
                        style={isMobile ? stylesMobile.cardButton : stylesDesktop.cardButton}
                        onPress={() => router.push('/carona-vip')}
                    >
                        <Ionicons name="car-sport" size={24} color="#0077B6" />
                        <Text style={isMobile ? stylesMobile.cardText : stylesDesktop.cardText}>Carona VIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={isMobile ? stylesMobile.cardButton : stylesDesktop.cardButton}
                        onPress={() => router.push('/carona-free')}
                    >
                        <Ionicons name="car-outline" size={24} color="#0077B6" />
                        <Text style={isMobile ? stylesMobile.cardText : stylesDesktop.cardText}>Carona FREE</Text>
                    </TouchableOpacity>
                </View>

                {/* Caronas recentes */}
                <View style={isMobile ? stylesMobile.section : stylesDesktop.section}>
                    <Text style={isMobile ? stylesMobile.sectionTitle : stylesDesktop.sectionTitle}>Histórico de caronas</Text>
                    <Text style={isMobile ? stylesMobile.itemText : stylesDesktop.itemText}>• 18/05 - IFSP → Centro - ✅ Finalizada</Text>
                    <Text style={isMobile ? stylesMobile.itemText : stylesDesktop.itemText}>• 15/05 - Shopping → IFSP - ❌ Cancelada</Text>
                    <Text style={isMobile ? stylesMobile.itemText : stylesDesktop.itemText}>• 10/05 - Casa → IFSP - ✅ Concluída</Text>
                </View>

                {/* Atalhos úteis */}
                <View style={isMobile ? stylesMobile.section : stylesDesktop.section}>
                    <Text style={isMobile ? stylesMobile.sectionTitle : stylesDesktop.sectionTitle}>Atalhos</Text>
            
                    <TouchableOpacity onPress={() => router.push('/suporte')}>
                        <Text style={isMobile ? stylesMobile.link : stylesDesktop.link}>Fale com o Suporte</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modais laterais */}
            <PerfilDrawer visible={showPerfil} onClose={() => setShowPerfil(false)} />
            <SideMenu visible={showMenu} onClose={() => setShowMenu(false)} />
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
    logoImage: {
    width: 100,
    height: 70,
    },

    content: {
        flex: 1,
        padding: 16,
    },
    welcome: {
        fontSize: 16,
        color: '#023E8A',
        textAlign: 'center',
        marginBottom: 16,
    },
    dashboardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    cardButton: {
        backgroundColor: '#CAF0F8',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        width: '45%',
        elevation: 2,
    },
    cardText: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
        color: '#023E8A',
    },
    section: {
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0077B6',
        marginBottom: 8,
    },
    itemText: {
        fontSize: 14,
        color: '#023E8A',
        marginBottom: 4,
    },
    link: {
        color: '#00B4D8',
        fontSize: 14,
        marginTop: 8,
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
    logoImage: {
    width: 100,
    height: 70,
},

    content: {
        flex: 1,
        padding: 24,
    },
    welcome: {
        fontSize: 20,
        color: '#023E8A',
        textAlign: 'center',
        marginBottom: 24,
    },
    dashboardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    cardButton: {
        backgroundColor: '#CAF0F8',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        width: '45%',
        elevation: 3,
    },
    cardText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#023E8A',
    },
    section: {
        marginTop: 30,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0077B6',
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#023E8A',
        marginBottom: 6,
    },
    link: {
        color: '#00B4D8',
        fontSize: 16,
        marginTop: 10,
    },
});
