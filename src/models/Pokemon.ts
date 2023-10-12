import { ImageURISource } from 'react-native';

import pokemonData from '../../raw/pokemon-list-sample.json';

export interface PokemonType {
  name: string;
}

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  imageURL: string;
  height: number;
  weight: number;
}

export function getPokemonList(): Pokemon[] {
  return pokemonData as Pokemon[];
}

const PokemonTypeAssets: { [key: string]: ImageURISource } = {
  bug: require('../assets/PokemonTypeIconBug.png'),
  dark: require('../assets/PokemonTypeIconDark.png'),
  dragon: require('../assets/PokemonTypeIconDragon.png'),
  electric: require('../assets/PokemonTypeIconElectric.png'),
  fairy: require('../assets/PokemonTypeIconFairy.png'),
  fighting: require('../assets/PokemonTypeIconFighting.png'),
  fire: require('../assets/PokemonTypeIconFire.png'),
  flying: require('../assets/PokemonTypeIconFlying.png'),
  ghost: require('../assets/PokemonTypeIconGhost.png'),
  grass: require('../assets/PokemonTypeIconGrass.png'),
  ground: require('../assets/PokemonTypeIconGround.png'),
  ice: require('../assets/PokemonTypeIconIce.png'),
  normal: require('../assets/PokemonTypeIconNormal.png'),
  poison: require('../assets/PokemonTypeIconPoison.png'),
  psychic: require('../assets/PokemonTypeIconPsychic.png'),
  rock: require('../assets/PokemonTypeIconRock.png'),
  steel: require('../assets/PokemonTypeIconSteel.png'),
  water: require('../assets/PokemonTypeIconWater.png'),
};

export const PokemonTypeIcon: { [key: string]: ImageURISource } = {
  bug: PokemonTypeAssets.bug,
  dark: PokemonTypeAssets.dark,
  dragon: PokemonTypeAssets.dragon,
  electric: PokemonTypeAssets.electric,
  fairy: PokemonTypeAssets.fairy,
  fighting: PokemonTypeAssets.fighting,
  fire: PokemonTypeAssets.fire,
  flying: PokemonTypeAssets.flying,
  ghost: PokemonTypeAssets.ghost,
  grass: PokemonTypeAssets.grass,
  ground: PokemonTypeAssets.ground,
  ice: PokemonTypeAssets.ice,
  normal: PokemonTypeAssets.normal,
  poison: PokemonTypeAssets.poison,
  psychic: PokemonTypeAssets.psychic,
  rock: PokemonTypeAssets.rock,
  steel: PokemonTypeAssets.steel,
  water: PokemonTypeAssets.water,
};
