import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../types/navigation';
import InspectionsScreen from '../screens/InspectionsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const InspectionsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Inspections" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inspections" component={InspectionsScreen} />    
    </Stack.Navigator>
  )
}

export default InspectionsStack;