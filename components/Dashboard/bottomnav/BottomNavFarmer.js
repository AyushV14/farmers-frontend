import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import FarmerDashboard from '../FarmerDashboard';
import BiddingScreen from '../biddingsystem/BiddingScreen';
import AddProductScreen from '../FarmerAddProduct/AddProductScreen'; // Assuming you have an Add Product screen
import OrderReceivedScreen from '../FarmerOrders/OrderReceivedScreen'; // Assuming you have an Order Received screen

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#4CAF50',
  secondary: '#C8E6C9',
  light: '#E5E5E5',
  grey: '#908e8c',
};

const Tab = createBottomTabNavigator();

const BottomNavFarmer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 10,
        },
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Icon name="home-filled" color={color} size={size} />;
            case 'BiddingSystem':
              return <Icon name="gavel" color={color} size={size} />;
            case 'AddProduct':
              return <Icon name="add-box" color={color} size={size} />;
            case 'OrderReceived':
              return <Icon name="receipt" color={color} size={size} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={FarmerDashboard} />
      <Tab.Screen name="BiddingSystem" component={BiddingScreen} />
      <Tab.Screen name="AddProduct" component={AddProductScreen} />
      <Tab.Screen name="OrderReceived" component={OrderReceivedScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavFarmer;
