import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { navigationRef } from './NavigationService';
import AuthNavigator from './AuthNavigator';
import { AlertModalProvider } from '../components/AlertModalProvider';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <AlertModalProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="AuthStack" component={AuthNavigator} />
          <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AlertModalProvider>
  );
};

export default AppNavigator;
