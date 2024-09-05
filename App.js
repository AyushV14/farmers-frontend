import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './components/Intro/IntroScreen';
import RoleSelection from './components/Intro/RoleSelection';
import ConsumerLoginScreen from './components/Login-signup/Login/ConsumerLoginScreen';
import FarmerLoginScreen from './components/Login-signup/Login/FarmerLoginScreen';
import ConsumerSignIn from './components/Login-signup/Sign-in/ConsumerSign-in';
import FarmerDashboard from './components/Dashboard/FarmerDashboard';
import BottomNavigator from './components/Dashboard/bottomnav/BottomNavigator'; // Import BottomNavigator
import BottomNavFarmer from './components/Dashboard/bottomnav/BottomNavFarmer'; // Import BottomNavigator

const Stack = createStackNavigator();

export default function App() {
  // Shared state for products

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoleSelection"
          component={RoleSelection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FarmerLogin"
          component={FarmerLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConsumerLogin"
          component={ConsumerLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConsumerSignIn"
          component={ConsumerSignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FarmerDashboard"
          options={{ headerShown: false }}
          component={BottomNavFarmer}
        />
          
        <Stack.Screen
          name="ConsumerDashboard"
          options={{ headerShown: false }}
          component={BottomNavigator}
        />
            
      </Stack.Navigator>
    </NavigationContainer>
  );
}
