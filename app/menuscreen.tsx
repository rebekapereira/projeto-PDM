import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MenuScreen() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const options = [
        { title: 'Meus Favoritos', icon: 'heart', path: '/favoritos' },
        { title: 'Minhas Caronas', icon: 'car', path: '/minhas-caronas' },
        { title: 'Configurações', icon: 'settings', path: '/configuracoes' },
        { title: 'Suporte', icon: 'help-circle', path: '/suporte' },
    ];

    return (
        <ScrollView contentContainerStyle={isMobile ? stylesMobile.container : stylesDesktop.container}>
            <Text style={isMobile ? stylesMobile.title : stylesDesktop.title}>Menu</Text>

            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={isMobile ? stylesMobile.menuItem : stylesDesktop.menuItem}
                    onPress={() => handleNavigation(item.path)}
                >
                    <Ionicons name={item.icon as any} size={24} color="#0077B6" style={{ marginRight: 10 }} />
                    <Text style={isMobile ? stylesMobile.menuText : stylesDesktop.menuText}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}


// Estilos para Mobile
const stylesMobile = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#E6F0FA',
        minHeight: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#023E8A',
        marginBottom: 20,
        textAlign: 'center',
    },
    menuItem: {
        backgroundColor: '#CAF0F8',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    menuText: {
        fontSize: 16,
        color: '#023E8A',
        fontWeight: '500',
    },
});

// Estilos para Desktop
const stylesDesktop = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingHorizontal: 80,
        backgroundColor: '#E6F0FA',
        minHeight: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#023E8A',
        marginBottom: 30,
        textAlign: 'center',
    },
    menuItem: {
        backgroundColor: '#CAF0F8',
        padding: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    menuText: {
        fontSize: 18,
        color: '#023E8A',
        fontWeight: '500',
    },
});
