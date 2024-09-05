import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient for gradient background
import { useNavigation } from '@react-navigation/native'; 

export default function FarmerSignIn() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Handle farmer sign-up logic here
    navigation.navigate('FarmerDashboard');
  };

  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']} // Light green gradient
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../../../assets/images/farmlogo.jpg')} style={styles.logo} />

        <Text style={styles.title}>Farmer Registration</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          value={location}
          onChangeText={setLocation}
        />

        <TextInput
          style={styles.input}
          placeholder="Pin Code"
          value={pinCode}
          onChangeText={setPinCode}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('FarmerLogin')}>
          <Text style={styles.signInText}>Already have an account? Login</Text>
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
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 8,
      maxHeight: '80%', // Limits container height to 80% of the screen
      justifyContent: 'space-between', // Evenly distribute space between items
    },
    logo: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 15, // Reduced margin to move elements up
    },
    title: {
      fontSize: 28, // Adjusted font size for a balanced look
      fontWeight: '700',
      marginBottom: 20,
      textAlign: 'center',
      color: '#2e7d32',
    },
    input: {
      borderWidth: 1,
      borderColor: '#bbb',
      padding: 15,
      marginBottom: 10, // Reduced margin to bring inputs closer
      borderRadius: 10,
      backgroundColor: '#fff',
      fontSize: 16,
      width: '100%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    button: {
      backgroundColor: '#43a047',
      paddingVertical: 12, // Adjusted padding to make the button slightly smaller
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 15, // Reduced margin to bring the button up
      width: '100%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    signInButton: {
      padding: 10, // Reduced padding for a more compact button
      alignItems: 'center',
      marginTop: 10, // Reduced margin to bring it closer to the main button
    },
    signInText: {
      color: '#2e7d32',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
  
  
  
