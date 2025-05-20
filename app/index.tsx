import { useRouter } from 'expo-router'; //Navegação
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'; //tudo que será usado no código

export default function LoginScreen() { //função principal do código. pode ser importada em outros 
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const isMobile = width < 768;

  if (isMobile) {
    
    return (
      <ScrollView contentContainerStyle={stylesMobile.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={[stylesMobile.imageContainer, { height }]}>
          <Image
            source={require('@/assets/images/viagens.png')} 
            style={stylesMobile.logo}
            resizeMode="contain"
          />
        </View>

        <View style={[stylesMobile.formContainer, { minHeight: height }]}> 
          <Text style={stylesMobile.title}>Explore world</Text>

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

          <TouchableOpacity style={stylesMobile.button} onPress={() => router.push('/homescreen')}>
            <Text style={stylesMobile.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={stylesMobile.register}>Não possui conta? Cadastre-se aqui!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

// DESKTOP/WINDOW: tela dividida ho rizontalmente 70/30
  return (
    <View style={stylesDesktop.container}>
      <View style={stylesDesktop.leftPanel}>
        <Image
          source={require('@/assets/images/viagens.png')} 
          style={stylesDesktop.image}
          resizeMode="contain"
        />
      </View>

      <View style={stylesDesktop.rightPanel}>
        <Text style={stylesDesktop.title}>Explore world</Text>

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


        <TouchableOpacity style={stylesDesktop.button} onPress={() => router.push('/homescreen')}>
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
    backgroundColor: '#D0E8FF', // azul claro
  },
  leftPanel: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5DADE2', // azul mais escuro
  },
  image: {
    width: '50%',
    height: '50%',
  },
  rightPanel: {
    flex: 3,
    backgroundColor: '#AED6F1', // azul médio
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#154360', // azul escuro para contraste
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontWeight: '600',
    color: '#154360',
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
    backgroundColor: '#3498DB', // botão azul
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
    color: '#154360',
    marginTop: 10,
  },
});

const stylesMobile = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#D0E8FF',
  },
  imageContainer: {
    backgroundColor: '#5DADE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: '50%',
  },
  formContainer: {
    backgroundColor: '#AED6F1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#154360',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontWeight: '600',
    color: '#154360',
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
    backgroundColor: '#3498DB',
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
    color: '#154360',
    marginTop: 10,
  },
});
