import { View, Image, Text, StyleSheet } from 'react-native';
import { PokemonTypeAssets, PokemonTypeIcon } from '../models/Pokemon';

function capitalizeFirstLetter(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}

export const PokemonTypeItem = ({ name }: { name: string }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.typeIcon} source={PokemonTypeIcon[name]} />
      <Text style={styles.typeTitle}>{capitalizeFirstLetter(name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  typeIcon: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  typeTitle: {
    marginTop: 2,
    fontSize: 12,
    marginStart: 8,
  },
});
