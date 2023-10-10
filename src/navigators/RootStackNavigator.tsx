import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens';
import { PokemonDetailsScreen } from '../screens/PokemonDetailsScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonDetailsScreen: { pokemonId: number };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export enum NavigationIdentifier {
  HomeScreen = 'HomeScreen',
  PokemonDetailsScreen = 'PokemonDetailsScreen',
}

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator id="HomeStackNavigator" initialRouteName="HomeScreen">
      <Stack.Screen
        name={NavigationIdentifier.HomeScreen}
        options={{ title: 'Pokédex', headerTitleAlign: 'left' }}
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
