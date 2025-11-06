import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import LaunchScreen from '../screens/LaunchScreen';
import SigninScreen from '../screens/SigninScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';


const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
  <AuthStack.Navigator initialRouteName="LaunchScreen" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="LaunchScreen" component={LaunchScreen} />    
    <AuthStack.Screen name="Signin" component={SigninScreen} />    
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    <AuthStack.Screen name="CreateAccount" component={CreateAccountScreen} />
  </AuthStack.Navigator>);
};

export default AuthNavigator;
