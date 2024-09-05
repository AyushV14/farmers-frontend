import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './components/Intro/IntroScreen';
import RoleSelection from './components/Intro/RoleSelection';
import ConsumerLoginScreen from './components/Login-signup/Login/ConsumerLoginScreen';
import FarmerLoginScreen from './components/Login-signup/Login/FarmerLoginScreen';
import ConsumerSignIn from './components/Login-signup/Sign-in/ConsumerSign-in';
import FarmerSignIn from './components/Login-signup/Sign-in/FarmerSign-in';
import FarmerDashboard from './components/Dashboard/FarmerDashboard';
import BottomNavigator from './components/Dashboard/bottomnav/BottomNavigator';
import BottomNavFarmer from './components/Dashboard/bottomnav/BottomNavFarmer';
import CreateOTPVerificationScreen from './components/Login-signup/Otp/CreateOTPVerificationScreen';
import Satbara from './components/Login-signup/7-12/satbara'

const Stack = createStackNavigator();

export default function App() {
  // State to hold user data
  const [userData, setUserData] = useState(null);

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
          name="FarmerSignIn"
          component={FarmerSignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FarmerDashboard"
          options={{ headerShown: false }}
          component={BottomNavFarmer}
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
          {props => <BottomNavigator {...props} userData={userData} />}
        </Stack.Screen>
        <Stack.Screen
          name="CreateOTPVerificationScreen"
          options={{ headerShown: false }}
        >
          {props => (
            <CreateOTPVerificationScreen {...props} setUserData={setUserData} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
