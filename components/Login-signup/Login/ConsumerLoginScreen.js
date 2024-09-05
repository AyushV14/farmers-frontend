import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient for gradient background
import { useTranslation } from 'react-i18next'; // Import translation hook

export default function ConsumerLoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initialize translation
  const { t } = useTranslation();

  const handleLogin = () => {
    // Handle consumer login logic here
    navigation.navigate('ConsumerDashboard');
  };

  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']} // Light green gradient
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../../../assets/images/farmlogo.jpg')} style={styles.logo} />
        <Text style={styles.title}>{t('consumerLogin.title')}</Text>
        <Text style={styles.subtitle}>{t('consumerLogin.subtitle')}</Text>
        <TextInput
          style={styles.input}
          placeholder={t('consumerLogin.email')}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder={t('consumerLogin.password')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t('consumerLogin.login')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('ConsumerSignIn')}>
          <Text style={styles.signUpText}>{t('consumerLogin.signUpPrompt')}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white overlay
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004d40',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#004d40',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#388e3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    padding: 15,
    alignItems: 'center',
  },
  signUpText: {
    color: '#388e3c',
    fontSize: 16,
  },
});
