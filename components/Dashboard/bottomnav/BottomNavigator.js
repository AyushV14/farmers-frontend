import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView, TextInput, Alert } from 'react-native';

const WalletScreen = () => {
  const [balance, setBalance] = useState(500); // Initial balance for demonstration
  const [transactions, setTransactions] = useState([
    { id: '1', type: 'Add', amount: 100, date: '2024-09-01' },
    { id: '2', type: 'Send', amount: 50, date: '2024-09-02' },
  ]);
  const [amount, setAmount] = useState(''); // Amount to add/send
  const [error, setError] = useState(''); // Error message

  const handleAddMoney = () => {
    const amountToAdd = parseFloat(amount);
    if (isNaN(amountToAdd) || amountToAdd <= 0) {
      setError('Please enter a valid amount to add.');
      return;
    }
    setBalance(balance + amountToAdd);
    setTransactions([
      ...transactions,
      { id: Math.random().toString(), type: 'Add', amount: amountToAdd, date: new Date().toLocaleDateString() },
    ]);
    setAmount('');
    setError('');
  };

  const handleSendMoney = () => {
    const amountToSend = parseFloat(amount);
    if (isNaN(amountToSend) || amountToSend <= 0) {
      setError('Please enter a valid amount to send.');
      return;
    }
    if (balance - amountToSend < 0) {
      Alert.alert('Insufficient Balance', 'You cannot send more money than your available balance.');
      return;
    }
    setBalance(balance - amountToSend);
    setTransactions([
      ...transactions,
      { id: Math.random().toString(), type: 'Send', amount: amountToSend, date: new Date().toLocaleDateString() },
    ]);
    setAmount('');
    setError('');
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>
        {item.type} ₹{item.amount} on {item.date}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Wallet</Text>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance: ₹{balance}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="Add Money" onPress={handleAddMoney} color="#4CAF50" />
        </View>
        <View style={styles.button}>
          <Button title="Send Money" onPress={handleSendMoney} color="#FF5722" />
        </View>
      </View>

      <Text style={styles.transactionHeader}>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        style={styles.transactionList}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  balanceContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  transactionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  transactionList: {
    marginTop: 10,
  },
  transactionItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default WalletScreen;
