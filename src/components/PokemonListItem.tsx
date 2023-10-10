import { View, StyleSheet, Image, Text } from 'react-native';
import { Pokemon } from '../models/Pokemon';
import { PokemonTypeItem } from './PokemonTypeItem';

function formatPokemonId(id: number) {
  return '#' + id.toString().padStart(4, '0');
}

export const PokemonListItem = ({ item }: { item: Pokemon }) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <View style={styles.pokemonImageContainer}>
          <Image style={styles.pokemonImage} source={{ uri: item.imageURL }} />
        </View>

        <View style={styles.pokemonDetailsContainer}>
          <Text style={styles.pokemonName}>{item.name}</Text>
          <Text style={styles.pokemonNumber}>{formatPokemonId(item.id)}</Text>
          <PokemonTypeItem name={item.types[0].name} imageURL={''} />
          <View style={styles.separator} />
          {item.types[1] && (
            <PokemonTypeItem name={item.types[1].name} imageURL={''} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: 256,
    width: 156,
    borderRadius: 8,
    shadowColor: '#0000002A',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
    margin: 8,
  },
  cardContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  pokemonImageContainer: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
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
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: '400',
  },
  pokemonNumber: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6D6D6D',
    marginBottom: 24,
  },
  separator: {
    height: 8,
  },
});
