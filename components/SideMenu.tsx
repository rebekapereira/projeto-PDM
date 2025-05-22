import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

interface SideMenuProps {
    visible: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ visible, onClose }) => {
    const router = useRouter();

    if (!visible) return null; // Isso garante que o menu some da tela

    const handleNavigation = (path: string) => {
        router.push(path as any); // ignora o erro de tipo
        onClose(); // fecha o menu ao navegar
    };

    const options = [
        { title: 'Meus Favoritos', icon: 'heart', path: '/favoritos' },
        { title: 'Minhas Caronas', icon: 'car', path: '/minhas-caronas' },
        { title: 'Configurações', icon: 'settings', path: '/configuracoes' },
        { title: 'Suporte', icon: 'help-circle', path: '/suporte' },
    ];

    return (
        <View style={styles.overlay}>
            <View style={styles.drawer}>
                {/* Botão de fechar */}
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Ionicons name="close" size={28} color="#0077B6" />
                </TouchableOpacity>

                {/* Título */}
                <Text style={styles.title}>Menu</Text>

                {/* Opções */}
                {options.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => handleNavigation(item.path)}
                    >
                        <Ionicons name={item.icon as any} size={24} color="#0077B6" style={{ marginRight: 10 }} />
                        <Text style={styles.menuText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 100,
    },
    drawer: {
        width: width * 0.7,
        height: '100%',
        backgroundColor: '#E6F0FA',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#023E8A',
        marginBottom: 20,
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

export default SideMenu;

