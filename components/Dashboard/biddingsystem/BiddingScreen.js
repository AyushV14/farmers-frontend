import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';

// Dummy Data (Replace with actual API call)
const dummyData = {
  "message": "Bid found successfully",
  "result": [
    {
      "id": "30295051-ed61-4102-8afe-25a2c63c3579",
      "customerId": "92171428-cd97-45e1-a3e7-2eaefd6cdecd",
      "farmerId": "fd748168-6ee6-4e98-8240-6e3403cfacd3",
      "productId": "fd744368-6ee6-4e98-8240-6e3403cfacd3",
      "bidStatus": "PENDING",
      "requiredQuantity": 60,
      "offerPrice": 909,
      "customer": {
        "customerId": "92171428-cd97-45e1-a3e7-2eaefd6cdecd",
        "name": "Bob Smith",
        "phone": "0987654321",
        "email": "bob.smith@example.com",
        "address": "123 Elm Street",
        "password": "hashedpassword456",
        "profileImage": null
      },
      "farmer": {
        "farmerId": "fd748168-6ee6-4e98-8240-6e3403cfacd3",
        "name": "chicken laal",
        "phone": "098765351",
        "email": "chicke.laal@example.com",
        "address": "123 Ess",
        "password": "hashedpassword456",
        "profileImage": null
      },
      "product": {
        "productId": "fd744368-6ee6-4e98-8240-6e3403cfacd3",
        "customProductName": "fresh tomatoes",
        "price": 50,
        "description": "very fresh",
        "currentQuantity": 50,
        "productName": "tomatoes\n",
        "productImage": "../../../assets/images/farmer.jpg",
        "farmerId": "fd748168-6ee6-4e98-8240-6e3403cfacd3",
        "category": "VEGETABLES",
        "ratingCount": 0

      }
    }
  ]
};

const BiddingScreen = () => {
  const [bids, setBids] = useState([]);

  // Simulating a data fetch
  useEffect(() => {
    // Replace this with an actual API call
    setBids(dummyData.result);
  }, []);

  const renderBidItem = ({ item }) => (
    <View style={styles.bidItem}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.product.customProductName}</Text>
          <Text style={styles.text}>Quantity Required: {item.requiredQuantity}</Text>
          <Text style={styles.text}>Offer Price: ${item.offerPrice}</Text>
          <Text style={styles.text}>Customer: {item.customer.name}</Text>
          <Text style={styles.text}>Description: {item.product.description}</Text>
        </View>
        <Image
          source={item.customer.profileImage ? { uri: item.product.productImage } : require('../../../assets/icon.png')}
          style={styles.profileImage}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bidding System</Text>
      <FlatList
        data={bids}
        renderItem={renderBidItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 15,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  bidItem: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default BiddingScreen;
