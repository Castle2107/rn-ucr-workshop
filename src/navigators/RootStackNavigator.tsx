import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationIdentifier } from './Identifiers';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabsNavigator, RootTabsParams } from './RootTabsNavigator';

export type RootStackParams = {
  RootTabs: BottomTabNavigationProp<RootTabsParams>;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      id="RootStackNavigator"
      initialRouteName={NavigationIdentifier.RootTabs}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavigationIdentifier.RootTabs}
        component={RootTabsNavigator}
      />
    </Stack.Navigator>
  );
};
