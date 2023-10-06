import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens';

export type RootStackParams = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator id="HomeStackNavigator" initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
