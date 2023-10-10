import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { PokemonListItem } from '../components/PokemonListItem';
import { Pokemon, getPokemons } from '../models/Pokemon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationIdentifier, RootStackParams } from '../navigators';

const renderPokemon = ({
  item,
  callback,
}: {
  item: Pokemon;
  callback: (pokemonId: number) => void;
}) => PokemonListItem({ item: item, callback: callback });

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [searchText, onChangeSearchText] = useState('');

  const goToPokemonDetails = (pokemonId: number) => {
    navigation.navigate({
      name: NavigationIdentifier.PokemonDetailsScreen,
      params: {
        pokemonId: pokemonId,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeSearchText}
          value={searchText}
          placeholder={'Search by name or #'}
        />
      </View>
      <FlatList
        columnWrapperStyle={styles.pokemonList}
        data={getPokemons()}
        renderItem={({ item }) =>
          renderPokemon({ item: item, callback: goToPokemonDetails })
        }
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
  textInputContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#A6A6A6',
    marginVertical: 16,
    marginHorizontal: 24,
    flex: 1,
  },
});
