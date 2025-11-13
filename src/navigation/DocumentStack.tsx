import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import DocumentScreen from '../screens/DocumentScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const DocumentStack = () => {
  return (
    <Stack.Navigator initialRouteName="Document" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Document" component={DocumentScreen} />    
    </Stack.Navigator>
  );
};

export default DocumentStack;