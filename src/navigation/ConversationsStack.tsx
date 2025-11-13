import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import ConversationsScreen from '../screens/ConversationsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ConversationsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Conversations" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Conversations" component={ConversationsScreen} />    
    </Stack.Navigator>
  );
};

export default ConversationsStack;