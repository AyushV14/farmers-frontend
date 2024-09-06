import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const WalletScreen = () => {
  const [balance, setBalance] = useState(5000); // Sample balance
  const [transactions, setTransactions] = useState([
    { id: '1', type: 'Deposit', amount: 2000, date: '2024-09-01' },
    { id: '2', type: 'Withdraw', amount: 1000, date: '2024-09-03' },
    { id: '3', type: 'Deposit', amount: 1500, date: '2024-09-05' },
  ]); // Sample transactions

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>{item.type}</Text>
      <Text style={styles.transactionAmount}>
        {item.type === 'Deposit' ? '+' : '-'}₹{item.amount}
      </Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Wallet</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Current Balance:</Text>
        <Text style={styles.balanceAmount}>₹{balance}</Text>
      </View>
      <Text style={styles.transactionsHeader}>Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.transactionList}
      />
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  balanceContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 18,
    color: '#333',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  transactionsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionList: {
    paddingBottom: 20,
  },
  transactionItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  transactionDate: {
    fontSize: 14,
    color: '#999',
  },
});

export default WalletScreen;
