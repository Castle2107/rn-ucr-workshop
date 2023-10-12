import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { PokemonListItem } from './PokemonListItem';
import { HomeStackParams } from '../../navigators';
import { NavigationIdentifier } from '../../navigators/Identifiers';
import { PokemonServiceImpl } from '../../network/PokemonService';
import { PokemonLink } from '../../models/PokemonListResponse';

export const HomeScreen = () => {
  // HOOKS
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  // LOCAL STATE
  const [searchText, setSearchText] = useState('');
  const [pokemonList, setPokemonList] = useState<PokemonLink[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] =
    useState<PokemonLink[]>(pokemonList);

  // FUNCTIONS
  const onChangeSearchText = (text: string) => {
    setSearchText(text);
    const newPokemonList = pokemonList.filter((pokemon) => {
      return pokemon.name.includes(text.toLowerCase());
    });
    setFilteredPokemonList(newPokemonList);
  };

  const navigateToPokemonDetails = (pokemonId: number) => {
    navigation.navigate({
      name: NavigationIdentifier.PokemonDetailsScreen,
      params: {
        pokemonId,
      },
    });
  };

  // EFFECTS
  useEffect(() => {
    const service = new PokemonServiceImpl();

    service
      .getPokemonList()
      .then((response) => {
        setPokemonList(response);
        setFilteredPokemonList(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setPokemonList]);

  // RENDERS
  const renderPokemon = ({
    item,
    index,
  }: {
    item: PokemonLink;
    index: number;
  }) => {
    return (
      <PokemonListItem
        name={item.name}
        index={index}
        onPressed={() => {
          navigateToPokemonDetails(index);
        }}
      />
    );
  };

  const renderRowSpacer = () => {
    return <View style={styles.rowSpacer} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeSearchText}
          value={searchText}
          placeholder={'Search by name or #'}
        />
      </View>
      <FlatList
        data={filteredPokemonList}
        keyExtractor={(item) => item.url}
        renderItem={renderPokemon}
        numColumns={2}
        ItemSeparatorComponent={renderRowSpacer}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 20,
  },
  searchInputContainer: {
    marginBottom: 24,
  },
  searchInput: {
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#A6A6A6',
    textTransform: 'lowercase',
  },
  columnWrapperStyle: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  rowSpacer: {
    height: 16,
  },
});
