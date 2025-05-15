import { useRouter } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get('window');

export default function SignupScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.bottomContainer}>
        <View style={{ height: 60 }} />

        <Text style={styles.title}>Cadastro - Radiance Studio</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(XX) XXXXX-XXXX"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Crie uma senha"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.register}>Já tem conta? Faça login!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#FFD1DC',
  },
  bottomContainer: {
    padding: 20,
    backgroundColor: '#FFCCCB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: height,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B1E2F',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: '500',
    color: '#4B1E2F',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
  },
  button: {
    backgroundColor: '#FF7DAA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  register: {
    textAlign: 'center',
    color: '#4B1E2F',
    marginTop: 10,
  },
});
