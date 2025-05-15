import { useRouter } from 'expo-router'; //Navegação
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'; //tudo que será usado no código

export default function LoginScreen() { //função principal do código. pode srer importada em outros 
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const isMobile = width < 768;

  if (isMobile) {
    
    return (
      <ScrollView contentContainerStyle={stylesMobile.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={[stylesMobile.imageContainer, { height }]}>
          <Image
            source={require('@/assets/images/radiance.png')} 
            style={stylesMobile.logo}
            resizeMode="contain"
          />
        </View>

        <View style={[stylesMobile.formContainer, { minHeight: height }]}> 
          <Text style={stylesMobile.title}>Radiance Studio</Text>

          <Text style={stylesMobile.label}>Email</Text>
          <TextInput
            style={stylesMobile.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />

          <Text style={stylesMobile.label}>Senha</Text>
          <TextInput
            style={stylesMobile.input}
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <TouchableOpacity style={stylesMobile.button}>
            <Text style={stylesMobile.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={stylesMobile.register}>Não possui conta? Cadastre-se aqui!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // DESKTOP/WINDOW: tela dividida horizontalmente 70/30
  return (
    <View style={stylesDesktop.container}>
      <View style={stylesDesktop.leftPanel}>
        <Image
          source={require('@/assets/images/radiance.png')} 
          style={stylesDesktop.image}
          resizeMode="contain"
        />
      </View>

      <View style={stylesDesktop.rightPanel}>
        <Text style={stylesDesktop.title}>Radiance Studio</Text>

        <Text style={stylesDesktop.label}>Email</Text>
        <TextInput
          style={stylesDesktop.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Text style={stylesDesktop.label}>Senha</Text>
        <TextInput
          style={stylesDesktop.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <TouchableOpacity style={stylesDesktop.button}>
          <Text style={stylesDesktop.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={stylesDesktop.register}>Não possui conta? Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//estilo window://

const stylesDesktop = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: '#FFD1DC',
  },
  leftPanel: {
    flex: 7, // 70%
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7DAA',
  },
  image: {
    width: '90%',
    height: '90%',
  },
  rightPanel: {
    flex: 3, // 30%
    backgroundColor: '#FFB6C1',
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B1E2F',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontWeight: '600',
    color: '#4B1E2F',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    elevation: 2,
  },
  button: {
    backgroundColor: '#FF7DAA',
    padding: 15,
    borderRadius: 8,
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


//tela para mobile//

const stylesMobile = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#FFD1DC',
  },
  imageContainer: {
    backgroundColor: '#FF7DAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '90%',
  },
  formContainer: {
    backgroundColor: '#FFCCCB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B1E2F',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontWeight: '600',
    color: '#4B1E2F',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
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








