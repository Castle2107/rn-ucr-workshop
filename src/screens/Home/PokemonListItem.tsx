import { FC } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import { formatPokemonId } from '../../utils/pokemonUtils';

interface PokemonListItemProps {
  name: string;
  index: number;
  onPressed: () => void;
}

export const PokemonListItem: FC<PokemonListItemProps> = ({
  name,
  index,
  onPressed,
}) => {
  // RENDERS
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPressed}>
        <View style={styles.pokemonImageContainer}>
          <Image
            style={styles.pokemonImage}
            source={require('../../assets/PokemonTypeIconNormal.png')}
          />
        </View>
        <View style={styles.pokemonDetailsContainer}>
          <Text style={styles.pokemonName}>{name}</Text>
          <Text style={styles.pokemonNumber}>{formatPokemonId(index + 1)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 156,
    borderColor: 'black',
    borderWidth: 0.3,
  },
  pokemonImageContainer: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  pokemonImage: {
    width: 50,
    height: 50,
  },
  pokemonDetailsContainer: {
    height: '50%',
    width: '100%',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  pokemonNumber: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6D6D6D',
    marginBottom: 24,
  },
});
