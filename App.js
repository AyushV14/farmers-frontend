import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './components/Intro/IntroScreen';
import RoleSelection from './components/Intro/RoleSelection';
import ConsumerLoginScreen from './components/Login-signup/Login/ConsumerLoginScreen';
import FarmerLoginScreen from './components/Login-signup/Login/FarmerLoginScreen';
import ConsumerSignIn from './components/Login-signup/Sign-in/ConsumerSign-in';
import FarmerSignIn from './components/Login-signup/Sign-in/FarmerSign-in';
import BottomNavigator from './components/Dashboard/bottomnav/BottomNavigator'; // For consumers
import BottomNavFarmer from './components/Dashboard/bottomnav/BottomNavFarmer'; // For farmers
import CreateOTPVerificationScreen from './components/Login-signup/Otp/CreateOTPVerificationScreen';

import Satbara from './components/Login-signup/7-12/satbara'

import BiddingScreen from './components/Dashboard/biddingsystem/BiddingScreen';
import AddProductScreen from './components/Dashboard/FarmerAddProduct/AddProductScreen'; // Add Product Screen
import OrderReceivedScreen from './components/Dashboard/FarmerOrders/OrderReceivedScreen'; // Order Received Screen

const Stack = createStackNavigator();

export default function App() {
  // State to hold user data
  const [userData, setUserData] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        {/* Intro Screens */}
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

        {/* Login and Sign-In Screens */}
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
          name="FarmerSignIn"
          component={FarmerSignIn}
          options={{ headerShown: false }}
        />

        {/* Farmer and Consumer Dashboards */}
        <Stack.Screen
          name="FarmerDashboard"
          component={BottomNavFarmer} // Use farmer's bottom navigator
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="satbara"
          options={{ headerShown: false }}
          component={Satbara}
        />
        <Stack.Screen
          name="ConsumerDashboard"
          options={{ headerShown: false }}
        >
          {/* Passing user data to consumer dashboard */}
          {props => <BottomNavigator {...props} userData={userData} />}
        </Stack.Screen>

        {/* OTP Verification */}
        <Stack.Screen
          name="CreateOTPVerificationScreen"
          options={{ headerShown: false }}
        >
          {props => (
            <CreateOTPVerificationScreen {...props} setUserData={setUserData} />
          )}
        </Stack.Screen>

        {/* Additional Screens */}
        <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderReceived"
          component={OrderReceivedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BiddingScreen"
          component={BiddingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
