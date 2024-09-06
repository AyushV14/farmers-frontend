import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const OrderReceivedScreen = () => {
  // Fake order data
  const orders = [
    { customerName: 'Ravi Patel', grain: 'Wheat', quantity: '20 kg' },
    { customerName: 'Anita Sharma', grain: 'Wheat', quantity: '50 kg' },
    { customerName: 'Rajesh Kumar', grain: 'Wheat', quantity: '30 kg' },
    { customerName: 'Neha Verma', grain: 'Wheat', quantity: '15 kg' },
    { customerName: 'Suresh Gupta', grain: 'Wheat', quantity: '40 kg' },
    { customerName: 'Pooja Iyer', grain: 'Wheat', quantity: '25 kg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Orders Received</Text>
      <ScrollView>
        {orders.map((order, index) => (
          <View key={index} style={styles.orderItem}>
            <View style={styles.orderHeader}>
              <Text style={styles.customerName}>{order.customerName}</Text>
              <Text style={styles.quantity}>{order.quantity}</Text>
            </View>
            <Text style={styles.orderDetails}>Ordered: {order.grain}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
    textAlign: 'center',
  },
  orderItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
  },
  orderDetails: {
    fontSize: 16,
    color: '#555',
  },
});

export default OrderReceivedScreen;
