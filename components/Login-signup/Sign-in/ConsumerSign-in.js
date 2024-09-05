import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

export default function ConsumerLoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePhoto(result.uri);
    }
  };

  const handleSignUp = async () => {
    if (name && phone && email && address && password) {
      try {
        const response = await fetch('https://aaa3-152-52-34-131.ngrok-free.app/verifyOTP', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('User registered:', data);
          navigation.navigate('CreateOTPVerificationScreen', { backendOtp: data.otp, name, phone, email, address, password });
        } else {
          console.error('Failed to register user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <LinearGradient
      colors={['#e0f2f1', '#b9fbc0']} // Light green gradient
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.innerContainer}>
              <Image source={require('../../../assets/images/farmlogo.jpg')} style={styles.logo} />

              <Text style={styles.title}>Join Our Community</Text>

              {profilePhoto && (
                <Image source={{ uri: profilePhoto }} style={styles.profileImage} />
              )}

              <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
                <Text style={styles.photoButtonText}>Pick a Profile Photo</Text>
              </TouchableOpacity>

              <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
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
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('ConsumerLogin')}>
                <Text style={styles.signInText}>Already have an account? Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    alignItems: 'center',
    minHeight: 500,
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
  signInButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  signInText: {
    color: '#388e3c',
    fontSize: 16,
  },
  photoButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  photoButtonText: {
    color: '#333',
    fontSize: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
});
