import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParamList>();

const HomeScreen = () => <View style={{flex:1, backgroundColor: 'red'}} />;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
      />

    </Tab.Navigator>

  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})