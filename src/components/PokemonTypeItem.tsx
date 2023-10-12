import { View, Image, Text, StyleSheet } from 'react-native';
import { PokemonTypeIcon } from '../models/Pokemon';
import { FC } from 'react';

interface PokemonTypeItemProps {
  name: string;
}

export const PokemonTypeItem: FC<PokemonTypeItemProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.typeIcon} source={PokemonTypeIcon[name]} />
      <Text style={styles.typeTitle}>{name}</Text>
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
    textTransform: 'capitalize',
  },
});
