import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigator';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { width: '85%' },
        headerShown: false,
        drawerType: 'front',
      }}
      initialRouteName={'BottomTabNavigator'}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
      />
      {/* <Drawer.Screen name={ScreenName.GroupStack} component={GroupStack} />
      <Drawer.Screen name={ScreenName.ManageProfileScreen} component={ManageProfileScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;