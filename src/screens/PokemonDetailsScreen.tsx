import { RouteProp, useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationIdentifier, RootStackParams } from '../navigators';
import { getPokemons } from '../models/Pokemon';
import {
  formatPokemonHeight,
  formatPokemonId,
  formatPokemonWeight,
} from '../utils/utils';
import { PokemonTypeItem } from '../components/PokemonTypeItem';

const PokemonExtraDetails = ({
  height,
  weight,
  types,
}: {
  height: number;
  weight: number;
  types: string[];
}) => {
  return (
    <View style={styles.extraDetailsContainer}>
      <View style={styles.extraDetailsColumn}>
        <Text style={styles.extraDetailsTitle}>Height</Text>
        <Text style={styles.extraDetailsDescription}>
          {formatPokemonHeight(height)}
        </Text>
      </View>

      <View style={styles.verticalSeparator} />

      <View style={styles.extraDetailsColumn}>
        <Text style={styles.extraDetailsTitle}>Weight</Text>
        <Text style={styles.extraDetailsDescription}>
          {formatPokemonWeight(weight)}
        </Text>
      </View>

      <View style={styles.verticalSeparator} />

      <View style={styles.extraDetailsColumn}>
        <Text style={styles.extraDetailsTitle}>Types</Text>
        <View style={styles.verticalSpacer} />
        <PokemonTypeItem name={types[0]} />
        <View style={styles.verticalSpacer} />
        {types[1] && <PokemonTypeItem name={types[1]} />}
        <View style={styles.verticalSpacer} />
      </View>
    </View>
  );
};

export const PokemonDetailsScreen = () => {
  const route =
    useRoute<
      RouteProp<RootStackParams, NavigationIdentifier.PokemonDetailsScreen>
    >();
  const pokemonId = route.params.pokemonId;
  const pokemon = getPokemons()[pokemonId - 1];

  return (
    <View style={styles.container}>
      <View style={styles.pokemonImageContainer}>
        <Image style={styles.pokemonImage} source={{ uri: pokemon.imageURL }} />
      </View>
      <Text style={styles.pokemonName}>{pokemon.name}</Text>
      <Text style={styles.pokemonId}>{formatPokemonId(pokemon.id)}</Text>
      <View style={styles.extraDetailsWrapper}>
        <PokemonExtraDetails
          height={pokemon.height}
          weight={pokemon.weight}
          types={pokemon.types.map((type) => type.name)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  pokemonImageContainer: {
    height: 194,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  pokemonImage: {
    width: 160,
    height: 160,
  },
  pokemonName: {
    marginVertical: 16,
    fontSize: 24,
  },
  pokemonId: {
    fontSize: 16,
  },
  extraDetailsWrapper: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  extraDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  extraDetailsColumn: {
    justifyContent: 'flex-start',
    width: 90,
  },
  extraDetailsTitle: {
    marginVertical: 4,
    fontSize: 14,
    color: '#6D6D6D',
  },
  extraDetailsDescription: {
    fontSize: 24,
    marginVertical: 8,
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: '#E8E8E8',
  },
  verticalSpacer: {
    height: 8,
  },
});
