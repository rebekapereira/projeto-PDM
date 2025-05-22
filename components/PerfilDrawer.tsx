import React from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    Animated,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface PerfilDrawerProps {
    visible: boolean;
    onClose: () => void;
}

export default function PerfilDrawer({ visible, onClose }: PerfilDrawerProps) {
    const slideAnim = React.useRef(new Animated.Value(screenWidth)).current;

    React.useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 30,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: screenWidth,
                duration: 30,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    return (
        <Modal visible={visible} transparent animationType="none">
            <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1}>
                <Animated.View
                    style={[
                        styles.drawer,
                        { transform: [{ translateX: slideAnim }] }
                    ]}
                >
                    <View style={styles.header}>
                        <Text style={styles.title}>Perfil</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.close}>Fechar</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={require('@/assets/images/perfil.png')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>Jojo Todynho</Text>
                    <Text style={styles.info}>Telefone: (XX) XXXXX-XXXX</Text>
                    <Text style={styles.info}>Email: jojo.todynho@gmail.com</Text>

                    <TouchableOpacity style={styles.logoutButton} onPress={onClose}>
                        <Text style={styles.logoutText}>Sair da Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => {
                        alert('Conta excluída com sucesso.');
                        onClose();
                    }}>
                        <Text style={styles.logoutText}>Apagar Conta</Text>
                    </TouchableOpacity>
                </Animated.View>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    drawer: {
        width: '80%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 60,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#154360',
    },
    close: {
        color: '#0077B6',
        fontWeight: 'bold',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#3498DB',
        borderWidth: 2,
        alignSelf: 'center',
        marginBottom: 16,
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#154360',
        marginBottom: 4,
    },
    info: {
        textAlign: 'center',
        fontSize: 14,
        color: '#2C3E50',
        marginBottom: 2,
    },
    logoutButton: {
        backgroundColor: '#0077B6',
        padding: 12,
        borderRadius: 8,
        marginTop: 30,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#E74C3C',
        padding: 12,
        borderRadius: 8,
        marginTop: 12,
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontWeight: '600',
    },
});

