import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView,Image } from 'react-native';
// import Navbar from './Navbar';

export default function FarmerDashboard() {

  const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#4CAF50', 
    secondary: '#C8E6C9', 
    light: '#E5E5E5',
    grey: '#908e8c',
  };



  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 70 }}>
        <View style={style.header}>
         <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Xyz
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 20, color: COLORS.grey}}>
            What do you want to Sell Today?
          </Text>
        </View>
        <Image
          source={require('../../assets/images/person.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
})
