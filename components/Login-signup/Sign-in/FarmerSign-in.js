import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function FarmerSignIn() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [pincode, setPinCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    // Basic validation
    if (!name || !location || !pincode || !phone || !email || !password || !confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://aaa3-152-52-34-131.ngrok-free.app/farmer/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address: location,
          pincode,
          phone,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful sign-up, e.g., navigate to dashboard
        navigation.navigate('satbara');
        console.log(data);

      } else {
        // Handle errors returned from the server
        alert(data.message || 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('An error occurred. Please try again.');
    }
  };


  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            value={pincode}
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
      </ScrollView>
    </LinearGradient>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.9,
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
  },
  logo: {
    width: width * 0.3, // Make logo size responsive
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    marginBottom: 20,
  },
  title: {
    fontSize: 24, // Adjusted for responsiveness
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2e7d32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 15,
    marginBottom: 12,
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
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
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
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signInText: {
    color: '#2e7d32',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
