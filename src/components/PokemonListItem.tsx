import { View, StyleSheet, Image, Text } from 'react-native';
import { Pokemon } from '../models/Pokemon';
import { PokemonTypeItem } from './PokemonTypeItem';

export const PokemonListItem = ({ item }: { item: Pokemon }) => {
  return (
    <View style={styles.mainCardView}>
      <View style={styles.pokemonImageContainer}>
        <Image style={styles.pokemonImage} source={{ uri: item.imageURL }} />
      </View>

      <View style={styles.pokemonDetailsContainer}>
        <Text style={styles.pokemonName}>{item.name}</Text>
        <Text style={styles.pokemonNumber}>
          #{item.id.toString().padStart(4, '0')}
        </Text>
        <PokemonTypeItem name={item.types[0].name} imageURL={''} />
        <View style={styles.separator} />
        {item.types[1] && (
          <PokemonTypeItem name={item.types[1].name} imageURL={''} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    height: 256,
    width: 156,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    shadowColor: '#0000001A',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
    margin: 8,
  },
  pokemonImageContainer: {
    height: '50%',
  },
  pokemonImage: {
    width: 112,
    flex: 1,
  },
  pokemonDetailsContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    height: '50%',
    width: '100%',
    flex: 1,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: '400',
  },
  pokemonNumber: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6D6D6D',
    marginBottom: 16,
  },
  separator: {
    height: 8,
  },
});
