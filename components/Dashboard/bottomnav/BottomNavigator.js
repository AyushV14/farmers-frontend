import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';
import ConsumerDashboard from '../ConsumerDashboard'; // Import your actual ConsumerDashboard screen
import CartScreen from '../Cart/CartScreen'; // Import your actual CartScreen.js

// Define COLORS directly with green shades
const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#4CAF50', // Changed to green shade
  secondary: '#C8E6C9', // Changed to light green shade
  light: '#E5E5E5',
  grey: '#908e8c',
};

// Placeholder Components for other screens
const PlaceholderScreen = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{title}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide the header for all screens
        tabBarActiveTintColor: COLORS.primary, // Active tint color
        tabBarShowLabel: false, // Hide labels
        tabBarStyle: {
          display: 'flex', // Ensure the tab bar is visible
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 10,
          marginBottom: 0,
        },
        tabBarIcon: ({ color, size }) => {
          // Add logic to render icons based on route
          switch (route.name) {
            case 'Home':
              return <Icon name="home-filled" color={color} size={size}  style={{fontSize:'30px'}}/>;
            case 'LocalMall':
              return <Icon name="local-mall" color={color} size={size}  style={{fontSize:'30px'}}/>;
            case 'Search':
              return (
                <View
                  style={{
                    height: 60,
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.primary,
                    borderWidth: 2,
                    borderRadius: 30,
                    top: -25,
                    elevation: 5,
                  }}
                >
                  <Icon name="search" color={COLORS.primary} size={size} />
                </View>
              );
            case 'Favorite':
              return <Icon name="favorite" color={color} size={size}  style={{fontSize:'30px'}}/>;
            case 'Cart':
              return <Icon name="shopping-cart" color={color} size={size}  style={{fontSize:'30px'}}/>;
            default:
              return null;
          }
        },
      })}
    >
      {/* Navigate to ConsumerDashboard when Home is clicked */}
      <Tab.Screen name="Home" component={ConsumerDashboard} />

      {/* Placeholder Screens */}
      <Tab.Screen name="LocalMall" children={() => <PlaceholderScreen title="Local Mall Screen" />} />
      <Tab.Screen name="Search" children={() => <PlaceholderScreen title="Search Screen" />} />
      <Tab.Screen name="Favorite" children={() => <PlaceholderScreen title="Favorite Screen" />} />

      {/* Navigate to CartScreen.js when Cart is clicked */}
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
