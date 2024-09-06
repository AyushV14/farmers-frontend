import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#4CAF50',
  secondary: '#C8E6C9',
  light: '#F5F5F5',
  grey: '#908e8c',
};

export default function FarmerDashboard() {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hardcoded data for crops
    const hardcodedData = [
      { commodity: 'Wheat', modal_price: '2500', image: require('../../assets/food/grains.png') },
      { commodity: 'Rice', modal_price: '3500', image: require('../../assets/food/apple.jpg') },
      { commodity: 'Maize', modal_price: '1800', image: require('../../assets/food/apple.jpg') },
      { commodity: 'Barley', modal_price: '1500', image: require('../../assets/food/apple.jpg') },
      { commodity: 'Sugarcane', modal_price: '2800', image: require('../../assets/food/apple.jpg') },
    ];

    // Set the hardcoded data and stop loading
    setMarketData(hardcodedData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={style.loader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={style.header}>
          <View>
            <Text style={style.greetingText}>Hello,</Text>
            <Text style={style.greetingTextBold}>Xyz</Text>
          </View>
          <Image
            source={require('../../assets/images/person.png')}
            style={style.profileImage}
          />
        </View>

        {/* Market Data Section */}
        <View style={style.marketDataContainer}>
          <Text style={style.marketDataTitle}>Market Trends</Text>
          {marketData && marketData.length > 0 ? (
            marketData.map((item, index) => (
              <View key={index} style={style.marketItem}>
                <Image source={item.image} style={style.cropImage} />
                <View style={style.marketTextContainer}>
                  <Text style={style.cropText}>{item.commodity}</Text>
                  <Text style={style.priceText}>₹{item.modal_price} / Quintal</Text>
                </View>
              </View>
            ))
          ) : (
            <Text>No market data available</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  greetingText: {
    fontSize: 24,
    color: COLORS.dark,
  },
  greetingTextBold: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
    color: COLORS.dark,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  marketDataContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  marketDataTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary,
  },
  marketItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.light,
    elevation: 2, // For subtle shadow effect
  },
  cropImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  marketTextContainer: {
    flex: 1,
  },
  cropText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  priceText: {
    fontSize: 16,
    color: COLORS.primary,
    marginTop: 5,
  },
});
