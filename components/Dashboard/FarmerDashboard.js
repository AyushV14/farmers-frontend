import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

export default function FarmerDashboard() {
  const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#4CAF50', 
    secondary: '#C8E6C9', 
    light: '#E5E5E5',
    grey: '#908e8c',
  };

  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          'https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=10&filters[State.keyword]=Maharashtra'
        );
        const data = await response.json();
        setMarketData(data.records); // Assuming data.records has the relevant info
        setLoading(false);
      } catch (error) {
        console.error('Error fetching market data', error);
        setLoading(false);
      }
    };

    fetchMarketData();
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
            <View style={{ flexDirection: 'row' }}>
              <Text style={style.greetingText}>Hello,</Text>
              <Text style={style.greetingTextBold}>Xyz</Text>
            </View>
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
                <Text style={style.cropText}>Crop: {item.commodity}</Text>
                <Text style={style.priceText}>Price: ₹{item.modal_price}</Text>
                <Text style={style.marketText}>Market: {item.market}</Text>
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
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  greetingText: {
    fontSize: 28,
    color: '#000',
  },
  greetingTextBold: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  marketDataContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  marketDataTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  marketItem: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
  cropText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
    color: '#4CAF50',
  },
  marketText: {
    fontSize: 16,
    color: '#908e8c',
  },
});
