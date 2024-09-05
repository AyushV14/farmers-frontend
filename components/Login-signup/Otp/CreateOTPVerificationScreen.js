import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CreateOTPVerificationScreen({ navigation, route }) {
  const { backendOtp, name, phone, email, address, password } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    if (otp === backendOtp) {
      // navigation.navigate('ConsumerDashboard', { name, phone, email, address, password });
      try {
        const response = await fetch('https://aaa3-152-52-34-131.ngrok-free.app/consumer/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            address,
            password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('User registered:', data.data);
          navigation.navigate('ConsumerDashboard', { data }); // Pass userData to ConsumerDashboard
        } else {
          console.error('Failed to sign up');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      Alert.alert('Invalid OTP', 'The OTP you entered is incorrect.');
    }
  };




  const handleResendOtp = () => {
    // Handle OTP resend logic here
    // You might want to call the backend API to resend the OTP
    Alert.alert('OTP Resent', 'A new OTP has been sent to your email.');
  };

  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']} // Light green gradient
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../../../assets/images/farmlogo.jpg')} style={styles.logo} />

        <Text style={styles.title}>OTP Verification</Text>

        <Text style={styles.infoText}>
          We have sent a verification code to your email. Please enter it below to verify your account.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}

          maxLength={6}
        />

        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendButton} onPress={handleResendOtp}>
          <Text style={styles.resendText}>Resend Code</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
    borderRadius: 10,
    alignItems: 'center',
    minHeight: 400,
    maxHeight: '80%',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#004d40',
  },
  infoText: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
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
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  resendText: {
    color: '#388e3c',
    fontSize: 16,
  },
});
