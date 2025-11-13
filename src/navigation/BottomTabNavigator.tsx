import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from './CustomBottomTab';
import DashboardStack from './DashboardStack';
import { Keyboard } from 'react-native';
import InspectionsStack from './InspectionsStack';
import DocumentStack from './DocumentStack';
import ConversationsStack from './ConversationsStack';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const tabScreens = [
    { name: 'DashboardStack' as keyof RootStackParamList, component: DashboardStack },
    { name: 'InspectionsStack' as keyof RootStackParamList, component: InspectionsStack },
    { name: 'DocumentStack' as keyof RootStackParamList, component: DocumentStack },
    { name: 'ConversationsStack' as keyof RootStackParamList, component: ConversationsStack },
  ];

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      tabBar={({ state, navigation: tabNavigatorNavigation }) => {
        const currentRoute = state.routes[state.index];
        // const nestedRouteName = getFocusedRouteNameFromRoute(currentRoute) ?? currentRoute.name;

        // const hideTabBarScreens = [
        //   ScreenName.MealDetailScreen,
        //   ScreenName.GroupChatScreen,
        // ];

        // if (hideTabBarScreens.includes(nestedRouteName) || isKeyboardVisible) {
        //   return null;
        // }

        return (
          <CustomBottomTab
            activeIndex={state.index}
            onTabPress={index => {
              const route = state.routes[index];
              tabNavigatorNavigation.navigate(route.name, route.params);
              tabNavigatorNavigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
            }}
          />
        )
      }
      }
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
     {tabScreens.map((screen, index) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))} 
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;