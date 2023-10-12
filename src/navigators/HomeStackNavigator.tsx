import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, PokemonDetailsScreen } from '../screens';
import { NavigationIdentifier } from './Identifiers';

export type HomeStackParams = {
  HomeScreen: undefined;
  PokemonDetailsScreen: { pokemonId: number };
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      id="HomeStackNavigator"
      initialRouteName={NavigationIdentifier.HomeScreen}>
      <Stack.Screen
        name={NavigationIdentifier.HomeScreen}
        options={{ title: 'Home' }}
        component={HomeScreen}
      />
      <Stack.Screen
        name={NavigationIdentifier.PokemonDetailsScreen}
        options={{ title: 'Pokemon Details' }}
        component={PokemonDetailsScreen}
      />
    </Stack.Navigator>
  );
};
