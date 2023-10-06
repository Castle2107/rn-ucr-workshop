import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { PokemonListItem } from '../components/PokemonListItem';
import { Pokemons } from '../models/Pokemon';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.pokemonList}
        data={Pokemons}
        renderItem={PokemonListItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonList: {
    justifyContent: 'space-between',
  },
});
