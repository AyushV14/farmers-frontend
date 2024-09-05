import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function Satbara() {
    const [image, setImage] = useState(null);
    const navigation = useNavigation();

    const pickImage = async () => {
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission needed', 'We need permission to access your photo library.');
            return;
        }

        // Open image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleSubmit = () => {
        if (!image) {
            Alert.alert('No Image Selected', 'Please upload a clear image of your satbara document.');
            return;
        }

        // Handle image upload logic here

        navigation.navigate('FarmerDashboard'); // Navigate to the FarmerDashboard or next step
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Your Satbara Document</Text>
            <Text style={styles.description}>Please upload a clear image of your satbara document.</Text>

            <TouchableOpacity onPress={pickImage} style={styles.button}>
                <Text style={styles.buttonText}>Pick an Image</Text>
            </TouchableOpacity>

            {image && <Image source={{ uri: image }} style={styles.image} />}

            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center',
        color: '#2e7d32',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#43a047',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        width: width * 0.8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
        marginBottom: 20,
        borderRadius: 10,
    },
    submitButton: {
        backgroundColor: '#43a047',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: width * 0.8,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});
