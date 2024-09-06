import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CreateOTPVerificationScreen({ navigation, route }) {
  const { backendOtp, name, phone, email, address, password } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    if (otp === backendOtp) {
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
          navigation.navigate('ConsumerDashboard', { data });
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
    Alert.alert('OTP Resent', 'A new OTP has been sent to your email.');
  };

  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']} // Light green gradient
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
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
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#004d40',
  },
  infoText: {
    fontSize: 18,
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
    fontSize: 18,
    width: '100%',
  },
  button: {
    backgroundColor: '#388e3c',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resendButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  resendText: {
    color: '#388e3c',
    fontSize: 16,
  },
});
