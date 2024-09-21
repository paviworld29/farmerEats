import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './SRC/Screens/Onboarding';
import LoginScreen from './SRC/Screens/AuthScreens/LoginScreen';
import ForgetScreen from './SRC/Screens/AuthScreens/ForgetScreen';
import ResetPasswordScreen from './SRC/Screens/AuthScreens/ResetPasswordScreen';
import OtpScreen from './SRC/Screens/AuthScreens/OtpScreen';
import SignupScreen from './SRC/Screens/AuthScreens/SignupScreen';
import FarmInfoScreen from './SRC/Screens/AuthScreens/FarmInfoScreen';
import VerificationScreen from './SRC/Screens/AuthScreens/VerificationScreen';
import ConfirmationScreen from './SRC/Screens/AuthScreens/ConfirmationScreen';
import BussinessHourScreen from './SRC/Screens/AuthScreens/BussinessHourScreen';
import HomeScreen from './SRC/Screens/HomeScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="walkthrough"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="FarmInfoScreen" component={FarmInfoScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="BussinessHourScreen" component={BussinessHourScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
