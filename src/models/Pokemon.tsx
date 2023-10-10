import pokemonData from '../../raw/pokemon-list-sample.json';

export type PokemonType = {
  name: string;
};

export type Pokemon = {
  name: string;
  id: number;
  types: PokemonType[];
  imageURL: string;
};

export function getPokemons(): Pokemon[] {
  console.log(pokemonData);
  return pokemonData as Pokemon[];
}
