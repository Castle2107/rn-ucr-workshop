import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { PokemonListItem } from '../components/PokemonListItem';
import { Pokemon, getPokemons } from '../models/Pokemon';

const renderPokemon = ({ item }: { item: Pokemon }) => {
  return PokemonListItem({ item: item });
};

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.pokemonList}
        data={getPokemons()}
        renderItem={renderPokemon}
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
    backgroundColor: '#FFFFFF',
  },
  pokemonList: {
    justifyContent: 'space-between',
  },
});
