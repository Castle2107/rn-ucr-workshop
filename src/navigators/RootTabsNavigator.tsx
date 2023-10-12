import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeStackNavigator, HomeStackParams } from './HomeStackNavigator';
import { SettingsScreen } from '../screens';
import { Platform } from 'react-native';

export type RootTabsParams = {
  Home: NavigatorScreenParams<HomeStackParams>;
  Counter: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParams>();

export const RootTabsNavigator = () => {
  return (
    <Tab.Navigator
      id="RootTabNavigator"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { display: 'none' },
        tabBarLabelStyle: { fontSize: 16 },
        tabBarItemStyle: { paddingBottom: Platform.OS === 'android' ? 10 : 0 },
      }}>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="Settings"
        options={{ headerShown: false, title: 'Settings' }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
