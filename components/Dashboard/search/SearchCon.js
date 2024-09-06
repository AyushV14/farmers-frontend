// search/searchcon.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

// Dummy data with price and farmers
const DATA = [
    { name: 'Apple', price: 120, farmers: ['Farmer Ayush', 'Farmer Rishi'] },
    { name: 'Banana', price: 40, farmers: ['Farmer Raj'] },
    { name: 'Cherry', price: 150, farmers: ['Farmer Ayush'] },
    { name: 'Date', price: 200, farmers: ['Farmer Raj', 'Farmer Rohit'] },
    { name: 'Grape', price: 80, farmers: ['Farmer Bhushan'] },
    { name: 'Kiwi', price: 100, farmers: ['Farmer Raj'] },
    { name: 'Lemon', price: 60, farmers: ['Farmer Raj'] },
    { name: 'Mango', price: 150, farmers: ['Farmer Rohit', 'Farmer Karmar'] },
    { name: 'Orange', price: 90, farmers: ['Farmer Ayush'] },
    { name: 'Papaya', price: 120, farmers: ['Farmer Rishi'] },
    { name: 'Pineapple', price: 130, farmers: ['Farmer Raj', 'Farmer Bhushan'] },
    { name: 'Strawberry', price: 180, farmers: ['Farmer Raj'] },
    { name: 'Tomato', price: 50, farmers: ['Farmer Raj'] },
    { name: 'Watermelon', price: 70, farmers: ['Farmer Raj'] },
    { name: 'Zucchini', price: 90, farmers: ['Farmer Soham'] },
];

const SearchCon = () => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(DATA);

    const handleSearch = (text) => {
        setQuery(text);
        const filtered = DATA.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search your products here,</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here to search"
                value={query}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>{item.name}</Text>
                        <Text style={styles.itemText}>Price: ₹{item.price}</Text>
                        <Text style={styles.itemText}>Farmers: {item.farmers.join(', ')}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No results found</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        marginTop: 50, // Added margin to avoid collision with the top
    },
    input: {

        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 10, // Added margin to ensure space between title and input
    },
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    itemText: {
        fontSize: 16,
        color: '#555',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
    },
});

export default SearchCon;
