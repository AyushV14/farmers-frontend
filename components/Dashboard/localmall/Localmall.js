import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';

// Dummy data for farmers
const farmers = [
    { id: '1', name: 'Farmer Bhushan', product: 'Apples', price: '₹250/ per Kg' },
    { id: '2', name: 'Farmer Ayush', product: 'Carrots', price: '₹170/ per Kg' },
    { id: '3', name: 'Farmer Raj', product: 'Tomatoes', price: '₹90/ per Kg' },
    { id: '4', name: 'Farmer Rohit', product: 'Lettuce', price: '₹90/ per Kg' },
    { id: '5', name: 'Farmer Rishi', product: 'Potatoes', price: '₹100/ per Kg' },
];

// Farmer item component
const FarmerItem = ({ name, product, price }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemProduct}>{product}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
    </View>
);

// Localmall component
export default function Localmall() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Todays Market</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Farmers and Their Products</Text>
                    <FlatList
                        data={farmers}
                        renderItem={({ item }) => (
                            <FarmerItem
                                name={item.name}
                                product={item.product}
                                price={item.price}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// Define your styles
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Light grey background
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#4CAF50', // Darker green color
        paddingVertical: 30, // Increased vertical padding for better spacing
        paddingHorizontal: 10, // Increased horizontal padding for more space
        alignItems: 'center',
        borderBottomWidth: 2, // Thicker bottom border
        borderBottomColor: '#4CAF50', // Darker border color
        elevation: 5, // Increased shadow for more depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    headerText: {
        fontSize: 28, // Larger font size for better visibility
        color: '#fff',
        fontWeight: 'semi-bold',
        letterSpacing: 1.5, // Slight letter spacing for a cleaner look
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Darker color for better readability
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 15,
        borderRadius: 10, // More rounded corners
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    itemProduct: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: '#2c6e49', // Matching the header color for price
    },
});
