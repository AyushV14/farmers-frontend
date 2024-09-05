import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const OrderReceivedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Orders Received</Text>
      <Text style={styles.message}>You have received new orders. Check your order list for details.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5E5E5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
});

export default OrderReceivedScreen;
